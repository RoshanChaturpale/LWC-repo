import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent' ;
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import SALUTATION_FIELD from '@salesforce/schema/Contact.Salutation'
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName'
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName'
import PARENT_FIELD from '@salesforce/schema/Contact.AccountId'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'
import MOBILE_FIELD from '@salesforce/schema/Contact.MobilePhone'

export default class AnotherWayContactForm extends LightningElement {

conObject = CONTACT_OBJECT
salutation = SALUTATION_FIELD
firstName = FIRSTNAME_FIELD
lastName = LASTNAME_FIELD
parentAcc = PARENT_FIELD
email = EMAIL_FIELD
mobile = MOBILE_FIELD


fieldShowFlag = false

handleShowButton(){
    
this.fieldShowFlag = true
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