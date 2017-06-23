module.exports = {
  env: {
    browser: true
  },
  extends: ["xo", "plugin:unicorn/recommended", "prettier", "prettier/react"],
  globals: {
    afterAll: true,
    afterEach: true,
    beforeAll: true,
    beforeEach: true,
    describe: true,
    expect: true,
    it: true,
    jest: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["import", "prettier", "react", "unicorn"],
  rules: {
    eqeqeq: [
      "error",
      "always",
      {
        null: "never"
      }
    ],
    "import/no-extraneous-dependencies": "off",
    "import/no-unassigned-import": "off",
    "import/no-unresolved": "off",
    "import/order": "off",
    "no-alert": "off",
    "no-eq-null": "off",
    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "React"
      }
    ],
    "prettier/prettier": [
      "error",
      {
        printWidth: 120
      }
    ],
    "react/jsx-uses-vars": 1,
    "valid-jsdoc": [
      "error",
      {
        requireReturn: false,
        requireReturnDescription: false
      }
    ]
  }
};
