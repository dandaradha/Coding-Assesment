Feature: eBay Online

Scenario: Search product online
    Given Navigate to application "https://www.ebay.com.au"
    When Enter the product in seach bar
    Then Verify the output