import React from "react"
import type { FetchState } from "../hooks/useFetch"
import { Text, StyleSheet } from "react-native"

interface Props<T> {
  fetchState: FetchState<T>
  renderResponse: (response: T) => JSX.Element
}

export function FetchLoadResult<T>({ fetchState, renderResponse }: Props<T>) {
  if (fetchState.type === "error") {
    return (
      <Text style={styles.error}>An error occurred: {fetchState.error}</Text>
    )
  } else if (fetchState.type === "loading") {
    return <Text>Loading...</Text>
  }

  return renderResponse(fetchState.json)
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
})
