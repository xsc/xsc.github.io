(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(9),s=c(3),i=c(1),a=c(0),r=Object(i.createContext)(),l=function(e){var t=e.children,c=Object(i.useState)("light"),n=Object(s.a)(c,2),l=n[0],o=n[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://xsc.dev/",j="xsc.dev",d={name:"Yannick",role:"friendly technologist",description:"Team lead and software engineer. 10+ years of experience with backend platforms and infrastructure, including web-facing and high-load environments. Strong affinity towards functional programming, TDD and free software. Strives for simplicity and intuitive interfaces. Vim user.",social:{linkedin:"https://www.linkedin.com/in/yannickscherer/",github:"https://github.com/xsc"}},u=[{name:"into-docker",description:"Unified and robust Docker builds without ever writing a Dockerfile. Build directly from your source code!",stack:["Clojure","GraalVM"],sourceCode:"https://github.com/into-docker/into-docker"},{name:"clojure libraries",description:"Open-source utilities and tools, e.g. for updating oudated dependencies, rewriting Clojure code, data access, etc...",stack:["Clojure"],sourceCode:"https://github.com/xsc?tab=repositories&q=&type=&language=clojure&sort=stargazers"},{name:"aufi",description:"An image upload, delivery and resizing service, based on S3 and delivering hundreds of images per second.",stack:["Clojure","AWS"],sourceCode:"https://github.com/stalefruits/aufi"}],b=["Clojure","TypeScript","Java","DevOps","API Design","Architecture","Databases","Coaching & Mentoring","Developer Experience","AWS","Kubernetes","Docker"],h="yannick@xsc.dev",m=c(16),O=c.n(m),f=c(14),x=c.n(f),p=c(18),k=c.n(p),g=c(17),v=c.n(g),N=(c(28),function(){var e=Object(i.useContext)(r),t=Object(s.a)(e,1)[0],c=t.themeName,n=t.toggleTheme,l=Object(i.useState)(!1),o=Object(s.a)(l,2),j=o[0],d=o[1],m=function(){return d(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[u.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:m,className:"link link--nav",children:"Projects"})}):null,b.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:m,className:"link link--nav",children:"Skills"})}):null,h?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:m,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:n,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===c?Object(a.jsx)(x.a,{}):Object(a.jsx)(O.a,{})}),Object(a.jsx)("button",{type:"button",onClick:m,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(v.a,{}):Object(a.jsx)(k.a,{})})]})}),_=(c(32),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(N,{})]})}),w=c(11),C=c.n(w),y=c(19),S=c.n(y),D=(c(33),function(){var e=d.name,t=d.role,c=d.description,n=d.resume,s=d.social;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:c&&c}),Object(a.jsxs)("div",{className:"about__contact center",children:[n&&Object(a.jsx)("a",{href:n,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(a.jsxs)(a.Fragment,{children:[s.github&&Object(a.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(C.a,{})}),s.linkedin&&Object(a.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(S.a,{})})]})]})]})}),E=c(7),A=c.n(E),P=c(20),T=c.n(P),I=(c(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},A()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(C.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(T.a,{})})]})}),z=(c(36),function(){return u.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:u.map((function(e){return Object(a.jsx)(I,{project:e},A()())}))})]}):null}),B=(c(37),function(){return b.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:b.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},A()())}))})]}):null}),J=c(21),L=c.n(J),M=(c(38),function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),c?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(L.a,{fontSize:"large"})})}):null}),R=(c(39),function(){return h?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(h),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),V=(c(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Created By Raj Shekhar"})})}),W=(c(41),function(){var e=Object(i.useContext)(r),t=Object(s.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(_,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(D,{}),Object(a.jsx)(z,{}),Object(a.jsx)(B,{}),Object(a.jsx)(R,{})]}),Object(a.jsx)(M,{}),Object(a.jsx)(V,{})]})});c(42);Object(n.render)(Object(a.jsx)(l,{children:Object(a.jsx)(W,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.b71ff737.chunk.js.map