import type { ErrorMessageMode } from '/@/utils/http/axios/types';

import { defineStore } from 'pinia';
import { store } from '/@/store';

import { POD_LIST, PVC_LIST, INGRESS_LIST } from '/@/enums/cacheEnum';
import { getAuthCache, setAuthCache } from '/@/utils/auth';

import type { ManyPodInResponse } from '/@/api/model/resources/podModel';
import type { ManyPvc, ManyPvcInResponse } from '/@/api/model/resources/pvcModel';
import type { ManyIngress, ManyIngressInResponse } from '/@/api/model/resources/ingressModel';
import { getPodsNameAPI } from '/@/api/pod';
import { getPvcsNameAPI } from '/@/api/pvc';
import { getIngressesAPI } from '/@/api/ingress';

interface ResourceState {
  pods: Array<string>;
  pvcs: Array<ManyPvc>;
  ingresses: Array<ManyIngress>;
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
      return this.pvcs.length > 0 ? this.pvcs : getAuthCache<Array<ManyPvc>>(PVC_LIST);
    },
    getIngressList() {
      return this.ingresses.length > 0
        ? this.ingresses
        : getAuthCache<Array<ManyIngress>>(INGRESS_LIST);
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
    setPvcList(pvcs: Array<ManyPvc>) {
      this.pvcs = pvcs;
      setAuthCache(PVC_LIST, pvcs);
    },
    setIngressList(ingresses: Array<ManyIngress>) {
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

      pvcList.pvc
        .map((pvc) => pvc.name)
        .forEach(function (value) {
          result.push({
            label: value,
            value: value,
          });
        });

      return result;
    },

    async getIngressFromAPI(params: {
      mode?: ErrorMessageMode;
    }): Promise<ManyIngressInResponse | null> {
      try {
        const { mode } = params;
        const data = await getIngressesAPI(mode);

        const ingressList = data.ingress;

        this.setIngressList(ingressList);

        return data;
      } catch (error) {
        return null;
      }
    },
  },
});

// Need to be used outside the setup
export function useResourceStoreWidthOut() {
  return useResourceStore(store);
}
