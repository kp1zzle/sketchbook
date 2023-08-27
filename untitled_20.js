(()=>{"use strict";var e,n={186:(e,n,t)=>{var i=t(302),o=t.n(i),r=t(35);function a(e,n,t){var i=e.min(e.windowWidth/n,e.windowHeight/t);e.resizeCanvas(i*n,i*t)}var s=t(363),c={numPts:75,spacing:8,zoom:25,color1:"#0773ff",color2:"#e236ff",minCircleD:1,maxCircleDMult:.9,background:"#000000",xOffset:0,yOffset:0},u=t.n(s)().create(10,10,"settings");u.hide(),u.bindNumber("numPts",0,1e3,c.numPts,1,c),u.bindRange("spacing",0,100,c.spacing,1,c),u.bindRange("zoom",1,100,c.zoom,1,c),u.bindRange("minCircleD",0,10,c.minCircleD,.1,c),u.bindRange("maxCircleDMult",0,1,c.maxCircleDMult,.05,c),u.bindColor("background",c.background,c),o()(r);var d=function(e){e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),u.addButton("Randomize Noise",(function(){e.noiseSeed()}))},e.draw=function(){e.background(c.background),e.noFill(),e.translate(e.width/2-c.numPts*c.spacing/2,e.height/2-c.numPts/11*14*c.spacing/2),e.stroke(c.color1),function(e,n,t){for(var i=0;i<n;i++)for(var o=0;o<e;o++)t(o,i)}(c.numPts,c.numPts/11*14,(function(n,t){var i=function(e,n,t){return{x:n*e,y:t*e}}(c.spacing,n,t),o=function(n,t,i){var o=e.noise((c.xOffset+n)/c.zoom,(c.yOffset+t)/c.zoom)-.5,r=3;return e.max(c.minCircleD,r*o*c.maxCircleDMult*c.spacing)}(n,t);e.line(i.x,i.y-o/2,i.x,i.y+o/2),e.line(i.x-o/2,i.y,i.x+o/2,i.y)}))},e.mouseClicked=function(){},e.mouseDragged=function(){c.xOffset+=(e.pmouseX-e.mouseX)/3,c.yOffset+=(e.pmouseY-e.mouseY)/3},e.keyPressed=function(){(function(e,n){"s"===e.key?function(e){var n=(new Date).toISOString();e.save(n.concat(".png"))}(e):"S"===e.key?function(e,n){var t=(new Date).toISOString(),i=document.createElement("div");i.id="hidden_div",i.style.display="none",document.body.appendChild(i);var o=new r(n,i);o.setup=function(){o.createCanvas(e.width,e.height,e.SVG)},o.setup(),o.draw(),o.save(t.concat(".svg")),o.remove(),i.remove()}(e,n):"1"===e.key?e.resizeCanvas(e.windowWidth,e.windowHeight):"2"===e.key?a(e,11,14):"3"===e.key&&a(e,9,16)})(e,d),e.keyCode===e.ESCAPE&&u.toggleVisibility()}};new r(d,document.body)}},t={};function i(e){var o=t[e];if(void 0!==o)return o.exports;var r=t[e]={exports:{}};return n[e](r,r.exports,i),r.exports}i.m=n,e=[],i.O=(n,t,o,r)=>{if(!t){var a=1/0;for(d=0;d<e.length;d++){for(var[t,o,r]=e[d],s=!0,c=0;c<t.length;c++)(!1&r||a>=r)&&Object.keys(i.O).every((e=>i.O[e](t[c])))?t.splice(c--,1):(s=!1,r<a&&(a=r));if(s){e.splice(d--,1);var u=o();void 0!==u&&(n=u)}}return n}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[t,o,r]},i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={866:0};i.O.j=n=>0===e[n];var n=(n,t)=>{var o,r,[a,s,c]=t,u=0;if(a.some((n=>0!==e[n]))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(c)var d=c(i)}for(n&&n(t);u<a.length;u++)r=a[u],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(d)},t=self.webpackChunkp5_webpack_boilerplate=self.webpackChunkp5_webpack_boilerplate||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var o=i.O(void 0,[35,302,363],(()=>i(186)));o=i.O(o)})();