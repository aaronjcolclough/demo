@Directive({
    selector: '[loaderOutlet]'
})
export class DynamicComonentLoaderDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}