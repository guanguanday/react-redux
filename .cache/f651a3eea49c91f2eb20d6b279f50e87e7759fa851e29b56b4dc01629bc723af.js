{"source":"webpackJsonp([7],{578:function(e,t,a){\"use strict\";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.homeFriends.userPosition;return console.log(t),{_userPos:t}}function l(e){return{ACTIONS:(0,k.bindActionCreators)(B.default,e)}}Object.defineProperty(t,\"__esModule\",{value:!0});var i=a(117),o=n(i),s=a(319),c=n(s),u=a(317),d=n(u),f=a(318),p=n(f),m=a(320),v=n(m),h=a(321),_=n(h),g=a(1),b=n(g),k=a(72),E=a(323),M=a(3),y=(n(M),a(51),a(322)),w=(a(116),a(50)),S=n(w),A=a(591),C=n(A),N=a(584),P=(n(N),a(590)),x=n(P),z=a(585),O=n(z),T=a(586),B=n(T),F=a(587);n(F);a(603);var I=function(e){function t(e){(0,d.default)(this,t);var a=(0,v.default)(this,(t.__proto__||(0,c.default)(t)).call(this,e));return a.map=null,a.state={alert:!1,alertTips:\"\"},a}return(0,_.default)(t,e),(0,p.default)(t,[{key:\"componentDidMount\",value:function(){var e=this;(0,O.default)(this);var t=this.props.ACTIONS;x.default.config(function(a){e.map=new a.Map(\"container\",{resizeEnable:!0,zoom:11}),t.friends_location({map:e.map,success:function(n){C.default.show(\"d\");var r=n.position;a.service([\"AMap.PlaceSearch\"],function(){var n=new a.PlaceSearch({pageSize:30,type:\"休闲\",pageIndex:1,panel:\"panel\"}),l=[r.lng,r.lat];n.searchNearBy(\"\",l,5e3,function(n,r){\"complete\"==n&&\"OK\"==r.info?function(){var n=r.poiList.pois;t.friends_sreach(n);for(var l=0;l<n.length;l++)!function(t){var r=n[t].location,l=r.lng,i=r.lat,o=new a.Marker({icon:\"http://webapi.amap.com/theme/v1.3/markers/n/mark_bs.png\",map:e.map,position:[l,i],content:'<div class=\"amap-marker-content\"><div class=\"amap_lib_placeSearch_poi\">'+(t+1)+\"</div></div>\"});a.event.addListener(o,\"click\",function(t){e.setState({alert:!0})},!1),e.map.setFitView()}(l)}():S.default.error(\"附近暂时没有共享位置的用户\"),console.log(50,r),C.default.remove(\"d\")})})}})})}},{key:\"render\",value:function(){var e=this.state,t=e.alert,a=e.alertTips;return b.default.createElement(\"section\",{className:\"i-friends\"},b.default.createElement(\"div\",{className:\"container\",id:\"container\",style:{height:screen.height+\"px\"}}),b.default.createElement(L,{visible:t,message:a,close:this.close}))}}]),t}(g.Component),L=function(e){return b.default.createElement(y.Modal,(0,o.default)({},e,{visible:e.visible,radius:!0}),b.default.createElement(y.Modal.Body,null,b.default.createElement(\"p\",{style:{textAlign:\"center\"}},e.message||\"该功能正在开发中，敬请期待！\")),b.default.createElement(y.Modal.Footer,null,b.default.createElement(y.Button,{radius:!0,block:!0,bordered:!0,size:\"sm\",onClick:function(){return e.close(\"alert\")}},\"关闭\")))};t.default=(0,E.connect)(r,l)(I),e.exports=t.default},603:function(e,t){}});","map":null}