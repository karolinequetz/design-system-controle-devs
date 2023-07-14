import{j as t}from"./jsx-runtime-22cb1b0a.js";import{r as C}from"./index-a65cde12.js";import{l as h}from"./index-80f56e80.js";import"./_commonjsHelpers-87174ba5.js";import"./isNativeReflectConstruct-19131cd8.js";import"./index-55fdadea.js";const w={title:"Components/MultiSelect",component:h},n=[{value:"1",label:"React Js"},{value:"2",label:"React Native"},{value:"3",label:"Angular"},{value:"4",label:"C#"}],e={args:{options:n,placeholder:"Selecione as opções",closeMenuOnSelect:!0,hideSelectedOptions:!0,onChange:()=>console.log("itens selecionados")}},o={args:{checkbox:!0,options:n,placeholder:"Selecione as opções",closeMenuOnSelect:!1,hideSelectedOptions:!1,onChange:()=>console.log("itens selecionados")}},s=()=>{const[g,x]=C.useState([]),k=(a,b)=>{if(Array.isArray(a)){const f=a.map(O=>O.label);x(f)}};return t.jsxs("div",{children:[t.jsx(h,{checkbox:!0,options:n,placeholder:"Selecione...",onChange:k}),t.jsx("div",{className:"dark:text-white",children:JSON.stringify(g)})]})};var l,r,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    options: skills,
    placeholder: 'Selecione as opções',
    closeMenuOnSelect: true,
    hideSelectedOptions: true,
    onChange: () => console.log('itens selecionados')
  }
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var c,p,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    checkbox: true,
    options: skills,
    placeholder: 'Selecione as opções',
    closeMenuOnSelect: false,
    hideSelectedOptions: false,
    onChange: () => console.log('itens selecionados')
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,S,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [state, setState] = useState<string[]>([]);
  const onChangeHardSkills = (newValue: MultiValue<Options> | SingleValue<Options>, actionMeta: ActionMeta<Options>) => {
    if (Array.isArray(newValue)) {
      const options = newValue.map(option => option.label);
      setState(options);
    }
  };
  return <div>
      <MultiSelect checkbox={true} options={skills} placeholder="Selecione..." onChange={onChangeHardSkills} />

      <div className="dark:text-white">{JSON.stringify(state)}</div>
    </div>;
}`,...(m=(S=s.parameters)==null?void 0:S.docs)==null?void 0:m.source}}};const V=["Primary","Checkbox","Default"];export{o as Checkbox,s as Default,e as Primary,V as __namedExportsOrder,w as default};
//# sourceMappingURL=MultiSelect.stories-de4c6db6.js.map
