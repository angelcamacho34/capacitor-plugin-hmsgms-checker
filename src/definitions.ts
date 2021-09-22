declare module '@capacitor/core' {
  interface PluginRegistry {
    ServiceChecker: ServiceCheckerPlugin;
  }
}

export interface ServiceCheckerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
