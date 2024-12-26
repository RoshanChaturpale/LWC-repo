import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent' ;
import searchByTypeMethod from '@salesforce/apex/AccountProvider.searchByTypeMethod'
import deleteAccountRecordMethod from '@salesforce/apex/AccountProvider.deleteAccountRecordMethod'
export default class SearchAccountByTypeCompo extends LightningElement {

    

    objAccount = {'sObjectType' : 'Account'}
    accList
    selectedRecordCount = 0
    showSpinnerFlag = false
    showTableFlag = false

    columns = [
        { label: 'Id', fieldName: 'Id', editable: true },
        { label: 'Name', fieldName: 'Name', editable: true },
        { label: 'Type', fieldName: 'Type', editable: true },
        { label: 'SLA', fieldName: 'SLA__c', editable: true },
        { label: 'Rating', fieldName: 'Rating', editable: true },
        { label: 'Created Date', fieldName: 'CreatedDate', editable: true }
      ];



    typeFieldHandler(event){
        this.showSpinnerFlag = true
this.objAccount.Type = event.target.value
console.log('I am type value ='+this.objAccount.Type)

searchByTypeMethod({objAcc:this.objAccount})

.then(result=>{
console.log('result='+JSON.stringify(result))
this.accList = result
this.showSpinnerFlag = false
this.selectedRecordCount = result.length
this.showSuccessToast()

if(result.length >=1){
    this.showTableFlag = true
}else{
    this.showTableFlag = false
}

})

.catch(error=>{
    console.log('error='+JSON.stringify(error))
    this.showSpinnerFlag = false
})

    }

    selectedRecordsHandler(event){

        const selectedRows  =   event.detail.selectedRows;
        console.log("Selected Rows = "+selectedRows);
        this.selectedRecordCount = event.detail.selectedRows.length;
  
        let recordsSets = new Set();
  
        // getting selected record id
        for (let index = 0; index < selectedRows.length; index++) {
            recordsSets.add(selectedRows[index].Id);
        }
  
        // coverting to array
        this.selectedRecordsList = Array.from(recordsSets);

    }

    deleteButtonHandler(){
        deleteAccountRecordMethod({accIdList : this.accList, objAcc : this.objAccount})

        .then(result=>{
        console.log('result='+JSON.stringify(result))
        })
        .catch(error=>{
        console.log('error='+JSON.stringify(error))
        })
    }
    showSuccessToast() {
        const evt = new ShowToastEvent({
            title: 'Message',
            message: 'Record Found...!!!',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
	
}