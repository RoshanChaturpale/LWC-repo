import { LightningElement } from 'lwc';

export default class GrandParentNew extends LightningElement {


    x;

    sendButtonHandler(){
        this.x = 100
    }
}