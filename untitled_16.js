(()=>{"use strict";var e,n={7313:(e,n,i)=>{var t=i(8302),r=i.n(t),o=i(4035);function a(){return document.title+"_"+(new Date).toISOString()}function s(e,n,i){var t=e.min(e.windowWidth/n,e.windowHeight/i);e.resizeCanvas(t*n,t*i)}var c=i(363),d={numLines:75,spacing:10,lineLen:1e3,ptsPerLine:10,disturbance:100,color1:"#018f14",color2:"#002afd",zoom:100,weight:1},u=i.n(c)().create(10,10,"settings");u.hide(),u.bindNumber("numLines",0,1e3,d.numLines,1,d),u.bindRange("spacing",0,100,d.spacing,.5,d),u.bindRange("lineLen",0,2e3,d.lineLen,1,d),u.bindRange("ptsPerLine",0,100,d.ptsPerLine,1,d),u.bindRange("disturbance",0,300,d.disturbance,1,d),u.bindRange("zoom",0,300,d.zoom,1,d),u.bindRange("weight",0,10,d.weight,.1,d),r()(o);var l=function(e){e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight)},e.draw=function(){e.background(0),e.translate(e.windowWidth/2-d.numLines*d.spacing/2,e.windowHeight/2-d.lineLen/2),e.noFill(),e.stroke(d.color1),e.strokeWeight(d.weight);for(var n=0;n<d.numLines;n++){e.beginShape();for(var i=0;i<d.ptsPerLine;i++){var t=n*d.spacing,r=i*d.lineLen/d.ptsPerLine;e.curveVertex(t+d.disturbance*e.noise(t/d.zoom,r/d.zoom),r)}e.endShape()}for(e.translate(d.spacing/2,0),e.stroke(d.color2),n=0;n<d.numLines;n++){for(e.beginShape(),i=0;i<d.ptsPerLine;i++)t=n*d.spacing,r=i*d.lineLen/d.ptsPerLine,e.curveVertex(t+d.disturbance*e.noise(t/d.zoom,r/d.zoom),r);e.endShape()}},e.mouseClicked=function(){},e.keyPressed=function(){(function(e,n){"s"===e.key?function(e){var n=a();e.save(n.concat(".png"))}(e):"S"===e.key?function(e,n){var i=a(),t=document.createElement("div");t.id="hidden_div",t.style.display="none",document.body.appendChild(t);var r=new o(n,t);r.setup=function(){r.createCanvas(e.width,e.height,e.SVG)},r.setup(),r.draw(),r.save(i.concat(".svg")),r.remove(),t.remove()}(e,n):"1"===e.key?e.resizeCanvas(e.windowWidth,e.windowHeight):"2"===e.key?s(e,11,14):"3"===e.key&&s(e,9,16)})(e,l),e.keyCode===e.ESCAPE&&u.toggleVisibility()}};new o(l,document.body)}},i={};function t(e){var r=i[e];if(void 0!==r)return r.exports;var o=i[e]={exports:{}};return n[e](o,o.exports,t),o.exports}t.m=n,e=[],t.O=(n,i,r,o)=>{if(!i){var a=1/0;for(u=0;u<e.length;u++){for(var[i,r,o]=e[u],s=!0,c=0;c<i.length;c++)(!1&o||a>=o)&&Object.keys(t.O).every((e=>t.O[e](i[c])))?i.splice(c--,1):(s=!1,o<a&&(a=o));if(s){e.splice(u--,1);var d=r();void 0!==d&&(n=d)}}return n}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[i,r,o]},t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={305:0};t.O.j=n=>0===e[n];var n=(n,i)=>{var r,o,[a,s,c]=i,d=0;if(a.some((n=>0!==e[n]))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(c)var u=c(t)}for(n&&n(i);d<a.length;d++)o=a[d],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(u)},i=self.webpackChunkp5_webpack_boilerplate=self.webpackChunkp5_webpack_boilerplate||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))})();var r=t.O(void 0,[35,302,363],(()=>t(7313)));r=t.O(r)})();