(()=>{"use strict";var e,r={1328:(e,r,n)=>{new(n(4035))((function(e){e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight-4)},e.draw=function(){e.angleMode(e.DEGREES),e.background(0),e.stroke(255),e.noFill(),e.noLoop(),e.translate(e.windowWidth/2-150,e.windowHeight/2-150);var r={x:0,y:0};e.beginShape();for(var n=0;n<2e3;n++){var o={x:30*r.x,y:30*r.y};e.curveVertex(o.x,o.y);var t=[0],a=[0];0!=r.x&&t.push(-1),0!=r.y&&a.push(-1),11!=r.x&&t.push(1),11!=r.y&&a.push(1),r.x+=e.random(t),r.y+=e.random(a)}e.endShape()}}),document.body)}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e](a,a.exports,o),a.exports}o.m=r,e=[],o.O=(r,n,t,a)=>{if(!n){var i=1/0;for(s=0;s<e.length;s++){for(var[n,t,a]=e[s],u=!0,p=0;p<n.length;p++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](n[p])))?n.splice(p--,1):(u=!1,a<i&&(i=a));if(u){e.splice(s--,1);var l=t();void 0!==l&&(r=l)}}return r}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[n,t,a]},o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var n in r)o.o(r,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={985:0};o.O.j=r=>0===e[r];var r=(r,n)=>{var t,a,[i,u,p]=n,l=0;if(i.some((r=>0!==e[r]))){for(t in u)o.o(u,t)&&(o.m[t]=u[t]);if(p)var s=p(o)}for(r&&r(n);l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(s)},n=self.webpackChunkp5_webpack_boilerplate=self.webpackChunkp5_webpack_boilerplate||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var t=o.O(void 0,[35],(()=>o(1328)));t=o.O(t)})();