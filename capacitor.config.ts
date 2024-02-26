import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'in.humblar.busmein',
  appName: 'busmein',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
