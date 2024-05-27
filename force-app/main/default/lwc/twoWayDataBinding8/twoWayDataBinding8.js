import { LightningElement } from 'lwc';

export default class TwoWayDataBinding8 extends LightningElement {
    fullname = "SalesforceTroop";
    item = "lwc";     //js to html.
    handleChange(event){
        this.item = event.target.value;     //html to js.
    }
}