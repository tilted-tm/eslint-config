module.exports = {
  extends: [
    './react.js'
  ],
  overrides: [
    {
      files: ['./**/*.styles.ts'],
      rules: {
        'ember-suave/lines-between-object-properties': ['error', 'always', { exceptAfterSingleLine: true }]
      }
    }
  ],
  plugins: [
    'ember-suave',
    'react-native',
    '@react-native-community'
  ],
  rules: {
    'react-native/no-color-literals': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error'
  }
}
