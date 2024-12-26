import { LightningElement, track, wire } from 'lwc';
import addressProviderMethod from '@salesforce/apex/ApplicantProvider.addressProviderMethod'
import MYAPPCHANNEL from '@salesforce/messageChannel/ApplicantDataChannel__c'
import {publish, MessageContext} from "lightning/messageService"

export default class ApplicantPublisher extends LightningElement {

   @track applicantObject = {'sObjectType':'Account'}
   @track adrList

    @wire(MessageContext)
    context

    nameHandler(event){
this.applicantObject.Name = event.target.value;
    }

    sendButtonHandler(){
        addressProviderMethod({objApp:this.applicantObject})

        .then(result=>{
console.log('result='+JSON.stringify(result))
this.adrList = result
const message={
    applicantObjectLMS:{
        value:this.adrList
    }
}

publish(this.context, MYAPPCHANNEL, message);
        })

        .catch(error=>{
console.log('error='+JSON.stringify(error))
        })
    }
}