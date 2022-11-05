import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, firstValueFrom, Observable, of, Subscription } from "rxjs";
import { Entity } from "src/app/models";
import { SnackerService } from "../../core";

export abstract class BaseApi<T extends Entity> {
    private _entities = new BehaviorSubject<T[]>(null);
    private _entity = new BehaviorSubject<T>(null);

    protected api: string;

    entities$ = this._entities.asObservable();
    entity$ = this._entity.asObservable();

    constructor(
        private _http: HttpClient,
        private _snacker: SnackerService,
        protected address: string,
        protected path: string
    ) { this.api = address + path; }

    storeAll = (): Subscription => this.getAll$()
        .subscribe({
            next: data => {
                this._entities.next(data);
                this._snacker.sendSuccessMessage('data successfully loaded!');
            },
            error: err => this._snacker.sendErrorMessage('something went wrong')
        });

    getAll$ = (): Observable<T[]> => this._http.get<T[]>(
        `${this.api}`
    );

    getAllAsync = (): Promise<T[]> => firstValueFrom(
        this.getAll$()
    );

    getById$ = (id: number): Observable<T> => this._http.get<T>(
        `${this.api}/${id}`
    );

    getByIdAsync = (id: number): Promise<T> => firstValueFrom(
        this.getById$(id)
    );

    save = (entity: T): Promise<T> => firstValueFrom(
        of<T>(this.internalSave(entity))
    );

    internalSave = (entity: T): T => {
        const entities = this._entities.getValue();
        const index = entities.findIndex(x => x.id === entity.id);

        entities.splice(index, 1, entity);
        this._entities.next(entities);

        return entity;
    }
}
