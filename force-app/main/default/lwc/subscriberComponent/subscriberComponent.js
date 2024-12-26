import { LightningElement } from 'lwc';
import pubsub from "c/pubsub"
export default class SubscriberComponent extends LightningElement {

    opportunityList

    columns = [
        { label: 'Id', fieldName: 'Id', editable: true },
        { label: 'Name', fieldName: 'Name', editable: true },
        { label: 'Amount', fieldName: 'Amount', editable: true },
        { label: 'CLose Date', fieldName: 'CloseDate', editable: true },
        { label: 'Stage', fieldName: 'StageName', editable: true }
      ];

      draftValues=[];

    connectedCallback(){
        pubsub.subscribe('eventname' , (message)=>{
            this.opportunityList = message
            console.log('message='+JSON.stringify(message))
        })
    }
}