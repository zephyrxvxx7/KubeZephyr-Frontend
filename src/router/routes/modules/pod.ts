import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';
const IFrame = () => import('/@/views/sys/iframe/FrameBlank.vue');

const resources: AppRouteModule = {
  path: '/pod',
  name: 'Pod',
  component: LAYOUT,
  redirect: '/pod/charts',
  meta: {
    icon: 'simple-icons:kubernetes',
    title: 'Pod',
  },
  children: [
    {
      path: 'charts',
      name: 'Pod_charts',
      // component: () => import('/@/views/k8s_resources/pod/charts/index.vue'),
      component: IFrame,
      meta: {
        frameSrc:
          'https://grafana.zephyr-kubernetes.tech/d/85a562078cdf77779eaa1add43ccec1e/kubernetes-compute-resources-namespace-pods?orgId=1&refresh=10s&var-datasource=Prometheus&var-cluster=&var-namespace=60584bf394c6df523cfa00ae&kiosk',
        title: 'Charts',
        affix: true,
        icon: 'file-icons:devcontainer',
      },
    },
    {
      path: 'create',
      name: 'Create_pod',
      component: () => import('/@/views/k8s_resources/pod/create/index.vue'),
      meta: {
        title: 'Create',
        affix: true,
        icon: 'file-icons:devcontainer',
      },
    },
    {
      path: 'pods',
      name: 'Pods',
      component: getParentLayout('Pods'),
      redirect: '/pod/charts',
      meta: {
        title: 'Pods',
        affix: true,
        icon: 'ion:menu-outline',
      },
    },
  ],
};

export default resources;
