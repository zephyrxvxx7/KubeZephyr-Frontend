import { ObjectMeta } from './objectMetaModel';
import { PodSpec, PodStatus } from './resourcesModel';

export interface PodInCreate {
  metadata: ObjectMeta;
  spec: PodSpec;
}

export interface PodInResponse {
  pod: PodInCreate;
}
export interface PodInUpdate {
  spec?: PodSpec;
}

export interface PodInResponseStatus {
  status: PodStatus;
}

export interface ManyPodInResponse {
  pod: Array<string>;
}
