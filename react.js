module.exports = {
  extends: [
    './index.js',
    'standard-react',
    'plugin:react/jsx-runtime'
  ],
  globals: {
    JSX: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    'react-hooks'
  ],
  rules: {
    '@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],
    '@stylistic/jsx-indent': ['error', 2],
    '@stylistic/jsx-indent-props': ['error', 2],
    '@stylistic/jsx-newline': ['error', {
      allowMultilines: true,
      prevent: true
    }],
    '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    '@stylistic/jsx-sort-props': 'error',
    '@stylistic/jsx-tag-spacing': 'error',
    '@stylistic/jsx-wrap-multilines': ['error', {
      arrow: 'parens-new-line',
      assignment: 'parens-new-line',
      condition: 'parens-new-line',
      declaration: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
      return: 'parens-new-line'
    }],
    'jsx-a11y/no-onchange': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/jsx-handler-names': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
