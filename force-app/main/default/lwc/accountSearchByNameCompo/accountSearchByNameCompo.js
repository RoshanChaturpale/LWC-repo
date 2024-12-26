import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import accountSearchMethod from '@salesforce/apex/AccountProvider.accountSearchMethod'
export default class AccountSearchByNameCompo extends LightningElement {


    objAccount = {'sObjectType':'Account'}
    accList
    totalRecords = 0
    showTableFlag = false

    handleNameChangeField(event){
    this.objAccount.Name = event.target.value
    console.log('Name value='+this.objAccount.Name)
    }

    searchButtonHandler(){
        console.log('I am search button')
    
        accountSearchMethod({objAcc: this.objAccount})

        .then(result=>{
         console.log('result='+JSON.stringify(result))
         this.accList = result
         this.totalRecords = result.length
      //   this.showSuccessToast()

         if(result.length >=1){
            this.showTableFlag = true
            this.showSuccessToast()
            
         }else{
            this.showTableFlag = false
         }
        })

        .catch(error=>{
        console.log('Error='+JSON.stringify(error))
        })

    }

    showSuccessToast() {
        const evt = new ShowToastEvent({
            title: 'Message',
            message: 'Record is Found...!!!',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
}