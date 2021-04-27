import { defHttp } from '/@/utils/http/axios';
import {
  ManyPvcInResponse,
  PvcInCreate,
  PvcInResponse,
  PvcInUpdate,
} from '/@/api/model/resources/pvcModel';

import { ErrorMessageMode } from '/@/utils/http/axios/types';

/**
 * @description: create pvc API with authorization
 */
export function createPvcApi(params: PvcInCreate, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<PvcInResponse>(
    {
      url: '/resources/pvc',
      params,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: get describe of pvc by name API with authorization
 */
export function getPvcByNameAPI(name: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<PvcInResponse>(
    {
      url: `/resources/pvc/${name}`,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: get pvcs name API with authorization
 */
export function getPvcsNameAPI(mode: ErrorMessageMode = 'modal') {
  return defHttp.get<ManyPvcInResponse>(
    {
      url: '/resources/pvc',
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: update pvc API with authorization
 */
export function updatePvcAPI(name: string, params: PvcInUpdate, mode: ErrorMessageMode = 'modal') {
  return defHttp.put<PvcInResponse>(
    {
      url: `/resources/pvc/${name}`,
      params,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: delete pvc API with authorization
 */
export function deletePvcAPI(name: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.delete(
    {
      url: `/resources/pvc/${name}`,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}
