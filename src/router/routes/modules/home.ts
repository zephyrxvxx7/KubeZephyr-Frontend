import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
const IFrame = () => import('/@/views/sys/iframe/FrameBlank.vue');

const dashboard: AppRouteModule = {
  path: '/home',
  name: 'Home',
  component: LAYOUT,
  redirect: '/home/welcome',
  meta: {
    icon: 'ion:home-outline',
    title: t('routes.dashboard.welcome'),
  },
  children: [
    {
      path: 'welcome',
      name: 'Welcome',
      // component: () => import('/@/views/dashboard/welcome/index.vue'),
      component: IFrame,
      meta: {
        title: t('routes.dashboard.welcome'),
        frameSrc:
          'https://grafana.zephyr-kubernetes.tech/d/P2SL71Nmk/kubernetes-namespace-resources?orgId=1&refresh=30s&var-source=Prometheus&var-namespace=60584bf394c6df523cfa00ae&theme=light&kiosk',
        affix: true,
        icon: 'bx:bx-home',
        // ignoreKeepAlive: true,
      },
    },
  ],
};

export default dashboard;
