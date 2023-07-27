import { Text, StyleSheet, Image } from "react-native";
import { NavigationProps } from "../../navigation";
import { useFetch } from "../../hooks/useFetch";
import { ScreenContainer } from "../components/ScreenContainer";
import { DetailView } from "./components/DetailView";
import { DetailResponse } from "./types";

export function DetailScreen(props: NavigationProps<"Detail">) {
  const { url } = props.route.params;
  const { state } = useFetch<DetailResponse>(url);

  // TODO: better abstraction here?
  if (state.type === "error") {
    return (
      <ScreenContainer>
        <Text style={styles.error}>An error occurred: {state.error}</Text>
      </ScreenContainer>
    );
  } else if (state.type === "loading") {
    return (
      <ScreenContainer>
        <Text>Loading...</Text>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <DetailView detail={state.json} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
