import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent' ;
import ADDRESS_OBJECT from '@salesforce/schema/Address__c'
import PARENT_FIELD from '@salesforce/schema/Address__c.Applicant__c'
import ADDRESSONE_FIELD from '@salesforce/schema/Address__c.Address_Line_1__c'
import ADDRESSTWO_FIELD from '@salesforce/schema/Address__c.Address_Line_2__c'
import COUNTRY_FIELD from '@salesforce/schema/Address__c.Country__c'
import STATE_FIELD from '@salesforce/schema/Address__c.State__c'
import CITY_FIELD from '@salesforce/schema/Address__c.City__c'
import PAN_FIELD from '@salesforce/schema/Address__c.Pan_Card__c'
import PIN_FIELD from '@salesforce/schema/Address__c.Pin_Code__c'

export default class AnotherWayToCreateAddressForm extends LightningElement {

    objAddress = ADDRESS_OBJECT
    parentField = PARENT_FIELD
    addOne = ADDRESSONE_FIELD
    addTwo = ADDRESSTWO_FIELD
    country = COUNTRY_FIELD
    state = STATE_FIELD
    city = CITY_FIELD
    pan = PAN_FIELD
    pin = PIN_FIELD

    showSuccessToast() {
        const evt = new ShowToastEvent({
            title: 'Message',
            message: 'Address new record is created...!!!',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }

}