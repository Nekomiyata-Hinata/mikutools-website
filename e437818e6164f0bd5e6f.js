(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1907:function(t,n,e){"use strict";e.r(n);var r=e(30),o=e.n(r),l={name:"InstagramMediaDownloader",head:function(){return this.$store.state.currentTool.head},data:function(){return{url:"",data:"",loading:!1}},methods:{download:function(){var t=this;if(this.loading)return!1;o.a.isURL(this.url)?(this.loading=!0,this.data="",this.$axios.post("/instagram_media_downloader",{url:this.url}).then((function(n){t.loading=!1,"string"==typeof n.data.data?t.data=[n.data.data]:t.data=n.data.data})).catch((function(n){t.loading=!1,t.$swal({type:"error",title:"下载失败",text:n})}))):this.$swal({type:"error",title:"下载失败",text:"ERROR: 请输入正确的链接"})}}},d=e(3),component=Object(d.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"instagram_media_downloader"},[e("nya-container",{attrs:{title:"Instagram 图片视频下载"}},[e("div",{staticClass:"inputbtn"},[e("nya-input",{attrs:{autofocus:"",label:"输入链接开始下载",placeholder:"https://www.instagram.com/p/Btvrw9Pl2WH",autocomplete:"off"},on:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.download(n)}},model:{value:t.url,callback:function(n){t.url="string"==typeof n?n.trim():n},expression:"url"}}),t._v(" "),e("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.loading},on:{click:t.download}},[t._v("\n                "+t._s(t.loading?"获取中":"开始获取")+"\n            ")])],1)]),t._v(" "),e("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.data.length,expression:"data.length"}],attrs:{title:"获取成功"}},t._l(t.data,(function(n,r){return e("div",{key:r},[e("p",[e("a",{attrs:{href:n,target:"_blank",title:"右键另存为下载或长按保存",rel:"noopener noreferrer"}},[t._v("\n                    "+t._s(n)+"\n                ")])])])})),0)],1)}),[],!1,null,null,null);n.default=component.exports}}]);