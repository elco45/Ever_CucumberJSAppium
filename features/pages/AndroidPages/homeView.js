'use strict';

var rek = require('rekuire')
 , HomeView;

HomeView = (function() {

  function HomeView(driver) {
    this.driver = driver;
    return this;
  }

  HomeView.prototype.checkMainIcon = function(email){
    return this.driver.waitForElementById('main_fab_image_view', 5000, 1000).isDisplayed();
  };

  return HomeView;
})();

module.exports = HomeView;
