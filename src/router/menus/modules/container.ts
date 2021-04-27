import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const container: MenuModule = {
  orderNo: 2,
  menu: {
    name: t('routes.container.container'),
    path: '/container',
    tag: {
      dot: true,
      type: 'success',
    },
    children: [
      {
        name: t('routes.container.overview'),
        path: 'overview',
        tag: {
          dot: true,
          type: 'primary',
        },
      },
      {
        name: t('routes.container.create'),
        path: 'create',
        tag: {
          dot: true,
          type: 'primary',
        },
      },
    ],
  },
};

export default container;
