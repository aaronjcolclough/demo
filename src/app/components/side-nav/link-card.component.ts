import {
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'link-card',
    templateUrl: 'link-card.component.html'
})
export class LinkCardComponent {
    @Input() name: string;
}
