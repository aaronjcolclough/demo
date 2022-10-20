import { AfterViewInit, ChangeDetectorRef, Component, Inject, Type, ViewChild } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IDynamicLoaderComponent } from "../../models";
import { DynamicComponentLoaderDirective } from "../../directives";

@Component({
    selector: 'dynamic-dialog',
    templateUrl: 'dynamic.dialog.html'
})
export class DynamicDialog<T> implements AfterViewInit {
    @ViewChild(DynamicComponentLoaderDirective) outlet!: DynamicComponentLoaderDirective

    constructor(
        private cd: ChangeDetectorRef,
        @Inject(MAT_DIALOG_DATA) public data: {
            component: Type<IDynamicLoaderComponent>,
            inputData: any
        }
    ) { }

    ngAfterViewInit(): void {
        this.load()
        // this.cd.detectChanges();
    }

    load = () => {
        const outletRef = this.outlet.viewContainerRef.createComponent<IDynamicLoaderComponent>(this.data.component);

        outletRef.instance.data = this.data.inputData;
        outletRef.changeDetectorRef.detectChanges();
    }
}
