import { LightningElement, track } from 'lwc';

export default class ChildToParentComponent extends LightningElement {

   @track objAccount = {'sObjectType':'Account'}
    
    nameFieldHandler(event){
this.objAccount.Name = event.target.value
    }

    sendButtonHandler(){

        this.dispatchEvent(new CustomEvent('eventname',{
            detail:{
                message:this.objAccount
            }
        }))
    }


}