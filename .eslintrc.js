module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    extends: [
        "prettier"
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    plugins: [
      "prettier"
    ],
    rules: {
      "prettier/prettier": ["error", {
      trailingComma: "none",
      semi: true,
      singleQuote: true,
    }]
    }
};
