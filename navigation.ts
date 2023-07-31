import {
  type StackNavigationProp,
  type StackScreenProps,
} from "@react-navigation/stack"

// react-navigation requires this to be a type, not an interface
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RootStackParamList = {
  List: undefined
  Detail: { name: string; url: string }
}
export type Navigation<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T, undefined>
export type NavigationProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>
