(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(33)},33:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(12),l=n(5),u=n(3),o=0,a="SHOW_ALL",f="SHOW_COMPLETED",d="SHOW_ACTIVE",m=function(e){var t=e.active,n=e.children,r=e.onClick;return i.a.createElement("button",{onClick:r,disabled:t,style:{marginLeft:"4px"}},n)},s=Object(u.b)(function(e,t){return{active:t.filter===e.visibilityFilter}},function(e,t){return{onClick:function(){return e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}})(m),E=function(){return i.a.createElement("div",null,i.a.createElement("span",null,"Show: "),i.a.createElement(s,{filter:a},"\u0412\u0441\u0435"),i.a.createElement(s,{filter:d},"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435"),i.a.createElement(s,{filter:f},"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"))},p=Object(u.b)()(function(e){var t,n=e.dispatch;return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:function(e){var r;e.preventDefault(),t.value.trim()&&(n((r=t.value,{type:"ADD_TODO",id:o++,text:r})),t.value="")}},i.a.createElement("input",{ref:function(e){return t=e}}),i.a.createElement("button",{type:"submit"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443")))}),v=function(e){var t=e.onClick,n=e.completed,r=e.text;return i.a.createElement("li",{onClick:t,style:{textDecoration:n?"line-through":"none"}},r)},b=function(e){var t=e.todos,n=e.toggleTodo;return i.a.createElement("ul",null,t.map(function(e){return i.a.createElement(v,Object.assign({key:e.id},e,{onClick:function(){return n(e.id)}}))}))},O=Object(u.b)(function(e){return{todos:function(e,t){switch(t){case a:return e;case f:return e.filter(function(e){return e.completed});case d:return e.filter(function(e){return!e.completed});default:throw new Error("Unknown filter: "+t)}}(e.todos,e.visibilityFilter)}},function(e){return{toggleTodo:function(t){return e(function(e){return{type:"TOGGLE_TODO",id:e}}(t))}}})(b),T=function(){return i.a.createElement("div",null,i.a.createElement(p,null),i.a.createElement(O,null),i.a.createElement(E,null))},h=n(17),w=n(16),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return Object(w.a)(e).concat([{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_TODO":return e.map(function(e){return e.id===t.id?Object(h.a)({},e,{completed:!e.completed}):e});default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},I=Object(l.b)({todos:y,visibilityFilter:g}),D=Object(l.c)(I);Object(c.render)(i.a.createElement(u.a,{store:D},i.a.createElement(T,null)),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.f2c77dd4.chunk.js.map