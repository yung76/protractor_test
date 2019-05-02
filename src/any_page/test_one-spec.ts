import {browser} from 'protractor';
import { TestOne } from './test_one';

describe('First test', () => {
    let page: TestOne;
    beforeEach(() => {
        browser.waitForAngularEnabled(false);
    });
    it('navigate to any page', () => {
        browser.get("http://careers.blizzard.com/es-mx/");

        //page.navigateTo();
        browser.sleep(5000);    
        /* page.getsectionName().then(function(text){
            console.log(text);
        }); */
    });
});