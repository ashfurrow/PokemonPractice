import React from "react"
import { useFetch } from "../../hooks/useFetch"
import { ScreenContainer } from "../components/ScreenContainer"
import { type ListResponse } from "./types"
import { ListView } from "./components/ListView"
import { FetchLoadResult } from "../../components/FetchLoadResult"

const LIST_ENDPOINT = "https://pokeapi.co/api/v2/pokemon"

export function ListScreen() {
  const { state } = useFetch<ListResponse>(LIST_ENDPOINT)

  return (
    <FetchLoadResult
      fetchState={state}
      renderResponse={(response) => (
        <ScreenContainer>
          <ListView list={response.results} />
        </ScreenContainer>
      )}
    />
  )
}
