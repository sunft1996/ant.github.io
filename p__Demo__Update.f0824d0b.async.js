(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{xqMP:function(e,t,a){"use strict";a.r(t);a("IzEo");var n,r,l,o=a("bx4M"),i=(a("+L6B"),a("2/Rp")),c=(a("DZo9"),a("8z0m")),s=(a("Pwec"),a("CtXQ")),u=(a("OaEy"),a("2fM7")),d=(a("/xke"),a("TeRw")),p=(a("2qtc"),a("kLXV")),m=a("p0pE"),f=a.n(m),g=(a("miYZ"),a("tsqr")),h=a("2Taf"),v=a.n(h),y=a("vZ4D"),E=a.n(y),C=a("MhPg"),b=a.n(C),S=a("l4Ni"),w=a.n(S),U=a("ujKo"),k=a.n(U),O=(a("5NDa"),a("5rEg")),x=(a("y8nQ"),a("Vl3Y")),L=a("q1tI"),R=a.n(L),T=a("MuoO"),q=a("zHco"),D=a("KRny"),M=a("3a4m"),N=a.n(M),P=a("t3Un");function j(e){var t=z();return function(){var a,n=k()(e);if(t){var r=k()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return w()(this,a)}}function z(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var I=x["a"].Item,V=O["a"].TextArea,B=(n=Object(T["connect"])(function(e){var t=e.article,a=e.loading;return{article:t,loading:a.models.rule}}),r=x["a"].create(),n(l=r(l=function(e){b()(a,e);var t=j(a);function a(e){var n;return v()(this,a),n=t.call(this,e),n.loading=function(e){n.setState({loading:!!e})},n.handleSubmit=function(e){var t=n.props.form,a=n.props.location.query.id,r=n.state.imageUrl;e.preventDefault(),t.validateFields(function(e,t){if(!e){if(!r)return void g["a"].error("\u56fe\u7247\u4e0d\u80fd\u4e3a\u7a7a");var l=f()({},t,{id:a,url:r});n.loading(!0),p["a"].confirm({title:"\u786e\u5b9a\u4fee\u6539\uff1f",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",onOk:function(){Object(P["a"])("/empty-item/demo/saveOrUpdate",{method:"POST",data:l}).then(function(e){"SUCCESS"===e.code?(d["a"].success({message:e.code,description:e.msg}),N.a.go(-1)):d["a"].error({message:e.code,description:e.msg}),n.loading()})}})}})},n.handleChange=function(e){"uploading"!==e.file.status?"done"===e.file.status&&n.setState({imageUrl:"SUCCESS"===e.file.response.code?e.file.response.data.url:null,uploadLoading:!1}):n.setState({uploadLoading:!0})},n.cancel=function(){N.a.go(-1)},n.state={current:{},loading:!1,uploadLoading:!1,imageUrl:null},n}return E()(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.query.id;void 0!==t&&Object(P["a"])("/empty-item/demo/detail?id=".concat(t)).then(function(t){"SUCCESS"===t.code?e.setState({current:t.data,imageUrl:t.data.url}):d["a"].error({message:t.code,description:t.msg}),e.loading()})}},{key:"render",value:function(){var e=this,t=this.props.form,a=this.state,n=a.imageUrl,r=a.loading,l=a.current;return R.a.createElement(q["a"],{title:"\u65b0\u589e"},R.a.createElement(o["a"],null,R.a.createElement(x["a"],{layout:"horizontal",onSubmit:this.handleSubmit},R.a.createElement(I,{labelCol:{span:7},wrapperCol:{span:10},label:"\u7c7b\u578b"},t.getFieldDecorator("type",{initialValue:l.type,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\uff01"}]})(R.a.createElement(u["a"],null,R.a.createElement(u["a"].Option,{value:1},"banner"),R.a.createElement(u["a"].Option,{value:2},"\u6d77\u62a5")))),R.a.createElement(I,{labelCol:{span:7},wrapperCol:{span:10},label:"\u5907\u6ce8"},t.getFieldDecorator("remark",{initialValue:l.remark,rules:[]})(R.a.createElement(V,{placeholder:"\u8bf7\u8f93\u5165"}))),R.a.createElement(I,{labelCol:{span:7},wrapperCol:{span:10},label:"\u56fe\u7247"},R.a.createElement(c["a"],{listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"/empty-item/api/uploadImg",onChange:this.handleChange},n?R.a.createElement("img",{src:D["a"]+n,alt:"image",style:{width:"100%"}}):R.a.createElement("div",null,R.a.createElement(s["a"],{type:this.state.uploadLoading?"loading":"plus"}),R.a.createElement("div",{className:"ant-upload-text"},"Upload")))),R.a.createElement("div",{className:"flexCenter"},R.a.createElement(i["a"],{onClick:function(){return e.cancel()}},"\u53d6\u6d88"),R.a.createElement(i["a"],{type:"primary",className:"marginLeft",htmlType:"submit",loading:r},"\u63d0\u4ea4")))))}}]),a}(L["PureComponent"]))||l)||l);t["default"]=B}}]);