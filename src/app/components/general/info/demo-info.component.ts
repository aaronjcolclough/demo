import { Component } from '@angular/core';
import { IBaseLoaderComponent, Demo } from 'src/app/models';

@Component({
    selector: 'demo-info',
    templateUrl: 'demo-info.component.html'
})
export class DemoInfoComponent implements IBaseLoaderComponent<Demo> {
    private _date: Date;
    private _message: string;
    private _name: string;

    set data(demo: Demo) {
        this._date = demo.date;
        this._message = demo.message;
        this._name = demo.name;
    }

    get return() { return }

    get date() { return this._date; }
    get message() { return this._message; }
    get name() { return this._name; }
}
