module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
    "commonjs": true
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "React": "writable"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "settings": {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
      typescript: {
        config: 'tsconfig.json',
        alwaysTryTypes: true,
      },
    },
    "react": {
      "version": "detect"
    }
  },
  "plugins": ["react-hooks", "react", "@typescript-eslint", "prettier"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  "rules": {
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false,
        },
      },
    ],
    'react/prop-types': ['off'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'import/order': ['error'],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        endOfLine: 'lf',
        semi: false,
        singleQuote: true,
        printWidth: 80,
        tabWidth: 2,
      },
    ],
  },
  "overrides": [
    {
      "files": ["*.js"],
      "rules": {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-function-return-type": "off"
      }
    }
  ]
}
