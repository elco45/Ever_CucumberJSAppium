# CucumberJS + Appium

A basic cucumber style framework using javascript Appium driver

###Framework Capabilities

 * Cross platform test run with Appium on Android and iOS
 * Extract into Page Object pattern
 * Write base page operations for android and iOS
 * Add config to run on multiple android versions
 * Hooks & World definitions

###Instructions

1. Install nodejs https://nodejs.org/en/
2. Install latest java jdk http://www.oracle.com/technetwork/java/javase/downloads/index.html
3. Install appium
```javascript
npm install -g appium
```
4. Install appium-doctor to check and fix configurations needed.
```javascript
npm install -g appium-doctor
```
5. Go to features/support/caps.js and add your device information. Example-- For android 7.0
```javascript
'7.0': {
      platformName: 'Android',
      platformVersion: '7.0',
      deviceName: 'Android Phone',
      app: __dirname + "\\apps\\Evernote.apk"
    }
```
6. Run appium using the command 'appium' on your console
```javascript
appium
```
7. Connect your real device or emulator
8. Run this command on another console 
```javascript
PLATFORM='android' VERSION='<YOUR_ANDROID_VERSION>' node_modules/cucumber/bin/cucumber.js
```
or modify the version on the package.json and run
```javascript
npm test
```
9. Have fun!
