
const clarityTestPage = require('../pageobjects/ClarityTest.page');

/**
 * Close overlay if it is displayed
 *
 * @return {Promise}
 */
async function closeOverlayIfDisplayed() {
    if (true === await clarityTestPage.overlayVisible.isDisplayed()) {
        await clarityTestPage.buttonCloseOverlay.click(); //close overlay
    }
}

/**
 * wait until value of inputTextField equals expectedText, during timeout
 *
 * @param {Selector} inputTextField Text input field to check
 * @param {String} expectedText Expected text to find in inputTextField
 * @return {Promise}
 */
async function textPropagationDoneOnInputTextField(inputTextField, expectedText, timeout = 10000) {
    await inputTextField.waitUntil(async function () {
        await closeOverlayIfDisplayed();
        return (await this.getValue()) === expectedText;
    }, {
        timeout: timeout, timeoutMsg: `inputTextField ('${await inputTextField.getAttribute('id')}'): ExpectedText '${expectedText}' did not propagate (current text: '${await inputTextField.getValue()}')`
    });
}

module.exports = {
    textPropagationDoneOnInputTextField
}