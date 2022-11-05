import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, EventEmitter, Inject, InjectionToken, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Entity } from 'src/app/models';
import { BaseApi } from 'src/app/services';
import { AbstractTableComponent } from '../abstract/abstract-table.component';

@Component({
    selector: 'base-table',
    templateUrl: 'base-table.component.html'
})
export class BaseTableComponent<T extends Entity, S extends BaseApi<T>>
    extends AbstractTableComponent implements AfterViewInit, OnInit, OnDestroy {

    @Output() protected edit = new EventEmitter();

    @ViewChild(MatPaginator) protected paginator: MatPaginator;
    @ViewChild(MatSort) protected sort: MatSort;

    private sub: Subscription;

    dataSource: MatTableDataSource<T> = new MatTableDataSource<T>();

    constructor(
        liveAnnouncer: LiveAnnouncer,
        @Inject(new InjectionToken('api')) protected api: S
    ) {
        super(liveAnnouncer);
    }

    async ngOnInit(): Promise<void> {
        this.sub = this.api.entities$
            .subscribe(x => this.dataSource.data = x);
    }

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    applyFilter = (event: Event): void => {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource?.paginator) {
            this.dataSource?.paginator?.firstPage();
        }
    }
}
