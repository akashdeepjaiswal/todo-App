(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{39:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(1),l=n(31),i=n.n(l),s=(n(39),n(18)),o=n.n(s),a=n(32),r=n(34),d=n(10),j=n(9),b=n(2),h=n(13),u=n.n(h),O=(n(59),n(60),n(0));var x=function(e){return Object(O.jsxs)("div",{id:"nav",className:"container",children:[Object(O.jsx)("ul",{className:"nav__items nav__buttons",children:Object(O.jsx)("button",{onClick:function(){return e.add_Note(!0)},className:"add_button",children:"ADD New Note"})}),Object(O.jsx)("ul",{className:"nav__items",children:Object(O.jsx)("li",{children:Object(O.jsx)("input",{placeholder:"search notes"},"random1")})})]})};n(62),n(63);var f=function(e){return Object(O.jsxs)("div",{className:"note",children:[Object(O.jsx)("h1",{children:e.note.title}),Object(O.jsx)("p",{children:e.note.content}),Object(O.jsx)(j.b,{className:"link",to:"/edit/"+e.note._id,children:" Edit "}),Object(O.jsx)("a",{href:"#",onClick:function(){e.onDelete(e.note._id)},children:"Delete"})]})};var v=function(e){return Object(O.jsx)("div",{className:"content__lists",children:e.list.map((function(t){return Object(O.jsx)("div",{className:"lists__item",onClick:function(){e.whenClicked(t)},children:Object(O.jsx)(f,{note:t,onDelete:function(t){e.delete_Note(t)}})},t._id)}))})},p=n(15),_=n(21);n(69);var m=function(e){var t=Object(c.useState)({title:"",content:""}),n=Object(d.a)(t,2),l=n[0],i=n[1];function s(e){var t=e.target,n=t.name,c=t.value;i((function(e){return Object(_.a)(Object(_.a)({},e),{},Object(p.a)({},n,c))}))}function o(t){t.preventDefault(),u.a.post("http://localhost:5000/notes/add",l).then((function(t){e.onAdd(l)})),i({title:"",content:""})}return e.add_Note?Object(O.jsx)("div",{className:"conatiner content__textArea",children:Object(O.jsxs)("form",{children:[Object(O.jsxs)("div",{class:"row",children:[Object(O.jsx)("div",{class:"col-25",children:Object(O.jsx)("label",{for:"title",children:"Title"})}),Object(O.jsx)("div",{class:"col-75",children:Object(O.jsx)("input",{type:"text",id:"title",placeholder:"Your Title..",onChange:s,name:"title",value:l.title})})]}),Object(O.jsxs)("div",{class:"row",children:[Object(O.jsx)("div",{class:"col-25",children:Object(O.jsx)("label",{for:"content",children:"Content"})}),Object(O.jsx)("div",{class:"col-75",children:Object(O.jsx)("textarea",{id:"content",name:"content",onChange:s,value:l.content,placeholder:"Take a note...",rows:"6"})})]}),Object(O.jsx)("div",{class:"row",children:Object(O.jsx)("button",{onClick:o,children:" Add"})})]})}):Object.keys(e.display_note).length>0?Object(O.jsx)("div",{className:"textarea_container",children:Object(O.jsxs)("div",{className:"textarea_note_display",children:[Object(O.jsx)("label",{for:"title",children:"Title"}),Object(O.jsx)("h1",{children:e.display_note.title}),Object(O.jsx)("label",{for:"title",children:"Content"}),Object(O.jsx)("p",{children:e.display_note.content})]})}):Object(O.jsx)("div",{className:"conatiner content__textArea",children:Object(O.jsxs)("form",{children:[Object(O.jsxs)("div",{class:"row",children:[Object(O.jsx)("div",{class:"col-25",children:Object(O.jsx)("label",{for:"title",children:"Title"})}),Object(O.jsx)("div",{class:"col-75",children:Object(O.jsx)("input",{type:"text",id:"title",placeholder:"Your Title..",onChange:s,name:"title",value:l.title})})]}),Object(O.jsxs)("div",{class:"row",children:[Object(O.jsx)("div",{class:"col-25",children:Object(O.jsx)("label",{for:"content",children:"Content"})}),Object(O.jsx)("div",{class:"col-75",children:Object(O.jsx)("textarea",{id:"content",name:"content",onChange:s,value:l.content,placeholder:"Take a note...",rows:"6"})})]}),Object(O.jsx)("div",{class:"row",children:Object(O.jsx)("button",{onClick:o,children:" Add"})})]})})};var N=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],l=t[1],i=Object(c.useState)({}),s=Object(d.a)(i,2),h=s[0],f=s[1],p=Object(c.useState)(!1),_=Object(d.a)(p,2),N=_[0],w=_[1];function k(e){console.log("add_new_note working before",N),w(e)}return console.log("initial",N),Object(c.useEffect)((function(){(function(){var e=Object(a.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("http://localhost:5000/notes").then((function(e){console.log(e.data),l(e.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(O.jsx)(j.a,{children:Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)("div",{className:"app__navbar"}),Object(O.jsx)(x,{add_Note:k}),Object(O.jsx)("div",{className:"app__content",children:Object(O.jsxs)(b.a,{path:"/",children:[Object(O.jsx)(v,{list:n,delete_Note:function(e){u.a.delete("http://localhost:5000/notes/"+e).then((function(e){console.log(e.data)})),l((function(t){return t.filter((function(t){return t._id!==e}))}))},whenClicked:function(e){f(e),k(!1)}}),Object(O.jsx)(m,{onAdd:function(e){l((function(t){return[].concat(Object(r.a)(t),[e])}))},display_note:h,add_Note:N})]})})]})})};i.a.render(Object(O.jsx)(N,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.6d3fc710.chunk.js.map