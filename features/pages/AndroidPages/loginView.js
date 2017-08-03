'use strict';

var rek = require('rekuire')
 , LoginView;

LoginView = (function() {

  function LoginView(driver) {
    this.driver = driver;
    return this;
  }

  LoginView.prototype.enterEmail = function(email){
    return this.driver.waitForElementById('landing_email', 5000, 1000).type(email);
  };

  LoginView.prototype.continue = function(){
  	return this.driver.elementById('continue_button').tap();
  }

  LoginView.prototype.enterPassword = function(password){
    return this.driver.waitForElementById('landing_login_password', 5000, 1000).type(password);
  };

  LoginView.prototype.submit = function(){
    return this.driver.elementById('landing_sign_in_button').tap();
  };

  LoginView.prototype.getAlertTitle = function(){
  	return this.driver.waitForElementById('alertTitle').text();
  }

  return LoginView;
})();

module.exports = LoginView;
