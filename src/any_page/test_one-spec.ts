import {browser} from 'protractor';
import { TestOne } from './test.class';

describe('First test', () => {
    let page = new TestOne;
    beforeEach(() => {
        browser.waitForAngularEnabled(false);
    });
    it('navigate to any page', () => {
        //browser.get("http://careers.blizzard.com/es-mx/");

        page.navigateTo("http://careers.blizzard.com/es-mx/");
        browser.sleep(5000);    
        page.getsectionName().then(function(text){
            console.log(text);
        });
    });
});