module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'standard',
    'standard-with-typescript'
  ],
  overrides: [
    {
      files: ['**/__tests__/*.tsx', '**/__tests__/*.ts'],
      rules: {
        'i18next/no-literal-string': 'off'
      }
    },
    {
      files: ['./**/__tests__/*.ts*', './**/__mocks__/*.ts*'],
      rules: {
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: './',
    createDefaultProgram: true
  },
  plugins: [
    '@stylistic',
    '@typescript-eslint',
    'i18next',
    'import',
    'newline-destructuring',
    'sort-destructure-keys',
    'sort-keys-fix',
    'typescript-sort-keys',
    'unused-imports',
    'import-newlines'
  ],
  root: true,
  rules: {
    '@stylistic/brace-style': ['error', '1tbs'],
    '@stylistic/comma-dangle': 'error',
    '@stylistic/indent': ['error', 2],
    '@stylistic/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'none',
        'requireLast': true
      },
      'singleline': {
        'delimiter': 'semi',
        'requireLast': false
      }
    }],
    '@stylistic/no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0
      }
    ],
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/object-curly-newline': ['error', {
      ExportDeclaration: {
        consistent: true,
        minProperties: 2,
        multiline: true
      },
      ImportDeclaration: {
        consistent: true,
        minProperties: 2,
        multiline: true
      },
      ObjectExpression: {
        consistent: true,
        minProperties: 1,
        multiline: true
      },
      ObjectPattern: {
        consistent: true,
        minProperties: 2,
        multiline: true
      }
    }],
    '@stylistic/object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: false
    }],
    '@stylistic/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' }
    ],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/space-before-blocks': 'error',
    '@stylistic/space-infix-ops': ['error', { 'int32Hint': false }],
    '@typescript-eslint/consistent-type-imports': ['error', {
      prefer: 'no-type-imports'
    }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          attributes: false
        }
      }
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    curly: ['error', 'all'],
    'default-param-last': 'off',
    'i18next/no-literal-string': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: false,
          order: 'asc'
        },
        groups: [
          ['builtin'],
          ['external', 'internal'],
          ['parent'],
          ['sibling', 'index']
        ],
        'newlines-between': 'always',
        pathGroups: [
          { pattern: '@assets/**', group: 'parent' },
          { pattern: '@components/**', group: 'parent' },
          { pattern: '@screens/**', group: 'parent' },
          { pattern: '@services/**', group: 'parent' }
        ]
      }
    ],
    'import-newlines/enforce': [
      'error',
      {
        items: 1,
        'max-len': 120,
        semi: false
      }
    ],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'newline-destructuring/newline': ['error', {
      items: 1,
      maxLength: 120
    }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-restricted-imports': ['error', {
      patterns: [{
        group: ['.*'],
        message: 'Use alias imports like @components/... instead'
      }]
    }],
    'no-use-before-define': 'off',
    'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],
    'sort-imports': ['error', { ignoreDeclarationSort: true, ignoreCase: true }],
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: false, natural: true }],
    'typescript-sort-keys/interface': ['error', 'asc', { caseSensitive: false, natural: true, requiredFirst: false }],
    'typescript-sort-keys/string-enum': ['error', 'asc', { caseSensitive: false }],
    'sort-vars': ['error', { 'ignoreCase': true }],
    'unused-imports/no-unused-imports': 'error'
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        map: [
          ['@assets', './src/assets'],
          ['@components', './src/components'],
          ['@screens', './src/screens'],
          ['@services', './src/services']
        ]
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    },
    version: 'detect'
  }
}
