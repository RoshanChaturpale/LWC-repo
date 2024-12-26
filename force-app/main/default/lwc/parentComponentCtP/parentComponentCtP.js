import { LightningElement, track } from 'lwc';

export default class ParentComponentCtP extends LightningElement {

accountObject = {'sObjectType':'Account'}

    parentHandlerMethod(event){

this.accountObject = event.detail.message

    }
}