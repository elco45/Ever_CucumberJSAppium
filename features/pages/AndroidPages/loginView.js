'use strict';

var LoginView = (function() {

  function LoginView(driver) {
    this.driver = driver;
    return this;
  }

  LoginView.prototype.typeEmail = function(email){
    return this.driver.waitForElementById('landing_email', 5000, 1000).type(email);
  };

  LoginView.prototype.enterEmail = function(email){
    var that = this;
    return this.typeEmail(email).then(function(){
      return that.driver.elementById('continue_button').tap();
    })
  }

  LoginView.prototype.typePassword = function(password){
    return this.driver.waitForElementById('landing_login_password', 5000, 1000).type(password);
  };

  LoginView.prototype.enterCredentials = function(email, password){
    var that = this;
    return this.enterEmail(email).then(function(){
      that.typePassword(password);
    })
  };

  LoginView.prototype.submitInfo = function(){
    return this.driver.elementById('landing_sign_in_button').tap();
  };

  LoginView.prototype.getAlertTitle = function(){
  	return this.driver.waitForElementById('alertTitle').text();
  }

  return LoginView;
})();

module.exports = LoginView;
