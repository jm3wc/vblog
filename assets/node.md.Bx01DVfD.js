import{_ as s,c as a,o as n,a2 as p}from"./chunks/framework.CSGcjqEA.js";const b=JSON.parse('{"title":"基本介绍","description":"","frontmatter":{},"headers":[],"relativePath":"node.md","filePath":"node.md"}'),e={name:"node.md"},l=p(`<h1 id="基本介绍" tabindex="-1">基本介绍 <a class="header-anchor" href="#基本介绍" aria-label="Permalink to &quot;基本介绍&quot;">​</a></h1><h2 id="什么是node" tabindex="-1">什么是Node? <a class="header-anchor" href="#什么是node" aria-label="Permalink to &quot;什么是Node?&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>node是一个基于Chrome V8引擎的javascript运行环境，是运行在服务器端的javascript</span></span>
<span class="line"><span>可以使用node搭建服务器，连接数据库。</span></span>
<span class="line"><span>Node.js使用了一个事件驱动、非阻塞I/O口，使其轻量且高效</span></span>
<span class="line"><span>Node的包管理工具npm,是全球最大的开源库生态系统</span></span></code></pre></div><h3 id="事件循环" tabindex="-1">事件循环 <a class="header-anchor" href="#事件循环" aria-label="Permalink to &quot;事件循环&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Node.js 是单进程单线程应用程序，但是因为 V8 引擎提供的异步执行回调接口，</span></span>
<span class="line"><span>通过这些接口可以处理大量的并发，所以性能非常高。</span></span>
<span class="line"><span>Node.js 几乎每一个 API 都是支持回调函数的。</span></span>
<span class="line"><span>Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。</span></span>
<span class="line"><span>Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，</span></span>
<span class="line"><span>每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.</span></span></code></pre></div><h2 id="环境安装" tabindex="-1">环境安装 <a class="header-anchor" href="#环境安装" aria-label="Permalink to &quot;环境安装&quot;">​</a></h2><h1 id="nvm" tabindex="-1">nvm <a class="header-anchor" href="#nvm" aria-label="Permalink to &quot;nvm&quot;">​</a></h1><h3 id="下载-全称-node-version-manager-也就是node版本控制" tabindex="-1">下载：全称 Node Version Manager ，也就是node版本控制； <a class="header-anchor" href="#下载-全称-node-version-manager-也就是node版本控制" aria-label="Permalink to &quot;下载：全称 Node Version Manager ，也就是node版本控制；&quot;">​</a></h3><blockquote><p>下载地址：<a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noreferrer">https://github.com/coreybutler/nvm-windows/releases</a> 注：下载文件名为 nvm-setup.zip 的链</p></blockquote><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><blockquote><p>解压nvm-setup.zip文件，以管理员的身份运行， 选择nvm的存放路径，以及nodejs的存放路径，这里切记不要选择到c:/program files 打开nvm文件夹下的settings.txt文件，在最后添加以下代码：</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>root:E:\\softeware\\nvm</span></span>
<span class="line"><span>path:E:\\softeware\\nodejs</span></span>
<span class="line"><span>arch: 64</span></span>
<span class="line"><span>proxy: none</span></span>
<span class="line"><span>node_mirror: http://npm.taobao.org/mirrors/node/</span></span>
<span class="line"><span>npm_mirror: https://npm.taobao.org/mirrors/npm/</span></span></code></pre></div><h3 id="配置环境" tabindex="-1">配置环境 <a class="header-anchor" href="#配置环境" aria-label="Permalink to &quot;配置环境&quot;">​</a></h3><blockquote><p>我的电脑-&gt;属性-&gt;高级系统设置-&gt;环境变量，在用户变量中添加环境变量：</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>NVM_HOME: E:\\softeware\\nvm</span></span>
<span class="line"><span>NVM_SYMLINK: E:\\softeware\\nodejs</span></span>
<span class="line"><span>path: %NVM_HOME%, %NVM_SYMLINK%</span></span></code></pre></div><h3 id="nvm的一些常用指令" tabindex="-1">nvm的一些常用指令 <a class="header-anchor" href="#nvm的一些常用指令" aria-label="Permalink to &quot;nvm的一些常用指令&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>nvm version // 查看nvm版本</span></span>
<span class="line"><span>nvm install 6.17.1 // 安装node6.17.1版本（附带安装npm）</span></span>
<span class="line"><span>nvm uninstall 6.17.1 // 卸载node6.17.1版本</span></span>
<span class="line"><span>nvm ls  // 列出所有node版本</span></span>
<span class="line"><span>nvm use 6.17.1 // 将node版本切换到6.17.1版本</span></span></code></pre></div><h3 id="开启多版本控制" tabindex="-1">开启多版本控制 <a class="header-anchor" href="#开启多版本控制" aria-label="Permalink to &quot;开启多版本控制&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>nvm on</span></span></code></pre></div><h3 id="nvm-use-报错-exit-status-1-乱码" tabindex="-1">nvm use 报错“exit status 1 乱码” <a class="header-anchor" href="#nvm-use-报错-exit-status-1-乱码" aria-label="Permalink to &quot;nvm use 报错“exit status 1 乱码”&quot;">​</a></h3><blockquote><p>1、安装路径有中文 2、安装路径有空格 3、CMD命令行窗口不是管理员权限打开 4、配置文件和实际安装路径不符</p></blockquote><h2 id="npm" tabindex="-1">npm <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;npm&quot;">​</a></h2><h3 id="npm介绍" tabindex="-1">npm介绍 <a class="header-anchor" href="#npm介绍" aria-label="Permalink to &quot;npm介绍&quot;">​</a></h3><blockquote><p>npm 最初它只是被称为 Node Package Manager，用来作为Node.js的包管理器。但是随着其它构建工具(webpack、browserify)的发展，npm已经变成了 &quot;the package manager for JavaScript&quot;，它用来安装、管理和分享JavaScript包，同时会自动处理多个包之间的依赖。</p></blockquote><h2 id="下载nodejs" tabindex="-1">下载nodejs <a class="header-anchor" href="#下载nodejs" aria-label="Permalink to &quot;下载nodejs&quot;">​</a></h2><blockquote><p>登陆官网 <a href="http://nodejs.org/" target="_blank" rel="noreferrer">http://nodejs.org/</a> ,便可以看到首页的“INSTALL”按钮，直接点击就会自动下载安装了。</p><p>安装完成后可以使用cmd（win+r然后输入cmd进入）测试下是否安装成功。能查看到版本号就成功了</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>node -v</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm -v</span></span></code></pre></div><blockquote><p>全局安装</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install express -g</span></span></code></pre></div><h2 id="更换-npm的镜像源" tabindex="-1">更换 npm的镜像源 <a class="header-anchor" href="#更换-npm的镜像源" aria-label="Permalink to &quot;更换 npm的镜像源&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm config set registry https://registry.npm.taobao.org</span></span></code></pre></div><h2 id="npm命令" tabindex="-1">npm命令 <a class="header-anchor" href="#npm命令" aria-label="Permalink to &quot;npm命令&quot;">​</a></h2><blockquote><p>1.安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install 包名（install 可以简写为 i）</span></span></code></pre></div><p>2.指定版本安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm i 包名@版本号 （2.22.2意思是:大版本.功能版本.Bug修复版本,前面的越高，后边的就为0了）</span></span></code></pre></div><p>3.快速创建 package.json文件(只用于英文目录）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm init -y</span></span></code></pre></div><p>4.安装指定依赖包</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install 包名</span></span></code></pre></div><p>5.卸载包</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm uninstall 包名</span></span></code></pre></div><p>6.npm查看版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>nmp -v</span></span></code></pre></div><p>7.将npm升级到最新版</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install -g npm</span></span></code></pre></div><p>8.npm更新到指定版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install -g npm@版本号</span></span></code></pre></div><p>9.npm 缓存路径查看命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm config get cache</span></span></code></pre></div><p>10.清除npm缓存 \`\`\` npm cache verify</p></blockquote><p>npm cache clean --force</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&gt;11.查看npm全局安装包的位置</span></span></code></pre></div><p>npm config ls \`\`\`</p><h2 id="代理cnpm" tabindex="-1">代理cnpm <a class="header-anchor" href="#代理cnpm" aria-label="Permalink to &quot;代理cnpm&quot;">​</a></h2><h3 id="cnpm介绍" tabindex="-1">cnpm介绍 <a class="header-anchor" href="#cnpm介绍" aria-label="Permalink to &quot;cnpm介绍&quot;">​</a></h3><blockquote><p>因为npm安装插件是从国外服务器下载，受网络的影响比较大，可能会出现异常，淘宝为我们搭建了一个国内的npm服务器，它目前是每隔10分钟将国外npm仓库的所有内容“搬运”回国内的服务器上，这样我们直接访问淘宝的国内服务器就可以了</p></blockquote><h3 id="安装-1" tabindex="-1">安装 <a class="header-anchor" href="#安装-1" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ npm install -g cnpm --registry=https://registry.npm.taobao.org</span></span>
<span class="line"><span>//安装完后查看版本</span></span>
<span class="line"><span>$ cnpm -v</span></span></code></pre></div><h3 id="配置环境变量" tabindex="-1">配置环境变量 <a class="header-anchor" href="#配置环境变量" aria-label="Permalink to &quot;配置环境变量&quot;">​</a></h3><blockquote><p>我的电脑-&gt;属性-&gt;高级系统设置-&gt;环境变量，在用户变量和系统变量的PATH：</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>path: D:\\nodejs\\node_global</span></span></code></pre></div><h3 id="查看" tabindex="-1">查看 <a class="header-anchor" href="#查看" aria-label="Permalink to &quot;查看&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cnpm -v</span></span></code></pre></div><h2 id="yarn" tabindex="-1">yarn <a class="header-anchor" href="#yarn" aria-label="Permalink to &quot;yarn&quot;">​</a></h2><h2 id="yarn介绍" tabindex="-1">yarn介绍 <a class="header-anchor" href="#yarn介绍" aria-label="Permalink to &quot;yarn介绍&quot;">​</a></h2><blockquote><p>yarn 就是一个类似于 npm 的包管理工具，它是由 facebook 推出并开源。 与 npm 相比，yarn 有着众多的优势，主要的优势在于：速度快、离线模式、版本控制。</p></blockquote><h2 id="安装并查看版本" tabindex="-1">安装并查看版本 <a class="header-anchor" href="#安装并查看版本" aria-label="Permalink to &quot;安装并查看版本&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install -g yarn</span></span>
<span class="line"><span>yarn --version</span></span></code></pre></div><h2 id="yarn常用命令" tabindex="-1">yarn常用命令 <a class="header-anchor" href="#yarn常用命令" aria-label="Permalink to &quot;yarn常用命令&quot;">​</a></h2><blockquote><p>1.安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yarn install</span></span></code></pre></div><p>2.安装指定依赖包</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> yarn add  包名</span></span></code></pre></div><p>3.卸载包</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yarn remove  包名</span></span></code></pre></div><p>4.查看版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yarn -v</span></span></code></pre></div><p>5.快速创建 package.json文件(只用于英文目录）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yarn init -y</span></span></code></pre></div><p>6.查看yarn全局缓存目录</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yarn cache dir</span></span></code></pre></div><p>7.清除yarn缓存</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yarn cache clean</span></span></code></pre></div></blockquote><h2 id="fs模块" tabindex="-1">fs模块 <a class="header-anchor" href="#fs模块" aria-label="Permalink to &quot;fs模块&quot;">​</a></h2><blockquote><p>fs模块用于对系统文件及目录进行读写操作。</p></blockquote><h2 id="一、同步和异步" tabindex="-1">一、同步和异步 <a class="header-anchor" href="#一、同步和异步" aria-label="Permalink to &quot;一、同步和异步&quot;">​</a></h2><blockquote><p>1、异步方法中回调函数的第一个参数总是留给异常参数（exception），如果方法成功完成，该参数为null或undefined。fs.readFile()</p><p>2、同步方法执行完并返回结果后，才能执行后续的代码。而异步方法采用回调函数接收返回结果，可以立即执行后续代码。fs.readFileSync()</p></blockquote><h2 id="二、readfile读取文件" tabindex="-1">二、readFile读取文件 <a class="header-anchor" href="#二、readfile读取文件" aria-label="Permalink to &quot;二、readFile读取文件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span>//异步</span></span>
<span class="line"><span>fs.readFile(&#39;demo.txt&#39;, &#39;utf8&#39;, function(err,data){</span></span>
<span class="line"><span>    console.log(&quot;异步&quot; + data);</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// 同步</span></span>
<span class="line"><span>var data = fs.readFileSync(&#39;test.txt&#39;, &#39;utf8&#39;)</span></span>
<span class="line"><span>console.log(&quot;同步&quot; +data)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 执行结果</span></span>
<span class="line"><span>同步星期二 阴雨连绵</span></span>
<span class="line"><span>异步星期一 天气晴朗</span></span></code></pre></div><h2 id="三、writefile写入文件" tabindex="-1">三、WriteFile写入文件 <a class="header-anchor" href="#三、writefile写入文件" aria-label="Permalink to &quot;三、WriteFile写入文件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>使用fs.writeFile(filename,data,[options],callback)写入内容到文件。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file |  文件名或文件描述符。</span></span>
<span class="line"><span>data |  要写入的数据</span></span>
<span class="line"><span>options |</span></span>
<span class="line"><span>    encoding | 默认值: &#39;utf8&#39;。</span></span>
<span class="line"><span>    mode 默认值: 0o666。</span></span>
<span class="line"><span>    flag 参见文件系统 flag 的支持。 默认值: &#39;w&#39;。r代表读取文件，w代表写文件，a代表追加。</span></span>
<span class="line"><span>callback 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回</span></span>
<span class="line"><span>var fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 异步</span></span>
<span class="line"><span>fs.writeFile(&#39;demo.txt&#39;, &#39;abcd&#39;,{&#39;flag&#39;: &#39;a&#39;}, function(err) {</span></span>
<span class="line"><span>    if (err) {</span></span>
<span class="line"><span>        throw err;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    console.log(&#39;Saved.&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 写入成功后读取测试</span></span>
<span class="line"><span>    fs.readFile(&#39;demo.txt&#39;, &#39;utf-8&#39;, function(err, data) {</span></span>
<span class="line"><span>        if (err) {</span></span>
<span class="line"><span>            throw err;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        console.log(data);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 同步</span></span>
<span class="line"><span>var res = fs.writeFileSync(&#39;test.txt&#39;, &#39;00000&#39;, { &#39;flag&#39;: &#39;a&#39; });</span></span>
<span class="line"><span>console.log(res + &#39;---&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var data = fs.readFileSync(&#39;test.txt&#39;, &#39;utf-8&#39;);</span></span>
<span class="line"><span>console.log(data);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 执行结果</span></span>
<span class="line"><span>undefined---</span></span>
<span class="line"><span>星期二 阴雨连绵0000000000</span></span>
<span class="line"><span>Saved.</span></span>
<span class="line"><span>1234567abcdabcdabcd</span></span></code></pre></div><h2 id="四、fs-open、read、fs-write读写文件" tabindex="-1">四、fs.open、read、fs.write读写文件 <a class="header-anchor" href="#四、fs-open、read、fs-write读写文件" aria-label="Permalink to &quot;四、fs.open、read、fs.write读写文件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1、fs.open(path,flags,[mode],callback)方法用于打开文件，以便fs.read()读取。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>path 文件路径</span></span>
<span class="line"><span>flags打开文件的方式</span></span>
<span class="line"><span>[mode] 是文件的权限（可行参数，默认值是0666）</span></span>
<span class="line"><span>callback 回调函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>flags值及说明如下</span></span>
<span class="line"><span></span></span>
<span class="line"><span>r ：读取文件，文件不存在时报错；</span></span>
<span class="line"><span>r+ ：读取并写入文件，文件不存在时报错；</span></span>
<span class="line"><span>rs ：以同步方式读取文件，文件不存在时报错；</span></span>
<span class="line"><span>rs+ ：以同步方式读取并写入文件，文件不存在时报错；</span></span>
<span class="line"><span>w ：写入文件，文件不存在则创建，存在则清空；</span></span>
<span class="line"><span>wx ：和w一样，但是文件存在时会报错；</span></span>
<span class="line"><span>w+ ：读取并写入文件，文件不存在则创建，存在则清空；</span></span>
<span class="line"><span>wx+ ：和w+一样，但是文件存在时会报错；</span></span>
<span class="line"><span>a ：以追加方式写入文件，文件不存在则创建；</span></span>
<span class="line"><span>ax ：和a一样，但是文件存在时会报错；</span></span>
<span class="line"><span>a+ ：读取并追加写入文件，文件不存在则创建；</span></span>
<span class="line"><span>ax+ ：和a+一样，但是文件存在时会报错。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、fs.close(fd,[callback])</span></span>
<span class="line"><span>用于关闭文件，fd是所打开文件的文件描述符</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fs.read(fd,buffer,offset,length,position,callback)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3、fd 文件描述符，必须接收fs.open()方法中的回调函数返回的第二个参数。</span></span>
<span class="line"><span>buffer 是存放读取到的数据的Buffer对象。</span></span>
<span class="line"><span>offset 指定 向buffer中存放数据的起始位置。</span></span>
<span class="line"><span>length 指定 读取文件中数据的字节数。</span></span>
<span class="line"><span>position 指定 在文件中读取文件内容的起始位置。</span></span>
<span class="line"><span>callback 回调函数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4、fs.writeFile(filename, data[, options], callback)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>path - 文件路径</span></span>
<span class="line"><span>data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(流) 对象</span></span>
<span class="line"><span>options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8,</span></span>
<span class="line"><span> 模式为 0666 ， flag 为 &#39;w&#39;</span></span>
<span class="line"><span>callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。</span></span>
<span class="line"><span>var fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fs.open(&#39;demo.txt&#39;, \`w\`, function(err, fd) {</span></span>
<span class="line"><span>    if (err) {</span></span>
<span class="line"><span>        throw err;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    console.log(&#39;open file success.&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const buffer = Buffer.from(JSON.stringify(&quot;shiyanlou&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 写入文件</span></span>
<span class="line"><span>    fs.write(fd, buffer, 0, 6, 0, function(err, bytesWritten, buffer) {</span></span>
<span class="line"><span>        if (err) {</span></span>
<span class="line"><span>            throw err;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        console.log(&#39;write success.&#39;);</span></span>
<span class="line"><span>        // 打印出buffer中存入的数据</span></span>
<span class="line"><span>        console.log(bytesWritten, buffer.slice(0, bytesWritten).toString());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 关闭文件</span></span>
<span class="line"><span>        fs.close(fd);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 执行结果</span></span>
<span class="line"><span>open file success.</span></span>
<span class="line"><span>write success.</span></span>
<span class="line"><span>6 &#39;&quot;shiya&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fs.open(&#39;test.txt&#39;, &#39;r&#39;, function(err, fd) {</span></span>
<span class="line"><span>    if (err) {</span></span>
<span class="line"><span>        throw err;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    console.log(&#39;open file success.&#39;);</span></span>
<span class="line"><span>    // var buffer = new Buffer(255);</span></span>
<span class="line"><span>    const buffer = Buffer(255);</span></span>
<span class="line"><span>    // 读取文件</span></span>
<span class="line"><span>    fs.read(fd, buffer, 0, 10, 0, function(err, bytesRead, buffer) {</span></span>
<span class="line"><span>        if (err) {</span></span>
<span class="line"><span>            throw err;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 打印出buffer中存入的数据</span></span>
<span class="line"><span>        console.log(bytesRead, buffer.slice(0, bytesRead).toString());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 关闭文件</span></span>
<span class="line"><span>        fs.close(fd);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 执行结果</span></span>
<span class="line"><span>open file success.</span></span>
<span class="line"><span>10 &#39;星期二 &#39;</span></span></code></pre></div><h2 id="五、目录操作" tabindex="-1">五、目录操作 <a class="header-anchor" href="#五、目录操作" aria-label="Permalink to &quot;五、目录操作&quot;">​</a></h2><blockquote><p>1、创建目录</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>使用fs.mkdir(path,[mode],callback)创建目录，</span></span>
<span class="line"><span>path是需要创建的目录，[mode]是目录的权限（默认是0777），callback是回调函数。</span></span>
<span class="line"><span>var fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span>fs.mkdir(&#39;./newtest&#39;, function(err) {</span></span>
<span class="line"><span>    if (err) {</span></span>
<span class="line"><span>        throw err;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    console.log(&#39;make dir success.&#39;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><blockquote><p>2、读取目录</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>使用fs.readdir(path,callback)读取文件目录</span></span>
<span class="line"><span>var fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span>fs.readdir(&#39;./newtest&#39;, function(err, files) {</span></span>
<span class="line"><span>    if (err) {</span></span>
<span class="line"><span>        throw err;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // files是一个数组</span></span>
<span class="line"><span>    // 每个元素是此目录下的文件或文件夹的名称</span></span>
<span class="line"><span>    console.log(files);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>运行结果：</span></span>
<span class="line"><span>[ &#39;demo&#39; ]</span></span></code></pre></div><h2 id="六、读取文件详细信息" tabindex="-1">六、读取文件详细信息 <a class="header-anchor" href="#六、读取文件详细信息" aria-label="Permalink to &quot;六、读取文件详细信息&quot;">​</a></h2><blockquote><p>fs.stat(path,callback)，path表示文件路径； callback是指回调函数，有两个参数：(err,stats)，其中stats是fs.stat的实例;</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>实例常用方法</span></span>
<span class="line"><span>1.stats.isFile(): 如果是文件则返回true,否则返回false;</span></span>
<span class="line"><span>2.stats.isDirectiory(): 如果是目录则返回true,否则返回false;</span></span>
<span class="line"><span>3.stats.isBlockDevice(): 如果是块设备则返回true，否则返回false;</span></span>
<span class="line"><span>4.stats.isCharacterDevice(): 如果是字符设备返回true,否则返回false;</span></span>
<span class="line"><span>5.stats.isSymbolicLink(): 如果是软链接返回true,否则返回false;</span></span>
<span class="line"><span>6.stats.isFIFO(): 如果是FIFO,则返回true,否则返回false.FIFO是UNIX中的一种特殊类型的命令管道；</span></span>
<span class="line"><span>7.stats.isSocket(): 如果是Socket则返回true,否则返回false;</span></span>
<span class="line"><span>8.stats.size(): 文件的大小（以字节为单位）。</span></span>
<span class="line"><span>var fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let mkdir = &#39;demo.txt&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fs.open(mkdir, &#39;r&#39;, (err, fd) =&gt; {</span></span>
<span class="line"><span>  if (err) {</span></span>
<span class="line"><span>    console.log(\`open \${mkdir} file failed~\`);</span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  fs.fstat(fd, (err, stats) =&gt; {</span></span>
<span class="line"><span>    if (err) {</span></span>
<span class="line"><span>      console.log(\`fstat \${mkdir} file failed~\`);</span></span>
<span class="line"><span>      return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    console.log(JSON.stringify(stats));</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>})</span></span></code></pre></div><blockquote><p>结果如下</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;dev&quot;:2399061417,</span></span>
<span class="line"><span>&quot;mode&quot;:33206,</span></span>
<span class="line"><span>&quot;nlink&quot;:1,</span></span>
<span class="line"><span>&quot;uid&quot;:0,</span></span>
<span class="line"><span>&quot;gid&quot;:0,</span></span>
<span class="line"><span>&quot;rdev&quot;:0,</span></span>
<span class="line"><span>&quot;ino&quot;:4503599627574561,</span></span>
<span class="line"><span>&quot;size&quot;:6,</span></span>
<span class="line"><span>&quot;atime&quot;:&quot;2022-07-07T12:54:09.188Z&quot;,</span></span>
<span class="line"><span>&quot;mtime&quot;:&quot;2022-07-07T12:54:09.188Z&quot;,</span></span>
<span class="line"><span>&quot;ctime&quot;:&quot;2022-07-07T12:54:09.188Z&quot;,</span></span>
<span class="line"><span>&quot;birthtime&quot;:&quot;2022-07-06T07:38:09.578Z&quot;</span></span></code></pre></div><h2 id="http模块" tabindex="-1">http模块 <a class="header-anchor" href="#http模块" aria-label="Permalink to &quot;http模块&quot;">​</a></h2><h4 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Node中提供了http模块，其中封装了高效的http服务器和http客户端</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http.Server是一个基于事件的http服务器，内部是由c++实现的，接口是由JavaScript封装</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http.request是一个http客户端工具。 用户向服务器发送数据。</span></span></code></pre></div><h4 id="http-server事件" tabindex="-1">http.server事件 <a class="header-anchor" href="#http-server事件" aria-label="Permalink to &quot;http.server事件&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>request:当客户端请求到来的时候，该时间被触发，提供两个参数request 和 response，分别是http.ServerRequest </span></span>
<span class="line"><span>和 http.ServerResponse 表示请求和响应的信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>connection:当TCP建立链接的时候，该时间被处罚，提供了一个参数 socket ，为net.socket的实例(底层协议对象)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>close:当服务器关闭的时候会被触发</span></span></code></pre></div><h4 id="案例" tabindex="-1">案例 <a class="header-anchor" href="#案例" aria-label="Permalink to &quot;案例&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const http = require(&quot;http&quot;);</span></span>
<span class="line"><span>const server = http.createServer();</span></span>
<span class="line"><span>server.on(&quot;request&quot;, (req, res) =&gt; {</span></span>
<span class="line"><span>    res.setHeader(&quot;Content-Type&quot;, &quot;text/html;charset=utf-8&quot;);</span></span>
<span class="line"><span>    let content = &quot;&quot;;</span></span>
<span class="line"><span>    if (req.url == &quot;/&quot; || req.url == &quot;/index.html&quot;) {</span></span>
<span class="line"><span>        content = &quot;&lt;h1&gt;首页内容&lt;/h1&gt;&quot;;</span></span>
<span class="line"><span>    } else if (req.url == &quot;/detail.html&quot;) {</span></span>
<span class="line"><span>        content = &quot;&lt;h1&gt;详情页内容&lt;/h1&gt;&quot;;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        content = &quot;&lt;h1&gt;你访问的页面不存在&lt;/h1&gt;&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    res.end(content);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>server.listen(8080, () =&gt; {</span></span>
<span class="line"><span>    console.log(&quot;server is listen:127.0.0.1或者localhost&quot;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="path模块" tabindex="-1">path模块 <a class="header-anchor" href="#path模块" aria-label="Permalink to &quot;path模块&quot;">​</a></h2><h4 id="介绍-1" tabindex="-1">介绍 <a class="header-anchor" href="#介绍-1" aria-label="Permalink to &quot;介绍&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> path 模块是 Node.js 官方提供的、用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求。</span></span></code></pre></div><h4 id="dirname和filename" tabindex="-1"><strong>dirname和</strong>filename <a class="header-anchor" href="#dirname和filename" aria-label="Permalink to &quot;**dirname和**filename&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/* </span></span>
<span class="line"><span>__dirname 获取当前文件所属目录的绝对路径</span></span>
<span class="line"><span>__filename 获取当前文件的绝对路 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(__dirname)</span></span>
<span class="line"><span>//结果形式如  E:\\phpstudy_pro\\WWW\\2216\\node</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span>let str = path.dirname(&#39;/foo/bar/baz/asdf/quux&#39;)  </span></span>
<span class="line"><span>console.log(str) </span></span>
<span class="line"><span>// /foo/bar/baz/asdf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(__filename)</span></span>
<span class="line"><span>//结果形式如  E:\\phpstudy_pro\\WWW\\2216\\node\\path.js</span></span></code></pre></div><h4 id="path-join-paths-多参数路径拼接" tabindex="-1">path.join([...paths]) 多参数路径拼接 <a class="header-anchor" href="#path-join-paths-多参数路径拼接" aria-label="Permalink to &quot;path.join([...paths]) 多参数路径拼接&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span>let str = path.join(__dirname,&quot;..&quot;,&quot;src&quot;) </span></span>
<span class="line"><span>console.log(str)</span></span>
<span class="line"><span>//结果形式如 E:\\phpstudy_pro\\WWW\\2216\\src</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str = path.join(&#39;/demo&#39;,&#39;./test/index.js&#39;)  </span></span>
<span class="line"><span>console.log(str)</span></span>
<span class="line"><span>//结果形式如： \\demo\\test\\index.js</span></span></code></pre></div><h4 id="path-resolve-paths-相对路径转绝对路径" tabindex="-1">path.resolve([...paths]) 相对路径转绝对路径 <a class="header-anchor" href="#path-resolve-paths-相对路径转绝对路径" aria-label="Permalink to &quot;path.resolve([...paths]) 相对路径转绝对路径&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str = path.resolve(__dirname,&quot;../&quot;) </span></span>
<span class="line"><span>//  E:\\phpstudy_pro\\WWW\\2216</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str = path.resolve(&#39;/bbb/aaa&#39;,&#39;./test/index.js&#39;)</span></span>
<span class="line"><span>// E:\\bbb\\aaa\\test\\index.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str = path.resolve(&#39;/bbb/aaa&#39;,&#39;test/index.js&#39;) </span></span>
<span class="line"><span>// E:\\bbb\\aaa\\test\\index.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str =path.resolve(&#39;/bbb/aaa&#39;,&#39;..&#39;,&#39;/test/index.js&#39;)</span></span>
<span class="line"><span>// E:\\test\\index.js</span></span></code></pre></div><h4 id="path-extname-path-返回文件的扩展名" tabindex="-1">path.extname(path) 返回文件的扩展名 <a class="header-anchor" href="#path-extname-path-返回文件的扩展名" aria-label="Permalink to &quot;path.extname(path) 返回文件的扩展名&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str = path.extname(&#39;/foo/bar/baz/asdf/index.html&#39;); </span></span>
<span class="line"><span>// .html</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str =path.extname(&#39;/foo/bar/baz/asdf/index.&#39;); </span></span>
<span class="line"><span>//  &#39;.&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str =path.extname(&#39;/foo/bar/baz/asdf/index.&#39;); </span></span>
<span class="line"><span>//  &#39; &#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str =path.extname(&#39;.index&#39;);</span></span>
<span class="line"><span>// &#39; &#39;</span></span></code></pre></div><h4 id="path-basename-path-ext-返回path的最后一部分-如果加了扩展名-区分大小写-则是剔除掉扩展名的部分" tabindex="-1">path.basename(path[,ext]) 返回path的最后一部分，如果加了扩展名（区分大小写）则是剔除掉扩展名的部分 <a class="header-anchor" href="#path-basename-path-ext-返回path的最后一部分-如果加了扩展名-区分大小写-则是剔除掉扩展名的部分" aria-label="Permalink to &quot;path.basename(path[,ext]) 返回path的最后一部分，如果加了扩展名（区分大小写）则是剔除掉扩展名的部分&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str = path.basename(&#39;/foo/bar/baz/asdf/index.html&#39;);</span></span>
<span class="line"><span>// index.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str =path.basename(&#39;/foo/bar/baz/asdf/index.html&#39;,&#39;.html&#39;); </span></span>
<span class="line"><span>// index</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str = path.basename(&#39;/foo/bar/baz/asdf/index.HTML&#39;,&#39;.html&#39;);</span></span>
<span class="line"><span>// index.HTML</span></span></code></pre></div><h4 id="path-isabsolute-path-判断路径是否是绝对路径" tabindex="-1">path.isAbsolute(path) 判断路径是否是绝对路径 <a class="header-anchor" href="#path-isabsolute-path-判断路径是否是绝对路径" aria-label="Permalink to &quot;path.isAbsolute(path) 判断路径是否是绝对路径&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str = path.isAbsolute(&quot;.&quot;) </span></span>
<span class="line"><span>// false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str = path.isAbsolute(&quot;/&quot;)  </span></span>
<span class="line"><span>// true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str = path.isAbsolute(&quot;./foo/baz&quot;)  </span></span>
<span class="line"><span>// false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str = path.isAbsolute(&quot;/foo/baz&quot;)  </span></span>
<span class="line"><span>// true</span></span></code></pre></div><h2 id="url模块" tabindex="-1">url模块 <a class="header-anchor" href="#url模块" aria-label="Permalink to &quot;url模块&quot;">​</a></h2><h4 id="介绍-2" tabindex="-1">介绍 <a class="header-anchor" href="#介绍-2" aria-label="Permalink to &quot;介绍&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>URL模块是用于处理和解析URL的</span></span></code></pre></div><h4 id="url-url方法" tabindex="-1">url.URL方法 <a class="header-anchor" href="#url-url方法" aria-label="Permalink to &quot;url.URL方法&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var url = require(&#39;url&#39;);</span></span>
<span class="line"><span>var testUrl1 = &#39;http://www.book.com/mdbook/frontend/nodejs/introduction/coremodule1/global.html&#39;</span></span>
<span class="line"><span>const myURL = new url.URL(&#39;test&#39;, testUrl1);</span></span>
<span class="line"><span>console.log(myURL);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>结果如下：</span></span>
<span class="line"><span>URL {</span></span>
<span class="line"><span>  href: &#39;http://www.book.com/mdbook/frontend/nodejs/introduction/coremodule1/test&#39;,</span></span>
<span class="line"><span>  origin: &#39;http://www.book.com&#39;,</span></span>
<span class="line"><span>  protocol: &#39;http:&#39;,</span></span>
<span class="line"><span>  username: &#39;&#39;,</span></span>
<span class="line"><span>  password: &#39;&#39;,</span></span>
<span class="line"><span>  host: &#39;www.book.com&#39;,</span></span>
<span class="line"><span>  hostname: &#39;www.book.com&#39;,</span></span>
<span class="line"><span>  port: &#39;&#39;,</span></span>
<span class="line"><span>  pathname: &#39;/mdbook/frontend/nodejs/introduction/coremodule1/test&#39;,</span></span>
<span class="line"><span>  search: &#39;&#39;,</span></span>
<span class="line"><span>  searchParams: URLSearchParams {},</span></span>
<span class="line"><span>  hash: &#39;&#39; }</span></span>
<span class="line"><span>*/</span></span></code></pre></div><h4 id="new-urlsearchparams-obj" tabindex="-1">new URLSearchParams(obj) <a class="header-anchor" href="#new-urlsearchparams-obj" aria-label="Permalink to &quot;new URLSearchParams(obj)&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//  使用查询哈希映射实例化新的 URLSearchParams 对象。 obj 的每个属性的键和值总是被强制转换为字符串。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let params;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>params = new URLSearchParams(&#39;user=abc&amp;query=xyz&#39;);</span></span>
<span class="line"><span>console.log(params.get(&#39;user&#39;));</span></span>
<span class="line"><span>// 打印 &#39;abc&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(params.toString());</span></span>
<span class="line"><span>// 打印 &#39;user=abc&amp;query=xyz&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>params = new URLSearchParams(&#39;?user=abc&amp;query=xyz&#39;);</span></span>
<span class="line"><span>console.log(params.toString());</span></span>
<span class="line"><span>// 打印 &#39;user=abc&amp;query=xyz&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用数组</span></span>
<span class="line"><span>params = new URLSearchParams([</span></span>
<span class="line"><span>  [&#39;user&#39;, &#39;abc&#39;],</span></span>
<span class="line"><span>  [&#39;query&#39;, &#39;first&#39;],</span></span>
<span class="line"><span>  [&#39;query&#39;, &#39;second&#39;],</span></span>
<span class="line"><span>]);</span></span>
<span class="line"><span>console.log(params.toString());</span></span>
<span class="line"><span>// 打印 &#39;user=abc&amp;query=first&amp;query=second&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用 Map 对象</span></span>
<span class="line"><span>const map = new Map();</span></span>
<span class="line"><span>map.set(&#39;user&#39;, &#39;abc&#39;);</span></span>
<span class="line"><span>map.set(&#39;query&#39;, &#39;xyz&#39;);</span></span>
<span class="line"><span>params = new URLSearchParams(map);</span></span>
<span class="line"><span>console.log(params.toString());</span></span>
<span class="line"><span>// 打印 &#39;user=abc&amp;query=xyz&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用生成器函数</span></span>
<span class="line"><span>function* getQueryPairs() {</span></span>
<span class="line"><span>  yield [&#39;user&#39;, &#39;abc&#39;];</span></span>
<span class="line"><span>  yield [&#39;query&#39;, &#39;first&#39;];</span></span>
<span class="line"><span>  yield [&#39;query&#39;, &#39;second&#39;];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>params = new URLSearchParams(getQueryPairs());</span></span>
<span class="line"><span>console.log(params.toString());</span></span>
<span class="line"><span>// 打印 &#39;user=abc&amp;query=first&amp;query=second&#39;</span></span></code></pre></div><h2 id="global全局对象" tabindex="-1">global全局对象 <a class="header-anchor" href="#global全局对象" aria-label="Permalink to &quot;global全局对象&quot;">​</a></h2><h4 id="介绍-3" tabindex="-1">介绍 <a class="header-anchor" href="#介绍-3" aria-label="Permalink to &quot;介绍&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>global：表示Node所在的全局环境，类似于浏览器的window对象。</span></span></code></pre></div><h4 id="案例-1" tabindex="-1">案例 <a class="header-anchor" href="#案例-1" aria-label="Permalink to &quot;案例&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>    __filename </span></span>
<span class="line"><span>    双下划线filename表示当前正在执行的脚本的文件名，它将输出文件所在位置的绝对路径</span></span>
<span class="line"><span>*/ </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 输出全局变量 __filename 的值</span></span>
<span class="line"><span>console.log(__filename);</span></span>
<span class="line"><span>//结果: E:\\phpstudy_pro\\WWW\\2216\\node\\path.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>  __dirname</span></span>
<span class="line"><span>  双下划线dirname表示当前执行脚本所在的目录</span></span>
<span class="line"><span>*/ </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 输出全局变量 __dirname 的值</span></span>
<span class="line"><span>console.log(__dirname);</span></span>
<span class="line"><span>//结果: E:\\phpstudy_pro\\WWW\\2216\\node</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>    setTimeout()只执行一次指定函数，返回一个代表定时器的句柄值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>function printHello(){</span></span>
<span class="line"><span>    console.log(&#39;Hello World!&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//2秒后执行printHello函数</span></span>
<span class="line"><span>setTimeout(printHello, 2000);</span></span>
<span class="line"><span>// 结果： Hello World!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function printHello(){</span></span>
<span class="line"><span>    console.log(&#39;Hello World!&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//2秒后执行printHello函数</span></span>
<span class="line"><span>var T = setInterval(printHello, 2000);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//清除定时器</span></span>
<span class="line"><span>clearTimeout(T);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>    结果如下:</span></span>
<span class="line"><span>        Hello World!</span></span>
<span class="line"><span>        Hello World!</span></span>
<span class="line"><span>        Hello World!</span></span>
<span class="line"><span>*/</span></span></code></pre></div><h2 id="buffers数据类型" tabindex="-1">Buffers数据类型 <a class="header-anchor" href="#buffers数据类型" aria-label="Permalink to &quot;Buffers数据类型&quot;">​</a></h2><h4 id="介绍-4" tabindex="-1">介绍 <a class="header-anchor" href="#介绍-4" aria-label="Permalink to &quot;介绍&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Buffer对象是Node处理二进制数据(eg:TCP数据流)的一个接口。</span></span>
<span class="line"><span>Buffer对象是一个构造函数，生成的实例代表了V8引擎分配的一段内存，是一个类似数组的对象，</span></span>
<span class="line"><span>成员都为0到255的整数值，即一个8位的字节。</span></span>
<span class="line"><span>Buffer类的实例（即对象）类似于整数数组，实例对应于固定大小的原始内存分配，</span></span>
<span class="line"><span>其大小在创建时被确定且无法更改。</span></span></code></pre></div><h4 id="创建buffer" tabindex="-1">创建Buffer <a class="header-anchor" href="#创建buffer" aria-label="Permalink to &quot;创建Buffer&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1、利用字符串创建buffer：Buffer.from</span></span>
<span class="line"><span>const { Buffer } = require(&#39;node:buffer&#39;);</span></span>
<span class="line"><span>var str = &quot;Hello world&quot;</span></span>
<span class="line"><span>// 将一个字符串保存到buffer中,并返回</span></span>
<span class="line"><span>var buf = Buffer.from(str)</span></span>
<span class="line"><span>console.log(buf)</span></span>
<span class="line"><span>// 结果： &lt;Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、Buffer.alloc()</span></span>
<span class="line"><span>.alloc() 方法在您想要创建空缓冲区时很有用，不需要初始化数据填充。默认情况下，</span></span>
<span class="line"><span>它接受一个数字并返回一个给定大小并且填充了 0 的缓冲区。第二个参数：用于预填充新 Buffer 的值</span></span>
<span class="line"><span>const { Buffer } = require(&#39;node:buffer&#39;);</span></span>
<span class="line"><span>const buff = Buffer.alloc(1, &#39;abcd&#39;);</span></span>
<span class="line"><span>console.log(buff.toString(&#39;utf-8&#39;)); </span></span>
<span class="line"><span>// 结果: a</span></span></code></pre></div><h4 id="写入buffer" tabindex="-1">写入Buffer <a class="header-anchor" href="#写入buffer" aria-label="Permalink to &quot;写入Buffer&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const { Buffer } = require(&#39;node:buffer&#39;);</span></span>
<span class="line"><span>const buff = Buffer.alloc(9);</span></span>
<span class="line"><span>buff.write(&quot;hey there&quot;); // 返回 9（写入的字节数）</span></span>
<span class="line"><span>console.log(buff.toString());</span></span>
<span class="line"><span>//结果: hey there</span></span>
<span class="line"><span>// 如果写入的字节数超过缓冲区支持的字节数，</span></span>
<span class="line"><span>// 您的数据将被截断以适合缓冲区。</span></span>
<span class="line"><span>buff.write(&quot;hey christopher&quot;); // 返回 9（写入的字节数）</span></span>
<span class="line"><span>console.log(buff.toString());</span></span>
<span class="line"><span>// 结果: &#39;hey chris&#39;</span></span></code></pre></div><h4 id="buf-tojson-转换为-json-对象" tabindex="-1">buf.toJSON() 转换为 JSON 对象 <a class="header-anchor" href="#buf-tojson-转换为-json-对象" aria-label="Permalink to &quot;buf.toJSON() 转换为 JSON 对象&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const { Buffer } = require(&#39;node:buffer&#39;);</span></span>
<span class="line"><span>var buf3 = Buffer.from(&#39;test&#39;);</span></span>
<span class="line"><span>var json = JSON.stringify(buf3);</span></span>
<span class="line"><span>console.log(json);</span></span>
<span class="line"><span>//  结果: {&quot;type&quot;:&quot;Buffer&quot;,&quot;data&quot;:[116,101,115,116]}</span></span></code></pre></div><h4 id="buffer-concat-合并-将所有-buffer-实例连接在一起的结果" tabindex="-1">Buffer.concat()合并，将所有 Buffer 实例连接在一起的结果 <a class="header-anchor" href="#buffer-concat-合并-将所有-buffer-实例连接在一起的结果" aria-label="Permalink to &quot;Buffer.concat()合并，将所有 Buffer 实例连接在一起的结果&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const { Buffer } = require(&#39;node:buffer&#39;);</span></span>
<span class="line"><span>var i1 =  Buffer.from(&#39;Hello&#39;);</span></span>
<span class="line"><span>var i2 =  Buffer.from(&#39; &#39;);</span></span>
<span class="line"><span>var i3 =  Buffer.from(&#39;World&#39;);</span></span>
<span class="line"><span>console.log(Buffer.concat([i1, i2, i3], 10).toString());</span></span>
<span class="line"><span>//结果: Hello Worl</span></span></code></pre></div><h2 id="process" tabindex="-1">process <a class="header-anchor" href="#process" aria-label="Permalink to &quot;process&quot;">​</a></h2><h4 id="介绍-5" tabindex="-1">介绍 <a class="header-anchor" href="#介绍-5" aria-label="Permalink to &quot;介绍&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>process 对象是一个全局变量，提供了有关当前 Node.js 进程的信息并对其进行控制。</span></span></code></pre></div><h4 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能&quot;">​</a></h4><blockquote><p>1、&#39;beforeExit&#39; 事件；当 Node.js 的事件循环数组已经为空，并且没有额外的工作被添加进来，事件 &#39;beforeExit&#39; 会被触发。</p><p>2、&#39;exit&#39; 事件；Node.js 进程即将结束</p><p>3、process.argv 属性返回一个数组，这个数组包含了启动Node.js进程时的命令行参数</p><p>4、process cwd() 方法返回 Node.js 进程当前工作的目录。</p><p>5、process.env属性返回一个包含用户环境信息的对象</p><p>6、process.execPath 属性，返回启动Node.js进程的可执行文件所在的绝对路径。</p><p>7、process.title 属性用于获取或设置当前进程在 ps 命令中显示的进程名字</p><p>8、process.pid属性返回进程的PID。</p><p>9、process.platform属性返回字符串，标识Node.js进程运行其上的操作系统平台。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const process = require(&#39;node:process&#39;);</span></span>
<span class="line"><span>process.on(&#39;beforeExit&#39;, (code) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;进程 beforeExit 事件的退出码: &#39;, code);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>process.on(&#39;exit&#39;, (code) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;进程 exit 事件的退出码: &#39;, code);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>process.argv.forEach((val, index) =&gt; {</span></span>
<span class="line"><span>    console.log(\`\${index}: \${val}\`);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(&#39;此消息会最先显示&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>    结果如下：</span></span>
<span class="line"><span>    0: E:\\softeware\\nodejs\\node.exe</span></span>
<span class="line"><span>    1: E:\\phpstudy_pro\\WWW\\2216\\node\\path.js</span></span>
<span class="line"><span>    此消息会最先显示</span></span>
<span class="line"><span>    进程 beforeExit 事件的退出码:  0</span></span>
<span class="line"><span>    进程 exit 事件的退出码:  0</span></span>
<span class="line"><span>*/ </span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(\`当前目录: \${process.cwd()}\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 结果: 当前目录: E:\\phpstudy_pro\\WWW\\2216\\node</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(process.env);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(process.execPath)</span></span>
<span class="line"><span>// 结果：E:\\softeware\\nodejs\\node.exe</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(process.title)</span></span>
<span class="line"><span>//结果：MINGW64:/e/phpstudy_pro/WWW/2216/node</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(\`进程的pid是： \${process.pid}\`);</span></span>
<span class="line"><span>//结果：进程的pid是： 26068</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(\`操作系统平台: \${process.platform}\`);</span></span>
<span class="line"><span>//结果：操作系统平台: win32</span></span></code></pre></div><h2 id="os模块" tabindex="-1">OS模块 <a class="header-anchor" href="#os模块" aria-label="Permalink to &quot;OS模块&quot;">​</a></h2><h4 id="介绍-6" tabindex="-1">介绍 <a class="header-anchor" href="#介绍-6" aria-label="Permalink to &quot;介绍&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>os模块提供了与操作系统相关的实用方法和属性。</span></span></code></pre></div><h4 id="功能-1" tabindex="-1">功能 <a class="header-anchor" href="#功能-1" aria-label="Permalink to &quot;功能&quot;">​</a></h4><blockquote><p>1、os.arch()返回为其编译 Node.js 二进制文件的操作系统 CPU 架构</p><p>2、os.hostname()返回操作系统的主机名。</p><p>3、os.type()返回操作系统名</p><p>4、os.platform() 返回编译时的操作系统名</p><p>5、os.totalmem()返回系统内存总量，单位为字节。</p><p>6、os.cpus()返回一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）。</p><p>7、os.networkInterfaces()获得网络接口列表。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const os = require(&#39;node:os&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const arch = os.arch();</span></span>
<span class="line"><span>console.log(&quot;cpu架构：&quot;+arch);</span></span>
<span class="line"><span>// 结果：cpu架构：x64</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const arch =os.hostname();</span></span>
<span class="line"><span>console.log(&quot;主机名：&quot;+arch);</span></span>
<span class="line"><span>// 结果：主机名：liyuan</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const arch =os.type();</span></span>
<span class="line"><span>console.log(&quot;操作系统名：&quot;+arch);</span></span>
<span class="line"><span>// 结果：操作系统名：Windows_NT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const arch = os.platform();</span></span>
<span class="line"><span>console.log(&quot;平台：&quot;+arch);</span></span>
<span class="line"><span>// 结果：操作系统名：win32</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(&#39;总内存: &#39; + os.totalmem() + &quot; bytes&quot;);</span></span>
<span class="line"><span>// 结果：总内存: 34252070912 bytes</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const arch = os.cpus();</span></span>
<span class="line"><span>console.log(arch);</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>    model: &#39;Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz&#39;,</span></span>
<span class="line"><span>    speed: 1992,</span></span>
<span class="line"><span>    times: {</span></span>
<span class="line"><span>      user: 11015953,</span></span>
<span class="line"><span>      nice: 0,</span></span>
<span class="line"><span>      sys: 5949500,</span></span>
<span class="line"><span>      idle: 51759468,</span></span>
<span class="line"><span>      irq: 1168734</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const arch = os.networkInterfaces();</span></span>
<span class="line"><span>console.log(arch);</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>    WLAN: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      address: &#39;fe80::ed58:f528:6f9f:79bf&#39;,</span></span>
<span class="line"><span>      netmask: &#39;ffff:ffff:ffff:ffff::&#39;,</span></span>
<span class="line"><span>      family: &#39;IPv6&#39;,</span></span>
<span class="line"><span>      mac: &#39;5c:ea:1d:ae:23:a5&#39;,</span></span>
<span class="line"><span>      internal: false,</span></span>
<span class="line"><span>      cidr: &#39;fe80::ed58:f528:6f9f:79bf/64&#39;,</span></span>
<span class="line"><span>      scopeid: 15</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      address: &#39;192.168.31.32&#39;,</span></span>
<span class="line"><span>      netmask: &#39;255.255.255.0&#39;,</span></span>
<span class="line"><span>      family: &#39;IPv4&#39;,</span></span>
<span class="line"><span>      mac: &#39;5c:ea:1d:ae:23:a5&#39;,</span></span>
<span class="line"><span>      internal: false,</span></span>
<span class="line"><span>      cidr: &#39;192.168.31.32/24&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &#39;Loopback Pseudo-Interface 1&#39;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      address: &#39;::1&#39;,</span></span>
<span class="line"><span>      netmask: &#39;ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff&#39;,</span></span>
<span class="line"><span>      family: &#39;IPv6&#39;,</span></span>
<span class="line"><span>      mac: &#39;00:00:00:00:00:00&#39;,</span></span>
<span class="line"><span>      internal: true,</span></span>
<span class="line"><span>      cidr: &#39;::1/128&#39;,</span></span>
<span class="line"><span>      scopeid: 0</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      address: &#39;127.0.0.1&#39;,</span></span>
<span class="line"><span>      netmask: &#39;255.0.0.0&#39;,</span></span>
<span class="line"><span>      family: &#39;IPv4&#39;,</span></span>
<span class="line"><span>      mac: &#39;00:00:00:00:00:00&#39;,</span></span>
<span class="line"><span>      internal: true,</span></span>
<span class="line"><span>      cidr: &#39;127.0.0.1/8&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>*/</span></span></code></pre></div><h2 id="dns解析模块" tabindex="-1">DNS解析模块 <a class="header-anchor" href="#dns解析模块" aria-label="Permalink to &quot;DNS解析模块&quot;">​</a></h2><h4 id="介绍-7" tabindex="-1">介绍 <a class="header-anchor" href="#介绍-7" aria-label="Permalink to &quot;介绍&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> DNS 模块用于解析域名</span></span></code></pre></div><h4 id="功能-2" tabindex="-1">功能 <a class="header-anchor" href="#功能-2" aria-label="Permalink to &quot;功能&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const dns = require(&#39;dns&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 域名DNS解析IP地址</span></span>
<span class="line"><span>dns.lookup(&#39;www.yahoo.com&#39;, function onLookup(err, address, family) {</span></span>
<span class="line"><span>    console.log(&#39;ip 地址:&#39;, address)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 大部分服务器基本都会禁止反ping，所以只有少量服务器能够反向解析</span></span>
<span class="line"><span>    dns.reverse(address, function (err, hostnames) {</span></span>
<span class="line"><span>        if (err)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            console.log(err.stack)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        console.log(&#39;反向解析 &#39; + address + &#39;: &#39; + JSON.stringify(hostnames))</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 执行以上代码，结果如下所示:</span></span>
<span class="line"><span>// ip 地址: 180.222.102.202</span></span>
<span class="line"><span>// 反向解析 180.222.102.202: [&quot;media-router-fp74.prod.media.vip.tp2.yahoo.com&quot;]</span></span></code></pre></div><h2 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;events&quot;">​</a></h2><h4 id="介绍-8" tabindex="-1">介绍 <a class="header-anchor" href="#介绍-8" aria-label="Permalink to &quot;介绍&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>许多 Node.js 核心 API 都是围绕惯用的异步事件驱动架构构建的，其中某些类型的对象</span></span>
<span class="line"><span>（称为“发射器”）发出命名事件，从而导致Function对象（“侦听器”）被调用。</span></span></code></pre></div><h4 id="功能-3" tabindex="-1">功能 <a class="header-anchor" href="#功能-3" aria-label="Permalink to &quot;功能&quot;">​</a></h4><blockquote><p>1、addListener() 在侦听器数组的末尾为指定的事件添加侦听器</p><p>2、on()在侦听器数组的末尾为指定的事件添加侦听器。</p><p>3、once()为事件添加一次性侦听器。 只有在下次触发事件时才会调用此侦听器，之后将其删除。</p><p>4、removeListener()从侦听器数组中删除指定事件的侦听器。</p><p>5、removeAllListeners()删除所有侦听器或指定事件的侦听器</p><p>6、listenerCount()返回指定事件的侦听器数量。</p><p>7、emit()使用提供的参数按顺序执行每个侦听器。 如果事件具有侦听器，则返回true，否则返回false。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const events = require(&#39;node:events&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var emitter = new events.EventEmitter();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 1、on注册监听事件</span></span>
<span class="line"><span>emitter.on(&#39;test&#39;, function (arg) {</span></span>
<span class="line"><span>    console.log(&#39;test1触发，传入参数为：&#39; + arg);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>emitter.on(&#39;test&#39;, function (arg) {</span></span>
<span class="line"><span>    console.log(&#39;test2触发，传入参数为：&#39; + arg);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>emitter.on(&#39;test&#39;, function (arg) {</span></span>
<span class="line"><span>    console.log(&#39;test3触发，传入参数为：&#39; + arg);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2、addListener添加一个监听器</span></span>
<span class="line"><span>emitter.addListener(&#39;test&#39;, function (arg) {</span></span>
<span class="line"><span>    console.log(&#39;新增test4触发，传入参数为：&#39; + arg);</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 3、emit触发监听事件</span></span>
<span class="line"><span>emitter.emit(&#39;test&#39;, &#39;admin&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>   结果如下：</span></span>
<span class="line"><span>      test1触发，传入参数为：admin</span></span>
<span class="line"><span>      test2触发，传入参数为：admin</span></span>
<span class="line"><span>      test3触发，传入参数为：admin</span></span>
<span class="line"><span>      新增test4触发，传入参数为：admin</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//  4、once注册单次监听器</span></span>
<span class="line"><span>emitter.once(&#39;onceEvent&#39;, function (count) {</span></span>
<span class="line"><span>    console.log(&#39;单次监听器触发，二次将不存在&#39; + count);</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>emitter.emit(&#39;onceEvent&#39;, 1);</span></span>
<span class="line"><span>emitter.emit(&#39;onceEvent&#39;, 2);</span></span>
<span class="line"><span>/*结果: 单次监听器触发，二次将不存在1*/ </span></span>
<span class="line"><span></span></span>
<span class="line"><span>//  5、removeListener 移除指定监听事件</span></span>
<span class="line"><span>function callback(arg) {</span></span>
<span class="line"><span>    console.log(&#39;test5触发，传入参数为：&#39; + arg + &#39;\\n&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>emitter.on(&#39;test&#39;, callback);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>emitter.emit(&#39;test&#39;, &#39;admin&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>emitter.removeListener(&#39;test&#39;, callback);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>emitter.emit(&#39;test&#39;, &#39;admin&#39;);</span></span>
<span class="line"><span>/*结果只有一次: test5触发，传入参数为：admin*/  </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 6、listenerCount返回指定事件的监听器数组</span></span>
<span class="line"><span>emitter.on(&#39;test&#39;, function (arg) {</span></span>
<span class="line"><span>    console.log(&#39;test1触发，传入参数为：&#39; + arg);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>emitter.on(&#39;test&#39;, function (arg) {</span></span>
<span class="line"><span>    console.log(&#39;test2触发，传入参数为：&#39; + arg);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>emitter.on(&#39;test&#39;, function (arg) {</span></span>
<span class="line"><span>    console.log(&#39;test3触发，传入参数为：&#39; + arg);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var count = emitter.listenerCount(&#39;test&#39;);</span></span>
<span class="line"><span>console.log(count);</span></span>
<span class="line"><span>/* 结果： 3*/ </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 移除所有监听器</span></span>
<span class="line"><span>mitter.removeAllListeners();</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>   一旦一个事件被发射，所有在发射时附加到它的监听器都会被依次调用。这意味着 在发出之后和 </span></span>
<span class="line"><span>   最后一个侦听器完成执行之前removeListener()的任何orremoveAllListeners()调用都不会将它们从 正在进行的中删除。</span></span>
<span class="line"><span>*/ </span></span>
<span class="line"><span>const events = require(&#39;node:events&#39;);</span></span>
<span class="line"><span>const myEmitter = new events.EventEmitter();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const callbackA = () =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;A++&#39;);</span></span>
<span class="line"><span>  myEmitter.removeListener(&#39;event&#39;, callbackB);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const callbackB = () =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;B&#39;);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>myEmitter.on(&#39;event&#39;, callbackA);</span></span>
<span class="line"><span>myEmitter.on(&#39;event&#39;, callbackB);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>myEmitter.emit(&#39;event&#39;);</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>   结果：</span></span>
<span class="line"><span>      A++</span></span>
<span class="line"><span>      B</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>myEmitter.emit(&#39;event&#39;);</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>   结果：</span></span>
<span class="line"><span>      A++</span></span>
<span class="line"><span>*/</span></span></code></pre></div><h2 id="搭建express" tabindex="-1">搭建express <a class="header-anchor" href="#搭建express" aria-label="Permalink to &quot;搭建express&quot;">​</a></h2><h2 id="安装好node环境" tabindex="-1">安装好node环境 <a class="header-anchor" href="#安装好node环境" aria-label="Permalink to &quot;安装好node环境&quot;">​</a></h2><blockquote><p>node -v</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>出现版信息: v16.18.0</span></span></code></pre></div><h2 id="全局安装express脚手架安装" tabindex="-1">全局安装express脚手架安装 <a class="header-anchor" href="#全局安装express脚手架安装" aria-label="Permalink to &quot;全局安装express脚手架安装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install -g express-generator</span></span></code></pre></div><h2 id="查看安装是否成功" tabindex="-1">查看安装是否成功 <a class="header-anchor" href="#查看安装是否成功" aria-label="Permalink to &quot;查看安装是否成功&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>express --version</span></span></code></pre></div><h2 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h2><blockquote><p>利用express框架来创建项目</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>express --view=ejs projectName</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd projectName</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm install</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm start</span></span></code></pre></div><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/project</span></span>
<span class="line"><span>    .gitignore                git仓库忽略文件</span></span>
<span class="line"><span>    bind                    项目启动文件所有在目录</span></span>
<span class="line"><span>    public                    公共静态资源目录</span></span>
<span class="line"><span>    package.json            安装包依赖文件</span></span>
<span class="line"><span>    node_modules            依赖包</span></span>
<span class="line"><span>    routes                  模块路由目录</span></span>
<span class="line"><span>    views                   ejs模板文件目录</span></span>
<span class="line"><span>    app.js                  项目入口文件</span></span></code></pre></div><h2 id="路由功能" tabindex="-1">路由功能 <a class="header-anchor" href="#路由功能" aria-label="Permalink to &quot;路由功能&quot;">​</a></h2><h3 id="response-render-方法-渲染页面" tabindex="-1">Response.render()方法：渲染页面 <a class="header-anchor" href="#response-render-方法-渲染页面" aria-label="Permalink to &quot;Response.render()方法：渲染页面&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 渲染一个页面文件到客户端  </span></span>
<span class="line"><span>router.get(&#39;/&#39;, function(req, res, next) {</span></span>
<span class="line"><span>    //会去找views目录下的index.html文件  设置一个局部name变量，渲染到index页面上</span></span>
<span class="line"><span>  res.render(&#39;index&#39;, {name: &#39;张三&#39;});</span></span>
<span class="line"><span>});</span></span></code></pre></div><h3 id="response-send-方法-发送http响应" tabindex="-1">Response.send()方法：发送HTTP响应 <a class="header-anchor" href="#response-send-方法-发送http响应" aria-label="Permalink to &quot;Response.send()方法：发送HTTP响应&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// Response.send()方法将Content-Type设置为text/html。</span></span>
<span class="line"><span>router.get(&#39;/user/&#39;, function (req, res) {</span></span>
<span class="line"><span>  // 页面直接渲染内容：&lt;h1&gt;html&lt;/h1&gt;</span></span>
<span class="line"><span>  res.send(&quot;&lt;h1&gt;html&lt;/h1&gt;&quot;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><h3 id="express中的路由" tabindex="-1">express中的路由 <a class="header-anchor" href="#express中的路由" aria-label="Permalink to &quot;express中的路由&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1、在express中路由是指客户端的请求与服务区处理函数之间的映射关系</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、在express中路由有三个部分组成，分别是请求类型，请求的URL地址和处理函数，格式如下</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3、express中的路由分为3部分，分别是请求类型，请求URL地址，处理函数，格式如下：</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//匹配get请求，且请求的URL为&#39;/&#39;</span></span>
<span class="line"><span>app.get(&#39;/&#39;,(req,res)=&gt;{</span></span>
<span class="line"><span>    res.send(&#39;hello&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//匹配post请求，且请求的URL为&#39;/&#39;</span></span>
<span class="line"><span>app.post(&#39;/&#39;,(req,res)=&gt;{</span></span>
<span class="line"><span>    res.send(&#39;hello i am post&#39;)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="模块化路由" tabindex="-1">模块化路由 <a class="header-anchor" href="#模块化路由" aria-label="Permalink to &quot;模块化路由&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>为了方便对路由进行模块化的管理，express不建议将路由直接挂载到app上，而是推荐将路由抽离为单独的模块。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>步骤如下：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 创建路由模块对应的js文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 调用express.Router()函数创建路由对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 向路由对象上挂载具体的路由</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 使用module.exports向外共享路由对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 使用app.use()函数注册路由模块</span></span></code></pre></div><blockquote><p>路由模块总入口文件:index.js</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var express = require(&#39;express&#39;);</span></span>
<span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span>// 引入数据库</span></span>
<span class="line"><span>const db = require(path.join(__dirname, &quot;../config/database&quot;)) </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 引入用户路由模块</span></span>
<span class="line"><span>const UserRouter = require(path.join(__dirname, &quot;./users&quot;)) </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 引入首页制器</span></span>
<span class="line"><span>const HomeCtr = require(path.join(__dirname, &quot;../controller/home&quot;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//创建首页路由模块</span></span>
<span class="line"><span>const HomeRouter = express.Router()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//设置首页路由规则</span></span>
<span class="line"><span>HomeRouter.get(&#39;/&#39;, HomeCtr.index)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = function (app) {</span></span>
<span class="line"><span>  // 路由守卫:针对某个路由写的安全守卫  </span></span>
<span class="line"><span>  app.all(&#39;*&#39;, async(req, res, next) =&gt; {</span></span>
<span class="line"><span>    if(req.url == &#39;/user/login&#39; || req.url == &#39;/user/register&#39;) {</span></span>
<span class="line"><span>      next();</span></span>
<span class="line"><span>    } else if (req.session.LognUser) {</span></span>
<span class="line"><span>      let LongUser = req.session.LognUser</span></span>
<span class="line"><span>      // 校验用户信息</span></span>
<span class="line"><span>      const result = await db.table(&#39;user&#39;).find(LongUser.id);</span></span>
<span class="line"><span>      if(JSON.stringify(result) != &quot;{}&quot;) {</span></span>
<span class="line"><span>        req.session.LognUser = result;</span></span>
<span class="line"><span>        next();</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        res.redirect(&#39;/user/login&#39;);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      res.redirect(&#39;/user/login&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  app.use(HomeRouter)</span></span>
<span class="line"><span>  //设置一个前缀 并挂载路由</span></span>
<span class="line"><span>  app.use(&#39;/user&#39;, UserRouter)</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>用户路由模块文件:users.js</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var express = require(&#39;express&#39;);</span></span>
<span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span>// 引入用户控制器</span></span>
<span class="line"><span>const UserCtr = require(path.join(__dirname, &quot;../controller/user&quot;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//创建路由模块</span></span>
<span class="line"><span>const UserRouter = express.Router()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//设置路由规则</span></span>
<span class="line"><span>UserRouter.get(&#39;/&#39;, UserCtr.index)</span></span>
<span class="line"><span>UserRouter.get(&#39;/register&#39;, UserCtr.register)</span></span>
<span class="line"><span>UserRouter.post(&#39;/register&#39;, UserCtr.registerpost)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = UserRouter;</span></span></code></pre></div><blockquote><p>注册路由模块app.js</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 引入总路由文件</span></span>
<span class="line"><span>var router = require(&#39;./routes/index.js&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 通过 router 对象设置（挂载）全部路由</span></span>
<span class="line"><span>router(app);</span></span></code></pre></div><h2 id="中间件" tabindex="-1">中间件 <a class="header-anchor" href="#中间件" aria-label="Permalink to &quot;中间件&quot;">​</a></h2><h3 id="安装第三方中间件" tabindex="-1">安装第三方中间件 <a class="header-anchor" href="#安装第三方中间件" aria-label="Permalink to &quot;安装第三方中间件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cnpm install body-parser --save</span></span></code></pre></div><h3 id="入口文件具体配置app-js" tabindex="-1">入口文件具体配置app.js <a class="header-anchor" href="#入口文件具体配置app-js" aria-label="Permalink to &quot;入口文件具体配置app.js&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 引入中间件</span></span>
<span class="line"><span>var bodyParser = require(&#39;body-parser&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建 application/x-www-form-urlencoded 解析</span></span>
<span class="line"><span>app.use(bodyParser.urlencoded({extended:false}));</span></span>
<span class="line"><span>// 创建 application/json 解析</span></span>
<span class="line"><span>app.use(bodyParser.json());</span></span></code></pre></div><h3 id="中间件应用" tabindex="-1">中间件应用 <a class="header-anchor" href="#中间件应用" aria-label="Permalink to &quot;中间件应用&quot;">​</a></h3><blockquote><p>在express中，已经封装好获取get参数的方法，即req.query，但是post请求的参数却没有被封装，需要我们借助中间件(body-parser)来获取！</p><p>首页控制器中间应用：先建controller文件夹，创建home.js</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span>var url = require(&#39;url&#39;);</span></span>
<span class="line"><span>// 引入数据库</span></span>
<span class="line"><span>const db = require(path.join(__dirname, &quot;../config/database&quot;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 首页渲染  get请求参数获取</span></span>
<span class="line"><span>let index = async(req,res) =&gt; {</span></span>
<span class="line"><span>    //url.parse(req.url, true)true把参数query属性转对象  </span></span>
<span class="line"><span>    var data = url.parse(req.url, true)</span></span>
<span class="line"><span>    let where ={}</span></span>
<span class="line"><span>    // 判断是否有分类ID</span></span>
<span class="line"><span>    if(data.query.typeid &gt; 0 &amp;&amp; data.query.typeid != undefined){</span></span>
<span class="line"><span>        where.typeid = data.query.typeid</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //查询分类</span></span>
<span class="line"><span>    var typelist = await db.table(&#39;type&#39;).select();</span></span>
<span class="line"><span>    typelist.unshift({</span></span>
<span class="line"><span>        id: 0,</span></span>
<span class="line"><span>        name: &quot;全部&quot;</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    // sql语句查询</span></span>
<span class="line"><span>    const contactlist = await db.table(&#39;contact&#39;).where(where).order(&#39;createtime DESC&#39;).select()</span></span>
<span class="line"><span>    //赋值</span></span>
<span class="line"><span>    const assign = {</span></span>
<span class="line"><span>        typelist: typelist,</span></span>
<span class="line"><span>        contactlist: contactlist,</span></span>
<span class="line"><span>        typeid: data.query.typeid ? data.query.typeid : 0</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //渲染模板 视图的index.html页面  assign模板赋值</span></span>
<span class="line"><span>    res.render(&#39;index&#39;, assign)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//导出模块方法</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    index,</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>用户控制器中间应用：在controller文件夹，创建user.js</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span>const md5 = require(&#39;md5-node&#39;) // 引入加密码处理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 引入公共函数</span></span>
<span class="line"><span>const {randstr} = require(path.join(__dirname, &quot;../util/common&quot;)) </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 引入数据库</span></span>
<span class="line"><span>const db = require(path.join(__dirname, &quot;../config/database&quot;)) </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 渲染用户中心</span></span>
<span class="line"><span>let index = async(req,res) =&gt; {</span></span>
<span class="line"><span>    // 获取存储的用户信息</span></span>
<span class="line"><span>    let LongUser = req.session.LognUser</span></span>
<span class="line"><span>    //赋值</span></span>
<span class="line"><span>    const assign = {</span></span>
<span class="line"><span>        LongUser: LongUser </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //渲染模板 找到视图下面的user.html页面渲染</span></span>
<span class="line"><span>    res.render(&#39;user&#39;, assign)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 渲染注册页面</span></span>
<span class="line"><span>let register = async(req, res) =&gt; {</span></span>
<span class="line"><span>    //渲染模板页面  &#39;user/register&#39; 表示是视图下面的user文件夹下的register.html页面渲染</span></span>
<span class="line"><span>    res.render(&#39;user/register&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 注册方法  post请求的参数通过req.body来获取</span></span>
<span class="line"><span>let registerpost = async (req, res) =&gt; {</span></span>
<span class="line"><span>    const email = req.body.email</span></span>
<span class="line"><span>    let password = req.body.password</span></span>
<span class="line"><span>    // 随机生成密码</span></span>
<span class="line"><span>    const salt = randstr();</span></span>
<span class="line"><span>    // 密码加密</span></span>
<span class="line"><span>    password = md5(password + salt)</span></span>
<span class="line"><span>    let data = {</span></span>
<span class="line"><span>        nickname: email,</span></span>
<span class="line"><span>        email: email,</span></span>
<span class="line"><span>        password: password,</span></span>
<span class="line"><span>        salt: salt</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    const result = await db.table(&#39;user&#39;).add(data)</span></span>
<span class="line"><span>    if(result){</span></span>
<span class="line"><span>        // 组装接口数据返回</span></span>
<span class="line"><span>        return res.json({</span></span>
<span class="line"><span>            code: 1,</span></span>
<span class="line"><span>            msg: &#39;注册成功&#39;</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        return res.json({</span></span>
<span class="line"><span>            code: 0,</span></span>
<span class="line"><span>            msg: &#39;注册失败&#39;</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//导出模块方法</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    index,</span></span>
<span class="line"><span>    register,</span></span>
<span class="line"><span>    registerpost,</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="模板引擎" tabindex="-1">模板引擎 <a class="header-anchor" href="#模板引擎" aria-label="Permalink to &quot;模板引擎&quot;">​</a></h2><h2 id="模板引擎art-template" tabindex="-1">模板引擎art-template <a class="header-anchor" href="#模板引擎art-template" aria-label="Permalink to &quot;模板引擎art-template&quot;">​</a></h2><blockquote><p>views页面目录中有3个页面文件：index.jade、error.jade和layout.jade。大家可能对jade这样的拓展名文件不太熟悉，其实它就是一种模板引擎，为了使用大家熟悉的HTML结构，通常在项目实际开发过程中会将其更换成便于理解的其他模板引擎，比如art-template等。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install -S express-art-template</span></span></code></pre></div><h2 id="安装模板ejs的布局" tabindex="-1">安装模板ejs的布局 <a class="header-anchor" href="#安装模板ejs的布局" aria-label="Permalink to &quot;安装模板ejs的布局&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install -S express-ejs-layouts</span></span></code></pre></div><h2 id="项目入口文件-app-js文件" tabindex="-1">项目入口文件：app.js文件 <a class="header-anchor" href="#项目入口文件-app-js文件" aria-label="Permalink to &quot;项目入口文件：app.js文件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 引入模板布局插件</span></span>
<span class="line"><span>var expressLayouts = require(&#39;express-ejs-layouts&#39;);</span></span>
<span class="line"><span>// 设置视图模块路径</span></span>
<span class="line"><span>app.set(&#39;views&#39;, path.join(__dirname, &#39;views&#39;));</span></span>
<span class="line"><span>// 更改视图模板</span></span>
<span class="line"><span>app.engine(&#39;.html&#39;, require(&#39;express-art-template&#39;));</span></span>
<span class="line"><span>// 设置视图引擎为html</span></span>
<span class="line"><span>app.set(&#39;view engine&#39;, &#39;html&#39;);</span></span>
<span class="line"><span>// 模板布局</span></span>
<span class="line"><span>app.use(expressLayouts);</span></span></code></pre></div><h2 id="模板布局-layout-html" tabindex="-1">模板布局：layout.html <a class="header-anchor" href="#模板布局-layout-html" aria-label="Permalink to &quot;模板布局：layout.html&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;title&gt;笔记&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;!-- bootstrap --&gt;</span></span>
<span class="line"><span>    &lt;link rel=&quot;stylesheet&quot; href=&quot;/assets/css/bootstrap.min.css&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 公共样式 --&gt;</span></span>
<span class="line"><span>    &lt;link rel=&quot;stylesheet&quot; href=&quot;/assets/css/common.css&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- jquery  --&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;/assets/js/jquery.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- bootstrap --&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;/assets/js/bootstrap.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- wow.js --&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;/assets/js/wow.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    //实例化wow.js</span></span>
<span class="line"><span>    new WOW().init()</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;wrapper&quot;&gt;</span></span>
<span class="line"><span>        &lt;div id=&quot;page-wrapper&quot;&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;container-fluid&quot;&gt;</span></span>
<span class="line"><span>                &lt;%- defineContent(&#39;pageSection&#39;) %&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h2 id="index-html页面使用" tabindex="-1">index.html页面使用 <a class="header-anchor" href="#index-html页面使用" aria-label="Permalink to &quot;index.html页面使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;%- contentFor(&#39;pageSection&#39;) %&gt;</span></span>
<span class="line"><span>&lt;!-- 页面独立的 --&gt;</span></span>
<span class="line"><span>&lt;link rel=&quot;stylesheet&quot; href=&quot;/assets/css/index.css&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 搜索 --&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;search&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;icon&quot;&gt;</span></span>
<span class="line"><span>            &lt;span class=&quot;glyphicon glyphicon-search&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;input class=&quot;input&quot; placeholder=&quot;请输入名字&quot; id=&quot;keywords&quot; value=&quot;&lt;%= keywords %&gt;&quot;/&gt;</span></span>
<span class="line"><span>        &lt;button class=&quot;btn&quot; size=&quot;mini&quot; type=&quot;default&quot; onclick=&quot;getIndex()&quot;&gt;搜索&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 分类 --&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;type wow fadeInUp&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;list&quot; btn=&#39;btn&#39; data-target=&quot;#a2&quot;&gt;</span></span>
<span class="line"><span>        &lt;% for(var i =0; i &lt; typelist.length; i++) {%&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;item &lt;%= typeid == typelist[i].id ? &#39;active&#39; : &#39;&#39; %&gt;&quot; data-id=&quot;&lt;%= typelist[i].id %&gt;&quot;&gt;&lt;%= typelist[i].name %&gt;&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;% } %&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 列表 --&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;contact wow fadeInUp&quot; data-wow-delay=&quot;100ms&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;list&quot;&gt;</span></span>
<span class="line"><span>        &lt;% for(var i =0; i &lt; contactlist.length; i++) {%&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;item&quot;&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;content&quot;&gt;</span></span>
<span class="line"><span>                &lt;h3 class=&quot;title&quot;&gt;</span></span>
<span class="line"><span>                    &lt;!-- 路由跳转传参 --&gt;</span></span>
<span class="line"><span>                    &lt;a href=&quot;/contact/info?id=&lt;%= contactlist[i].id %&gt;&quot;&gt;&lt;%= contactlist[i].nickname %&gt;&lt;/a&gt;</span></span>
<span class="line"><span>                &lt;/h3&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;info&quot;&gt;</span></span>
<span class="line"><span>                    &lt;div class=&quot;icon&quot;&gt;</span></span>
<span class="line"><span>                        &lt;image src=&quot;./assets/images/info.png&quot;&gt;&lt;/image&gt;</span></span>
<span class="line"><span>                    &lt;/div&gt;</span></span>
<span class="line"><span>                    &lt;div class=&quot;desc&quot;&gt;</span></span>
<span class="line"><span>                        &lt;%= contactlist[i].remark %&gt;</span></span>
<span class="line"><span>                    &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;!-- 事件传参 --&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;call icon&quot; onclick=&quot;call(&#39;&lt;%= contactlist[i].phone %&gt;&#39;)&quot;&gt;</span></span>
<span class="line"><span>                &lt;image src=&quot;./assets/images/call.png&quot;&gt;&lt;/image&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;call icon&quot;&gt;</span></span>
<span class="line"><span>                &lt;a href=&quot;/contact/edit?id=&lt;%= contactlist[i].id %&gt;&quot;&gt;</span></span>
<span class="line"><span>                    &lt;image src=&quot;./assets/images/edit.png&quot;&gt;&lt;/image&gt;</span></span>
<span class="line"><span>                &lt;/a&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;call icon&quot; onclick=&quot;del(&#39;&lt;%= contactlist[i].id %&gt;&#39;)&quot;&gt;</span></span>
<span class="line"><span>                &lt;image src=&quot;./assets/images/del.png&quot;&gt;&lt;/image&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;% } %&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 引入公共底部文件 --&gt;</span></span>
<span class="line"><span>&lt;%- include(&quot;./footer.html&quot;) %&gt;</span></span></code></pre></div><h2 id="ejs-标签各种含义" tabindex="-1">ejs 标签各种含义 <a class="header-anchor" href="#ejs-标签各种含义" aria-label="Permalink to &quot;ejs 标签各种含义&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;% %&gt; 流程控制标签(if else for)</span></span>
<span class="line"><span>&lt;%= %&gt; 输出标签(原文输出HTML标签)</span></span>
<span class="line"><span>&lt;%- %&gt; 输出标签(HTML会被浏览器解析)</span></span>
<span class="line"><span>&lt;%# %&gt;注释标签</span></span>
<span class="line"><span>&lt;%- include(&quot;./footer.html&quot;) %&gt;</span></span></code></pre></div><h2 id="md5" tabindex="-1">md5 <a class="header-anchor" href="#md5" aria-label="Permalink to &quot;md5&quot;">​</a></h2><h2 id="安装md5-node" tabindex="-1">安装md5-node <a class="header-anchor" href="#安装md5-node" aria-label="Permalink to &quot;安装md5-node&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install md5-node --save</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const md5 = require(&#39;md5-node&#39;)</span></span>
<span class="line"><span>const password = md5(&#39;123&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>打印结果： 202cb962ac59075b964b07152d234b70</span></span></code></pre></div><h2 id="在express中利用中间件crypto中的md5进行加密" tabindex="-1">在express中利用中间件crypto中的MD5进行加密 <a class="header-anchor" href="#在express中利用中间件crypto中的md5进行加密" aria-label="Permalink to &quot;在express中利用中间件crypto中的MD5进行加密&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const crypto = require(&#39;crypto&#39;)</span></span>
<span class="line"><span>//createHash(algorithm)方法 ,是利用给定的算法生成对应的hash对象, update:加密数据,digest:以十六进制返回结果</span></span>
<span class="line"><span>const pass = crypto.createHash(&#39;md5&#39;).update(&#39;123&#39;).digest(&#39;hex&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>打印结果： 202cb962ac59075b964b07152d234b70</span></span></code></pre></div><h2 id="mysql基本使用" tabindex="-1">mysql基本使用 <a class="header-anchor" href="#mysql基本使用" aria-label="Permalink to &quot;mysql基本使用&quot;">​</a></h2><h3 id="node-mysql-promise" tabindex="-1">node-mysql-promise <a class="header-anchor" href="#node-mysql-promise" aria-label="Permalink to &quot;node-mysql-promise&quot;">​</a></h3><ul><li>node-mysql-promise官网链接：<a href="https://github.com/ffttpp/node-mysql-promise" target="_blank" rel="noreferrer">https://github.com/ffttpp/node-mysql-promise</a></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install node-mysql-promise</span></span></code></pre></div><h3 id="配置database-js" tabindex="-1">配置database.js <a class="header-anchor" href="#配置database-js" aria-label="Permalink to &quot;配置database.js&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>host: 连接的host（默认: localhost）</span></span>
<span class="line"><span>port: 连接端口</span></span>
<span class="line"><span>user: 用户名</span></span>
<span class="line"><span>password: 密码</span></span>
<span class="line"><span>database: 数据库名</span></span>
<span class="line"><span>tablePrefix: 数据表前缀</span></span>
<span class="line"><span>charset: 编码（默认: UTF8_GENERAL_CI）</span></span></code></pre></div><blockquote><p>配置文件示例</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var Mysql = require(&#39;node-mysql-promise&#39;);</span></span>
<span class="line"><span>var db = Mysql.createConnection({</span></span>
<span class="line"><span>    host: &#39;localhost&#39;,</span></span>
<span class="line"><span>    user: &#39;root&#39;,</span></span>
<span class="line"><span>    password: &#39;root&#39;,</span></span>
<span class="line"><span>    database: &#39;notepad&#39;,</span></span>
<span class="line"><span>    tablePrefix: &#39;pre_&#39;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = db;</span></span></code></pre></div><h3 id="简单使用" tabindex="-1">简单使用 <a class="header-anchor" href="#简单使用" aria-label="Permalink to &quot;简单使用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 引入数据库</span></span>
<span class="line"><span>const db = require(path.join(__dirname, &quot;../config/database&quot;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let index = async(req,res) =&gt; {</span></span>
<span class="line"><span>    // 查询pre_type表所有的数据</span></span>
<span class="line"><span>    const typelist = await db.table(&#39;type&#39;).select();</span></span>
<span class="line"><span>    //赋值</span></span>
<span class="line"><span>    const assign = {</span></span>
<span class="line"><span>        typelist: typelist </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //渲染模板 找到视图下面的index.html页面渲染</span></span>
<span class="line"><span>    res.render(&#39;index&#39;, assign)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>table(tableName)  tableName String 要查询的表</span></span>
<span class="line"><span>field(field)  field String|Array 要查询的字段，可以是字符串，也可以是数组</span></span>
<span class="line"><span>limit(offset, length)  设置查询的数量  offset Number 起始位置  length Number 查询的数目</span></span>
<span class="line"><span>order(&#39;createtime DESC&#39;) 设置排序方式  DESC为倒序， </span></span>
<span class="line"><span>select()  查询符合条件的数据</span></span>
<span class="line"><span>find() 查找一条符合条件的数据</span></span>
<span class="line"><span>update()更新数据，需要条件</span></span>
<span class="line"><span>delete()删除数据</span></span>
<span class="line"><span>where(where)设置where条件</span></span></code></pre></div><h2 id="session使用" tabindex="-1">Session使用 <a class="header-anchor" href="#session使用" aria-label="Permalink to &quot;Session使用&quot;">​</a></h2><h3 id="安装express-session" tabindex="-1">安装express-session <a class="header-anchor" href="#安装express-session" aria-label="Permalink to &quot;安装express-session&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install express-session</span></span></code></pre></div><h3 id="入口文件配置-aap-js" tabindex="-1">入口文件配置：aap.js <a class="header-anchor" href="#入口文件配置-aap-js" aria-label="Permalink to &quot;入口文件配置：aap.js&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 引入 session 中间件</span></span>
<span class="line"><span>const expressSession = require(&#39;express-session&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(expressSession({</span></span>
<span class="line"><span>  secret: &#39;notepad&#39;,  // secret 属性的值可以是任意字符串</span></span>
<span class="line"><span>  saveUninitialized: true, // 强制将未初始化的session存储</span></span>
<span class="line"><span>  resave: false,  // 强制保存session即使它并没有变化</span></span>
<span class="line"><span>  cookie: {</span></span>
<span class="line"><span>    maxAge: 1800000</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  rolling: true, // 在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）</span></span>
<span class="line"><span>}));</span></span></code></pre></div><h3 id="使用-1" tabindex="-1">使用 <a class="header-anchor" href="#使用-1" aria-label="Permalink to &quot;使用&quot;">​</a></h3><blockquote><p>存储</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 用户登陆方法</span></span>
<span class="line"><span>let loginpost = async(req, res) =&gt; {</span></span>
<span class="line"><span>    const email = req.body.email</span></span>
<span class="line"><span>    let password = req.body.password</span></span>
<span class="line"><span>    const result = await db.table(&#39;user&#39;).where({email:email}).find();</span></span>
<span class="line"><span>    if(result){</span></span>
<span class="line"><span>        const salt = result.salt</span></span>
<span class="line"><span>        password = md5(password + salt)</span></span>
<span class="line"><span>        if(password != result.password){</span></span>
<span class="line"><span>            return res.json({</span></span>
<span class="line"><span>                code: 0,</span></span>
<span class="line"><span>                msg: &#39;密码错误，请重新登陆&#39;</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 存储用户信息</span></span>
<span class="line"><span>        req.session.LognUser = result;</span></span>
<span class="line"><span>        return res.json({</span></span>
<span class="line"><span>            code: 1,</span></span>
<span class="line"><span>            msg: &#39;登陆成功&#39;</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    } else{</span></span>
<span class="line"><span>        return res.json({</span></span>
<span class="line"><span>            code: 0,</span></span>
<span class="line"><span>            msg: &#39;登陆失败，当前用户不存在&#39;</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>校验页面是否有登陆</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 校验所有路由跳转</span></span>
<span class="line"><span> app.all(&#39;*&#39;, async(req, res, next) =&gt; {</span></span>
<span class="line"><span>    // 判断是否登陆页或者注册页</span></span>
<span class="line"><span>    if(req.url == &#39;/user/login&#39; || req.url == &#39;/user/register&#39;) {</span></span>
<span class="line"><span>      next();</span></span>
<span class="line"><span>    } else if (req.session.LognUser) {</span></span>
<span class="line"><span>      let LongUser = req.session.LognUser</span></span>
<span class="line"><span>      // 校验用户信息</span></span>
<span class="line"><span>      const result = await db.table(&#39;user&#39;).find(LongUser.id);</span></span>
<span class="line"><span>      if(JSON.stringify(result) != &quot;{}&quot;) {</span></span>
<span class="line"><span>        // 重新存储用户信息</span></span>
<span class="line"><span>        req.session.LognUser = result;</span></span>
<span class="line"><span>        next();</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        res.redirect(&#39;/user/login&#39;);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      res.redirect(&#39;/user/login&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span></code></pre></div><blockquote><p>清除方法destroy()</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let logout = async (req, res) =&gt; {</span></span>
<span class="line"><span>    // 清除用户信息</span></span>
<span class="line"><span>    req.session.destroy()</span></span>
<span class="line"><span>    return res.json({</span></span>
<span class="line"><span>        code: 1,</span></span>
<span class="line"><span>        msg: &#39;退出成功&#39;</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="服务器部署-pm2" tabindex="-1">服务器部署 (pm2) <a class="header-anchor" href="#服务器部署-pm2" aria-label="Permalink to &quot;服务器部署 (pm2)&quot;">​</a></h2><h3 id="安装pm2" tabindex="-1">安装pm2 <a class="header-anchor" href="#安装pm2" aria-label="Permalink to &quot;安装pm2&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install -g pm2</span></span></code></pre></div><h3 id="启动命令写在package-json里" tabindex="-1">启动命令写在package.json里 <a class="header-anchor" href="#启动命令写在package-json里" aria-label="Permalink to &quot;启动命令写在package.json里&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;start&quot;: &quot;node ./bin/www&quot;,</span></span>
<span class="line"><span>    &quot;pm2&quot;:&quot;pm2 start processes.json&quot;</span></span>
<span class="line"><span>},</span></span></code></pre></div><h3 id="项目根目录下新建文件-processes-json" tabindex="-1">项目根目录下新建文件：processes.json <a class="header-anchor" href="#项目根目录下新建文件-processes-json" aria-label="Permalink to &quot;项目根目录下新建文件：processes.json&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;apps&quot;: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;name&quot;: &quot;nodenotepad&quot;,</span></span>
<span class="line"><span>        &quot;cwd&quot;: &quot;/nodenotepad&quot;,</span></span>
<span class="line"><span>        &quot;script&quot;: &quot;bin/www&quot;,</span></span>
<span class="line"><span>        &quot;log_date_format&quot;: &quot;YYYY-MM-DD HH:mm Z&quot;,</span></span>
<span class="line"><span>        &quot;pid_file&quot;: &quot;pids/node-geo-api.pid&quot;,</span></span>
<span class="line"><span>        &quot;instances&quot;: 6,</span></span>
<span class="line"><span>        &quot;min_uptime&quot;: &quot;200s&quot;,</span></span>
<span class="line"><span>        &quot;max_restarts&quot;: 10,</span></span>
<span class="line"><span>        &quot;max_memory_restart&quot;: &quot;1M&quot;,</span></span>
<span class="line"><span>        &quot;cron_restart&quot;: &quot;1 0 * * *&quot;,</span></span>
<span class="line"><span>        &quot;watch&quot;: false,</span></span>
<span class="line"><span>        &quot;merge_logs&quot;: true,</span></span>
<span class="line"><span>        &quot;exec_interpreter&quot;: &quot;node&quot;,</span></span>
<span class="line"><span>        &quot;exec_mode&quot;: &quot;fork&quot;,</span></span>
<span class="line"><span>        &quot;autorestart&quot;: false,</span></span>
<span class="line"><span>        &quot;vizion&quot;: false</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="搭建站点" tabindex="-1">搭建站点 <a class="header-anchor" href="#搭建站点" aria-label="Permalink to &quot;搭建站点&quot;">​</a></h2><blockquote><h3 id="拉取项目" tabindex="-1">拉取项目 <a class="header-anchor" href="#拉取项目" aria-label="Permalink to &quot;拉取项目&quot;">​</a></h3></blockquote><p>1、首先确认服务器有没有安装git，执行下面的指令，如果没有出现版本号的，说明服务器没有git，那么需要安装git指令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 查看版本号</span></span>
<span class="line"><span>git --version</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 安装指令</span></span>
<span class="line"><span>yum install -y git</span></span></code></pre></div><p>2、现在去宝塔发布目录，<code>/www/wwwroot</code> 目录就是宝塔默认的发布目录，一般项目都会上传到这里</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cd /www/wwwroot</span></span></code></pre></div><p>3、把项目克隆到该目录</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo git clone 你的项目</span></span></code></pre></div><p>4、打开宝塔面板，如果忘记了面板地址，可执行<code>sudo bt default</code>查看基本信息，选择外网面板地址</p><h2 id="服务器上线配置-pm2配置" tabindex="-1">服务器上线配置 PM2配置 <a class="header-anchor" href="#服务器上线配置-pm2配置" aria-label="Permalink to &quot;服务器上线配置 PM2配置&quot;">​</a></h2><p>1、登录后，找到宝塔菜单软件商店，搜索PM2管理器先安装</p><p><img src="https://topmost.gitee.io/book/mdphoto/extends/node/pm2/pm1.png" alt="图片"></p><p>2、在软件商店，找到PM2管理器，然后添加node项目</p><p><img src="https://topmost.gitee.io/book/mdphoto/extends/node/pm2/pm2.png" alt="图片"></p><p>3、添加完之后，设置端口</p><p><img src="https://topmost.gitee.io/book/mdphoto/extends/node/pm2/pm3.png" alt="图片"></p><p>4、然后创建映射</p><p><img src="https://topmost.gitee.io/book/mdphoto/extends/node/pm2/pm4.png" alt="图片"></p><p>5、node项目启动，可以查看刚刚映射的站点访问项目</p><p><img src="https://topmost.gitee.io/book/mdphoto/extends/node/pm2/pm5.png" alt="图片"></p><p>6、项目访问</p><p><img src="https://topmost.gitee.io/book/mdphoto/extends/node/pm2/pm6.png" alt="图片"></p><h3 id="服务器配上线配置-直接添加node项目" tabindex="-1">服务器配上线配置 直接添加node项目 <a class="header-anchor" href="#服务器配上线配置-直接添加node项目" aria-label="Permalink to &quot;服务器配上线配置 直接添加node项目&quot;">​</a></h3><p>1、登录后，点击网站，然后选择添加Node项目</p><p><img src="https://topmost.gitee.io/book/mdphoto/extends/node/pm2/online-1.png" alt="图片"></p><p>2、提交后，配置访问域名</p><p><img src="https://topmost.gitee.io/book/mdphoto/extends/node/pm2/online-2.png" alt="图片"></p><p>3、开启外网映射</p><p><img src="https://topmost.gitee.io/book/mdphoto/extends/node/pm2/online-3.png" alt="图片"></p><p>4、启动项目访问</p><p><img src="https://topmost.gitee.io/book/mdphoto/extends/node/pm2/online-4.png" alt="图片"></p>`,262),t=[l];function i(c,o,r,d,h,u){return n(),a("div",null,t)}const m=s(e,[["render",i]]);export{b as __pageData,m as default};
