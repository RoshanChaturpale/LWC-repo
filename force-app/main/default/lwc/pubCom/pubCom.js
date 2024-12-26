import { LightningElement, track, wire } from 'lwc';
import MYCHANNEL from "@salesforce/messageChannel/AccountDataChannel__c";
import {publish, MessageContext} from "lightning/messageService"

export default class PubCom extends LightningElement {

    @track  accountObject = {'sObjectType':'Account'}

    @wire(MessageContext)
    context

    nameHandler(event){
this.accountObject.Name = event.target.value
    }

    showButtonHandler(){
        const message={
            accountName:{
                value:this.accountObject.Name
            }
         }
    
         publish(this.context, MYCHANNEL, message);


    }
    
}