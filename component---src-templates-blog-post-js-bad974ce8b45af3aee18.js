(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Jz1z:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("q1tI"),a=n.n(r),o=n("vOnD"),i=n("Wbzz"),l=n("+IKJ"),c=o.c.span.withConfig({displayName:"Tag__Wrapper",componentId:"rr4wxk-0"})(["display:inline-block;position:relative;background-color:",";padding-top:4px;padding-bottom:4px;padding-left:15px;padding-right:15px;border-bottom-right-radius:2px;border-top-right-radius:2px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;font-size:",";line-height:1.1;min-width:50px;text-align:right;margin-left:10px;margin-right:10px;margin-bottom:10px;white-space:nowrap;&::before{content:'';position:absolute;width:0;background-color:inherit;border:12px solid #fff;border-right-color:transparent;border-radius:100% 0 0 100%;left:-20px;top:0px;}&::after{content:'';position:absolute;width:6px;height:6px;left:0px;top:9px;border-radius:50%;background-color:#fff;}& a{font-weight:500;color:",";transition:color 0.2s ease-out;}& a:hover{color:",";}"],(function(e){return e.bg||e.theme.colors.light}),(function(e){return e.theme.fontSizes.small}),(function(e){return e.bg||Object(l.a)(.5,e.theme.colors.light)}),(function(e){return e.bg||Object(l.a)(.9,e.theme.colors.light)})),p=Object(o.c)(c).withConfig({displayName:"Tag__SmallWrapper",componentId:"rr4wxk-1"})(["font-size:",";margin-bottom:0;&::before{border:10px solid #fff;border-right-color:transparent;}&::after{top:7px;}"],(function(e){return e.theme.fontSizes.xsmall})),m=function(e){var t=e.tag,n=e.to;return a.a.createElement(p,null,a.a.createElement(i.a,{to:n||"/archive/tags/".concat(t)},t))},s=function(e){var t=e.tag,n=e.to;return a.a.createElement(c,null,a.a.createElement(i.a,{to:n||"/archive/tags/".concat(t)},t))};t.b=s},yZlL:function(e,t,n){"use strict";n.r(t);var r,a=n("q1tI"),o=n.n(a),i=n("+ZDr"),l=n.n(i),c=n("TJpk"),p=n.n(c),m=n("vOnD"),s=n("BYIe"),u=m.c.h1.withConfig({displayName:"Title__Wrapper",componentId:"fj4phh-0"})(["font-weight:500;margin-bottom:0.5rem;color:#3a3a3a;"]),d=function(e){var t=e.title;return o.a.createElement(u,null,t)},g=n("+IKJ"),h=n("Jz1z"),f=m.c.h4.withConfig({displayName:"Meta__Wrapper",componentId:"sc-1egv0io-0"})(["margin-bottom:1rem;color:",";"],(function(e){return Object(g.a)(.3,e.theme.colors.light)})),b=m.c.time.withConfig({displayName:"Meta__Time",componentId:"sc-1egv0io-1"})(["font-weight:500;display:inline-block;margin-right:1.25rem;margin-bottom:0.5rem;"]),x=m.c.div.withConfig({displayName:"Meta__TagWrapper",componentId:"sc-1egv0io-2"})(["display:inline-flex;"]),w=function(e){var t=e.meta,n=t.date,r=t.tags;return o.a.createElement(f,null,o.a.createElement(b,{dateTime:new Date(n).toLocaleDateString()},n),o.a.createElement(x,null,r&&r.map((function(e){return o.a.createElement(h.b,{key:e,tag:e})}))))},v=function(e){var t=e.html;return o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})};var y,E,_=m.c.div.withConfig({displayName:"MarkdownDoc__Wrapper",componentId:"zozhiy-0"})(["min-height:700px;",""],s.b.lessThan("small")(r||(y=["\n        min-height: 400px;\n    "],E||(E=y.slice(0)),r=Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(E)}}))))),k=function(e){var t=e.title,n=(e.date,e.html),r=e.meta;return o.a.createElement(_,null,o.a.createElement(d,{title:t}),o.a.createElement(w,{meta:r}),o.a.createElement(v,{html:n}))},z=n("aAma"),I=m.c.button.withConfig({displayName:"Button",componentId:"sc-1r15p13-0"})(["display:inline-block;height:38px;padding:0 30px;color:",";font-size:",";font-weight:500;line-height:38px;letter-spacing:0.1rem;text-transform:uppercase;text-decoration:none;white-space:nowrap;background-color:transparent;border-radius:4px;border:1px solid ",";cursor:pointer;box-sizing:border-box;&:hover,&:focus{color:",";border-color:",";}"],(function(e){return e.theme.colors.primaryBlue}),(function(e){return e.theme.fontSizes.small}),(function(e){return e.theme.colors.primaryBlue}),(function(e){return Object(g.b)(.2,e.theme.colors.primaryBlue)}),(function(e){return Object(g.b)(.2,e.theme.colors.primaryBlue)})),O=n("6HPj"),j=n("Bl7J"),C=Object(m.c)(O.a).withConfig({displayName:"blog-post__ButtonGroup",componentId:"sc-1i2dvmy-0"})(["margin-top:50px;justify-content:center;& button{margin-right:20px;}"]);t.default=function(e){var t=e.data,n=(e.location,e.pathContext),r=n.next,a=n.prev,i=t.markdownRemark,c=i.frontmatter,m=i.html,s=i.fields,u=c.title,d={date:s.date,tags:c.tags};return o.a.createElement(j.a,null,o.a.createElement(z.a,null,o.a.createElement(p.a,{title:"".concat(u," - My blog")}),o.a.createElement(k,{title:u,meta:d,html:m}),o.a.createElement(C,null,a&&o.a.createElement(l.a,{to:a.fields.path},o.a.createElement(I,null,"Previous")),r&&o.a.createElement(l.a,{to:r.fields.path},o.a.createElement(I,null,"Next")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-bad974ce8b45af3aee18.js.map