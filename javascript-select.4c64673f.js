parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FRWC":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function n(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}function s(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Select=void 0;var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,s=null!=t?t:"placeholder по умолчанию",i=e.map(function(e){var t="";return e.id===n&&(s=e.value,t="selected"),'\n\t\t<li class="select__item '.concat(t,'" data-type="item" data-n="').concat(e.id,'">').concat(e.value,"</li>\n\t\t")}).join("");return'\n\t<div class="select__backdrop" data-type="backdrop"></div>\n\t<div class="select__input" data-type="input">\n\t<span data-type="value">'.concat(s,'</span>\n\t<i class="fa fa-chevron-down" data-type="arrow"></i>\n</div>\n<div class="select__dropdown">\n\t<ul class="select__list">\n\t').concat(i,"\n\t</ul>\n</div>\n\t")},a=new WeakSet,l=new WeakSet,c=function(){function t(n,i){e(this,t),l.add(this),a.add(this),this.$el=document.querySelector(n),this.options=i,this.selectedId=i.selectedId,s(this,a,o).call(this),s(this,l,r).call(this)}return n(t,[{key:"clickHandler",value:function(e){var t=e.target.dataset.type;if("input"===t)this.toggle();else if("item"===t){var n=e.target.dataset.n;this.select(n)}else"backdrop"===t&&this.close()}},{key:"select",value:function(e){this.selectedId=e,this.$value.textContent=this.current.value,this.$el.querySelector('[data-n="'.concat(e,'"]')).classList.contains("selected")?(this.$el.querySelector('[data-n="'.concat(e,'"]')).classList.remove("selected"),this.$value.innerHTML=this.options.placeholder):(this.$el.querySelectorAll('[data-type="item"]').forEach(function(e){e.classList.remove("selected")}),this.$el.querySelector('[data-n="'.concat(e,'"]')).classList.add("selected"),this.options.onSelect&&this.options.onSelect(this.current)),this.close()}},{key:"toggle",value:function(){this.isOpen?this.close():this.open()}},{key:"open",value:function(){this.$el.classList.add("open"),this.$arrow.setAttribute("class","fa fa-chevron-up")}},{key:"close",value:function(){this.$el.classList.remove("open"),this.$arrow.setAttribute("class","fa fa-chevron-down")}},{key:"destroy",value:function(){this.$el.removeEventListener("click",this.clickHandler),this.$el.innerHTML=""}},{key:"isOpen",get:function(){return this.$el.classList.contains("open")}},{key:"current",get:function(){var e=this;return this.options.data.find(function(t){return t.id===e.selectedId})}}]),t}();exports.Select=c;var o=function(){var e=this.options,t=e.placeholder,n=e.data;this.$el.classList.add("select"),this.$el.innerHTML=i(n,t,this.selectedId)},r=function(){this.clickHandler=this.clickHandler.bind(this),this.$el.addEventListener("click",this.clickHandler),this.$arrow=this.$el.querySelector('[data-type = "arrow"]'),this.$value=this.$el.querySelector('[data-type = "value"]')};
},{}],"fOgl":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./select/select");require("./select/styles.scss");var l=new e.Select("#select",{placeholder:"выбрать элемент",data:[{id:"1",value:"React"},{id:"2",value:"Angular"},{id:"3",value:"Vue"},{id:"4",value:"React Native"},{id:"5",value:"Next"},{id:"6",value:"Nest"}],onSelect:function(e){console.log("Selected Item",e)}});window.s=l;
},{"./select/select":"FRWC","./select/styles.scss":"fOgl"}]},{},["Focm"], null)