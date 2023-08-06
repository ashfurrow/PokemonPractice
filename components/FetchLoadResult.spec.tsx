// TODO: Disable react/react-in-jsx-scope and remove imports
import React from "react"
import { FetchLoadResult } from "./FetchLoadResult"
import { render, screen, fireEvent } from "@testing-library/react-native"
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

    // expect(screen).toHaveTextContent("Loading...")
    expect(1).toEqual(2)
  })
})
