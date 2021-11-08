import { registerPlugin } from '@capacitor/core';

import type { ServiceCheckerPlugin } from './definitions';

const ServiceChecker = registerPlugin<ServiceCheckerPlugin>('ServiceChecker', {
  web: () => import('./web').then(m => new m.ServiceCheckerWeb()),
});

export * from './definitions';
export { ServiceChecker };
