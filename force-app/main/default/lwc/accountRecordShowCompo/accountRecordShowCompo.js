import { LightningElement } from 'lwc';
import accountRecordMethod from '@salesforce/apex/AccountProvider.accountRecordMethod'
export default class AccountRecordShowCompo extends LightningElement {

    totalRecords = 0
    accountObject = {'sObjectType':'Account'}
    accList;

    columns = [
        { label: 'Id', fieldName: 'Id', editable: true },
        { label: 'Name', fieldName: 'Name', editable: true },
        { label: 'Created By', fieldName: 'CreatedBy', editable: true }
      ];
      draftValues=[];

      nameHandler(event){
this.accountObject.Name = event.target.value
      }

      showButtonHandler(){
        accountRecordMethod({objAcc:this.accountObject})

        .then(result=>{
console.log('result='+JSON.stringify(result))
this.accList = result
this.totalRecords = result.length
        })

        .catch(error=>{
console.log('error='+JSON.stringify(error))
        })
      }

    
}