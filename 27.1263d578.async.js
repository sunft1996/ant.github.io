(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{"+QRC":function(e,t,n){"use strict";var r=n("E9nw"),o={"text/plain":"Text","text/html":"Url",default:"Text"},a="Copy to clipboard: #{key}, Enter";function i(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function c(e,t){var n,c,l,s,u,p,f=!1;t||(t={}),n=t.debug||!1;try{l=r(),s=document.createRange(),u=document.getSelection(),p=document.createElement("span"),p.textContent=e,p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o["default"];window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(p),s.selectNodeContents(p),u.addRange(s);var d=document.execCommand("copy");if(!d)throw new Error("copy command was unsuccessful");f=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),c=i("message"in t?t.message:a),window.prompt(c,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(s):u.removeAllRanges()),p&&document.body.removeChild(p),l()}return f}e.exports=c},"3wW7":function(e,t,n){e.exports={"ant-list":"ant-list","ant-list-pagination":"ant-list-pagination","ant-pagination-options":"ant-pagination-options","ant-list-more":"ant-list-more","ant-list-spin":"ant-list-spin","ant-list-empty-text":"ant-list-empty-text","ant-list-items":"ant-list-items","ant-list-item":"ant-list-item","ant-list-item-content":"ant-list-item-content","ant-list-item-meta":"ant-list-item-meta","ant-list-item-meta-avatar":"ant-list-item-meta-avatar","ant-list-item-meta-content":"ant-list-item-meta-content","ant-list-item-meta-title":"ant-list-item-meta-title","ant-list-item-meta-description":"ant-list-item-meta-description","ant-list-item-action":"ant-list-item-action","ant-list-item-action-split":"ant-list-item-action-split","ant-list-header":"ant-list-header","ant-list-footer":"ant-list-footer","ant-list-empty":"ant-list-empty","ant-list-split":"ant-list-split","ant-list-loading":"ant-list-loading","ant-list-spin-nested-loading":"ant-list-spin-nested-loading","ant-list-something-after-last-item":"ant-list-something-after-last-item","ant-spin-container":"ant-spin-container","ant-list-lg":"ant-list-lg","ant-list-sm":"ant-list-sm","ant-list-vertical":"ant-list-vertical","ant-list-item-main":"ant-list-item-main","ant-list-item-extra":"ant-list-item-extra","ant-list-grid":"ant-list-grid","ant-col":"ant-col","ant-list-item-no-flex":"ant-list-item-no-flex","ant-list-bordered":"ant-list-bordered"}},"4Ofr":function(e,t,n){e.exports={themeColor:"antd-pro-components-setting-drawer-theme-color-themeColor",title:"antd-pro-components-setting-drawer-theme-color-title",colorBlock:"antd-pro-components-setting-drawer-theme-color-colorBlock"}},BFsb:function(e,t,n){e.exports={content:"antd-pro-components-setting-drawer-index-content",blockChecbox:"antd-pro-components-setting-drawer-index-blockChecbox",item:"antd-pro-components-setting-drawer-index-item",selectIcon:"antd-pro-components-setting-drawer-index-selectIcon",color_block:"antd-pro-components-setting-drawer-index-color_block",title:"antd-pro-components-setting-drawer-index-title",handle:"antd-pro-components-setting-drawer-index-handle",productionHint:"antd-pro-components-setting-drawer-index-productionHint"}},Ctgt:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("17x9"),i=n.n(a),c=n("VCL8");function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=u(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function h(e){var t=v();return function(){var n,r=w(e);if(t){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=n("TSYQ"),k=function(e){m(n,e);var t=h(n);function n(e){var r;p(this,n),r=t.call(this,e),C(b(r),"handleClick",function(e){var t=r.state.checked,n=r.props.onClick,o=!t;r.setChecked(o,e),n&&n(o,e)}),C(b(r),"handleKeyDown",function(e){37===e.keyCode?r.setChecked(!1,e):39===e.keyCode&&r.setChecked(!0,e)}),C(b(r),"handleMouseUp",function(e){var t=r.props.onMouseUp;r.node&&r.node.blur(),t&&t(e)}),C(b(r),"saveNode",function(e){r.node=e});var o=!1;return o="checked"in e?!!e.checked:!!e.defaultChecked,r.state={checked:o},r}return d(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus()}},{key:"setChecked",value:function(e,t){var n=this.props,r=n.disabled,o=n.onChange;r||("checked"in this.props||this.setState({checked:e}),o&&o(e,t))}},{key:"focus",value:function(){this.node.focus()}},{key:"blur",value:function(){this.node.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.className,r=t.prefixCls,a=t.disabled,i=t.loadingIcon,c=t.checkedChildren,u=t.unCheckedChildren,p=s(t,["className","prefixCls","disabled","loadingIcon","checkedChildren","unCheckedChildren"]),f=this.state.checked,d=O((e={},C(e,n,!!n),C(e,r,!0),C(e,"".concat(r,"-checked"),f),C(e,"".concat(r,"-disabled"),a),e));return o.a.createElement("button",l({},p,{type:"button",role:"switch","aria-checked":f,disabled:a,className:d,ref:this.saveNode,onKeyDown:this.handleKeyDown,onClick:this.handleClick,onMouseUp:this.handleMouseUp}),i,o.a.createElement("span",{className:"".concat(r,"-inner")},f?c:u))}}],[{key:"getDerivedStateFromProps",value:function(e){var t={},n=e.checked;return"checked"in e&&(t.checked=!!n),t}}]),n}(r["Component"]);k.propTypes={className:i.a.string,prefixCls:i.a.string,disabled:i.a.bool,checkedChildren:i.a.any,unCheckedChildren:i.a.any,onChange:i.a.func,onMouseUp:i.a.func,onClick:i.a.func,tabIndex:i.a.number,checked:i.a.bool,defaultChecked:i.a.bool,autoFocus:i.a.bool,loadingIcon:i.a.node},k.defaultProps={prefixCls:"rc-switch",checkedChildren:null,unCheckedChildren:null,className:"",defaultChecked:!1},Object(c["polyfill"])(k),t["default"]=k},E9nw:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},P5Jw:function(e,t,n){"use strict";var r=n("rHrb"),o=r.CopyToClipboard;o.CopyToClipboard=o,e.exports=o},PceP:function(e,t,n){"use strict";n.r(t);n("bbsP");var r=n("/wGt"),o=(n("fOrg"),n("+KLJ")),a=(n("+L6B"),n("2/Rp")),i=(n("miYZ"),n("tsqr")),c=(n("/zsF"),n("PArb")),l=(n("Pwec"),n("CtXQ")),s=(n("5Dmo"),n("3S7+")),u=(n("cIOH"),n("3wW7"),n("R9oj"),n("T2oS"),n("DjyN"),n("1GLa"),n("q1tI")),p=n.n(u),f=n("17x9"),d=n("eHJ2"),m=n.n(d),y=n("BGR+"),h=n("W9HT"),g=n("H84U"),b=n("NUBc"),v=n("qrJ5"),w=n("/kpp"),C=n("0n0R");function O(e){"@babel/helpers - typeof";return O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return t&&x(e.prototype,t),n&&x(e,n),e}function j(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function N(e){var t=D();return function(){var n,r=I(e);if(t){var o=I(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return R(this,n)}}function R(e,t){return!t||"object"!==O(t)&&"function"!==typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}function M(){return M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(this,arguments)}var T=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},z=function(e){return u["createElement"](g["a"],null,function(t){var n=t.getPrefixCls,r=e.prefixCls,o=e.className,a=e.avatar,i=e.title,c=e.description,l=T(e,["prefixCls","className","avatar","title","description"]),s=n("list",r),p=m()("".concat(s,"-item-meta"),o),f=u["createElement"]("div",{className:"".concat(s,"-item-meta-content")},i&&u["createElement"]("h4",{className:"".concat(s,"-item-meta-title")},i),c&&u["createElement"]("div",{className:"".concat(s,"-item-meta-description")},c));return u["createElement"]("div",M({},l,{className:p}),a&&u["createElement"]("div",{className:"".concat(s,"-item-meta-avatar")},a),(i||c)&&f)})};function A(e,t){return e[t]&&Math.floor(24/e[t])}var L=function(e){j(n,e);var t=N(n);function n(){var e;return E(this,n),e=t.apply(this,arguments),e.renderItem=function(t){var n=t.getPrefixCls,r=e.context,o=r.grid,a=r.itemLayout,i=e.props,c=i.prefixCls,l=i.children,s=i.actions,p=i.extra,f=i.className,d=T(i,["prefixCls","children","actions","extra","className"]),y=n("list",c),h=s&&s.length>0&&u["createElement"]("ul",{className:"".concat(y,"-item-action"),key:"actions"},s.map(function(e,t){return u["createElement"]("li",{key:"".concat(y,"-item-action-").concat(t)},e,t!==s.length-1&&u["createElement"]("em",{className:"".concat(y,"-item-action-split")}))})),g=o?"div":"li",b=u["createElement"](g,M({},d,{className:m()("".concat(y,"-item"),f,k({},"".concat(y,"-item-no-flex"),!e.isFlexMode()))}),"vertical"===a&&p?[u["createElement"]("div",{className:"".concat(y,"-item-main"),key:"content"},l,h),u["createElement"]("div",{className:"".concat(y,"-item-extra"),key:"extra"},p)]:[l,h,Object(C["a"])(p,{key:"extra"})]);return o?u["createElement"](w["a"],{span:A(o,"column"),xs:A(o,"xs"),sm:A(o,"sm"),md:A(o,"md"),lg:A(o,"lg"),xl:A(o,"xl"),xxl:A(o,"xxl")},b):b},e}return S(n,[{key:"isItemContainsTextNodeAndNotSingular",value:function(){var e,t=this.props.children;return u["Children"].forEach(t,function(t){"string"===typeof t&&(e=!0)}),e&&u["Children"].count(t)>1}},{key:"isFlexMode",value:function(){var e=this.props.extra,t=this.context.itemLayout;return"vertical"===t?!!e:!this.isItemContainsTextNodeAndNotSingular()}},{key:"render",value:function(){return u["createElement"](g["a"],null,this.renderItem)}}]),n}(u["Component"]);function H(e){"@babel/helpers - typeof";return H="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function F(e){return W(e)||J(e)||U(e)||B()}function B(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function U(e,t){if(e){if("string"===typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(e,t):void 0}}function J(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function W(e){if(Array.isArray(e))return q(e)}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function K(){return K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K.apply(this,arguments)}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e,t,n){return t&&Y(e.prototype,t),n&&Y(e,n),e}function G(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}function V(e,t){return V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},V(e,t)}function $(e){var t=ne();return function(){var n,r=re(e);if(t){var o=re(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ee(this,n)}}function ee(e,t){return!t||"object"!==H(t)&&"function"!==typeof t?te(e):t}function te(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ne(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function re(e){return re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},re(e)}L.Meta=z,L.contextTypes={grid:f["any"],itemLayout:f["string"]};var oe=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},ae=function(e){G(n,e);var t=$(n);function n(e){var r;X(this,n),r=t.call(this,e),r.defaultPaginationProps={current:1,total:0},r.keys={},r.onPaginationChange=r.triggerPaginationEvent("onChange"),r.onPaginationShowSizeChange=r.triggerPaginationEvent("onShowSizeChange"),r.renderItem=function(e,t){var n,o=r.props,a=o.renderItem,i=o.rowKey;return a?(n="function"===typeof i?i(e):"string"===typeof i?e[i]:e.key,n||(n="list-item-".concat(t)),r.keys[t]=n,a(e,t)):null},r.renderEmpty=function(e,t){var n=r.props.locale;return u["createElement"]("div",{className:"".concat(e,"-empty-text")},n&&n.emptyText||t("List"))},r.renderList=function(e){var t,n=e.getPrefixCls,o=e.renderEmpty,a=r.state,i=a.paginationCurrent,c=a.paginationSize,l=r.props,s=l.prefixCls,p=l.bordered,f=l.split,d=l.className,g=l.children,w=l.itemLayout,C=l.loadMore,O=l.pagination,k=l.grid,E=l.dataSource,x=void 0===E?[]:E,S=l.size,j=l.header,P=l.footer,N=l.loading,R=oe(l,["prefixCls","bordered","split","className","children","itemLayout","loadMore","pagination","grid","dataSource","size","header","footer","loading"]),_=n("list",s),D=N;"boolean"===typeof D&&(D={spinning:D});var I=D&&D.spinning,M="";switch(S){case"large":M="lg";break;case"small":M="sm";break;default:break}var T=m()(_,d,(t={},Q(t,"".concat(_,"-vertical"),"vertical"===w),Q(t,"".concat(_,"-").concat(M),M),Q(t,"".concat(_,"-split"),f),Q(t,"".concat(_,"-bordered"),p),Q(t,"".concat(_,"-loading"),I),Q(t,"".concat(_,"-grid"),k),Q(t,"".concat(_,"-something-after-last-item"),r.isSomethingAfterLastItem()),t)),z=K(K(K({},r.defaultPaginationProps),{total:x.length,current:i,pageSize:c}),O||{}),A=Math.ceil(z.total/z.pageSize);z.current>A&&(z.current=A);var L,H=O?u["createElement"]("div",{className:"".concat(_,"-pagination")},u["createElement"](b["a"],K({},z,{onChange:r.onPaginationChange,onShowSizeChange:r.onPaginationShowSizeChange}))):null,B=F(x);if(O&&x.length>(z.current-1)*z.pageSize&&(B=F(x).splice((z.current-1)*z.pageSize,z.pageSize)),L=I&&u["createElement"]("div",{style:{minHeight:53}}),B.length>0){var U=B.map(function(e,t){return r.renderItem(e,t)}),J=[];u["Children"].forEach(U,function(e,t){J.push(u["cloneElement"](e,{key:r.keys[t]}))}),L=k?u["createElement"](v["a"],{gutter:k.gutter},J):u["createElement"]("ul",{className:"".concat(_,"-items")},J)}else g||I||(L=r.renderEmpty(_,o));var W=z.position||"bottom";return u["createElement"]("div",K({className:T},Object(y["a"])(R,["rowKey","renderItem","locale"])),("top"===W||"both"===W)&&H,j&&u["createElement"]("div",{className:"".concat(_,"-header")},j),u["createElement"](h["a"],D,L,g),P&&u["createElement"]("div",{className:"".concat(_,"-footer")},P),C||("bottom"===W||"both"===W)&&H)};var o=e.pagination,a=o&&"object"===H(o)?o:{};return r.state={paginationCurrent:a.defaultCurrent||1,paginationSize:a.defaultPageSize||10},r}return Z(n,[{key:"getChildContext",value:function(){return{grid:this.props.grid,itemLayout:this.props.itemLayout}}},{key:"triggerPaginationEvent",value:function(e){var t=this;return function(n,r){var o=t.props.pagination;t.setState({paginationCurrent:n,paginationSize:r}),o&&o[e]&&o[e](n,r)}}},{key:"isSomethingAfterLastItem",value:function(){var e=this.props,t=e.loadMore,n=e.pagination,r=e.footer;return!!(t||n||r)}},{key:"render",value:function(){return u["createElement"](g["a"],null,this.renderList)}}]),n}(u["Component"]);ae.Item=L,ae.childContextTypes={grid:f["any"],itemLayout:f["string"]},ae.defaultProps={dataSource:[],bordered:!1,split:!0,loading:!1,pagination:!1};n("czTT");var ie=n("XIdC"),ce=n.n(ie),le=n("g0mS"),se=n("6CfX");function ue(e){"@babel/helpers - typeof";return ue="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ue(e)}function pe(){return pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pe.apply(this,arguments)}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function de(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function me(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ye(e,t,n){return t&&me(e.prototype,t),n&&me(e,n),e}function he(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ge(e,t)}function ge(e,t){return ge=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},ge(e,t)}function be(e){var t=Ce();return function(){var n,r=Oe(e);if(t){var o=Oe(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ve(this,n)}}function ve(e,t){return!t||"object"!==ue(t)&&"function"!==typeof t?we(e):t}function we(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ce(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function Oe(e){return Oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Oe(e)}var ke=function(e){he(n,e);var t=be(n);function n(e){var r;return de(this,n),r=t.call(this,e),r.saveSwitch=function(e){r.rcSwitch=e},r.renderSwitch=function(e){var t,n=e.getPrefixCls,o=r.props,a=o.prefixCls,i=o.size,c=o.loading,s=o.className,p=void 0===s?"":s,f=o.disabled,d=n("switch",a),h=m()(p,(t={},fe(t,"".concat(d,"-small"),"small"===i),fe(t,"".concat(d,"-loading"),c),t)),g=c?u["createElement"](l["a"],{type:"loading",className:"".concat(d,"-loading-icon")}):null;return u["createElement"](le["a"],{insertExtraNode:!0},u["createElement"](ce.a,pe({},Object(y["a"])(r.props,["loading"]),{prefixCls:d,className:h,disabled:f||c,ref:r.saveSwitch,loadingIcon:g})))},Object(se["a"])("checked"in e||!("value"in e),"Switch","`value` is not validate prop, do you mean `checked`?"),r}return ye(n,[{key:"focus",value:function(){this.rcSwitch.focus()}},{key:"blur",value:function(){this.rcSwitch.blur()}},{key:"render",value:function(){return u["createElement"](g["a"],null,this.renderSwitch)}}]),n}(u["Component"]);ke.__ANT_SWITCH=!0,ke.propTypes={prefixCls:f["string"],size:f["oneOf"](["small","default","large"]),className:f["string"]};var Ee,xe,Se=n("2Taf"),je=n.n(Se),Pe=n("vZ4D"),Ne=n.n(Pe),Re=n("MhPg"),_e=n.n(Re),De=n("l4Ni"),Ie=n.n(De),Me=n("ujKo"),Te=n.n(Me),ze=n("p0pE"),Ae=n.n(ze),Le=(n("OaEy"),n("2fM7")),He=n("Y2fQ"),Fe=n("P5Jw"),Be=n("MuoO"),Ue=n("BFsb"),Je=n.n(Ue),We=n("jehZ"),qe=n.n(We),Ke=n("Y/ft"),Qe=n.n(Ke),Xe=n("4Ofr"),Ye=n.n(Xe),Ze=function(e){var t=e.color,n=e.check,r=Qe()(e,["color","check"]);return p.a.createElement("div",qe()({},r,{style:{backgroundColor:t}}),n?p.a.createElement(l["a"],{type:"check"}):"")},Ge=function(e){var t=e.colors,n=e.title,r=e.value,o=e.onChange,a=t;return t||(a=[{key:"dust",color:"#F5222D"},{key:"volcano",color:"#FA541C"},{key:"sunset",color:"#FAAD14"},{key:"cyan",color:"#13C2C2"},{key:"green",color:"#52C41A"},{key:"daybreak",color:"#1890FF"},{key:"geekblue",color:"#2F54EB"},{key:"purple",color:"#722ED1"}]),p.a.createElement("div",{className:Ye.a.themeColor},p.a.createElement("h3",{className:Ye.a.title},n),p.a.createElement("div",{className:Ye.a.content},a.map(function(e){var t=e.key,n=e.color;return p.a.createElement(s["a"],{key:n,title:Object(He["formatMessage"])({id:"app.setting.themecolor.".concat(t)})},p.a.createElement(Ze,{className:Ye.a.colorBlock,color:n,check:r===n,onClick:function(){return o&&o(n)}}))})))},Ve=Ge,$e=function(e){var t=e.value,n=e.onChange,r=e.list;return p.a.createElement("div",{className:Je.a.blockChecbox,key:t},r.map(function(e){return p.a.createElement(s["a"],{title:e.title,key:e.key},p.a.createElement("div",{className:Je.a.item,onClick:function(){return n(e.key)}},p.a.createElement("img",{src:e.url,alt:e.key}),p.a.createElement("div",{className:Je.a.selectIcon,style:{display:t===e.key?"block":"none"}},p.a.createElement(l["a"],{type:"check"}))))}))},et=$e;function tt(e){var t=nt();return function(){var n,r=Te()(e);if(t){var o=Te()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Ie()(this,n)}}function nt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var rt=Le["a"].Option,ot=function(e){var t=e.children,n=e.title,r=e.style;return p.a.createElement("div",{style:Ae()({},r,{marginBottom:24})},p.a.createElement("h3",{className:Je.a.title},n),t)},at=(Ee=Object(Be["connect"])(function(e){var t=e.setting;return{setting:t}}),Ee(xe=function(e){_e()(n,e);var t=tt(n);function n(){var e;je()(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),e.state={collapse:!1},e.getLayoutSetting=function(){var t=e.props.setting,n=t.contentWidth,r=t.fixedHeader,o=t.layout,a=t.autoHideHeader,i=t.fixSiderbar;return[{title:Object(He["formatMessage"])({id:"app.setting.content-width"}),action:p.a.createElement(Le["a"],{value:n,size:"small",onSelect:function(t){return e.changeSetting("contentWidth",t)},style:{width:80}},"sidemenu"===o?null:p.a.createElement(rt,{value:"Fixed"},Object(He["formatMessage"])({id:"app.setting.content-width.fixed"})),p.a.createElement(rt,{value:"Fluid"},Object(He["formatMessage"])({id:"app.setting.content-width.fluid"})))},{title:Object(He["formatMessage"])({id:"app.setting.fixedheader"}),action:p.a.createElement(ke,{size:"small",checked:!!r,onChange:function(t){return e.changeSetting("fixedHeader",t)}})},{title:Object(He["formatMessage"])({id:"app.setting.hideheader"}),disabled:!r,disabledReason:Object(He["formatMessage"])({id:"app.setting.hideheader.hint"}),action:p.a.createElement(ke,{size:"small",checked:!!a,onChange:function(t){return e.changeSetting("autoHideHeader",t)}})},{title:Object(He["formatMessage"])({id:"app.setting.fixedsidebar"}),disabled:"topmenu"===o,disabledReason:Object(He["formatMessage"])({id:"app.setting.fixedsidebar.hint"}),action:p.a.createElement(ke,{size:"small",checked:!!i,onChange:function(t){return e.changeSetting("fixSiderbar",t)}})}]},e.changeSetting=function(t,n){var r=e.props.setting,o=Ae()({},r);o[t]=n,"layout"===t?o.contentWidth="topmenu"===n?"Fixed":"Fluid":"fixedHeader"!==t||n||(o.autoHideHeader=!1),e.setState(o,function(){var t=e.props.dispatch;t({type:"setting/changeSetting",payload:e.state})})},e.togglerContent=function(){var t=e.state.collapse;e.setState({collapse:!t})},e.renderLayoutSettingItem=function(e){var t=p.a.cloneElement(e.action,{disabled:e.disabled});return p.a.createElement(s["a"],{title:e.disabled?e.disabledReason:"",placement:"left"},p.a.createElement(ae.Item,{actions:[t]},p.a.createElement("span",{style:{opacity:e.disabled?"0.5":""}},e.title)))},e}return Ne()(n,[{key:"render",value:function(){var e=this,t=this.props.setting,n=t.navTheme,s=t.primaryColor,u=t.layout,f=t.colorWeak,d=this.state.collapse;return p.a.createElement(r["a"],{visible:d,width:300,onClose:this.togglerContent,placement:"right",handler:p.a.createElement("div",{className:Je.a.handle,onClick:this.togglerContent},p.a.createElement(l["a"],{type:d?"close":"setting",style:{color:"#fff",fontSize:20}})),style:{zIndex:999}},p.a.createElement("div",{className:Je.a.content},p.a.createElement(ot,{title:Object(He["formatMessage"])({id:"app.setting.pagestyle"})},p.a.createElement(et,{list:[{key:"dark",url:"https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg",title:Object(He["formatMessage"])({id:"app.setting.pagestyle.dark"})},{key:"light",url:"https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg",title:Object(He["formatMessage"])({id:"app.setting.pagestyle.light"})}],value:n,onChange:function(t){return e.changeSetting("navTheme",t)}})),p.a.createElement(Ve,{title:Object(He["formatMessage"])({id:"app.setting.themecolor"}),value:s,onChange:function(t){return e.changeSetting("primaryColor",t)}}),p.a.createElement(c["a"],null),p.a.createElement(ot,{title:Object(He["formatMessage"])({id:"app.setting.navigationmode"})},p.a.createElement(et,{list:[{key:"sidemenu",url:"https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg",title:Object(He["formatMessage"])({id:"app.setting.sidemenu"})},{key:"topmenu",url:"https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg",title:Object(He["formatMessage"])({id:"app.setting.topmenu"})}],value:u,onChange:function(t){return e.changeSetting("layout",t)}})),p.a.createElement(ae,{split:!1,dataSource:this.getLayoutSetting(),renderItem:this.renderLayoutSettingItem}),p.a.createElement(c["a"],null),p.a.createElement(ot,{title:Object(He["formatMessage"])({id:"app.setting.othersettings"})},p.a.createElement(ae,{split:!1,renderItem:this.renderLayoutSettingItem,dataSource:[{title:Object(He["formatMessage"])({id:"app.setting.weakmode"}),action:p.a.createElement(ke,{size:"small",checked:!!f,onChange:function(t){return e.changeSetting("colorWeak",t)}})}]})),p.a.createElement(c["a"],null),p.a.createElement(Fe["CopyToClipboard"],{text:JSON.stringify(Object(y["a"])(t,["colorWeak"]),null,2),onCopy:function(){return i["a"].success(Object(He["formatMessage"])({id:"app.setting.copyinfo"}))}},p.a.createElement(a["a"],{block:!0,icon:"copy"},Object(He["formatMessage"])({id:"app.setting.copy"}))),p.a.createElement(o["a"],{type:"warning",className:Je.a.productionHint,message:p.a.createElement("div",null,Object(He["formatMessage"])({id:"app.setting.production.hint"})," ",p.a.createElement("a",{href:"https://u.ant.design/pro-v2-default-settings",target:"_blank",rel:"noopener noreferrer"},"src/defaultSettings.js"))})))}}]),n}(u["Component"]))||xe);t["default"]=at},XIdC:function(e,t,n){e.exports=n("Ctgt")},czTT:function(e,t,n){e.exports={"ant-switch":"ant-switch","ant-switch-inner":"ant-switch-inner","ant-switch-loading-icon":"ant-switch-loading-icon","ant-switch-disabled":"ant-switch-disabled","ant-switch-loading":"ant-switch-loading","ant-switch-checked":"ant-switch-checked","ant-switch-small":"ant-switch-small",AntSwitchSmallLoadingCircle:"AntSwitchSmallLoadingCircle"}},rHrb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=a(n("q1tI")),o=a(n("+QRC"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach(function(t){v(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function s(e,t){if(null==e)return{};var n,r,o=u(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}function m(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?h(e):t}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){function t(){var e,n;p(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return n=m(this,(e=y(t)).call.apply(e,[this].concat(i))),v(h(n),"onClick",function(e){var t=n.props,a=t.text,i=t.onCopy,c=t.children,l=t.options,s=r["default"].Children.only(c),u=(0,o["default"])(a,l);i&&i(a,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)}),n}return g(t,e),d(t,[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=s(e,["text","onCopy","options","children"]),o=r["default"].Children.only(t);return r["default"].cloneElement(o,l({},n,{onClick:this.onClick}))}}]),t}(r["default"].PureComponent);t.CopyToClipboard=w,v(w,"defaultProps",{onCopy:void 0,options:void 0})}}]);