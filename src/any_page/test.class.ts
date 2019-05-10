import { browser, element, by } from 'protractor';

export class TestOne {
    sectionName = element(by.xpath("//div[@class='Table-column Table-headline Table-middle is-wrapped is-firstMobile']//div[contains (.,'Aseguramiento de la calidad, localización y servicio al cliente')]"));

    constructor(){
        //only for declaration
        //it to get a lot element and get one 
        // element.all(by.xpath("//div[@class='pl-2']")).get(position);
    }
    navigateTo(url: string = "") {
        return browser.get(url);
    }
    getsectionName() {
        return this.sectionName.getText();
    }  
}
