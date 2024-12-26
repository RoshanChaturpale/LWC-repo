import { LightningElement } from 'lwc';
import pubsub from "c/pubsub"
import opportunityRecordMethod from '@salesforce/apex/AccountProvider.opportunityRecordMethod' 
export default class PublisherComponent extends LightningElement {

accountObject = {'sObejctType':'Account'}
oppList


    nameHandler(event){
this.accountObject.Name = event.target.value
    }

    sendButtonHandler(){

        opportunityRecordMethod({objAcc:this.accountObject})

        .then(result=>{
console.log('result='+JSON.stringify(result))
this.oppList = result

pubsub.publish('eventname' , this.oppList)
        })

        .catch(error=>{
console.log('error='+JSON.stringify(error))
        })
    }
}