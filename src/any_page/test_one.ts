import { browser, element, by } from 'protractor';

export class TestOne {
    sectionName = element(by.xpath("//div[@class='Table-column Table-headline Table-middle is-wrapped is-firstMobile']//div[contains (.,'Aseguramiento de la calidad, localización y servicio al cliente')]"));

    constructor(){
        //only for declaration
    }
    navigateTo() {
        var asd = browser.get("http://careers.blizzard.com/es-mx/");
        return asd ;
    }
    getsectionName() {
        return this.sectionName.getText();
    }  
}
