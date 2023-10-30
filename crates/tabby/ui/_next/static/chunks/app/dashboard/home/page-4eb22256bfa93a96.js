(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[883],{62962:function(e,t,s){Promise.resolve().then(s.bind(s,70406))},70406:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return y}});var n=s(57437),a=s(93023),r=s(2265),i=s(27775),l=s(39311),o=s(84168);let c=i.fC;i.xz;let d=e=>{let{className:t,children:s,...a}=e;return(0,n.jsx)(i.h_,{className:(0,l.cn)(t),...a,children:(0,n.jsx)("div",{className:"fixed inset-0 z-50 flex items-start justify-center sm:items-center",children:s})})};d.displayName=i.h_.displayName;let u=r.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,n.jsx)(i.aV,{ref:t,className:(0,l.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",s),...a})});u.displayName=i.aV.displayName;let f=r.forwardRef((e,t)=>{let{className:s,children:a,...r}=e;return(0,n.jsxs)(d,{children:[(0,n.jsx)(u,{}),(0,n.jsxs)(i.VY,{ref:t,className:(0,l.cn)("fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-sm animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",s),...r,children:[a,(0,n.jsxs)(i.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,n.jsx)(o.bM,{}),(0,n.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});f.displayName=i.VY.displayName;let m=e=>{let{className:t,...s}=e;return(0,n.jsx)("div",{className:(0,l.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...s})};m.displayName="DialogHeader";let h=e=>{let{className:t,...s}=e;return(0,n.jsx)("div",{className:(0,l.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...s})};h.displayName="DialogFooter";let x=r.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,n.jsx)(i.Dx,{ref:t,className:(0,l.cn)("text-lg font-semibold leading-none tracking-tight",s),...a})});x.displayName=i.Dx.displayName;let p=r.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,n.jsx)(i.dk,{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",s),...a})});p.displayName=i.dk.displayName;var b=s(16775),g=s(94190);let j="community-dialog-shown";function y(){let[e,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{localStorage.getItem(j)||(t(!0),localStorage.setItem(j,"true"))},[]),(0,n.jsxs)("div",{children:[(0,n.jsx)(v,{}),(0,n.jsx)(c,{open:e,onOpenChange:t,children:(0,n.jsxs)(f,{children:[(0,n.jsxs)(m,{className:"gap-3",children:[(0,n.jsx)(x,{children:"Join the Tabby community"}),(0,n.jsx)(p,{children:"Connect with other contributors building Tabby. Share knowledge, get help, and contribute to the open-source project."})]}),(0,n.jsx)(h,{className:"sm:justify-start",children:(0,n.jsxs)("a",{target:"_blank",href:"https://join.slack.com/t/tabbycommunity/shared_invite/zt-1xeiddizp-bciR2RtFTaJ37RBxr8VxpA",className:(0,a.d)(),children:[(0,n.jsx)(o.gx,{className:"-ml-2 h-8 w-8"}),"Join us on Slack"]})})]})})]})}function N(e){let{href:t,children:s}=e;return(0,n.jsx)("a",{target:"_blank",href:t,className:"underline",children:s})}function v(){let{data:e}=(0,g.Q)();if(e)return(0,n.jsxs)("div",{className:"flex w-full flex-col gap-3",children:[(0,n.jsxs)("h1",{children:[(0,n.jsx)("span",{className:"font-bold",children:"Congratulations"}),", your tabby instance is running!"]}),(0,n.jsx)("span",{className:"flex flex-wrap gap-1",children:(0,n.jsx)("a",{target:"_blank",href:"https://github.com/TabbyML/tabby/releases/tag/".concat(e.version.git_describe),children:(0,n.jsx)("img",{src:"https://img.shields.io/badge/version-".concat(encodeURIComponent(e.version.git_describe.replaceAll("-","--")),"-green")})})}),(0,n.jsx)(b.Z,{}),(0,n.jsxs)("span",{children:["You can find our documentation"," ",(0,n.jsx)(N,{href:"https://tabby.tabbyml.com/docs/getting-started",children:"here"}),".",(0,n.jsxs)("ul",{className:"mt-2",children:[(0,n.jsxs)("li",{children:["\uD83D\uDCBB"," ",(0,n.jsx)(N,{href:"https://tabby.tabbyml.com/docs/extensions/",children:"IDE/Editor Extensions"})]}),(0,n.jsxs)("li",{children:["⚙️"," ",(0,n.jsx)(N,{href:"https://tabby.tabbyml.com/docs/configuration",children:"Configuration"})]})]})]})]})}},16775:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var n=s(57437),a=s(2265),r=s(26823),i=s(39311);let l=a.forwardRef((e,t)=>{let{className:s,orientation:a="horizontal",decorative:l=!0,...o}=e;return(0,n.jsx)(r.f,{ref:t,decorative:l,orientation:a,className:(0,i.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",s),...o})});l.displayName=r.f.displayName},94190:function(e,t,s){"use strict";s.d(t,{Q:function(){return r}});var n=s(45362);function a(e){return fetch(e).then(e=>e.json())}function r(){return(0,n.Z)("/v1/health",a)}}},function(e){e.O(0,[195,362,536,703,894,971,864,744],function(){return e(e.s=62962)}),_N_E=e.O()}]);