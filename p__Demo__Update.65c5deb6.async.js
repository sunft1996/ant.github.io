(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{xqMP:function(e,t,a){"use strict";a.r(t);a("IzEo");var n,r,l,o,i=a("bx4M"),c=(a("+L6B"),a("2/Rp")),s=(a("DZo9"),a("8z0m")),u=(a("Pwec"),a("CtXQ")),d=(a("OaEy"),a("2fM7")),p=(a("/xke"),a("TeRw")),m=(a("2qtc"),a("kLXV")),f=a("p0pE"),g=a.n(f),h=(a("miYZ"),a("tsqr")),v=a("2Taf"),y=a.n(v),E=a("vZ4D"),C=a.n(E),S=a("MhPg"),b=a.n(S),w=a("l4Ni"),U=a.n(w),k=a("ujKo"),O=a.n(k),x=(a("5NDa"),a("5rEg")),D=(a("y8nQ"),a("Vl3Y")),L=a("q1tI"),R=a.n(L),T=a("MuoO"),q=a("zHco"),M=a("KRny"),N=a("3a4m"),P=a.n(N),j=a("t3Un");function z(e){var t=I();return function(){var a,n=O()(e);if(t){var r=O()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return U()(this,a)}}function I(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var V=D["a"].Item,F=x["a"].TextArea,Z=(n=Object(T["connect"])(function(e){var t=e.article,a=e.loading;return{article:t,loading:a.models.rule}}),r=D["a"].create(),n(l=r((o=function(e){b()(a,e);var t=z(a);function a(e){var n;return y()(this,a),n=t.call(this,e),n.loading=function(e){n.setState({loading:!!e})},n.handleSubmit=function(e){var t=n.props.form,a=n.props.location.query.id,r=n.state.imageUrl;e.preventDefault(),t.validateFields(function(e,t){if(!e){if(!r)return void h["a"].error("\u56fe\u7247\u4e0d\u80fd\u4e3a\u7a7a");var l=g()({},t,{id:a,url:r});n.loading(!0),m["a"].confirm({title:"\u786e\u5b9a\u4fee\u6539\uff1f",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",onOk:function(){Object(j["a"])("/empty-item/demo/saveOrUpdate",{method:"POST",data:l}).then(function(e){"SUCCESS"===e.code?(p["a"].success({message:e.code,description:e.msg}),P.a.go(-1)):p["a"].error({message:e.code,description:e.msg}),n.loading()})}})}})},n.handleChange=function(e){"uploading"!==e.file.status?"done"===e.file.status&&n.setState({imageUrl:"SUCCESS"===e.file.response.code?e.file.response.data.url:null,uploadLoading:!1}):n.setState({uploadLoading:!0})},n.cancel=function(){P.a.go(-1)},n.state={current:{},loading:!1,uploadLoading:!1,imageUrl:null},n}return C()(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.query.id;void 0!==t&&Object(j["a"])("/empty-item/demo/detail?id=".concat(t)).then(function(t){"SUCCESS"===t.code?e.setState({current:t.data,imageUrl:t.data.url}):p["a"].error({message:t.code,description:t.msg}),e.loading()})}},{key:"render",value:function(){var e=this,t=this.props.form,a=this.state,n=a.imageUrl,r=a.loading,l=a.current;return R.a.createElement(q["a"],{title:"\u65b0\u589e"},R.a.createElement(i["a"],null,R.a.createElement(D["a"],{layout:"horizontal",onSubmit:this.handleSubmit},R.a.createElement(V,{labelCol:{span:7},wrapperCol:{span:10},label:"\u7c7b\u578b"},t.getFieldDecorator("type",{initialValue:l.type,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\uff01"}]})(R.a.createElement(d["a"],null,R.a.createElement(d["a"].Option,{value:1},"banner"),R.a.createElement(d["a"].Option,{value:2},"\u6d77\u62a5")))),R.a.createElement(V,{labelCol:{span:7},wrapperCol:{span:10},label:"\u5907\u6ce8"},t.getFieldDecorator("remark",{initialValue:l.remark,rules:[]})(R.a.createElement(F,{placeholder:"\u8bf7\u8f93\u5165"}))),R.a.createElement(V,{labelCol:{span:7},wrapperCol:{span:10},label:"\u56fe\u7247"},R.a.createElement(s["a"],{listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"/empty-item/api/uploadImg",onChange:this.handleChange},n?R.a.createElement("img",{src:M["a"]+n,alt:"image",style:{width:"100%"}}):R.a.createElement("div",null,R.a.createElement(u["a"],{type:this.state.uploadLoading?"loading":"plus"}),R.a.createElement("div",{className:"ant-upload-text"},"Upload")))),R.a.createElement("div",{className:"flexCenter"},R.a.createElement(c["a"],{onClick:function(){return e.cancel()}},"\u53d6\u6d88"),R.a.createElement(c["a"],{type:"primary",className:"marginLeft",htmlType:"submit",loading:r},"\u63d0\u4ea4")))))}}]),a}(L["PureComponent"]),l=o))||l)||l);t["default"]=Z}}]);