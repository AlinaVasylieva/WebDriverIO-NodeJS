var assert = require('assert');

describe('webdriver.io api page', function() {
    it('should have the right title', function () {
        browser.url('/');

        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });
});