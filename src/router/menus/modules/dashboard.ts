import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 1,
  menu: {
    name: t('routes.dashboard.dashboard'),
    path: '/dashboard',
    tag: {
      dot: true,
      type: 'success',
    },
    children: [
      {
        name: t('routes.dashboard.overview'),
        path: 'overview',
        tag: {
          dot: true,
          type: 'primary',
        },
      },
    ],
  },
};
export default menu;
