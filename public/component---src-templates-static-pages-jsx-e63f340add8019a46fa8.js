(self.webpackChunkcodemaster=self.webpackChunkcodemaster||[]).push([[56],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function u(t,r,f){return o()?(e.exports=u=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=u=function(e,t,r){var o=[null];o.push.apply(o,t);var u=new(Function.bind.apply(e,o));return r&&n(u,r.prototype),u},e.exports.__esModule=!0,e.exports.default=e.exports),u.apply(null,arguments)}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),u=r(379),f=r(8206);e.exports=function(e){return n(e)||o(e)||u(e)||f()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},523:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function u(e,f){if(e===f)return!0;if(e&&f&&"object"==typeof e&&"object"==typeof f){if(e.constructor!==f.constructor)return!1;var c,a,i,s;if(Array.isArray(e)){if((c=e.length)!=f.length)return!1;for(a=c;0!=a--;)if(!u(e[a],f[a]))return!1;return!0}if(r&&e instanceof Map&&f instanceof Map){if(e.size!==f.size)return!1;for(s=e.entries();!(a=s.next()).done;)if(!f.has(a.value[0]))return!1;for(s=e.entries();!(a=s.next()).done;)if(!u(a.value[1],f.get(a.value[0])))return!1;return!0}if(n&&e instanceof Set&&f instanceof Set){if(e.size!==f.size)return!1;for(s=e.entries();!(a=s.next()).done;)if(!f.has(a.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(f)){if((c=e.length)!=f.length)return!1;for(a=c;0!=a--;)if(e[a]!==f[a])return!1;return!0}if(e.constructor===RegExp)return e.source===f.source&&e.flags===f.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===f.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===f.toString();if((c=(i=Object.keys(e)).length)!==Object.keys(f).length)return!1;for(a=c;0!=a--;)if(!Object.prototype.hasOwnProperty.call(f,i[a]))return!1;if(t&&e instanceof Element)return!1;for(a=c;0!=a--;)if(("_owner"!==i[a]&&"__v"!==i[a]&&"__o"!==i[a]||!e.$$typeof)&&!u(e[i[a]],f[i[a]]))return!1;return!0}return e!=e&&f!=f}e.exports=function(e,t){try{return u(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},6725:function(e,t,r){var n=r(2990);e.exports={MDXRenderer:n}},2990:function(e,t,r){var n=r(9100),o=r(319),u=r(9713),f=r(7316),c=["scope","children"];function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r(7294),l=r(3497).mdx,p=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,u=f(e,c),a=p(t),x=s.useMemo((function(){if(!r)return null;var e=i({React:s,mdx:l},a),t=Object.keys(e),u=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(u)))}),[r,t]);return s.createElement(x,i({},u))}},3730:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(6725),u=r(6486),f=r(119);t.default=function(e){var t=e.data.file.childMdx,r=t.body,c=t.frontmatter;return n.createElement(f.Z,null,n.createElement(u.Z,{title:c.title}),n.createElement("main",{className:"my-10 py-6 px-4 mx-auto md:w-5/6 lg:4/6"},n.createElement("h1",{className:"text-center text-2xl md:text-3xl font-extrabold my-8"},c.title),n.createElement("section",{className:"p-4 site-page text-gray-400"},n.createElement(o.MDXRenderer,null,r))))}}}]);
//# sourceMappingURL=component---src-templates-static-pages-jsx-e63f340add8019a46fa8.js.map