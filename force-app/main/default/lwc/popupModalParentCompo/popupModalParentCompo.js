import { LightningElement } from 'lwc';
import relatedRecordsMethod from '@salesforce/apex/AccountProvider.relatedRecordsMethod'
export default class PopupModalParentCompo extends LightningElement {

objAccount = {'sObjectType':'Account'}
contactList
showChildFlag = false

errorCallback(error, stack){
    console.log('From error callback'+error+', '+stack);
          }

nameFieldHandler(event){
this.objAccount.Name = event.target.value
}

popButtonHandler(){

    relatedRecordsMethod({objAcc : this.objAccount})

    .then(result=>{
console.log('result='+JSON.stringify(result))
this.contactList = result
this.showChildFlag = true
    })

    .catch(error=>{
console.log('error='+JSON.stringify(error))
this.showChildFlag = false
    })

}

closepopuphandlerEventParent(event){
this.showChildFlag = event.detail.message
console.log('value came from child ='+event.detail.message)
}

}