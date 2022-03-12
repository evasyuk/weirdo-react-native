module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    "*.test.js",
    "*.test.ts",
  ],
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  rules: {
    "quotes": 0,
    "semi": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-empty-function": 0,
    "prefer-promise-reject-errors": 0,
    "require-jsdoc": 0,
    "object-curly-spacing": ["error", "always", { "arraysInObjects": false, "objectsInObjects": false }],
    "max-len": ["error", { "code": 140 }],
    "indent": ["error", 2],
    "import/no-unresolved": 0,
  },
};
