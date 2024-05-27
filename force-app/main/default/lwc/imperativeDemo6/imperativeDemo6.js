import { LightningElement ,track} from 'lwc'; 
import getParentList from '@salesforce/apex/ImperativeDemo24.getParentList';

const cols = [{label : 'Parent record Id' , fieldName : "Id"} , {label : 'Parent Name' , fieldName : "Name" }, ];

export default class ImperativeDemo24 extends LightningElement {
    @track colms = cols;
    @track record = [];

    connectedCallback(){
        getParentList()
        .then(result => {
            this.record = result;
        })
        .catch(error => {
            console.log("error occurred.");
        })
    }
}