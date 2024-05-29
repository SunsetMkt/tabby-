"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8428],{98428:function(e,n,l){l.d(n,{e:function(){return eh},p:function(){return ev}});var t=l(36164),s=l(3546),r=l(54549),a=l(24449),i=l(16784),o=l(63484),c=l(74248),d=l(90379),u=l(31458),m=l(81565),v=l(62940);function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,[l,t]=s.useState(!1);return s.useEffect(()=>{if(n)return;let l=(0,v.Z)(()=>{t(window.innerHeight+window.scrollY>=document.body.offsetHeight-e)},100,{leading:!0});return window.addEventListener("scroll",l,{passive:!0}),window.addEventListener("resize",l,{passive:!0}),l(),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}},[e,n]),s.useEffect(()=>{if(!n)return;let l=(0,v.Z)(()=>{let{scrollTop:l,clientHeight:s,scrollHeight:r}=n;t(l+s>=r-e)},100,{leading:!0});return n.addEventListener("scroll",l,{passive:!0}),n.addEventListener("resize",l,{passive:!0}),l(),()=>{n.removeEventListener("scroll",l),n.removeEventListener("resize",l)}},[e,n]),l}function x(e){let{className:n,container:l,offset:s,...r}=e,a=h(s||0,l);return(0,t.jsxs)(u.z,{variant:"outline",size:"icon",className:(0,c.cn)("absolute right-4 top-1 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2",a?"opacity-0":"opacity-100",n),onClick:()=>{l?l.scrollTo({top:l.scrollHeight,behavior:"smooth"}):window.scrollTo({top:document.body.offsetHeight,behavior:"smooth"})},...r,children:[(0,t.jsx)(m.IconArrowDown,{}),(0,t.jsx)("span",{className:"sr-only",children:"Scroll to bottom"})]})}var f=l(45391),p=l(34021),g=l(21454),j=l(3765),b=l(84942),w=l(29),N=l(95623);let y=s.forwardRef(function(e,n){let{onSubmit:l,input:r,setInput:a,isLoading:i}=e,{formRef:o,onKeyDown:d}=function(){let e=(0,s.useRef)(null);return{formRef:e,onKeyDown:n=>{if("Enter"===n.key&&!n.shiftKey&&!n.nativeEvent.isComposing){var l;null===(l=e.current)||void 0===l||l.requestSubmit(),n.preventDefault()}}}}(),[v,h]=s.useState(null),[x,y]=s.useState(!1),E=s.useRef(null),S=s.useRef(),R=s.useRef(),[z,I]=s.useState([]),[L,_]=s.useState({}),{data:F}=(0,g.ZP)(v,j.Z,{revalidateOnFocus:!1,dedupingInterval:0,errorRetryCount:0});s.useEffect(()=>{var e;let n=null!==(e=null==F?void 0:F.hits)&&void 0!==e?e:[];I(n),y(!!(null==n?void 0:n.length))},[null==F?void 0:F.hits]),s.useImperativeHandle(n,()=>({focus:()=>{var e;null===(e=E.current)||void 0===e||e.focus()}})),s.useEffect(()=>{r&&E.current&&E.current!==document.activeElement&&E.current.focus()},[r]),s.useLayoutEffect(()=>{var e,n,l;(null===(e=R.current)||void 0===e?void 0:e.length)&&(null===(l=E.current)||void 0===l||null===(n=l.setSelectionRange)||void 0===n||n.call(l,R.current[0],R.current[1]),R.current=void 0)}),s.useMemo(()=>(0,f.Z)(e=>{var n,l,t,s;let r=null!==(t=null===(n=e.target)||void 0===n?void 0:n.value)&&void 0!==t?t:"",a=null!==(s=null===(l=e.target)||void 0===l?void 0:l.selectionEnd)&&void 0!==s?s:0,i=k(r,a),o=null==i?void 0:i[1];if(o){let e=encodeURIComponent("name:".concat(o," AND kind:function")),n="/v1beta/search?q=".concat(e);h(n)}else I([]),y(!1)},200),[]);let D=async e=>{if(e.preventDefault(),!(null==r?void 0:r.trim())||i)return;let n=r;Object.keys(L).forEach(e=>{var l,t,s;let r=L[e];(null==r?void 0:r.doc)&&(n=n.replaceAll(e,"\n```".concat(null!==(t=null===(l=r.doc)||void 0===l?void 0:l.language)&&void 0!==t?t:"","\n").concat(null!==(s=r.doc.body)&&void 0!==s?s:"","\n","```","\n")))}),a(""),await l(n)},Z=(e,n)=>{"Enter"===e.key&&n?e.preventDefault():n&&["ArrowRight","ArrowLeft","Home","End"].includes(e.key)?(I([]),y(!1)):(n||(e.preventDownshiftDefault=!0),d(e))};return(0,t.jsx)("form",{onSubmit:D,ref:o,children:(0,t.jsx)(N.Vc,{options:z,onSelect:e=>{var n,l,t;let s=null!==(n=S.current)&&void 0!==n?n:0,i=k(r,s);if(i){_({...L,["@".concat(null===(l=e.doc)||void 0===l?void 0:l.name)]:e});let n="@".concat(null==e?void 0:null===(t=e.doc)||void 0===t?void 0:t.name," "),o=r.substring(0,s).replace(new RegExp(i[0]),""),c=o.length+n.length;R.current=[c,c],a(o+n+r.slice(s))}I([]),y(!1)},open:x,onOpenChange:e=>{e&&(null==z?void 0:z.length)?y(e):(y(!1),I([]))},children:e=>{var n,l,s,o;let{open:d,highlightedIndex:v}=e,h=null==z?void 0:z[v];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(N.JH,{children:(0,t.jsxs)("div",{className:"relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12",children:[(0,t.jsx)("span",{className:(0,c.cn)((0,u.d)({size:"sm",variant:"ghost"}),"absolute left-0 top-4 h-8 w-8 rounded-full bg-background p-0 hover:bg-background sm:left-4"),children:(0,t.jsx)(m.IconEdit,{})}),(0,t.jsx)(N.rG,{tabIndex:0,rows:1,placeholder:"Ask a question.",spellCheck:!1,className:"min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none",value:r,ref:E,onChange:e=>{(0,p.Z)(e,"target.value")?(S.current=e.target.selectionEnd,a(e.target.value)):S.current=void 0},onKeyDown:e=>Z(e,d)}),(0,t.jsx)("div",{className:"absolute right-0 top-4 sm:right-4",children:(0,t.jsxs)(w.u,{children:[(0,t.jsx)(w.aJ,{asChild:!0,children:(0,t.jsxs)(u.z,{type:"submit",size:"icon",disabled:i||""===r,children:[(0,t.jsx)(m.IconArrowElbow,{}),(0,t.jsx)("span",{className:"sr-only",children:"Send message"})]})}),(0,t.jsx)(w._v,{children:"Send message"})]})})]})}),(0,t.jsx)(N.fD,{align:"start",side:"top",onOpenAutoFocus:e=>e.preventDefault(),className:"w-[60vw] md:w-[430px]",children:(0,t.jsxs)(b.J2,{open:d&&!!h,children:[(0,t.jsx)(b.tW,{asChild:!0,children:(0,t.jsx)("div",{className:"max-h-[300px] overflow-y-scroll",children:d&&!!(null==z?void 0:z.length)&&z.map((e,n)=>{var l,s,r;return(0,t.jsx)(N.x5,{item:e,index:n,children:(0,t.jsxs)("div",{className:"flex w-full items-center justify-between gap-8 overflow-x-hidden",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(C,{kind:null==e?void 0:null===(l=e.doc)||void 0===l?void 0:l.kind}),(0,t.jsxs)("div",{className:"max-w-[200px] truncate",children:[null==e?void 0:null===(s=e.doc)||void 0===s?void 0:s.name,"(...)"]})]}),(0,t.jsx)("div",{className:"flex-1 truncate text-right text-sm text-muted-foreground",children:null==e?void 0:null===(r=e.doc)||void 0===r?void 0:r.body})]})},null==e?void 0:e.id)})})}),(0,t.jsx)(b.yk,{asChild:!0,align:"start",side:"right",alignOffset:-4,onOpenAutoFocus:e=>e.preventDefault(),onKeyDownCapture:e=>e.preventDefault(),className:"rounded-none",collisionPadding:{bottom:120},children:(0,t.jsxs)("div",{className:"flex max-h-[70vh] w-[20vw] flex-col overflow-y-auto px-2 md:w-[240px] lg:w-[340px]",children:[(0,t.jsxs)("div",{className:"mb-2",children:[(null==h?void 0:null===(n=h.doc)||void 0===n?void 0:n.kind)?"(".concat(null==h?void 0:null===(l=h.doc)||void 0===l?void 0:l.kind,") "):"",null==h?void 0:null===(s=h.doc)||void 0===s?void 0:s.name]}),(0,t.jsx)("div",{className:"flex-1 whitespace-pre-wrap break-all text-muted-foreground",children:null==h?void 0:null===(o=h.doc)||void 0===o?void 0:o.body})]})})]})})]})}})})});function k(e,n){let l=e.substring(0,n),t=/@(\w+)$/.exec(l);return t}function C(e){let{kind:n,...l}=e;return(0,t.jsx)(m.IconSymbolFunction,{...l})}function E(e){let{href:n,children:l}=e;return(0,t.jsxs)("a",{href:n,target:"_blank",className:"inline-flex flex-1 justify-center gap-1 leading-4 hover:underline",children:[(0,t.jsx)("span",{children:l}),(0,t.jsx)("svg",{"aria-hidden":"true",height:"7",viewBox:"0 0 6 6",width:"7",className:"opacity-70",children:(0,t.jsx)("path",{d:"M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z",fill:"currentColor"})})]})}function S(e){let{className:n,...l}=e;return(0,t.jsxs)("p",{className:(0,c.cn)("px-2 text-center text-xs leading-normal text-muted-foreground",n),...l,children:[(0,t.jsx)(E,{href:"https://tabby.tabbyml.com",children:"Tabby"}),", an opensource, self-hosted AI coding assistant ."]})}function R(e){let{id:n,stop:l,reload:r,input:a,setInput:i,className:o,onSubmit:c,chatMaxWidthClass:d}=e,v=s.useRef(null),{container:h,onClearMessages:f,qaPairs:p,isLoading:g}=s.useContext(ev);return s.useEffect(()=>{var e;null==v||null===(e=v.current)||void 0===e||e.focus()},[n]),(0,t.jsxs)("div",{className:o,children:[(0,t.jsx)(x,{container:h}),(0,t.jsxs)("div",{className:"mx-auto md:px-4 ".concat(d),children:[(0,t.jsxs)("div",{className:"flex h-10 items-center justify-center gap-2",children:[g?(0,t.jsxs)(u.z,{variant:"outline",onClick:()=>l(),className:"bg-background",children:[(0,t.jsx)(m.IconStop,{className:"mr-2"}),"Stop generating"]}):(null==p?void 0:p.length)>0&&(0,t.jsxs)(u.z,{variant:"outline",onClick:()=>r(),className:"bg-background",children:[(0,t.jsx)(m.IconRefresh,{className:"mr-2"}),"Regenerate response"]}),(null==p?void 0:p.length)>0&&(0,t.jsxs)(u.z,{variant:"outline",onClick:f,className:"bg-background lg:hidden",children:[(0,t.jsx)(m.IconTrash,{className:"mr-2"}),"Clear"]})]}),(0,t.jsxs)("div",{className:"space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4",children:[(0,t.jsx)(y,{ref:v,onSubmit:c,input:a,setInput:i,isLoading:g}),(0,t.jsx)(S,{className:"hidden sm:block"})]})]})]})}var z=l(76297);function I(e){let{trackVisibility:n}=e,{container:l}=s.useContext(ev),r=h(100,l),{ref:a,entry:i,inView:o}=(0,z.YD)({trackVisibility:n,delay:100,rootMargin:"0px 0px -150px 0px",root:l});return s.useEffect(()=>{r&&n&&!o&&(null==i||i.target.scrollIntoView({block:"start"}))},[o,i,r,n]),(0,t.jsx)("div",{ref:a,className:"h-px w-full"})}let L=[{heading:"Convert list of string to numbers",message:"How to convert a list of string to numbers in python"},{heading:"How to parse email address",message:"How to parse email address with regex"}];function _(e){let{setInput:n,chatMaxWidthClass:l,welcomeMessage:s}=e;return(0,t.jsx)("div",{className:"mx-auto px-4 ".concat(l),children:(0,t.jsxs)("div",{className:"rounded-lg border bg-background p-8",children:[(0,t.jsx)("h1",{className:"mb-2 text-lg font-semibold",children:s||"Welcome"}),(0,t.jsx)("p",{className:"leading-normal text-muted-foreground",children:"You can start a conversation here or try the following examples:"}),(0,t.jsx)("div",{className:"mt-4 flex flex-col items-start space-y-2",children:L.map((e,l)=>(0,t.jsxs)(u.z,{variant:"link",className:"h-auto p-0 text-base",onClick:()=>n(e.message),children:[(0,t.jsx)(m.IconArrowRight,{className:"mr-2 text-muted-foreground"}),(0,t.jsx)("p",{className:"text-left",children:e.heading})]},l))})]})})}var F=l(42891),D=l.n(F),Z=l(23342),H=l(74630),M=l(64148),A=l(93668),T=l(73162),O=l(83008),U=l(28312);let Y={javascript:".js",python:".py",java:".java",c:".c",cpp:".cpp","c++":".cpp","c#":".cs",ruby:".rb",php:".php",swift:".swift","objective-c":".m",kotlin:".kt",typescript:".ts",go:".go",perl:".pl",rust:".rs",scala:".scala",haskell:".hs",lua:".lua",shell:".sh",sql:".sql",html:".html",css:".css"},P=function(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],l="ABCDEFGHJKLMNPQRSTUVWXY3456789",t="";for(let n=0;n<e;n++)t+=l.charAt(Math.floor(Math.random()*l.length));return n?t.toLowerCase():t},q=(0,s.memo)(e=>{let{language:n,value:l}=e,{isCopied:s,copyToClipboard:r}=(0,U.m)({timeout:2e3});return(0,t.jsxs)("div",{className:"codeblock relative w-full bg-zinc-950 font-sans",children:[(0,t.jsxs)("div",{className:"flex w-full items-center justify-between bg-zinc-800 px-6 py-2 pr-4 text-zinc-100",children:[(0,t.jsx)("span",{className:"text-xs lowercase",children:n}),(0,t.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,t.jsxs)(u.z,{variant:"ghost",className:"hover:bg-[#3C382F] hover:text-[#F4F4F5] focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>{let e=Y[n]||".file",t="file-".concat(P(3,!0)).concat(e),s=window.prompt("Enter file name",t);if(!s)return;let r=new Blob([l],{type:"text/plain"}),a=URL.createObjectURL(r),i=document.createElement("a");i.download=s,i.href=a,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(a)},size:"icon",children:[(0,t.jsx)(m.IconDownload,{}),(0,t.jsx)("span",{className:"sr-only",children:"Download"})]}),(0,t.jsxs)(u.z,{variant:"ghost",size:"icon",className:"text-xs hover:bg-[#3C382F] hover:text-[#F4F4F5] focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>{s||r(l)},children:[s?(0,t.jsx)(m.IconCheck,{}):(0,t.jsx)(m.IconCopy,{}),(0,t.jsx)("span",{className:"sr-only",children:"Copy code"})]})]})]}),(0,t.jsx)(T.Z,{language:n,style:O.RY,PreTag:"div",showLineNumbers:!0,customStyle:{margin:0,width:"100%",background:"transparent",padding:"1.5rem 1rem"},codeTagProps:{style:{fontSize:"0.9rem",fontFamily:"var(--font-mono)"}},children:l})]})});q.displayName="CodeBlock";var J=l(73033),V=l(48537),W=l(43739),B=l(14079);let K=W.fC,$=s.forwardRef((e,n)=>{let{className:l,...s}=e;return(0,t.jsx)(W.ck,{ref:n,className:(0,c.cn)("border-b",l),...s})});$.displayName="AccordionItem";let G=s.forwardRef((e,n)=>{let{className:l,children:s,...r}=e;return(0,t.jsxs)(W.xz,{ref:n,className:(0,c.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",l),...r,children:[s,(0,t.jsx)(B.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})});G.displayName=W.xz.displayName;let Q=s.forwardRef((e,n)=>{let{className:l,children:s,...r}=e;return(0,t.jsx)(W.VY,{ref:n,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...r,children:(0,t.jsx)("div",{className:(0,c.cn)("pb-4 pt-0",l),children:s})})});Q.displayName=W.VY.displayName;var X=l(11208),ee=l(3448),en=l(52569);function el(e){let{messages:n,chatMaxWidthClass:l}=e,{isLoading:r}=s.useContext(ev);return(0,t.jsx)("div",{className:"relative mx-auto px-4 ".concat(l),children:null==n?void 0:n.map((e,l)=>{let a=l===n.length-1;return(0,t.jsxs)(s.Fragment,{children:[(0,t.jsx)(et,{isLoading:!!a&&r,message:e}),!a&&(0,t.jsx)(X.Z,{className:"my-4 md:my-8"})]},e.user.id)})})}function et(e){let{message:n,isLoading:l}=e,{user:s,assistant:r}=n,a=s.selectContext,i=s.relevantContext;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(es,{message:s}),!!r&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(X.Z,{className:"my-4 md:my-8"}),(0,t.jsx)(er,{message:r,isLoading:l,userMessageId:s.id,selectContext:a,relevantContext:i})]})]})}function es(e){let{message:n}=e,{handleMessageAction:l}=s.useContext(ev),r=n.selectContext,a=s.useMemo(()=>{var e,n;if(!(null==r?void 0:r.content))return"";let l=(null==r?void 0:r.filepath)&&null!==(e=(0,o.U$)(null==r?void 0:r.filepath)[0])&&void 0!==e?e:"";return"\n```".concat(l,"\n").concat(null!==(n=null==r?void 0:r.content)&&void 0!==n?n:"","\n","```","\n")},[r]);return(0,t.jsxs)("div",{className:(0,c.cn)("group relative mb-4 flex items-start md:-ml-4"),...e,children:[(0,t.jsx)("div",{className:"shrink-0 select-none rounded-full border bg-background shadow",children:(0,t.jsx)(en.Y,{className:"h-8 w-8",fallback:(0,t.jsx)("div",{className:"flex h-8 w-8 items-center justify-center",children:(0,t.jsx)(m.IconUser,{className:"h-5 w-5"})})})}),(0,t.jsxs)("div",{className:"ml-4 flex-1 space-y-2 overflow-hidden px-1",children:[(0,t.jsx)(ea,{message:n.message}),!!a&&(0,t.jsx)(ea,{message:a}),(0,t.jsx)(ed,{children:(0,t.jsxs)(u.z,{variant:"ghost",size:"icon",onClick:e=>null==l?void 0:l(n.id,"delete"),children:[(0,t.jsx)(m.IconTrash,{}),(0,t.jsx)("span",{className:"sr-only",children:"Delete message"})]})})]})]})}function er(e){let{handleMessageAction:n,isLoading:l}=s.useContext(ev),{message:r,selectContext:a,relevantContext:i,isLoading:o,userMessageId:d,...v}=e,h=s.useMemo(()=>{var e,n;return null!==(n=null==r?void 0:null===(e=r.relevant_code)||void 0===e?void 0:e.map(e=>{var n;let l=null!==(n=null==e?void 0:e.start_line)&&void 0!==n?n:0,t=e.body.split("\n").length;return{kind:"file",range:{start:l,end:l+t-1},filepath:e.filepath,content:e.body,git_url:e.git_url}}))&&void 0!==n?n:[]},[null==r?void 0:r.relevant_code]);return(0,t.jsxs)("div",{className:(0,c.cn)("group relative mb-4 flex items-start md:-ml-4"),...v,children:[(0,t.jsx)("div",{className:"shrink-0 select-none rounded-full border bg-background shadow",children:(0,t.jsx)(ec,{className:"h-8 w-8"})}),(0,t.jsxs)("div",{className:"ml-4 flex-1 space-y-2 overflow-hidden px-1",children:[(0,t.jsx)(eu,{contexts:h}),!o||(null==r?void 0:r.message)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ea,{message:r.message}),!!r.error&&(0,t.jsx)(ei,{error:r.error})]}):(0,t.jsx)(eo,{}),(0,t.jsxs)(ed,{children:[!l&&(0,t.jsxs)(u.z,{variant:"ghost",size:"icon",onClick:e=>n(d,"regenerate"),children:[(0,t.jsx)(m.IconRefresh,{}),(0,t.jsx)("span",{className:"sr-only",children:"Regenerate message"})]}),(0,t.jsx)(V.q,{value:r.message})]})]})]})}function ea(e){let{message:n}=e;return(0,t.jsx)(J.s,{className:"prose max-w-none break-words dark:prose-invert prose-p:leading-relaxed prose-pre:mt-1 prose-pre:p-0",remarkPlugins:[M.Z,A.Z],components:{p(e){let{children:n}=e;return(0,t.jsx)("p",{className:"mb-2 last:mb-0",children:n})},code(e){var n;let{node:l,inline:s,className:r,children:a,...i}=e;if(a.length){if("▍"==a[0])return(0,t.jsx)("span",{className:"mt-1 animate-pulse cursor-default",children:"▍"});a[0]=a[0].replace("`▍`","▍")}let o=/language-(\w+)/.exec(r||""),c=function(e){let n={};if(!e)return n;let l=e.split(" ");return l.forEach(e=>{let[l,t]=e.split("=");n[l]=t}),n}(null===(n=l.data)||void 0===n?void 0:n.meta),d=(null==c?void 0:c.is_reference)==="1";return d?null:s?(0,t.jsx)("code",{className:r,...i,children:a}):(0,t.jsx)(q,{language:o&&o[1]||"",value:String(a).replace(/\n$/,""),...i},Math.random())}},children:n})}function ei(e){let{error:n="Fail to fetch"}=e,l=s.useMemo(()=>"```\n"+JSON.stringify({error:!0,message:n},null,2)+"\n```",[n]);return(0,t.jsx)(J.s,{className:"prose break-words text-sm dark:prose-invert prose-p:leading-relaxed prose-pre:mt-1 prose-pre:p-0",remarkPlugins:[M.Z,A.Z],components:{code(e){let{node:n,inline:l,className:s,children:r,...a}=e;return(0,t.jsx)("div",{...a,className:(0,c.cn)(s,"bg-zinc-950 p-2"),children:r})}},children:l})}function eo(){return(0,t.jsxs)("div",{className:"space-y-2 px-1",children:[(0,t.jsx)(ee.O,{className:"h-3 w-full"}),(0,t.jsx)(ee.O,{className:"h-3 w-full"})]})}function ec(e){let{className:n}=e;return(0,t.jsx)(D(),{style:{backgroundColor:"#E8E2D2"},className:(0,c.cn)("rounded-full p-0.5",n),src:Z.Z,alt:"tabby"})}function ed(e){let{className:n,...l}=e;return(0,t.jsx)("div",{className:(0,c.cn)("flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-[5rem] md:-top-2 md:opacity-0",n),...l})}let eu=e=>{let{contexts:n}=e,{onNavigateToContext:l}=s.useContext(ev),r=(null==n?void 0:n.length)>1;return(null==n?void 0:n.length)?(0,t.jsx)(K,{type:"single",collapsible:!0,className:"bg-background text-foreground",children:(0,t.jsxs)($,{value:"references",className:"my-0 border-0",children:[(0,t.jsx)(G,{className:"my-0 py-2",children:(0,t.jsx)("span",{className:"mr-2",children:"Read ".concat(n.length," file").concat(r?"s":"")})}),(0,t.jsx)(Q,{className:"space-y-2",children:null==n?void 0:n.map((e,n)=>{var s,r,a;let i=!(0,H.Z)(null===(s=e.range)||void 0===s?void 0:s.start)&&!(0,H.Z)(null===(r=e.range)||void 0===r?void 0:r.end)&&e.range.start<e.range.end,o=e.filepath.split("/"),c=o[o.length-1],d=o.slice(0,o.length-1).join("/");return(0,t.jsx)("div",{className:"cursor-pointer rounded-md border p-2 hover:bg-accent",onClick:n=>null==l?void 0:l(e),children:(0,t.jsxs)("div",{className:"flex items-center gap-1 overflow-x-auto",children:[(0,t.jsx)(m.IconFile,{className:"shrink-0"}),(0,t.jsxs)("span",{children:[(0,t.jsx)("span",{children:c}),(null===(a=e.range)||void 0===a?void 0:a.start)&&(0,t.jsxs)("span",{className:"text-muted-foreground",children:[":",e.range.start]}),i&&(0,t.jsxs)("span",{className:"text-muted-foreground",children:["-",e.range.end]})]}),(0,t.jsx)("span",{className:"ml-2 text-xs text-muted-foreground",children:d})]})},n)})})]})}):null};var em=l(15696);let ev=s.createContext({}),eh=s.forwardRef(function(e,n){let{className:l,chatId:u,initialMessages:m,headers:v,api:h="/v1beta/answer",onLoaded:x,onThreadUpdates:f,onNavigateToContext:p,container:g,fetcher:j,docQuery:b,generateRelevantQuestions:w,maxWidth:N,welcomeMessage:y,promptFormClassname:k}=e,[C,E]=s.useState(!1),S=s.useRef(!1),[z,L]=s.useState(null!=m?m:[]),[F,D]=s.useState(""),{triggerRequest:Z,isLoading:H,error:M,answer:A,stop:T}=function(e){let{api:n="/v1beta/answer",onError:l,headers:t,fetcher:r}=e,[a,i]=s.useState(!1),[o,c]=s.useState(),[d,u]=s.useState(),m=s.useRef(null),v=e=>{if("event"===e.type&&"data"in e){let n=JSON.parse(e.data);n&&c(e=>h(e,n))}},h=(e,n)=>{var l,t;return e?{...e,answer_delta:"".concat(null!==(l=null==e?void 0:e.answer_delta)&&void 0!==l?l:"").concat(null!==(t=null==n?void 0:n.answer_delta)&&void 0!==t?t:"")}:n},x=async e=>{try{i(!0),u(void 0),c(void 0);let l=new AbortController;m.current=l;let s=null!=r?r:window.fetch,a=await s(n,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json",...t},signal:null==l?void 0:l.signal}).catch(e=>{throw e});if(!(null==a?void 0:a.ok))throw Error(String(a.status));if(null==a.body)throw Error("The response body is empty");let o=a.body.pipeThrough(new TextDecoderStream).pipeThrough(new em.m).getReader();for(;;){let{done:e,value:n}=await o.read();if(e)break;v(n)}}catch(e){if((null==e?void 0:e.name)==="AbortError")return m.current=null,null;l&&e instanceof Error&&l(e),u(e)}finally{i(!1)}};return{isLoading:a,answer:o,error:d,setError:u,triggerRequest:x,stop:()=>{m.current&&(m.current.abort(),m.current=null)}}}({api:h,headers:v,fetcher:j}),O=async e=>{T();let n=z.filter(n=>n.user.id!==e);L(n)},U=async e=>{let n=(0,r.Z)(z,n=>n.user.id===e);if(n>-1){var l;let e=z[n],t=[...z.slice(0,n),{...e,assistant:{...e.assistant,id:(null===(l=e.assistant)||void 0===l?void 0:l.id)||(0,c.x0)(),message:"",error:void 0}}];return L(t),Z(q(t))}},Y=async()=>{if(!(null==z?void 0:z.length))return;let e=z[z.length-1].user.id;return U(e)};s.useEffect(()=>{if(!H||!(null==z?void 0:z.length)||!A)return;let e=z[z.length-1];L(n=>{var l;let t=n[n.length-1].assistant,s={...t,id:(null==t?void 0:t.id)||(0,c.x0)(),message:null!==(l=A.answer_delta)&&void 0!==l?l:"",error:void 0,relevant_code:null==A?void 0:A.relevant_code};return[...n.slice(0,n.length-1),{...e,assistant:s}]})},[A,H]);let P=(0,a.S)(()=>{g?g.scrollTo({top:g.scrollHeight,behavior:"smooth"}):window.scrollTo({top:document.body.offsetHeight,behavior:"smooth"})},100);s.useLayoutEffect(()=>{H&&P.run()},[H]),s.useEffect(()=>{M&&(null==z?void 0:z.length)&&L(e=>{var n,l,t;let s=e[e.length-1];return[...e.slice(0,e.length-1),{...s,assistant:{...s.assistant,id:(null===(n=s.assistant)||void 0===n?void 0:n.id)||(0,c.x0)(),message:null!==(t=null===(l=s.assistant)||void 0===l?void 0:l.message)&&void 0!==t?t:"",error:(null==M?void 0:M.message)==="401"?"Unauthorized":"Fail to fetch"}}]})},[M]);let q=e=>{var n,l;let t=e[e.length-1].user,s=null==t?void 0:t.selectContext,r=s?{content:null!==(n=s.content)&&void 0!==n?n:"",filepath:s.filepath,language:s.filepath&&(0,o.U$)(s.filepath)[0]||"text",git_url:null!==(l=null==s?void 0:s.git_url)&&void 0!==l?l:""}:void 0;return{messages:(function(e){if(!(null==e?void 0:e.length))return[];let n=[],l=e.length;for(let t=0;t<e.length;t++){let s=e[t],{user:r,assistant:a}=s;r&&n.push(function(e,n){let{includeTransformedSelectContext:l}=n,{message:t,id:s}=e;return{id:s,role:"user",content:l?t+function(e){var n;if(!e||!e.content)return"";let{content:l,filepath:t}=e,s=null===(n=(0,o.U$)(t))||void 0===n?void 0:n[0];return"\n```".concat(null!=s?s:"","\n").concat(null!=l?l:"","\n","```","\n")}(e.selectContext):t}}(r,{includeTransformedSelectContext:l>1&&t!==l-1})),a&&n.push({role:"assistant",id:a.id,content:a.message})}return n})(e).slice(0,-1),code_query:r,doc_query:!!b,generate_relevant_questions:!!w}},J=(0,i.d)(async e=>{var n;if(H)return;let l={...e,id:null!==(n=e.id)&&void 0!==n?n:(0,c.x0)()},t=[...z,{user:l,assistant:{id:(0,c.x0)(),message:"",error:void 0}}];return L(t),Z(q(t))}),V=async e=>{var n;return null===(n=J.current)||void 0===n?void 0:n.call(J,e)},W=async e=>V({message:e});s.useEffect(()=>{S.current&&f(z)},[z]),s.useImperativeHandle(n,()=>({sendUserChat:V,stop:T,isLoading:H}),[]),s.useEffect(()=>{S.current||(S.current=!0,null==x||x(),E(!0))},[]);let B=N?"max-w-".concat(N):"max-w-2xl";return C?(0,t.jsx)(ev.Provider,{value:{isLoading:H,qaPairs:z,onNavigateToContext:p,handleMessageAction:(e,n)=>{switch(n){case"delete":O(e);break;case"regenerate":U(e)}},onClearMessages:()=>{T(),L([])},container:g},children:(0,t.jsx)("div",{className:"flex justify-center overflow-x-hidden",children:(0,t.jsxs)("div",{className:"w-full px-4 ".concat(B),children:[(0,t.jsxs)("div",{className:(0,c.cn)("pb-[200px] pt-4 md:pt-10",l),children:[(null==z?void 0:z.length)?(0,t.jsx)(el,{messages:z,chatMaxWidthClass:B}):(0,t.jsx)(_,{setInput:D,chatMaxWidthClass:B,welcomeMessage:y}),(0,t.jsx)(I,{trackVisibility:H})]}),(0,t.jsx)(R,{onSubmit:W,className:(0,c.cn)("fixed inset-x-0 bottom-0",k),id:u,stop:()=>{T()},reload:Y,input:F,setInput:D,chatMaxWidthClass:B})]})})}):(0,t.jsx)(d.cg,{className:"".concat(B," mx-auto pt-4 md:pt-10")})})},73033:function(e,n,l){l.d(n,{s:function(){return r}});var t=l(3546),s=l(52991);let r=(0,t.memo)(s.D,(e,n)=>e.children===n.children&&e.className===n.className)},52569:function(e,n,l){l.d(n,{Y:function(){return j},n:function(){return b}});var t=l(36164),s=l(3546),r=l(87782),a=l(21454),i=l(36327),o=l(98454),c=l(3765),d=l(74248),u=l(66612);let m=s.forwardRef((e,n)=>{let{className:l,...s}=e;return(0,t.jsx)(u.fC,{ref:n,className:(0,d.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",l),...s})});m.displayName=u.fC.displayName;let v=s.forwardRef((e,n)=>{let{className:l,...s}=e;return(0,t.jsx)(u.Ee,{ref:n,className:(0,d.cn)("aspect-square h-full w-full",l),...s})});v.displayName=u.Ee.displayName;let h=s.forwardRef((e,n)=>{let{className:l,...s}=e;return(0,t.jsx)(u.NY,{ref:n,className:(0,d.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",l),...s})});h.displayName=u.NY.displayName;var x=l(3448),f=l(30410).lW;let p="not_found",g=!0;function j(e){var n,l,a,u;let{className:j,fallback:b}=e,[{data:w}]=(0,o.P)(),N=null==w?void 0:w.me.id,y=N&&"/avatar/".concat(w.me.id)||null,{data:k,isLoading:C,error:E}=(0,i.Z)(y,e=>{if(g)return(0,c.Z)(e,{responseFormatter:async e=>{let n=await e.blob(),l=f.from(await n.arrayBuffer());return"data:image/png;base64,".concat(l.toString("base64"))},errorHandler:e=>{if(404===e.status)throw Error(p)}})}),S=s.useMemo(()=>{var e;if(null==w?void 0:null===(e=w.me)||void 0===e?void 0:e.email)return(0,r.B)(w.me.email)},[null==w?void 0:null===(n=w.me)||void 0===n?void 0:n.email]);return C?(0,t.jsx)(x.O,{className:(0,d.cn)("h-16 w-16 rounded-full",j)}):((null==E?void 0:E.message)===p&&(g=!1),k||S||!b)?!k&&S?(0,t.jsx)(r.Z,{className:(0,d.cn)("h-16 w-16",j),...S}):(0,t.jsxs)(m,{className:(0,d.cn)("h-16 w-16",j),children:[(0,t.jsx)(v,{src:k,alt:null==w?void 0:null===(l=w.me)||void 0===l?void 0:l.email,className:"object-cover"}),(0,t.jsx)(h,{children:null==w?void 0:null===(u=w.me)||void 0===u?void 0:null===(a=u.email)||void 0===a?void 0:a.substring(0,2)})]}):b}let b=e=>{g=!0,(0,a.JG)("/avatar/".concat(e))}}}]);