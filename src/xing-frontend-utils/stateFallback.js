import ErrorLimiter from './errorLimiter.js';
import {Run, applyAnnotation} from 'a1atscript';


export default function stateFallback($rootScope, $state) {
  var limiter = new ErrorLimiter($state, "errorFallback");
  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    limiter.transitionError(fromState, toState);
  });
  $rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
    limiter.transitionSuccess(fromState, toState);
  });
}

applyAnnotation(stateFallback, Run, "$rootScope", "$state");
