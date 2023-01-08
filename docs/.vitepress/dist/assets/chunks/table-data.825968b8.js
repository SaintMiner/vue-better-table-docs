import{_ as Ea,o as j,c as z,e as $e,f as re,g as R,h as Ma,i as Ke,r as Ut,j as ye,v as Ra,k as N,l as gt,F as Yt,m as Dt,t as nt,n as La,d as Wt,a as we}from"../app.7acb9fc2.js";const Ia={},Ba={class:"vue-better-table"};function Ta(t,e,a,n,r,i){return j(),z("div",Ba,[$e(t.$slots,"default")])}const ci=Ea(Ia,[["render",Ta]]);function ke(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?ke(Object(a),!0).forEach(function(n){O(t,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ke(Object(a)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})}return t}function Nt(t){return Nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nt(t)}function Ya(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function xe(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Da(t,e,a){return e&&xe(t.prototype,e),a&&xe(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function O(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function ie(t,e){return Fa(t)||Va(t,e)||Ge(t,e)||Wa()}function dt(t){return _a(t)||qa(t)||Ge(t)||Ua()}function _a(t){if(Array.isArray(t))return Ht(t)}function Fa(t){if(Array.isArray(t))return t}function qa(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Va(t,e){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var n=[],r=!0,i=!1,o,s;try{for(a=a.call(t);!(r=(o=a.next()).done)&&(n.push(o.value),!(e&&n.length===e));r=!0);}catch(c){i=!0,s=c}finally{try{!r&&a.return!=null&&a.return()}finally{if(i)throw s}}return n}}function Ge(t,e){if(t){if(typeof t=="string")return Ht(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Ht(t,e)}}function Ht(t,e){(e==null||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function Ua(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Oe=function(){},oe={},Ze={},Je=null,Qe={mark:Oe,measure:Oe};try{typeof window<"u"&&(oe=window),typeof document<"u"&&(Ze=document),typeof MutationObserver<"u"&&(Je=MutationObserver),typeof performance<"u"&&(Qe=performance)}catch{}var Ha=oe.navigator||{},Ae=Ha.userAgent,Se=Ae===void 0?"":Ae,W=oe,w=Ze,je=Je,vt=Qe;W.document;var q=!!w.documentElement&&!!w.head&&typeof w.addEventListener=="function"&&typeof w.createElement=="function",ta=~Se.indexOf("MSIE")||~Se.indexOf("Trident/"),ht,yt,wt,kt,xt,D="___FONT_AWESOME___",Xt=16,ea="fa",aa="svg-inline--fa",G="data-fa-i2svg",$t="data-fa-pseudo-element",Xa="data-fa-pseudo-element-pending",se="data-prefix",ce="data-icon",Ce="fontawesome-i2svg",$a="async",Ka=["HTML","HEAD","STYLE","SCRIPT"],na=function(){try{return!0}catch{return!1}}(),y="classic",k="sharp",le=[y,k];function pt(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[y]}})}var ct=pt((ht={},O(ht,y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),O(ht,k,{fa:"solid",fass:"solid","fa-solid":"solid"}),ht)),lt=pt((yt={},O(yt,y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(yt,k,{solid:"fass"}),yt)),ft=pt((wt={},O(wt,y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(wt,k,{fass:"fa-solid"}),wt)),Ga=pt((kt={},O(kt,y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(kt,k,{"fa-solid":"fass"}),kt)),Za=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,ra="fa-layers-text",Ja=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Qa=pt((xt={},O(xt,y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(xt,k,{900:"fass"}),xt)),ia=[1,2,3,4,5,6,7,8,9,10],tn=ia.concat([11,12,13,14,15,16,17,18,19,20]),en=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ut=new Set;Object.keys(lt[y]).map(ut.add.bind(ut));Object.keys(lt[k]).map(ut.add.bind(ut));var an=[].concat(le,dt(ut),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$.GROUP,$.SWAP_OPACITY,$.PRIMARY,$.SECONDARY]).concat(ia.map(function(t){return"".concat(t,"x")})).concat(tn.map(function(t){return"w-".concat(t)})),it=W.FontAwesomeConfig||{};function nn(t){var e=w.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function rn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(w&&typeof w.querySelector=="function"){var on=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];on.forEach(function(t){var e=ie(t,2),a=e[0],n=e[1],r=rn(nn(a));r!=null&&(it[n]=r)})}var oa={styleDefault:"solid",familyDefault:"classic",cssPrefix:ea,replacementClass:aa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};it.familyPrefix&&(it.cssPrefix=it.familyPrefix);var et=u(u({},oa),it);et.autoReplaceSvg||(et.observeMutations=!1);var m={};Object.keys(oa).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(e){et[t]=e,ot.forEach(function(a){return a(m)})},get:function(){return et[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){et.cssPrefix=t,ot.forEach(function(e){return e(m)})},get:function(){return et.cssPrefix}});W.FontAwesomeConfig=m;var ot=[];function sn(t){return ot.push(t),function(){ot.splice(ot.indexOf(t),1)}}var U=Xt,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function cn(t){if(!(!t||!q)){var e=w.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var a=w.head.childNodes,n=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return w.head.insertBefore(e,n),t}}var ln="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function mt(){for(var t=12,e="";t-- >0;)e+=ln[Math.random()*62|0];return e}function at(t){for(var e=[],a=(t||[]).length>>>0;a--;)e[a]=t[a];return e}function fe(t){return t.classList?at(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function sa(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fn(t){return Object.keys(t||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(sa(t[a]),'" ')},"").trim()}function Rt(t){return Object.keys(t||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(t[a].trim(),";")},"")}function ue(t){return t.size!==T.size||t.x!==T.x||t.y!==T.y||t.rotate!==T.rotate||t.flipX||t.flipY}function un(t){var e=t.transform,a=t.containerWidth,n=t.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:c,path:f}}function mn(t){var e=t.transform,a=t.width,n=a===void 0?Xt:a,r=t.height,i=r===void 0?Xt:r,o=t.startCentered,s=o===void 0?!1:o,c="";return s&&ta?c+="translate(".concat(e.x/U-n/2,"em, ").concat(e.y/U-i/2,"em) "):s?c+="translate(calc(-50% + ".concat(e.x/U,"em), calc(-50% + ").concat(e.y/U,"em)) "):c+="translate(".concat(e.x/U,"em, ").concat(e.y/U,"em) "),c+="scale(".concat(e.size/U*(e.flipX?-1:1),", ").concat(e.size/U*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var dn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ca(){var t=ea,e=aa,a=m.cssPrefix,n=m.replacementClass,r=dn;if(a!==t||n!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(n))}return r}var Ne=!1;function _t(){m.autoAddCss&&!Ne&&(cn(ca()),Ne=!0)}var pn={mixout:function(){return{dom:{css:ca,insertCss:_t}}},hooks:function(){return{beforeDOMElementCreation:function(){_t()},beforeI2svg:function(){_t()}}}},_=W||{};_[D]||(_[D]={});_[D].styles||(_[D].styles={});_[D].hooks||(_[D].hooks={});_[D].shims||(_[D].shims=[]);var I=_[D],la=[],bn=function t(){w.removeEventListener("DOMContentLoaded",t),Pt=1,la.map(function(e){return e()})},Pt=!1;q&&(Pt=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),Pt||w.addEventListener("DOMContentLoaded",bn));function gn(t){!q||(Pt?setTimeout(t,0):la.push(t))}function bt(t){var e=t.tag,a=t.attributes,n=a===void 0?{}:a,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?sa(t):"<".concat(e," ").concat(fn(n),">").concat(i.map(bt).join(""),"</").concat(e,">")}function Pe(t,e,a){if(t&&t[e]&&t[e][a])return{prefix:e,iconName:a,icon:t[e][a]}}var vn=function(t,e){return function(a,n,r,i){return t.call(e,a,n,r,i)}},Ft=function(t,e,a,n){var r=Object.keys(t),i=r.length,o=n!==void 0?vn(e,n):e,s,c,f;for(a===void 0?(s=1,f=t[r[0]]):(s=0,f=a);s<i;s++)c=r[s],f=o(f,t[c],c,t);return f};function hn(t){for(var e=[],a=0,n=t.length;a<n;){var r=t.charCodeAt(a++);if(r>=55296&&r<=56319&&a<n){var i=t.charCodeAt(a++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),a--)}else e.push(r)}return e}function fa(t){var e=hn(t);return e.length===1?e[0].toString(16):null}function yn(t,e){var a=t.length,n=t.charCodeAt(e),r;return n>=55296&&n<=56319&&a>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function ze(t){return Object.keys(t).reduce(function(e,a){var n=t[a],r=!!n.icon;return r?e[n.iconName]=n.icon:e[a]=n,e},{})}function Kt(t,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,i=ze(e);typeof I.hooks.addPack=="function"&&!r?I.hooks.addPack(t,ze(e)):I.styles[t]=u(u({},I.styles[t]||{}),i),t==="fas"&&Kt("fa",e)}var Ot,At,St,J=I.styles,wn=I.shims,kn=(Ot={},O(Ot,y,Object.values(ft[y])),O(Ot,k,Object.values(ft[k])),Ot),me=null,ua={},ma={},da={},pa={},ba={},xn=(At={},O(At,y,Object.keys(ct[y])),O(At,k,Object.keys(ct[k])),At);function On(t){return~an.indexOf(t)}function An(t,e){var a=e.split("-"),n=a[0],r=a.slice(1).join("-");return n===t&&r!==""&&!On(r)?r:null}var ga=function(){var t=function(n){return Ft(J,function(r,i,o){return r[o]=Ft(i,n,{}),r},{})};ua=t(function(n,r,i){if(r[3]&&(n[r[3]]=i),r[2]){var o=r[2].filter(function(s){return typeof s=="number"});o.forEach(function(s){n[s.toString(16)]=i})}return n}),ma=t(function(n,r,i){if(n[i]=i,r[2]){var o=r[2].filter(function(s){return typeof s=="string"});o.forEach(function(s){n[s]=i})}return n}),ba=t(function(n,r,i){var o=r[2];return n[i]=i,o.forEach(function(s){n[s]=i}),n});var e="far"in J||m.autoFetchSvg,a=Ft(wn,function(n,r){var i=r[0],o=r[1],s=r[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(n.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:o,iconName:s}),n},{names:{},unicodes:{}});da=a.names,pa=a.unicodes,me=Lt(m.styleDefault,{family:m.familyDefault})};sn(function(t){me=Lt(t.styleDefault,{family:m.familyDefault})});ga();function de(t,e){return(ua[t]||{})[e]}function Sn(t,e){return(ma[t]||{})[e]}function K(t,e){return(ba[t]||{})[e]}function va(t){return da[t]||{prefix:null,iconName:null}}function jn(t){var e=pa[t],a=de("fas",t);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function H(){return me}var pe=function(){return{prefix:null,iconName:null,rest:[]}};function Lt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.family,n=a===void 0?y:a,r=ct[n][t],i=lt[n][t]||lt[n][r],o=t in I.styles?t:null;return i||o||null}var Ee=(St={},O(St,y,Object.keys(ft[y])),O(St,k,Object.keys(ft[k])),St);function It(t){var e,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.skipLookups,r=n===void 0?!1:n,i=(e={},O(e,y,"".concat(m.cssPrefix,"-").concat(y)),O(e,k,"".concat(m.cssPrefix,"-").concat(k)),e),o=null,s=y;(t.includes(i[y])||t.some(function(f){return Ee[y].includes(f)}))&&(s=y),(t.includes(i[k])||t.some(function(f){return Ee[k].includes(f)}))&&(s=k);var c=t.reduce(function(f,l){var p=An(m.cssPrefix,l);if(J[l]?(l=kn[s].includes(l)?Ga[s][l]:l,o=l,f.prefix=l):xn[s].indexOf(l)>-1?(o=l,f.prefix=Lt(l,{family:s})):p?f.iconName=p:l!==m.replacementClass&&l!==i[y]&&l!==i[k]&&f.rest.push(l),!r&&f.prefix&&f.iconName){var b=o==="fa"?va(f.iconName):{},v=K(f.prefix,f.iconName);b.prefix&&(o=null),f.iconName=b.iconName||v||f.iconName,f.prefix=b.prefix||f.prefix,f.prefix==="far"&&!J.far&&J.fas&&!m.autoFetchSvg&&(f.prefix="fas")}return f},pe());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&s===k&&(J.fass||m.autoFetchSvg)&&(c.prefix="fass",c.iconName=K(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=H()||"fas"),c}var Cn=function(){function t(){Ya(this,t),this.definitions={}}return Da(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){e.definitions[o]=u(u({},e.definitions[o]||{}),i[o]),Kt(o,i[o]);var s=ft[y][o];s&&Kt(s,i[o]),ga()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var n=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(n).map(function(r){var i=n[r],o=i.prefix,s=i.iconName,c=i.icon,f=c[2];e[o]||(e[o]={}),f.length>0&&f.forEach(function(l){typeof l=="string"&&(e[o][l]=c)}),e[o][s]=c}),e}}]),t}(),Me=[],Q={},tt={},Nn=Object.keys(tt);function Pn(t,e){var a=e.mixoutsTo;return Me=t,Q={},Object.keys(tt).forEach(function(n){Nn.indexOf(n)===-1&&delete tt[n]}),Me.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),Nt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=r[o][s]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){Q[o]||(Q[o]=[]),Q[o].push(i[o])})}n.provides&&n.provides(tt)}),a}function Gt(t,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var i=Q[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(n))}),e}function Z(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];var r=Q[t]||[];r.forEach(function(i){i.apply(null,a)})}function F(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return tt[t]?tt[t].apply(null,e):void 0}function Zt(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,a=t.prefix||H();if(e)return e=K(a,e)||e,Pe(ha.definitions,a,e)||Pe(I.styles,a,e)}var ha=new Cn,zn=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,Z("noAuto")},En={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return q?(Z("beforeI2svg",t),F("pseudoElements2svg",t),F("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,gn(function(){Rn({autoReplaceSvgRoot:e}),Z("watch",t)})}},Mn={icon:function(t){if(t===null)return null;if(Nt(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:K(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=Lt(t[0]);return{prefix:a,iconName:K(a,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(Za))){var n=It(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||H(),iconName:K(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var r=H();return{prefix:r,iconName:K(r,t)||t}}}},M={noAuto:zn,config:m,dom:En,parse:Mn,library:ha,findIconDefinition:Zt,toHtml:bt},Rn=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot,a=e===void 0?w:e;(Object.keys(I.styles).length>0||m.autoFetchSvg)&&q&&m.autoReplaceSvg&&M.dom.i2svg({node:a})};function Bt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return bt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(q){var a=w.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Ln(t){var e=t.children,a=t.main,n=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(ue(o)&&a.found&&!n.found){var s=a.width,c=a.height,f={x:s/c/2,y:.5};r.style=Rt(u(u({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function In(t){var e=t.prefix,a=t.iconName,n=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:n}]}]}function be(t){var e=t.icons,a=e.main,n=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,c=t.title,f=t.maskId,l=t.titleId,p=t.extra,b=t.watchable,v=b===void 0?!1:b,A=n.found?n:a,C=A.width,P=A.height,d=r==="fak",g=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(V){return p.classes.indexOf(V)===-1}).filter(function(V){return V!==""||!!V}).concat(p.classes).join(" "),h={children:[],attributes:u(u({},p.attributes),{},{"data-prefix":r,"data-icon":i,class:g,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(P)})},x=d&&!~p.classes.indexOf("fa-fw")?{width:"".concat(C/P*16*.0625,"em")}:{};v&&(h.attributes[G]=""),c&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(l||mt())},children:[c]}),delete h.attributes.title);var S=u(u({},h),{},{prefix:r,iconName:i,main:a,mask:n,maskId:f,transform:o,symbol:s,styles:u(u({},x),p.styles)}),B=n.found&&a.found?F("generateAbstractMask",S)||{children:[],attributes:{}}:F("generateAbstractIcon",S)||{children:[],attributes:{}},Y=B.children,Tt=B.attributes;return S.children=Y,S.attributes=Tt,s?In(S):Ln(S)}function Re(t){var e=t.content,a=t.width,n=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,c=s===void 0?!1:s,f=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(f[G]="");var l=u({},o.styles);ue(r)&&(l.transform=mn({transform:r,startCentered:!0,width:a,height:n}),l["-webkit-transform"]=l.transform);var p=Rt(l);p.length>0&&(f.style=p);var b=[];return b.push({tag:"span",attributes:f,children:[e]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function Bn(t){var e=t.content,a=t.title,n=t.extra,r=u(u(u({},n.attributes),a?{title:a}:{}),{},{class:n.classes.join(" ")}),i=Rt(n.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var qt=I.styles;function Jt(t){var e=t[0],a=t[1],n=t.slice(4),r=ie(n,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat($.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat($.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat($.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:a,icon:o}}var Tn={found:!1,width:512,height:512};function Yn(t,e){!na&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Qt(t,e){var a=e;return e==="fa"&&m.styleDefault!==null&&(e=H()),new Promise(function(n,r){if(F("missingIconAbstract"),a==="fa"){var i=va(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&qt[e]&&qt[e][t]){var o=qt[e][t];return n(Jt(o))}Yn(t,e),n(u(u({},Tn),{},{icon:m.showMissingIcons&&t?F("missingIconAbstract")||{}:{}}))})}var Le=function(){},te=m.measurePerformance&&vt&&vt.mark&&vt.measure?vt:{mark:Le,measure:Le},rt='FA "6.2.1"',Dn=function(t){return te.mark("".concat(rt," ").concat(t," begins")),function(){return ya(t)}},ya=function(t){te.mark("".concat(rt," ").concat(t," ends")),te.measure("".concat(rt," ").concat(t),"".concat(rt," ").concat(t," begins"),"".concat(rt," ").concat(t," ends"))},ge={begin:Dn,end:ya},jt=function(){};function Ie(t){var e=t.getAttribute?t.getAttribute(G):null;return typeof e=="string"}function _n(t){var e=t.getAttribute?t.getAttribute(se):null,a=t.getAttribute?t.getAttribute(ce):null;return e&&a}function Fn(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function qn(){if(m.autoReplaceSvg===!0)return Ct.replace;var t=Ct[m.autoReplaceSvg];return t||Ct.replace}function Vn(t){return w.createElementNS("http://www.w3.org/2000/svg",t)}function Un(t){return w.createElement(t)}function wa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,n=a===void 0?t.tag==="svg"?Vn:Un:a;if(typeof t=="string")return w.createTextNode(t);var r=n(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(wa(o,{ceFn:n}))}),r}function Wn(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ct={replace:function(t){var e=t[0];if(e.parentNode)if(t[1].forEach(function(n){e.parentNode.insertBefore(wa(n),e)}),e.getAttribute(G)===null&&m.keepOriginalSource){var a=w.createComment(Wn(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(t){var e=t[0],a=t[1];if(~fe(e).indexOf(m.replacementClass))return Ct.replace(t);var n=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var r=a[0].attributes.class.split(" ").reduce(function(o,s){return s===m.replacementClass||s.match(n)?o.toSvg.push(s):o.toNode.push(s),o},{toNode:[],toSvg:[]});a[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}var i=a.map(function(o){return bt(o)}).join(`
`);e.setAttribute(G,""),e.innerHTML=i}};function Be(t){t()}function ka(t,e){var a=typeof e=="function"?e:jt;if(t.length===0)a();else{var n=Be;m.mutateApproach===$a&&(n=W.requestAnimationFrame||Be),n(function(){var r=qn(),i=ge.begin("mutate");t.map(r),i(),a()})}}var ve=!1;function xa(){ve=!0}function ee(){ve=!1}var zt=null;function Te(t){if(je&&m.observeMutations){var e=t.treeCallback,a=e===void 0?jt:e,n=t.nodeCallback,r=n===void 0?jt:n,i=t.pseudoElementsCallback,o=i===void 0?jt:i,s=t.observeMutationsRoot,c=s===void 0?w:s;zt=new je(function(f){if(!ve){var l=H();at(f).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!Ie(p.addedNodes[0])&&(m.searchPseudoElements&&o(p.target),a(p.target)),p.type==="attributes"&&p.target.parentNode&&m.searchPseudoElements&&o(p.target.parentNode),p.type==="attributes"&&Ie(p.target)&&~en.indexOf(p.attributeName))if(p.attributeName==="class"&&_n(p.target)){var b=It(fe(p.target)),v=b.prefix,A=b.iconName;p.target.setAttribute(se,v||l),A&&p.target.setAttribute(ce,A)}else Fn(p.target)&&r(p.target)})}}),q&&zt.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Hn(){!zt||zt.disconnect()}function Xn(t){var e=t.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(n,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),a}function $n(t){var e=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"",r=It(fe(t));return r.prefix||(r.prefix=H()),e&&a&&(r.prefix=e,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=Sn(r.prefix,t.innerText)||de(r.prefix,fa(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Kn(t){var e=at(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),a=t.getAttribute("title"),n=t.getAttribute("data-fa-title-id");return m.autoA11y&&(a?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(n||mt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Gn(){return{iconName:null,title:null,titleId:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ye(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=$n(t),n=a.iconName,r=a.prefix,i=a.rest,o=Kn(t),s=Gt("parseNodeAttributes",{},t),c=e.styleParser?Xn(t):[];return u({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},s)}var Zn=I.styles;function Oa(t){var e=m.autoReplaceSvg==="nest"?Ye(t,{styleParser:!1}):Ye(t);return~e.extra.classes.indexOf(ra)?F("generateLayersText",t,e):F("generateSvgReplacementMutation",t,e)}var X=new Set;le.map(function(t){X.add("fa-".concat(t))});Object.keys(ct[y]).map(X.add.bind(X));Object.keys(ct[k]).map(X.add.bind(X));X=dt(X);function De(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!q)return Promise.resolve();var a=w.documentElement.classList,n=function(l){return a.add("".concat(Ce,"-").concat(l))},r=function(l){return a.remove("".concat(Ce,"-").concat(l))},i=m.autoFetchSvg?X:le.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Zn));i.includes("fa")||i.push("fa");var o=[".".concat(ra,":not([").concat(G,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(G,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=at(t.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),r("complete");else return Promise.resolve();var c=ge.begin("onTree"),f=s.reduce(function(l,p){try{var b=Oa(p);b&&l.push(b)}catch(v){na||v.name==="MissingIcon"&&console.error(v)}return l},[]);return new Promise(function(l,p){Promise.all(f).then(function(b){ka(b,function(){n("active"),n("complete"),r("pending"),typeof e=="function"&&e(),c(),l()})}).catch(function(b){c(),p(b)})})}function Jn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Oa(t).then(function(a){a&&ka([a],e)})}function Qn(t){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:Zt(e||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Zt(r||{})),t(n,u(u({},a),{},{mask:r}))}}var tr=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,n=a===void 0?T:a,r=e.symbol,i=r===void 0?!1:r,o=e.mask,s=o===void 0?null:o,c=e.maskId,f=c===void 0?null:c,l=e.title,p=l===void 0?null:l,b=e.titleId,v=b===void 0?null:b,A=e.classes,C=A===void 0?[]:A,P=e.attributes,d=P===void 0?{}:P,g=e.styles,h=g===void 0?{}:g;if(t){var x=t.prefix,S=t.iconName,B=t.icon;return Bt(u({type:"icon"},t),function(){return Z("beforeDOMElementCreation",{iconDefinition:t,params:e}),m.autoA11y&&(p?d["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(v||mt()):(d["aria-hidden"]="true",d.focusable="false")),be({icons:{main:Jt(B),mask:s?Jt(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:S,transform:u(u({},T),n),symbol:i,title:p,maskId:f,titleId:v,extra:{attributes:d,styles:h,classes:C}})})}},er={mixout:function(){return{icon:Qn(tr)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=De,t.nodeCallback=Jn,t}}},provides:function(t){t.i2svg=function(e){var a=e.node,n=a===void 0?w:a,r=e.callback,i=r===void 0?function(){}:r;return De(n,i)},t.generateSvgReplacementMutation=function(e,a){var n=a.iconName,r=a.title,i=a.titleId,o=a.prefix,s=a.transform,c=a.symbol,f=a.mask,l=a.maskId,p=a.extra;return new Promise(function(b,v){Promise.all([Qt(n,o),f.iconName?Qt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var C=ie(A,2),P=C[0],d=C[1];b([e,be({icons:{main:P,mask:d},prefix:o,iconName:n,transform:s,symbol:c,maskId:l,title:r,titleId:i,extra:p,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(e){var a=e.children,n=e.attributes,r=e.main,i=e.transform,o=e.styles,s=Rt(o);s.length>0&&(n.style=s);var c;return ue(i)&&(c=F("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),a.push(c||r.icon),{children:a,attributes:n}}}},ar={mixout:function(){return{layer:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.classes,n=a===void 0?[]:a;return Bt({type:"layer"},function(){Z("beforeDOMElementCreation",{assembler:t,params:e});var r=[];return t(function(i){Array.isArray(i)?i.map(function(o){r=r.concat(o.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(dt(n)).join(" ")},children:r}]})}}}},nr={mixout:function(){return{counter:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.title,n=a===void 0?null:a,r=e.classes,i=r===void 0?[]:r,o=e.attributes,s=o===void 0?{}:o,c=e.styles,f=c===void 0?{}:c;return Bt({type:"counter",content:t},function(){return Z("beforeDOMElementCreation",{content:t,params:e}),Bn({content:t.toString(),title:n,extra:{attributes:s,styles:f,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(dt(i))}})})}}}},rr={mixout:function(){return{text:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,n=a===void 0?T:a,r=e.title,i=r===void 0?null:r,o=e.classes,s=o===void 0?[]:o,c=e.attributes,f=c===void 0?{}:c,l=e.styles,p=l===void 0?{}:l;return Bt({type:"text",content:t},function(){return Z("beforeDOMElementCreation",{content:t,params:e}),Re({content:t,transform:u(u({},T),n),title:i,extra:{attributes:f,styles:p,classes:["".concat(m.cssPrefix,"-layers-text")].concat(dt(s))}})})}}},provides:function(t){t.generateLayersText=function(e,a){var n=a.title,r=a.transform,i=a.extra,o=null,s=null;if(ta){var c=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/c,s=f.height/c}return m.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Re({content:e.innerHTML,width:o,height:s,transform:r,title:n,extra:i,watchable:!0})])}}},ir=new RegExp('"',"ug"),_e=[1105920,1112319];function or(t){var e=t.replace(ir,""),a=yn(e,0),n=a>=_e[0]&&a<=_e[1],r=e.length===2?e[0]===e[1]:!1;return{value:fa(r?e[0]:e),isSecondary:n||r}}function Fe(t,e){var a="".concat(Xa).concat(e.replace(":","-"));return new Promise(function(n,r){if(t.getAttribute(a)!==null)return n();var i=at(t.children),o=i.filter(function(Y){return Y.getAttribute($t)===e})[0],s=W.getComputedStyle(t,e),c=s.getPropertyValue("font-family").match(Ja),f=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!c)return t.removeChild(o),n();if(c&&l!=="none"&&l!==""){var p=s.getPropertyValue("content"),b=~["Sharp"].indexOf(c[2])?k:y,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?lt[b][c[2].toLowerCase()]:Qa[b][f],A=or(p),C=A.value,P=A.isSecondary,d=c[0].startsWith("FontAwesome"),g=de(v,C),h=g;if(d){var x=jn(C);x.iconName&&x.prefix&&(g=x.iconName,v=x.prefix)}if(g&&!P&&(!o||o.getAttribute(se)!==v||o.getAttribute(ce)!==h)){t.setAttribute(a,h),o&&t.removeChild(o);var S=Gn(),B=S.extra;B.attributes[$t]=e,Qt(g,v).then(function(Y){var Tt=be(u(u({},S),{},{icons:{main:Y,mask:pe()},prefix:v,iconName:h,extra:B,watchable:!0})),V=w.createElement("svg");e==="::before"?t.insertBefore(V,t.firstChild):t.appendChild(V),V.outerHTML=Tt.map(function(za){return bt(za)}).join(`
`),t.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function sr(t){return Promise.all([Fe(t,"::before"),Fe(t,"::after")])}function cr(t){return t.parentNode!==document.head&&!~Ka.indexOf(t.tagName.toUpperCase())&&!t.getAttribute($t)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function qe(t){if(q)return new Promise(function(e,a){var n=at(t.querySelectorAll("*")).filter(cr).map(sr),r=ge.begin("searchPseudoElements");xa(),Promise.all(n).then(function(){r(),ee(),e()}).catch(function(){r(),ee(),a()})})}var lr={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=qe,t}}},provides:function(t){t.pseudoElements2svg=function(e){var a=e.node,n=a===void 0?w:a;m.searchPseudoElements&&qe(n)}}},Ve=!1,fr={mixout:function(){return{dom:{unwatch:function(){xa(),Ve=!0}}}},hooks:function(){return{bootstrap:function(){Te(Gt("mutationObserverCallbacks",{}))},noAuto:function(){Hn()},watch:function(t){var e=t.observeMutationsRoot;Ve?ee():Te(Gt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Ue=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,n){var r=n.toLowerCase().split("-"),i=r[0],o=r.slice(1).join("-");if(i&&o==="h")return a.flipX=!0,a;if(i&&o==="v")return a.flipY=!0,a;if(o=parseFloat(o),isNaN(o))return a;switch(i){case"grow":a.size=a.size+o;break;case"shrink":a.size=a.size-o;break;case"left":a.x=a.x-o;break;case"right":a.x=a.x+o;break;case"up":a.y=a.y-o;break;case"down":a.y=a.y+o;break;case"rotate":a.rotate=a.rotate+o;break}return a},e)},ur={mixout:function(){return{parse:{transform:function(t){return Ue(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var a=e.getAttribute("data-fa-transform");return a&&(t.transform=Ue(a)),t}}},provides:function(t){t.generateAbstractTransformGrouping=function(e){var a=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(n.x*32,", ").concat(n.y*32,") "),c="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),f="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(s," ").concat(c," ").concat(f)},p={transform:"translate(".concat(i/2*-1," -256)")},b={outer:o,inner:l,path:p};return{tag:"g",attributes:u({},b.outer),children:[{tag:"g",attributes:u({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),b.path)}]}]}}}},Vt={x:0,y:0,width:"100%",height:"100%"};function We(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function mr(t){return t.tag==="g"?t.children:[t]}var dr={hooks:function(){return{parseNodeAttributes:function(t,e){var a=e.getAttribute("data-fa-mask"),n=a?It(a.split(" ").map(function(r){return r.trim()})):pe();return n.prefix||(n.prefix=H()),t.mask=n,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(t){t.generateAbstractMask=function(e){var a=e.children,n=e.attributes,r=e.main,i=e.mask,o=e.maskId,s=e.transform,c=r.width,f=r.icon,l=i.width,p=i.icon,b=un({transform:s,containerWidth:l,iconWidth:c}),v={tag:"rect",attributes:u(u({},Vt),{},{fill:"white"})},A=f.children?{children:f.children.map(We)}:{},C={tag:"g",attributes:u({},b.inner),children:[We(u({tag:f.tag,attributes:u(u({},f.attributes),b.path)},A))]},P={tag:"g",attributes:u({},b.outer),children:[C]},d="mask-".concat(o||mt()),g="clip-".concat(o||mt()),h={tag:"mask",attributes:u(u({},Vt),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,P]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:mr(p)},h]};return a.push(x,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(d,")")},Vt)}),{children:a,attributes:n}}}},pr={provides:function(t){var e=!1;W.matchMedia&&(e=W.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=u(u({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:u(u({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:u(u({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(o),a.push({tag:"path",attributes:u(u({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:u(u({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},br={hooks:function(){return{parseNodeAttributes:function(t,e){var a=e.getAttribute("data-fa-symbol"),n=a===null?!1:a===""?!0:a;return t.symbol=n,t}}}},gr=[pn,er,ar,nr,rr,lr,fr,ur,dr,pr,br];Pn(gr,{mixoutsTo:M});M.noAuto;var Aa=M.config,Sa=M.library;M.dom;var Et=M.parse;M.findIconDefinition;M.toHtml;var vr=M.icon;M.layer;var hr=M.text;M.counter;function He(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,n)}return a}function L(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?He(Object(a),!0).forEach(function(n){E(t,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):He(Object(a)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})}return t}function Mt(t){return Mt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mt(t)}function E(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function yr(t,e){if(t==null)return{};var a={},n=Object.keys(t),r,i;for(i=0;i<n.length;i++)r=n[i],!(e.indexOf(r)>=0)&&(a[r]=t[r]);return a}function wr(t,e){if(t==null)return{};var a=yr(t,e),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],!(e.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,n)||(a[n]=t[n]))}return a}function ae(t){return kr(t)||xr(t)||Or(t)||Ar()}function kr(t){if(Array.isArray(t))return ne(t)}function xr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Or(t,e){if(t){if(typeof t=="string")return ne(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return ne(t,e)}}function ne(t,e){(e==null||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function Ar(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ja={exports:{}};(function(t){(function(e){var a=function(d,g,h){if(!f(g)||p(g)||b(g)||v(g)||c(g))return g;var x,S=0,B=0;if(l(g))for(x=[],B=g.length;S<B;S++)x.push(a(d,g[S],h));else{x={};for(var Y in g)Object.prototype.hasOwnProperty.call(g,Y)&&(x[d(Y,h)]=a(d,g[Y],h))}return x},n=function(d,g){g=g||{};var h=g.separator||"_",x=g.split||/(?=[A-Z])/;return d.split(x).join(h)},r=function(d){return A(d)?d:(d=d.replace(/[\-_\s]+(.)?/g,function(g,h){return h?h.toUpperCase():""}),d.substr(0,1).toLowerCase()+d.substr(1))},i=function(d){var g=r(d);return g.substr(0,1).toUpperCase()+g.substr(1)},o=function(d,g){return n(d,g).toLowerCase()},s=Object.prototype.toString,c=function(d){return typeof d=="function"},f=function(d){return d===Object(d)},l=function(d){return s.call(d)=="[object Array]"},p=function(d){return s.call(d)=="[object Date]"},b=function(d){return s.call(d)=="[object RegExp]"},v=function(d){return s.call(d)=="[object Boolean]"},A=function(d){return d=d-0,d===d},C=function(d,g){var h=g&&"process"in g?g.process:g;return typeof h!="function"?d:function(x,S){return h(x,d,S)}},P={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(d,g){return a(C(r,g),d)},decamelizeKeys:function(d,g){return a(C(o,g),d,g)},pascalizeKeys:function(d,g){return a(C(i,g),d)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=P:e.humps=P})(Sr)})(ja);var jr=ja.exports,Cr=["class","style"];function Nr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,a){var n=a.indexOf(":"),r=jr.camelize(a.slice(0,n)),i=a.slice(n+1).trim();return e[r]=i,e},{})}function Pr(t){return t.split(/\s+/).reduce(function(e,a){return e[a]=!0,e},{})}function he(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var n=(t.children||[]).map(function(c){return he(c)}),r=Object.keys(t.attributes||{}).reduce(function(c,f){var l=t.attributes[f];switch(f){case"class":c.class=Pr(l);break;case"style":c.style=Nr(l);break;default:c.attrs[f]=l}return c},{attrs:{},class:{},style:{}});a.class;var i=a.style,o=i===void 0?{}:i,s=wr(a,Cr);return Ke(t.tag,L(L(L({},e),{},{class:r.class,style:L(L({},r.style),o)},r.attrs),s),n)}var Ca=!1;try{Ca=!0}catch{}function zr(){if(!Ca&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function st(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?E({},t,e):{}}function Er(t){var e,a=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},E(e,"fa-".concat(t.size),t.size!==null),E(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),E(e,"fa-pull-".concat(t.pull),t.pull!==null),E(e,"fa-swap-opacity",t.swapOpacity),E(e,"fa-bounce",t.bounce),E(e,"fa-shake",t.shake),E(e,"fa-beat",t.beat),E(e,"fa-fade",t.fade),E(e,"fa-beat-fade",t.beatFade),E(e,"fa-flash",t.flash),E(e,"fa-spin-pulse",t.spinPulse),E(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(a).map(function(n){return a[n]?n:null}).filter(function(n){return n})}function Xe(t){if(t&&Mt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Et.icon)return Et.icon(t);if(t===null)return null;if(Mt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Na=re({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,e){var a=e.attrs,n=R(function(){return Xe(t.icon)}),r=R(function(){return st("classes",Er(t))}),i=R(function(){return st("transform",typeof t.transform=="string"?Et.transform(t.transform):t.transform)}),o=R(function(){return st("mask",Xe(t.mask))}),s=R(function(){return vr(n.value,L(L(L(L({},r.value),i.value),o.value),{},{symbol:t.symbol,title:t.title}))});Ma(s,function(f){if(!f)return zr("Could not find one or more icon(s)",n.value,o.value)},{immediate:!0});var c=R(function(){return s.value?he(s.value.abstract[0],{},a):null});return function(){return c.value}}});re({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,e){var a=e.slots,n=Aa.familyPrefix,r=R(function(){return["".concat(n,"-layers")].concat(ae(t.fixedWidth?["".concat(n,"-fw")]:[]))});return function(){return Ke("div",{class:r.value},a.default?a.default():[])}}});re({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,e){var a=e.attrs,n=Aa.familyPrefix,r=R(function(){return st("classes",[].concat(ae(t.counter?["".concat(n,"-layers-counter")]:[]),ae(t.position?["".concat(n,"-layers-").concat(t.position)]:[])))}),i=R(function(){return st("transform",typeof t.transform=="string"?Et.transform(t.transform):t.transform)}),o=R(function(){var c=hr(t.value.toString(),L(L({},i.value),r.value)),f=c.abstract;return t.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),s=R(function(){return he(o.value,{},a)});return function(){return s.value}}});var Mr={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},Rr={prefix:"fas",iconName:"chevron-left",icon:[384,512,[9001],"f053","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},Lr={prefix:"fas",iconName:"chevron-right",icon:[384,512,[9002],"f054","M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},Ir={prefix:"fas",iconName:"check",icon:[512,512,[10003,10004],"f00c","M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};const Pa=(t,e)=>{const a=t.__vccOpts||t;for(const[n,r]of e)a[n]=r;return a};Sa.add(Mr,Ir);const Br={name:"BTableBooleanCell",components:{fa:Na},props:{value:{type:Boolean,default:!1}}},Tr={class:"text-center"};function Yr(t,e,a,n,r,i){const o=Ut("fa");return j(),z("div",Tr,[a.value?(j(),Wt(o,{key:0,icon:"check",size:"sm",class:"w-2.5 h-2.5 bg-green-500 p-1 rounded text-white"})):(j(),Wt(o,{key:1,icon:"minus",size:"sm",class:"w-2.5 h-2.5 bg-red-500 p-1 rounded text-white"}))])}const Dr=Pa(Br,[["render",Yr]]);Sa.add(Rr,Lr);const _r={name:"BetterTable",components:{BTableBooleanCell:Dr,fa:Na},emits:["rowClick","update:modelValue"],data(){return{page:1,selectedRows:[],search:null}},props:{modelValue:{type:Array,required:!1,default:[]},pagination:{type:Boolean,required:!1},paginationLimit:{type:Number,default:5,required:!1},structure:{type:Array},data:{type:Array,required:!0},keyColumn:{type:String,default:"id",required:!1},searchable:{type:Boolean,required:!1},dataRowNum:{type:Boolean,required:!1},selectable:{type:Boolean,required:!1},objectsSelect:{type:Boolean,required:!1}},computed:{selectableRows(){return this.rows.filter(t=>this.objectsSelect?Object.keys(t).length!==0:t[this.keyColumn])},columns(){var t;let e=(t=this.structure)!=null?t:[];return this.dataRowNum&&(e=[{name:"data_row_num",width:1,label:"#"}].concat(e)),e},paginatedRows(){let t=this.rows;return this.pagination&&this.paginationLimit>0&&(t=t.slice(this.paginationLimit*(this.page-1),this.paginationLimit*this.page)),t},rows(){var t;let e=(t=this.data)!=null?t:[];return this.dataRowNum&&(e=e.map((a,n)=>(a.data_row_num=n+1,a))),this.search&&(e=e.filter(a=>{const n=this.columns.filter(i=>i.searchable).map(i=>i.name),r=[];return n.forEach(i=>{a[i]&&r.push(a[i])}),r.some(i=>i.toLowerCase().includes(this.search.toLowerCase()))})),e},pageCount(){return Math.ceil(this.rows.length/this.paginationLimit)}},watch:{selectedRows:{deep:!0,handler(t){this.$emit("update:modelValue",t)}},search(){this.page=1}},methods:{nextPage(){this.page<this.pageCount&&this.page++},prevPage(){this.page>1&&this.page--},toggleSelectAll(){this.selectableRows.length===this.selectedRows.length?this.selectedRows=[]:this.selectedRows=this.objectsSelect?this.selectableRows:this.selectableRows.map(t=>t[this.keyColumn])},rowClick(t,e){this.$emit("rowClick",t,e)}},mounted(){this.selectedRows=this.modelValue}},Fr={class:"bg-white border rounded"},qr={key:0,class:"pb-4 m-auto mx-2 border-b pt-4"},Vr={class:"w-full border-collapse table-auto text-sm"},Ur={class:"border-b"},Wr={key:0,class:"font-medium p-4 text-slate-600 text-left whitespace-nowrap"},Hr=["checked"],Xr=["onClick"],$r={key:0,class:"p-4 w-0"},Kr=["value","disabled"],Gr=["width"],Zr={key:1},Jr={class:"p-4 flex justify-between"},Qr={class:"text-xs"},ti={key:0,class:"flex"},ei=["disabled"],ai=N("span",null," Prev ",-1),ni={class:"text-xs m-auto mx-3"},ri=["disabled"],ii=N("span",null," Next ",-1);function oi(t,e,a,n,r,i){var o,s;const c=Ut("BTableBooleanCell"),f=Ut("fa");return j(),z("div",Fr,[a.searchable?(j(),z("div",qr,[ye(N("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>r.search=l),type:"text",class:"w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-none rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-200 focus:outline-none",placeholder:"Search"},null,512),[[Ra,r.search]])])):gt("",!0),N("div",null,[N("table",Vr,[N("thead",null,[N("tr",Ur,[a.selectable?(j(),z("th",Wr,[N("input",{type:"checkbox",class:"rounded text-blue-400 border-blue-300 focus:ring-blue-200 disabled:border-slate-200 disabled:cursor-not-allowed cursor-pointer",checked:r.selectedRows.length===i.selectableRows.length,onClick:e[1]||(e[1]=(...l)=>i.toggleSelectAll&&i.toggleSelectAll(...l))},null,8,Hr)])):gt("",!0),(j(!0),z(Yt,null,Dt(i.columns,l=>(j(),z("th",{key:l.name,class:"font-medium p-4 text-slate-600 text-left whitespace-nowrap"},nt(l.label),1))),128))])]),N("tbody",null,[(j(!0),z(Yt,null,Dt(i.paginatedRows,(l,p)=>(j(),z("tr",{key:l[a.keyColumn],onClick:b=>i.rowClick(l,p),class:"hover:bg-gray-100"},[a.selectable?(j(),z("td",$r,[ye(N("input",{type:"checkbox",class:"rounded text-blue-400 border-blue-300 focus:ring-blue-200 disabled:border-slate-200 disabled:cursor-not-allowed cursor-pointer",value:a.objectsSelect?l:l[a.keyColumn],disabled:a.objectsSelect?Object.keys(l).length===0:!l[a.keyColumn],"onUpdate:modelValue":e[2]||(e[2]=b=>r.selectedRows=b)},null,8,Kr),[[La,r.selectedRows]])])):gt("",!0),(j(!0),z(Yt,null,Dt(i.columns,b=>(j(),z("td",{key:b.name,width:b.width,class:"p-4 border-slate-100 text-slate-500"},[$e(t.$slots,b.name,{value:l[b.name],row:l,column:b,index:p},()=>{var v;return[b.type==="boolean"?(j(),Wt(c,{key:0,value:l[b.name]},null,8,["value"])):(j(),z("div",Zr,nt((v=l[b.name])!=null?v:b.default),1))]})],8,Gr))),128))],8,Xr))),128))])]),N("div",Jr,[N("div",Qr,nt((s=(o=a.data)==null?void 0:o.length)!=null?s:0)+" items",1),a.pagination?(j(),z("div",ti,[N("button",{onClick:e[3]||(e[3]=(...l)=>i.prevPage&&i.prevPage(...l)),disabled:this.page===1,"data-tooltip-target":"default-button-example-mobile-tooltip",class:"disabled:opacity-50 m-1 flex items-center p-1 text-xs font-medium text-gray-700 bg-white rounded-lg toggle-mobile-view enabled:hover:text-blue-700"},[we(f,{icon:"chevron-left",class:"w-3 h-3",size:"xs"}),ai],8,ei),N("div",ni,nt(this.page)+" / "+nt(this.pageCount),1),N("button",{onClick:e[4]||(e[4]=(...l)=>i.nextPage&&i.nextPage(...l)),disabled:this.page===this.pageCount,"data-tooltip-target":"default-button-example-mobile-tooltip",class:"disabled:opacity-50 m-1 flex items-center p-1 text-xs font-medium text-gray-700 bg-white rounded-lg toggle-mobile-view enabled:hover:text-blue-700"},[ii,we(f,{icon:"chevron-right",class:"w-3 h-3",size:"xs"})],8,ri)])):gt("",!0)])])])}const li=Pa(_r,[["render",oi]]);const fi=[{name:"id",label:"ID",default:0,width:1},{name:"name",label:"Name",searchable:!0},{name:"is_leader",label:"Is leader",type:"boolean",width:1}],ui=[{id:1,name:"Uno Sacry SaintoFia",is_leader:!0},{id:2,name:"Nick Niclson"},{name:"Ed Hungry"},{},{id:4,name:"Bars Beautiful"},{id:5,name:"Emma"},{id:6,name:"Sonja"}];export{ci as B,ui as a,li as r,fi as t};
