(()=>{"use strict";var n,o={519:(n,o,t)=>{var e=t(8302),r=t.n(e),i=t(4035);function a(n){var o=c();n.save(o.concat(".png"))}function l(n,o){var t=c(),e=document.createElement("div");e.id="hidden_div",e.style.display="none",document.body.appendChild(e);var r=new i(o,e);r.setup=function(){r.createCanvas(n.width,n.height,n.SVG)},r.setup(),r.draw(),r.save(t.concat(".svg")),r.remove(),e.remove()}function c(){return document.title+"_"+(new Date).toISOString()}function d(n,o,t,e,r){void 0===e&&(e=n.windowWidth),void 0===r&&(r=n.windowHeight);var i=n.min(e/o,r/t);n.resizeCanvas(i*o,i*t)}function u(n,o,t,e){var r=o.split(":");if(2!==r.length&&(r=o.split("x")),2===r.length){var i=parseFloat(r[0]);if(!isNaN(i)){var a=parseFloat(r[1]);isNaN(a)||d(n,i,a,t,e)}}}function s(n){return void 0===n&&(n=800),Math.max(n,.9*window.innerHeight)}function g(n,o){return void 0===n&&(n=800),void 0===o&&(o=0),Math.max(n,.9*(window.innerWidth-2*o))}var p=t(2264),h=t(4288);function v(n){document.body.style.backgroundColor=n.toString()}var f,b,m=null,k=[],w={strokeWeight:1,color:"#000000ff"},y=function(n,o){void 0===n&&(n=1);var t,e=248*n,r=document.createElement("style");r.innerHTML=".tp-dfwv {\n  transform: scale("+n.toString()+");\n  transform-origin: top right;\n}\n",document.body.appendChild(r),(t=document.createElement("style")).innerHTML=":root {\n  --tp-base-background-color: hsla(0, 0%, 0%, 1.00);\n  --tp-base-shadow-color: hsla(0, 0%, 0%, 0.2);\n  --tp-button-background-color: hsla(0, 0%, 70%, 1.00);\n  --tp-button-background-color-active: hsla(0, 0%, 85%, 1.00);\n  --tp-button-background-color-focus: hsla(0, 0%, 80%, 1.00);\n  --tp-button-background-color-hover: hsla(0, 0%, 75%, 1.00);\n  --tp-button-foreground-color: hsla(0, 0%, 0%, 1.00);\n  --tp-container-background-color: hsla(0, 0%, 10%, 1.00);\n  --tp-container-background-color-active: hsla(0, 0%, 25%, 1.00);\n  --tp-container-background-color-focus: hsla(0, 0%, 20%, 1.00);\n  --tp-container-background-color-hover: hsla(0, 0%, 15%, 1.00);\n  --tp-container-foreground-color: hsla(0, 0%, 50%, 1.00);\n  --tp-groove-foreground-color: hsla(0, 0%, 10%, 1.00);\n  --tp-input-background-color: hsla(0, 0%, 10%, 1.00);\n  --tp-input-background-color-active: hsla(0, 0%, 25%, 1.00);\n  --tp-input-background-color-focus: hsla(0, 0%, 20%, 1.00);\n  --tp-input-background-color-hover: hsla(0, 0%, 15%, 1.00);\n  --tp-input-foreground-color: hsla(0, 0%, 70%, 1.00);\n  --tp-label-foreground-color: hsla(0, 0%, 50%, 1.00);\n  --tp-monitor-background-color: hsla(0, 0%, 8%, 1.00);\n  --tp-monitor-foreground-color: hsla(0, 0%, 48%, 1.00);\n}\n",document.body.appendChild(t);var i=new p.X6({title:"untitled_34"});return i.registerPlugin(h),{pane:i,uiWidth:e}}(1.1),x=y.pane,S=y.uiWidth,C=null;r()(i);var O=function(n){n.setup=function(){if(n.createCanvas(n.windowWidth,n.windowHeight),v(n.color("#999999")),u(n,"1x1",g(800,S),s()),null===C){var o=function(n,o,t,e){var r=n.createGraphics(t,e),i=o.addFolder({title:"Drawing System Controls"});i.addBinding(w,"strokeWeight",{min:0,max:100,step:1,label:"brush size"}),i.addBinding(w,"color",{label:"brush color",picker:"inline",expanded:!0,color:{alpha:!0}});var a=function(){r.background(255),r.noFill(),r.strokeCap(n.PROJECT),console.log(k.length);for(var o=0,t=k;o<t.length;o++){var e=t[o];r.beginShape(),r.strokeWeight(e.strokeWeight),r.stroke(e.color);for(var i=0,a=e.points;i<a.length;i++){var l=a[i];r.vertex(l.x,l.y)}r.endShape()}};return{img:r,updateFunc:function(){n.mouseIsPressed?(null===m&&(m=k.length,k[m]={points:[],color:w.color,strokeWeight:w.strokeWeight}),k[m].points.push({x:n.mouseX,y:n.mouseY}),a()):m=null},drawFunc:a}}(n,x,n.width,n.height);C=o.img,f=o.updateFunc,b=o.drawFunc}!function(n,o,t,e,r){for(var i=0,c=n.controller.rackController.rack.children;i<c.length;i++){var d=c[i];if("props"in d&&"Misc"===d.props.get("title"))return}void 0===e&&(e=g()),void 0===r&&(r=s());var p=n.addFolder({title:"Misc"}),h={background:"#999999",direction:"vertical",aspect:"1x1",zoom:1,translation:{x:0,y:0}};p.addBinding(h,"background",{view:"color",color:{}}).on("change",(function(){v(o.color(h.background))})),p.addBinding(h,"zoom",{max:2,min:0}).on("change",(function(){var n=document.getElementById("defaultCanvas0");n.style.transform="scale("+h.zoom.toString()+")",n.style.zIndex="-1"})),p.addBinding(h,"translation").on("change",(function(){var n=document.getElementById("defaultCanvas0");n.style.zIndex="-1",n.style.translate=(3*h.translation.x).toString()+"px "+(3*h.translation.y).toString()+"px"}));var f=function(){var n=h.aspect;if("horizontal"===h.direction){var t=n.split("x");n=t[1]+"x"+t[0]}u(o,n,e,r)},b=["vertical","horizontal"];p.addBinding(h,"direction",{view:"radiogrid",groupName:"pageDirection",label:"",size:[2,1],cells:function(n,o){return{title:b[o+n],value:b[o+n]}}}).on("change",f);var m=["1x1","11x14","2x3","9x16"];p.addBinding(h,"aspect",{view:"radiogrid",groupName:"aspect ratio",label:"aspect ratio",size:[2,2],cells:function(n,o){return{title:m[2*o+n],value:m[2*o+n]}}}).on("change",f),p.addButton({title:"Export PNG"}).on("click",(function(){a(o)})),p.addButton({title:"Export SVG"}).on("click",(function(){l(o,t)}))}(x,n,O,g(800,S))},n.draw=function(){n.background(255),C.width===n.width&&C.height===n.height||(C.resizeCanvas(n.width,n.height,!0),b()),n.image(C,0,0),f()},n.mousePressed=function(){},n.mouseReleased=function(){},n.mouseDragged=function(){},n.keyPressed=function(){!function(n,o){"s"===n.key?a(n):"S"===n.key?l(n,o):"1"===n.key?n.resizeCanvas(n.windowWidth,n.windowHeight):"2"===n.key?d(n,11,14):"3"===n.key&&d(n,9,16)}(n,O)}};new i(O,document.body)}},t={};function e(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return o[n](i,i.exports,e),i.exports}e.m=o,n=[],e.O=(o,t,r,i)=>{if(!t){var a=1/0;for(u=0;u<n.length;u++){for(var[t,r,i]=n[u],l=!0,c=0;c<t.length;c++)(!1&i||a>=i)&&Object.keys(e.O).every((n=>e.O[n](t[c])))?t.splice(c--,1):(l=!1,i<a&&(a=i));if(l){n.splice(u--,1);var d=r();void 0!==d&&(o=d)}}return o}i=i||0;for(var u=n.length;u>0&&n[u-1][2]>i;u--)n[u]=n[u-1];n[u]=[t,r,i]},e.n=n=>{var o=n&&n.__esModule?()=>n.default:()=>n;return e.d(o,{a:o}),o},e.d=(n,o)=>{for(var t in o)e.o(o,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:o[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,o)=>Object.prototype.hasOwnProperty.call(n,o),e.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{var n={3861:0};e.O.j=o=>0===n[o];var o=(o,t)=>{var r,i,[a,l,c]=t,d=0;if(a.some((o=>0!==n[o]))){for(r in l)e.o(l,r)&&(e.m[r]=l[r]);if(c)var u=c(e)}for(o&&o(t);d<a.length;d++)i=a[d],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(u)},t=self.webpackChunkp5_webpack_boilerplate=self.webpackChunkp5_webpack_boilerplate||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var r=e.O(void 0,[4035,8302,8535],(()=>e(519)));r=e.O(r)})();