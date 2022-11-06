import { AfterViewInit, Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Entity, IFormDialogData, IReturnableLoaderComponent } from "src/app/models";
import { BaseApi } from "src/app/services";
import { DynamicDialog } from "../dynamic";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'form-dialog',
    templateUrl: 'form.dialog.html'
})
export class FormDialog<T extends FormGroup, E extends Entity, S extends BaseApi<E>>
    extends DynamicDialog<T, IReturnableLoaderComponent<T>, IFormDialogData<T, E, S>>
    implements AfterViewInit {

    constructor(
        dialogRef: MatDialogRef<FormDialog<T, E, S>>,
        @Inject(MAT_DIALOG_DATA) data: IFormDialogData<T, E, S>
    ) {
        super(dialogRef, data);
    }

    save = async () => {
        const res = await this.data.dataSvc.save(this.outletRef?.instance?.value?.value);

        res && this._dialogRef.close(res);
    }
}
