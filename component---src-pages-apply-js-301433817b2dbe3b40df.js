(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Tmxi:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n("HaE+"),i=n("dI71"),r=n("q1tI"),o=n.n(r),l=n("vOnD"),s=n("eHHv"),u=n("ZCxb"),c=n.n(u),d=n("QojX"),p=n("cWnB"),m=n("yTmA"),f=n("PjpU"),h=n("kT3S"),y=n("F7AD"),b=n("lEpx"),g=l.default.span.withConfig({displayName:"ApplicationForm__RequiredAsterisk",componentId:"sc-144hcn9-0"})(['color:red;&:after{content:"*";}']),v=Object(l.default)(d.a).withConfig({displayName:"ApplicationForm__CenteredForm",componentId:"sc-144hcn9-1"})(["display:flex;flex-direction:column;align-items:center;max-width:500px;flex:auto;margin-bottom:25px;"]),E=function(e){0===e.files.length?(e.setCustomValidity("You must upload a file!"),c()("Uh oh!","You must upload a file!","error")):e.files.length>1?(e.setCustomValidity("You can only upload 1 file!"),c()("Uh oh!","You can only upload 1 file!","error")):e.files[0].size>1048576?(e.setCustomValidity("Max file size is 1MB!"),e.value="",c()("Uh oh!","Max file size is 1MB!","error")):e.setCustomValidity("")},w=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))||this)._initFirebase=!1,t.state={applicationFormConfig:null,initialApplicationData:null,generalSettings:null,loading:!0,validated:!1,sending:!1,submitted:!1,alreadyApplied:!1,errorMsg:""},t.loadData=Object(a.a)((function*(){t._initFirebase=!0;var e=t.props.firebase.applicationFormConfig().get().then((function(e){return e.data()})).catch((function(){return t.setState({errorMsg:"Application Form Config doesn't exist!",loading:!1})})),n=t.props.firebase.user(t.context.uid).get().then((function(e){return e.data()})).catch(console.error),a=t.props.firebase.generalSettings().get().then((function(e){return e.data()})).catch((function(){return t.setState({errorMsg:"General settings doesn't exist!",loading:!1})})),i=t.props.firebase.application(t.context.uid).get().then((function(e){return e.exists?e.data():null})).catch(console.error);Promise.all([e,n,a,i]).then((function(e){return t.setState({loading:!1,applicationFormConfig:e[0],alreadyApplied:e[1].roles.hasOwnProperty("applicant"),generalSettings:e[2],initialApplicationData:e[3]})}))})),t}Object(i.a)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.props.firebase&&!this._initFirebase&&this.loadData()},r.componentDidUpdate=function(e){this.props.firebase&&!this._initFirebase&&this.loadData(),"undefined"!=typeof window&&n.e(4).then(n.t.bind(null,"5buq",7)).then((function(e){e.init()}))},r.render=function(){var e=this,t=this.state,n=t.loading,i=t.errorMsg,r=t.submitted,l=t.validated,s=t.applicationFormConfig,u=t.sending,c=t.alreadyApplied,m=t.generalSettings;if(n)return o.a.createElement(h.a,null);if(m.applicationsOpen)return o.a.createElement(b.c,{flexdirection:"column",style:{justifyContent:"center",alignItems:"center",maxWidth:700}},o.a.createElement(y.a,{size:"medium"}),o.a.createElement("h1",null,"Applications are closed!"),o.a.createElement("p",null,"Unfortunately, the application for the"," ",s.semester," season has closed. If you're interesting in joining BU UPE, please come back next semester and apply, we'd love to have you! In the meantime, feel free to check out the public events on"," ",o.a.createElement("a",{href:"https://upe.bu.edu/events"},"our calendar"),"."));var f=function(){var t=Object(a.a)((function*(t){t.preventDefault();var n=t.currentTarget,a=Array.from(n.querySelectorAll(".custom-file-input"));if(a.forEach((function(e){return E(e)})),!1===n.checkValidity())t.stopPropagation();else{e.setState({sending:!0});var i,r,o=Array.from(n.querySelectorAll(".form-control")),l=Array.from(n.querySelectorAll(".custom-radio>.custom-control-input")).filter((function(e){return e.checked})),s=e.state.applicationFormConfig,u=s.semester,c=s.questions,d=e.context,p=d.uid,m=d.roles;m.applicant=!0;var f=o.map((function(e){var t=e.id,n=e.value,a=parseInt(t);1===a?i=n.split(" ")[0]:2===a&&(r=n);var o=c.find((function(e){return e.id===a})),l=o.name,s=o.order,u=o.type;return{id:a,value:n,name:l,order:s,type:u}})),h=l.map((function(e){var t=e.name,n=e.value,a=parseInt(t),i="true"==n,r=c.find((function(e){return e.id===a})),o=r.name,l=r.order,s=r.type;return{id:a,value:i,name:o,order:l,type:s}})),y=a.map((function(t){return new Promise((function(n,a){var i=parseInt(t.id.split("-").pop());e.props.firebase.file(p,i).put(t.files[0]).then((function(e){return e.ref.getDownloadURL()})).then((function(e){var t=c.find((function(e){return e.id===i})),a=t.name,r=t.order,o=t.type;return n({id:i,value:e,name:a,order:r,type:o})}))}))})),b=yield Promise.all(y);f=f.concat(b).concat(h);var g=e.props.firebase.application(p).set({responses:f,semester:u,deliberation:{accepted:!1,confirmed:!1,feedback:"",votes:{}},interview:{interviewed:!1}}),v=e.props.firebase.user(p).update({roles:m}),w=e.props.firebase.sendApplicationReceipt({email:r,firstName:i});yield Promise.all([g,v,w]),e.setState({submitted:!0,sending:!1})}e.setState({validated:!0})}));return function(e){return t.apply(this,arguments)}}(),w=o.a.createElement(b.c,{flexdirection:"column"},o.a.createElement("div",{style:{alignSelf:"center"}},o.a.createElement(y.a,{size:"medium"})),o.a.createElement("h1",null,"Application Submitted!"),o.a.createElement("p",null,"Thank you for applying to join BU UPE. Please check your email for a confirmation of your submission. Further details, such as interview timeslots, will be prompted via email and can be entered in this application. If you'd like to edit your submission, simply refresh this page and re-apply."));if(i)return o.a.createElement(b.c,{flexdirection:"column"},o.a.createElement("h1",null,"Uh oh!"),o.a.createElement("p",null,i));if(r)return w;return o.a.createElement(b.c,{flexdirection:"row",style:{justifyContent:"center"}},o.a.createElement(v,{noValidate:!0,validated:l,onSubmit:f},o.a.createElement(y.a,{size:"medium"}),o.a.createElement("h1",null,"Apply to BU UPE"),c&&o.a.createElement("p",{style:{color:"red"}},"Look's like you've already applied! Feel free to reapply however, just note that it will overwrite your previous submission."),s.questions.sort((function(e,t){return e.order>t.order?1:-1})).map((function(t){return function(t){var n,a=e.state.initialApplicationData,i="";switch(null!==a?i=a.responses.find((function(e){return e.id===t.id})).value:1===t.id?i=e.context.name:2===t.id&&(i=e.context.email),t.type){case"textarea":n=o.a.createElement(d.a.Control,{required:t.required,as:"textarea",rows:"3",defaultValue:i});break;case"file":n=o.a.createElement(d.a.File,{id:"custom-file-"+t.id,label:"Upload file",custom:!0,accept:".pdf",onChange:function(e){return E(e.target)}});break;case"yesno":console.log("yesno",typeof i),n=o.a.createElement("div",null,o.a.createElement(d.a.Check,{custom:!0,required:t.required,inline:!0,defaultChecked:i,value:"true",label:"Yes",type:"radio",name:t.id,id:t.id+"-1"}),o.a.createElement(d.a.Check,{custom:!0,required:t.required,inline:!0,defaultChecked:!i,value:"false",label:"No",type:"radio",name:t.id,id:t.id+"-2"}));break;default:n=o.a.createElement(d.a.Control,{required:t.required,type:t.type,defaultValue:i})}return o.a.createElement(d.a.Row,{style:{width:"100%"},key:t.id},o.a.createElement(d.a.Group,{controlId:t.id,style:{width:"100%"}},o.a.createElement(d.a.Label,null,t.name," ",t.required&&o.a.createElement(g,null)),n))}(t)})),o.a.createElement(p.a,{type:"submit",disabled:u},u?"Submitting...":"Submit")))},t}(r.Component);w.contextType=m.AuthUserContext,t.b=Object(s.a)(Object(m.withAuthorization)(f.d),m.withFirebase)(w)},syWp:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=n("7oih"),o=n("Tmxi");t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(o.b,null))}}}]);
//# sourceMappingURL=component---src-pages-apply-js-301433817b2dbe3b40df.js.map