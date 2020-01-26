module.exports = {
    afterEach: function (browser) {
        browser
            .end();
    },
    "Without pressing keys down": function (browser) {
        browser
            .url("http://localhost:8080")
            .moveToElement("#container", 40, 120)
            .mouseButtonClick()
            .pause(2000);
    },

    "With pressing keys down": function (browser) {
        browser
            .url("http://localhost:8080")
            .keys([browser.Keys.ARROW_DOWN, browser.Keys.ARROW_DOWN, browser.Keys.ARROW_DOWN,
                browser.Keys.ARROW_DOWN, browser.Keys.ARROW_DOWN, browser.Keys.ARROW_DOWN,
                browser.Keys.ARROW_DOWN, browser.Keys.ARROW_DOWN, browser.Keys.ARROW_DOWN])
            .pause(2000)
            .moveToElement("#container", 40, 120)
            .mouseButtonClick()
            .pause(2000);
    }
};
