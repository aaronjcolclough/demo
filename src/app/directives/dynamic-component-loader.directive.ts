import {
    Directive,
    ViewContainerRef
} from "@angular/core";

@Directive({
    selector: '[loaderOutlet]'
})
export class DynamicComponentLoaderDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
