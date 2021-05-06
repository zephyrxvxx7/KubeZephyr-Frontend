import type { ErrorMessageMode } from '/@/utils/http/axios/types';

import { defineStore } from 'pinia';
import { store } from '/@/store';

import { POD_LIST, PVC_LIST, INGRESS_LIST } from '/@/enums/cacheEnum';
import { getAuthCache, setAuthCache } from '/@/utils/auth';

import { ManyPodInResponse } from '/@/api/model/resources/podModel';
import { ManyPvcInResponse } from '/@/api/model/resources/pvcModel';
import { getPodsNameAPI } from '/@/api/pod';
import { getPvcsNameAPI } from '/@/api/pvc';

interface ResourceState {
  pods: Array<string>;
  pvcs: Array<string>;
  ingresses: Array<string>;
  isAddedNewResource: boolean;
}

export interface OptionsItem {
  label: string;
  value: string;
}

export const useResourceStore = defineStore({
  id: 'app-resource',
  state: (): ResourceState => ({
    pods: [],
    pvcs: [],
    ingresses: [],
    isAddedNewResource: false,
  }),
  getters: {
    getPodList() {
      return this.pods.length > 0 ? this.pods : getAuthCache<Array<string>>(POD_LIST);
    },
    getPvcList() {
      return this.pvcs.length > 0 ? this.pvcs : getAuthCache<Array<string>>(PVC_LIST);
    },
    getIngressList() {
      return this.ingresses.length > 0 ? this.ingresses : getAuthCache<Array<string>>(INGRESS_LIST);
    },
    getIsAddedNewResource() {
      return this.isAddedNewResource;
    },
  },
  actions: {
    setPodList(pods: Array<string>) {
      this.pods = pods;
      setAuthCache(POD_LIST, pods);
    },
    setPvcList(pvcs: Array<string>) {
      this.pvcs = pvcs;
      setAuthCache(PVC_LIST, pvcs);
    },
    setIngressList(ingresses: Array<string>) {
      this.ingresses = ingresses;
      setAuthCache(INGRESS_LIST, ingresses);
    },
    setIsAddedNewResource(added: boolean) {
      this.isAddedNewResource = added;
    },
    resetState() {
      this.pods = [];
      this.pvcs = [];
      this.ingresses = [];
      this.isAddedNewResource = false;
    },

    async getPodListFromAPI(params: {
      mode?: ErrorMessageMode;
    }): Promise<ManyPodInResponse | null> {
      try {
        const { mode } = params;
        const data = await getPodsNameAPI(mode);

        this.setPodList(data.pod);

        return data;
      } catch (error) {
        return null;
      }
    },

    async getPvcListFromAPI(params: {
      mode?: ErrorMessageMode;
    }): Promise<ManyPvcInResponse | null> {
      try {
        const { mode } = params;
        const data = await getPvcsNameAPI(mode);

        const pvcList = data.pvc;

        this.setPvcList(pvcList);

        return data;
      } catch (error) {
        return null;
      }
    },

    async getPvcOptionsFromAPI(): Promise<OptionsItem[]> {
      const pvcList = (await this.getPvcListFromAPI({})) as ManyPvcInResponse;

      const result: OptionsItem[] = [];

      pvcList.pvc.forEach(function (value) {
        result.push({
          label: value,
          value: value,
        });
      });

      return result;
    },
  },
});

// Need to be used outside the setup
export function useResourceStoreWidthOut() {
  return useResourceStore(store);
}
