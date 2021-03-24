import { LightningElement, api } from 'lwc';

export default class PaddingComponent extends LightningElement {
    @api size;

    get paddingSize() {
        var padding;
        switch(this.size) {
            case 'Extra Extra Small':
                padding = 'slds-p-around_xxx-small';
                break;
            case 'Extra Extra Small':
                padding = 'slds-p-around_xx-small';
                break;
            case 'Extra Small':
                padding = 'slds-p-around_x-small';
                break;
            case 'Small':
                padding = 'slds-p-around_small';
                break;
            case 'Medium':
                padding = 'slds-p-around_medium';
                break;
            case 'Large':
                padding = 'slds-p-around_large';
                break;
            case 'Extra Large':
                padding = 'slds-p-around_x-large';
                break;
            case 'Extra Extra Large':
                padding = 'slds-p-around_xx-large'
        }
        return padding;
    }
}