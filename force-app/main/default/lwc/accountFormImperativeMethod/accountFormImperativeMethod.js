import { LightningElement } from 'lwc';
import accountCreationMethod from '@salesforce/apex/AccountProvider.accountCreationMethod'
export default class AccountFormImperativeMethod extends LightningElement {

objAccount = {'sObjectType' : 'Account'}
msg = 'Waiting'

nameOnChange(event){
this.objAccount.Name = event.target.value;
console.log('Value came in Event='+this.objAccount.Name)
    }

    handleSubmitButton(){
        console.log('I am submit button in JS')

        accountCreationMethod({'objAcc' : this.objAccount})

        .then(result=>{
console.log('Result='+JSON.stringify(result))
        this.msg = result
        })
        
        .catch(error=>{
console.log('error='+JSON.stringify(error))
        })
    }
}