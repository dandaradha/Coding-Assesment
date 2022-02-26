const { Before, After} = require('@cucumber/cucumber')
var webdriver = require('selenium-webdriver');
require ('geckodriver');

var driver;
var mydriver= {driver:null}

// Before scenario
Before( async function(){
    console.log("Before Scenario");
    mydriver.driver = await launchBrowser();
})

//launch the browser
async function launchBrowser() {
    driver = new  webdriver.Builder()
    .forBrowser('firefox')
    .build();
    await driver.manage().setTimeouts({
        pageLoad : 440000,
        implicit : 5000
    });
    await driver.manage().window().getRect();
    return driver
}
// After Scenario
After( async function(){
    await quitBrowser()
})  
// Close the browser
async function quitBrowser(){
    console.log("After Scenario");
    await mydriver.driver.quit();
}

// Reuse externally
module.exports = {mydriver}