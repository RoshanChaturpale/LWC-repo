import { LightningElement, track, wire } from 'lwc';
import MYCHANNEL from "@salesforce/messageChannel/AccountDataChannel__c";
import {subscribe, MessageContext,APPLICATION_SCOPE} from "lightning/messageService"

export default class SubCom extends LightningElement {

   @track objAcc = {'sObejctType' : 'Account'}

    @wire(MessageContext)
    context

    connectedCallback(){
        subscribe(this.context, MYCHANNEL, (message)=>{this.handleMessage(message)}, {scope : APPLICATION_SCOPE} )
    }
    
    
    handleMessage(message){
       this.objAcc.Name = message.accountName.value
       console.log('Value='+this.objAcc.Name)
    }
    
}