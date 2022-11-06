import { Type } from "@angular/core";
import { IBaseLoaderComponent } from "../idynamic-component-loader";

export interface IDynamicDialogData<T, I extends IBaseLoaderComponent<T>> {
    component: Type<I>;
    inputData: T;
}
