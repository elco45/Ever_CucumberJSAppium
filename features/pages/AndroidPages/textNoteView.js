'use strict';

var TextNoteView = (function() {

  function TextNoteView(driver) {
    this.driver = driver;
    return this;
  }

  TextNoteView.prototype.typeMessage = function(message){
    return this.driver.waitForElementByXPath('//android.view.View[@resource-id=\'en-note\']', 5000, 1000).type(message);
  }

  TextNoteView.prototype.typeTitle = function(title){
    return this.driver.waitForElementByXPath('//android.widget.EditText[@resource-id=\'com.evernote:id/title\']', 5000, 1000).type(title);
  }

  TextNoteView.prototype.createTextNote = function(message, title){
    var that = this;
    return this.typeMessage(message).then(function(){
      return that.typeTitle(title);
    })
  }

  TextNoteView.prototype.save = function(){
    var that = this;
    return this.driver.waitForElementByXPath('//android.widget.ImageView[@resource-id=\'com.evernote:id/check_mark\']', 5000, 1000).tap().then(function(){
      return that.driver.waitForElementByXPath('//android.widget.ImageView[@resource-id=\'com.evernote:id/check_mark\']', 5000, 1000).tap();
    });
  }

  TextNoteView.prototype.saveNewTextNote = function(message, title){
    var that = this;
    return this.createTextNote(message, title).then(function(){
      return that.save()
    })
  }

  TextNoteView.prototype.tapEdit = function(){
    return this.driver.waitForElementByXPath('//android.widget.TextView[@text=\'e\']', 7000, 1000).tap();
  }

  TextNoteView.prototype.editMessage = function(){
    var that = this;
    return this.driver.waitForElementByXPath('//android.view.View[@resource-id=\'en-note\']', 5000, 1000).clear().then(function(){
      return that.typeMessage('Meow v2');
    });
  }

  TextNoteView.prototype.saveEditedTextNote = function(){
    var that = this;
    var that2 = this;
    return this.tapEdit().then(function(){
      return that.editMessage().then(function(){
        return that2.save()
      })
    })
  }

  TextNoteView.prototype.hamburgerMenu = function(){
    return this.driver.waitForElementByXPath('//android.widget.ImageView[@resource-id=\'com.evernote:id/overflow_icon\']', 5000, 1000).tap();
  }  

  TextNoteView.prototype.tapDelete = function(){
    var that = this;
    return this.hamburgerMenu().then(function(){
      return that.driver.waitForElementByXPath('//android.widget.TextView[(@resource-id=\'com.evernote:id/text\') and (@text=\'Delete note\')]', 5000, 1000).tap();
    })
  }  

  TextNoteView.prototype.confirmAlert = function(){
    return this.driver.waitForElementById('android:id/button1', 5000, 1000).tap();
  }  

  TextNoteView.prototype.deleteTextNote = function(){
    var that = this;
    return this.tapDelete().then(function(){
      return that.confirmAlert()
    })
  }

  return TextNoteView;
})();

module.exports = TextNoteView;
