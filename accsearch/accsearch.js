import { LightningElement,track } from 'lwc';

export default class Accsearch extends LightningElement {
    @track name1
    name='actor rajinikanth';
    changename(event){
        console.log('event.target.value======='+event.target.value);
		console.log('event.target.value======='+event.target);
        name1=event.target.value;
    }
}
