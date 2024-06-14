import { LightningElement } from 'lwc';

export default class ParentCustomEvent13 extends LightningElement {
    countValue = 0;

    handleSub(){
        this.countValue--;
    }

    handleAdd(){
        this.countValue++;
    }
}