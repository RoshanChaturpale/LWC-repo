import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import accountCreationMethodForCrud from '@salesforce/apex/AccountProvider.accountCreationMethodForCrud'
import searchAccountMethod from '@salesforce/apex/AccountProvider.searchAccountMethod'
import updateAccountMethod from '@salesforce/apex/AccountProvider.updateAccountMethod'
import deleteAccountMethod from '@salesforce/apex/AccountProvider.deleteAccountMethod'
export default class CRUDComponent extends LightningElement {

    accountObj={'sObjectType':'Account'}

    showInputFieldFlag = false
    showSpinnerFlag = false
    showSaveButtonFlag = false
    showSearchNowButtonFlag = false
    showUpdateNowButtonFlag = false
    showSearchFieldFlag = false

    nameHandler(event){
this.accountObj.Name = event.target.value;
console.log('Name value = '+event.target.value)
    }

    typeHandler(event){
this.accountObj.Type = event.target.value
console.log('Type value = '+event.target.value)
    }

    slaHandler(event){
this.accountObj.SLA__c = event.target.value;
console.log('SLA value = '+event.target.value)
    }

    createButtonHandler(){
console.log('I am create')
this.showInputFieldFlag = true
this.showSaveButtonFlag = true
this.showSearchNowButtonFlag = false
this.showSearchFieldFlag = false
    }

    searchButtonHandler(){
        console.log('I am search')
        this.showInputFieldFlag = false
        this.showSaveButtonFlag = false
        this.showSearchNowButtonFlag = true
        this.showUpdateNowButtonFlag = false
        this.showSearchFieldFlag = false

        
    }

    updateButtonHandler(){
        console.log('I am update')
        this.showInputFieldFlag = true
        this.showSaveButtonFlag = false
        this.showSearchNowButtonFlag = false
        this.showUpdateNowButtonFlag = true
        this.showSearchFieldFlag = false

    }

    deleteButtonHandler(){
        if(confirm('Are you sure') == true){
        
        this.showSpinnerFlag = true
        console.log('I am delete')
        this.showSaveButtonFlag = false
        this.showSearchNowButtonFlag = false
        this.showUpdateNowButtonFlag = false
        this.showSearchFieldFlag = false

        
        deleteAccountMethod({objAcc:this.accountObj})

        .then(result=>{
console.log('result ='+JSON.stringify(result))
this.showSpinnerFlag = false
this.showErrorToast()
        })

        .catch(error=>{
console.log('error ='+JSON.stringify(error))
        })
    }
    }

    showErrorToast() {
        const evt = new ShowToastEvent({
            title: 'Message',
            message: 'Record is deleted succesfully...!!!',
            variant: 'error',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }

    saveButtonHandler(){
        this.showSpinnerFlag = true
    console.log('I am save')
    accountCreationMethodForCrud({objAcc:this.accountObj})

    .then(result=>{
console.log('Result='+JSON.stringify(result))
this.showSuccessToast()
this.showSpinnerFlag = false
    })

    .catch(error=>{
console.log('Error ='+JSON.stringify(error))
this.showSpinnerFlag = false
    })
    }

    showSuccessToast() {
        const evt = new ShowToastEvent({
            title: 'Message',
            message: 'Record is created!!!',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }

    searcNowButtonHandler(){
        this.showSpinnerFlag = true
        console.log('I am search now')

        searchAccountMethod({objAcc:this.accountObj})

        .then(result=>{
        console.log('result='+JSON.stringify(result))
        this.accountObj = result
        this.showSpinnerFlag = false
        this.showInfoToast()
        this.showSearchFieldFlag = true
        })

        .catch(error=>{
        console.log('error='+JSON.stringify(error))
        this.showSpinnerFlag = false
        })

    }

    showInfoToast() {
        const evt = new ShowToastEvent({
            title: 'Message',
            message: 'Record is found...!!!',
            variant: 'info',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }

    updateNowButtonHandler(){
        console.log('I am update now')
        this.showSpinnerFlag = true

        updateAccountMethod({objAcc:this.accountObj})

        .then(result=>{
console.log('result ='+JSON.stringify(result))
this.showUpdateToast()
this.showSpinnerFlag = false
        })

        .catch(error=>{
console.log('error='+JSON.stringify(error))
this.showSpinnerFlag = false
        })
    }

    showUpdateToast() {
        const evt = new ShowToastEvent({
            title: 'Message',
            message: this.accountObj.Name+'Record is updated...!!!',
            variant: 'warning',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }


    
}