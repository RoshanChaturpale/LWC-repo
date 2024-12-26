import { LightningElement, api } from 'lwc';

export default class AddressChildCompo extends LightningElement {

    @api addList

    columns = [
        { label: 'Id', fieldName: 'Id', editable: true },
        { label: 'Pan Card', fieldName: 'Pan_Card__c', editable: true },
        { label: 'Pin Code', fieldName: 'Pin_Code__c', editable: true },
        { label: 'Country', fieldName: 'Country__c', editable: true },
        { label: 'City', fieldName: 'City__c', editable: true },
        { label: 'State', fieldName: 'State__c', editable: true }
      ];

      draftValues=[];
}