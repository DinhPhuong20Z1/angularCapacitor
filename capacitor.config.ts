import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.devdactic.angular',
  appName: 'Angular App',
  webDir: 'dist/angular-capacitor',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.1.41:4200',
    cleartext: true
  },
};

export default config;
