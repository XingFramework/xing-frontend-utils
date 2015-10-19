import {State} from '../../stateInjector.js';
import template from "./example-form.tpl.js";

@State( 'root.inner.exampleForm')
export class ExampleFormState {
  constructor() {
    this.url = '^/example-form';
    this.controller = 'ExampleFormCtrl';
    this.template = template;
  }
}
