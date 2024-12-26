import { LightningElement, api } from 'lwc';

export default class PopupModalChildCompo extends LightningElement {

    @api conList

    columns = [
        { label: 'Id', fieldName: 'Id', editable: true },
        { label: 'First Name', fieldName: 'FirstName', editable: true },
        { label: 'Last Name', fieldName: 'LastName', editable: true }
      ];

      draftValues=[];

      closeButtonHandler(){
        this.dispatchEvent(new CustomEvent('eventname', {
          detail: {
              message: false
          }
      }));

      }

      constructor(){
        super()
        console.log('I am constructor')
      }

      connectedCallback(){
        console.log('I am connected callback')
      }

      renderedCallback(){
console.log('I am rendered call back')
alert('Oye');
      }

      disconnectedCallback(){
console.log('I am disconnected callback')
throw new error('WhOops!')
      }

//       errorCallback(){
// console.log('I am error callback')
//       }
}