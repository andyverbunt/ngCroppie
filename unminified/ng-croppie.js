/*************************
 * Croppie
 * Copyright 2015
 * Foliotek
 * Version: 1.0.3b Andy Verbunt
 *************************/
!function(e,t){"function"==typeof define&&define.amd?define(["exports","b"],t):"object"==typeof exports&&"string"!=typeof exports.nodeName?t(exports,require("b")):t(e.commonJsStrict={},e.b)}(this,function(exports){function e(e){if(e in S)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=X.length;n--;)if(e=X[n]+t,e in S)return e}function t(e){e=e||{};for(var n=1;n<arguments.length;n++){var i=arguments[n];if(i)for(var o in i)i.hasOwnProperty(o)&&(e[o]="object"==typeof i[o]?t({},i[o]):i[o])}return e}function n(e,t,n){var i;return function(){var o=this,r=arguments,a=function(){i=null,n||e.apply(o,r)},s=n&&!i;clearTimeout(i),i=setTimeout(a,t),s&&e.apply(o,r)}}function i(e){if("createEvent"in document){var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),e.dispatchEvent(t)}else e.fireEvent("onchange")}function o(e,t,n){if("string"==typeof t){var i=t;t={},t[i]=n}for(var o in t)e.style[o]=t[o]}function r(e){var t=e.points,n=document.createElement("div"),i=document.createElement("img"),r=t[2]-t[0],a=t[3]-t[1];return n.classList.add("croppie-result"),n.appendChild(i),o(i,{left:-1*t[0]+"px",top:-1*t[1]+"px"}),i.src=e.url,o(n,{width:r+"px",height:a+"px"}),n}function a(e,t){var n=t.points,i=n[0],o=n[1],r=n[2]-n[0],a=n[3]-n[1],s=t.circle,l=document.createElement("canvas"),u=l.getContext("2d"),c=r,p=a;return t.outputWidth&&t.outputHeight&&(c=t.outputWidth,p=t.outputHeight),l.width=c,l.height=p,s&&(u.save(),u.beginPath(),u.arc(c/2,p/2,c/2,0,2*Math.PI,!0),u.closePath(),u.clip()),u.drawImage(e,i,o,r,a,0,0,c,p),l.toDataURL()}function s(e){var t,n=new Image;return t=new Promise(function(t){n.onload=function(){setTimeout(function(){t(n)},1)},n.src=e})}function l(){var e,t,n,i,r=this,a=["croppie-container"],s=r.options.viewport.type?"cr-vp-"+r.options.viewport.type:null;r.data={},r.elements={},e=r.elements.boundary=document.createElement("div"),n=r.elements.viewport=document.createElement("div"),t=r.elements.img=document.createElement("img"),i=r.elements.overlay=document.createElement("div"),e.classList.add("cr-boundary"),o(e,{width:r.options.boundary.width+"px",height:r.options.boundary.height+"px"}),n.classList.add("cr-viewport"),s&&n.classList.add(s),o(n,{width:r.options.viewport.width+"px",height:r.options.viewport.height+"px"}),t.classList.add("cr-image"),i.classList.add("cr-overlay"),r.element.appendChild(e),e.appendChild(t),e.appendChild(n),e.appendChild(i),r.element.classList.add(a),r.options.customClass&&r.element.classList.add(r.options.customClass),h.call(this),r.options.showZoom&&c.call(r)}function u(e){this.options.showZoom&&(this.elements.zoomer.value=parseFloat(e).toFixed(2))}function c(){function e(){d.call(a),i=new W(a.elements.img),o=a.elements.viewport.getBoundingClientRect(),r=F.parse(a.elements.img)}function t(){p.call(a,{value:parseFloat(l.value),origin:i||new W(a.elements.img),viewportRect:o||a.elements.viewport.getBoundingClientRect(),transform:r||F.parse(a.elements.img)})}function n(n){var i=n.deltaY/-2e3,o=a._currentZoom+i;n.preventDefault(),e(),u.call(a,o),t()}var i,o,r,a=this,s=a.elements.zoomerWrap=document.createElement("div"),l=a.elements.zoomer=document.createElement("input");s.classList.add("cr-slider-wrap"),l.type="range",l.classList.add("cr-slider"),l.step="0.01",l.value=1,a.element.appendChild(s),s.appendChild(l),a._currentZoom=1,a.elements.zoomer.addEventListener("mousedown",e),a.elements.zoomer.addEventListener("touchstart",e),a.elements.zoomer.addEventListener("input",t),a.elements.zoomer.addEventListener("change",t),a.options.mouseWheelZoom&&(a.elements.boundary.addEventListener("mousewheel",n),a.elements.boundary.addEventListener("DOMMouseScroll",n))}function p(e){var t=this,n=e.transform,i=e.viewportRect,r=e.origin;t._currentZoom=e.value,n.scale=t._currentZoom;var a=m.call(t,i),s=a.translate,l=a.origin;n.x>=s.maxX&&(r.x=l.minX,n.x=s.maxX),n.x<=s.minX&&(r.x=l.maxX,n.x=s.minX),n.y>=s.maxY&&(r.y=l.minY,n.y=s.maxY),n.y<=s.minY&&(r.y=l.maxY,n.y=s.minY);var u={};u[Y]=n.toString(),u[B]=r.toString(),o(t.elements.img,u),I.call(t),f.call(t)}function m(e){var t=this,n=t._currentZoom,i=e.width,o=e.height,r=t.options.boundary.width/2,a=t.options.boundary.height/2,s=t._originalImageWidth,l=t._originalImageHeight,u=s*n,c=l*n,p=i/2,m=o/2,d=-1*(p/n-r),h=d-(u*(1/n)-i*(1/n)),g=-1*(m/n-a),f=g-(c*(1/n)-o*(1/n)),v=1/n*p,w=u*(1/n)-v,y=1/n*m,x=c*(1/n)-y;return{translate:{maxX:d,minX:h,maxY:g,minY:f},origin:{maxX:w,minX:v,maxY:x,minY:y}}}function d(){var e=this,t=e._currentZoom,n=e.elements.img.getBoundingClientRect(),i=e.elements.viewport.getBoundingClientRect(),r=F.parse(e.elements.img.style[Y]),a=new W(e.elements.img),s=i.top-n.top+i.height/2,l=i.left-n.left+i.width/2,u={},c={};u.y=s/t,u.x=l/t,c.y=(u.y-a.y)*(1-t),c.x=(u.x-a.x)*(1-t),r.x-=c.x,r.y-=c.y;var p={};p[B]=u.x+"px "+u.y+"px",p[Y]=r.toString(),o(e.elements.img,p)}function h(){function e(e){e.preventDefault(),p||(p=!0,r=e.pageX,a=e.pageY,transform=F.parse(c.elements.img),window.addEventListener("mousemove",t),window.addEventListener("touchmove",t),window.addEventListener("mouseup",n),window.addEventListener("touchend",n),document.body.style[Z]="none",l=c.elements.viewport.getBoundingClientRect())}function t(e){e.preventDefault();var t=e.pageX||e.touches[0].pageX,n=e.pageY||e.touches[0].pageY,p=t-r,m=n-a,d=c.elements.img.getBoundingClientRect(),h=transform.y+m,f=transform.x+p,v={};if("touchmove"==e.type&&e.touches.length>1){var w=e.touches[0],y=e.touches[1],x=Math.sqrt((w.pageX-y.pageX)*(w.pageX-y.pageX)+(w.pageY-y.pageY)*(w.pageY-y.pageY));s||(s=x/c._currentZoom);var C=x/s;return u.call(c,C),void i(c.elements.zoomer)}l.top>d.top+m&&l.bottom<d.bottom+m&&(transform.y=h),l.left>d.left+p&&l.right<d.right+p&&(transform.x=f),v[Y]=transform.toString(),o(c.elements.img,v),g.call(c),a=n,r=t}function n(){p=!1,window.removeEventListener("mousemove",t),window.removeEventListener("touchmove",t),window.removeEventListener("mouseup",n),window.removeEventListener("touchend",n),document.body.style[Z]="none",d.call(c),f.call(c),s=0}var r,a,s,l,c=this,p=!1;c.elements.overlay.addEventListener("mousedown",e),c.elements.overlay.addEventListener("touchstart",e)}function g(){var e=this,t=e.elements.boundary.getBoundingClientRect(),n=e.elements.img.getBoundingClientRect();o(e.elements.overlay,{width:n.width+"px",height:n.height+"px",top:n.top-t.top+"px",left:n.left-t.left+"px"})}function f(){var e=this;e.options.update.call(e,e.get())}function v(){var e,t,n,r,a=this,s=0,l=1.5,c=1,p={},m=a.elements.img,d=a.elements.zoomer,h=new F(0,0,c),f=new W,v=m.offsetHeight>0&&m.offsetWidth>0;v&&!a.data.bound&&(a.data.bound=!0,p[Y]=h.toString(),p[B]=f.toString(),o(m,p),e=m.getBoundingClientRect(),t=a.elements.viewport.getBoundingClientRect(),a._originalImageWidth=e.width,a._originalImageHeight=e.height,a.options.showZoom&&(n=t.width/e.width,r=t.height/e.height,s=Math.max(n,r),s>l&&(l=s+1),d.min=parseFloat(s).toFixed(2),d.max=parseFloat(l).toFixed(2),c=(s+l)/2,u.call(a,c),i(d)),a._currentZoom=h.scale=c,p[Y]=h.toString(),o(m,p),g.call(a))}function w(e){if(4!=e.length)throw"Croppie - Invalid number of points supplied: "+e;var t=this,n=e[2]-e[0],i=t.elements.viewport.getBoundingClientRect(),r=t.elements.boundary.getBoundingClientRect(),a={left:i.left-r.left,top:i.top-r.top},s=i.width/n,l=e[1],c=e[0],p=-1*e[1]+a.top,m=-1*e[0]+a.left,d={};d[B]=c+"px "+l+"px",d[Y]=new F(m,p,s).toString(),o(t.elements.img,d),u.call(t,s),t._currentZoom=s}function y(){var e=this,t=e.elements.img.getBoundingClientRect(),n=e.elements.viewport.getBoundingClientRect(),i=e.elements.boundary.getBoundingClientRect(),r=n.left-i.left,a=n.top-i.top,s=r-(t.width-n.width)/2,l=a-(t.height-n.height)/2,u=new F(s,l,e._currentZoom);o(e.elements.img,Y,u.toString())}function x(e,t){var n,i=this,o=[];if("string"==typeof e)n=e,e={};else if(Array.isArray(e))o=e.slice();else{if("undefined"==typeof e&&i.data.url)return v.call(i),null;n=e.url,o=e.points||[]}i.data.bound=!1,i.data.url=n||i.data.url,i.data.points=o||i.data.points;var r=s(n);return r.then(function(){i.elements.img.src=n,v.call(i),o.length?w.call(i,o):y.call(i),f.call(i),t&&t()}),r}function C(){var e=this,t=e.elements.img.getBoundingClientRect(),n=e.elements.viewport.getBoundingClientRect(),i=n.left-t.left,o=n.top-t.top,r=i+n.width,a=o+n.height,s=e._currentZoom;return(s===1/0||isNaN(s))&&(s=1),i/=s,r/=s,o/=s,a/=s,{points:[i,o,r,a],zoom:s}}function b(e){var t,n,i=this,o=C.call(i),l=e||{type:"canvas",size:"viewport"},u="string"==typeof l?l:l.type,c=l.size||"viewport";return"viewport"===c&&(t=i.elements.viewport.getBoundingClientRect(),o.outputWidth=t.width,o.outputHeight=t.height),o.circle="circle"===i.options.viewport.type,o.url=i.data.url?i.data.url:"",n=new Promise(function(e){"canvas"===u?s(o.url).then(function(t){e(a(t,o))}):e(r(o))})}function E(){console.warn("Croppie.refresh() is deprecated.  Please use Croppie.bind() without any arguments instead.  refresh() will be removed in a later release."),v.call(this)}function L(){var e=this;e.element.removeChild(e.elements.boundary),e.options.showZoom&&e.element.removeChild(e.elements.zoomerWrap),delete e.elements}function R(e,n){this.element=e,this.options=t({},R.defaults,n),l.call(this)}var B,Y,Z,X=["Webkit","Moz","ms"],S=document.createElement("div").style;Y=e("transform"),B=e("transformOrigin"),Z=e("userSelect");var _="translate3d",z=", 0px",F=function(e,t,n){this.x=parseFloat(e),this.y=parseFloat(t),this.scale=parseFloat(n)};F.parse=function(e){return e.style?F.parse(e.style[Y]):e.indexOf("matrix")>-1||e.indexOf("none")>-1?F.fromMatrix(e):F.fromString(e)},F.fromMatrix=function(e){var t=e.substring(7).split(",");return t.length&&"none"!==e||(t=[1,0,0,1,0,0]),new F(parseInt(t[4],10),parseInt(t[5],10),parseFloat(t[0]))},F.fromString=function(e){var t=e.split(") "),n=t[0].substring(_.length+1).split(","),i=t.length>1?t[1].substring(6):1,o=n.length>1?n[0]:0,r=n.length>1?n[1]:0;return new F(o,r,i)},F.prototype.toString=function(){return _+"("+this.x+"px, "+this.y+"px"+z+") scale("+this.scale+")"};var W=function(e){if(!e||!e.style[B])return this.x=0,void(this.y=0);var t=e.style[B].split(" ");this.x=parseFloat(t[0]),this.y=parseFloat(t[1])};W.prototype.toString=function(){return this.x+"px "+this.y+"px"};var I=n(g,500);if(this.jQuery){var $=this.jQuery;$.fn.croppie=function(e){var t=typeof e;if("string"===t){var n=Array.prototype.slice.call(arguments,1),i=$(this).data("croppie");return"get"===e?i.get():"result"===e?i.result.apply(i,n):this.each(function(){var t=$(this).data("croppie");if(t){var i=t[e];if(!$.isFunction(i))throw"Croppie "+e+" method not found";i.apply(t,n),"destroy"===e&&$(this).removeData("croppie")}})}return this.each(function(){var t=new R(this,e);$(this).data("croppie",t)})}}R.defaults={viewport:{width:100,height:100,type:"square"},boundary:{width:300,height:300},customClass:"",showZoom:!0,mouseWheelZoom:!0,update:function(){}},t(R.prototype,{bind:function(e,t){return x.call(this,e,t)},get:function(){return C.call(this)},result:function(e){return b.call(this,e)},refresh:function(){return E.call(this)},destroy:function(){return L.call(this)}}),exports.Croppie=window.Croppie=R});

/*************************
 * acrCroppie
 * Allen Royston
 * Version: 1.0.0
 *************************/
angular.module('ngCroppie', []).directive('ngCroppie', [
  function ($compile) {
    return {
        restrict: 'AE',
        scope:{
          src: '=',
          viewport: '=',
          boundry: '=',
          type: '@',
          zoom: '@',
          mousezoom: '@',
          update: '=',
          ngModel: '='
        },
        link: function(scope, elem, attr) {

                // defaults
                if(scope.viewport == undefined){
                  scope.viewport = {w: null, h: null}
                }

                if(scope.boundry == undefined){
                  scope.boundry = {w: null, h: null}
                }

                // catches
                scope.viewport.w = (scope.viewport.w != undefined) ? scope.viewport.w : 300;
                scope.viewport.h = (scope.viewport.h != undefined) ? scope.viewport.h : 300;
                scope.boundry.w = (scope.boundry.w != undefined) ? scope.boundry.w : 400;
                scope.boundry.h = (scope.boundry.h != undefined) ? scope.boundry.h : 400;

                // viewport cannot be larger than the boundaries
                if(scope.viewport.w > scope.boundry.w){ scope.viewport.w = scope.boundry.w }
                if(scope.viewport.h > scope.boundry.h){ scope.viewport.h = scope.boundry.h }

                // convert string to Boolean
                var zoom = (scope.zoom === "true"),
                    mouseZoom = (scope.mousezoom === "true");

                // define options
                var options =  {
                    viewport: {
                      width: scope.viewport.w,
                      height: scope.viewport.h,
                      type: scope.type || 'square'
                    },
                    boundary: {
                      width: scope.boundry.w,
                      height: scope.boundry.h
                    },
                    showZoom: scope.zoom,
                    mouseWheelZoom: scope.mousezoom,
                }

                if (scope.update != undefined){
                  options.update = scope.update
                }

                // create new croppie and settime for updates
                var c = new Croppie(elem[0], options);
                var intervalID = window.setInterval(function(){
                  c.result('canvas').then(function(img){
                    scope.$apply(function(){
                      scope.ngModel = img
                    })
                  })
                }, 250);

                scope.$on("$destroy",
                    function( event ) {
                        clearInterval(intervalID);
                    }
                );

                // respond to changes in src
                scope.$watch('src', function(newValue, oldValue) {
                    if(scope.src != undefined){
                          c.bind(scope.src);
                          c.result('canvas').then(function(img){
                            scope.$apply(function(){
                              scope.ngModel = img
                            })
                          })
                    }
              })


        }

    };
  }
]);
