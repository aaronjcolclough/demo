import { Type } from "@angular/core";
import { BaseApi } from "src/app/services";
import { Entity } from "../api";
import { IDynamicLoaderComponent } from "./idynamic-component-loader";

export interface IDynamicDialogData<T extends Entity, S extends BaseApi<T>> {
    component: Type<IDynamicLoaderComponent>;
    inputData: T;
    dataSvc: S;
}
