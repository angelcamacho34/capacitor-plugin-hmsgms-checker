declare module '@capacitor/core' {
  interface PluginRegistry {
    ServiceChecker: ServiceCheckerPlugin;
  }
}

export interface ServiceCheckerPlugin {
  /**
   * Platform: Android
   * Gets true if GMS are available on the device
   * @param none
   * @returns object {value: boolean} - boolean indicates if GMS are available
   */
  isGMSAvailable(): Promise<{ value: boolean }>;
  /**
   * Platform: Android
   * Gets true if HMS are available on the device
   * @param none
   * @returns object {value: boolean} - boolean indicates if HMS are available
   */
  isHMSAvailable(): Promise<{ value: boolean }>;
}
