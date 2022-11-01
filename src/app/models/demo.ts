import { Type } from "@angular/core";

export class Demo {
    name: string;
    component: Type<any>;

    constructor(
        name: string,
        component: Type<any>
    ) {
        this.name = name;
        this.component = component;
    }
}
