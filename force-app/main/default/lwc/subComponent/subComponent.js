import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub'
export default class SubComponent extends LightningElement {

    objAcc = {'sObjectType':'Account'}

    connectedCallback(){
        pubsub.subscribe('eventname' , (message) =>{
            this.objAcc = message
        })
    }
}