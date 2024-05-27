import { LightningElement } from 'lwc';

export default class ParentCompo extends LightningElement {
    handleClick(){
        this.template.querySelector("c-child-compo").handleChangeValue();
    }
}