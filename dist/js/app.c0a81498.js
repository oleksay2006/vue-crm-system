(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c1056":"039dfef0","chunk-2d0c9708":"bc34f39c","chunk-2d0d05dc":"4ec82647","chunk-2d0f0fa0":"71de024b","chunk-2d217357":"43593003","chunk-2d2259e5":"78f53568","chunk-2d22cdfc":"0d2b6e05","chunk-5f4ad635":"d85119f0","chunk-a04b3394":"abcfcebd"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var u=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4");var r=n("2b0e"),a=n("1dce"),o=n.n(a),i=n("4f60"),c=(n("256a"),n("2979"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.layout,{tag:"component"},[n("router-view")],1)],1)}),s=[],u=n("4d5c"),l=n.n(u),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grey darken-1 empty-layout"},[n("router-view")],1)},f=[],p=n("b444"),m={computed:{error:function(){return this.$store.getters.ERROR}},watch:{error:function(e){l.a.toast({html:p["a"][e.code]})}}},h=m,v=n("2877"),b=Object(v["a"])(h,d,f,!1,null,null,null),g=b.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loading?n("Loader"):n("div",{staticClass:"app-main-layout"},[n("Navbar",{on:{click:function(t){e.isOpen=!e.isOpen}}}),n("Sidebar",{model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}}),n("main",{staticClass:"app-content",class:{full:!e.isOpen}},[n("div",{staticClass:"app-page"},[n("router-view")],1)]),n("div",{staticClass:"fixed-action-btn"},[n("router-link",{staticClass:"btn-floating btn-large blue",attrs:{to:"/record"}},[n("i",{staticClass:"large material-icons"},[e._v("add")])])],1)],1)],1)},y=[],O=n("1da1"),_=n("5530"),k=(n("96cf"),n("b64b"),n("2f62")),R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar orange lighten-1"},[n("div",{staticClass:"nav-wrapper"},[n("div",{staticClass:"navbar-left"},[n("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[n("i",{staticClass:"material-icons black-text"},[e._v("dehaze")])]),n("span",{staticClass:"black-text"},[e._v(e._s(e._f("date")(e.date,"datetime")))])]),n("ul",{staticClass:"right hide-on-small-and-down"},[n("li",[n("a",{ref:"dropdown",staticClass:"dropdown-trigger black-text",attrs:{href:"#","data-target":"dropdown"}},[e._v(" USER NAME "),n("i",{staticClass:"material-icons right"},[e._v("arrow_drop_down")])]),n("ul",{staticClass:"dropdown-content",attrs:{id:"dropdown"}},[n("li",[n("router-link",{staticClass:"black-text",attrs:{to:"/profile"}},[n("i",{staticClass:"material-icons"},[e._v("account_circle")]),e._v("Профиль ")])],1),n("li",{staticClass:"divider",attrs:{tabindex:"-1"}}),n("li",[n("a",{staticClass:"black-text",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logout.apply(null,arguments)}}},[n("i",{staticClass:"material-icons"},[e._v("assignment_return")]),e._v("Выйти ")])])])])])])])},C=[],E={name:"Navbar",data:function(){return{date:new Date,interval:null,dropdown:null}},mounted:function(){var e=this;l.a.AutoInit(),this.dropdown=l.a.Dropdown.init(this.$refs.dropdown,{constrainWidth:!0}),this.interval=setInterval((function(){e.date=new Date}),1e3)},methods:Object(_["a"])(Object(_["a"])({},Object(k["b"])(["LOG_OUT"])),{},{logout:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.LOG_OUT();case 2:e.$router.push("/?message=logout");case 3:case"end":return t.stop()}}),t)})))()}}),beforeDestroy:function(){clearInterval(this.interval),this.dropdown&&this.dropdown.destroy&&this.dropdown.destroy()}},x=E,j=Object(v["a"])(x,R,C,!1,null,null,null),I=j.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"sidenav app-sidenav",class:{open:e.value}},e._l(e.links,(function(t){return n("router-link",{key:t.url,attrs:{tag:"li",to:t.url,"active-class":"active"}},[n("a",{staticClass:"waves-effect waves-orange pointer",attrs:{href:"#"}},[e._v(e._s(t.title))])])})),1)},S=[],T={name:"Sidebar",props:["value"],data:function(){return{links:[{title:"Счет",url:"/home"},{title:"История",url:"/history"},{title:"Планирование",url:"/planning"},{title:"Новая запись",url:"/record"},{title:"Категории",url:"/categories"}]}}},F=T,A=Object(v["a"])(F,N,S,!1,null,null,null),$=A.exports,D={name:"main-layout",components:{Navbar:I,Sidebar:$},methods:Object(_["a"])({},Object(k["b"])(["FETCH_INFO"])),data:function(){return{isOpen:!0,loading:!0}},mounted:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(Object.keys(e.INFO).length){t.next=3;break}return t.next=3,e.FETCH_INFO();case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},computed:Object(_["a"])({},Object(k["c"])(["INFO"]))},L=D,U=Object(v["a"])(L,w,y,!1,null,null,null),P=U.exports,G={components:{EmptyLayout:g,MainLayout:P},computed:{layout:function(){return"".concat(this.$route.meta.layout||"empty","-layout")}},mounted:function(){l.a.AutoInit()}},M=G,B=(n("034f"),Object(v["a"])(M,c,s,!1,null,null,null)),z=B.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-loader"},[n("div",{staticClass:"preloader-wrapper active"},[n("div",{staticClass:"spinner-layer",class:e.color},[e._m(0),e._m(1),e._m(2)])])])},q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"circle-clipper left"},[n("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gap-patch"},[n("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"circle-clipper right"},[n("div",{staticClass:"circle"})])}],W={computed:{color:function(){var e=["spinner-red-only","spinner-blue-only","spinner-green-only"];return e[Math.floor(3*Math.random())]}}},J=W,K=Object(v["a"])(J,H,q,!1,null,null,null),Y=K.exports,Q=n("9483");Object(Q["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var X=n("8c4f");r["a"].use(X["a"]);var V=[{path:"/",name:"login",meta:{layout:"empty"},component:function(){return n.e("chunk-5f4ad635").then(n.bind(null,"a55b"))}},{path:"/registration",name:"registration",meta:{layout:"empty"},component:function(){return n.e("chunk-a04b3394").then(n.bind(null,"3fd1"))}},{path:"/categories",name:"categories",meta:{layout:"main"},component:function(){return n.e("chunk-2d0c9708").then(n.bind(null,"58c2"))}},{path:"/history",name:"history",meta:{layout:"main"},component:function(){return n.e("chunk-2d2259e5").then(n.bind(null,"e4bb"))}},{path:"/home",name:"home",meta:{layout:"main"},component:function(){return n.e("chunk-2d22cdfc").then(n.bind(null,"f4a9"))}},{path:"/details",name:"details",meta:{layout:"main"},component:function(){return n.e("chunk-2d0f0fa0").then(n.bind(null,"9f52"))}},{path:"/planning",name:"planning",meta:{layout:"main"},component:function(){return n.e("chunk-2d0d05dc").then(n.bind(null,"6859"))}},{path:"/profile",name:"profile",meta:{layout:"main"},component:function(){return n.e("chunk-2d217357").then(n.bind(null,"c66d"))}},{path:"/record",name:"record",meta:{layout:"main"},component:function(){return n.e("chunk-2d0c1056").then(n.bind(null,"43ef"))}}],Z=new X["a"]({mode:"history",base:"/",routes:V}),ee=Z,te=(n("b0c0"),{state:{info:{}},mutations:{SET_INFO:function(e,t){e.info=t},CLEAR_INFO:function(e){e.info={}}},actions:{FETCH_INFO:function(e){return Object(O["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.dispatch,t.prev=1,t.next=4,r("GET_ID");case 4:return a=t.sent,console.log(a),t.next=8,i["a"].database().ref("/users/".concat(a,"/info")).once("value");case 8:o=t.sent,console.log(o),n("SET_INFO",o),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})))()}},getters:{INFO:function(e){return e.info}}});r["a"].use(k["a"]);var ne=new k["a"].Store({state:{error:null},mutations:{SET_ERROR:function(e,t){e.error=t},CLEAR_ERROR:function(e){e.error=null},SIGNIN:function(){},REGISTRATION:function(){}},actions:{FETCH_CURRENCY:function(){return Object(O["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="8f0d4d1fdcee7664ea2a05549843ac98",e.next=3,fetch("http://data.fixer.io/api/latest?access_key=".concat(t,"&symbols=USD,EUR,RUB"));case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})))()},LOGIN:function(e,t){return Object(O["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=t.email,o=t.password,n.prev=2,n.next=5,i["a"].auth().signInWithEmailAndPassword(a,o);case 5:r("SIGNIN"),n.next=12;break;case 8:throw n.prev=8,n.t0=n["catch"](2),r("SET_ERROR",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[2,8]])})))()},LOG_OUT:function(e){return Object(O["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,i["a"].auth().signOut();case 3:n("CLEAR_INFO");case 4:case"end":return t.stop()}}),t)})))()},REGISTER:function(e,t){return Object(O["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,s,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,o=t.email,c=t.password,s=t.name,n.prev=2,n.next=5,i["a"].auth().createUserWithEmailAndPassword(o,c);case 5:return n.next=7,a("GET_ID");case 7:return u=n.sent,n.next=10,i["a"].database().ref("/users/".concat(u,"/info")).set({bill:1e4,name:s});case 10:n.next=16;break;case 12:throw n.prev=12,n.t0=n["catch"](2),r("SET_ERROR",n.t0),n.t0;case 16:case"end":return n.stop()}}),n,null,[[2,12]])})))()},GET_ID:function(){var e=i["a"].auth().currentUser;return e?e.uid:null}},getters:{ERROR:function(e){return e.error}},modules:{info:te}});n("6885"),n("caad"),n("2532");function re(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",n={};return t.includes("date")&&(n.day="2-digit",n.month="long",n.year="numeric"),t.includes("time")&&(n.hour="2-digit",n.minute="2-digit",n.second="2-digit"),new Intl.DateTimeFormat("ru-RU",n).format(new Date(e))}function ae(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"RUB";return Intl.NumberFormat("ru-RU",{style:"currency",currency:t}).format(e)}r["a"].config.productionTip=!1,r["a"].filter("date",re),r["a"].filter("currency",ae),r["a"].use(o.a),r["a"].component("Loader",Y);var oe={apiKey:"AIzaSyDB7X4d1b79obqPlnrgkuzSh0hKtiQ8xYw",authDomain:"vue-crm-d0d2b.firebaseapp.com",projectId:"vue-crm-d0d2b",storageBucket:"vue-crm-d0d2b.appspot.com",messagingSenderId:"49982493637",appId:"1:49982493637:web:548e992e70a5ea892db1ac"};i["a"].initializeApp(oe),new r["a"]({router:ee,store:ne,render:function(e){return e(z)}}).$mount("#app")},"85ec":function(e,t,n){},b444:function(e,t,n){"use strict";t["a"]={logout:"Вы вышли из системы","auth/user-not-found":"Пользователя с таким email не существует","auth/wrong-password":"Неправильный пароль","auth/email-already-in-use":"Такой email занят"}}});
//# sourceMappingURL=app.c0a81498.js.map