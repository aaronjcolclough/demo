import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges
} from '@angular/core';

@Component({
    selector: 'selector',
    templateUrl: 'selector.component.html'
})
export class SelectorComponent<T> implements OnChanges {
    @Input() data: T;
    @Input() selected: boolean = false;
    @Output() select = new EventEmitter<T>();

    private baseOptions = 'background-card rounded cursor-pointer';
    private deselectedOptions = `${this.baseOptions} card-outline-divider`;
    private selectedOptions = `${this.baseOptions} card-outline-primary`;

    options = this.deselectedOptions;
    selectedIcon = 'radio_button_unchecked';

    private updateSelected = () => {
        if (this.selected) {
            this.options = this.selectedOptions;
            this.selectedIcon = 'radio_button_checked';
        } else {
            this.options = this.deselectedOptions;
            this.selectedIcon = 'radio_button_unchecked';
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.selected)
            this.updateSelected();
    }
}