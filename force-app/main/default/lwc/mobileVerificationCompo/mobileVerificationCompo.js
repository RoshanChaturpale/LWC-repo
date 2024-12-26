import { LightningElement, api } from 'lwc';
import {CloseActionScreenEvent} from 'lightning/actions';
import mobileVerificationMethod from '@salesforce/apex/MobileVerificationAPI.mobileVerificationMethod'
export default class MobileVerificationCompo extends LightningElement {

    @api recordId

    mobileVerificationHandler(){

        //calling apex method

        mobileVerificationMethod({'ContactId' : this.recordId})

        .then(success=>{
    console.log('result ='+success)
    this.dispatchEvent(new CloseActionScreenEvent());
    window.location.reload();

        })

        .catch(error=>{
console.log('error='+error)
this.dispatchEvent(new CloseActionScreenEvent());
window.location.reload();

        })
    }
}