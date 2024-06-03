import{r as o,K as O,D as x,d as w,j as e,Q as T,N as v,E as n,T as E,F as G,S as i,G as p,J as R,H as z}from"./index-5o9WXTY6.js";import{F as H}from"./form-provider-b6VFPgtU.js";import{R as P,L as _}from"./rhf-text-field-QtIKcBfK.js";import{R as B}from"./rhf-autocomplete-tHJtD5LG.js";import{G as d}from"./Grid2-L9oLr7zE.js";function u(){const[c,h]=o.useState(""),[f,j]=o.useState([]),g=O(),y=()=>p.success("Order created"),m=t=>p.error(t),C=sessionStorage.getItem("vendor");o.useEffect(()=>{h(C||""),S()},[]);function S(){x.get("http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/commodity").then(t=>{var r;j((r=t.data)==null?void 0:r.data)})}const b=o.useMemo(()=>({vendor_code:c,commodity:"",quantity:""}),[]),a=w({defaultValues:b}),{handleSubmit:F}=a,l=F(async t=>{const r={...t,vendor_code:c,mode:"test",status:"0"};try{const s=await x.post("http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/create_order",r);s.data.status=="201"?y():s.data.status=="400"&&m(s.data.message)}catch(s){m("Something went wrong"),console.error("Order creation error:",s)}});return e.jsxs(e.Fragment,{children:[e.jsx(T,{}),e.jsx(v,{maxWidth:g.themeStretch?!1:"xl",children:e.jsx(H,{methods:a,onSubmit:l,children:e.jsxs(d,{container:!0,sx:{mt:"30px"},children:[e.jsx(d,{item:!0,md:4,children:e.jsx(n,{sx:{ml:{md:"60px",xs:"0"},mt:"60px"},children:e.jsxs(n,{sx:{mb:"30px",fontWeight:"600",fontSize:"18px"},children:["Create Order",e.jsx(E,{sx:{fontSize:"13px",color:"#637381"},children:"Create Order Input fields"})]})})}),e.jsxs(d,{item:!0,md:8,children:[e.jsx(G,{children:e.jsx(i,{spacing:3,sx:{p:3},children:e.jsx(i,{spacing:1.5,children:e.jsxs(n,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(B,{name:"commodity",type:"commodity",label:"Commodity",placeholder:"Choose Commodity",fullWidth:!0,options:f.map(t=>t==null?void 0:t.commodity_name),getOptionLabel:t=>t}),e.jsx(P,{name:"quantity",label:"Quantity"})]})})})}),e.jsx(i,{alignItems:"flex-end",sx:{mt:3},children:e.jsx(_,{type:"submit",className:"button",loading:a.formState.isSubmitting,onClick:l,children:"Order"})})]})]})})})]})}u.propTypes={currentUser:R.object};function k(){return e.jsxs(e.Fragment,{children:[e.jsx(z,{children:e.jsx("title",{children:" Dashboard | Place Order"})}),e.jsx(u,{})]})}export{k as default};
