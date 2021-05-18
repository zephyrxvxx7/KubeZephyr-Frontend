import { reactive } from 'vue';

import type { BasicColumn } from '/@/components/Table/src/types/table';
import type { FormSchema } from '/@/components/Form/index';
import type { BasicFetchResult } from '/@/api/model/baseModel';
import type { ManyPvc } from '/@/api/model/resources/pvcModel';

import { useResourceStore } from '/@/store/modules/resource';
import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();

export const volumeColumns: BasicColumn[] = [
  {
    title: t('volume.create.name'),
    dataIndex: 'name',
  },
  {
    title: t('volume.create.accessModes'),
    dataIndex: 'accessMode',
  },
  {
    title: t('volume.create.storage'),
    dataIndex: 'storage',
  },
];

export const editSchemas: FormSchema[] = [
  {
    field: 'name',
    component: 'Input',
    label: t('volume.create.name'),
    required: true,
    colProps: {
      span: 20,
    },
    defaultValue: 'my-volume',
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'accessModes',
    component: 'Select',
    label: t('volume.create.accessModes'),
    required: true,
    colProps: {
      span: 20,
    },
    defaultValue: 'ReadWriteOnce',
    componentProps: {
      disabled: true,
      options: [
        {
          label: 'ReadWriteOnce',
          value: 'ReadWriteOnce',
          key: 'ReadWriteOnce',
        },
        {
          label: 'ReadWriteMany',
          value: 'ReadWriteMany',
          key: 'ReadWriteMany',
        },
        {
          label: 'ReadOnlyMany',
          value: 'ReadOnlyMany',
          key: 'ReadOnlyMany',
        },
      ],
    },
  },
  {
    field: 'storage',
    component: 'InputNumber',
    label: t('volume.create.storage'),
    required: true,
    defaultValue: 1,
    colProps: {
      span: 11,
    },
    componentProps: {
      min: 0.1,
      step: 0.1,
    },
  },
  {
    field: 'si',
    component: 'Select',
    label: '',
    required: true,
    colProps: {
      span: 11,
    },
    defaultValue: 'Gi',
    componentProps: {
      options: [
        {
          label: 'Ki',
          value: 'Ki',
          key: 'Ki',
        },
        {
          label: 'Mi',
          value: 'Mi',
          key: 'Mi',
        },
        {
          label: 'Gi',
          value: 'Gi',
          key: 'Gi',
        },
        {
          label: 'Ti',
          value: 'Ti',
          key: 'Ti',
        },
        {
          label: 'Pi',
          value: 'Pi',
          key: 'Pi',
        },
        {
          label: 'Ei',
          value: 'Ei',
          key: 'Ei',
        },
      ],
    },
  },
];

export interface volumeListItem {
  name: string;
  accessModes: string;
  storage: string;
}

export function volumeListApi(): Promise<BasicFetchResult<ManyPvc[]>> {
  const volumes: BasicFetchResult<ManyPvc[]> = reactive({ items: [], total: 0 });

  volumes.items = useResourceStore().getPvcList;
  volumes.total = useResourceStore().getPvcList.length;

  return Promise.resolve(volumes);
}
