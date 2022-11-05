import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { DynamicDialog } from 'src/app/dialogs/dynamic/dynamic.dialog';
import { UserForm } from 'src/app/forms';
import { GenerateUserForm, User } from 'src/app/models';
import { UserApi } from 'src/app/services';

@Component({
    selector: 'dynamic-component-loader-route',
    templateUrl: 'dynamic-component-loader.route.html',
    host: {
        'class': 'min-full-height'
    }
})
export class DynamicComponentLoaderRoute {
    constructor(
        private _dialog: MatDialog,
        private _fb: FormBuilder,
        public userApi: UserApi
    ) { }

    edit = (user: User) => this._dialog.open(DynamicDialog, {
        data: {
            component: UserForm,
            inputData: GenerateUserForm(user, this._fb),
            dataSvc: this.userApi
        },
        width: '500px',
        autoFocus: false,
        disableClose: true
    })
        .afterClosed()
        .subscribe(res => console.log("dialog output", res));
}
