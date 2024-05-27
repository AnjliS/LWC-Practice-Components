import { LightningElement , wire , track } from 'lwc';
import studentList from '@salesforce/apex/WireDemo24.getStudentList';

const cols = [
    { label : 'Name' , fieldName : "Name"},
    { label : "Student record Id" , fieldName : "Id"},
]
export default class WireDemo24 extends LightningElement {
    @track colms = cols;
    @track records = [];

    @wire(studentList)
    wiredStudents({data , error}){
        if(data){
            this.records = data;
        }
        else if(error){
            console.log("error has occured.")
        }
    }
}