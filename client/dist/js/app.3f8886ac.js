(function(e){function t(t){for(var a,r,o=t[0],l=t[1],u=t[2],s=0,d=[];s<o.length;s++)r=o[s],i[r]&&d.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);h&&h(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},i={app:0},c=[];function o(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-219c2f50":"bdb3bc2a","chunk-15960436":"c3130483","chunk-3e463e7a":"6181c22f","chunk-47a9057d":"61e3e9e2","chunk-49879230":"909937fa","chunk-5fbac066":"6bdea97c","chunk-2d0cf296":"e00e315a","chunk-2d0d63f1":"a5539d0c","chunk-2d0e95df":"33fbc523","chunk-2d21a3d2":"d50c724c","chunk-cb1616fc":"c7f04c33"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-15960436":1,"chunk-3e463e7a":1,"chunk-47a9057d":1,"chunk-49879230":1,"chunk-5fbac066":1,"chunk-cb1616fc":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-219c2f50":"31d6cfe0","chunk-15960436":"56363e21","chunk-3e463e7a":"e5f9343e","chunk-47a9057d":"83fd7d13","chunk-49879230":"e7faf791","chunk-5fbac066":"5930a974","chunk-2d0cf296":"31d6cfe0","chunk-2d0d63f1":"31d6cfe0","chunk-2d0e95df":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-cb1616fc":"0db8147d"}[e]+".css",i=l.p+a,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var u=c[o],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===a||s===i))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],s=u.getAttribute("data-href");if(s===a||s===i)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||i,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],h.parentNode.removeChild(h),n(c)},h.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(h)}).then(function(){r[e]=0}));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise(function(t,n){a=i[e]=[t,n]});t.push(a[2]=c);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=o(e),u=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");c.type=a,c.request=r,n[1](c)}i[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:s})},12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="https://doudizhu.github.io/mevn-worm/dist/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0b9c":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view"},[n("el-menu",{attrs:{"default-active":e.currentRoutePath,collapse:e.isCollapse,router:""}},[e._l(e.$store.state.routes,function(t){return t.hidden&&t.children&&t.children.length>0?[1==t.children.length?n("el-menu-item",{key:t.children[0].path,attrs:{index:t.children[0].path}},[t.children[0].meta.icon?n("i",{class:t.children[0].meta.icon}):e._e(),!t.children[0].meta.icon&&e.isCollapse&&t.children[0].meta&&t.children[0].meta.title?n("i",[e._v(e._s(t.children[0].meta.title.slice(0,2)))]):e._e(),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.children[0].meta.title))])]):n("el-submenu",{attrs:{index:t.children[0].path}},[n("template",{slot:"title"},[t.meta.icon?n("i",{class:t.meta.icon}):e._e(),!t.meta.icon&&e.isCollapse&&t.meta&&t.meta.title?n("i",[e._v(e._s(t.meta.title.slice(0,2)))]):e._e(),t.meta&&t.meta.title?n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.meta.title))]):e._e()]),e._l(t.children,function(a){return n("el-menu-item",{key:t.path+"/"+a.path,attrs:{index:t.path+"/"+a.path}},[n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.meta.title))])])})],2)]:e._e()})],2)],1)},r=[],i=n("d225"),c=n("b0b4"),o=n("308d"),l=n("6bb5"),u=n("4e2b"),s=n("9ab4"),d=n("60a3"),h=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(o["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.currentRoutePath="",e.isCollapse=!0,e}return Object(u["a"])(t,e),Object(c["a"])(t,[{key:"handleRouteChange",value:function(e){this.currentRoutePath=this.$router.currentRoute.path}},{key:"onNameChange",value:function(e,t){this.isCollapse=this.$store.state.isCollapseSidebar}},{key:"created",value:function(){this.$store.dispatch("setRoutes")}}]),t}(d["d"]);s["a"]([Object(d["e"])("$route",{immediate:!0})],h.prototype,"handleRouteChange",null),s["a"]([Object(d["e"])("$store.state.isCollapseSidebar",{immediate:!0})],h.prototype,"onNameChange",null),h=s["a"]([Object(d["a"])({components:{}})],h);var f=h,p=f,m=n("2877"),b=Object(m["a"])(p,a,r,!1,null,null,null),v=(b.exports,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view"},[n("el-dialog",{attrs:{title:"域名配置",visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[n("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("el-form-item",{attrs:{label:"api域名配置",prop:"domainApi"}},[n("el-input",{attrs:{placeholder:"domainApi"},model:{value:e.$store.state.domainApi,callback:function(t){e.$set(e.$store.state,"domainApi",t)},expression:"$store.state.domainApi"}})],1),n("el-button",{attrs:{type:"primary",round:""},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("确认")])],1)],1),n("a",{staticClass:"debugBtn",on:{click:function(t){e.visible=!e.visible}}},[e._v("调试")])],1)}),g=[],k=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(o["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.visible=!1,e.ruleForm={},e.rules={},e}return Object(u["a"])(t,e),Object(c["a"])(t,[{key:"created",value:function(){}},{key:"submitForm",value:function(e){var t=this;this.$refs[e].validate(function(e){e&&(t.visible=!1)})}}]),t}(d["d"]);k=s["a"]([Object(d["a"])({components:{}})],k);var O=k,_=O,j=(n("f226"),Object(m["a"])(_,v,g,!1,null,"7e16446e",null)),y=j.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view"},[n("CollapseSidbar"),n("Breadcrumb"),n("AccountInfo")],1)},w=[],E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-breadcrumb",{staticClass:"breadcrumb",attrs:{separator:"/"}},e._l(e.breadCrumbItems,function(t,a){return n("el-breadcrumb-item",{key:a,attrs:{to:{path:t.path}}},[e._v(e._s(t.title))])}),1)},S=[],x=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(o["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.breadCrumbItems=[],e}return Object(u["a"])(t,e),Object(c["a"])(t,[{key:"handleRouteChange",value:function(e){this.initBreadCrumbItems(e)}},{key:"created",value:function(){this.initBreadCrumbItems(this.$route)}},{key:"initBreadCrumbItems",value:function(e){var t=[{path:"/",title:"首页"}];for(var n in e.matched)e.matched[n].meta&&e.matched[n].meta.title&&t.push({path:e.matched[n].path?e.matched[n].path:"/",title:e.matched[n].meta.title});this.breadCrumbItems=t}}]),t}(d["d"]);s["a"]([Object(d["e"])("$route")],x.prototype,"handleRouteChange",null),x=s["a"]([Object(d["a"])({components:{}})],x);var T=x,A=T,$=(n("cf57"),Object(m["a"])(A,E,S,!1,null,"f57fbb7a",null)),P=$.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dropdown",{staticStyle:{float:"right"},attrs:{trigger:"click"},on:{command:e.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[e._v(e._s(e.$store.state.user.name)),n("i",{staticClass:"el-icon-setting",staticStyle:{"margin-left":"10px"}})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"personalInfo"}},[e._v("个人信息")]),n("el-dropdown-item",{attrs:{command:"logout",divided:""}},[e._v("退出登录")])],1)],1)},R=[],I=function(e){function t(){return Object(i["a"])(this,t),Object(o["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),Object(c["a"])(t,[{key:"handleCommand",value:function(e){switch(e){case"personalInfo":this.showPersonalInfo();break;case"logout":this.logout();break}}},{key:"showPersonalInfo",value:function(){this.$router.push("/personalInfo")}},{key:"logout",value:function(){this.$store.commit("resetAll"),this.$router.push("/login")}}]),t}(d["d"]);I=s["a"]([Object(d["a"])({components:{}})],I);var N=I,D=N,U=(n("3db7"),Object(m["a"])(D,M,R,!1,null,"6cf4f717",null)),B=U.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hamburger-container",on:{click:function(t){e.isCollapse=!e.isCollapse}}},[n("svg",{staticClass:"hamburger",class:{"is-active":e.isCollapse},attrs:{t:"1492500959545",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1691","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"64",height:"64"}},[n("path",{attrs:{d:"M966.8023 568.849776 57.196677 568.849776c-31.397081 0-56.850799-25.452695-56.850799-56.850799l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 543.397081 998.200404 568.849776 966.8023 568.849776z","p-id":"1692"}}),n("path",{attrs:{d:"M966.8023 881.527125 57.196677 881.527125c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 856.07443 998.200404 881.527125 966.8023 881.527125z","p-id":"1693"}}),n("path",{attrs:{d:"M966.8023 256.17345 57.196677 256.17345c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.850799 56.850799-56.850799l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.850799l0 0C1023.653099 230.720755 998.200404 256.17345 966.8023 256.17345z","p-id":"1694"}})])])},F=[],z=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(o["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.isCollapse=!0,e}return Object(u["a"])(t,e),Object(c["a"])(t,[{key:"onNameChange",value:function(e,t){void 0!==t?this.$store.commit("setIsCollapseSidebar",e):this.isCollapse=this.$store.state.isCollapseSidebar}}]),t}(d["d"]);s["a"]([Object(d["e"])("isCollapse",{immediate:!0})],z.prototype,"onNameChange",null),z=s["a"]([Object(d["a"])({components:{}})],z);var H=z,L=H,J=(n("e7ac"),Object(m["a"])(L,q,F,!1,null,"fa9da762",null)),K=J.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view"},[n("el-submenu",{attrs:{index:e.index}},[n("template",{slot:"title"},[e.navMenus.meta&&e.navMenus.meta.title?n("span",[e._v(e._s(e.navMenus.meta.title))]):e._e()]),e._l(e.navMenus.children,function(t){return t.hidden?e._e():[t.children&&0!==t.children.length?n("NavMenu",{attrs:{navMenus:t,index:e.index+"/"+t.path}}):n("el-menu-item",{key:e.index+"/"+t.path,attrs:{index:e.index+"/"+t.path}},[n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.meta.title))])])]})],2)],1)},Q=[],V={name:"NavMenu",props:["navMenus","index"],data:function(){return{}},methods:{},created:function(){}},W=V,X=Object(m["a"])(W,G,Q,!1,null,null,null),Y=X.exports,Z=function(e){function t(){return Object(i["a"])(this,t),Object(o["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),t}(d["d"]);Z=s["a"]([Object(d["a"])({components:{AccountInfo:B,Breadcrumb:P,CollapseSidbar:K}})],Z);var ee=Z,te=ee,ne=(n("bb52"),Object(m["a"])(te,C,w,!1,null,"77fd33cc",null)),ae=ne.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view"},[n("el-menu",{attrs:{"default-active":e.currentRoutePath,collapse:e.isCollapse,router:""}},[e._l(e.$store.state.routes,function(t){return t.hidden?e._e():[t.children&&1==t.children.length?n("el-menu-item",{key:t.children[0].path,attrs:{index:t.children[0].path}},[t.children[0].meta.icon?n("i",{class:t.children[0].meta.icon}):e._e(),!t.children[0].meta.icon&&e.isCollapse&&t.children[0].meta&&t.children[0].meta.title?n("i",[e._v(e._s(t.children[0].meta.title.slice(0,2)))]):e._e(),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.children[0].meta.title))])]):n("el-submenu",{attrs:{index:t.path}},[n("template",{slot:"title"},[t.meta.icon?n("i",{class:t.meta.icon}):e._e(),!t.meta.icon&&e.isCollapse&&t.meta&&t.meta.title?n("i",[e._v(e._s(t.meta.title.slice(0,2)))]):e._e(),t.meta&&t.meta.title?n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.meta.title))]):e._e()]),e._l(t.children,function(a){return[a.children&&0!==a.children.length?n("NavMenu",{attrs:{navMenus:a,index:t.path+"/"+a.path}}):n("el-menu-item",{key:t.path+"/"+a.path,attrs:{index:t.path+"/"+a.path}},[a.meta&&a.meta.title?n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.meta.title))]):e._e()])]})],2)]})],2)],1)},ie=[],ce=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(o["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.currentRoutePath="",e.isCollapse=!0,e}return Object(u["a"])(t,e),Object(c["a"])(t,[{key:"handleRouteChange",value:function(e){this.currentRoutePath=this.$router.currentRoute.path}},{key:"onNameChange",value:function(e,t){this.isCollapse=this.$store.state.isCollapseSidebar}}]),t}(d["d"]);s["a"]([Object(d["e"])("$route",{immediate:!0})],ce.prototype,"handleRouteChange",null),s["a"]([Object(d["e"])("$store.state.isCollapseSidebar",{immediate:!0})],ce.prototype,"onNameChange",null),ce=s["a"]([Object(d["a"])({components:{NavMenu:Y}})],ce);var oe=ce,le=oe,ue=Object(m["a"])(le,re,ie,!1,null,null,null),se=ue.exports;n.d(t,"a",function(){return y}),n.d(t,"b",function(){return ae}),n.d(t,"c",function(){return se})},"2b6b":function(e,t,n){},"3db7":function(e,t,n){"use strict";var a=n("2b6b"),r=n.n(a);r.a},"7e4b":function(e,t,n){},"7faf":function(e,t,n){"use strict";var a=n("8fba"),r=n.n(a);r.a},"88c8":function(e,t,n){},"89ea":function(e,t,n){},"8fba":function(e,t,n){},bb52:function(e,t,n){"use strict";var a=n("c522"),r=n.n(a);r.a},c522:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view"),n("DebugDialog")],1)},i=[],c=n("d225"),o=n("308d"),l=n("6bb5"),u=n("4e2b"),s=n("9ab4"),d=n("60a3"),h=n("0b9c"),f=function(e){function t(){return Object(c["a"])(this,t),Object(o["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),t}(d["d"]);f=s["a"]([Object(d["a"])({components:{DebugDialog:h["a"]}})],f);var p,m=f,b=m,v=(n("7faf"),n("2877")),g=Object(v["a"])(b,r,i,!1,null,null,null),k=g.exports,O=n("8c4f"),_=(n("8e6e"),n("ac6a"),n("456d"),n("96cf"),n("3b8d")),j=n("bd86"),y=n("2f62"),C=n("0e44");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach(function(t){Object(j["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}a["default"].use(y["a"]);var S={SET_AUTHENTICATED:"SET_AUTHENTICATED",SET_USER:"SET_USER"},x={routes:[],domainApi:"".concat("","/api"),eleToken:"",isAuthenticated:!1,user:{},isCollapseSidebar:!0},T=new y["a"].Store({state:E({},x),mutations:(p={SET_ROUTES:function(e,t){e.routes=t},resetAll:function(e){Object.assign(e,x)},setEleToken:function(e,t){e.eleToken=t}},Object(j["a"])(p,S.SET_AUTHENTICATED,function(e,t){e.isAuthenticated=t||!1}),Object(j["a"])(p,S.SET_USER,function(e,t){e.user=t||{}}),Object(j["a"])(p,"setIsCollapseSidebar",function(e,t){e.isCollapseSidebar=t}),p),actions:{setRoutes:function(){var e=Object(_["a"])(regeneratorRuntime.mark(function e(t,n){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.state,a=t.commit,a("SET_ROUTES",R);case 2:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),setAuthenticated:function(e,t){var n=e.commit;n(S.SET_AUTHENTICATED,t)},setUser:function(e,t){var n=e.commit;n(S.SET_USER,t);var a=t.role,r=A(R,a);n("SET_ROUTES",r)}},getters:{isAuthenticated:function(e){return e.isAuthenticated},user:function(e){return e.user}},plugins:[Object(C["a"])()]});function A(e,t){var n=e.filter(function(e){return!!$(e,t)&&(e.children&&e.children.length&&(e.children=A(e.children,t)),!0)});return n}function $(e,t){return!e.meta||!e.meta.roles||e.meta.roles.indexOf(t)>=0}var P=n("5c96"),M=n.n(P);a["default"].use(O["a"]);var R=[{path:"/",component:function(){return n.e("chunk-cb1616fc").then(n.bind(null,"81ad"))},redirect:"/dashboard",children:[{path:"/dashboard",name:"dashboard",meta:{title:"仪表盘",icon:"el-icon-menu"},component:function(){return n.e("chunk-2d0d63f1").then(n.bind(null,"7277"))}}]},{path:"/srcManager",component:function(){return n.e("chunk-cb1616fc").then(n.bind(null,"81ad"))},meta:{title:"源站管理"},redirect:"/srcManager/setting",children:[{path:"setting",name:"srcManagerSetting",meta:{title:"源站配置"},component:function(){return Promise.all([n.e("chunk-219c2f50"),n.e("chunk-3e463e7a")]).then(n.bind(null,"0ff6"))}},{path:"rulesConfig",name:"srcManagerRulesConfig",meta:{title:"抓取规则配置"},component:function(){return Promise.all([n.e("chunk-219c2f50"),n.e("chunk-15960436")]).then(n.bind(null,"02bc"))}}]},{path:"/personalInfo",component:function(){return n.e("chunk-cb1616fc").then(n.bind(null,"81ad"))},redirect:"/personalInfo/index",children:[{path:"/personalInfo/index",name:"personalInfo",meta:{title:"个人信息"},component:function(){return n.e("chunk-2d0cf296").then(n.bind(null,"6314"))}}]},{path:"/userManage",meta:{roles:["admin"]},component:function(){return n.e("chunk-cb1616fc").then(n.bind(null,"81ad"))},redirect:"/userManage/index",children:[{path:"/userManage/index",name:"userManage",meta:{title:"账户管理",roles:["admin"]},component:function(){return Promise.all([n.e("chunk-219c2f50"),n.e("chunk-47a9057d")]).then(n.bind(null,"4a2b"))}}]},{path:"/1",component:function(){return n.e("chunk-cb1616fc").then(n.bind(null,"81ad"))},meta:{title:"多级导航demo",roles:["admin"]},redirect:"/1/1",children:[{path:"1",meta:{title:"1-1"},component:{render:function(e){return e("router-view")}},children:[{path:"1",meta:{title:"1-1-1"},component:{render:function(e){return e("router-view")}},children:[{path:"1",meta:{title:"1-1-1-1"},component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},children:[]},{path:"2",meta:{title:"1-1-1-2"},component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"3",meta:{title:"1-1-1-3"},hidden:!0,component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},children:[]},{path:"4",meta:{title:"1-1-1-4"},component:{render:function(e){return e("router-view")}},children:[{path:"1",meta:{title:"1-1-1-4-1"},component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}}]},{path:"5",meta:{title:"1-1-1-5",roles:["admin","editor"]},component:{render:function(e){return e("router-view")}}}]},{path:"2",meta:{title:"1-1-2"},component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}}]},{path:"2",meta:{title:"1-2"},component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},children:[]}]},{path:"/register",name:"register",hidden:!0,meta:{title:"注册",requireAuth:!1},component:function(){return Promise.all([n.e("chunk-219c2f50"),n.e("chunk-49879230")]).then(n.bind(null,"73cf"))}},{path:"/login",name:"login",hidden:!0,meta:{title:"登录",requireAuth:!1},component:function(){return Promise.all([n.e("chunk-219c2f50"),n.e("chunk-5fbac066")]).then(n.bind(null,"a55b"))}},{path:"*",name:"/404",hidden:!0,meta:{title:"404",requireAuth:!1},component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}}],I=new O["a"]({mode:"history",base:"https://doudizhu.github.io/mevn-worm/dist/",routes:R});I.beforeEach(function(e,t,n){T.state.eleToken;if(!1===e.meta.requireAuth)n();else if(T.state.eleToken){var a=T.state.user.role;D(e,a)?n():n("/404")}else n(),P["Message"].error("登录状态失效，请重新登录"),T.commit("resetAll"),n({path:"/login",query:{redirect:e.fullPath}})});var N=I;function D(e,t){return!e.meta||!e.meta.roles||e.meta.roles.indexOf(t)>=0}n("0fae");var U,B=n("bc3a"),q=n.n(B),F=q.a.create({timeout:1e5});function z(e){var t=e.api,n=(e.params,e.method),a=void 0===n?"get":n,r=(e.callback,e.url),i=e.data;e.formSubmitData,e.withCredentials;return F[a](r||T.state.domainApi+t,"get"==a?{params:i}:i)}F.interceptors.request.use(function(e){return U=P["Loading"].service({background:"transparent"}),T.state.eleToken&&(e.headers.Authorization=T.state.eleToken),e},function(e){Promise.reject(e)}),F.interceptors.response.use(function(e){return U.close(),e},function(e){U.close();var t="";if(e&&e.response.status)switch(e.response.status){case 401:t="登录状态失效，请重新登录",T.commit("resetAll"),N.push("/login");break;case 403:t="拒绝访问";break;case 408:t="请求超时";break;case 500:t="服务器内部错误";break;case 501:t="服务未实现";break;case 502:t="网关错误";break;case 503:t="服务不可用";break;case 504:t="网关超时";break;case 505:t="HTTP版本不受支持";break;default:t=e.response.data;break}else t=e;if(t)return P["Message"].error(t),e.response}),a["default"].config.productionTip=!1,a["default"].use(M.a),a["default"].prototype.$request=z,new a["default"]({router:N,store:T,render:function(e){return e(k)}}).$mount("#app")},cf57:function(e,t,n){"use strict";var a=n("89ea"),r=n.n(a);r.a},e7ac:function(e,t,n){"use strict";var a=n("7e4b"),r=n.n(a);r.a},f226:function(e,t,n){"use strict";var a=n("88c8"),r=n.n(a);r.a}});