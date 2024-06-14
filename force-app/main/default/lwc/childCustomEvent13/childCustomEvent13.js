import { LightningElement } from 'lwc';

export default class C2pCustomEvent13 extends LightningElement {

    handleSubstract(){
        this.dispatchEvent(new CustomEvent('sub'));
    }

    handleAddition(){
        this.dispatchEvent(new CustomEvent('add'));
    }
}