declare module '@capacitor/core' {
  interface PluginRegistry {
    ServiceChecker: ServiceCheckerPlugin;
  }
}

export interface ServiceCheckerPlugin {
  isGMSAvailable (): Promise<{ value: boolean }> ;
  isHMSAvailable (): Promise<{ value: boolean }> ;
}
