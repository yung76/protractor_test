import { browser, element, by } from 'protractor';

export class TestOne {
    sectionName = element(by.xpath("//div[@class='Table-column Table-headline Table-middle is-wrapped is-firstMobile']//div[contains (.,'Aseguramiento de la calidad, localización y servicio al cliente')]"));

    constructor(){
        //only for declaration
    }
    navigateTo(url: string = "") {
        return browser.get(url);
    }
    getsectionName() {
        return this.sectionName.getText();
    }  
}
