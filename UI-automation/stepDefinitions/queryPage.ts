//imports required classes
import { Given, When, Then } from '@cucumber/cucumber'; 
const { mydriver } = require( './hooks.js');
const query = require('../Pages/Query.js');

//Given implementation
Given('Navigate to application {string}',async function (string) {
   // let driver = mydriver.driver;
    await mydriver.driver.get(string);
});

//When step implementation
When('Enter the product in seach bar', async function () {
    await query.searchTextbox();
    await query.clickSearchButton();   
});

//Then implementation
Then('Verify the output', async function () {
    await query.waitUntilDisplayed();
    await query.verifyResponse();
});