(this["webpackJsonpyoutube-create"]=this["webpackJsonpyoutube-create"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),i=a(10),o=a(2),u=a(13),s=a(36),p=a(38),m=a(15),d=a.n(m),f=a(3),E=(a(56),{popular:[],related:[],searched:[],selected:{},term:""}),b=function(e,t){switch(t.type){case"SET_POPULAR":return Object(f.a)(Object(f.a)({},e),{},{popular:t.payload.popular});case"SET_RELATED":return Object(f.a)(Object(f.a)({},e),{},{related:t.payload.related});case"SET_SEARCHED":return Object(f.a)(Object(f.a)({},e),{},{searched:t.payload.searched});case"SET_SELECTED":return Object(f.a)(Object(f.a)({},e),{},{selected:t.payload.selected});case"SET_TERM":return Object(f.a)(Object(f.a)({},e),{},{term:t.payload.term});default:return e}},v=Object(n.createContext)({globalState:E,setGlobalState:function(){return null}});function h(e){var t=e.children,a=Object(n.useReducer)(b,E),c=Object(u.a)(a,2),l=c[0],i=c[1];return r.a.createElement(v.Provider,{value:{globalState:l,setGlobalState:i}},t)}function _(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(o.f)(),m=Object(n.useContext)(v),f=m.globalState,E=m.setGlobalState;return Object(n.useEffect)((function(){c(f.term)}),[]),r.a.createElement("div",{className:d.a.header},r.a.createElement("div",{className:d.a.item},r.a.createElement(i.b,{to:"/"},"VideoTube")),r.a.createElement("div",{className:d.a.item},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E({type:"SET_TERM",payload:{term:a}}),l.push("/search?query=".concat(a))}},r.a.createElement("input",{type:"text",placeholder:"\u691c\u7d22",onChange:function(e){return c(e.target.value)},value:a}),r.a.createElement("button",{type:"submit"},r.a.createElement(s.a,{icon:p.a})))))}var O=a(23),j=a.n(O);function y(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement("div",{className:j.a.wrapper},r.a.createElement(_,null),r.a.createElement("div",{className:j.a.main},t)))}var w=a(5),S=a.n(w),x=a(11),g=a(39),k=a.n(g).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),T={part:"snippet",maxResuls:40,key:"AIzaSyCM1AydXk4Fvi5IePVZ3snn4VVq5UPWPzk",regionCode:"JP",type:"video"},C=function(){var e=Object(x.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/videos",{params:Object(f.a)(Object(f.a)({},T),{},{chart:"mostPopular"})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(x.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/videos",{params:Object(f.a)(Object(f.a)({},T),{},{id:t})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(x.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/search",{params:Object(f.a)(Object(f.a)({},T),{},{relatedToVideoId:t})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(x.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/search",{params:Object(f.a)(Object(f.a)({},T),{},{q:t})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=a(40),I=a.n(N);function V(e){var t=e.children;return r.a.createElement("div",{className:I.a.container},t)}var U=a(41),A=a.n(U);function D(e){var t=e.id,a=e.src,n=e.title;return r.a.createElement(i.b,{to:{pathname:"watch",search:"?v=".concat(t)},className:A.a.item},r.a.createElement("div",null,r.a.createElement("img",{src:a,alt:n}),r.a.createElement("span",null,n)))}function G(){var e=Object(n.useContext)(v),t=e.globalState,a=e.setGlobalState;return Object(n.useEffect)((function(){C().then((function(e){a({type:"SET_POPULAR",payload:{popular:e.data.items}})}))}),[]),r.a.createElement(y,null,r.a.createElement(V,null,t.popular&&t.popular.map((function(e){return r.a.createElement(D,{id:e.id,key:e.id,src:e.snippet.thumbnails.standard.url,title:e.snippet.title})}))))}function H(e){var t=Object(n.useContext)(v),a=t.globalState,c=t.setGlobalState,l=Object(o.g)(),i=function(){var e=Object(x.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URLSearchParams(l.search),!(a=t.get("query"))){e.next=5;break}return e.next=5,R(a).then((function(e){c({type:"SET_SEARCHED",payload:{searched:e.data.items}})}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[l.search]),r.a.createElement(y,null,r.a.createElement(V,null,a.searched?a.searched.map((function(e){return r.a.createElement(D,{id:e.id.videoId,key:e.id.videoId,src:e.snippet.thumbnails.medium.url,title:e.snippet.title})})):r.a.createElement("span",null,"no data")))}var q=a(42),B=a(24),M=a.n(B);function W(e){var t=e.id;return r.a.createElement("div",{className:M.a.wrap},r.a.createElement(q.a,{className:M.a.video,videoId:t}))}var J=a(45),X=a.n(J),z=a(46),K=a.n(z);function F(e){var t=Object(n.useContext)(v).globalState;return t.selected&&t.selected.id?r.a.createElement("div",{className:X.a.wrap},r.a.createElement(W,{id:t.selected.id}),r.a.createElement("p",null,t.selected.snippet.title),r.a.createElement("hr",null),r.a.createElement(K.a,null,r.a.createElement("pre",null,t.selected.snippet.description))):r.a.createElement("span",null,"no data")}var Y=a(25),Z=a.n(Y);function $(e){var t=e.id,a=e.src,n=e.title;return r.a.createElement(i.b,{className:Z.a.item,to:{pathname:"watch",search:"v=".concat(t)}},r.a.createElement("img",{src:a,alt:n}),r.a.createElement("div",{className:Z.a.info},r.a.createElement("span",null,n)))}var Q=a(47),ee=a.n(Q);function te(){var e=Object(n.useContext)(v).globalState;return r.a.createElement("div",{className:ee.a.sidenav},e.related?e.related.map((function(e){return r.a.createElement($,{id:e.id.videoId,key:e.id.videoId,title:e.snippet.title,src:e.snippet.thumbnails.medium.url})})):r.a.createElement("span",null,"no data"))}function ae(e){var t=Object(n.useContext)(v).setGlobalState,a=Object(o.g)(),c=function(){var e=Object(x.a)(S.a.mark((function e(){var n,r,c,l,i,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=new URLSearchParams(a.search),!(r=n.get("v"))){e.next=11;break}return e.next=5,Promise.all([L(r),P(r)]);case 5:c=e.sent,l=Object(u.a)(c,2),i=l[0],o=l[1],t({type:"SET_SELECTED",payload:{selected:i.data.items.shift()}}),t({type:"SET_RELATED",payload:{related:o.data.items}});case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[a.search]),r.a.createElement(y,null,r.a.createElement(F,null),r.a.createElement(te,null))}var ne=function(){return r.a.createElement(i.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:G}),r.a.createElement(o.a,{exact:!0,path:"/search",component:H}),r.a.createElement(o.a,{exact:!0,path:"/watch",component:ae})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(101);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null,r.a.createElement(ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},15:function(e,t,a){e.exports={header:"Header_header__a95k5",item:"Header_item__20LUh"}},23:function(e,t,a){e.exports={wrapper:"Layout_wrapper__ni1UW",main:"Layout_main__1s8hb"}},24:function(e,t,a){e.exports={wrap:"VideoPlay_wrap__2eC8o",video:"VideoPlay_video__2XfoU"}},25:function(e,t,a){e.exports={item:"SideListItem_item__3umOc",info:"SideListItem_info__aguBk"}},40:function(e,t,a){e.exports={container:"VideoGrid_container__YHt-R"}},41:function(e,t,a){e.exports={item:"VideoGridItem_item__2mBgK"}},45:function(e,t,a){e.exports={wrap:"VideoDetail_wrap__3bh_S"}},47:function(e,t,a){e.exports={sidenav:"SideList_sidenav__nSXiK"}},48:function(e,t,a){e.exports=a(102)}},[[48,1,2]]]);
//# sourceMappingURL=main.28c1f264.chunk.js.map