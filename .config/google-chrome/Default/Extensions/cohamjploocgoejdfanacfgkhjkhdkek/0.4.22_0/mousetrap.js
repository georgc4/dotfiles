!function(e,t,n){if(e){for(var r,o={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},a={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},i={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},c={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},u=1;u<20;++u)o[111+u]="f"+u;for(u=0;u<=9;++u)o[u+96]=u.toString();y.prototype.bind=function(e,t,n){var r=this;return e=e instanceof Array?e:[e],r._bindMultiple.call(r,e,t,n),r},y.prototype.unbind=function(e,t){return this.bind.call(this,e,(function(){}),t)},y.prototype.trigger=function(e,t){var n=this;return n._directMap[e+":"+t]&&n._directMap[e+":"+t]({},e),n},y.prototype.reset=function(){var e=this;return e._callbacks={},e._directMap={},e},y.prototype.stopCallback=function(e,t){if((" "+t.className+" ").indexOf(" mousetrap ")>-1)return!1;if(d(t,this.target))return!1;if("composedPath"in e&&"function"==typeof e.composedPath){var n=e.composedPath()[0];n!==e.target&&(t=n)}return"INPUT"==t.tagName||"SELECT"==t.tagName||"TEXTAREA"==t.tagName||t.isContentEditable},y.prototype.handleKey=function(){var e=this;return e._handleKey.apply(e,arguments)},y.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(o[t]=e[t]);r=null},y.init=function(){var e=y(t);for(var n in e)"_"!==n.charAt(0)&&(y[n]=function(t){return function(){return e[t].apply(e,arguments)}}(n))},y.init(),e.Mousetrap=y,"undefined"!=typeof module&&module.exports&&(module.exports=y),"function"==typeof define&&define.amd&&define((function(){return y}))}function l(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function s(e){if("keypress"==e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return o[e.which]?o[e.which]:a[e.which]?a[e.which]:String.fromCharCode(e.which).toLowerCase()}function f(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function p(e,t,n){return n||(n=function(){if(!r)for(var e in r={},o)e>95&&e<112||o.hasOwnProperty(e)&&(r[o[e]]=e);return r}()[e]?"keydown":"keypress"),"keypress"==n&&t.length&&(n="keydown"),n}function h(e,t){var n,r,o,a=[];for(n=function(e){return"+"===e?["+"]:(e=e.replace(/\+{2}/g,"+plus")).split("+")}(e),o=0;o<n.length;++o)r=n[o],c[r]&&(r=c[r]),t&&"keypress"!=t&&i[r]&&(r=i[r],a.push("shift")),f(r)&&a.push(r);return{key:r,modifiers:a,action:t=p(r,a,t)}}function d(e,n){return null!==e&&e!==t&&(e===n||d(e.parentNode,n))}function y(e){var n=this;if(e=e||t,!(n instanceof y))return new y(e);n.target=e,n._callbacks={},n._directMap={};var r,o={},a=!1,i=!1,c=!1;function u(e){e=e||{};var t,n=!1;for(t in o)e[t]?n=!0:o[t]=0;n||(c=!1)}function p(e,t,r,a,i,c){var u,l,s,p,h=[],d=r.type;if(!n._callbacks[e])return[];for("keyup"==d&&f(e)&&(t=[e]),u=0;u<n._callbacks[e].length;++u)if(l=n._callbacks[e][u],(a||!l.seq||o[l.seq]==l.level)&&d==l.action&&("keypress"==d&&!r.metaKey&&!r.ctrlKey||(s=t,p=l.modifiers,s.sort().join(",")===p.sort().join(",")))){var y=!a&&l.combo==i,m=a&&l.seq==a&&l.level==c;(y||m)&&n._callbacks[e].splice(u,1),h.push(l)}return h}function d(e,t,r,o){n.stopCallback(t,t.target||t.srcElement,r,o)||!1===e(t,r)&&(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}(t),function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}(t))}function m(e){"number"!=typeof e.which&&(e.which=e.keyCode);var t=s(e);t&&("keyup"!=e.type||a!==t?n.handleKey(t,function(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}(e),e):a=!1)}function k(e,t,n,i){function l(t){return function(){c=t,++o[e],clearTimeout(r),r=setTimeout(u,1e3)}}function f(t){d(n,t,e),"keyup"!==i&&(a=s(t)),setTimeout(u,10)}o[e]=0;for(var p=0;p<t.length;++p){var y=p+1===t.length?f:l(i||h(t[p+1]).action);v(t[p],y,i,e,p)}}function v(e,t,r,o,a){n._directMap[e+":"+r]=t;var i,c=(e=e.replace(/\s+/g," ")).split(" ");c.length>1?k(e,c,t,r):(i=h(e,r),n._callbacks[i.key]=n._callbacks[i.key]||[],p(i.key,i.modifiers,{type:i.action},o,e,a),n._callbacks[i.key][o?"unshift":"push"]({callback:t,modifiers:i.modifiers,action:i.action,seq:o,level:a,combo:e}))}n._handleKey=function(e,t,n){var r,o=p(e,t,n),a={},l=0,s=!1;for(r=0;r<o.length;++r)o[r].seq&&(l=Math.max(l,o[r].level));for(r=0;r<o.length;++r)if(o[r].seq){if(o[r].level!=l)continue;s=!0,a[o[r].seq]=1,d(o[r].callback,n,o[r].combo,o[r].seq)}else s||d(o[r].callback,n,o[r].combo);var h="keypress"==n.type&&i;n.type!=c||f(e)||h||u(a),i=s&&"keydown"==n.type},n._bindMultiple=function(e,t,n){for(var r=0;r<e.length;++r)v(e[r],t,n)},l(e,"keypress",m),l(e,"keydown",m),l(e,"keyup",m)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null);