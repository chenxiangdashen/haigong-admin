(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{128:function(e,t,n){"use strict";n(97);var a,o=n(81),r=n.n(o),i=(n(224),n(141)),s=n.n(i),u=(n(212),n(105)),l=n.n(u),c=(n(104),n(10)),d=n.n(c),m=n(19),f=n(20),p=n(22),g=n(18),h=n(21),E=(n(213),n(67)),y=n.n(E),O=n(1),v=n.n(O),b=n(195),S=n.n(b),T=n(32),_=n(15),k=(n(323),n(58)),N=y.a.create()(a=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(o)))).handleSubmit=function(e){e.preventDefault(),n.props.form.validateFields(function(e,t){e||(console.log("Received values of form: ",t),n.props.event.loginEvent({username:t.username,userpassword:t.password}))})},n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return v.a.createElement(y.a,{layout:"inline",onSubmit:this.handleSubmit,className:"queryPanel"},v.a.createElement(y.a.Item,null,e("username",{initialValue:this.props.data.username,rules:[{required:!0,message:"Please input your username!"}]})(v.a.createElement(l.a,{prefix:v.a.createElement(d.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username",autoComplete:""}))),v.a.createElement(y.a.Item,null,e("password",{initialValue:this.props.data.userpassowrd,rules:[{required:!0,message:"Please input your Password!"}]})(v.a.createElement(l.a,{prefix:v.a.createElement(d.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password",autoComplete:""}))),v.a.createElement(y.a.Item,null,e("remember",{valuePropName:"checked",initialValue:!0})(v.a.createElement(s.a,null,"Remember me")),v.a.createElement(r.a,{type:"primary",htmlType:"submit",className:"login-form-button",loading:this.props.loading},"Log in")))}}]),t}(v.a.Component))||a,x=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(g.a)(t).call(this,e))).data={username:n.GlobalEnvParams.TEST_USERNAME,userpassowrd:n.GlobalEnvParams.TEST_PASSWORD,captcha:n.GlobalEnvParams.TEST_CAPRCHA},n.state={loading:!1},n.flagString=n.GlobalEnvParams.ENV_TITLE,n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){_.a.isAuthSession()&&this.props.history.go(1)}},{key:"getCaptcha",value:function(){}},{key:"loginEvent",value:function(e){var t=this,n={username:e.username,password:S()(e.userpassword),uuid:"",captcha:"",loginFlag:1};_.a.setSystemInfo("1","1"),this.setState({loading:!0}),T.a.postUrl(T.a.Url.USER.LOGIN,n).then(function(e){t.setState({loading:!1}),e.data&&(1===e.data.loginResultFlag?(_.a.saveUserData(e.data),t.props.history.push("/")):(k.a.showErrorMessage("error:"+e.data.loginResultFlag),console.log("data:",e.data))),t.getCaptcha()},function(){t.setState({loading:!1})})}},{key:"render",value:function(){return v.a.createElement("div",{className:"container testscss"},v.a.createElement("h3",null,"React Admin Example - ",this.flagString),v.a.createElement("div",{className:"loginContainer"},v.a.createElement(N,{loading:this.state.loading,data:this.data,event:{loginEvent:this.loginEvent.bind(this)}})))}}]),t}(v.a.Component);t.a=x},133:function(e,t,n){"use strict";n(208);var a,o,r,i=n(135),s=n.n(i),u=n(51),l=n(19),c=n(20),d=n(22),m=n(18),f=n(21),p=(n(401),n(60)),g=n.n(p),h=n(1),E=n.n(h),y=n(15),O=n(32),v=n(58),b=(n(403),n(404),n(199)),S=n.n(b),T=(n(235),n(147)),_=n.n(T),k=(n(104),n(10)),N=n.n(k),x=(n(407),n(198)),D=n.n(x),R=(n(180),n(33)),w=n.n(R),j=n(71),M=n.n(j),I=n(27),U=n(41),C=n(181),P=n(68),A=(a=Object(P.b)(function(e,t){return{counter:e.counter}},{getCount:C.c}),Object(I.g)(o=a(o=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={icon:"arrows-alt",count:1e4,visible:!1},n.toggle=function(){n.props.onToggle()},n.screenfullToggle=function(){M.a.enabled&&M.a.toggle()},n.logout=function(){n.props.history.push(n.props.location.pathname)},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.getCount(),M.a.onchange(function(){e.setState({icon:M.a.isFullscreen?"shrink":"arrows-alt"})})}},{key:"componentWillUnmount",value:function(){M.a.off("change")}},{key:"render",value:function(){var e=this,t=this.state,a=t.icon,o=t.count,r=this.props,i=r.collapsed,s=r.location,u=y.a.isAuthSession(),l=y.a.getUserDispalyName(),c=E.a.createElement("div",null,E.a.createElement(U.c,{to:{pathname:"/login",state:{from:s}},style:{color:"rgba(0, 0, 0, 0.65)"}},"\u767b\u5f55"),"\xa0",E.a.createElement("img",{src:n(413),alt:""})),d=E.a.createElement("div",null,E.a.createElement(w.a,null,E.a.createElement(w.a.Divider,null),E.a.createElement(w.a.Item,{key:"2"},"\u4fee\u6539\u5bc6\u7801"),E.a.createElement(w.a.Divider,null),E.a.createElement(w.a.Item,{key:"3"},E.a.createElement("span",{onClick:this.props.logout},"\u9000\u51fa\u767b\u5f55")))),m=E.a.createElement("div",null,E.a.createElement(_.a,{overlay:d,trigger:["click"]},E.a.createElement("div",null,E.a.createElement("span",null,l),E.a.createElement(D.a,{icon:"user",shape:"square"}),E.a.createElement(N.a,{type:"down"}))));return E.a.createElement("div",{style:{backgroundColor:"#FFF"}},E.a.createElement(N.a,{type:i?"menu-unfold":"menu-fold",className:"trigger",onClick:this.toggle}),E.a.createElement("div",{style:{lineHeight:"64px",float:"right"}},E.a.createElement("ul",{className:"header-ul"},E.a.createElement("li",null,E.a.createElement(N.a,{type:a,onClick:this.screenfullToggle})),E.a.createElement("li",{onClick:function(){return e.setState({count:0})}},E.a.createElement(S.a,{count:u?this.props.counter.count:0,overflowCount:o,style:{marginRight:-17}},E.a.createElement(N.a,{type:"notification"}))),E.a.createElement("li",null,u?m:c))))}}]),t}(E.a.Component))||o)||o),L=Object(I.g)(r=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={openKeys:[],selectedKeys:[]},n.linkPathKey={},n.onOpenChange=function(e){var t=e.length;n.setState({openKeys:e}),t>0&&n.setState({openKeys:[e[t-1]]})},n.renderMenuItem=function(e,t){var a=t.key,o=t.icon,r=t.title,i=t.linkPath,s=a;return i&&(s=i),n.linkPathKey[s]={key:a,parentKey:e},E.a.createElement(w.a.Item,{key:a},E.a.createElement(U.c,{to:s},o&&E.a.createElement(N.a,{type:o}),E.a.createElement("span",null,r)))},n.renderSubMenu=function(e,t){var a=t.key,o=t.icon,r=t.title,i=t.subs;t.linkPath;return E.a.createElement(w.a.SubMenu,{key:a,title:E.a.createElement("span",null,o&&E.a.createElement(N.a,{type:o}),E.a.createElement("span",null,r))},i&&i.map(function(t){return t.subs&&t.subs.length>0?n.renderSubMenu(Object(u.a)(e).push(t.key),t):n.renderMenuItem(e,t)}))},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"findKeyItem",value:function(e){var t=this.linkPathKey[e];return t||null}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.location.pathname+e.location.search,n=this.findKeyItem(t);null==n&&(n=this.findKeyItem(e.location.pathname)),null!=n&&this.setState({selectedKeys:[n.key],openKeys:n.parentKey})}},{key:"render",value:function(){var e=this,t=this.state,n=t.openKeys,a=t.selectedKeys;return E.a.createElement("div",null,E.a.createElement(w.a,{onOpenChange:this.onOpenChange.bind(this),onClick:function(t){var n=t.key;return e.setState({selectedKeys:[n]})},openKeys:n,selectedKeys:a,theme:this.props.theme?this.props.theme:"dark",mode:"inline"},this.props.menus&&this.props.menus.map(function(t){return t.subs&&t.subs.length>0?e.renderSubMenu([t.key],t):e.renderMenuItem([],t)})))}}]),t}(E.a.Component))||r,F=[{key:"/demo",title:"demo",icon:"laptop",subs:[{key:"/demo/reudx",title:"reudx",icon:""},{key:"/demo/htmltext",title:"htmltext",icon:""},{key:"/demo/ref",title:"ref",icon:""},{key:"/demo/tinymce",title:"tinymce",icon:""},{key:"/demo/tablesimple",title:"table simple",icon:""},{key:"/demo/tablelist",title:"tablelist",icon:""},{key:"/demo/table",title:"table",icon:""}]}],V=n(79),G=n(201),K=n.n(G),q=n(132),J=n.n(q),W=(n(431),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){J.a.start()}},{key:"componentWillUnmount",value:function(){J.a.done()}},{key:"render",value:function(){return E.a.createElement("div",null)}}]),t}(E.a.Component)),$=function(e){return K()({loader:e,loading:function(){return E.a.createElement(W,null)}})},H=[{path:"/demo/reudx",component:$(function(){return n.e(16).then(n.bind(null,898))})},{path:"/demo/htmltext",component:$(function(){return n.e(17).then(n.bind(null,899))})},{path:"/demo/ref",component:$(function(){return n.e(18).then(n.bind(null,900))})},{path:"/demo/tablesimple",component:$(function(){return Promise.all([n.e(0),n.e(1),n.e(19)]).then(n.bind(null,901))})},{path:"/demo/tablelist",component:$(function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,902))})},{path:"/demo/table",component:$(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(9),n.e(12)]).then(n.bind(null,904))})},{path:"/demo/tinymce",component:$(function(){return Promise.all([n.e(8),n.e(20)]).then(n.bind(null,905))})}],B=n(23),Y=[{path:"/home",component:$(function(){return n.e(13).then(n.bind(null,894))})},{path:"/",redirect:{path:"/home"}},{path:"/common/data/:id",component:$(function(){return Promise.all([n.e(0),n.e(2),n.e(7),n.e(15)]).then(n.bind(null,903))})},{path:"/general/about",component:$(function(){return n.e(21).then(n.bind(null,895))})},{path:"/general/mqtt",component:$(function(){return Promise.all([n.e(0),n.e(10),n.e(14)]).then(n.bind(null,896))})},{path:"/404",component:$(function(){return n.e(3).then(n.bind(null,897))})}],z=[{path:"*",component:$(function(){return n.e(3).then(n.bind(null,897))})}];B.a.DEMO_MENU&&Y.push.apply(Y,Object(u.a)(H)),Y.push.apply(Y,z);var Q,X,Z,ee=Y,te=Object(I.g)(Q=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"createRoute",value:function(e,t){return e.redirect?E.a.createElement(I.a,{key:t,exact:!0,from:e.path,to:e.redirect.path}):E.a.createElement(V.a,{key:t,exact:!0,path:e.path,component:e.component})}},{key:"render",value:function(){var e=this;return E.a.createElement(I.d,null,ee.map(function(t,n){return e.createRoute(t,n)}))}}]),t}(E.a.Component))||Q,ne=n(34),ae=n(45),oe=function(e){return{type:ne.a.SET,count:e}},re=function(e){return{type:ae.a.SET_LOADING,loading:e}},ie=function(e){return{type:ae.a.ADD_MENU,menuList:e}},se=g.a.Sider,ue=g.a.Header,le=g.a.Content,ce=g.a.Footer,de=(X=Object(P.b)(function(e){return{user:e.userInfo}},{getUserInfo:function(e){return function(e){return e(re(!0)),O.a.getUrl(O.a.Url.USER.LOGININFO).then(function(t){if(e(re(!1)),t&&t.data&&(console.log("user data:",t.data),t.data.count&&e(oe(t.data.count)),t.data.baseInfo,t.data.menuList)){var n=[],a=null,o=-1;for(var r in t.data.menuList){var i=t.data.menuList[r];o!==i.groupIndex&&(o=i.groupIndex,a={key:"/fun_"+i.groupIndex,title:i.groupName,icon:"laptop",subs:[]},n.push(a));var s={key:a.key+"/"+i.code,linkPath:"/common/data/"+i.code,title:i.name};a.subs.push(s)}console.log("menuList:",n),n.length>0&&e(ie(n))}return t},function(t){return e(re(!1)),e(oe(0)),Promise.reject(t)})}},setUserMenu:function(e){return{type:ae.a.SET_MENU,menuList:e}}}),Object(I.g)(Z=X(Z=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={collapsed:!1},n.toggle=function(){n.setState({collapsed:!n.state.collapsed})},n.collapsed=!1,n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"loginOut",value:function(){var e=this,t=y.a.getUserData();if(null!=t){var n={};n.userId=t.userId,n.token=t.token,v.a.showLoadingMessage("\u6b63\u5728\u9000\u51fa\u767b\u5f55")&&O.a.postUrl(O.a.Url.USER.LOGOUT,n).then(function(){v.a.closeLoadingMessage(),y.a.deleteUserSession(),e.props.history.push("/login")},function(){v.a.closeLoadingMessage(),v.a.showErrorMessage("\u9000\u51fa\u767b\u5f55\u5931\u8d25"),y.a.deleteUserSession(),e.props.history.push("/login")})}}},{key:"componentDidMount",value:function(){var e=[{key:"/home",title:"\u9996\u9875",icon:"bank"},{key:"/homex",title:"\u57fa\u672c\u7ec4\u4ef6",icon:"laptop",subs:[{key:"/homex/mqtt",linkPath:"/general/mqtt",title:"mqtt",icon:""},{key:"/homex/about",linkPath:"/general/about",title:"\u5173\u4e8e",icon:""}]}];!0===this.GlobalEnvParams.DEMO_MENU&&e.push.apply(e,Object(u.a)(F)),this.props.setUserMenu(e),this.props.getUserInfo()}},{key:"render",value:function(){return E.a.createElement("div",{id:"page"},E.a.createElement(g.a,null,E.a.createElement(se,{trigger:null,collapsible:!0,collapsed:this.state.collapsed},E.a.createElement("div",{style:{height:"100vh",overflowY:"auto"}},E.a.createElement("div",{className:"logo"},"React Admin Example"),E.a.createElement(s.a,{spinning:this.props.user.loading,tip:"\u83dc\u5355\u52a0\u8f7d\u4e2d..."},E.a.createElement(L,{menus:this.props.user.menuList})))),E.a.createElement(g.a,null,E.a.createElement(ue,{className:"header"},E.a.createElement(A,{collapsed:this.state.collapsed,onToggle:this.toggle,logout:this.loginOut.bind(this)})),E.a.createElement(le,{className:"mainContent"},E.a.createElement("div",{style:{padding:16,position:"relative"}},E.a.createElement(te,null))),E.a.createElement(ce,{style:{textAlign:"center"}},"React-Admin-Example \xa92019-",(new Date).format("yyyy")," Created by 56009090@qq.com",E.a.createElement("a",{target:"_blank",href:"https://github.com/xjc-opensource/react-admin-example",rel:"nofollow me noopener noreferrer"},"  github\u5730\u5740")))))}}]),t}(E.a.Component))||Z)||Z);t.a=de},15:function(e,t,n){"use strict";function a(){var e=sessionStorage.getItem("user");return e?JSON.parse(e):null}t.a={getUserToken:function(){var e=sessionStorage.getItem("user"),t="";return e&&(t=(e=JSON.parse(e)).tokenId||""),t},getUserData:a,getUserMenuList:function(){return JSON.parse(sessionStorage.getItem("menuList"))},getUserDispalyName:function(){var e=a();return e?e.aliasname?e.aliasname:e.username:""},saveUserData:function(e){sessionStorage.setItem("user",JSON.stringify(e))},deleteUserSession:function(){sessionStorage.removeItem("user")},isAuthSession:function(){return!!JSON.parse(sessionStorage.getItem("user"))},setSystemInfo:function(e,t){var n={systemCode:e,loginFlag:t};sessionStorage.setItem("config",JSON.stringify(n))},getSystemInfo:function(){var e=JSON.parse(sessionStorage.getItem("config"));return null==e&&(e={systemCode:"",loginFlag:""}),e}}},170:function(e,t,n){"use strict";var a=n(23),o={USER:{LOGIN:"/login/in",LOGOUT:"/login/out",LOGININFO:"/login/userInfo",MODIFY_PASSWORD:"/login/modpwassword",GET_COUNT:"/login/count"},DATA_FUN:{SELECT:"/datafunction/select",QUERY_FIELDS:"/datafunction/queryFields",QUERY_CMMIT:"/datafunction/queryCmmit",ADD_FIELDS:"/datafunction/addFields",ADD_CMMIT:"/datafunction/addCmmit",UPDATE_FIELDS:"/datafunction/updateFields",UPDATE_CMMIT:"/datafunction/updateCmmit",IMPORT_FIELDS:"/datafunction/importFields",IMPORT_CMMIT:"/datafunction/importCmmit",DELETE:"/datafunction/delete",EXPORT:"/datafunction/export"}};a.a.MOCK_DATA&&(a.a.MOCK_LOGIN&&Object.assign(o.USER,{LOGIN:"/_mockjs/sys/login",LOGOUT:"/_mockjs/sys/logout",LOGININFO:"/_mockjs/sys/getLoginInfo",MODIFY_PASSWORD:"/_mockjs/sys/modpwassword",GET_COUNT:"/_mockjs/sys/count"}),Object.assign(o.DATA_FUN,{SELECT:"/_mockjs/datafunction/select",QUERY_FIELDS:"/_mockjs/datafunction/queryFields",DELETE:"/_mockjs/datafunction/delete",EXPORT:"/datafunction/export"})),t.a=o},181:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return s}),n.d(t,"e",function(){return u}),n.d(t,"d",function(){return l}),n.d(t,"b",function(){return c});var a=n(34),o=n(32),r=function(){return function(e){return o.a.getUrl(o.a.Url.USER.GET_COUNT).then(function(t){var n=t.data;return t.data.count&&(n=t.data.count),e(i(n)),t},function(t){return e(i(0)),Promise.reject(t)})}},i=function(e){return{type:a.a.SET,count:e}},s=function(){return{type:a.a.ADD}},u=function(){return{type:a.a.SUB}},l=function(){return{type:a.a.RESET}},c=function(){return function(e){setTimeout(function(){e(s())},2e3)}}},192:function(e,t,n){"use strict";(function(e){n(246);var a=n(203),o=n.n(a),r=n(19),i=n(20),s=n(22),u=n(18),l=n(21),c=n(1),d=n.n(c),m=(n(248),n(440),n(269),n(194)),f=n(23),p=n(41),g=n(27),h=n(204),E=n.n(h),y=n(128),O=n(133),v=n(79),b=n(205),S=n(68),T=n(134);c.Component.prototype.GlobalEnvParams=f.a,c.Component.prototype.GlobalUtil=m;var _=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=null;return e=this.GlobalEnvParams.IS_BrowserRouter?d.a.createElement(p.a,null,d.a.createElement(g.d,null,d.a.createElement(g.b,{path:"/login",component:y.a}),d.a.createElement(v.a,{path:"/",component:O.a}))):d.a.createElement(p.b,null,d.a.createElement(g.d,null,d.a.createElement(g.b,{path:"/login",component:y.a}),d.a.createElement(v.a,{path:"/",component:O.a}))),d.a.createElement(S.a,{store:b.a},d.a.createElement(o.a,{locale:E.a},e))}}]),t}(c.Component);t.a=Object(T.hot)(e)(_)}).call(this,n(149)(e))},194:function(e,t,n){"use strict";function a(e,t){var n,a=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(n=document.cookie.match(a))?unescape(n[2]):t}function o(e,t){var n=window.location.search;t&&(n=t),""===n&&window.location.hash.indexOf("?")>0&&(n="?"+window.location.hash.split("?")[1]);var a=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),o=n.substr(1).match(a),r="";return null!=o&&(r=o[2]),a=null,o=null,null===r||""===r||"undefined"===r?"":r}function r(e){var t=[],n=function(n){(o=e[n]).constructor===Array?o.forEach(function(e){t.push(n+"="+e)}):t.push(n+"="+o)};for(var a in e){var o;n(a)}return t.join("&")}function i(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){return("x"===e?16*Math.random()|0:8).toString(16)})}function s(e,t){var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var a in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+a+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?n[a]:("00"+n[a]).substr((""+n[a]).length)));return e}function u(e){var t=["\u96f6","\u58f9","\u8d30","\u53c1","\u8086","\u4f0d","\u9646","\u67d2","\u634c","\u7396"],n=[["\u5143","\u4e07","\u4ebf"],["","\u62fe","\u4f70","\u4edf","\u4e07"]],a=Math.abs(e),o="";["\u89d2","\u5206"].forEach(function(e,n){o+=(t[Math.floor(function(e,t){var n=0,a=e.toString(),o=t.toString();return n+=a.split(".").length>1?a.split(".")[1].length:0,n+=o.split(".").length>1?o.split(".")[1].length:0,Number(a.replace(".",""))*Number(o.replace(".",""))/Math.pow(10,n)}(a,10*Math.pow(10,n)))%10]+e).replace(/\u96f6./,"")}),o=o||"\u6574",a=Math.floor(a);for(var r=0;r<n[0].length&&a>0;r+=1){for(var i="",s=0;s<n[1].length&&a>0;s+=1)i=t[a%10]+n[1][s]+i,a=Math.floor(a/10);o=i.replace(/(\u96f6.)*\u96f6$/,"").replace(/^$/,"\u96f6")+n[0][r]+o}return o.replace(/(\u96f6.)*\u96f6\u5143/,"\u5143").replace(/(\u96f6.)+/g,"\u96f6").replace(/^\u6574$/,"\u96f6\u5143\u6574")}function l(e,t){return Math.floor(Math.random()*(t-e)+e)}function c(e){return"undefined"===e||!e||!/[^\s]/.test(e)}function d(e){return"undefined"!==e&&null!=e}function m(e,t){return d(e)?e:t}n.r(t),n.d(t,"getCookie",function(){return a}),n.d(t,"getQueryStringByName",function(){return o}),n.d(t,"convertToUrlParams",function(){return r}),n.d(t,"getUUID",function(){return i}),n.d(t,"formatDate",function(){return s}),n.d(t,"digitUppercase",function(){return u}),n.d(t,"randomNum",function(){return l}),n.d(t,"stringEmptyOrNull",function(){return c}),n.d(t,"haveObject",function(){return d}),n.d(t,"getObject",function(){return m})},205:function(e,t,n){"use strict";var a={};n.r(a),n.d(a,"counter",function(){return l});var o={};n.r(o),n.d(o,"userInfo",function(){return f});var r=n(35),i=n(70),s=n(34),u={count:10},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case s.a.ADD:return Object(r.a)({},e,{count:e.count+1});case s.a.SUB:return Object(r.a)({},e,{count:e.count-1});case s.a.RESET:return Object(r.a)({},e,u);case s.a.SET:return Object(r.a)({},e,{count:t.count});default:return e}},c=n(51),d=n(45),m={userInfo:{},menuList:[],loading:!1},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case d.a.SET:return Object(r.a)({},e,{userInfo:t.userInfo});case d.a.SET_LOADING:return Object(r.a)({},e,{loading:t.loading});case d.a.SET_MENU:return Object(r.a)({},e,{menuList:t.menuList});case d.a.ADD_MENU:return Object(r.a)({},e,{menuList:Object(c.a)(e.menuList).concat(t.menuList)});default:return e}},p=n(202),g=Object(i.d)(Object(i.c)(Object(r.a)({},a,o)),Object(i.a)(p.a));t.a=g},23:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a={};a={ENV_TITLE:"mock",API_ROOT:"",TEST_USERNAME:"admin",TEST_PASSWORD:"123456",TEST_CAPRCHA:"666666",DEMO_MENU:!0,MOCK_DATA:!0,MOCK_LOGIN:!0,MOCK_DEMO_USER:!0};var o=Object.assign({ENV_TITLE:"unknown",API_ROOT:"",TEST_USERNAME:"",TEST_PASSWORD:"",TEST_CAPRCHA:"",DEMO_MENU:!1,MOCK_DATA:!1,MOCK_LOGIN:!1,MOCK_DEMO_USER:!1,DEMO_MQTT:!1,IS_BrowserRouter:!1},a)},238:function(e,t,n){e.exports=n(444)},245:function(e,t,n){},248:function(e,t,n){},269:function(e,t){Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),"S+":this.getMilliseconds()};for(var n in/(y+)/i.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e},String.prototype.format=function(){var e=arguments;return this.replace(/\{(\d+)\}/g,function(t,n){return e.length>n?e[n]:""})}},30:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={SUCCESS:1,ERROR:2,AUTHFAIL:3,VALIDFAIL:4,UPDATEVER:5,NOTPOPEDOM:6,NOT_DATA_POPEDOM:7,NOTKNOWN:-1}},32:function(e,t,n){"use strict";var a=n(26),o=n.n(a),r=(n(159),n(78)),i=n.n(r),s=n(23),u=n(15);var l={getApiRoot:function(){return s.a.MOCK_DATA?"":s.a.API_ROOT},showErrorMessage:function(e){console.log("showErrorMessage: ",e),i.a.error(e)},getResponseCodeString:function(e){return e},getDefaultHeader:function(e){return e.headers["x-access-token"]=u.a.getUserToken(),e.headers["x-access-type"]="web",e.headers["x-access-systemcode"]=u.a.getSystemInfo().systemCode,e.headers["x-access-loginflag"]=u.a.getSystemInfo().loginFlag,e},processNoAuth:function(){u.a.deleteUserSession(),window.location.reload()},processDefaultAxios:function(e){e.defaults.timeout=6e4}},c=n(30),d=n(170);l.processDefaultAxios(o.a);var m=o.a.CancelToken;function f(e){return l.getApiRoot()+e}function p(e){l.showErrorMessage(e)}function g(e){return l.getResponseCodeString(e)}function h(e){return e.code===c.a.SUCCESS}o.a.interceptors.request.use(function(e){return l.getDefaultHeader(e)},function(e){return Promise.reject(e)}),o.a.interceptors.response.use(function(e){return 200!==e.status?(p(g("message.errorRequest")+" : "+e.status),Promise.reject(e)):(function(e){if(e.code===c.a.AUTHFAIL)return l.processNoAuth(),!0;if(e.code===c.a.ERROR)return p(e.message),!0;if(e.code===c.a.VALIDFAIL){var t="";if(e.extendData&&e.extendData.fieldErrors){var n=e.extendData.fieldErrors;n.forEach(function(e){t+=" "+e.message})}else if(e.data&&e.data.fieldErrors){var a=e.data.fieldErrors;a.forEach(function(e){t+=" "+e.message})}return p(t),!0}if(e.code===c.a.UPDATEVER)return p(g("message.upateVer")),!0;if(e.code===c.a.NOTPOPEDOM)return p("["+e.data+"]"+g("message.notPopedom")),!0;if(e.code===c.a.NOT_DATA_POPEDOM)return p("["+e.data+"]"+g("message.notDataPopedom")),!0}(e.data),e)},function(e){if(o.a.isCancel(e));else{console.log("err: ",e);var t=g("message.errorNetwork");e&&("ECONNABORTED"===e.code&&-1!==e.message.indexOf("timeout")?t+=" : "+e.message:e.response&&e.response.status&&(t+=" : "+e.response.status)),p(t)}return Promise.reject(e)});t.a={Url:d.a,getUrl:function(e,t,n){return new Promise(function(a,r){var i=m.source();n&&n(i),o.a.get(f(e),{cancelToken:i.token,params:t}).then(function(e){h(e.data)?a(e.data):r(e.data)}).catch(function(e){if(o.a.isCancel(e))throw console.log("Request canceled",e.message),e;var t={};t.code=c.a.NOTKNOWN,t.error=e,r(t)})})},postUrl:function(e,t,n){return new Promise(function(a,r){var i=m.source();n&&n(i),o.a.post(f(e),t,{cancelToken:i.token}).then(function(e){h(e.data)?a(e.data):r(e.data)}).catch(function(e){if(o.a.isCancel(e))console.log("Request canceled",e.message);else{var t={};t.code=c.a.NOTKNOWN,t.error=e,r(t)}})})}}},323:function(e,t,n){},34:function(e,t,n){"use strict";t.a={SET:"COUNTER_SET",ADD:"COUNTRR_ADD",SUB:"COUNTRR_SUB",RESET:"COUNTRR_RESET"}},403:function(e,t,n){},413:function(e,t,n){e.exports=n.p+"static/media/user.b0016d49.png"},440:function(e,t,n){"use strict";var a=n(193),o=n.n(a),r=n(26),i=n.n(r),s=n(30);function u(e,t){var n={};return n.code=s.a.SUCCESS,n.data=e,n.message=t,n}function l(e){var t={};return t.code=s.a.ERROR,t.message=e,t}for(var c=[{id:1,userId:1,username:"admin",password:"e10adc3949ba59abbe56e057f20f883e",avatar:"",aliasname:"mockjs",tokenId:"xx",loginResultFlag:1}],d={baseInfo:null,menuList:[{groupName:"\u57fa\u672c\u914d\u7f6e",code:"fun_x_01",name:"x_01",groupIndex:1},{groupName:"\u57fa\u672c\u914d\u7f6e",code:"fun_x_02",name:"x_02",groupIndex:1}],count:61},m=function(e){var t=d;e.onGet("/success").reply(200,u(null,"success")),e.onGet("/error").reply(500,l(null)),e.onGet("/_mockjs/sys/getLoginInfo").reply(function(){return new Promise(function(e){setTimeout(function(){e([200,u(t,"\u8bf7\u6c42\u6210\u529f")])},1e3)})}),e.onPost("/_mockjs/sys/login").reply(function(e){var n=JSON.parse(e.data),a=n.username,o=n.password;return new Promise(function(e){var n=null;setTimeout(function(){c.some(function(e){return e.username===a&&e.password===o&&((n=JSON.parse(JSON.stringify(e))).password=void 0,!0)})?(t.baseInfo=n,e([200,u(n,"\u8bf7\u6c42\u6210\u529f")])):e([200,l("\u8d26\u53f7\u6216\u5bc6\u7801\u9519\u8bef")])},2e3)})}),e.onPost("/_mockjs/sys/logout").reply(function(){return new Promise(function(e){e([200,u(null,"\u8bf7\u6c42\u6210\u529f")])})}),e.onGet("/_mockjs/sys/count").reply(function(){return new Promise(function(e){setTimeout(function(){e([200,u({count:99},"\u8bf7\u6c42\u6210\u529f")])},5e3)})})},f=n(17),p=n.n(f),g=[],h=0;h<71;h++)g.push(p.a.mock({id:p.a.Random.guid(),name:p.a.Random.cname(),addr:p.a.mock("@county(true)"),"age|18-60":1,birth:p.a.Random.date(),sex:p.a.Random.integer(0,1)}));for(var E=function(e){var t=g;e.onGet("/_mockjs/user/list").reply(function(e){var n=e.params.name,a=t.filter(function(e){return!n||-1!==e.name.indexOf(n)});return new Promise(function(e){setTimeout(function(){e([200,u({list:a},"")])},1e3)})}),e.onGet("/_mockjs/user/listpage").reply(function(e){var n=e.params,a=n.pageNum,o=n.name,r=n.pageSize,i=t.filter(function(e){return!o||-1!==e.name.indexOf(o)}),s=i.length;return i=i.filter(function(e,t){return t<r*a&&t>=r*(a-1)}),new Promise(function(e){setTimeout(function(){e([200,u({total:s,pageNum:a,pageSize:r,list:i})])},1e3)})}),e.onPost("/_mockjs/user/delete").reply(function(e){var n=JSON.parse(e.data).id;return t=t.filter(function(e){return e.id!==n}),new Promise(function(e){setTimeout(function(){e([200,u(null,"\u5220\u9664\u6210\u529f")])},3e3)})}),e.onPost("/_mockjs/user/batchdelete").reply(function(e){var n=JSON.parse(e.data).ids;return n=n.split(","),t=t.filter(function(e){return!n.includes(e.id)}),new Promise(function(e){setTimeout(function(){e([200,u(null,"\u5220\u9664\u6210\u529f")])},3e3)})}),e.onPost("/_mockjs/user/edit").reply(function(e){var n=JSON.parse(e.data),a=n.id,o=n.name,r=n.addr,i=n.age,s=n.birth,l=n.sex;return t.some(function(e){return e.id===a&&(e.name=o,e.addr=r,e.age=i,e.birth=s,e.sex=l,!0)}),new Promise(function(e){setTimeout(function(){e([200,u(null,"\u7f16\u8f91\u6210\u529f")])},3e3)})}),e.onPost("/_mockjs/user/add").reply(function(e){var n=JSON.parse(e.data),a=n.name,o=n.addr,r=n.age,i=n.birth,s=n.sex,l={id:p.a.Random.guid(),name:a,addr:o,age:r,birth:i,sex:s};return t.push(l),new Promise(function(e){setTimeout(function(){e([200,u(l,"\u65b0\u589e\u6210\u529f")])},3e3)})})},y={pageNum:1,pageSize:10,size:10,total:12,pages:2},O=[],v={dataList:O,pageInfo:y},b=0;b<y.pageSize;b++){var S=p.a.Random.guid();O.push(p.a.mock({_1003:p.a.mock("@county(true)"),_1002:p.a.Random.cname(),_S_3:p.a.Random.integer(0,1),_S_4:p.a.Random.integer(0,1),_S_1:b+1,_S_2:S,_1001:S}))}var T={fieldListInfo:[{fieldName:"id",fieldCode:"1001",dataValue:"",fieldDesc:"id",fieldType:1,extendType:1,queryLinkName:""},{fieldName:"name",fieldCode:"1002",dataValue:"",fieldDesc:"\u540d\u79f0",fieldType:1,extendType:1,queryLinkName:""},{fieldName:"content",fieldCode:"1003",dataValue:"",fieldDesc:"\u5185\u5bb9",fieldType:1,extendType:1,queryLinkName:""}]};v.fieldListInfo=[{fieldName:"",fieldCode:"S_1",dataValue:null,width:70,linkUrl:"",fieldDesc:"#",fieldViewName:"_S_1",fieldType:81,extendType:0,visValue:1},{fieldName:"id",fieldCode:"1001",dataValue:null,width:120,linkUrl:"",fieldDesc:"id",fieldViewName:"_1001",fieldType:2,extendType:1,visValue:1},{fieldName:"name",fieldCode:"1002",dataValue:null,width:120,linkUrl:"",fieldDesc:"\u540d\u79f0",fieldViewName:"_1002",fieldType:1,extendType:1,visValue:1},{fieldName:"content",fieldCode:"1003",dataValue:null,width:120,linkUrl:"",fieldDesc:"\u5185\u5bb9",fieldViewName:"_1003",fieldType:1,extendType:1,visValue:1},{fieldName:"id",fieldCode:"S_4",dataValue:null,width:70,linkUrl:"",fieldDesc:"",fieldViewName:"_S_4",fieldType:2,extendType:72,visValue:1},{fieldName:"(1)",fieldCode:"S_2",dataValue:null,width:65,linkUrl:"",fieldDesc:"\u7f16\u8f91",fieldViewName:"_S_2",fieldType:6,extendType:70,visValue:1},{fieldName:"(1)",fieldCode:"S_3",dataValue:null,width:65,linkUrl:"",fieldDesc:"\u5220\u9664",fieldViewName:"_S_3",fieldType:6,extendType:71,visValue:1}];var _=function(e){e.onPost("/_mockjs/datafunction/queryFields").reply(function(e){return new Promise(function(e){e([200,u(T,"queryFields")])})}),e.onPost("/_mockjs/datafunction/select").reply(function(e){return new Promise(function(e){e([200,u(v,"select")])})}),e.onPost("/_mockjs/datafunction/delete").reply(function(e){return new Promise(function(e){e([200,u({cmmitResult:{cmmitFlag:1}},"")])})})},k=n(23);if(k.a.MOCK_DATA){i.a.defaults.baseURL=k.a.API_ROOT;var N=new o.a(i.a,{delayResponse:500});k.a.MOCK_LOGIN&&m(N),k.a.MOCK_DEMO_USER&&E(N),_(N),N.onAny().passThrough()}},444:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(6),i=n.n(r),s=(n(245),n(192));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(s.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},45:function(e,t,n){"use strict";t.a={SET:"USER_SET",SET_LOADING:"USER_LOADING",SET_MENU:"SET_MENU",ADD_MENU:"ADD_MENU"}},58:function(e,t,n){"use strict";n(159);var a=n(78),o=n.n(a);var r=null;t.a={showErrorMessage:function(e){o.a.error(e)},showLoadingMessage:function(e){return null==r&&(r=o.a.loading(e,0),!0)},closeLoadingMessage:function(){r&&(setTimeout(r,10),r=null)}}},79:function(e,t,n){"use strict";var a=n(200),o=n(1),r=n.n(o),i=n(27),s=n(15);t.a=function(e){var t=e.component,n=Object(a.a)(e,["component"]);return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return s.a.isAuthSession()?r.a.createElement(t,e):r.a.createElement(i.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}}},[[238,5,6]]]);