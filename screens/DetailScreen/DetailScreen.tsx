import React from "react"
import { type NavigationProps } from "../../navigation"
import { useFetch } from "../../hooks/useFetch"
import { ScreenContainer } from "../components/ScreenContainer"
import { DetailView } from "./components/DetailView"
import { type DetailResponse } from "./types"
import { FetchLoadResult } from "../../components/FetchLoadResult"

export function DetailScreen(props: NavigationProps<"Detail">) {
  const { url } = props.route.params
  const { fetchState } = useFetch<DetailResponse>(url)

  return (
    <ScreenContainer>
      <FetchLoadResult
        fetchState={fetchState}
        renderResponse={(response) => <DetailView detail={response} />}
      />
    </ScreenContainer>
  )
}
