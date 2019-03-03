(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{206:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(29),o=t.n(i),c=(t(94),t(85)),m=t(209),l=t(207),s=t(208),u=t(36),p=t(37),d=t(46),g=t(38),h=t(47),f=t(17),b=t(39),E=t(43),v=t.n(E),w=t(19),y=t.n(w),S=t(41),O=t.n(S),j=t(20),k=t.n(j),R=t(44),T=t.n(R),x=t(45),F=t.n(x),I=t(22),C=t.n(I),L=t(21),N=t.n(L),W=t(42),D=t.n(W),q=t(30),P=t.n(q),A=t(7),B=t.n(A),J=t(86),U={isLoggedIn:function(){return sessionStorage.getItem("isLoggedIn")},login:function(){sessionStorage.setItem("isLoggedIn",!0)},logout:function(){sessionStorage.removeItem("isLoggedIn")}},Y=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(d.a)(this,Object(g.a)(a).call(this,e))).state={redirectToReferrer:!1},t.handleSubmit=t.handleSubmit.bind(Object(f.a)(Object(f.a)(t))),t}return Object(h.a)(a,e),Object(p.a)(a,[{key:"handleSubmit",value:function(e){var a=this;e.preventDefault();var t=new FormData(e.target);fetch("/api/login",{method:"POST",body:t}).then(function(e){return e.status}).then(function(e){200===e?(U.login(),a.setState({redirectToReferrer:!0})):alert("Fail!")})}},{key:"render",value:function(){var e=this.props.classes;return this.state.redirectToReferrer?r.a.createElement(J.a,{to:"/feed"}):r.a.createElement("main",{className:e.main},r.a.createElement(O.a,null),r.a.createElement(D.a,{className:e.paper},r.a.createElement(v.a,{className:e.avatar}),r.a.createElement(P.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,onSubmit:this.handleSubmit},r.a.createElement(k.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(N.a,{htmlFor:"email"},"Email Address"),r.a.createElement(C.a,{id:"email",name:"email",autoComplete:"email",autoFocus:!0})),r.a.createElement(k.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(N.a,{htmlFor:"password"},"Password"),r.a.createElement(C.a,{name:"password",type:"password",id:"password",autoComplete:"current-password"})),r.a.createElement(T.a,{control:r.a.createElement(F.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign in"))))}}]),a}(r.a.Component),$=B()(function(e){return{main:Object(b.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(Y),z=t(210);var G=Object(z.a)(function(e){var a=e.history;return U.isLoggedIn()?r.a.createElement(y.a,{type:"submit",variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),U.logout(),a.push("/login")}},"Sign out"):r.a.createElement(y.a,{variant:"contained",color:"primary"},"Sign out")}),H=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Successful"),r.a.createElement(G,null))},K=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(d.a)(this,Object(g.a)(a).call(this,e))).state={redirectToReferrer:!1},t.handleSubmit=t.handleSubmit.bind(Object(f.a)(Object(f.a)(t))),t}return Object(h.a)(a,e),Object(p.a)(a,[{key:"handleSubmit",value:function(e){var a=this;e.preventDefault();var t=new FormData(e.target);fetch("/api/register",{method:"POST",body:t}).then(function(e){return e.status}).then(function(e){200===e?a.setState({redirectToReferrer:!0}):alert("Register Fail!")})}},{key:"render",value:function(){var e=this.props.classes;return this.state.redirectToReferrer?r.a.createElement(J.a,{to:"/"}):r.a.createElement("main",{className:e.main},r.a.createElement(O.a,null),r.a.createElement(D.a,{className:e.paper},r.a.createElement(v.a,{className:e.avatar}),r.a.createElement(P.a,{component:"h1",variant:"h5"},"Register"),r.a.createElement("form",{className:e.form,onSubmit:this.handleSubmit},r.a.createElement(k.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(N.a,{htmlFor:"email"},"Email Address"),r.a.createElement(C.a,{id:"email",name:"email",autoComplete:"email",autoFocus:!0})),r.a.createElement(k.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(N.a,{htmlFor:"username"},"Your Username"),r.a.createElement(C.a,{id:"username",name:"username",autoComplete:"username",autoFocus:!0})),r.a.createElement(k.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(N.a,{htmlFor:"password"},"Password"),r.a.createElement(C.a,{name:"password",type:"password",id:"password",autoComplete:"current-password"})),r.a.createElement(T.a,{control:r.a.createElement(F.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Register"))))}}]),a}(r.a.Component),M=B()(function(e){return{main:Object(b.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(K);function Q(e){var a=e.component,t=Object(c.a)(e,["component"]);return r.a.createElement(l.a,Object.assign({},t,{render:function(e){return U.isLoggedIn()?r.a.createElement(a,e):r.a.createElement(s.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}var V=function(){return r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(l.a,{exact:!0,path:"/login",component:$}),r.a.createElement(l.a,{path:"/register",component:M}),r.a.createElement(Q,{path:"/feed",component:H})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,a,t){e.exports=t(206)},94:function(e,a,t){}},[[89,1,2]]]);
//# sourceMappingURL=main.f02284cd.chunk.js.map