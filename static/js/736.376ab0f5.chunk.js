"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{6713:function(n,e,t){t.d(e,{Df:function(){return s},M1:function(){return f},qF:function(){return v},tx:function(){return l},vq:function(){return p}});var r=t(5861),a=t(4687),c=t.n(a),u=t(1243),o="2312830e6f848d2a7194ede59058ec48",i=u.Z.create({baseURL:"https://api.themoviedb.org/3"}),s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.get("/trending/movie/week?api_key=".concat(o)).then((function(n){e=n.data.results}));case 3:return n.abrupt("return",e);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.get("/movie/".concat(e,"?api_key=").concat(o,"&language=en-US&append_to_response=videos")).then((function(n){t=n}));case 3:return n.abrupt("return",t.data);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.get("/movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US")).then((function(n){return t=n.data.cast}));case 3:return n.abrupt("return",t);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.get("/movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1")).then((function(n){t=n.data.results}));case 3:return n.abrupt("return",t);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.get("/search/movie?api_key=".concat(o,"&").concat(e)).then((function(n){return t=n.data.results}));case 3:return n.abrupt("return",t);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}()},9736:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,c,u=t(5861),o=t(9439),i=t(4687),s=t.n(i),p=t(6713),f=t(2791),l=t(7689),v=t(168),h=t(7402),d=h.Z.section(r||(r=(0,v.Z)(["\n  display: flex;\n  margin: 20px 0 20px;\n"]))),x=h.Z.ul(a||(a=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n"]))),g=h.Z.li(c||(c=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 150px;\n  gap: 5px;\n"]))),m=t(184),w=function(){var n=(0,l.TH)().state.movieid,e=(0,f.useState)([]),t=(0,o.Z)(e,2),r=t[0],a=t[1];return(0,f.useEffect)((function(){try{var e=function(){var e=(0,u.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.M1)(n);case 2:t=e.sent,a(t.slice(0,14));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){console.log(t)}}),[n]),(0,m.jsx)(d,{children:(0,m.jsx)(x,{children:r.map((function(n){return(0,m.jsx)(g,{children:n.profile_path&&(0,m.jsxs)("div",{children:[(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(n.profile_path),alt:"".concat(n.name)}),(0,m.jsx)("p",{children:n.name})]})},n.id)}))})})}}}]);
//# sourceMappingURL=736.376ab0f5.chunk.js.map