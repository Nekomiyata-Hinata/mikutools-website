(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1919:function(t,n,e){"use strict";e.r(n);var o={name:"YiGeDingLia",head:function(){return this.$store.state.currentTool.head},data:function(){return{idiom:"",data:"",loading:!1}},methods:{query:function(){var t=this;this.idiom?(this.loading=!0,this.data="",this.$axios.post("/yi_ge_ding_lia",{idiom:this.idiom}).then((function(n){t.loading=!1,t.data=n.data.data})).catch((function(n){t.loading=!1,t.$swal({type:"error",title:"接龙失败",text:"ERROR: ".concat(n)})}))):this.$swal({type:"error",title:"接龙失败",text:"ERROR: 请输入正确的成语"})}}},r=e(3),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"yi_ge_ding_lia"},[e("nya-container",{attrs:{title:"一个顶俩"}},[e("div",{staticClass:"inputbtn"},[e("nya-input",{attrs:{autofocus:"",label:"输入成语将自动接龙到【一个顶俩】",placeholder:"为所欲为",autocomplete:"off"},on:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.query(n)}},model:{value:t.idiom,callback:function(n){t.idiom="string"==typeof n?n.trim():n},expression:"idiom"}}),t._v(" "),e("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.loading},on:{click:t.query}},[t._v("\n                "+t._s(t.loading?"接龙中":"开始接龙")+"\n            ")])],1)]),t._v(" "),e("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.data,expression:"data"}],staticClass:"result",attrs:{title:"接龙成功"}},[t.data.length?e("ul",t._l(t.data,(function(n,o){return e("li",{key:o},[t._v("\n                "+t._s(n)+"\n            ")])})),0):e("p",[t._v("\n            这可能不是一个成语或接龙失败\n        ")])]),t._v(" "),e("nya-container",{attrs:{title:"说明"}},[t._v("\n        灵感来自："),e("a",{attrs:{href:"https://github.com/ustc-zzzz/YiGeDingLia",target:"_blank",rel:"noopener noreferrer"}},[t._v("ustc-zzzz/YiGeDingLia")])])],1)}),[],!1,null,null,null);n.default=component.exports}}]);