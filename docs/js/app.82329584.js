(function(t){function e(e){for(var n,r,l=e[0],c=e[1],o=e[2],d=0,v=[];d<l.length;d++)r=l[d],s[r]&&v.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,l=1;l<a.length;l++){var c=a[l];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/kanjinary/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0cfb":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n,s,i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar is-info is-fixed-top",attrs:{role:"navigation","aria-label":"main navigation"}},[t._m(0),a("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",class:{"is-active":"home"==t.current},attrs:{to:"/"}},[t._v("\n          Inicio\n        ")]),a("router-link",{staticClass:"navbar-item",class:{"is-active":"levels"==t.current},attrs:{to:"/levels/all"}},[t._v("\n          Niveles\n        ")]),a("router-link",{staticClass:"navbar-item",class:{"is-active":"search"==t.current},attrs:{to:"/search"}},[t._v("\n          Buscar\n        ")])],1),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"field has-addons"},[t._m(1),a("div",{staticClass:"control"},[a("a",{staticClass:"button is-link is-rounded"},[a("font-awesome-icon",{attrs:{icon:"search"}})],1)])])])])])]),a("section",{staticClass:"hero is-info",class:{"is-medium":"home"==t.current}},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container has-text-centered"},[a("h1",{staticClass:"title is-size-2"},[t._v("\n          "+t._s(t.title)+"\n        ")]),"home"==t.current?a("h2",{staticClass:"subtitle"},[t._v("\n          "+t._s(t.welcomeMsg)+"\n        ")]):t._e(),"home"==t.current?a("router-link",{staticClass:"button is-info is-inverted is-outlined",attrs:{to:"/levels/小学校の１年"}},[t._v("\n              "+t._s(t.startMsg)+"\n        ")]):t._e()],1)])]),a("router-view"),a("Footer")],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item",attrs:{href:"https://bulma.io"}},[a("img",{attrs:{src:"https://bulma.io/images/bulma-type-white.png",width:"112",height:"28"}})]),a("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"control"},[a("input",{staticClass:"input is-rounded",attrs:{type:"text",placeholder:"Buscar"}})])}],c=(a("ac6a"),a("7f7f"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer m-t-lg has-background-info"},[a("div",{staticClass:"content has-text-centered has-text-white"},[a("p",[a("strong",{staticClass:"has-text-white"},[t._v("Kanjinary")]),t._v(" por "),a("u",[a("a",{staticClass:"has-text-white",attrs:{href:"https://www.kabi404.dev"}},[t._v("kabi404")])]),t._v(". El código está bajo licencia \n        "),a("u",[a("a",{staticClass:"has-text-white",attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[t._v("MIT")])]),t._v(".\n    ")])])])}],u=a("2877"),d={},v=Object(u["a"])(d,c,o,!1,null,null,null),m=v.exports,p={name:"app",components:{Footer:m},data:function(){return{test:"Nav test!",title:"漢字ナリ",welcomeMsg:"Bienvenido a Kanjinary, una base de datos de kanjis hecha por y para estudiantes de japonés.",startMsg:"Comenzar por el primer nivel"}},computed:{current:function(){return this.$route.name}},methods:{burgerToggleEventAdd:function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach(function(t){t.addEventListener("click",function(){var e=t.dataset.target,a=document.getElementById(e);t.classList.toggle("is-active"),a.classList.toggle("is-active")})})}},mounted:function(){this.burgerToggleEventAdd()}},f=p,h=(a("cf25"),Object(u["a"])(f,r,l,!1,null,null,null)),b=h.exports,_=a("8c4f"),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("section",{staticClass:"container"},[t._m(0),a("div",{staticClass:"columns is-multiline"},t._l(t.cards,function(t,e){return a("div",{key:e,staticClass:"column is-4"},[a("IconCard",{attrs:{title:t.title,content:t.content,link:t.link,href:t.href,iconRef:t.icon}})],1)}),0)])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns"},[a("div",{staticClass:"column has-text-centered m-t-lg m-b-lg"},[a("h1",{staticClass:"is-size-2"},[t._v("El proyecto Kanjinary")])])])}],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-image has-text-centered has-text-info"},[a("font-awesome-icon",{staticClass:"is-size-1 m-t-lg",attrs:{icon:t.iconRef}})],1),a("div",{staticClass:"card-content m-t-lg"},[a("div",{staticClass:"content has-text-justified"},[a("h4",[t._v(t._s(t.title))]),a("p",[t._v(t._s(t.content))]),a("p",[a("a",{attrs:{target:"_blank",href:t.href}},[t._v(t._s(t.link))])])])])])},j=[],y={name:"icon-card",props:{title:String,content:String,link:String,href:String,iconRef:String},data:function(){return{test:"Test icon-card!"}},computed:{current:function(){return this.$route.name}}},x=y,w=(a("d1a6"),Object(u["a"])(x,k,j,!1,null,null,null)),E=w.exports,O={name:"home",components:{IconCard:E},data:function(){return{cards:[{title:"Sobre mi",content:"Soy un Ingeniero de Software y estudiante de japonés. Este proyecto está hecho para facilitar el estudio de kanjis mediante información y recursos.",link:"Saber más",href:"https://github.com/kabi404",icon:"coffee"},{title:"Software libre",content:"El proyecto está protegido bajo la licencia de software libre MIT. Cualquier persona puede colaborar en el proyecto.",link:"Ver licencia",href:"https://github.com/kabi404/kanjinary/blob/master/LICENSE",icon:"unlock-alt"},{title:"El proyecto",content:"Todo el código y datos del proyecto está disponible en GitHub. Para participar tan sólo haz alguna modificación del código interesante o añade kanjis que aún no estén incluidos.",link:"Ir al proyecto",href:"https://github.com/kabi404/kanjinary",icon:"users"}]}}},$=O,S=Object(u["a"])($,C,g,!1,null,null,null),T=S.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"kanjis"}},[a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-10"},[a("Kanji",{attrs:{kanji:t.kanji}})],1)])])},M=[],L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section has-text-centered m-t-lg"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("h1",{staticClass:"title is-size-1"},[t._v(t._s(t.kanji.ideogram))])])]),a("div",{staticClass:"columns is-multiline is-centered"},[t._m(0),a("div",{staticClass:"column is-5 has-text-center is-paddingless"},[a("p",{staticClass:"is-size-5"},t._l(t.kanji.kunyomi,function(e){return a("span",{key:e,staticClass:"p-l-sm p-r-sm"},[t._v(t._s(e))])}),0)])]),a("div",{staticClass:"columns is-multiline is-centered m-t-l"},[t._m(1),a("div",{staticClass:"column is-5 has-text-center is-paddingless"},[a("p",{staticClass:"is-size-5"},t._l(t.kanji.onyomi,function(e){return a("span",{key:e,staticClass:"p-l-sm p-r-sm"},[t._v(t._s(e))])}),0)])]),a("div",{staticClass:"columns is-centered m-t-md m-b-sm"},[a("div",{staticClass:"column is-2"},[a("p",[t._v("Partes")]),t._l(t.kanji.parts,function(e){return a("span",{key:e,staticClass:"p-l-sm p-r-sm"},[t._v(t._s(e))])})],2),a("div",{staticClass:"column is-2"},[a("p",[t._v("Radical")]),t._v(" "+t._s(t.kanji.radical)+"\n        ")]),a("div",{staticClass:"column is-2"},[a("p",[t._v("Trazos")]),t._v(" "+t._s(t.kanji.strokes)+"\n        ")]),a("div",{staticClass:"column is-2"},[a("p",[t._v("Nivel")]),t._v(" "+t._s(t.kanji.lvl)+"\n        ")])])])},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column is-12 has-text-center"},[a("p",{staticClass:"is-size-5"},[t._v("Kunyomi")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column is-12 has-text-center"},[a("p",{staticClass:"is-size-5"},[t._v("Onyomi")])])}],I={name:"kanji",props:{kanji:Object},data:function(){return{}}},K=I,P=Object(u["a"])(K,L,R,!1,null,null,null),B=P.exports,A="https://www.kabi404.dev/kanjinary/static/kanji/",N={name:"kanjis",components:{Kanji:B},data:function(){return{test:"Test kanjis",kanji:{}}},beforeMount:function(){this.loadKanji()},methods:{loadKanji:function(){var t=this.$route.params.kanji,e=this,n=a("bc3a");n.get(A+t+".json").then(function(t){e.kanji=t.data}).catch(function(t){alert("ERROR")})}}},q=N,F=Object(u["a"])(q,z,M,!1,null,null,null),J=F.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"levels"}},t._l(t.levels,function(t){return a("div",{key:t.name},[a("Level",{attrs:{name:t.name,kanjis:t.kanjis}})],1)}),0)},H=[],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"container"},[a("div",{staticClass:"columns is-mobile"},[a("div",{staticClass:"column has-text-centered m-t-xl"},[a("h1",{staticClass:"is-narrow title"},[t._v(t._s(t.name))])])]),a("div",{staticClass:"columns is-centered is-multiline is-mobile"},t._l(t.kanjis,function(e){return a("div",{key:e,staticClass:"column is-narrow-mobile is-1-tablet"},[a("router-link",{attrs:{to:"/kanji/"+e}},[a("p",{staticClass:"is-size-3 has-text-centered has-text-dark"},[t._v("\n                  "+t._s(e)+"\n                ")])])],1)}),0)])},D=[],Q={name:"level",data:function(){return{test:"Test level!"}},props:{name:String,kanjis:Array}},U=Q,W=Object(u["a"])(U,V,D,!1,null,null,null),X=W.exports,Y="https://www.kabi404.dev/kanjinary/static/lvl/",Z={name:"Levels",components:{Level:X},data:function(){return{test:"Test Level!!",levels:[{}]}},beforeMount:function(){this.loadLevels()},methods:{loadLevels:function(){var t=this.$route.params.lvl,e=this,n=a("bc3a");n.get(Y+t+".json").then(function(a){e.levels=a.data,"all"!=t&&(e.levels=[e.levels])}).catch(function(t){alert("ERROR")})}}},tt=Z,et=Object(u["a"])(tt,G,H,!1,null,null,null),at=et.exports,nt={},st=Object(u["a"])(nt,n,s,!1,null,null,null),it=st.exports;i["a"].use(_["a"]);var rt=new _["a"]({routes:[{path:"/",name:"home",component:T},{path:"/kanji/:kanji",name:"kanjis",component:J},{path:"/levels/:lvl",name:"levels",component:at},{path:"/search",name:"search",component:it}]}),lt=a("ecee"),ct=a("c074"),ot=a("ad3d");i["a"].config.productionTip=!1,lt["c"].add(ct["a"]),lt["c"].add(ct["c"]),lt["c"].add(ct["d"]),lt["c"].add(ct["b"]),i["a"].component("font-awesome-icon",ot["a"]),new i["a"]({router:rt,render:function(t){return t(b)}}).$mount("#app")},"962a":function(t,e,a){},cf25:function(t,e,a){"use strict";var n=a("0cfb"),s=a.n(n);s.a},d1a6:function(t,e,a){"use strict";var n=a("962a"),s=a.n(n);s.a}});
//# sourceMappingURL=app.82329584.js.map