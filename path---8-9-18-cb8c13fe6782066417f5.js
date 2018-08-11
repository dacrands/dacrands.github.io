webpackJsonp([0xcee78ca5afff],{340:function(n,s){n.exports={data:{markdownRemark:{html:'<hr>\n<p>I\'m not a big fan of CSS-in-JS. When I see style objects in components it feels out of place, sort of like those iq tests where you have to find the item that doesn\'t belong.</p>\n<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Raven_Matrix.svg/290px-Raven_Matrix.svg.png" alt="alt text"></p>\n<p>Perhaps the primary issue is feeling bound to the component. This may reflect my lack of familiarity with CSS-in-JS design conventions, but when I think of writing designs, I think of writing styles I can reuse throughout many components, that span the document. To me, inline styles are the antithesis of what I think good CSS should be -- reuasble. </p>\n<h3>Introducing styled-components</h3>\n<p>I believe keeping an open-mind is important. That said, as I was learning about this Gatsby stuff I came across a rather intriguing technology that had me rethink this whole CSS-in-JS way of life. </p>\n<p>I\'m talking about <a href="https://www.styled-components.com/">styled-components</a>. Let\'s take a look at some examples. </p>\n<p><em>All of these code snippets are taken from the code I used to create the landing page of this site (with some slight modifications for the purposes of this blog).</em></p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">\'styled-components\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Ul <span class="token operator">=</span> styled<span class="token punctuation">.</span>ul<span class="token template-string"><span class="token string">`\n  list-style: none;\n  margin: 0;  \n`</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Li <span class="token operator">=</span> styled<span class="token punctuation">.</span>li<span class="token template-string"><span class="token string">` \n  margin: .75rem .525rem;\n`</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> StyledLink <span class="token operator">=</span> <span class="token function">styled</span><span class="token punctuation">(</span>Link<span class="token punctuation">)</span><span class="token template-string"><span class="token string">`\n  display: block;\n  padding: .6rem;\n  border: 1px solid #dadada;\n  text-align: center;\n  transition: all 200ms ease;\n  &amp;:hover {\n    background: #dadada;\n  }\n`</span></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Take note that we\'re writing CSS, not JS, inside our JS! Why am I so jazzed about this? Because I feel at home when I read and write styles in CSS. Of course this means you\'ll need to download a new vscode plugin, <a href="https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components">which you can find here</a>.</p>\n<p>Let\'s take a look at how this would appear in our React.   </p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ul</span><span class="token punctuation">></span></span>    \n  {\n    data.allMarkdownRemark.edges.map(post => (\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Li</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>StyledLink</span> \n          <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span>{post.node.frontmatter.path}</span>\n        <span class="token punctuation">></span></span>\n          {post.node.frontmatter.title}\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>StyledLink</span><span class="token punctuation">></span></span>              \n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Li</span><span class="token punctuation">></span></span>\n    ))\n  }\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Ul</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Pretty cool right? Although we miss out on the ultra-readability provided by something like BEM, the code is still readable since we have <strong>semantic</strong> components that can be reused. Also note how clean our components are. We don\'t have any classNames, style objects, or style props. Visually, our CSS is more removed from our JS than it would be if we were to use conventional CSS selectors. What really counts is the quality of our component names, which is within our control.</p>\n<h3>Now the good stuff</h3>\n<p>Of course, that\'s not all styled-components can do -- if it were, we wouldn\'t be here right now. Let\'s take a look at some more use cases.</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> Container <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token string">`\n  max-width: 960px;\n  margin: 0 auto;  \n`</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> ExtendedContainer <span class="token operator">=</span> Container<span class="token punctuation">.</span>extend<span class="token punctuation">.</span><span class="token function">attrs</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  background<span class="token punctuation">:</span> props <span class="token operator">=></span> props<span class="token punctuation">.</span>bg <span class="token operator">||</span> <span class="token string">\'#ffffff\'</span><span class="token punctuation">,</span>\n  height<span class="token punctuation">:</span> props <span class="token operator">=></span> props<span class="token punctuation">.</span>height <span class="token operator">||</span> <span class="token string">\'40vh\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token template-string"><span class="token string">`  \n  min-height: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>props <span class="token operator">=></span> props<span class="token punctuation">.</span>height<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\n  background: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>props <span class="token operator">=></span> props<span class="token punctuation">.</span>background<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\n  padding-bottom: 1.45rem;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n\n  h3 {\n    margin-bottom: 6px;\n  }\n`</span></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>First let\'s take note of <em>.extend</em></p>\n<p>By using extend we can continue to generate semantically rich components while keeping our code DRY. Furthermore, this inheritance allows us to, once again, keep all references to an component\'s styles within the component name. I\'m using <em>&#x3C;ExtendedContainer></em> for the demonstrative purposes, but you can understand the power of something like <em>&#x3C;FlexContainer></em> extending a <em>&#x3C;Container></em> style-component. </p>\n<p>Also take note of the nesting. Yes, styled-components supports Sass!</p>\n<p>Now let\'s take look at what is going on with that <em>.attrs</em> method.</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ExtendedContainer</span> <span class="token attr-name">bg</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#dadada<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>50vh<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  // You\'d have child components here\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ExtendedContainer</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>So there may be some cases were props makes sense. If a component\'s only task is providing styles, such as a container component which makes an elaborate grid, it makes sense to pass styles through props since ultimately these props get sent to our CSS. In other words, we wouldn\'t expect to see any <em>onClick</em> or <em>to</em> events on these components since they are strictly for stylings.</p>\n<h3>Final Thoughts</h3>\n<p>I\'m just starting out with this and am not sure if I\'d use it outside of Gatsby, but it\'s very funny to work with in the meantime. The idea of having super clean components and JSX through styled containers, extending components, and intelligent use of props, is very cool.</p>',frontmatter:{path:"/8-9-18",title:"Styled Components"}}},pathContext:{}}}});
//# sourceMappingURL=path---8-9-18-cb8c13fe6782066417f5.js.map