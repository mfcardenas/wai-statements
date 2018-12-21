!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);(function(){var e,t,n={MONTH_NAMES:["January","February","March","April","May","June","July","August","September","October","November","December"]},r=function(){var e=new Map,t=document.forms.create_accessibility_statement_form,r=new Map;function a(e){var n=function(e){return!!e&&t.elements[e]}(e)||[],r=Array.prototype.filter.call(n,function(e){var t="text"===e.type;return e.checked||t&&e.value});return r.length>0?r.map(function(e){return e.value}):[]}function o(t){var n,r=t.name||void 0,o=t.type||"text";r&&"radio"!==o?(n=a(r)||[],e.set(r,n)):r&&"radio"===o?(n=a(r)[0]||"",e.set(r,n)):(n=t.value||"",e.set(t.id,n))}function c(){var e=t.elements.accstmnt_conformance,n=Array.prototype.filter.call(e,function(e){return e.checked})[0],r=t.elements.accstmnt_conformance_meaning,a=n.parentNode.querySelector(".meaning"),c=a&&a.innerText||"";r.value!==c&&(r.value=c,o(r))}return r.set("changed",!1),function(){var e,t=n.MONTH_NAMES,r=new Date,a=r.getDate(),o=r.getMonth()+1,c=t[o-1],i=r.getFullYear(),l=a+" "+c+" "+i,u=document.querySelectorAll("#accstatement input.today");for(e=0;e<u.length;e+=1)try{u[e].valueAsDate=r}catch(t){u[e].value=l}}(),c(),Array.prototype.forEach.call(t.elements,function(e){var t=e.nodeName,n=e.parentNode&&e.parentNode.classList.contains("proto");-1===["INPUT","TEXTAREA"].indexOf(t)||n||o(e)}),t.addEventListener("change",function(e){var t,n=r.get("changed"),a=e.target;-1!==["INPUT","TEXTAREA"].indexOf(a.nodeName)&&a.id&&o(a),n||r.set("changed",!0),a.name&&"accstmnt_conformance"===a.name&&c(),a.name&&"accstmnt_standard"===a.name&&"accstmnt_standard_other"!==a.id&&((t=document.getElementById("accstmnt_standard_other_name")).value="",o(t))}),{data:{get:function(t){var n={};return t&&"string"==typeof t?e.get(t):t?void 0:(e.forEach(function(e,t,r){n[t]=e}),n)},set:e.set},elelment:t,state:r}}(),a=(c={MIMETYPE:"text/plain",ENCODING:"utf-8",FILENAME:"accessibility-statement",XMLNS:"http://www.w3.org/1999/xhtml"},i={json:"application/json",text:"text/plain",html:"text/html"},{saveAs:function(e,t){switch(t){case"html":!function(e){!function(e,t){var n=i[(t=t||{}).mime]||t.mime||c.MIMETYPE,r=function(e,t,n){var r=i[t]||t||c.MIMETYPE;return n=n||c.ENCODING,new Blob([e],{type:r+";charset="+n})}(e,n,c.ENCODING),a=function(e){return URL.createObjectURL(e)}(r),o=new Date,l=[o.getFullYear(),1===o.getMonth().toString().length?"0"+o.getMonth():o.getMonth(),1===o.getDate().toString().length?"0"+o.getDate():o.getDate()].join("-"),u=c.FILENAME+"_"+l+"."+t.mime;!function(e,t){var n=document.createElementNS(c.XMLNS,"a"),r=t.blob,a=t.filename;if(window.navigator&&window.navigator.msSaveOrOpenBlob||window.navigator.msSaveBlob)try{window.navigator.msSaveOrOpenBlob(r,a)}catch(e){window.navigator.msSaveBlob(r,a)}else n.href=e,n.setAttribute("download",t.filename||""),document.body.appendChild(n),n.click(),document.body.removeChild(n);n=void 0,setTimeout(function(){URL.revokeObjectURL(e)},0)}(a,{filename:u,blob:r,revoke:t.revoke||!0})}("<!DOCTYPE html>\n"+e,{mime:"html"})}(e)}}}),o=["create","preview"];var c,i;function l(){return Array.prototype.filter.call(o,function(e){return-1!==window.location.hash.indexOf(e)})[0]}function u(){var e,t,n,a,o,c,i,u=document.querySelectorAll("#accstatement .page"),s=l(),d=document.querySelectorAll("a.button-backtotop");Array.prototype.forEach.call(d,function(e){e.setAttribute("href","#"+l()+"-top")}),"preview"===s&&(e=document.querySelector("#accstatement .page.preview"),c=r.data.get,i=document.querySelectorAll("[data-if]"),Array.prototype.forEach.call(i,function(e){var t="negate"in e.dataset,n=e.dataset.if.split(",").map(function(e){return e.trim()}),r=n.filter(function(e){var t=c(e);return void 0!==t&&t.length>0}),a=r.length>0;t&&(a=!a),a?e.removeAttribute("hidden"):e.setAttribute("hidden","")}),function(){var e=r.data.get,t=document.querySelectorAll("[data-print]"),n={lowercase:function(e){return e.toLowerCase()},capitalize:function(e){var t=e.slice(0,1).toUpperCase(),n=e.slice(1);return t+n}};function a(e,t){var r=e;return e&&t&&0!==t.length?(Array.isArray(e)?r=e.map(function(e){return a(e,t)}):t.forEach(function(t){t in n&&(r=n[t](e))}),r):e}Array.prototype.forEach.call(t,function(t){var n=t.nodeName,r=t.dataset.print,o=t.dataset.printfilter,c=o&&t.dataset.printfilter.split(",").map(function(e){return e.trim()}),i=t.dataset.printdefault||"",l=a(e(r),c)||i,u=Array.isArray(l);if(u&&"UL"===n||"OL"===n)t.innerHTML=l.map(function(e,t){return 0===t?"\n\t<li>"+e+"</li>\n":"\t<li>"+e+"</li>\n"}).join("");else switch(n){case"A":var s=t.getAttribute("href");t.setAttribute("href",s+l),t.innerText=l;break;default:t.innerText=l}})}(),t=document.querySelectorAll("#accstmnt_issues fieldset:not(.proto)"),n=e.querySelector("#statement-limitations-block"),a=e.querySelector("#statement-limitations"),o="",Array.prototype.forEach.call(t,function(e){var t=e.querySelector("input[name=element]").value,n=e.querySelector("input[name=description]").value,r=e.querySelector("input[name=reason]").value,a=e.querySelector("input[name=us]").value,c=e.querySelector("input[name=you]").value;(t||n||r||a||c)&&(o+="\t<li><strong>"+t+"</strong>: "+n+" because "+r+". "+a+". "+c+".</li>\n")}),o?(a.innerHTML="\n"+o,n.removeAttribute("hidden")):n.setAttribute("hidden","")),Array.prototype.forEach.call(u,function(e){e.setAttribute("hidden","")}),document.querySelector("#accstatement .page."+s).removeAttribute("hidden"),window.scrollTo(0,0)}function s(e){var t=t||null;t.saveAs(data,e)}function s(e){if(e)switch(e){case"html":var t=function(){var e=document.getElementById("statement_generated").cloneNode(!0),t=e.querySelectorAll("[hidden]");function n(e){return Array.prototype.filter.call(e.children,function(e){return"DIV"===e.nodeName})}return Array.prototype.forEach.call(t,function(e){e.parentNode.removeChild(e)}),Array.prototype.forEach.call(n(e),function(e){!function e(t){var r=document.createDocumentFragment(),a=n(t);a.length>0?(Array.prototype.forEach.call(a,function(t){e(t)}),e(t)):(Array.prototype.forEach.call(t.children,function(e){var t=document.createElement(e.nodeName);t.innerHTML=e.innerHTML,e.classList.length>0&&(t.classList=e.classList),r.appendChild(t)}),t.parentNode.insertBefore(r,t),t.parentNode.removeChild(t))}(e)}),Array.prototype.map.call(e.children,function(e){return e.outerHTML.replace(/( data-if=")[^\"]*\"/g,"").replace(/( data-print=")[^\"]*\"/g,"").replace(/( data-printdefault=")[^\"]*\"/g,"").replace(/ {4,}/g,"\t").replace(/ {2,}/g,"")}).join("\n").replace(/\t(<\/)/g,"</").replace(/\t\n/g,"")}();a.saveAs(t,e)}}window.onhashchange=u,window.onbeforeunload=function(e){if(r.state.get("changed"))return window.confirm()},o.indexOf(location.hash.substring(1))<0?window.location.hash="create":u(),e=document.querySelectorAll("#accstatement button.add-line"),Array.prototype.forEach.call(e,function(e){e.addEventListener("click",function(e){var t=e.target.parentNode,n=t.querySelectorAll(".line"),r=t.querySelector(".proto"),a=r.cloneNode(!0);a.classList.remove("proto"),a.classList.add("line"),a.innerHTML=a.innerHTML.replace(/\[n\]/g,n.length+1),r.parentNode.insertBefore(a,r),a.querySelector("input, textarea").focus()})}),t=document.querySelectorAll(".statement-actions"),Array.prototype.forEach.call(t,function(e){e.addEventListener("click",function(e){var t=e.target,n=t.dataset.action;if("BUTTON"===t.nodeName&&n){switch(n){case"preview_save_as_html":s("html");break;case"preview_save_as_json":s("json")}e.stopPropagation()}})}),Array.prototype.forEach.call(document.querySelectorAll('a[href="#top"]'),function(e){e.addEventListener("click",function(t){e.setAttribute("href","#"+l()+"-top")})})})()}]);