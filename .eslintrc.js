module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:nuxt/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "vue/no-v-html": "off",
    "vue/multi-word-component-names": "off",
    "prettier/prettier": "error",
  },
};
