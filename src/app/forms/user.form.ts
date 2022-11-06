import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IReturnableLoaderComponent } from '../models';

@Component({
    selector: 'user-form',
    templateUrl: 'user.form.html'
})
export class UserForm implements IReturnableLoaderComponent<FormGroup> {
    private _form: FormGroup;

    set data(data: FormGroup) { this._form = data; }
    get value() { return this._form; }
}
