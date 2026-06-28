import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  ...astro.configs.recommended,
  {
    languageOptions: {
      globals: {
        node: true,
        es2022: true,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astro.parser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
      },
    },
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      parser: tsParser,
    },
  },
  {
    ignores: [
      "dist/",
      ".astro/",
      "node_modules/",
      "src/pages/index.astro",
      "*.mjs",
    ],
  },
];