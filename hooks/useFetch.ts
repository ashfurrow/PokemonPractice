import { useCallback, useEffect, useState } from "react";

export type FetchState<T> =
  | {
      type: "loading";
    }
  | {
      type: "success";
      json: T;
    }
  | {
      type: "error";
      error: any;
    };

// TODO: unit tests
export function useFetch<T>(url: string) {
  const [state, setState] = useState<FetchState<T>>({ type: "loading" });
  useEffect(() => {
    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`Got non-200 response code: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        setState({ type: "success", json });
      })
      .catch((error) => {
        setState({ type: "error", error });
      });

    return () => {
      abortController.abort();
    };
  }, [url]);
  return { state };
}
