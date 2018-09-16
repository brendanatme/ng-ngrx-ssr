import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators/index';
import { ApiService } from '../api.service';
import { LoadPosts, LoadPostsComplete, PostActionTypes } from './post.actions';
import { Post } from './post.model';

@Injectable()
export class PostEffects {
  constructor(
    private actions$: Actions,
    private api: ApiService,
  ) {}

  @Effect()
  get$: Observable<Action> = this.actions$.pipe(
    ofType<LoadPosts>(PostActionTypes.LoadPosts),
    switchMap(() => {
      return this.api.getPosts()
        .pipe(
          map((res: Post[]) => new LoadPostsComplete({
            posts: res,
          })),
        );
    }),
  );
}
