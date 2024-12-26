import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent' ;
import recordShowByDateAndType from '@salesforce/apex/AccountProvider.recordShowByDateAndType'
export default class ShowAccRecordsByDateComponent extends LightningElement {


objAccount = {'sObjectType' : 'Account'}
fDate
tDate
accList
totalRecords = 0
showSpinnerFlag = false
showTableFlag = false

columns = [
    { label: 'Id', fieldName: 'Id', editable: true },
    { label: 'Name', fieldName: 'Name', editable: true },
    { label: 'Type', fieldName: 'Type', editable: true },
    { label: 'Rating', fieldName: 'Rating', editable: true },
    { label: 'Created Date', fieldName: 'CreatedDate', editable: true },
  ];

    fromDateHandler(event){
 this.fDate = event.target.value
 console.log('I am from date'+this.fDate)
    }

    toDateHandler(event){
 this.tDate = event.target.value
 console.log('I am to date'+this.tDate)
    }

    typeFieldHandler(event){
       this.showSpinnerFlag = true
 this.objAccount.type = event.target.value
 console.log('I am Type field'+this.objAccount.type)

 recordShowByDateAndType({objAcc : this.objAccount, frmDate : this.fDate, toDte:this.tDate})

 .then(result=>{
console.log('result='+JSON.stringify(result))
this.accList = result
this.showSpinnerFlag = false
this.showSuccessToast()
this.totalRecords = result.length

if(result.length >= 1){
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