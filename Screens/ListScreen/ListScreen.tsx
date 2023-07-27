import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useFetch } from "../../hooks/useFetch";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Navigation } from "../../navigation";
import { ScreenContainer } from "../components/ScreenContainer";

const LIST_ENDPOINT = "https://pokeapi.co/api/v2/pokemon";
type ListResult = {
  name: string;
  url: string;
};

type ListResponse = {
  results: { name: string; url: string }[];
};

type ScreenNavigation = Navigation<"List">;

export function ListScreen() {
  const { state } = useFetch<ListResponse>(LIST_ENDPOINT);

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

  // TODO: Handle pagination
  const pokemon = state.json.results;
  return (
    <ScreenContainer>
      <FlatList
        data={pokemon}
        renderItem={({ item }) => <ListItem {...item} />}
        keyExtractor={(item) => item.url}
      />
    </ScreenContainer>
  );
}

function ListItem({ name, url }: ListResult) {
  const navigation = useNavigation<ScreenNavigation>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push("Detail", { name, url });
      }}
    >
      <Text style={styles.item}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
  item: {
    padding: 10,
    height: 44,
    fontSize: 18,
  },
});
