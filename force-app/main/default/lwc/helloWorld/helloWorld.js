import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

    x;

    showButtonHandler(){
this.x = 100;


    }

    constructor(){
        super()
        console.log('I am constructor')
    }

    connectedCallback(){
        console.log('I am from connected callback')
    }

    renderedCallback(){
        console.log('I am from rendered callback')
    }

    // disconnectedCallback(){
    //     console.log('I am from disconnected callback')
    // }

    errorCallback(){
        console.log('I am from error callback')
    }   
}