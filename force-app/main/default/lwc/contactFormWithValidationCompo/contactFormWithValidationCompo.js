import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import contactCreationMethod from '@salesforce/apex/ContactProvider.contactCreationMethod'
export default class ContactFormWithValidationCompo extends LightningElement {


    contactObject = {'sObjectType':'Contact'}

    msg = 'Waiting'

    handleFirstNameField(event){
        this.contactObject.FirstName = event.target.value
        console.log('First Name value='+this.contactObject.FirstName)
    }

    handleLastNameField(event){
        this.contactObject.LastName = event.target.value
        console.log('Last Name value='+this.contactObject.LastName)

    }

    handleEmailField(event){
        this.contactObject.Email = event.target.value
        console.log('Email value='+this.contactObject.Email)

    }

    saveButtonHandler(){
console.log('I am save button')

contactCreationMethod({objCon:this.contactObject})

.then(result=>{
console.log('Result='+JSON.stringify(result))
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