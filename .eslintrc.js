module.exports = {
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: [".next", "node_modules", "out"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    project: "tsconfig.json",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "@typescript-eslint/eslint-plugin"],
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/naming-convention": [
      1,
      {
        selector: "typeAlias",
        format: ["StrictPascalCase"],
        prefix: ["T"],
      },
      {
        format: ["StrictPascalCase"],
        prefix: ["are", "can", "did", "does", "has", "is", "should", "will"],
        selector: "variable",
        types: ["boolean"],
      },
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "arrow-parens": 1,
    camelcase: 1,
    "max-params": ["error", 2],
    "no-duplicate-imports": 1,
    "no-tabs": 1,
    "react/jsx-sort-props": ["warn", { ignoreCase: true }],
  },
}
