import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Comment } from './comment.model';

export enum CommentActionTypes {
  LoadComments = '[Comment] Load Comments',
  LoadCommentsComplete = '[Comment] Load Comments Complete',
  AddComment = '[Comment] Add Comment',
  UpsertComment = '[Comment] Upsert Comment',
  AddComments = '[Comment] Add Comments',
  UpsertComments = '[Comment] Upsert Comments',
  UpdateComment = '[Comment] Update Comment',
  UpdateComments = '[Comment] Update Comments',
  DeleteComment = '[Comment] Delete Comment',
  DeleteComments = '[Comment] Delete Comments',
  ClearComments = '[Comment] Clear Comments',
}

export class LoadComments implements Action {
  readonly type = CommentActionTypes.LoadComments;

  constructor() {}
}

export class LoadCommentsComplete implements Action {
  readonly type = CommentActionTypes.LoadCommentsComplete;

  constructor(public payload: { comments: Comment[] }) {}
}

export class AddComment implements Action {
  readonly type = CommentActionTypes.AddComment;

  constructor(public payload: { comment: Comment }) {}
}

export class UpsertComment implements Action {
  readonly type = CommentActionTypes.UpsertComment;

  constructor(public payload: { comment: Comment }) {}
}

export class AddComments implements Action {
  readonly type = CommentActionTypes.AddComments;

  constructor(public payload: { comments: Comment[] }) {}
}

export class UpsertComments implements Action {
  readonly type = CommentActionTypes.UpsertComments;

  constructor(public payload: { comments: Comment[] }) {}
}

export class UpdateComment implements Action {
  readonly type = CommentActionTypes.UpdateComment;

  constructor(public payload: { comment: Update<Comment> }) {}
}

export class UpdateComments implements Action {
  readonly type = CommentActionTypes.UpdateComments;

  constructor(public payload: { comments: Update<Comment>[] }) {}
}

export class DeleteComment implements Action {
  readonly type = CommentActionTypes.DeleteComment;

  constructor(public payload: { id: string }) {}
}

export class DeleteComments implements Action {
  readonly type = CommentActionTypes.DeleteComments;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearComments implements Action {
  readonly type = CommentActionTypes.ClearComments;
}

export type CommentActions =
 LoadComments
 | LoadCommentsComplete
 | AddComment
 | UpsertComment
 | AddComments
 | UpsertComments
 | UpdateComment
 | UpdateComments
 | DeleteComment
 | DeleteComments
 | ClearComments;
