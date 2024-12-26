import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent' ;
import showLatestRecordMethod from '@salesforce/apex/AccountProvider.showLatestRecordMethod'
export default class ShowLatestTenAccountCompo extends LightningElement {

objAccount = {'sObjectType' : 'Account'}
accList
totalRecords = 0
showSpinnerFlag = false
showTableFlag = false

columns = [
    { label: 'Id', fieldName: 'Id', editable: true },
    { label: 'Name', fieldName: 'Name', editable: true },
    { label: 'Type', fieldName: 'Type', editable: true },
    { label: 'Rating', fieldName: 'Rating', editable: true },
    { label: 'Created Date', fieldName: 'CreatedDate', editable: true }
  ];

showButtonHandler(){
    this.showSpinnerFlag = true
console.log('I am show button from JS')

showLatestRecordMethod({objAcc:this.objAccount})

.then(result=>{
console.log('Result='+JSON.stringify(result))
this.accList = result
this.showSpinnerFlag = false
this.showSuccessToast()
this.totalRecords = result.length

if(result.length >= 1){
    this.showTableFlag = true
}
else{
    this.showTableFlag = false
}
})

.catch(error=>{
console.log('Error='+JSON.stringify(error))
this.showSpinnerFlag = false
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