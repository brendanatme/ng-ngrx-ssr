import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { Actions, EffectsModule } from '@ngrx/effects';
import { PostEffects } from './post/post.effects';
import * as fromPost from './post/post.reducer';
import { ApiService } from './api.service';
import { CommentEffects } from './comment/comment.effects';
import * as fromComment from './comment/comment.reducer';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-ngrx-ssr' }),
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
      { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule' },
    ]),
    TransferHttpCacheModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature('post', fromPost.reducer),
    StoreModule.forFeature('comment', fromComment.reducer),
    EffectsModule.forRoot([PostEffects, CommentEffects]),
  ],
  providers: [
    Actions,
    ApiService,
  ],
})
export class AppModule { }
