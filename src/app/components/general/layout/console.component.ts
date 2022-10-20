import {
    AfterViewChecked,
    Component,
    ElementRef,
    Input,
    ViewChild
} from '@angular/core';

interface ConsoleMessage {
    message: string;
    isError: boolean;
}

@Component({
    selector: 'console',
    templateUrl: 'console.component.html',
    styleUrls: ['console.component.scss']
})
export class ConsoleComponent implements AfterViewChecked {
    @Input() height: number = 250;
    @Input() expanded: boolean = true;
    @Input() consoleStyle: string = 'p8';
    @Input() messageStyle: string = 'm4';
    @Input() messages: ConsoleMessage[] = new Array<ConsoleMessage>();

    @ViewChild('console') console: ElementRef;

    private scrollConsole = () => {
        if (this.console?.nativeElement) {
            this.console.nativeElement.scrollTop = this.console.nativeElement.scrollHeight + 100;
        }
    }

    ngAfterViewChecked() {
        this.scrollConsole();
    }

    toggleExpanded = () => this.expanded = !this.expanded;
}
