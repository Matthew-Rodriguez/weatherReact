(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(11)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),o=t.n(r),i=(t(9),t(1)),s=(t(10),"19747c819dfeefeefc2cb2263d62098f"),m="https://api.openweathermap.org/data/2.5/";var l=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)({}),l=Object(i.a)(o,2),u=l[0],d=l[1];return c.a.createElement("div",{className:"undefined"!=typeof u.main&&u.main.temp>16?"app warm":"app"},c.a.createElement("main",null,c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return r(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(m,"weather?q=").concat(t,"&units=metric&APPID=").concat(s)).then((function(e){return e.json()})).then((function(e){d(e),r("")}))}})),"undefined"!=typeof u.main?c.a.createElement("div",null,c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},u.name,", ",u.sys.country),c.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c)}(new Date))),c.a.createElement("div",{className:"weather-box"},c.a.createElement("div",{className:"temp"},Math.round(9*u.main.temp/5)+32,"\xb0F"),c.a.createElement("div",{className:"weather"},u.weather[0].main))):""))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(l,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.8aaa2d74.chunk.js.map