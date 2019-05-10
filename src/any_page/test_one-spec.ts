import {browser} from 'protractor';
import { TestOne } from './test.class';

describe('First test', () => {
    let page = new TestOne;
    beforeEach(() => {
        
    });
    it('navigate to any page', () => {
        //browser.get("http://careers.blizzard.com/es-mx/");
        browser.waitForAngularEnabled(false);
        page.navigateTo("http://careers.blizzard.com/es-mx/");
        browser.sleep(5000);    
        page.getSectionName();
    });

    it('click in an element', () => {
        page.methodWithDebuging();
        page.clickElement();
    });
    it('get a lot elements', () => {
        page.getTextALotElements();
        page.getTextALotElementsWithinTable();
    });
});