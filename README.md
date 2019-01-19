## React Native Version Update

This project works together with [Version Builder](https://github.com/LucasMonteiro1/version-builder) and changes the files of the Android and iOS.

### Requirements
- React Native project

### Setup
`npm install --save react-native-version-update`

Inside package.json
```json
"scripts": {
    ...
    "version": "node node_modules/react-native-version-update"
}
```

### Parameters
#### Builder
Passing `--builder`, on start it returns the value of the request and adds in the **package.json** of the project with **React Native** the attribute `buildNumber`.

#### Date
Passing `--date` adds in the **package.json** of the project with **React Native** the attribute `buildDate`.

### Examples

```json
"scripts": {
    ...
    "version": "node node_modules/react-native-version-update --builder=https://version-builder.herokuapp.com/builder/example-app"
}
```
```json
"scripts": {
    ...
    "version": "node node_modules/react-native-version-update --date --builder=https://version-builder.herokuapp.com/builder/example-app"
}
```
