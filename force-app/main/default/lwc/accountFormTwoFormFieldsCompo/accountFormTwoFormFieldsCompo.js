import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent' ;
import accountCreationMethod from '@salesforce/apex/AccountProvider.accountCreationMethod'
export default class AccountFormTwoFormFieldsCompo extends LightningElement {

objAccount = {'sObjectType' : 'Account'}
msg = 'Waiting'

nameOnChange(event){
this.objAccount.Name = event.target.value;
}

ratingOnChange(event){
    this.objAccount.Rating = event.target.value;
}

    handleSaveButton(){
        console.log('I am JS save button')

        accountCreationMethod({'objAcc':this.objAccount})

        .then(result=>{
       console.log('result='+JSON.stringify(result))
       this.showSuccessToast(result)
       this.msg = result
        })
        .catch(error=>{
console.log('error='+JSON.stringify(error))
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