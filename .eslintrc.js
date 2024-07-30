module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
      "next/core-web-vitals",
      "plugin:import/recommended",
      "airbnb",
      "prettier",
      "plugin:@typescript-eslint/recommended",
    ],
    rules: {
      "no-console": [1, { allow: ["warn", "error", "info"] }],
      "no-shadow": 0,
      "newline-before-return": 2,
      "no-nested-ternary": 0,
      "linebreak-style": 0,
      "max-len": 0,
      "consistent-return": 0,
      "object-curly-newline": 0,
      "no-alert": 1,
      "no-param-reassign": [2, { props: false }],
      "no-return-assign": 0,
      "no-restricted-syntax": 0,
      "comma-dangle": [
        2,
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "never",
        },
      ],
      "import/no-named-as-default": 0,
      "import/prefer-default-export": 0,
      "import/no-relative-packages": 0,
      "import/extensions": 0,
      "import/no-unresolved": 0,
      "import/no-extraneous-dependencies": 0,
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-absolute-path": "error",
      "import/no-duplicates": "error",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", ["sibling", "parent"], "index", "unknown"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "import/no-cycle": 0,
      "jsx-a11y/click-events-have-key-events": 0,
      "jsx-a11y/no-noninteractive-element-interactions": 1,
      "jsx-a11y/anchor-is-valid": [
        2,
        {
          components: ["Link"],
          specialLink: ["to", "hrefLeft", "hrefRight"],
          aspects: ["noHref", "invalidHref", "preferButton"],
        },
      ],
      "jsx-a11y/no-static-element-interactions": 1,
      "jsx-a11y/label-has-for": [
        2,
        {
          required: {
            every: ["id"],
          },
        },
      ],
      "jsx-a11y/label-has-associated-control": [
        2,
        {
          labelComponents: ["label"],
          labelAttributes: ["htmlFor"],
          controlComponents: ["input"],
        },
      ],
      "react/require-default-props": 0,
      "react/destructuring-assignment": 0,
      "react/no-array-index-key": 1,
      "react/no-danger": 0,
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".tsx", ".ts"] }],
      "react/jsx-props-no-spreading": 0,
      "react/react-in-jsx-scope": 0,
      "react/no-did-update-set-state": 0,
      "react/no-unstable-nested-components": 0,
      "react/state-in-constructor": 0,
      "no-unused-expressions": 0,
      "no-undef": 0,
      "react/prop-types": "off",
      "react/function-component-definition": [
        2,
        {
          namedComponents: "arrow-function",
        },
      ],
    },
    overrides: [
      {
        files: ["contentstack.d.ts"],
        rules: {
          "no-use-before-define": "off",
        },
      },
      {
        files: ["services/contentstack/**/*.{js,ts}"],
        rules: {
          "no-underscore-dangle": "off",
          camelcase: "off",
          "@typescript-eslint/camelcase": "off",
        },
      },
    ],
  };
  