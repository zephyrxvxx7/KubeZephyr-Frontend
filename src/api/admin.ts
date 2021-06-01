import { defHttp } from '/@/utils/http/axios';
import type { ManyUserInResponse } from '/@/api/sys/model/userModel';
import type {
  ResourceQuotaInUpdate,
  ResourceQuotaInResponse,
  ResourceUsedInResponse,
} from '/@/api/model/resources/resourceQuotaModel';
import type {
  AlertChannelInCreat,
  AlertChannelInResponse,
  AlertChannelInUpdate,
  ManyAlertChannelInResponse,
} from '/@/api/model/alertChannelModel';
import type {
  ManyPodInResponse,
  PodInResponse,
  PodInResponseStatus,
} from './model/resources/podModel';

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

/**
 * @description: get describe of pod API with authorization
 */
export function getPodAPI(id: string, name: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<PodInResponse>(
    {
      url: `/admin/resources/pod/${id}/${name}`,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: get log of pod API with authorization
 */
export function getPodLogAPI(id: string, name: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<string>(
    {
      url: `/admin/resources/pod/${id}/${name}/log`,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: get status of pod API with authorization
 */
export function getPodStatusAPI(id: string, name: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<PodInResponseStatus>(
    {
      url: `/admin/resources/pod/${id}/${name}/status`,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: get pods name API with authorization
 */
export function getPodsAPI(id: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<ManyPodInResponse>(
    {
      url: `/admin/resources/pod/${id}`,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: delete pod API with authorization
 */
export function deletePodAPI(id: string, name: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.delete(
    {
      url: `/admin/resources/pod/${id}/${name}`,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: create alert channel API with authorization
 */
export function createAlertChannelAPI(
  params: AlertChannelInCreat,
  mode: ErrorMessageMode = 'modal'
) {
  return defHttp.post<AlertChannelInResponse>(
    {
      url: `/admin/alert-channel`,
      params,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: get alert channel API with authorization
 */
export function getAlertChannelAPI(uid: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<AlertChannelInResponse>(
    {
      url: `/admin/alert-channel/${uid}`,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: get alert channels API with authorization
 */
export function getAlertChannelsAPI(mode: ErrorMessageMode = 'modal') {
  return defHttp.get<ManyAlertChannelInResponse>(
    {
      url: `/admin/alert-channel`,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: update alert channel API with authorization
 */
export function updateAlertChannelAPI(
  uid: string,
  params: AlertChannelInUpdate,
  mode: ErrorMessageMode = 'modal'
) {
  return defHttp.put<AlertChannelInResponse>(
    {
      url: `/admin/alert-channel/${uid}`,
      params,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: delete alert channel API with authorization
 */
export function deleteAlertChannelAPI(uid: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.delete(
    {
      url: `/admin/alert-channel/${uid}`,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}
