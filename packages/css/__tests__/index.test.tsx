import { getClassName, removeStyleProps } from "./../src/index"

describe("getClassName", () => {
  it("returns a valid class name", () => {
    const className = getClassName({
      display: "block",
      displayMd: "flex",
      backgroundColor: "green-100",
      border: true,
    })
    expect(className).toBe("block md:flex bg-green-100 border")
  })
})

describe("removeStyleProps", () => {
  it("should remove the style props keys", () => {
    const after = removeStyleProps({
      display: "block",
      anotherOne: "new",
    })
    expect(after).toStrictEqual({ anotherOne: "new" })
  })
})
