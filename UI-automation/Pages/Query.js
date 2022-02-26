//Imports required classes
const locators = require("../utilities/locators.js");
const { By, until } = require ('selenium-webdriver');
const { mydriver}  = require ('../stepDefinitions/hooks.js');
const assert = require ("assert");
const searchElement = locators.searchElement,
      searchElementTxt = locators.searchElementTxt,
      searchButton = locators.searchButton,
      displatText = locators.displatText,
      actualText = locators.actualText,
      expectedText = locators.expectedText,
      timeout = locators.timeout;


// Enter product in Seach bar 
   searchTextbox = async function () {   
    await mydriver.driver.wait(until.elementLocated(By.id(searchElement)), timeout);
     let searchvalue = await mydriver.driver.findElement(By.id(searchElement)).sendKeys(searchElementTxt);
     return searchvalue;
}

// Click on Search button
  clickSearchButton = async function (){
    await mydriver.driver.wait(until.elementLocated(By.css(searchButton)), timeout);
    let clickSearch = await mydriver.driver.findElement(By.css(searchButton)).click();
    return clickSearch
}

// Wait until product element is displayed
  waitUntilDisplayed = async function (){
    displayText =  mydriver.driver.wait(until.elementLocated(By.css(displatText)), timeout);
    return displayText
}

// Verify expected and actual results
verifyResponse = async function (){
    actualResult =  await mydriver.driver.findElement(By.xpath(actualText)).getText();
    assertionValue = assert.strictEqual(actualResult,expectedText) 
    return assertionValue
}

// Reuse externally
module.exports = { searchTextbox, clickSearchButton, waitUntilDisplayed, verifyResponse};