import{j as t}from"./jsx-runtime-22cb1b0a.js";import{T as e,B as o,t as r,o as y}from"./index-80f56e80.js";import"./index-a65cde12.js";import"./_commonjsHelpers-87174ba5.js";import"./isNativeReflectConstruct-19131cd8.js";import"./index-55fdadea.js";const _={title:"Components/Toast",component:e},a=()=>{const s=()=>{r({title:"Informação!",description:"Atualize seus dados"})};return t.jsxs(t.Fragment,{children:[t.jsx(e,{}),t.jsx(o,{type:"submit",text:"Toast",onClick:s})]})},n=()=>{const s=()=>{r({title:"Action",description:"Houve um problema",action:t.jsx(y,{altText:"Tente novamente",children:"Tente novamente"})})};return t.jsxs(t.Fragment,{children:[t.jsx(e,{}),t.jsx(o,{type:"submit",text:"Toast",onClick:s})]})},c=()=>{const s=()=>{r.success({title:"Sucesso!",description:"Usuário cadastrado com sucesso",classNameContent:"flex flex-row gap-1 pl-2",className:"p-4"})};return t.jsxs(t.Fragment,{children:[t.jsx(e,{}),t.jsx(o,{type:"submit",text:"Toast",onClick:s})]})},i=()=>{const s=()=>{r.error({title:"Erro!",description:"Erro ao cadastrar usuário",classNameContent:"flex flex-row gap-1 pl-2",className:"p-4"})};return t.jsxs(t.Fragment,{children:[t.jsx(e,{}),t.jsx(o,{type:"submit",text:"Toast",onClick:s})]})},l=()=>{const s=()=>{r.warning({title:"Atenção!",description:"Preencha todos os campos",classNameContent:"flex flex-row gap-1 pl-2",className:"p-4"})};return t.jsxs(t.Fragment,{children:[t.jsx(e,{}),t.jsx(o,{type:"submit",text:"Toast",onClick:s})]})};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const onClick = () => {
    toast({
      title: 'Informação!',
      description: 'Atualize seus dados'
    });
  };
  return <>
      <Toaster />
      <Button type="submit" text="Toast" onClick={onClick}></Button>
    </>;
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,x,T;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const onClick = () => {
    toast({
      title: 'Action',
      description: 'Houve um problema',
      action: <ToastAction altText="Tente novamente">Tente novamente</ToastAction>
    });
  };
  return <>
      <Toaster />
      <Button type="submit" text="Toast" onClick={onClick}></Button>
    </>;
}`,...(T=(x=n.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var C,g,k;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const onClick = () => {
    toast.success({
      title: 'Sucesso!',
      description: 'Usuário cadastrado com sucesso',
      classNameContent: 'flex flex-row gap-1 pl-2',
      className: 'p-4'
    });
  };
  return <>
      <Toaster />
      <Button type="submit" text="Toast" onClick={onClick}></Button>
    </>;
}`,...(k=(g=c.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var f,j,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const onClick = () => {
    toast.error({
      title: 'Erro!',
      description: 'Erro ao cadastrar usuário',
      classNameContent: 'flex flex-row gap-1 pl-2',
      className: 'p-4'
    });
  };
  return <>
      <Toaster />
      <Button type="submit" text="Toast" onClick={onClick}></Button>
    </>;
}`,...(b=(j=i.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var B,N,A;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const onClick = () => {
    toast.warning({
      title: 'Atenção!',
      description: 'Preencha todos os campos',
      classNameContent: 'flex flex-row gap-1 pl-2',
      className: 'p-4'
    });
  };
  return <>
      <Toaster />
      <Button type="submit" text="Toast" onClick={onClick}></Button>
    </>;
}`,...(A=(N=l.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const z=["Default","Action","Success","Error","Warning"];export{n as Action,a as Default,i as Error,c as Success,l as Warning,z as __namedExportsOrder,_ as default};
//# sourceMappingURL=Toast.stories-8bc38d2b.js.map
