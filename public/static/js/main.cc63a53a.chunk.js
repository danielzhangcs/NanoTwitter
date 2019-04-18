(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){e.exports=a(282)},282:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(29),l=a.n(i),o=a(131),c=a(283),s=a(284),m=a(285),u=a(44),p=a(17),h=a(130),d={pathparams:function(){return xt.location.pathname.split("/")},lastPathparam:function(){return this.pathparams().slice(-1)[0]},searchparams:function(){var e=xt.location.search.substr(1).split("&").map(function(e){return e.split("=")});return Object.assign.apply(Object,Object(h.a)(e.map(function(e){return Object(p.a)({},e[0],e[1])})))}},g={isLoggedIn:function(){return!!d.searchparams().test_user||(localStorage.getItem("isLoggedIn")&&sessionStorage.setItem("isLoggedIn",!0),sessionStorage.getItem("isLoggedIn"))},login:function(e){sessionStorage.setItem("isLoggedIn",!0),e&&localStorage.setItem("isLoggedIn",!0)},logout:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];sessionStorage.removeItem("isLoggedIn"),localStorage.removeItem("isLoggedIn"),xt.push({pathname:"/login",state:{from:xt.location}})}},f=a(21),E=a(22),b=a(24),w=a(23),v=a(25),y=a(18),O=a(28),x=a.n(O),j=a(33),k=a.n(j),S=a(32),N=a.n(S),C=a(34),T=a.n(C),I=a(116),L=a.n(I),M=a(117),R=a.n(M),F=a(38),P=a.n(F),_=a(37),D=a.n(_),A=a(30),W=a.n(A),B=a(10),G=a.n(B),q=a(5),U=a.n(q);function z(e){return e.json().then(function(t){if(e.ok)return t;if(401===e.status)return g.logout();throw new Error(t.errors)})}function J(e){var t=d.searchparams().test_user;return t&&(e=e+"?test_user="+t),e}var Y={signup:function(e){return fetch("/api/register",{method:"POST",body:e}).then(z)},login:function(e){return fetch("/api/login",{method:"POST",body:e}).then(z)},logout:function(){return fetch("/api/logout",{method:"DELETE"}).then(z)},userProfile:function(e){return fetch(J("/api/users/"+e),{method:"GET"}).then(z)},timeline:function(){return fetch(J("/api/timeline"),{method:"GET"}).then(z)},userTweets:function(e){return fetch(J("/api/users/"+e+"/tweets"),{method:"GET"}).then(z)},postTweets:function(e){return fetch(J("/api/tweets"),{method:"POST",body:e}).then(z)},followings:function(){return fetch(J("/api/follows/followings"),{method:"GET"}).then(z)},follow:function(e){var t=new FormData;return t.append("to_user_id",e),fetch(J("/api/follows"),{method:"POST",body:t}).then(z)},unfollow:function(e){var t=new FormData;return t.append("to_user_id",e),fetch(J("/api/follows"),{method:"DELETE",body:t}).then(z)},search:function(e){var t="/api/search/tweets?keyword="+e+"&maxresults=50",a=d.searchparams().test_user;return a&&(t=t+"&test_user="+a),fetch(t,{method:"GET"}).then(z)}},H=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(w.a)(t).call(this,e))).state={redirectToReferrer:!1,rememberMe:!1},a.handleSubmit=a.handleSubmit.bind(Object(y.a)(Object(y.a)(a))),a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"handleRemember",value:function(){this.setState({rememberMe:!this.state.rememberMe})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData(e.target),a=this;t.append("remember_me",this.state.rememberMe),Y.login(t).then(function(e){g.login(a.state.rememberMe),a.setState({redirectToReferrer:!0})}).catch(function(e){alert("login failed!\n"+e.message)})}},{key:"render",value:function(){var e=this,t=this.props.classes;return this.state.redirectToReferrer?r.a.createElement(m.a,{to:"/"}):r.a.createElement("main",{className:t.main},r.a.createElement(N.a,null),r.a.createElement(W.a,{className:t.paper},r.a.createElement(x.a,{className:t.avatar}),r.a.createElement(G.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:t.form,onSubmit:this.handleSubmit},r.a.createElement(T.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(D.a,{htmlFor:"email"},"Email Address"),r.a.createElement(P.a,{id:"email",name:"email",autoComplete:"email",autoFocus:!0})),r.a.createElement(T.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(D.a,{htmlFor:"password"},"Password"),r.a.createElement(P.a,{name:"password",type:"password",id:"password",autoComplete:"current-password"})),r.a.createElement(L.a,{control:r.a.createElement(R.a,{value:"remember",color:"primary",onChange:function(t){t.preventDefault(),e.handleRemember()}}),label:"Remember me"}),r.a.createElement(k.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Sign in"))))}}]),t}(r.a.Component),Q=U()(function(e){return{main:Object(p.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(H),K=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(w.a)(t).call(this,e))).state={redirectToReferrer:!1},a.handleSubmit=a.handleSubmit.bind(Object(y.a)(Object(y.a)(a))),a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData(e.target),a=this;Y.signup(t).then(function(e){g.login(),a.setState({redirectToReferrer:!0})}).catch(function(e){alert(e.message)})}},{key:"render",value:function(){var e=this.props.classes;return this.state.redirectToReferrer?r.a.createElement(m.a,{to:"/"}):r.a.createElement("main",{className:e.main},r.a.createElement(N.a,null),r.a.createElement(W.a,{className:e.paper},r.a.createElement(x.a,{className:e.avatar}),r.a.createElement(G.a,{component:"h1",variant:"h5"},"Register"),r.a.createElement("form",{className:e.form,onSubmit:this.handleSubmit},r.a.createElement(T.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(D.a,{htmlFor:"email"},"Email Address"),r.a.createElement(P.a,{id:"email",name:"email",autoComplete:"email",autoFocus:!0})),r.a.createElement(T.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(D.a,{htmlFor:"username"},"Your Username"),r.a.createElement(P.a,{id:"username",name:"username",autoComplete:"username",autoFocus:!0})),r.a.createElement(T.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(D.a,{htmlFor:"display_name"},"Your Display Name"),r.a.createElement(P.a,{id:"display_name",name:"display_name",autoComplete:"display_name",autoFocus:!0})),r.a.createElement(T.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(D.a,{htmlFor:"password"},"Password"),r.a.createElement(P.a,{name:"password",type:"password",id:"password",autoComplete:"current-password"})),r.a.createElement(k.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Register"))))}}]),t}(r.a.Component),V=U()(function(e){return{main:Object(p.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(K),X=a(19),Z=a(11),$=a.n(Z),ee=a(118),te=a.n(ee),ae=a(119),ne=a.n(ae),re=a(26),ie=a.n(re),le=a(61),oe=a.n(le),ce=a(50),se=a.n(ce),me=a(39),ue=a.n(me),pe=a(83),he=a.n(pe),de=a(43),ge=a(120),fe=a.n(ge),Ee=a(121),be=a.n(Ee),we=a(86),ve=a.n(we),ye=a(84),Oe=a.n(ye),xe=a(85),je=a.n(xe),ke=a(64),Se=a.n(ke),Ne=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).state={anchorEl:null,mobileMoreAnchorEl:null},a.handleProfileMenuOpen=function(e){a.setState({anchorEl:e.currentTarget})},a.handleMenuClose=function(){a.setState({anchorEl:null}),a.handleMobileMenuClose()},a.handleMobileMenuOpen=function(e){a.setState({mobileMoreAnchorEl:e.currentTarget})},a.handleMobileMenuClose=function(){a.setState({mobileMoreAnchorEl:null})},a.handleSignOut=function(){a.handleMenuClose(),Y.logout().then(function(e){g.logout()}).catch(function(e){alert("Fail!")})},a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.state,t=e.anchorEl,a=e.mobileMoreAnchorEl,n=this.props.classes,i=Boolean(t),l=Boolean(a),o=r.a.createElement(he.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:this.handleMenuClose},r.a.createElement(ue.a,{onClick:this.handleMenuClose},"Profile"),r.a.createElement(ue.a,{onClick:this.handleMenuClose},"My account"),r.a.createElement(ue.a,{onClick:this.handleSignOut},"Sign out")),c=r.a.createElement(he.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:this.handleMenuClose},r.a.createElement(ue.a,{onClick:this.handleMobileMenuClose},r.a.createElement(ie.a,{color:"inherit"},r.a.createElement(se.a,{badgeContent:4,color:"secondary"},r.a.createElement(Oe.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(ue.a,{onClick:this.handleMobileMenuClose},r.a.createElement(ie.a,{color:"inherit"},r.a.createElement(se.a,{badgeContent:11,color:"secondary"},r.a.createElement(je.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(ue.a,{onClick:this.handleProfileMenuOpen},r.a.createElement(ie.a,{color:"inherit"},r.a.createElement(ve.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:n.root},r.a.createElement(te.a,{position:"static"},r.a.createElement(ne.a,null,r.a.createElement(ie.a,{className:n.menuButton,color:"inherit","aria-label":"Open drawer"},r.a.createElement(fe.a,null)),r.a.createElement(G.a,{className:n.title,variant:"h6",color:"inherit",noWrap:!0},"Material-UI"),r.a.createElement("div",{className:n.search},r.a.createElement("div",{className:n.searchIcon},r.a.createElement(be.a,null)),r.a.createElement(oe.a,{placeholder:"Search\u2026",classes:{root:n.inputRoot,input:n.inputInput}})),r.a.createElement("div",{className:n.grow}),r.a.createElement("div",{className:n.sectionDesktop},r.a.createElement(ie.a,{color:"inherit"},r.a.createElement(se.a,{badgeContent:4,color:"secondary"},r.a.createElement(Oe.a,null))),r.a.createElement(ie.a,{color:"inherit"},r.a.createElement(se.a,{badgeContent:17,color:"secondary"},r.a.createElement(je.a,null))),r.a.createElement(ie.a,{"aria-owns":i?"material-appbar":void 0,"aria-haspopup":"true",onClick:this.handleProfileMenuOpen,color:"inherit"},r.a.createElement(ve.a,null))),r.a.createElement("div",{className:n.sectionMobile},r.a.createElement(ie.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},r.a.createElement(Se.a,null))))),o,c)}}]),t}(r.a.Component),Ce=Object(X.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(p.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(p.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(de.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(de.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(p.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(p.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(p.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})(Ne),Te=a(65),Ie=a.n(Te),Le=a(49),Me=a.n(Le),Re=a(122),Fe=a.n(Re),Pe=a(63),_e=a.n(Pe);var De=function(e){return r.a.createElement("span",{onClick:function(){return xt.push(e.to)}},e.children)},Ae=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(w.a)(t).call(this,e))).state={userid:"Loading",username:"Loading",displayname:"Loading",tweets:"Loading",followers:"Loading",followings:"Loading",followed:"Loading"},a.fetchProfile=a.fetchProfile.bind(Object(y.a)(Object(y.a)(a))),a.checkFollow=a.checkFollow.bind(Object(y.a)(Object(y.a)(a))),a.handleFollow=a.handleFollow.bind(Object(y.a)(Object(y.a)(a))),a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.fetchProfile()}},{key:"fetchProfile",value:function(){var e=this.props.sourceAPI,t=this;e(this.props.username).then(function(e){var a=e.data;t.setState({userid:a.id,username:a.username,displayname:a.display_name,tweets:a.tweet_number,followers:a.follower_number,followings:a.following_number}),t.checkFollow(t.state.userid)}).catch(function(e){alert(e.message)})}},{key:"checkFollow",value:function(e){var t=this;Y.followings().then(function(a){a.data.map(function(e){return e.id}).includes(e)?t.setState({followed:!0}):t.setState({followed:!1})}).catch(function(e){"not found"===e.message?t.setState({followed:!1}):alert(e.message)})}},{key:"handleFollow",value:function(){var e=this;e.state.followed?Y.unfollow(e.state.userid).then(function(t){e.setState({followed:!1})}).catch(function(e){alert(e.message)}):Y.follow(e.state.userid).then(function(t){e.setState({followed:!0})}).catch(function(e){alert(e.message)})}},{key:"render",value:function(){var e,t=this.props.classes;return e="Loading"===this.state.followed?r.a.createElement(k.a,{variant:"contained",color:"primary",disabled:!0,className:t.button},"Loading"):r.a.createElement(k.a,{variant:"contained",color:"primary",onClick:this.handleFollow,className:t.button},this.state.followed?"Unfollow":"Follow"),r.a.createElement(Ie.a,{className:this.props.className},r.a.createElement(Fe.a,{className:t.media,image:"",title:"User banner"}),r.a.createElement(Me.a,null,r.a.createElement($.a,{container:!0,spacing:0},r.a.createElement($.a,{item:!0,xs:4,md:4,lg:4},r.a.createElement(x.a,{alt:"username",src:"https://material-ui.com/static/images/avatar/1.jpg",className:this.props.classes.bigAvatar})),r.a.createElement($.a,{item:!0,xs:4,md:4,lg:4},r.a.createElement(G.a,{variant:"title"},r.a.createElement(De,{to:"/u/"+this.state.username},this.state.displayname)),r.a.createElement(G.a,{gutterBottom:!0,variant:"caption"},r.a.createElement(De,{to:"/u/"+this.state.username},this.state.username))),r.a.createElement($.a,{item:!0,xs:2,md:2,lg:2},e)),r.a.createElement($.a,{container:!0,spacing:8,className:t.infobox},r.a.createElement($.a,{item:!0,xs:4,md:4,lg:4},r.a.createElement(G.a,{gutterBottom:!0,variant:"caption"},"Tweets"),r.a.createElement(G.a,{variant:"title",className:t.link},this.state.tweets)),r.a.createElement($.a,{item:!0,xs:4,md:4,lg:4},r.a.createElement(G.a,{gutterBottom:!0,variant:"caption"},"Followers"),r.a.createElement(G.a,{variant:"title",className:t.link},this.state.followers)),r.a.createElement($.a,{item:!0,xs:4,md:4,lg:4},r.a.createElement(G.a,{gutterBottom:!0,variant:"caption"},"Following"),r.a.createElement(G.a,{variant:"title",className:t.link},this.state.followings)))))}}]),t}(r.a.Component),We=Object(X.withStyles)(function(e){return{media:{height:110,backgroundColor:_e.a[500]},bigAvatar:{marginTop:-53,width:75,height:75,border:"3px solid #ffffff"},infobox:{marginTop:10},link:{color:_e.a[400]}}})(Ae),Be=a(6),Ge=a.n(Be),qe=a(123),Ue=a.n(qe),ze=a(124),Je=a.n(ze),Ye=a(128),He=a.n(Ye),Qe=a(81),Ke=a.n(Qe),Ve=a(125),Xe=a.n(Ve),Ze=a(126),$e=a.n(Ze),et=a(127),tt=a.n(et),at=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(w.a)(t).call(this,e))).handleExpandClick=function(){a.setState(function(e){return{expanded:!e.expanded}})},a.state={expanded:!1},a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(Ie.a,{className:this.props.className},r.a.createElement(Ue.a,{avatar:r.a.createElement(x.a,{"aria-label":"Recipe",className:e.avatar},"R"),action:r.a.createElement(ie.a,null,r.a.createElement(Se.a,null)),title:r.a.createElement(De,{to:"/u/"+this.props.username},this.props.userDisplayname),subheader:this.props.createdAt}),r.a.createElement(Me.a,null,r.a.createElement(G.a,{component:"p"},this.props.text)),r.a.createElement(Je.a,{className:e.actions,disableActionSpacing:!0},r.a.createElement(ie.a,{"aria-label":"Add to favorites"},r.a.createElement(Xe.a,null)),r.a.createElement(ie.a,{"aria-label":"Share"},r.a.createElement($e.a,null)),r.a.createElement(ie.a,{className:Ge()(e.expand,Object(p.a)({},e.expandOpen,this.state.expanded)),onClick:this.handleExpandClick,"aria-expanded":this.state.expanded,"aria-label":"Show more"},r.a.createElement(tt.a,null))),r.a.createElement(He.a,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},r.a.createElement(Me.a,null)))}}]),t}(r.a.Component),nt=Object(X.withStyles)(function(e){return{media:{height:0,paddingTop:"56.25%"},actions:{display:"flex"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:Ke.a[500]}}})(at),rt=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(w.a)(t).call(this,e))).state={tweets:[]},a.fetchTweets(),a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"fetchTweets",value:function(){var e=this.props.sourceAPI,t=this.props.classes,a=this;e().then(function(e){var n=e.data.map(function(e){return r.a.createElement(nt,{key:e.id,className:t.paper,text:e.text,username:e.user.username,userDisplayname:e.user.display_name,createdAt:e.created_at})});a.setState({tweets:n})}).catch(function(e){alert(e.message)})}},{key:"render",value:function(){return r.a.createElement("div",{className:this.props.className},this.state.tweets)}}]),t}(r.a.Component),it=Object(X.withStyles)(function(e){return{root:{flexGrow:1,overflow:"hidden",padding:"0 ".concat(3*e.spacing.unit,"px")},paper:{margin:"".concat(e.spacing.unit,"px auto"),padding:2*e.spacing.unit}}})(rt),lt=a(129),ot=a.n(lt),ct=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(w.a)(t).call(this,e))).state={text:""},a.handleTextChange=a.handleTextChange.bind(Object(y.a)(Object(y.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(y.a)(Object(y.a)(a))),a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData(e.target),a=this;t.append("tweet_type","tweet"),Y.postTweets(t).then(function(e){a.setState({text:""}),alert("Success")}).catch(function(e){alert(e.message)})}},{key:"handleTextChange",value:function(e){this.setState({text:e.target.value})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(W.a,{className:this.props.className},r.a.createElement("form",{className:e.form,onSubmit:this.handleSubmit},r.a.createElement(T.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(ot.a,{name:"text",multiline:!0,rows:"3",placeholder:"Tweet comes here",className:e.textField,margin:"normal",value:this.state.text,onChange:this.handleTextChange})),r.a.createElement("div",{className:e.buttons},r.a.createElement(k.a,{type:"submit",variant:"contained",color:"primary",className:e.submit},"Post"))))}}]),t}(r.a.Component),st=U()(function(e){return{main:Object(p.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},form:{width:"100%",padding:"".concat(2*e.spacing.unit,"px")},buttons:{display:"flex",justifyContent:"flex-end"},submit:{marginTop:e.spacing.unit,marginLeft:e.spacing.unit}}})(ct),mt=a(82),ut=a.n(mt),pt=a(48),ht=a.n(pt),dt=a(67),gt=a.n(dt),ft=a(66),Et=a.n(ft);var bt=Object(X.withStyles)(function(e){return{root:{width:"100%",maxWidth:360},inline:{display:"inline"},title:{paddingTop:2*e.spacing.unit,paddingLeft:2*e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement(W.a,{className:e.className},r.a.createElement(G.a,{className:t.title,component:"h1",variant:"h5"},"Recommendations"),r.a.createElement(ut.a,{className:t.root},r.a.createElement(ht.a,{alignItems:"flex-start"},r.a.createElement(Et.a,null,r.a.createElement(x.a,{alt:"Remy Sharp",src:"/static/images/avatar/1.jpg"})),r.a.createElement(gt.a,{primary:"Brunch this weekend?",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{component:"span",className:t.inline,color:"textPrimary"},"Ali Connors")," \u2014 I'll be in your neighborhood doing errands this\u2026")})),r.a.createElement(ht.a,{alignItems:"flex-start"},r.a.createElement(Et.a,null,r.a.createElement(x.a,{alt:"Remy Sharp",src:"/static/images/avatar/2.jpg"})),r.a.createElement(gt.a,{primary:"Summer BBQ",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{component:"span",className:t.inline,color:"textPrimary"},"to Scott, Alex, Jennifer")," \u2014 Wish I could come, but I'm out of town this\u2026")})),r.a.createElement(ht.a,{alignItems:"flex-start"},r.a.createElement(Et.a,null,r.a.createElement(x.a,{alt:"Remy Sharp",src:"/static/images/avatar/3.jpg"})),r.a.createElement(gt.a,{primary:"Oui Oui",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{component:"span",className:t.inline,color:"textPrimary"},"Sandra Adams")," \u2014 Do you have Paris recommendations? Have you ever\u2026")}))))});var wt=Object(X.withStyles)(function(e){return{navbar:{position:"relative"},profile:{width:"100%",maxWidth:400},layout:Object(p.a)({width:"auto",marginTop:1*e.spacing.unit,marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1800+3*e.spacing.unit*2),{width:1800,marginLeft:"auto",marginRight:"auto"}),editor:{marginTop:0,margin:"".concat(e.spacing.unit,"px auto")},tcollection:{flexGrow:1}}})(function(e){var t=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,null),r.a.createElement(Ce,{position:"static"}),r.a.createElement("main",{className:t.layout},r.a.createElement($.a,{container:!0,className:t.root,spacing:24},r.a.createElement($.a,{item:!0,xs:4,md:4,lg:3},r.a.createElement(We,{className:t.profile,sourceAPI:Y.userProfile,username:"i"})),r.a.createElement($.a,{item:!0,xs:4,md:4,lg:6},r.a.createElement(st,{className:t.editor}),r.a.createElement(it,{className:t.tcollection,sourceAPI:Y.timeline})),r.a.createElement($.a,{item:!0,xs:4,md:4,lg:3},r.a.createElement(bt,null)))))});var vt=Object(X.withStyles)(function(e){return{navbar:{position:"relative"},profile:{width:"100%",maxWidth:400},layout:Object(p.a)({width:"auto",marginTop:1*e.spacing.unit,marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1800+3*e.spacing.unit*2),{width:1800,marginLeft:"auto",marginRight:"auto"}),editor:{marginTop:0,margin:"".concat(e.spacing.unit,"px auto")},tcollection:{flexGrow:1}}})(function(e){var t=e.classes,a=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,null),r.a.createElement(Ce,{position:"static"}),r.a.createElement("main",{className:t.layout},r.a.createElement($.a,{container:!0,className:t.root,spacing:24},r.a.createElement($.a,{item:!0,xs:4,md:4,lg:3},r.a.createElement(We,{className:t.profile,sourceAPI:Y.userProfile,username:a.params.username})),r.a.createElement($.a,{item:!0,xs:4,md:4,lg:6},r.a.createElement(it,{className:t.tcollection,sourceAPI:function(){return Y.userTweets(a.params.username)}})),r.a.createElement($.a,{item:!0,xs:4,md:4,lg:3}))))});var yt=Object(X.withStyles)(function(e){return{navbar:{position:"relative"},profile:{width:"100%",maxWidth:400},layout:Object(p.a)({width:"auto",marginTop:1*e.spacing.unit,marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1800+3*e.spacing.unit*2),{width:1800,marginLeft:"auto",marginRight:"auto"}),editor:{marginTop:0,margin:"".concat(e.spacing.unit,"px auto")},tcollection:{flexGrow:1}}})(function(e){var t=e.classes,a=d.searchparams().search;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,null),r.a.createElement(Ce,{position:"static"}),r.a.createElement("main",{className:t.layout},r.a.createElement($.a,{container:!0,className:t.root,spacing:24},r.a.createElement($.a,{item:!0,xs:4,md:4,lg:3}),r.a.createElement($.a,{item:!0,xs:4,md:4,lg:6},r.a.createElement(it,{className:t.tcollection,sourceAPI:function(){return Y.search(a)}})),r.a.createElement($.a,{item:!0,xs:4,md:4,lg:3}))))}),Ot=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(w.a)(t).call(this,e))).state={status:{test_id:0,user_count:0,follow_count:0,tweet_count:0}},a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=this;return fetch("/api/status").then(function(e){return e.json()}).then(function(t){e.setState({status:t})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state.status;return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,"Test User ID: ",e.test_id),r.a.createElement("li",null,"User Count: ",e.user_count),r.a.createElement("li",null,"Follow Count: ",e.follow_count),r.a.createElement("li",null,"Tweet Count: ",e.tweet_count)))}}]),t}(r.a.Component),xt=Object(u.a)();function jt(e){var t=e.component,a=Object(o.a)(e,["component"]);return r.a.createElement(s.a,Object.assign({},a,{render:function(e){return g.isLoggedIn()?r.a.createElement(t,e):r.a.createElement(m.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}var kt=function(){return console.log(xt),r.a.createElement(c.a,{history:xt},r.a.createElement("div",null,r.a.createElement(jt,{exact:!0,path:"/",component:wt}),r.a.createElement(jt,{path:"/u/:username",component:vt}),r.a.createElement(jt,{path:"/search",component:yt}),r.a.createElement(s.a,{path:"/login",component:Q}),r.a.createElement(s.a,{path:"/register",component:V}),r.a.createElement(s.a,{path:"/test/status",component:Ot})))};l.a.render(r.a.createElement(kt,null),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.cc63a53a.chunk.js.map