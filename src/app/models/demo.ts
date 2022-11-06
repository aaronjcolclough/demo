import { Type } from "@angular/core";

export class Demo {
    constructor(
        private _component: Type<any>,
        private _date: Date,
        private _name: string,
        private _message: string
    ) {
    }

    get component() {return this._component;}
    get date() {return this._date;}
    get name() {return this._name;}
    get message() {return this._message;}
}
