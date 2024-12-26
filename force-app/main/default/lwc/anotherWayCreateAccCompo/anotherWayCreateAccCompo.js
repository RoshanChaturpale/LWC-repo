import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import RATING_FIELD from '@salesforce/schema/Account.Rating'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import ACTIVE_FIELD from '@salesforce/schema/Account.Active__c'
import SLA_FIELD from '@salesforce/schema/Account.SLA__c'
import PARENT_FIELD from '@salesforce/schema/Account.ParentId'

export default class AnotherWayCreateAccCompo extends LightningElement {

    objAccount = ACCOUNT_OBJECT
    name = NAME_FIELD
    rating = RATING_FIELD
    type = TYPE_FIELD
    active = ACTIVE_FIELD
    sla = SLA_FIELD
    parentAccount = PARENT_FIELD

    

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