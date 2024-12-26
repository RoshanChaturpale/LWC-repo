import { LightningElement } from 'lwc';

export default class BasicJavaScriptProperties extends LightningElement {

    name;
    firstName = 'Ram'
    lastName = 'Laxman'
    salary = 10000.500
    age = 20
    todayDate = new Date()
    salesforceDev = true

    objAccount = {'sObjectType' : 'Account'}
    objAccount = {'Name' : 'Cinemax' , 'Rating':'Hot'}



    employeeList = ['Bunty'+' , '+'bubly'+' , '+'Sachin'+' , '+'Ramesh']


   display(){
console.log('I am Display Method')
    }

  get calculation(){
    this.display();
console.log('I am Calculation Method')

return 'Bubli';
    }
    
}