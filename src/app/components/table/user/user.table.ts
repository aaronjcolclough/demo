import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import { User } from 'src/app/models';
import { UserApi } from 'src/app/services';
import { BaseTableComponent } from '../base-table.component';

@Component({
    selector: 'user-table',
    templateUrl: 'user.table.html'
})
export class UserTable
    extends BaseTableComponent<User, UserApi> {

    displayedColumns: string[] = ['position', 'name', 'email', 'actions'];

    constructor(
        liveAnnouncer: LiveAnnouncer,
        userApi: UserApi
    ) {
        super(liveAnnouncer, userApi);
    }
}
