import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { DemoInfoComponent } from 'src/app/components';
import { FormDialog } from 'src/app/dialogs';
import { DynamicDialog } from 'src/app/dialogs/dynamic/dynamic.dialog';
import { UserForm } from 'src/app/forms';
import { Demo, Demos, GenerateUserForm, User } from 'src/app/models';
import { UserApi } from 'src/app/services';

@Component({
    selector: 'dynamic-component-loader-route',
    templateUrl: 'dynamic-component-loader.route.html',
})
export class DynamicComponentLoaderRoute implements OnInit {
    private _demo: Demo;

    constructor(
        private _dialog: MatDialog,
        private _fb: FormBuilder,
        public userApi: UserApi
    ) { this._demo = Demos.at(0); }

    ngOnInit(): void {
        this.info();
    }

    info = () => this._dialog.open(DynamicDialog, {
        data: {
            component: DemoInfoComponent,
            inputData: this._demo
        }
    })

    edit = (user: User) => this._dialog.open(FormDialog, {
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
