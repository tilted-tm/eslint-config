# Tilted eslint config

## Installation
You must install the package and its dev dependencies for it to work.
There are also additional specific steps for next, react and react native projects.
```shell script
yarn add --dev @tilted-tm/eslint-config

# or using npm

npm install --save-dev @tilted-tm/eslint-config
```
and
```shell script
yarn add --dev @stylistic\/eslint-plugin @typescript-eslint\/eslint-plugin @typescript-eslint\/parser eslint-import-resolver-alias eslint-plugin-cypress eslint-plugin-i18next eslint-plugin-import eslint-plugin-import-newlines eslint-plugin-jsx-a11y eslint-plugin-n eslint-plugin-newline-destructuring eslint-plugin-prettier eslint-plugin-promise eslint-plugin-sort-destructure-keys eslint-plugin-sort-keys-fix eslint-plugin-typescript-sort-keys eslint-plugin-unused-imports

# or using npm

npm install --save-dev @stylistic\/eslint-plugin @typescript-eslint\/eslint-plugin @typescript-eslint\/parser eslint-import-resolver-alias eslint-plugin-cypress eslint-plugin-i18next eslint-plugin-import eslint-plugin-import-newlines eslint-plugin-jsx-a11y eslint-plugin-n eslint-plugin-newline-destructuring eslint-plugin-prettier eslint-plugin-promise eslint-plugin-sort-destructure-keys eslint-plugin-sort-keys-fix eslint-plugin-typescript-sort-keys eslint-plugin-unused-imports
```

### For Next and React
```shell script
yarn add --dev eslint-plugin-react eslint-plugin-react-hooks

# or using npm

npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

### For React Native
```shell script
yarn add --dev eslint-plugin-ember-suave eslint-plugin-react eslint-plugin-react-hooks

# or using npm

npm install --save-dev eslint-plugin-ember-suave eslint-plugin-react eslint-plugin-react-hooks
```

Add this to your .eslintrc.js
```js
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      files: ['./**/*.js']
    }
  ]
```

## Usage

### Simple js
Using `.eslintrc.json`:
```json
{
  "extends": "@tilted-tm"
}
```

Using `.eslintrc.js`:
```javascript
module.exports = {
  extends: '@tilted-tm'
}
```

### Next
Using `.eslintrc.json`:
```json
{
  "extends": "@tilted-tm/next"
}
```

Using `.eslintrc.js`:
```javascript
module.exports = {
  extends: '@tilted-tm/next'
}
```

### React
Using `.eslintrc.json`:
```json
{
  "extends": "@tilted-tm/react"
}
```

Using `.eslintrc.js`:
```javascript
module.exports = {
  extends: '@tilted-tm/react'
}
```


### React Native
Using `.eslintrc.json`:
```json
{
  "extends": "@tilted-tm/react-native"
}
```

Using `.eslintrc.js`:
```javascript
module.exports = {
  extends: '@tilted-tm/react-native'
}
```
