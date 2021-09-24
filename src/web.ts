import { WebPlugin } from '@capacitor/core';
import { ServiceCheckerPlugin } from './definitions';

export class ServiceCheckerWeb extends WebPlugin implements ServiceCheckerPlugin {
  constructor() {
    super({
      name: 'ServiceChecker',
      platforms: ['web'],
    });
  }


  async isGMSAvailable(): Promise<{ value: boolean }> {
    return {value:false};
  }
  async isHMSAvailable(): Promise<{ value: boolean }> {
    return {value:false};
  }
}

const ServiceChecker = new ServiceCheckerWeb();

export { ServiceChecker };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(ServiceChecker);
