module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [__dirname + "/jest-setup.ts"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)x?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
}
