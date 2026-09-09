import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'Fisumobi',
  webDir: 'dist',
  plugins: {
    // SplashScreen: {
    //   launchShowDuration: 1000, //1000
    //   launchAutoHide: false,
    //   androidSplashResourceName: "splash_old",
    //   androidScaleType: "CENTER_CROP", //CENTER_INSIDE
    //   "splashFullScreen": true,
    //   "splashImmersive": true,
    //   "launchFadeOutDuration": 1000,
    // }
    SplashScreen: {
      launchShowDuration: 1500,
      launchAutoHide: false,
      // backgroundColor: "#FFFFFF",
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
      // splashImagePath: "resources/logo.png",
      "launchFadeOutDuration": 1000,
    }
  },
};

export default config;
