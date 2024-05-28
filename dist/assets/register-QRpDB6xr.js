import{u as P,a as R,r as S,b as T,c as A,d as N,e as q,j as e,S as a,T as l,L as c,p as I,R as L,I as E,f as H,H as k}from"./index-zNNAjVFm.js";import{c as B,a as t,A as M,o as C}from"./yup-z7if_bQW.js";import{F as G,R as n,L as J}from"./rhf-text-field-TloV9bwD.js";import{M as V}from"./InputAdornment-0u_C9uNg.js";function _(){const{register:i}=P(),u=R(),[d,x]=S.useState(""),p=T().get("returnTo"),o=A(),h=B().shape({firstName:t().required("First name required"),lastName:t().required("Last name required"),email:t().required("Email is required").email("Email must be a valid email address"),password:t().required("Password is required")}),g={firstName:"",lastName:"",email:"",password:""},m=N({resolver:C(h),defaultValues:g}),{reset:j,handleSubmit:y,formState:{isSubmitting:f}}=m,w=y(async s=>{try{await(i==null?void 0:i(s.email,s.password,s.firstName,s.lastName)),u.push(p||q)}catch(r){console.error(r),j(),x(typeof r=="string"?r:r.message)}}),b=e.jsxs(a,{spacing:2,sx:{mb:5,position:"relative"},children:[e.jsx(l,{variant:"h4",children:"Get started absolutely free"}),e.jsxs(a,{direction:"row",spacing:.5,children:[e.jsx(l,{variant:"body2",children:" Already have an account? "}),e.jsx(c,{href:I.auth.jwt.login,component:L,variant:"subtitle2",children:"Sign in"})]})]}),v=e.jsxs(l,{component:"div",sx:{mt:2.5,textAlign:"center",typography:"caption",color:"text.secondary"},children:["By signing up, I agree to ",e.jsx(c,{underline:"always",color:"text.primary",children:"Terms of Service"})," and ",e.jsx(c,{underline:"always",color:"text.primary",children:"Privacy Policy"}),"."]}),F=e.jsxs(a,{spacing:2.5,children:[e.jsxs(a,{direction:{xs:"column",sm:"row"},spacing:2,children:[e.jsx(n,{name:"firstName",label:"First name"}),e.jsx(n,{name:"lastName",label:"Last name"})]}),e.jsx(n,{name:"email",label:"Email address"}),e.jsx(n,{name:"password",label:"Password",type:o.value?"text":"password",InputProps:{endAdornment:e.jsx(V,{position:"end",children:e.jsx(E,{onClick:o.onToggle,edge:"end",children:e.jsx(H,{icon:o.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(J,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:f,children:"Create account"})]});return e.jsxs(e.Fragment,{children:[b,!!d&&e.jsx(M,{severity:"error",sx:{m:3},children:d}),e.jsx(G,{methods:m,onSubmit:w,children:F}),v]})}function D(){return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsx("title",{children:" Jwt: Register"})}),e.jsx(_,{})]})}export{D as default};
