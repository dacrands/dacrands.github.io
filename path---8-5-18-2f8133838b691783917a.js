webpackJsonp([0xb98c3633da96],{352:function(e,t){e.exports={data:{markdownRemark:{html:'<p>I feel a bit foolish for not starting what I hope to be\na fruitful blogging career a bit sooner, but the journey to this blog has been an arduous one. In fact, the goal of this first post is to catalogue my experience of going from completely blogless to developing the site you are on now.</p>\n<p>Before I delve into it , there are a few things to note about this site. First, this site is completely-static, which is likely not a surprise considering it\'s hosted on gitpages. However, what may be a surprise is that this site is a PWA  (Progressive Web App) built in React, but more on that later.  </p>\n<p>This also happens to be markdown, which makes it very easy to do things like this:</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">CodeSnippet</span><span class="token punctuation">(</span>bool<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">blockCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`Markdown\'s block code is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> bool <span class="token operator">?</span> <span class="token string">\'awesome\'</span> <span class="token punctuation">:</span> <span class="token string">\'really awesome\'</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>...as well as other things, like adding\nfont-accents that are <strong>100%</strong> <em>necessary.</em></p>\n<p>This blog also implements <strong>YAML front matter,</strong> which allows you to add useful data to your markdown files. For example, here\'s a look at the front matter for the markdown files used on this site:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">---\n_id: 0\npath: &#39;/8-5-18&#39;\ntitle: &#39;Hello World!&#39;\ntags: [&#39;GatsbyJS&#39;, &#39;Markdown&#39;]\n---</code></pre>\n      </div>\n<p>All of this is well and good, but how did we get to this point?</p>\n<h2>Dr. Jekyll and Mr. Hyde</h2>\n<p>I had a problem. I wanted to host a robust site on gitpages (viz., a blog), caveat being that gitpages only supports static sites. What do I mean by a <em>robust</em> site? </p>\n<p>Well, the process of hosting a simple static site on gitpages, i.e., basic HTML, CSS, &#x26; JS, is immensely tedious if you plan on changing the content of your site and/or have multiple pages. In other words, if you are hosting a basic portfolio site or simple projects (e.g., Pomodoro timer, landing-page template)  on gitpages, then a very basic static site may be the right tool for the job. However, when you have dynamic content, such as with a blog, constantly altering static files is completely impractical.</p>\n<p>Presumably like most who\'ve encountered this quandry of wanting to host a complex site on gitpages, I came across <a href="https://jekyllrb.com/">Jekyll</a> and became very excited. You\'re telling me I can host a markdown blog on gitpages without a database? Wow, that\'s amazing!</p>\n<p>Now as someone who is not really for the whole meme trend, I apologize for what I\'m about to do, but I feel it is the best transition possible.</p>\n<p><img src="https://i.imgur.com/fk6VlTyl.jpg" alt="Imgur"></p>\n<p>I\'ve successfully configured Python (and Anaconda), Node, R, C#, and Java on multiple Windows machines, but configuring Jekyll on Windows is a different beast...</p>\n<p>From the Jekyll site:</p>\n<blockquote>\n<p>While Windows is not an officially-supported platform, it can be used to run Jekyll with the proper tweaks. This page aims to collect some of the general knowledge and lessons that have been unearthed by Windows users.</p>\n</blockquote>\n<p>All this talk of "tweaks" and things being "unearthed", as well as my personal experience attempting to configure it for Windows, made me increasingly disillusioned with Jekyll. Dare I say Dr. Jekyll, and I\'m seeing Mr...you understand.</p>\n<h2>The Great Gatsby</h2>\n<p>For awhile my .github.io site lay dormant, hosting a site that I believe totalled six files, three of which were html. Jekyll and the larger world of static site generators were always at the back of my mind, though I never really revisited the topic again. I was quite busy with other projects, work, school, etc., so the idea of enduring the nightmare that was configuring Jekyll on Windows was not very appetizing.</p>\n<p>Then one day I am listening to the programming podcast <em>Syntax</em> and one of the developers starts to talk about a static-site generator called <a href="https://www.gatsbyjs.org/">Gatsby</a>, which is a "blazing-fast static site generator for React." As someone who loves React, this seemed almost too good to be true — even more so once some research revealed Gatsby builds can easily be hosted on Gitpages!</p>\n<h2>The Force Awakens</h2>\n<p>After messing around with a couple of the gatsby boilerplates, I knew I finally found what I was looking for. After following <a href="https://www.youtube.com/watch?v=b2H7fWhQcdE&#x26;list=PLLnpHn493BHHfoINKLELxDch3uJlSapxg">these tutorials</a> (created by the podcast host who first introduced me to gatsby), I was finally able to host a markdown blog on gitpages!</p>\n<p>Of course, 90% of the work was done for me via the boilerplate and the tutorials linked above, but the point of this site is not to demonstrate my programming skills. Rather, this site — which, to reiterate, is hosted for free and quite fast — is meant to make the blog writing process as easy as possible for me, which means being able to write posts in markdown.</p>\n<p>Nevertheless, I didn\'t configure the webpack and I\'m not 100% sure how all of this stuff works (though I do have a good idea), so am I phony for using Gatsby?</p>\n<h2>Is Gatsby cheating?</h2>\n<p>Pretending I am qualified to have any sort of valuable opinion on this contrived question I am using for click-bait-esque purposes on my first blog post, I would say the answer is no. How can it be? Someone using GatsbyJS presumably knows React, Node, Git, etc. Needless to say, it takes a lot of learning to get to the point where you can even use boilerplates such as this. </p>\n<p>I have also written my own React and React-Redux boilerplates that use webpack, so I don\'t feel too bad for using a starter project this one time.</p>\n<h2>Conclusion</h2>\n<p>So I eventually got my blog hosted on gitpages. Of course, there are some issues that need to be addressed, such as the FOUC (Flashing of Unstyled Content), but all good things in time. For right now, I couldn\'t be happier with my first blog. Now the only thing I have to do is actually write blogs!</p>',frontmatter:{path:"/8-5-18",title:"Hello World!",tags:["GatsbyJS","Markdown"]}}},pathContext:{}}}});
//# sourceMappingURL=path---8-5-18-2f8133838b691783917a.js.map