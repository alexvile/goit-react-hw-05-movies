"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[424],{424:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,o,i,a,u=t(885),c=t(739),l=t(791),s=t(731),d=t(168),f=t(674),h=f.Z.form(r||(r=(0,d.Z)(["\n  padding: 10px;\n  margin-top: 16px;\n"]))),p=f.Z.label(o||(o=(0,d.Z)([""]))),m=f.Z.input(i||(i=(0,d.Z)(["\n  padding: 6px;\n  width: 50%;\n  min-width: 250px;\n  &:focus {\n    outline: none;\n    border-color: #aab1f7;\n  }\n"]))),x=f.Z.button(a||(a=(0,d.Z)(["\n  background-color: #aab1f7;\n  border-color: #aab1f7;\n  cursor: pointer;\n  color: #fff;\n  border-radius: 4px;\n  margin-left: 5px;\n  padding: 6px;\n  transition: all 250ms ease-in-out;\n  &:hover {\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n    opacity: 0.8;\n  }\n"]))),b=t(184),v=function(n){var e=n.onSubmit,t=(0,l.useState)(""),r=(0,u.Z)(t,2),o=r[0],i=r[1],a=function(){i("")};return(0,b.jsx)("div",{children:(0,b.jsxs)(h,{onSubmit:function(n){if(n.preventDefault(),""===o.trim())return alert("You should to write something to search");e(o),a()},children:[(0,b.jsx)(p,{htmlFor:"search_movie"}),(0,b.jsx)(m,{type:"text",id:"search_movie",value:o,onChange:function(n){i(n.currentTarget.value.toLowerCase())},placeholder:"Enter movie's name ..."}),(0,b.jsx)(x,{type:"submit",children:"Search"})]})})},g=t(855),j=function(){var n,e=(0,l.useState)([]),t=(0,u.Z)(e,2),r=t[0],o=t[1],i=(0,s.lr)(),a=(0,u.Z)(i,2),d=a[0],f=a[1],h=(0,c.TH)(),p=null!==(n=d.get("query"))&&void 0!==n?n:"";(0,l.useEffect)((function(){""!==p&&(0,g.Pt)(p).then((function(n){o(n.results)}))}),[p]);return(0,b.jsxs)("div",{children:[(0,b.jsx)(v,{onSubmit:function(n){f(""!==n?{query:n}:{})}}),(0,b.jsx)(c.j3,{}),r.length>0?(0,b.jsx)("ul",{children:r.map((function(n){var e=n.id,t=n.title,r=n.name;return(0,b.jsx)("li",{children:(0,b.jsxs)(s.OL,{to:"".concat(e),state:{from:h},children:[t," ",r]})},e)}))}):null]})}}}]);
//# sourceMappingURL=424.484cfd67.chunk.js.map