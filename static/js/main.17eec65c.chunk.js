(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{45:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(37),o=a.n(c),l=(a(45),a(4)),s=a(5),i=a(7),u=a(6),m=a(16),p=a(2),h=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",body:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/1").then((function(e){return e.json()})).then((function(t){return e.setState({title:t.title,body:t.body})}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("p",null,a))}}]),a}(n.Component),d=a(17),b=a(15),v=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/",className:"nav-link"},r.a.createElement(d.a,{icon:b.a,style:{}})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/contact/add",className:"nav-link"},r.a.createElement(d.a,{icon:b.c,style:{}})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/about",className:"nav-link"},r.a.createElement(d.a,{icon:b.d,style:{}})," About"))))))};v.defaultProps={branding:"My App"};var f=v,E=a(8),y=a.n(E),g=a(13),C=a(14),O=a.n(C),j=a(40),N=a(19),k=r.a.createContext(),w=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(N.a)(Object(N.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return Object(N.a)(Object(N.a)({},e),{},{contacts:[t.payload].concat(Object(j.a)(e.contacts))});case"UPDATE_CONTACT":return Object(N.a)(Object(N.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},x=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],dispatch:function(t){e.setState((function(e){return w(e,t)}))}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(k.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),S=k.Consumer,A=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showContactInfo:!1},e.showOnClick=function(t){e.setState({showContactInfo:!e.state.showContactInfo})},e.deleteOnClick=function(){var e=Object(g.a)(y.a.mark((function e(t,a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.name,n=t.email,c=t.phone,o=t.id,l=this.state.showContactInfo;return r.a.createElement(S,null,(function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,a+" ",r.a.createElement(d.a,{icon:l?b.f:b.e,onClick:e.showOnClick,style:{cursor:"pointer"}}),r.a.createElement(d.a,{icon:b.g,onClick:function(){return e.deleteOnClick(o,s)},style:{cursor:"pointer",float:"right",color:"red"}}),r.a.createElement(m.b,{to:"contact/edit/".concat(o)},r.a.createElement(d.a,{icon:b.b,style:{cursor:"pointer",float:"right",color:"black"}}))),l&&r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",n),r.a.createElement("li",{className:"list-group-item"},"Phone: ",c)))}))}}]),a}(n.Component),T=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(S,null,(function(e){var t=e.contacts;return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),t.map((function(e){return r.a.createElement(A,{key:e.id,contact:e})})))}))}}]),a}(n.Component),D=a(20),P=a(39),M=a.n(P),_=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,name:a,id:a,className:M()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};_.defaultProps={type:"text"};var q=_,I=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSubmit=function(){var t=Object(g.a)(y.a.mark((function t(a,n){var r,c,o,l,s,i;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,o=r.email,l=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==o){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==l){t.next=11;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 11:return s={name:c,email:o,phone:l},t.next=14,O.a.post("https://jsonplaceholder.typicode.com/users/",s);case 14:i=t.sent,a({type:"ADD_CONTACT",payload:i.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 18:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onChange=function(t){return e.setState(Object(D.a)({},t.target.name,t.target.value))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(S,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(l,t)}},r.a.createElement(q,{label:"Name",name:"name",value:a,placeholder:"Enter Name...",onChange:e.onChange,error:o.name}),r.a.createElement(q,{label:"Email",name:"email",value:n,placeholder:"Enter Email...",onChange:e.onChange,error:o.email}),r.a.createElement(q,{label:"Phone",name:"phone",value:c,placeholder:"Enter Phone...",onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))}))}}]),a}(n.Component),L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSubmit=function(){var t=Object(g.a)(y.a.mark((function t(a,n){var r,c,o,l,s,i,u;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,o=r.email,l=r.phone,s=e.props.match.params.id,""!==c){t.next=6;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 6:if(""!==o){t.next=9;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 9:if(""!==l){t.next=12;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 12:return i={name:c,email:o,phone:l},t.next=15,O.a.put("https://jsonplaceholder.typicode.com/users/".concat(s),i);case 15:u=t.sent,a({type:"UPDATE_CONTACT",payload:u.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 19:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onChange=function(t){return e.setState(Object(D.a)({},t.target.name,t.target.value))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(y.a.mark((function e(){var t,a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,O.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(S,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(l,t)}},r.a.createElement(q,{label:"Name",name:"name",value:a,placeholder:"Enter Name...",onChange:e.onChange,error:o.name}),r.a.createElement(q,{label:"Email",name:"email",value:n,placeholder:"Enter Email...",onChange:e.onChange,error:o.email}),r.a.createElement(q,{label:"Phone",name:"phone",value:c,placeholder:"Enter Phone...",onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))}))}}]),a}(n.Component),F=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},U=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exists"))},B=(a(69),a(70),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(x,null,r.a.createElement(m.a,{basename:"/contactmanager"},r.a.createElement("div",{className:"App"},r.a.createElement(f,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:T}),r.a.createElement(p.a,{exact:!0,path:"/contact/add",component:I}),r.a.createElement(p.a,{exact:!0,path:"/contact/edit/:id",component:L}),r.a.createElement(p.a,{exact:!0,path:"/about",component:F}),r.a.createElement(p.a,{exact:!0,path:"/test",component:h}),r.a.createElement(p.a,{component:U}))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.17eec65c.chunk.js.map