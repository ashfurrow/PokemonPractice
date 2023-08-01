import React, { useMemo } from "react"
import { Text, StyleSheet, Image, FlatList } from "react-native"

import { type Pokemon } from "../types"

export function DetailView({ detail }: { detail: Pokemon }) {
  const {
    id,
    sprites: { front_default: sprite },
    stats,
  } = detail

  const data = useMemo(() => {
    return [
      `id: ${id}`,
      ...stats.map((stat) => `${stat.stat.name}: ${stat.base_stat}`),
    ]
  }, [id])

  return (
    <>
      <Image
        source={{ uri: sprite }}
        style={styles.image}
        resizeMode="contain"
      />
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item) => item}
      />
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  item: {
    fontSize: 18,
  },
})
