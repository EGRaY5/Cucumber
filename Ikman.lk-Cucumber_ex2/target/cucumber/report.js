$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/QA/Task 2/Ikman.lk-Cucumber_ex2/src/test/resources/houseads.feature");
formatter.feature({
  "line": 1,
  "name": "Houses",
  "description": "",
  "id": "houses",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Navigate to ikman.lk to find houses in colombo",
  "description": "",
  "id": "houses;navigate-to-ikman.lk-to-find-houses-in-colombo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I am on the \"https://ikman.lk\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I click on Property link",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I click on Houses link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on Colombo link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter min_price as \"5000000\"and a max_Price as \"7500000\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I set bed as \"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I am navigated to the result page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I am close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://ikman.lk",
      "offset": 13
    }
  ],
  "location": "AppTest.iAmOnThePage(String)"
});
formatter.result({
  "duration": 23638466042,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.iClickOnPropertyLink()"
});
formatter.result({
  "duration": 6947601909,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.iClickOnHousesLink()"
});
formatter.result({
  "duration": 2098622564,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.iClickOnColomboLink()"
});
formatter.result({
  "duration": 2256613676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5000000",
      "offset": 22
    },
    {
      "val": "7500000",
      "offset": 50
    }
  ],
  "location": "AppTest.iEnterMin_priceAsAndAMax_PriceAs(String,String)"
});
formatter.result({
  "duration": 4131981945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 14
    }
  ],
  "location": "AppTest.iSetBedAs(String)"
});
formatter.result({
  "duration": 4257169316,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.iAmNavigatedToTheResultPage()"
});
formatter.result({
  "duration": 32086872485,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.iCloseTheBrowser()"
});
formatter.result({
  "duration": 557390219,
  "status": "passed"
});
});