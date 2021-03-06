import {applyAnnotation, Factory, Controller, Directive, Module} from 'a1atscript';
import {} from './swipe.js';
import {} from './interimElement.js';
import Inflector from 'xing-inflector';
import errorListTemplate from "./error-list.tpl.js";
import errorTemplate from "./error.tpl.js";
import noticeTemplate from "./notice.tpl.js";

function xngToastDirective() {
  return {
    restrict: 'E'
  };
}

applyAnnotation(xngToastDirective, Directive, '$xngToast');

@Controller('$xngToastErrorListCtrl', ['$scope','type','header','messages'])
class XngToastErrorListCtrl {
  constructor($scope, type, header, messages) {
    $scope.type = type;
    $scope.header = header;
    $scope.messages = messages;
  }
}

@Controller('$xngToastErrorCtrl', ['$scope','type','message'])
class XngToastErrorCtrl {
  constructor($scope, type, message) {
    $scope.type = type;
    $scope.message = message;
  }
}

@Controller('$xngToastNoticeCtrl', ['$scope','type','message'])
class XngToastNoticeCtrl {
  constructor($scope, type, message) {
    $scope.type = type;
    $scope.message = message;
  }
}
/**
 * @ngdoc service
 * @name $xngToast
 * @module xng.components.toast
 *
 * @description
 * Open a toast notification on any position on the screen, with an optional
 * duration.
 *
 * Only one toast notification may ever be active at any time. If a new toast is
 * shown while a different toast is active, the old toast will be automatically
 * hidden.
 *
 * `$xngToast` is an `$interimElement` service and adheres to the same behaviors.
 *  - `$xngToast.show()`
 *  - `$xngToast.hide()`
 *  - `$xngToast.cancel()`
 *
 * @usage
 * <hljs lang="html">
 * <div ng-controller="MyController">
 *   <xng-button ng-click="openToast()">
 *     Open a Toast!
 *   </xng-button>
 * </div>
 * </hljs>
 * <hljs lang="js">
 * var app = angular.module('app', ['ngxng']);
 * app.controller('MyController', function($scope, $xngToast) {
 *   $scope.openToast = function($event) {
 *     $xngToast.show({
 *       template: '<xng-toast>Hello!</xng-toast>',
 *       hideDelay: 3000
 *     });
 *   };
 * });
 * </hljs>
 */

 /**
 * @ngdoc method
 * @name $xngToast#show
 *
 * @description
 * Show a toast dialog with the specified options.
 *
 * @paramType Options
 * @param {string=} templateUrl The url of an html template file that will
 * be used as the content of the toast. Restrictions: the template must
 * have an outer `xng-toast` element.
 * @param {string=} template Same as templateUrl, except this is an actual
 * template string.
 * @param {number=} hideDelay How many milliseconds the toast should stay
 * active before automatically closing.  Set to 0 to disable duration.
 * Default: 3000.
 * @param {string=} position Where to place the toast. Available: any combination
 * of 'bottom', 'left', 'top', 'right', 'fit'. Default: 'bottom left'.
 * @param {string=} controller The controller to associate with this toast.
 * The controller will be injected the local `$hideToast`, which is a function
 * used to hide the toast.
 * @param {string=} locals An object containing key/value pairs. The keys will
 * be used as names of values to inject into the controller. For example,
 * `locals: {three: 3}` would inject `three` into the controller with the value
 * of 3.
 * @param {object=} resolve Similar to locals, except it takes promises as values
 * and the toast will not open until the promises resolve.
 * @param {string=} controllerAs An alias to assign the controller to on the scope.
 *
 * @returns {Promise} Returns a promise that will be resolved or rejected when
 *  `$xngToast.hide()` or `$xngToast.cancel()` is called respectively.
 */

/**
 * @ngdoc method
 * @name $xngToast#hide
 *
 * @description
 * Hide an existing toast and `resolve` the promise returned from `$xngToast.show()`.
 *
 * @param {*} arg An argument to resolve the promise with.
 *
 */

/**
 * @ngdoc method
 * @name $xngToast#cancel
 *
 * @description
 * Hide an existing toast and `reject` the promise returned from `$xngToast.show()`.
 *
 * @param {*} arg An argument to reject the promise with.
 *
 */

function xngToastService($timeout, $$interimElement, $animate, $xngSwipe, Inflector) {

  var factoryDef = {
    onShow: onShow,
    onRemove: onRemove,
    position: 'bottom left',
    hideDelay: 3000,
  };

  var toastElement = angular.element(document.getElementById("toast_main"));
  var $xngToast = $$interimElement(factoryDef);

  $xngToast.notice = function(message, type = "notice") {
    return this.show({
      parent: toastElement,
      template: noticeTemplate,
      position: 'top left',
      locals: {
        type: type,
        message: message
      },
      controller: '$xngToastNoticeCtrl'
    });
  };

  $xngToast.error = function(message, type = "error") {
    return this.show({
      parent: toastElement,
      template: errorTemplate,
      position: 'top left',
      locals: {
        type: type,
        message: message
      },
      controller: '$xngToastErrorCtrl'
    });
  };

  $xngToast.errorList = function(errors, header = "", type = "error") {
    var messages = [];
    if (Array.isArray(errors)) {
      messages = errors;
    } else {
      for (var key in errors) {
        if (errors.hasOwnProperty(key)) {
          messages.push(`${Inflector.humanize(key)} ${errors[key]}`);
        }
      }
    }
    return this.show({
      parent: toastElement,
      template: errorListTemplate,
      position: 'top left',
      locals: {
        type: type,
        header: header,
        messages: messages
      },
      controller: '$xngToastErrorListCtrl'

    });
  };

  return $xngToast;

  function onShow(scope, element, options) {
    element.addClass(options.position);
    options.parent.addClass(toastOpenClass(options.position));

    var configureSwipe = $xngSwipe(scope, 'swipeleft swiperight');
    options.detachSwipe = configureSwipe(element, function(ev) {
      //Add swipeleft/swiperight class to element so it can animate correctly
      element.addClass(ev.type);
      $timeout($xngToast.hide);
    });

    return $animate.enter(element, options.parent);
  }

  function onRemove(scope, element, options) {
    options.detachSwipe();
    options.parent.removeClass(toastOpenClass(options.position));
    return $animate.leave(element);
  }

  function toastOpenClass(position) {
    return 'xng-toast-open-' +
      (position.indexOf('top') > -1 ? 'top' : 'bottom');
  }
}

applyAnnotation(xngToastService, Factory, '$xngToast', ['$timeout','$$interimElement','$animate','$xngSwipe','Inflector'])

var Toast = new Module('toast', [
  `xing.utils.interimElement`,
  `xing.utils.swipe`,
  Inflector,
  xngToastDirective,
  XngToastErrorListCtrl,
  XngToastErrorCtrl,
  XngToastNoticeCtrl,
  xngToastService
]);

export default Toast;
