const clarityTestPage = require('../pageobjects/ClarityTest.page');

describe('Scenario 1', () => {
    it(`should navigate to the page: https://testingwithclarity.com/ClarityTestPage/ClarityTestPage.html`, async () => {
        await clarityTestPage.open();
        await expect(clarityTestPage.header).toBeExisting();
        await expect(clarityTestPage.header).toHaveTextContaining('Clarity Test Page');
    });

    it(`should click on the button 'Button Click'`, async () => {
        await clarityTestPage.buttonClick.click()
    });

    it(`should validate that the message 'Click Done' is displayed`, async () => {
        await expect(clarityTestPage.buttonClickMsg).toHaveText('Click Done');
    });
});
