webpackJsonp([0xb4f04fed1af2],{344:function(e,a){e.exports={data:{markdownRemark:{html:'<p>\n<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/WinonaSavingsBankVault.JPG/1024px-WinonaSavingsBankVault.JPG" alt="Bank Vault"></p>\n<p>In the <a href="https://dacrands.github.io/9-27-18">last installment</a>, we discussed some ways in which front-end developers can protect their API-keys. Ultimately we came to the conclusion that to truly protect your API-keys, you will need a designated back-end — a proxy server — to handle your API calls.</p>\n<p>In this example we will be using <em>Flask</em> for our back-end, though the general concept can be easily applied by developers of any stack. The idea is that our front-end application will ping our server, our server — based on the request from the client— will then access the API. In doing so, we no longer need an API-key to be present in the client request, it will be handled by our back-end.</p>\n<h2>Prerequisites</h2>\n<hr>\n<p>My goal is to make this accessible to anyone, including developers who have never used Python. Luckily, Python syntax is very semantic and intuitive, so hopefully developers from other stacks will have no problem following along with the examples used in this post.</p>\n<p>Being stack agnostic, you will likely get the most out of this post if you have a general understanding of what servers do, how they handle requests, how they respond, etc. Also, if you\'re a back-end developer, this is not for you. You know what to do already. This is for our front-end folks who want to hide their keys, nothing more. </p>\n<h2>A Minimal Flask App</h2>\n<hr>\n<p>This app will be extremely minimal. We don\'t need a database, we just a server to make requests to our API and pass JSON to our Redux app, nothing more. Of course, there will be vulnerabilities in this app, but your API-key will be safe and others will take note of your effort to keep it secret (hopefully).</p>\n<h3>Create an Environment</h3>\n<p>When it comes to Python, I\'m an <a href="https://www.anaconda.com/download/">Anaconda</a> person. If you don\'t use Anaconda, the following instructions shouldn\'t be hard to follow using pip.</p>\n<p>Now that that\'s out of the way, go ahead and create an environment for your flask app:</p>\n<div class="gatsby-highlight" data-language="ps">\n      <pre class="language-ps"><code class="language-ps">conda create --name flaskenv</code></pre>\n      </div>\n<br>\n<h3>Activate an Environment</h3>\n<p>I will demonstrate how to activate a Python environment on a Windows OS, simply because Windows users have it hard enough as it is.</p>\n<p>I love <em>PowerShell,</em> but when it comes to Python virtual-environments, you\'ll want to use the command prompt. We have a lot to cover in this post, so I won\'t go in-depth as to why we are using the latter versus the former, though I encourage you to play around with both options to discover the answer organically.</p>\n<div class="gatsby-highlight" data-language="commandline">\n      <pre class="language-commandline"><code class="language-commandline">C:\\&gt; activate flaskenv\n(flaskenv) C:\\&gt; </code></pre>\n      </div>\n<br>\n<p>Once your environment is activated, you can start installing your packages. The first package you will need is <code class="language-text">pip</code>, as this is how we will be downloading our packages. I know this may appear a bit strange to download a package-manager inside a package-manager, but it demonstrates the flexibility of using <code class="language-text">conda</code>.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">(flaskenv) C:\\&gt; conda install pip</code></pre>\n      </div>\n<br>\n<p>Now we can use pip to install our packages, but always make sure your environment is active before doing so. If your environment is not active, not only will you not be downloading all of those packages globally on your machine, but you will not be able to save the packages your use to the <code class="language-text">requirements.txt</code> file, which is used to automatically download all of the packages in your application (Think of the <code class="language-text">requirements.txt</code> as a <code class="language-text">package.json</code> because it essential is).</p>\n<p>Once you install <code class="language-text">pip</code>, you can install <code class="language-text">flask</code> using <code class="language-text">pip</code>.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">(flaskenv) C:\\&gt; pip install flask</code></pre>\n      </div>\n<br>\n<p>Presuming everything went smoothly, we can move on to creating our app.</p>\n<h2>App It Up</h2>\n<hr>\n<p>A basic flask application has the following structure</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">api-app/\n  app/\n    __init__.py\n    routes.py\n  run.py\n  requirements.txt</code></pre>\n      </div>\n<br>\n<h3>__init__.py</h3>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask\n\napp <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>If you\'d like to learn more about Python class and OOP, <a href="https://jeffknupp.com/blog/2014/06/18/improve-your-python-python-classes-and-object-oriented-programming/">this article</a> is excellent.</p>\n<p>Here we are assigning an instance of the <code class="language-text">Flask</code> class to the variable <code class="language-text">app</code>. As your app becomes more complex, you will pass this class instance to other libraries. For example:</p>\n<p><em>Note: This is an example and not part of this project.</em></p>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask\n<span class="token keyword">from</span> flask_sqlalchemy <span class="token keyword">import</span> SQLAlchemy\n\napp <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>\ndb <span class="token operator">=</span> SQLAlchemy<span class="token punctuation">(</span>app<span class="token punctuation">)</span></code></pre>\n      </div>\n<br>\n<p>This is how inheritance works in Python. The SQLAlchemy class (the child class) instance inherits <code class="language-text">app</code> (the parent class) — this provides the child class with the attributes and methods of the parent class.</p>\n<p>Passing <code class="language-text">__name__</code> to <code class="language-text">Flask</code> tells Python the proper way to execute the file. This has to do with how Python executes imports versus main programs. For more information, you may reference <a href="https://stackoverflow.com/questions/419163/what-does-if-name-main-do">this stackoverflow post</a>.</p>\n<h3>routes.py</h3>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> app <span class="token keyword">import</span> app\n\n@app<span class="token punctuation">.</span>route<span class="token punctuation">(</span><span class="token string">\'/\'</span><span class="token punctuation">)</span>\n<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">return</span> <span class="token string">\'Hello, World!\'</span></code></pre>\n      </div>\n<br>\n<p>For brevity sake, we won\'t delve too much into the syntax here. Hopefully it\'s somewhat readily apparent what is happening here. If it\'s not, it will be as we create more routes.</p>\n<p>Now that we have a route created, we can import our routes into our <code class="language-text">__init__.py</code> file.</p>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># app/__init__.py</span>\n<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask\n\napp <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>\n\n<span class="token keyword">from</span> app <span class="token keyword">import</span> routes</code></pre>\n      </div>\n<br>\n<p>We place the routes import at the bottom to avoid what\'s known as a <em>circular dependency</em> — you can learn more about this issue <a href="https://stackabuse.com/python-circular-imports/">here</a>.</p>\n<h3>run.py</h3>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> app <span class="token keyword">import</span> app</code></pre>\n      </div>\n<br>\n<p>That\'s all the file requires. To clarify,  <code class="language-text">app</code> is the Flask instance we created in <code class="language-text">__init__.py</code>, and it is a member of the <code class="language-text">app</code> package. The <code class="language-text">app</code> package refers to the <code class="language-text">/app</code> folder in our directory, thus why in our <code class="language-text">__init__.py</code> file we are able to import our <code class="language-text">routes</code> from <code class="language-text">app</code>.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">/app\n  routes.py</code></pre>\n      </div>\n<br>\n<h3>FLASK_APP</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">(flaskenv) C:\\api-app\\&gt;set FLASK_APP=run.py</code></pre>\n      </div>\n<p>Flask will look for an environment <code class="language-text">FLASK_APP</code> set to, in this case, <code class="language-text">run.py</code>. This will instruct Flask on the proper way to import our application.</p>\n<h3>Run it!</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">(flaskenv) C:\\api-app\\&gt;flask run</code></pre>\n      </div>\n<br>\n<p>If everything goes smoothly, you can visit your app at <code class="language-text">http://127:0.0.0.1:5000/</code></p>',frontmatter:{path:"/10-7-18",title:"Hide Your Keys, Folks (Part II)",tags:["Python","virtual environments","pip","Requests"]}}},pathContext:{}}}});
//# sourceMappingURL=path---10-7-18-bf4e0d95451ceac1ec73.js.map