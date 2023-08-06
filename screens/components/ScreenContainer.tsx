import { View, StyleSheet } from "react-native"

export function ScreenContainer({ children }: { children?: React.ReactNode }) {
  return <View style={styles.container}>{children}</View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})
