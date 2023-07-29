import { Navigation } from "../../navigation";

export type ListResponse = {
  results: { name: string; url: string }[];
};
export type Result = ListResponse["results"][number];

export type ScreenNavigation = Navigation<"List">;
