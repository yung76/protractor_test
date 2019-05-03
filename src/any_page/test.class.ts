import { browser, element, by } from 'protractor';

export class TestOne {
    sectionName = element(by.xpath("//div[@class='Table-column Table-headline Table-middle is-wrapped is-firstMobile']//div[contains (.,'Aseguramiento de la calidad, localización y servicio al cliente')]"));

    constructor(){
        //only for declaration
    }
    navigateTo() {
        return browser.get("http://careers.blizzard.com/es-mx/");
    }
    getsectionName() {
        return this.sectionName.getText();
    }  
}
