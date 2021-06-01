import type { BasicColumn } from '/@/components/Table/src/types/table';
import type { BasicFetchResult } from '/@/api/model/baseModel';
import type { ManyUser } from '/@/api/sys/model/userModel';

import { getPodAPI, getPodsAPI, getPodStatusAPI, getUsersAPI } from '/@/api/admin';

import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();

export const containerColumns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    defaultHidden: true,
  },
  {
    title: t('admin.containers.manage.realName'),
    dataIndex: 'realName',
    width: 200,
  },
  {
    title: t('admin.containers.manage.container'),
    dataIndex: 'container',
    children: [
      {
        title: t('admin.containers.manage.podName'),
        dataIndex: 'podName',
      },
      {
        title: t('admin.containers.manage.image'),
        dataIndex: 'image',
      },
      {
        title: t('admin.containers.manage.phase'),
        dataIndex: 'phase',
        width: 70,
      },
      {
        title: t('admin.containers.manage.creationTimestamp'),
        dataIndex: 'creationTimestamp',
        width: 250,
      },
    ],
  },
];

export interface containerListItemChildern {
  id: string;
  podName: string;
  phase: string;
  image: string;
  creationTimestamp: string;
}

export interface containerListItem {
  id: string;
  realName: string;
  children?: containerListItemChildern[];
}

export async function containerListApi(): Promise<BasicFetchResult<containerListItem[]>> {
  const getPod = async ({ id, podName }) => {
    const { pod } = await getPodAPI(id, podName);
    const { status } = await getPodStatusAPI(id, podName);

    const result: containerListItemChildern = {
      id: id,
      podName: podName,
      phase: status.phase!,
      image: pod.spec.containers[0].image!,
      creationTimestamp: pod.metadata.creationTimestamp!,
    };

    return result;
  };

  const getUser = async (user: ManyUser) => {
    const result: containerListItem = { ...user };
    const role = user.roles[0].value;

    if (role === 'user') {
      const params: { id: string; podName: string }[] = [];

      const { pod: pods } = await getPodsAPI(user.id);
      pods.forEach(async (pod) => {
        params.push({ id: user.id, podName: pod });
      });

      result.children = await Promise.all(params.map(getPod));
    }

    return result;
  };

  const { user: users } = await getUsersAPI();
  const items = await Promise.all(users.map(getUser));

  return {
    items: items,
    total: items.length,
  };
}
