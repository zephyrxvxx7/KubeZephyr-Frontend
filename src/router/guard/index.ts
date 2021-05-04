import router from '/@/router';

import { createProgressGuard } from './progressGuard';
import { createPermissionGuard } from './permissionGuard';
import { createPageLoadingGuard } from './pageLoadingGuard';
import { createMessageGuard } from './messageGuard';
import { createScrollGuard } from './scrollGuard';
import { createHttpGuard } from './httpGuard';
import { createPageGuard } from './pageGuard';
import { createStateGuard } from './stateGuard';
import { createResourceGuard } from './resourceGuard';

export function setupRouterGuard() {
  createPageGuard(router);
  createPageLoadingGuard(router);
  createHttpGuard(router);
  createScrollGuard(router);
  createMessageGuard(router);
  createProgressGuard(router);
  createPermissionGuard(router);
  createResourceGuard(router);
  createStateGuard(router);
}
