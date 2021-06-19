import { defHttp } from '/@/utils/http/axios';
import {
  UserInLogin,
  UserInResponse,
  GetUserInfoByUserIdParams,
  UserInCreate,
  UserInUpdate,
} from './model/userModel';

import { ErrorMessageMode } from '/@/utils/http/axios/types';

enum Api {
  Login = '/users/login',
  Register = '/users',
  Update = '/users',
  GetPermCodeByUserId = '/getPermCodeByUserId',
}

/**
 * @description: user login api
 */
export function loginApi(params: UserInLogin, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<UserInResponse>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: user register api
 */
export function registerAPI(params: UserInCreate, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<UserInResponse>(
    {
      url: Api.Register,
      params,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: user update api
 */
export function updateCurrentUserAPI(params: UserInUpdate, mode: ErrorMessageMode = 'modal') {
  return defHttp.put<UserInResponse>(
    {
      url: Api.Register,
      params,
    },
    {
      errorMessageMode: mode,
      isTransformRequestResult: false,
    }
  );
}

export function getPermCodeByUserId(params: GetUserInfoByUserIdParams) {
  return defHttp.get<string[]>({
    url: Api.GetPermCodeByUserId,
    params,
  });
}
