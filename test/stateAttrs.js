import StateAttrs from '../src/xing-frontend-utils/components/stateAttrs/stateAttrs.js';
import {xpath, stringAtXpath} from "../test-help/xpath.js";
import setupUiRouteLogging from "../src/xing-frontend-utils/ui-route-logger.js";
import {bootstrap} from "a1atscript";

describe('xngStateAttrs directive', function() {
  var $compile, $rootScope, $state;

  beforeEach(function() {
    bootstrap(StateAttrs);
    angular.mock.module(`stateAttrs`, "ui.router.state", function($stateProvider) {
      $stateProvider.state('root', {url: "/", template: "<ui-view xng-state-attrs label='r'></ui-view>"});
      $stateProvider.state('root.inner', {url: "/ri", template: "<hr label='r-i'/>"});
      $stateProvider.state('root.other', {url: "/ro", template: "<hr label='r-o'/>"});
    })
  });

  beforeEach(inject(function(_$state_, _$compile_, _$rootScope_){
    $state = _$state_;
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  describe('in a current state', function() {
    var element;

    beforeEach(function() {
      $state.go('root.inner');
      $rootScope.$apply();
      element = $compile("<div ng-app><p>Before</p><ui-view xng-state-attrs label='t'></ui-view><p>After</p></div>")($rootScope);

      $rootScope.$digest();
    });

    it('should have an element with an id like "root" and a class with "root"', function() {
      expect(xpath(element, ".//*[@label='r-i']").snapshotLength).toBeGreaterThan(0);
      expect(xpath(element, ".//*[@id='root'][@label='t']").snapshotLength).toBeGreaterThan(0);
      expect(xpath(element, ".//*[contains(@class, 'root')][@label='t']").snapshotLength).toBeGreaterThan(0);
    });

    it('should have an element with an id like "root_inner"', function() {
      expect(xpath(element, ".//*[@id='root_inner'][@label='r']").snapshotLength).toBeGreaterThan(0);
      expect(xpath(element, ".//*[contains(@class, 'inner')][@label='r']").snapshotLength).toBeGreaterThan(0);
    });

    it('update attrs when state changes', function() {
      expect(xpath(element, ".//*[@label='r-i']").snapshotLength).toBeGreaterThan(0);

      expect(xpath(element, ".//*[@id='root_other']").snapshotLength).toEqual(0);
      expect(xpath(element, ".//*[contains(@class, 'other')]").snapshotLength).toEqual(0);

      $state.go('root.other');
      $rootScope.$apply();

      expect(xpath(element, ".//*[@label='r-i']").snapshotLength).toEqual(0);
      expect(xpath(element, ".//*[contains(@class, 'inner')]").snapshotLength).toEqual(0);
      expect(xpath(element, ".//*[@id='root_inner']").snapshotLength).toEqual(0);

      expect(xpath(element, ".//*[@id='root_other'][@label='r']").snapshotLength).toBeGreaterThan(0);
      expect(xpath(element, ".//*[contains(@class, 'other')][@label='r']").snapshotLength).toBeGreaterThan(0);
    });
  });
});
