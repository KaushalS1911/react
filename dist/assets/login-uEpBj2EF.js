import{u as S,a as F,r as P,b as T,c as A,d as E,e as I,j as e,S as n,T as d,L as l,R,p as H,I as M,f as k,H as q}from"./index-zNNAjVFm.js";import{c as B,a as c,A as m,o as C}from"./yup-z7if_bQW.js";import{F as J,R as u,L as N}from"./rhf-text-field-TloV9bwD.js";import{M as U}from"./InputAdornment-0u_C9uNg.js";function V(){const{login:r}=S(),h=F(),[o,x]=P.useState(""),p=T().get("returnTo"),a=A(),g=B().shape({email:c().required("Email is required").email("Email must be a valid email address"),password:c().required("Password is required")}),j={email:"demo@minimals.cc",password:"demo1234"},t=E({resolver:C(g),defaultValues:j}),{reset:w,handleSubmit:f,formState:{isSubmitting:b}}=t,y=f(async i=>{try{await(r==null?void 0:r(i.email,i.password)),h.push(p||I)}catch(s){console.error(s),w(),x(typeof s=="string"?s:s.message)}}),v=e.jsxs(n,{spacing:2,sx:{mb:5},children:[e.jsx(d,{variant:"h4",children:"Sign in to Minimal"}),e.jsxs(n,{direction:"row",spacing:.5,children:[e.jsx(d,{variant:"body2",children:"New user?"}),e.jsx(l,{component:R,href:H.auth.jwt.register,variant:"subtitle2",children:"Create an account"})]})]}),L=e.jsxs(n,{spacing:2.5,children:[e.jsx(u,{name:"email",label:"Email address"}),e.jsx(u,{name:"password",label:"Password",type:a.value?"text":"password",InputProps:{endAdornment:e.jsx(U,{position:"end",children:e.jsx(M,{onClick:a.onToggle,edge:"end",children:e.jsx(k,{icon:a.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(l,{variant:"body2",color:"inherit",underline:"always",sx:{alignSelf:"flex-end"},children:"Forgot password?"}),e.jsx(N,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:b,children:"Login"})]});return e.jsxs(e.Fragment,{children:[v,e.jsxs(m,{severity:"info",sx:{mb:3},children:["Use email : ",e.jsx("strong",{children:"demo@minimals.cc"})," / password :",e.jsx("strong",{children:" demo1234"})]}),!!o&&e.jsx(m,{severity:"error",sx:{mb:3},children:o}),e.jsx(J,{methods:t,onSubmit:y,children:L})]})}function W(){return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:e.jsx("title",{children:" Jwt: Login"})}),e.jsx(V,{})]})}export{W as default};
