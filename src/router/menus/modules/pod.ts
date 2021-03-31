import type { MenuModule } from '/@/router/types';
// import { t } from '/@/hooks/web/useI18n';

const resources: MenuModule = {
  orderNo: 1,
  menu: {
    path: '/pod',
    name: 'Pod',

    children: [
      {
        path: 'charts',
        name: 'Charts',
      },
      {
        path: 'create',
        name: 'Create',
      },
      {
        path: 'pods',
        name: 'Pods',
      },
    ],
  },
};
export default resources;
