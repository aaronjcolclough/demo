import {
    ReplaySubject,
    Subject,
    Subscription,
    throwError
} from 'rxjs';

import {
    catchError,
    filter,
    switchMap
} from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { QueryResult } from './query-result';
import { SnackerService } from '../../services';

export abstract class CoreQuery<T> {
    private url = new Subject<URL>();
    protected result = new ReplaySubject<QueryResult<T>>(1);
    protected sub: Subscription;

    private initUrl = (): Subscription =>
        this.url
            .pipe(
                filter(url => !!url),
                switchMap((url: URL) =>
                    this.http.get<QueryResult<T>>(url.toString())
                        .pipe(
                            catchError(er => throwError(() => new Error(er)))
                        )
                ),
                filter(r => !!r)
            )
            .subscribe({
                next: result => this.result.next(result),
                error: err => this.snacker.sendErrorMessage(err)
            });

    constructor(
        protected readonly baseUrl: string,
        protected http: HttpClient,
        protected snacker: SnackerService,
        protected initialPageSize: number = 20,
        public pageSizeOptions: number[] = [5, 10, 20, 50, 100]
    ) {
        this._pageSize = initialPageSize;
        this.sub = this.initUrl();
    }

    result$ = this.result.asObservable();
    unsubscribe = () => this.sub?.unsubscribe();

    protected _endpoint: string = null;
    get endpoint(): string { return this._endpoint; }
    set endpoint(value: string) {
        const url = new URL(value, this.baseUrl);

        if (this.baseUrl.startsWith(url.origin)) {
            if (url.toString() !== this._endpoint) {
                this._endpoint = url.toString();
                this.refresh(true);
            }
        }
    }

    protected _page = 1;
    get page(): number { return this._page; }
    set page(value: number) {
        if (value !== this._page) {
            this._page = value;
            this.refresh();
        }
    }

    protected _pageSize: number;
    get pageSize(): number { return this._pageSize; }
    set pageSize(value: number) {
        if (this._pageSize) {
            if (value !== this._pageSize) {
                this._pageSize = value;
                this.refresh(true);
            }
        } else {
            this._pageSize = value;
        }
    }

    protected _sort: { propertyName: string, isDescending: boolean } | null = null;
    get sort(): { propertyName: string, isDescending: boolean } | null {
        return this._sort;
    }
    set sort(value: { propertyName: string, isDescending: boolean }) {
        if (value !== this._sort) {
            this._sort = value;
            this.refresh(true);
        }
    }

    protected _search: string | null = null;
    get search(): string | null {
        return this._search;
    }
    set search(value: string) {
        if (value !== this._search) {
            this._search = value;
            this.refresh(true);
        }
    }

    refresh = (repage: boolean = false) => {
        const url = new URL(this.endpoint, this.baseUrl);

        if (repage)
            this._page = 1;

        url.searchParams.set('page', this.page.toString());
        url.searchParams.set('pageSize', this.pageSize.toString());

        if (this.sort)
            url.searchParams.set('sort', `${this.sort.propertyName}_${this.sort.isDescending ? 'desc' : 'asc'}`);
        else
            url.searchParams.delete('sort');

        if (this.search)
            url.searchParams.set('search', this.search)
        else
            url.searchParams.delete('search');

        this.url.next(url);
        this._endpoint = url.toString();
    }

    onPage = (pageEvent: PageEvent) => {
        this.page = pageEvent.pageIndex + 1;
        this.pageSize = pageEvent.pageSize;
    }

    onSearch = (event: string) => this.search = event;

    onSort = (event: { active: string, direction: string }) => this.sort = event.direction
        ? { propertyName: event.active, isDescending: event.direction === 'desc' }
        : null;
}
