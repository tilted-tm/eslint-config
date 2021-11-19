module.exports = {
  extends: [
    './react.js'
  ],
  plugins: [
    'react-native',
    '@react-native-community'
  ],
  rules: {
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error'
  }
}
