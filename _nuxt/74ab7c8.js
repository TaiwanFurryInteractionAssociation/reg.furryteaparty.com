(window.webpackJsonp=window.webpackJsonp||[]).push([[46,6,7,17,19],{370:function(e,t,n){"use strict";n.r(t);var r=n(135),o=n.n(r),c={props:{type:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},computed:{computedStyle:function(){return{background:o.a[this.type].background,color:o.a[this.type].color}}},mounted:function(){this.button=this.$refs.button}},d=n(30),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"position:relative"},[t("button",{ref:"button",staticClass:"b:0 p:8|16 w:100% border-radius:4 cursor:pointer transform:translateY(-2):hover transition:0.2s",style:e.computedStyle,on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[e._t("default")],2),e._v(" "),e.disabled?t("div",{staticClass:"position:absolute top:0 left:0 w:100% h:100% background:rgba(0,0,0,0.4)"}):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:n(370).default})},371:function(e,t,n){"use strict";var r=n(14),o=n(7),c=n(5),d=n(106),l=n(26),f=n(16),m=n(170),v=n(66),_=n(105),h=n(239),y=n(4),I=n(87).f,x=n(60).f,C=n(22).f,w=n(373),k=n(374).trim,$="Number",R=o.Number,N=R.prototype,O=o.TypeError,E=c("".slice),S=c("".charCodeAt),j=function(e){var t=h(e,"number");return"bigint"==typeof t?t:D(t)},D=function(e){var t,n,r,o,c,d,l,code,f=h(e,"number");if(_(f))throw O("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=k(f),43===(t=S(f,0))||45===t){if(88===(n=S(f,2))||120===n)return NaN}else if(48===t){switch(S(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(d=(c=E(f,2)).length,l=0;l<d;l++)if((code=S(c,l))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(d($,!R(" 0o1")||!R("0b1")||R("+0x1"))){for(var P,T=function(e){var t=arguments.length<1?0:R(j(e)),n=this;return v(N,n)&&y((function(){w(n)}))?m(Object(t),n,T):t},A=r?I(R):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),L=0;A.length>L;L++)f(R,P=A[L])&&!f(T,P)&&C(T,P,x(R,P));T.prototype=N,N.constructor=T,l(o,$,T,{constructor:!0})}},372:function(e,t,n){"use strict";n.r(t);n(371);var r=n(135),o=n.n(r),c={props:{field:{type:String,default:""},type:{type:String,default:"text"},value:{default:""},placeholder:{type:String,default:""},error:{default:null},required:{type:Boolean,default:!1},maxlength:{type:Number,default:null},disabled:{type:Boolean,default:!1}},mounted:function(){this.input=this.$refs.input},data:function(){return{COLORS:o.a}},computed:{computedStyle:function(){return this.error&&0!=this.error.length?{border:"1px solid #f44336"}:{}}}},d=n(30),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+" :\n  ")]):e._e(),e._v(" "),t("input",{ref:"input",style:e.computedStyle,attrs:{type:e.type,placeholder:e.placeholder,required:e.required,maxlength:e.maxlength,disabled:e.disabled},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})])}),[],!1,null,null,null);t.default=component.exports},373:function(e,t,n){var r=n(5);e.exports=r(1..valueOf)},374:function(e,t,n){var r=n(5),o=n(39),c=n(17),d=n(375),l=r("".replace),f="["+d+"]",m=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),_=function(e){return function(t){var n=c(o(t));return 1&e&&(n=l(n,m,"")),2&e&&(n=l(n,v,"")),n}};e.exports={start:_(1),end:_(2),trim:_(3)}},375:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},376:function(e,t,n){"use strict";n.r(t);n(31),n(20),n(38),n(11),n(48),n(35),n(49);var r=n(13);n(88);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=n(135),l=n.n(d),f={props:{field:{type:String,default:""},error:{default:null}},data:function(){return{COLORS:l.a}},computed:{computedErrorStyle:function(){return{color:l.a.negative.background}}}},m=n(30),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"my:8"},[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+"\n  ")]):e._e(),e._v(" "),e._t("default",null,null,c(c({},e.$props),e.$attrs)),e._v(" "),e.error?t("div",{staticClass:"font-size:0.8rem mt:4",style:e.computedErrorStyle},[e._v("\n    "+e._s(e.error.join("\n"))+"\n  ")]):e._e()],2)}),[],!1,null,null,null);t.default=component.exports},380:function(e,t,n){var content=n(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(62).default)("ba1b4598",content,!0,{sourceMap:!1})},381:function(e,t,n){"use strict";n.r(t);var r={props:["attendee"]},o=(n(383),n(30)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return e.attendee&&!e.attendee.error?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n    "+e._s(e.$t("attendee.messages.cardInfo"))+"\n  ")]),e._v(" "),t("div",{staticClass:"round border drop-shadow p:16|32 bg:white flex flex-direction:column@<md mt:8 w:fit-content font-size:1.4rem align-items:center"},[t("div",{staticClass:"cardNumberInput"},[e._v("\n      "+e._s(e.attendee.attendee_no)+"\n      "),2==e.attendee.attendee_receive_status?t("div",{staticClass:"font-size:0.9rem mt:4"},[e._v("\n        他人代領\n      ")]):e._e()]),e._v(" "),e.attendee.attendee_card_name_1?t("div",{style:{borderLeft:"2px solid #cecece",marginLeft:"32px",paddingLeft:"32px",textAlign:"center"}},[e._v("\n      "+e._s(e.attendee.attendee_card_name_1)),t("br"),e._v("\n      "+e._s(e.attendee.attendee_card_name_2)+"\n    ")]):t("div",{style:{borderLeft:"2px solid #cecece",marginLeft:"32px",paddingLeft:"32px",textAlign:"center"}},[e._v("\n      "+e._s(e.attendee.attendee_nickname)+"\n    ")])])]):e._e()}),[],!1,null,null,null);t.default=component.exports},383:function(e,t,n){"use strict";n(380)},384:function(e,t,n){var r=n(61)(!1);r.push([e.i,'.cardNumberInput{font-family:"Courier New",monospace;font-weight:700}',""]),e.exports=r},502:function(e,t,n){"use strict";n.r(t);n(108);var r=n(3),o=(n(68),n(11),n(21),n(1)),c=n(71),d=n(381),l=n(72),f=n.n(l),m={layout:"admin",components:{AttendeeInfoResume:d.default},data:function(){return{config:f.a.getConfig(),loading:!1,searchInput:"",attendee:{info:null,level:null,error:null},payment:{amount:null,error:null},onsiteRegistrationInfo:{attendeeNumber:"",cardID:""},personalInfoFields:["attendee_nickname","attendee_realname","attendee_identification_number","attendee_birthday","account_email","attendee_telephone"]}},mounted:function(){var e=this;this.$refs.searchInput.input.focus(),this.$refs.searchInput.input.addEventListener("keyup",(function(t){13==t.keyCode&&e.findAttendee()}))},watch:{"payment.amount":function(){if(this.payment.amount&&!this.payment.error){var e=this;o.a.nextTick((function(){e.$refs.attendeeNumber.input.addEventListener("keyup",(function(t){13==t.keyCode&&o.a.nextTick((function(){e.$refs.cardID.input.focus()}))})),e.$refs.cardID.input.addEventListener("keyup",(function(t){13==t.keyCode&&o.a.nextTick((function(){e.$refs.confirmPayment.button.focus()}))}))}))}}},methods:{resetState:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.attendee={info:null,level:null,error:null},e.payment={amount:null,error:null},e.onsiteRegistrationInfo={attendeeNumber:"",cardID:""};case 3:case"end":return t.stop()}}),t)})))()},findAttendee:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=e.searchInput.length){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,e.resetState(),t.next=6,e.$axios.get("/api/admin/attendees/search?any=".concat(e.searchInput,"&withPendingAttendees=yes&details=yes")).then((function(t){e.attendee.info=t.data.attendee,e.attendee.level=e.config.levels.find((function(t){return t.level==e.attendee.info.attendee_type})),e.checkPayment()})).catch((function(t){t.response&&t.response.data?e.attendee.error=t.response.data.code:c.a.showRequestError(t)}));case 6:e.searchInput=null,e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()},checkPayment:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,e.bill=null,n=e,t.next=5,e.$axios.get("/api/admin/attendee/".concat(e.attendee.info.attendee_id,"/payment/onsite")).then((function(t){e.payment.amount=t.data.amount,3==e.attendee.info.attendee_status&&o.a.nextTick((function(){n.$refs.attendeeNumber.input.focus()}))})).catch((function(t){t.response.data?e.payment.error=t.response.data.code:c.a.showRequestError(t)}));case 5:e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},confirmPayment:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(confirm("確定已收取報名費用了嗎？")){t.next=2;break}return t.abrupt("return");case 2:if(0!=e.onsiteRegistrationInfo.attendeeNumber.length&&0!=e.onsiteRegistrationInfo.cardID.length){t.next=5;break}return alert("請輸入參加者編號及卡片 ID"),t.abrupt("return");case 5:return e.loading=!0,t.next=8,e.$axios.post("/api/admin/attendee/".concat(e.attendee.info.attendee_id,"/payment/onsite"),{attendeeNumber:e.onsiteRegistrationInfo.attendeeNumber,cardID:e.onsiteRegistrationInfo.cardID}).then((function(t){alert("已完成現場報名手續"),e.resetState(),e.searchInput=null,o.a.nextTick((function(){self.$refs.searchInput.input.focus()}))})).catch((function(e){c.a.showRequestError(e)}));case 8:e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()},undoPayment:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(confirm("確定取消付費的記錄嗎？")){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,t.next=5,e.$axios.delete("/api/admin/attendee/".concat(e.attendee.info.attendee_id,"/payment/onsite")).then((function(t){alert("已消除付款記錄"),e.resetState(),e.searchInput=null,o.a.nextTick((function(){self.$refs.searchInput.input.focus()}))})).catch((function(e){c.a.showRequestError(e)}));case 5:e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()}}},v=n(30),component=Object(v.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"p:16 overflow:auto"},[t("Loading",{attrs:{value:e.loading}}),e._v(" "),t("div",{staticClass:"font-size:2rem"},[e._v("\n    "+e._s(e.$t("attendee.onsiteRegistration.title"))+"\n  ")]),e._v(" "),t("Field",{attrs:{field:e.$t("attendee.search.title")}},[t("InputText",{ref:"searchInput",attrs:{placeholder:e.$t("attendee.search.placeholder")},model:{value:e.searchInput,callback:function(t){e.searchInput=t},expression:"searchInput"}}),e._v(" "),e.attendee.error?t("div",{staticClass:"mt:8 color:red"},[e._v("\n      "+e._s(e.$t(e.attendee.error))+"\n    ")]):e._e(),e._v(" "),e.attendee.info&&3!=e.attendee.info.attendee_status&&!e.attendee.level.onsite?t("div",{staticClass:"mt:8"},[e._v("\n      "+e._s(e.$t("attendee.messages.attendeeAlreadyDoneRegistrationGoaheadToCheckin"))+"\n    ")]):e._e()],1),e._v(" "),e.attendee.info&&("3"==e.attendee.info.attendee_status||e.attendee.level.onsite)?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n      "+e._s(e.$t("attendee.messages.personalInfo"))+"\n    ")]),e._v(" "),t("div",[t("table",{staticClass:"ml:8"},[t("tbody",e._l(e.personalInfoFields,(function(n){return t("tr",{key:n},[t("td",{staticClass:"pr:8 pt:8"},[e._v("\n              "+e._s(n.startsWith("attendee")?e.$t("attendee.fields.".concat(n.toCamelCase())):e.$t("account.fields.".concat(n.toCamelCase())))+"\n            ")]),e._v(" "),t("td",{staticClass:"pt:8"},[e._v(e._s(e.attendee.info[n]))])])})),0)])]),e._v(" "),e.payment.amount?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n        "+e._s(e.$t("payment.outstanding.title"))+"\n      ")]),e._v(" "),e.payment.amount?t("div",{staticClass:"flex align-items:center"},[t("div",{staticClass:"round border drop-shadow p:16|32 bg:white mt:8 flex w:fit-content flex-direction:column@<md"},[t("div",{staticClass:"font-size:1.4rem"},[e._v("\n            "+e._s(e.payment.amount)+"\n          ")])])]):t("div",{staticClass:"round border drop-shadow p:16|32 bg:#dce9d5 mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md"},[e._v("\n        已完成付款\n      ")])]):e._e(),e._v(" "),e.payment.amount&&!e.payment.error?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n        "+e._s(e.$t("attendee.onsiteRegistration.numberAndCardID"))+"\n      ")]),e._v(" "),t("Field",{attrs:{field:e.$t("attendee.fields.attendeeNo")}},[t("InputText",{ref:"attendeeNumber",model:{value:e.onsiteRegistrationInfo.attendeeNumber,callback:function(t){e.$set(e.onsiteRegistrationInfo,"attendeeNumber",t)},expression:"onsiteRegistrationInfo.attendeeNumber"}})],1),e._v(" "),t("Field",{attrs:{field:e.$t("attendee.fields.attendeeRFIDID")}},[t("InputText",{ref:"cardID",model:{value:e.onsiteRegistrationInfo.cardID,callback:function(t){e.$set(e.onsiteRegistrationInfo,"cardID",t)},expression:"onsiteRegistrationInfo.cardID"}})],1)],1):e._e(),e._v(" "),e.attendee.error?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n        "+e._s(e.$t("common.errors.error"))+"\n      ")]),e._v(" "),t("div",{staticClass:"flex w:fit-content flex-direction:column@<md"},[t("div",{staticClass:"round border drop-shadow p:16|32 bg:#eecdcd mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md"},[e._v("\n          "+e._s(e.$t(e.attendee.error))+"\n        ")])])]):e._e(),e._v(" "),e.attendee.info?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n        "+e._s(e.$t("common.messages.actions"))+"\n      ")]),e._v(" "),t("div",{staticClass:"flex mt:8"},[3==e.attendee.info.attendee_status?t("Button",{ref:"confirmPayment",staticClass:"mr:8",on:{click:e.confirmPayment}},[e._v("\n          完成付款＆報名\n        ")]):e._e(),e._v(" "),3!=e.attendee.info.attendee_status?t("Button",{ref:"undoPayment",staticClass:"mr:8",attrs:{type:"secondary"},on:{click:e.undoPayment}},[e._v("\n          取消報名記錄\n        ")]):e._e()],1)]):e._e()]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Loading:n(169).default,InputText:n(372).default,Field:n(376).default,Button:n(370).default})}}]);