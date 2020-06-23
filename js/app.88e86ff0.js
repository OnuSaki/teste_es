(function(e){function t(t){for(var o,c,s=t[0],i=t[1],l=t[2],u=0,p=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&p.push(n[c][0]),n[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,s=1;s<r.length;s++){var i=r[s];0!==n[i]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var o={},n={app:0},a=[];function c(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=o,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(r,o,function(t){return e[t]}.bind(null,o));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/teste_es/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var o=r("85ec"),n=r.n(o);n.a},"166e":function(e,t,r){e.exports=r.p+"img/confirmed.02b1f860.jpg"},"16c4":function(e,t,r){e.exports=r.p+"img/recovered.7631be43.jpg"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:"https://covid19api.com/assets/images/image06.png?v19509205981951"}}),r("h1",[e._v("TOPCovid")]),r("covid")],1)},a=[],c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"hello"},[o("div",{staticClass:"position-relative d-flex align-items-center justify-content-center"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 pb-2"},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedFacet,expression:"selectedFacet"}],attrs:{id:"selectedFacet"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedFacet=t.target.multiple?r:r[0]}}},[o("option",{attrs:{value:"confirmed"}},[e._v("Confirmados")]),o("option",{attrs:{value:"dead"}},[e._v("Mortos")]),o("option",{attrs:{value:"recovered"}},[e._v("Recuperados")])])]),o("div",{staticClass:"col-12 pb-2"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.topX,expression:"topX"}],attrs:{type:"number",id:"topX",min:"1",max:"10"},domProps:{value:e.topX},on:{input:function(t){t.target.composing||(e.topX=t.target.value)}}})]),o("div",{staticClass:"col-12 pb-2"},[o("button",{on:{click:function(t){return e.getTopCountries()}}},[e._v("Ver Casos")])]),"confirmed"==e.selectedFacet?o("div",{staticClass:"col-12 pb-2"},[o("img",{staticStyle:{width:"300px",height:"auto"},attrs:{src:r("166e")}})]):e._e(),"dead"==e.selectedFacet?o("div",{staticClass:"col-12 pb-2"},[o("img",{staticStyle:{width:"300px",height:"auto"},attrs:{src:r("ad7b")}})]):e._e(),"recovered"==e.selectedFacet?o("div",{staticClass:"col-12 pb-2"},[o("img",{staticStyle:{width:"300px",height:"auto"},attrs:{src:r("16c4")}})]):e._e(),""!=e.date?o("div",{staticClass:"col-12 pb-2"},[o("p",[e._v(e._s(e.date.getDate())+"/"+e._s(e.date.getMonth()+1)+"/"+e._s(e.date.getFullYear()))])]):e._e()])]),o("div",{staticClass:"position-relative d-flex align-items-center justify-content-center"},[0!=e.topCountries.length?o("div",[o("table",{staticClass:"table",staticStyle:{width:"40rem"}},[o("thead",{staticClass:"thead-dark"},[o("tr",[o("th",{attrs:{scope:"col"}},[e._v("Country")]),"confirmed"==e.selectedFacet?o("th",{attrs:{scope:"col"}},[e._v("Total Confirmed")]):e._e(),"confirmed"==e.selectedFacet?o("th",{attrs:{scope:"col"}},[e._v("New Confirmed")]):e._e(),"dead"==e.selectedFacet?o("th",{attrs:{scope:"col"}},[e._v("Total Deaths")]):e._e(),"dead"==e.selectedFacet?o("th",{attrs:{scope:"col"}},[e._v("New Deaths")]):e._e(),"recovered"==e.selectedFacet?o("th",{attrs:{scope:"col"}},[e._v("Total Recovered")]):e._e(),"recovered"==e.selectedFacet?o("th",{attrs:{scope:"col"}},[e._v("New Recovered")]):e._e()])]),o("tbody",e._l(e.topCountries,(function(t){return o("tr",{key:t.Country},[o("td",[e._v(e._s(t.Country))]),"confirmed"==e.selectedFacet?o("td",[e._v(e._s(t.TotalConfirmed))]):e._e(),"confirmed"==e.selectedFacet?o("td",[e._v(e._s(t.NewConfirmed))]):e._e(),"dead"==e.selectedFacet?o("td",[e._v(e._s(t.TotalDeaths))]):e._e(),"dead"==e.selectedFacet?o("td",[e._v(e._s(t.NewDeaths))]):e._e(),"recovered"==e.selectedFacet?o("td",[e._v(e._s(t.TotalRecovered))]):e._e(),"recovered"==e.selectedFacet?o("td",[e._v(e._s(t.NewRecovered))]):e._e()])})),0)])]):e._e()])])},s=[],i=(r("d3b7"),r("96cf"),r("1da1")),l={name:"covid19",data:function(){return{countries:[],selectedFacet:"",topX:"",topCountries:[],facetConverter:"",date:""}},methods:{getTopCountries:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,o,n,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.covid19api.com/summary");case 2:return r=t.sent,t.next=5,r.json();case 5:if(o=t.sent,e.topCountries=[],e.countries=o.Countries,"confirmed"==e.selectedFacet)for(e.countries.sort((function(e,t){return e.TotalConfirmed<t.TotalConfirmed?1:-1})),n=0;n<parseInt(e.topX);n++)e.topCountries.push(e.countries[n]);else if("dead"==e.selectedFacet)for(e.countries.sort((function(e,t){return e.TotalDeaths<t.TotalDeaths?1:-1})),a=0;a<parseInt(e.topX);a++)e.topCountries.push(e.countries[a]);else if("recovered"==e.selectedFacet)for(e.countries.sort((function(e,t){return e.TotalRecovered<t.TotalRecovered?1:-1})),c=0;c<parseInt(e.topX);c++)e.topCountries.push(e.countries[c]);e.date=new Date;case 10:case"end":return t.stop()}}),t)})))()}}},d=l,u=r("2877"),p=Object(u["a"])(d,c,s,!1,null,null,null),v=p.exports,f={name:"App",components:{covid:v}},m=f,_=(r("034f"),Object(u["a"])(m,n,a,!1,null,null,null)),h=_.exports;r("4989"),r("ab8b");o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,t,r){},ad7b:function(e,t,r){e.exports=r.p+"img/dead.212648a1.png"}});
//# sourceMappingURL=app.88e86ff0.js.map