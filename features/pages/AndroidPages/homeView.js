'use strict';

var HomeView = (function() {

  function HomeView(driver) {
    this.driver = driver;
    return this;
  }

  HomeView.prototype.checkMainIcon = function(){
    return this.driver.waitForElementById('main_fab_image_view', 5000, 1000).isDisplayed();
  };

  HomeView.prototype.tapMainIcon = function(){
  	return this.driver.waitForElementById('main_fab_image_view', 5000, 1000).tap();
  }

  HomeView.prototype.goToTextNote = function(){
  	var that = this;
  	return this.tapMainIcon().then(function(){
  		return that.driver.waitForElementByXPath('//android.widget.TextView[(@resource-id=\'com.evernote:id/msl_label\') and (@text=\'Text Note\')]', 5000, 1000).tap();
  	})
  }

  HomeView.prototype.getNote = function(){
  	return this.driver.waitForElementByXPath('//android.widget.TextView[(@resource-id=\'com.evernote:id/title\') and (@text=\'Meow\')]', 10000, 1000).tap();
  }

  HomeView.prototype.verifyCreatedNoteTitle = function(){
    return this.driver.waitForElementByXPath('//android.widget.TextView[(@resource-id=\'com.evernote:id/title\') and (@text=\'Meow\')]', 10000, 1000).isDisplayed();
  }

  HomeView.prototype.verifyEditedNoteMessage = function(){
    return this.driver.waitForElementByXPath('//android.widget.TextView[(@resource-id=\'com.evernote:id/content\') and contains(@text,\'Meow v2\')]', 10000, 1000).isDisplayed();
  }

  HomeView.prototype.verifyNotes = function(){
    return this.driver.hasElementByXPath('//android.widget.TextView[@resource-id=\'com.evernote:id/content\']');
  }



  return HomeView;
})();

module.exports = HomeView;
