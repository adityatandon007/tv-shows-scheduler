(window["webpackJsonptv-shows-scheduler"]=window["webpackJsonptv-shows-scheduler"]||[]).push([[0],{35:function(e,t,a){},49:function(e,t,a){e.exports=a(77)},54:function(e,t,a){},55:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(8),i=a.n(l),c=(a(54),a(45)),m=a(20),o=a(21),r=a(26),h=a(22),u=a(19),d=a(27),v=(a(35),a(83)),E=a(84),g=a(81),w=a(79),b=a(80),f=a(82),p=(a(55),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(r.a)(this,Object(h.a)(t).call(this,e))).state={tvDetails:{},loading:!0},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.id;fetch("https://api.tvmaze.com/shows/".concat(t)).then(function(e){return e.json()}).then(function(t){e.setState({tvDetails:t,loading:!1})})}},{key:"render",value:function(){var e="";return e=this.state.tvDetails.image&&this.state.tvDetails.image.medium?"url("+this.state.tvDetails.image.medium+")":"#333",s.a.createElement("div",{className:"showsDetailsContainer"},s.a.createElement("div",{className:"showsDetails",style:{background:e}}),s.a.createElement("div",{className:"showsDetailsOverlay"},s.a.createElement(f.a.Header,{closeButton:!0}),s.a.createElement(f.a.Body,null,this.state.loading?s.a.createElement("div",null,"Loading..."):s.a.createElement("div",null,s.a.createElement(w.a,null,s.a.createElement(b.a,{md:12},s.a.createElement("div",{className:"showsTitle"},s.a.createElement("span",{className:"showsName"},this.state.tvDetails.name)),s.a.createElement("div",{className:"showsSubtitle"},s.a.createElement("div",null," ",s.a.createElement("b",null,"Type: "),this.state.tvDetails.type?this.state.tvDetails.type:""),s.a.createElement("i",{className:"fa fa-clock-o"})," "+this.state.tvDetails.runtime+" min"))),s.a.createElement(w.a,null,s.a.createElement(b.a,{md:8},s.a.createElement("b",null,"Summary"),s.a.createElement("p",{className:"showsOverview"},this.state.tvDetails.summary)),s.a.createElement(b.a,{md:4,sm:12,xs:12},s.a.createElement("div",{className:"showsSchedule"},0!==this.state.tvDetails.schedule.days.length?s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("b",null,"Time: "),this.state.tvDetails.schedule.time),s.a.createElement("div",null,s.a.createElement("b",null,"Airing Days")),s.a.createElement("ul",null,this.state.tvDetails.schedule.days.map(function(e,t){return s.a.createElement("li",{key:t},e)}))):"")))))))}}]),t}(n.Component)),D=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(r.a)(this,Object(h.a)(t).call(this,e))).state={showsAiring:[],openDetails:[],theme:"light"},a.closeDetails=a.closeDetails.bind(Object(u.a)(a)),a.setTheme=a.setTheme.bind(Object(u.a)(a)),a.toggleTheme=a.toggleTheme.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"setTheme",value:function(e){this.setState({theme:e})}},{key:"toggleTheme",value:function(){"light"===this.state.theme?(window.localStorage.setItem("theme","dark"),this.setTheme("dark")):(window.localStorage.setItem("theme","light"),this.setTheme("light"))}},{key:"openDetails",value:function(e){this.setState({openDetails:Object(c.a)({},e,!0)})}},{key:"closeDetails",value:function(){this.setState({openDetails:!1})}},{key:"handleShowDetails",value:function(){this.openDetails()}},{key:"componentDidMount",value:function(){var e=this,t=window.localStorage.getItem("theme");t&&this.setTheme(t),fetch("https://api.tvmaze.com/schedule").then(function(e){return e.json()}).then(function(t){e.setState({showsAiring:t})})}},{key:"render",value:function(){var e=this,t=this.state.theme;return s.a.createElement("div",{className:"App ".concat(t)},s.a.createElement(v.a,{bg:"dark",variant:"dark"},s.a.createElement(v.a.Brand,null,s.a.createElement("img",{alt:"",src:"./logo.png",className:"navbarLogo"}),"Shows Airing Today in USA"),s.a.createElement(E.a,{variant:"success",size:"sm",onClick:this.toggleTheme},"dark"===this.state.theme?s.a.createElement("i",{className:"fa fa-sun-o"}):s.a.createElement("i",{className:"fa fa-moon-o"}))),s.a.createElement(g.a,null,s.a.createElement(w.a,null,this.state.showsAiring.map(function(t,a){return s.a.createElement(b.a,{key:a,lg:3,md:4,sm:6,xs:12},s.a.createElement("div",{style:{transitionDelay:"0."+a+"s"},className:"thumb center-block"},s.a.createElement("div",{className:"thumbImageContainer"},s.a.createElement("div",{className:"thumbImage",style:{background:t.show.image?"url("+t.show.image.medium+")":"#333"}}),s.a.createElement("div",{className:"thumbImageOverlayContainer",onClick:e.openDetails.bind(e,a)},s.a.createElement("div",{className:"thumbImageOverlay"}))),s.a.createElement("div",{className:"thumbTitle"},t.show.name),s.a.createElement("div",{className:"thumbAirtime"},t.show.schedule.time)),s.a.createElement(f.a,{bssize:"large",show:e.state.openDetails[a]||!1,onHide:e.closeDetails},s.a.createElement(p,{id:t.show.id})))}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[49,1,2]]]);
//# sourceMappingURL=main.40257336.chunk.js.map