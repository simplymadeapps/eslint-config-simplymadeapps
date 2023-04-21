module.exports = {
  "env": {
    "browser": true
  },
  "extends": [
    "xo",
    "plugin:unicorn/recommended",
    "prettier",
    "prettier/react",
    "plugin:jsdoc/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:jest-formatting/strict"
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
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "import",
    "jest",
    "jest-formatting",
    "prettier",
    "react",
    "sort-class-members",
    "unicorn"
  ],
  "rules": {
    "capitalized-comments": "off",
    "curly": "error",
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
    "import/first": "error",
    "import/no-extraneous-dependencies": "off",
    "import/no-unassigned-import": "off",
    "import/no-unresolved": "off",
    "import/order": "off",
    "jest/no-disabled-tests": "off",
    "jest/no-mocks-import": "off",
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
    "newline-before-return": "error",
    "no-alert": "off",
    "no-duplicate-imports": "error",
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
    "prefer-destructuring": [
      "error",
      {
        "VariableDeclarator": {
          "array": false,
          "object": true
        },
        "AssignmentExpression": {
          "array": false,
          "object": false
        }
      }
    ],
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
    "react/button-has-type": 1,
    "react/jsx-curly-brace-presence": [1, { "props": "never", "children": "ignore" }],
    "react/jsx-no-literals": 1,
    "react/jsx-sort-props": [1, { "ignoreCase": true }],
    "react/jsx-uses-vars": 1,
    "require-await": "error",
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
          "properties": [
            {
              "sort": "alphabetical",
              "type": "property"
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
          "[properties]",
          "constructor",
          "[other-methods]",
          "[render-methods]"
        ],
        "stopAfterFirstProblem": true
      }
    ],
    "sort-imports": [
      "error",
      {
        "ignoreCase": true,
        "memberSyntaxSortOrder": [
          "all",
          "single",
          "multiple",
          "none"
        ]
      }
    ],
    "sort-keys": ["error", "asc", { "caseSensitive": false }],
    "unicorn/prevent-abbreviations": "off"
  }
};
