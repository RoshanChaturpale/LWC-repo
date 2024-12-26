import { LightningElement } from 'lwc';

export default class GrandParent extends LightningElement {

z;

grandParentHandler(event){
this.z = event.detail.message
}

}