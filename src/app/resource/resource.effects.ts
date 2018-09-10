import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  map,
  switchMap,
} from 'rxjs/operators';
import { ApiService } from '../api.service';
import { LoadResources, LoadResourcesComplete, ResourceActionTypes } from './resource.actions';
import { Resource } from './resource.model';

@Injectable()
export class ResourceEffects {
  constructor(
    private actions$: Actions,
    private api: ApiService,
  ) {}

  @Effect()
  get$: Observable<Action> = this.actions$.pipe(
    ofType<LoadResources>(ResourceActionTypes.LoadResources),
    switchMap(() => {
      return this.api.getResources()
        .pipe(
          map((res: Resource[]) => new LoadResourcesComplete({
            resources: res,
          }))
        );
    })
  );
}
