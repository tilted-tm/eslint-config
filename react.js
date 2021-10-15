module.exports = {
  root: true,
  settings: {
    react: {
      version: 'detect'
    },
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
    'standard-react',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier'
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'react',
    'react-hooks',
    'tilted-react'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
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
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/jsx-handler-names': 'off',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/self-closing-comp': 'error',
    semi: 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true, ignoreCase: true }],
    'sort-vars': ['error', { 'ignoreCase': true }],
    'tilted-react/too-few-lines-between-jsx-elements': 'error'
  }
}
