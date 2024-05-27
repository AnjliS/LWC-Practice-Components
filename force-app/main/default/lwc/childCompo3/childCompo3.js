import { LightningElement , api } from 'lwc';

export default class ChildCompo extends LightningElement {
    @api itemName = "this is a child compo text.";

    @api handleChangeValue(){
        this.itemName = "child's value changed on par button click.";
    }
}