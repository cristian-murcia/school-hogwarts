import { env } from './env';

export const environment = {
  production: true,
  hmr: true,
  version: env.npm_package_version,
  serverUrl: 'http://hp-api.herokuapp.com/api/',
  defaultLanguage: 'es-ES',
  supportedLanguages: ['es-ES'],
  browserUrl: 'http://localhost:4200',
};
