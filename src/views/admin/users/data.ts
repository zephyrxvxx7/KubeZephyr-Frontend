import type { BasicColumn } from '/@/components/Table/src/types/table';
import type { FormSchema } from '/@/components/Form/index';
import type { BasicFetchResult } from '/@/api/model/baseModel';
import type { ManyUser } from '/@/api/sys/model/userModel';

import { getUsersAPI, getResourceQuotaAPI } from '/@/api/admin';

import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();

export const userColumns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    defaultHidden: true,
  },
  {
    title: t('admin.users.manage.email'),
    dataIndex: 'email',
    width: 250,
  },
  {
    title: t('admin.users.manage.realName'),
    dataIndex: 'realName',
    width: 250,
  },
  {
    title: t('admin.users.manage.desc'),
    dataIndex: 'desc',
  },
  {
    title: t('admin.users.manage.role'),
    dataIndex: 'role',
  },
  {
    title: t('admin.users.manage.resourceQuota'),
    dataIndex: 'resourceQuota',
    children: [
      {
        title: t('admin.users.manage.cpuLimit'),
        dataIndex: 'cpuLimit',
      },

      {
        title: t('admin.users.manage.memoryLimit'),
        dataIndex: 'memoryLimit',
      },
      {
        title: t('admin.users.manage.storageRequest'),
        dataIndex: 'storageRequest',
      },
      {
        title: t('admin.users.manage.pvcs'),
        dataIndex: 'pvcs',
      },
      {
        title: t('admin.users.manage.pods'),
        dataIndex: 'pods',
      },
    ],
  },
];

export const editSchemas: FormSchema[] = [
  {
    field: 'id',
    component: 'Input',
    label: 'ID',
    required: true,
    colProps: {
      span: 20,
    },
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'limit_cpu',
    component: 'InputNumber',
    label: t('container.create.cpuLimit'),
    suffix: 'core',
    required: true,
    componentProps: {
      min: 0.1,
      step: 0.1,
    },
  },
  {
    field: 'limit_memory',
    component: 'InputNumber',
    label: t('container.create.memoryLimit'),
    required: true,
    colProps: {
      span: 11,
    },
    componentProps: {
      min: 1,
    },
  },
  {
    field: 'memorySI',
    component: 'Select',
    label: '',
    required: true,
    colProps: {
      span: 11,
    },
    defaultValue: 'Mi',
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
  {
    field: 'request_storage',
    component: 'InputNumber',
    label: t('admin.users.manage.storageRequest'),
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
    field: 'storageSI',
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
  {
    field: 'persistentvolumeclaims',
    component: 'InputNumber',
    label: t('admin.users.manage.pvcs'),
    required: true,
    componentProps: {
      min: 1,
      step: 1,
    },
  },
  {
    field: 'pods',
    component: 'InputNumber',
    label: t('admin.users.manage.pods'),
    required: true,
    componentProps: {
      min: 1,
      step: 1,
    },
  },
];

export interface userListItem {
  id: string;
  email: string;
  realName: string;
  role: string;
  desc?: string;

  cpuLimit?: string;
  memoryLimit?: string;
  pvcs?: number;
  pods?: number;
  storageRequest?: string;
}

export async function userListApi(): Promise<BasicFetchResult<userListItem[]>> {
  const fn = async function getResourceQuota(user: ManyUser) {
    const result: userListItem = { role: user.roles[0].value, ...user };

    if (user.roles[0].value === 'user') {
      const resourceQuota = await getResourceQuotaAPI(user.id);
      result.cpuLimit = resourceQuota.resource_quota.limit_cpu;
      result.memoryLimit = resourceQuota.resource_quota.limit_memory;
      result.pvcs = resourceQuota.resource_quota.persistentvolumeclaims;
      result.pods = resourceQuota.resource_quota.pods;
      result.storageRequest = resourceQuota.resource_quota.request_storage;
    }

    return result;
  };

  const { user: users } = await getUsersAPI();
  const items = await Promise.all(users.map(fn));

  return {
    items: items,
    total: items.length,
  };
}
