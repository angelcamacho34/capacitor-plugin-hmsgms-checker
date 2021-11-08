import { WebPlugin } from '@capacitor/core';
import type { ServiceCheckerPlugin } from './definitions';

export class ServiceCheckerWeb extends WebPlugin implements ServiceCheckerPlugin {

  async isGMSAvailable(): Promise<{ value: boolean }> {
    return {value:false};
  }
  async isHMSAvailable(): Promise<{ value: boolean }> {
    return {value:false};
  }
}
