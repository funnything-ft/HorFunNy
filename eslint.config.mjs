import globals from "globals";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  ...fixupConfigRules(pluginReactConfig),
  {
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
  {
    ignores: [
      "package.json",
      "package-lock.json",
      "*.json",
      "*.md",
      "/frontend/public",
      "/frontend/package.json",
      "/frontend/package-lock.json",
    ],
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
];
