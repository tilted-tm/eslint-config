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
    'standard',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier'
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
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
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
    'no-trailing-spaces': 'error',
    'no-use-before-define': 'off',
    semi: 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true, ignoreCase: true }],
    'sort-vars': ['error', { 'ignoreCase': true }]
  }
}
