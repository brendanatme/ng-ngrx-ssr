import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../reducers';
import { Post } from '../post/post.model';
import { LoadPosts } from '../post/post.actions';
import { selectEntities as selectPostEntities } from '../post/post.reducer';
import { Comment } from '../comment/comment.model';
import { LoadComments } from '../comment/comment.actions';
import { selectEntities as selectCommentEntities } from '../comment/comment.reducer';
import { EntityState, Dictionary } from '@ngrx/entity';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public message: string;
  public posts$: Observable<EntityState<Post>>;
  public posts: Dictionary<Post>;
  public comments$: Observable<EntityState<Comment>>;
  public comments: Dictionary<Comment>;
  public computed$: Observable<any>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.posts$ = this.store.select('post');

    this.posts$.subscribe((postState: EntityState<Post>) => {
      this.posts = selectPostEntities(postState);
    });

    this.comments$ = this.store.select('comment');

    this.comments$.subscribe((commentState: EntityState<Comment>) => {
      this.comments = selectCommentEntities(commentState);
    });

    this.computed$ = this.store.select((state: fromRoot.State) => {
      return {
        comments: selectCommentEntities(state.comment),
        posts: selectPostEntities(state.post),
      };
    });
  }

  ngOnInit() {
    this.message = 'Hello';

    this.store.dispatch(new LoadPosts());

    this.store.dispatch(new LoadComments());
  }
}
