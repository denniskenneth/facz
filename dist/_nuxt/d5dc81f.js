(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{267:function(t,r,e){var content=e(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(77).default)("ea45fc0c",content,!0,{sourceMap:!1})},275:function(t,r,e){"use strict";function o(){}t.exports=o,o.maxLength=4096,o.parse=function(t){var r=o.maxLength;if("string"!=typeof t)throw new TypeError("str must be a string");if(t.length>r)throw new RangeError("str is too large (CookieParser.maxLength="+r+")");var e=new o;if(arguments.length>1){var n=arguments[1];if("object"==typeof n&&null!==n&&"function"==typeof n.decode)return e.slowParse(t,n.decode)}return e.parse(t)},o.prototype.decode=function(t){try{return decodeURIComponent(t)}catch(r){return t}},o.prototype.extract=function(t,r,e){return r===e+1?"":t.slice(this.trimForward(t,r),this.trimBackward(t,e)+1)},o.prototype.trimForward=function(t,i){for(var r=t.charCodeAt(i);this.isWhiteSpace(r);)r=t.charCodeAt(++i);return i},o.prototype.trimBackward=function(t,i){for(var r=t.charCodeAt(i);this.isWhiteSpace(r);)r=t.charCodeAt(--i);return i},o.prototype.isWhiteSpace=function(t){return t<=32},o.prototype.parse=function(t){var r={},e=0,o=0,n=0,c=0,d=!1,l=!1,i=0,h=t.length;t:for(;i<h;++i){var f=t.charCodeAt(i);if(f>127)return this.slowParse(t,this.decode);if(61===f){o=i-1;var m=i+1;for(f=t.charCodeAt(m);32===f;)m++,f=t.charCodeAt(m);for(34===f&&(m++,l=!0),n=m;m<h;++m)if(37===(f=t.charCodeAt(m)))d=!0;else if(59===f||44===f){if(l)(c=this.trimBackward(t,m-1)-1)<n&&(n=c);else c=m-1;var v=this.extract(t,e,o),w=this.extract(t,n,c);for(r[v]=d?this.decode(w):w,i=m;m<h;++m)if(32!==t.charCodeAt(m)){i=m-1;break}o=e=i+1,l=!1,d=!1;continue t}if(l)(c=this.trimBackward(t,m-1)-1)<n&&(n=c);else c=m-1;v=this.extract(t,e,o),w=this.extract(t,n,c);r[v]=d?this.decode(w):w,i=m}else 59!==f&&44!==f||(e=i+1)}return r},o.serialize=function(t,r,e){var o=[t+"="+((e=e||{}).encode||encodeURIComponent)(r)];return e.maxAge&&o.push("Max-Age="+e.maxAge),e.domain&&o.push("Domain="+e.domain),e.path&&o.push("Path="+e.path),e.expires&&o.push("Expires="+e.expires.toUTCString()),e.httpOnly&&o.push("HttpOnly"),e.secure&&o.push("Secure"),o.join("; ")},o.prototype.slowParse=function(t,r){var e={};return t.split(/[;,] */).forEach((function(t){var o=t.indexOf("=");if(!(o<0)){var n=t.substr(0,o).trim(),c=t.substr(++o,t.length).trim();if('"'==c[0]&&(c=c.slice(1,-1)),null==e[n])try{e[n]=r(c)}catch(t){e[n]=c}}})),e}},276:function(t,r,e){"use strict";e(267)},277:function(t,r,e){var o=e(76)(!1);o.push([t.i,".catalogueHolder{height:auto}.container div.row{margin:1rem 0}.container div.row div.col-lg-4{margin-top:1rem;margin-bottom:1rem}#card{height:100%}#card img{width:100%}#card img.card-img-top{height:45%}div.card-body p.card-text{padding-bottom:1rem;overflow:hidden}div.card-body{overflow:scroll}",""]),t.exports=o},291:function(t,r,e){"use strict";e.r(r);e(3);function o(t){this.message=t}o.prototype=new Error,o.prototype.name="InvalidCharacterError";"undefined"!=typeof window&&window.atob&&window.atob.bind(window);function n(t){this.message=t}n.prototype=new Error,n.prototype.name="InvalidTokenError";e(275);var c=e(147),d=(e(109),{asyncData:function(t){t.req,t.redirect},data:function(){return{buildings:[],building:{}}},created:function(){var t=this;c.a.collection("buildings").get().then((function(r){r.forEach((function(r){t.buildings.push(r.data())}))}))}}),l=(e(276),e(67)),component=Object(l.a)(d,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"catalogueHolder"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.buildings,(function(r,o){return e("div",{key:o,staticClass:"col-lg-4"},[e("div",{staticClass:"card",staticStyle:{width:"18rem"},attrs:{id:"card"}},[e("img",{staticClass:"card-img-top",attrs:{src:r.image,alt:"..."}}),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(r.Name))]),t._v(" "),e("p",{staticClass:"card-text"},[t._v("\n              "+t._s(r.Description)+" "+t._s(r.docRef)+"\n              ")])])])])})),0)])])}),[],!1,null,null,null);r.default=component.exports}}]);