import { getClassName, removeStyleProps } from "./../src/index"

describe("getClassName", () => {
  it("returns a valid class name", () => {
    const className = getClassName({
      margin: "1",
      display: "block",
      displayMd: "flex",
      backgroundColor: "green-100",
      border: true,
    })
    expect(className).toBe("m-1 block md:flex bg-green-100 border")
  })

  it("handles the negative values", () => {
    const className = getClassName({
      margin: "-1",
      displayMd: "flex",
    })
    expect(className).toBe("-m-1 md:flex")
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
