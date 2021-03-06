import * as ExampleFormStates from './exampleFormStates.js';
import ExampleFormController from './exampleFormControllers.js';
import { Module } from 'a1atscript';

var ExampleForm = new Module( 'exampleForm', [
  'ui.router.state',
  ExampleFormStates,
  ExampleFormController
]);

export default ExampleForm;
