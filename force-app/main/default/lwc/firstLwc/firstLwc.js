import { LightningElement } from 'lwc';
import { ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class FirstLwc extends LightningElement {
    lwcTitle = "LWC card";
    itemName = "First lwc card by me.";

    // 
    ConnectedCallback(){
        let callMyFunctn = this.divisionFunctn(10 , 2);
        window.alert("callMyFunctn" + callMyFunctn);
    }

    /* way1 to write a function:
    divisionFunctn(dividend , divisor){
        return (dividend/divisor);
    } */

    //way2: arrow function:
    divisionFunctn = (dividend , divisor) => {
        return(dividend/divisor);
    }
}