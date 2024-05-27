// import { LightningElement , track} from 'lwc';

// export default class TrackDemo2 extends LightningElement {

//     @track fullName = { firstName : "" , lastName : ""};  
//     //since value is of object type so need to use @track to track its indiv properties.

//     handleChange(event){
//         const field = event.target.name;

//         if(field === 'firstName'){
//             this.fullName.firstName = event.target.value;
//         }
//         else if(field === 'lastName'){
//             this.fullName.lastName = event.target.value;
//         }
//     }
// }


// //way1: using track : overrides city value:
// import {LightningElement ,track} from 'lwc';
// export default class TrackDemo2 extends LightningElement {

//     @track address = {street: 'nh3' , city: 'sgrl' , state: 'mp'}
//     handleChange(event){
//         this.address.city = event.target.value;   //UPDATES THE SAME OBJECT.
//     }
// }

//way2: without using track and by using SPREAD OPERATOR: creates a new copy of address:
import {LightningElement } from 'lwc';
export default class TrackDemo2 extends LightningElement {

    address = {street: 'nh3' , city: 'sgrl' , state: 'mp'}
    handleChange(event){
        this.address = {...this.address , "city" : event.target.value} ;   //GENERATES A NEW COPY OF ADDRESS OBJ,N THEN UPDATES CITY.
        // SINCE VALUE IS DIRECTLY GETTING ASSIGNED IN THE ADRRESS in this case, so lwc engine auto rerenders, so no need of @track.
    }
}




