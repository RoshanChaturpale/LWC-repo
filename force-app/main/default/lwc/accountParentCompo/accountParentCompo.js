import { LightningElement, track } from 'lwc';
import relatedRecordsMethod from '@salesforce/apex/AccountProvider.relatedRecordsMethod'
export default class AccountParentCompo extends LightningElement {


    objAccount = {'sObjectType':'Account'}
   @track conList;

    nameFieldHandler(event){
this.objAccount.Name = event.target.value
console.log('Value in name ='+this.objAccount.Name)
    }

    displayButtonHandler(){
console.log('I am JS button')

relatedRecordsMethod({objAcc:this.objAccount})

.then(result=>{
console.log('Result='+JSON.stringify(result))
this.conList = result
})
.catch(error=>{
console.log('error='+JSON.stringify(error))
})
    }
}