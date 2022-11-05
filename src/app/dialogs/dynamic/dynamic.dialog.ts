import { AfterViewInit, Component, ComponentRef, Inject, Type, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Entity, IDynamicLoaderComponent } from "src/app/models";
import { DynamicComponentLoaderDirective } from "src/app/directives";
import { BaseApi, UserApi } from "src/app/services";

@Component({
    selector: 'dynamic-dialog',
    templateUrl: 'dynamic.dialog.html'
})
export class DynamicDialog<T extends Entity, S extends BaseApi<T>> implements AfterViewInit {
    @ViewChild(DynamicComponentLoaderDirective) outlet!: DynamicComponentLoaderDirective

    outletRef: ComponentRef<IDynamicLoaderComponent>;

    constructor(
        private _dialogRef: MatDialogRef<DynamicDialog<T,S>>,
        @Inject(MAT_DIALOG_DATA) public data: {
            component: Type<IDynamicLoaderComponent>,
            inputData: any,
            dataSvc: S
        }
    ) { }

    ngAfterViewInit(): void {
        setTimeout(() => this.load(), 0);
    }

    load = (): void => {
        this.outletRef = this.outlet?.viewContainerRef?.createComponent<IDynamicLoaderComponent>(this.data.component);

        this.outletRef.instance.data = this.data?.inputData;
        // this.outletRef?.changeDetectorRef?.detectChanges();
    }

    save = async () => {
        const res = await this.data.dataSvc.save(this.outletRef?.instance?.return);
        res && this._dialogRef.close(res);
    }
}
