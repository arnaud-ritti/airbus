import{defineComponent as e,ref as n,computed as t,watch as a,resolveComponent as i,resolveDirective as o,openBlock as r,createElementBlock as l,createBlock as d,withCtx as s,normalizeClass as u,createVNode as c,createElementVNode as v,toDisplayString as g,withDirectives as m,createCommentVNode as p,createTextVNode as f,pushScopeId as h,popScopeId as b}from"vue";import{useApi as y}from"@directus/extensions-sdk";let w=(e=21)=>{let n="",t=crypto.getRandomValues(new Uint8Array(e));for(;e--;){let a=63&t[e];n+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return n};function x(){const e=window.location.pathname.split("/"),n=e.indexOf("admin");return e.slice(0,n).join("/")+"/"}function k(e,n,t){const a=t||function(e){var n;return(null===(n=e.defaults.headers.common.Authorization)||void 0===n?void 0:n.split(" ")[1])||null}(e);return a?function(e,n){const t=[];for(const[e,a]of Object.entries(n))t.push(`${e}=${a}`);return e.includes("?")?`${e}&${t.join("&")}`:`${e}?${t.join("&")}`}(n,{access_token:a}):n}var _=e({components:{},props:{value:{type:[String,Object],default:null},disabled:{type:Boolean,default:!1},folder:{type:String,default:void 0},file_key_to_get:{type:String,default:"filename_disk"}},emits:["input"],setup(e,{emit:i}){const o=n(!1),r=n(null),l=n(!1),d=n(!1),s=n(null),u=n(w()),c=y(),v=t((()=>{if(!r.value)return null;if(r.value.type.includes("svg"))return k(c,x()+`assets/${r.value.id}`);if(r.value.type.includes("image")){const e=x()+`assets/${r.value.id}?key=system-large-cover&cache-buster=${u.value}`;return k(c,e)}return null})),g=t((()=>r.value?k(c,x()+`assets/${r.value.id}`):null)),m=t((()=>{if(!r.value)return null;const{filesize:e,width:n,height:t,type:a}=r.value;return n&&t?`${n}x${t} • ${e} • ${a}`:`${e} • ${a}`}));a((()=>e.value),((n,t)=>{n!==t&&(n&&async function(){var n;o.value=!0;try{let t="string"==typeof e.value?e.value:null===(n=e.value)||void 0===n?void 0:n.id;t=t.split(".").slice(0,-1).join(".");const a=await c.get(`/files/${t}`,{params:{fields:["id","title","width","height","filesize","type","filename_download"]}});null!==e.value&&"object"==typeof e.value?r.value={...a.data.data,...e.value}:r.value=a.data.data}catch(e){console.log(e)}finally{o.value=!1}}(),t&&null===n&&h())}),{immediate:!0});const{edits:p,stageEdits:f}={edits:t((()=>e.value&&"object"==typeof e.value?e.value:{})),stageEdits:function(n){r.value&&(console.log(n),i("input",r.value[e.file_key_to_get]))}};return{loading:o,image:r,src:v,imageError:s,imageErrorHandler:async function(){var e,n,t,a;if(!v.value)return;try{await c.get(v.value)}catch(i){s.value=null===(a=null===(t=null===(n=null===(e=i.response)||void 0===e?void 0:e.data)||void 0===n?void 0:n.errors[0])||void 0===t?void 0:t.extensions)||void 0===a?void 0:a.code,s.value||(s.value="UNKNOWN")}},meta:m,lightboxActive:l,editDrawerActive:d,changeCacheBuster:function(){u.value=w()},setImage:function(n){console.log("setImage",n),r.value=n,i("input",n[e.file_key_to_get])},deselect:h,downloadSrc:g,edits:p,stageEdits:f};function h(){i("input",null),o.value=!1,r.value=null,l.value=!1,d.value=!1}}});const $=e=>(h("data-v-64969d30"),e=e(),b(),e),E={class:"image"},j=f(g("disabled")),A={key:0,class:"image-error"},I={class:"message"},S=["src"],U=$((()=>v("div",{class:"shadow"},null,-1))),z={key:2,class:"actions"},C={class:"info"},N={class:"title"},O={class:"meta"};var D=[],T=[];!function(e,n){if(e&&"undefined"!=typeof document){var t,a=!0===n.prepend?"prepend":"append",i=!0===n.singleTag,o="string"==typeof n.container?document.querySelector(n.container):document.getElementsByTagName("head")[0];if(i){var r=D.indexOf(o);-1===r&&(r=D.push(o)-1,T[r]={}),t=T[r]&&T[r][a]?T[r][a]:T[r][a]=l()}else t=l();65279===e.charCodeAt(0)&&(e=e.substring(1)),t.styleSheet?t.styleSheet.cssText+=e:t.appendChild(document.createTextNode(e))}function l(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),n.attributes)for(var t=Object.keys(n.attributes),i=0;i<t.length;i++)e.setAttribute(t[i],n.attributes[t[i]]);var r="prepend"===a?"afterbegin":"beforeend";return o.insertAdjacentElement(r,e),e}}(".image-preview[data-v-64969d30] {\n  position: relative;\n  width: 100%;\n  height: var(--input-height-tall);\n  overflow: hidden;\n  background-color: var(--background-subdued);\n  border-radius: var(--border-radius);\n}\nimg[data-v-64969d30] {\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.is-svg[data-v-64969d30] {\n  padding: 32px;\n  background-color: var(--background-normal-alt);\n}\n.is-svg img[data-v-64969d30] {\n  object-fit: contain;\n}\n.image-error[data-v-64969d30] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: var(--foreground-subdued);\n  background-color: var(--background-normal);\n}\n.image-error .v-icon[data-v-64969d30] {\n  margin-bottom: 6px;\n}\n.image-error .message[data-v-64969d30] {\n  max-width: 300px;\n  padding: 0 16px;\n  text-align: center;\n}\n.shadow[data-v-64969d30] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  width: 100%;\n  height: 40px;\n  overflow: hidden;\n  line-height: 1;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  background: linear-gradient(180deg, rgba(38, 50, 56, 0) 0%, rgba(38, 50, 56, 0.25) 100%);\n  transition: height var(--fast) var(--transition);\n}\n.actions[data-v-64969d30] {\n  --v-button-color: var(--foreground-subdued);\n  --v-button-background-color: var(--white);\n  --v-button-color-hover: var(--foreground-normal);\n  --v-button-background-color-hover: var(--white);\n  position: absolute;\n  top: 30%;\n  left: 0;\n  z-index: 3;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.actions .v-button[data-v-64969d30] {\n  margin-right: 12px;\n  transform: translateY(10px);\n  opacity: 0;\n  transition: var(--medium) var(--transition);\n  transition-property: opacity transform;\n}\n.actions .v-button[data-v-64969d30]:nth-of-type(1) {\n  transition-delay: 0ms;\n}\n.actions .v-button[data-v-64969d30]:nth-of-type(2) {\n  transition-delay: 25ms;\n}\n.actions .v-button[data-v-64969d30]:nth-of-type(3) {\n  transition-delay: 50ms;\n}\n.actions .v-button[data-v-64969d30]:nth-of-type(4) {\n  transition-delay: 75ms;\n}\n.actions .v-button[data-v-64969d30]:nth-of-type(5) {\n  transition-delay: 100ms;\n}\n.actions .v-button[data-v-64969d30]:last-child {\n  margin-right: 0px;\n}\n.info[data-v-64969d30] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 3;\n  width: 100%;\n  padding: 8px 12px;\n  line-height: 1.2;\n}\n.title[data-v-64969d30] {\n  color: var(--white);\n}\n.meta[data-v-64969d30] {\n  height: 17px;\n  max-height: 0;\n  overflow: hidden;\n  color: rgba(255, 255, 255, 0.75);\n  transition: max-height var(--fast) var(--transition);\n}\n.image-preview:hover .shadow[data-v-64969d30] {\n  height: 100%;\n  background: linear-gradient(180deg, rgba(38, 50, 56, 0) 0%, rgba(38, 50, 56, 0.5) 100%);\n}\n.image-preview:hover .actions .v-button[data-v-64969d30] {\n  transform: translateY(0px);\n  opacity: 1;\n}\n.image-preview:hover .meta[data-v-64969d30] {\n  max-height: 17px;\n}\n.disabled-placeholder[data-v-64969d30] {\n  height: var(--input-height-tall);\n}",{}),_.render=function(e,n,t,a,f,h){const b=i("v-skeleton-loader"),y=i("v-notice"),w=i("v-icon"),x=i("v-button"),k=i("drawer-item"),_=i("file-lightbox"),$=i("v-upload"),D=o("tooltip");return r(),l("div",E,[e.loading?(r(),d(b,{key:0,type:"input-tall"})):e.disabled&&!e.image?(r(),d(y,{key:1,class:"disabled-placeholder",center:"",icon:"block"},{default:s((()=>[j])),_:1})):e.image?(r(),l("div",{key:2,class:u(["image-preview",{"is-svg":e.image.type&&e.image.type.includes("svg")}])},[e.imageError?(r(),l("div",A,[c(w,{large:"",name:"UNKNOWN"===e.imageError?"error_outline":"info_outline"},null,8,["name"]),v("span",I,g(`errors.${e.imageError}`),1)])):(r(),l("img",{key:1,src:e.src,alt:"",role:"presentation",onError:n[0]||(n[0]=(...n)=>e.imageErrorHandler&&e.imageErrorHandler(...n))},null,40,S)),U,e.disabled?p("v-if",!0):(r(),l("div",z,[m(c(x,{icon:"",rounded:"",onClick:n[1]||(n[1]=n=>e.lightboxActive=!0)},{default:s((()=>[c(w,{name:"zoom_in"})])),_:1},512),[[D,"zoom"]]),m(c(x,{icon:"",rounded:"",href:e.downloadSrc,download:e.image.filename_download},{default:s((()=>[c(w,{name:"get_app"})])),_:1},8,["href","download"]),[[D,"download"]]),m(c(x,{icon:"",rounded:"",onClick:n[2]||(n[2]=n=>e.editDrawerActive=!0)},{default:s((()=>[c(w,{name:"open_in_new"})])),_:1},512),[[D,"edit"]]),m(c(x,{icon:"",rounded:"",onClick:e.deselect},{default:s((()=>[c(w,{name:"close"})])),_:1},8,["onClick"]),[[D,"deselect"]])])),v("div",C,[v("div",N,g(e.image.title),1),v("div",O,g(e.meta),1)]),!e.disabled&&e.image?(r(),d(k,{key:3,active:e.editDrawerActive,"onUpdate:active":n[3]||(n[3]=n=>e.editDrawerActive=n),collection:"directus_files","primary-key":e.image.id,edits:e.edits,onInput:e.stageEdits},null,8,["active","primary-key","edits","onInput"])):p("v-if",!0),c(_,{id:e.image.id,modelValue:e.lightboxActive,"onUpdate:modelValue":n[4]||(n[4]=n=>e.lightboxActive=n)},null,8,["id","modelValue"])],2)):(r(),d($,{key:3,"from-library":"","from-url":"",folder:e.folder,onInput:e.setImage},null,8,["folder","onInput"]))])},_.__scopeId="data-v-64969d30",_.__file="src/interface.vue";var V={id:"uuid-file-image",name:"UUID File Image",description:"Select image from Library in a UUID string field",icon:"box",component:_,types:["uuid"]};export{V as default};
