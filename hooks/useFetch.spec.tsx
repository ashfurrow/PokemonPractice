import { useFetch } from "./useFetch"

const Component = () => undefined

describe(useFetch, () => {
  it("runs a basic test, including jsx", () => {
    // eslint-disable-next-line react/react-in-jsx-scope, @typescript-eslint/no-unused-vars
    const _a = <Component></Component>
    expect(1).toEqual(1)
  })
})
