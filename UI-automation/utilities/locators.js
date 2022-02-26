module.exports = {
    // Query Page Locators
    baseUrl: "https://www.ebay.com.au/",
    searchElement : "gh-ac",
    searchElementTxt : "mobile phones",
    searchButton : "input#gh-btn",
    displatText : "#gh-cat > option:nth-child(1)",
    expectedText : "mobile phones",
    actualText : "//div[1]/div[1]/h1/span[2]",
    timeout : 5000
  };