import { ObjectMeta } from './objectMetaModel';
import { PersistentVolumeClaimSpec } from './resourcesModel';

export interface PvcInCreate {
  metadata: ObjectMeta;
  spec: PersistentVolumeClaimSpec;
}

export interface PvcInResponse {
  pvc: PvcInCreate;
}

export interface PvcInUpdate {
  spec?: PersistentVolumeClaimSpec;
}

export interface ManyPvcInResponse {
  pvc: Array<string>;
}
