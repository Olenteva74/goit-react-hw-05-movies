"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[628],{293:function(e,n,t){t.d(n,{e:function(){return f}});var r,u=t(689),i=t(168),o=t(934),c=t(87),a=(0,o.Z)(c.rU)(r||(r=(0,i.Z)(["\n:hover,\n:focus {\n    color: red;\n}\n"]))),s=t(184),f=function(e){var n=e.movies,t=(0,u.TH)();return(0,s.jsx)("ul",{children:n.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(a,{to:"/movies/".concat(e.id),state:{from:t},children:e.name?e.name:e.title})},e.id)}))})}},628:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(861),u=t(439),i=t(687),o=t.n(i),c=t(87),a=t(791),s=t(596),f=t(184),l=function(e){var n=e.onSubmit,t=(0,a.useState)(""),r=(0,u.Z)(t,2),i=r[0],o=r[1],c=(0,a.useState)(!1),l=(0,u.Z)(c,2),h=l[0],d=l[1];return(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==i.trim()?(n(i),d(!0)):s.Am.error("Search is a required field")},children:[(0,f.jsx)("input",{type:"text",name:"query",value:i,onChange:function(e){o(e.target.value),d(!1)}}),(0,f.jsx)("button",{type:"submit",disabled:h,children:"Search"})]})},h=t(293),d=t(787),m=function(){var e=(0,c.lr)(),n=(0,u.Z)(e,2),t=n[0],i=n[1],s=t.get("query"),m=(0,a.useState)([]),v=(0,u.Z)(m,2),p=v[0],x=v[1],j=(0,a.useState)(""),S=(0,u.Z)(j,2),b=S[0],g=S[1];(0,a.useEffect)((function(){function e(){return e=(0,r.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.$7)(s);case 2:n=e.sent,x(n);case 4:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}(function(){return e.apply(this,arguments)})().catch((function(e){g("Something went wrong, please try again later"),console.error(e)}))}),[s]);return b?(0,f.jsx)("h1",{children:b}):(0,f.jsxs)("div",{children:[(0,f.jsx)(l,{onSubmit:function(e){i({query:e})}}),(0,f.jsx)(h.e,{movies:p})]})}}}]);
//# sourceMappingURL=628.69944a73.chunk.js.map