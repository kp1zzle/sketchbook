(()=>{"use strict";var e,n={397:(e,n,r)=>{var t=r(302),o=r.n(t),i=r(35);function a(){return document.title+"_"+(new Date).toISOString()}function u(e,n,r){var t=e.min(e.windowWidth/n,e.windowHeight/r);e.resizeCanvas(t*n,t*r)}o()(i);var d={x:window.innerWidth/2,y:window.innerHeight/2},s=function(e){e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight)},e.draw=function(){function n(n,r,t){var o=r.x-n.x,i=r.y-n.y,a=e.sqrt(o*o+i*i);return{x:n.x+t*(o/a),y:n.y+t*(i/a)}}d={x:e.mouseX,y:e.mouseY},e.background(0),e.stroke(255),e.noFill();for(var r=window.innerWidth/2-375,t=window.innerHeight/2-375,o=0;o<50;o++)for(var i=0;i<50;i++){var a={x:r+15*i,y:t+15*o},u=n(a,d,5),s=n(a,d,-5);e.stroke(255),e.line(s.x,s.y,u.x,u.y)}},e.keyPressed=function(){!function(e,n){"s"===e.key?function(e){var n=a();e.save(n.concat(".png"))}(e):"S"===e.key?function(e,n){var r=a(),t=document.createElement("div");t.id="hidden_div",t.style.display="none",document.body.appendChild(t);var o=new i(n,t);o.setup=function(){o.createCanvas(e.width,e.height,e.SVG)},o.setup(),o.draw(),o.save(r.concat(".svg")),o.remove(),t.remove()}(e,n):"1"===e.key?e.resizeCanvas(e.windowWidth,e.windowHeight):"2"===e.key?u(e,11,14):"3"===e.key&&u(e,9,16)}(e,s)},e.mouseClicked=function(){d={x:e.mouseX,y:e.mouseY}}};new i(s,document.body)}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return n[e](i,i.exports,t),i.exports}t.m=n,e=[],t.O=(n,r,o,i)=>{if(!r){var a=1/0;for(c=0;c<e.length;c++){for(var[r,o,i]=e[c],u=!0,d=0;d<r.length;d++)(!1&i||a>=i)&&Object.keys(t.O).every((e=>t.O[e](r[d])))?r.splice(d--,1):(u=!1,i<a&&(a=i));if(u){e.splice(c--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]},t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={711:0};t.O.j=n=>0===e[n];var n=(n,r)=>{var o,i,[a,u,d]=r,s=0;if(a.some((n=>0!==e[n]))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(d)var c=d(t)}for(n&&n(r);s<a.length;s++)i=a[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},r=self.webpackChunkp5_webpack_boilerplate=self.webpackChunkp5_webpack_boilerplate||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var o=t.O(void 0,[35,302],(()=>t(397)));o=t.O(o)})();