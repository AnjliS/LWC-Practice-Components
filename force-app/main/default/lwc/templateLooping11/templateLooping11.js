import { LightningElement } from 'lwc';

export default class TemplateLooping11 extends LightningElement {
    carList = ["Hundai" , "Toyota" , "Suzuki" , "Mahindra" , "Ford"];
    countryCapitalList = [
        { id:1 , con:"India" , cap:"NewDelhi"},
        { id:2 , con:"Japan" , cap:"Tokyo"},
        { id:3 , con:"South Korea" , cap:"Seoul"},
        { id:4 , con:"Russia" , cap:"Moscow"}
    ]
}