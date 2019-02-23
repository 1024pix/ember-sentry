import Controller from '@ember/controller';
import * as Sentry from '@sentry/browser'

export default Controller.extend({

actions: {

  sendInfoEvent() {
    return Sentry.captureMessage('Message captured!');
  },

  sendErrorEvent() {
    throw new Error("Throwed error");
  },

  sendNewErrorEvent() {
    throw new Error("Lorem ipsum dolor");
  }
}
});
