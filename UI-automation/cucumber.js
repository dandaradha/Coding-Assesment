var reporter = require('cucumber-html-reporter');

let common = [
    'features/**/query.feature',
    '--require-module ts-node/register',
    '--require stepDefinitions/**/*.ts',
    '--format progress-bar',
    '--format html:target/cucumber-reports/Cucumber.html',
    '--publish'
].join(' ');

/*var options = {
    jsonFile: 'target/report/cucumber_report.json',
    output: 'target/report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true
};

reporter.generate(options);*/

module.exports= {
    default: common
}