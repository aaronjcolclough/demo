import { Component, OnInit } from '@angular/core';
import { ThemeService, UserApi } from './services';
import { Demo, Demos } from './models';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    Demos: Demo[] = Demos;
    constructor(
        private _userApi: UserApi,
        public themer: ThemeService
    ) { }

    ngOnInit(): void {
        this._userApi.storeAll();
    }
}
