(window.webpackJsonp=window.webpackJsonp||[]).push([[42,6,7,17,19],{370:function(e,t,n){"use strict";n.r(t);var r=n(135),o=n.n(r),d={props:{type:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},computed:{computedStyle:function(){return{background:o.a[this.type].background,color:o.a[this.type].color}}},mounted:function(){this.button=this.$refs.button}},c=n(30),component=Object(c.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"position:relative"},[t("button",{ref:"button",staticClass:"b:0 p:8|16 w:100% border-radius:4 cursor:pointer transform:translateY(-2):hover transition:0.2s",style:e.computedStyle,on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[e._t("default")],2),e._v(" "),e.disabled?t("div",{staticClass:"position:absolute top:0 left:0 w:100% h:100% background:rgba(0,0,0,0.4)"}):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:n(370).default})},371:function(e,t,n){"use strict";var r=n(14),o=n(7),d=n(5),c=n(106),l=n(26),f=n(16),_=n(170),v=n(66),m=n(105),h=n(239),x=n(4),y=n(87).f,C=n(60).f,w=n(22).f,I=n(373),k=n(374).trim,O="Number",S=o.Number,$=S.prototype,N=o.TypeError,E=d("".slice),R=d("".charCodeAt),j=function(e){var t=h(e,"number");return"bigint"==typeof t?t:z(t)},z=function(e){var t,n,r,o,d,c,l,code,f=h(e,"number");if(m(f))throw N("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=k(f),43===(t=R(f,0))||45===t){if(88===(n=R(f,2))||120===n)return NaN}else if(48===t){switch(R(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(d=E(f,2)).length,l=0;l<c;l++)if((code=R(d,l))<48||code>o)return NaN;return parseInt(d,r)}return+f};if(c(O,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var D,A=function(e){var t=arguments.length<1?0:S(j(e)),n=this;return v($,n)&&x((function(){I(n)}))?_(Object(t),n,A):t},B=r?y(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;B.length>F;F++)f(S,D=B[F])&&!f(A,D)&&w(A,D,C(S,D));A.prototype=$,$.constructor=A,l(o,O,A,{constructor:!0})}},372:function(e,t,n){"use strict";n.r(t);n(371);var r=n(135),o=n.n(r),d={props:{field:{type:String,default:""},type:{type:String,default:"text"},value:{default:""},placeholder:{type:String,default:""},error:{default:null},required:{type:Boolean,default:!1},maxlength:{type:Number,default:null},disabled:{type:Boolean,default:!1}},mounted:function(){this.input=this.$refs.input},data:function(){return{COLORS:o.a}},computed:{computedStyle:function(){return this.error&&0!=this.error.length?{border:"1px solid #f44336"}:{}}}},c=n(30),component=Object(c.a)(d,(function(){var e=this,t=e._self._c;return t("div",[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+" :\n  ")]):e._e(),e._v(" "),t("input",{ref:"input",style:e.computedStyle,attrs:{type:e.type,placeholder:e.placeholder,required:e.required,maxlength:e.maxlength,disabled:e.disabled},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})])}),[],!1,null,null,null);t.default=component.exports},373:function(e,t,n){var r=n(5);e.exports=r(1..valueOf)},374:function(e,t,n){var r=n(5),o=n(39),d=n(17),c=n(375),l=r("".replace),f="["+c+"]",_=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),m=function(e){return function(t){var n=d(o(t));return 1&e&&(n=l(n,_,"")),2&e&&(n=l(n,v,"")),n}};e.exports={start:m(1),end:m(2),trim:m(3)}},375:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},376:function(e,t,n){"use strict";n.r(t);n(31),n(20),n(38),n(11),n(48),n(35),n(49);var r=n(13);n(88);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c=n(135),l=n.n(c),f={props:{field:{type:String,default:""},error:{default:null}},data:function(){return{COLORS:l.a}},computed:{computedErrorStyle:function(){return{color:l.a.negative.background}}}},_=n(30),component=Object(_.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"my:8"},[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+"\n  ")]):e._e(),e._v(" "),e._t("default",null,null,d(d({},e.$props),e.$attrs)),e._v(" "),e.error?t("div",{staticClass:"font-size:0.8rem mt:4",style:e.computedErrorStyle},[e._v("\n    "+e._s(e.error.join("\n"))+"\n  ")]):e._e()],2)}),[],!1,null,null,null);t.default=component.exports},380:function(e,t,n){var content=n(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(62).default)("ba1b4598",content,!0,{sourceMap:!1})},381:function(e,t,n){"use strict";n.r(t);var r={props:["attendee"]},o=(n(383),n(30)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return e.attendee&&!e.attendee.error?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n    "+e._s(e.$t("attendee.messages.cardInfo"))+"\n  ")]),e._v(" "),t("div",{staticClass:"round border drop-shadow p:16|32 bg:white flex flex-direction:column@<md mt:8 w:fit-content font-size:1.4rem align-items:center"},[t("div",{staticClass:"cardNumberInput"},[e._v("\n      "+e._s(e.attendee.attendee_no)+"\n      "),2==e.attendee.attendee_receive_status?t("div",{staticClass:"font-size:0.9rem mt:4"},[e._v("\n        他人代領\n      ")]):e._e()]),e._v(" "),e.attendee.attendee_card_name_1?t("div",{style:{borderLeft:"2px solid #cecece",marginLeft:"32px",paddingLeft:"32px",textAlign:"center"}},[e._v("\n      "+e._s(e.attendee.attendee_card_name_1)),t("br"),e._v("\n      "+e._s(e.attendee.attendee_card_name_2)+"\n    ")]):t("div",{style:{borderLeft:"2px solid #cecece",marginLeft:"32px",paddingLeft:"32px",textAlign:"center"}},[e._v("\n      "+e._s(e.attendee.attendee_nickname)+"\n    ")])])]):e._e()}),[],!1,null,null,null);t.default=component.exports},383:function(e,t,n){"use strict";n(380)},384:function(e,t,n){var r=n(61)(!1);r.push([e.i,'.cardNumberInput{font-family:"Courier New",monospace;font-weight:700}',""]),e.exports=r},407:function(e,t,n){var content=n(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(62).default)("2c2cd87a",content,!0,{sourceMap:!1})},431:function(e,t,n){"use strict";n(407)},432:function(e,t,n){var r=n(61)(!1);r.push([e.i,'.personalDataInfo[data-v-a2282ec6]{padding:4px 0}.personalDataInfo span[data-v-a2282ec6]{font-size:1.2rem;padding:4px 8px;background-color:#e5e4e2;border-radius:4px;font-family:"Courier New",monospace;letter-spacing:2px}',""]),e.exports=r},498:function(e,t,n){"use strict";n.r(t);var r=n(3),o=(n(21),n(1)),d=n(71),c={layout:"admin",components:{AttendeeInfoResume:n(381).default},data:function(){return{loading:!1,searchInput:null,attendee:null,personalInfoFields:["attendee_nickname","attendee_card_name_1","attendee_card_name_2","attendee_realname","attendee_identification_number","attendee_birthday","account_email","attendee_telephone"]}},mounted:function(){var e=this;this.$refs.searchInput.input.focus(),this.$refs.searchInput.input.addEventListener("keyup",(function(t){13==t.keyCode&&e.findAttendee()}))},watch:{},methods:{findAttendee:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=e.searchInput.length){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,e.attendee=null,n=e,t.next=7,e.$axios.get("/api/admin/attendees/search?any=".concat(e.searchInput,"&details=yes")).then((function(t){e.attendee=t.data.attendee,2!=e.attendee.attendee_receive_status&&10==e.attendee.attendee_status&&o.a.nextTick((function(){n.$refs.checkin.button.focus()}))})).catch((function(t){t.response.data?e.attendee={error:t.response.data.code}:d.a.showRequestError(t)}));case 7:e.searchInput=null,e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()},checkin:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(confirm("確定參加者已持有識別證並且是本人嗎？")){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,e,t.next=6,e.$axios.post("/api/admin/attendee/".concat(e.attendee.attendee_id,"/checkin")).then((function(t){alert("報到成功"),e.attendee=null,e.searchInput=null,e.$refs.searchInput.input.focus()})).catch((function(e){d.a.showRequestError(e)}));case 6:e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()},takenByOthers:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(confirm("確定將交由他人領取嗎？")){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,e,t.next=6,e.$axios.post("/api/admin/attendee/".concat(e.attendee.attendee_id,"/checkin/badge/receiveByOthers")).then((function(t){alert("已確認交付"),e.attendee=null,e.searchInput=null,e.$refs.searchInput.input.focus()})).catch((function(e){d.a.showRequestError(e)}));case 6:e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()},undoCheckin:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(confirm("確定要刪除報到記錄嗎？")){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,e,t.next=6,e.$axios.delete("/api/admin/attendee/".concat(e.attendee.attendee_id,"/checkin")).then((function(t){alert("已刪除報到記錄"),e.attendee=null,e.searchInput=null,e.$refs.searchInput.input.focus()})).catch((function(e){d.a.showRequestError(e)}));case 6:e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}}},l=(n(431),n(30)),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"p:16 overflow:auto"},[t("Loading",{attrs:{value:e.loading}}),e._v(" "),t("div",{staticClass:"font-size:2rem"},[e._v(e._s(e.$t("attendee.checkin.title")))]),e._v(" "),t("Field",{attrs:{field:e.$t("attendee.search.title")}},[t("InputText",{ref:"searchInput",attrs:{placeholder:e.$t("attendee.search.placeholder")},model:{value:e.searchInput,callback:function(t){e.searchInput=t},expression:"searchInput"}}),e._v(" "),e.attendee&&e.attendee.info?t("div",{staticClass:"mt:8"},[e._v("\n      "+e._s(e.attendee.info.attendee_card_name_1)+"\n    ")]):e._e(),e._v(" "),e.attendee&&e.attendee.error?t("div",{staticClass:"mt:8 color:red"},[e._v("\n      "+e._s(e.$t(e.attendee.error))+"\n    ")]):e._e()],1),e._v(" "),e.attendee&&!e.attendee.error?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n      "+e._s(e.$t("attendee.messages.personalInfo"))+"\n    ")]),e._v(" "),t("table",{staticClass:"ml:8"},[t("tbody",[t("tr",[t("td",{staticClass:"personalDataField"},[e._v("真實姓名")]),e._v(" "),t("td",{staticClass:"personalDataInfo"},[t("span",[e._v(e._s(e.attendee.attendee_realname))])]),e._v(" "),t("td",{staticStyle:{"padding-left":"16px"}}),e._v(" "),t("td",{staticStyle:{"border-left":"1px solid black","padding-right":"16px"}}),e._v(" "),t("td",{staticClass:"personalDataField"},[e._v("電話")]),e._v(" "),t("td",{staticClass:"personalDataInfo"},[t("span",[e._v(e._s(e.attendee.attendee_telephone))])])]),e._v(" "),t("tr",[t("td",{staticClass:"personalDataField"},[e._v("身分證後四碼")]),e._v(" "),t("td",{staticClass:"personalDataInfo"},[t("span",[e._v(e._s(e.attendee.attendee_identification_number))])]),e._v(" "),t("td",{staticStyle:{"padding-left":"16px"}}),e._v(" "),t("td",{staticStyle:{"border-left":"1px solid black","padding-right":"16px"}}),e._v(" "),t("td",{staticClass:"personalDataField"},[e._v("電子郵件")]),e._v(" "),t("td",{staticClass:"personalDataInfo"},[t("span",[e._v(e._s(e.attendee.account_email))])])]),e._v(" "),t("tr",[t("td",{staticClass:"personalDataField"},[e._v("生日")]),e._v(" "),t("td",{staticClass:"personalDataInfo"},[t("span",[e._v(e._s(e.attendee.attendee_birthday))])])])])]),e._v(" "),t("AttendeeInfoResume",{attrs:{attendee:e.attendee}}),e._v(" "),10==e.attendee.attendee_status||50==e.attendee.attendee_status?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n        "+e._s(e.$t("attendee.fields.attendeeReceiveStatus"))+"\n      ")]),e._v(" "),0==e.attendee.attendee_receive_status?t("div",{staticClass:"round border drop-shadow p:16|32 bg:white mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md"},[e._v("\n        "+e._s(e.$t("attendee.enums.attendeeReceiveStatus.0"))+"\n      ")]):t("div",{staticClass:"round border drop-shadow p:16|32 bg:#dce9d5 mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md"},[e._v("\n        "+e._s(e.$t("attendee.enums.attendeeReceiveStatus."+e.attendee.attendee_receive_status))+"\n      ")])]):e._e(),e._v(" "),t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n      "+e._s(e.$t("attendee.fields.attendeeStatus"))+"\n    ")]),e._v(" "),10==e.attendee.attendee_status?t("div",{staticClass:"round border drop-shadow p:16|32 bg:white mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md"},[e._v("\n      尚未報到\n    ")]):50==e.attendee.attendee_status?t("div",{staticClass:"round border drop-shadow p:16|32 bg:#dce9d5 mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md"},[e._v("\n      已完成報到\n    ")]):t("div",{staticClass:"round border drop-shadow p:16|32 bg:#eecdcd mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md"},[e._v("\n      未完成報名\n    ")]),e._v(" "),e.attendee&&e.attendee.error?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n        "+e._s(e.$t("common.errors.error"))+"\n      ")]),e._v(" "),t("div",{staticClass:"flex w:fit-content flex-direction:column@<md"},[t("div",{staticClass:"round border drop-shadow p:16|32 bg:#eecdcd mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md"},[e._v("\n          "+e._s(e.$t(e.attendee.error))+"\n        ")])])]):e._e(),e._v(" "),t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n      "+e._s(e.$t("common.messages.actions"))+"\n    ")]),e._v(" "),t("div",{staticClass:"flex mt:8"},[50!=e.attendee.attendee_status?t("div",[10==e.attendee.attendee_receive_status||1==e.attendee.attendee_receive_status?t("Button",{ref:"checkin",staticClass:"mr:8",on:{click:e.checkin}},[e._v("\n          報到\n        ")]):e._e(),e._v(" "),0==e.attendee.attendee_receive_status?t("Button",{ref:"checkin",staticClass:"mr:8",on:{click:e.checkin}},[e._v("\n          取卡/報到\n        ")]):e._e()],1):e._e(),e._v(" "),0==e.attendee.attendee_receive_status?t("Button",{staticClass:"mr:8",attrs:{type:"secondary"},on:{click:e.takenByOthers}},[e._v("\n        代領參加證\n      ")]):e._e(),e._v(" "),2==e.attendee.attendee_receive_status?t("Button",{staticClass:"mr:8",attrs:{type:"secondary"},on:{click:e.checkin}},[e._v("\n        標記為本人到場\n      ")]):e._e(),e._v(" "),50==e.attendee.attendee_status&&1==e.attendee.attendee_receive_status?t("Button",{staticClass:"mr:8",attrs:{type:"secondary"},on:{click:e.takenByOthers}},[e._v("\n        標記為他人代領\n      ")]):e._e(),e._v(" "),50==e.attendee.attendee_status||2==e.attendee.attendee_receive_status?t("Button",{staticClass:"mr:8",attrs:{type:"negative"},on:{click:e.undoCheckin}},[e._v("\n        取消報到/現場取卡記錄\n      ")]):e._e()],1)],1):e._e()],1)}),[],!1,null,"a2282ec6",null);t.default=component.exports;installComponents(component,{Loading:n(169).default,InputText:n(372).default,Field:n(376).default,AttendeeInfoResume:n(381).default,Button:n(370).default})}}]);