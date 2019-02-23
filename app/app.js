import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

/* Sentry integration */
/* --- Begin --- */
import * as Sentry from '@sentry/browser'

Sentry.init({
  dsn: 'https://f7589b9ed7c24fc0a6c5b20ea5ca3885@sentry.io/1401066',
  integrations: [new Sentry.Integrations.Ember()],
  release: config.APP.version,
  environment: config.environment,
  debug: (config.environment !== 'production'),
});
/* --- end --- */

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
