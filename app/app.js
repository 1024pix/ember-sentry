import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

/* Sentry integration */
/* --- Begin --- */
import * as Sentry from '@sentry/browser'

Sentry.init({
  dsn: 'https://c09ad627fd494dcea5a2d67609f93b0a@sentry.io/1400959',
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
