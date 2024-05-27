import { LightningElement } from 'lwc';

export default class QuizApp12 extends LightningElement {

    optnSelected = {} // for storing the answers
    correctAnswers = 0;  // to show the number of correct answers
    isSubmitted = false;  // to show the score on top

    queBank = [
        {id:"Q1", que:"Which one of the following is NOT a template loop?", opts:{a:"for:each", b:"iterator", c:"map loop"}, ans:"c"},
        {id:"Q2", que:"Which one of the following file is INVALID in LWC component folder?", opts:{a:".svg", b:".apex", c:".js"}, ans:"b"},
        {id:"Q3", que:"Which one of the following is NOT a directive?", opts:{a:"for:each", b:"if:true", c:"@track"}, ans:"c"},
        {id:"Q4", que:"Which one of the following does NOT have a block scope?", opts:{a:"var", b:"const", c:"let"}, ans:"a"},
        {id:"Q5", que:"Which one of the following is NOT a decorator in LWC?", opts:{a:"@api", b:"@wire", c:"@future"}, ans:"c"},
        {id:"Q6", que:"What does map() always returns?", opts:{a:"Array", b:"Object", c:"nota"}, ans:"a"},
        {id:"Q7", que:"Which one of the following is the correct synatx for string interpolation in lwc?", opts:{a:"`$()`", b:"`$[]`", c:"`${}`"}, ans:"c"},
        {id:"Q8", que:"What is the typeof null in LWC?", opts:{a:"Array", b:"Object", c:"undefined"}, ans:"b"},
        {id:"Q9", que:"What is the typeof undefined in LWC?", opts:{a:"Array", b:"Object", c:"undefined"}, ans:"c"},
    ]

    get allNotSelected(){
        return !(Object.keys(this.optnSelected).length === this.queBank.length);
    }
    
    get isFullScore(){
        return `slds-text-heading_large ${this.queBank.length === this.correctAnswers ? 'slds-text-color_success' : 'slds-text-color_error'}`
    }

    changeHandler(event){
        const {name, value} = event.target;
        this.optnSelected = {...this.optnSelected , [name]:value}
    }

    submitHandler(event){
        event.preventDefault(); // to prevent page from refreshing
        let correct = this.queBank.filter( item => this.optnSelected[item.id] === item.ans);
        this.isSubmitted = true;
        this.correctAnswers = correct.length;
        console.log(this.correctAnswers);
    }

    resetHandler(){
        this.optnSelected = {};
        this.correctAnswers = 0;
        this.isSubmitted = false;
    }

}