!function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",e(e.s=3)}([function(t,n,e){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),s={};function a(t,n,e){for(var r=0;r<n.length;r++){var i={css:n[r][1],media:n[r][2],sourceMap:n[r][3]};s[t][r]?s[t][r](i):s[t].push(A(i,e))}}function c(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=e.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var s=o(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var l,u=(l=[],function(t,n){return l[t]=n,l.filter(Boolean).join("\n")});function d(t,n,e,r){var i=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=u(n,i);else{var o=document.createTextNode(i),s=t.childNodes;s[n]&&t.removeChild(s[n]),s.length?t.insertBefore(o,s[n]):t.appendChild(o)}}function f(t,n,e){var r=e.css,i=e.media,o=e.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var p=null,h=0;function A(t,n){var e,r,i;if(n.singleton){var o=h++;e=p||(p=c(n)),r=d.bind(null,e,o,!1),i=d.bind(null,e,o,!0)}else e=c(n),r=f.bind(null,e,n),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else i()}}t.exports=function(t,n,e){return(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i()),t=e.base?t+e.base:t,n=n||[],s[t]||(s[t]=[]),a(t,n,e),function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){s[t]||(s[t]=[]),a(t,n,e);for(var r=n.length;r<s[t].length;r++)s[t][r]();s[t].length=n.length,0===s[t].length&&delete s[t]}}}},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var i=(s=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[e].concat(o).concat([i]).join("\n")}var s,a,c;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);r&&i[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),n.push(c))}},n}},function(t,n,e){var r=e(0),i=e(4);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1},s=(r(t.i,i,o),i.locals?i.locals:{});t.exports=s},function(t,n,e){e(9),t.exports=e(2)},function(t,n,e){(n=e(1)(!0)).push([t.i,"* {\r\n  border: 0px solid;\r\n  border: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml, body {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.h100 {\r\n  height: 100%;\r\n}\r\n\r\n.w100 {\r\n  width: 100%;\r\n}\r\n\r\n.flex_column {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.flex_row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.flex_grow_1 {\r\n  flex-grow: 1;\r\n}\r\n\r\n.flex_grow_0 {\r\n  flex-grow: 1;\r\n}","",{version:3,sources:["index.css"],names:[],mappings:"AAAA;EACE,iBAAiB;EACjB,YAAY;EACZ,UAAU;EACV,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd",file:"index.css",sourcesContent:["* {\r\n  border: 0px solid;\r\n  border: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml, body {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.h100 {\r\n  height: 100%;\r\n}\r\n\r\n.w100 {\r\n  width: 100%;\r\n}\r\n\r\n.flex_column {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.flex_row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.flex_grow_1 {\r\n  flex-grow: 1;\r\n}\r\n\r\n.flex_grow_0 {\r\n  flex-grow: 1;\r\n}"]}]),t.exports=n},function(t,n,e){var r=e(0),i=e(6);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1},s=(r(t.i,i,o),i.locals?i.locals:{});t.exports=s},function(t,n,e){(n=e(1)(!0)).push([t.i,".particle {\r\n  background-color: blue;\r\n  display: inline-block;\r\n  height: 10px;\r\n  width: 10px;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  transition: left linear 1s, top linear 1s, bottom linear 1s;\r\n}","",{version:3,sources:["particle.css"],names:[],mappings:"AAAA;EACE,sBAAsB;EACtB,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,2DAA2D;AAC7D",file:"particle.css",sourcesContent:[".particle {\r\n  background-color: blue;\r\n  display: inline-block;\r\n  height: 10px;\r\n  width: 10px;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  transition: left linear 1s, top linear 1s, bottom linear 1s;\r\n}"]}]),t.exports=n},function(t,n,e){var r=e(0),i=e(8);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1},s=(r(t.i,i,o),i.locals?i.locals:{});t.exports=s},function(t,n,e){(n=e(1)(!0)).push([t.i,".page_title {\r\n  text-align: center;\r\n  margin-top: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.platform_container {\r\n  margin: auto;\r\n  max-height: 400px;\r\n  max-width: 500px;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: rgba(0,0,0,0.2);\r\n  position: relative;\r\n}\r\n\r\n","",{version:3,sources:["platform.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,iCAAiC;EACjC,kBAAkB;AACpB",file:"platform.css",sourcesContent:[".page_title {\r\n  text-align: center;\r\n  margin-top: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.platform_container {\r\n  margin: auto;\r\n  max-height: 400px;\r\n  max-width: 500px;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: rgba(0,0,0,0.2);\r\n  position: relative;\r\n}\r\n\r\n"]}]),t.exports=n},function(t,n,e){"use strict";e.r(n);e(2);function r(t,n,e){if(n===e)throw new Error("Numbers are the same");var r=Math.min(n,e),i=Math.max(n,e);return t>=r&&t<=i}function i(t,n){var e=Math.floor(Math.random()*(n-t)+t);return 0===e?i(t,n):e}e(5);function o(t,n,e){var r,o;this.parent=t,this.parentLimits=t.getBoundingClientRect(),r=e&&(e.x||0===e.x)?e.x:i(10,this.parentLimits.width-10),o=e&&(e.y||0===e.y)?e.y:i(10,this.parentLimits.height-10),this.currentPosition={x:r,y:o},this.currentVelocity={},this.roots=[],this.nextPosition=null,this.timeToMove=0,this.id=n,this.simulationSpeed=100}o.prototype.startMoving=function(t){var n=this;this.setVelocity("",t),this.nextPosition&&this.setCoordinate("currentPosition",this.nextPosition);var e=this.currentVelocity,i=e.vx,o=e.vy,s=this.currentPosition.y-o/i*this.currentPosition.x,a={x:Math.floor(-s*(i/o)),y:0,direction:{X0:!0}},c={x:Math.floor((this.parentLimits.height-s)*(i/o)),y:this.parentLimits.height,direction:{XP:!0}},l={x:0,y:Math.floor(o/i*0+s),direction:{Y0:!0}},u=Math.floor(o/i*this.parentLimits.width+s),d=[a,c,l,{x:this.parentLimits.width,y:u,direction:{YP:!0}}];this.roots=d.filter((function(t){return r(t.x,0,n.parentLimits.width)&&r(t.y,0,n.parentLimits.height)}));var f=this.calculateNextPosition();this.setCoordinate("nextPosition",f),this.updateNode()},o.prototype.setCoordinate=function(t,n){this[t]=n},o.prototype.setVelocity=function(t,n){this.currentVelocity=n},o.prototype.calculateNextPosition=function(){var t=this.currentVelocity.vx>0,n=this.currentPosition;return this.roots.filter((function(e){return t?e.x>n.x:e.x<n.x}))[0]},o.prototype.setTransitionSpeed=function(){this.timeToMove=1e3*this.calculateTransitionSpeed()},o.prototype.updateNode=function(){var t=document.querySelector("#particle_".concat(this.id)),n=this.nextPosition&&this.nextPosition.x,e=this.nextPosition&&this.nextPosition.y;this.setTransitionSpeed();var r=[{direction:"left",velocity:"linear"},{direction:"top",velocity:"linear"}];t.style.cssText="transition:".concat(this.calculateTransitionSpeed(r),"; left: ").concat(n,"px; top: ").concat(e,"px"),console.log(this.calculateTransitionSpeed(r))};var s=o;o.prototype.calculateNextVelocity=function(){var t=this.currentVelocity,n=this,e=t.vx,r=t.vy,i=e>0?r>0?1:4:r>0?2:3,o=function(){switch(i){case 1:if(n.nextPosition.direction.XP)return{vx:e,vy:-1*r};if(n.nextPosition.direction.YP)return{vx:-1*e,vy:r};break;case 2:if(n.nextPosition.direction.Y0)return{vx:-1*e,vy:r};if(n.nextPosition.direction.XP)return{vx:e,vy:-1*r};break;case 3:if(n.nextPosition.direction.Y0)return{vx:-1*e,vy:r};if(n.nextPosition.direction.X0)return{vx:e,vy:-1*r};break;case 4:if(n.nextPosition.direction.X0)return{vx:e,vy:-1*r};if(n.nextPosition.direction.YP)return{vx:-1*e,vy:r};break;default:return t}}();return console.log(n),console.log("V1",t),console.log("V2",o),o},o.prototype.calculateTransitionSpeed=function(t){var n=Math.abs(this.nextPosition.x-this.currentPosition.x)/this.simulationSpeed,e=Math.abs(this.nextPosition.y-this.currentPosition.y)/this.simulationSpeed,r=Math.max(n,e);return console.log("(next x --- curr x --- transition",this.nextPosition.x-this.currentPosition.x,n),console.log("(next y --- curr y --- transition",this.nextPosition.y-this.currentPosition.y,e),console.log("transitionX --- transitionY",n,e),t?t.reduce((function(t,n){return"".concat(t&&t+","," ").concat(n.direction," ").concat(n.velocity," ").concat(r,"s")}),""):r};e(7);function a(t){var n=document.createElement("div");n.classList.add("platform_container","flex_grow_1"),n.setAttribute("id","platform"),t.appendChild(n);for(var e=[],r=function(t){var r,o,a,c,l,u,d,f=new s(n,t),p=(r="span",l=(o=f).id,u=o.currentPosition,(d=document.createElement(r)).classList.add("particle"),d.setAttribute("id","particle_".concat(l)),d.style.cssText="left: ".concat(u.x,"px; top: ").concat(u.y,"px"),a=o.parent,c=d,a.appendChild(c),d);new MutationObserver((function(t,n){t.forEach((function(t){var n=f.calculateNextVelocity(),e=n.vx,r=n.vy;console.log("*****************************************"),console.log("************ NEXT MOVE START ************"),console.log("*****************************************"),setTimeout((function(){f.startMoving({vx:e,vy:r})}),f.timeToMove+10)}))})).observe(p,{attributes:!0}),e.push(f),console.log("************** INITIAL -- STARING MOVE **************"),setTimeout((function(){f.startMoving({vx:i(-1e3,1e3),vy:i(-1e3,1e3)})}),1e3)},o=0;o<100;o++)r(o);return n}document.addEventListener("DOMContentLoaded",(function(t){var n=document.createElement("section");n.classList.add("flex_column"),n.classList.add("h100"),document.body.appendChild(n);var e=document.createElement("h1");e.innerHTML="Go genetic algorythm",e.classList.add("page_title"),n.appendChild(e),a(n)}))}]);