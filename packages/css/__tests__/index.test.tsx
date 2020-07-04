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

  it("handle floats and clearfix", () => {
    const className = getClassName({
      float: "right",
      clearfix: true,
    })
    expect(className).toBe("float-right clearfix")
  })

  it("handle background color, position and size", () => {
    const className = getClassName({
      backgroundColor: "gray-100",
      backgroundSize: "cover",
      backgroundPosition: "right",
    })
    expect(className).toBe("bg-gray-100 bg-cover bg-right")
  })

  it("handles border width, color and styles", () => {
    const className = getClassName({
      border: "default",
      borderColor: "gray-100",
      borderTop: "4",
      borderStyle: "solid",
    })
    expect(className).toBe("border border-gray-100 border-t-4 border-solid")
  })

  it("handles margins", () => {
    const className = getClassName({
      marginX: "auto",
      marginTop: "px",
      marginBottom: "-px",
      marginY: "3",
    })
    expect(className).toBe("mx-auto mt-px -mb-px my-3")
  })

  it("handles padding", () => {
    const className = getClassName({
      paddingX: "3",
      paddingTop: "1",
      paddingBottom: "px",
    })
    expect(className).toBe("px-3 pt-1 pb-px")
  })

  it("handles text color, alignment, decoration and transform", () => {
    const className = getClassName({
      textColor: "gray-400",
      textColorLg: "pink-300",
      textAlign: "left",
      textDecoration: "underline",
      textTransform: "uppercase",
    })
    expect(className).toBe(
      "text-gray-400 lg:text-pink-300 text-left underline uppercase"
    )
  })

  it("handles font size, weight and family", () => {
    const className = getClassName({
      fontSize: "lg",
      fontWeight: "bold",
      fontFamily: "serif",
    })
    expect(className).toBe("text-lg font-bold font-serif")
  })

  it("handles width, min widht and max widht", () => {
    const className = getClassName({
      width: "4",
      widthLg: "10",
      maxWidth: "4xl",
      minWidth: "full",
    })
    expect(className).toBe("w-4 lg:w-10 max-w-4xl min-w-full")
  })

  it("handles height, min widht and max widht", () => {
    const className = getClassName({
      height: "4",
      heightLg: "10",
      maxHeight: "screen",
      minHeight: "full",
    })
    expect(className).toBe("h-4 lg:h-10 max-h-screen min-h-full")
  })

  it("handles display", () => {
    const className = getClassName({
      display: "flex",
      displayMd: "block",
      displaySm: "inline-block",
    })
    expect(className).toBe("flex md:block sm:inline-block")
  })

  it("handles flex, justify and align items", () => {
    const className = getClassName({
      flex: "1",
      alignItems: "center",
      justifyContent: "center",
    })
    expect(className).toBe("flex-1 items-center justify-center")
  })

  it("handles box shadow", () => {
    const className = getClassName({
      boxShadow: "lg",
    })
    expect(className).toBe("shadow-lg")
  })

  it("handles letter spacing and line height", () => {
    const className = getClassName({
      letterSpacing: "wider",
      lineHeight: "loose",
    })
    expect(className).toBe("tracking-wider leading-loose")
  })

  it("handles overflow", () => {
    const className = getClassName({
      overflow: "auto",
      overflowLg: "x-auto",
    })
    expect(className).toBe("overflow-auto lg:overflow-x-auto")
  })

  it("handles positions", () => {
    const className = getClassName({
      position: "absolute",
      insetX: "auto",
      top: "0",
      right: "auto",
      bottom: "auto",
      left: "auto",
    })
    expect(className).toBe(
      "absolute inset-x-auto top-0 right-auto bottom-auto left-auto"
    )
  })

  it("handles flex wrap", () => {
    const className = getClassName({
      flexWrap: "no-wrap",
    })
    expect(className).toBe("flex-no-wrap")
  })

  it("handles flex direction", () => {
    const className = getClassName({
      flexDirection: "col",
    })
    expect(className).toBe("flex-col")
  })

  it("handles word breaks", () => {
    const className = getClassName({
      wordBreak: "all",
      wordBreakMd: "normal",
      wordTruncate: true,
    })
    expect(className).toBe("break-all md:break-normal truncate")
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
