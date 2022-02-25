const clarityTestPage = require('../pageobjects/ClarityTest.page');
const { textPropagationDoneOnInputTextField } = require('./utils')

let myText = 'my awesome text'

describe('Scenario 4', () => {
    it(`should navigate to the page: https://testingwithclarity.com/ClarityTestPage/ClarityTestPage.html?withOverlay`, async () => {
        await clarityTestPage.open('?withOverlay');
        await expect(clarityTestPage.header).toBeExisting();
        await expect(clarityTestPage.header).toHaveTextContaining('Clarity Test Page');
    });

    it(`should insert a value in the 'Input 1' text field`, async () => {
        await clarityTestPage.input1TextField.setValue(myText);
    });

    it(`should click on the button 'Propagate'`, async () => {
        await clarityTestPage.buttonPropagate.click();
    });

    it(`should validate that all other 3 input fields contain the same value inserted initially`, async () => {
        await textPropagationDoneOnInputTextField(clarityTestPage.input1TextField, myText);
        await textPropagationDoneOnInputTextField(clarityTestPage.input2TextField, myText);
        await textPropagationDoneOnInputTextField(clarityTestPage.input3TextField, myText);
        await textPropagationDoneOnInputTextField(clarityTestPage.input4TextField, myText);
    });

    it(`should click on the button 'Clear All'`, async () => {
        await clarityTestPage.buttonClearAll.click();
    });

    it(`should validate that all the 4 input fields are empty`, async () => {
        await textPropagationDoneOnInputTextField(clarityTestPage.input1TextField, "");
        await textPropagationDoneOnInputTextField(clarityTestPage.input2TextField, "");
        await textPropagationDoneOnInputTextField(clarityTestPage.input3TextField, "");
        await textPropagationDoneOnInputTextField(clarityTestPage.input4TextField, "");
    });
});
