const clarityTestPage = require('../pageobjects/ClarityTest.page');

describe('Scenario 2', () => {
    it(`should navigate to the page: https://testingwithclarity.com/ClarityTestPage/ClarityTestPage.html`, async () => {
        await clarityTestPage.open();
        await expect(clarityTestPage.header).toBeExisting();
        await expect(clarityTestPage.header).toHaveTextContaining('Clarity Test Page');
    });

    it(`should click on the button 'Button DblClick'`, async () => {
        await clarityTestPage.buttonDblClick.doubleClick();
    });

    it(`should validate that the message 'DblClick Done' is displayed`, async () => {
        await expect(clarityTestPage.buttonDblClickMsg).toHaveText('DblClick Done');
    });
});
