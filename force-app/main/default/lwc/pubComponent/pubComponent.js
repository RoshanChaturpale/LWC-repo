import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
export default class PubComponent extends LightningElement {


    objAccount = {'sObjectType':'Account'}

    nameHandler(event){
this.objAccount.Name = event.target.value
    }

    sendButtonHandler(){

        pubsub.publish('eventname', this.objAccount)
    }
}