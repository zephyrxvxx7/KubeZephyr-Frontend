import type { UserInfo } from '/#/store';
import type { ErrorMessageMode } from '/@/utils/http/axios/types';

import { defineStore } from 'pinia';
import { store } from '/@/store';
import { useResourceStore } from '/@/store/modules/resource';
import { usePermission } from '/@/hooks/web/usePermission';

import { RoleEnum } from '/@/enums/roleEnum';
import { PageEnum } from '/@/enums/pageEnum';
import { ROLES_KEY, TOKEN_KEY, USER_INFO_KEY } from '/@/enums/cacheEnum';

import { getAuthCache, setAuthCache } from '/@/utils/auth';
import { UserInCreate, UserInLogin, UserInResponse } from '/@/api/sys/model/userModel';

import { loginApi, registerAPI } from '/@/api/sys/user';

import { useI18n } from '/@/hooks/web/useI18n';
import { useMessage } from '/@/hooks/web/useMessage';
import router from '/@/router';

interface UserState {
  userInfo: Nullable<UserInfo>;
  token?: string;
  roleList: RoleEnum[];
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    // user info
    userInfo: null,
    // token
    token: undefined,
    // roleList
    roleList: [],
  }),
  getters: {
    getUserInfo(): UserInfo {
      return this.userInfo || getAuthCache<UserInfo>(USER_INFO_KEY) || {};
    },
    getToken(): string {
      return this.token || getAuthCache<string>(TOKEN_KEY);
    },
    getRoleList(): RoleEnum[] {
      return this.roleList.length > 0 ? this.roleList : getAuthCache<RoleEnum[]>(ROLES_KEY);
    },
  },
  actions: {
    setToken(info: string) {
      this.token = info;
      setAuthCache(TOKEN_KEY, info);
    },
    setRoleList(roleList: RoleEnum[]) {
      this.roleList = roleList;
      setAuthCache(ROLES_KEY, roleList);
    },
    setUserInfo(info: UserInfo) {
      this.userInfo = info;
      setAuthCache(USER_INFO_KEY, info);
    },
    resetState() {
      this.userInfo = null;
      this.token = '';
      this.roleList = [];
    },
    /**
     * @description: login
     */
    async login(
      params: UserInLogin & {
        goHome?: boolean;
        mode?: ErrorMessageMode;
      }
    ): Promise<UserInResponse | null> {
      try {
        const { hasPermission } = usePermission();

        const { goHome = true, mode, ...loginParams } = params;
        const data = await loginApi(loginParams, mode);

        const { email, realName, desc, roles, token, id } = data.user;
        const roleList = roles.map((item) => item.value) as RoleEnum[];

        // save token
        this.setToken(token);

        this.setUserInfo({
          userId: id,
          email: email,
          realName: realName,
          desc: desc,
        });
        this.setRoleList(roleList);

        if (hasPermission(RoleEnum.USER)) {
          this.resourceInit(params);
        }

        goHome && (await router.replace(PageEnum.BASE_HOME));
        return data;
      } catch (error) {
        return null;
      }
    },

    async register(
      params: UserInCreate & {
        goHome?: boolean;
        mode?: ErrorMessageMode;
      }
    ): Promise<UserInResponse | null> {
      try {
        const { goHome = true, mode, ...registerParams } = params;
        const data = await registerAPI(registerParams, mode);

        const { email, realName, desc, roles, token, id } = data.user;
        const roleList = roles.map((item) => item.value) as RoleEnum[];

        // save token
        this.setToken(token);

        this.setUserInfo({
          userId: id,
          email: email,
          realName: realName,
          desc: desc,
        });
        this.setRoleList(roleList);

        goHome && (await router.replace(PageEnum.BASE_HOME));
        return data;
      } catch (error) {
        return null;
      }
    },

    async resourceInit(params: { mode?: ErrorMessageMode }) {
      const { getPodListFromAPI, getPvcListFromAPI, getIngressFromAPI } = useResourceStore();

      await getPodListFromAPI(params);
      await getPvcListFromAPI(params);
      await getIngressFromAPI(params);
    },

    /**
     * @description: logout
     */
    logout(goLogin = false) {
      goLogin && router.push(PageEnum.BASE_LOGIN);
    },

    /**
     * @description: Confirm before logging out
     */
    confirmLoginOut() {
      const { createConfirm } = useMessage();
      const { t } = useI18n();
      createConfirm({
        iconType: 'warning',
        title: t('sys.app.logoutTip'),
        content: t('sys.app.logoutMessage'),
        onOk: async () => {
          await this.logout(true);
        },
      });
    },
  },
});

// Need to be used outside the setup
export function useUserStoreWidthOut() {
  return useUserStore(store);
}
