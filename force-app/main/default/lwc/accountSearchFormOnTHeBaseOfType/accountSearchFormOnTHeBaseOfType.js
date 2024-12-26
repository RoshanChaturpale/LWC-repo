import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent' ;
import searchByTypeMethod from '@salesforce/apex/AccountProvider.searchByTypeMethod'
export default class AccountSearchFormOnTHeBaseOfType extends LightningElement {

objAccount = {'sObjectType':'Account'}
accList
totalRecords = 0
showTableFlag = false

typeFieldHandler(event){
    this.objAccount.Type = event.target.value
    console.log('Type value='+this.objAccount.Type)

}

searchButtonHandler(){
console.log('I am search from JS')

searchByTypeMethod({objAcc:this.objAccount})

.then(result=>{
console.log('Result='+JSON.stringify(result))
this.accList = result
this.showSuccessToast()
this.totalRecords = result.length


if(result.length >= 1){
this.showTableFlag = true
this.showSuccessToast()
}else{
    this.showTableFlag = false
}

})

.catch(error=>{
    console.log('Error='+JSON.stringify(error))
})
}

showSuccessToast() {
    const evt = new ShowToastEvent({
        title: 'Message',
        message: 'Record Is Found...!!!',
        variant: 'success',
        mode: 'dismissable'
    });
    this.dispatchEvent(evt);
}


}