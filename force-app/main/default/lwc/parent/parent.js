import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {

y;



    parentHandler(event){
    this.y = event.detail.message

    this.dispatchEvent(new CustomEvent('eventname',{
        detail:{
            message: this.y
        }
    }))
    }


}  
