(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1833:function(t,e,n){"use strict";n.r(e);n(488);var r={name:"TelegramSticker",head:function(){return this.$store.state.currentTool.head},data:function(){return{link:"",results:"",apiurl:"https://tools-api.hazymoon.vip",loading:!1}},methods:{getSticker:function(){var t=this;if(this.loading)return!1;/^(https?:\/\/)t\.me\/addstickers\//.test(this.link)?(this.loading=!0,this.results="",this.$axios.post("/telegram_sticker",{link:this.link}).then((function(e){t.loading=!1,t.results=e.data.data})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"下载失败",text:e})}))):this.$swal({type:"error",title:"下载失败",text:"ERROR: 请输入正确的链接"})}}},l=n(3),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"telegram_sticker"},[n("nya-container",{attrs:{title:"Telegram 表情包下载"}},[n("div",{staticClass:"inputbtn"},[n("nya-input",{attrs:{label:"请输入表情包链接",placeholder:"https://t.me/addstickers/what_what_time_is_it",autocomplete:"off",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getSticker(e)}},model:{value:t.link,callback:function(e){t.link="string"==typeof e?e.trim():e},expression:"link"}}),t._v(" "),n("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.loading},on:{click:t.getSticker}},[t._v("\n                "+t._s(t.loading?"获取中":"开始获取")+"\n            ")])],1)]),t._v(" "),t.results?n("nya-container",{attrs:{title:"获取成功"}},[n("h2",[n("a",{attrs:{href:t.apiurl+"/"+t.results,download:"TelegramSticker.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击下载")])])]):t._e(),t._v(" "),n("nya-container",{attrs:{title:"说明"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("代码已开源在："),n("a",{attrs:{href:"https://github.com/Ice-Hazymoon/telegram_sticker_downloader",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ice-Hazymoon/telegram_sticker_downloader")])]),t._v(" "),n("li",[t._v("所有文件仅保留24小时，随后需要重新解析")]),t._v(" "),n("li",[t._v("获取时间取决于表情包的内容和网络速度，所以可能需要等待非常长的时间")]),t._v(" "),n("li",[t._v("本工具还在测试中，如有任何问题请发送邮件至 imiku.me#gmail.com 反馈")])])])],1)}),[],!1,null,null,null);e.default=component.exports},472:function(t,e,n){var r=n(11),l=n(14),o=n(33),c=/"/g,d=function(t,e,n,r){var l=String(o(t)),d="<"+e;return""!==n&&(d+=" "+n+'="'+String(r).replace(c,"&quot;")+'"'),d+">"+l+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(d),r(r.P+r.F*l((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},488:function(t,e,n){"use strict";n(472)("link",(function(t){return function(e){return t(this,"a","href",e)}}))}}]);