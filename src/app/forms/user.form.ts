import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IDynamicLoaderComponent } from '../models';

@Component({
    selector: 'user-form',
    templateUrl: 'user.form.html'
})
export class UserForm implements IDynamicLoaderComponent {
    private _form: FormGroup;
    get form() { return this._form; }

    set data(data: FormGroup) { this._form = data; }
    get return() { return this._form?.value; }
}
