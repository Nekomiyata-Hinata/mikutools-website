(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{1785:function(t,e,o){"use strict";var l=o(615);o.n(l).a},1786:function(t,e,o){(t.exports=o(5)(!1)).push([t.i,".youtube_dl .metacode-title{display:flex;align-items:center}.youtube_dl .metacode-title i{cursor:pointer;margin-left:.3125rem}",""])},1933:function(t,e,o){"use strict";o.r(e);var l=o(484),n=o.n(l),r=(o(478),o(30)),c=o.n(r),d={name:"YoutubeDl",head:function(){return this.$store.state.currentTool.head},data:function(){return{url:"",videoData:{},showmetacode:!1,loading:!1}},computed:{metaCode:function(){return n.a.highlight("json",JSON.stringify(this.videoData,null,4)).value}},methods:{download:function(){var t=this;if(this.loading)return!1;c.a.isURL(this.url)?(this.loading=!0,this.videoData={},this.$axios.post("/youtube_dl",{url:this.url}).then((function(e){t.loading=!1,t.videoData=e.data.data})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"获取失败",text:e})}))):this.$swal({type:"error",title:"获取失败",text:"请输入正确的链接"})}}},h=(o(1785),o(3)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"youtube_dl"},[o("nya-container",{attrs:{title:"youtube-dl"}},[o("div",{staticClass:"inputbtn"},[o("nya-input",{attrs:{label:"输入链接开始下载",placeholder:"https://www.facebook.com/neneko.page/videos/407343883148739/",autocomplete:"off",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.download(e)}},model:{value:t.url,callback:function(e){t.url="string"==typeof e?e.trim():e},expression:"url"}}),t._v(" "),o("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.loading},on:{click:t.download}},[t._v("\n                "+t._s(t.loading?"获取中":"开始获取")+"\n            ")])],1)]),t._v(" "),t.videoData.title?o("nya-container",{attrs:{title:"获取视频信息成功"}},[o("h2",[t._v("标题："+t._s(t.videoData.title))]),t._v(" "),o("h2",[t._v("下载链接")]),t._v(" "),t._l(t.videoData.formats,(function(e,l){return o("div",{key:l},[o("p",[o("span",[t._v(t._s(e.format))]),t._v(" "),o("a",{attrs:{href:e.url,target:"_blank",title:"右键另存为下载或长按保存",rel:"noopener noreferrer"}},[t._v("立即下载")])])])})),t._v(" "),o("h2",{staticClass:"metacode-title"},[o("span",[t._v(t._s(t.showmetacode?"隐藏元数据":"显示元数据"))]),t._v(" "),t.showmetacode?o("i",{staticClass:"eva eva-minus-circle-outline",on:{click:function(e){t.showmetacode=!1}}}):o("i",{staticClass:"eva eva-plus-circle-outline",on:{click:function(e){t.showmetacode=!0}}})]),t._v(" "),t.showmetacode?o("pre",[o("code",{ref:"code",staticClass:"json",domProps:{innerHTML:t._s(t.metaCode)}})]):t._e()],2):t._e(),t._v(" "),o("nya-container",{attrs:{title:"说明"}},[o("ul",{staticClass:"nya-list"},[o("li",[o("b",[t._v("这个工具并不是下载 YouTube 视频的工具，如需下载 YouTube 视频，请使用 "),o("nuxt-link",{attrs:{to:"/youtube_video_downloader"}},[t._v("YouTube视频下载")])],1)]),t._v(" "),o("li",[o("b",[t._v("注意：youtube-dl 支持将近 800 个左右网站的解析，但并不是所有链接都是输入就能解析，请不要无脑使用。"),o("a",{attrs:{href:"https://github.com/ytdl-org/youtube-dl/tree/master/youtube_dl/extractor",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看支持列表")])])]),t._v(" "),o("li",[t._v("任何下载问题请查看元数据")]),t._v(" "),o("li",[t._v("暂时不支持修改参数，如有需要，请自行下载 "),o("a",{attrs:{href:"https://github.com/ytdl-org/youtube-dl",target:"_blank",rel:"noopener noreferrer"}},[t._v("youtube-dl")])])])])],1)}),[],!1,null,null,null);e.default=component.exports},478:function(t,e,o){var content=o(485);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(6).default)("03962918",content,!0,{sourceMap:!1})},485:function(t,e,o){(t.exports=o(5)(!1)).push([t.i,".hljs{display:block;overflow-x:auto;padding:.5em;color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-formula,.hljs-keyword{color:#c678dd}.hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-addition,.hljs-attribute,.hljs-meta-string,.hljs-regexp,.hljs-string{color:#98c379}.hljs-built_in,.hljs-class .hljs-title{color:#e6c07b}.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable{color:#d19a66}.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title{color:#61aeee}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}",""])},615:function(t,e,o){var content=o(1786);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(6).default)("aac7cc02",content,!0,{sourceMap:!1})}}]);