import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Resource } from './resource.model';
import { ResourceActions, ResourceActionTypes } from './resource.actions';

export interface State extends EntityState<Resource> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Resource> = createEntityAdapter<Resource>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: ResourceActions
): State {
  switch (action.type) {
    case ResourceActionTypes.AddResource: {
      return adapter.addOne(action.payload.resource, state);
    }

    case ResourceActionTypes.UpsertResource: {
      return adapter.upsertOne(action.payload.resource, state);
    }

    case ResourceActionTypes.AddResources: {
      return adapter.addMany(action.payload.resources, state);
    }

    case ResourceActionTypes.UpsertResources: {
      return adapter.upsertMany(action.payload.resources, state);
    }

    case ResourceActionTypes.UpdateResource: {
      return adapter.updateOne(action.payload.resource, state);
    }

    case ResourceActionTypes.UpdateResources: {
      return adapter.updateMany(action.payload.resources, state);
    }

    case ResourceActionTypes.DeleteResource: {
      return adapter.removeOne(action.payload.id, state);
    }

    case ResourceActionTypes.DeleteResources: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case ResourceActionTypes.LoadResources: {
      return state;
    }

    case ResourceActionTypes.LoadResourcesComplete: {
      return adapter.addAll(action.payload.resources, state);
    }

    case ResourceActionTypes.ClearResources: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
