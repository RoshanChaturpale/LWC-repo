import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent' ;
import searchRecordByFirstLetter from '@salesforce/apex/AccountProvider.searchRecordByFirstLetter'
export default class ComponentShownByItsFirstCharacterCompo extends LightningElement {


objAccount = {'sObjectType':'Account'}
accList
showSpinnerFlag = false
totalRecords = 0
showTableFlag = false

columns = [
    { label: 'Id', fieldName: 'Id', editable: true },
    { label: 'Name', fieldName: 'Name', editable: true },
    { label: 'Type', fieldName: 'Type', editable: true },
    { label: 'Rating', fieldName: 'Rating', editable: true }
  ];

  draftValues=[];

    
    nameFieldHandler(event){
        this.objAccount.Name = event.target.value
        console.log('Name ='+this.objAccount.Name)
    }

    typeFieldHandler(event){
       this.showSpinnerFlag = true
        this.objAccount.Type = event.target.value
        console.log('Type ='+this.objAccount.Type)

        searchRecordByFirstLetter({objAcc:this.objAccount})
        .then(result=>{
console.log('result='+JSON.stringify(result))
       this.accList = result
       this.totalRecords = result.length
       this.showSpinnerFlag = false
       this.showSuccessToast()

       if(result.length >= 1){
this.showTableFlag = true
       }else{
        this.showTableFlag = true
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