(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73067632"],{"52df":function(t,a,e){},7633:function(t,a,e){},a170:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mBlock"},[e("div",{staticClass:"switch-header"},[e("DataSwitch",{attrs:{"data-type":t.dataType,"is-uk":1===t.tab&&t.isUk},on:{typeChange:function(a){return t.changeDataType(a)}}}),(t.regionData.country||t.regionData.uk)&&t.regionData.global?e("CountrySwitch",{attrs:{tab:t.tab},on:{changeTab:function(a){return t.changeTab(a)}}}):t._e()],1),t.tableData?e("div",{staticClass:"tableWrapper"},[e("table",{staticClass:"table table-striped table-hover",class:{topZero:t.desktopLayout}},[e("thead",[e("tr",[e("th",{class:{hd:!0,active:1===t.sort},attrs:{scope:"col"},on:{click:function(a){return t.sortByAlphabet()}}},[t._v(" "+t._s(t.$t("table.region"))+" ")]),e("th",{class:{hd:!0,active:2===t.sort},attrs:{scope:"col",nowrap:""},on:{click:function(a){return t.sortByNumber()}}},[t._v(" "+t._s(t.$t("table.byCases"))+" ")]),t.showAddition?e("th",{class:{hd:!0,active:3===t.sort},attrs:{scope:"col",nowrap:""},on:{click:function(a){return t.sortByIncreaseNumber()}}},[t._v(" "+t._s(t.$t("table.changes"))+" ")]):t._e(),t.isUk&&t.showAddition?e("th",{class:{hd:!0,active:4===t.sort},attrs:{scope:"col",nowrap:""},on:{click:function(a){return t.sortByRate()}}},[t._v(" "+t._s(t.$t("table.rate"))+" ")]):t._e()])]),e("tbody",[t._l(t.tableData.slice(0,t.limit),(function(a){return e("tr",{key:a.id,staticClass:"singleRegionData"},[e("td",[0===t.tab?e("div",{staticClass:"goToCountry",on:{click:function(e){return t.switchCountry(a.location)}}},[t._v(" "+t._s(a.location)+" "),e("MoreIcon")],1):e("div",[t._v(t._s(a.location))])]),e("td",[a[t.dataType]?e("span",[t._v(" "+t._s(t.isRate?a[t.dataType].toFixed(2):a[t.dataType])+" ")]):e("span",[t._v("-")])]),t.showAddition?e("td",[t._v(t._s(a.change))]):t._e(),t.isUk&&t.showAddition?e("td",[t._v(t._s(a.confirmRate?a.confirmRate:"-"))]):t._e()])})),e("tr")],2)])]):e("div",{staticStyle:{padding:"30px","text-align":"center"}},[t._v(t._s(t.$t("noData")))]),e("div",{class:10===t.limit?"":"stick"},[t.tableData?e("div",{staticClass:"showAll",on:{click:function(a){t.limit=10===t.limit?t.tableData.length:10}}},[t._v(t._s(10===t.limit?t.$t("table.showAll"):t.$t("table.showLess")))]):t._e(),!t.date||1===t.tab&&t.isUk?t._e():e("SlideController",{attrs:{"start-date":t.currentData[0].date,"end-date":t.currentData[t.currentData.length-1].date,hidePlayButton:!0,"current-date":t.date,enableEvenIfPaused:!0,playing:!1},on:{change:t.changeDate,playPause:function(a){t.playing=a}}})],1)])},i=[],s=(e("7db0"),e("c740"),e("4160"),e("caad"),e("b680"),e("2532"),e("159b"),e("2909")),r=e("b85c"),o=e("a3df"),c=e("bf6e"),d={name:"mdi-chevron-right",props:{width:{type:[Number,String],default:null},height:{type:[Number,String],default:null},size:{type:[Number,String],default:24},viewBox:{type:[String],default:"0 0 24 24"},xmlns:{type:String,default:"http://www.w3.org/2000/svg"},ariaLabel:{type:String,default:"ChevronRight icon"},role:{type:String,default:"img"},title:{type:String,required:!1},spin:{type:Boolean,default:!1}}};const l=d;var u=function(t,a){var e=a._c;return e("span",{class:[a.data.staticClass,"mdi","mdi-chevron-right",a.props.spin?"mdi-spin":void 0],attrs:{role:a.props.role,"aria-label":a.props.ariaLabel}},[e("svg",{attrs:{fill:"currentColor",width:a.props.width||a.props.size,height:a.props.height||a.props.size,viewBox:a.props.viewBox,xmlns:a.props.xmlns}},[a.title?e("title",[a._v(a._s(a.title))]):a._e(),a._v(" "),e("path",{attrs:{d:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}})])])},h=[];u._withStripped=!0;const b=function(t){t&&t("data-v-8d93390a_0",{source:".mdi > svg {\n  vertical-align: middle;\n}\n.mdi.mdi-spin > svg {\n  -webkit-animation: mdi-spin 2s infinite linear;\n     -moz-animation: mdi-spin 2s infinite linear;\n          animation: mdi-spin 2s infinite linear;\n}\n@-webkit-keyframes mdi-spin {\n0% {\n      -webkit-transform: rotate(0deg);\n         -moz-transform: rotate(0deg);\n              transform: rotate(0deg);\n}\n100% {\n      -webkit-transform: rotate(360deg);\n         -moz-transform: rotate(360deg);\n              transform: rotate(360deg);\n}\n}\n@keyframes mdi-spin {\n0% {\n      -webkit-transform: rotate(0deg);\n         -moz-transform: rotate(0deg);\n              transform: rotate(0deg);\n}\n100% {\n      -webkit-transform: rotate(360deg);\n         -moz-transform: rotate(360deg);\n              transform: rotate(360deg);\n}\n}",map:void 0,media:void 0})},p=void 0,f=void 0,g=!0,m=Object(c["b"])({render:u,staticRenderFns:h},b,l,p,g,f,!1,c["a"],void 0,void 0);var v=m,y=e("f4ed"),w=e("ccfc"),D=e("aef7"),_={name:"RegionTable",props:["regionData","mainDate","isUk","currentCountry","desktopLayout"],components:{SlideController:o["a"],DataSwitch:y["a"],CountrySwitch:w["a"],MoreIcon:v},data:function(){return{tableData:[],sort:2,limit:10,date:null,currentData:null,tab:1,dataType:"confirmed"}},mounted:function(){this.isUk||this.regionData.country&&this.regionData.country[this.regionData.country.length-1].arr.length>1?this.changeTab(1):this.changeTab(0)},watch:{mainDate:function(){if(this.mainDate&&!this.isUk){var t=Object(D["j"])(this.mainDate,this.currentData[this.currentData.length-1].date);this.changeDate(t)}},limit:function(){this.$emit("expanded",10!==this.limit)},"regionData.uk":function(){this.changeTab(this.tab)},"regionData.country":function(){this.changeTab(this.tab)}},computed:{isRate:function(){return this.dataType.includes("Rate")},showAddition:function(){return!this.isUk||"confirmed"===this.dataType}},methods:{switchCountry:function(t){window.scrollTo(0,0),window.ga("send","event","country","country-changed-from-table",t),this.$emit("switchCountry",t)},changeDataType:function(t){this.dataType=t,this.changeTab(this.tab)},getCurrentTableData:function(t){var a=this;t.find((function(t){return t.date===a.date}))||(this.date=t[t.length-1].date),this.currentData=t,this.updateTableData(t.length-1)},changeDate:function(t){var a=this.currentData.findIndex((function(a){return a.date==t}));this.date=t,this.updateTableData(a)},changeTab:function(t){if(this.tab=t,0===t&&this.regionData.global)this.getCurrentTableData(this.regionData.global);else{if(this.tab=1,this.isUk)return void this.getUkTableData();this.getCurrentTableData(this.regionData.country)}},updateTableData:function(t){var a,e,n,i=this,s=null===(a=this.currentData[t])||void 0===a?void 0:a.arr,o=null===(e=this.currentData[t-1])||void 0===e?void 0:e.arr,c=0,d=0,l=Object(r["a"])(s);try{var u=function(){var t=n.value,a=null===o||void 0===o?void 0:o.find((function(a){return a.location==t.location}));t.id=c++,d+=t[i.dataType];var e=a?t[i.dataType]-a[i.dataType]:0;t.change=(e>0?"+":"")+(i.isRate?e.toFixed(2):e)};for(l.s();!(n=l.n()).done;)u()}catch(h){l.e(h)}finally{l.f()}0!==d||"cured"!==this.dataType&&"cRate"!==this.dataType?(this.tableData=s,this.sortTable()):this.tableData=null},getUkTableData:function(){var t;null!==(t=this.regionData)&&void 0!==t&&t.uk&&(this.regionData.uk.forEach((function(t){t.location=t.areaName,t.change="+"+t.confirmedNew,t.confirmRate=t.confirmedRate,t.dRate=t.confirmed>0?t.death/t.confirmed*100:0})),this.tableData=this.regionData.uk,this.sortTable())},sortTable:function(){switch(this.sort){case 0:this.sortByDefault();break;case 1:this.sortByAlphabet();break;case 2:this.sortByNumber();break;case 3:this.sortByIncreaseNumber();break}},sortByDefault:function(){this.sort=0,this.tableData=Object(s["a"])(this.tableData).sort((function(t,a){return a.id-t.id}))},sortByAlphabet:function(){this.sort=1,this.tableData=Object(s["a"])(this.tableData).sort((function(t,a){return t.location.localeCompare(a.location)}))},sortByNumber:function(){var t=this;this.sort=2,this.tableData=Object(s["a"])(this.tableData).sort((function(a,e){return e[t.dataType]-a[t.dataType]}))},sortByIncreaseNumber:function(){this.sort=3,this.tableData=Object(s["a"])(this.tableData).sort((function(t,a){return a.change-t.change}))},sortByRate:function(){this.sort=4,this.tableData=Object(s["a"])(this.tableData).sort((function(t,a){return a.confirmRate-t.confirmRate}))}}},k=_,T=(e("f503"),e("2877")),C=Object(T["a"])(k,n,i,!1,null,"aaa27a4a",null);a["default"]=C.exports},ccfc:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group","aria-label":"date range"}},[e("button",{staticClass:"btn btn-secondary",class:{active:0==t.tab},attrs:{type:"button"},on:{click:function(a){return t.changeTab(0)}}},[t._v(" "+t._s(t.$t("barRace.global"))+" ")]),e("button",{staticClass:"btn btn-secondary",class:{active:1==t.tab},attrs:{type:"button"},on:{click:function(a){return t.changeTab(1)}}},[t._v(" "+t._s(t.$t("barRace.local"))+" ")])])])},i=[],s={name:"CountrySwitch",props:["tab"],methods:{changeTab:function(t){this.$emit("changeTab",t)}}},r=s,o=e("2877"),c=Object(o["a"])(r,n,i,!1,null,"587f7b1f",null);a["a"]=c.exports},f07b:function(t,a,e){"use strict";e("7633")},f4ed:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dropdown"},[e("button",{staticClass:"btn btn-secondary dropdown-toggle btn-sm",class:{disabled:t.disabled},attrs:{type:"button",id:"dropdownMenu","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(t._s(t.disabled?t.$t("dataSwitch.number"):t.$t("dataSwitch."+t.dataType)))]),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenu"}},t._l(t.options,(function(a){return e("div",{key:a},["#"===a?e("div",{staticClass:"dropdown-divider"}):e("button",{staticClass:"dropdown-item",class:{active:t.dataType===a},attrs:{type:"button"},on:{click:function(e){return t.$emit("typeChange",a)}}},[t._v(t._s(t.$t("dataSwitch."+a)))])])})),0)])},i=[],s={name:"DataSwitch",props:["dataType","disabled","isUk"],data:function(){return{options:[]}},mounted:function(){this.updateOptions()},methods:{updateOptions:function(){this.isUk?this.options=["confirmed","death","confirmedNew","deathNew","#","confirmedRate","deathRate","dRate"]:this.options=["confirmed","active","death","cured","#","dRate","cRate"]}},watch:{dataType:function(){window.ga("send","event","data-switch","type-changed",this.dataType)},isUk:function(){this.updateOptions()}}},r=s,o=(e("f07b"),e("2877")),c=Object(o["a"])(r,n,i,!1,null,"dce651f4",null);a["a"]=c.exports},f503:function(t,a,e){"use strict";e("52df")}}]);
//# sourceMappingURL=chunk-73067632.eedd03f2.js.map