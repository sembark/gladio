export default function createCache() {
  let cache: { [key: string]: any } = {}
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
  }
}
