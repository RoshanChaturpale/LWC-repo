import { LightningElement, wire } from 'lwc';
import MYCHANNEL from "@salesforce/messageChannel/AccountDataChannel__c";
import {subscribe, MessageContext,APPLICATION_SCOPE} from "lightning/messageService"
export default class SubscriberAccOppForm extends LightningElement {

    opportunityList

    @wire(MessageContext)
    context

    columns = [
        { label: 'Id', fieldName: 'Id', editable: true },
        { label: 'Name', fieldName: 'Name', editable: true },
        { label: 'Amount', fieldName: 'Amount', editable: true },
        { label: 'Close Date', fieldName: 'CloseDate', editable: true },
        { label: 'Stage', fieldName: 'StageName', editable: true }
      ];

      draftValues=[];

    connectedCallback(){
        subscribe(this.context, MYCHANNEL, (message)=>{this.handleMessage(message)}, {scope : APPLICATION_SCOPE} )
    }
    
    
    handleMessage(message){
       this.opportunityList = message.accountName.value
       console.log('opportunity value from list='+JSON.stringify(this.opportunityList))
    }
    

}