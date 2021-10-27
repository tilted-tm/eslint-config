module.exports = {
  root: true,
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@assets', './src/assets'],
          ['@components', './src/components'],
          ['@screens', './src/screens'],
          ['@services', './src/services']
        ],
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    },
    version: 'detect'
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'standard'
  ],
  plugins: [
    '@typescript-eslint',
    'import'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: './',
    createDefaultProgram: true
  },
  rules: {
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
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': ['error', { 'int32Hint': false }],
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
          order: 'asc',
          caseInsensitive: false
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
    'no-restricted-imports': ['error', {
      paths: [{
        name: '.*',
        message: 'Use alias imports like @'
      }]
    }],
    'no-trailing-spaces': 'error',
    'no-use-before-define': 'off',
    quotes: ['error', 'single'],
    semi: 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true, ignoreCase: true }],
    'sort-vars': ['error', { 'ignoreCase': true }]
  }
}
