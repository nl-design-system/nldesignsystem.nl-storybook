import{j as w}from"./jsx-runtime-CKrituN3.js";import{r as N}from"./README-DKulhU5l.js";import{R as b,r as x}from"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const _=t=>t.toLowerCase().split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),R=t=>t.replace(/([A-Z])/g,e=>`-${e[0].toLowerCase()}`),L=(t,e,r={})=>{if(t instanceof Element){const o=T(t.classList,e,r);o!==""&&(t.className=o),Object.keys(e).forEach(s=>{if(!(s==="children"||s==="style"||s==="ref"||s==="class"||s==="className"||s==="forwardedRef"))if(s.indexOf("on")===0&&s[2]===s[2].toUpperCase()){const c=s.substring(2),n=c[0].toLowerCase()+c.substring(1);v(n)||D(t,n,e[s])}else t[s]=e[s],typeof e[s]==="string"&&t.setAttribute(R(s),e[s])})}},T=(t,e,r)=>{const o=e.className||e.class,s=r.className||r.class,c=y(t),n=y(o?o.split(" "):[]),l=y(s?s.split(" "):[]),p=[];return c.forEach(a=>{n.has(a)?(p.push(a),n.delete(a)):l.has(a)||p.push(a)}),n.forEach(a=>p.push(a)),p.join(" ")},k=t=>{switch(t){case"doubleclick":return"dblclick"}return t};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const v=t=>{if(typeof document>"u")return!0;{const e="on"+k(t);let r=e in document;if(!r){const o=document.createElement("div");o.setAttribute(e,"return;"),r=typeof o[e]=="function"}return r}},D=(t,e,r)=>{const o=t.__events||(t.__events={}),s=o[e];s&&t.removeEventListener(e,s),t.addEventListener(e,o[e]=function(n){r&&r.call(this,n)})},y=t=>{const e=new Map;return t.forEach(r=>e.set(r,r)),e},B=(t,e)=>{typeof t=="function"?t(e):t!=null&&(t.current=e)},U=(...t)=>e=>{t.forEach(r=>{B(r,e)})},A=(t,e)=>{const r=(o,s)=>b.createElement(t,Object.assign({},o,{forwardedRef:s}));return r.displayName=e,b.forwardRef(r)};var P=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(t);s<o.length;s++)e.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(t,o[s])&&(r[o[s]]=t[o[s]]);return r};const S=(t,e,r,o)=>{o!==void 0&&o();const s=_(t),c=class extends b.Component{constructor(n){super(n),this.setComponentElRef=l=>{this.componentEl=l}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(n){L(this.componentEl,this.props,n)}render(){const n=this.props,{children:l,forwardedRef:p,style:a,className:I,ref:K}=n,E=P(n,["children","forwardedRef","style","className","ref"]);let u=Object.keys(E).reduce((m,i)=>{const h=E[i];if(i.indexOf("on")===0&&i[2]===i[2].toUpperCase()){const f=i.substring(2).toLowerCase();typeof document<"u"&&v(f)&&(m[i]=h)}else{const f=typeof h;(f==="string"||f==="boolean"||f==="number")&&(m[R(i)]=h)}return m},{});r&&(u=r(this.props,u));const j=Object.assign(Object.assign({},u),{ref:U(p,this.setComponentElRef),style:a});return x.createElement(t,j,l)}static get displayName(){return s}};return e&&(c.contextType=e),A(c,s)},M=S("kernteam-button"),q=({children:t})=>w.jsx(M,{children:t}),z={title:"Web Component/Button",id:"web-component-button",component:q,argTypes:{children:{name:"Content",description:"Button text",type:{name:"string",required:!0},defaultValue:""}},args:{children:"Opslaan en verder"},tags:["autodocs"],parameters:{docs:{description:{component:N}}}},d={name:"kernteam button"};var g,O,C;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'kernteam button'
}`,...(C=(O=d.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};const F=["Default"];export{d as Default,F as __namedExportsOrder,z as default};
