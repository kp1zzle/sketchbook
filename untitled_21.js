(()=>{"use strict";var n,e={3410:(n,e,t)=>{var i=t(8302),o=t.n(i),r=t(4035);function a(){return document.title+"_"+(new Date).toISOString()}function c(n,e,t){var i=n.min(n.windowWidth/e,n.windowHeight/t);n.resizeCanvas(i*e,i*t)}function s(n,e,t){for(var i=0;i<e;i++)for(var o=0;o<n;o++)t(o,i)}function u(n,e,t){return{x:e*n,y:t*n}}var l=t(363),d={numPts:75,spacing:8,zoom:25,color1:"#0773ff",color2:"#e236ff",color3:"#a1c42b",minCircleD:1,maxCircleDMult:.9,background:"#000000",xOffset:0,yOffset:0,zMult:10},f=t.n(l)().create(10,10,"settings");f.hide(),f.bindNumber("numPts",0,1e3,d.numPts,1,d),f.bindRange("spacing",0,100,d.spacing,1,d),f.bindRange("zoom",1,100,d.zoom,1,d),f.bindRange("minCircleD",0,10,d.minCircleD,.1,d),f.bindRange("maxCircleDMult",0,1,d.maxCircleDMult,.05,d),f.bindColor("background",d.background,d),f.bindRange("zMult",0,100,d.zMult,1,d),o()(r);var p=function(n){n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),f.addText("Aspect Ratio","11x14",(function(e){!function(n,e){var t=e.split(":");if(2!==t.length&&(t=e.split("x")),2===t.length){var i=parseFloat(t[0]);if(!isNaN(i)){var o=parseFloat(t[1]);isNaN(o)||c(n,i,o)}}}(n,e)})),f.addButton("Randomize Noise",(function(){n.noiseSeed()}))},n.draw=function(){function e(e,t,i,o){var r=n.noise((d.xOffset+e)/d.zoom,(d.yOffset+t)/d.zoom,i*d.zMult)-.5,a=3;return o&&(a*=-1),n.max(d.minCircleD,a*r*d.maxCircleDMult*d.spacing)}n.background(d.background),n.noFill(),n.translate(n.width/2-d.numPts*d.spacing/2,n.height/2-d.numPts/11*14*d.spacing/2),n.stroke(d.color3),s(d.numPts,d.numPts/11*14,(function(t,i){var o=u(d.spacing,t,i),r=e(t,i,0,!1);n.line(o.x,o.y-r/2,o.x,o.y+r/2),n.line(o.x-r/2,o.y,o.x+r/2,o.y)})),n.stroke(d.color1),s(d.numPts,d.numPts/11*14,(function(t,i){var o=u(d.spacing,t,i);n.circle(o.x,o.y,e(t,i,1,!1))})),n.translate(d.spacing/2,d.spacing/2),n.stroke(d.color2),s(d.numPts,d.numPts/11*14,(function(t,i){var o=u(d.spacing,t,i);n.circle(o.x,o.y,e(t,i,1,!0))}))},n.mouseClicked=function(){},n.mouseDragged=function(){d.xOffset+=(n.pmouseX-n.mouseX)/3,d.yOffset+=(n.pmouseY-n.mouseY)/3},n.keyPressed=function(){(function(n,e){"s"===n.key?function(n){var e=a();n.save(e.concat(".png"))}(n):"S"===n.key?function(n,e){var t=a(),i=document.createElement("div");i.id="hidden_div",i.style.display="none",document.body.appendChild(i);var o=new r(e,i);o.setup=function(){o.createCanvas(n.width,n.height,n.SVG)},o.setup(),o.draw(),o.save(t.concat(".svg")),o.remove(),i.remove()}(n,e):"1"===n.key?n.resizeCanvas(n.windowWidth,n.windowHeight):"2"===n.key?c(n,11,14):"3"===n.key&&c(n,9,16)})(n,p),n.keyCode===n.ESCAPE&&f.toggleVisibility()}};new r(p,document.body)}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,i),r.exports}i.m=e,n=[],i.O=(e,t,o,r)=>{if(!t){var a=1/0;for(l=0;l<n.length;l++){for(var[t,o,r]=n[l],c=!0,s=0;s<t.length;s++)(!1&r||a>=r)&&Object.keys(i.O).every((n=>i.O[n](t[s])))?t.splice(s--,1):(c=!1,r<a&&(a=r));if(c){n.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var l=n.length;l>0&&n[l-1][2]>r;l--)n[l]=n[l-1];n[l]=[t,o,r]},i.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return i.d(e,{a:e}),e},i.d=(n,e)=>{for(var t in e)i.o(e,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n={949:0};i.O.j=e=>0===n[e];var e=(e,t)=>{var o,r,[a,c,s]=t,u=0;if(a.some((e=>0!==n[e]))){for(o in c)i.o(c,o)&&(i.m[o]=c[o]);if(s)var l=s(i)}for(e&&e(t);u<a.length;u++)r=a[u],i.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return i.O(l)},t=self.webpackChunkp5_webpack_boilerplate=self.webpackChunkp5_webpack_boilerplate||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})();var o=i.O(void 0,[35,302,363],(()=>i(3410)));o=i.O(o)})();