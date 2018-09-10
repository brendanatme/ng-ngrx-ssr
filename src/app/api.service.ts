import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

const RESOURCE_KEY = makeStateKey('resource');

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private state: TransferState,
  ) { }

  getResources() {
    const resources = this.state.get(RESOURCE_KEY, null as any);
    if (resources) {
      return of(resources);
    }

    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        tap((res) => this.state.set(RESOURCE_KEY, res as any)),
      );
  }
}
