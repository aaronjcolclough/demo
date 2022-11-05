import { LiveAnnouncer } from "@angular/cdk/a11y";
import { Sort } from "@angular/material/sort";

export abstract class AbstractTableComponent {
    constructor(
        private _liveAnnouncer: LiveAnnouncer
    ) { }

    /** Announce the change in sort state for assistive technology. */
    announceSortChange = (sortState: Sort) =>
        // This example uses English messages. If your application supports
        // multiple language, you would internationalize these strings.
        // Furthermore, you can customize the message to add additional
        // details about the values being sorted.
        sortState.direction
            ? this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`)
            : this._liveAnnouncer.announce('Sorting cleared');
}
