(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1015:function(e,t,a){},1017:function(e,t,a){"use strict";a(1020);var n=a(1021),r=a.n(n),o=a(31),l=a(13),c=a(14),s=a(19),i=a(17),m=a(18),u=(a(453),a(312)),p=a.n(u),h=a(0),d=a.n(h),f=a(20),E=a(32),y=a.n(E),v=a(75),b=(a(1015),p.a.confirm),g=function(e){},k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).onExpand=function(e){return function(t){var n=a.props.onChange;a.setState({expand:e,collapse:!1}),n&&n({expand:e,collapse:!1})}},a.onCollapse=function(e){return function(t){var n=a.props.onChange;a.setState({collapse:e,expand:!1}),n&&n({collapse:e,expand:!1})}},a.onRefresh=function(){a.setState({refresh:a.state.refresh+1,animationName:"fadeIn"}),a.props.onRefresh&&a.props.onRefresh()},a.onClose=function(){a.state.expand?b({title:"\u63d0\u793a",content:"\u60a8\u786e\u8ba4\u8981\u5173\u95ed\u8fd9\u4e2a\u9762\u677f\uff1f",onOk:function(){a.props.onClose&&a.props.onClose()}}):a.props.onClose&&a.props.onClose()},a.state={collapse:e.collapse||!1,expand:e.expand||!1,refresh:0,animationName:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t={};"collapse"in e?t.collapse=!0:"expand"in e&&(t.expand=!0),Object.keys(t).length&&this.setState(t)}},{key:"render",value:function(){var e=this,t=this.state,a=t.expand,n=t.collapse,l=t.refresh,c=t.animationName,s=this.props,i=s.theme,m=s.prefix,u=s.className,p=s.title,h=s.width,E=s.height,b=s.style,k=s.children,N=s.header,O=s.cover,j=s.scroll,w=y()(m,u,{theme:!!i,"panel-fullscreen":!!a,"panel-collapsed":!!n,cover:!!O}),C=Object(o.a)({},b,{width:h}),x={};a||(x.height=E),j&&(x.overflow="auto");var R="undefined"===typeof N?d.a.createElement("div",{className:"".concat(m,"-header")},d.a.createElement("span",{className:"".concat(m,"-header-title")},p),d.a.createElement("span",{className:"".concat(m,"-header-controls")},d.a.createElement("a",{className:"panel-control-loader",onClick:this.onRefresh},d.a.createElement(f.a,{type:"refresh"})),d.a.createElement("a",{className:"panel-control-fullscreen",onClick:this.onExpand(!a)},d.a.createElement(f.a,{type:"".concat(a?"shrink":"enlarge")})),d.a.createElement("a",{className:"panel-control-collapsed",onClick:this.onCollapse(!n)},d.a.createElement(f.a,{type:"".concat(n?"plus":"minus")})),d.a.createElement(r.a,{title:"\u60a8\u786e\u8ba4\u8981\u5173\u95ed\u8fd9\u4e2a\u9762\u677f\uff1f",onConfirm:this.onClose,placement:"topRight"},d.a.createElement("a",{className:"panel-control-remove",onClick:a?this.onClose:g},d.a.createElement(f.a,{type:"close"}))))):N;return d.a.createElement("div",{className:w,style:C},R,d.a.createElement("div",{className:"".concat(m,"-body"),style:x},d.a.createElement(v.a,{className:"panel-content",type:c,callback:function(t){return e.setState({animationName:""})},key:l},k)))}}]),t}(h.Component);k.defaultProps={prefix:"antui-panel"};var N=k;t.a=N},1314:function(e,t,a){"use strict";var n,r=a(1521),o=a(82),l=a(13),c=a(14),s=a(19),i=a(17),m=a(18),u=a(0),p=a.n(u),h=a(1315),d=r.Chart,f=Object(h.a)({refreshRate:50})(n=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).onGetG2Instance=function(e){a.chart=e},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.size,n=t.children,r=Object(o.a)(t,["size","children"]),l=a.width,c=a.height;return p.a.createElement(d,Object.assign({height:c,width:l,padding:"auto"},r,{onGetG2Instance:function(t){e.chart=t}}),n)}}]),t}(u.PureComponent))||n;r.Chart=f;var E=r;Object(r.track)(!1),Object(r.setTheme)({defaultColor:"#1089ff",shape:{interval:{fillOpacity:1}}});t.a=E},1315:function(e,t,a){"use strict";var n=a(31),r=a(82),o=a(13),l=a(14),c=a(19),s=a(17),i=a(18),m=a(0),u=a.n(m),p=a(1458),h=a.n(p),d=a(11),f=a.n(d),E=f.a.debounce,y=f.a.throttle,v={refreshRate:16,refreshMode:"throttle"};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t="throttle"===e.refreshMode?y:E;return function(a){return function(m){function p(a){var n;return Object(o.a)(this,p),(n=Object(c.a)(this,Object(s.a)(p).call(this,a))).onResize=function(){var e=n.element.parentNode,t=n.props.onResize,a=getComputedStyle(e),r=a.width,o=a.height,l=a.paddingLeft,c=a.paddingRight,s=a.paddingTop,i=a.paddingBottom,m={width:parseInt(r,10)-parseInt(l,10)-parseInt(c,10),height:parseInt(o,10)-parseInt(s,10)-parseInt(i,10)};n.setState(m),t&&t(m)},n.onResizeStrategy=t(n.onResize,e.refreshRate),n.state={width:void 0,height:void 0,position:void 0},n}return Object(i.a)(p,m),Object(l.a)(p,[{key:"componentDidMount",value:function(){var e=this.element.parentNode;this.resizeSensor=new h.a(e,this.onResizeStrategy),this.onResizeStrategy()}},{key:"componentWillUnmount",value:function(){var e=this.element.parentNode;this.resizeSensor.detach(e,this.onResizeStrategy)}},{key:"render",value:function(){var e=this,t=this.state,o=t.width,l=t.height,c=this.props,s=c.className,i=Object(r.a)(c,["className"]);return u.a.createElement("div",{ref:function(t){return e.element=t},style:{position:"relative",width:"100%",height:"100%"},className:s},o&&l?u.a.createElement(a,Object.assign({},i,{size:Object(n.a)({},this.state)})):null)}}]),p}(m.PureComponent)}}},1805:function(e,t,a){},2174:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return J});a(237);for(var n,r=a(131),o=a.n(r),l=(a(236),a(61)),c=a.n(l),s=a(13),i=a(14),m=a(19),u=a(17),p=a(18),h=(a(74),a(27)),d=a.n(h),f=a(0),E=a.n(f),y=a(130),v=a(20),b=a(317),g=a(1017),k=a(1314),N=a(1477),O=a.n(N),j=(a(1805),d.a.Content),w=k.a.Chart,C=k.a.Axis,x=k.a.Geom,R=k.a.Tooltip,T=k.a.Legend,L=k.a.Coord,S=k.a.Label,z=[],I=0;I<7;I+=1)z.push({title:"\u5de5\u4e13\u8def ".concat(I," \u53f7\u5e97"),total:323234});var J=Object(y.connect)(function(e){return{dashboard:e.dashboard}})(n=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.dashboard,t=e.bar1,a=e.bar2;return E.a.createElement(d.a,{className:"full-layout page dashboard-page"},E.a.createElement(j,null,E.a.createElement(o.a,{gutter:20},E.a.createElement(c.a,{md:6},E.a.createElement(g.a,{className:"qq",header:!1,cover:!0},E.a.createElement(v.a,{type:"qq",antd:!0}),E.a.createElement("h2",null,E.a.createElement("b",null,"523")),E.a.createElement("h5",{className:"text-muted"},"QQ"))),E.a.createElement(c.a,{md:6},E.a.createElement(g.a,{className:"wechat",header:!1,cover:!0},E.a.createElement(v.a,{type:"wechat",antd:!0}),E.a.createElement("h2",null,E.a.createElement("b",null,"99+")),E.a.createElement("h5",{className:"text-muted"},"\u5fae\u4fe1"))),E.a.createElement(c.a,{md:6},E.a.createElement(g.a,{className:"skype",header:!1,cover:!0},E.a.createElement(v.a,{type:"skype",antd:!0}),E.a.createElement("h2",null,E.a.createElement("b",null,"2")),E.a.createElement("h5",{className:"text-muted"},"skype"))),E.a.createElement(c.a,{md:6},E.a.createElement(g.a,{className:"github",header:!1,cover:!0},E.a.createElement(v.a,{type:"github",antd:!0}),E.a.createElement("h2",null,E.a.createElement("b",null,"999")),E.a.createElement("h5",{className:"text-muted"},"github")))),E.a.createElement(o.a,null,E.a.createElement(c.a,null,E.a.createElement(g.a,{title:"\u6570\u636e\u9762\u677f\u7ec4\u4ef6",height:300},E.a.createElement("div",{className:"flex"},E.a.createElement("div",{className:"flex-auto-hidden flex flex-column"},E.a.createElement("h4",{className:"flex-none"},"\u9500\u552e\u989d\u5206\u5e03"),E.a.createElement("div",{className:"flex-auto-hidden"},E.a.createElement(A,{data:a}))),E.a.createElement("div",{className:"flex-none sales-order"},E.a.createElement("h4",null,"\u95e8\u5e97\u9500\u552e\u989d\u6392\u540d"),E.a.createElement("ul",null,z.map(function(e,t){return E.a.createElement("li",{key:e.title},E.a.createElement("span",null,t+1),E.a.createElement("span",null,e.title),E.a.createElement("span",null,e.total))}))))))),E.a.createElement(o.a,{gutter:20},E.a.createElement(c.a,{md:8},E.a.createElement(g.a,{title:"\u6298\u7ebf\u56fe",height:260},E.a.createElement(q,null))),E.a.createElement(c.a,{md:8},E.a.createElement(g.a,{title:"\u997c\u56fe",height:260},E.a.createElement(G,null))),E.a.createElement(c.a,{md:8},E.a.createElement(g.a,{title:"\u67f1\u72b6\u56fe",height:260},E.a.createElement(M,{data:t}))))))}}]),t}(b.a))||n,M=function(e){return E.a.createElement(w,{data:e.data,scale:{sales:{tickInterval:20}}},E.a.createElement(C,{name:"year"}),E.a.createElement(C,{name:"sales"}),E.a.createElement(R,{crosshairs:{type:"y"}}),E.a.createElement(x,{type:"interval",position:"year*sales",color:["year",["#3da0ff","#51ca73","#fad337","#424e87","#985ce6"]]}))},A=function(e){var t=(new O.a).createView().source(e.data);return t.transform({type:"fold",fields:["Jan.","Feb.","Mar.","Apr.","May.","Jun.","Jul.","Aug."],key:"\u6708\u4efd",value:"\u6708\u5747\u964d\u96e8\u91cf"}),E.a.createElement(w,{data:t},E.a.createElement(C,{name:"\u6708\u4efd"}),E.a.createElement(C,{name:"\u6708\u5747\u964d\u96e8\u91cf"}),E.a.createElement(T,null),E.a.createElement(R,{crosshairs:{type:"y"}}),E.a.createElement(x,{type:"interval",position:"\u6708\u4efd*\u6708\u5747\u964d\u96e8\u91cf",color:"name",adjust:[{type:"dodge",marginRatio:1/32}]}))},G=function(e){var t=new O.a.DataView;t.source([{item:"\u4e8b\u4f8b\u4e00",count:40},{item:"\u4e8b\u4f8b\u4e8c",count:21},{item:"\u4e8b\u4f8b\u4e09",count:17},{item:"\u4e8b\u4f8b\u56db",count:13},{item:"\u4e8b\u4f8b\u4e94",count:9}]).transform({type:"percent",field:"count",dimension:"item",as:"percent"});return E.a.createElement(w,{data:t,scale:{percent:{formatter:function(e){return e=100*e+"%"}}},padding:10},E.a.createElement(L,{type:"theta",radius:.75,innerRadius:.6}),E.a.createElement(C,{name:"percent"}),E.a.createElement(T,{position:"right",offsetY:-window.innerHeight/2+120,offsetX:-100}),E.a.createElement(R,{showTitle:!1,itemTpl:'<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'}),E.a.createElement(x,{type:"intervalStack",position:"percent",color:"item",tooltip:["item*percent",function(e,t){return{name:e,value:t=100*t+"%"}}],style:{lineWidth:1,stroke:"#fff"}},E.a.createElement(S,{content:"percent",formatter:function(e,t){return t.point.item+": "+e}})))},q=function(e){var t=(new O.a).createView().source([{month:"Jan",Tokyo:7,London:3.9},{month:"Feb",Tokyo:6.9,London:4.2},{month:"Mar",Tokyo:9.5,London:5.7},{month:"Apr",Tokyo:14.5,London:8.5},{month:"May",Tokyo:18.4,London:11.9},{month:"Jun",Tokyo:21.5,London:15.2},{month:"Jul",Tokyo:25.2,London:17},{month:"Aug",Tokyo:26.5,London:16.6},{month:"Sep",Tokyo:23.3,London:14.2},{month:"Oct",Tokyo:18.3,London:10.3},{month:"Nov",Tokyo:13.9,London:6.6},{month:"Dec",Tokyo:9.6,London:4.8}]);t.transform({type:"fold",fields:["Tokyo","London"],key:"city",value:"temperature"});return E.a.createElement(w,{data:t,scale:{month:{range:[0,1]}}},E.a.createElement(T,null),E.a.createElement(C,{name:"month"}),E.a.createElement(C,{name:"temperature",label:{formatter:function(e){return"".concat(e,"\xb0C")}}}),E.a.createElement(R,{crosshairs:{type:"y"}}),E.a.createElement(x,{type:"line",position:"month*temperature",size:2,color:"city"}),E.a.createElement(x,{type:"point",position:"month*temperature",size:4,shape:"circle",color:"city",style:{stroke:"#fff",lineWidth:1}}))}}}]);