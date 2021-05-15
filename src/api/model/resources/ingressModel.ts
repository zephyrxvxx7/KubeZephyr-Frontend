import { Ingress } from './resourcesModel';

export interface IngressInCreate {
  bound_pod_name: string;
  sub_domain: string;
  allow_cors?: boolean;
}

export interface IngressInResponse {
  ingress: Ingress;
}

export interface ManyIngress {
  name: string;
  sub_domain: string;
  allow_cors: boolean;
}

export interface ManyIngressInResponse {
  ingress: Array<ManyIngress>;
}
