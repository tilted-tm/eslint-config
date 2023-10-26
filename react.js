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
    'react-hooks',
    'tilted-react'
  ],
  rules: {
    'jsx-a11y/no-onchange': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': 'error',
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/jsx-handler-names': 'off',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    'react/jsx-sort-props': 'error',
    'react/jsx-tag-spacing': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': ['error', {
      arrow: 'parens-new-line',
      assignment: 'parens-new-line',
      condition: 'parens-new-line',
      declaration: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
      return: 'parens-new-line'
    }],
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
    'tilted-react/too-few-lines-between-jsx-elements': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
