(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{559:function(e,t,n){},894:function(e,t,n){"use strict";n.r(t);var a=n(19),u=n(20),s=n(22),i=n(18),c=n(21),r=n(1),l=n.n(r),o=(n(559),function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={userInput:""},n.state.userInput="input",n.myRef=l.a.createRef(),n}return Object(c.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState({userInput:e.target.value})}},{key:"clearAndFocusInput",value:function(){this.setState({userInput:""}),this.myRef.current.focus()}},{key:"render",value:function(){return l.a.createElement("div",{style:h.bg,className:"home"},"Hello World!!!",l.a.createElement("div",{dangerouslySetInnerHTML:{__html:" Hello World  !!!"}}),l.a.createElement("div",{onClick:this.clearAndFocusInput.bind(this)},"Click to Focus and Reset"),l.a.createElement("input",{ref:this.myRef,value:this.state.userInput,onChange:this.handleChange.bind(this)}))}}]),t}(l.a.Component)),h={bgxx:{position:"absolute",top:0,left:0,width:"100%",height:"calc(100vh - 64px)"}};t.default=o}}]);