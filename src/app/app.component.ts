import { Component } from '@angular/core';
import { ThemeService } from './services';
import { Demo, Demos } from './models';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    Demos: Demo[] = Demos;
    constructor(
        public themer: ThemeService
    ) { }
}
