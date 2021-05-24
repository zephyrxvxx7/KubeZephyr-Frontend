import { defHttp } from '/@/utils/http/axios';
import type { ManyUserInResponse } from '/@/api/sys/model/userModel';
import type {
  ResourceQuotaInUpdate,
  ResourceQuotaInResponse,
  ResourceUsedInResponse,
} from '/@/api/model/resources/resourceQuotaModel';

import { ErrorMessageMode } from '/@/utils/http/axios/types';

/**
 * @description: get users name API with authorization
 */
export function getUsersAPI(mode: ErrorMessageMode = 'modal') {
  return defHttp.get<ManyUserInResponse>(
    {
      url: '/admin/users',
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: delete user API with authorization
 */
export function deleteUserAPI(id: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.delete(
    {
      url: `/admin/users/${id}`,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: get resource quota API with authorization
 */
export function getResourceQuotaAPI(id: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<ResourceQuotaInResponse>(
    {
      url: `/admin/resources/quota/${id}`,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: update resource quota API with authorization
 */
export function updateResourceQuotaAPI(
  id: string,
  params: ResourceQuotaInUpdate,
  mode: ErrorMessageMode = 'modal'
) {
  return defHttp.put<ResourceQuotaInResponse>(
    {
      url: `/admin/resources/quota/${id}`,
      params,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: get resource used API with authorization
 */
export function getResourceUsedAPI(id: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<ResourceUsedInResponse>(
    {
      url: `/admin/resources/used/${id}`,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}
