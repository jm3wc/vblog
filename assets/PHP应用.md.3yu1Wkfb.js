import{_ as n,c as p,o as e,a2 as a,m as s}from"./chunks/framework.CSGcjqEA.js";const $=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"PHP应用.md","filePath":"PHP应用.md"}'),l={name:"PHP应用.md"},t=a(`<h2 id="php应用" tabindex="-1">PHP应用 <a class="header-anchor" href="#php应用" aria-label="Permalink to &quot;PHP应用&quot;">​</a></h2><h2 id="表单操作" tabindex="-1">表单操作 <a class="header-anchor" href="#表单操作" aria-label="Permalink to &quot;表单操作&quot;">​</a></h2><blockquote><h4 id="get" tabindex="-1">$_GET <a class="header-anchor" href="#get" aria-label="Permalink to &quot;$_GET&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>所有表单输入的数据被加载到请求的URL地址后面;</span></span>
<span class="line"><span>如：test.php?username=free&amp;password=123&amp;content=dfdsfsfd;</span></span>
<span class="line"><span>GET方式提交数据只能传递文本，能够提交的数据量大小有限，安全性差;</span></span></code></pre></div><blockquote><h4 id="post" tabindex="-1">$_POST <a class="header-anchor" href="#post" aria-label="Permalink to &quot;$_POST&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>POST提交数据的方式把表单的数据打包放入http请求中;</span></span>
<span class="line"><span>POST能够提交更多的数据;</span></span></code></pre></div><blockquote><h4 id="接收数据" tabindex="-1">接收数据 <a class="header-anchor" href="#接收数据" aria-label="Permalink to &quot;接收数据&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>表单提交的数据会自动封装为数组;     </span></span>
<span class="line"><span>用$_GET, $_POST, 或$_REQUEST获得表单提交的数据;</span></span></code></pre></div><blockquote><h4 id="处理多值表单控件" tabindex="-1">处理多值表单控件 <a class="header-anchor" href="#处理多值表单控件" aria-label="Permalink to &quot;处理多值表单控件&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>多值表单控件（如复选框和多选框），大大提高了基于web的数据收集能力;</span></span>
<span class="line"><span>因为这些组件是多值的，所以表单处理函数必须能够识别一个表单变量中可能有</span></span>
<span class="line"><span>多个值;为了让php识别一个表单变量的多个值（即考虑为数组），需要对表单名</span></span>
<span class="line"><span>(元素的name属性值）增加一对中括号，如:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;checkbox&quot; name=&quot;love[]&quot; /&gt;</span></span></code></pre></div><blockquote><h4 id="request" tabindex="-1">$_REQUEST <a class="header-anchor" href="#request" aria-label="Permalink to &quot;$_REQUEST&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$_REQUEST 支持两种方式发送过来的请求，即 post 和 get 它都可以接受，显示不显示要看传递方法。</span></span>
<span class="line"><span>get 会显示在 url 中（有字符数限制），post 不会在 url 中显示，可以传递任意多的数据（只要服务器支持）</span></span></code></pre></div><blockquote><h4 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to &quot;代码示例&quot;">​</a></h4></blockquote><h2 id="html代码" tabindex="-1">HTML代码 <a class="header-anchor" href="#html代码" aria-label="Permalink to &quot;HTML代码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;form action=&quot;register.php&quot; method=&quot;post&quot;&gt;</span></span>
<span class="line"><span>        &lt;table&gt;</span></span>
<span class="line"><span>            &lt;tr&gt;</span></span>
<span class="line"><span>                &lt;td&gt;用户名：&lt;/td&gt;</span></span>
<span class="line"><span>                &lt;td&gt;&lt;input type=&quot;text&quot; name=&quot;username&quot; placeholder=&quot;请输入用户名&quot; required&gt;&lt;/td&gt;</span></span>
<span class="line"><span>            &lt;/tr&gt;</span></span>
<span class="line"><span>            &lt;tr&gt;</span></span>
<span class="line"><span>                &lt;td&gt;密码：&lt;/td&gt;</span></span>
<span class="line"><span>                &lt;td&gt;&lt;input type=&quot;password&quot; name=&quot;pwd&quot; placeholder=&quot;请输入密码&quot; required&gt;&lt;/td&gt;</span></span>
<span class="line"><span>            &lt;/tr&gt;</span></span>
<span class="line"><span>            &lt;tr&gt;</span></span>
<span class="line"><span>                &lt;td&gt;爱好&lt;/td&gt;</span></span>
<span class="line"><span>                &lt;td&gt;</span></span>
<span class="line"><span>                    &lt;input type=&quot;checkbox&quot; name=&quot;love[]&quot; value=&quot;1&quot;&gt;看电影</span></span>
<span class="line"><span>                    &lt;input type=&quot;checkbox&quot; name=&quot;love[]&quot; value=&quot;2&quot;&gt;玩游戏</span></span>
<span class="line"><span>                    &lt;input type=&quot;checkbox&quot; name=&quot;love[]&quot; value=&quot;3&quot;&gt;写代码</span></span>
<span class="line"><span>                &lt;/td&gt;</span></span>
<span class="line"><span>            &lt;/tr&gt;</span></span>
<span class="line"><span>            &lt;tr&gt;</span></span>
<span class="line"><span>                &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span>                &lt;td&gt;&lt;input type=&quot;submit&quot; value=&quot;登陆&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span>            &lt;/tr&gt;</span></span>
<span class="line"><span>        &lt;/table&gt;</span></span>
<span class="line"><span>    &lt;/form&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h2 id="php代码" tabindex="-1">php代码 <a class="header-anchor" href="#php代码" aria-label="Permalink to &quot;php代码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span>    // 接收POST提交过来的数据</span></span>
<span class="line"><span>    print_r($_POST);</span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><h2 id="cookie缓存-session缓存" tabindex="-1">COOKIE缓存 &amp;&amp; SESSION缓存 <a class="header-anchor" href="#cookie缓存-session缓存" aria-label="Permalink to &quot;COOKIE缓存 &amp;&amp; SESSION缓存&quot;">​</a></h2><h2 id="什么是cookie" tabindex="-1">什么是COOKIE <a class="header-anchor" href="#什么是cookie" aria-label="Permalink to &quot;什么是COOKIE&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cookie是在http协议下,服务器或脚本可以维护客户端信息的一种方式。</span></span>
<span class="line"><span>cookie是web服务器保存在用户浏览器上的小甜饼(一个很小的文本文件)。</span></span>
<span class="line"><span>它可以包含有关用户的信息,常用于保存用户名,密码,个性化设置,个人偏好记录等。</span></span>
<span class="line"><span>当用户访问服务器时,服务器可以设置和访问cookie的信息。</span></span>
<span class="line"><span>cookie保存在客户端,通常是IE或Firefox浏览器的cookie临时文件夹中,可以手动删除。</span></span>
<span class="line"><span>Cookie是利用了网页代码中的HTTP头信息进行传递的,浏览器的每一次网页请求,都可以伴随Cookie传递。</span></span>
<span class="line"><span>注意:如果浏览器上cookie 太多,超过了系统所允许的范围,浏览器也会手动对它进行删除。</span></span></code></pre></div><h2 id="cookie-工作原理" tabindex="-1">cookie 工作原理 <a class="header-anchor" href="#cookie-工作原理" aria-label="Permalink to &quot;cookie 工作原理&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>当客户访问某个基于PHP技术的网站时,在PHP中可以使用setcookie函数生成一个cookie.</span></span>
<span class="line"><span>系统经处理把这个cookie发送到客户端并保存在C:\\Documents and Settings\\用户名\\Cookies目录下。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cookie是HTTP头的一部分,因此setcookie()函数必须在HTML本身的任何内容送到浏览器之前调用。</span></span>
<span class="line"><span>这种限制与header函数一样。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当客户再次访问该网站时。</span></span>
<span class="line"><span>浏览器会自动把C:\\Documents and Settings\\用户名\\Cookies目录下与该站点对应的cookie发送到服务器.</span></span>
<span class="line"><span>服务器则把从客户端传来的cookie将自动地转化成一个PHP变量。</span></span>
<span class="line"><span>在PHP5中,客户端发来的cookie将被转换成全局变量。可以通过$_COOKIE[&#39;xxx&#39;]读取</span></span></code></pre></div><h2 id="设置cookie" tabindex="-1">设置cookie <a class="header-anchor" href="#设置cookie" aria-label="Permalink to &quot;设置cookie&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">name</td><td style="text-align:left;">设置cookie的名字.(必须)</td></tr><tr><td style="text-align:left;">value</td><td style="text-align:left;">设置cookie的值</td></tr><tr><td style="text-align:left;">expire</td><td style="text-align:left;">可选。规定 cookie 的过期时间。</td></tr><tr><td style="text-align:left;">path</td><td style="text-align:left;">可选。规定 cookie 的服务器路径</td></tr><tr><td style="text-align:left;">domain</td><td style="text-align:left;">可选。规定 cookie 的域名</td></tr><tr><td style="text-align:left;">secure</td><td style="text-align:left;">可选</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>语法</span></span>
<span class="line"><span>    setcookie(name,value,expire,path,domain,secure)</span></span>
<span class="line"><span>例</span></span>
<span class="line"><span>    setcookie(“username”, “admin”, time() + 60 * 60);</span></span></code></pre></div><h2 id="接收和使用cookie" tabindex="-1">接收和使用cookie <a class="header-anchor" href="#接收和使用cookie" aria-label="Permalink to &quot;接收和使用cookie&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PHP对cookie有很好的支持,和form表单一样.</span></span>
<span class="line"><span>在接收的时候PHP会自动从web服务器接收HTTP头并且分析它。接收的时候和表单接收一样    </span></span>
<span class="line"><span>echo $_COOKIE[&quot;username&quot;];</span></span></code></pre></div><h2 id="删除cookie" tabindex="-1">删除Cookie <a class="header-anchor" href="#删除cookie" aria-label="Permalink to &quot;删除Cookie&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>调用只带有name参数的setcookie,那么名为这个cookie将被从客户机上删除; </span></span>
<span class="line"><span>例:setcookie(“MyCookie”);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>设置Cookie的失效时间为time()或time()-1</span></span>
<span class="line"><span>setcookie(&quot;username&quot;,&quot;admin&quot;,time()-1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>time()减多少没有关系,只要是过期时间就行。</span></span>
<span class="line"><span>那么这个Cookie在这个页面的浏览完之后就被删除了(其实是失效了)。 </span></span>
<span class="line"><span>当这个Cookie被删除时,它的值在当前页仍然有效。</span></span>
<span class="line"><span>如果要把cookie设置成在浏览器关闭后就失效。那么可以直接把expiretime设为0,或者不设置此值。</span></span>
<span class="line"><span>setcookie(&quot;name&quot;,&quot;value&quot;,0)。</span></span></code></pre></div><h2 id="使用cookie注意事项" tabindex="-1">使用Cookie注意事项 <a class="header-anchor" href="#使用cookie注意事项" aria-label="Permalink to &quot;使用Cookie注意事项&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>setcookie()之前不能有任何html输出,就是空格,空白行都不行。       </span></span>
<span class="line"><span>setcookie()后,在当前页调用echo $_COOKIE[“name”]不会有输出。必须刷新或到下一个页面才可以看到cookie值。</span></span>
<span class="line"><span>使用cookie的限制。一个浏览器能创建的cookie数量最多为300个,并且每个不能超过4KB,</span></span>
<span class="line"><span>每个WEB站点能设置的cookie总数不能超过20个。</span></span>
<span class="line"><span>cookie是保存在客户端的,用户禁用了cookie,你的cookie自然也就没作用啦!</span></span>
<span class="line"><span>如果在某个页面获取不到cookie的，那需要设置cookie的第四个参数，</span></span>
<span class="line"><span>    例 </span></span>
<span class="line"><span>    setcookie(&quot;id&quot;,$id, time()+36002430 ,&#39;/&#39;);</span></span></code></pre></div><h2 id="什么是会话控制" tabindex="-1">什么是会话控制 <a class="header-anchor" href="#什么是会话控制" aria-label="Permalink to &quot;什么是会话控制&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>为了使得网站可以跟踪客户端与服务器之间的交互,保存和记忆每个用户的身份和信息.</span></span>
<span class="line"><span>我们需要一种强有力的解决方案,这样就产生了会话控制。</span></span>
<span class="line"><span>HTTP是一个无状态的协议,此协议无法来维护两个事务之间的联系。</span></span>
<span class="line"><span>当一个用户请求一个页面后再请求另外一个页面时,HTTP无法告诉我们这两个请求是来自同一个人。</span></span>
<span class="line"><span>会话控制思想就是能够在网站中跟踪一个变量,我们可以跟踪变量,就可以做到对用户的支持。</span></span>
<span class="line"><span>并根据授权和用户身份显示不同内容,不同页面。</span></span></code></pre></div><h2 id="什么是session" tabindex="-1">什么是SESSION <a class="header-anchor" href="#什么是session" aria-label="Permalink to &quot;什么是SESSION&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Session从用户访问页面开始,到断开与网站连接为止,形成一个会话的生命周期。</span></span>
<span class="line"><span>在会话期间, 分配客户唯一的一个SessionID,用来标识当前用户,与其他用户进行区分。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Session会话时,SessionID会分别保存在客户端和服务器端两个位置,</span></span>
<span class="line"><span>对于客户端使用临时的Cookie保存(Cookie名称为PHPSESSID)或者通过URL字符串传递,</span></span>
<span class="line"><span>服务器端也以文本文件形式保存在指定的Session目录中。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Session通过ID接受每个访问请求,</span></span>
<span class="line"><span>从而识别当前用户、跟踪和保持用户具体资料,以及Session变量,</span></span>
<span class="line"><span>比如session_name等等,这些变量信息保存在服务器端。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SessionID可以作为会话信息保存到数据库中,进行Session持久化,</span></span>
<span class="line"><span>这样可以跟踪每个用户的登陆次数、在线与否、在线时间等。</span></span></code></pre></div><h2 id="使用会话的基本步骤" tabindex="-1">使用会话的基本步骤 <a class="header-anchor" href="#使用会话的基本步骤" aria-label="Permalink to &quot;使用会话的基本步骤&quot;">​</a></h2><p>开始会话 &gt; 注册会话变量 &gt; 使⽤会话变量 &gt; 注销变量并销毁会话</p><h2 id="开始会话" tabindex="-1">开始会话 <a class="header-anchor" href="#开始会话" aria-label="Permalink to &quot;开始会话&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>session_start() 开始一个会话或者返回已经存在的会话。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>说明:这个函数没有参数,且返回值均为true。</span></span>
<span class="line"><span>如果你使用基于cookie的session,那么在使用session_start()之前浏览器不能有任何输出,</span></span>
<span class="line"><span>否则会发生以下错误:</span></span>
<span class="line"><span>Warning: Cannot send session cache limiter - headers already sent </span></span>
<span class="line"><span>(output started at /var/www/html/test.php:2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>也可以在php.ini中启动session.auto_start=1,</span></span>
<span class="line"><span>这样就无需每次使用session之前都要调用session_start()。</span></span>
<span class="line"><span>启用此指令的缺点是无法在会话中存储对象,因为定义要在会话开始之前加载才能重新创建对象。</span></span></code></pre></div><h2 id="注册、使用会话变量" tabindex="-1">注册、使用会话变量 <a class="header-anchor" href="#注册、使用会话变量" aria-label="Permalink to &quot;注册、使用会话变量&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PHP5使用$_SESSION[‘xxx’]=xxx 注册SESSION全局变量。和GET,POST,COOKIE的使用方法相似。</span></span>
<span class="line"><span>session_start();</span></span>
<span class="line"><span>$_SESSION[&#39;username&#39;] = &quot;david&quot;;</span></span>
<span class="line"><span>echo &quot;Your username is &quot;.$_SESSION[&#39;username&#39;];</span></span></code></pre></div><h2 id="注销会话变量" tabindex="-1">注销会话变量 <a class="header-anchor" href="#注销会话变量" aria-label="Permalink to &quot;注销会话变量&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>session_unset()函数清除存储在当前会话中的所有变量,它能有效地将会话重置为创建时的状态。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>session_destroy()函数从存储机制中完全删除会话,使当前会话失效。</span></span></code></pre></div><h2 id="如何存储session信息" tabindex="-1">如何存储session信息 <a class="header-anchor" href="#如何存储session信息" aria-label="Permalink to &quot;如何存储session信息&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>session.save_path = /tmp;     设为文件时, session文件保存的路径</span></span>
<span class="line"><span>session.use_cookies = 1 ;     是否使用cookies</span></span>
<span class="line"><span>session.name = PHPSESSID;     在cookie的session的名字</span></span>
<span class="line"><span>session.auto_start = 0 ;      是否自动启动session</span></span>
<span class="line"><span>session.cookie_lifetime = 0;  设置会话cookie的有效期,以秒为单位,为0时表示直到浏览器被重启</span></span>
<span class="line"><span>session.cookie_path = / ;     cookie的有效路径</span></span>
<span class="line"><span>session.cookie_domain = ;     cookie的有效域</span></span>
<span class="line"><span>session.cache_expire = 180;   设置缓存中的会话文档在 n 分钟后过时</span></span></code></pre></div><h2 id="cookie和session的区别" tabindex="-1">cookie和session的区别 <a class="header-anchor" href="#cookie和session的区别" aria-label="Permalink to &quot;cookie和session的区别&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cookie和session都可以暂时保存多个页面中使用的变量。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是它们有本质的差别:cookie 存放在客户端浏览器中，session保存在服务器上;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>它们之间的联系是sessionID一般保存在cookie中,或者放在URL上。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当客户端禁用cookie时,session_id将无法传递, 此时session失效。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>不过php5在linux/unix平台可以自动检查cookie状态,如果客户端设置了禁用,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>则系统自动把session_id附加到url上传递。windows主机则无此功能</span></span></code></pre></div><h2 id="php验证码功能实现" tabindex="-1">PHP验证码功能实现 <a class="header-anchor" href="#php验证码功能实现" aria-label="Permalink to &quot;PHP验证码功能实现&quot;">​</a></h2><h2 id="什么是验证码" tabindex="-1">什么是验证码 <a class="header-anchor" href="#什么是验证码" aria-label="Permalink to &quot;什么是验证码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>就是将一串随机产生的数字或符号，生成一幅图片，图片里加上一些干扰象素（防止OCR）。</span></span>
<span class="line"><span>由用户肉眼识别其中的验证码信息，输入表单提交网站验证，验证成功后才能使用某项功能。</span></span>
<span class="line"><span>作用的是现代的验证码一般是防止机器批量注册的，防止机器批量发帖回复。</span></span>
<span class="line"><span>目前，不少网站为了防止用户利用机器人自动注册、登录、灌水，刷票都采用了验证码技术。</span></span></code></pre></div><h2 id="第一步-先新建imgcode-php文件-用写验证码的代码" tabindex="-1">第一步：先新建imgcode.php文件，用写验证码的代码 <a class="header-anchor" href="#第一步-先新建imgcode-php文件-用写验证码的代码" aria-label="Permalink to &quot;第一步：先新建imgcode.php文件，用写验证码的代码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span>    //验证码</span></span>
<span class="line"><span>    //设置验证码内的字符</span></span>
<span class="line"><span>    //参数$length,每次获取几个随机字符</span></span>
<span class="line"><span>    function get_str($length=1){</span></span>
<span class="line"><span>        $chars=&#39;3456789ABCDEFGHIJKLMNOPQRSTUVWXYZ&#39;;//字符库</span></span>
<span class="line"><span>        $s=str_shuffle($chars);//随机打乱字符串</span></span>
<span class="line"><span>        $str=substr($s,0,$length);</span></span>
<span class="line"><span>        return $str;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //echo get_str();</span></span>
<span class="line"><span>    //生成验证码</span></span>
<span class="line"><span>    //创建图片</span></span>
<span class="line"><span>    $width=80;</span></span>
<span class="line"><span>    $height=34;</span></span>
<span class="line"><span>    // 创建画布</span></span>
<span class="line"><span>    $img=imagecreatetruecolor($width,$height);</span></span>
<span class="line"><span>    //设置背景颜色,颜色必须使用rgb格式</span></span>
<span class="line"><span>    $bgcolor=imagecolorallocate($img,238,238,238);//#eeeeee</span></span>
<span class="line"><span>    //设置文字颜色</span></span>
<span class="line"><span>    $textcolor=imagecolorallocate($img,255,0,0);//#ff0000</span></span>
<span class="line"><span>    //绘制图片背景,把背景颜色加入图片</span></span>
<span class="line"><span>    imagefilledrectangle($img,0,0,$width,$height,$bgcolor);</span></span>
<span class="line"><span>    //第2个和第3个参数是左上角坐标</span></span>
<span class="line"><span>    //第4个和第5个参数是右下角坐标</span></span>
<span class="line"><span>    //这两个坐标可以确定一块矩形区域</span></span>
<span class="line"><span>    //获取验证码字符,每次1个一共获取4个随机字符</span></span>
<span class="line"><span>    $get_code1=get_str();</span></span>
<span class="line"><span>    $get_code2=get_str();</span></span>
<span class="line"><span>    $get_code3=get_str();</span></span>
<span class="line"><span>    $get_code4=get_str();</span></span>
<span class="line"><span>    //把验证码放入图片内</span></span>
<span class="line"><span>    $font=&#39;images/texb.ttf&#39;;//注意：如果写相对路径，验证码出不来时，把路径写成绝对路径</span></span>
<span class="line"><span>    imagettftext($img,16,mt_rand(-30,30),1,26,$textcolor,$font,$get_code1);</span></span>
<span class="line"><span>    imagettftext($img,16,mt_rand(-30,30),20,26,$textcolor,$font,$get_code2);</span></span>
<span class="line"><span>    imagettftext($img,16,mt_rand(-30,30),40,26,$textcolor,$font,$get_code3);</span></span>
<span class="line"><span>    imagettftext($img,16,mt_rand(-30,30),60,26,$textcolor,$font,$get_code4);</span></span>
<span class="line"><span>    //第一个参数是图片变量</span></span>
<span class="line"><span>    //第二个参数是字体大小</span></span>
<span class="line"><span>    //第三个参数是字符倾斜度,负数向左,正数向右,数值越大角度越大</span></span>
<span class="line"><span>    //第四个和第五个参数是字符所在位置的x坐标和y坐标</span></span>
<span class="line"><span>    //第六个参数是字符颜色</span></span>
<span class="line"><span>    //第七个参数是字体库</span></span>
<span class="line"><span>    //第八个参数是需要放进去的字符</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //绘制一些点状像素</span></span>
<span class="line"><span>    for($i=0;$i&lt;=10;$i++){</span></span>
<span class="line"><span>        imagesetpixel($img,mt_rand(0,$width),mt_rand(0,$height),imagecolorallocate($img,mt_rand(0,255),mt_rand(0,255),mt_rand(0,255)));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //第二个和第三个参数是点的位置坐标</span></span>
<span class="line"><span>    //第四个参数是点的颜色</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //绘制一些线像素</span></span>
<span class="line"><span>    for($i=0;$i&lt;=5;$i++){</span></span>
<span class="line"><span>        imageline($img,mt_rand(0,$width),mt_rand(0,$height),mt_rand(0,$width),mt_rand(0,$height),imagecolorallocate($img,mt_rand(0,255),mt_rand(0,255),mt_rand(0,255)));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //第2/3/4/5个参数是线的两端坐标</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //将验证码中的四个字符保存在session里面</span></span>
<span class="line"><span>    session_start();</span></span>
<span class="line"><span>    $get_code=$get_code1.$get_code2.$get_code3.$get_code4;</span></span>
<span class="line"><span>    $_SESSION[&#39;imgcode&#39;]=$get_code;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //输出图片</span></span>
<span class="line"><span>    header(&#39;Content-Type:image/png&#39;);</span></span>
<span class="line"><span>    imagepng($img);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><h2 id="ajax异步通信与json数据类型" tabindex="-1">Ajax异步通信与JSON数据类型 <a class="header-anchor" href="#ajax异步通信与json数据类型" aria-label="Permalink to &quot;Ajax异步通信与JSON数据类型&quot;">​</a></h2><h2 id="什么是ajax" tabindex="-1">什么是Ajax <a class="header-anchor" href="#什么是ajax" aria-label="Permalink to &quot;什么是Ajax&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Ajax 的全称是 Asynchronous JavaScript And XML (异步Javascript和XML)。</span></span>
<span class="line"><span>它不是一项新的技术,而是由多种技术组合而成。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2005年2月18日,Adaptive Path公司的Jess James Garrett发表了一篇名为：</span></span>
<span class="line"><span>Ajax:A NewApproach to Web Applications(Ajax技术:开发web应用的新思路)的文章。</span></span>
<span class="line"><span>说白了Ajax技术说的是把Javascript、Css、Dom和(X)HTML结合起来的一种新用法。</span></span>
<span class="line"><span>这种结合并不是新概念，事实上DHTML技术早就把这几样技术结合在一起了。</span></span>
<span class="line"><span>Ajax的独到之处在于它在服务器端使用了异步(Asynchronous)处理技术。</span></span></code></pre></div><h2 id="ajax包含了以下几种技术" tabindex="-1">Ajax包含了以下几种技术 <a class="header-anchor" href="#ajax包含了以下几种技术" aria-label="Permalink to &quot;Ajax包含了以下几种技术&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>基于web标准（standards-based presentation）XHTML+CSS的表示；</span></span>
<span class="line"><span>使用 DOM（Document Object Model）进行动态显示及交互；</span></span>
<span class="line"><span>使用 XML 和 XSLT 进行数据交换及相关操作；</span></span>
<span class="line"><span>使用 XMLHttpRequest 进行异步数据查询、检索；</span></span>
<span class="line"><span>使用 JavaScript 将所有的东西绑定在一起。</span></span>
<span class="line"><span>类似于DHTML或LAMP，AJAX不是指一种单一的技术，而是有机地利用了一系列相关的技术。</span></span></code></pre></div><h2 id="ajax与传统web程序的区别" tabindex="-1">Ajax与传统Web程序的区别 <a class="header-anchor" href="#ajax与传统web程序的区别" aria-label="Permalink to &quot;Ajax与传统Web程序的区别&quot;">​</a></h2><p>图1.传统Web模式的工作流程</p><p><img src="http://web.wdwangke.com/mdphoto/backend/backend/ajax/ajax1.png" alt="img"></p><p>图2.Ajax程序的工作流程</p><p><img src="http://web.wdwangke.com/mdphoto/backend/backend/ajax/ajax3.png" alt="img"></p><h2 id="jquery-ajax" tabindex="-1">jQuery.ajax <a class="header-anchor" href="#jquery-ajax" aria-label="Permalink to &quot;jQuery.ajax&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>通过 HTTP 请求加载远程数据。</span></span>
<span class="line"><span>jQuery 底层 AJAX 实现。简单易用的高层实现见 $.get, $.getJSON, $.post 等。</span></span>
<span class="line"><span>$.ajax() 返回其创建的 XMLHttpRequest对象。</span></span>
<span class="line"><span>要加载jq库文件</span></span></code></pre></div><blockquote><p>jQuery.ajax(url,[settings])：通过 HTTP 请求加载远程数据。</p></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">url</td><td style="text-align:left;">一个用来包含发送请求的URL字符串。</td></tr><tr><td style="text-align:left;">settings</td><td style="text-align:left;">AJAX 请求设置。所有选项都是可选的。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 加载jq库</span></span>
<span class="line"><span>&lt;script src=&quot;https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.5.1.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>// ajax请求</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    $.ajax({</span></span>
<span class="line"><span>        type: &#39;get&#39;,//请求的方式</span></span>
<span class="line"><span>        url: &quot;jq_ajax.php&quot;,//请求的地址</span></span>
<span class="line"><span>        data: {// 请求参数</span></span>
<span class="line"><span>            username: username,</span></span>
<span class="line"><span>            pwd: pwd</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        datetype: &#39;json&#39;,//预期服务器返回的数据类型</span></span>
<span class="line"><span>        success: function (z) {// 成功回调的函数</span></span>
<span class="line"><span>            console.log(z);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        error:function(error){// 错误回调的函数</span></span>
<span class="line"><span>            console.log(error);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="同源策略" tabindex="-1">同源策略 <a class="header-anchor" href="#同源策略" aria-label="Permalink to &quot;同源策略&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>同源策略，它是由Netscape提出的一个著名的安全策略。</span></span>
<span class="line"><span>现在所有支持JavaScript 的浏览器都会使用这个策略。</span></span>
<span class="line"><span>所谓同源是指，域名，协议，端口相同。</span></span>
<span class="line"><span>当一个浏览器的两个tab页中分别打开来 </span></span>
<span class="line"><span>百度和谷歌的页面当浏览器的百度tab页执行一个脚本的时候会检查这个脚本是属于哪个页面的，</span></span>
<span class="line"><span>即检查是否同源，只有和百度同源的脚本才会被执行。</span></span>
<span class="line"><span>如果非同源，那么在请求数据时，浏览器会在控制台中报一个异常，提示拒绝访问。</span></span></code></pre></div><h2 id="jsonp跨域-cors跨域" tabindex="-1">jsonp跨域 &amp;&amp; CORS跨域 <a class="header-anchor" href="#jsonp跨域-cors跨域" aria-label="Permalink to &quot;jsonp跨域 &amp;&amp; CORS跨域&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>首先抛出浏览器同源策略这个概念，为了保证用户访问的安全，现代浏览器使用了同源策略，即不允许访问非同源的页面</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在ajax中，不允许请求非同源的URL就可以了，比如www.a.com下的一个页面，</span></span>
<span class="line"><span>其中的ajax请求是不允许访问www.b.com/c.php这样一个页面的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>JSONP就是用来解决跨域请求问题的</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ajax请求受同源策略影响，不允许进行跨域请求，而script标签src属性中的链接却可以访问跨域的js脚本,</span></span>
<span class="line"><span>利用这个特性，服务端不再返回JSON格式的数据，而是返回一段调用某个函数的js代码</span></span>
<span class="line"><span>在src中进行了调用，这样实现了跨域。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>跨域资源共享（CORS ）是一种网络浏览器的技术规范，它为Web服务器定义了一种方式，</span></span>
<span class="line"><span>允许网页从不同的域访问其资源。 </span></span>
<span class="line"><span>CORS就是为了让AJAX可以实现可控的跨域访问而生的.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CORS与JSONP相比:</span></span>
<span class="line"><span>    JSONP只能实现GET请求，而CORS支持所有类型的HTTP请求。</span></span>
<span class="line"><span>    使用CORS，开发者可以使用普通的XMLHttpRequest发起请求和获得数据，比起JSONP有更好的错误处理。</span></span>
<span class="line"><span>    JSONP主要被老的浏览器支持，但它们往往不支持CORS，而绝大多数现代浏览器都已经支持了CORS。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>本质是HTML5 xhr level2原生ajax请求！</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CORS只需要在后台中加上响应头来允许域请求！</span></span>
<span class="line"><span>在被请求的Response header中加入以下设置，就可以实现跨域访问了！</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//指定允许其他域名访问</span></span>
<span class="line"><span>&#39;Access-Control-Allow-Origin:*&#39;//或指定域</span></span>
<span class="line"><span>//响应类型</span></span>
<span class="line"><span>&#39;Access-Control-Allow-Methods:GET,POST&#39;</span></span>
<span class="line"><span>//响应头设置</span></span>
<span class="line"><span>&#39;Access-Control-Allow-Headers:x-requested-with,content-type&#39;</span></span></code></pre></div><p><strong>demo.html</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>    $.ajax({</span></span>
<span class="line"><span>        type: &quot;get&quot;,</span></span>
<span class="line"><span>        async: false,</span></span>
<span class="line"><span>        url: &quot;http://www.demo.com/demo.php&quot;,</span></span>
<span class="line"><span>        dataType: &quot;jsonp&quot;,</span></span>
<span class="line"><span>        jsonp: &quot;callback&quot;, //请求php的参数名</span></span>
<span class="line"><span>        jsonpCallback: &quot;jsonhandle&quot;,//要执行的回调函数</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    function jsonhandle(data) </span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        console.log(data);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p><strong>demo.php</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span>header(&#39;Access-Control-Allow-Origin:*&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>header(&#39;Access-Control-Allow-Methods:POST&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>header(&quot;Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, x-file-name&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$data = array(</span></span>
<span class="line"><span>    &#39;age&#39; =&gt; 20,</span></span>
<span class="line"><span>    &#39;name&#39; =&gt; &#39;张三&#39;,</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$callback = $_GET[&#39;callback&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo $callback.&quot;(&quot;.json_encode($data).&quot;)&quot;;</span></span>
<span class="line"><span>exit;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><h2 id="json" tabindex="-1">JSON <a class="header-anchor" href="#json" aria-label="Permalink to &quot;JSON&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。 </span></span>
<span class="line"><span>易于人阅读和编写。同时也易于机器解析和生成。 </span></span>
<span class="line"><span>它基于 JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999的一个子集。</span></span>
<span class="line"><span>JSON采用完全独立于语言的文本格式,但是也使用了类似于C语言家族的习惯</span></span>
<span class="line"><span>(包括C, C++, C#, Java, JavaScript, Perl, Python等)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>JSON有两种结构：对象结构，数组结构</span></span>
<span class="line"><span>对象结构是使用大括号“{}”括起来的，大括号内是由0个或多个用英文逗号分隔的“关键字:值”对（key:value）构成的。</span></span>
<span class="line"><span>var jsonObj =</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;键名1&quot;:&quot;值1&quot;,</span></span>
<span class="line"><span>    &quot;键名2&quot;:&quot;值2&quot;,</span></span>
<span class="line"><span>    ……</span></span>
<span class="line"><span>    &quot;键名n&quot;:&quot;值n&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>JSON数组结构是用中括号“[]”括起来，中括号内部由0个或多个以英文逗号“,”分隔的值列表组成。</span></span>
<span class="line"><span>var arr =</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;键名1&quot;:&quot;值1&quot;,</span></span>
<span class="line"><span>        &quot;键名2&quot;:&quot;值2&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;键名1&quot;:&quot;值3&quot;,</span></span>
<span class="line"><span>        &quot;键名2&quot;:&quot;值4&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>用于Ajax或者数据交互的数据格式的统一，但是还有另一种用于数据交互时的数据格式统一的可扩展标记语言，简称XML</span></span>
<span class="line"><span>它可以用来标记数据、定义数据类型，是一种允许用户对自己的标记语言进行定义的源语言。 它非常适合万维网传输，提供统一的方法来描述和交换独立于应用程序或服务器的结构化数据。</span></span></code></pre></div><h2 id="json库中有一个全局json对象-有2个方法-parse-和-stringify" tabindex="-1">JSON库中有一个全局JSON对象, 有2个方法:parse() 和 stringify() <a class="header-anchor" href="#json库中有一个全局json对象-有2个方法-parse-和-stringify" aria-label="Permalink to &quot;JSON库中有一个全局JSON对象, 有2个方法:parse() 和 stringify()&quot;">​</a></h2><h2 id="parse-用于从一个字符串中解析出json-对象" tabindex="-1">parse() 用于从一个字符串中解析出json 对象 <a class="header-anchor" href="#parse-用于从一个字符串中解析出json-对象" aria-label="Permalink to &quot;parse() 用于从一个字符串中解析出json 对象&quot;">​</a></h2><blockquote><p>JSON.parse(text [, reviver])</p></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">text</td><td style="text-align:left;">text 必需。 有效的 JSON 文本</td></tr><tr><td style="text-align:left;">reviver</td><td style="text-align:left;">reviver 选项。 筛选和转换的结果的函数</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//切记 js语句中 字符串包含json格式的数据外层最好用单引号</span></span>
<span class="line"><span>var jsontext =&#39;{&quot;firstname&quot;:&quot;Jesper&quot;,&quot;surname&quot;:&quot;Aaberg&quot;,&quot;phone&quot;:[&quot;555- 0100&quot;,&quot;555-0120&quot;]}&#39;;</span></span>
<span class="line"><span>var contact = JSON.parse(jsontext);</span></span>
<span class="line"><span>var fullname = contact.surname + &quot;,&quot; + contact.firstname;</span></span></code></pre></div><h2 id="stringify-方法用于从一个对象解析出字符串" tabindex="-1">stringify 方法用于从一个对象解析出字符串 <a class="header-anchor" href="#stringify-方法用于从一个对象解析出字符串" aria-label="Permalink to &quot;stringify 方法用于从一个对象解析出字符串&quot;">​</a></h2><blockquote><p>JSON.stringify(value [, replacer] [, space])</p></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">value</td><td style="text-align:left;">必需,JavaScript 值,该值通常对象或数组,将序列化</td></tr><tr><td style="text-align:left;">replacer</td><td style="text-align:left;">筛选和转换的结果的函数或数组</td></tr><tr><td style="text-align:left;">space</td><td style="text-align:left;">添加缩进,空白和换行符到的返回值JSON文本使代码更容易阅读</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var arr=[&#39;apple&#39;,&#39;banana&#39;,{test:&#39;123&#39;}]; </span></span>
<span class="line"><span>var z= JSON.stringify(arr); </span></span>
<span class="line"><span>//[&quot;apple&quot;,&quot;banana&quot;,{&quot;test&quot;:&quot;123&quot;}] </span></span>
<span class="line"><span>console.log(z);</span></span></code></pre></div><h2 id="php中接收和传递json" tabindex="-1">PHP中接收和传递JSON <a class="header-anchor" href="#php中接收和传递json" aria-label="Permalink to &quot;PHP中接收和传递JSON&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>json_decode — 对 JSON 格式的字符串进行编码</span></span>
<span class="line"><span>json_encode — 对变量进行 JSON 编码</span></span></code></pre></div><h3 id="json-decode" tabindex="-1">json_decode <a class="header-anchor" href="#json-decode" aria-label="Permalink to &quot;json_decode&quot;">​</a></h3><blockquote><p>mixed json_decode ( string $json [, bool $assoc ] )</p></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">json</td><td style="text-align:left;">待解码的 json string格式的字符串</td></tr><tr><td style="text-align:left;">assoc</td><td style="text-align:left;">当该参数为 TRUE 时,将返回 array 非 object</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>使用json_decode的一些注意事项</span></span>
<span class="line"><span>    使用UTF-8编码</span></span>
<span class="line"><span>    不能在最后元素有逗号</span></span>
<span class="line"><span>    不能使用单引号</span></span>
<span class="line"><span>    不能有\\r,\\t，如果有请替换</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$json = &#39;{&quot;a&quot;:1,&quot;b&quot;:2,&quot;c&quot;:3,&quot;d&quot;:4,&quot;e&quot;:5}&#39;;</span></span>
<span class="line"><span>var_dump(json_decode($json)); </span></span>
<span class="line"><span>var_dump(json_decode($json, true));</span></span></code></pre></div><h3 id="json-encode" tabindex="-1">json_encode <a class="header-anchor" href="#json-encode" aria-label="Permalink to &quot;json_encode&quot;">​</a></h3><blockquote><p>string json_encode ( mixed $value )</p></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">value</td><td style="text-align:left;">待编码的value</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$arr = array (&#39;a&#39;=&gt;1,&#39;b&#39;=&gt;2,&#39;c&#39;=&gt;3,&#39;d&#39;=&gt;4,&#39;e&#39;=&gt;5); </span></span>
<span class="line"><span>echo json_encode($arr);</span></span>
<span class="line"><span>// {&quot;a&quot;:1,&quot;b&quot;:2,&quot;c&quot;:3,&quot;d&quot;:4,&quot;e&quot;:5}</span></span></code></pre></div><h2 id="php分页" tabindex="-1">PHP分页 <a class="header-anchor" href="#php分页" aria-label="Permalink to &quot;PHP分页&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>当某个列表的数据过多时，一般都会设置分页功能。</span></span></code></pre></div><h4 id="分页样式表" tabindex="-1"><a href="http://web.wdwangke.com/mdwork/backend/phpuse/page.zip" target="_blank" rel="noreferrer">分页样式表</a> <a class="header-anchor" href="#分页样式表" aria-label="Permalink to &quot;[分页样式表](http://web.wdwangke.com/mdwork/backend/phpuse/page.zip)&quot;">​</a></h4><h4 id="分页功能的代码" tabindex="-1">分页功能的代码 <a class="header-anchor" href="#分页功能的代码" aria-label="Permalink to &quot;分页功能的代码&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* </span></span>
<span class="line"><span>*   获取当前的网址   </span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function get_url()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    // 获取当前的完整地址</span></span>
<span class="line"><span>    $str = $_SERVER[&#39;PHP_SELF&#39;] . &#39;?&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if($_GET){</span></span>
<span class="line"><span>        foreach($_GET as $k =&gt; $v){</span></span>
<span class="line"><span>            if($k != &#39;page&#39;){</span></span>
<span class="line"><span>                $str.= $k.&#39;=&#39;.$v.&#39;&amp;&#39;;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return $str;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/** </span></span>
<span class="line"><span> * </span></span>
<span class="line"><span> * 分页函数</span></span>
<span class="line"><span> * @pargam $current 当前页</span></span>
<span class="line"><span> * @pargam $count   记录总数</span></span>
<span class="line"><span> * @pargam $limit   每页显示多少条</span></span>
<span class="line"><span> * @pargam $size    中间显示多少条</span></span>
<span class="line"><span> * @pargam $class   样式</span></span>
<span class="line"><span> * </span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>function page($current,$count,$limit,$size,$class=&#39;digg&#39;)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    $str = &#39;&#39;;</span></span>
<span class="line"><span>    if($count &gt; $limit){</span></span>
<span class="line"><span>        // 算出总页数</span></span>
<span class="line"><span>        $pages = ceil($count / $limit);</span></span>
<span class="line"><span>        // 获取当前页面的url（带有参数的）</span></span>
<span class="line"><span>        $url = get_url();</span></span>
<span class="line"><span>        // 开始拼接分页</span></span>
<span class="line"><span>        $str.=&#39;&lt;div class=&quot;&#39;.$class.&#39;&quot;&gt;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 判断当前页是否是1</span></span>
<span class="line"><span>        if($current == 1){</span></span>
<span class="line"><span>            $str.=&#39;&lt;span class=&quot;disabled&quot;&gt;首&amp;nbsp;&amp;nbsp;页&lt;/span&gt;&#39;;</span></span>
<span class="line"><span>            $str.=&#39;&lt;span class=&quot;disabled&quot;&gt;上一页&lt;/span&gt;&#39;;</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>            $str.=&#39;&lt;a href=&quot;&#39;.$url.&#39;page=1&quot;&gt;首&amp;nbsp;&amp;nbsp;页&lt;/a&gt;&#39;;</span></span>
<span class="line"><span>            $str.=&#39;&lt;a href=&quot;&#39;.$url.&#39;page=&#39;.($current - 1).&#39;&quot;&gt;上一页&lt;/a&gt;&#39;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 中间</span></span>
<span class="line"><span>        if($current&lt;=floor($size / 2)){</span></span>
<span class="line"><span>            $start = 1;</span></span>
<span class="line"><span>            $end = $pages &lt; $size ? $pages : $size;</span></span>
<span class="line"><span>        }elseif ($current &gt;= $pages - floor($size / 2)) {</span></span>
<span class="line"><span>            $start = $pages - $size + 1 &lt;= 0 ? 1 : $pages - $size + 1;</span></span>
<span class="line"><span>            $end = $pages;</span></span>
<span class="line"><span>        }else {</span></span>
<span class="line"><span>            $start = $current - floor($size / 2);</span></span>
<span class="line"><span>            $end = $current + floor($size / 2);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        for($i=$start;$i&lt;=$end;$i++){</span></span>
<span class="line"><span>            if($i==$current){</span></span>
<span class="line"><span>                $str.=&#39;&lt;span class=&quot;current&quot;&gt;&#39;.$i.&#39;&lt;/span&gt;&#39;;</span></span>
<span class="line"><span>            }else{</span></span>
<span class="line"><span>                $str.=&#39;&lt;a href=&quot;&#39;.$url.&#39;page=&#39;.$i.&#39;&quot;&gt;&#39;.$i.&#39;&lt;/a&gt;&#39;;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //最后</span></span>
<span class="line"><span>        if($pages==$current){</span></span>
<span class="line"><span>            $str .=&#39;&lt;span class=&quot;disabled&quot;&gt;下一页&lt;/span&gt;&#39;;</span></span>
<span class="line"><span>            $str.=&#39;&lt;span class=&quot;disabled&quot;&gt;尾&amp;nbsp;&amp;nbsp;页  &lt;/span&gt;&#39;;</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>            $str.=&#39;&lt;a href=&quot;&#39;.$url.&#39;page=&#39;.($current+1).&#39;&quot;&gt;下一页&lt;/a&gt;&#39;;</span></span>
<span class="line"><span>            $str.=&#39;&lt;a href=&quot;&#39;.$url.&#39;page=&#39;.$pages.&#39;&quot;&gt;尾&amp;nbsp;&amp;nbsp;页 &lt;/a&gt;&#39;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        $str.=&#39;&lt;/div&gt;&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return $str;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="调用分页" tabindex="-1">调用分页 <a class="header-anchor" href="#调用分页" aria-label="Permalink to &quot;调用分页&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 引用函数库</span></span>
<span class="line"><span>include_once(&#39;function.php&#39;);</span></span>
<span class="line"><span>// 引用分页函数</span></span>
<span class="line"><span>include_once(&#39;page.php&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取当前的页码</span></span>
<span class="line"><span>$page = isset($_GET[&#39;page&#39;]) ? $_GET[&#39;page&#39;] : 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取admin表的数据总数</span></span>
<span class="line"><span>$CountSql = &quot;SELECT COUNT(*) AS C FROM pre_admin&quot;;</span></span>
<span class="line"><span>$count = find($CountSql);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 每页显示多少条数据</span></span>
<span class="line"><span>$limit = 10;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 每页显示多少个分页的页码数</span></span>
<span class="line"><span>$size = 5;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ShowPage = page($page,$count[&#39;c&#39;],$limit,$size);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 偏移量 -&gt; 索引值</span></span>
<span class="line"><span>$start = ($page - 1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 按索引值以及每页显示多少条数据去查询admin表的数据</span></span>
<span class="line"><span>$AdminSql = &quot;SELECT * FROM pre_admin ORDER BY id DESC LIMIT $start,$limit&quot;;</span></span>
<span class="line"><span>$AdminList = all($AdminSql);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>?&gt;</span></span>
<span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;!-- 引用分页样式 --&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;!-- 数据输出 --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 分页输出 --&gt;</span></span>
<span class="line"><span>    &lt;?php echo $ShowPage; ?&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h2 id="文件上传" tabindex="-1">文件上传 <a class="header-anchor" href="#文件上传" aria-label="Permalink to &quot;文件上传&quot;">​</a></h2><h3 id="文件上传的相关配置" tabindex="-1">文件上传的相关配置 <a class="header-anchor" href="#文件上传的相关配置" aria-label="Permalink to &quot;文件上传的相关配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>表单设置</span></span>
<span class="line"><span>    要进行文件的上传，需要对form表单进行特殊设置;</span></span>
<span class="line"><span>    1.设定表单数据的提交方式为POST</span></span>
<span class="line"><span>    2.设定enctype属性值为: multipart/form-data</span></span>
<span class="line"><span>    3.为了避免用户等待许久之后才发现上传文件太大，可以在表单中添加</span></span>
<span class="line"><span>      MAX_FILE_SIZE隐藏域,通过设置其value值可以限制上传文件的大小;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PHP设置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.file_uploads</span></span>
<span class="line"><span>      是否允许通过HTTP上传文件，默认为ON</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.upload_max_filesize</span></span>
<span class="line"><span>      允许上传文件大小的最大值，默认为2M，此指令必须小于post_max_size;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.upload_tmp_dir</span></span>
<span class="line"><span>      指定上传文件的临时存放路径，这个目录对于拥有此服务器进程的用户必须是可写的;</span></span>
<span class="line"><span>      如果未指定则使用系统默认值;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4.post_max_size</span></span>
<span class="line"><span>      控制POST方式提交数据php所能够接收的最大数据量;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5.memory_limit</span></span>
<span class="line"><span>      指定单个脚本程序可以使用的最大内存容量;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>6.max_execution_time</span></span>
<span class="line"><span>      此指令确定php脚本可以执行的最长时间，以秒为单位，默认为30秒;</span></span></code></pre></div><h3 id="files-数组" tabindex="-1">$_FILES 数组 <a class="header-anchor" href="#files-数组" aria-label="Permalink to &quot;$_FILES 数组&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$_FILES超级全局变量作用是存储各种与上传文件有关的信息;</span></span>
<span class="line"><span>$_FILES是一个二维数组，数组中共有5项：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$_FILES[&quot;userfile&quot;][&quot;name&quot;] 上传文件的名称</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$_FILES[&quot;userfile&quot;][&quot;type&quot;]   上传文件的类型</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$_FILES[&quot;userfile&quot;][&quot;size&quot;]   上传文件的大小, 以字节为单位</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$_FILES[&quot;userfile&quot;][&quot;tmp_name&quot;] 文件上传后在服务器端储存的临时文件名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$_FILES[&quot;userfile&quot;][&quot;error&quot;]  文件上传相关的错误代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注:userfile只是一个占位符，代表文件上传表单元素的名字; 因此这个值将根据你所给定的名称有所不同;</span></span></code></pre></div><h3 id="上传错误信息" tabindex="-1">上传错误信息 <a class="header-anchor" href="#上传错误信息" aria-label="Permalink to &quot;上传错误信息&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$_FILES[&#39;userfile&#39;][&#39;error&#39;]  提供了在文件上传过程中出现的错误：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.UPLOAD_ERR_OK (value = 0)    </span></span>
<span class="line"><span>  如果文件上传成功返回0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.UPLOAD_ERR_INI_SIZE (value = 1)</span></span>
<span class="line"><span>  如果试图上传的文件大小超出了 upload_max_filesize指令指定的值，则返回1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.UPLOAD_ERR_FORM_SIZE (value = 2)</span></span>
<span class="line"><span>  如果试图上传的文件大小超出了MAX_FILE_SIZE指令（可能嵌入在HTML表单中）指定的值，则返回2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4.UPLOAD_ERR_PARTIAL (value = 3)</span></span>
<span class="line"><span>  如果文件没有完全上传，则返回3; 如网络出现错误，导致上传过程中断;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5.UPLOAD_ERR_NO_FILE (value = 4)</span></span>
<span class="line"><span>  如果用户没有指定上传的文件就提交表单，则返回4</span></span></code></pre></div><h3 id="文件上传函数" tabindex="-1">文件上传函数 <a class="header-anchor" href="#文件上传函数" aria-label="Permalink to &quot;文件上传函数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>is_uploaded_file()  move_uploaded_file()</span></span></code></pre></div><h3 id="is-uploaded-file" tabindex="-1">is_uploaded_file <a class="header-anchor" href="#is-uploaded-file" aria-label="Permalink to &quot;is_uploaded_file&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">file</td><td style="text-align:left;">必需。规定要检查的文件。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>is_uploaded_file(file) 函数检查指定的文件是否是通过 HTTP POST 上传的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if(is_uploaded_file($_FILES[&#39;userfile&#39;][&#39;tmp_name&#39;])){</span></span>
<span class="line"><span>  copy($_FILES[&#39;userfile&#39;][&#39;tmp_name&#39;], &quot;test.txt&quot;);</span></span>
<span class="line"><span>}else{</span></span>
<span class="line"><span>  echo &quot;文件上传失败！&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="move-uploaded-file" tabindex="-1">move_uploaded_file <a class="header-anchor" href="#move-uploaded-file" aria-label="Permalink to &quot;move_uploaded_file&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">file</td><td style="text-align:left;">必需。规定要移动的文件。</td></tr><tr><td style="text-align:left;">newloc</td><td style="text-align:left;">必需。规定文件的新位置。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>move_uploaded_file()作用是将上传文件从临时目录移动到目标目录; </span></span>
<span class="line"><span>虽然copy()也可以实现同样功能，</span></span>
<span class="line"><span>但move_uploaded_file()还提供了一种额外的功能，</span></span>
<span class="line"><span>它将检查由filename输入参数指定的文件确实是通过http post 上传机制上传的。</span></span>
<span class="line"><span>如果所指定的文件并非上传文件，则移动失败，返回false;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>move_uploaded_file($_FILES[&#39;userfile&#39;][&#39;tmp_name&#39;], &quot;1/test.jpg&quot;);</span></span></code></pre></div><h3 id="图片上传" tabindex="-1">图片上传 <a class="header-anchor" href="#图片上传" aria-label="Permalink to &quot;图片上传&quot;">​</a></h3><h5 id="function-php" tabindex="-1">function.php <a class="header-anchor" href="#function-php" aria-label="Permalink to &quot;function.php&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span>/*1,通过$_FILES 接收表单上传的图片元素</span></span>
<span class="line"><span>2,通过$_FILES[&#39;input_name&#39;][&#39;error&#39;]; 判断文件是否上传到服务器</span></span>
<span class="line"><span>3,定义新的文件名称</span></span>
<span class="line"><span>4,通过is_uploaded_file函数  判断$_FILES[&#39;input_name&#39;][&#39;tmp_name&#39;] 是否是通过http post方式上传的</span></span>
<span class="line"><span>5,然后使用move_uploaded_file($_FILES[&#39;input_name&#39;][&#39;tmp_name&#39;],&#39;./images/1.jpg&#39;);</span></span>
<span class="line"><span>函数移动图片到指定目录</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>//图片上传的函数</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>$name,input框的name值</span></span>
<span class="line"><span>$type,上传图片的类型</span></span>
<span class="line"><span>$size,上传图片的大小</span></span>
<span class="line"><span>$upload,上传的图片保存的目录</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>function upload($name, $type = array(&#39;jpg&#39;, &#39;jpeg&#39;, &#39;png&#39;, &#39;gif&#39;), $size = 1048576, $upload = &#39;upload&#39;)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //1、判断错误值</span></span>
<span class="line"><span>    $error = $_FILES[$name][&#39;error&#39;];</span></span>
<span class="line"><span>    switch ($error) {</span></span>
<span class="line"><span>        case 1:</span></span>
<span class="line"><span>            return &#39;上传大小不能超过upload_max_filesize设置的值&#39;;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case 2:</span></span>
<span class="line"><span>            return &#39;上传大小不能超过MAX_FILE_SIZE设置的值&#39;;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case 3:</span></span>
<span class="line"><span>            return &#39;图片上传不完整&#39;;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case 4:</span></span>
<span class="line"><span>            return &#39;没有选择图片&#39;;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //2、判断文件的类型</span></span>
<span class="line"><span>    $pre = pathinfo($_FILES[$name][&#39;name&#39;], PATHINFO_EXTENSION);</span></span>
<span class="line"><span>    if (!in_array($pre, $type)) { //后缀没有在$type里面出现</span></span>
<span class="line"><span>        return &#39;上传的图片类型错误&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //3、再次限制图片大小</span></span>
<span class="line"><span>    $s = $_FILES[$name][&#39;size&#39;];</span></span>
<span class="line"><span>    if ($s &gt; $size) {</span></span>
<span class="line"><span>        return &#39;图片过大,请压缩后上传&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //4、保存图片</span></span>
<span class="line"><span>    //首先设置好保存之后图片的名称</span></span>
<span class="line"><span>    $file = date(&#39;YmdHis&#39;, time()) . mt_rand(1000, 9999) . mt_rand(1000, 9999) . &#39;.&#39; . $pre;</span></span>
<span class="line"><span>    if (is_uploaded_file($_FILES[$name][&#39;tmp_name&#39;])) {</span></span>
<span class="line"><span>        //先判断图片有没有上传到服务器的临时文件夹</span></span>
<span class="line"><span>        move_uploaded_file($_FILES[$name][&#39;tmp_name&#39;], $upload . &#39;/&#39; . $file);</span></span>
<span class="line"><span>        return &#39;图片上传成功,&#39; . $file;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        return &#39;图片上传错误&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><h2 id="文件操作" tabindex="-1">文件操作 <a class="header-anchor" href="#文件操作" aria-label="Permalink to &quot;文件操作&quot;">​</a></h2><blockquote><h4 id="什么是文件操作" tabindex="-1">什么是文件操作 <a class="header-anchor" href="#什么是文件操作" aria-label="Permalink to &quot;什么是文件操作&quot;">​</a></h4></blockquote><p>PHP 拥有的多种函数可供创建、读取、上传以及编辑文件</p><blockquote><h4 id="读取文件" tabindex="-1">读取文件 <a class="header-anchor" href="#读取文件" aria-label="Permalink to &quot;读取文件&quot;">​</a></h4></blockquote><h3 id="file-get-contents" tabindex="-1">file_get_contents <a class="header-anchor" href="#file-get-contents" aria-label="Permalink to &quot;file_get_contents&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">path</td><td style="text-align:left;">必需。规定要读取的文件。</td></tr><tr><td style="text-align:left;">include_path</td><td style="text-align:left;">可选。</td></tr><tr><td style="text-align:left;">context</td><td style="text-align:left;">可选</td></tr><tr><td style="text-align:left;">start</td><td style="text-align:left;">可选。规定在文件中开始读取的位置。该参数是 PHP 5.1 中新增的。</td></tr><tr><td style="text-align:left;">max_length</td><td style="text-align:left;">可选。规定读取的字节数。该参数是 PHP 5.1 中新增的。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>file_get_contents(path,include_path,context,start,max_length) 函数将文件内容读到字符串中;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$str = file_get_contents(&quot;a.txt&quot;);</span></span>
<span class="line"><span>var_dump($str);</span></span></code></pre></div><h3 id="写入文件" tabindex="-1">写入文件 <a class="header-anchor" href="#写入文件" aria-label="Permalink to &quot;写入文件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>file_put_contents()</span></span></code></pre></div><h3 id="file-put-contents" tabindex="-1">file_put_contents <a class="header-anchor" href="#file-put-contents" aria-label="Permalink to &quot;file_put_contents&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>函数把一个字符串写入文件中。与依次调用 fopen()，fwrite() 以及 fclose() 功能一样。  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>$str = &quot;hello&quot;;</span></span>
<span class="line"><span>file_put_contents(&quot;test.txt&quot;, $str);  返回写入文件的长度</span></span></code></pre></div><h3 id="复制-重命名-移动-删除文件" tabindex="-1">复制,重命名,移动,删除文件 <a class="header-anchor" href="#复制-重命名-移动-删除文件" aria-label="Permalink to &quot;复制,重命名,移动,删除文件&quot;">​</a></h3><h3 id="copy" tabindex="-1">copy <a class="header-anchor" href="#copy" aria-label="Permalink to &quot;copy&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">file</td><td style="text-align:left;">必需。规定要复制的文件。</td></tr><tr><td style="text-align:left;">to_file</td><td style="text-align:left;">必需。规定复制文件的目的地。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>copy(file,to_file) 将文件从 source 拷贝到 dest。如果成功则返回 TRUE,失败则返回 FALSE。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>copy(&quot;test.txt&quot;, &quot;test.txt.bak&quot;);</span></span></code></pre></div><h3 id="rename" tabindex="-1">rename <a class="header-anchor" href="#rename" aria-label="Permalink to &quot;rename&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">oldname</td><td style="text-align:left;">必需。规定要重命名的文件或目录。</td></tr><tr><td style="text-align:left;">newname</td><td style="text-align:left;">必需。规定文件或目录的新名称。</td></tr><tr><td style="text-align:left;">context</td><td style="text-align:left;">可选。规定文件句柄的环境。context 是一套可以修改流的行为的选项。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>rename(oldname,newname,context) 重命名和移动文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rename(&quot;b.txt&quot;,&quot;c.txt&quot;);  //重命名文件(oldname,newnanme)</span></span>
<span class="line"><span>rename(&quot;c.txt&quot;,&quot;./a/c.txt&quot;);   //移动文件</span></span></code></pre></div><h3 id="unlink" tabindex="-1">unlink <a class="header-anchor" href="#unlink" aria-label="Permalink to &quot;unlink&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">filename</td><td style="text-align:left;">必需。规定要重命名的文件或目录。</td></tr><tr><td style="text-align:left;">context</td><td style="text-align:left;">可选</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>unlink(filename,context) 函数删除文件。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>unlink(&quot;a.txt&quot;);      //删除文件</span></span></code></pre></div><h3 id="filesize" tabindex="-1">filesize <a class="header-anchor" href="#filesize" aria-label="Permalink to &quot;filesize&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">filename</td><td style="text-align:left;">必需。规定要检查的文件。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>filesize(filename) 函数返回指定文件的大小。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo filesize(&quot;test.txt&quot;);</span></span></code></pre></div><h3 id="file-exists" tabindex="-1">file_exists <a class="header-anchor" href="#file-exists" aria-label="Permalink to &quot;file_exists&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">path</td><td style="text-align:left;">必需。规定要检查的路径。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>file_exists(path) 检查文件是否存在 存在返回 true 否则返回 false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var_dump(file_exists(&quot;a.txt&quot;));</span></span></code></pre></div><h3 id="目录操作" tabindex="-1">目录操作 <a class="header-anchor" href="#目录操作" aria-label="Permalink to &quot;目录操作&quot;">​</a></h3><h3 id="scandir" tabindex="-1">scandir <a class="header-anchor" href="#scandir" aria-label="Permalink to &quot;scandir&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">directory</td><td style="text-align:left;">必需。规定要扫描的目录。</td></tr><tr><td style="text-align:left;">sorting_order</td><td style="text-align:left;">可选</td></tr><tr><td style="text-align:left;">context</td><td style="text-align:left;">可选</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var_dump(scandir(&quot;.&quot;));         //返回当前目录下面的文件结构数组</span></span></code></pre></div><h3 id="mkdir" tabindex="-1">mkdir <a class="header-anchor" href="#mkdir" aria-label="Permalink to &quot;mkdir&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">path</td><td style="text-align:left;">必需。规定要创建的目录的名称。</td></tr><tr><td style="text-align:left;">mode</td><td style="text-align:left;">可选。规定权限。默认是 0777（允许全局访问）。</td></tr><tr><td style="text-align:left;">recursive</td><td style="text-align:left;">可选。规定是否设置递归模式。（PHP 5 中新增的）</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mkdir(path,mode,recursive,context) 函数创建目录。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkdir(&quot;testing&quot;);</span></span></code></pre></div><h3 id="rmdir" tabindex="-1">rmdir <a class="header-anchor" href="#rmdir" aria-label="Permalink to &quot;rmdir&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">dir</td><td style="text-align:left;">必需。规定要删除的目录</td></tr><tr><td style="text-align:left;">context</td><td style="text-align:left;">可选</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>rmdir(dir,context) 函数删除空的目录。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$path = &quot;images&quot;;</span></span>
<span class="line"><span>if(!rmdir($path))</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>echo &quot;Could not remove $path&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="basename" tabindex="-1">basename <a class="header-anchor" href="#basename" aria-label="Permalink to &quot;basename&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">path</td><td style="text-align:left;">必需。规定要检查的路径。</td></tr><tr><td style="text-align:left;">suffix</td><td style="text-align:left;">可选。规定文件扩展名。如果文件有名有文件扩展名，将不会显示这个扩展名</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>basename(path,suffix) 函数返回路径中的文件名部分</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$path = &quot;/testweb/home.php&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//显示带有文件扩展名的文件名</span></span>
<span class="line"><span>echo basename($path) .&quot;&lt;br/&gt;&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//显示没有文件扩展名的文件名</span></span>
<span class="line"><span>echo basename($path,&quot;.php&quot;);</span></span></code></pre></div><h3 id="dirname" tabindex="-1">dirname <a class="header-anchor" href="#dirname" aria-label="Permalink to &quot;dirname&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">path</td><td style="text-align:left;">必需。规定要检查的路径。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>dirname(path) 函数返回路径中的目录名称部分。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo dirname(&quot;c:/testweb/home.php&quot;) . &quot;&lt;br /&gt;&quot;;</span></span>
<span class="line"><span>echo dirname(&quot;/testweb/home.php&quot;);</span></span></code></pre></div><h3 id="pathinfo" tabindex="-1">pathinfo <a class="header-anchor" href="#pathinfo" aria-label="Permalink to &quot;pathinfo&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">path</td><td style="text-align:left;">必需。规定要检查的路径。</td></tr><tr><td style="text-align:left;">options</td><td style="text-align:left;">可选。PATHINFO_DIRNAME，PATHINFO_BASENAME，PATHINFO_EXTENSION</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pathinfo(path,options) 返回一个关联数组 其中包括路径中的三个部分：目录名，文件名，扩展名，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pathinfo($_SERVER[&#39;SCRIPT_FILENAME&#39;],PATHINFO_DIRNAME);//返回路径部分</span></span>
<span class="line"><span>pathinfo($_SERVER[&#39;SCRIPT_FILENAME&#39;].PATHINFO_BASENAME);//返回文件名</span></span>
<span class="line"><span>pathinfo($_SERVER[&#39;SCRIPT_FILENAME&#39;],PATHINFO_EXTENSION);//返回后缀部分</span></span></code></pre></div><h3 id="is-dir" tabindex="-1">is_dir <a class="header-anchor" href="#is-dir" aria-label="Permalink to &quot;is_dir&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">path</td><td style="text-align:left;">必需。规定要检查的文件。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>is_dir(file) 判断是否是一个目录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$file = &quot;images&quot;;</span></span>
<span class="line"><span>if(is_dir($file))</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>echo (&quot;$file 是一个目录&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>echo (&quot;$file 不是一个目录&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="is-file" tabindex="-1">is_file <a class="header-anchor" href="#is-file" aria-label="Permalink to &quot;is_file&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">file</td><td style="text-align:left;">必需。规定要检查的文件。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>is_file(file) 函数检查指定的文件是否是常规的文件。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$file = &quot;test.txt&quot;;</span></span>
<span class="line"><span>if(is_file($file))</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>echo (&quot;$file 是一个常规文件&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>echo (&quot;$file 不是一个常规文件&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="php正则表达式" tabindex="-1">PHP正则表达式 <a class="header-anchor" href="#php正则表达式" aria-label="Permalink to &quot;PHP正则表达式&quot;">​</a></h2><blockquote><h4 id="什么是正则表达式" tabindex="-1">什么是正则表达式 <a class="header-anchor" href="#什么是正则表达式" aria-label="Permalink to &quot;什么是正则表达式&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>正则表达式就是一套专门用于处理文本的强大工具,可以对进行文本查找，匹配，替换;</span></span>
<span class="line"><span>正则表达式常用于验证表单提交的内容，比如验证电话号码，Email地址，身份证号码等是否有效;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>php支持两种风格的正则表达式：Perl风格   Posix 风格</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Perl风格</span></span>
<span class="line"><span>  PCRE全称为Perl Compatible Regular Expression，意思是Perl兼容正则表达式。</span></span>
<span class="line"><span>  PCRE来源于Perl语言，而Perl是对字符串操作功能最强大的语言之一，PHP的最初版本就是由Perl开发的产品。</span></span>
<span class="line"><span>  在PCRE中，通常将正则表达式 包含在两个反斜线&quot;/&quot;之间;</span></span>
<span class="line"><span>  例：&quot;/apple/&quot;</span></span>
<span class="line"><span>  定界符也不仅仅局限于&quot;/&quot;。除了字母、数字和斜线&quot;\\&quot;以外的任何字符都可以作为定界符.</span></span>
<span class="line"><span>  像&quot;#&quot;、&quot;/&quot;、&quot;!&quot;等都可以的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Posix 风格</span></span>
<span class="line"><span>  一般而言，实现相同的功能Perl风格的，效率高些，我们一般使用Perl风格的函数！</span></span>
<span class="line"><span>  而且在PHP7.0版本后该风格已经被弃用了</span></span></code></pre></div><blockquote><h4 id="perl-兼容正则表达式函数" tabindex="-1">Perl 兼容正则表达式函数 <a class="header-anchor" href="#perl-兼容正则表达式函数" aria-label="Permalink to &quot;Perl 兼容正则表达式函数&quot;">​</a></h4></blockquote><h5 id="preg-match" tabindex="-1"><code>preg_match</code> <a class="header-anchor" href="#preg-match" aria-label="Permalink to &quot;\`preg_match\`&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>preg_match()         进行正则表达式匹配</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法：</span></span>
<span class="line"><span>    int preg_match ( string $pattern , string $subject [, array &amp;$matches [, int $flags = 0 [, int $offset = 0 ]]] )</span></span></code></pre></div><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">pattern</td><td style="text-align:left;">要搜索的模式，字符串类型</td></tr><tr><td style="text-align:left;">subject</td><td style="text-align:left;">输入字符串</td></tr><tr><td style="text-align:left;">matches</td><td style="text-align:left;">如果提供了参数matches，它将被填充为搜索结果</td></tr><tr><td style="text-align:left;">flags</td><td style="text-align:left;">flags可以被设置为以下标记值</td></tr><tr><td style="text-align:left;">offset</td><td style="text-align:left;">通常，搜索从目标字符串的开始位置开始</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>例：</span></span>
<span class="line"><span>    $res;</span></span>
<span class="line"><span>    preg_match(&quot;/hello/&quot;, &quot;hello world&quot;, $res);</span></span>
<span class="line"><span>    print_r($res);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //&#39;/hello/&#39;   进行匹配的模式</span></span>
<span class="line"><span>    //&quot;hello world&quot;   匹配的字符串</span></span>
<span class="line"><span>    //$res            将匹配的结果存放到一个变量里面</span></span></code></pre></div><h5 id="preg-match-all" tabindex="-1"><code>preg_match_all</code> <a class="header-anchor" href="#preg-match-all" aria-label="Permalink to &quot;\`preg_match_all\`&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>搜索 subject 中所有匹配 pattern 给定正则表达式的匹配结果并且将它们以 flag 指定顺序输出到 matches 中。</span></span>
<span class="line"><span>在第一个匹配找到后, 子序列继续从最后一次匹配位置搜索。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法：</span></span>
<span class="line"><span>    int preg_match_all ( string $pattern , string $subject [, array &amp;$matches [, int $flags = PREG_PATTERN_ORDER [, int $offset = 0 ]]] )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$pattern: 要搜索的模式，字符串形式。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$subject: 输入字符串。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$matches: 多维数组，作为输出参数输出所有匹配结果, 数组排序通过flags指定。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$flags：可以结合下面标记使用(注意不能同时使用PREG_PATTERN_ORDER和 PREG_SET_ORDER)：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PREG_PATTERN_ORDER: 结果排序为$matches[0]保存完整模式的所有匹配, $matches[1] 保存第一个子组的所有匹配，</span></span>
<span class="line"><span>                    以此类推。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PREG_SET_ORDER: 结果排序为$matches[0]包含第一次匹配得到的所有匹配(包含子组)， </span></span>
<span class="line"><span>                $matches[1]是包含第二次匹配到的所有匹配(包含子组)的数组，以此类推。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PREG_OFFSET_CAPTURE: 如果这个标记被传递，每个发现的匹配返回时会增加它相对目标字符串的偏移量。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>offset: 通常， 查找时从目标字符串的开始位置开始。可选参数offset用于 从目标字符串中指定位置开始搜索(单位是字节)。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>    $res;</span></span>
<span class="line"><span>    preg_match_all(&quot;/h/&quot;, &quot;hello hello&quot;, $res);   //进行正则表达式全局匹配</span></span>
<span class="line"><span>    print_r($res);</span></span></code></pre></div><h5 id="preg-replace" tabindex="-1"><code>preg_replace</code> <a class="header-anchor" href="#preg-replace" aria-label="Permalink to &quot;\`preg_replace\`&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>执行正则表达式的搜索和替换</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法：</span></span>
<span class="line"><span>    mixed preg_replace ( mixed $pattern , mixed $replacement , mixed $subject [, int $limit = -1 [, int &amp;$count ]] )</span></span></code></pre></div><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">pattern</td><td style="text-align:left;">要搜索的模式，字符串类型</td></tr><tr><td style="text-align:left;">replacement</td><td style="text-align:left;">用于替换的字符串或字符串数组</td></tr><tr><td style="text-align:left;">subject</td><td style="text-align:left;">要进行搜索和替换的字符串或字符串数组</td></tr><tr><td style="text-align:left;">limit</td><td style="text-align:left;">flags可以被设置为以下标记值每个模式在每个subject上进行替换的最大次数</td></tr><tr><td style="text-align:left;">count</td><td style="text-align:left;">如果指定，将会被填充为完成的替换次数</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>例：</span></span>
<span class="line"><span>    $res = preg_replace(&quot;/hello/&quot;,&quot;aaaa&quot;,&quot;hello world&quot;);</span></span>
<span class="line"><span>    var_dump($res); //aaaa  world</span></span></code></pre></div><h5 id="preg-split" tabindex="-1"><code>preg_split</code> <a class="header-anchor" href="#preg-split" aria-label="Permalink to &quot;\`preg_split\`&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>用正则表达式分割字符串</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法：</span></span>
<span class="line"><span>    array preg_split ( string $pattern , string $subject [, int $limit = -1 [, int $flags = 0 ]] ) </span></span>
<span class="line"><span></span></span>
<span class="line"><span>$pattern: 用于搜索的模式，字符串形式。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$subject: 输入字符串。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$limit: 可选，如果指定，将限制分隔得到的子串最多只有limit个，返回的最后一个 子串将包含所有剩余部分。limit值为-1，</span></span>
<span class="line"><span>        0或null时都代表&quot;不限制&quot;， 作为php的标准，你可以使用null跳过对flags的设置。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$flags: 可选，可以是任何下面标记的组合(以位或运算 | 组合)：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    PREG_SPLIT_NO_EMPTY: 如果这个标记被设置， preg_split() 将进返回分隔后的非空部分。</span></span>
<span class="line"><span>    PREG_SPLIT_DELIM_CAPTURE: 如果这个标记设置了，用于分隔的模式中的括号表达式将被捕获并返回。</span></span>
<span class="line"><span>    PREG_SPLIT_OFFSET_CAPTURE: 如果这个标记被设置, 对于每一个出现的匹配返回时将会附加字符串偏移量.。</span></span>
<span class="line"><span>                               注意：这将会改变返回数组中的每一个元素, 使其每个元素成为一个由第0 个元素为分隔后的子串，</span></span>
<span class="line"><span>                               第1个元素为该子串在subject 中的偏移量组成的数组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>    $str = &#39;hypertext hanguage hrogramming&#39;;</span></span>
<span class="line"><span>    $chars = preg_split(&#39;/ /&#39;, $str);</span></span>
<span class="line"><span>    var_dump($chars);   //array()</span></span></code></pre></div><blockquote><h4 id="元字符-特殊字符" tabindex="-1">元字符（特殊字符） <a class="header-anchor" href="#元字符-特殊字符" aria-label="Permalink to &quot;元字符（特殊字符）&quot;">​</a></h4></blockquote><h5 id="" tabindex="-1">* <a class="header-anchor" href="#" aria-label="Permalink to &quot;*&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>* 匹配前面的字符零次或多次  等同于 ｛0，｝  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>preg_match(&quot;/a*/&quot;,&quot;bbbbba&quot;,$res); //array(1) { [0]=&gt; string(0) &quot;&quot; }</span></span></code></pre></div><h5 id="-1" tabindex="-1">+ <a class="header-anchor" href="#-1" aria-label="Permalink to &quot;+&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+匹配前面的字符一次或多次  等同于 ｛1，｝</span></span>
<span class="line"><span></span></span>
<span class="line"><span>preg_match(&quot;/a+/&quot;,&#39;bbbbbbbbbbaa&#39;,$res);// array(1) { [0]=&gt; string(2) &quot;aa&quot; }</span></span></code></pre></div><h5 id="-2" tabindex="-1">? <a class="header-anchor" href="#-2" aria-label="Permalink to &quot;?&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>? 匹配前面的字符零次或一次  等同于 ｛0，1｝ </span></span>
<span class="line"><span></span></span>
<span class="line"><span>preg_match(&quot;/a?/&quot;,&quot;aaaabbbb&quot;,$res); //array(1) { [0]=&gt; string(1) &quot;a&quot; }</span></span></code></pre></div><h5 id="-3" tabindex="-1">| <a class="header-anchor" href="#-3" aria-label="Permalink to &quot;|&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>| 匹配两个或多个选择  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>preg_match(&quot;/(h|a)+/&quot;,&quot;dfghsssssasfgdsf&quot;,$res); //array(2) { [0]=&gt; string(1) &quot;h&quot; [1]=&gt; string(1) &quot;h&quot; }</span></span></code></pre></div><h5 id="-4" tabindex="-1">^ <a class="header-anchor" href="#-4" aria-label="Permalink to &quot;^&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>^ 匹配字符串的开始位置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>preg_match(&quot;/^hello/&quot;,&quot;hello world&quot;,$res);//array(1) { [0]=&gt; string(5) &quot;hello&quot; }</span></span></code></pre></div><h6 id="-5" tabindex="-1">$ <a class="header-anchor" href="#-5" aria-label="Permalink to &quot;$&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ 匹配字符串结束位置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>preg_match(&quot;/^hello world$/&quot;,&quot;hello world&quot;,$res);//array(1) { [0]=&gt; string(11) &quot;hello world&quot; }</span></span></code></pre></div><h5 id="b" tabindex="-1">\\b <a class="header-anchor" href="#b" aria-label="Permalink to &quot;\\b&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>\\b 匹配单词的边界(如空格、横杠，但不包括下划线)  更简单点说 \\b匹配特殊字符</span></span>
<span class="line"><span></span></span>
<span class="line"><span>preg_match(&quot;/hello\\b/&quot;,&quot;hello-world&quot;,$res);//array(1) { [0]=&gt; string(5) &quot;hello&quot; }</span></span></code></pre></div><h5 id="b-1" tabindex="-1">\\B <a class="header-anchor" href="#b-1" aria-label="Permalink to &quot;\\B&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>\\B 匹配除单词边界以外的部分 更简单点说 \\B匹配除了特殊字符以外的字符</span></span>
<span class="line"><span></span></span>
<span class="line"><span>preg_match(&quot;/hello\\B/&quot;,&quot;hello_world&quot;,$res);//array(1) { [0]=&gt; string(5) &quot;hello&quot; }</span></span></code></pre></div><h5 id="-6" tabindex="-1">[] <a class="header-anchor" href="#-6" aria-label="Permalink to &quot;[]&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[] 匹配方括号中的任一字符</span></span>
<span class="line"><span></span></span>
<span class="line"><span>preg_match(&quot;/[abcdf]/&quot;,&quot;aaaa -  bbbb - aaac&quot;,$res_test);//array(1) { [0]=&gt; string(1) &quot;a&quot; }</span></span>
<span class="line"><span>[^]匹配除方括号中的字符外的任何字符    </span></span>
<span class="line"><span></span></span>
<span class="line"><span>preg_match(&quot;/[^abcdf]/&quot;,&quot;asd&quot;,$res_test);//array(1) { [0]=&gt; string(1) &quot;s&quot; }</span></span></code></pre></div>`,208),i=s("table",null,[s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"left"}},"字符"),s("th",{style:{"text-align":"left"}},"描述")])]),s("tbody",null,[s("tr",null,[s("td",{style:{"text-align":"left"},m:""}),s("td",{style:{"text-align":"left"}},"m 是一个非负整数。匹配确定的 m 次")]),s("tr",null,[s("td",{style:{"text-align":"left"},"m,":""}),s("td",{style:{"text-align":"left"}},"m 是一个非负整数。至少匹配m 次")]),s("tr",null,[s("td",{style:{"text-align":"left"},"m,n":""}),s("td",{style:{"text-align":"left"}},"最少匹配 m次且最多匹配 n次")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"()"),s("td",{style:{"text-align":"left"}},"表示一个整体")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"."),s("td",{style:{"text-align":"left"}},"匹配除换行之外的任何一个字符")])])],-1),c=a(`<blockquote><h5 id="预定义元字符" tabindex="-1">预定义元字符 <a class="header-anchor" href="#预定义元字符" aria-label="Permalink to &quot;预定义元字符&quot;">​</a></h5></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>由于某些模式会反复用到，所以可以使用以下预定义类;</span></span>
<span class="line"><span>由于某些模式会反复用到，所以可以使用以下预定义类;</span></span>
<span class="line"><span>\\d  匹配一个数字；等价于[0-9]      </span></span>
<span class="line"><span>    preg_match(&quot;/\\d+/&quot;,&quot;asdasdasdad  3434&quot;,$res); //array(1) { [0]=&gt; string(4) &quot;3434&quot; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\D    匹配除数字以外任何一个字符；等价于[^0-9]  </span></span>
<span class="line"><span>    preg_match(&quot;/\\D+/&quot;,&quot;asdasdasdad  3434&quot;,$res);//array(1) { [0]=&gt; string(13) &quot;asdasdasdad &quot; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\w    匹配一个英文字母、数字或下划线；等价于[0-9a-zA-Z_] </span></span>
<span class="line"><span>    preg_match(&quot;/\\w+/&quot;,&quot;asdasdasdad  3434&quot;,$res); //array(1) { [0]=&gt; string(11) &quot;asdasdasdad&quot; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\W    匹配除英文字母、数字和下划线以外任何一个字符；等价于[^0-9a-zA-Z_]  </span></span>
<span class="line"><span>    preg_match(&quot;/\\W+/&quot;,&quot;asdasdasdad  3434&quot;,$res);//array(1) { [0]=&gt; string(2) &quot; &quot; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\s    匹配一个空白字符；等价于[\\f\\n\\r\\t\\v]      </span></span>
<span class="line"><span>    preg_match(&quot;/\\s+/&quot;,&quot;asdasdasdad  3434&quot;,$res); //array(1) { [0]=&gt; string(2) &quot; &quot; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\S    匹配除空白字符以外任何一个字符；等价于[^\\f\\n\\r\\t\\v]   </span></span>
<span class="line"><span>    preg_match(&quot;/\\S+/&quot;,&quot;asdasdasdad  3434&quot;,$res);//array(1) { [0]=&gt; string(11) &quot;asdasdasdad&quot; }</span></span></code></pre></div><blockquote><h4 id="匹配字符的开始和结束" tabindex="-1">匹配字符的开始和结束 <a class="header-anchor" href="#匹配字符的开始和结束" aria-label="Permalink to &quot;匹配字符的开始和结束&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>在某些情况下，需要对匹配范围进行限定，以获得更准确的匹配结果;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;^&quot;置于字符串的开始确保模式匹配出现在字符串首端；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;$&quot;置于字符串的结束，确保模式匹配出现字符串尾端。</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 如果不加边界限制元字符，将获得更多的匹配结果。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$res = preg_match(&quot;/^hello/&quot;, &quot;hello world&quot;); //int(1)</span></span>
<span class="line"><span>var_dump($res); //int(1)</span></span>
<span class="line"><span>$res = preg_match(&quot;/world$/&quot;, &quot;hello world&quot;); </span></span>
<span class="line"><span>var_dump($res); //int(1)</span></span></code></pre></div><blockquote><h4 id="匹配任意字符" tabindex="-1">匹配任意字符 <a class="header-anchor" href="#匹配任意字符" aria-label="Permalink to &quot;匹配任意字符&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>用&quot;.&quot;匹配除换行符外任何一个字符</span></span>
<span class="line"><span>$res = preg_match(&#39;/./&#39;, &quot;something&quot;); </span></span>
<span class="line"><span>var_dump($res);//int(1)</span></span>
<span class="line"><span>通常可以使用&quot;.*&quot;组合来匹配除换行符外的任何字符</span></span></code></pre></div><blockquote><h4 id="匹配包含某个范围的字符" tabindex="-1">匹配包含某个范围的字符 <a class="header-anchor" href="#匹配包含某个范围的字符" aria-label="Permalink to &quot;匹配包含某个范围的字符&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>用&quot;[start-end]&quot;匹配包含某个范围的字符</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[a-z] 匹配所有的小写字母</span></span>
<span class="line"><span>[A-Z] 匹配所有的大写字母</span></span>
<span class="line"><span>[a-zA-Z]  匹配所有的字母</span></span>
<span class="line"><span>[0-9] 匹配所有的数字</span></span>
<span class="line"><span>[0-9\\.\\-] 匹配所有的数字，句号和减号   </span></span>
<span class="line"><span></span></span>
<span class="line"><span>$res = preg_match(&quot;^[a-z]+$^&quot;, &quot;abc&quot;); </span></span>
<span class="line"><span>var_dump($res);</span></span></code></pre></div><blockquote><h4 id="重复匹配" tabindex="-1">重复匹配 <a class="header-anchor" href="#重复匹配" aria-label="Permalink to &quot;重复匹配&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>正则表达式中有一些用于重复匹配的元字符：&quot;?&quot;、&quot;*&quot;、&quot;+&quot;。他们主要的区别是重复匹配的次数不同。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;?&quot; 匹配前面的字符零次或一次  等同于 ｛0，1｝ </span></span>
<span class="line"><span>&quot;*&quot; 匹配前面的字符零次或多次  等同于 ｛0，｝</span></span>
<span class="line"><span>&quot;+&quot; 匹配前面的字符一次或多次  等同于 ｛1，｝</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;{m}&quot;        匹配确定的 m 次。 m 是一个非负整数;</span></span>
<span class="line"><span>&quot;{m，n}&quot;     最少匹配 m 次且最多匹配 n 次。 m 和 n 均为非负整数，其中m &lt;= n; </span></span>
<span class="line"><span>&quot;{m，}&quot;      至少匹配m 次。 m 是一个非负整数;</span></span></code></pre></div><blockquote><h4 id="匹配两个或多个选择" tabindex="-1">匹配两个或多个选择 <a class="header-anchor" href="#匹配两个或多个选择" aria-label="Permalink to &quot;匹配两个或多个选择&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>用圆括号&quot;(word1|word2|…)&quot;定义包含word1、word2、…的任意字符串的规则</span></span>
<span class="line"><span>$res= preg_match (&#39;/^(this|the)/&#39;, &#39;this island is a beautiful land&#39;);</span></span>
<span class="line"><span>var_dump($res);</span></span></code></pre></div><blockquote><h4 id="模式修正符-模式修正符在正则表达式定界符之外使用" tabindex="-1">模式修正符 : 模式修正符在正则表达式定界符之外使用 <a class="header-anchor" href="#模式修正符-模式修正符在正则表达式定界符之外使用" aria-label="Permalink to &quot;模式修正符 : 模式修正符在正则表达式定界符之外使用&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>i   在和模式进行匹配时不区分大小写                               </span></span>
<span class="line"><span>      preg_match(&quot;/hello/i&quot;,&quot;HELLO WORLD&quot;,$res);// array(1) { [0]=&gt; string(5) &quot;HELLO&quot; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>m   将字符串视为多行       </span></span>
<span class="line"><span>      $str = &#39;bcd </span></span>
<span class="line"><span>      abc </span></span>
<span class="line"><span>      cba&#39;; </span></span>
<span class="line"><span>      preg_match_all(&#39;/^abc/m&#39;,$str,$arr);</span></span>
<span class="line"><span>      print_r($arr);               </span></span>
<span class="line"><span></span></span>
<span class="line"><span>s   模式中的圆点元字符 “ . “将匹配所有的字符，包括换行符        </span></span>
<span class="line"><span>      $str = &#39;adsadsa </span></span>
<span class="line"><span>      c&#39;; </span></span>
<span class="line"><span>      preg_match_all(&#39;/a.*c/s&#39;,$str,$arr);</span></span>
<span class="line"><span>      print_r($arr);// Array ( [0] =&gt; Array ( [0] =&gt; adsadsa c ) )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>x   模式中的空白忽略不计，除非已经转义                          </span></span>
<span class="line"><span>      preg_match_all(&quot;/^    hello /x&quot;,&quot;hello&quot;,$res);//array(1) { [0]=&gt; array(1) { [0]=&gt; string(5) &quot;hello&quot; } }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>U   取消贪婪匹配                                        </span></span>
<span class="line"><span>      $pattern = &#39;/&lt;b&gt;.*&lt;\\/b&gt;/U&#39;; </span></span>
<span class="line"><span>      $string = &#39;&lt;b&gt;welcome&lt;/b&gt; &lt;b&gt;to&lt;/b&gt; &lt;b&gt;phpfuns&lt;/b&gt;&#39;; </span></span>
<span class="line"><span>      preg_match($pattern,$string,$res);</span></span></code></pre></div><blockquote><h4 id="常用的正则表达式" tabindex="-1">常用的正则表达式 <a class="header-anchor" href="#常用的正则表达式" aria-label="Permalink to &quot;常用的正则表达式&quot;">​</a></h4></blockquote><p><strong>手机号验证</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span>    //正则表达式</span></span>
<span class="line"><span>    header(&quot;Content-Type:text/html;charset=utf-8&quot;);</span></span>
<span class="line"><span>    $tel = &quot;13055859966&quot;;</span></span>
<span class="line"><span>    //上面部分判断长度是不是11位</span></span>
<span class="line"><span>    if (strlen($tel) == &quot;11&quot;) {</span></span>
<span class="line"><span>        $reg = &quot;/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\\\\d{8}$/&quot;;</span></span>
<span class="line"><span>        if (!preg_match($reg, $tel)) {</span></span>
<span class="line"><span>            echo &quot;手机号不正确&quot;;</span></span>
<span class="line"><span>        }else {</span></span>
<span class="line"><span>            echo &quot;手机号正确&quot;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        echo &quot;长度必须是11位&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><h4 id="邮政验证" tabindex="-1">邮政验证 <a class="header-anchor" href="#邮政验证" aria-label="Permalink to &quot;邮政验证&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span>//正则表达式</span></span>
<span class="line"><span>header(&quot;Content-Type:text/html;charset=utf-8&quot;);</span></span>
<span class="line"><span>$email = &#39;17171226@qq.com&#39;;</span></span>
<span class="line"><span>if (!preg_match(&#39;/\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*/&#39;, $email)) {</span></span>
<span class="line"><span>    echo &quot;邮箱不合法&quot;;</span></span>
<span class="line"><span>}else {</span></span>
<span class="line"><span>    echo &quot;邮箱合法&quot;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><h4 id="url验证" tabindex="-1">url验证 <a class="header-anchor" href="#url验证" aria-label="Permalink to &quot;url验证&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span>    $url = &#39;https://www.baidu.com&#39;;</span></span>
<span class="line"><span>    $url = strtolower(trim($url ));</span></span>
<span class="line"><span>    if(empty($url )) {</span></span>
<span class="line"><span>        echo &quot;url格式不正确&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    $match = &#39;/^(http:\\/\\/)?(https:\\/\\/)?([\\w\\d\\-]+\\.)+[\\w\\-]+(\\/[\\d\\w\\-.\\/?%&amp;=]*)?$/&#39;;</span></span>
<span class="line"><span>    if (!preg_match($match, $url)) {</span></span>
<span class="line"><span>        echo &quot;url格式不正确&quot;;</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        echo &quot;url格式正确&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><h5 id="用户名验证" tabindex="-1">用户名验证 <a class="header-anchor" href="#用户名验证" aria-label="Permalink to &quot;用户名验证&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span>    //6-20位字符，必须以字母开头，只能包含数字、字母、下划线，不区分大小写</span></span>
<span class="line"><span>    $username = &quot;user11&quot;;</span></span>
<span class="line"><span>    $match = &#39;/^[a-zA-Z_][a-zA-Z0-9-_]{5,19}$/&#39;;</span></span>
<span class="line"><span>    if (!preg_match($match, $username)) {</span></span>
<span class="line"><span>        echo &quot;用户名格式不正确&quot;;</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        echo &quot;用户名格式正确&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><h5 id="密码验证" tabindex="-1">密码验证 <a class="header-anchor" href="#密码验证" aria-label="Permalink to &quot;密码验证&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span>    //6-16位字符，需包括数字与英文字母</span></span>
<span class="line"><span>    $pwd = &quot;ddkjs3322&quot;;</span></span>
<span class="line"><span>    $match = &#39;/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,16}$/&#39;;</span></span>
<span class="line"><span>    if (!preg_match($match, $pwd)) {</span></span>
<span class="line"><span>        echo &quot;密码格式不正确&quot;;</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        ehco &quot;密码正确&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><h5 id="用正则表达式采集网站上的图片" tabindex="-1">用正则表达式采集网站上的图片 <a class="header-anchor" href="#用正则表达式采集网站上的图片" aria-label="Permalink to &quot;用正则表达式采集网站上的图片&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span>    header(&quot;Content-Type:text/html;charset=utf-8&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $str = file_get_contents(&quot;http://desk.zol.com.cn/qiche/&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $allpic = &quot;/&lt;span\\s*class=\\&quot;allPic\\&quot;&gt;.*&lt;font&gt;(.*)&lt;\\/font&gt;.*&lt;\\/span&gt;/imsU&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    preg_match($allpic, $str, $res);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // var_dump($res);exit;</span></span>
<span class="line"><span>    //总数</span></span>
<span class="line"><span>    $count = isset($res[1]) ? $res[1]:&#39;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //每页显示多少条数据</span></span>
<span class="line"><span>    $limit = 21;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if ($count &lt;= 0) {</span></span>
<span class="line"><span>        echo &#39;无图片采集&#39;;</span></span>
<span class="line"><span>        exit;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //算出总页数</span></span>
<span class="line"><span>    $pages = ceil($count / $limit);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //报错多少个图片</span></span>
<span class="line"><span>    $number = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //先封装好请求的地址</span></span>
<span class="line"><span>    $urllist = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $url = &quot;http://desk.zol.com.cn/qiche/&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for ($i = 1; $i &lt;= $pages; $i++) {</span></span>
<span class="line"><span>        $urllist[] = $url . $i . &quot;.html&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    foreach ($urllist as $key =&gt; $item) {</span></span>
<span class="line"><span>        //延迟执行</span></span>
<span class="line"><span>        sleep(1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //循环请求每一页</span></span>
<span class="line"><span>        $content = file_get_contents($item);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //列表的正则</span></span>
<span class="line"><span>        // &lt;ul class=&quot;pic-list2  clearfix&quot;&gt;&lt;/ul&gt;</span></span>
<span class="line"><span>        $listpreg = &quot;/&lt;ul\\s*class=\\&quot;pic-list2  clearfix\\&quot;\\s*&gt;(.*)&lt;\\/ul&gt;/imsU&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        preg_match($listpreg, $content, $res);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        $resimg = isset($res[1]) ? $res[1] : &#39;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (empty($resimg)) {</span></span>
<span class="line"><span>            continue;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // &lt;img width=&quot;208px&quot; height=&quot;130px&quot;  alt=&quot;经典跑车高清图片壁纸&quot; src=&quot;https://desk-fd.zol-img.com.cn/t_s208x130c5/g6/M00/0C/0A/ChMkKV9ti0OINUb4ADCGtlNV8wQAACyQgEjuMoAMIbO670.jpg&quot; title = &quot;经典跑车高清图片壁纸&quot;/&gt;</span></span>
<span class="line"><span>        $imgpreg = &quot;/&lt;img.*src=\\&quot;(.*)\\&quot;.*&gt;/imsU&quot;;</span></span>
<span class="line"><span>        preg_match_all($imgpreg, $resimg, $imgstr);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        $imglist = isset($imgstr[1]) ? $imgstr[1] : [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (empty($imglist)) {</span></span>
<span class="line"><span>            continue;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        foreach ($imglist as $index =&gt; $value) {</span></span>
<span class="line"><span>            $content = file_get_contents($value);</span></span>
<span class="line"><span>            $filename = pathinfo($value, PATHINFO_BASENAME);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //除了写文本以外，还是可以写文件的</span></span>
<span class="line"><span>            $success = file_put_contents(&quot;./images/$filename&quot;, $content);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //当成功保存一张图片后，Number++</span></span>
<span class="line"><span>            $success &gt; 0 &amp;&amp; $number++;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // https://desk-fd.zol-img.com.cn/t_s宽x高c5/g3/M08/01/01/ChMlWF7sRuCIIGlRADJiyQ0pQH4AAU9qwDsdOkAMmLh866.jpg</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    echo &quot;总共保存了：&quot; . $number . &quot;张图片&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><p>用正则表达式采集小说网站的小说</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span>    header(&quot;Content-Type:text/html;charset=utf-8&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $content = file_get_contents(&quot;http://book.zongheng.com/showchapter/984807.html&quot;); //读取该地址的数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // var_dump($content);exit;</span></span>
<span class="line"><span>    //匹配书籍名称</span></span>
<span class="line"><span>    $namepreg = &quot;/&lt;div\\s*class=\\&quot;book-meta\\&quot;\\s*&gt;.*&lt;h1&gt;(.*)&lt;\\/h1&gt;.*&lt;\\/div&gt;/imsU&quot;;</span></span>
<span class="line"><span>    preg_match($namepreg, $content, $nameres);</span></span>
<span class="line"><span>    //获取到书籍名称</span></span>
<span class="line"><span>    $bookname = isset($nameres[1]) ? $nameres[1] : &#39;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(empty($bookname))</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        echo &#39;书籍名为空&#39;;</span></span>
<span class="line"><span>        exit;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //匹配章节的正则</span></span>
<span class="line"><span>    $chapter = &quot;/&lt;ul class=\\&quot;chapter-list clearfix\\&quot;&gt;(.*)&lt;\\/ul&gt;/simU&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    preg_match_all($chapter, $content, $chapterlist);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $booklist = isset($chapterlist[0][1]) ? $chapterlist[0][1] : &#39;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(empty($booklist))</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        echo &#39;章节列表为空&#39;;</span></span>
<span class="line"><span>        exit;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //匹配链接部分</span></span>
<span class="line"><span>    $chapter2 = &quot;/&lt;a.*href=\\&quot;(.*)\\&quot;.*&gt;(.*)&lt;\\/a&gt;/imsU&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    preg_match_all($chapter2,$booklist,$result);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // var_dump($result);</span></span>
<span class="line"><span>    $UlrList = isset($result[1]) ? $result[1] : &#39;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $TitleList = isset($result[2]) ? $result[2] : &#39;&#39;;</span></span>
<span class="line"><span>    // var_dump($TitleList);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(empty($UlrList) || empty($TitleList))</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        echo &#39;采集的列表为空&#39;;</span></span>
<span class="line"><span>        exit;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $ResultStr = &#39;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    foreach($UlrList as $key =&gt; $item)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        //标题</span></span>
<span class="line"><span>        $ResultStr .= $TitleList[$key];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        $content = file_get_contents($item);</span></span>
<span class="line"><span>        if (empty($content)) {</span></span>
<span class="line"><span>            continue;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //匹配书籍的信息</span></span>
<span class="line"><span>        $infopreg = &quot;/&lt;div\\s*class=\\&quot;bookinfo\\&quot;\\s*&gt;(.*)&lt;\\/div&gt;/misU&quot;;</span></span>
<span class="line"><span>        preg_match($infopreg, $content, $infolist);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        $info = isset($infolist[1]) ? $infolist[1] : &#39;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (!empty($info)) {</span></span>
<span class="line"><span>            $authorpreg = &quot;/&lt;a\\s*href=\\&quot;.*\\&quot;\\s*&gt;(.*)&lt;\\/a&gt;/&quot;;</span></span>
<span class="line"><span>            preg_match($authorpreg, $info, $author);</span></span>
<span class="line"><span>            $author = isset($author[1]) ? $author[1] : &#39;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // //不为空就拼接</span></span>
<span class="line"><span>            if(!empty($author))</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                // echo 111;exit;</span></span>
<span class="line"><span>                $ResultStr .= &quot;\\r\\n\\r\\n作者：$author\\r\\n\\r\\n&quot;;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // //匹配更新时间</span></span>
<span class="line"><span>            $createpreg = &quot;/更新时间.*&lt;span&gt;(.*)&lt;\\/span&gt;/&quot;;</span></span>
<span class="line"><span>            preg_match($createpreg, $info, $time);</span></span>
<span class="line"><span>            $time = isset($time[1]) ? $time[1] : &#39;&#39;;</span></span>
<span class="line"><span>            // var_dump($time);exit;</span></span>
<span class="line"><span>            // //逻辑短路</span></span>
<span class="line"><span>            if(!empty($time))</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                $ResultStr .= &quot;更新时间：$time\\r\\n\\r\\n&quot;;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // !empty($time) &amp;&amp; $ResultStr .= &quot;更新时间：$time&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        $contentpreg = &quot;/&lt;div\\s*class=\\&quot;content\\&quot;.*&gt;(.*)&lt;\\/div&gt;/imsU&quot; ;</span></span>
<span class="line"><span>        preg_match($contentpreg,$content,$article);</span></span>
<span class="line"><span>        $article = isset($article[1]) ? $article[1] : &#39;&#39;;</span></span>
<span class="line"><span>        if(!empty($article))</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            $article =  preg_replace(&#39;/&lt;p.*?&gt;|&lt;\\/p&gt;/is&#39;, &quot;\\r\\n\\r\\n&quot;, $article);</span></span>
<span class="line"><span>            $ResultStr .= $article. &quot;\\r\\n\\r\\n&quot;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //写入</span></span>
<span class="line"><span>    $filename = $bookname.&quot;.txt&quot;;</span></span>
<span class="line"><span>    $length = file_put_contents($filename, $ResultStr);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if($length&lt;=0)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        echo &#39;采集失败&#39;;</span></span>
<span class="line"><span>    }else {</span></span>
<span class="line"><span>        echo &quot;采集结果为：$length 长度&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>?&gt;</span></span>
<span class="line"><span>注意：有些网站防止恶意的访问，当某IP过于频繁访问该网站时会弹出验证码的窗口，验证是否是机器人。</span></span>
<span class="line"><span>上面的小说采集的案例里的网站就有这个验证，当出现采集不了时，那有可能触发到该验证了</span></span></code></pre></div><h2 id="php接口封装" tabindex="-1">PHP接口封装 <a class="header-anchor" href="#php接口封装" aria-label="Permalink to &quot;PHP接口封装&quot;">​</a></h2><h3 id="接口大全" tabindex="-1">接口大全 <a class="header-anchor" href="#接口大全" aria-label="Permalink to &quot;接口大全&quot;">​</a></h3><p><a href="https://www.free-api.com/" target="_blank" rel="noreferrer"><strong>free-api</strong></a></p><h3 id="什么是api接口" tabindex="-1">什么是API接口 <a class="header-anchor" href="#什么是api接口" aria-label="Permalink to &quot;什么是API接口&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>api接口指的是应用程序编程接口（Application Programming Interface）。</span></span>
<span class="line"><span>是一些预先定义的函数，或指软件系统不同组成部分衔接的约定。</span></span>
<span class="line"><span>用来提供应用程序与开发人员基于某软件或硬件得以访问的一组例程，</span></span>
<span class="line"><span>而又无需访问原码，或理解内部工作机制的细节。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们通过API接口可以实现特定的功能，而不需要了解其内部实现细节。</span></span>
<span class="line"><span>可以把API接口理解为是特定服务的一种封装，将服务封装起来提供给他人调用，这样一来很多功能不需要从新开发。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另外，不同系统和编程语言之间的数据通讯往往也采用API形式进行数据交接。</span></span></code></pre></div><h3 id="常见的api形式有哪些" tabindex="-1"><strong>常见的API形式有哪些？</strong> <a class="header-anchor" href="#常见的api形式有哪些" aria-label="Permalink to &quot;**常见的API形式有哪些？**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1、HTTP类型接口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>基于HTTP协议提供的API，这类API常常以“网址”形式提供的，像现在主流的RESTful就属于这类接口。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、RPC接口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RPC它是指远程过程调用，将一部分代码逻辑放在远程服务器上部署，</span></span>
<span class="line"><span>然后在需要的地方调用即可（调用远程方法就像调用本地方法一样）。</span></span>
<span class="line"><span>本质上是Client/Server模式，而且支持多种协议和数据传输方式。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3、Web Service 接口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Web Service并不具象地指某种API，我们将以WEB形式提供的服务都称之为Web Service。</span></span>
<span class="line"><span>像RESTful也属于Web Service。</span></span></code></pre></div><h3 id="天气预报api" tabindex="-1">天气预报API <a class="header-anchor" href="#天气预报api" aria-label="Permalink to &quot;天气预报API&quot;">​</a></h3><h5 id="第一步-打开聚合数据里面有一些免费的api接口可以使用-但是次数会有限制" tabindex="-1">第一步：打开<a href="https://www.juhe.cn/" target="_blank" rel="noreferrer">聚合数据</a>里面有一些免费的API接口可以使用，但是次数会有限制 <a class="header-anchor" href="#第一步-打开聚合数据里面有一些免费的api接口可以使用-但是次数会有限制" aria-label="Permalink to &quot;第一步：打开[聚合数据](https://www.juhe.cn/)里面有一些免费的API接口可以使用，但是次数会有限制&quot;">​</a></h5><h5 id="第二步-注册账号-如果有账号就直接登录-注册完后再去个人中心—-账号管理—-实名认证-进行实名" tabindex="-1">第二步：注册账号，如果有账号就直接登录，注册完后再去个人中心—&gt;账号管理—&gt;实名认证，进行实名 <a class="header-anchor" href="#第二步-注册账号-如果有账号就直接登录-注册完后再去个人中心—-账号管理—-实名认证-进行实名" aria-label="Permalink to &quot;第二步：注册账号，如果有账号就直接登录，注册完后再去个人中心—&gt;账号管理—&gt;实名认证，进行实名&quot;">​</a></h5><h5 id="第三步-实名认证通过后就选想要使用的api-例如选天气预报api-点击进入天气预报api的详细页后点击申请" tabindex="-1">第三步：实名认证通过后就选想要使用的API，例如选天气预报API，点击进入天气预报API的详细页后点击申请 <a class="header-anchor" href="#第三步-实名认证通过后就选想要使用的api-例如选天气预报api-点击进入天气预报api的详细页后点击申请" aria-label="Permalink to &quot;第三步：实名认证通过后就选想要使用的API，例如选天气预报API，点击进入天气预报API的详细页后点击申请&quot;">​</a></h5><h5 id="第四步-开始写天气预报api接口类封装-新建一个juhe-php" tabindex="-1">第四步：开始写天气预报API接口类封装，新建一个juhe.php <a class="header-anchor" href="#第四步-开始写天气预报api接口类封装-新建一个juhe-php" aria-label="Permalink to &quot;第四步：开始写天气预报API接口类封装，新建一个juhe.php&quot;">​</a></h5><h5 id="第五步-写前端请求后端的代码-新建一个weather-html" tabindex="-1">第五步：写前端请求后端的代码，新建一个weather.html <a class="header-anchor" href="#第五步-写前端请求后端的代码-新建一个weather-html" aria-label="Permalink to &quot;第五步：写前端请求后端的代码，新建一个weather.html&quot;">​</a></h5><h5 id="第六步-写接收前端的数据进行处理的代码-新建一个weather-php" tabindex="-1">第六步：写接收前端的数据进行处理的代码，新建一个weather.php <a class="header-anchor" href="#第六步-写接收前端的数据进行处理的代码-新建一个weather-php" aria-label="Permalink to &quot;第六步：写接收前端的数据进行处理的代码，新建一个weather.php&quot;">​</a></h5><h5 id="第七步-测试api调用是否成功" tabindex="-1">第七步：测试API调用是否成功 <a class="header-anchor" href="#第七步-测试api调用是否成功" aria-label="Permalink to &quot;第七步：测试API调用是否成功&quot;">​</a></h5><h5 id="注意-如果遇到服务级错误码-系统级错误码-错误码格式这三个里的其中一个-请参考该api的文档" tabindex="-1">注意：如果遇到<strong>服务级错误码</strong>，<strong>系统级错误码</strong>，<strong>错误码格式</strong>这三个里的其中一个，请参考该API的文档 <a class="header-anchor" href="#注意-如果遇到服务级错误码-系统级错误码-错误码格式这三个里的其中一个-请参考该api的文档" aria-label="Permalink to &quot;注意：如果遇到**服务级错误码**，**系统级错误码**，**错误码格式**这三个里的其中一个，请参考该API的文档&quot;">​</a></h5><h5 id="weatherapi-php" tabindex="-1">WeatherApi.php <a class="header-anchor" href="#weatherapi-php" aria-label="Permalink to &quot;WeatherApi.php&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?</span></span>
<span class="line"><span>//命名空间</span></span>
<span class="line"><span>namespace WeatherApi;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Class WeatherApi</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    private $str;//要查询字符串的值</span></span>
<span class="line"><span>    private $key;//请求的key，密钥</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public function __construct($str=&quot;&quot;,$key=&quot;&quot;)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $this-&gt;str = $str;</span></span>
<span class="line"><span>        $this-&gt;key = $key;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public function weather()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        // api地址</span></span>
<span class="line"><span>        $apiUrl = &#39;http://apis.juhe.cn/simpleWeather/query&#39;;</span></span>
<span class="line"><span>        // 请求参数</span></span>
<span class="line"><span>        $params = [</span></span>
<span class="line"><span>            &#39;city&#39; =&gt; $this-&gt;str, // 要查询的城市</span></span>
<span class="line"><span>            &#39;key&#39; =&gt; $this-&gt;key</span></span>
<span class="line"><span>        ];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //生成 URL-encode 之后的请求字符串</span></span>
<span class="line"><span>        $paramsString = http_build_query($params);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 发起接口网络请求</span></span>
<span class="line"><span>        $response = $this-&gt;juheHttpRequest($apiUrl, $paramsString, 1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 返回请求到的数据</span></span>
<span class="line"><span>        return $response;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 发起网络请求函数</span></span>
<span class="line"><span>     * @param $url 请求的URL</span></span>
<span class="line"><span>     * @param bool $params 请求的参数内容</span></span>
<span class="line"><span>     * @param int $ispost 是否POST请求</span></span>
<span class="line"><span>     * @return bool|string 返回内容</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private function juheHttpRequest($url, $params = false, $ispost = 0)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $httpInfo = array();</span></span>
<span class="line"><span>        $ch = curl_init();//初始化</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);////只获取页面内容，但不输出</span></span>
<span class="line"><span>        if ($ispost) {</span></span>
<span class="line"><span>            curl_setopt($ch, CURLOPT_POST, true);////设置请求是POST方式</span></span>
<span class="line"><span>            curl_setopt($ch, CURLOPT_POSTFIELDS, $params);////设置POST请求所有数据的字符串</span></span>
<span class="line"><span>            curl_setopt($ch, CURLOPT_URL, $url);//设置访问的URL</span></span>
<span class="line"><span>        } else {//如果不是post，那就是get</span></span>
<span class="line"><span>            if ($params) {</span></span>
<span class="line"><span>                curl_setopt($ch, CURLOPT_URL, $url . &#39;?&#39; . $params);//拼接参数</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                curl_setopt($ch, CURLOPT_URL, $url);//取回的URL地址</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        $response = curl_exec($ch);//执行访问，返回结果</span></span>
<span class="line"><span>        if ($response === FALSE) {</span></span>
<span class="line"><span>            // echo &quot;cURL Error: &quot;.curl_error($ch);</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);</span></span>
<span class="line"><span>        $httpInfo = array_merge($httpInfo, curl_getinfo($ch));</span></span>
<span class="line"><span>        curl_close($ch);</span></span>
<span class="line"><span>        return $response;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="weather-html" tabindex="-1">weather.html <a class="header-anchor" href="#weather-html" aria-label="Permalink to &quot;weather.html&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;请求天气接口&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;form&gt;</span></span>
<span class="line"><span>        &lt;table&gt;</span></span>
<span class="line"><span>            &lt;tr&gt;</span></span>
<span class="line"><span>                &lt;td&gt;查询城市:&lt;/td&gt;</span></span>
<span class="line"><span>                &lt;td&gt;&lt;input type=&quot;text&quot; name=&quot;city&quot; placeholder=&quot;请输入要查询的城市&quot; id=&quot;city&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span>            &lt;/tr&gt;</span></span>
<span class="line"><span>            &lt;tr&gt;</span></span>
<span class="line"><span>                &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span>                &lt;td&gt;&lt;input type=&quot;button&quot; value=&quot;查询&quot; id=&quot;btn&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span>            &lt;/tr&gt;</span></span>
<span class="line"><span>        &lt;/table&gt;</span></span>
<span class="line"><span>    &lt;/form&gt;</span></span>
<span class="line"><span>    &lt;ul id=&quot;show&quot;&gt;&lt;/ul&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;js/jquery-3.5.1.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    $(&#39;#btn&#39;).click(function () {</span></span>
<span class="line"><span>            var city = $(&#39;#city&#39;).val();</span></span>
<span class="line"><span>            $.ajax({</span></span>
<span class="line"><span>                type: &#39;post&#39;,</span></span>
<span class="line"><span>                url: &#39;weather.php&#39;,</span></span>
<span class="line"><span>                data: {</span></span>
<span class="line"><span>                    &#39;city&#39;: \`\${city}\`,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                dataType: &#39;json&#39;,</span></span>
<span class="line"><span>                success: function (res) {</span></span>
<span class="line"><span>                    // 每次请求数据回调成功后都要把ul的显示数据清空</span></span>
<span class="line"><span>                    $(&#39;#show&#39;).html(&#39;&#39;);</span></span>
<span class="line"><span>                    if(res.code == 1){</span></span>
<span class="line"><span>                        var li = \`</span></span>
<span class="line"><span>                            &lt;li&gt;当前城市：\${res.data.city}&lt;/li&gt;</span></span>
<span class="line"><span>                            &lt;li&gt;当前温度：\${res.data.temperature}&lt;/li&gt;</span></span>
<span class="line"><span>                            &lt;li&gt;当前湿度：\${res.data.humidity}&lt;/li&gt;</span></span>
<span class="line"><span>                            &lt;li&gt;当前天气：\${res.data.info}&lt;/li&gt;</span></span>
<span class="line"><span>                            &lt;li&gt;当前风向：\${res.data.direct}&lt;/li&gt;</span></span>
<span class="line"><span>                            &lt;li&gt;当前风力：\${res.data.power}&lt;/li&gt;</span></span>
<span class="line"><span>                            &lt;li&gt;当前空气质量：\${res.data.aqi}&lt;/li&gt;</span></span>
<span class="line"><span>                        \`;</span></span>
<span class="line"><span>                        $(&#39;#show&#39;).append(li);</span></span>
<span class="line"><span>                    }else{</span></span>
<span class="line"><span>                        var li = \`</span></span>
<span class="line"><span>                            &lt;li&gt;错误码：\${res.code}&lt;/li&gt;</span></span>
<span class="line"><span>                            &lt;li&gt;错误信息：\${res.msg}&lt;/li&gt;</span></span>
<span class="line"><span>                        \`;</span></span>
<span class="line"><span>                        $(&#39;#show&#39;).append(li);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h5 id="weather-php" tabindex="-1">weather.php <a class="header-anchor" href="#weather-php" aria-label="Permalink to &quot;weather.php&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用api</span></span>
<span class="line"><span>require_once(&#39;WeatherApi.php&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if ($_POST) {</span></span>
<span class="line"><span>    // 接收ajax的请求参数</span></span>
<span class="line"><span>    $city = $_POST[&#39;city&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 实例化该类</span></span>
<span class="line"><span>    $weather = new \\WeatherApi\\WeatherApi($city, &#39;9ab6176129dbb280b54721e4da1a1e78&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取到返回的数据</span></span>
<span class="line"><span>    $result = $weather-&gt;weather();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 把json数据转化数组数据</span></span>
<span class="line"><span>    $result = json_decode($result, true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 是否请求成功</span></span>
<span class="line"><span>    if ($result) {</span></span>
<span class="line"><span>        // 获取错误码</span></span>
<span class="line"><span>        $errorCode = $result[&#39;error_code&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 获取请求信息</span></span>
<span class="line"><span>        $reason = $result[&#39;reason&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 如果错误码等于0时，说明请求成功</span></span>
<span class="line"><span>        if ($errorCode == 0) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 获取当天的天气信息</span></span>
<span class="line"><span>            $result = $result[&#39;result&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 封装数组</span></span>
<span class="line"><span>            $data = [</span></span>
<span class="line"><span>                &#39;city&#39; =&gt; $result[&#39;city&#39;],</span></span>
<span class="line"><span>                &#39;temperature&#39; =&gt; $result[&quot;realtime&quot;][&quot;temperature&quot;],</span></span>
<span class="line"><span>                &#39;humidity&#39; =&gt; $result[&#39;realtime&#39;][&#39;humidity&#39;],</span></span>
<span class="line"><span>                &#39;info&#39; =&gt; $result[&#39;realtime&#39;][&#39;info&#39;],</span></span>
<span class="line"><span>                &#39;direct&#39; =&gt; $result[&#39;realtime&#39;][&#39;direct&#39;],</span></span>
<span class="line"><span>                &#39;power&#39; =&gt; $result[&#39;realtime&#39;][&#39;power&#39;],</span></span>
<span class="line"><span>                &#39;aqi&#39; =&gt; $result[&#39;realtime&#39;][&#39;aqi&#39;]</span></span>
<span class="line"><span>            ];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 封装返回请求成功后的信息</span></span>
<span class="line"><span>            $res = [</span></span>
<span class="line"><span>                &#39;msg&#39; =&gt; $reason,</span></span>
<span class="line"><span>                &#39;data&#39; =&gt; $data,</span></span>
<span class="line"><span>                &#39;code&#39; =&gt; 1</span></span>
<span class="line"><span>            ];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 返回json数据</span></span>
<span class="line"><span>            echo json_encode($res);</span></span>
<span class="line"><span>            exit;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 请求异常</span></span>
<span class="line"><span>            $res = [</span></span>
<span class="line"><span>                &#39;msg&#39; =&gt; $reason,</span></span>
<span class="line"><span>                &#39;data&#39; =&gt;  null,</span></span>
<span class="line"><span>                &#39;code&#39; =&gt; $errorCode</span></span>
<span class="line"><span>            ];</span></span>
<span class="line"><span>            echo json_encode($res);</span></span>
<span class="line"><span>            exit;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        // 可能网络异常等问题，无法正常获得相应内容，业务逻辑可自行修改</span></span>
<span class="line"><span>        $res = [</span></span>
<span class="line"><span>            &#39;msg&#39; =&gt; &#39;请求异常&#39;,</span></span>
<span class="line"><span>            &#39;data&#39; =&gt;  null,</span></span>
<span class="line"><span>            &#39;code&#39; =&gt;  404,</span></span>
<span class="line"><span>        ];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        echo json_encode($res);</span></span>
<span class="line"><span>        exit;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="ip查询" tabindex="-1">IP查询 <a class="header-anchor" href="#ip查询" aria-label="Permalink to &quot;IP查询&quot;">​</a></h2><h5 id="步骤跟写天气预报的api一样" tabindex="-1">步骤跟写天气预报的API一样 <a class="header-anchor" href="#步骤跟写天气预报的api一样" aria-label="Permalink to &quot;步骤跟写天气预报的API一样&quot;">​</a></h5><h5 id="ipapi-php" tabindex="-1">ipApi.php <a class="header-anchor" href="#ipapi-php" aria-label="Permalink to &quot;ipApi.php&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//命名空间</span></span>
<span class="line"><span>namespace IpApi;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Class IpApi</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    private $str;//要查询字符串的值</span></span>
<span class="line"><span>    private $key;//请求的key，密钥</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public function __construct($ip=&quot;&quot;,$key=&quot;&quot;)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $this-&gt;ip = $ip;</span></span>
<span class="line"><span>        $this-&gt;key = $key;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 查询ip API */</span></span>
<span class="line"><span>    public function ip()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        // api地址</span></span>
<span class="line"><span>        $url = &quot;http://apis.juhe.cn/ip/ipNew&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 请求参数</span></span>
<span class="line"><span>        $params = [</span></span>
<span class="line"><span>            &quot;ip&quot; =&gt; $this-&gt;ip, //需要查询的IP地址或域名</span></span>
<span class="line"><span>            &quot;key&quot; =&gt; $this-&gt;key, //应用APPKEY(应用详细页查询)</span></span>
<span class="line"><span>        ];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //生成 URL-encode 之后的请求字符串</span></span>
<span class="line"><span>        $paramstring = http_build_query($params);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 发起接口网络请求</span></span>
<span class="line"><span>        $response = $this-&gt;juheHttpRequest($url, $paramstring, 1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 返回请求到的数据</span></span>
<span class="line"><span>        return $response;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 发起网络请求函数</span></span>
<span class="line"><span>     * @param $url 请求的URL</span></span>
<span class="line"><span>     * @param bool $params 请求的参数内容</span></span>
<span class="line"><span>     * @param int $ispost 是否POST请求</span></span>
<span class="line"><span>     * @return bool|string 返回内容</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private function juheHttpRequest($url, $params = false, $ispost = 0)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $httpInfo = array();</span></span>
<span class="line"><span>        $ch = curl_init();//初始化</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);////只获取页面内容，但不输出</span></span>
<span class="line"><span>        if ($ispost) {</span></span>
<span class="line"><span>            curl_setopt($ch, CURLOPT_POST, true);////设置请求是POST方式</span></span>
<span class="line"><span>            curl_setopt($ch, CURLOPT_POSTFIELDS, $params);////设置POST请求所有数据的字符串</span></span>
<span class="line"><span>            curl_setopt($ch, CURLOPT_URL, $url);//设置访问的URL</span></span>
<span class="line"><span>        } else {//如果不是post，那就是get</span></span>
<span class="line"><span>            if ($params) {</span></span>
<span class="line"><span>                curl_setopt($ch, CURLOPT_URL, $url . &#39;?&#39; . $params);//拼接参数</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                curl_setopt($ch, CURLOPT_URL, $url);//取回的URL地址</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        $response = curl_exec($ch);//执行访问，返回结果</span></span>
<span class="line"><span>        if ($response === FALSE) {</span></span>
<span class="line"><span>            // echo &quot;cURL Error: &quot;.curl_error($ch);</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);</span></span>
<span class="line"><span>        $httpInfo = array_merge($httpInfo, curl_getinfo($ch));</span></span>
<span class="line"><span>        curl_close($ch);</span></span>
<span class="line"><span>        return $response;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="ipaip-html" tabindex="-1">ipAip.html <a class="header-anchor" href="#ipaip-html" aria-label="Permalink to &quot;ipAip.html&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;查询ip接口&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;form&gt;</span></span>
<span class="line"><span>        &lt;table&gt;</span></span>
<span class="line"><span>            &lt;tr&gt;</span></span>
<span class="line"><span>                &lt;td&gt;查询IP地址:&lt;/td&gt;</span></span>
<span class="line"><span>                &lt;td&gt;&lt;input type=&quot;text&quot; name=&quot;ip&quot; placeholder=&quot;请输入要查询的城市&quot; id=&quot;ip&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span>            &lt;/tr&gt;</span></span>
<span class="line"><span>            &lt;tr&gt;</span></span>
<span class="line"><span>                &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span>                &lt;td&gt;&lt;input type=&quot;button&quot; value=&quot;查询&quot; id=&quot;btn&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span>            &lt;/tr&gt;</span></span>
<span class="line"><span>        &lt;/table&gt;</span></span>
<span class="line"><span>    &lt;/form&gt;</span></span>
<span class="line"><span>    &lt;ul id=&quot;show&quot;&gt;&lt;/ul&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;js/jquery-3.5.1.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    $(&#39;#btn&#39;).click(function () {</span></span>
<span class="line"><span>            var ip = $(&#39;#ip&#39;).val();</span></span>
<span class="line"><span>            $.ajax({</span></span>
<span class="line"><span>                type: &#39;post&#39;,</span></span>
<span class="line"><span>                url: &#39;ip.php&#39;,</span></span>
<span class="line"><span>                data: {</span></span>
<span class="line"><span>                    &#39;ip&#39;: \`\${ip}\`,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                dataType: &#39;json&#39;,</span></span>
<span class="line"><span>                success: function (res) {</span></span>
<span class="line"><span>                    // 每次请求数据回调成功后都要把ul的显示数据清空</span></span>
<span class="line"><span>                    $(&#39;#show&#39;).html(&#39;&#39;);</span></span>
<span class="line"><span>                    if(res.code == 1){</span></span>
<span class="line"><span>                        var li = \`</span></span>
<span class="line"><span>                            &lt;li&gt;国家：\${res.data.Country}&lt;/li&gt;</span></span>
<span class="line"><span>                            &lt;li&gt;省份：\${res.data.Province}&lt;/li&gt;</span></span>
<span class="line"><span>                            &lt;li&gt;城市：\${res.data.City}&lt;/li&gt;</span></span>
<span class="line"><span>                            &lt;li&gt;运营商：\${res.data.Isp}&lt;/li&gt;</span></span>
<span class="line"><span>                        \`;</span></span>
<span class="line"><span>                        $(&#39;#show&#39;).append(li);</span></span>
<span class="line"><span>                    }else{</span></span>
<span class="line"><span>                        var li = \`</span></span>
<span class="line"><span>                            &lt;li&gt;错误码：\${res.code}&lt;/li&gt;</span></span>
<span class="line"><span>                            &lt;li&gt;错误信息：\${res.msg}&lt;/li&gt;</span></span>
<span class="line"><span>                        \`;</span></span>
<span class="line"><span>                        $(&#39;#show&#39;).append(li);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h5 id="ip-php" tabindex="-1">ip.php <a class="header-anchor" href="#ip-php" aria-label="Permalink to &quot;ip.php&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用api</span></span>
<span class="line"><span>require_once(&#39;IpApi.php&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if ($_POST) {</span></span>
<span class="line"><span>    // 接收ajax的请求参数</span></span>
<span class="line"><span>    $ip = $_POST[&#39;ip&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 实例化该类</span></span>
<span class="line"><span>    $ipApi = new \\IpApi\\IpApi($ip, &#39;0d299c6f416192337e0907a013b9be4d&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取到返回的数据</span></span>
<span class="line"><span>    $result = $ipApi-&gt;ip();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 把json数据转化数组数据</span></span>
<span class="line"><span>    $result = json_decode($result, true);</span></span>
<span class="line"><span>    // 是否请求成功</span></span>
<span class="line"><span>    if ($result) {</span></span>
<span class="line"><span>        // 获取返回码</span></span>
<span class="line"><span>        $resultCode = $result[&#39;resultcode&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 获取错误码</span></span>
<span class="line"><span>        $errorCode = $result[&#39;error_code&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 获取请求信息</span></span>
<span class="line"><span>        $reason = $result[&#39;reason&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 如果返回码等于200时，说明请求成功</span></span>
<span class="line"><span>        if ($resultCode == 200) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 获取当天的天气信息</span></span>
<span class="line"><span>            $result = $result[&#39;result&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 封装数组</span></span>
<span class="line"><span>            $data = [</span></span>
<span class="line"><span>                &#39;Country&#39; =&gt; $result[&#39;Country&#39;],</span></span>
<span class="line"><span>                &#39;Province&#39; =&gt; $result[&#39;Province&#39;],</span></span>
<span class="line"><span>                &#39;City&#39; =&gt; $result[&#39;City&#39;],</span></span>
<span class="line"><span>                &#39;Isp&#39; =&gt; $result[&#39;Isp&#39;],</span></span>
<span class="line"><span>            ];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 封装返回请求成功后的信息</span></span>
<span class="line"><span>            $res = [</span></span>
<span class="line"><span>                &#39;msg&#39; =&gt; $reason,</span></span>
<span class="line"><span>                &#39;data&#39; =&gt; $data,</span></span>
<span class="line"><span>                &#39;code&#39; =&gt; 1</span></span>
<span class="line"><span>            ];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 返回json数据</span></span>
<span class="line"><span>            echo json_encode($res);</span></span>
<span class="line"><span>            exit;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 请求异常</span></span>
<span class="line"><span>            $res = [</span></span>
<span class="line"><span>                &#39;msg&#39; =&gt; $reason,</span></span>
<span class="line"><span>                &#39;data&#39; =&gt;  null,</span></span>
<span class="line"><span>                &#39;code&#39; =&gt; $errorCode</span></span>
<span class="line"><span>            ];</span></span>
<span class="line"><span>            echo json_encode($res);</span></span>
<span class="line"><span>            exit;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        // 可能网络异常等问题，无法正常获得相应内容，业务逻辑可自行修改</span></span>
<span class="line"><span>        $res = [</span></span>
<span class="line"><span>            &#39;msg&#39; =&gt; &#39;请求异常&#39;,</span></span>
<span class="line"><span>            &#39;data&#39; =&gt;  null,</span></span>
<span class="line"><span>            &#39;code&#39; =&gt;  404,</span></span>
<span class="line"><span>        ];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        echo json_encode($res);</span></span>
<span class="line"><span>        exit;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="查询手机号码-段-归属地" tabindex="-1">查询手机号码(段)归属地 <a class="header-anchor" href="#查询手机号码-段-归属地" aria-label="Permalink to &quot;查询手机号码(段)归属地&quot;">​</a></h2><h5 id="步骤一样" tabindex="-1">步骤一样 <a class="header-anchor" href="#步骤一样" aria-label="Permalink to &quot;步骤一样&quot;">​</a></h5><h5 id="phoneapi-php" tabindex="-1">PhoneApi.php <a class="header-anchor" href="#phoneapi-php" aria-label="Permalink to &quot;PhoneApi.php&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//命名空间</span></span>
<span class="line"><span>namespace PhoneApi;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class PhoneApi</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    private $str; //要查询字符串的值</span></span>
<span class="line"><span>    private $key; //请求的key，密钥</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public function __construct($phone = &quot;&quot;, $key = &quot;&quot;)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $this-&gt;phone = $phone;</span></span>
<span class="line"><span>        $this-&gt;key = $key;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 查询查询手机号码归属地信息 API */</span></span>
<span class="line"><span>    public function phone()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        //Api地址 根据手机号码或手机号码的前7位，查询手机号码归属地信息，如省份 、城市、运营商等。</span></span>
<span class="line"><span>        $url = &quot;http://apis.juhe.cn/mobile/get&quot;;</span></span>
<span class="line"><span>        // 请求参数</span></span>
<span class="line"><span>        $params = [</span></span>
<span class="line"><span>            &quot;phone&quot; =&gt; $this-&gt;phone, //手机号码或手机号码的前7位</span></span>
<span class="line"><span>            &quot;key&quot; =&gt; $this-&gt;key, //应用APPKEY(应用详细页查询)</span></span>
<span class="line"><span>        ];</span></span>
<span class="line"><span>        //生成 URL-encode 之后的请求字符串</span></span>
<span class="line"><span>        $paramstring = http_build_query($params);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 发起接口网络请求</span></span>
<span class="line"><span>        $response = $this-&gt;juheHttpRequest($url, $paramstring, 1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 返回数据</span></span>
<span class="line"><span>        return $response;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 发起网络请求函数</span></span>
<span class="line"><span>     * @param $url 请求的URL</span></span>
<span class="line"><span>     * @param bool $params 请求的参数内容</span></span>
<span class="line"><span>     * @param int $ispost 是否POST请求</span></span>
<span class="line"><span>     * @return bool|string 返回内容</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private function juheHttpRequest($url, $params = false, $ispost = 0)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $httpInfo = array();</span></span>
<span class="line"><span>        $ch = curl_init(); //初始化</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); ////只获取页面内容，但不输出</span></span>
<span class="line"><span>        if ($ispost) {</span></span>
<span class="line"><span>            curl_setopt($ch, CURLOPT_POST, true); ////设置请求是POST方式</span></span>
<span class="line"><span>            curl_setopt($ch, CURLOPT_POSTFIELDS, $params); ////设置POST请求所有数据的字符串</span></span>
<span class="line"><span>            curl_setopt($ch, CURLOPT_URL, $url); //设置访问的URL</span></span>
<span class="line"><span>        } else { //如果不是post，那就是get</span></span>
<span class="line"><span>            if ($params) {</span></span>
<span class="line"><span>                curl_setopt($ch, CURLOPT_URL, $url . &#39;?&#39; . $params); //拼接参数</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                curl_setopt($ch, CURLOPT_URL, $url); //取回的URL地址</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        $response = curl_exec($ch); //执行访问，返回结果</span></span>
<span class="line"><span>        if ($response === FALSE) {</span></span>
<span class="line"><span>            // echo &quot;cURL Error: &quot;.curl_error($ch);</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);</span></span>
<span class="line"><span>        $httpInfo = array_merge($httpInfo, curl_getinfo($ch));</span></span>
<span class="line"><span>        curl_close($ch);</span></span>
<span class="line"><span>        return $response;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="phone-html" tabindex="-1">phone.html <a class="header-anchor" href="#phone-html" aria-label="Permalink to &quot;phone.html&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;查询手机归属地接口&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;form&gt;</span></span>
<span class="line"><span>        &lt;table&gt;</span></span>
<span class="line"><span>            &lt;tr&gt;</span></span>
<span class="line"><span>                &lt;td&gt;查询手机归属地:&lt;/td&gt;</span></span>
<span class="line"><span>                &lt;td&gt;&lt;input type=&quot;text&quot; name=&quot;phone&quot; placeholder=&quot;请输入要查询的城市&quot; id=&quot;phone&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span>            &lt;/tr&gt;</span></span>
<span class="line"><span>            &lt;tr&gt;</span></span>
<span class="line"><span>                &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span>                &lt;td&gt;&lt;input type=&quot;button&quot; value=&quot;查询&quot; id=&quot;btn&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span>            &lt;/tr&gt;</span></span>
<span class="line"><span>        &lt;/table&gt;</span></span>
<span class="line"><span>    &lt;/form&gt;</span></span>
<span class="line"><span>    &lt;ul id=&quot;show&quot;&gt;&lt;/ul&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;js/jquery-3.5.1.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    $(&#39;#btn&#39;).click(function () {</span></span>
<span class="line"><span>            var phone = $(&#39;#phone&#39;).val();</span></span>
<span class="line"><span>            $.ajax({</span></span>
<span class="line"><span>                type: &#39;post&#39;,</span></span>
<span class="line"><span>                url: &#39;phone.php&#39;,</span></span>
<span class="line"><span>                data: {</span></span>
<span class="line"><span>                    &#39;phone&#39;: \`\${phone}\`,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                dataType: &#39;json&#39;,</span></span>
<span class="line"><span>                success: function (res) {</span></span>
<span class="line"><span>                    // 每次请求数据回调成功后都要把ul的显示数据清空</span></span>
<span class="line"><span>                    $(&#39;#show&#39;).html(&#39;&#39;);</span></span>
<span class="line"><span>                    if(res.code == 1){</span></span>
<span class="line"><span>                        var li = \`</span></span>
<span class="line"><span>                            &lt;li&gt;省份：\${res.data.province}&lt;/li&gt;</span></span>
<span class="line"><span>                            &lt;li&gt;城市：\${res.data.city}&lt;/li&gt;</span></span>
<span class="line"><span>                            &lt;li&gt;区号：\${res.data.areacode}&lt;/li&gt;</span></span>
<span class="line"><span>                            &lt;li&gt;邮编：\${res.data.zip}&lt;/li&gt;</span></span>
<span class="line"><span>                            &lt;li&gt;运营商：\${res.data.company}&lt;/li&gt;</span></span>
<span class="line"><span>                        \`;</span></span>
<span class="line"><span>                        $(&#39;#show&#39;).append(li);</span></span>
<span class="line"><span>                    }else{</span></span>
<span class="line"><span>                        var li = \`</span></span>
<span class="line"><span>                            &lt;li&gt;错误码：\${res.code}&lt;/li&gt;</span></span>
<span class="line"><span>                            &lt;li&gt;错误信息：\${res.msg}&lt;/li&gt;</span></span>
<span class="line"><span>                        \`;</span></span>
<span class="line"><span>                        $(&#39;#show&#39;).append(li);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h5 id="phone-php" tabindex="-1">phone.php <a class="header-anchor" href="#phone-php" aria-label="Permalink to &quot;phone.php&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用api</span></span>
<span class="line"><span>require_once(&#39;PhoneApi.php&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if ($_POST) {</span></span>
<span class="line"><span>    // 接收ajax的请求参数</span></span>
<span class="line"><span>    $phone = $_POST[&#39;phone&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 验证是否是手机号码，并且是否为11位</span></span>
<span class="line"><span>    if (strlen($phone) == &quot;11&quot;) {</span></span>
<span class="line"><span>        // 正则</span></span>
<span class="line"><span>        $reg = &quot;/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\\\\d{8}$/&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 是否是手机号</span></span>
<span class="line"><span>        if (!preg_match($reg, $phone)) {</span></span>
<span class="line"><span>            // 如果不是手机号码就返回以下信息</span></span>
<span class="line"><span>            $data = [</span></span>
<span class="line"><span>                &#39;msg&#39; =&gt; &#39;手机号码不正确&#39;,</span></span>
<span class="line"><span>                &#39;data&#39; =&gt; null,</span></span>
<span class="line"><span>                &#39;code&#39; =&gt; 0</span></span>
<span class="line"><span>            ];</span></span>
<span class="line"><span>            echo json_encode($data);</span></span>
<span class="line"><span>            exit;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        // 如果不是11位的就返回以下信息</span></span>
<span class="line"><span>        $data = [</span></span>
<span class="line"><span>            &#39;msg&#39; =&gt; &#39;请输入11位的手机号码&#39;,</span></span>
<span class="line"><span>            &#39;data&#39; =&gt; null,</span></span>
<span class="line"><span>            &#39;code&#39; =&gt; 0</span></span>
<span class="line"><span>        ];</span></span>
<span class="line"><span>        echo json_encode($data);</span></span>
<span class="line"><span>        exit;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 实例化该类</span></span>
<span class="line"><span>    $phoneApi = new \\PhoneApi\\PhoneApi($phone, &#39;a58be0b1bcdcf717426a74be95c5f63d&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取到返回的数据</span></span>
<span class="line"><span>    $result = $phoneApi-&gt;phone();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 把json数据转化数组数据</span></span>
<span class="line"><span>    $result = json_decode($result, true);</span></span>
<span class="line"><span>    // print_r($result);</span></span>
<span class="line"><span>    // exit;</span></span>
<span class="line"><span>    // 是否请求成功</span></span>
<span class="line"><span>    if ($result) {</span></span>
<span class="line"><span>        // 获取返回码</span></span>
<span class="line"><span>        $resultCode = $result[&#39;resultcode&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 获取错误码</span></span>
<span class="line"><span>        $errorCode = $result[&#39;error_code&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 获取请求信息</span></span>
<span class="line"><span>        $reason = $result[&#39;reason&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 如果返回码等于200时，说明请求成功</span></span>
<span class="line"><span>        if ($resultCode == 200) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 获取当天的天气信息</span></span>
<span class="line"><span>            $result = $result[&#39;result&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 封装数组</span></span>
<span class="line"><span>            $data = [</span></span>
<span class="line"><span>                &#39;province&#39; =&gt; $result[&#39;province&#39;],</span></span>
<span class="line"><span>                &#39;city&#39; =&gt; $result[&#39;city&#39;],</span></span>
<span class="line"><span>                &#39;areacode&#39; =&gt; $result[&#39;areacode&#39;],</span></span>
<span class="line"><span>                &#39;zip&#39; =&gt; $result[&#39;zip&#39;],</span></span>
<span class="line"><span>                &#39;company&#39; =&gt; $result[&#39;company&#39;],</span></span>
<span class="line"><span>            ];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 封装返回请求成功后的信息</span></span>
<span class="line"><span>            $res = [</span></span>
<span class="line"><span>                &#39;msg&#39; =&gt; $reason == &#39;Return Successd!&#39; ? &#39;查询成功&#39; : $reason,</span></span>
<span class="line"><span>                &#39;data&#39; =&gt; $data,</span></span>
<span class="line"><span>                &#39;code&#39; =&gt; 1</span></span>
<span class="line"><span>            ];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 返回json数据</span></span>
<span class="line"><span>            echo json_encode($res);</span></span>
<span class="line"><span>            exit;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 请求异常</span></span>
<span class="line"><span>            $res = [</span></span>
<span class="line"><span>                &#39;msg&#39; =&gt; $reason,</span></span>
<span class="line"><span>                &#39;data&#39; =&gt;  null,</span></span>
<span class="line"><span>                &#39;code&#39; =&gt; $errorCode</span></span>
<span class="line"><span>            ];</span></span>
<span class="line"><span>            echo json_encode($res);</span></span>
<span class="line"><span>            exit;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        // 可能网络异常等问题，无法正常获得相应内容，业务逻辑可自行修改</span></span>
<span class="line"><span>        $res = [</span></span>
<span class="line"><span>            &#39;msg&#39; =&gt; &#39;请求异常&#39;,</span></span>
<span class="line"><span>            &#39;data&#39; =&gt;  null,</span></span>
<span class="line"><span>            &#39;code&#39; =&gt;  404,</span></span>
<span class="line"><span>        ];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        echo json_encode($res);</span></span>
<span class="line"><span>        exit;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="实战演练" tabindex="-1">实战演练 <a class="header-anchor" href="#实战演练" aria-label="Permalink to &quot;实战演练&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>实战项目需求</span></span>
<span class="line"><span>1.数据库 使用company数据库</span></span>
<span class="line"><span>2.部门管理模块</span></span>
<span class="line"><span>    完成部门的增删改查</span></span>
<span class="line"><span>    完成部门的分页功能</span></span>
<span class="line"><span>3.职位管理模块</span></span>
<span class="line"><span>    完成职位模块的增删改查</span></span>
<span class="line"><span>    完成职位模块的分页功能</span></span>
<span class="line"><span>4.员工管理模块</span></span>
<span class="line"><span>    完成员工模块的增删改查</span></span>
<span class="line"><span>    完成员工模块的分页</span></span>
<span class="line"><span>    完成员工模块的头像的上传功能</span></span>
<span class="line"><span>5.使用admin后台模板</span></span></code></pre></div><h3 id="素材下载" tabindex="-1">素材下载 <a class="header-anchor" href="#素材下载" aria-label="Permalink to &quot;素材下载&quot;">​</a></h3><p><a href="http://web.wdwangke.com/mdwork/backend/phpuse/admin.zip" target="_blank" rel="noreferrer"><strong>后台模板文件</strong></a></p><p>图一，完成把json文件的数据渲染到列表里</p><p><img src="http://web.wdwangke.com/mdphoto/backend/backend/project/AdminList.png" alt="img"></p><p>图二，完成管理员的添加功能</p><p><img src="http://web.wdwangke.com/mdphoto/backend/backend/project/AdminAdd.png" alt="img"></p><p>图三，完成管理员的编辑功能</p><p><img src="http://web.wdwangke.com/mdphoto/backend/backend/project/AdminEdit.png" alt="img"></p>`,77),o=[t,i,c];function r(h,d,u,g,q,b){return e(),p("div",null,o)}const k=n(l,[["render",r]]);export{$ as __pageData,k as default};
