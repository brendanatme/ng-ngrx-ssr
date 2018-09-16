import {
  // ActionReducer,
  ActionReducerMap,
  // createFeatureSelector,
  // createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromComment from '../comment/comment.reducer';
import * as fromPost from '../post/post.reducer';

export interface State {
  comment: fromComment.State;
  post: fromPost.State;
}

export const reducers: ActionReducerMap<State> = {
  comment: fromComment.reducer,
  post: fromPost.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
