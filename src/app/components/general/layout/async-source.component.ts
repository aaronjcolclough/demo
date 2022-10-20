import {
    Component,
    Input
} from '@angular/core';

import { QuerySource } from '../../../models';

@Component({
    selector: 'async-source',
    templateUrl: 'async-source.component.html'
})
export class AsyncSourceComponent<T> {
    @Input() src: QuerySource<T>;
    @Input() inlineControls = true;
    @Input() searchLabel = 'Search';
    @Input() searchMin = 1;
    @Input() emptyLabel = 'No Data Available';
    @Input() layout = 'row | wrap';
    @Input() alignment = 'start start';
    @Input() pageStyle: string;
}
