import{u as S,a as F,r as P,b as T,c as A,d as E,e as I,j as e,S as o,T as d,L as l,R,p as H,I as M,f as k,H as q}from"./index-rASeH_eV.js";import{c as B,a as c,A as m,o as C}from"./yup-NtJUOY7g.js";import{F as J}from"./form-provider-JHl3Tohf.js";import{R as u,M as N}from"./rhf-text-field-wwGCjwiN.js";import{L as U}from"./LoadingButton-rGoJ8b66.js";function V(){const{login:r}=S(),h=F(),[n,x]=P.useState(""),p=T().get("returnTo"),a=A(),g=B().shape({email:c().required("Email is required").email("Email must be a valid email address"),password:c().required("Password is required")}),j={email:"demo@minimals.cc",password:"demo1234"},t=E({resolver:C(g),defaultValues:j}),{reset:f,handleSubmit:w,formState:{isSubmitting:b}}=t,y=w(async i=>{try{await(r==null?void 0:r(i.email,i.password)),h.push(p||I)}catch(s){console.error(s),f(),x(typeof s=="string"?s:s.message)}}),v=e.jsxs(o,{spacing:2,sx:{mb:5},children:[e.jsx(d,{variant:"h4",children:"Sign in to Minimal"}),e.jsxs(o,{direction:"row",spacing:.5,children:[e.jsx(d,{variant:"body2",children:"New user?"}),e.jsx(l,{component:R,href:H.auth.jwt.register,variant:"subtitle2",children:"Create an account"})]})]}),L=e.jsxs(o,{spacing:2.5,children:[e.jsx(u,{name:"email",label:"Email address"}),e.jsx(u,{name:"password",label:"Password",type:a.value?"text":"password",InputProps:{endAdornment:e.jsx(N,{position:"end",children:e.jsx(M,{onClick:a.onToggle,edge:"end",children:e.jsx(k,{icon:a.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(l,{variant:"body2",color:"inherit",underline:"always",sx:{alignSelf:"flex-end"},children:"Forgot password?"}),e.jsx(U,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:b,children:"Login"})]});return e.jsxs(e.Fragment,{children:[v,e.jsxs(m,{severity:"info",sx:{mb:3},children:["Use email : ",e.jsx("strong",{children:"demo@minimals.cc"})," / password :",e.jsx("strong",{children:" demo1234"})]}),!!n&&e.jsx(m,{severity:"error",sx:{mb:3},children:n}),e.jsx(J,{methods:t,onSubmit:y,children:L})]})}function D(){return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:e.jsx("title",{children:" Jwt: Login"})}),e.jsx(V,{})]})}export{D as default};
