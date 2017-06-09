import AjaxService from 'services/ember-ajax';
import ENV from 'what-to-eat/config/environment';

export default AjaxService.extend({
  host: ENV.apiHost,
});
