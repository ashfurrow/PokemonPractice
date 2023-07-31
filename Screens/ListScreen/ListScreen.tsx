import React from "react"
import { Text, StyleSheet } from "react-native"
import { useFetch } from "../../hooks/useFetch"
import { ScreenContainer } from "../components/ScreenContainer"
import { type ListResponse } from "./types"
import { ListView } from "./components/ListView"

const LIST_ENDPOINT = "https://pokeapi.co/api/v2/pokemon"

export function ListScreen() {
  // TODO: Handle pagination
  const { state } = useFetch<ListResponse>(LIST_ENDPOINT)

  if (state.type === "error") {
    return (
      <ScreenContainer>
        <Text style={styles.error}>An error occurred: {state.error}</Text>
      </ScreenContainer>
    )
  } else if (state.type === "loading") {
    return (
      <ScreenContainer>
        <Text>Loading...</Text>
      </ScreenContainer>
    )
  }

  const pokemon = state.json.results
  return (
    <ScreenContainer>
      <ListView list={pokemon} />
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
})
