import { LightningElement } from 'lwc';
import showLatestRecordMethod from '@salesforce/apex/AccountProvider.showLatestRecordMethod'
export default class ConnectedCallbackexampleCompo extends LightningElement {

objAccount = {'sObjectType':'Account'}
accList

columns = [
    { label: 'Id', fieldName: 'Id', editable: true },
    { label: 'Name', fieldName: 'Name', editable: true },
    { label: 'Type', fieldName: 'Type', editable: true },
    { label: 'Rating', fieldName: 'Rating', editable: true },
    { label: 'Created Date', fieldName: 'CreatedDate', editable: true }
  ];
  
    connectedCallback(){
        showLatestRecordMethod({objAcc:this.objAccount})
        .then(result=>{
console.log('result='+JSON.stringify(result))
this.accList = result
        })

        .catch(error=>{
console.log('error='+JSON.stringify(error))
        })
    }
}