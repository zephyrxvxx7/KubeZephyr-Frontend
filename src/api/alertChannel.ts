import { defHttp } from '/@/utils/http/axios';
import type { AlertChannelInResponse, AlertChannelInUpdate } from '/@/api/model/alertChannelModel';

import { ErrorMessageMode } from '/@/utils/http/axios/types';

/**
 * @description: get alert channel API with authorization
 */
export function getAlertChannelAPI(mode: ErrorMessageMode = 'modal') {
  return defHttp.get<AlertChannelInResponse>(
    {
      url: `/alert-channel`,
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
  params: AlertChannelInUpdate,
  mode: ErrorMessageMode = 'modal'
) {
  return defHttp.put<AlertChannelInResponse>(
    {
      url: `/alert-channel`,
      params,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}
