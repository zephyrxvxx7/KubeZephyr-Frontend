import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: t('routes.dashboard.dashboard'),
  component: LAYOUT,
  redirect: '/dashboard/overview',
  meta: {
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.dashboard'),
  },
  children: [
    {
      path: 'overview',
      name: 'namespaceOverview',
      component: () => import('/@/views/dashboard/namespaceOverview/index.vue'),
      meta: {
        affix: true,
        title: t('routes.dashboard.overview'),
      },
    },
  ],
};

export default dashboard;
