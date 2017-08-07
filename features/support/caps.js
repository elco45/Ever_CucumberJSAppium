'use strict';

module.exports = {
  ios: {
    '11.0': {
      platformName: 'ios',
      platformVersion: '11.0',
      deviceName: 'iPhone 6',
      app: __dirname + "/../../apps/appName.zip"
    },
  },

  android: {
    '7.0': {
      platformName: 'Android',
      platformVersion: '7.0',
      deviceName: 'Android Phone',
      app: __dirname + "\\apps\\Evernote.apk"
    },
    '5.0.1': {
      platformName: 'Android',
      platformVersion: '5.0.1',
      deviceName: 'Android Phone',
      app: __dirname + "\\apps\\Evernote.apk",
      applicationCacheEnabled: true
    }
  },
};
