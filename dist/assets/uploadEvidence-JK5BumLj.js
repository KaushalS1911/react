import{K as I,r,d as M,D as G,j as e,Q as P,N as Y,T as p,E as g,O as z,U as W,V as H,W as K,X as N,Y as m,S as i,B as f,f as Q,G as v,F as y,H as X}from"./index-5o9WXTY6.js";import{F as q}from"./form-provider-b6VFPgtU.js";import{U as b}from"./upload-avatar-S6hfQo8H.js";import"./format-number-l6fG-rPO.js";import"./transition-Uc7vb3zK.js";function J(){const U=I(),[u,F]=r.useState(""),[_,C]=r.useState(""),[l,a]=r.useState([]),D=()=>v.success("Your Document Uploaded"),h=()=>v.error("Failed to Upload"),S=r.useMemo(()=>({doc_type:""}),[]),x=M({defaultValues:S}),{handleSubmit:w,control:R}=x,k=sessionStorage.getItem("vendor");r.useEffect(()=>{C(k||"")},[]);const c=w(async n=>{const t=l.map((s,d)=>{if(s){const o=new FormData;return o.append("doc_type",n.doc_type),o.append("vendor_code",_),o.append("file",s),o}return null}).filter(s=>s!==null);try{(await Promise.all(t.map(o=>G.post("http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/upload_document",o,{headers:{"Content-Type":"multipart/form-data"}})))).every(o=>o.data.status==="201")?D():h()}catch(s){console.error("Error submitting form:",s),h()}}),E=[{label:"Milling Unit Photo",key:"milling_unit_photo"},{label:"Milling Unit Video",key:"milling_unit_video"}],T=r.useCallback(n=>t=>{const s=t[0];s&&a(d=>{const o=[...d];return o[n]=Object.assign(s,{preview:URL.createObjectURL(s)}),o})},[]),L=n=>e.jsx(y,{children:e.jsx(i,{spacing:3,sx:{p:3},children:e.jsxs(i,{spacing:1.5,children:[e.jsx(p,{variant:"subtitle2",children:"Upload Your Document"}),e.jsx(b,{accept:{"image/jpeg":[],"image/jpg":[],"image/png":[]},file:l[n],onDrop:T(n),onDelete:()=>a(t=>{const s=[...t];return s[n]=null,s})})]})})},n),O=r.useCallback(n=>{a([...n.map(t=>Object.assign(t,{preview:URL.createObjectURL(t)}))])},[l]),V=n=>{const t=l.filter(s=>s!==n);a(t)},j=()=>{a([])},A=n=>e.jsx(y,{children:e.jsx(i,{spacing:3,sx:{p:3},children:e.jsxs(i,{spacing:1.5,children:[e.jsx(p,{variant:"subtitle2",children:"Upload Your Document"}),e.jsx(b,{accept:{"video/mp4":[],"video/avi":[],"video/mkv":[],"video/mov":[]},multiple:!0,thumbnail:!0,files:l,onDrop:O,onRemove:V,onRemoveAll:j,onUpload:c})]})})},n);function B(){switch(u){case"milling_unit_photo":return e.jsx(e.Fragment,{children:Array.from({length:5}).map((n,t)=>e.jsx(m,{item:!0,xs:12,sm:6,md:4,children:L(t)},t))});case"milling_unit_video":return Array.from({length:1}).map((n,t)=>e.jsx(m,{item:!0,xs:12,sm:6,md:4,children:A(t)},t));default:return null}}return e.jsxs(e.Fragment,{children:[e.jsx(P,{}),e.jsxs(Y,{maxWidth:U.themeStretch?!1:"xl",children:[e.jsx(p,{variant:"h4",children:"Evidence"}),e.jsx(g,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)"},sx:{mt:"40px"},children:e.jsx(z,{name:"doc_type",control:R,render:({field:n})=>e.jsxs(W,{fullWidth:!0,children:[e.jsx(H,{children:"Document Type"}),e.jsx(K,{...n,label:"Document Type",onChange:t=>{n.onChange(t),a([]),F(t.target.value)},children:E.map(t=>e.jsx(N,{value:t.key,children:t.label},t.key))})]})})}),e.jsx(g,{sx:{mt:5,width:1,borderRadius:2},children:e.jsxs(q,{methods:x,onSubmit:c,children:[e.jsx(m,{container:!0,spacing:5,children:B()}),u=="milling_unit_photo"&&e.jsxs(i,{direction:"row",justifyContent:"flex-end",spacing:1.5,children:[e.jsx(f,{color:"inherit",variant:"outlined",size:"small",onClick:j,children:"Remove All"}),e.jsx(f,{size:"small",variant:"contained",onClick:c,startIcon:e.jsx(Q,{icon:"eva:cloud-upload-fill"}),children:"Save"})]})]})})]})]})}function se(){return e.jsxs(e.Fragment,{children:[e.jsx(X,{children:e.jsx("title",{children:" Dashboard | Upload Evidence"})}),e.jsx(J,{})]})}export{se as default};