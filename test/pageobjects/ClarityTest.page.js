class ClarityTestPage {
    get header() {
        return $('//div[@class="jumbotron header"]/h1');
    }

    get buttonClick() {
        return $('#buttonClick');
    }

    get buttonDblClick() {
        return $('#buttonDblClick');
    }

    get buttonMouseOver() {
        return $('#buttonMouseOver');
    }

    get input1TextField() {
        return $('#input_text1');
    }

    get input2TextField() {
        return $('#input_text2');
    }

    get input3TextField() {
        return $('#input_text3');
    }

    get input4TextField() {
        return $('#input_text4');
    }

    get buttonPropagate() {
        return $('#propagate')
    }

    get buttonClearAll() {
        return $('button=Clear All') //no id for this element, use text to identify it
    }

    get overlayVisible() {
        return $('//div[@id="overlay" and @style="display: block;"]') //xpath when overlay is visible
    }

    get buttonCloseOverlay() {
        return $('#CloseOverlay')
    }

    get buttonClickMsg() {
        return $('#buttonClickMsg');
    }

    get buttonDblClickMsg() {
        return $('#buttonDblClickMsg');
    }

    get buttonMouseOverMsg() {
        return $('#buttonMouseOverMsg');
    }

    open(path = '') {
        return browser.url(`https://testingwithclarity.com/ClarityTestPage/ClarityTestPage.html${path}`)
    }
}

module.exports = new ClarityTestPage();
