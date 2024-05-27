// this old way of if:true  if:false  will get depricated soon , so instead use improved cr directives:
// lwc:if   lwc:elseif  lwc:else 
import { LightningElement } from 'lwc';

export default class ConditionalRendering10 extends LightningElement {
    isVisible = false;
    word;
    handleClick(){
        this.isVisible = true;
    }

    changeHandler(event){
        this.word = event.target.value;
    }

    get checkIndia(){
        return this.word === 'india';
    }

    get checkJapan(){
        return this.word === 'japan';
    }
}