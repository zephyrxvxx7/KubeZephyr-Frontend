import { defHttp } from '/@/utils/http/axios';
import { getMenuListByIdParamsResultModel } from './model/menuModel';

enum Api {
  GetMenuListById = '/users/menuList',
}

/**
 * @description: Get user menu based on id
 */

export const getMenuListById = () => {
  return defHttp.get<getMenuListByIdParamsResultModel>(
    { url: Api.GetMenuListById },
    {
      isTransformRequestResult: false,
    }
  );
};
