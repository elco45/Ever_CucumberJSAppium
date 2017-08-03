'use strict';

module.exports = function() {

	this.Given(/^A "([^"]*)" username$/, function(validity, done) {
		var that = this;
		if (validity === 'invalid') {
			this.pages.loginView.enterEmail('a@a.com').then(function(){
				that.pages.loginView.continue().should.notify(done);
			})
		}else if(validity === 'valid'){
			this.pages.loginView.enterEmail('walternolak@gmail.com').then(function(){
				that.pages.loginView.continue().should.notify(done);
			})
		}
	});

	this.Given(/^A "([^"]*)" password$/, function(validity, done) {
		if (validity === 'invalid') {
			this.pages.loginView.enterPassword('meow').should.notify(done);
		}else if(validity === 'valid'){
			this.pages.loginView.enterPassword('Password123').should.notify(done);
		}
	});

	this.When(/^I submit the credentials$/, function(done) {
		this.pages.loginView.submit().should.notify(done);
	});

	this.Then(/^I "([^"]*)" login$/, function(result, done) {
		if (result === 'cannot') {
			this.pages.loginView.getAlertTitle().should.eventually.eql('Login Error').notify(done);
		}else{
			this.pages.homeView.checkMainIcon().should.eventually.eql(true).notify(done);
		}
	});

};
