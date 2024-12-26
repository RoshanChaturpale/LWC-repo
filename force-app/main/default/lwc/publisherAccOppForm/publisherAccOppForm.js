import { LightningElement, track, wire } from 'lwc';
import opportunityRecordMethod from '@salesforce/apex/AccountProvider.opportunityRecordMethod'
import MYCHANNEL from "@salesforce/messageChannel/AccountDataChannel__c";
import {publish, MessageContext} from "lightning/messageService"
export default class PublisherAccOppForm extends LightningElement {

  @track  accountObj = {'sObjectType':'Account'}
   @track oppList

    @wire(MessageContext)
    context

    nameHandler(event){
this.accountObj.Name = event.target.value
    }

    showButtonHandler(){
console.log('I am JS button handler')

opportunityRecordMethod({objAcc:this.accountObj})
.then(result=>{
console.log('result='+JSON.stringify(result))
this.oppList = result

const message={
    accountName:{
        value:this.oppList
    }
 }

 publish(this.context, MYCHANNEL, message);
})

.catch(error=>{
    console.log('error='+JSON.stringify(error))
})
    }
}