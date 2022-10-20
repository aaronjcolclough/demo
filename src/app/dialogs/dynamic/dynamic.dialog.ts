import {DynamicComponentLoaderDirective} from '../../directives'

@Component({
    selector: 'dynamic-dialog',
    templateUrl: 'dynamic.dialog.html'
})
export class DynamicDialog {
    @ViewChild(DynamicComponentLoaderDirective) outlet!: DynamicComponentLoaderDirective

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }


}