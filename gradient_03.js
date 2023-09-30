(()=>{"use strict";var e,n={855:(e,n,t)=>{var r=t(302),i=t.n(r),o=t(35);function a(){return document.title+"_"+(new Date).toISOString()}function c(e,n,t){var r=e.min(e.windowWidth/n,e.windowHeight/t);e.resizeCanvas(r*n,r*t)}var s=t(363);var u={columns:50,rows:100,spacing:8,thickest:1},d=t.n(s)().create(10,10,"settings");d.hide(),d.bindRange("columns",0,1e3,u.columns,1,u),d.bindRange("rows",0,1e3,u.rows,1,u),d.bindRange("spacing",0,50,u.spacing,1,u),d.bindRange("thickest",0,10,u.thickest,.25,u),i()(o);var f=function(e){e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),d.addText("Aspect Ratio","11x14",(function(n){!function(e,n){var t=n.split(":");if(2!==t.length&&(t=n.split("x")),2===t.length){var r=parseFloat(t[0]);if(!isNaN(r)){var i=parseFloat(t[1]);isNaN(i)||c(e,r,i)}}}(e,n)}))},e.draw=function(){var n,t,r;e.background(0),e.noStroke(),e.fill("#0773ff"),e.strokeCap(e.SQUARE),e.translate(30,30),function(e,n,t,r,i){!function(e,n,t){for(var r=0;r<n;r++)for(var i=0;i<e;i++)t(i,r)}(e,n,(function(e,n){var o=t(e,n),a=r(e,n);a&&i(a,o)}))}(u.columns,u.rows,(n=u.rows,t=u.spacing,r=u.thickest,function(e,i){return i/n*t*r}),function(e){return function(n,t){return function(e,n,t){return{x:n*e,y:t*e}}(e,n,t)}}(u.spacing),function(e){return function(n,t){e.beginShape(),e.vertex(n.x,n.y-t/2),e.vertex(n.x-t/2,n.y),e.vertex(n.x,n.y+t/2),e.vertex(n.x+t/2,n.y),e.vertex(n.x,n.y-t/2),e.endShape()}}(e))},e.mouseClicked=function(){},e.keyPressed=function(){(function(e,n){"s"===e.key?function(e){var n=a();e.save(n.concat(".png"))}(e):"S"===e.key?function(e,n){var t=a(),r=document.createElement("div");r.id="hidden_div",r.style.display="none",document.body.appendChild(r);var i=new o(n,r);i.setup=function(){i.createCanvas(e.width,e.height,e.SVG)},i.setup(),i.draw(),i.save(t.concat(".svg")),i.remove(),r.remove()}(e,n):"1"===e.key?e.resizeCanvas(e.windowWidth,e.windowHeight):"2"===e.key?c(e,11,14):"3"===e.key&&c(e,9,16)})(e,f),e.keyCode===e.ESCAPE&&d.toggleVisibility()}};new o(f,document.body)}},t={};function r(e){var i=t[e];if(void 0!==i)return i.exports;var o=t[e]={exports:{}};return n[e](o,o.exports,r),o.exports}r.m=n,e=[],r.O=(n,t,i,o)=>{if(!t){var a=1/0;for(d=0;d<e.length;d++){for(var[t,i,o]=e[d],c=!0,s=0;s<t.length;s++)(!1&o||a>=o)&&Object.keys(r.O).every((e=>r.O[e](t[s])))?t.splice(s--,1):(c=!1,o<a&&(a=o));if(c){e.splice(d--,1);var u=i();void 0!==u&&(n=u)}}return n}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[t,i,o]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={365:0};r.O.j=n=>0===e[n];var n=(n,t)=>{var i,o,[a,c,s]=t,u=0;if(a.some((n=>0!==e[n]))){for(i in c)r.o(c,i)&&(r.m[i]=c[i]);if(s)var d=s(r)}for(n&&n(t);u<a.length;u++)o=a[u],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},t=self.webpackChunkp5_webpack_boilerplate=self.webpackChunkp5_webpack_boilerplate||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var i=r.O(void 0,[35,302,363],(()=>r(855)));i=r.O(i)})();