import { FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Result, ScreenNavigation } from "../types";

type Props = {
  list: Result[];
};
export function ListView({ list }: Props) {
  return (
    <FlatList
      data={list}
      renderItem={({ item }) => <ListItem {...item} />}
      keyExtractor={(item) => item.url}
    />
  );
}

function ListItem({ name, url }: Result) {
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
