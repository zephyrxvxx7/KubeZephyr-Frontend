import { defHttp } from '/@/utils/http/axios';
import {
  ManyPodInResponse,
  PodInCreate,
  PodInResponse,
  PodInResponseStatus,
  PodInUpdate,
} from './model/resources/podModel';

import { ErrorMessageMode } from '/@/utils/http/axios/types';

/**
 * @description: create pod API with authorization
 */
export function createPodApi(params: PodInCreate, mode: ErrorMessageMode = 'message') {
  return defHttp.post<PodInResponse>(
    {
      url: '/resources/pod',
      params,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: get describe of pod by name API with authorization
 */
export function getPodByNameAPI(name: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<PodInResponse>(
    {
      url: `/resources/pod/${name}`,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: get log of pod by name API with authorization
 */
export function getPodLogByNameAPI(name: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<string>(
    {
      url: `/resources/pod/${name}/log`,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

export function getPodStatusByNameAPI(name: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<PodInResponseStatus>(
    {
      url: `/resources/pod/${name}/status`,
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
export function getPodsNameAPI(mode: ErrorMessageMode = 'modal') {
  return defHttp.get<ManyPodInResponse>(
    {
      url: '/resources/pod',
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: update pod API with authorization
 */
export function updatePodAPI(name: string, params: PodInUpdate, mode: ErrorMessageMode = 'modal') {
  return defHttp.put<PodInResponse>(
    {
      url: `/resources/pod/${name}`,
      params,
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
export function deletePodAPI(name: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.delete(
    {
      url: `/resources/pod/${name}`,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

export function getDockerImagesAPI(name: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<string[]>(
    {
      url: `/docker-hub/images?q=${name}`,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

export function getDockerTagsAPI(name: string, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<string[]>(
    {
      url: `/docker-hub/tags?q=${name}`,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}
