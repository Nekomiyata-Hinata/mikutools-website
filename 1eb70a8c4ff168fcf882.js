(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1844:function(t,e,n){"use strict";n.r(e);var o=n(30),r=n.n(o),l={name:"SouhuVideoDownloader",head:function(){return this.$store.state.currentTool.head},data:function(){return{url:"",data:[],loading:!1}},methods:{download:function(){var t=this;if(this.loading)return!1;r.a.isURL(this.url)?(this.loading=!0,this.data=[],this.$axios.post("".concat(this.$store.state.env.apiUrlCn,"/get_video"),{url:this.url}).then((function(e){t.loading=!1,t.data=e.data.data})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"下载失败",text:e})}))):this.$swal({type:"error",title:"下载失败",text:"ERROR: 请输入正确的链接"})}}},d=n(3),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"souhu_video_downloader"},[n("nya-container",{attrs:{title:"搜狐视频下载"}},[n("div",{staticClass:"inputbtn"},[n("nya-input",{attrs:{autofocus:"",label:"输入链接开始下载",placeholder:"https://tv.sohu.com/20170424/n490533487.shtml",autocomplete:"off"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.download(e)}},model:{value:t.url,callback:function(e){t.url="string"==typeof e?e.trim():e},expression:"url"}}),t._v(" "),n("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.loading},on:{click:t.download}},[t._v("\n                "+t._s(t.loading?"获取中":"开始获取")+"\n            ")])],1)]),t._v(" "),n("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.data.length,expression:"data.length"}],attrs:{title:"获取成功"}},t._l(t.data,(function(e,o){return n("p",{key:o},[n("b",[t._v(t._s(e.title)+"：")]),t._v(" "),n("a",{attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(e.url))])])})),0)],1)}),[],!1,null,null,null);e.default=component.exports}}]);