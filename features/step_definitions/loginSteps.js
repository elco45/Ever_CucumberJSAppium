'use strict';
var Q = require('q');

module.exports = function() {

	this.Given(/^A "([^"]*)" username$/, function(validity, done) {
		if (validity === 'invalid') {
			this.pages.loginView.enterEmail('a@a.com').should.notify(done);
		}else if(validity === 'valid'){
			this.pages.loginView.enterEmail('walternolak@gmail.com').should.notify(done);
		}
	});

	this.Given(/^A "([^"]*)" password$/, function(validity, done) {
		if (validity === 'invalid') {
			this.pages.loginView.typePassword('meow').should.notify(done);
		}else if(validity === 'valid'){
			this.pages.loginView.typePassword('Password123').should.notify(done);
		}
	});

	this.When(/^I submit the credentials$/, function(done) {
		this.pages.loginView.submitInfo().should.notify(done);
	});

	this.Then(/^I "([^"]*)" login$/, function(result, done) {
		if (result === 'cannot') {
			this.pages.loginView.getAlertTitle().should.eventually.eql('Login Error').notify(done);
		}else{
			this.pages.homeView.checkMainIcon().should.eventually.eql(true).notify(done);
		}
	});

	this.Given(/^A user that logins successfully$/, function(done) {
		var that = this;
      	this.pages.loginView.enterCredentials('walternolak@gmail.com', 'Password123').then(function(){
			that.pages.loginView.submitInfo().should.notify(done);
		})
	});

};
