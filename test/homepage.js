var assert = require('assert');
var request = require('request'); 

describe('webdriver.io api page', function() {
    it('should have the right title', function () {
        browser.url('/');

        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });

 });

describe ('API page', function(){
    it('should have a link to it from the homepage', function (){
        browser.url('/');
        var hasApiLink = browser.isExisting('=API')

        assert(hasApiLink);

    })


    it('should take you to the API page', function (){
        browser.url('/');
        browser.click('=API');

        var title = browser.getTitle();

        assert.equal(title, 'WebdriverIO - API Docs');

        //browser.pause(2000); waits specified period of time
        //browser.debug(); waits until Enter on the browser page or on the console

    })

//search+saving a screenshot
//it.only - runs test for this case - mocha thing
//spectre - comparing screenshots

    it('should search results', function (){
        browser.url('/api.html');
        browser.click('=API');

        browser.setValue('input[name="search"]', 'debug');
        browser.saveScreenshot('api-with-result.png');

//post a screenshot for comparison
        //request.post("vrt-servise.com", {api-with-result.png})


    })
});
