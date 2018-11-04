webpackJsonp([0xb4f04fed1af2],{346:function(e,a){e.exports={data:{markdownRemark:{html:'<p>\n<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/WinonaSavingsBankVault.JPG/1024px-WinonaSavingsBankVault.JPG" alt="Bank Vault"></p>\n<p><em>(This blog post is a work in progress.)</em></p>\n<p>In the <a href="https://dacrands.github.io/9-27-18">last installment</a>, we discussed some ways in which front-end developers can protect their API-keys. .We came to the conclusion that to truly protect your API-keys, you will need a designated back-end — a proxy server — to handle your API calls.</p>\n<p>In this example we will be using <em>Flask</em> to create such an application, though the general concept can be easily applied by developers of any stack. The idea is that our front-end application will send a request to our <em>Flask</em> app. Then our app, based on the request from the client, will send a request to the API. In doing so, we no longer need an API-key to be present in the client request since it will be handled by our back-end.</p>\n<h2>Table of Contents</h2>\n<hr>\n<ul>\n<li><a href="#prereq">Prerequisites</a></li>\n<li><a href="#theApp">What we\'re making</a></li>\n<li>\n<p><a href="#env">Environments</a></p>\n<ul>\n<li><a href="#createEnv">Create an Environment</a></li>\n<li><a href="#activeEnv">Activate an Environment</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#appItUp">App It Up</a></p>\n<ul>\n<li><a href="#init">__init__.py</a></li>\n<li><a href="#routes">routes.py</a></li>\n<li><a href="#run">run.py</a></li>\n<li><a href="#flaskApp">FLASK_APP</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#config">Configuration</a></p>\n<ul>\n<li><a href="#configPy">config.py</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#requests">Requests</a></p>\n<ul>\n<li><a href="#makeRequest">Let\'s make a request</a></li>\n</ul>\n</li>\n</ul>\n<p><a id="prereq"></a></p>\n<h2>Prerequisites</h2>\n<hr>\n<ul>\n<li>an API you\'re interested in and any necessary keys. <a href="https://apilist.fun/">Here a big list of APIs</a></li>\n<li>Basic command-line skills</li>\n<li>Python 3</li>\n<li>Git/Github</li>\n</ul>\n<p>My goal is to make this tutorial accessible to front-end developers with limited back-end experience, including developers who have never used Python. Luckily, Python syntax is very semantic and intuitive, so hopefully developers from other stacks will have no problem following along with the examples used in this post.</p>\n<p>If you\'re a back-end developer, this is not for you. You know what to do already. This is for our beginner front-end developers who want to hide their keys, nothing more.</p>\n<p><a id="theApp"></a></p>\n<h2>What We\'re Making</h2>\n<hr>\n<p><img src="https://i.imgur.com/8RAVXwH.png" alt="Imgur"></p>\n<p>This app is an extremely minimal Flask server. We don\'t need a database, we just need a server to make requests to our API and pass JSON to our React/Redux app. Of course, there will be vulnerabilities in this app, but your API-key will be safe and others will take note of your effort to keep it secret (hopefully).</p>\n<p>If you\'re looking for an in-depth introduction to Flask, Miguel Ginberg\'s <a href="https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world">Flask mega tutorial</a> is excellent.</p>\n<p><a id="env"></a></p>\n<h2>Environments</h2>\n<hr>\n<p>For any Python project, regardless of it\'s size or complexity, it\'s a good idea to create a virtual environment. This ensures that as libraries update and backwards-compatability becomes an issue, your app will still work.</p>\n<p><a id="createEnv"></a></p>\n<h3>Create an Environment</h3>\n<p>When it comes to Python, I\'m an  <a href="https://www.anaconda.com/">Anaconda</a> person. Anconda is basically Python but it comes bundled with a lot of data-science libraries and other features like <a href="http://jupyter.org/">Jupyter Notebooks</a>. I suggest you give it a try. </p>\n<p>Find the <a href="https://www.anaconda.com/download">download instructions</a> for your OS and install Anaconda. If you don\'t use Anaconda, here are the instructions for <a href="https://packaging.python.org/guides/installing-using-pip-and-virtualenv/">creating a virtualenv with pip</a>. We will only being using <code class="language-text">conda</code>, the Anaconda CLI, for creating our environment and downloading <code class="language-text">pip</code>. After that, we will use <code class="language-text">pip</code> for everything else.</p>\n<p>Now that that\'s out of the way, go ahead and create an environment for your Flask app using <code class="language-text">conda</code>:</p>\n<div class="gatsby-highlight" data-language="commandline">\n      <pre class="language-commandline"><code class="language-commandline">C:\\&gt; conda create --name flaskenv</code></pre>\n      </div>\n<br>\n<p>This will create a virtual environment named <code class="language-text">flaskenv</code>.\nTo see a list of your virtual environments, run the following:</p>\n<div class="gatsby-highlight" data-language="commandline">\n      <pre class="language-commandline"><code class="language-commandline">C:\\&gt; conda info --env</code></pre>\n      </div>\n<br>\n<p>This will print a list of your environments to the console. Learn more about <a href="https://conda.io/docs/user-guide/tasks/manage-environments.html">managing environments with conda</a>.</p>\n<p><a id="activeEnv"></a></p>\n<h3>Activating an Environment</h3>\n<p>I will demonstrate how to activate a Python environment on a Windows OS, simply because Windows users have it hard enough as it is.</p>\n<p>I love <em>PowerShell,</em> but when it comes to Python virtual-environments, you\'ll want to use the command prompt. We have a lot to cover in this post, so I won\'t go in-depth as to why we are using the latter versus the former, though I encourage you to play around with both options to discover the answer organically.</p>\n<div class="gatsby-highlight" data-language="commandline">\n      <pre class="language-commandline"><code class="language-commandline">C:\\&gt; activate flaskenv\n(flaskenv) C:\\&gt; </code></pre>\n      </div>\n<br>\n<p>Once your environment is activated, you can start installing your packages. The first package you will need is <code class="language-text">pip</code>, as this is how we will be downloading our packages. I know this may appear a bit strange to download a package-manager inside a package-manager, but it demonstrates the flexibility of using <code class="language-text">conda</code>.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">(flaskenv) C:\\&gt; conda install pip</code></pre>\n      </div>\n<br>\n<p>Now we can use <code class="language-text">pip</code> to install our packages, but always make sure your environment is active before doing so. If your environment is not active, not only will you be downloading all of those packages globally on your machine, but you will not be able to save the packages you use to the <code class="language-text">requirements.txt</code> file, which is used to automatically download all of the packages in your application (Think of the <code class="language-text">requirements.txt</code> as a <code class="language-text">package.json</code> because it essentially is).</p>\n<p>Once you install <code class="language-text">pip</code>, you can install <code class="language-text">flask</code> using <code class="language-text">pip</code>.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">(flaskenv) C:\\&gt; pip install flask</code></pre>\n      </div>\n<br>\n<p>Presuming everything went smoothly, we can move on to creating our app.</p>\n<p><a id="appItUp"></a></p>\n<h2>App It Up</h2>\n<hr>\n<p>Create a new directory <code class="language-text">api-app</code> with the following structure:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">api-app/\n  app/\n    __init__.py\n    routes.py\n  run.py</code></pre>\n      </div>\n<br>\n<p><a id="init"></a></p>\n<h3>__init__.py</h3>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask\n\napp <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span></code></pre>\n      </div>\n<br>\n<p>If you\'d like to learn more about Python class and OOP, <a href="https://jeffknupp.com/blog/2014/06/18/improve-your-python-python-classes-and-object-oriented-programming/">this article</a> by Jeff Knupp is a good start.</p>\n<p>Here we are assigning an instance of the <code class="language-text">Flask</code> class to the variable <code class="language-text">app</code>. As your app becomes more complex, you will pass this class instance to other libraries. For example:</p>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask\n<span class="token keyword">from</span> flask_sqlalchemy <span class="token keyword">import</span> SQLAlchemy\n\napp <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>\ndb <span class="token operator">=</span> SQLAlchemy<span class="token punctuation">(</span>app<span class="token punctuation">)</span></code></pre>\n      </div>\n<p><em>Note: This example is not part of this project.</em>\n<br></p>\n<p>This is how inheritance works in Python. The SQLAlchemy class (the child class) instance inherits <code class="language-text">app</code> (the parent class) — this provides the child class with the attributes and methods of the parent class.</p>\n<p>Passing <code class="language-text">__name__</code> to <code class="language-text">Flask</code> tells Python the proper way to execute the file. This has to do with how Python executes programs. For more information, you may reference <a href="https://stackoverflow.com/questions/419163/what-does-if-name-main-do">this stackoverflow post</a>.</p>\n<p><a id="routes"></a></p>\n<h3>routes.py</h3>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> app <span class="token keyword">import</span> app\n\n@app<span class="token punctuation">.</span>route<span class="token punctuation">(</span><span class="token string">\'/\'</span><span class="token punctuation">)</span>\n<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">return</span> <span class="token string">\'Hello, World!\'</span></code></pre>\n      </div>\n<br>\n<p>For brevity sake, we won\'t delve too much into the syntax here. Hopefully it\'s somewhat readily apparent what is happening here. If it\'s not, it will be as we create more routes.</p>\n<p>Now that we have a route created, we can import our routes into our <code class="language-text">__init__.py</code> file.</p>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># app/__init__.py</span>\n<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask\n\napp <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>\n\n<span class="token keyword">from</span> app <span class="token keyword">import</span> routes</code></pre>\n      </div>\n<br>\n<p>We place the routes import at the bottom to avoid what\'s known as a <em>circular dependency</em> — you can learn more about this issue <a href="https://stackabuse.com/python-circular-imports/">here</a>.</p>\n<p><a id="run"></a></p>\n<h3>run.py</h3>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> app <span class="token keyword">import</span> app</code></pre>\n      </div>\n<br>\n<p>That\'s all the file requires. To clarify,  <code class="language-text">app</code> is the Flask instance we created in <code class="language-text">__init__.py</code>, and it is a member of the <code class="language-text">app</code> package. The <code class="language-text">app</code> package refers to the <code class="language-text">/app</code> folder in our directory, thus why in our <code class="language-text">__init__.py</code> file we are able to import our <code class="language-text">routes</code> from <code class="language-text">app</code>.</p>\n<!-- ```\n/app\n  routes.py\n``` -->\n<!-- <br> -->\n<p><a id="flaskApp"></a></p>\n<h3>FLASK_APP</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">(flaskenv) C:\\api-app\\&gt;set FLASK_APP=run.py</code></pre>\n      </div>\n<p>Flask will look for an environment <code class="language-text">FLASK_APP</code> set to, in this case, <code class="language-text">run.py</code>. This will instruct Flask on the proper way to import our application.</p>\n<h3>Run it!</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">(flaskenv) C:\\api-app\\&gt;flask run</code></pre>\n      </div>\n<br>\n<p>If everything goes smoothly, you can visit your app at <code class="language-text">http://127:0.0.0.1:5000/</code> and hopefully see "Hello, World" in the browser.</p>\n<p><a id="config"></a></p>\n<h2>Configuration</h2>\n<hr>\n<p>We are going to add a <code class="language-text">config.py</code> file to our project. This is where the developer can define some variables that will be used throughout the application. It\'s a good place to create variables that the developer wants to keep secret, such as API-keys.</p>\n<p>Once you add the <code class="language-text">config.py</code> file, your project structure should look something like this:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">api-app/\n  app/\n    __init__.py\n    routes.py\n  run.py\n  config.py</code></pre>\n      </div>\n<br>\n<p>Once we create our <code class="language-text">config.py</code>, we need to tell our <code class="language-text">app</code> to use it. Here config is referencing our file <code class="language-text">config.py</code> and not an installed library.</p>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># app/__init__.py</span>\n<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask\n<span class="token keyword">from</span> config <span class="token keyword">import</span> Config\n\napp <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span>config<span class="token punctuation">.</span>from_object<span class="token punctuation">(</span>Config<span class="token punctuation">)</span>\n\n<span class="token keyword">from</span> app <span class="token keyword">import</span> routes</code></pre>\n      </div>\n<br>\n<p><a id="configPy"></a></p>\n<h3>config.py</h3>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># app/config.py</span>\n<span class="token keyword">import</span> os\n\n<span class="token keyword">class</span> <span class="token class-name">Config</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n  API_KEY <span class="token operator">=</span> os<span class="token punctuation">.</span>environ<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">\'API_KEY\'</span><span class="token punctuation">)</span> <span class="token operator">or</span> <span class="token string">\'nice-try\'</span>  </code></pre>\n      </div>\n<br>\n<p>Recall in the first post when we used <code class="language-text">process.env.API_KEY</code> to keep the API out of version-control? Well, <code class="language-text">os.environ.get(&#39;API_KEY&#39;)</code> is doing the same thing. The configuration object will check to see if the environment variable <code class="language-text">API_KEY</code> exists, if it doesn\'t we provide a sarcastic fallback.</p>\n<p>As a reminder, you set environment variables like this:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment"># Bash</span>\n$ <span class="token function">export</span> API_KEY<span class="token operator">=</span>someKey</code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="commandline">\n      <pre class="language-commandline"><code class="language-commandline">:: windows\n(flaskenv) C:\\api-app\\&gt; set API_KEY=someKey</code></pre>\n      </div>\n<br>\n<p>As I mentioned this app is minimal, thus our <code class="language-text">config.py</code> only contains one <em>key</em>. Yes, a <em>key</em>. For JavaScript developers, you can think of our configuration object as a JS-object — a collection of <em>key</em>, <em>value</em> pairings. </p>\n<p>For example, accessing the <code class="language-text">API_KEY</code> defined in our <code class="language-text">config.py</code> file will look something like this:</p>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> app <span class="token keyword">import</span> app\n\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\nAPI_KEY <span class="token operator">=</span> app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">\'API_KEY\'</span><span class="token punctuation">]</span></code></pre>\n      </div>\n<br>\n<p>I hope it\'s becoming clearer what is taking place in our <code class="language-text">__init__.py</code> file. If not, there is no issue with treating this application as a bit of a black-box while you continue learning. I made it made it clear the purpose of this application is hiding your API-key from wrong-doers. For front-end developers with no interest in learning Python, not having a deep-understanding of Python modules is okay. In other words, this blog post is getting quite lengthy and I don\'t have time to elaborate on the nuances of Python here.</p>\n<h2>Debug</h2>\n<hr>\n<p><a id="requests"></a></p>\n<h2>Requests</h2>\n<hr>\n<p>Now that our basic Flask app is in place, we can begin creating the routes our front-end will access. For this tutorial we will only create one route, though the logic is easily replicable for additional routes.</p>\n<p>To access the API, we will use the Python\'s <code class="language-text">requests</code> library. </p>\n<p>Run the following in your terminal:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">(flaskenv) C:\\api-app\\&gt; pip install requests</code></pre>\n      </div>\n<br>\n<p><a id="makeRequest"></a></p>\n<h3>Lets make a request</h3>\n<p>Close your app if it\'s running, and enter <code class="language-text">python</code> in your terminal. This will activate the Python command-line, which is where we\'ll explore the <code class="language-text">requests</code> library.</p>\n<div class="gatsby-highlight" data-language="commandline">\n      <pre class="language-commandline"><code class="language-commandline">(flaskenv) C:\\api-app\\&gt;python\nPython 3.6.0 |Anaconda custom (64-bit)| (default, Dec 23 2016, 11:57:41) \n[MSC v.1900 64 bit (AMD64)] on win32\nType &quot;help&quot;, &quot;copyright&quot;, &quot;credits&quot; or &quot;license&quot; for more information.\n&gt;&gt;&gt;</code></pre>\n      </div>\n<p><em>To exit the Python terminal,  enter</em> <code class="language-text">quit()</code><em>, because</em> <code class="language-text">ctrl-c</code> <em>won\'t do it.</em></p>\n<p>For this example, let\'s use an API that doesn\'t require a key. We will use the <a href="https://iextrading.com/developer/docs/">IEX API</a>, a free stock API.</p>\n<p><strong>Copy this URL:</strong> <code class="language-text">https://api.iextrading.com/1.0/stock/market/batch?symbols=fb,f&amp;types=quote,news</code></p>\n<p>Here <code class="language-text">fb</code> and <code class="language-text">f</code> are ticker symbols for Facebook and Ford, respectively. Even if you pass invalid symbol parameters (i.e., ticker symbols that don\'t exist), the API response will still return data for valid queries, which is really nice.</p>\n<p>Let\'s make our first request. Enter the following in your Python terminal:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">&gt;&gt;&gt;import requests\n&gt;&gt;&gt;res = requests.get(&#39;https://api.iextrading.com/1.0/stock/market/batch?symbols=fb,asdasdasd,f&amp;types=quote,news&#39;)</code></pre>\n      </div>\n<br>\n<p><code class="language-text">requests.get()</code> will make a <em>GET</em> request to the passed URL and return a <code class="language-text">&lt;Response&gt;</code> object. This object will have attributes expected in an HTTP response.</p>\n<p>For example, let\'s make sure the request was succcessful:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">&gt;&gt;&gt; res.status_code\n200</code></pre>\n      </div>\n<br>\n<p>If everything goes well, we get the glorious status code of <code class="language-text">200</code>.</p>\n<p>Since we know our request was successful, let\'s take a look at the data:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">&gt;&gt;&gt; resJson = res.json()\n&gt;&gt;&gt; resJson\n{&#39;FB&#39;: {&#39;quote&#39;: {&#39;symbol&#39;: &#39;FB&#39;,&#39;companyName&#39;: &#39;Facebook Inc.&#39;&#39;primaryExchange&#39;: &#39;Nasdaq Global Select&#39; &#39;sector&#39;:\n...</code></pre>\n      </div>\n<br>\n<p>Sorry for the console dump, but you get a sense of the data. By calling <code class="language-text">res.json()</code> we can now index our data, so let\'s get some data that\'s a bit more managable:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">&gt;&gt;&gt; resJson[&#39;FB&#39;][&#39;quote&#39;][&#39;open&#39;]\n145.83</code></pre>\n      </div>\n<br>\n<p>I encourage you to play around a bit with the <code class="language-text">requests</code> library. Otherwise, let\'s get back to the app.</p>\n<h2>Routes</h2>\n<hr>\n<p>Make the following modifications to <code class="language-text">app/routes.py</code>:</p>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> app <span class="token keyword">import</span> app\n<span class="token keyword">from</span> flask <span class="token keyword">import</span> jsonify\n<span class="token keyword">import</span> requests\n\n@app<span class="token punctuation">.</span>route<span class="token punctuation">(</span><span class="token string">\'/\'</span><span class="token punctuation">)</span>\n<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    res <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>\n        <span class="token string">\'https://api.your-api.com/something.json?api-key={0}\'</span>\n        <span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">\'API_KEY\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    \n    <span class="token keyword">if</span> res<span class="token punctuation">.</span>status_code <span class="token operator">!=</span> <span class="token number">200</span><span class="token punctuation">:</span>\n        errData <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">\'status\'</span><span class="token punctuation">:</span> res<span class="token punctuation">.</span>status_code<span class="token punctuation">,</span> <span class="token string">\'error\'</span><span class="token punctuation">:</span> <span class="token string">\'There was an error\'</span><span class="token punctuation">}</span>\n        <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>errData<span class="token punctuation">)</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>status_code\n\n    apiData <span class="token operator">=</span> jsonify<span class="token punctuation">(</span>res<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> apiData</code></pre>\n      </div>\n<br>\n<p>As you can see, we pass our <code class="language-text">res.json()</code> to <code class="language-text">jsonify()</code>, which is imported from <code class="language-text">flask</code>. This is because <code class="language-text">res.json()</code> does not provide the encoding we need. By passing our data to <code class="language-text">jsonify</code>, we now get a flask <em>Response</em> object that will properly serialize our data as <em>application/json</em> mimetype.</p>\n<p>Visit <code class="language-text">http://localhost:5000</code> and you should see a whole bunch of data. If you use <em>Chrome,</em> <a href="https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en">download JSON view</a>. <em>JSON view</em> will format your JSON data so it doesn\'t appear as one big mess in your browser.</p>\n<p>Once you download <em>JSON view,</em> you should see something like this when you access the route:</p>\n<p><img src="https://i.imgur.com/KSS78J5l.jpg" alt="JSON view example"></p>\n<p>Now what you see in the browser when you visit <code class="language-text">localhost:5000</code> should look <strong>exactly</strong> the same as when you place the actual API URL in the browser. The primary difference, of course, is now your API-key will not appear in the response:</p>\n<p><img src="https://i.imgur.com/4jtwzwdl.jpg" alt="Example of response with no API-key"></p>\n<!-- ### More routes -->\n<h2>Hosting</h2>\n<hr>\n<p>Your basic application is now in place, so how do you use it? Well it needs to be hosted on a server. We are going to configure two servers: one for  <strong>development</strong> and one for <strong>production</strong>. The development server will be served locally on your machine — this is the server you will use while you build and debug your front-end application. The production will be hosted on <a href="https://www.heroku.com/">Heroku</a>, which offers both free and reasonably priced monthly plans ($7 a month). </p>\n<p>Configuring the development server will be extremely easy. In fact, it\'s about one line from the console. The production server, however, will take a bit more effort. Heroku will provide you</p>\n<h3>Development</h3>\n<p>First, find our your IP-address. If you have <em>PowerShell,</em> run the following:</p>\n<div class="gatsby-highlight" data-language="ps">\n      <pre class="language-ps"><code class="language-ps">C:\\&gt; Get-NetIPAddress</code></pre>\n      </div>\n<br>\n<p>In the output, look for the IP-address starting with <code class="language-text">192.168.0.xxx</code></p>\n<p>Once you have your IP-address, run the following in the console.</p>\n<div class="gatsby-highlight" data-language="commandline">\n      <pre class="language-commandline"><code class="language-commandline">(flaskenv) C:\\api-app\\&gt;flask run --host 0.0.0.0</code></pre>\n      </div>\n<br>\n<p>Now visit the following in the browser:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text"># replace the xs with your IP information\n192.168.0.xxx:5000</code></pre>\n      </div>\n<br>\n<p>Now find another device with a web-browser and visit the same address. It still works! How cool is that? Now you can free up <code class="language-text">localhost</code> to host your front-end application — just point it to API-calls to <code class="language-text">192.168.0.xxx:5000</code>.</p>\n<h3>Production</h3>',frontmatter:{path:"/10-7-18",title:"Hide Your Keys, Folks (Part II)",tags:["Python","virtual environments","pip","Requests"]}}},pathContext:{}}}});
//# sourceMappingURL=path---10-7-18-f871bf2983922d17c57f.js.map