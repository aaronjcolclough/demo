import {
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'card',
    templateUrl: 'card.component.html'
})
export class CardComponent {
    @Input() width: number | string = 'auto';
    @Input() minWidth: number = 320;
    @Input() maxWidth: number = 420;
    @Input() layout = 'column';
    @Input() alignment = 'start stretch';
    @Input() options = 'card-outline-divider rounded';
    @Input() padding: number = 0;
    @Input() margin: number = 4;
}
