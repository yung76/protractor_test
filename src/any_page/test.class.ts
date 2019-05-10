import { browser, element, by } from 'protractor';

export class TestOne {
    
    /**
   * Locator
   */
    sectionName = element(by.xpath("//div[@class='Table-column Table-headline Table-middle is-wrapped is-firstMobile']//div[contains (.,'Aseguramiento de la calidad, localización y servicio al cliente')]"));
    cellOfTable = element(by.xpath("//div[contains(@id,'role-directory')]//a[3]/div[3]"));
    titleTable = element.all(by.xpath("//div[@class='Expandable-toggle is-active']"));
    boxRowTable = element.all(by.xpath("//div[@data-group='quality-assurance']//div/a/div[1]"));

    date = new Date;

    constructor(){
        //only for declaration
        //it to get a lot element and get one 
        // element.all(by.xpath("//div[@class='pl-2']")).get(position);
    }
    /**
   * Helpers
   */
    timeForDebug() {
        var dateComplete = this.date.getFullYear()+'-'+(this.date.getMonth()+1)+'-'+this.date.getDay()
               +' '+this.date.getHours()+':'+this.date.getMinutes()+':'+this.date.getSeconds();
        return dateComplete;
    }

    /**
   * Methods
   */
    navigateTo(url: string = "") {
        return browser.get(url);
    }
    getSectionName() {
        return this.sectionName.getText();
    }

    getValueOfCell() {
        return this.cellOfTable.getText().then(function(text) {
            console.log(text);
        });
    }
    methodWithDebuging() {
       return console.log((this.timeForDebug() + this.getValueOfCell()));
    }
    clickElement() {
        return this.sectionName.click();
    }
    getTextALotElements() {
        return this.titleTable.getText().then(function(text){
            console.log(text);
        });
    }
    
    getTextALotElementsWithinTable() {
        return this.boxRowTable.getText().then(function(text){
            console.log(text);
        });
    }
}
