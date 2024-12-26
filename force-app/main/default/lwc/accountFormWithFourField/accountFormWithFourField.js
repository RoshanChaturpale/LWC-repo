import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent' ;
import accountInsertMethod from '@salesforce/apex/AccountProvider.accountInsertMethod'
export default class AccountFormWithFourField extends LightningElement {


    accountObj = {'sObjectType':'Account'}

    msg = 'Waiting'

    handleNameField(event){
this.accountObj.Name = event.target.value
    }

    handleWebsiteField(event){
        this.accountObj.Website = event.target.value
    }

    handleAccountNumberField(event){
        this.accountObj.AccountNumber = event.target.value
    }

    handleSicField(event){
        this.accountObj.Sic = event.target.value
    }

    handleSaveButton(){

        accountInsertMethod({objAcc:this.accountObj})

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