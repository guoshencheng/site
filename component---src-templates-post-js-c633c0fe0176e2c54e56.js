(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"query",function(){return m});n(74);var a=n(7),r=n.n(a),i=n(0),s=n.n(i),o=n(145),c=n.n(o),u=(n(183),n(184)),l=n(157);n(206);var d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=e.frontmatter.tag,n=e.excerpt,a=t?t.split(","):"",r={identifier:e.id,title:e.frontmatter.title};return s.a.createElement(l.a,{title:e.frontmatter.title,keywords:t,description:n,showHeader:!0},s.a.createElement("div",{className:"post-container"},s.a.createElement("div",{className:"post-title"},e.frontmatter.title),s.a.createElement("div",{className:"extra-info"},s.a.createElement("span",{className:"post-date"},e.frontmatter.date),s.a.createElement("span",{className:"post-tag"},a.map(function(e){return s.a.createElement(c.a,{key:e,to:"/posts/"+e},e)}))),s.a.createElement("div",{className:"markdown-body"},s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}})),s.a.createElement(u.DiscussionEmbed,{shortname:"guoshencheng",config:r})))},t}(s.a.Component),m="3974765541"},146:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f}),n.d(t,"useStaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(4),s=n.n(i),o=n(145),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var u=n(146),l=n.n(u);n.d(t,"PageRenderer",function(){return l.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},h=function(e){r.a.useContext;var t=r.a.useContext(m);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},149:function(e,t,n){"use strict";n.d(t,"a",function(){return m});n(74),n(53),n(160),n(32);var a=n(151),r=n.n(a),i=(n(73),n(0)),s=n.n(i),o=n(148),c=n.n(o),u=function(e){var t=e.matrix,n=(e.className,e.color),a=void 0===n?"black":n,i=r()(e,["matrix","className","color"]);return s.a.createElement("svg",Object.assign({className:c()("press-start-2p-svg"),viewBox:"0 0 140 140"},i),function(e){var t=[];return e.forEach(function(e,n){e.forEach(function(e,a){var r,i;e&&(e<0?(r=function(t){return t*a+t*(1-Math.abs(e))},i=function(t){return t*Math.abs(e)}):(r=function(e){return e*a},i=function(t){return t*Math.abs(e)}),t.push({height:function(e){return e},y:function(e){return e*n},x:r,width:i,row:n,col:a}))})}),t}(t).map(function(e){return s.a.createElement("rect",{key:e.col+"-"+e.row,x:e.x(20),y:e.y(20),width:e.width(20),height:e.height(20),style:{fill:a,stroke:"none"}})}))},l={a:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,1,1,1,1,1,0],[0,0,0,0,0,1,1],[0,1,1,1,1,1,1],[1,0,0,0,0,1,1],[0,1,1,1,1,1,1]],A:[[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1]],b:[[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],B:[[1,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,0]],c:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,1,1,1,1,1,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[0,1,1,1,1,1,0]],C:[[0,0,1,1,1,1,0],[0,1,1,0,0,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[0,1,1,0,0,1,1],[0,0,1,1,1,1,0]],d:[[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,1,1,1,1,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,1]],D:[[1,1,1,1,1,0,0],[1,1,0,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,1,1,0],[1,1,1,1,1,0,0]],e:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,1,1,1,1,1,0],[1,1,0,0,0,0,1],[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[0,1,1,1,1,1,0]],E:[[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,1]],f:[[0,0,0,1,1,1,1],[0,0,1,1,1,0,0],[1,1,1,1,1,1,1],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0]],F:[[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0]],g:[[0,0,0,0,0,0,0],[0,1,1,1,1,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,1,1,1,1,1,0]],G:[[0,0,1,1,1,1,1],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,1,1,1],[1,1,0,0,0,1,1],[0,1,1,0,0,1,1],[0,0,1,1,1,1,1]],h:[[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1]],H:[[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1]],i:[[0,0,1,1,1,0,0],[0,0,0,0,0,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,1,1,1,0,0]],I:[[-.5,1,1,1,1,1,.5],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[-.5,1,1,1,1,1,.5]],j:[[0,0,1,1,1,0,0],[0,0,0,0,0,0,0],[0,1,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[1,1,1,1,0,0,0]],J:[[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],k:[[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,1,1],[1,1,0,0,1,1,0],[1,1,1,1,1,0,0],[1,1,0,0,1,1,0],[1,1,0,0,0,1,1]],K:[[1,1,0,0,0,1,1],[1,1,0,1,1,0,0],[1,1,1,1,0,0,0],[1,1,1,1,0,0,0],[1,1,0,1,1,0,0],[1,1,0,0,1,1,0],[1,1,0,0,0,1,1]],l:[[0,1,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[1,1,1,1,1,1,1]],L:[[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,1]],m:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[1,1,1,1,1,1,0],[1,0,1,1,0,1,1],[1,0,1,1,0,1,1],[1,0,1,1,0,1,1],[1,0,1,1,0,1,1]],M:[[1,1,0,0,0,1,1],[1,1,1,0,1,1,1],[1,1,1,1,1,1,1],[1,1,0,1,0,1,1],[1,1,0,1,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1]],n:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[1,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1]],N:[[1,1,0,0,0,1,1],[1,1,1,0,0,1,1],[1,1,1,1,0,1,1],[1,1,0,1,1,1,1],[1,1,0,0,1,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1]],o:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],O:[[0,1,1,1,1,1,0],[2,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],p:[[0,0,0,0,0,0,0],[1,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0]],P:[[1,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0]],q:[[0,0,0,0,0,0,0],[1,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1]],Q:[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,1,1,1,1],[1,1,0,0,1,1,0],[0,1,1,1,1,0,1]],r:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[1,1,0,1,1,1,1],[1,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0]],R:[[1,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,1,1,1],[1,1,1,1,1,0,0],[1,1,0,1,1,1,0],[1,1,0,0,1,1,1]],s:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,1,1,1,1,1,0],[1,1,0,0,0,0,0],[0,1,1,1,1,1,0],[0,0,0,0,0,1,1],[1,1,1,1,1,1,0]],S:[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,0,0],[0,1,1,1,1,1,0],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],t:[[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[1,1,1,1,1,1,1],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0]],T:[[-.5,1,1,1,1,1,.5],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0],[0,0,-.5,1,.5,0,0]],u:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,1]],U:[[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],v:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[1,1,0,0,0,1,1],[1,1,1,0,1,1,1],[0,1,1,1,1,1,0],[0,0,1,1,1,0,0],[0,0,0,1,0,0,0]],V:[[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,0,1,1,1],[0,1,1,1,1,1,0],[0,0,1,1,1,0,0],[0,0,0,1,0,0,0]],w:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[1,1,0,1,0,1,1],[1,1,0,1,0,1,1],[1,1,1,1,1,1,1],[1,1,1,0,1,1,1],[0,1,0,0,0,1,0]],W:[[1,1,0,1,0,1,1],[1,1,0,1,0,1,1],[1,1,0,1,0,1,1],[1,1,0,1,0,1,1],[1,1,1,1,1,1,1],[1,1,1,0,1,1,1],[0,1,0,0,0,1,0]],x:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[1,1,0,0,0,1,1],[0,1,1,0,1,1,0],[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1]],X:[[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,0,1,1,0],[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1]],y:[[0,0,0,0,0,0,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,1,1,1,1,1,1]],Y:[[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0]],z:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[1,1,1,1,1,1,1],[0,0,0,1,1,1,0],[0,0,1,1,1,0,0],[0,1,1,1,0,0,0],[1,1,1,1,1,1,1]],Z:[[1,1,1,1,1,1,1],[0,0,0,0,1,1,1],[0,0,0,1,1,1,0],[0,0,1,1,1,0,0],[0,1,1,1,0,0,0],[1,1,1,0,0,0,0],[1,1,1,1,1,1,1]]," ":[],"'":[[0,1,1,0,0,0,0],[0,1,1,0,0,0,0],[0,1,1,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]},d=Object.keys(l).reduce(function(e,t){var n=l[t];return e[t]=function(e){var t=Object.assign({},e);return s.a.createElement(u,Object.assign({matrix:n},t))},e},{}),m=function(e){var t=e.str,n=r()(e,["str"]);return s.a.createElement(s.a.Fragment,null,t.split("").map(function(e,t){var a=d[e];return s.a.createElement(a,Object.assign({},n,{key:t}))}))}},152:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),s=n.n(i),o=n(54),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=u},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Century's world",author:"guoshencheng@gmail.com",description:"guoshencheng's personal website",siteUrl:"https://guoshencheng.com",keywords:"century guo guoshencheng"}}}}},154:function(e,t,n){},155:function(e,t,n){},157:function(e,t,n){"use strict";var a=n(153),r=n(0),i=n.n(r),s=n(159),o=n.n(s),c=n(148),u=n.n(c),l=n(147),d=n(145),m=n.n(d),f=n(149),h=(n(154),function(e){var t=e.siteTitle;return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"header-title-container"},i.a.createElement("div",{className:"header-logo"}),i.a.createElement("div",{className:"header-title game-text"},i.a.createElement(m.a,{to:"/"},i.a.createElement(f.a,{str:t,size:15,color:"rgba(0, 0, 0, 0.6)"})))),i.a.createElement("div",{className:"header-line-item header-link"},i.a.createElement(m.a,{to:"/posts"},i.a.createElement(f.a,{str:"POSTS",size:15,color:"rgba(0, 0, 0, 0.6)"}))))});n(161),n(155),t.a=function(e){var t=e.children,n=e.showHeader,r=e.keywords,s=e.title,c=e.description;return i.a.createElement(l.StaticQuery,{query:"1400594429",render:function(e){return i.a.createElement("div",null,i.a.createElement(o.a,{title:s?e.site.siteMetadata.title+" - "+s:e.site.siteMetadata.title,script:[{src:"https://zz.bdstatic.com/linksubmit/push.js"}],meta:[{name:"google-site-verification",content:"nDcortrmOitFkAImU-EeXZi_ommPGj6HiXB2GmXRBjo"},{name:"msvalidate.01",content:"B47C607274B7109AEF27A38F88C9FE53"},{name:"description",content:(s||e.site.siteMetadata.title)+" - "+e.site.siteMetadata.description+" "+(c||"")+" "+(r||e.site.siteMetadata.keywords||"")},{name:"keywords",content:r||e.site.siteMetadata.keywords||""},{property:"og:title",content:s||e.site.siteMetadata.title},{name:"og:description",content:e.site.siteMetadata.description}]}),n&&i.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:u()("container",{"with-header":n})},t))},data:a})}},183:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-post-js-c633c0fe0176e2c54e56.js.map