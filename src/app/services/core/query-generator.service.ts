import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SnackerService } from './snacker.service';
import { QuerySource } from '../../models';

@Injectable({
    providedIn: 'root'
})
export class QueryGeneratorService {
    constructor(
        private http: HttpClient,
        private snacker: SnackerService
    ) { }

    generateSource = <T>(
        endpoint: string = null,
        sortProperty: string = 'id',
        isDescending: boolean = false,
        pageSize: number = 50,
        pageSizeOptions: number[] = [5, 10, 20, 50, 100]
    ) => new QuerySource<T>(
        this.http,
        this.snacker,
        endpoint,
        sortProperty,
        isDescending,
        pageSize,
        pageSizeOptions
    );
}
