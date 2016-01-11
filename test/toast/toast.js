import ToastModule from "../../src/xing-frontend-utils/components/toast/toast.js";
import {bootstrap} from "a1atscript";

describe('$xngToast service', function() {
  beforeEach(function() {
    bootstrap(ToastModule);
    angular.mock.module(`toast`, 'ngAnimateMock', function($provide) {
    })
  });

  function setup(options) {
    inject(function($xngToast, $rootScope, $animate) {
      options = options || {};
      $xngToast.show(options);
      $rootScope.$apply();
      $animate.triggerCallbacks();
    });
  }

  describe('options', function() {

    it('should hide after duration', inject(function($timeout, $animate, $rootElement) {
      var parent = angular.element('<div>');
      setup({
        template: '<xng-toast />',
        hideTimeout: 1234
      });
      expect($rootElement.find('xng-toast').length).toBe(1);
      $timeout.flush();
      expect($rootElement.find('xng-toast').length).toBe(0);
    }));

    it('should have template', inject(function($timeout, $rootScope, $rootElement) {
      var parent = angular.element('<div>');
      setup({
        template: '<xng-toast>{{1}}234</xng-toast>',
        appendTo: parent
      });
      var toast = $rootElement.find('xng-toast');
      $timeout.flush();
      expect(toast.text()).toBe('1234');
    }));

    it('should have templateUrl', inject(function($timeout, $rootScope, $templateCache, $rootElement) {
      $templateCache.put('template.html', '<xng-toast>hello, {{1}}</xng-toast>');
      setup({
        templateUrl: 'template.html',
      });
      var toast = $rootElement.find('xng-toast');
      expect(toast.text()).toBe('hello, 1');
    }));
  });

  describe('lifecycle', function() {

    it('should hide current toast when showing new one', inject(function($rootElement) {
      setup({
        template: '<xng-toast class="one">'
      });
      expect($rootElement.find('xng-toast.one').length).toBe(1);
      expect($rootElement.find('xng-toast.two').length).toBe(0);
      expect($rootElement.find('xng-toast.three').length).toBe(0);

      setup({
        template: '<xng-toast class="two">'
      });
      expect($rootElement.find('xng-toast.one').length).toBe(0);
      expect($rootElement.find('xng-toast.two').length).toBe(1);
      expect($rootElement.find('xng-toast.three').length).toBe(0);

      setup({
        template: '<xng-toast class="three">'
      });
      expect($rootElement.find('xng-toast.one').length).toBe(0);
      expect($rootElement.find('xng-toast.two').length).toBe(0);
      expect($rootElement.find('xng-toast.three').length).toBe(1);
    }));

    it('should add class to toastParent', inject(function($rootElement) {
      setup({
        template: '<xng-toast>'
      });
      expect($rootElement.hasClass('xng-toast-open-bottom')).toBe(true);

      setup({
        template: '<xng-toast>',
        position: 'top'
      });
      expect($rootElement.hasClass('xng-toast-open-top')).toBe(true);
    }));

  });
});
