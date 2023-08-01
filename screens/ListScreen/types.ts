import { type Navigation } from "../../navigation"

export interface ListResponse {
  results: Array<{ name: string; url: string }>
}
export type Result = ListResponse["results"][number]

export type ScreenNavigation = Navigation<"List">
