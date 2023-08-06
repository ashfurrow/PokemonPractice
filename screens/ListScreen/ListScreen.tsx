import { useFetch } from "../../hooks/useFetch"
import { ScreenContainer } from "../components/ScreenContainer"
import { type ListResponse } from "./types"
import { ListView } from "./components/ListView"
import { FetchLoadResult } from "../../components/FetchLoadResult"

const LIST_ENDPOINT = "https://pokeapi.co/api/v2/pokemon"

export function ListScreen() {
  const { fetchState } = useFetch<ListResponse>(LIST_ENDPOINT)

  return (
    <FetchLoadResult
      fetchState={fetchState}
      renderResponse={(response) => (
        <ScreenContainer>
          <ListView list={response.results} />
        </ScreenContainer>
      )}
    />
  )
}
