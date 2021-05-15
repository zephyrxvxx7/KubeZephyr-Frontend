import { defHttp } from '/@/utils/http/axios';
import {
  IngressInCreate,
  IngressInResponse,
  ManyIngressInResponse,
} from './model/resources/ingressModel';

import { ErrorMessageMode } from '/@/utils/http/axios/types';

/**
 * @description: create ingress API with authorization
 */
export function createIngressApi(params: IngressInCreate, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<IngressInResponse>(
    {
      url: '/resources/ingress',
      params,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: get describe of ingress by name API with authorization
 */
export function getIngressByNameAPI(name: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<IngressInResponse>(
    {
      url: `/resources/ingress/${name}`,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: get ingresses API with authorization
 */
export function getIngressesAPI(mode: ErrorMessageMode = 'modal') {
  return defHttp.get<ManyIngressInResponse>(
    {
      url: '/resources/ingress',
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: update ingress API with authorization
 */
// export function updateIngressAPI(name: string, params: IngressInUpdate, mode: ErrorMessageMode = 'modal') {
//   return defHttp.put<IngressInResponse>(
//     {
//       url: `/resources/ingress/${name}`,
//       params,
//     },
//     {
//       errorMessageMode: mode,
//       isTransformRequestResult: false,
//     }
//   );
// }

/**
 * @description: delete ingress API with authorization
 */
export function deleteIngressAPI(name: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.delete(
    {
      url: `/resources/ingress/${name}`,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}
