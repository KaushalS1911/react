import{r,D as f,d as V,j as e,Q as z,E as a,T as g,F as y,S as L,B as q,G as C,J as S,K as N,N as O,H as U}from"./index-vuQvxRF2.js";import{F as A}from"./form-provider-GIR-cDeR.js";import{R as o,L as H}from"./rhf-text-field-zMYbL9Ji.js";import{G as d,R as m}from"./rhf-autocomplete-a7csFN2R.js";function _({vendorCode:c,vendorContact:i}){const[s,p]=r.useState(),[u,x]=r.useState([]),h=()=>C.success("User details updated successfully"),B=()=>C.error("Something went wrong"),[n,v]=r.useState(!0);r.useEffect(()=>{F(),I()},[i]);function F(){i&&f.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080//nccf/csp_detail/${i}`).then(t=>{var l;p((l=t==null?void 0:t.data)==null?void 0:l.data[0])}).catch(t=>console.log(t))}function I(){f.get("http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/commodity").then(t=>{var l;x((l=t.data)==null?void 0:l.data)})}const b=V({defaultValues:{address:"",commodity:"",contact_person:"",district:"",gst_number:"",milling_type:"",name:"",pan_number:"",phone_number:i,pincode:"",quantity:"",state:"",village:""}}),{reset:j,handleSubmit:T,formState:{isSubmitting:W}}=b;r.useEffect(()=>{s&&j({address:s.address||"",commodity:s.commodity||"",contact_person:s.contact_person||"",district:s.district||"",gst_number:s.gst_number||"",milling_type:s.milling_type||"",name:s.name||"",pan_number:s.pan_number||"",phone_number:i,pincode:s.pincode||"",quantity:s.quantity||"",state:s.state||"",village:s.village||""})},[s,j,i]);const P=["Dry","Wet","Both"],R=["Gujarat","Delhi","Punjab"],w=["Amreli","Surendranagar","Dhrol"],E=["Surat","Bharuch","Rohini"],G=T(async t=>{const l={...t,vendor_code:c,mode:"test"};f.put("http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/update_info",l).then(D=>{h()}).catch(D=>{B()})});return e.jsx(e.Fragment,{children:e.jsxs(A,{methods:b,onSubmit:G,children:[e.jsx(z,{}),e.jsxs(d,{container:!0,children:[e.jsx(d,{item:!0,md:4,children:e.jsx(a,{sx:{ml:{md:"60px",xs:"0"},mt:"60px"},children:e.jsxs(a,{sx:{mb:"30px",mt:"10px",fontWeight:"600",fontSize:"18px"},children:["Basic Information",e.jsx(g,{sx:{fontSize:"13px",color:"#637381"},children:"Basic Information Input fields"})]})})}),e.jsx(d,{md:8,xs:12,item:!0,children:e.jsx(y,{sx:{p:3},children:e.jsxs(a,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:[e.jsx(o,{name:"name",label:"Full Name",disabled:n}),e.jsx(m,{name:"milling_type",type:"milling_type",label:"Milling Type",placeholder:"Choose Milling Type",fullWidth:!0,options:P.map(t=>t),getOptionLabel:t=>t,disabled:n}),e.jsx(m,{disabled:n,name:"commodity",type:"commodity",label:"Commodity",placeholder:"Choose Commodity",fullWidth:!0,options:u.map(t=>t==null?void 0:t.commodity_name),getOptionLabel:t=>t}),e.jsx(o,{name:"quantity",label:"Quantity",disabled:n}),e.jsx(o,{name:"contact_person",label:"Contact Person",disabled:n}),e.jsx(o,{name:"phone_number",label:"Phone Number",disabled:n}),e.jsx(o,{name:"pan_number",label:"Pan Number",disabled:n}),e.jsx(o,{name:"gst_number",label:"GST Number",disabled:n})]})})})]}),e.jsxs(d,{container:!0,sx:{mt:"80px"},children:[e.jsx(d,{item:!0,md:4,children:e.jsx(a,{sx:{ml:{md:"60px",xs:"0"},mt:"60px"},children:e.jsxs(a,{sx:{mb:"30px",mt:"10px",fontWeight:"600",fontSize:"18px"},children:["Address of Proposed Rice Mill Premises",e.jsx(g,{sx:{fontSize:"13px",color:"#637381"},children:"Basic Information Input fields"})]})})}),e.jsx(d,{md:8,xs:12,item:!0,children:e.jsx(y,{sx:{p:3},children:e.jsxs(a,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(4, 1fr)"},children:[e.jsx(a,{gridColumn:{xs:"span 1",sm:"span 2",md:"span 4"},children:e.jsx(o,{name:"address",label:"Address",fullWidth:!0,disabled:n})}),e.jsx(a,{gridColumn:{xs:"span 1",sm:"span 1",md:"span 2"},children:e.jsx(m,{name:"district",type:"district",label:"District",placeholder:"Choose District",fullWidth:!0,options:w.map(t=>t),getOptionLabel:t=>t,disabled:n})}),e.jsx(a,{gridColumn:{xs:"span 1",sm:"span 1",md:"span 2"},children:e.jsx(m,{name:"state",type:"state",label:"State",placeholder:"Choose Your State",fullWidth:!0,options:R.map(t=>t),getOptionLabel:t=>t,disabled:n})}),e.jsx(a,{gridColumn:{xs:"span 1",sm:"span 1",md:"span 2"},children:e.jsx(o,{name:"pincode",label:"Pin Code",fullWidth:!0,disabled:n})}),e.jsx(a,{gridColumn:{xs:"span 1",sm:"span 1",md:"span 2"},children:e.jsx(m,{disabled:n,name:"village",type:"village",label:"Village",placeholder:"Choose Your Village",fullWidth:!0,options:E.map(t=>t),getOptionLabel:t=>t})})]})})})]}),e.jsx(L,{display:"flex",alignItems:"flex-end",sx:{mt:3},children:e.jsxs(a,{children:[e.jsx(q,{color:"inherit",variant:"outlined",sx:{mr:"20px"},onClick:()=>v(!1),children:"Edit"}),e.jsx(H,{type:"submit",loading:W,variant:"contained",children:"Save"})]})})]})})}_.propTypes={vendorCode:S.string.isRequired,vendorContact:S.string.isRequired};function M(){const c=N(),[i,s]=r.useState(""),[p,u]=r.useState(""),x=sessionStorage.getItem("vendor"),h=sessionStorage.getItem("phone_number");return r.useEffect(()=>{s(x||""),u(h||"")},[]),e.jsxs(O,{maxWidth:c.themeStretch?!1:"xl",children:[e.jsx(g,{variant:"h4",children:" Basic Information"}),e.jsx(a,{sx:{mt:5,width:1,height:320,borderRadius:2},children:e.jsx(_,{vendorCode:i,vendorContact:p})})]})}function $(){return e.jsxs(e.Fragment,{children:[e.jsx(U,{children:e.jsx("title",{children:" Dashboard: Basic Information"})}),e.jsx(M,{})]})}export{$ as default};
