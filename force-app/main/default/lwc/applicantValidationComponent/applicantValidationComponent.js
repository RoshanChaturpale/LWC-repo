import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import applicantCreation from '@salesforce/apex/ApplicantProvider.applicantCreation'
export default class ApplicantValidationComponent extends LightningElement {


    objectApp = {'sobjectType' : 'Applicant__c'}

    msg = 'Waiting'

    handleNameField(event){
this.objectApp.Name = event.target.value
console.log('Name ='+this.objectApp.Name)
    }

    handleGenderField(event){
        this.objectApp.Gender__c = event.target.value
        console.log('Gender ='+this.objectApp.Gender__c)
    }

    handlePoliceVerField(event){
        this.objectApp.Police_Verification__c = event.target.value
        console.log('Police ver ='+this.objectApp.Police_Verification__c)
    }

    saveButtonHandler(){
        console.log('I am a save button from JS')

        applicantCreation({objApp : this.objectApp})

        .then(result=>{
console.log('result='+JSON.stringify(result))
this.showSuccessToast(result)
this.msg = result
        })

        .catch(error=>{
console.log('Error='+JSON.stringify(error))
        })
    }

    showSuccessToast(result) {
        const evt = new ShowToastEvent({
            title: 'Message',
            message: result,
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }





}