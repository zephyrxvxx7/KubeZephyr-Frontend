import type { Router } from 'vue-router';

import { PageEnum } from '/@/enums/pageEnum';
import { usePermission } from '/@/hooks/web/usePermission';
import { useResourceStoreWidthOut } from '/@/store/modules/resource';

const { setIsAddedNewResource } = useResourceStoreWidthOut();

export function createResourceGuard(router: Router) {
  router.afterEach(async (_to, from) => {
    if (
      from.path === PageEnum.CONTAINER_CREATE_PAGE &&
      useResourceStoreWidthOut().getIsAddedNewResource
    ) {
      const { changeMenu } = usePermission();
      changeMenu();
      setIsAddedNewResource(false);
    }
  });
}
