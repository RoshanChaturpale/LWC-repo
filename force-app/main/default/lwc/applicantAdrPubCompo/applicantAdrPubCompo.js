import { LightningElement } from 'lwc';
import addressProviderMethod from '@salesforce/apex/ApplicantProvider.addressProviderMethod'
export default class ApplicantAdrPubCompo extends LightningElement {

    applicantObj = {'sObjectType':'Account'}
    adrList

    firstNameHandler(event){
    this.applicantObj.Name = event.target.value
    }

    sendButtonHandler(){
        addressProviderMethod({objAppNew:this.applicantObj})

        .then(result=>{
console.log('result='+JSON.stringify(result))
this.adrList = result
        })

        .catch(error=>{
console.log('error='+JSON.stringify(error))
        })

        
    }
}