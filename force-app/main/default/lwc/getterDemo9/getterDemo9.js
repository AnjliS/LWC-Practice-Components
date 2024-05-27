import { LightningElement } from 'lwc';

export default class GetterDemo9 extends LightningElement {

    names = ["kiju" , "biju", "riju"];

    get secondName(){
        return this.names[1];
    }
}