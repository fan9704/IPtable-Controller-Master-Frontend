import{g as P,p as I,s as _,r as k}from"./index-DnT7Il3i.js";import{y as w,x as n,v as a,A as r,V as p,C as b}from"./vuetify-B0GRDPT8.js";import{g as C,d as x,x as N,V as U,W as t,U as g,m as o,O as i,_ as y}from"./vue-CXMZrBii.js";/* empty css                            */const B=y("h1",null,"修改網路規則",-1),A=C({__name:"NetworkEditView",props:{id:{type:String,required:!0}},setup(m){const d=m,l=x({outputIp:"",outputPort:"",inputIp:"",inputPort:"",protocol:"",note:""}),c=async s=>{const e=await P(s);l.value=e},f=()=>{l.value={outputIp:"",outputPort:"",inputIp:"",inputPort:"",protocol:"",note:""}},V=async()=>{const s={outputIp:l.value.outputIp,outputPort:l.value.outputPort,inputIp:l.value.inputIp,inputPort:l.value.inputPort,protocol:l.value.protocol,note:l.value.note},e=await I(d.id,s);l.value=e,_.fire("修改成功","網路規則資料已經同步更新","success")},v=()=>{k.push("/network")};return N(()=>{d.id!=null&&c(d.id)}),(s,e)=>(g(),U(w,{id:"part-edit-form-shell"},{default:t(()=>[o(b,{id:"part-edit-form"},{default:t(()=>[o(n,null,{default:t(()=>[o(a,{cols:"12"},{default:t(()=>[B]),_:1})]),_:1}),o(n,null,{default:t(()=>[o(a,{cols:"2"},{default:t(()=>[o(r,{modelValue:l.value.outputIp,"onUpdate:modelValue":e[0]||(e[0]=u=>l.value.outputIp=u),label:"對外 IP"},null,8,["modelValue"])]),_:1}),o(a,{cols:"2"},{default:t(()=>[o(r,{modelValue:l.value.outputPort,"onUpdate:modelValue":e[1]||(e[1]=u=>l.value.outputPort=u),label:"對外 Port"},null,8,["modelValue"])]),_:1}),o(a,{cols:"2"},{default:t(()=>[o(r,{modelValue:l.value.inputIp,"onUpdate:modelValue":e[2]||(e[2]=u=>l.value.inputIp=u),label:"對內 IP"},null,8,["modelValue"])]),_:1}),o(a,{cols:"2"},{default:t(()=>[o(r,{modelValue:l.value.inputPort,"onUpdate:modelValue":e[3]||(e[3]=u=>l.value.inputPort=u),label:"對內 Port"},null,8,["modelValue"])]),_:1}),o(a,{cols:"2"},{default:t(()=>[o(r,{modelValue:l.value.protocol,"onUpdate:modelValue":e[4]||(e[4]=u=>l.value.protocol=u),label:"通訊協定"},null,8,["modelValue"])]),_:1}),o(a,{cols:"2"},{default:t(()=>[o(r,{modelValue:l.value.note,"onUpdate:modelValue":e[5]||(e[5]=u=>l.value.note=u),label:"描述"},null,8,["modelValue"])]),_:1})]),_:1}),o(n,null,{default:t(()=>[o(a,{cols:"4"},{default:t(()=>[o(p,{class:"mt-4",color:"success",block:"",onClick:V},{default:t(()=>[i(" 提交 ")]),_:1})]),_:1}),o(a,{cols:"4"},{default:t(()=>[o(p,{class:"mt-4",color:"error",block:"",onClick:f},{default:t(()=>[i(" 重新填寫 ")]),_:1})]),_:1}),o(a,{cols:"4"},{default:t(()=>[o(p,{class:"mt-4",block:"",color:"info",onClick:v},{default:t(()=>[i(" 返回網路規則列表 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{A as default};
