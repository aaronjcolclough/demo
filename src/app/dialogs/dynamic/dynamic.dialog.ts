import { AfterViewInit, Component, ComponentRef, Inject, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IBaseLoaderComponent, IDynamicDialogData } from "src/app/models";
import { DynamicComponentLoaderDirective } from "src/app/directives";

@Component({
    selector: 'dynamic-dialog',
    templateUrl: 'dynamic.dialog.html'
})
export class DynamicDialog<T, I extends IBaseLoaderComponent<T>, D extends IDynamicDialogData<T, I>>
    implements AfterViewInit {

    @ViewChild(DynamicComponentLoaderDirective) outlet!: DynamicComponentLoaderDirective
    outletRef: ComponentRef<I>;

    constructor(
        protected _dialogRef: MatDialogRef<DynamicDialog<T, I, D>>,
        @Inject(MAT_DIALOG_DATA) protected data: D
    ) { }

    ngAfterViewInit(): void {
        this.load();
    }

    load = (): void => {
        this.outletRef = this.outlet?.viewContainerRef?.createComponent<I>(this.data.component);

        this.outletRef.instance.data = this.data?.inputData;
        this.outletRef?.changeDetectorRef?.detectChanges();
    }
}
