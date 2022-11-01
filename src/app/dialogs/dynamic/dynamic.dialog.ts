import { AfterViewInit, ChangeDetectorRef, Component, Inject, Type, ViewChild } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IDynamicLoaderComponent } from "src/app/models";
import { DynamicComponentLoaderDirective } from "src/app/directives";
import { ComponentNamePipe } from "src/app/pipes";

@Component({
    selector: 'dynamic-dialog',
    templateUrl: 'dynamic.dialog.html'
})
export class DynamicDialog implements AfterViewInit {
    @ViewChild(DynamicComponentLoaderDirective) outlet!: DynamicComponentLoaderDirective

    constructor(
        private cd: ChangeDetectorRef,
        @Inject(MAT_DIALOG_DATA) public data: {
            component: Type<IDynamicLoaderComponent>,
            inputData: any
        }
    ) { }

    ngAfterViewInit(): void {
        this.load();
        ComponentNamePipe.prototype.transform(DynamicDialog.name);
        // this.cd.detectChanges();
    }

    load = () => {
        const outletRef = this.outlet.viewContainerRef.createComponent<IDynamicLoaderComponent>(this.data.component);

        outletRef.instance.data = this.data.inputData;
        outletRef.changeDetectorRef.detectChanges();
    }
}
