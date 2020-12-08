export default function createCache() {
  let cache: { [key: string]: any } = {}
  let inflight: { [key: string]: Promise<any> } = {}
  return {
    set<T = any>(key: string, value: T) {
      cache[key] = value
      return value
    },
    get<T = any>(key: string): T {
      return cache[key] || undefined
    },
    clear() {
      cache = {}
    },
    resource<T = any>(key: string, getPromise: () => Promise<T>): Promise<T> {
      if (cache[key] !== undefined) return Promise.resolve<T>(cache[key])
      if (inflight[key] === undefined) {
        inflight[key] = getPromise().then((val) => {
          delete inflight[key]
          cache[key] = val
          return val
        })
      }
      return inflight[key]
    },
  }
}
