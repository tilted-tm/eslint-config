module.exports = {
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    './index.js',
    'standard-react'
  ],
  plugins: [
    'react',
    'react-hooks',
    'tilted-react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
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
    'tilted-react/too-few-lines-between-jsx-elements': 'error'
  }
}
