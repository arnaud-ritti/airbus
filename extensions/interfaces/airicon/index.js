import{openBlock as e,createElementBlock as n,Fragment as t,createElementVNode as i}from"vue";var o={props:{value:{type:String,default:null}},emits:["input"],setup:(e,{emit:n})=>({handleChange:function(e){n("input",e)}})};const u=["value"],a=i("select",{name:"icon",id:"icon"},[i("option",{value:"test"},"Test"),i("option",{value:"test2"},"Test2")],-1);o.render=function(o,l,r,p,s,c){return e(),n(t,null,[i("input",{value:r.value,onInput:l[0]||(l[0]=e=>p.handleChange(e.target.value))},null,40,u),a],64)},o.__file="src/interface.vue";var l={id:"airicon",name:"Airicon",icon:"box",description:"Icon picker for airbus",component:o,options:null,types:["string"]};export{l as default};