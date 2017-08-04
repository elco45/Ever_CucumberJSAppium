"use strict";

var capabilities = require('./caps.js');
//require('colors');

module.exports = function () {

  this.Before("@android", function(scenario, done){
    var desiredCapabilities = capabilities[process.env.PLATFORM][process.env.VERSION];
    
    //For log
    /*this.driver.on('status', function(info) {
      console.log(info.cyan);
    });
    this.driver.on('command', function(meth, path, data) {
      console.log(' > ' + meth.yellow, path.grey, data || '');
    });
    this.driver.on('http', function(meth, path, data) {
      console.log(' > ' + meth.magenta, path, (data || '').grey);
    });*/

    this.driver.init(desiredCapabilities).setImplicitWaitTimeout(5000).nodeify(done);
  });

};
