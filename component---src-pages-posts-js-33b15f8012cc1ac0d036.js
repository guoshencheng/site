(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return c});var n=a(0),r=a.n(n),i=a(145),s=a.n(i),o=a(157),c=(a(182),"415369917");t.default=function(e){var t=e.data;return r.a.createElement(o.a,{showHeader:!0},r.a.createElement("div",null,r.a.createElement("div",{className:"posts-list"},t.allMarkdownRemark.edges.map(function(e){return e.node}).map(function(e){return r.a.createElement("div",{className:"post-item",key:e.id},r.a.createElement("div",{className:"post-item-title"},r.a.createElement(s.a,{to:"/posts/"+e.fields.slug},e.frontmatter.title)),r.a.createElement("div",{className:"post-item-base-info"},e.frontmatter.date),r.a.createElement("div",{className:"post-item-desc"},e.excerpt))}))))}},146:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f}),a.d(t,"useStaticQuery",function(){return h});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(145),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var u=a(146),l=a.n(u);a.d(t,"PageRenderer",function(){return l.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},h=function(e){r.a.useContext;var t=r.a.useContext(m);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},149:function(e,t,a){"use strict";a.d(t,"a",function(){return m});a(74),a(53),a(160),a(32);var n=a(151),r=a.n(n),i=(a(73),a(0)),s=a.n(i),o=a(148),c=a.n(o),u=function(e){var t=e.matrix,a=(e.className,e.color),n=void 0===a?"black":a,i=r()(e,["matrix","className","color"]);return s.a.createElement("svg",Object.assign({className:c()("press-start-2p-svg"),viewBox:"0 0 140 140"},i),function(e){var t=[];return e.forEach(function(e,a){e.forEach(function(e,n){var r,i;e&&(e<0?(r=function(t){return t*n+t*(1-Math.abs(e))},i=function(t){return t*Math.abs(e)}):(r=function(e){return e*n},i=function(t){return t*Math.abs(e)}),t.push({height:function(e){return e},y:function(e){return e*a},x:r,width:i,row:a,col:n}))})}),t}(t).map(function(e){return s.a.createElement("rect",{key:e.col+"-"+e.row,x:e.x(20),y:e.y(20),width:e.width(20),height:e.height(20),style:{fill:n,stroke:"none"}})}))},l={a:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,1,1,1,1,1,0],[0,0,0,0,0,1,1],[0,1,1,1,1,1,1],[1,0,0,0,0,1,1],[0,1,1,1,1,1,1]],A:[[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1]],b:[[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],B:[[1,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,0]],c:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,1,1,1,1,1,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[0,1,1,1,1,1,0]],C:[[0,0,1,1,1,1,0],[0,1,1,0,0,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[0,1,1,0,0,1,1],[0,0,1,1,1,1,0]],d:[[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,1,1,1,1,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,1]],D:[[1,1,1,1,1,0,0],[1,1,0,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,1,1,0],[1,1,1,1,1,0,0]],e:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,1,1,1,1,1,0],[1,1,0,0,0,0,1],[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[0,1,1,1,1,1,0]],E:[[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,1]],f:[[0,0,0,1,1,1,1],[0,0,1,1,1,0,0],[1,1,1,1,1,1,1],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0]],F:[[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0]],g:[[0,0,0,0,0,0,0],[0,1,1,1,1,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,1,1,1,1,1,0]],G:[[0,0,1,1,1,1,1],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,1,1,1],[1,1,0,0,0,1,1],[0,1,1,0,0,1,1],[0,0,1,1,1,1,1]],h:[[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1]],H:[[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1]],i:[[0,0,1,1,1,0,0],[0,0,0,0,0,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,1,1,1,0,0]],I:[[-.5,1,1,1,1,1,.5],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[-.5,1,1,1,1,1,.5]],j:[[0,0,1,1,1,0,0],[0,0,0,0,0,0,0],[0,1,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[1,1,1,1,0,0,0]],J:[[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],k:[[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,1,1],[1,1,0,0,1,1,0],[1,1,1,1,1,0,0],[1,1,0,0,1,1,0],[1,1,0,0,0,1,1]],K:[[1,1,0,0,0,1,1],[1,1,0,1,1,0,0],[1,1,1,1,0,0,0],[1,1,1,1,0,0,0],[1,1,0,1,1,0,0],[1,1,0,0,1,1,0],[1,1,0,0,0,1,1]],l:[[0,1,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[1,1,1,1,1,1,1]],L:[[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,1]],m:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[1,1,1,1,1,1,0],[1,0,1,1,0,1,1],[1,0,1,1,0,1,1],[1,0,1,1,0,1,1],[1,0,1,1,0,1,1]],M:[[1,1,0,0,0,1,1],[1,1,1,0,1,1,1],[1,1,1,1,1,1,1],[1,1,0,1,0,1,1],[1,1,0,1,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1]],n:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[1,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1]],N:[[1,1,0,0,0,1,1],[1,1,1,0,0,1,1],[1,1,1,1,0,1,1],[1,1,0,1,1,1,1],[1,1,0,0,1,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1]],o:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],O:[[0,1,1,1,1,1,0],[2,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],p:[[0,0,0,0,0,0,0],[1,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0]],P:[[1,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0]],q:[[0,0,0,0,0,0,0],[1,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1]],Q:[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,1,1,1,1],[1,1,0,0,1,1,0],[0,1,1,1,1,0,1]],r:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[1,1,0,1,1,1,1],[1,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0]],R:[[1,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,1,1,1],[1,1,1,1,1,0,0],[1,1,0,1,1,1,0],[1,1,0,0,1,1,1]],s:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,1,1,1,1,1,0],[1,1,0,0,0,0,0],[0,1,1,1,1,1,0],[0,0,0,0,0,1,1],[1,1,1,1,1,1,0]],S:[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,0,0],[0,1,1,1,1,1,0],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],t:[[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[1,1,1,1,1,1,1],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0]],T:[[-.5,1,1,1,1,1,.5],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0]],u:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,1]],U:[[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],v:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[1,1,0,0,0,1,1],[1,1,1,0,1,1,1],[0,1,1,1,1,1,0],[0,0,1,1,1,0,0],[0,0,0,1,0,0,0]],V:[[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,0,1,1,1],[0,1,1,1,1,1,0],[0,0,1,1,1,0,0],[0,0,0,1,0,0,0]],w:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[1,1,0,1,0,1,1],[1,1,0,1,0,1,1],[1,1,1,1,1,1,1],[1,1,1,0,1,1,1],[0,1,0,0,0,1,0]],W:[[1,1,0,1,0,1,1],[1,1,0,1,0,1,1],[1,1,0,1,0,1,1],[1,1,0,1,0,1,1],[1,1,1,1,1,1,1],[1,1,1,0,1,1,1],[0,1,0,0,0,1,0]],x:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[1,1,0,0,0,1,1],[0,1,1,0,1,1,0],[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1]],X:[[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,0,1,1,0],[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1]],y:[[0,0,0,0,0,0,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,1,1,1,1,1,1]],Y:[[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0]],z:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[1,1,1,1,1,1,1],[0,0,0,1,1,1,0],[0,0,1,1,1,0,0],[0,1,1,1,0,0,0],[1,1,1,1,1,1,1]],Z:[[1,1,1,1,1,1,1],[0,0,0,0,1,1,1],[0,0,0,1,1,1,0],[0,0,1,1,1,0,0],[0,1,1,1,0,0,0],[1,1,1,0,0,0,0],[1,1,1,1,1,1,1]]," ":[],"'":[[0,1,1,0,0,0,0],[0,1,1,0,0,0,0],[0,1,1,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]},d=Object.keys(l).reduce(function(e,t){var a=l[t];return e[t]=function(e){var t=Object.assign({},e);return s.a.createElement(u,Object.assign({matrix:a},t))},e},{}),m=function(e){var t=e.str,a=r()(e,["str"]);return s.a.createElement(s.a.Fragment,null,t.split("").map(function(e,t){var n=d[e];return s.a.createElement(n,Object.assign({},a,{key:t}))}))}},152:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(54),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=u},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Century's world",author:"guoshencheng@gmail.com",description:"guoshencheng's personal website",siteUrl:"https://guoshencheng.com",keywords:"century guo guoshencheng"}}}}},154:function(e,t,a){},155:function(e,t,a){},157:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),s=a(159),o=a.n(s),c=a(148),u=a.n(c),l=a(147),d=a(145),m=a.n(d),f=a(149),h=(a(154),function(e){var t=e.siteTitle;return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"header-title-container"},i.a.createElement("div",{className:"header-logo"}),i.a.createElement("div",{className:"header-title game-text"},i.a.createElement(m.a,{to:"/"},i.a.createElement(f.a,{str:t,size:15,color:"rgba(0, 0, 0, 0.6)"})))),i.a.createElement("div",{className:"header-line-item header-link"},i.a.createElement(m.a,{to:"/posts"},i.a.createElement(f.a,{str:"POSTS",size:15,color:"rgba(0, 0, 0, 0.6)"}))))});a(161),a(155),t.a=function(e){var t=e.children,a=e.showHeader,r=e.keywords,s=e.title,c=e.description;return i.a.createElement(l.StaticQuery,{query:"1400594429",render:function(e){return i.a.createElement("div",null,i.a.createElement(o.a,{title:s?e.site.siteMetadata.title+" - "+s:e.site.siteMetadata.title,script:[{src:"https://zz.bdstatic.com/linksubmit/push.js"}],meta:[{name:"google-site-verification",content:"nDcortrmOitFkAImU-EeXZi_ommPGj6HiXB2GmXRBjo"},{name:"msvalidate.01",content:"B47C607274B7109AEF27A38F88C9FE53"},{name:"description",content:(s||e.site.siteMetadata.title)+" - "+e.site.siteMetadata.description+" "+(c||"")+" "+(r||e.site.siteMetadata.keywords||"")},{name:"keywords",content:r||e.site.siteMetadata.keywords||""},{property:"og:title",content:s||e.site.siteMetadata.title},{name:"og:description",content:e.site.siteMetadata.description}]}),a&&i.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:u()("container",{"with-header":a})},t))},data:n})}},182:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-posts-js-33b15f8012cc1ac0d036.js.map