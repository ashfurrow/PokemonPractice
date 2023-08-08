import { renderHook, waitFor } from "@testing-library/react-native"
import { useFetch } from "./useFetch"

const mockFetch = jest.fn()
global.fetch = mockFetch

const TEST_URL = "https://example.com"

beforeEach(() => {
  mockFetch.mockClear()
})

describe(useFetch, () => {
  it("returns loading as the initial state", async () => {
    mockFetch.mockImplementation(async (_url) => {
      return { status: 200, json: new Promise(() => {}) }
    })

    const { result } = renderHook(() => useFetch(TEST_URL))
    await waitFor(async () => {
      expect(result.current.fetchState.type).toEqual("loading")
    })
  })

  it("calls through to fetch the URL", async () => {
    let fetchURL: string | undefined
    mockFetch.mockImplementation(async (url) => {
      fetchURL = url
      return { status: 200, json: Promise.resolve({}) }
    })

    renderHook(() => useFetch(TEST_URL))
    await waitFor(async () => {
      expect(fetchURL).toEqual(TEST_URL)
    })
  })

  it("returns data on success", async () => {
    const mockData = {}
    mockFetch.mockImplementation(async (_url) => {
      return { status: 200, json: Promise.resolve(mockData) }
    })

    renderHook(() => useFetch(TEST_URL))
    await waitFor(async () => {
      expect(mockData).toEqual(mockData)
    })
  })

  it("returns error on non-200 status codes", async () => {
    mockFetch.mockImplementation(async (_url) => {
      return { status: 404 }
    })

    const { result } = renderHook(() => useFetch(TEST_URL))
    await waitFor(async () => {
      expect(result.current.fetchState.type).toEqual("error")
    })
  })

  it("aborts the fetch on unmount", async () => {
    const abortSpy = jest.spyOn(AbortController.prototype, "abort")

    mockFetch.mockImplementation(async (_url) => {
      return { status: 200, json: new Promise(() => {}) }
    })

    const { unmount } = renderHook(() => useFetch(TEST_URL))
    await waitFor(async () => {
      unmount()
      expect(abortSpy).toHaveBeenCalled()
    })
  })
})
