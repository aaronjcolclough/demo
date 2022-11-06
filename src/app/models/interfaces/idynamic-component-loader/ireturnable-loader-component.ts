import { FormGroup } from "@angular/forms";
import { IBaseLoaderComponent } from "./ibase-loader-component";

export interface IReturnableLoaderComponent<T> extends IBaseLoaderComponent<T> {
    get value(): T;
}
