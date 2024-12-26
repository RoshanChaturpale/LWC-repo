import { LightningElement, wire, track } from 'lwc';
import MYAPPCHANNEL from '@salesforce/messageChannel/ApplicantDataChannel__c'
import {subscribe, MessageContext,APPLICATION_SCOPE} from "lightning/messageService"

 
export default class AddressSubscriber extends LightningElement {

addressList
@track adrList

@wire(MessageContext)
context



draftValues=[];  

columns = [
    { label: 'Id', fieldName: 'Id', editable: true },
    { label: 'Pan card', fieldName: 'Pan_Card__c', editable: true },
    { label: 'Pin Code', fieldName: 'Pin_Code__c', editable: true },
    { label: 'City', fieldName: 'City__c', editable: true },
    { label: 'Country', fieldName: 'Country__c', editable: true },
    { label: 'State', fieldName: 'State__c', editable: true }
  ];

connectedCallback(){
    subscribe(this.context, MYAPPCHANNEL, (message)=>{this.handleMessage(message)}, {scope : APPLICATION_SCOPE} )
}


handleMessage(message){
   this.addressList = message.applicantObjectLMS.value
}



}