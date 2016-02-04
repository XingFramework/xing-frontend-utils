(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.xingFrontendUtils = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	__webpack_require__(1);

	var _a1atscriptInjectorJs = __webpack_require__(2);

	Object.defineProperty(exports, 'registerInjector', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptInjectorJs.registerInjector;
	  }
	});
	Object.defineProperty(exports, 'getInjector', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptInjectorJs.getInjector;
	  }
	});
	Object.defineProperty(exports, 'Injector', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptInjectorJs.Injector;
	  }
	});

	var _a1atscriptAnnotationsJs = __webpack_require__(3);

	Object.defineProperty(exports, 'Config', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Config;
	  }
	});
	Object.defineProperty(exports, 'Run', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Run;
	  }
	});
	Object.defineProperty(exports, 'Controller', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Controller;
	  }
	});
	Object.defineProperty(exports, 'Directive', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Directive;
	  }
	});
	Object.defineProperty(exports, 'Service', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Service;
	  }
	});
	Object.defineProperty(exports, 'Factory', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Factory;
	  }
	});
	Object.defineProperty(exports, 'Provider', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Provider;
	  }
	});
	Object.defineProperty(exports, 'Value', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Value;
	  }
	});
	Object.defineProperty(exports, 'Constant', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Constant;
	  }
	});
	Object.defineProperty(exports, 'Filter', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Filter;
	  }
	});
	Object.defineProperty(exports, 'Animation', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Animation;
	  }
	});
	Object.defineProperty(exports, 'Module', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Module;
	  }
	});
	Object.defineProperty(exports, 'AsModule', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.AsModule;
	  }
	});

	var _a1atscriptDirectiveObjectJs = __webpack_require__(19);

	Object.defineProperty(exports, 'DirectiveObject', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptDirectiveObjectJs.DirectiveObject;
	  }
	});

	var _a1atscriptNg2DirectivesComponentJs = __webpack_require__(9);

	Object.defineProperty(exports, 'Component', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptNg2DirectivesComponentJs.Component;
	  }
	});
	Object.defineProperty(exports, 'Template', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptNg2DirectivesComponentJs.Template;
	  }
	});
	Object.defineProperty(exports, 'View', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptNg2DirectivesComponentJs.View;
	  }
	});

	var _a1atscriptToAnnotationJs = __webpack_require__(4);

	Object.defineProperty(exports, 'ToAnnotation', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptToAnnotationJs.ToAnnotation;
	  }
	});

	var _a1atscriptBootstrapJs = __webpack_require__(20);

	Object.defineProperty(exports, 'bootstrap', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptBootstrapJs.bootstrap;
	  }
	});

	var _a1atscriptRouterJs = __webpack_require__(7);

	Object.defineProperty(exports, 'Router', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptRouterJs.Router;
	  }
	});
	Object.defineProperty(exports, 'RouteConfig', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptRouterJs.RouteConfig;
	  }
	});

	var _a1atscriptApplyAnnotationJs = __webpack_require__(21);

	Object.defineProperty(exports, 'applyAnnotation', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptApplyAnnotationJs.applyAnnotation;
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _InjectorJs = __webpack_require__(2);

	var _ComponentJs = __webpack_require__(9);

	var _injectorTypesJs = __webpack_require__(6);

	var _Ng2DirectiveDefinitionObjectJs = __webpack_require__(15);

	var _Ng2DirectiveDefinitionObjectJs2 = _interopRequireDefault(_Ng2DirectiveDefinitionObjectJs);

	var _PropertiesBuilderJs = __webpack_require__(16);

	var _PropertiesBuilderJs2 = _interopRequireDefault(_PropertiesBuilderJs);

	var _EventsBuilderJs = __webpack_require__(18);

	var _EventsBuilderJs2 = _interopRequireDefault(_EventsBuilderJs);

	var _RouterJs = __webpack_require__(7);

	var ComponentInjector = (function (_ListInjector) {
	  _inherits(ComponentInjector, _ListInjector);

	  function ComponentInjector() {
	    _classCallCheck(this, ComponentInjector);

	    _get(Object.getPrototypeOf(ComponentInjector.prototype), 'constructor', this).call(this);
	    this.componentHooks = { before: [], after: [] };
	  }

	  _createClass(ComponentInjector, [{
	    key: '_template',
	    value: function _template(component) {
	      return component.annotations.find(function (annotation) {
	        return annotation instanceof _ComponentJs.ViewBase;
	      }) || {};
	    }
	  }, {
	    key: 'instantiateOne',
	    value: function instantiateOne(module, component, annotation) {
	      if (annotation.appInjector) {
	        component.$inject = annotation.appInjector;
	      }
	      _RouterJs.Router.routeReader.read(component);
	      var template = this._template(component);
	      var properties = {},
	          events = {},
	          bind;
	      if (annotation.properties) {
	        properties = new _PropertiesBuilderJs2['default'](annotation.properties, component).build();
	      }
	      if (annotation.events) {
	        events = new _EventsBuilderJs2['default'](annotation.events, component).build();
	      }
	      bind = Object.assign({}, properties, events);
	      if (bind === {}) bind = null;
	      if (annotation.selector) {
	        var ddo = new _Ng2DirectiveDefinitionObjectJs2['default'](component, annotation, template, bind);
	        this.hooks('before', module, ddo);
	        module.directive(ddo.name, ddo.factoryFn);
	        this.hooks('after', module, ddo);
	      }
	    }
	  }, {
	    key: 'hooks',
	    value: function hooks(phase, module, ddo) {
	      this.componentHooks[phase].forEach(function (hook) {
	        hook(module, ddo);
	      });
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _ComponentJs.Component;
	    }
	  }]);

	  return ComponentInjector;
	})(_injectorTypesJs.ListInjector);

	(0, _InjectorJs.registerInjector)('component', ComponentInjector);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports.registerInjector = registerInjector;
	exports.getInjector = getInjector;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _annotationsJs = __webpack_require__(3);

	var _AnnotationFinderJs = __webpack_require__(5);

	var _injectorTypesJs = __webpack_require__(6);

	var registeredInjectors = {};

	function registerInjector(name, InjectorClass) {
	  registeredInjectors[name] = new InjectorClass();
	}

	function getInjector(name) {
	  return registeredInjectors[name];
	}

	registerInjector('config', _injectorTypesJs.ConfigInjector);
	registerInjector('run', _injectorTypesJs.RunInjector);
	registerInjector('controller', _injectorTypesJs.ControllerInjector);
	registerInjector('directive', _injectorTypesJs.DirectiveInjector);
	registerInjector('service', _injectorTypesJs.ServiceInjector);
	registerInjector('factory', _injectorTypesJs.FactoryInjector);
	registerInjector('provider', _injectorTypesJs.ProviderInjector);
	registerInjector('value', _injectorTypesJs.ValueInjector);
	registerInjector('constant', _injectorTypesJs.ConstantInjector);
	registerInjector('animation', _injectorTypesJs.AnimationInjector);
	registerInjector('filter', _injectorTypesJs.FilterInjector);

	var Injector = (function () {
	  function Injector() {
	    var appNamePrefix = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];

	    _classCallCheck(this, Injector);

	    this.appNamePrefix = appNamePrefix;
	    this.injectedModules = {};
	  }

	  _createClass(Injector, [{
	    key: 'instantiate',
	    value: function instantiate(moduleClass) {
	      var metadata = this._getAnnotatedClass(moduleClass);
	      if (!metadata) {
	        return undefined;
	      }
	      if (this.injectedModules[metadata.token]) {
	        return this.injectedModules[metadata.token];
	      }
	      var sortedDependencies = this._sortModuleDependencies(metadata);
	      sortedDependencies = this._sortSelf(metadata, moduleClass, sortedDependencies);
	      var moduleDependencies = this._instantiateModuleDependencies(sortedDependencies.module);
	      var moduleName = metadata.token;
	      if (this.appNamePrefix && moduleName != this.appNamePrefix) {
	        moduleName = this.appNamePrefix + '.' + moduleName;
	      }
	      var instantiatedModule = angular.module(moduleName, moduleDependencies);
	      delete sortedDependencies.module;
	      this._instantiateOtherDependencies(sortedDependencies, instantiatedModule);
	      this.injectedModules[metadata.token] = moduleName;
	      return moduleName;
	    }
	  }, {
	    key: '_sortSelf',
	    value: function _sortSelf(metadata, moduleClass, sortedDependencies) {
	      if (metadata == moduleClass) {
	        return sortedDependencies;
	      } else {
	        var selfDependency = this._sortDependency(moduleClass, false);
	        return this._mergeSortedDependencies(sortedDependencies, selfDependency);
	      }
	    }
	  }, {
	    key: '_getAnnotatedClass',
	    value: function _getAnnotatedClass(moduleClass) {
	      if (moduleClass instanceof _annotationsJs.Module) {
	        moduleClass.injectable = false;
	        return moduleClass;
	      } else {
	        var metadata = this._getModuleAnnotation(moduleClass);
	        return metadata;
	      }
	    }
	  }, {
	    key: '_getDependencyType',
	    value: function _getDependencyType(dependency) {
	      var annotations = dependency.annotations;
	      for (var i = 0; i < annotations.length; i++) {
	        var annotation = annotations[i];
	        var foundInjector = Object.keys(registeredInjectors).find(function (key) {
	          var annotationClass = registeredInjectors[key].annotationClass;
	          annotationClass = annotationClass.originalClass || annotationClass;
	          return annotation instanceof annotationClass;
	        });
	        if (foundInjector) {
	          return {
	            key: foundInjector,
	            metadata: annotation
	          };
	        }
	      }
	      return null;
	    }
	  }, {
	    key: '_getModuleAnnotation',
	    value: function _getModuleAnnotation(dependency) {
	      return new _AnnotationFinderJs.AnnotationFinder(dependency).annotationFor(_annotationsJs.Module);
	    }
	  }, {
	    key: '_mergeSortedDependencies',
	    value: function _mergeSortedDependencies(sorted1, sorted2) {
	      var newSorted = {};
	      Object.assign(newSorted, sorted1);
	      Object.keys(sorted2).forEach(function (key) {
	        if (newSorted[key]) {
	          newSorted[key] = newSorted[key].concat(sorted2[key]);
	        } else {
	          newSorted[key] = sorted2[key];
	        }
	      });
	      return newSorted;
	    }
	  }, {
	    key: '_sortDependency',
	    value: function _sortDependency(dependency) {
	      var _this = this;

	      var checkModule = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	      var sorted = {};

	      if (typeof dependency === "string" || dependency instanceof _annotationsJs.Module) {
	        sorted.module = [dependency];
	      } else if (dependency.annotations) {
	        if (checkModule && this._getModuleAnnotation(dependency)) {
	          sorted.module = [dependency];
	        } else {
	          var dependencyType = this._getDependencyType(dependency);
	          if (dependencyType) {
	            sorted[dependencyType.key] = [{
	              dependency: dependency,
	              metadata: dependencyType.metadata
	            }];
	          }
	        }
	      } else {
	        Object.keys(dependency).forEach(function (key) {
	          var subDependency = dependency[key];
	          var sortedSubDependencies = _this._sortDependency(subDependency);
	          sorted = _this._mergeSortedDependencies(sorted, sortedSubDependencies);
	        });
	      }
	      return sorted;
	    }
	  }, {
	    key: '_sortModuleDependencies',
	    value: function _sortModuleDependencies(moduleClass) {
	      var _this2 = this;

	      var sorted = {};
	      moduleClass.dependencies.forEach(function (dependency) {
	        var newSortedDependencies = _this2._sortDependency(dependency);
	        sorted = _this2._mergeSortedDependencies(sorted, newSortedDependencies);
	      });

	      return sorted;
	    }
	  }, {
	    key: '_moduleMetadata',
	    value: function _moduleMetadata(moduleClass) {
	      return moduleClass.annotations.find(function (value) {
	        return value instanceof _annotationsJs.Module || value instanceof _annotationsJs.AsModule;
	      });
	    }
	  }, {
	    key: '_instantiateModuleDependencies',
	    value: function _instantiateModuleDependencies(moduleDependencies) {
	      var _this3 = this;

	      var returnedDependencies = [];

	      if (moduleDependencies) {
	        moduleDependencies.forEach(function (moduleDependency) {
	          if (typeof moduleDependency === "string") {
	            returnedDependencies.push(moduleDependency);
	          } else {
	            returnedDependencies.push(_this3.instantiate(moduleDependency));
	          }
	        });
	      }

	      return returnedDependencies;
	    }
	  }, {
	    key: '_instantiateOtherDependencies',
	    value: function _instantiateOtherDependencies(sortedDependencies, instantiatedModule) {
	      Object.keys(sortedDependencies).forEach(function (dependencyType) {
	        registeredInjectors[dependencyType].instantiate(instantiatedModule, sortedDependencies[dependencyType]);
	      });
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Module;
	    }
	  }]);

	  return Injector;
	})();

	exports.Injector = Injector;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _ToAnnotationJs = __webpack_require__(4);

	var NgAnnotation = function NgAnnotation() {
	  _classCallCheck(this, NgAnnotation);

	  for (var _len = arguments.length, dependencies = Array(_len), _key = 0; _key < _len; _key++) {
	    dependencies[_key] = arguments[_key];
	  }

	  this.dependencies = dependencies;
	};

	var NgNamedAnnotation = function NgNamedAnnotation(token) {
	  var dependencies = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	  _classCallCheck(this, NgNamedAnnotation);

	  this.dependencies = dependencies;
	  this.token = token;
	};

	var Config = (function (_NgAnnotation) {
	  _inherits(Config, _NgAnnotation);

	  function Config() {
	    _classCallCheck(this, _Config);

	    _get(Object.getPrototypeOf(_Config.prototype), 'constructor', this).apply(this, arguments);
	  }

	  var _Config = Config;
	  Config = (0, _ToAnnotationJs.ToAnnotation)(Config) || Config;
	  return Config;
	})(NgAnnotation);

	exports.Config = Config;

	var Run = (function (_NgAnnotation2) {
	  _inherits(Run, _NgAnnotation2);

	  function Run() {
	    _classCallCheck(this, _Run);

	    _get(Object.getPrototypeOf(_Run.prototype), 'constructor', this).apply(this, arguments);
	  }

	  var _Run = Run;
	  Run = (0, _ToAnnotationJs.ToAnnotation)(Run) || Run;
	  return Run;
	})(NgAnnotation);

	exports.Run = Run;

	var Controller = (function (_NgNamedAnnotation) {
	  _inherits(Controller, _NgNamedAnnotation);

	  function Controller() {
	    _classCallCheck(this, _Controller);

	    _get(Object.getPrototypeOf(_Controller.prototype), 'constructor', this).apply(this, arguments);
	  }

	  var _Controller = Controller;
	  Controller = (0, _ToAnnotationJs.ToAnnotation)(Controller) || Controller;
	  return Controller;
	})(NgNamedAnnotation);

	exports.Controller = Controller;

	var Directive = (function (_NgNamedAnnotation2) {
	  _inherits(Directive, _NgNamedAnnotation2);

	  function Directive() {
	    _classCallCheck(this, _Directive);

	    _get(Object.getPrototypeOf(_Directive.prototype), 'constructor', this).apply(this, arguments);
	  }

	  var _Directive = Directive;
	  Directive = (0, _ToAnnotationJs.ToAnnotation)(Directive) || Directive;
	  return Directive;
	})(NgNamedAnnotation);

	exports.Directive = Directive;

	var Service = (function (_NgNamedAnnotation3) {
	  _inherits(Service, _NgNamedAnnotation3);

	  function Service() {
	    _classCallCheck(this, _Service);

	    _get(Object.getPrototypeOf(_Service.prototype), 'constructor', this).apply(this, arguments);
	  }

	  var _Service = Service;
	  Service = (0, _ToAnnotationJs.ToAnnotation)(Service) || Service;
	  return Service;
	})(NgNamedAnnotation);

	exports.Service = Service;

	var Factory = (function (_NgNamedAnnotation4) {
	  _inherits(Factory, _NgNamedAnnotation4);

	  function Factory() {
	    _classCallCheck(this, _Factory);

	    _get(Object.getPrototypeOf(_Factory.prototype), 'constructor', this).apply(this, arguments);
	  }

	  var _Factory = Factory;
	  Factory = (0, _ToAnnotationJs.ToAnnotation)(Factory) || Factory;
	  return Factory;
	})(NgNamedAnnotation);

	exports.Factory = Factory;

	var Provider = (function (_NgNamedAnnotation5) {
	  _inherits(Provider, _NgNamedAnnotation5);

	  function Provider() {
	    _classCallCheck(this, _Provider);

	    _get(Object.getPrototypeOf(_Provider.prototype), 'constructor', this).apply(this, arguments);
	  }

	  var _Provider = Provider;
	  Provider = (0, _ToAnnotationJs.ToAnnotation)(Provider) || Provider;
	  return Provider;
	})(NgNamedAnnotation);

	exports.Provider = Provider;

	var Value = (function (_NgNamedAnnotation6) {
	  _inherits(Value, _NgNamedAnnotation6);

	  function Value() {
	    _classCallCheck(this, _Value);

	    _get(Object.getPrototypeOf(_Value.prototype), 'constructor', this).apply(this, arguments);
	  }

	  var _Value = Value;
	  Value = (0, _ToAnnotationJs.ToAnnotation)(Value) || Value;
	  return Value;
	})(NgNamedAnnotation);

	exports.Value = Value;

	var Constant = (function (_NgNamedAnnotation7) {
	  _inherits(Constant, _NgNamedAnnotation7);

	  function Constant() {
	    _classCallCheck(this, _Constant);

	    _get(Object.getPrototypeOf(_Constant.prototype), 'constructor', this).apply(this, arguments);
	  }

	  var _Constant = Constant;
	  Constant = (0, _ToAnnotationJs.ToAnnotation)(Constant) || Constant;
	  return Constant;
	})(NgNamedAnnotation);

	exports.Constant = Constant;

	var Filter = (function (_NgNamedAnnotation8) {
	  _inherits(Filter, _NgNamedAnnotation8);

	  function Filter() {
	    _classCallCheck(this, _Filter);

	    _get(Object.getPrototypeOf(_Filter.prototype), 'constructor', this).apply(this, arguments);
	  }

	  var _Filter = Filter;
	  Filter = (0, _ToAnnotationJs.ToAnnotation)(Filter) || Filter;
	  return Filter;
	})(NgNamedAnnotation);

	exports.Filter = Filter;

	var Animation = (function (_NgNamedAnnotation9) {
	  _inherits(Animation, _NgNamedAnnotation9);

	  function Animation() {
	    _classCallCheck(this, _Animation);

	    _get(Object.getPrototypeOf(_Animation.prototype), 'constructor', this).apply(this, arguments);
	  }

	  var _Animation = Animation;
	  Animation = (0, _ToAnnotationJs.ToAnnotation)(Animation) || Animation;
	  return Animation;
	})(NgNamedAnnotation);

	exports.Animation = Animation;

	var Module = (function (_NgNamedAnnotation10) {
	  _inherits(Module, _NgNamedAnnotation10);

	  function Module() {
	    _classCallCheck(this, Module);

	    _get(Object.getPrototypeOf(Module.prototype), 'constructor', this).apply(this, arguments);
	  }

	  return Module;
	})(NgNamedAnnotation);

	exports.Module = Module;

	var AsModule = (function (_Module) {
	  _inherits(AsModule, _Module);

	  function AsModule() {
	    _classCallCheck(this, _AsModule);

	    _get(Object.getPrototypeOf(_AsModule.prototype), 'constructor', this).apply(this, arguments);
	  }

	  var _AsModule = AsModule;
	  AsModule = (0, _ToAnnotationJs.ToAnnotation)(AsModule) || AsModule;
	  return AsModule;
	})(Module);

	exports.AsModule = AsModule;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.ToAnnotation = ToAnnotation;
	function defineAnnotation(target, AnnotationClass, callParams) {
	  var oldAnnotation = Object.getOwnPropertyDescriptor(target, 'annotations');
	  if (oldAnnotation) {
	    var oldGetter = oldAnnotation.get;
	    Object.defineProperty(target, 'annotations', {
	      configurable: true,
	      get: function get() {
	        var oldValue = oldGetter();
	        oldValue.unshift(new (Function.prototype.bind.apply(AnnotationClass, callParams))());
	        return oldValue;
	      } });
	  } else {
	    Object.defineProperty(target, 'annotations', {
	      configurable: true,
	      get: function get() {
	        return [new (Function.prototype.bind.apply(AnnotationClass, callParams))()];
	      } });
	  }
	}

	function handleProperty(descriptor, AnnotationClass, callParams) {
	  var value;
	  if (descriptor.initializer) {
	    value = descriptor.initializer();
	  } else {
	    value = descriptor.value;
	  }
	  defineAnnotation(value, AnnotationClass, callParams);
	  if (descriptor.initializer) {
	    descriptor.initializer = function () {
	      return value;
	    };
	  }
	  descriptor.enumerable = true;
	  return descriptor;
	}

	function ToAnnotation(AnnotationClass) {
	  var decorator = function decorator() {
	    for (var _len = arguments.length, callParams = Array(_len), _key = 0; _key < _len; _key++) {
	      callParams[_key] = arguments[_key];
	    }

	    callParams.unshift(null);
	    return function (targetClass) {
	      for (var _len2 = arguments.length, otherParams = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        otherParams[_key2 - 1] = arguments[_key2];
	      }

	      if (otherParams.length >= 2) {
	        return handleProperty(otherParams[1], AnnotationClass, callParams);
	      } else {
	        defineAnnotation(targetClass, AnnotationClass, callParams);
	        return targetClass;
	      }
	    };
	  };
	  decorator.originalClass = AnnotationClass;
	  return decorator;
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AnnotationFinder = (function () {
	  function AnnotationFinder(AnnotatedClass) {
	    _classCallCheck(this, AnnotationFinder);

	    this.AnnotatedClass = AnnotatedClass;
	  }

	  _createClass(AnnotationFinder, [{
	    key: "annotationFor",
	    value: function annotationFor(AnnotationClass) {
	      var OriginalClass = AnnotationClass.originalClass || AnnotationClass;
	      if (this.AnnotatedClass.annotations) {
	        return this.AnnotatedClass.annotations.find(function (annotation) {
	          return annotation instanceof OriginalClass;
	        });
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: "annotationsFor",
	    value: function annotationsFor(AnnotationClass) {
	      var OriginalClass = AnnotationClass.originalClass || AnnotationClass;
	      if (this.AnnotatedClass.annotations) {
	        return this.AnnotatedClass.annotations.filter(function (annotation) {
	          return annotation instanceof OriginalClass;
	        });
	      } else {
	        return null;
	      }
	    }
	  }]);

	  return AnnotationFinder;
	})();

	exports.AnnotationFinder = AnnotationFinder;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _annotationsJs = __webpack_require__(3);

	var _RouterJs = __webpack_require__(7);

	var ListInjector = (function () {
	  function ListInjector() {
	    _classCallCheck(this, ListInjector);
	  }

	  _createClass(ListInjector, [{
	    key: 'instantiate',
	    value: function instantiate(module, dependencyList) {
	      var _this = this;

	      dependencyList.forEach(function (dependencyObject) {
	        _this.instantiateOne(module, dependencyObject.dependency, dependencyObject.metadata);
	      });
	    }
	  }]);

	  return ListInjector;
	})();

	exports.ListInjector = ListInjector;

	var ConfigInjector = (function (_ListInjector) {
	  _inherits(ConfigInjector, _ListInjector);

	  function ConfigInjector() {
	    _classCallCheck(this, ConfigInjector);

	    _get(Object.getPrototypeOf(ConfigInjector.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ConfigInjector, [{
	    key: 'instantiateOne',
	    value: function instantiateOne(module, config, metadata) {
	      config['$inject'] = metadata.dependencies;
	      module.config(config);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Config;
	    }
	  }]);

	  return ConfigInjector;
	})(ListInjector);

	exports.ConfigInjector = ConfigInjector;

	var RunInjector = (function (_ListInjector2) {
	  _inherits(RunInjector, _ListInjector2);

	  function RunInjector() {
	    _classCallCheck(this, RunInjector);

	    _get(Object.getPrototypeOf(RunInjector.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(RunInjector, [{
	    key: 'instantiateOne',
	    value: function instantiateOne(module, run, metadata) {
	      run['$inject'] = metadata.dependencies;
	      module.run(run);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Run;
	    }
	  }]);

	  return RunInjector;
	})(ListInjector);

	exports.RunInjector = RunInjector;

	var ControllerInjector = (function (_ListInjector3) {
	  _inherits(ControllerInjector, _ListInjector3);

	  function ControllerInjector() {
	    _classCallCheck(this, ControllerInjector);

	    _get(Object.getPrototypeOf(ControllerInjector.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ControllerInjector, [{
	    key: 'instantiateOne',
	    value: function instantiateOne(module, controller, metadata) {
	      controller['$inject'] = metadata.dependencies;
	      _RouterJs.Router.routeReader.read(controller);
	      module.controller(metadata.token, controller);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Controller;
	    }
	  }]);

	  return ControllerInjector;
	})(ListInjector);

	exports.ControllerInjector = ControllerInjector;

	var DirectiveInjector = (function (_ListInjector4) {
	  _inherits(DirectiveInjector, _ListInjector4);

	  function DirectiveInjector() {
	    _classCallCheck(this, DirectiveInjector);

	    _get(Object.getPrototypeOf(DirectiveInjector.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(DirectiveInjector, [{
	    key: 'instantiateOne',
	    value: function instantiateOne(module, directive, metadata) {
	      directive['$inject'] = metadata.dependencies;
	      module.directive(metadata.token, directive);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Directive;
	    }
	  }]);

	  return DirectiveInjector;
	})(ListInjector);

	exports.DirectiveInjector = DirectiveInjector;

	var ServiceInjector = (function (_ListInjector5) {
	  _inherits(ServiceInjector, _ListInjector5);

	  function ServiceInjector() {
	    _classCallCheck(this, ServiceInjector);

	    _get(Object.getPrototypeOf(ServiceInjector.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ServiceInjector, [{
	    key: 'instantiateOne',
	    value: function instantiateOne(module, service, metadata) {
	      service['$inject'] = metadata.dependencies;
	      module.service(metadata.token, service);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Service;
	    }
	  }]);

	  return ServiceInjector;
	})(ListInjector);

	exports.ServiceInjector = ServiceInjector;

	var FactoryInjector = (function (_ListInjector6) {
	  _inherits(FactoryInjector, _ListInjector6);

	  function FactoryInjector() {
	    _classCallCheck(this, FactoryInjector);

	    _get(Object.getPrototypeOf(FactoryInjector.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(FactoryInjector, [{
	    key: 'instantiateOne',
	    value: function instantiateOne(module, factory, metadata) {
	      factory['$inject'] = metadata.dependencies;
	      module.factory(metadata.token, factory);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Factory;
	    }
	  }]);

	  return FactoryInjector;
	})(ListInjector);

	exports.FactoryInjector = FactoryInjector;

	var ProviderInjector = (function (_ListInjector7) {
	  _inherits(ProviderInjector, _ListInjector7);

	  function ProviderInjector() {
	    _classCallCheck(this, ProviderInjector);

	    _get(Object.getPrototypeOf(ProviderInjector.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ProviderInjector, [{
	    key: 'instantiateOne',
	    value: function instantiateOne(module, provider, metadata) {
	      provider['$inject'] = metadata.dependencies;
	      module.provider(metadata.token, provider);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Provider;
	    }
	  }]);

	  return ProviderInjector;
	})(ListInjector);

	exports.ProviderInjector = ProviderInjector;

	var ValueInjector = (function (_ListInjector8) {
	  _inherits(ValueInjector, _ListInjector8);

	  function ValueInjector() {
	    _classCallCheck(this, ValueInjector);

	    _get(Object.getPrototypeOf(ValueInjector.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ValueInjector, [{
	    key: 'instantiateOne',
	    value: function instantiateOne(module, value, metadata) {
	      value['$inject'] = metadata.dependencies;
	      module.value(metadata.token, value);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Value;
	    }
	  }]);

	  return ValueInjector;
	})(ListInjector);

	exports.ValueInjector = ValueInjector;

	var ConstantInjector = (function (_ListInjector9) {
	  _inherits(ConstantInjector, _ListInjector9);

	  function ConstantInjector() {
	    _classCallCheck(this, ConstantInjector);

	    _get(Object.getPrototypeOf(ConstantInjector.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ConstantInjector, [{
	    key: 'instantiateOne',
	    value: function instantiateOne(module, constant, metadata) {
	      constant['$inject'] = metadata.dependencies;
	      module.constant(metadata.token, constant);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Constant;
	    }
	  }]);

	  return ConstantInjector;
	})(ListInjector);

	exports.ConstantInjector = ConstantInjector;

	var AnimationInjector = (function (_ListInjector10) {
	  _inherits(AnimationInjector, _ListInjector10);

	  function AnimationInjector() {
	    _classCallCheck(this, AnimationInjector);

	    _get(Object.getPrototypeOf(AnimationInjector.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(AnimationInjector, [{
	    key: 'instantiateOne',
	    value: function instantiateOne(module, animation, metadata) {
	      animation['$inject'] = metadata.dependencies;
	      module.animation(metadata.token, animation);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Animation;
	    }
	  }]);

	  return AnimationInjector;
	})(ListInjector);

	exports.AnimationInjector = AnimationInjector;

	var FilterInjector = (function (_ListInjector11) {
	  _inherits(FilterInjector, _ListInjector11);

	  function FilterInjector() {
	    _classCallCheck(this, FilterInjector);

	    _get(Object.getPrototypeOf(FilterInjector.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(FilterInjector, [{
	    key: 'instantiateOne',
	    value: function instantiateOne(module, filter, metadata) {
	      filter['$inject'] = metadata.dependencies;
	      module.filter(metadata.token, filter);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Filter;
	    }
	  }]);

	  return FilterInjector;
	})(ListInjector);

	exports.FilterInjector = FilterInjector;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _routerComponentMapperJs = __webpack_require__(8);

	var _routerRouteReaderJs = __webpack_require__(12);

	var _routerRouteInitializerJs = __webpack_require__(14);

	var _routerRouteConfigJs = __webpack_require__(13);

	Object.defineProperty(exports, "RouteConfig", {
	  enumerable: true,
	  get: function get() {
	    return _routerRouteConfigJs.RouteConfig;
	  }
	});

	var componentMapper = new _routerComponentMapperJs.ComponentMapper();
	var routeReader = new _routerRouteReaderJs.RouteReader(componentMapper);
	var routeInitializer = new _routerRouteInitializerJs.RouteInitializer(componentMapper);

	var Router = {
	  componentMapper: componentMapper,
	  routeReader: routeReader,
	  routeInitializer: routeInitializer
	};
	exports.Router = Router;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _annotationsJs = __webpack_require__(3);

	var _ng2DirectivesComponentJs = __webpack_require__(9);

	var _AnnotationFinderJs = __webpack_require__(5);

	var _ng2DirectivesSelectorMatcherJs = __webpack_require__(11);

	var _ng2DirectivesSelectorMatcherJs2 = _interopRequireDefault(_ng2DirectivesSelectorMatcherJs);

	var DEFAULT_CONTROLLER_SUFFIX = "Controller";
	var DEFAULT_COMPONENT_PREFIX = "a1atscript";
	var DEFAULT_CONTROLLER_PREFIX = "A1AtScript";

	var ComponentMapping = (function () {
	  function ComponentMapping(component, componentMapper) {
	    _classCallCheck(this, ComponentMapping);

	    this.component = component;
	    this.componentMapper = componentMapper;
	  }

	  _createClass(ComponentMapping, [{
	    key: "componentName",
	    get: function get() {
	      return this.componentMapper.map.get(this.component);
	    }
	  }, {
	    key: "templateUrl",
	    get: function get() {
	      return this.componentMapper.registry[this.componentName].templateUrl;
	    }
	  }, {
	    key: "isController",
	    get: function get() {
	      return this.componentMapper.registry[this.componentName].isController;
	    }
	  }, {
	    key: "controllerName",
	    get: function get() {
	      return this.componentMapper.registry[this.componentName].controllerName;
	    }
	  }]);

	  return ComponentMapping;
	})();

	var ComponentMapper = (function () {
	  function ComponentMapper() {
	    _classCallCheck(this, ComponentMapper);
	  }

	  _createClass(ComponentMapper, [{
	    key: "register",
	    value: function register(component) {
	      if (!this.map.get(component)) {
	        this._setupComponent(component);
	      }
	      return new ComponentMapping(component, this);
	    }
	  }, {
	    key: "_getControllerComponentName",
	    value: function _getControllerComponentName(component) {
	      var name = this._getControllerName(component);
	      if (name) {
	        if (name.endsWith(DEFAULT_CONTROLLER_SUFFIX)) {
	          return name[0].toLowerCase() + name.substr(1, name.length - DEFAULT_CONTROLLER_SUFFIX.length - 1);
	        } else {
	          return name[0].toLowerCase() + name.substr(1, name.length - 1);
	        }
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: "_getControllerName",
	    value: function _getControllerName(component) {
	      var controllerAnnotation = new _AnnotationFinderJs.AnnotationFinder(component).annotationFor(_annotationsJs.Controller);
	      if (controllerAnnotation) {
	        return controllerAnnotation.token;
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: "_isController",
	    value: function _isController(component) {
	      var controllerAnnotation = new _AnnotationFinderJs.AnnotationFinder(component).annotationFor(_annotationsJs.Controller);
	      if (controllerAnnotation) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	  }, {
	    key: "_getComponentName",
	    value: function _getComponentName(component) {
	      var componentAnnotation = new _AnnotationFinderJs.AnnotationFinder(component).annotationFor(_ng2DirectivesComponentJs.Component);
	      if (componentAnnotation) {
	        if (componentAnnotation.controllerAs) {
	          return componentAnnotation.controllerAs;
	        } else if (componentAnnotation.selector) {
	          var selectorMatcher = new _ng2DirectivesSelectorMatcherJs2["default"](componentAnnotation.selector);
	          return selectorMatcher.name;
	        } else {
	          return null;
	        }
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: "_getGeneratedName",
	    value: function _getGeneratedName() {
	      this._componentIndex = this._componentIndex || 0;
	      var name = DEFAULT_COMPONENT_PREFIX + "Component_" + this._componentIndex;
	      this._componentIndex = this._componentIndex + 1;
	      return name;
	    }
	  }, {
	    key: "_generateName",
	    value: function _generateName(component) {
	      var name = this._getControllerComponentName(component);
	      name = name || this._getComponentName(component);
	      name = name || this._getGeneratedName();
	      return name;
	    }
	  }, {
	    key: "_generateTemplate",
	    value: function _generateTemplate(name, component) {
	      var viewAnnotation = new _AnnotationFinderJs.AnnotationFinder(component).annotationFor(_ng2DirectivesComponentJs.ViewBase);
	      if (viewAnnotation && viewAnnotation.templateUrl) {
	        return viewAnnotation.templateUrl;
	      } else {
	        return "./components/" + name + "/" + name + ".html";
	      }
	    }
	  }, {
	    key: "_readInlineTemplate",
	    value: function _readInlineTemplate(templateUrl, component) {
	      var viewAnnotation = new _AnnotationFinderJs.AnnotationFinder(component).annotationFor(_ng2DirectivesComponentJs.ViewBase);
	      if (viewAnnotation && viewAnnotation.template) {
	        this.inlineTemplateCache[templateUrl] = viewAnnotation.template;
	      }
	    }
	  }, {
	    key: "_generateControllerName",
	    value: function _generateControllerName(name) {
	      var componentBase;
	      if (name.startsWith(DEFAULT_COMPONENT_PREFIX)) {
	        componentBase = name.substring(DEFAULT_COMPONENT_PREFIX.length, name.length);
	      } else {
	        componentBase = name;
	      }
	      return DEFAULT_CONTROLLER_PREFIX + componentBase[0].toUpperCase() + componentBase.substring(1, componentBase.length) + DEFAULT_CONTROLLER_SUFFIX;
	    }
	  }, {
	    key: "_setupComponent",
	    value: function _setupComponent(component) {
	      var name = this._generateName(component);
	      var templateUrl = this._generateTemplate(name, component);
	      var controllerName = this._getControllerName(component);
	      var isController;
	      if (controllerName) {
	        isController = true;
	      } else {
	        isController = false;
	        controllerName = this._generateControllerName(name);
	      }
	      this.map.set(component, name);
	      this.registry[name] = { component: component, templateUrl: templateUrl, isController: isController, controllerName: controllerName };
	      this.controllerRegistry[controllerName] = name;
	      this._readInlineTemplate(templateUrl, component);
	    }
	  }, {
	    key: "getComponent",
	    value: function getComponent(componentName) {
	      return this.registry[componentName].component;
	    }
	  }, {
	    key: "getTemplateUrl",
	    value: function getTemplateUrl(componentName) {
	      return this.registry[componentName].templateUrl;
	    }
	  }, {
	    key: "getComponentName",
	    value: function getComponentName(component) {
	      return this.map.get(component);
	    }
	  }, {
	    key: "registry",
	    get: function get() {
	      this._componentRegistry = this._componentRegistry || {};
	      return this._componentRegistry;
	    }
	  }, {
	    key: "map",
	    get: function get() {
	      this._componentMap = this._componentMap || new Map();
	      return this._componentMap;
	    }
	  }, {
	    key: "controllerRegistry",
	    get: function get() {
	      this._controllerRegistry = this._controllerRegistry || {};
	      return this._controllerRegistry;
	    }
	  }, {
	    key: "inlineTemplateCache",
	    get: function get() {
	      this._inlineTemplateCache = this._inlineTemplateCache || {};
	      return this._inlineTemplateCache;
	    }
	  }]);

	  return ComponentMapper;
	})();

	exports.ComponentMapper = ComponentMapper;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _Ng2DirectiveJs = __webpack_require__(10);

	var _Ng2DirectiveJs2 = _interopRequireDefault(_Ng2DirectiveJs);

	var _ToAnnotationJs = __webpack_require__(4);

	var Component = (function (_Ng2Directive) {
	  _inherits(Component, _Ng2Directive);

	  function Component(descriptor) {
	    _classCallCheck(this, _Component);

	    _get(Object.getPrototypeOf(_Component.prototype), 'constructor', this).call(this, descriptor);
	    this.appInjector = descriptor.appInjector || descriptor.injectables || descriptor.services;
	  }

	  var _Component = Component;
	  Component = (0, _ToAnnotationJs.ToAnnotation)(Component) || Component;
	  return Component;
	})(_Ng2DirectiveJs2['default']);

	exports.Component = Component;

	var ViewBase = function ViewBase(descriptor) {
	  _classCallCheck(this, ViewBase);

	  this.templateUrl = descriptor.templateUrl || descriptor.url;
	  this.template = descriptor.template || descriptor.inline;
	};

	exports.ViewBase = ViewBase;

	var Template = (function (_ViewBase) {
	  _inherits(Template, _ViewBase);

	  function Template() {
	    _classCallCheck(this, _Template);

	    _get(Object.getPrototypeOf(_Template.prototype), 'constructor', this).apply(this, arguments);
	  }

	  var _Template = Template;
	  Template = (0, _ToAnnotationJs.ToAnnotation)(Template) || Template;
	  return Template;
	})(ViewBase);

	exports.Template = Template;

	var View = (function (_ViewBase2) {
	  _inherits(View, _ViewBase2);

	  function View() {
	    _classCallCheck(this, _View);

	    _get(Object.getPrototypeOf(_View.prototype), 'constructor', this).apply(this, arguments);
	  }

	  var _View = View;
	  View = (0, _ToAnnotationJs.ToAnnotation)(View) || View;
	  return View;
	})(ViewBase);

	exports.View = View;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Ng2Directive = function Ng2Directive(descriptor) {
	  _classCallCheck(this, Ng2Directive);

	  this.selector = descriptor.selector;
	  this.properties = descriptor.properties || descriptor.bind;
	  this.controllerAs = descriptor.controllerAs;
	  this.require = descriptor.require;
	  this.transclude = descriptor.transclude;
	  this.events = descriptor.events;
	};

	exports["default"] = Ng2Directive;
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
	var MOZ_HACK_REGEXP = /^moz([A-Z])/;

	var SelectorMatcher = (function () {
	  function SelectorMatcher(selector) {
	    _classCallCheck(this, SelectorMatcher);

	    this._selector = selector;
	  }

	  _createClass(SelectorMatcher, [{
	    key: "_camelizeName",
	    value: function _camelizeName() {
	      this._name = this._name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
	        return offset ? letter.toUpperCase() : letter;
	      }).replace(MOZ_HACK_REGEXP, 'Moz$1');
	    }
	  }, {
	    key: "_split",
	    value: function _split() {
	      if (this._selector[0] == ".") {
	        this._restrict = "C";
	        this._name = this._selector.substring(1);
	      } else if (this._selector[0] == "[" && this._selector[this._selector.length - 1] == "]") {
	        this._restrict = "A";
	        this._name = this._selector.substring(1, this._selector.length - 1);
	      } else {
	        this._restrict = "E";
	        this._name = this._selector;
	      }
	    }
	  }, {
	    key: "name",
	    get: function get() {
	      if (!this._name) {
	        this._split();
	      }
	      this._camelizeName();
	      return this._name;
	    }
	  }, {
	    key: "restrict",
	    get: function get() {
	      if (!this._restrict) {
	        this._split();
	      }
	      return this._restrict;
	    }
	  }]);

	  return SelectorMatcher;
	})();

	exports["default"] = SelectorMatcher;
	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _RouteConfigJs = __webpack_require__(13);

	var _AnnotationFinderJs = __webpack_require__(5);

	var RouteReader = (function () {
	  function RouteReader(componentMapper) {
	    _classCallCheck(this, RouteReader);

	    this.componentMapper = componentMapper;
	  }

	  _createClass(RouteReader, [{
	    key: "_routeConfigAnnotations",
	    value: function _routeConfigAnnotations(component) {
	      return new _AnnotationFinderJs.AnnotationFinder(component).annotationsFor(_RouteConfigJs.RouteConfig);
	    }
	  }, {
	    key: "_routeConfig",
	    value: function _routeConfig(component) {
	      return this._routeConfigAnnotations(component).map(this._convertConfig.bind(this));
	    }
	  }, {
	    key: "_componentName",
	    value: function _componentName(component) {
	      if (typeof component === "string") {
	        return component;
	      } else {
	        return this.componentMapper.register(component).componentName;
	      }
	    }
	  }, {
	    key: "_convertConfig",
	    value: function _convertConfig(routeConfigAnnotation) {
	      var _this = this;

	      var routeDescription = Object.assign({}, routeConfigAnnotation.routeDescription);
	      if (routeDescription.component) {
	        routeDescription.component = this._componentName(routeDescription.component);
	      }

	      if (routeDescription.components) {
	        var components = {};
	        Object.keys(routeDescription.components).forEach(function (key) {
	          components[key] = _this._componentName(routeDescription.components[key]);
	        });
	        routeDescription.components = components;
	      }

	      return routeDescription;
	    }
	  }, {
	    key: "read",
	    value: function read(component) {
	      var mapping = this.componentMapper.register(component);
	      component.$routeConfig = this._routeConfig(component);
	    }
	  }]);

	  return RouteReader;
	})();

	exports.RouteReader = RouteReader;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _ToAnnotationJs = __webpack_require__(4);

	var RouteConfig = (function () {
	  function RouteConfig(routeDescription) {
	    _classCallCheck(this, _RouteConfig);

	    this.routeDescription = routeDescription;
	  }

	  var _RouteConfig = RouteConfig;
	  RouteConfig = (0, _ToAnnotationJs.ToAnnotation)(RouteConfig) || RouteConfig;
	  return RouteConfig;
	})();

	exports.RouteConfig = RouteConfig;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var RouteInitializer = (function () {
	  function RouteInitializer(componentMapper) {
	    _classCallCheck(this, RouteInitializer);

	    this.componentMapper = componentMapper;
	  }

	  _createClass(RouteInitializer, [{
	    key: 'configurationFunction',
	    value: function configurationFunction(componentMapperName) {
	      var componentMapper = this.componentMapper;
	      return function ($injector) {
	        var $componentMapper;
	        try {
	          $componentMapper = $injector.get(componentMapperName);
	        } catch (e) {
	          return;
	        }
	        $componentMapper.setCtrlNameMapping(function (name) {
	          return componentMapper.registry[name].controllerName;
	        });
	        $componentMapper.setTemplateMapping(function (name) {
	          return componentMapper.registry[name].templateUrl;
	        });
	        $componentMapper.setComponentFromCtrlMapping(function (controllerName) {
	          return componentMapper.controllerRegistry[controllerName];
	        });
	      };
	    }
	  }, {
	    key: 'topRouteConfig',
	    value: function topRouteConfig(routerName, routeConfig) {
	      return function ($injector) {
	        var $router;
	        try {
	          $router = $injector.get(routerName);
	        } catch (e) {
	          return;
	        }
	        $router.config(routeConfig);
	      };
	    }
	  }, {
	    key: 'setupComponentControllers',
	    value: function setupComponentControllers() {
	      var _this = this;

	      Object.keys(this.componentMapper.registry).forEach(function (component) {
	        var config = _this.componentMapper.registry[component];
	        if (!config.isController && config.component != _this.topComponent) {
	          _this.module.controller(config.controllerName, config.component);
	        }
	      });
	    }
	  }, {
	    key: 'setupInlineTemplates',
	    value: function setupInlineTemplates() {
	      var inlineTemplateCache = this.componentMapper.inlineTemplateCache;
	      return function ($templateCache) {
	        Object.keys(inlineTemplateCache).forEach(function (templateUrl) {
	          $templateCache.put(templateUrl, inlineTemplateCache[templateUrl]);
	        });
	      };
	    }
	  }, {
	    key: 'initialize',
	    value: function initialize(ngModuleName) {
	      var topComponent = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	      this.module = angular.module(ngModuleName);

	      // ng-new-router changed the name of its componentMapper service recently
	      // essentially the approach here is to try to configure the mapper with both names
	      // catch exceptions if they don't exist.
	      // if both throw an exception, than there is no component router present
	      this.module.config(['$injector', this.configurationFunction('$componentLoaderProvider')]);
	      this.module.run(['$injector', this.configurationFunction('$componentMapper')]);

	      if (topComponent && topComponent.$routeConfig) {
	        this.topComponent = topComponent;
	        this.module.run(['$injector', this.topRouteConfig('$router', topComponent.$routeConfig)]);
	      }

	      this.setupComponentControllers();

	      this.module.run(['$templateCache', this.setupInlineTemplates()]);
	    }
	  }]);

	  return RouteInitializer;
	})();

	exports.RouteInitializer = RouteInitializer;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _SelectorMatcherJs = __webpack_require__(11);

	var _SelectorMatcherJs2 = _interopRequireDefault(_SelectorMatcherJs);

	var Ng2DirectiveDefinitionObject = (function () {
	  function Ng2DirectiveDefinitionObject(controller, annotation) {
	    var template = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	    var bind = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	    _classCallCheck(this, Ng2DirectiveDefinitionObject);

	    this._annotation = annotation;
	    this._controller = controller;
	    this._template = template;
	    this._bind = bind;
	  }

	  _createClass(Ng2DirectiveDefinitionObject, [{
	    key: "selectorMatcher",
	    get: function get() {
	      this._selectorMatcher = this._selectorMatcher || new _SelectorMatcherJs2["default"](this._annotation.selector);
	      return this._selectorMatcher;
	    }
	  }, {
	    key: "restrict",
	    get: function get() {
	      return this.selectorMatcher.restrict;
	    }
	  }, {
	    key: "controllerAs",
	    get: function get() {
	      return this._annotation.controllerAs || this.name;
	    }
	  }, {
	    key: "bindToController",
	    get: function get() {
	      // bindToController as object syntax only supported on 1.4
	      if (angular.version.major == 1 && angular.version.minor >= 4) {
	        return this._bind || this._annotation.properties;
	      } else {
	        return true;
	      }
	    }
	  }, {
	    key: "scope",
	    get: function get() {
	      // bindToController as object syntax only supported on 1.4
	      if (angular.version.major == 1 && angular.version.minor >= 4) {
	        return {};
	      } else {
	        return this._bind || this._annotation.properties;
	      }
	    }
	  }, {
	    key: "template",
	    get: function get() {
	      return this._template.template;
	    }
	  }, {
	    key: "templateUrl",
	    get: function get() {
	      return this._template.templateUrl;
	    }
	  }, {
	    key: "transclude",
	    get: function get() {
	      return this._annotation.transclude;
	    }
	  }, {
	    key: "require",
	    get: function get() {
	      return this._annotation.require;
	    }
	  }, {
	    key: "controller",
	    get: function get() {
	      return this._controller;
	    }
	  }, {
	    key: "name",
	    get: function get() {
	      return this.selectorMatcher.name;
	    }
	  }, {
	    key: "factoryFn",
	    get: function get() {
	      var _this = this;

	      return function () {
	        return {
	          scope: _this.scope,
	          restrict: _this.restrict,
	          template: _this.template,
	          require: _this.require,
	          transclude: _this.transclude,
	          templateUrl: _this.templateUrl,
	          controller: _this.controller,
	          bindToController: _this.bindToController,
	          controllerAs: _this.controllerAs
	        };
	      };
	    }
	  }]);

	  return Ng2DirectiveDefinitionObject;
	})();

	exports["default"] = Ng2DirectiveDefinitionObject;
	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _BindBuilderJs = __webpack_require__(17);

	var _BindBuilderJs2 = _interopRequireDefault(_BindBuilderJs);

	var BIND_PREFIX = "_=_";
	var STRING_PREFIX = "_@_";
	var BINDING = BIND_PREFIX;
	var RAW_STRING = STRING_PREFIX;

	var PropertiesBuilder = (function (_BindBuilder) {
	  _inherits(PropertiesBuilder, _BindBuilder);

	  function PropertiesBuilder() {
	    _classCallCheck(this, PropertiesBuilder);

	    _get(Object.getPrototypeOf(PropertiesBuilder.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(PropertiesBuilder, [{
	    key: "setupProperty",
	    value: function setupProperty(key, properties) {
	      properties[STRING_PREFIX + key] = "@" + this.bindObj[key];
	      properties[BIND_PREFIX + key] = "=?bind" + this.bindObj[key][0].toUpperCase() + this.bindObj[key].slice(1);

	      // This property is used when user uses the `bind-property` attribute on a directive to bind an expression
	      Object.defineProperty(this._component.prototype, BIND_PREFIX + key, {
	        enumerable: true,
	        configurable: true,
	        set: genericSetter(BINDING, RAW_STRING),
	        get: function get() {
	          return this[key];
	        }
	      });

	      // This property is used when user uses the `property` attribute on a directive to bind a string
	      Object.defineProperty(this._component.prototype, STRING_PREFIX + key, {
	        enumerable: true,
	        configurable: true,
	        set: genericSetter(RAW_STRING, BINDING),
	        get: function get() {
	          return this[key];
	        }
	      });

	      function genericSetter(use, errorOn) {
	        return function (value) {
	          this.__using_binding__ = this.__using_binding__ || {};

	          if (this.__using_binding__[key] === errorOn) {
	            if (value !== undefined) {
	              throw new Error("Cannot use bind-" + key + " and " + key + " simultaneously");
	            }

	            return;
	          }

	          if (value !== undefined) {
	            this.__using_binding__[key] = use;
	          }

	          this[key] = value;
	        };
	      }
	    }
	  }]);

	  return PropertiesBuilder;
	})(_BindBuilderJs2["default"]);

	exports["default"] = PropertiesBuilder;
	module.exports = exports["default"];

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BindBuilder = (function () {
	  function BindBuilder(bindParam, component) {
	    _classCallCheck(this, BindBuilder);

	    this._bindParam = bindParam;
	    this._component = component;
	  }

	  _createClass(BindBuilder, [{
	    key: "build",
	    value: function build() {
	      var _this = this;

	      var properties = {};
	      Object.keys(this.bindObj).forEach(function (key) {
	        _this.setupProperty(key, properties);
	      });
	      return properties;
	    }
	  }, {
	    key: "bindObj",
	    get: function get() {
	      var _this2 = this;

	      if (!this._bindObj) {
	        if (Array.isArray(this._bindParam)) {
	          this._bindObj = {};
	          var splitBind;
	          this._bindParam.forEach(function (bind) {
	            splitBind = bind.split(/\s*:\s*/);
	            if (splitBind.length == 1) {
	              _this2._bindObj[bind] = bind;
	            } else {
	              _this2._bindObj[splitBind[0]] = splitBind[1];
	            }
	          });
	        } else {
	          this._bindObj = this._bindParam;
	        }
	      }
	      return this._bindObj;
	    }
	  }]);

	  return BindBuilder;
	})();

	exports["default"] = BindBuilder;
	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _BindBuilderJs = __webpack_require__(17);

	var _BindBuilderJs2 = _interopRequireDefault(_BindBuilderJs);

	var prefix = "___bindable___";

	var EventsBuilder = (function (_BindBuilder) {
	  _inherits(EventsBuilder, _BindBuilder);

	  function EventsBuilder() {
	    _classCallCheck(this, EventsBuilder);

	    _get(Object.getPrototypeOf(EventsBuilder.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(EventsBuilder, [{
	    key: "setupProperty",
	    value: function setupProperty(key, events) {
	      events[key] = "=?on" + this.bindObj[key][0].toUpperCase() + this.bindObj[key].slice(1);
	    }
	  }]);

	  return EventsBuilder;
	})(_BindBuilderJs2["default"]);

	exports["default"] = EventsBuilder;
	module.exports = exports["default"];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var _bind = Function.prototype.bind;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _injectorTypesJs = __webpack_require__(6);

	var _InjectorJs = __webpack_require__(2);

	var _ToAnnotationJs = __webpack_require__(4);

	var DirectiveObject = (function () {
	  function DirectiveObject(token) {
	    var dependencies = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	    _classCallCheck(this, _DirectiveObject);

	    this.dependencies = dependencies;
	    this.token = token;
	  }

	  var _DirectiveObject = DirectiveObject;
	  DirectiveObject = (0, _ToAnnotationJs.ToAnnotation)(DirectiveObject) || DirectiveObject;
	  return DirectiveObject;
	})();

	exports.DirectiveObject = DirectiveObject;

	var DirectiveObjectInjector = (function (_ListInjector) {
	  _inherits(DirectiveObjectInjector, _ListInjector);

	  function DirectiveObjectInjector() {
	    _classCallCheck(this, DirectiveObjectInjector);

	    _get(Object.getPrototypeOf(DirectiveObjectInjector.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(DirectiveObjectInjector, [{
	    key: '_createFactoryArray',
	    value: function _createFactoryArray(ConstructorFn) {
	      // get the array of dependencies that are needed by this component (as contained in the `$inject` array)
	      var args = ConstructorFn.$inject || [];
	      var factoryArray = args.slice(); // create a copy of the array
	      // The factoryArray uses Angular's array notation whereby each element of the array is the name of a
	      // dependency, and the final item is the factory function itself.
	      factoryArray.push(function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        var directive = new (_bind.apply(ConstructorFn, [null].concat(args)))();
	        for (var key in directive) {
	          directive[key] = directive[key];
	        }
	        return directive;
	      });

	      return factoryArray;
	    }
	  }, {
	    key: '_cloneFunction',
	    value: function _cloneFunction(original) {
	      return function () {
	        return original.apply(this, arguments);
	      };
	    }
	  }, {
	    key: '_override',
	    value: function _override(object, methodName, callback) {
	      object[methodName] = callback(object[methodName]);
	    }
	  }, {
	    key: 'instantiateOne',
	    value: function instantiateOne(module, directiveObject, metadata) {
	      directiveObject['$inject'] = metadata.dependencies;

	      if (!directiveObject.prototype.compile) {
	        // create an empty compile function if none was defined.
	        directiveObject.prototype.compile = function () {};
	      }

	      var originalCompileFn = this._cloneFunction(directiveObject.prototype.compile);

	      // Decorate the compile method to automatically return the link method (if it exists)
	      // and bind it to the context of the constructor (so `this` works correctly).
	      // This gets around the problem of a non-lexical "this" which occurs when the directive class itself
	      // returns `this.link` from within the compile function.
	      this._override(directiveObject.prototype, 'compile', function () {
	        return function () {

	          originalCompileFn.apply(this, arguments);

	          if (directiveObject.prototype.link) {
	            return directiveObject.prototype.link.bind(this);
	          }
	        };
	      });

	      var factoryArray = this._createFactoryArray(directiveObject);

	      module.directive(metadata.token, factoryArray);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return DirectiveObject;
	    }
	  }]);

	  return DirectiveObjectInjector;
	})(_injectorTypesJs.ListInjector);

	(0, _InjectorJs.registerInjector)('directiveObject', DirectiveObjectInjector);

	/*
	        var originalCompileFn = _cloneFunction(constructorFn.prototype.compile);

	        // Decorate the compile method to automatically return the link method (if it exists)
	        // and bind it to the context of the constructor (so `this` works correctly).
	        // This gets around the problem of a non-lexical "this" which occurs when the directive class itself
	        // returns `this.link` from within the compile function.
	        _override(constructorFn.prototype, 'compile', function () {
	            return function () {
	                originalCompileFn.apply(this, arguments);

	                if (constructorFn.prototype.link) {
	                    return constructorFn.prototype.link.bind(this);
	                }
	            };
	        });

	        var factoryArray = _createFactoryArray(constructorFn);

	        app.directive(name, factoryArray);
	        return this;
	    }
	*/

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bootstrap = bootstrap;

	var _InjectorJs = __webpack_require__(2);

	var _RouterJs = __webpack_require__(7);

	function bootstrap(appModule) {
	  var appPrefix = arguments.length <= 1 || arguments[1] === undefined ? "" : arguments[1];

	  var injector = new _InjectorJs.Injector(appPrefix);
	  var moduleName = injector.instantiate(appModule);
	  _RouterJs.Router.routeInitializer.initialize(moduleName, appModule);
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _bind = Function.prototype.bind;
	exports.applyAnnotation = applyAnnotation;

	function applyAnnotation(target, annotationClass) {
	  var AnnotationVersion = annotationClass.originalClass || annotationClass;
	  target.annotations = target.annotations || [];

	  for (var _len = arguments.length, params = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    params[_key - 2] = arguments[_key];
	  }

	  target.annotations.push(new (_bind.apply(AnnotationVersion, [null].concat(params)))());
	}

/***/ }
/******/ ])));

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _a1atscript = require('a1atscript');

var Inflector = (function () {
  function Inflector() {
    _classCallCheck(this, _Inflector);
  }

  _createClass(Inflector, [{
    key: 'camelize',
    value: function camelize(key) {
      if (!angular.isString(key)) {
        return key;
      }

      // should this match more than word and digit characters?
      return key.replace(/_[\w\d]/g, function (match, index, string) {
        return index === 0 ? match : string.charAt(index + 1).toUpperCase();
      });
    }
  }, {
    key: 'humanize',
    value: function humanize(key) {
      if (!angular.isString(key)) {
        return key;
      }

      // should this match more than word and digit characters?
      return key.replace(/_/g, ' ').replace(/(\w+)/g, function (match) {
        return match.charAt(0).toUpperCase() + match.slice(1);
      });
    }
  }, {
    key: 'underscore',
    value: function underscore(key) {
      if (!angular.isString(key)) {
        return key;
      }

      // TODO match the latest logic from Active Support
      return key.replace(/[A-Z]/g, function (match, index) {
        return index === 0 ? match : '_' + match.toLowerCase();
      });
    }
  }, {
    key: 'dasherize',
    value: function dasherize(key) {
      if (!angular.isString(key)) {
        return key;
      }

      // TODO match the latest logic from Active Support
      return key.replace(/[A-Z]/g, function (match, index) {
        return index === 0 ? match : '-' + match.toLowerCase();
      });
    }
  }, {
    key: 'pluralize',
    value: function pluralize(value) {
      // TODO match Active Support
      return value + 's';
    }
  }]);

  var _Inflector = Inflector;
  Inflector = (0, _a1atscript.Service)('Inflector')(Inflector) || Inflector;
  Inflector = (0, _a1atscript.AsModule)('inflector')(Inflector) || Inflector;
  return Inflector;
})();

exports['default'] = Inflector;
module.exports = exports['default'];

},{"a1atscript":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequire(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
}

var _xingFrontendUtilsAppExampleFormExampleFormJs = require("./xing-frontend-utils/app/exampleForm/exampleForm.js");

exports.ExampleForm = _interopRequire(_xingFrontendUtilsAppExampleFormExampleFormJs);

var _xingFrontendUtilsAppFallbackFallbackJs = require("./xing-frontend-utils/app/fallback/fallback.js");

exports.Fallback = _interopRequire(_xingFrontendUtilsAppFallbackFallbackJs);

var _xingFrontendUtilsComponentsResponsiveMenuResponsiveMenuJs = require("./xing-frontend-utils/components/responsiveMenu/responsiveMenu.js");

exports.ResponsiveMenu = _interopRequire(_xingFrontendUtilsComponentsResponsiveMenuResponsiveMenuJs);

var _xingFrontendUtilsComponentsStateAttrsStateAttrsJs = require("./xing-frontend-utils/components/stateAttrs/stateAttrs.js");

exports.StateAttrs = _interopRequire(_xingFrontendUtilsComponentsStateAttrsStateAttrsJs);

var _xingFrontendUtilsComponentsToastToastJs = require("./xing-frontend-utils/components/toast/toast.js");

exports.Toast = _interopRequire(_xingFrontendUtilsComponentsToastToastJs);

var _xingFrontendUtilsComponentsUnimplementedUnimplementedJs = require("./xing-frontend-utils/components/unimplemented/unimplemented.js");

exports.UnimplementedDirective = _interopRequire(_xingFrontendUtilsComponentsUnimplementedUnimplementedJs);

var _xingFrontendUtilsSerializerJs = require("./xing-frontend-utils/serializer.js");

exports.Serializer = _interopRequire(_xingFrontendUtilsSerializerJs);

var _xingFrontendUtilsStateClassesJs = require("./xing-frontend-utils/stateClasses.js");

Object.defineProperty(exports, "LoggedInOnlyState", {
  enumerable: true,
  get: function get() {
    return _xingFrontendUtilsStateClassesJs.LoggedInOnlyState;
  }
});
Object.defineProperty(exports, "AdminOnlyState", {
  enumerable: true,
  get: function get() {
    return _xingFrontendUtilsStateClassesJs.AdminOnlyState;
  }
});
Object.defineProperty(exports, "TrackAdminState", {
  enumerable: true,
  get: function get() {
    return _xingFrontendUtilsStateClassesJs.TrackAdminState;
  }
});

var _xingFrontendUtilsWhenGotoJs = require("./xing-frontend-utils/whenGoto.js");

exports.whenGoto = _interopRequire(_xingFrontendUtilsWhenGotoJs);

var _xingFrontendUtilsStateFallbackJs = require("./xing-frontend-utils/stateFallback.js");

exports.stateFallback = _interopRequire(_xingFrontendUtilsStateFallbackJs);

var _xingFrontendUtilsUiRouteLoggerJs = require("./xing-frontend-utils/ui-route-logger.js");

exports.uiRouteLogger = _interopRequire(_xingFrontendUtilsUiRouteLoggerJs);

var _xingFrontendUtilsStateInjectorJs = require("./xing-frontend-utils/stateInjector.js");

Object.defineProperty(exports, "State", {
  enumerable: true,
  get: function get() {
    return _xingFrontendUtilsStateInjectorJs.State;
  }
});
Object.defineProperty(exports, "Resolve", {
  enumerable: true,
  get: function get() {
    return _xingFrontendUtilsStateInjectorJs.Resolve;
  }
});
Object.defineProperty(exports, "Inject", {
  enumerable: true,
  get: function get() {
    return _xingFrontendUtilsStateInjectorJs.Inject;
  }
});
Object.defineProperty(exports, "StateInjector", {
  enumerable: true,
  get: function get() {
    return _xingFrontendUtilsStateInjectorJs.StateInjector;
  }
});

var _xingFrontendUtilsAppConfigJs = require("./xing-frontend-utils/appConfig.js");

Object.defineProperty(exports, "appConfig", {
  enumerable: true,
  get: function get() {
    return _xingFrontendUtilsAppConfigJs.appConfig;
  }
});

},{"./xing-frontend-utils/app/exampleForm/exampleForm.js":5,"./xing-frontend-utils/app/fallback/fallback.js":9,"./xing-frontend-utils/appConfig.js":10,"./xing-frontend-utils/components/responsiveMenu/responsiveMenu.js":12,"./xing-frontend-utils/components/stateAttrs/stateAttrs.js":13,"./xing-frontend-utils/components/toast/toast.js":20,"./xing-frontend-utils/components/unimplemented/unimplemented.js":21,"./xing-frontend-utils/serializer.js":23,"./xing-frontend-utils/stateClasses.js":24,"./xing-frontend-utils/stateFallback.js":25,"./xing-frontend-utils/stateInjector.js":26,"./xing-frontend-utils/ui-route-logger.js":27,"./xing-frontend-utils/whenGoto.js":28}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var template = "<h1>Example Form</h1>\n<h2>Still To-Do:</h2>\n<ul>\n  <li>Large Textarea</li>\n  <li>Date</li>\n  <li>Time</li>\n</ul>\n\n<form id='example-form'>\n    <div class='xng-form-row'>\n      <label for=\"username\">Username:</label>\n      <input name=\"username\" placeholder=\"e.g. CoolDev\" required />\n      <span class='messages'></span>\n    </div>\n\n    <div class='xng-form-row'>\n      <label for=\"password\">Password:</label>\n      <input type=\"password\" name=\"password\" placeholder=\"Password\" required />\n      <span class='messages'></span>\n    </div>\n\n    <div class='xng-form-row with-errors'>\n      <label for=\"invalid-data\">Field With Errors:</label>\n      <input type=\"invalid-data\" name=\"invalid-data\" value='Invalid Entry' placeholder=\"Password\" required />\n      <span class='messages error'>Invalid format!</span>\n    </div>\n\n    <div class='xng-form-row with-errors'>\n      <label for=\"valid-data\">Valid Entry:</label>\n      <input name=\"valid-data\" value='Valid Entry'/>\n      <span class='messages success'>Name is available!</span>\n    </div>\n\n    <div class='xng-form-row'>\n      <label for=\"favorite_color\">Favorite Color:</label>\n      <select name='favorite_color' id='favorite_color'>\n        <option>Red</option>\n        <option>Orange</option>\n        <option>Yellow</option>\n        <option>Green</option>\n        <option>Blue</option>\n        <option>Indigo</option>\n        <option>Violet</option>\n        <option>White</option>\n        <option>Black</option>\n      </select>\n      <span class='messages'></span>\n    </div>\n\n    <div class='xng-form-row'>\n      <label>Radio Station:</label>\n      <div class='option-group'>\n        <label><input type='radio' name='radio_station' />KPCC</label>\n        <label><input type='radio' name='radio_station' />KROQ</label>\n        <label><input type='radio' name='radio_station' />KLOS</label>\n        <label><input type='radio' name='radio_station' />KQED</label>\n      </div>\n    </div>\n\n    <div class='xng-form-row'>\n      <label>Artists You Like:</label>\n      <div class='option-group'>\n        <label><input type='checkbox' name='artists' />Kandinsky</label>\n        <label><input type='checkbox' name='artists' />Renoir</label>\n        <label><input type='checkbox' name='artists' />De Kooning</label>\n        <label><input type='checkbox' name='artists' />Pollock</label>\n      </div>\n    </div>\n\n    <div class='xng-form-row'>\n      <label>Favorite Animal:</label>\n      <div class='option-group inline'>\n        <label><input type='radio' name='animal' />Cat</label>\n        <label><input type='radio' name='animal' />Dog</label>\n        <label><input type='radio' name='animal' />Other</label>\n      </div>\n    </div>\n\n    <div class='xng-form-row'>\n      <label for='message'>Message:</label>\n      <textarea name='message' id='message' />\n    </div>\n\n    <div class='xng-form-row'>\n      <button type=\"submit\" ng-click=\"sessionSubmit()\" class=\"call-to-action\">Submit</button>\n    </div>\n\n    <div class='xng-form-row'>\n      <div ng-if=\"passwordShow\" class='input-like'>\n        <a ui-sref='root.inner.passwordsRequest'>Forgot your password?</a>\n      </div>\n    </div>\n</form>\n";
exports["default"] = template;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj['default'] = obj;return newObj;
  }
}

var _exampleFormStatesJs = require('./exampleFormStates.js');

var ExampleFormStates = _interopRequireWildcard(_exampleFormStatesJs);

var _exampleFormControllersJs = require('./exampleFormControllers.js');

var _exampleFormControllersJs2 = _interopRequireDefault(_exampleFormControllersJs);

var _a1atscript = require('a1atscript');

var ExampleForm = new _a1atscript.Module('exampleForm', ['ui.router.state', ExampleFormStates, _exampleFormControllersJs2['default']]);

exports['default'] = ExampleForm;
module.exports = exports['default'];

},{"./exampleFormControllers.js":6,"./exampleFormStates.js":7,"a1atscript":1}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var _a1atscript = require('a1atscript');

var ExampleFormCtrl = (function () {
  function ExampleFormCtrl($scope) {
    _classCallCheck(this, _ExampleFormCtrl);
  }

  var _ExampleFormCtrl = ExampleFormCtrl;
  ExampleFormCtrl = (0, _a1atscript.Controller)('ExampleFormCtrl', ['$scope'])(ExampleFormCtrl) || ExampleFormCtrl;
  return ExampleFormCtrl;
})();

exports['default'] = ExampleFormCtrl;
module.exports = exports['default'];

},{"a1atscript":1}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var _stateInjectorJs = require('../../stateInjector.js');

var _exampleFormTplJs = require("./example-form.tpl.js");

var _exampleFormTplJs2 = _interopRequireDefault(_exampleFormTplJs);

var ExampleFormState = (function () {
  function ExampleFormState() {
    _classCallCheck(this, _ExampleFormState);

    this.url = '^/example-form';
    this.controller = 'ExampleFormCtrl';
    this.template = _exampleFormTplJs2['default'];
  }

  var _ExampleFormState = ExampleFormState;
  ExampleFormState = (0, _stateInjectorJs.State)('root.inner.exampleForm')(ExampleFormState) || ExampleFormState;
  return ExampleFormState;
})();

exports.ExampleFormState = ExampleFormState;

},{"../../stateInjector.js":26,"./example-form.tpl.js":4}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var template = "<div class=\"critical error\">\n  <img class='icon' src='/assets/icons/alert.svg' />\n\n  <p>A significant error has occurred in the application.\n  Please try returning to the <a href=\"/\">home page.</a></p>\n\n  <p>If you cannot visit the home page, the error is probably caused by a\n  failure in a remote service. Please report the error to your \n  administrator.</p>\n</div>\n";
exports["default"] = template;
module.exports = exports["default"];

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var _a1atscript = require('a1atscript');

var _stateInjectorJs = require('../../stateInjector.js');

var _errorFallbackTplJs = require("./error-fallback.tpl.js");

var _errorFallbackTplJs2 = _interopRequireDefault(_errorFallbackTplJs);

//import errorTemplate from 'common/templates/app/error-fallback.tpl.js';

//must be top level - don't want e.g. resolve error in root to break it

var FallbackState = (function () {
  function FallbackState() {
    _classCallCheck(this, _FallbackState);

    // no controller, no resolves.
    this.url = "/error";
    this.template = _errorFallbackTplJs2['default'];
  }

  var _FallbackState = FallbackState;
  FallbackState = (0, _stateInjectorJs.State)('errorFallback')(FallbackState) || FallbackState;
  return FallbackState;
})();

var Fallback = new _a1atscript.Module('fallback', ['ui.router.state', FallbackState]);

exports['default'] = Fallback;
module.exports = exports['default'];

},{"../../stateInjector.js":26,"./error-fallback.tpl.js":8,"a1atscript":1}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whenGoto = whenGoto;
exports.appConfig = appConfig;

var _a1atscript = require("a1atscript");

function whenGoto($location) {
  var search = $location.search();
  if (search.goto) {
    var target = search.goto;

    var queryParts = [];
    for (var key in search) {
      if (search.hasOwnProperty(key) && key != "goto") {
        queryParts.push([key, search[key]].join("="));
      }
    }

    if (queryParts.length > 0) {
      target = [target, queryParts.join("&")].join("?");
    }

    return target;
  } else {
    return false;
  }
}

function appConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  // enable html5 mode
  $locationProvider.html5Mode(true);

  // html5 mode when frontend urls hit directly they become a backend request
  // backend in-turn redirects to /?goto=url wher url is the intended frontend url
  // this function then redirects frontend (via history API) to appropriate frontend
  // route
  $urlRouterProvider.when(/.*/, ['$location', whenGoto]);

  $urlRouterProvider.otherwise(function ($injector, $location) {
    $injector.get('$state').go('root.homepage.show');
    //return '/home';
  });
}

(0, _a1atscript.applyAnnotation)(appConfig, _a1atscript.Config, '$stateProvider', '$urlRouterProvider', '$locationProvider');

},{"a1atscript":1}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var template = "<nav class=\"nav-collapse\" ng-transclude>\n</nav>\n";
exports["default"] = template;
module.exports = exports["default"];

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var _a1atscript = require('a1atscript');

var _responsiveMenuTplJs = require("./responsive-menu.tpl.js");

var _responsiveMenuTplJs2 = _interopRequireDefault(_responsiveMenuTplJs);

var ResponsiveMenu = (function () {
  function ResponsiveMenu() {
    _classCallCheck(this, _ResponsiveMenu);

    this.restrict = 'E';
    this.template = _responsiveMenuTplJs2['default'];
    this.transclude = true;
    this.scope = true;
  }

  _createClass(ResponsiveMenu, [{
    key: 'link',
    value: function link(scope, element, attrs) {
      var nav = responsiveNav(".nav-collapse");
    }
  }]);

  var _ResponsiveMenu = ResponsiveMenu;
  ResponsiveMenu = (0, _a1atscript.DirectiveObject)('xngResponsiveMenu')(ResponsiveMenu) || ResponsiveMenu;
  ResponsiveMenu = (0, _a1atscript.AsModule)('responsiveMenu')(ResponsiveMenu) || ResponsiveMenu;
  return ResponsiveMenu;
})();

exports['default'] = ResponsiveMenu;
module.exports = exports['default'];

},{"./responsive-menu.tpl.js":11,"a1atscript":1}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var _a1atscript = require('a1atscript');

var StateAttrs = (function () {
  function StateAttrs($compile, $state) {
    _classCallCheck(this, _StateAttrs);

    this.$compile = $compile;
    this.$state = $state;
    this.restrict = 'A';
    this.priority = -500;
  }

  _createClass(StateAttrs, [{
    key: 'getUiViewName',
    value: function getUiViewName(attrs, inherited) {
      var name = attrs.uiView || attrs.name || '';
      return name.indexOf('@') >= 0 ? name : name + '@' + (inherited ? inherited.state.name : '');
    }
  }, {
    key: 'link',
    value: function link(scope, element, attrs, controller, transcludeFn) {
      var name = this.getUiViewName(attrs, element.inheritedData('$uiView'));
      var locals = name && this.$state.$current && this.$state.$current.locals[name];
      if (locals) {
        var viewStateName = locals.$$state.self.name;
        var className = viewStateName.replace(/.*\./, '');
        var idName = viewStateName.replace(/\./g, '_');

        if (!attrs.id) {
          attrs.$set("id", idName);
        }
        attrs.$addClass(className);
      }
    }
  }]);

  var _StateAttrs = StateAttrs;
  StateAttrs = (0, _a1atscript.DirectiveObject)('xngStateAttrs', ['$compile', '$state'])(StateAttrs) || StateAttrs;
  StateAttrs = (0, _a1atscript.AsModule)('stateAttrs', ['ui.router.state'])(StateAttrs) || StateAttrs;
  return StateAttrs;
})();

exports['default'] = StateAttrs;
module.exports = exports['default'];

},{"a1atscript":1}],14:[function(require,module,exports){
'use strict';

function xngCompilerService($q, $http, $injector, $compile, $controller, $templateCache) {

  /**
   * @ngdoc service
   * @name $xngCompiler
   * @module xng.services.compiler
   *
   * @description
   * The $xngCompiler service is an abstraction of angular's compiler, that allows the developer
   * to easily compile an element with a templateUrl, controller, and locals.
   */

  /**
   * @ngdoc method
   * @name $xngCompiler#compile
   * @param {object} options An options object, with the following properties:
   *
   *    - `controller` â€“ `{(string=|function()=}` â€“ Controller fn that should be associated with
   *      newly created scope or the name of a {@link angular.Module#controller registered
   *      controller} if passed as a string.
   *    - `controllerAs` â€“ `{string=}` â€“ A controller alias name. If present the controller will be
   *      published to scope under the `controllerAs` name.
   *    - `template` â€“ `{string=}` â€“ html template as a string or a function that
   *      returns an html template as a string which should be used by {@link
   *      ngRoute.directive:ngView ngView} or {@link ng.directive:ngInclude ngInclude} directives.
   *      This property takes precedence over `templateUrl`.
   *
   *    - `templateUrl` â€“ `{string=}` â€“ path or function that returns a path to an html
   *      template that should be used by {@link ngRoute.directive:ngView ngView}.
   *
   *    - `transformTemplate` â€“ `{function=} â€“ a function which can be used to transform
   *      the templateUrl or template provided after it is fetched.  It will be given one
   *      parameter, the template, and should return a transformed template.
   *
   *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
   *      be injected into the controller. If any of these dependencies are promises, the compiler
   *      will wait for them all to be resolved or one to be rejected before the controller is
   *      instantiated.
   *
   *      - `key` â€“ `{string}`: a name of a dependency to be injected into the controller.
   *      - `factory` - `{string|function}`: If `string` then it is an alias for a service.
   *        Otherwise if function, then it is {@link api/AUTO.$injector#invoke injected}
   *        and the return value is treated as the dependency. If the result is a promise, it is
   *        resolved before its value is injected into the controller.
   *
   * @returns {object=} promise A promsie which will be resolved with a `compileData` object,
   * with the following properties:
   *
   *   - `{element}` â€“ `element` â€“ an uncompiled angular element compiled using the provided template.
   *
   *   - `{function(scope)}`  â€“ `link` â€“ A link function, which, when called, will compile
   *     the elmeent and instantiate options.controller.
   *
   *   - `{object}` â€“ `locals` â€“ The locals which will be passed into the controller once `link` is
   *     called.
   *
   * @usage
   * $xngCompiler.compile({
   *   templateUrl: 'modal.html',
   *   controller: 'ModalCtrl',
   *   locals: {
   *     modal: myModalInstance;
   *   }
   * }).then(function(compileData) {
   *   compileData.element; // modal.html's template in an element
   *   compileData.link(myScope); //attach controller & scope to element
   * });
   */
  this.compile = function (options) {
    var templateUrl = options.templateUrl;
    var template = options.template || '';
    var controller = options.controller;
    var controllerAs = options.controllerAs;
    var resolve = options.resolve || {};
    var locals = options.locals || {};
    var transformTemplate = options.transformTemplate || angular.identity;

    // Take resolve values and invoke them.
    // Resolves can either be a string (value: 'MyRegisteredAngularConst'),
    // or an invokable 'factory' of sorts: (value: function ValueGetter($dependency) {})
    angular.forEach(resolve, function (value, key) {
      if (angular.isString(value)) {
        resolve[key] = $injector.get(value);
      } else {
        resolve[key] = $injector.invoke(value);
      }
    });
    //Add the locals, which are just straight values to inject
    //eg locals: { three: 3 }, will inject three into the controller
    angular.extend(resolve, locals);

    if (templateUrl) {
      resolve.$template = $http.get(templateUrl, { cache: $templateCache }).then(function (response) {
        return response.data;
      });
    } else {
      resolve.$template = $q.when(template);
    }

    // Wait for all the resolves to finish if they are promises
    return $q.all(resolve).then(function (locals) {

      var template = transformTemplate(locals.$template);
      var element = angular.element('<div>').html(template).contents();
      var linkFn = $compile(element);

      //Return a linking function that can be used later when the element is ready
      return {
        locals: locals,
        element: element,
        link: function link(scope) {
          locals.$scope = scope;

          //Instantiate controller if it exists, because we have scope
          if (controller) {
            var ctrl = $controller(controller, locals);
            //See angular-route source for this logic
            element.data('$ngControllerController', ctrl);
            element.children().data('$ngControllerController', ctrl);

            if (controllerAs) {
              scope[controllerAs] = ctrl;
            }
          }

          return linkFn(scope);
        }
      };
    });
  };
}

angular.module('xing.utils.compiler', []).service('$xngCompiler', ['$q', '$http', '$injector', '$compile', '$controller', '$templateCache', xngCompilerService]);

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var template = "<div id=\"error_explanation\">\n  <h2 ng-if=\"header\">{{header}}</h2>\n  <ul>\n    <li ng-repeat=\"message in messages\">\n      {{message}}\n    </li>\n  </ul>\n</div>\n";
exports["default"] = template;
module.exports = exports["default"];

},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var template = "<div id=\"error_explanation\">\n  <div class=\"toast {{type}}\">{{message}}</div>\n</div>";
exports["default"] = template;
module.exports = exports["default"];

},{}],17:[function(require,module,exports){
'use strict';

require('./compiler.js');

angular.module('xing.utils.interimElement', ['xing.utils.compiler']).factory('$$interimElement', ['$q', '$rootScope', '$timeout', '$rootElement', '$animate', '$xngCompiler', InterimElementFactory]);

/**
 * @ngdoc service
 * @name $$interimElement
 *
 * @description
 *
 * Factory that contructs `$$interimElement.$service` services.
 * Used internally in xing for elements that appear on screen temporarily.
 * The service provides a promise-like API for interacting with the temporary
 * elements.
 *
 * ```js
 * app.service('$xngToast', function($$interimElement) {
 *   var $xngToast = $$interimElement(toastDefaultOptions);
 *   return $xngToast;
 * });
 * ```
 * @param {object=} defaultOptions Options used by default for the `show` method on the service.
 *
 * @returns {$$interimElement.$service}
 *
 */

function InterimElementFactory($q, $rootScope, $timeout, $rootElement, $animate, $xngCompiler) {

  return function createInterimElementService(defaults) {

    /**
     * @ngdoc service
     * @name $$interimElement.$service
     *
     * @description
     * A service used to control inserting and removing an element into the DOM.
     *
     */

    var stack = [];

    var parent = $rootElement.find('body');
    if (!parent.length) {
      parent = $rootElement;
    }

    defaults = angular.extend({
      parent: parent,
      onShow: function onShow(scope, $el, options) {
        return $animate.enter($el, options.parent);
      },
      onRemove: function onRemove(scope, $el, options) {
        return $animate.leave($el);
      }
    }, defaults || {});

    var service;
    service = {
      show: show,
      hide: hide,
      cancel: cancel
    };
    return service;
    /**
     * @ngdoc method
     * @name $$interimElement.$service#show
     * @kind function
     *
     * @description
     * Compiles and inserts an element into the DOM.
     *
     * @param {Object} options Options object to compile with.
     *
     * @returns {Promise} Promise that will resolve when the service
     * has `#close()` or `#cancel()` called.
     *
     */
    function show(options) {
      if (stack.length) {
        service.hide();
      }

      var interimElement = new InterimElement(options);
      stack.push(interimElement);
      return interimElement.show().then(function () {
        return interimElement.deferred.promise;
      });
    }

    /**
     * @ngdoc method
     * @name $$interimElement.$service#hide
     * @kind function
     *
     * @description
     * Removes the `$interimElement` from the DOM and resolves the promise returned from `show`
     *
     * @param {*} resolveParam Data to resolve the promise with
     *
     * @returns undefined data that resolves after the element has been removed.
     *
     */
    function hide(success) {
      var interimElement = stack.shift();
      interimElement.remove().then(function () {
        interimElement.deferred.resolve(success);
      });
    }

    /**
     * @ngdoc method
     * @name $$interimElement.$service#cancel
     * @kind function
     *
     * @description
     * Removes the `$interimElement` from the DOM and rejects the promise returned from `show`
     *
     * @param {*} reason Data to reject the promise with
     *
     * @returns undefined
     *
     */
    function cancel(reason) {
      var interimElement = stack.shift();
      interimElement.remove().then(function () {
        interimElement.deferred.reject(reason);
      });
    }

    /*
     * Internal Interim Element Object
     * Used internally to manage the DOM element and related data
     */
    function InterimElement(options) {
      var self;
      var hideTimeout, element;

      options = options || {};

      options = angular.extend({
        scope: options.scope || $rootScope.$new(options.isolateScope)
      }, defaults, options);

      self = {
        options: options,
        deferred: $q.defer(),
        show: function show() {
          return $xngCompiler.compile(options).then(function (compiledData) {
            element = compiledData.link(options.scope);
            var ret = options.onShow(options.scope, element, options);
            return $q.when(ret).then(startHideTimeout);

            function startHideTimeout() {
              if (options.hideDelay) {
                hideTimeout = $timeout(service.hide, options.hideDelay);
              }
            }
          });
        },
        cancelTimeout: function cancelTimeout() {
          if (hideTimeout) {
            $timeout.cancel(hideTimeout);
            hideTimeout = undefined;
          }
        },
        remove: function remove() {
          self.cancelTimeout();
          var ret = options.onRemove(options.scope, element, options);
          return $q.when(ret).then(function () {
            options.scope.$destroy();
          });
        }
      };
      return self;
    }
  };
}

},{"./compiler.js":14}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var template = "<div id=\"messages\">\n  <div class=\"toast {{type}}\">{{content}}</div>\n</div>\n";
exports["default"] = template;
module.exports = exports["default"];

},{}],19:[function(require,module,exports){
"use strict";

(function () {

  /**
   * @ngdoc module
   * @name xng.components.swipe
   * @description Swipe module!
   */
  angular.module("xing.utils.swipe", ['ng'])

  /**
   * @ngdoc directive
   * @module xng.components.swipe
   * @name xngSwipe
   *
   *  This service allows directives to easily attach swipe and pan listeners to
   *  the specified element.
   *
   * @private
   */
  .factory("$xngSwipe", function () {

    // match expected API functionality
    var attachNoop = function attachNoop() {
      return angular.noop;
    };

    /**
     * SwipeService constructor pre-captures scope and customized event types
     *
     * @param scope
     * @param eventTypes
     * @returns {*}
     * @constructor
     */
    return function SwipeService(scope, eventTypes) {
      if (!eventTypes) {
        eventTypes = "swipeleft swiperight";
      }

      // publish configureFor() method for specific element instance
      return function configureFor(element, onSwipeCallback, attachLater) {
        var hammertime = new Hammer(element[0], {
          recognizers: addRecognizers([], eventTypes)
        });

        // Attach swipe listeners now
        if (!attachLater) {
          attachSwipe();
        }

        // auto-disconnect during destroy
        scope.$on('$destroy', function () {
          hammertime.destroy();
        });

        return attachSwipe;

        // **********************
        // Internal methods
        // **********************

        /**
         * Delegate swipe event to callback function
         * and ensure $digest is triggered.
         *
         * @param ev HammerEvent
         */
        function swipeHandler(ev) {

          // Prevent triggering parent hammer listeners
          ev.srcEvent.stopPropagation();

          if (angular.isFunction(onSwipeCallback)) {
            scope.$apply(function () {
              onSwipeCallback(ev);
            });
          }
        }

        /**
         * Enable listeners and return detach() fn
         */
        function attachSwipe() {
          hammertime.on(eventTypes, swipeHandler);

          return function detachSwipe() {
            hammertime.off(eventTypes);
          };
        }

        /**
         * Add optional recognizers such as panleft, panright
         */
        function addRecognizers(list, events) {
          var hasPanning = events.indexOf("pan") > -1;
          var hasSwipe = events.indexOf("swipe") > -1;

          if (hasPanning) {
            list.push([Hammer.Pan, { direction: Hammer.DIRECTION_HORIZONTAL }]);
          }
          if (hasSwipe) {
            list.push([Hammer.Swipe, { direction: Hammer.DIRECTION_HORIZONTAL }]);
          }

          return list;
        }
      };
    };
  })

  /**
   * @ngdoc directive
   * @module xng.components.swipe
   * @name xngSwipeLeft
   *
   * @order 0
   * @restrict A
   *
   * @description
   * The `<div  xng-swipe-left="<expression" >` directive identifies an element on which
   * HammerJS horizontal swipe left and pan left support will be active. The swipe/pan action
   * can result in custom activity trigger by evaluating `<expression>`.
   *
   * @param {boolean=} noPan Use of attribute indicates flag to disable detection of `panleft` activity
   *
   * @usage
   * <hljs lang="html">
   *
   * <div class="animate-switch-container"
   *      ng-switch on="data.selectedIndex"
   *      xng-swipe-left="data.selectedIndex+=1;"
   *      xng-swipe-right="data.selectedIndex-=1;" >
   *
   * </div>
   * </hljs>
   *
   */
  .directive("xngSwipeLeft", ['$parse', '$xngSwipe', function XNGSwipeLeft($parse, $xngSwipe) {
    return {
      restrict: 'A',
      link: swipePostLink($parse, $xngSwipe, "SwipeLeft")
    };
  }])

  /**
   * @ngdoc directive
   * @module xng.components.swipe
   * @name xngSwipeRight
   *
   * @order 1
   * @restrict A
   *
   * @description
   * The `<div  xng-swipe-right="<expression" >` directive identifies functionality
   * that attaches HammerJS horizontal swipe right and pan right support to an element. The swipe/pan action
   * can result in activity trigger by evaluating `<expression>`
   *
   * @param {boolean=} noPan Use of attribute indicates flag to disable detection of `panright` activity
   *
   * @usage
   * <hljs lang="html">
   *
   * <div class="animate-switch-container"
   *      ng-switch on="data.selectedIndex"
   *      xng-swipe-left="data.selectedIndex+=1;"
   *      xng-swipe-right="data.selectedIndex-=1;" >
   *
   * </div>
   * </hljs>
   *
   */
  .directive("xngSwipeRight", ['$parse', '$xngSwipe', function XNGSwipeRight($parse, $xngSwipe) {
    return {
      restrict: 'A',
      link: swipePostLink($parse, $xngSwipe, "SwipeRight")
    };
  }]);

  /**
   * Factory to build PostLink function specific to Swipe or Pan direction
   *
   * @param $parse
   * @param xngSwipe
   * @param name
   * @returns {Function}
   */
  function swipePostLink($parse, $xngSwipe, name) {

    return function (scope, element, attrs) {
      var direction = name.toLowerCase();
      var directiveName = "xng" + name;

      var parentGetter = $parse(attrs[directiveName]) || angular.noop;
      var configureSwipe = $xngSwipe(scope, direction);
      var requestSwipe = function requestSwipe(locals) {
        // build function to request scope-specific swipe response
        parentGetter(scope, locals);
      };

      configureSwipe(element, function onHandleSwipe(ev) {
        if (ev.type == direction) {
          requestSwipe();
        }
      });
    };
  }
})();

},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var _a1atscript = require('a1atscript');

require('./swipe.js');

require('./interimElement.js');

var _xingInflector = require('xing-inflector');

var _xingInflector2 = _interopRequireDefault(_xingInflector);

var _errorListTplJs = require("./error-list.tpl.js");

var _errorListTplJs2 = _interopRequireDefault(_errorListTplJs);

var _errorTplJs = require("./error.tpl.js");

var _errorTplJs2 = _interopRequireDefault(_errorTplJs);

var _noticeTplJs = require("./notice.tpl.js");

var _noticeTplJs2 = _interopRequireDefault(_noticeTplJs);

function xngToastDirective() {
  return {
    restrict: 'E'
  };
}

(0, _a1atscript.applyAnnotation)(xngToastDirective, _a1atscript.Directive, '$xngToast');

var XngToastErrorListCtrl = (function () {
  function XngToastErrorListCtrl($scope, type, header, messages) {
    _classCallCheck(this, _XngToastErrorListCtrl);

    $scope.type = type;
    $scope.header = header;
    $scope.messages = messages;
  }

  var _XngToastErrorListCtrl = XngToastErrorListCtrl;
  XngToastErrorListCtrl = (0, _a1atscript.Controller)('$xngToastErrorListCtrl', ['$scope', 'type', 'header', 'messages'])(XngToastErrorListCtrl) || XngToastErrorListCtrl;
  return XngToastErrorListCtrl;
})();

var XngToastErrorCtrl = (function () {
  function XngToastErrorCtrl($scope, type, message) {
    _classCallCheck(this, _XngToastErrorCtrl);

    $scope.type = type;
    $scope.message = message;
  }

  var _XngToastErrorCtrl = XngToastErrorCtrl;
  XngToastErrorCtrl = (0, _a1atscript.Controller)('$xngToastErrorCtrl', ['$scope', 'type', 'message'])(XngToastErrorCtrl) || XngToastErrorCtrl;
  return XngToastErrorCtrl;
})();

var XngToastNoticeCtrl = (function () {
  function XngToastNoticeCtrl($scope, type, message) {
    _classCallCheck(this, _XngToastNoticeCtrl);

    $scope.type = type;
    $scope.message = message;
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

  var _XngToastNoticeCtrl = XngToastNoticeCtrl;
  XngToastNoticeCtrl = (0, _a1atscript.Controller)('$xngToastNoticeCtrl', ['$scope', 'type', 'message'])(XngToastNoticeCtrl) || XngToastNoticeCtrl;
  return XngToastNoticeCtrl;
})();

function xngToastService($timeout, $$interimElement, $animate, $xngSwipe, Inflector) {

  var factoryDef = {
    onShow: onShow,
    onRemove: onRemove,
    position: 'bottom left',
    hideDelay: 3000
  };

  var toastElement = angular.element(document.getElementById("toast_main"));
  var $xngToast = $$interimElement(factoryDef);

  $xngToast.notice = function (message) {
    var type = arguments.length <= 1 || arguments[1] === undefined ? "notice" : arguments[1];

    return this.show({
      parent: toastElement,
      template: _noticeTplJs2['default'],
      position: 'top left',
      locals: {
        type: type,
        message: message
      },
      controller: '$xngToastNoticeCtrl'
    });
  };

  $xngToast.error = function (message) {
    var type = arguments.length <= 1 || arguments[1] === undefined ? "error" : arguments[1];

    return this.show({
      parent: toastElement,
      template: _errorTplJs2['default'],
      position: 'top left',
      locals: {
        type: type,
        message: message
      },
      controller: '$xngToastErrorCtrl'
    });
  };

  $xngToast.errorList = function (errors) {
    var header = arguments.length <= 1 || arguments[1] === undefined ? "" : arguments[1];
    var type = arguments.length <= 2 || arguments[2] === undefined ? "error" : arguments[2];

    var messages = [];
    if (Array.isArray(errors)) {
      messages = errors;
    } else {
      for (var key in errors) {
        if (errors.hasOwnProperty(key)) {
          messages.push(Inflector.humanize(key) + ' ' + errors[key]);
        }
      }
    }
    return this.show({
      parent: toastElement,
      template: _errorListTplJs2['default'],
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
    options.detachSwipe = configureSwipe(element, function (ev) {
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
    return 'xng-toast-open-' + (position.indexOf('top') > -1 ? 'top' : 'bottom');
  }
}

(0, _a1atscript.applyAnnotation)(xngToastService, _a1atscript.Factory, '$xngToast', ['$timeout', '$$interimElement', '$animate', '$xngSwipe', 'Inflector']);

var Toast = new _a1atscript.Module('toast', ['xing.utils.interimElement', 'xing.utils.swipe', _xingInflector2['default'], xngToastDirective, XngToastErrorListCtrl, XngToastErrorCtrl, XngToastNoticeCtrl, xngToastService]);

exports['default'] = Toast;
module.exports = exports['default'];

},{"./error-list.tpl.js":15,"./error.tpl.js":16,"./interimElement.js":17,"./notice.tpl.js":18,"./swipe.js":19,"a1atscript":1,"xing-inflector":2}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var _a1atscript = require('a1atscript');

var UnimplementedDirective = (function () {
  function UnimplementedDirective() {
    _classCallCheck(this, _UnimplementedDirective);

    this.restrict = 'A';
  }

  _createClass(UnimplementedDirective, [{
    key: 'link',
    value: function link(scope, element, attrs) {
      element.on('click', function () {
        alert('This feature is not yet implemented.  The item you just clicked on is just a visual placeholder for a future part of this application.');
      });
    }
  }]);

  var _UnimplementedDirective = UnimplementedDirective;
  UnimplementedDirective = (0, _a1atscript.DirectiveObject)('xngUnimplemented', [])(UnimplementedDirective) || UnimplementedDirective;
  return UnimplementedDirective;
})();

exports['default'] = UnimplementedDirective;
module.exports = exports['default'];

},{"a1atscript":1}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var ErrorLimiter = (function () {
  function ErrorLimiter(uiState, failsafeStateName) {
    _classCallCheck(this, ErrorLimiter);

    this.uiState = uiState;
    this.failsafeStateName = failsafeStateName;
    this.failedTransitions = {};
    this.errorLimit = 3;
  }

  _createClass(ErrorLimiter, [{
    key: "recordTransition",
    value: function recordTransition(from, to) {
      if (typeof this.failedTransitions[from] === "undefined") {
        this.failedTransitions[from] = {};
      }

      if (typeof this.failedTransitions[from][to] === "undefined") {
        this.failedTransitions[from][to] = 0;
      }

      this.failedTransitions[from][to] = this.failedTransitions[from][to] + 1;
    }
  }, {
    key: "transitionCount",
    value: function transitionCount(from, to) {
      if (typeof this.failedTransitions[from] === "undefined") {
        return 0;
      }

      if (typeof this.failedTransitions[from][to] === "undefined") {
        return 0;
      }

      return this.failedTransitions[from][to];
    }
  }, {
    key: "goToFailsafe",
    value: function goToFailsafe() {
      this.uiState.go(this.failsafeStateName);
    }
  }, {
    key: "clearTransitionRecords",
    value: function clearTransitionRecords() {
      this.failedTransitions = {};
    }
  }, {
    key: "transitionError",
    value: function transitionError(fromState, toState) {
      var from = fromState.name,
          to = toState.name;
      this.recordTransition(from, to);
      if (this.transitionCount(from, to) >= this.errorLimit) {
        this.goToFailsafe();
      }
    }
  }, {
    key: "transitionSuccess",
    value: function transitionSuccess(fromState, toState) {
      var from = fromState.name,
          to = toState.name;
      this.clearTransitionRecords();
    }
  }]);

  return ErrorLimiter;
})();

exports["default"] = ErrorLimiter;
module.exports = exports["default"];

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var _xingInflector = require('xing-inflector');

var _xingInflector2 = _interopRequireDefault(_xingInflector);

var _a1atscript = require('a1atscript');

var SerializerProvider = (function () {
  function SerializerProvider() {
    _classCallCheck(this, _SerializerProvider);

    var defaultOptions = {
      underscore: undefined,
      camelize: undefined,
      pluralize: undefined,
      exclusionMatchers: []
    };

    /**
     * Configures the underscore method used by the serializer.  If not defined then <code>RailsInflector.underscore</code>
     * will be used.
     *
     * @param {function(string):string} fn The function to use for underscore conversion
     * @returns {railsSerializerProvider} The provider for chaining
     */
    this.underscore = function (fn) {
      defaultOptions.underscore = fn;
      return this;
    };

    /**
     * Configures the camelize method used by the serializer.  If not defined then <code>RailsInflector.camelize</code>
     * will be used.
     *
     * @param {function(string):string} fn The function to use for camelize conversion
     * @returns {railsSerializerProvider} The provider for chaining
     */
    this.camelize = function (fn) {
      defaultOptions.camelize = fn;
      return this;
    };

    /**
     * Configures the pluralize method used by the serializer.  If not defined then <code>RailsInflector.pluralize</code>
     * will be used.
     *
     * @param {function(string):string} fn The function to use for pluralizing strings.
     * @returns {railsSerializerProvider} The provider for chaining
     */
    this.pluralize = function (fn) {
      defaultOptions.pluralize = fn;
      return this;
    };

    /**
     * Configures the array exclusion matchers by the serializer.  Exclusion matchers can be one of the following:
     * * string - Defines a prefix that is used to test for exclusion
     * * RegExp - A custom regular expression that is tested against the attribute name
     * * function - A custom function that accepts a string argument and returns a boolean with true indicating exclusion.
     *
     * @param {Array.<string|function(string):boolean|RegExp} exclusions An array of exclusion matchers
     * @returns {railsSerializerProvider} The provider for chaining
     */
    this.exclusionMatchers = function (exclusions) {
      defaultOptions.exclusionMatchers = exclusions;
      return this;
    };

    this.$get = ['$injector', 'Inflector', function ($injector, Inflector) {
      defaultOptions.underscore = defaultOptions.underscore || Inflector.underscore;
      defaultOptions.camelize = defaultOptions.camelize || Inflector.camelize;
      defaultOptions.pluralize = defaultOptions.pluralize || Inflector.pluralize;

      function Serializer() {

        this.exclusions = {};
        this.inclusions = {};
        this.serializeMappings = {};
        this.deserializeMappings = {};
        this.customSerializedAttributes = {};
        this.preservedAttributes = {};
        this.options = angular.extend({ excludeByDefault: false }, defaultOptions || {});
      }

      /**
       * Accepts a variable list of attribute names to exclude from JSON serialization.
       *
       * @param attributeNames... {string} Variable number of attribute name parameters
       * @returns {Serializer} this for chaining support
       */
      Serializer.prototype.exclude = function () {
        var exclusions = this.exclusions;

        angular.forEach(arguments, function (attributeName) {
          exclusions[attributeName] = false;
        });

        return this;
      };

      /**
       * Accepts a variable list of attribute names that should be included in JSON serialization.
       * Using this method will by default exclude all other attributes and only the ones explicitly included using <code>only</code> will be serialized.
       * @param attributeNames... {string} Variable number of attribute name parameters
       * @returns {Serializer} this for chaining support
       */
      Serializer.prototype.only = function () {
        var inclusions = this.inclusions;
        this.options.excludeByDefault = true;

        angular.forEach(arguments, function (attributeName) {
          inclusions[attributeName] = true;
        });

        return this;
      };

      /**
       * Specifies a custom name mapping for an attribute.
       * On serializing to JSON the jsonName will be used.
       * On deserialization, if jsonName is seen then it will be renamed as javascriptName in the resulting resource.
       *
       * @param javascriptName {string} The attribute name as it appears in the JavaScript object
       * @param jsonName {string} The attribute name as it should appear in JSON
       * @param bidirectional {boolean} (optional) Allows turning off the bidirectional renaming, defaults to true.
       * @returns {Serializer} this for chaining support
       */
      Serializer.prototype.rename = function (javascriptName, jsonName, bidirectional) {
        this.serializeMappings[javascriptName] = jsonName;

        if (bidirectional || bidirectional === undefined) {
          this.deserializeMappings[jsonName] = javascriptName;
        }
        return this;
      };

      /**
       * Allows custom attribute creation as part of the serialization to JSON.
       *
       * @param attributeName {string} The name of the attribute to add
       * @param value {*} The value to add, if specified as a function then the function will be called during serialization
       *     and should return the value to add.
       * @returns {Serializer} this for chaining support
       */
      Serializer.prototype.add = function (attributeName, value) {
        this.customSerializedAttributes[attributeName] = value;
        return this;
      };

      /**
       * Allows the attribute to be preserved unmodified in the resulting object.
       *
       * @param attributeName {string} The name of the attribute to add
       * @returns {Serializer} this for chaining support
       */
      Serializer.prototype.preserve = function (attributeName) {
        this.preservedAttributes[attributeName] = true;
        return this;
      };

      /**
       * Determines whether or not an attribute should be excluded.
       *
       * If the option excludeByDefault has been set then attributes will default to excluded and will only
       * be included if they have been included using the "only" customization function.
       *
       * If the option excludeByDefault has not been set then attributes must be explicitly excluded using the "exclude"
       * customization function or must be matched by one of the exclusionMatchers.
       *
       * @param attributeName The name of the attribute to check for exclusion
       * @returns {boolean} true if excluded, false otherwise
       */
      Serializer.prototype.isExcludedFromSerialization = function (attributeName) {
        if (this.options.excludeByDefault && !this.inclusions.hasOwnProperty(attributeName) || this.exclusions.hasOwnProperty(attributeName)) {
          return true;
        }

        if (this.options.exclusionMatchers) {
          var excluded = false;

          angular.forEach(this.options.exclusionMatchers, function (matcher) {
            if (angular.isString(matcher)) {
              excluded = excluded || attributeName.indexOf(matcher) === 0;
            } else if (angular.isFunction(matcher)) {
              excluded = excluded || matcher.call(undefined, attributeName);
            } else if (matcher instanceof RegExp) {
              excluded = excluded || matcher.test(attributeName);
            }
          });

          return excluded;
        }

        return false;
      };

      /**
       * Remaps the attribute name to the serialized form which includes:
       *   - checking for exclusion
       *   - remapping to a custom value specified by the rename customization function
       *   - underscoring the name
       *
       * @param attributeName The current attribute name
       * @returns {*} undefined if the attribute should be excluded or the mapped attribute name
       */
      Serializer.prototype.getSerializedAttributeName = function (attributeName) {
        var mappedName = this.serializeMappings[attributeName] || attributeName;

        var mappedNameExcluded = this.isExcludedFromSerialization(mappedName),
            attributeNameExcluded = this.isExcludedFromSerialization(attributeName);

        if (this.options.excludeByDefault) {
          if (mappedNameExcluded && attributeNameExcluded) {
            return undefined;
          }
        } else {
          if (mappedNameExcluded || attributeNameExcluded) {
            return undefined;
          }
        }

        return this.underscore(mappedName);
      };

      /**
       * Determines whether or not an attribute should be excluded from deserialization.
       *
       * By default, we do not exclude any attributes from deserialization.
       *
       * @param attributeName The name of the attribute to check for exclusion
       * @returns {boolean} true if excluded, false otherwise
       */
      Serializer.prototype.isExcludedFromDeserialization = function (attributeName) {
        return false;
      };

      /**
       * Remaps the attribute name to the deserialized form which includes:
       *   - camelizing the name
       *   - checking for exclusion
       *   - remapping to a custom value specified by the rename customization function
       *
       * @param attributeName The current attribute name
       * @returns {*} undefined if the attribute should be excluded or the mapped attribute name
       */
      Serializer.prototype.getDeserializedAttributeName = function (attributeName) {
        var camelizedName = this.camelize(attributeName);

        camelizedName = this.deserializeMappings[attributeName] || this.deserializeMappings[camelizedName] || camelizedName;

        if (this.isExcludedFromDeserialization(attributeName) || this.isExcludedFromDeserialization(camelizedName)) {
          return undefined;
        }

        return camelizedName;
      };

      /**
       * Prepares the data for serialization to JSON.
       *
       * @param data The data to prepare
       * @returns {*} A new object or array that is ready for JSON serialization
       */
      Serializer.prototype.serializeValue = function (data) {
        var result = data,
            self = this;

        if (angular.isArray(data)) {
          result = [];

          angular.forEach(data, function (value) {
            result.push(self.serializeValue(value));
          });
        } else if (angular.isObject(data)) {
          if (angular.isDate(data)) {
            return data;
          }
          result = {};

          angular.forEach(data, function (value, key) {
            // if the value is a function then it can't be serialized to JSON so we'll just skip it
            if (!angular.isFunction(value)) {
              self.serializeAttribute(result, key, value);
            }
          });
        }

        return result;
      };

      /**
       * Transforms an attribute and its value and stores it on the parent data object.  The attribute will be
       * renamed as needed and the value itself will be serialized as well.
       *
       * @param data The object that the attribute will be added to
       * @param attribute The attribute to transform
       * @param value The current value of the attribute
       */
      Serializer.prototype.serializeAttribute = function (data, attribute, value) {
        var serializedAttributeName = this.getSerializedAttributeName(attribute);

        // undefined means the attribute should be excluded from serialization
        if (serializedAttributeName === undefined) {
          return;
        }

        data[serializedAttributeName] = this.serializeValue(value);
      };

      /**
       * Serializes the data by applying various transformations such as:
       *   - Underscoring attribute names
       *   - attribute renaming
       *   - attribute exclusion
       *   - custom attribute addition
       *
       * @param data The data to prepare
       * @returns {*} A new object or array that is ready for JSON serialization
       */
      Serializer.prototype.serialize = function (data) {
        var result = this.serializeValue(data),
            self = this;

        if (angular.isObject(result)) {
          angular.forEach(this.customSerializedAttributes, function (value, key) {
            if (angular.isFunction(value)) {
              value = value.call(data, data);
            }

            self.serializeAttribute(result, key, value);
          });
        }

        return result;
      };

      /**
       * Iterates over the data deserializing each entry on arrays and each key/value on objects.
       *
       * @param data The object to deserialize
       * @param Resource (optional) The resource type to deserialize the result into
       * @returns {*} A new object or an instance of Resource populated with deserialized data.
       */
      Serializer.prototype.deserializeValue = function (data) {
        var result = data,
            self = this;

        if (angular.isArray(data)) {
          result = [];

          angular.forEach(data, function (value) {
            result.push(self.deserializeValue(value));
          });
        } else if (angular.isObject(data)) {
          if (angular.isDate(data)) {
            return data;
          }

          result = {};

          angular.forEach(data, function (value, key) {
            self.deserializeAttribute(result, key, value);
          });
        }

        return result;
      };

      /**
       * Transforms an attribute and its value and stores it on the parent data object.  The attribute will be
       * renamed as needed and the value itself will be deserialized as well.
       *
       * @param data The object that the attribute will be added to
       * @param attribute The attribute to transform
       * @param value The current value of the attribute
       */
      Serializer.prototype.deserializeAttribute = function (data, attribute, value) {
        var attributeName = this.getDeserializedAttributeName(attribute);

        // undefined means the attribute should be excluded from serialization
        if (attributeName === undefined) {
          return;
        }

        // preserved attributes are assigned unmodified
        if (this.preservedAttributes[attributeName]) {
          data[attributeName] = value;
        } else {
          data[attributeName] = this.deserializeValue(value);
        }
      };

      /**
       * Deserializes the data by applying various transformations such as:
       *   - Camelizing attribute names
       *   - attribute renaming
       *   - attribute exclusion
       *   - nested resource creation
       *
       * @param data The object to deserialize
       * @param Resource (optional) The resource type to deserialize the result into
       * @returns {*} A new object or an instance of Resource populated with deserialized data
       */
      Serializer.prototype.deserialize = function (data) {
        // just calls deserializeValue for now so we can more easily add on custom attribute logic for deserialize too
        return this.deserializeValue(data);
      };

      Serializer.prototype.pluralize = function (value) {
        if (this.options.pluralize) {
          return this.options.pluralize(value);
        }
        return value;
      };

      Serializer.prototype.underscore = function (value) {
        if (this.options.underscore) {
          return this.options.underscore(value);
        }
        return value;
      };

      Serializer.prototype.camelize = function (value) {
        if (this.options.camelize) {
          return this.options.camelize(value);
        }
        return value;
      };

      return Serializer;
    }];
  }

  var _SerializerProvider = SerializerProvider;
  SerializerProvider = (0, _a1atscript.Provider)('Serializer')(SerializerProvider) || SerializerProvider;
  return SerializerProvider;
})();

function RequestInterceptor(Serializer) {
  var serializer = new Serializer();

  return function (elem, operation, what) {
    var retElem = elem;
    if (operation === 'post' || operation === 'put') {
      retElem = serializer.serialize(elem);
    }
    return retElem;
  };
}

(0, _a1atscript.applyAnnotation)(RequestInterceptor, _a1atscript.Factory, 'RequestInterceptor', ['Serializer']);

function ResponseInterceptor(Serializer) {
  var serializer = new Serializer();

  return function (data, operation, what, url, response, deferred) {
    return serializer.deserialize(data);
  };
}

(0, _a1atscript.applyAnnotation)(ResponseInterceptor, _a1atscript.Factory, 'ResponseInterceptor', ['Serializer']);

var Serializer = new _a1atscript.Module('serializer', [_xingInflector2['default'], SerializerProvider, RequestInterceptor, ResponseInterceptor]);

exports['default'] = Serializer;
module.exports = exports['default'];

},{"a1atscript":1,"xing-inflector":2}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) {
  var _again = true;_function: while (_again) {
    var object = _x,
        property = _x2,
        receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);if (parent === null) {
        return undefined;
      } else {
        _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
      }
    } else if ('value' in desc) {
      return desc.value;
    } else {
      var getter = desc.get;if (getter === undefined) {
        return undefined;
      }return getter.call(receiver);
    }
  }
};

var _createDecoratedClass = (function () {
  function defineProperties(target, descriptors, initializers) {
    for (var i = 0; i < descriptors.length; i++) {
      var descriptor = descriptors[i];var decorators = descriptor.decorators;var key = descriptor.key;delete descriptor.key;delete descriptor.decorators;descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor || descriptor.initializer) descriptor.writable = true;if (decorators) {
        for (var f = 0; f < decorators.length; f++) {
          var decorator = decorators[f];if (typeof decorator === 'function') {
            descriptor = decorator(target, key, descriptor) || descriptor;
          } else {
            throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator);
          }
        }if (descriptor.initializer !== undefined) {
          initializers[key] = descriptor;continue;
        }
      }Object.defineProperty(target, key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers);if (staticProps) defineProperties(Constructor, staticProps, staticInitializers);return Constructor;
  };
})();

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var _stateInjectorJs = require('./stateInjector.js');

var LoggedInOnlyState = (function () {
  function LoggedInOnlyState() {
    _classCallCheck(this, LoggedInOnlyState);
  }

  // In base Xing, being logged in means you're an admin
  // override AdminOnlyState and TrackAdminState in a more complex app

  _createDecoratedClass(LoggedInOnlyState, [{
    key: 'currentUser',
    decorators: [(0, _stateInjectorJs.Resolve)('$auth', '$state')],
    value: function currentUser($auth, $state) {
      return $auth.validateUser().then(function (user) {
        return user;
      }, function (failure) {
        $state.go('root.inner.sessions');
      });
    }
  }]);

  return LoggedInOnlyState;
})();

exports.LoggedInOnlyState = LoggedInOnlyState;

var AdminOnlyState = (function (_LoggedInOnlyState) {
  _inherits(AdminOnlyState, _LoggedInOnlyState);

  function AdminOnlyState() {
    _classCallCheck(this, AdminOnlyState);

    _get(Object.getPrototypeOf(AdminOnlyState.prototype), 'constructor', this).apply(this, arguments);
  }

  _createDecoratedClass(AdminOnlyState, [{
    key: 'onlyAdmin',
    decorators: [(0, _stateInjectorJs.Resolve)()],
    value: function onlyAdmin() {
      return true;
    }
  }]);

  return AdminOnlyState;
})(LoggedInOnlyState);

exports.AdminOnlyState = AdminOnlyState;

var TrackAdminState = (function () {
  function TrackAdminState() {
    _classCallCheck(this, TrackAdminState);
  }

  _createDecoratedClass(TrackAdminState, [{
    key: 'isAdmin',
    decorators: [(0, _stateInjectorJs.Resolve)('$auth')],
    value: function isAdmin($auth) {
      return $auth.validateUser().then(function (success) {
        return true;
      }, function (failure) {
        return false;
      });
    }
  }]);

  return TrackAdminState;
})();

exports.TrackAdminState = TrackAdminState;

},{"./stateInjector.js":26}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = stateFallback;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _errorLimiterJs = require('./errorLimiter.js');

var _errorLimiterJs2 = _interopRequireDefault(_errorLimiterJs);

var _a1atscript = require('a1atscript');

function stateFallback($rootScope, $state) {
  var limiter = new _errorLimiterJs2['default']($state, "errorFallback");
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    limiter.transitionError(fromState, toState);
  });
  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    limiter.transitionSuccess(fromState, toState);
  });
}

(0, _a1atscript.applyAnnotation)(stateFallback, _a1atscript.Run, "$rootScope", "$state");
module.exports = exports['default'];

},{"./errorLimiter.js":22,"a1atscript":1}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var _a1atscript = require('a1atscript');

var State = (function () {
  function State(stateName) {
    _classCallCheck(this, _State);

    this.stateName = stateName;
  }

  var _State = State;
  State = (0, _a1atscript.ToAnnotation)(State) || State;
  return State;
})();

exports.State = State;

var Resolve = (function () {
  function Resolve() {
    _classCallCheck(this, _Resolve);

    for (var _len = arguments.length, inject = Array(_len), _key = 0; _key < _len; _key++) {
      inject[_key] = arguments[_key];
    }

    this.inject = inject;
  }

  var _Resolve = Resolve;
  Resolve = (0, _a1atscript.ToAnnotation)(Resolve) || Resolve;
  return Resolve;
})();

exports.Resolve = Resolve;

var Inject = (function () {
  function Inject() {
    _classCallCheck(this, _Inject);

    for (var _len2 = arguments.length, inject = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      inject[_key2] = arguments[_key2];
    }

    this.inject = inject;
  }

  // An Injector must define an annotationClass getter and an instantiate method
  var _Inject = Inject;
  Inject = (0, _a1atscript.ToAnnotation)(Inject) || Inject;
  return Inject;
})();

exports.Inject = Inject;

var StateInjector = (function () {
  function StateInjector() {
    _classCallCheck(this, StateInjector);
  }

  _createClass(StateInjector, [{
    key: 'annotateResolves',
    value: function annotateResolves(state) {
      state.resolve = {};
      for (var prop in state) {
        if (typeof state[prop] == "function") {
          var resolveItem = state[prop];
          resolveItem.annotations.forEach(function (annotation) {
            if (annotation instanceof (Resolve.originalClass || Resolve)) {
              resolveItem['$inject'] = annotation.inject;
              state.resolve[prop] = resolveItem;
            }
            if (annotation instanceof (Inject.originalClass || Inject)) {
              resolveItem['$inject'] = annotation.inject;
            }
          });
        }
      }
    }
  }, {
    key: 'instantiate',
    value: function instantiate(module, dependencyList) {
      var injector = this;
      module.config(function ($stateProvider) {
        dependencyList.forEach(function (dependencyObject) {
          var metadata = dependencyObject.metadata;
          var StateClass = dependencyObject.dependency;
          var state = new StateClass();
          injector.annotateResolves(state);
          $stateProvider.state(metadata.stateName, state);
        });
      });
    }
  }, {
    key: 'annotationClass',
    get: function get() {
      return State;
    }
  }]);

  return StateInjector;
})();

exports.StateInjector = StateInjector;

(0, _a1atscript.registerInjector)('state', StateInjector);

},{"a1atscript":1}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = uiRouteLogger;

var _a1atscript = require('a1atscript');

function uiRouteLogger($rootScope, $state, noTable) {
  if (noTable) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      /*jshint -W075 */
      console.log("Routing Event", event.name);
      console.log("From State", fromState.name, fromState.url);
      console.log("To State", toState.name, toState.url);
    });
    $rootScope.$on('$stateNotFound', function (event, missingState) {
      console.log("Routing Event", event.name);
      console.log("Missing state", missingState);
      console.log("Existing states");
      $state.get().forEach(function (state) {
        console.log(state);
      });
      console.log("End of states");
    });
    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
      console.log("Routing Event", event.name);
      console.log("To State", toState.name, toState.url);
    });
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      console.log("Routing Event", event.name);
      console.log("From State", fromState);
      console.log("To State", toState);
      console.log("Error", error);
      console.log(error.stack);
    });
    $rootScope.$on('$viewContentLoaded', function (event) {
      console.log("view event", event.name);
    });
  } else {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      /*jshint -W075 */
      console.group();
      console.table({ event: event });
      console.table({ fromState: fromState, toState: toState });
      console.table({ fromParams: fromParams, toParams: toParams });
      console.groupEnd();
    });
    $rootScope.$on('$stateNotFound', function (event, missingState) {
      console.table({ event: event, missingState: missingState });
      console.table($state.get());
    });
    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
      console.group();
      console.table({ event: event });
      console.table({ toState: toState });
      console.groupEnd();
    });
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      console.group();
      /*jshint -W075 */
      console.table({ event: event });
      console.table({ error: error });
      console.table({ fromState: fromState, toState: toState });
      //console.table({fromParams, toParams});
      console.log("ui-router error", error.stack);
      console.groupEnd();
    });
  }
}

(0, _a1atscript.applyAnnotation)(uiRouteLogger, _a1atscript.AsModule, 'route-logger');
(0, _a1atscript.applyAnnotation)(uiRouteLogger, _a1atscript.Run, '$rootScope', '$state');
module.exports = exports['default'];

},{"a1atscript":1}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = whenGoto;

function whenGoto($location) {
  var search = $location.search();
  if (search.goto) {
    var target = search.goto;

    var queryParts = [];
    for (var key in search) {
      if (search.hasOwnProperty(key) && key != "goto") {
        queryParts.push([key, search[key]].join("="));
      }
    }

    if (queryParts.length > 0) {
      target = [target, queryParts.join("&")].join("?");
    }

    return target;
  } else {
    return false;
  }
}

module.exports = exports["default"];

},{}]},{},[3])(3)
});