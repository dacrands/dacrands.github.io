(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(153),i=a(156);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(144),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(146),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},146:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},147:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("small",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{className:"footer__link",href:"mailto:davecrands@gmail.com"},"Email")),r.a.createElement("li",null,r.a.createElement("a",{className:"footer__link",href:"https://github.com/dacrands",target:"_blank",rel:"noopener noreferrer"},"Github")))),r.a.createElement("small",null,"© ",(new Date).getFullYear(),","," ",r.a.createElement("a",{className:"citation",href:"http://crandall.dev",target:"_blank",rel:"noopener noreferrer"},"David Crandall")))}},148:function(e,t,a){"use strict";var n=a(149),r=a(0),o=a.n(r),i=a(145);t.a=function(){return o.a.createElement(i.StaticQuery,{query:"4112491792",render:function(e){return o.a.createElement("aside",{className:"aside"},o.a.createElement("nav",{className:"aside__nav"},o.a.createElement(i.Link,{to:"/",className:"aside__nav-title"},o.a.createElement("h2",null,"Blog"),o.a.createElement("small",null,"by David Crandall")),e.allMarkdownRemark.edges.map(function(e){return o.a.createElement(i.Link,{className:"aside__nav-link",to:e.node.frontmatter.path,activeStyle:{color:"#a8b1ce"}},o.a.createElement("p",null,e.node.frontmatter.title),o.a.createElement("small",null,e.node.frontmatter.date))})))},data:n})}},149:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{path:"/blog/4-2-2019",date:"April 02, 2019",title:"My First Technical Interview! Part 1: The Phoner",info:"A review of the phone screen that led to my on-site technical interview."}}},{node:{frontmatter:{path:"/blog/1-6-2019",date:"January 06, 2019",title:"Connect your SPA with your Back-end",info:"A lesson in cookie-authentication using Gatsby and Flask"}}},{node:{frontmatter:{path:"/blog/11-21-18",date:"November 21, 2018",title:"How NOT to Create a Dropbox Clone",info:"Before finding out about S3, I built a file-uploading site that saved files directly to the server."}}},{node:{frontmatter:{path:"/blog/10-7-2018",date:"October 07, 2018",title:"Hide Your Keys, Folks (Part II)",info:"Build a proxy server with Flask and protect your API key."}}},{node:{frontmatter:{path:"/blog/10-6-18",date:"October 06, 2018",title:"Downloading SVGs FAST with Python",info:"Use Python and the requests library to quickly scrape and download raw SVGs from github"}}},{node:{frontmatter:{path:"/blog/9-27-18",date:"September 27, 2018",title:"Hide your keys, folks (Part I)",info:"Steps beginners can use to protect their API keys when sharing projects"}}},{node:{frontmatter:{path:"/blog/8-24-18",date:"August 24, 2018",title:"NeXT Logo in HTML and CSS",info:"Recreating Rand's NeXT logo using HTML and CSS"}}},{node:{frontmatter:{path:"/blog/8-18-18",date:"August 18, 2018",title:"Revisiting Python Data Analysis: Part 2",info:"Visualizing data with NY State Chemical Dependence Treatment Admissions with Python"}}},{node:{frontmatter:{path:"/blog/8-13-18",date:"August 13, 2018",title:"MIT 6.00.1x Course Review",info:"My experience with MIT's Intro to CS online course"}}},{node:{frontmatter:{path:"/blog/8-11-18",date:"August 11, 2018",title:"Revisiting Python Data Visualizationd",info:"Visualizing WWI casualties with Python"}}},{node:{frontmatter:{path:"/blog/8-09-18",date:"August 09, 2018",title:"Styled Components",info:"Entering of the world of CSS-in-JS, sort of."}}},{node:{frontmatter:{path:"/blog/8-06-18",date:"August 06, 2018",title:"Learning to program",info:"My experience of learning to program"}}},{node:{frontmatter:{path:"/blog/8-05-18",date:"August 05, 2018",title:"Hello World!",info:"How this blog came to be"}}}]}}}},150:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(51),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},151:function(e){e.exports={data:{site:{siteMetadata:{title:"David Crandall"}}}}},152:function(e,t,a){},153:function(e,t,a){"use strict";var n=a(151),r=a(0),o=a.n(r),i=a(4),l=a.n(i),s=a(145),c=a(7),u=a.n(c),d=function(e){function t(t){return e.call(this,t)||this}return u()(t,e),t.prototype.render=function(){return o.a.createElement("nav",{className:"navbar"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/blog"},"Blog"))))},t}(r.Component);d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:"David Crandall"};a(148),a(147),a(152);var m=function(e){var t=e.children;return o.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,t))},data:n})};m.propTypes={children:l.a.node.isRequired};t.a=m},156:function(e,t,a){"use strict";var n=a(157),r=a(0),o=a.n(r),i=a(4),l=a.n(i),s=a(158),c=a.n(s),u=a(145);function d(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title;return o.a.createElement(u.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var m="1025518380"},157:function(e){e.exports={data:{site:{siteMetadata:{title:"David Crandall",description:"David Crandall's portfolio and blog. David is a full-stack web developer with a passiong\n    for building things with React and Flask.",author:"dacrands"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-a0be79952e5de02e4705.js.map