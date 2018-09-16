import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators/index';
import { ApiService } from '../api.service';
import { LoadComments, LoadCommentsComplete, CommentActionTypes } from './comment.actions';
import { Comment } from './comment.model';

@Injectable()
export class CommentEffects {
  constructor(
    private actions$: Actions,
    private api: ApiService,
  ) {}

  @Effect()
  get$: Observable<Action> = this.actions$.pipe(
    ofType<LoadComments>(CommentActionTypes.LoadComments),
    switchMap(() => {
      return this.api.getComments()
        .pipe(
          map((res: Comment[]) => new LoadCommentsComplete({
            comments: res,
          })),
        );
    }),
  );
}
