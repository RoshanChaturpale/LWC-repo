import { LightningElement } from 'lwc';
import searchByTypeMethod from '@salesforce/apex/AccountProvider.searchByTypeMethod'
export default class DeleteRecordBySelectingCheckboxCompo extends LightningElement {

    objAccount = {'sObjectType' : 'Account'}
    accList
    totalRecords = 0

    columns = [
        { label: 'Id', fieldName: 'Id', editable: true },
        { label: 'Name', fieldName: 'Name', editable: true },
        { label: 'Type', fieldName: 'Type', editable: true },
        { label: 'Rating', fieldName: 'Rating', editable: true },
        { label: 'SLA', fieldName: 'SLA__C', editable: true }
      ];

    typeFieldHandler(event){
this.objAccount.Type = event.target.value
console.log('Type value='+this.objAccount.Type)

searchByTypeMethod({objAcc:this.objAccount})

.then(result=>{
console.log('result='+JSON.stringify(result))
this.accList =result
this.totalRecords = result.length
})

.catch(error=>{
console.log('error='+JSON.stringify(error))
})
    }
}