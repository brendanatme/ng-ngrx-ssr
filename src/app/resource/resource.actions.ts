import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Resource } from './resource.model';

export enum ResourceActionTypes {
  LoadResources = '[Resource] Load Resources',
  LoadResourcesComplete = '[Resource] Load Resources Complete',
  AddResource = '[Resource] Add Resource',
  UpsertResource = '[Resource] Upsert Resource',
  AddResources = '[Resource] Add Resources',
  UpsertResources = '[Resource] Upsert Resources',
  UpdateResource = '[Resource] Update Resource',
  UpdateResources = '[Resource] Update Resources',
  DeleteResource = '[Resource] Delete Resource',
  DeleteResources = '[Resource] Delete Resources',
  ClearResources = '[Resource] Clear Resources'
}

export class LoadResources implements Action {
  readonly type = ResourceActionTypes.LoadResources;

  constructor() {}
}

export class LoadResourcesComplete implements Action {
  readonly type = ResourceActionTypes.LoadResourcesComplete;

  constructor(public payload: { resources: Resource[] }) {}
}

export class AddResource implements Action {
  readonly type = ResourceActionTypes.AddResource;

  constructor(public payload: { resource: Resource }) {}
}

export class UpsertResource implements Action {
  readonly type = ResourceActionTypes.UpsertResource;

  constructor(public payload: { resource: Resource }) {}
}

export class AddResources implements Action {
  readonly type = ResourceActionTypes.AddResources;

  constructor(public payload: { resources: Resource[] }) {}
}

export class UpsertResources implements Action {
  readonly type = ResourceActionTypes.UpsertResources;

  constructor(public payload: { resources: Resource[] }) {}
}

export class UpdateResource implements Action {
  readonly type = ResourceActionTypes.UpdateResource;

  constructor(public payload: { resource: Update<Resource> }) {}
}

export class UpdateResources implements Action {
  readonly type = ResourceActionTypes.UpdateResources;

  constructor(public payload: { resources: Update<Resource>[] }) {}
}

export class DeleteResource implements Action {
  readonly type = ResourceActionTypes.DeleteResource;

  constructor(public payload: { id: string }) {}
}

export class DeleteResources implements Action {
  readonly type = ResourceActionTypes.DeleteResources;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearResources implements Action {
  readonly type = ResourceActionTypes.ClearResources;
}

export type ResourceActions =
 LoadResources
 | LoadResourcesComplete
 | AddResource
 | UpsertResource
 | AddResources
 | UpsertResources
 | UpdateResource
 | UpdateResources
 | DeleteResource
 | DeleteResources
 | ClearResources;
