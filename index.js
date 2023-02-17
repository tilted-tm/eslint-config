module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'standard',
    'standard-with-typescript'
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
    '@typescript-eslint',
    'import',
    'sort-destructure-keys',
    'sort-keys-fix',
    'typescript-sort-keys',
    'unused-imports'
  ],
  root: true,
  rules: {
    '@typescript-eslint/comma-dangle': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'none',
        'requireLast': true
      },
      'singleline': {
        'delimiter': 'semi',
        'requireLast': false
      }
    }],
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
    '@typescript-eslint/space-before-blocks': 'error',
    '@typescript-eslint/space-infix-ops': ['error', { 'int32Hint': false }],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'brace-style': ['error', '1tbs'],
    curly: ['error', 'all'],
    'default-param-last': 'off',
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
    indent: 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'newline-before-return': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0
      }
    ],
    'no-restricted-imports': ['error', {
      patterns: [{
        group: ['.*'],
        message: 'Use alias imports like @components/... instead'
      }]
    }],
    'no-trailing-spaces': 'error',
    'no-use-before-define': 'off',
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    quotes: ['error', 'single'],
    semi: 'error',
    'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],
    'sort-imports': ['error', { ignoreDeclarationSort: true, ignoreCase: true }],
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: false, natural: true }],
    'space-infix-ops': 'off',
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
