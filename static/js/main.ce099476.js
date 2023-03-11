/*! For license information please see main.ce099476.js.LICENSE.txt */
!function(){"use strict";var e={482:function(e,t,r){var n=r(867),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,u={},s=null,f=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(f=t.ref),t)i.call(t,n)&&!a.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:f,props:u,_owner:c.current}}t.jsx=s,t.jsxs=s},285:function(e,t){var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),a=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}function b(){}function _(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var j=_.prototype=new b;j.constructor=_,h(j,v.prototype),j.isPureReactComponent=!0;var x=Array.isArray,w=Object.prototype.hasOwnProperty,S={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function g(e,t,n){var o,u={},i=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,o)&&!R.hasOwnProperty(o)&&(u[o]=t[o]);var a=arguments.length-2;if(1===a)u.children=n;else if(1<a){for(var s=Array(a),f=0;f<a;f++)s[f]=arguments[f+2];u.children=s}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===u[o]&&(u[o]=a[o]);return{$$typeof:r,type:e,key:i,ref:c,props:u,_owner:S.current}}function k(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var O=/\/+/g;function E(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,u,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case r:case n:a=!0}}if(a)return i=i(a=e),e=""===u?"."+E(a,0):u,x(i)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),C(i,t,o,"",(function(e){return e}))):null!=i&&(k(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),t.push(i)),1;if(a=0,u=""===u?".":u+":",x(e))for(var s=0;s<e.length;s++){var f=u+E(c=e[s],s);a+=C(c,t,o,f,i)}else if(f=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"===typeof f)for(e=f.call(e),s=0;!(c=e.next()).done;)a+=C(c=c.value,t,o,f=u+E(c,s++),i);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function P(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function N(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},T={transition:null},I={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:T,ReactCurrentOwner:S};t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=i,t.PureComponent=_,t.StrictMode=u,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=S.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)w.call(t,s)&&!R.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==a?a[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){a=Array(s);for(var f=0;f<s;f++)a[f]=arguments[f+2];o.children=a}return{$$typeof:r,type:e.type,key:u,ref:i,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=g,t.createFactory=function(e){var t=g.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,r){return $.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,r){return $.current.useReducer(e,t,r)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return $.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},867:function(e,t,r){e.exports=r(285)},834:function(e,t,r){e.exports=r(482)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n](u,u.exports,r),u.exports}r.p="/_masterchef/",function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===t(r)?r:String(r)}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}function u(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function s(e,r){if(r&&("object"===t(r)||"function"===typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=a(e);if(t){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}var l=r.p+"static/media/magnifying_glass.dc3c494684e27efd18af.jpg",p=r.p+"static/media/waitress_food.16246de65f3157844b7f.jpg",y=r(834),d=function(t){c(n,React.Component);var r=f(n);function n(){return e(this,n),r.apply(this,arguments)}return u(n,[{key:"render",value:function(){return(0,y.jsx)("div",{className:"main",id:"section1",children:(0,y.jsx)("div",{className:"container",children:(0,y.jsxs)("div",{className:"header-container",children:[(0,y.jsx)("p",{id:"welcome-msg",children:"Welcome to"}),(0,y.jsx)("p",{id:"masterchef-msg",children:"Masterchef"}),(0,y.jsx)("section",{id:"section04",className:"demo",children:(0,y.jsx)("a",{href:"#section2",children:(0,y.jsx)("span",{})})})]})})})}}]),n}(),h=function(t){c(n,React.Component);var r=f(n);function n(){return e(this,n),r.apply(this,arguments)}return u(n,[{key:"render",value:function(){return(0,y.jsxs)("div",{className:"card",children:[(0,y.jsx)("img",{src:p,alt:"Recipe Recommendations",style:{width:"100%"}}),(0,y.jsx)("div",{className:"about-container",children:(0,y.jsxs)("a",{className:"a-optionlink",href:"/ingredients",children:[(0,y.jsx)("h1",{className:"card-title",children:(0,y.jsx)("b",{children:"Get Recipe Recommendations"})}),(0,y.jsx)("p",{className:"card-caption",children:"Need help figuring out what to cook? We've got you covered. Tell us what ingredients you want to use from your pantry, a possible cuisine preference, the type of meal you're looking to make and finally how long you can cook, and presto - find the recipes meant for you today."})]})})]})}}]),n}(),m=function(t){c(n,React.Component);var r=f(n);function n(){return e(this,n),r.apply(this,arguments)}return u(n,[{key:"render",value:function(){return(0,y.jsxs)("div",{className:"card",children:[(0,y.jsx)("img",{src:l,alt:"Search Recipes",style:{width:"100%"}}),(0,y.jsx)("div",{className:"about-container",children:(0,y.jsxs)("a",{className:"a-optionlink",href:"/searchResults",children:[(0,y.jsx)("h1",{className:"card-title",children:(0,y.jsx)("b",{children:"Search for Recipes"})}),(0,y.jsx)("p",{className:"card-caption",children:"Already have an idea of what you want to make today? Search for a favorite recipe from our collection and get top matches to get started."})]})})]})}}]),n}(),v=function(t){c(n,React.Component);var r=f(n);function n(){return e(this,n),r.apply(this,arguments)}return u(n,[{key:"render",value:function(){return(0,y.jsx)("div",{className:"main",id:"section2",children:(0,y.jsxs)("div",{className:"card-container",children:[(0,y.jsx)(h,{}),(0,y.jsx)(m,{})]})})}}]),n}(),b=function(t){c(n,React.Component);var r=f(n);function n(){return e(this,n),r.apply(this,arguments)}return u(n,[{key:"render",value:function(){return(0,y.jsxs)(React.Fragment,{children:[(0,y.jsx)(d,{}),(0,y.jsx)(v,{})]})}}]),n}(),_=(0,y.jsx)(b,{});ReactDOM.render(_,document.getElementById("content"))}()}();
//# sourceMappingURL=main.ce099476.js.map