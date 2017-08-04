'use strict';

module.exports = function() {

	this.When(/^I "([^"]*)" a textnote$/, function(crud, done) {
		var that = this;
		if (crud === 'create') {
			this.pages.homeView.goToTextNote().then(function(){
				that.pages.textNoteView.saveNewTextNote('Hello world', 'Meow').should.notify(done);
			})
		}else if(crud === 'edit') {
			this.pages.homeView.getNote().then(function(){
				that.pages.textNoteView.saveEditedTextNote().should.notify(done);
			})
		}else if(crud === 'delete') {
			this.pages.homeView.getNote().then(function(){
				that.pages.textNoteView.deleteTextNote().should.notify(done);
			})
		}
	});

	this.Then(/^it will "([^"]*)" the textnote$/, function(crud, done) {
		if (crud === 'create') {
			this.pages.homeView.verifyCreatedNoteTitle().should.eventually.eql(true).notify(done);
		}else if( crud === 'edit') {
			this.pages.homeView.verifyEditedNoteMessage().should.eventually.eql(true).notify(done);
		}else if( crud === 'delete') {
			this.pages.homeView.verifyNotes().should.eventually.eql(false).notify(done);
		}
	});

};
