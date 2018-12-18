(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["radial-progress-bar"] = factory();
	else
		root["radial-progress-bar"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8db2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f8e1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadialProgressBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8db2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadialProgressBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadialProgressBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadialProgressBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca0e2238-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/RadialProgressBar.vue?vue&type=template&id=63bc1fac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"radial-progress-container",style:(_vm.containerStyle)},[_c('div',{staticClass:"radial-progress-inner",style:(_vm.innerCircleStyle)},[_vm._t("default")],2),_c('svg',{staticClass:"radial-progress-bar",attrs:{"width":_vm.diameter,"height":_vm.diameter,"version":"1.1","xmlns":"http://www.w3.org/2000/svg"}},[_c('defs',[_c('radialGradient',{attrs:{"id":'radial-gradient' + _vm._uid,"fx":_vm.gradient.fx,"fy":_vm.gradient.fy,"cx":_vm.gradient.cx,"cy":_vm.gradient.cy,"r":_vm.gradient.r}},[_c('stop',{attrs:{"offset":"30%","stop-color":_vm.startColor}}),_c('stop',{attrs:{"offset":"100%","stop-color":_vm.stopColor}})],1)],1),_c('circle',{style:(_vm.strokeStyle),attrs:{"r":_vm.innerCircleRadius,"cx":_vm.radius,"cy":_vm.radius,"fill":"transparent","stroke":_vm.innerStrokeColor,"stroke-dasharray":_vm.circumference,"stroke-dashoffset":"0","stroke-linecap":"round"}}),_c('circle',{style:(_vm.progressStyle),attrs:{"transform":'rotate(270, ' + _vm.radius + ',' + _vm.radius + ')',"r":_vm.innerCircleRadius,"cx":_vm.radius,"cy":_vm.radius,"fill":"transparent","stroke":'url(#radial-gradient' + _vm._uid + ')',"stroke-dasharray":_vm.circumference,"stroke-dashoffset":_vm.circumference,"stroke-linecap":"round"}})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/RadialProgressBar.vue?vue&type=template&id=63bc1fac&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/RadialProgressBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var RadialProgressBarvue_type_script_lang_js_ = ({
  props: {
    diameter: {
      type: Number,
      required: false,
      default: 200
    },
    totalSteps: {
      type: Number,
      required: true,
      default: 10
    },
    completedSteps: {
      type: Number,
      required: true,
      default: 0
    },
    startColor: {
      type: String,
      required: false,
      default: '#bbff42'
    },
    stopColor: {
      type: String,
      required: false,
      default: '#429321'
    },
    strokeWidth: {
      type: Number,
      required: false,
      default: 10
    },
    animateSpeed: {
      type: Number,
      required: false,
      default: 1000
    },
    innerStrokeColor: {
      type: String,
      required: false,
      default: '#323232'
    },
    fps: {
      type: Number,
      required: false,
      default: 60
    },
    timingFunc: {
      type: String,
      required: false,
      default: 'linear'
    }
  },

  data () {
    return {
      gradient: {
        fx: 0.99,
        fy: 0.5,
        cx: 0.5,
        cy: 0.5,
        r: 0.65
      },
      gradientAnimation: null,
      currentAngle: 0,
      strokeDashoffset: 0
    }
  },

  computed: {
    radius () {
      return this.diameter / 2
    },

    circumference () {
      return Math.PI * this.innerCircleDiameter
    },

    stepSize () {
      if (this.totalSteps === 0) {
        return 0
      }

      return 100 / this.totalSteps
    },

    finishedPercentage () {
      return this.stepSize * this.completedSteps
    },

    circleSlice () {
      return 2 * Math.PI / this.totalSteps
    },

    animateSlice () {
      return this.circleSlice / this.totalPoints
    },

    innerCircleDiameter () {
      return this.diameter - (this.strokeWidth * 2)
    },

    innerCircleRadius () {
      return this.innerCircleDiameter / 2
    },

    totalPoints () {
      return this.animateSpeed / this.animationIncrements
    },

    animationIncrements () {
      return 1000 / this.fps
    },

    hasGradient () {
      return this.startColor !== this.stopColor
    },

    containerStyle () {
      return {
        height: `${this.diameter}px`,
        width: `${this.diameter}px`
      }
    },

    progressStyle () {
      return {
        height: `${this.diameter}px`,
        width: `${this.diameter}px`,
        strokeWidth: `${this.strokeWidth}px`,
        strokeDashoffset: this.strokeDashoffset,
        transition: `stroke-dashoffset ${this.animateSpeed}ms ${this.timingFunc}`
      }
    },

    strokeStyle () {
      return {
        height: `${this.diameter}px`,
        width: `${this.diameter}px`,
        strokeWidth: `${this.strokeWidth}px`
      }
    },

    innerCircleStyle () {
      return {
        width: `${this.innerCircleDiameter}px`
      }
    }
  },

  methods: {
    getStopPointsOfCircle (steps) {
      const points = []

      for (let i = 0; i < steps; i++) {
        const angle = this.circleSlice * i
        points.push(this.getPointOfCircle(angle))
      }

      return points
    },

    getPointOfCircle (angle) {
      const radius = 0.5

      const x = radius + (radius * Math.cos(angle))
      const y = radius + (radius * Math.sin(angle))

      return { x, y }
    },

    gotoPoint () {
      const point = this.getPointOfCircle(this.currentAngle)

      this.gradient.fx = point.x
      this.gradient.fy = point.y
    },

    changeProgress ({ isAnimate = true }) {
      this.strokeDashoffset = ((100 - this.finishedPercentage) / 100) * this.circumference

      if (this.gradientAnimation) {
        clearInterval(this.gradientAnimation)
      }

      if (!isAnimate) {
        this.gotoNextStep()
        return
      }

      const angleOffset = (this.completedSteps - 1) * this.circleSlice
      let i = (this.currentAngle - angleOffset) / this.animateSlice
      const incrementer = Math.abs(i - this.totalPoints) / this.totalPoints
      const isMoveForward = i < this.totalPoints

      this.gradientAnimation = setInterval(() => {
        if (isMoveForward && i >= this.totalPoints ||
            !isMoveForward && i < this.totalPoints) {
          clearInterval(this.gradientAnimation)
          return
        }

        this.currentAngle = angleOffset + (this.animateSlice * i)
        this.gotoPoint()

        i += isMoveForward ? incrementer : -incrementer
      }, this.animationIncrements)
    },

    gotoNextStep () {
      this.currentAngle = this.completedSteps * this.circleSlice
      this.gotoPoint()
    }
  },

  watch: {
    totalSteps () {
      this.changeProgress({ isAnimate: true })
    },

    completedSteps () {
      this.changeProgress({ isAnimate: true })
    },

    diameter () {
      this.changeProgress({ isAnimate: true })
    },

    strokeWidth () {
      this.changeProgress({ isAnimate: true })
    }
  },

  created () {
    this.changeProgress({ isAnimate: false })
  }
});

// CONCATENATED MODULE: ./src/RadialProgressBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_RadialProgressBarvue_type_script_lang_js_ = (RadialProgressBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/RadialProgressBar.vue?vue&type=style&index=0&lang=css&
var RadialProgressBarvue_type_style_index_0_lang_css_ = __webpack_require__("f8e1");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/RadialProgressBar.vue






/* normalize component */

var component = normalizeComponent(
  src_RadialProgressBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "RadialProgressBar.vue"
/* harmony default export */ var RadialProgressBar = (component.exports);
// CONCATENATED MODULE: ./build.js


function install(Vue) {
  Vue.component('radial-progress-bar', RadialProgressBar)
  window.RadialProgressBar = RadialProgressBar
}



// Plugin
const build_plugin = {
  install
};

/* harmony default export */ var build = (build_plugin);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(build_plugin)
}

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport RadialProgressBar */__webpack_require__.d(__webpack_exports__, "RadialProgressBar", function() { return RadialProgressBar; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (build);



/***/ })

/******/ });
});
//# sourceMappingURL=radial-progress-bar.umd.js.map