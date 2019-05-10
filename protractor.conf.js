const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    allScripsTimeout: 20000,
    spec: ['src/any_page/test_one-spec.ts '],
    capabilities: {
        browserName: 'firefox'
    },
    //directConnect: true
    framework: 'jasmine2',
    allScriptsTimeout: 20000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    jasmine2NodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 20000,
        print: function(){}
    },
    onPrepare() {
        browser.manage().timeouts().implicitlyWait(15000);
        browser.driver.manage().window().maximize();
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.json')
          });
        jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true }}));
    }
};