import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CommentEffects } from './comment.effects';

describe('CommentEffects', () => {
  const actions$: Observable<any> = new Observable();
  let effects: CommentEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CommentEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.get(CommentEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
