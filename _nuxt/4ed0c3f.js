(window.webpackJsonp=window.webpackJsonp||[]).push([[30,6,7,17,19,24],{370:function(t,e,n){"use strict";n.r(e);var r=n(135),o=n.n(r),c={props:{type:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},computed:{computedStyle:function(){return{background:o.a[this.type].background,color:o.a[this.type].color}}},mounted:function(){this.button=this.$refs.button}},l=n(30),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"position:relative"},[e("button",{ref:"button",staticClass:"b:0 p:8|16 w:100% border-radius:4 cursor:pointer transform:translateY(-2):hover transition:0.2s",style:t.computedStyle,on:{click:function(e){return e.preventDefault(),t.$emit("click")}}},[t._t("default")],2),t._v(" "),t.disabled?e("div",{staticClass:"position:absolute top:0 left:0 w:100% h:100% background:rgba(0,0,0,0.4)"}):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(370).default})},371:function(t,e,n){"use strict";var r=n(14),o=n(7),c=n(5),l=n(106),d=n(26),f=n(16),v=n(170),m=n(66),_=n(105),h=n(239),y=n(4),x=n(87).f,k=n(60).f,w=n(22).f,C=n(373),I=n(374).trim,O="Number",A=o.Number,S=A.prototype,$=o.TypeError,R=c("".slice),j=c("".charCodeAt),E=function(t){var e=h(t,"number");return"bigint"==typeof e?e:N(e)},N=function(t){var e,n,r,o,c,l,d,code,f=h(t,"number");if(_(f))throw $("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=I(f),43===(e=j(f,0))||45===e){if(88===(n=j(f,2))||120===n)return NaN}else if(48===e){switch(j(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=R(f,2)).length,d=0;d<l;d++)if((code=j(c,d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(l(O,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var T,z=function(t){var e=arguments.length<1?0:A(E(t)),n=this;return m(S,n)&&y((function(){C(n)}))?v(Object(e),n,z):e},L=r?x(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;L.length>P;P++)f(A,T=L[P])&&!f(z,T)&&w(z,T,k(A,T));z.prototype=S,S.constructor=z,d(o,O,z,{constructor:!0})}},372:function(t,e,n){"use strict";n.r(e);n(371);var r=n(135),o=n.n(r),c={props:{field:{type:String,default:""},type:{type:String,default:"text"},value:{default:""},placeholder:{type:String,default:""},error:{default:null},required:{type:Boolean,default:!1},maxlength:{type:Number,default:null},disabled:{type:Boolean,default:!1}},mounted:function(){this.input=this.$refs.input},data:function(){return{COLORS:o.a}},computed:{computedStyle:function(){return this.error&&0!=this.error.length?{border:"1px solid #f44336"}:{}}}},l=n(30),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[t.field?e("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[t._v("\n    "+t._s(t.field)+" :\n  ")]):t._e(),t._v(" "),e("input",{ref:"input",style:t.computedStyle,attrs:{type:t.type,placeholder:t.placeholder,required:t.required,maxlength:t.maxlength,disabled:t.disabled},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])}),[],!1,null,null,null);e.default=component.exports},373:function(t,e,n){var r=n(5);t.exports=r(1..valueOf)},374:function(t,e,n){var r=n(5),o=n(39),c=n(17),l=n(375),d=r("".replace),f="["+l+"]",v=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),_=function(t){return function(e){var n=c(o(e));return 1&t&&(n=d(n,v,"")),2&t&&(n=d(n,m,"")),n}};t.exports={start:_(1),end:_(2),trim:_(3)}},375:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},376:function(t,e,n){"use strict";n.r(e);n(31),n(20),n(38),n(11),n(48),n(35),n(49);var r=n(13);n(88);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l=n(135),d=n.n(l),f={props:{field:{type:String,default:""},error:{default:null}},data:function(){return{COLORS:d.a}},computed:{computedErrorStyle:function(){return{color:d.a.negative.background}}}},v=n(30),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"my:8"},[t.field?e("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[t._v("\n    "+t._s(t.field)+"\n  ")]):t._e(),t._v(" "),t._t("default",null,null,c(c({},t.$props),t.$attrs)),t._v(" "),t.error?e("div",{staticClass:"font-size:0.8rem mt:4",style:t.computedErrorStyle},[t._v("\n    "+t._s(t.error.join("\n"))+"\n  ")]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},377:function(t,e,n){"use strict";n.r(e);var r=n(135),o=n.n(r),c={props:{field:{type:String,default:""},value:{default:""},error:{default:null},required:{type:Boolean,default:!1}},data:function(){return{COLORS:o.a}},computed:{computedStyle:function(){return this.error&&0!=this.error.length?{border:"1px solid #f44336"}:{}}}},l=n(30),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[t.field?e("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[t._v("\n    "+t._s(t.field)+" :\n  ")]):t._e(),t._v(" "),e("select",{style:t.computedStyle,attrs:{required:t.required},domProps:{value:t.value},on:{change:function(e){return t.$emit("input",e.target.value)}}},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Select:n(377).default})},380:function(t,e,n){var content=n(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("ba1b4598",content,!0,{sourceMap:!1})},381:function(t,e,n){"use strict";n.r(e);var r={props:["attendee"]},o=(n(383),n(30)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return t.attendee&&!t.attendee.error?e("div",[e("div",{staticClass:"font-size:1.5rem mt:16"},[t._v("\n    "+t._s(t.$t("attendee.messages.cardInfo"))+"\n  ")]),t._v(" "),e("div",{staticClass:"round border drop-shadow p:16|32 bg:white flex flex-direction:column@<md mt:8 w:fit-content font-size:1.4rem align-items:center"},[e("div",{staticClass:"cardNumberInput"},[t._v("\n      "+t._s(t.attendee.attendee_no)+"\n      "),2==t.attendee.attendee_receive_status?e("div",{staticClass:"font-size:0.9rem mt:4"},[t._v("\n        他人代領\n      ")]):t._e()]),t._v(" "),t.attendee.attendee_card_name_1?e("div",{style:{borderLeft:"2px solid #cecece",marginLeft:"32px",paddingLeft:"32px",textAlign:"center"}},[t._v("\n      "+t._s(t.attendee.attendee_card_name_1)),e("br"),t._v("\n      "+t._s(t.attendee.attendee_card_name_2)+"\n    ")]):e("div",{style:{borderLeft:"2px solid #cecece",marginLeft:"32px",paddingLeft:"32px",textAlign:"center"}},[t._v("\n      "+t._s(t.attendee.attendee_nickname)+"\n    ")])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},383:function(t,e,n){"use strict";n(380)},384:function(t,e,n){var r=n(61)(!1);r.push([t.i,'.cardNumberInput{font-family:"Courier New",monospace;font-weight:700}',""]),t.exports=r},405:function(t,e,n){var content=n(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("3a5a9746",content,!0,{sourceMap:!1})},427:function(t,e,n){"use strict";n(405)},428:function(t,e,n){var r=n(61)(!1);r.push([t.i,"@-moz-document url-prefix(){button:focus{border-width:2px;border-color:#2c7cf6}}",""]),t.exports=r},487:function(t,e,n){"use strict";n.r(e);n(31);var r=n(3),o=(n(21),n(50),n(41),n(1)),c=n(71),l={layout:"admin",components:{AttendeeInfoResume:n(381).default},data:function(){return{loading:!1,attendee:null,ticket:null,searchInput:null,focusedField:null,activities:[],selectedActivity:null,headCounts:null}},mounted:function(){var t=this;this.getActivities(),this.$refs.searchInput.input.focus(),this.$refs.searchInput.input.addEventListener("keyup",(function(e){if(13==e.keyCode){if(!t.searchInput)return;t.findAttendee()}}))},watch:{selectedActivity:function(){1==this.activities[this.selectedActivity].activity_require_signup?this.getActivityHeadCounts():this.headCounts=null,this.$refs.searchInput.input.focus(),this.ticket=null,this.searchInput=null,this.attendee=null}},methods:{getActivities:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("/api/admin/activities").then((function(e){var output={};e.data.activities.map((function(t){output[t.activity_id]=t})),t.activities=output,t.selectedActivity=Object.keys(output)[0]})).catch((function(t){c.a.showRequestError(t)}));case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()},getActivityHeadCounts:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("/api/admin/entrance/".concat(t.selectedActivity,"/headCounts")).then((function(e){t.headCounts=e.data.stats})).catch((function(t){c.a.showRequestError(t)}));case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()},findAttendee:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.attendee=null,t.ticket=null,e.next=5,t.$axios.get("/api/admin/attendees/search?attendeeIdOrCardNumber=".concat(t.searchInput)).then((function(e){t.attendee=e.data.attendee,t.checkTicket()})).catch((function(e){e.response.data?t.attendee={error:e.response.data.code}:c.a.showRequestError(e)}));case 5:t.searchInput=null,t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()},checkTicket:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.ticket=null,n=t,e.next=5,t.$axios.get("/api/admin/entrance/".concat(t.selectedActivity,"/").concat(t.attendee.attendee_id)).then((function(e){t.ticket=e.data,o.a.nextTick((function(){n.$refs.useTicket.button.focus()}))})).catch((function(e){e.response.data?t.ticket={error:e.response.data.code}:c.a.showRequestError(e)}));case 5:t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()},useTicket:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(confirm("確定將參加者標記成已入場嗎？")){e.next=2;break}return e.abrupt("return");case 2:return t.loading=!0,n=t,e.next=6,t.$axios.post("/api/admin/entrance/".concat(t.selectedActivity,"/").concat(t.attendee.attendee_id,"/enter")).then((function(e){alert("入場登陸成功"),t.ticket=null,t.attendee=null,t.searchInput=null,1==t.activities[t.selectedActivity].activity_require_signup&&t.getActivityHeadCounts(),o.a.nextTick((function(){n.$refs.searchInput.input.focus()}))})).catch((function(t){c.a.showRequestError(t)}));case 6:t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()},restoreTicket:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(confirm("確定要移除參加者的入場記錄嗎？")){e.next=2;break}return e.abrupt("return");case 2:return t.loading=!0,n=t,e.next=6,t.$axios.delete("/api/admin/entrance/".concat(t.selectedActivity,"/").concat(t.attendee.attendee_id)).then((function(e){alert("已刪除最近一次的入場記錄"),t.ticket=null,t.attendee=null,t.searchInput=null,1==t.activities[t.selectedActivity].activity_require_signup&&t.getActivityHeadCounts(),o.a.nextTick((function(){n.$refs.searchInput.input.focus()}))})).catch((function(t){c.a.showRequestError(t)}));case 6:t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()}}},d=(n(427),n(30)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p:16 overflow:auto"},[e("link",{attrs:{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap"}}),t._v(" "),e("Loading",{attrs:{value:t.loading}}),t._v(" "),e("Field",{staticStyle:{"margin-bottom":"16px"},attrs:{field:"活動"}},[e("Select",{model:{value:t.selectedActivity,callback:function(e){t.selectedActivity=e},expression:"selectedActivity"}},t._l(Object.keys(t.activities),(function(n){return e("option",{key:n,domProps:{value:n}},[t._v("\n        "+t._s(t.activities[n].activity_name)+"\n      ")])})),0)],1),t._v(" "),e("router-view",{key:t.$route.path}),t._v(" "),e("div",{staticClass:"font-size:2rem"},[t._v("\n    入場管理\n    "),t._v(" "),t.selectedActivity&&t.activities[t.selectedActivity].activity_require_signup&&t.headCounts?e("span",{staticStyle:{"font-size":"1.2rem","line-height":"2rem"}},[t._v("\n      （"+t._s(t.headCounts.used)+" / "+t._s(t.headCounts.total)+" 已入場）\n    ")]):t._e()]),t._v(" "),e("Field",{attrs:{field:"搜尋參加者"}},[e("InputText",{ref:"searchInput",attrs:{placeholder:"參加者編號或卡片 ID"},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}}),t._v(" "),t.attendee&&t.attendee.error?e("div",{staticClass:"mt:8 color:red"},[t._v("\n      "+t._s(t.$t(t.attendee.error))+"\n    ")]):t._e()],1),t._v(" "),t.attendee?e("div",[t.attendee.error?t._e():e("div",[e("AttendeeInfoResume",{attrs:{attendee:t.attendee}}),t._v(" "),e("div",{staticClass:"font-size:1.5rem mt:16"},[t._v("\n        "+t._s(t.$t("activity.entranceTicket.itemName"))+"\n      ")]),t._v(" "),t.ticket?t._e():e("div",{staticClass:"round border drop-shadow p:16|32 mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md"},[t._v("\n        "+t._s(t.$t("common.messages.checking"))+"\n      ")]),t._v(" "),t.ticket?e("div",[t.ticket.error?e("div",{staticClass:"round border drop-shadow p:16|32 bg:#eecdcd mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md"},[t._v("\n          "+t._s(t.$t(t.ticket.error))+"\n        ")]):e("div",[e("div",{staticClass:"round border drop-shadow p:16|32 bg:#dce9d5 mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md"},[t._v("\n            "+t._s(t.$t(t.ticket.code))+"\n          ")]),t._v(" "),t.ticket.data.records?e("div",{staticClass:"mt:8 color:grey"},[t._v("\n            "+t._s("已入場次數： ".concat(t.ticket.data.records))+"\n          ")]):t._e(),t._v(" "),e("div",{staticClass:"font-size:1.5rem mt:16"},[t._v("\n            "+t._s(t.$t("common.messages.actions"))+"\n          ")]),t._v(" "),e("div",{staticClass:"mt:8 flex"},[e("Button",{ref:"useTicket",on:{click:t.useTicket}},[t._v("\n              "+t._s(t.$t("activity.actions.useTicket"))+"\n            ")]),t._v("\n             \n            "),t.ticket.data.records?e("Button",{ref:"restoreTicket",attrs:{type:"negative"},on:{click:t.restoreTicket}},[t._v("\n              "+t._s(t.$t("activity.actions.revertTicket"))+"\n            ")]):t._e()],1)])]):t._e()],1)]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Loading:n(169).default,Select:n(377).default,Field:n(376).default,InputText:n(372).default,AttendeeInfoResume:n(381).default,Button:n(370).default})}}]);