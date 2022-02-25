const clarityTestPage = require('../pageobjects/ClarityTest.page');

describe('Scenario 3', () => {
    it(`should navigate to the page: https://testingwithclarity.com/ClarityTestPage/ClarityTestPage.html`, async () => {
        await clarityTestPage.open();
        await expect(clarityTestPage.header).toBeExisting();
        await expect(clarityTestPage.header).toHaveTextContaining('Clarity Test Page');
    });

    it(`should move the mouse over the button 'Button MouseOver'`, async () => {
        await clarityTestPage.buttonMouseOver.moveTo();
    });

    it(`should validate that the message 'DblClick Done' is displayed`, async () => {
        await expect(clarityTestPage.buttonMouseOverMsg).toHaveText('MouseOver Done');
    });
});
