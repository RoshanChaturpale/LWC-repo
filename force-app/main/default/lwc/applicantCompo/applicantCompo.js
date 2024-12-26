import { LightningElement } from 'lwc';
import addressProviderMethod from '@salesforce/apex/ApplicantProvider.addressProviderMethod'
export default class ApplicantCompo extends LightningElement {


    objApplicant = {'sObjectType':'Applicant__c'}
    addressList

    nameFieldHandler(event){
        this.objApplicant.Name = event.target.value

    }

    sendButtonHandler(){

        addressProviderMethod({objApp:this.objApplicant})

        .then(result=>{
console.log('Result ='+JSON.stringify(result))
this.addressList = result
        })

        .catch(error=>{
console.log('Result ='+JSON.stringify(error))
        })
    }
}