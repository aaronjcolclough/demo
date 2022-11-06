import { BaseApi } from "src/app/services";
import { Entity } from "../../api";
import { IReturnableLoaderComponent } from "../idynamic-component-loader";
import { IDynamicDialogData } from "./idynamic-dialog-data";

export interface IFormDialogData<T, E extends Entity, S extends BaseApi<E>>
    extends IDynamicDialogData<T, IReturnableLoaderComponent<T>> {

    dataSvc: S;
}
