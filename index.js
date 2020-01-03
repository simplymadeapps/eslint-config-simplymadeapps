module.exports = {
  "env": {
    "browser": true
  },
  "extends": [
    "xo",
    "plugin:unicorn/recommended",
    "prettier",
    "prettier/react",
    "plugin:jsdoc/recommended"
  ],
  "globals": {
    "afterAll": true,
    "afterEach": true,
    "beforeAll": true,
    "beforeEach": true,
    "describe": true,
    "expect": true,
    "fail": true,
    "it": true,
    "jest": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "import",
    "prettier",
    "react",
    "sort-class-members",
    "unicorn"
  ],
  "rules": {
    "capitalized-comments": "off",
    "default-param-last": "off",
    "eqeqeq": [
      "error",
      "always",
      {
        "null": "never"
      }
    ],
    "func-style": ["error", "declaration"],
    "guard-for-in": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unassigned-import": "off",
    "import/no-unresolved": "off",
    "import/order": "off",
    "jsdoc/require-description": [
      "error",
      {
        "contexts": [
          "ArrowFunctionExpression",
          "ClassDeclaration",
          "ClassExpression",
          "FunctionDeclaration",
          "FunctionExpression",
          "MethodDefinition"
        ]
      }
    ],
    "jsdoc/require-jsdoc": [
      "error",
      {
        "contexts": [
          "ArrowFunctionExpression",
          "ClassDeclaration",
          "ClassExpression",
          "FunctionDeclaration",
          "FunctionExpression",
          "MethodDefinition"
        ],
        "require": {
          "ArrowFunctionExpression": false,
          "ClassDeclaration": true,
          "ClassExpression": true,
          "FunctionDeclaration": true,
          "FunctionExpression": true,
          "MethodDefinition": false
        }
      }
    ],
    "no-alert": "off",
    "no-eq-null": "off",
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "React"
      }
    ],
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prettier/prettier": [
      "error",
      {
        "printWidth": 120
      }
    ],
    "radix": [
      "error",
      "as-needed"
    ],
    "react/jsx-curly-brace-presence": [1, { "props": "never", "children": "ignore" }],
    "react/jsx-no-literals": 1,
    "react/jsx-sort-props": [1, { "ignoreCase": true }],
    "react/jsx-uses-vars": 1,
    "sort-class-members/sort-class-members": [
      2,
      {
        "groups": {
          "other-methods": [
            {
              "name": "/^(?!render|constructor).+/",
              "sort": "alphabetical",
              "type": "method"
            }
          ],
          "render-methods": [
            {
              "name": "/render.+/",
              "sort": "alphabetical",
              "type": "method"
            }
          ]
        },
        "order": [
          "constructor",
          "[other-methods]",
          "[render-methods]"
        ],
        "stopAfterFirstProblem": true
      }
    ],
    "unicorn/prevent-abbreviations": "off"
  }
};
