import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../reducers';
import { Resource } from '../resource/resource.model';
import { LoadResources } from '../resource/resource.actions';
import { selectEntities } from '../resource/resource.reducer';
import { EntityState, Dictionary } from '@ngrx/entity';

@Component({
  selector: 'app-home',
  template: `<div>
    <h3>{{ message }}</h3>
    <p>Resources: {{ resources | json }}</p>
  </div>`
})
export class HomeComponent implements OnInit {
  public message: string;
  public resources$: Observable<EntityState<Resource>>;
  public resources: Dictionary<Resource>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.resources$ = this.store.select('resource');
    
    this.resources$.subscribe((resourceState: EntityState<Resource>) => {
      this.resources = selectEntities(resourceState);
    });
  }

  ngOnInit() {
    this.message = 'Hello';

    this.store.dispatch(new LoadResources());
  }
}
