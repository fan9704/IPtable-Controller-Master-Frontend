import{g as f,d,x as h,U as r,V as i,W as e,m as t,X as C,F as g,Y as w,_ as a,a0 as l,H as N,O as k,K as b}from"./vue-CXMZrBii.js";import{g as y}from"./index-D70LIFGc.js";import{r as B}from"./index-DnT7Il3i.js";import{x as m,v as D,G as E,H as I,I as R,V as _,J as $,b as A,y as F}from"./vuetify-B0GRDPT8.js";/* empty css                            */const H=a("h2",null," Proxmox Cluster 節點",-1),M={class:"text-h6 mb-1"},P={class:"text-overline mb-1"},S={class:"text-caption"},T=f({__name:"nodes",setup(p){const c=d([]),s=d(!1),v=async()=>{const n=await y();c.value=n},x=n=>{B.push({name:"PVENode-Resources",params:{node:n}})};return h(()=>{v()}),(n,u)=>(r(),i(F,null,{default:e(()=>[t(m,null,{default:e(()=>[H]),_:1}),t(m,{justify:"center"},{default:e(()=>[(r(!0),C(g,null,w(c.value,o=>(r(),i(D,{cols:"6",xs:"12",sm:"12",md:"6",lg:"6",xl:"4",xxl:"4"},{default:e(()=>[t(E,{color:"orange",variant:"flat",class:"mx-auto"},{default:e(()=>[t(I,null,{default:e(()=>[a("div",null,[a("div",M," 節點名稱 "+l(o.name),1),a("div",P," 在線狀態 "+l(o.status),1),a("div",S," 核心數量 "+l(o.maxCpu)+" 記憶體容量 "+l(o.maxMemory/1024/1024/1e3),1)])]),_:2},1024),t(R,null,{default:e(()=>[t(_,{icon:s.value?"mdi-chevron-up":"mdi-chevron-down",onClick:u[0]||(u[0]=V=>s.value=!s.value)},null,8,["icon"])]),_:1}),t($,null,{default:e(()=>[N(a("div",null,[t(A),t(_,{color:"deep-orange-lighten-4",text:"Reserve",block:"",border:"",onClick:V=>x(o.name)},{default:e(()=>[k(" 取得節點更多資訊 ")]),_:2},1032,["onClick"])],512),[[b,s.value]])]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}))}}),O=f({__name:"NodesView",setup(p){return(c,s)=>(r(),i(T))}});export{O as default};
