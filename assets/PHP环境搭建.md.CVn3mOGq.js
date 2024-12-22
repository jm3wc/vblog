import{_ as a,c as s,o as p,a2 as n}from"./chunks/framework.CSGcjqEA.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"PHP环境搭建.md","filePath":"PHP环境搭建.md"}'),e={name:"PHP环境搭建.md"},t=n(`<h2 id="phpstudy快速入门" tabindex="-1">phpstudy快速入门 <a class="header-anchor" href="#phpstudy快速入门" aria-label="Permalink to &quot;phpstudy快速入门&quot;">​</a></h2><p>安装php自定义环境是非常复杂，而安装PHP集成环境是非常简便，可以大大节省了搭建环境的时间。安装好就可以使用了</p><p>现在市场上有很多集成环境，例如<code>phpstudy</code>、<code>laragon</code>、<code>phpenv</code>、<code>wampserver</code>等等</p><h2 id="架构" tabindex="-1">架构 <a class="header-anchor" href="#架构" aria-label="Permalink to &quot;架构&quot;">​</a></h2><p>在开发时经常遇到搭建lnmp环境或者wamp环境，那么它们代表什么呢？</p><p>其实它们就是一个缩写，它们指的是一组通常一起使用来运行动态网站或者服务器的自由软件。以下就是它们代表的软件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>lnmp: Linux + Nginx + MySql + PHP</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lamp: Linux + Apache + MySql + PHP</span></span>
<span class="line"><span></span></span>
<span class="line"><span>wamp：Windows + Apache + MySql + PHP</span></span>
<span class="line"><span></span></span>
<span class="line"><span>wnmp：Windows + Nginx + MySql + PHP</span></span></code></pre></div><h2 id="apache" tabindex="-1">Apache <a class="header-anchor" href="#apache" aria-label="Permalink to &quot;Apache&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Apache是世界使用排名第一的Web服务器软件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>它可以运行在几乎所有广泛使用的计算机平台上，由于其跨平台和安全性被广泛使用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Apache是最流行的Web服务器端软件之一</span></span></code></pre></div><h2 id="apache官网" tabindex="-1"><a href="http://www.apache.org/" target="_blank" rel="noreferrer">Apache官网</a> <a class="header-anchor" href="#apache官网" aria-label="Permalink to &quot;[Apache官网](http://www.apache.org/)&quot;">​</a></h2><h2 id="mysql" tabindex="-1">MySql <a class="header-anchor" href="#mysql" aria-label="Permalink to &quot;MySql&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>MySQL是一种开放源代码的关系型数据库管理系统</span></span>
<span class="line"><span></span></span>
<span class="line"><span>体积小，速度快，开放源码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>目前 MySQL被广泛地应用在中小型网站中</span></span></code></pre></div><h2 id="mysql官网" tabindex="-1"><a href="http://www.mysql.com/" target="_blank" rel="noreferrer">MySql官网</a> <a class="header-anchor" href="#mysql官网" aria-label="Permalink to &quot;[MySql官网](http://www.mysql.com/)&quot;">​</a></h2><h2 id="安装phpstudy" tabindex="-1">安装phpStudy <a class="header-anchor" href="#安装phpstudy" aria-label="Permalink to &quot;安装phpStudy&quot;">​</a></h2><p>1、<a href="https://www.xp.cn/" target="_blank" rel="noreferrer">phpStudy下载地址</a></p><p>2、选择Windows版本</p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_1.png" alt="img"></p><p>3、一般选择64位版本的安装包，除非系统是32位的系统</p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_2.png" alt="img"></p><p>4、打开下载好的压缩包，双击打开<code>phpstudy_x64_8.1.1.2.exe</code></p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_3.png" alt="img"></p><p>5、会弹出一个安装导向，注意的是安装路径不能有中文或者空格，可以参考图片所示</p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_4.png" alt="img"></p><p>6、安装成功后点击完成</p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_5.png" alt="img"></p><p>6、打开软件会看到一个图片所示的界面，先在这里启动需要使用软件，分别启动<code>Apache</code>和<code>MySql5.7.26</code></p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_6.png" alt="img"></p><h2 id="新建站点" tabindex="-1">新建站点 <a class="header-anchor" href="#新建站点" aria-label="Permalink to &quot;新建站点&quot;">​</a></h2><h4 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1、在新建站点根据自己的需求确认要不要创建数据库或者后面有需要再创建也可以，数据库名，用户名和密码自定义</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、同步hosts这个选项默认打勾，不要动它！不要动它！不要动它！重要的事说三遍</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3、根目录指向的要根据项目的要求指向，有些项目的指向的是public</span></span></code></pre></div><p>1、按图片所示操作，有些选项根据项目的要求来选择，前七步配置好后，先别执行图中的第8步</p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_7.png" alt="img"></p><p>2、开启目录索引，如果站点访问不到网站首页文件时会显示该站点的目录，如图操作：</p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_10.png" alt="配置图"></p><p>3、关闭创建错误页面</p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_11.png" alt="配置图"></p><p>4、创建站点完成后可以去浏览器输入新建站点的域名，测试是否能成功访问</p><h2 id="访问站点被重定向到未知网站" tabindex="-1">访问站点被重定向到未知网站 <a class="header-anchor" href="#访问站点被重定向到未知网站" aria-label="Permalink to &quot;访问站点被重定向到未知网站&quot;">​</a></h2><p>有时遇到站点不能正常访问，一般情况如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>一、站点在被重定向其他网站前都是一直能正常访问的，突然就不能访问了</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    原因：可能电脑开加速器或者代理导致站点被强制走代理的端口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    解决方法：</span></span>
<span class="line"><span>        1、把加速器或者代理软件关了或者看一下使用的这类软件有没有设置绕过代理的功能</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        2、检查一下电脑自带代理是否开启了</span></span>
<span class="line"><span>            电脑设置 -&gt; 网络与Internet -&gt; 代理 -&gt; 自动设置代理和手动设置代理 -&gt; 关闭即可</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        3、清除浏览器的历史记录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>二、站点创建完成功后不能正常访问</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    原因：hosts写入域名失败</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    解决方法：</span></span>
<span class="line"><span>        1、找到C:\\Windows\\System32\\drivers\\etc\\hosts，查看hosts文件是否有该站点的域名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        2、如果没有的就手动添加，如下：</span></span>
<span class="line"><span>            127.0.0.1   www.test.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        3、把鼠标移动到hosts文件然后右键 -&gt; 选择属性 -&gt; 常规 -&gt; 看只读属性是否打勾了，如果打勾了，请取消打勾即可</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        4、重启apache服务</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        5、清除浏览器的历史记录</span></span></code></pre></div><h2 id="配置文件-以phpstudy为准" tabindex="-1">配置文件(以phpStudy为准) <a class="header-anchor" href="#配置文件-以phpstudy为准" aria-label="Permalink to &quot;配置文件(以phpStudy为准)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// apache配置文件</span></span>
<span class="line"><span>盘符：phpstudy_pro/Extensions/Apache2.4.43/conf/httpd.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// MySQL配置文件</span></span>
<span class="line"><span>盘符：phpstudy_pro/Extensions/MySQL5.7.26/my.ini</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// php配置文件 php7.3.4nts =&gt; 版本 如果需要修改不是7.3.4，而是7.4.3，那么找到7.4.3的文件夹里面的php.ini</span></span>
<span class="line"><span>盘符：phpstudy_pro/Extensions/php/php7.3.4nts/php.ini</span></span></code></pre></div><h2 id="解决端口冲突" tabindex="-1">解决端口冲突 <a class="header-anchor" href="#解决端口冲突" aria-label="Permalink to &quot;解决端口冲突&quot;">​</a></h2><h2 id="解决端口冲突-1" tabindex="-1">解决端口冲突 <a class="header-anchor" href="#解决端口冲突-1" aria-label="Permalink to &quot;解决端口冲突&quot;">​</a></h2><p>假设某一天突然apache启动不了，提示端口被占用了，那么需要把占用的进程结束，以下教程就是何如解决端口占用</p><p>1、开始 —&gt; 运行 —&gt; <code>cmd</code> 或者 <code>window + R</code> 组合键再输入 <code>cmd</code> ,调出命令窗口</p><p>2、先查找所有运行的端口</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 该命令列出所有端口的使用情况</span></span>
<span class="line"><span>netstat -ano</span></span></code></pre></div><p>在列表中我们观察被占用的端口，比如是 80，首先找到它</p><p>3、查看被占用端口对应的 PID</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>netstat -aon | findstr &quot;80&quot;</span></span></code></pre></div><p>回车执行该命令，最后一位数字(最右)就是 PID，比如是31088，再看是什么进程在占用</p><p>4、查看指定 PID 的进程</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tasklist | findstr &quot;31088&quot;</span></span></code></pre></div><p>回车执行该命令后就会显示出来哪个进程在占用，结果是：nginx.exe</p><p>5、结束进程</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 强制（/F参数）杀死 pid 为 31088 的所有进程包括子进程（/T参数）</span></span>
<span class="line"><span>taskkill /T /F /PID 31088</span></span></code></pre></div><h2 id="phpmyadmin安装" tabindex="-1">phpMyAdmin安装 <a class="header-anchor" href="#phpmyadmin安装" aria-label="Permalink to &quot;phpMyAdmin安装&quot;">​</a></h2><h2 id="安装phpmyadmin" tabindex="-1">安装phpMyAdmin <a class="header-anchor" href="#安装phpmyadmin" aria-label="Permalink to &quot;安装phpMyAdmin&quot;">​</a></h2><p>1、打开phpstudy软件，侧边菜单找到软件管理,选择网站程序就能看到phpMyAdmin,</p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_12.png" alt="phpMyAdmin"></p><p>2、选择安装哪个站点下，自行选择</p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_13.png" alt="phpMyAdmin"></p><p>3、安装完成后，在浏览器输入刚才选择的站点域名或者如图操作：</p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_14.png" alt="phpMyAdmin"></p><p>4、选择phpMyAdmin</p><h2 id="解决登陆phpmyadmin提示-配置文件现在需要一个短语密码" tabindex="-1">解决登陆phpMyAdmin提示：配置文件现在需要一个短语密码 <a class="header-anchor" href="#解决登陆phpmyadmin提示-配置文件现在需要一个短语密码" aria-label="Permalink to &quot;解决登陆phpMyAdmin提示：配置文件现在需要一个短语密码&quot;">​</a></h2><p>在登陆phpMyAdmin后发现最下面有如下信息提示：配置文件现在需要一个短语密码</p><p>1、在 phpMyAdmin 根目录中找到一个文件 <code>config.sample.inc.php</code> 里查找到 <code>$cfg[&#39;blowfish_secret&#39;]</code> 配置项，如下修改：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 注：其中的&#39;123456′为随意的字符，至少6位</span></span>
<span class="line"><span>$cfg[&#39;blowfish_secret&#39;] = &#39;123456&#39;;</span></span></code></pre></div><p>2、找到 <code>phpMyAdmin/libraries/config.default.php</code> 里查找到 <code>$cfg[&#39;blowfish_secret&#39;]</code> 配置项，如下修改：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 注：其中的&#39;123456′为随意的字符，至少6位</span></span>
<span class="line"><span>$cfg[&#39;blowfish_secret&#39;] = &#39;123456&#39;;</span></span></code></pre></div><h2 id="php环境变量" tabindex="-1">php环境变量 <a class="header-anchor" href="#php环境变量" aria-label="Permalink to &quot;php环境变量&quot;">​</a></h2><p>有时在终端执行php的一些指令会提示跟图片所示一样</p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_15.png" alt="cmd"></p><p>原因是环境变量里面没有设置php的环境变量</p><h2 id="设置php变量" tabindex="-1">设置php变量 <a class="header-anchor" href="#设置php变量" aria-label="Permalink to &quot;设置php变量&quot;">​</a></h2><p>1、首先找到phpstudy的php文件，例如：路径为 <code>D:\\Software\\phpstudy_pro\\Extensions\\php</code></p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/php_1.png" alt="php"></p><p>这里有两个php版本，建议选择一个常用的版本来设置环境变量，这里选择php7.4.3版本</p><p>2、复制选择php版本所在的路径</p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/php_2.png" alt="php"></p><p>3、找到高级系统设置，位置如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>设置 -&gt; 系统信息 -&gt; 高级系统设置 -&gt; 选择环境变量</span></span></code></pre></div><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/php_3.png" alt="php"></p><p>4、选择系统变量 -&gt; 双击path，如图操作：</p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/php_4.png" alt="php"></p><p>然后看到确认就点击确认即可</p><p>5、先关闭之前打开终端再重新打开，测试一下是否配置成功，输入 <code>php -v</code> 如果能跟下面的图片显示一样说明配置成功了</p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/php_5.png" alt="php"></p><h2 id="navicat安装" tabindex="-1">navicat安装 <a class="header-anchor" href="#navicat安装" aria-label="Permalink to &quot;navicat安装&quot;">​</a></h2><h2 id="下载地址" tabindex="-1">下载地址 <a class="header-anchor" href="#下载地址" aria-label="Permalink to &quot;下载地址&quot;">​</a></h2><h2 id="navicat" tabindex="-1"><a href="https://www.navicat.com.cn/download/navicat-premium" target="_blank" rel="noreferrer">navicat</a> <a class="header-anchor" href="#navicat" aria-label="Permalink to &quot;[navicat](https://www.navicat.com.cn/download/navicat-premium)&quot;">​</a></h2><h2 id="安装navicat" tabindex="-1">安装Navicat <a class="header-anchor" href="#安装navicat" aria-label="Permalink to &quot;安装Navicat&quot;">​</a></h2><p>1、打开应用的安装包,会有一个安装向导，如图：</p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/navicat_1.png" alt="navicat"></p><p>2、版本许可</p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/navicat_2.png" alt="navicat"></p><p>3、安装路径，不建议安装C盘</p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/navicat_3.png" alt="navicat"></p><p>3、是否创建桌面图标，按自己需求来</p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/navicat_4.png" alt="navicat"></p><p>4、准备安装，如果没问题就点击安装即可</p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/navicat_5.png" alt="navicat"></p><h2 id="连接数据库" tabindex="-1">连接数据库 <a class="header-anchor" href="#连接数据库" aria-label="Permalink to &quot;连接数据库&quot;">​</a></h2><p>1、选择图中的连接 -&gt; 选择Mysql</p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/navicat_6.png" alt="navicat"></p><p>2、如图操作</p><p><img src="https://topmost.gitee.io/book/mdphoto/base/env/navicat_7.png" alt="navicat"></p><h2 id="无限试用脚本" tabindex="-1">无限试用脚本 <a class="header-anchor" href="#无限试用脚本" aria-label="Permalink to &quot;无限试用脚本&quot;">​</a></h2><p>由于这款软件是需要购买的，免费试用14天，试用期过就需要购买才能试用了，但是这里提供一个方法可以达到免费试用的效果。就是删除注册表的记录，这里提供脚本</p><p>1、首先新建一个<code>bat</code>的文件，命名自定义</p><p>2、把下面的代码复制到新建文件里</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@echo off</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo Delete HKEY_CURRENT_USER\\Software\\PremiumSoft\\NavicatPremium\\Registration[version and language]</span></span>
<span class="line"><span>for /f %%i in (&#39;&quot;REG QUERY &quot;HKEY_CURRENT_USER\\Software\\PremiumSoft\\NavicatPremium&quot; /s | findstr /L Registration&quot;&#39;) do (</span></span>
<span class="line"><span>    reg delete %%i /va /f</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>echo.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo Delete Info folder under HKEY_CURRENT_USER\\Software\\Classes\\CLSID</span></span>
<span class="line"><span>for /f %%i in (&#39;&quot;REG QUERY &quot;HKEY_CURRENT_USER\\Software\\Classes\\CLSID&quot; /s | findstr /E Info&quot;&#39;) do (</span></span>
<span class="line"><span>    reg delete %%i /va /f</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>echo.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo Finish</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pause</span></span></code></pre></div><p>3、双击打开，等待提示以下内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Finish</span></span>
<span class="line"><span>请按任意键继续. . .</span></span></code></pre></div><p>4、随便在键盘按一个键，命令窗就会关闭</p><p>5、打开软件查看试用期是否回到可用14天</p>`,118),i=[t];function o(l,h,c,d,r,g){return p(),s("div",null,i)}const b=a(e,[["render",o]]);export{u as __pageData,b as default};
