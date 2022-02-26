const {Builder, By, Key, until} = require ("selenium-webdriver");
const assert = require ("assert");

async function example() {

    //launch browser
    let driver = await new Builder().forBrowser("firefox").build();

    //navigate to application
    await driver.get("https://www.ebay.com.au");

    //search product
    await driver.findElement(By.id("gh-ac")).sendKeys("mobile phones");
    await driver.findElement(By.css("input#gh-btn")).click();
     
    //wait for 2sec 
    await driver.wait(until.elementLocated(By.css("#gh-cat > option:nth-child(1)")), 2000);

    //Assertions

    let actualResult =  await driver.findElement(By.xpath("//div[1]/div[1]/h1/span[2]")).getText().then(function(value){
        return value
    });

    assert.strictEqual(actualResult,"mobile phones")
    
    // Brower close
    await driver.quit();
} 
    example()