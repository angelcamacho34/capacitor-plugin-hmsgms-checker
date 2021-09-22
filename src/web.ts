import { WebPlugin } from '@capacitor/core';
import { ServiceCheckerPlugin } from './definitions';

export class ServiceCheckerWeb extends WebPlugin implements ServiceCheckerPlugin {
  constructor() {
    super({
      name: 'ServiceChecker',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const ServiceChecker = new ServiceCheckerWeb();

export { ServiceChecker };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(ServiceChecker);
