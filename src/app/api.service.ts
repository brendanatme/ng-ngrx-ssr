import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators/index';

const POST_KEY = makeStateKey('post');
const COMMENT_KEY = makeStateKey('comment');

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private state: TransferState,
  ) { }

  getPosts() {
    const posts = this.state.get(POST_KEY, null as any);
    if (posts) {
      return of(posts);
    }

    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        tap((res) => this.state.set(POST_KEY, res as any)),
      );
  }

  getComments() {
    const comments = this.state.get(COMMENT_KEY, null as any);
    if (comments) {
      return of(comments);
    }

    return this.http
      .get('https://jsonplaceholder.typicode.com/comments')
      .pipe(
        tap((res) => this.state.set(COMMENT_KEY, res as any)),
      );
  }
}
