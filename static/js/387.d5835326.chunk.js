"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{6713:function(n,t,e){e.d(t,{Df:function(){return s},M1:function(){return f},qF:function(){return v},tx:function(){return l},vq:function(){return p}});var r=e(5861),c=e(4687),a=e.n(c),u=e(1243),o="2312830e6f848d2a7194ede59058ec48",i=u.Z.create({baseURL:"https://api.themoviedb.org/3"}),s=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.get("/trending/movie/week?api_key=".concat(o)).then((function(n){t=n.data.results}));case 3:return n.abrupt("return",t);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US&append_to_response=videos")).then((function(n){e=n}));case 3:return n.abrupt("return",e.data);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US")).then((function(n){return e=n.data.cast}));case 3:return n.abrupt("return",e);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1")).then((function(n){e=n.data.results}));case 3:return n.abrupt("return",e);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.get("/search/movie?api_key=".concat(o,"&").concat(t)).then((function(n){return e=n.data.results}));case 3:return n.abrupt("return",e);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}()},4387:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,c,a=e(5861),u=e(9439),o=e(4687),i=e.n(o),s=e(7689),p=e(6713),f=e(2791),l=e(168),v=e(4934),h=v.Z.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n"]))),d=v.Z.li(c||(c=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #a0a0a0;\n  text-align: justify;\n"]))),x=e(184),g=function(){var n=(0,s.TH)().state.movieid,t=(0,f.useState)([]),e=(0,u.Z)(t,2),r=e[0],c=e[1];return(0,f.useEffect)((function(){try{var t=function(){var t=(0,a.Z)(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=c,t.next=3,(0,p.tx)(n);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}catch(e){console.log(e)}}),[n]),(0,x.jsx)("section",{children:(0,x.jsx)(h,{children:r.map((function(n){return(0,x.jsxs)(d,{children:[(0,x.jsx)("h3",{children:n.author}),(0,x.jsx)("p",{children:n.created_at}),(0,x.jsx)("p",{children:n.content})]},n.id)}))})})}}}]);
//# sourceMappingURL=387.d5835326.chunk.js.map