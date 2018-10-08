webpackJsonp([0x915f3174b889],{350:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>The Original</h2>\n<p><img src="https://www.logodesignlove.com/images/classic/next-logo-paul-rand.jpg" alt="Next Logo"></p>\n<h2>My Version</h2>\n<p><img src="https://i.imgur.com/TwwHjONl.jpg" alt="my version of the next logo"></p>\n<p>Okay, so far from an exact copy, but that\'s okay (for now).  </p>\n<h2>Content First, Style Second</h2>\n<p>Let\'s start by adding the only content for this little project. This first <code class="language-text">.box</code> will eventually be a grid element. I wrapped the h1s in divs to help with padding once we try to fine tune the kearning.</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>N<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>e<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>X<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>T<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p><img src="https://i.imgur.com/w0b1MpOl.jpg" alt="Imgur"></p>\n<h2>Font and Colors</h2>\n<p>I used the chrome color picker to grab the colors from the logo. Also, for the moment I am using the Roboto font since it\'s somewhat close to the font used in the logo, though the characters are too narrow — I will research alternatives, but it will do for now.</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token atrule"><span class="token rule">@import</span> <span class="token url">url(\'https://fonts.googleapis.com/css?family=Roboto\')</span><span class="token punctuation">;</span></span>\n\n$<span class="token property">red</span><span class="token punctuation">:</span> #f53e30<span class="token punctuation">;</span>\n$<span class="token property">green</span><span class="token punctuation">:</span> #5ec059<span class="token punctuation">;</span>\n$<span class="token property">yellow</span><span class="token punctuation">:</span> #fdf02f<span class="token punctuation">;</span>\n$<span class="token property">pink</span><span class="token punctuation">:</span> #e15fa5<span class="token punctuation">;</span></code></pre>\n      </div>\n<br>\n<h2>The Main Box</h2>\n<p>Now lets get the first of three "squares" that will comprise our cube. It is a 2x2 grid that will wrap our divs, where each div contains one letter.</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n  <span class="token property">margin-top</span><span class="token punctuation">:</span> -165px<span class="token punctuation">;</span>\n  <span class="token property">margin-left</span><span class="token punctuation">:</span> -180px<span class="token punctuation">;</span>  \n  <span class="token property">padding-top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>\n  <span class="token property">font-family</span><span class="token punctuation">:</span> $font-family<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>\n  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 175px 175px<span class="token punctuation">;</span>\n  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 175px 175px<span class="token punctuation">;</span>\n  <span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-25deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><img src="https://i.imgur.com/QouIPJZl.jpg" alt="Imgur"></p>\n<h2>Kearning</h2>\n<p>Right now we have a square, though this will cause some problems once we try to kearn our letters, but we\'ll cross that div when we get to it. For right now, let\'s get some basic font sizing.</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n  <span class="token property">margin-top</span><span class="token punctuation">:</span> -165px<span class="token punctuation">;</span>\n  <span class="token property">margin-left</span><span class="token punctuation">:</span> -180px<span class="token punctuation">;</span>  \n  <span class="token property">padding-top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>\n  <span class="token property">font-family</span><span class="token punctuation">:</span> $font-family<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>\n  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 175px 175px<span class="token punctuation">;</span>\n  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 175px 175px<span class="token punctuation">;</span>\n  <span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-25deg<span class="token punctuation">)</span><span class="token selector">;\n  \n  div</span> <span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> $red<span class="token punctuation">;</span>   \n    <span class="token property">font-size</span><span class="token punctuation">:</span> 7rem<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><img src="https://i.imgur.com/JtGOiCol.jpg" alt="Imgur"></p>\n<br>\n<h2>It\'s a Lower Case e!</h2>\n<p>Obviously we need to increase the size of the lower-case so it matches the other letters, so let\'s do that.</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.box</span> <span class="token punctuation">{</span>  \n  <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n  <span class="token property">margin-top</span><span class="token punctuation">:</span> -165px<span class="token punctuation">;</span>\n  <span class="token property">margin-left</span><span class="token punctuation">:</span> -180px<span class="token punctuation">;</span>  \n  <span class="token property">padding-top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>\n  <span class="token property">font-family</span><span class="token punctuation">:</span> $font-family<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>\n  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 175px 175px<span class="token punctuation">;</span>\n  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 175px 175px<span class="token punctuation">;</span>\n  <span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-25deg<span class="token punctuation">)</span><span class="token selector">;\n  \n  div</span> <span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>    \n    <span class="token property">color</span><span class="token punctuation">:</span> $red<span class="token punctuation">;</span>   \n    <span class="token property">font-size</span><span class="token punctuation">:</span> 7rem<span class="token selector">;\n  \n    &amp;:nth-of-type(2)</span> <span class="token punctuation">{</span>\n      <span class="token property">color</span><span class="token punctuation">:</span> $yellow<span class="token punctuation">;</span>\n      <span class="token property">font-size</span><span class="token punctuation">:</span> 9rem<span class="token punctuation">;</span>\n      <span class="token property">margin-top</span><span class="token punctuation">:</span> -55px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span></code></pre>\n      </div>\n<p><img src="https://i.imgur.com/AUfh3Ofl.jpg" alt="Imgur"></p>\n<p>The size and spacing needs some tinkering, but for right now it\'s passable.</p>\n<h2>Colors</h2>\n<p>Let\'s add the rest of our colors.</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n  <span class="token property">margin-top</span><span class="token punctuation">:</span> -165px<span class="token punctuation">;</span>\n  <span class="token property">margin-left</span><span class="token punctuation">:</span> -180px<span class="token punctuation">;</span>  \n  <span class="token property">padding-top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>\n  <span class="token property">font-family</span><span class="token punctuation">:</span> $font-family<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>\n  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 175px 175px<span class="token punctuation">;</span>\n  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 175px 175px<span class="token punctuation">;</span>\n  <span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-25deg<span class="token punctuation">)</span><span class="token selector">;\n  \n  div</span> <span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> $red<span class="token punctuation">;</span>   \n    <span class="token property">font-size</span><span class="token punctuation">:</span> 7rem<span class="token selector">;\n  \n    &amp;:nth-of-type(2)</span> <span class="token punctuation">{</span>\n      <span class="token property">color</span><span class="token punctuation">:</span> $yellow<span class="token punctuation">;</span>\n      <span class="token property">font-size</span><span class="token punctuation">:</span> 9rem<span class="token punctuation">;</span>\n      <span class="token property">margin-top</span><span class="token punctuation">:</span> -55px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">&amp;:nth-of-type(3)</span> <span class="token punctuation">{</span>\n      <span class="token property">color</span><span class="token punctuation">:</span> $green<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">&amp;:nth-of-type(4)</span> <span class="token punctuation">{</span>\n      <span class="token property">color</span><span class="token punctuation">:</span> $pink<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><img src="https://i.imgur.com/yVxOZL5l.jpg" alt="Imgur"></p>\n<br>\n<h2>Fine Tuning</h2>\n<p>Now we see the primary issue with our font — it\'s too narrow four our square. Until we find a wider font with characters that have a squarer aspect ratio, we will need to cheat a bit.</p>\n<p>We\'ll change the grid on our box element from this:</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 175px 175px<span class="token punctuation">;</span>\n  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 175px 175px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>To this:</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 175px 175px<span class="token punctuation">;</span>\n  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 195px 195px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><img src="https://i.imgur.com/WpW3e2Pl.jpg" alt="Imgur">\n<br></p>\n<h2>The Home Stretch</h2>\n<p>Now let\'s add the two squares we\'ll need to create the cube. This is the hard part that requires a lot of fine tuning, so I encourage you to play around with the code.</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>box-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>box-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<iframe height=\'565\' scrolling=\'no\' title=\'NeXT Logo \' src=\'//codepen.io/dacrands/embed/qMOXeR/?height=265&theme-id=0&default-tab=css,result&embed-version=2\' frameborder=\'no\' allowtransparency=\'true\' allowfullscreen=\'true\' style=\'width: 100%;\'>See the Pen <a href=\'https://codepen.io/dacrands/pen/qMOXeR/\'>NeXT Logo </a> by David Crandall (<a href=\'https://codepen.io/dacrands\'>@dacrands</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>',frontmatter:{path:"/8-24-18",title:"NeXT Logo in HTML and CSS",tags:["Steve Jobs","Paul Rand","NeXT","Logo"]}}},pathContext:{}}}});
//# sourceMappingURL=path---8-24-18-7388c1dc9341ba18277a.js.map