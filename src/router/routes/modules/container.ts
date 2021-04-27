import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const container: AppRouteModule = {
  path: '/container',
  name: t('routes.container.container'),
  component: LAYOUT,
  redirect: '/container/overview',
  meta: {
    icon: 'simple-icons:kubernetes',
    title: t('routes.container.container'),
  },
  children: [
    {
      path: 'overview',
      name: 'containerOverview',
      component: () => import('/@/views/container/overview/index.vue'),
      meta: {
        affix: true,
        title: t('routes.container.overview'),
      },
    },
    {
      path: 'create',
      name: 'containerCreate',
      component: () => import('/@/views/container/create/index.vue'),
      meta: {
        affix: true,
        title: t('routes.container.create'),
      },
    },
  ],
};

export default container;
