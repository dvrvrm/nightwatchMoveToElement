module.exports = {
    after: function (browser) {
        browser
            .end();
    },
    "XD-85057 Blend mode : Verify that the blend mode is displaying correctly in PI of Design spec": function (browser) {
        browser
            .url("http://localhost:8080", () => {
                console.log("Navigated to : ", "url");
            })
            // .keys([browser.Keys.ARROW_DOWN, browser.Keys.ARROW_DOWN, browser.Keys.ARROW_DOWN,
            //     browser.Keys.ARROW_DOWN, browser.Keys.ARROW_DOWN, browser.Keys.ARROW_DOWN,
            //     browser.Keys.ARROW_DOWN, browser.Keys.ARROW_DOWN, browser.Keys.ARROW_DOWN])
            //     .pause(2000)
            .moveToElement("#container", 40, 120)
            .mouseButtonClick()
            .pause(20000);
    }
};
