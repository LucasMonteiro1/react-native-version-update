## React Native Version Update

[![npm version](https://badge.fury.io/js/react-native-version-update.svg)](https://badge.fury.io/js/react-native-version-update) [![npm downloads](https://img.shields.io/npm/dt/react-native-version-update.svg)](https://npm-stat.com/charts.html?package=react-native-version-update) [![Publish Package](https://github.com/LucasMonteiro1/react-native-version-update/workflows/Publish%20Package/badge.svg?branch=master&event=push)](https://github.com/LucasMonteiro1/react-native-version-update/actions)  
[![NPM](https://nodei.co/npm/react-native-version-update.png?downloads=true)](https://nodei.co/npm/react-native-version-update/)

This project works together with [Version Builder](https://github.com/LucasMonteiro1/version-builder) and changes the files of the Android and iOS.

### Requirements
- React Native project

### Setup
`npm install --save react-native-version-update`

Inside package.json
```json
"scripts": {
    ...
    "version": "version-update"
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
    "version": "version-update --builder=example-app"
}
```
```json
"scripts": {
    ...
    "version": "version-update --date --builder=example-app"
}
```
