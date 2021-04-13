import { defHttp } from '/@/utils/http/axios';
import {
  UserInLogin,
  UserInResponse,
  GetUserInfoByUserIdParams,
  GetUserInfoByUserIdModel,
  UserInCreate,
} from './model/userModel';

import { ErrorMessageMode } from '/@/utils/http/axios/types';

enum Api {
  Login = '/users/login',
  Register = '/users',
  GetUserInfoById = '/getUserInfoById',
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
 * @description: getUserInfoById
 */
export function getUserInfoById(params: GetUserInfoByUserIdParams) {
  return defHttp.get<GetUserInfoByUserIdModel>({
    url: Api.GetUserInfoById,
    params,
  });
}

export function getPermCodeByUserId(params: GetUserInfoByUserIdParams) {
  return defHttp.get<string[]>({
    url: Api.GetPermCodeByUserId,
    params,
  });
}
