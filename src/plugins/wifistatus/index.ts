import { registerPlugin } from '@capacitor/core';

export interface WifiStatusPlugin {
  isWifiEnabled(): Promise<{ enabled: boolean }>;
  isGpsEnabled(): Promise<{ enabled: boolean }>;
}

const WifiStatus = registerPlugin<WifiStatusPlugin>('WifiStatus');

export { WifiStatus };

