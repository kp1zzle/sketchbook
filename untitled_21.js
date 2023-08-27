(()=>{"use strict";var n,e={410:(n,e,t)=>{var i=t(302),o=t.n(i),r=t(35);function a(n,e,t){var i=n.min(n.windowWidth/e,n.windowHeight/t);n.resizeCanvas(i*e,i*t)}function s(n,e,t){for(var i=0;i<e;i++)for(var o=0;o<n;o++)t(o,i)}function c(n,e,t){return{x:e*n,y:t*n}}var u=t(363),l={numPts:75,spacing:8,zoom:25,color1:"#0773ff",color2:"#e236ff",color3:"#a1c42b",minCircleD:1,maxCircleDMult:.9,background:"#000000",xOffset:0,yOffset:0,zMult:10},d=t.n(u)().create(10,10,"settings");d.hide(),d.bindNumber("numPts",0,1e3,l.numPts,1,l),d.bindRange("spacing",0,100,l.spacing,1,l),d.bindRange("zoom",1,100,l.zoom,1,l),d.bindRange("minCircleD",0,10,l.minCircleD,.1,l),d.bindRange("maxCircleDMult",0,1,l.maxCircleDMult,.05,l),d.bindColor("background",l.background,l),d.bindRange("zMult",0,100,l.zMult,1,l),o()(r);var f=function(n){n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),d.addText("Aspect Ratio","11x14",(function(e){!function(n,e){var t=e.split(":");if(2!==t.length&&(t=e.split("x")),2===t.length){var i=parseFloat(t[0]);if(!isNaN(i)){var o=parseFloat(t[1]);isNaN(o)||a(n,i,o)}}}(n,e)})),d.addButton("Randomize Noise",(function(){n.noiseSeed()}))},n.draw=function(){function e(e,t,i,o){var r=n.noise((l.xOffset+e)/l.zoom,(l.yOffset+t)/l.zoom,i*l.zMult)-.5,a=3;return o&&(a*=-1),n.max(l.minCircleD,a*r*l.maxCircleDMult*l.spacing)}n.background(l.background),n.noFill(),n.translate(n.width/2-l.numPts*l.spacing/2,n.height/2-l.numPts/11*14*l.spacing/2),n.stroke(l.color3),s(l.numPts,l.numPts/11*14,(function(t,i){var o=c(l.spacing,t,i),r=e(t,i,0,!1);n.line(o.x,o.y-r/2,o.x,o.y+r/2),n.line(o.x-r/2,o.y,o.x+r/2,o.y)})),n.stroke(l.color1),s(l.numPts,l.numPts/11*14,(function(t,i){var o=c(l.spacing,t,i);n.circle(o.x,o.y,e(t,i,1,!1))})),n.translate(l.spacing/2,l.spacing/2),n.stroke(l.color2),s(l.numPts,l.numPts/11*14,(function(t,i){var o=c(l.spacing,t,i);n.circle(o.x,o.y,e(t,i,1,!0))}))},n.mouseClicked=function(){},n.mouseDragged=function(){l.xOffset+=(n.pmouseX-n.mouseX)/3,l.yOffset+=(n.pmouseY-n.mouseY)/3},n.keyPressed=function(){(function(n,e){"s"===n.key?function(n){var e=(new Date).toISOString();n.save(e.concat(".png"))}(n):"S"===n.key?function(n,e){var t=(new Date).toISOString(),i=document.createElement("div");i.id="hidden_div",i.style.display="none",document.body.appendChild(i);var o=new r(e,i);o.setup=function(){o.createCanvas(n.width,n.height,n.SVG)},o.setup(),o.draw(),o.save(t.concat(".svg")),o.remove(),i.remove()}(n,e):"1"===n.key?n.resizeCanvas(n.windowWidth,n.windowHeight):"2"===n.key?a(n,11,14):"3"===n.key&&a(n,9,16)})(n,f),n.keyCode===n.ESCAPE&&d.toggleVisibility()}};new r(f,document.body)}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,i),r.exports}i.m=e,n=[],i.O=(e,t,o,r)=>{if(!t){var a=1/0;for(l=0;l<n.length;l++){for(var[t,o,r]=n[l],s=!0,c=0;c<t.length;c++)(!1&r||a>=r)&&Object.keys(i.O).every((n=>i.O[n](t[c])))?t.splice(c--,1):(s=!1,r<a&&(a=r));if(s){n.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var l=n.length;l>0&&n[l-1][2]>r;l--)n[l]=n[l-1];n[l]=[t,o,r]},i.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return i.d(e,{a:e}),e},i.d=(n,e)=>{for(var t in e)i.o(e,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n={949:0};i.O.j=e=>0===n[e];var e=(e,t)=>{var o,r,[a,s,c]=t,u=0;if(a.some((e=>0!==n[e]))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(c)var l=c(i)}for(e&&e(t);u<a.length;u++)r=a[u],i.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return i.O(l)},t=self.webpackChunkp5_webpack_boilerplate=self.webpackChunkp5_webpack_boilerplate||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})();var o=i.O(void 0,[35,302,363],(()=>i(410)));o=i.O(o)})();