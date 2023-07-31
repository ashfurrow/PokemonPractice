export interface DetailResponse {
  id: number
  sprites: {
    front_default: string | undefined
  }
  stats: Array<{
    base_stat: string
    stat: {
      name: string
    }
  }>
}

export type Pokemon = DetailResponse
