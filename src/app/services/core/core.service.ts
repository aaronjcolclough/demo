import {
  Injectable,
  ElementRef
} from '@angular/core';

import {
  fromEvent,
  Observable
} from 'rxjs';

import {
  debounceTime,
  distinctUntilChanged,
  map
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  generateInputObservable = (input: ElementRef): Observable<string> =>
    fromEvent(input.nativeElement, 'keyup')
      .pipe(
        debounceTime(300),
        map((event: any) => event.target.value),
        distinctUntilChanged()
      )
}
