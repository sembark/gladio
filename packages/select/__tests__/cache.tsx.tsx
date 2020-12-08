import createCache from "./../src/cache"

const Cache = createCache()

describe("Cache", () => {
  beforeEach(() => Cache.clear())
  it("can cache", () => {
    expect(Cache.get("key")).toBeUndefined()
    Cache.set("key", "value")
    expect(Cache.get("key")).toBe("value")
  })

  describe("Resource", () => {
    it("can cache an async resource", async () => {
      function getResource() {
        return new Promise((resolve) => {
          setTimeout(() => resolve("value"), 100)
        })
      }
      expect(Cache.get("key")).toBeUndefined()
      await Cache.resource("key", getResource)
      expect(Cache.get("key")).toBe("value")
    })

    it("sync resource will only be called once", async () => {
      const getResource = jest.fn(() => {
        return new Promise((resolve) => {
          setTimeout(() => resolve("value"), 100)
        })
      })
      expect(Cache.get("key")).toBeUndefined()
      await Promise.all([
        Cache.resource("key", getResource),
        Cache.resource("key", getResource),
        Cache.resource("key", getResource),
      ])
      expect(getResource).toBeCalledTimes(1)
      expect(Cache.get("key")).toBe("value")
    })
  })
})
