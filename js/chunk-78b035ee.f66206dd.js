(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78b035ee"],{"31e6":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("UkDetail",{attrs:{dataUk:t.dataUk,type:"confirmed"}}),e("UkDetail",{attrs:{dataUk:t.dataUk,type:"death"}}),e("UkDetail",{attrs:{dataUk:t.dataUk,type:"admissions"}}),e("UkDetail",{attrs:{dataUk:t.dataUk,type:"tested"}})],1)},s=[],n=function(){var t,a=this,e=a.$createElement,i=a._self._c||e;return i("div",[i("div",{staticClass:"title"},[a._v(a._s(a.$t("dataSwitch."+a.type)))]),i("div",{staticClass:"mBlock"},[i("div",{staticClass:"uk_numbers"},[i("div",{class:(t={},t[a.type]=!0,t)},[i("div",{staticClass:"number_title"},[a._v(a._s(a.$t("today")))]),i("div",{ref:"num",staticClass:"number"},[i("ICountUp",{attrs:{options:a.countOpt,endVal:a.latestDaily}})],1),i("div",{staticClass:"number_title"},[a._v(a._s(a.$t("last7days")))]),i("div",{staticClass:"number"},[i("ICountUp",{attrs:{options:a.countOpt,endVal:a.latest}})],1)]),i("div",{staticStyle:{"max-width":"60%"}},[i("Chart",{attrs:{id:"chart",type:"area",colors:[a.colors[a.type]],dataHistory:a.dataUk.overview.data,seriesData:a.chartData,minimum:!0}})],1)])])])},r=[],o=(e("d81d"),e("87f4")),c=e.n(o),d=e("5b7f"),l={name:"UkDetail",props:["dataUk","type"],computed:{latest:function(){return this.dataUk.latest[this.type]},latestDaily:function(){return this.dataUk.latest[this.type+"New"]},chartData:function(){var t=this;return[{name:this.$t("daily")+this.$t("dataSwitch."+this.type),data:this.dataUk.overview.data.map((function(a){var e;return null!==(e=a[t.type+"NewBySpecimen"])&&void 0!==e?e:a[t.type+"New"]}))}]}},mounted:function(){},data:function(){return{countOpt:{duration:0},colors:{confirmed:"#ff5151",death:"#575757",tested:"#0094b9",cured:"#28ca00",admissions:"#ff7300"}}},components:{ICountUp:c.a,Chart:d["a"]}},u=l,m=(e("9c7a"),e("2877")),h=Object(m["a"])(u,n,r,!1,null,"7a556b21",null),p=h.exports,b={name:"UkDetailSection",props:["dataUk"],components:{UkDetail:p}},f=b,y=Object(m["a"])(f,i,s,!1,null,"58e6ea8d",null);a["default"]=y.exports},"5b7f":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:{mBlock:!t.minimum}},[t.minimum?t._e():e("div",{staticClass:"btn-group-wrap"},[e("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group","aria-label":"date range"}},[e("button",{staticClass:"btn btn-secondary",class:{active:-14===t.range},attrs:{type:"button"},on:{click:function(a){return t.updateRange(-14,!0)}}},[t._v(" "+t._s(t.$t("chartTimes.twoWeek"))+" ")]),e("button",{staticClass:"btn btn-secondary",class:{active:-31===t.range},attrs:{type:"button"},on:{click:function(a){return t.updateRange(-31,!1)}}},[t._v(" "+t._s(t.$t("chartTimes.oneMonth"))+" ")]),e("button",{staticClass:"btn btn-secondary",class:{active:-93===t.range},attrs:{type:"button"},on:{click:function(a){return t.updateRange(-93,!1)}}},[t._v(" "+t._s(t.$t("chartTimes.threeMonth"))+" ")]),e("button",{staticClass:"btn btn-secondary",class:{active:0===t.range},attrs:{type:"button"},on:{click:function(a){return t.updateRange(0,!1)}}},[t._v(" "+t._s(t.$t("chartTimes.all"))+" ")])])]),e("VueApexCharts",{attrs:{width:"100%",height:t.minimum?"160px":void 0,type:t.type,options:t.options,series:t.series}})],1)},s=[],n=(e("d81d"),e("fb6a"),e("1321")),r=e.n(n),o={name:"Chart",components:{VueApexCharts:r.a},props:{seriesData:Array,dataHistory:Array,id:String,type:String,colors:Array,stacked:Boolean,minimum:Boolean},data:function(){return{showLabel:!1,range:0}},methods:{updateRange:function(t,a){this.range=t,this.showLabel=a,window.ga("send","event","chart","range-updated",t)}},computed:{stroke:function(){return"line"==this.type||"area"==this.type},series:function(){var t=this;return this.seriesData.map((function(a){return a.originalData=a.originalData?a.originalData:a.data,a.data=a.originalData.slice(t.range),a}))},options:function(){return{chart:{id:this.id,type:this.type?this.type:"line",stacked:this.stacked,zoom:{enabled:window.innerWidth>800&&!this.minimum},animations:{enabled:!1},toolbar:{show:!this.minimum}},colors:this.colors?this.colors:["#ff0000","#3d0707"],dataLabels:{enabled:this.showLabel,textAnchor:"middle",dropShadow:{enabled:!0},style:{fontSize:"12px"}},stroke:this.stroke?{width:this.minimum?2:4}:{},grid:{show:!this.minimum,row:{colors:this.minimum?[]:["#f3f3f3","transparent"],opacity:.5}},xaxis:{type:"datetime",categories:this.dataHistory.map((function(t){return t.date})).slice(this.range),labels:{show:!this.minimum,format:"MM/dd",rotate:-10},lines:{show:!this.minimum},axisBorder:{show:!this.minimum},axisTicks:{show:!this.minimum}},yaxis:{lines:{show:!this.minimum},labels:{show:!this.minimum}}}}}},c=o,d=e("2877"),l=Object(d["a"])(c,i,s,!1,null,"12ff1b50",null);a["a"]=l.exports},"9c7a":function(t,a,e){"use strict";e("dd32")},dd32:function(t,a,e){}}]);
//# sourceMappingURL=chunk-78b035ee.f66206dd.js.map