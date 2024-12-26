import { LightningElement } from 'lwc';

export default class ParentCompo extends LightningElement {

    x;

    sendButtonHandler(){
        this.x= 100;
    }
}