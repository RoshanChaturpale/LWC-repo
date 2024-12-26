import { LightningElement } from 'lwc';
import showAccNameMethod from '@salesforce/apex/AccountProvider.showAccNameMethod'
export default class ParentComponentNew extends LightningElement {


 accountObject={'sObjectType':'Account'}

 accList

 nameHandler(event){
    this.accountObject.Name = event.target.value;
    

 }

 typeHandler(event){
this.accountObject.Type = event.target.value;
 }



 showButtonHandler(){

    showAccNameMethod({objAcc:this.accountObject})

    .then(result=>{
console.log('result='+JSON.stringify(result))
this.accList = result
    })

    .catch(error=>{
        console.log('error='+JSON.stringify(error))
    })

 }

}