import { LightningElement } from 'lwc';

export default class Child extends LightningElement {

x=100;

    sendButtonHandler(){

this.dispatchEvent(new CustomEvent('eventname',{
    detail:{
        message:this.x
    }
}))
    }
}