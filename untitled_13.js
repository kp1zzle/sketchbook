(()=>{"use strict";var e,n={702:(e,n,r)=>{var t=r(302),o=r.n(t),i=r(35);function a(e,n,r){var t=e.min(e.windowWidth/n,e.windowHeight/r);e.resizeCanvas(t*n,t*r)}var d,u,s,c=[];o()(i);var v=function(e){e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),d={x:e.random(e.windowWidth),y:e.random(e.windowHeight)},u={x:e.random(e.windowWidth),y:e.random(e.windowHeight)}},e.draw=function(){e.background(0),e.stroke(255),e.noFill(),s={x:e.mouseX,y:e.mouseY},e.triangle(d.x,d.y,u.x,u.y,s.x,s.y);for(var n=0,r=c;n<r.length;n++){var t=r[n];e.triangle(t[0].x,t[0].y,t[1].x,t[1].y,t[2].x,t[2].y)}},e.mouseClicked=function(){var n=[d,u,s];for(c.push(n),d=e.random(n),u=d;d===u;)u=e.random(n)},e.keyPressed=function(){!function(e,n){"s"===e.key?function(e){var n=(new Date).toISOString();e.save(n.concat(".png"))}(e):"S"===e.key?function(e,n){var r=(new Date).toISOString(),t=document.createElement("div");t.id="hidden_div",t.style.display="none",document.body.appendChild(t);var o=new i(n,t);o.setup=function(){o.createCanvas(e.width,e.height,e.SVG)},o.setup(),o.draw(),o.save(r.concat(".svg")),o.remove(),t.remove()}(e,n):"1"===e.key?e.resizeCanvas(e.windowWidth,e.windowHeight):"2"===e.key?a(e,11,14):"3"===e.key&&a(e,9,16)}(e,v)}};new i(v,document.body)}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return n[e](i,i.exports,t),i.exports}t.m=n,e=[],t.O=(n,r,o,i)=>{if(!r){var a=1/0;for(c=0;c<e.length;c++){for(var[r,o,i]=e[c],d=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(t.O).every((e=>t.O[e](r[u])))?r.splice(u--,1):(d=!1,i<a&&(a=i));if(d){e.splice(c--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]},t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={527:0};t.O.j=n=>0===e[n];var n=(n,r)=>{var o,i,[a,d,u]=r,s=0;if(a.some((n=>0!==e[n]))){for(o in d)t.o(d,o)&&(t.m[o]=d[o]);if(u)var c=u(t)}for(n&&n(r);s<a.length;s++)i=a[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},r=self.webpackChunkp5_webpack_boilerplate=self.webpackChunkp5_webpack_boilerplate||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var o=t.O(void 0,[35,302],(()=>t(702)));o=t.O(o)})();