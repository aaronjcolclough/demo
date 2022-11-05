import { Type } from "@angular/core";
import { BaseApi } from "src/app/services";
import { Entity } from "../api";
import { IDynamicDialogData as IDynamicDialogData, IDynamicLoaderComponent } from "../interfaces";

export class DynamicDialogData<T extends Entity, S extends BaseApi<T>>
    implements IDynamicDialogData<T, S> {

    private _component: Type<IDynamicLoaderComponent>;
    private _dataSvc: S;
    private _inputData: T;

    constructor(
        component: Type<IDynamicLoaderComponent>,
        dataSvc: S,
        inputData: T
    ) {
        this._component = component;
        this._dataSvc = dataSvc;
        this._inputData = inputData;
    }

    get component() { return this._component; }
    get dataSvc() { return this._dataSvc; }
    get inputData() { return this._inputData; }
}
