import { LightningElement, api, track, wire } from 'lwc';
import callingApexByWireMethod from '@salesforce/apex/AccountProvider.callingApexByWireMethod'
export default class CallingApexByWireComponent extends LightningElement {

    @api recordId

    @wire (callingApexByWireMethod, {accId : "$recordId"})
    accounts;
}