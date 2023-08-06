import { FetchLoadResult } from "./FetchLoadResult"
import { render, screen } from "@testing-library/react-native"
import type { FetchState } from "../hooks/useFetch"

describe(FetchLoadResult, () => {
  it("renders loading state", async () => {
    const mockRenderResponse = jest.fn()
    const loadingFetchState: FetchState<unknown> = {
      type: "loading",
    }

    render(
      <FetchLoadResult
        fetchState={loadingFetchState}
        renderResponse={mockRenderResponse}
      />,
    )

    expect(await screen.findByText("Loading...")).toBeDefined()
    expect(mockRenderResponse).not.toHaveBeenCalled()
  })

  it("renders error state", async () => {
    const mockRenderResponse = jest.fn()
    const mockErrorText = "This is a testing error"
    const errorFetchState: FetchState<unknown> = {
      type: "error",
      error: new Error(mockErrorText),
    }

    render(
      <FetchLoadResult
        fetchState={errorFetchState}
        renderResponse={mockRenderResponse}
      />,
    )

    expect(
      await screen.findByText(`An error occurred: ${mockErrorText}`),
    ).toBeDefined()
    expect(mockRenderResponse).not.toHaveBeenCalled()
  })

  it("renders success state and passes through json", async () => {
    const mockRenderResponse = jest.fn()
    const mockJson = jest.fn()
    const successFetchState: FetchState<unknown> = {
      type: "success",
      json: mockJson,
    }

    render(
      <FetchLoadResult
        fetchState={successFetchState}
        renderResponse={mockRenderResponse}
      />,
    )

    expect(mockRenderResponse).toHaveBeenCalledWith(mockJson)
  })
})
