import { AfterViewInit, Component, ComponentRef, Inject, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IBaseLoaderComponent, IDynamicDialogData } from "src/app/models";
import { DynamicComponentLoaderDirective } from "src/app/directives";

@Component({
    selector: 'dynamic-dialog',
    templateUrl: 'dynamic.dialog.html'
})
export class DynamicDialog<T, I extends IBaseLoaderComponent<T>>
    implements AfterViewInit {

    @ViewChild(DynamicComponentLoaderDirective) outlet!: DynamicComponentLoaderDirective

    outletRef: ComponentRef<I>;

    constructor(
        protected _dialogRef: MatDialogRef<DynamicDialog<T, I>>,
        @Inject(MAT_DIALOG_DATA) public data: IDynamicDialogData<T, I>
    ) { }

    ngAfterViewInit(): void {
        setTimeout(() => this.load(), 0);
    }

    load = (): void => {
        this.outletRef = this.outlet?.viewContainerRef?.createComponent<I>(this.data.component);

        this.outletRef.instance.data = this.data?.inputData;
        // this.outletRef?.changeDetectorRef?.detectChanges();
    }
}
