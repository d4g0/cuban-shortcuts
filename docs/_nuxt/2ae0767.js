(window.webpackJsonp=window.webpackJsonp||[]).push([[9,6,7],{306:function(e,t,n){"use strict";n.r(t);n(205);var r={};r.props={isHead:{type:Boolean,default:!1},isMiddle:{type:Boolean,default:!0},isTail:{type:Boolean,default:!1},link:{type:Object,default:function(){return{type:String,group:String,category:String,name:String,command:String,data:{price:Number,text:String}}}}},r.setup=function(e,t){return{}};var l=r,d=n(44),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"w-full h-full block px-5 py-5 bg-light-elevation dark:bg-dark-elevation",class:{"rounded-t-xl":e.isHead,"border-t-light-text-dimmed/40 dark:border-t-dark-text-dimmed/40 border-t":e.isMiddle,"rounded-b-xl border-t-light-text-dimmed/40 dark:border-t-dark-text-dimmed/40 border-t":e.isTail},attrs:{target:"_blank",rel:"noopener",href:"tel:"+e.link.command}},[n("p",{staticClass:"text-lg font-medium leading-none"},[e._v("\n    "+e._s(e.link.name)+"\n  ")]),e._v(" "),n("div",{staticClass:"mt-2 flex items-center justify-start text-xs text-dark-text-dimmed"},[n("p",{staticClass:"leading-none"},[e._v("$ "+e._s(e.link.data.price))]),e._v(" "),n("p",{staticClass:"ml-4 leading-none"},[e._v("\n      "+e._s(e.link.data.text)+"\n    ")])])])}),[],!1,null,null,null);t.default=component.exports},307:function(e,t,n){"use strict";n.r(t);var r={};r.props={isHead:{type:Boolean,default:!1},isMiddle:{type:Boolean,default:!0},isTail:{type:Boolean,default:!1},link:{type:Object,default:function(){return{type:String,group:String,category:String,name:String,command:String,data:null}}}},r.setup=function(e,t){return{}};var l=r,d=n(44),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"w-full h-full block px-5 py-5 bg-light-elevation dark:bg-dark-elevation",class:{"rounded-t-xl":e.isHead,"border-t-light-text-dimmed/40 dark:border-t-dark-text-dimmed/40 border-t":e.isMiddle,"rounded-b-xl border-t-light-text-dimmed/40 dark:border-t-dark-text-dimmed/40 border-t":e.isTail},attrs:{target:"_blank",rel:"noopener",href:"tel:"+e.link.command}},[n("p",{staticClass:" font-medium leading-none"},[e._v("\n    "+e._s(e.link.name)+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports},308:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return m}));n(205);var r={simple:{key:"simple",group:String,category:String,name:String,command:String,data:null},etecsaPlan:{key:"etecsa-plan",group:String,category:String,name:String,command:String,data:{price:Number,text:String}}},l={etecsa:"etecsa"},d={saldo:"saldo",planes:"planes"},o=[{type:r.simple.key,group:l.etecsa,category:d.saldo,name:"Principal",command:"*222#",data:null},{type:r.simple.key,group:l.etecsa,category:d.saldo,name:"Bono",command:"*222*266#",data:null},{type:r.simple.key,group:l.etecsa,category:d.saldo,name:"Datos",command:"*222*328#",data:null},{type:r.etecsaPlan.key,group:l.etecsa,category:d.planes,name:"1.4 Gb",command:"*133*5*1#",data:{price:125,text:"15min + 20sms"}},{type:r.etecsaPlan.key,group:l.etecsa,category:d.planes,name:"3.5 Gb",command:"*133*5*2#",data:{price:250,text:"35min + 40sms"}},{type:r.etecsaPlan.key,group:l.etecsa,category:d.planes,name:"8.0 Gb",command:"*133*5*3#",data:{price:500,text:"75min + 80sms"}}],m={types:r,groups:l,categorys:d,shortcuts:o}},312:function(e,t,n){"use strict";n.r(t);var r=n(308),l=(n(306),n(307)),d={};d.props={sectionName:String,itemsType:{type:String,default:""},simpleItems:{type:Array,default:function(){return[{type:String,group:String,category:String,name:String,command:String,data:null}]}}},d.setup=function(e,t){return{dbTypes:r.b}},d.components=Object.assign({SectionLinkSimple:l.default},d.components);var o=d,m=n(44),component=Object(m.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:" "},[n("h1",{staticClass:"text-light-text-normal dark:text-dark-text-dimmed capitalize ml-2"},[e._v(e._s(e.sectionName))]),e._v(" "),n("ul",{staticClass:"mt-2 shadow-md rounded-xl"},[e.itemsType==e.dbTypes.simple.key?n("div",e._l(e.simpleItems,(function(t,r){return n("li",{key:r},[n("SectionLinkSimple",{attrs:{link:t,isHead:0==r,isMiddle:0!=r&&r<e.simpleItems.length-1,isTail:r==e.simpleItems.length-1}})],1)})),0):e._e()])])}),[],!1,null,"78a09d7c",null);t.default=component.exports;installComponents(component,{SectionLinkSimple:n(307).default})}}]);