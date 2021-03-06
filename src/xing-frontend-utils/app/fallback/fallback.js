import {Module} from 'a1atscript';
import {State} from '../../stateInjector.js';
import template from "./error-fallback.tpl.js";

//import errorTemplate from 'common/templates/app/error-fallback.tpl.js';

@State('errorFallback') //must be top level - don't want e.g. resolve error in root to break it
class FallbackState {
  constructor() { // no controller, no resolves.
    this.url = "/error";
    this.template = template;
  }
}

var Fallback = new Module('fallback', [
  'ui.router.state',
  FallbackState
]);

export default Fallback;
