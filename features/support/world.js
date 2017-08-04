"use strict";

var util = require('util'), 
  path = require('path'), 
  pagesPath = util.format('../pages/%sPages', process.env.PLATFORM), 
  LoginView = require(path.join(pagesPath, 'loginView.js')), 
  HomeView = require(path.join(pagesPath, 'homeView.js')),
  TextNoteView = require(path.join(pagesPath, 'textNoteView.js'));

module.exports = function() {
  var wd = require('wd');
  var chai = require("chai");
  chai.should();
  chai.config.truncateThreshold = 0;
  var chaiAsPromised = require("chai-as-promised");
  chai.use(chaiAsPromised);
  chaiAsPromised.transferPromiseness = wd.transferPromiseness;

  this.World = function World (callback) {
    this.driver = wd.promiseChainRemote({ host: 'localhost', port: 4723 });
    this.pages = {
      loginView: new LoginView(this.driver),
      homeView: new HomeView(this.driver),
      textNoteView: new TextNoteView(this.driver)
    };
    callback();
  };
};
