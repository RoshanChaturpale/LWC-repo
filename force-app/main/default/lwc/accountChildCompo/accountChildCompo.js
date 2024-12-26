import { LightningElement, api } from 'lwc';


export default class AccountChildCompo extends LightningElement {


    @api contatcList

    

   draftValues=[];

    columns = [
        { label: 'Id', fieldName: 'Id', editable: true },
        { label: 'First Name', fieldName: 'FirstName', editable: true },
        { label: 'Last Name', fieldName: 'LastName', editable: true }
      ];
      
}