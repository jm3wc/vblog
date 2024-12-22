import{_ as p,c as e,m as s,a,t as l,a2 as n,o as t}from"./chunks/framework.CSGcjqEA.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"小程序.md","filePath":"小程序.md"}'),i={name:"小程序.md"},o=n(`<h2 id="快速入门" tabindex="-1">快速入门 <a class="header-anchor" href="#快速入门" aria-label="Permalink to &quot;快速入门&quot;">​</a></h2><h2 id="什么是微信小程序" tabindex="-1">什么是微信小程序 <a class="header-anchor" href="#什么是微信小程序" aria-label="Permalink to &quot;什么是微信小程序&quot;">​</a></h2><p>微信小程序，简称为<strong>小程序</strong>，英文名是<strong>Mini Program</strong>，是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或搜一下即可打开应用。用户不用关心是否安装太多应用的问题。应用将无处不在，随时可用，但又无需安装卸载。对于开发者而言，小程序开发门槛相对较低，难度不及APP，能够满足简单的基础应用，适合生活服务类线下商铺以及非刚需低频应用的转换。对于用户来说，能够节约使用时间成本和手机内存空间；对于开发者来说也能节约开发和推广成本。</p><p>微信小程序是运用最广、知名度最高的小程序，往往大家理解的小程序就是微信小程序，微信小程序也是最早公测的小程序，2017年1月9日，微信团队宣布微信小程序正式上线。</p><p>现在比较流行的有微信小程序、QQ小程序、支付宝小程序、百度小程序等。</p><h2 id="小程序设计局限性" tabindex="-1">小程序设计局限性 <a class="header-anchor" href="#小程序设计局限性" aria-label="Permalink to &quot;小程序设计局限性&quot;">​</a></h2><ul><li>数量：每个应用最多能同时打开5个页面（包含页面跳转）</li><li>大小：小程序支持不超过8M的源码文件（分包加载，单个分包不超过2M）</li><li>逻辑：过于复杂逻辑存在不可控的异常问题</li></ul><h2 id="申请小程序" tabindex="-1">申请小程序 <a class="header-anchor" href="#申请小程序" aria-label="Permalink to &quot;申请小程序&quot;">​</a></h2><p>微信小程序的注册地址和微信公众号是一样的，在微信公众平台 <a href="https://mp.weixin.qq.com/" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/</a></p><p>主体类型为企业、政府、媒体、其他组织或个人的开发者均可以申请小程序账号</p><h2 id="开发" tabindex="-1">开发 <a class="header-anchor" href="#开发" aria-label="Permalink to &quot;开发&quot;">​</a></h2><p>进入小程序后台</p><p><strong>在开发中的开发设置，记录自己的AppID，还有AppSecret也记录，最好记录在文档或者不易丢失的地方，</strong></p><p>然后下载小程序开发者工具</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>稳定版：使用较多，基本稳定</span></span>
<span class="line"><span>预发布版：通过微信内部测试，稳定性尚可</span></span>
<span class="line"><span>开发版：缺陷修复更新快，稳定性差</span></span></code></pre></div><p><img src="http://web.wdwangke.com/mdphoto/frontend/WeChat/WeChat06.png" alt="img"></p><p><strong>下载地址</strong>： <a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html" target="_blank" rel="noreferrer">https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html</a></p><p><strong>打开之后使用自己的微信扫描登录</strong></p><p><img src="http://web.wdwangke.com/mdphoto/frontend/WeChat/WeChat02.png" alt="img"></p><p><strong>登录后跳出一个项目管理的窗口，可以新增项目和导入项目，删除项目</strong></p><p><img src="http://web.wdwangke.com/mdphoto/frontend/WeChat/WeChat03.png" alt="img"></p><p><strong>新建一个项目</strong></p><p><img src="http://web.wdwangke.com/mdphoto/frontend/WeChat/WeChat04.png" alt="img"></p><p><strong>新建项目后会打开新的窗口</strong></p><p><img src="http://web.wdwangke.com/mdphoto/frontend/WeChat/WeChat05.png" alt="img"></p><p><strong>编译预览</strong></p><p>点击工具上的编译按钮，可以在工具的左侧模拟器界面看到这个小程序的表现，也可以点击预览按钮，通过微信的扫一扫在手机上体验你的第一个小程序。OK，你已经成功创建了你的第一个小程序，并且在微信客户端上体验到它流畅的表现。</p><p><strong>注意</strong></p><p>本地开发:详情-&gt;不检验合法域名.... 前面选项打勾,那么在本地开发的时候就不需要SSL证书的域名,但是配置到小程序后台就必须要配置域名的SSL证书</p><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><p>微信小程序的目录结构可以分为三个部分：框架全局文件，框架页面文件和工具类文件，结构如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>|--pages···················[目录] 存放所有的小程序页面</span></span>
<span class="line"><span> |--index··················[目录] index页面</span></span>
<span class="line"><span>   |--index.js·············[文件] index页面的逻辑</span></span>
<span class="line"><span>   |--index.json···········[文件] index页面的配置</span></span>
<span class="line"><span>   |--index.wxml···········[文件] index页面的结构</span></span>
<span class="line"><span>   |--index.wxss···········[文件] index页面的样式</span></span>
<span class="line"><span> |--logs···················[目录] logs页面</span></span>
<span class="line"><span>   |--logs.js··············[文件] logs页面的逻辑</span></span>
<span class="line"><span>   |--logs.json············[文件] logs页面的配置</span></span>
<span class="line"><span>   |--logs.wxml············[文件] logs页面的结构</span></span>
<span class="line"><span>   |--logs.wxss············[文件] logs页面的样式</span></span>
<span class="line"><span>|--utils···················[目录] 存放小程序中用到的工具函数</span></span>
<span class="line"><span>|--app.js··················[文件] 小程序的全局逻辑</span></span>
<span class="line"><span>|--app.json················[文件] 小程序的全局公共配置</span></span>
<span class="line"><span>|--app.wxss················[文件] 小程序的全局公共样式</span></span>
<span class="line"><span>|--project.config.json·····[文件]    开发工具文件</span></span>
<span class="line"><span>|--sitemap.json············[文件] 索引配置</span></span></code></pre></div><h2 id="框架全局文件" tabindex="-1">框架全局文件 <a class="header-anchor" href="#框架全局文件" aria-label="Permalink to &quot;框架全局文件&quot;">​</a></h2><p>一个小程序的主体部分由3个文件组成，作为全局文件，必须放在项目的根目录中，框架全局文件包括3个文件；app.js小程序逻辑(定义全</p><p>局数据以及定义函数文件)，app.json小程序公共设置，app.wxss小程序公共样式表。它们对所有页面都有效。</p><p><strong>1.app.js小程序逻辑</strong></p><p>整个微信小程序相关的全局js，这里有监听整个小程序的生命周期函数和全局变量；</p><p><strong>2.app.json小程序公共设置</strong></p><p>是对整个小程序的静态全局配置，我们可以在这个文件中配置小程序是由哪些页面组成（路由），配置小程序的窗口背景色、配置导航条样式，配置默认标题，可以配置整个项目的样式，超时时间，加载的插件等等；(注意该文件不可添加任何注释)；</p><p><strong>3.app.wxss文件小程序公共样式表</strong></p><p>整个小程序的样式文件，我个人认为这个文件就是设置整个项目的css文件。针对每个页面的css文件的内容不同，加载到对应页面的css样式时，当前页面的wxss文件会覆盖app.wxss文件（跟普通的css样式的覆盖规则类似）。</p><p><strong>4.project.config.json 开发工具文件</strong></p><p>这个其实是每个开发者工具生成的项目都有的，但和项目内容实际没有特别大关联，主要是记录相关工具的配置的，在工具上做的任何配置都会写入到这个文件，当重新安装工具或者换电脑工作时，只要载入同一个项目的代码包，开发者工具就自动会帮你恢复到当时你开发项目时的个性化配置，其中会包括编辑器的颜色、代码上传时自动压缩等等一系列选项。</p><p><strong>5.sitemap.json 索引文件</strong></p><p>这个可以配置是否允许被微信索引，具体看微信官方文档-sitemap 配置</p><h2 id="工具类文件" tabindex="-1">工具类文件 <a class="header-anchor" href="#工具类文件" aria-label="Permalink to &quot;工具类文件&quot;">​</a></h2><p><strong>utils目录</strong></p><p>这里面存的都是一些公用的js，就当作web后端项目的工具类就好啦，提供公共方法减少冗余和维护难度的；</p><h2 id="框架页面文件" tabindex="-1">框架页面文件 <a class="header-anchor" href="#框架页面文件" aria-label="Permalink to &quot;框架页面文件&quot;">​</a></h2><p>这个目录下放的其实就是一个个的微信端的页面了其中的index文件夹、logs文件夹其实都是单独的页面；小程序一个页面由四个文件组成，分别是：</p><table><thead><tr><th style="text-align:left;">文件类型</th><th style="text-align:left;">必需</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">js</td><td style="text-align:left;">是</td><td style="text-align:left;">页面逻辑</td></tr><tr><td style="text-align:left;">wxml</td><td style="text-align:left;">是</td><td style="text-align:left;">页面结构</td></tr><tr><td style="text-align:left;">json</td><td style="text-align:left;">否</td><td style="text-align:left;">页面配置</td></tr><tr><td style="text-align:left;">wxss</td><td style="text-align:left;">否</td><td style="text-align:left;">页面样式表</td></tr></tbody></table><p><strong>注意：为了方便开发者减少配置项，描述页面的四个文件必须具有相同的路径与文件名。</strong></p><h2 id="允许上传的文件" tabindex="-1">允许上传的文件 <a class="header-anchor" href="#允许上传的文件" aria-label="Permalink to &quot;允许上传的文件&quot;">​</a></h2><p>在项目目录中，以下文件会经过编译，因此上传之后无法直接访问到：<em>.js、app.json、</em>.wxml、*.wxss（其中 wxml 和 wxss 文件仅针对在 app.json 中配置了的页面）。除此之外，只有后缀名在白名单内的文件可以被上传，不在白名单列表内文件在开发工具能被访问到，但无法被上传。具体白名单列表如下：</p><ol><li>wxs</li><li>png</li><li>jpg</li><li>jpeg</li><li>gif</li><li>svg</li><li>json</li><li>cer</li><li>mp3</li><li>aac</li><li>m4a</li><li>mp4</li><li>wav</li><li>ogg</li><li>silk</li><li>wasm</li><li>br</li></ol><h2 id="小程序配置" tabindex="-1">小程序配置 <a class="header-anchor" href="#小程序配置" aria-label="Permalink to &quot;小程序配置&quot;">​</a></h2><p>小程序配置可以分为三种，分别是：全局配置，页面配置，sitemap配置</p><h3 id="全局配置" tabindex="-1">全局配置 <a class="header-anchor" href="#全局配置" aria-label="Permalink to &quot;全局配置&quot;">​</a></h3><p>项目根目录下的<strong>app.json</strong>文件用来对微信到小程序进行全局配置。文件内容为一个JSON对象。app.json文件结构如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 注意：在app.json文件不能写注释，这是刚创建的小程序项目的app.json文件的结构</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;pages&quot;:[</span></span>
<span class="line"><span>    &quot;pages/index/index&quot;,</span></span>
<span class="line"><span>    &quot;pages/logs/logs&quot;</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;window&quot;:{</span></span>
<span class="line"><span>    &quot;backgroundTextStyle&quot;:&quot;light&quot;,</span></span>
<span class="line"><span>    &quot;navigationBarBackgroundColor&quot;: &quot;#fff&quot;,</span></span>
<span class="line"><span>    &quot;navigationBarTitleText&quot;: &quot;Weixin&quot;,</span></span>
<span class="line"><span>    &quot;navigationBarTextStyle&quot;:&quot;black&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;style&quot;: &quot;v2&quot;,</span></span>
<span class="line"><span>  &quot;sitemapLocation&quot;: &quot;sitemap.json&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="pages" tabindex="-1">pages <a class="header-anchor" href="#pages" aria-label="Permalink to &quot;pages&quot;">​</a></h5><p>在app.json文件的pages节点上新建或减少页面,如果要新建页面，可以在pages节点上新增页面会比视图操作更方便，在[]里面写&quot;pages/要创建文件夹名字/要创建文件名字&quot;。如果新建的页面放在第一个位置，它创建文件并且编译，pages 数组中第一个页面路径，就是小程序项目的默认首页，修改 pages 数组中路径的顺序（放在第一位的就会默认为首页），即可修改小程序的默认首页所以模拟器也显示该页面。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;pages&quot;:[</span></span>
<span class="line"><span>        &quot;pages/要创建文件夹名字/要创建文件名字&quot;,</span></span>
<span class="line"><span>        &quot;pages/index/index&quot;,</span></span>
<span class="line"><span>        &quot;pages/test/test&quot;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="window" tabindex="-1">window <a class="header-anchor" href="#window" aria-label="Permalink to &quot;window&quot;">​</a></h5><p>用于设置小程序的状态栏、导航条、标题、窗口背景色。</p><h6 id="样式属性" tabindex="-1">样式属性 <a class="header-anchor" href="#样式属性" aria-label="Permalink to &quot;样式属性&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;window&quot;:{</span></span>
<span class="line"><span>        &quot;navigationBarBackgroundColor&quot;: &quot;#ffffff&quot;,// 导航栏背景颜色，</span></span>
<span class="line"><span>        &quot;navigationBarTextStyle&quot;: &quot;black&quot;,// 导航栏标题颜色，仅支持 \`black\` / \`white\`</span></span>
<span class="line"><span>        &quot;navigationBarTitleText&quot;: &quot;微信接口功能演示&quot;,// 导航栏标题文字内容</span></span>
<span class="line"><span>        &quot;backgroundColor&quot;: &quot;#eeeeee&quot;,// 窗口的背景色</span></span>
<span class="line"><span>        &quot;backgroundTextStyle&quot;: &quot;light&quot; // 下拉loading的样式</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 注 1：HexColor（十六进制颜色值），如&quot;#ff00ff&quot;</span></span>
<span class="line"><span>// 注 2：关于navigationStyle</span></span>
<span class="line"><span>// iOS/Android 客户端 7.0.0 以下版本，navigationStyle 只在 app.json 中生效。</span></span>
<span class="line"><span>// iOS/Android 客户端 6.7.2 版本开始，navigationStyle: custom 对 web-view 组件无效</span></span>
<span class="line"><span>// 开启 custom 后，低版本客户端需要做好兼容。开发者工具基础库版本切到 1.7.0（不代表最低版本，只供调试用）可方便切到旧视觉</span></span>
<span class="line"><span>// Windows 客户端 3.0 及以上版本，为了给用户提供更符合桌面软件的使用体验，统一了小程序窗口的导航栏，navigationStyle: custom 不再生效</span></span></code></pre></div><h5 id="tabbar" tabindex="-1">tabBar <a class="header-anchor" href="#tabbar" aria-label="Permalink to &quot;tabBar&quot;">​</a></h5><p>如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。</p><p>其中list是一个数组，<strong>只能配置最少 2 个、最多 5 个 tab</strong>。tab 按数组的顺序排序，每个项都是一个对象，其属性值如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;tabBar&quot;:{</span></span>
<span class="line"><span>        &quot;color&quot;: &quot;#a9b7b7&quot;,</span></span>
<span class="line"><span>        &quot;selectedColor&quot;: &quot;#11cd6e&quot;,</span></span>
<span class="line"><span>        &quot;borderStyle&quot;: &quot;black&quot;,</span></span>
<span class="line"><span>        &quot;list&quot;:[</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;pagePath&quot;: &quot;pages/index/index&quot;,</span></span>
<span class="line"><span>                &quot;text&quot;: &quot;首页&quot;,</span></span>
<span class="line"><span>                &quot;iconPath&quot;: &quot;images/tab/home.png&quot;,</span></span>
<span class="line"><span>                 &quot;selectedIconPath&quot;: &quot;/images/tab/home_1.png&quot;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;pagePath&quot;: &quot;pages/new/new&quot;,</span></span>
<span class="line"><span>                &quot;text&quot;: &quot;新闻&quot;,</span></span>
<span class="line"><span>                &quot;iconPath&quot;: &quot;images/tab/new.png&quot;,</span></span>
<span class="line"><span>                 &quot;selectedIconPath&quot;: &quot;/images/tab/new_1.png&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="页面配置" tabindex="-1">页面配置 <a class="header-anchor" href="#页面配置" aria-label="Permalink to &quot;页面配置&quot;">​</a></h3><p>每一个小程序页面也可以使用 .json 文件来对本页面的窗口表现进行配置。页面中配置项在当前页面会覆盖 app.json 的 window 中相同的配置项。文件内容为一个 JSON 对象，有以下属性</p><h5 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;navigationBarBackgroundColor&quot;: &quot;#ff4001&quot;, //导航栏背景颜色</span></span>
<span class="line"><span>  &quot;navigationBarTextStyle&quot;: &quot;white&quot;, //导航栏标题颜色，仅支持 black / white</span></span>
<span class="line"><span>  &quot;navigationBarTitleText&quot;: &quot;购物车&quot;, //导航栏标题文字内容</span></span>
<span class="line"><span>  &quot;backgroundColorTop&quot;: &quot;#efefef&quot;, //窗口的背景色</span></span>
<span class="line"><span>  &quot;backgroundTextStyle&quot;: &quot;light&quot;, //下拉 loading 的样式，仅支持 dark / light</span></span>
<span class="line"><span>  &quot;enablePullDownRefresh&quot;: true,//是否开启当前页面下拉刷新。</span></span>
<span class="line"><span>  &quot;onReachBottomDistance&quot;: 50, //页面上拉触底事件触发时距页面底部距离，单位为px。</span></span>
<span class="line"><span>  &quot;disableScroll&quot;: false, //设置为 true 则页面整体不能上下滚动。只在页面配置中有效，无法在 app.json 中设置</span></span>
<span class="line"><span>  &quot;usingComponents&quot;: { //页面自定义组件配置</span></span>
<span class="line"><span>    &quot;prolist&quot;: &quot;/components/prolist/prolist&quot; //组件路径</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="sitemap-配置" tabindex="-1">sitemap 配置 <a class="header-anchor" href="#sitemap-配置" aria-label="Permalink to &quot;sitemap 配置&quot;">​</a></h2><p>小程序根目录下的 <code>sitemap.json</code> 文件用于配置小程序及其页面是否允许被微信索引，文件内容为一个 JSON 对象，如果没有 <code>sitemap.json</code> ，则默认为所有页面都允许被索引。</p><p><a href="https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/sitemap.html" target="_blank" rel="noreferrer"><strong>小程序官方sitemap.json配置</strong></a></p><h3 id="了解更多请点击下面链接" tabindex="-1">了解更多请点击下面链接 <a class="header-anchor" href="#了解更多请点击下面链接" aria-label="Permalink to &quot;了解更多请点击下面链接&quot;">​</a></h3><h3 id="小程序官方文档" tabindex="-1"><a href="https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html" target="_blank" rel="noreferrer">小程序官方文档</a> <a class="header-anchor" href="#小程序官方文档" aria-label="Permalink to &quot;[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html)&quot;">​</a></h3><h2 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h2><h4 id="什么是生命周期" tabindex="-1">什么是生命周期 <a class="header-anchor" href="#什么是生命周期" aria-label="Permalink to &quot;什么是生命周期&quot;">​</a></h4><p>生命周期是指一个小程序从创建到销毁的一个过程。小程序的生命周期有两种；分别是应用生命周期，页面的生命周期。有时会把应用的生命周期和页面的生命周期混淆为一起，这两个其实应该是不同却又相互关联的生命周期</p><h5 id="小程序启动流程" tabindex="-1">小程序启动流程 <a class="header-anchor" href="#小程序启动流程" aria-label="Permalink to &quot;小程序启动流程&quot;">​</a></h5><p><img src="http://web.wdwangke.com/mdphoto/frontend/WeChat/WeChat07.png" alt="img"></p><h5 id="应用的生命周期函数" tabindex="-1">应用的生命周期函数 <a class="header-anchor" href="#应用的生命周期函数" aria-label="Permalink to &quot;应用的生命周期函数&quot;">​</a></h5><p>首先小程序的生命周期函数是在<code>app.js</code>里面调用的，<code>APP(Object)</code>函数用来注册一个小程序。接受一个<code>Object</code>参数，指定其小程序的生命周期回调；在注册实例时，通常可以做以下事情：</p><p>1.判断小程序的进入场景</p><p>2.监听生命周期函数，在生命周期中执行对应的业务逻辑，比如在某个生命周期函数中获取微信用户的信息。</p><p>3.因为App()实例只有一个，并且时全局共享的(单例对象)。所以可以将一些共享数据放在其中的globalData节点中</p><p><a href="https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html" target="_blank" rel="noreferrer"><strong>更多应用生命周期函数</strong></a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>App({</span></span>
<span class="line"><span>    // 应用第一次启动就会触发事件</span></span>
<span class="line"><span>    onLaunch:function(options){</span></span>
<span class="line"><span>        // 在应用第一次启动的时候 获取个人信息</span></span>
<span class="line"><span>        console.log(&quot;onLaunch&quot;)</span></span>
<span class="line"><span>        console.log(options)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 应用被用户看到</span></span>
<span class="line"><span>    onShow:function(){</span></span>
<span class="line"><span>        // 小程序启动，或从后台进入前台显示时触发</span></span>
<span class="line"><span>        console.log(&quot;onShow&quot;)</span></span>
<span class="line"><span>    }，</span></span>
<span class="line"><span>    // 应用被隐藏</span></span>
<span class="line"><span>    onHide:function(){</span></span>
<span class="line"><span>        // 小程序被切换到后台（包括微信自身被切换到后台或者小程序暂时被切换到后台）</span></span>
<span class="line"><span>        console.log(&quot;onHide&quot;)</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    // 应用的代码发生了错误的时候就会触发</span></span>
<span class="line"><span>    onError:function(msg){</span></span>
<span class="line"><span>        // 在应用发生代码报错的时候,收集用户的错误信息,通过异步请求将错误的信息发送到后台</span></span>
<span class="line"><span>        console.log(msg)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 页面找不到就会触发 应用第一次启动的时候,如果找不到第一个入口页面,才会触发。如果在小程序里面使用wx.navigateTo等路由Api进行页面跳转，如果页面不存在只会报错，并不会触发onPageNotFound</span></span>
<span class="line"><span>    onPageNotFound:function(res){</span></span>
<span class="line"><span>        wx.redirectTo({</span></span>
<span class="line"><span>              url: &#39;pages/...&#39;,</span></span>
<span class="line"><span>        })  // 如果是 tabbar 页面，请使用 wx.switchTab</span></span>
<span class="line"><span>        console.log(&quot;onPageNotFound&quot;)</span></span>
<span class="line"><span>        console.log(res)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span></code></pre></div><h5 id="页面的生命周期函数" tabindex="-1">页面的生命周期函数 <a class="header-anchor" href="#页面的生命周期函数" aria-label="Permalink to &quot;页面的生命周期函数&quot;">​</a></h5><p>注册小程序中的一个页面。接受一个 <code>Object</code> 类型参数，其指定页面的初始数据、生命周期回调、事件处理函数等。</p><p><a href="https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html" target="_blank" rel="noreferrer"><strong>更多页面的生命周期的函数</strong></a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Page({</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>    * 生命周期函数--监听页面加载</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>   onLoad: function (options) {</span></span>
<span class="line"><span>        // 发送异步请求 初始化页面数据</span></span>
<span class="line"><span>          console.log(options);</span></span>
<span class="line"><span>          console.log(111)</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>    * 生命周期函数--监听页面显示</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>   onShow: function () {</span></span>
<span class="line"><span>     console.log(&quot;onShow&quot;);</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>    * 生命周期函数--监听页面初次渲染完成</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>   onReady: function () {</span></span>
<span class="line"><span>     console.log(&quot;onReady&quot;);</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>    * 生命周期函数--监听页面隐藏</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>   onHide: function () {</span></span>
<span class="line"><span>     console.log(&quot;onHide&quot;);</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>    * 生命周期函数--监听页面卸载</span></span>
<span class="line"><span>    * 页面被关闭的时候，与上一个同理，如果是页面跳转，并且被关闭就算作卸载，会被触发</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>   onUnload: function () {</span></span>
<span class="line"><span>     console.log(&quot;onUnload&quot;);</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>    * 页面相关事件处理函数--监听用户下拉动作</span></span>
<span class="line"><span>    * 需要开启页面下拉功能  &quot;enablePullDownRefresh&quot;: true</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>   onPullDownRefresh: function () {</span></span>
<span class="line"><span>     console.log(&quot;onPullDownRefresh&quot;);</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>    * 页面上拉触底事件的处理函数</span></span>
<span class="line"><span>    * 页面高度不够就不存在这个问题</span></span>
<span class="line"><span>    * 可用于上拉加载下一页数据</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>   onReachBottom: function () {</span></span>
<span class="line"><span>     console.log(&quot;onReachBottom&quot;);</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>    * 用户点击右上角转发</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>   onShareAppMessage: function () {</span></span>
<span class="line"><span>     console.log(&quot;onShareAppMessage&quot;);</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>    * 用户点击右上角转发到朋友圈</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>   onShareTimeline: function(){</span></span>
<span class="line"><span>     console.log(&quot;onShareTimeline&quot;)</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>    * 用户点击右上角收藏</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>   onAddToFavorites:function(){</span></span>
<span class="line"><span>     console.log(&quot;onAddToFavorites&quot;)</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>    * 页面滚动时触发</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>   onPageScroll: function () {</span></span>
<span class="line"><span>     console.log(&quot;onPageScroll&quot;);</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>    * 页面尺寸发生改变时触发</span></span>
<span class="line"><span>    * 手机页面一般不会改变，大部分情况是手机发生了横屏竖屏切换时触发</span></span>
<span class="line"><span>    * 横屏切换需要添加&quot;pageOrientation&quot;:&quot;auto&quot;配置</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>   onResize: function () {</span></span>
<span class="line"><span>     console.log(&quot;onResize&quot;);</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>   * 当前是 tab ⻚时，点击 tab 时触发</span></span>
<span class="line"><span>   * 只存在于tabbar页面上 即当前页面必须是tabbar页面，同时点击自己的tabitem才会触发</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>   onTabItemTap: function () {</span></span>
<span class="line"><span>     console.log(&quot;onTabItemTap&quot;);</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="wxml语法" tabindex="-1">WXML语法 <a class="header-anchor" href="#wxml语法" aria-label="Permalink to &quot;WXML语法&quot;">​</a></h2><p>在开发PC端或者移动端的页面，一般都是用的是HTML构建页面的结构，但是在微信小程序这里就不一样了，这里有一套标记语言专门给微信小程序构建页面,它就是WXML（WeiXin Markup Language），WXML（WeiXin Markup Language）是框架设计的一套标签语言，结合<a href="https://developers.weixin.qq.com/miniprogram/dev/component/index.html" target="_blank" rel="noreferrer">基础组件</a>、<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html" target="_blank" rel="noreferrer">事件系统</a>，可以构建出小程序的页面的结构。</p><h2 id="基本语法" tabindex="-1">基本语法 <a class="header-anchor" href="#基本语法" aria-label="Permalink to &quot;基本语法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!--  index.wxml  页面结构</span></span>
<span class="line"><span>      跟HTML标签语法的类似，有成对标签：&lt;view&gt;&lt;/view&gt;...，也有单标签：&lt;input /&gt;...</span></span>
<span class="line"><span>      wxml的有些标签跟HTML的一样</span></span>
<span class="line"><span>--&gt;</span></span>
<span class="line"><span>&lt;view class=&quot;test&quot;&gt;</span></span>
<span class="line"><span> {{message}}</span></span>
<span class="line"><span>  &lt;view class=&quot;demo&quot;&gt;该标签跟HTML的div标签作用一样&lt;/view&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;text&quot; maxlength=&quot;10&quot; placeholder=&quot;请输入文字&quot;/&gt;</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span>/**  index.wxss   样式表</span></span>
<span class="line"><span>      它的语法跟css的语法很像</span></span>
<span class="line"><span>**/</span></span>
<span class="line"><span>.test{</span></span>
<span class="line"><span>  color: red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.demo{</span></span>
<span class="line"><span>  color: green;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/** index.js  逻辑</span></span>
<span class="line"><span>    它的语法跟JavaScript的语法一样</span></span>
<span class="line"><span>**/</span></span>
<span class="line"><span>Page({</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>        msg: &#39;Holle Word&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="数据绑定" tabindex="-1">数据绑定 <a class="header-anchor" href="#数据绑定" aria-label="Permalink to &quot;数据绑定&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!--wxml--&gt;</span></span>
<span class="line"><span>&lt;!-- </span></span>
<span class="line"><span>    变量名是大小写敏感的，也就是说 {{name}} 和 {{NAME}} 是两个不同的变量。</span></span>
<span class="line"><span>    注： {{}} 叫做Mustache 语法。</span></span>
<span class="line"><span>        {{}} 具有两种功能：动态渲染、逻辑运算。</span></span>
<span class="line"><span>        {{}} 中除了变量名，还可以放置数字、字符串，并且做一些逻辑运算：算数运算、字符串拼接、三元运算</span></span>
<span class="line"><span>--&gt;</span></span>
<span class="line"><span>&lt;view&gt;{{message}}&lt;/view&gt;</span></span>
<span class="line"><span>// page.js</span></span>
<span class="line"><span>Page({</span></span>
<span class="line"><span>  data: {</span></span>
<span class="line"><span>    message: &#39;Hello MINA!&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h5 id="组件属性-需要在双引号之内" tabindex="-1">组件属性(需要在双引号之内) <a class="header-anchor" href="#组件属性-需要在双引号之内" aria-label="Permalink to &quot;组件属性(需要在双引号之内)&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- wxml --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;view id=&quot;item-{{id}}&quot;&gt; &lt;/view&gt;</span></span>
<span class="line"><span>/** js **/</span></span>
<span class="line"><span>Pages({</span></span>
<span class="line"><span>    data:{</span></span>
<span class="line"><span>        id:1</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h5 id="控制属性-需要在双引号之内" tabindex="-1">控制属性(需要在双引号之内) <a class="header-anchor" href="#控制属性-需要在双引号之内" aria-label="Permalink to &quot;控制属性(需要在双引号之内)&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- wxml --&gt;</span></span>
<span class="line"><span>&lt;view wx:if=&quot;{{condition}}&quot;&gt;Hello Word&lt;/view&gt;</span></span>
<span class="line"><span>/** js **/</span></span>
<span class="line"><span>Pages({</span></span>
<span class="line"><span>    data:{</span></span>
<span class="line"><span>        condition:false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h5 id="关键字-需要在双引号之内" tabindex="-1">关键字(需要在双引号之内) <a class="header-anchor" href="#关键字-需要在双引号之内" aria-label="Permalink to &quot;关键字(需要在双引号之内)&quot;">​</a></h5><p><code>true</code>：boolean 类型的 true，代表真值。</p><p><code>false</code>： boolean 类型的 false，代表假值。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- wxml </span></span>
<span class="line"><span>    特别注意：不要直接写 checked=&quot;false&quot;，其计算结果是一个字符串，转成 boolean 类型后代表真值。</span></span>
<span class="line"><span>--&gt;</span></span>
<span class="line"><span>&lt;checkbox checked=&quot;{{true}}&quot;&gt; &lt;/checkbox&gt;</span></span></code></pre></div><h5 id="运算" tabindex="-1">运算 <a class="header-anchor" href="#运算" aria-label="Permalink to &quot;运算&quot;">​</a></h5>`,111),c=n(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;view hidden=&quot;{{flag ? true : false}}&quot;&gt; Hidden &lt;/view&gt;</span></span></code></pre></div><h5 id="算数运算" tabindex="-1">算数运算 <a class="header-anchor" href="#算数运算" aria-label="Permalink to &quot;算数运算&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- wxml --&gt;</span></span>
<span class="line"><span>&lt;view&gt; {{a + b}} + {{c}} + d &lt;/view&gt;</span></span>
<span class="line"><span>/** js **/</span></span>
<span class="line"><span>Pages({</span></span>
<span class="line"><span>    data:{</span></span>
<span class="line"><span>        a:1,</span></span>
<span class="line"><span>        b:2,</span></span>
<span class="line"><span>        c:3,</span></span>
<span class="line"><span>        d:4</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h5 id="逻辑判断" tabindex="-1">逻辑判断 <a class="header-anchor" href="#逻辑判断" aria-label="Permalink to &quot;逻辑判断&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- wxml --&gt;</span></span>
<span class="line"><span>&lt;view wx:if=&quot;{{length &gt; 5}}&quot;&gt;test&lt;/view&gt;</span></span>
<span class="line"><span>/** js **/</span></span>
<span class="line"><span>Pages({</span></span>
<span class="line"><span>    data:{</span></span>
<span class="line"><span>       length:6</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h5 id="字符串运算" tabindex="-1">字符串运算 <a class="header-anchor" href="#字符串运算" aria-label="Permalink to &quot;字符串运算&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- wxml --&gt;</span></span>
<span class="line"><span>&lt;view&gt;{{&quot;hello &quot; + name}}&lt;/view&gt;</span></span>
<span class="line"><span>/** js **/</span></span>
<span class="line"><span>Pages({</span></span>
<span class="line"><span>    data:{</span></span>
<span class="line"><span>       name:&#39;word&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h5 id="数据路径运算" tabindex="-1">数据路径运算 <a class="header-anchor" href="#数据路径运算" aria-label="Permalink to &quot;数据路径运算&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- wxml </span></span>
<span class="line"><span>    注意：由于语法问题，复制下面代码片段要把空格去掉</span></span>
<span class="line"><span>--&gt;</span></span>
<span class="line"><span>&lt;view&gt;{{object.key}} {{array[0]}}&lt;/view&gt;</span></span>
<span class="line"><span>&lt;!-- 组合 --&gt;</span></span>
<span class="line"><span>&lt;view wx:for=&quot;{{[zero, 1, 2, 3, 4]}}&quot;&gt; {{item}} &lt;/view&gt;</span></span>
<span class="line"><span>/** js **/</span></span>
<span class="line"><span>Pages({</span></span>
<span class="line"><span>    data:{</span></span>
<span class="line"><span>       object: {</span></span>
<span class="line"><span>          key: &#39;Hello &#39;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        array: [&#39;word&#39;],</span></span>
<span class="line"><span>        zero: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><a href="https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/data.html" target="_blank" rel="noreferrer"><strong>更多关于数据绑定</strong></a></p><h2 id="列表渲染" tabindex="-1">列表渲染 <a class="header-anchor" href="#列表渲染" aria-label="Permalink to &quot;列表渲染&quot;">​</a></h2><h5 id="wx-for" tabindex="-1">wx:for <a class="header-anchor" href="#wx-for" aria-label="Permalink to &quot;wx:for&quot;">​</a></h5><p>在组件上使用 <code>wx:for</code> 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。</p><p>默认数组的当前项的下标变量名默认为 <code>index</code>，数组当前项的变量名默认为 <code>item</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- wxml --&gt;</span></span>
<span class="line"><span>&lt;view wx:for=&quot;{{array}}&quot;&gt;</span></span>
<span class="line"><span>  {{index}}: {{item.message}}</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- </span></span>
<span class="line"><span>    使用 wx:for-item 可以指定数组当前元素的变量名，</span></span>
<span class="line"><span>    使用 wx:for-index 可以指定数组当前下标的变量名：</span></span>
<span class="line"><span>--&gt;</span></span>
<span class="line"><span>&lt;view wx:for=&quot;{{array}}&quot; wx:for-index=&quot;idx&quot; wx:for-item=&quot;itemName&quot;&gt;</span></span>
<span class="line"><span>  {{idx}}: {{itemName.message}}</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- </span></span>
<span class="line"><span>    \`wx:key\` 的值以两种形式提供</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    1. 字符串，代表在 for 循环的 array 中 item 的某个 property，该 property 的值需要是列表中唯一的字符串或数字，且不能动态改变。</span></span>
<span class="line"><span>    2. 保留关键字 \`this\` 代表在 for 循环中的 item 本身，这种表示需要 item 本身是一个唯一的字符串或者数字。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    当数据改变触发渲染层重新渲染的时候，会校正带有 key 的组件，框架会确保他们被重新排序，而不是重新创建，以确保使组件保持自身的状态，并且提高列表渲染时的效率。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    如不提供wx:key，会报一个warning， 如果明确知道该列表是静态，或者不必关注其顺序，可以选择忽略。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--&gt;</span></span>
<span class="line"><span>&lt;view wx:for=&quot;{{array}}&quot; wx:key=&quot;key&quot; wx:for-item=&quot;itemName&quot;&gt;</span></span>
<span class="line"><span>  {{itemName.message}}</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span>/** js **/</span></span>
<span class="line"><span>Pages({</span></span>
<span class="line"><span>    data:{</span></span>
<span class="line"><span>        array: [{</span></span>
<span class="line"><span>          message: &#39;foo&#39;,</span></span>
<span class="line"><span>        }, {</span></span>
<span class="line"><span>          message: &#39;bar&#39;</span></span>
<span class="line"><span>        }]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h5 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h5><p>当 <code>wx:for</code> 的值为字符串时，会将字符串解析成字符串数组</p><p>花括号和引号之间如果有空格，将最终被解析成为字符串</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;view wx:for=&quot;array&quot;&gt;</span></span>
<span class="line"><span>  {{item}}</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;view wx:for=&quot;{{[1,2,3]}} &quot;&gt;</span></span>
<span class="line"><span>  {{item}}</span></span>
<span class="line"><span>&lt;/view&gt;</span></span></code></pre></div><h2 id="条件渲染" tabindex="-1">条件渲染 <a class="header-anchor" href="#条件渲染" aria-label="Permalink to &quot;条件渲染&quot;">​</a></h2><h5 id="wx-if" tabindex="-1">wx:if <a class="header-anchor" href="#wx-if" aria-label="Permalink to &quot;wx:if&quot;">​</a></h5><p>在框架中，使用 <code>wx:if=&quot;&quot;</code> 来判断是否需要渲染该代码块：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- wxml --&gt;</span></span>
<span class="line"><span>&lt;view wx:if=&quot;{{condition}}&quot;&gt;Hello Word&lt;/view&gt;</span></span></code></pre></div><p>也可以用 <code>wx:elif</code> 和 <code>wx:else</code> 来添加一个 else 块：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;view wx:if=&quot;{{length &gt; 5}}&quot;&gt; 1 &lt;/view&gt;</span></span>
<span class="line"><span>&lt;view wx:elif=&quot;{{length &gt; 2}}&quot;&gt; 2 &lt;/view&gt;</span></span>
<span class="line"><span>&lt;view wx:else&gt; 3 &lt;/view&gt;</span></span>
<span class="line"><span>/** js **/</span></span>
<span class="line"><span>Pages({</span></span>
<span class="line"><span>    data:{</span></span>
<span class="line"><span>        condition:false,</span></span>
<span class="line"><span>        length:4</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h5 id="wx-if-vs-hidden" tabindex="-1"><code>wx:if</code> vs <code>hidden</code> <a class="header-anchor" href="#wx-if-vs-hidden" aria-label="Permalink to &quot;\`wx:if\` vs \`hidden\`&quot;">​</a></h5><p>因为 <code>wx:if</code> 之中的模板也可能包含数据绑定，所以当 <code>wx:if</code> 的条件值切换时，框架有一个局部渲染的过程，因为它会确保条件块在切换时销毁或重新渲染。</p><p>同时 <code>wx:if</code> 也是<strong>惰性的</strong>，如果在初始渲染条件为 <code>false</code>，框架什么也不做，在条件第一次变成真的时候才开始局部渲染。</p><p>相比之下，<code>hidden</code> 就简单的多，组件始终会被渲染，只是简单的控制显示与隐藏。</p><p>一般来说，<code>wx:if</code> 有更高的切换消耗而 <code>hidden</code> 有更高的初始渲染消耗。因此，如果需要频繁切换的情景下，用 <code>hidden</code> 更好，如果在运行时条件不大可能改变则 <code>wx:if</code> 较好。</p><h2 id="模板" tabindex="-1">模板 <a class="header-anchor" href="#模板" aria-label="Permalink to &quot;模板&quot;">​</a></h2><p>WXML提供模板（template），可以在模板中定义代码片段，然后在不同的地方调用。</p><h5 id="定义模板" tabindex="-1">定义模板 <a class="header-anchor" href="#定义模板" aria-label="Permalink to &quot;定义模板&quot;">​</a></h5><p>使用 name 属性，作为模板的名字。然后在<code>&lt;template/&gt;</code>内定义代码片段，如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- wxml </span></span>
<span class="line"><span>    注意：由于语法问题，复制下面代码片段要把空格去掉</span></span>
<span class="line"><span>--&gt;</span></span>
<span class="line"><span>&lt;template name=&quot;msgItem&quot;&gt;</span></span>
<span class="line"><span>  &lt;view&gt;</span></span>
<span class="line"><span>    &lt;text&gt; {{index}}: {{msg}} &lt;/text&gt;</span></span>
<span class="line"><span>    &lt;text&gt; Time: {{time}} &lt;/text&gt;</span></span>
<span class="line"><span>  &lt;/view&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><h5 id="使用模板" tabindex="-1">使用模板 <a class="header-anchor" href="#使用模板" aria-label="Permalink to &quot;使用模板&quot;">​</a></h5><p>使用 is 属性，声明需要的使用的模板，然后将模板所需要的 data 传入，如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template is=&quot;msgItem&quot; data=&quot;{{...item}}&quot;/&gt;</span></span></code></pre></div><p>is 属性可以使用 Mustache 语法，来动态决定具体需要渲染哪个模板：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template name=&quot;odd&quot;&gt;</span></span>
<span class="line"><span>  &lt;view&gt; odd &lt;/view&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;template name=&quot;even&quot;&gt;</span></span>
<span class="line"><span>  &lt;view&gt; even &lt;/view&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;block wx:for=&quot;{{[1, 2, 3, 4, 5]}}&quot;&gt;</span></span>
<span class="line"><span>  &lt;template is=&quot;{{item % 2 == 0 ? &#39;even&#39; : &#39;odd&#39;}}&quot;/&gt;</span></span>
<span class="line"><span>&lt;/block&gt;</span></span></code></pre></div><h2 id="引用" tabindex="-1">引用 <a class="header-anchor" href="#引用" aria-label="Permalink to &quot;引用&quot;">​</a></h2><p>WXML 提供两种文件引用方式<code>import</code>和<code>include</code></p><h5 id="import" tabindex="-1">import <a class="header-anchor" href="#import" aria-label="Permalink to &quot;import&quot;">​</a></h5><p><code>import</code>可以在该文件中使用目标文件定义的<code>template</code>，如：</p><p>在 item.wxml 中定义了一个叫<code>item</code>的<code>template</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- test.wxml --&gt;</span></span>
<span class="line"><span>&lt;template name=&quot;item&quot;&gt;</span></span>
<span class="line"><span>  &lt;text&gt;{{text}}&lt;/text&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><p>在 index.wxml 中引用了 test.wxml，就可以使用<code>item</code>模板：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- test.wxml --&gt;</span></span>
<span class="line"><span>&lt;import src=&quot;../test/test.wxml&quot;/&gt;</span></span>
<span class="line"><span>&lt;template is=&quot;item&quot; data=&quot;{{text: &#39;forbar&#39;}}&quot;/&gt;</span></span></code></pre></div><h5 id="import-的作用域" tabindex="-1">import 的作用域 <a class="header-anchor" href="#import-的作用域" aria-label="Permalink to &quot;import 的作用域&quot;">​</a></h5><p>import 有作用域的概念，即只会 import 目标文件中定义的 template，而不会 import 目标文件 import 的 template。</p><p>如：C import B，B import A，在C中可以使用B定义的template，在B中可以使用A定义的template，但是C不能使用A定义的template。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- test.wxml </span></span>
<span class="line"><span>    注意：由于语法问题，复制下面代码片段要把空格去掉</span></span>
<span class="line"><span>--&gt;</span></span>
<span class="line"><span>&lt;template name=&quot;A&quot;&gt;</span></span>
<span class="line"><span>  &lt;text&gt; A template &lt;/text&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;!-- index.wxml </span></span>
<span class="line"><span>    注意：由于语法问题，复制下面代码片段要把空格去掉</span></span>
<span class="line"><span>--&gt;</span></span>
<span class="line"><span>&lt;import src=&quot;../test/test.wxml&quot;/&gt;</span></span>
<span class="line"><span>&lt;template name=&quot;B&quot;&gt;</span></span>
<span class="line"><span>  &lt;text&gt; B template &lt;/text&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;!-- demo.wxml </span></span>
<span class="line"><span>    注意：由于语法问题，复制下面代码片段要把空格去掉</span></span>
<span class="line"><span>--&gt;</span></span>
<span class="line"><span>&lt;import src=&quot;../index/index.wxml&quot;/&gt;</span></span>
<span class="line"><span>&lt;template is=&quot;A&quot;/&gt;  &lt;!-- Error! Can not use tempalte when not import A. --&gt;</span></span>
<span class="line"><span>&lt;template is=&quot;B&quot;/&gt;</span></span></code></pre></div><h2 id="include" tabindex="-1">include <a class="header-anchor" href="#include" aria-label="Permalink to &quot;include&quot;">​</a></h2><p><code>include</code> 可以将目标文件<strong>除了</strong> <code>&lt;template/&gt;</code> <code>&lt;wxs/&gt;</code> 外的整个代码引入，相当于是拷贝到 <code>include</code> 位置，如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- index.wxml --&gt;</span></span>
<span class="line"><span>&lt;include src=&quot;header.wxml&quot;/&gt;</span></span>
<span class="line"><span>    &lt;view&gt; body &lt;/view&gt;</span></span>
<span class="line"><span>&lt;include src=&quot;footer.wxml&quot;/&gt;</span></span>
<span class="line"><span>&lt;!-- header.wxml --&gt;</span></span>
<span class="line"><span>&lt;view&gt; header &lt;/view&gt;</span></span>
<span class="line"><span>&lt;!-- footer.wxml --&gt;</span></span>
<span class="line"><span>&lt;view&gt; footer &lt;/view&gt;</span></span></code></pre></div><h2 id="小程序组件" tabindex="-1">小程序组件 <a class="header-anchor" href="#小程序组件" aria-label="Permalink to &quot;小程序组件&quot;">​</a></h2><p>微信小程序内置了很多组件，开发中可以直接使用他们来展示响应的内容</p><h2 id="视图容器" tabindex="-1">视图容器 <a class="header-anchor" href="#视图容器" aria-label="Permalink to &quot;视图容器&quot;">​</a></h2><h5 id="scroll-view" tabindex="-1">scroll-view <a class="header-anchor" href="#scroll-view" aria-label="Permalink to &quot;scroll-view&quot;">​</a></h5><p>滚动组件，可滚动视图区域</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- wxml --&gt;</span></span>
<span class="line"><span>&lt;!-- scroll-view横向滚动 </span></span>
<span class="line"><span>--&gt;</span></span>
<span class="line"><span>&lt;scroll-view class=&quot;scroll-view&quot; scroll-x=&quot;{{true}}&quot;&gt;</span></span>
<span class="line"><span>  &lt;view class=&quot;scroll-item red&quot;&gt;&lt;/view&gt;</span></span>
<span class="line"><span>  &lt;view class=&quot;scroll-item green&quot;&gt;&lt;/view&gt;</span></span>
<span class="line"><span>  &lt;view class=&quot;scroll-item yellow&quot;&gt;&lt;/view&gt;</span></span>
<span class="line"><span>  &lt;view class=&quot;scroll-item black&quot;&gt;&lt;/view&gt;</span></span>
<span class="line"><span>  &lt;view class=&quot;scroll-item blue&quot;&gt;&lt;/view&gt;</span></span>
<span class="line"><span>  &lt;view class=&quot;scroll-item orange&quot;&gt;&lt;/view&gt;</span></span>
<span class="line"><span>&lt;/scroll-view&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- scroll-view纵向滚动 --&gt;</span></span>
<span class="line"><span>&lt;scroll-view class=&quot;scroll-view-y&quot; scroll-into-view=&quot;yellow&quot; scroll-y=&quot;{{true}}&quot; &gt;</span></span>
<span class="line"><span>  &lt;view class=&quot;scroll-item-y red&quot;&gt;&lt;/view&gt;</span></span>
<span class="line"><span>  &lt;view class=&quot;scroll-item-y green&quot;&gt;&lt;/view&gt;</span></span>
<span class="line"><span>  &lt;view id=&quot;yellow&quot; class=&quot;scroll-item-y yellow&quot;&gt;&lt;/view&gt;</span></span>
<span class="line"><span>  &lt;view class=&quot;scroll-item-y black&quot;&gt;&lt;/view&gt;</span></span>
<span class="line"><span>  &lt;view class=&quot;scroll-item-y blue&quot;&gt;&lt;/view&gt;</span></span>
<span class="line"><span>  &lt;view class=&quot;scroll-item-y orange&quot;&gt;&lt;/view&gt;</span></span>
<span class="line"><span>&lt;/scroll-view&gt;</span></span>
<span class="line"><span>/* wxsss */</span></span>
<span class="line"><span>.scroll-view {</span></span>
<span class="line"><span>  width: 100%;</span></span>
<span class="line"><span>  height: 100px;</span></span>
<span class="line"><span>  white-space: nowrap;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.scroll-view .scroll-item {</span></span>
<span class="line"><span>  display: inline-block;</span></span>
<span class="line"><span>  width: 100px;</span></span>
<span class="line"><span>  height: 100px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.red {</span></span>
<span class="line"><span>  background: red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.green {</span></span>
<span class="line"><span>  background: green;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.yellow {</span></span>
<span class="line"><span>  background: yellow;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.black {</span></span>
<span class="line"><span>  background: black;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.blue {</span></span>
<span class="line"><span>  background: blue;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.orange {</span></span>
<span class="line"><span>  background: orange;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/* scroll-view纵向滚动 */</span></span>
<span class="line"><span>.scroll-view-y {</span></span>
<span class="line"><span>  width: 100%;</span></span>
<span class="line"><span>  height: 300px;</span></span>
<span class="line"><span>  background: palegoldenrod;</span></span>
<span class="line"><span>  white-space: nowrap;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.scroll-view-y .scroll-item-y {</span></span>
<span class="line"><span>  width: 100%;</span></span>
<span class="line"><span>  height: 180px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.red {</span></span>
<span class="line"><span>  background: red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.green {</span></span>
<span class="line"><span>  background: green;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.yellow {</span></span>
<span class="line"><span>  background: yellow;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.black {</span></span>
<span class="line"><span>  background: black;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.blue {</span></span>
<span class="line"><span>  background: blue;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.orange {</span></span>
<span class="line"><span>  background: orange;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="swiper" tabindex="-1">swiper <a class="header-anchor" href="#swiper" aria-label="Permalink to &quot;swiper&quot;">​</a></h5><p>轮播图组件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- wxml --&gt;</span></span>
<span class="line"><span>&lt;view&gt;</span></span>
<span class="line"><span>  &lt;swiper indicator-dots=&quot;true&quot; indicator-active-color=&quot;red&quot; autoplay=&quot;true&quot; interval=&quot;1000&quot;&gt;</span></span>
<span class="line"><span>    &lt;!-- 图片链接来自百度图片 --&gt;</span></span>
<span class="line"><span>    &lt;view wx:for=&quot;{{image}}&quot; wx:for-item=&quot;item&quot; wx:key=&quot;key&quot;&gt;</span></span>
<span class="line"><span>       &lt;swiper-item&gt;</span></span>
<span class="line"><span>          &lt;image src=&quot;{{item}}&quot;&gt;&lt;/image&gt;</span></span>
<span class="line"><span>        &lt;/swiper-item&gt;</span></span>
<span class="line"><span>    &lt;/view&gt;</span></span>
<span class="line"><span>  &lt;/swiper&gt;</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span>/* wxss */</span></span>
<span class="line"><span>image{</span></span>
<span class="line"><span>  width: 100%;</span></span>
<span class="line"><span>  height: 100%;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// js</span></span>
<span class="line"><span>data: {</span></span>
<span class="line"><span>    image:[</span></span>
<span class="line"><span>      &#39;https://t7.baidu.com/it/u=2604797219,1573897854&amp;fm=193&amp;f=GIF&#39;,</span></span>
<span class="line"><span>      &#39;https://t7.baidu.com/it/u=2942499027,2479446682&amp;fm=193&amp;f=GIF&#39;,</span></span>
<span class="line"><span>      &#39;https://t7.baidu.com/it/u=3165657288,4248157545&amp;fm=193&amp;f=GIF&#39;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="view" tabindex="-1">view <a class="header-anchor" href="#view" aria-label="Permalink to &quot;view&quot;">​</a></h5><p>视图容器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;view class=&quot;test&quot;&gt;</span></span>
<span class="line"><span>  1</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span>.test{</span></span>
<span class="line"><span>  width: 200px;</span></span>
<span class="line"><span>  height: 200px;</span></span>
<span class="line"><span>  background-color: aqua;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="基础内容" tabindex="-1">基础内容 <a class="header-anchor" href="#基础内容" aria-label="Permalink to &quot;基础内容&quot;">​</a></h4><h5 id="icon" tabindex="-1">icon <a class="header-anchor" href="#icon" aria-label="Permalink to &quot;icon&quot;">​</a></h5><p>图标。组件属性的长度单位默认为px</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;view class=&quot;group&quot;&gt;</span></span>
<span class="line"><span>  &lt;block wx:for=&quot;{{iconSize}}&quot;&gt;</span></span>
<span class="line"><span>    &lt;icon type=&quot;success&quot; size=&quot;{{item}}&quot;/&gt;</span></span>
<span class="line"><span>  &lt;/block&gt;</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;view class=&quot;group&quot;&gt;</span></span>
<span class="line"><span>  &lt;block wx:for=&quot;{{iconType}}&quot;&gt;</span></span>
<span class="line"><span>    &lt;icon type=&quot;{{item}}&quot; size=&quot;40&quot;/&gt;</span></span>
<span class="line"><span>  &lt;/block&gt;</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;view class=&quot;group&quot;&gt;</span></span>
<span class="line"><span>  &lt;block wx:for=&quot;{{iconColor}}&quot;&gt;</span></span>
<span class="line"><span>    &lt;icon type=&quot;success&quot; size=&quot;40&quot; color=&quot;{{item}}&quot;/&gt;</span></span>
<span class="line"><span>  &lt;/block&gt;</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span>.intro {</span></span>
<span class="line"><span>  margin: 30px;</span></span>
<span class="line"><span>  text-align: center;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Page({</span></span>
<span class="line"><span>  data: {</span></span>
<span class="line"><span>    iconSize: [20, 30, 40, 50, 60, 70],</span></span>
<span class="line"><span>    iconColor: [</span></span>
<span class="line"><span>      &#39;red&#39;, &#39;orange&#39;, &#39;yellow&#39;, &#39;green&#39;, &#39;rgb(0,255,255)&#39;, &#39;blue&#39;, &#39;purple&#39;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    iconType: [</span></span>
<span class="line"><span>      &#39;success&#39;, &#39;success_no_circle&#39;, &#39;info&#39;, &#39;warn&#39;, &#39;waiting&#39;, &#39;cancel&#39;, &#39;download&#39;, &#39;search&#39;, &#39;clear&#39;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h5 id="progress" tabindex="-1">progress <a class="header-anchor" href="#progress" aria-label="Permalink to &quot;progress&quot;">​</a></h5><p>进度条。组件属性的长度单位默认为px</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;progress percent=&quot;20&quot; show-info /&gt;</span></span>
<span class="line"><span>&lt;progress percent=&quot;40&quot; stroke-width=&quot;12&quot; /&gt;</span></span>
<span class="line"><span>&lt;progress percent=&quot;60&quot; color=&quot;pink&quot; /&gt;</span></span>
<span class="line"><span>&lt;progress percent=&quot;80&quot; active /&gt;</span></span>
<span class="line"><span>progress {margin: 10px;}</span></span></code></pre></div><h5 id="rich-text" tabindex="-1">rich-text <a class="header-anchor" href="#rich-text" aria-label="Permalink to &quot;rich-text&quot;">​</a></h5><p>富文本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;rich-text nodes=&quot;{{nodes}}&quot; bindtap=&quot;tap&quot;&gt;&lt;/rich-text&gt;</span></span>
<span class="line"><span>Page({</span></span>
<span class="line"><span>  data: {</span></span>
<span class="line"><span>    nodes: [{</span></span>
<span class="line"><span>      name: &#39;div&#39;,</span></span>
<span class="line"><span>      attrs: {</span></span>
<span class="line"><span>        class: &#39;div_class&#39;,</span></span>
<span class="line"><span>        style: &#39;line-height: 60px; color: red;&#39;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      children: [{</span></span>
<span class="line"><span>        type: &#39;text&#39;,</span></span>
<span class="line"><span>        text: &#39;Hello&amp;nbsp;World!&#39;</span></span>
<span class="line"><span>      }]</span></span>
<span class="line"><span>    }],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  tap() {</span></span>
<span class="line"><span>    console.log(&#39;tap&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h5 id="text" tabindex="-1">text <a class="header-anchor" href="#text" aria-label="Permalink to &quot;text&quot;">​</a></h5><p>文本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;text&gt;文本&lt;/text&gt;</span></span>
<span class="line"><span>text{</span></span>
<span class="line"><span>  color: red;</span></span>
<span class="line"><span>  background-color: aqua;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="form表单" tabindex="-1">form表单 <a class="header-anchor" href="#form表单" aria-label="Permalink to &quot;form表单&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;form&gt;</span></span>
<span class="line"><span>  &lt;label for=&quot;name&quot;&gt;姓名&lt;/label&gt;</span></span>
<span class="line"><span>  &lt;!-- 输入框 --&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;text&quot; id=&quot;name&quot; placeholder=&quot;请输入姓名&quot; /&gt;</span></span>
<span class="line"><span>  &lt;label for=&quot;pwd&quot;&gt;密码&lt;/label&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;password&quot; placeholder=&quot;请输入密码&quot; id=&quot;id&quot;/&gt;</span></span>
<span class="line"><span>  &lt;!-- 关联属性 --&gt;</span></span>
<span class="line"><span>  &lt;label&gt;性别&lt;/label&gt;</span></span>
<span class="line"><span>  &lt;!-- 单项选择器 --&gt;</span></span>
<span class="line"><span>  &lt;radio-group&gt;</span></span>
<span class="line"><span>    &lt;radio value=&quot;1&quot;&gt;男&lt;/radio&gt;</span></span>
<span class="line"><span>    &lt;radio value=&quot;2&quot;&gt;女&lt;/radio&gt;</span></span>
<span class="line"><span>  &lt;/radio-group&gt;</span></span>
<span class="line"><span>  &lt;label&gt;爱好&lt;/label&gt;</span></span>
<span class="line"><span>  &lt;!-- 多项选择器 --&gt;</span></span>
<span class="line"><span>  &lt;checkbox-group&gt;</span></span>
<span class="line"><span>    &lt;checkbox value=&quot;1&quot;&gt;看电影&lt;/checkbox&gt;</span></span>
<span class="line"><span>    &lt;checkbox value=&quot;2&quot;&gt;打游戏&lt;/checkbox&gt;</span></span>
<span class="line"><span>    &lt;checkbox value=&quot;3&quot;&gt;听音乐&lt;/checkbox&gt;</span></span>
<span class="line"><span>  &lt;/checkbox-group&gt;</span></span>
<span class="line"><span>  &lt;!-- 滑动选择器 --&gt;</span></span>
<span class="line"><span>  &lt;slider max=&quot;100&quot; min=&quot;1&quot; show-value=&quot;true&quot;&gt;&lt;/slider&gt;</span></span>
<span class="line"><span>  &lt;view class=&quot;section__title&quot;&gt;时间选择器&lt;/view&gt;</span></span>
<span class="line"><span>  &lt;picker mode=&quot;time&quot; value=&quot;{{time}}&quot; start=&quot;09:01&quot; end=&quot;21:01&quot; bindchange=&quot;bindTimeChange&quot;&gt;</span></span>
<span class="line"><span>    &lt;view class=&quot;picker&quot;&gt;</span></span>
<span class="line"><span>      当前选择: {{time}}</span></span>
<span class="line"><span>    &lt;/view&gt;</span></span>
<span class="line"><span>  &lt;/picker&gt;</span></span>
<span class="line"><span>  &lt;label&gt;开关&lt;/label&gt;</span></span>
<span class="line"><span>  &lt;switch&gt;&lt;/switch&gt;</span></span>
<span class="line"><span>  &lt;!-- 多行文本输入框 --&gt;</span></span>
<span class="line"><span>  &lt;textarea hold-keyboard=&quot;true&quot; auto-focus=&quot;true&quot;&gt;</span></span>
<span class="line"><span>&lt;/textarea&gt;</span></span>
<span class="line"><span>&lt;/form&gt;</span></span>
<span class="line"><span>bindTimeChange: function(e) {</span></span>
<span class="line"><span>    console.log(&#39;picker发送选择改变，携带值为&#39;, e.detail.value)</span></span>
<span class="line"><span>    this.setData({</span></span>
<span class="line"><span>      time: e.detail.value</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="小程序api" tabindex="-1">小程序API <a class="header-anchor" href="#小程序api" aria-label="Permalink to &quot;小程序API&quot;">​</a></h2><p>微信小程序开发框架提供了丰富的原生API。可以方便地调用微信提供的功能，如获取用户信息、本地存储、支付等。</p><h2 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-label="Permalink to &quot;路由&quot;">​</a></h2><h5 id="wx-navigateto" tabindex="-1">wx.navigateTo <a class="header-anchor" href="#wx-navigateto" aria-label="Permalink to &quot;wx.navigateTo&quot;">​</a></h5><p>保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html" target="_blank" rel="noreferrer">wx.navigateBack</a> 可以返回到原页面。小程序中页面栈最多十层。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- test.wxmml --&gt;</span></span>
<span class="line"><span>&lt;view&gt;</span></span>
<span class="line"><span>    &lt;button bindtap=&quot;navTo&quot;&gt;点击跳转&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span>// test.js</span></span>
<span class="line"><span>Page({</span></span>
<span class="line"><span>  // 跳转事件</span></span>
<span class="line"><span>  navTo(){</span></span>
<span class="line"><span>    // 跳转到index页面</span></span>
<span class="line"><span>    wx.navigateTo({</span></span>
<span class="line"><span>      url: &#39;/pages/index/index&#39;,</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    // </span></span>
<span class="line"><span>    success: function(res) {</span></span>
<span class="line"><span>       // 通过eventChannel向被打开页面传送数据</span></span>
<span class="line"><span>       res.eventChannel.emit(&#39;test&#39;, { data: &#39;test&#39; })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// index.js</span></span>
<span class="line"><span>onLoad() {</span></span>
<span class="line"><span>    const eventChannel = this.getOpenerEventChannel()</span></span>
<span class="line"><span>    eventChannel.on(&#39;test&#39;, function(data) {</span></span>
<span class="line"><span>      console.log(data)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="wx-navigateback" tabindex="-1">wx.navigateBack <a class="header-anchor" href="#wx-navigateback" aria-label="Permalink to &quot;wx.navigateBack&quot;">​</a></h5><p>关闭当前页面，返回上一页面或多级页面。可通过 <a href="https://developers.weixin.qq.com/miniprogram/dev/reference/api/getCurrentPages.html" target="_blank" rel="noreferrer">getCurrentPages</a> 获取当前的页面栈，决定需要返回几层。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!--</span></span>
<span class="line"><span>    index.wxml</span></span>
<span class="line"><span>--&gt;</span></span>
<span class="line"><span>&lt;view&gt;</span></span>
<span class="line"><span>  &lt;button bindtap=&quot;onnavigateBack&quot;&gt;onnavigateBack&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span>&lt;!--</span></span>
<span class="line"><span>    index.js</span></span>
<span class="line"><span>--&gt;</span></span>
<span class="line"><span>onnavigateBack(){</span></span>
<span class="line"><span>    wx.navigateBack({</span></span>
<span class="line"><span>      delta: 1,</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  },</span></span></code></pre></div><h5 id="其他路由api" tabindex="-1">其他路由API <a class="header-anchor" href="#其他路由api" aria-label="Permalink to &quot;其他路由API&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>wx.switchTab    跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面参数</span></span>
<span class="line"><span>wx.reLaunch        关闭所有页面，打开到应用内的某个页面</span></span>
<span class="line"><span>wx.redirectTO    关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面</span></span></code></pre></div><h2 id="界面-交互-下拉刷新" tabindex="-1">界面(交互,下拉刷新) <a class="header-anchor" href="#界面-交互-下拉刷新" aria-label="Permalink to &quot;界面(交互,下拉刷新)&quot;">​</a></h2><h4 id="wx-showmodal" tabindex="-1">wx.showModal <a class="header-anchor" href="#wx-showmodal" aria-label="Permalink to &quot;wx.showModal&quot;">​</a></h4><p>显示模态对话框</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- test.wxml --&gt;</span></span>
<span class="line"><span>&lt;view&gt;</span></span>
<span class="line"><span>  &lt;button bindtap=&quot;onshowModal&quot;&gt;模态对话框&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span>// test.js</span></span>
<span class="line"><span>Page({</span></span>
<span class="line"><span>    onshowModal(){</span></span>
<span class="line"><span>    wx.showModal({</span></span>
<span class="line"><span>      title: &#39;提示&#39;,</span></span>
<span class="line"><span>      content: &#39;这是一个模态弹窗&#39;,</span></span>
<span class="line"><span>      success (res) {</span></span>
<span class="line"><span>        if (res.confirm) {</span></span>
<span class="line"><span>          console.log(&#39;用户点击确定&#39;)</span></span>
<span class="line"><span>        } else if (res.cancel) {</span></span>
<span class="line"><span>          console.log(&#39;用户点击取消&#39;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h4 id="wx-showtoast" tabindex="-1">wx.showToast <a class="header-anchor" href="#wx-showtoast" aria-label="Permalink to &quot;wx.showToast&quot;">​</a></h4><p>显示消息提示框</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- test.wxml --&gt;</span></span>
<span class="line"><span>&lt;view&gt;</span></span>
<span class="line"><span>  &lt;button bindtap=&quot;onshowToast&quot;&gt;模态对话框&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span>// test.js</span></span>
<span class="line"><span>Page({</span></span>
<span class="line"><span>    onshowModal(){</span></span>
<span class="line"><span>    wx.showModal({</span></span>
<span class="line"><span>      title: &#39;提示&#39;,</span></span>
<span class="line"><span>      content: &#39;这是一个模态弹窗&#39;,</span></span>
<span class="line"><span>      success (res) {</span></span>
<span class="line"><span>        if (res.confirm) {</span></span>
<span class="line"><span>          console.log(&#39;用户点击确定&#39;)</span></span>
<span class="line"><span>        } else if (res.cancel) {</span></span>
<span class="line"><span>          console.log(&#39;用户点击取消&#39;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h5 id="wx-showloading" tabindex="-1">wx.showLoading <a class="header-anchor" href="#wx-showloading" aria-label="Permalink to &quot;wx.showLoading&quot;">​</a></h5><p>显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;view&gt;</span></span>
<span class="line"><span>  &lt;button bindtap=&quot;onloading&quot;&gt;loading&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span>onloading(){</span></span>
<span class="line"><span>    wx.showLoading({</span></span>
<span class="line"><span>      title: &#39;加载中&#39;,</span></span>
<span class="line"><span>      success:function(res){// 回调成功</span></span>
<span class="line"><span>        console.log(res);</span></span>
<span class="line"><span>        console.log(&#39;懒加载中&#39;)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    setTimeout(function(){</span></span>
<span class="line"><span>      wx.hideLoading({// 隐藏 loading 提示框</span></span>
<span class="line"><span>        success: (res) =&gt; {// 回调成功</span></span>
<span class="line"><span>          console.log(res)</span></span>
<span class="line"><span>          console.log(&#39;关闭懒加载&#39;)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    },2000)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="wx-startpulldownrefresh" tabindex="-1">wx.startPullDownRefresh <a class="header-anchor" href="#wx-startpulldownrefresh" aria-label="Permalink to &quot;wx.startPullDownRefresh&quot;">​</a></h5><p>开始下拉刷新。调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。</p><h5 id="wx-stoppulldownrefresh" tabindex="-1">wx.stopPullDownRefresh <a class="header-anchor" href="#wx-stoppulldownrefresh" aria-label="Permalink to &quot;wx.stopPullDownRefresh&quot;">​</a></h5><p>停止当前页面下拉刷新</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;view&gt;</span></span>
<span class="line"><span>  &lt;button bindtap=&quot;onrefresh&quot;&gt;点击刷新&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span>refresh(){</span></span>
<span class="line"><span>    console.log(&#39;当有下拉刷新的时候，调用该方法&#39;);</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>onrefresh(){</span></span>
<span class="line"><span>    this.refresh();// 调用方法</span></span>
<span class="line"><span>    wx.startPullDownRefresh({</span></span>
<span class="line"><span>      success: (res) =&gt; {</span></span>
<span class="line"><span>        console.log(res)</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    setTimeout(function(){</span></span>
<span class="line"><span>      wx.stopPullDownRefresh()</span></span>
<span class="line"><span>    },2000)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// json</span></span>
<span class="line"><span>&quot;enablePullDownRefresh&quot;: true,</span></span>
<span class="line"><span>&quot;backgroundTextStyle&quot;: &quot;dark&quot;</span></span></code></pre></div><h2 id="网络请求" tabindex="-1">网络请求 <a class="header-anchor" href="#网络请求" aria-label="Permalink to &quot;网络请求&quot;">​</a></h2><h5 id="wx-request-object-object" tabindex="-1">wx.request(Object object) <a class="header-anchor" href="#wx-request-object-object" aria-label="Permalink to &quot;wx.request(Object object)&quot;">​</a></h5><p>发起 HTTPS 网络请求。使用前请注意阅读<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html" target="_blank" rel="noreferrer">相关说明</a>。</p><h5 id="data-参数说明" tabindex="-1">data 参数说明 <a class="header-anchor" href="#data-参数说明" aria-label="Permalink to &quot;data 参数说明&quot;">​</a></h5><p>最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。</p><ol><li>对于 <code>GET</code> 方法的数据，会将数据转换成 query string</li><li>对于 <code>POST</code> 方法且 <code>header[&#39;content-type&#39;]</code> 为 <code>application/json</code> 的数据，会对数据进行 JSON 序列化</li><li>对于 <code>POST</code> 方法且 <code>header[&#39;content-type&#39;]</code> 为 <code>application/x-www-form-urlencoded</code> 的数据，会将数据转换成 query string</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- test.wxml --&gt;</span></span>
<span class="line"><span>&lt;view&gt;</span></span>
<span class="line"><span>  &lt;button bindtap=&quot;onrequest&quot;&gt;请求数据&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span>// test.js</span></span>
<span class="line"><span>Page({</span></span>
<span class="line"><span>    onrequest(){</span></span>
<span class="line"><span>        wx.request({</span></span>
<span class="line"><span>          url: &#39;http://www.kk.com/admin/admin.php&#39;, // 接口地址</span></span>
<span class="line"><span>          data: {// 请求的参数</span></span>
<span class="line"><span>            id: 2,</span></span>
<span class="line"><span>            action:&#39;weixin&#39;</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          header:{// 设置头部信息</span></span>
<span class="line"><span>            &#39;content-type&#39;: &#39;application/x-www-form-urlencoded&#39;</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          method: &#39;POST&#39;,// 提交方法</span></span>
<span class="line"><span>          success:function(data){</span></span>
<span class="line"><span>            console.log(data.data)</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h5 id="wx-uploadfile" tabindex="-1">wx.uploadFile <a class="header-anchor" href="#wx-uploadfile" aria-label="Permalink to &quot;wx.uploadFile&quot;">​</a></h5><p>将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 <code>content-type</code> 为 <code>multipart/form-data</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;view&gt;</span></span>
<span class="line"><span>  &lt;button bindtap=&quot;onupload&quot;&gt;上传图片&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span>// 上传图片事件</span></span>
<span class="line"><span>  onupload(){</span></span>
<span class="line"><span>    wx.chooseImage({// 从本地相册选择图片或使用相机拍照</span></span>
<span class="line"><span>      count: 1,// 最多可以选择的图片张数</span></span>
<span class="line"><span>      success:function(res){</span></span>
<span class="line"><span>        console.log(res);</span></span>
<span class="line"><span>        const tempFilePaths = res.tempFilePaths</span></span>
<span class="line"><span>        console.log(tempFilePaths[0])</span></span>
<span class="line"><span>        wx.uploadFile({</span></span>
<span class="line"><span>          filePath: tempFilePaths[0],// 要上传文件资源的路径 (本地路径)</span></span>
<span class="line"><span>          name: &#39;photo&#39;,// 后端通过该值获取到文件内容</span></span>
<span class="line"><span>          url: &#39;http://www.kk.com/admin/admin.php&#39;,// 上传的地址</span></span>
<span class="line"><span>          success:function(res){</span></span>
<span class="line"><span>            console.log(res);</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span></code></pre></div><h2 id="数据缓存" tabindex="-1">数据缓存 <a class="header-anchor" href="#数据缓存" aria-label="Permalink to &quot;数据缓存&quot;">​</a></h2><h5 id="wx-setstoragesync-设置本地缓存" tabindex="-1">wx.setStorageSync() 设置本地缓存 <a class="header-anchor" href="#wx-setstoragesync-设置本地缓存" aria-label="Permalink to &quot;wx.setStorageSync() 设置本地缓存&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;view&gt;</span></span>
<span class="line"><span>    &lt;button bindtap=&quot;storage&quot;&gt;</span></span>
<span class="line"><span>        点击存储</span></span>
<span class="line"><span>    &lt;/button&gt;</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span>Page({</span></span>
<span class="line"><span>    storage(){</span></span>
<span class="line"><span>        wx.setStorage({</span></span>
<span class="line"><span>            key:&#39;key&#39;,</span></span>
<span class="line"><span>            data:&#39;111&#39;</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="wx-getstoragesync-获取本地缓存" tabindex="-1">wx.getStorageSync() 获取本地缓存 <a class="header-anchor" href="#wx-getstoragesync-获取本地缓存" aria-label="Permalink to &quot;wx.getStorageSync() 获取本地缓存&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;view&gt;</span></span>
<span class="line"><span>  &lt;button bindtap=&quot;getstorage&quot;&gt;</span></span>
<span class="line"><span>        点击获取</span></span>
<span class="line"><span>  &lt;/button&gt;</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span>getstorage(){</span></span>
<span class="line"><span>   const value = wx.getStorageSync(&#39;key&#39;)</span></span>
<span class="line"><span>   console.log(value)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="wx-removestoragesync" tabindex="-1">wx.removeStorageSync <a class="header-anchor" href="#wx-removestoragesync" aria-label="Permalink to &quot;wx.removeStorageSync&quot;">​</a></h5><p>从本地缓存中移除指定 key</p><h5 id="wx-clearstoragesync" tabindex="-1">wx.clearStorageSync <a class="header-anchor" href="#wx-clearstoragesync" aria-label="Permalink to &quot;wx.clearStorageSync&quot;">​</a></h5><p>清理本地数据缓存</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;view&gt;</span></span>
<span class="line"><span>  &lt;button bindtap=&quot;onremove&quot;&gt;删除缓存&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span>onremove(){</span></span>
<span class="line"><span>    wx.removeStorage({</span></span>
<span class="line"><span>      key: &#39;key&#39;,</span></span>
<span class="line"><span>      success (res) {</span></span>
<span class="line"><span>        console.log(&#39;删除成功&#39;)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><a href="https://developers.weixin.qq.com/miniprogram/dev/api/" target="_blank" rel="noreferrer"><strong>想了解更多API请点击</strong></a></p><h2 id="授权登录" tabindex="-1">授权登录 <a class="header-anchor" href="#授权登录" aria-label="Permalink to &quot;授权登录&quot;">​</a></h2><p>小程序可以通过微信官方提供的登录能力方便地获取微信提供的用户身份标识，快速建立小程序内的用户体系</p><h4 id="登录流程时序" tabindex="-1">登录流程时序 <a class="header-anchor" href="#登录流程时序" aria-label="Permalink to &quot;登录流程时序&quot;">​</a></h4><p><img src="http://web.wdwangke.com/mdphoto/frontend/WeChat/WeChat08.png" alt="img"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1、通过wx.login接口获取code</span></span>
<span class="line"><span>2、再通过wx.request()接口把code发送到后端获取登录凭证</span></span>
<span class="line"><span>3、后端通过appid，appsecret和code发送请求到auth.code2Session接口</span></span>
<span class="line"><span>4、后端获取接口返回来的信息后再把它返回前端</span></span>
<span class="line"><span>5、前端获取返回的信息判断是否登录</span></span></code></pre></div><h2 id="_1、通过wx-login接口获取code" tabindex="-1">1、通过wx.login接口获取code <a class="header-anchor" href="#_1、通过wx-login接口获取code" aria-label="Permalink to &quot;1、通过wx.login接口获取code&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;view class=&quot;container&quot;&gt;</span></span>
<span class="line"><span> &lt;button bindtap=&quot;onlogin&quot;&gt;授权登录&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span>onlogin(){</span></span>
<span class="line"><span>    wx.login({</span></span>
<span class="line"><span>      success:function(res){</span></span>
<span class="line"><span>        const code = res.code;</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span> }</span></span></code></pre></div><h2 id="_2、再通过wx-request-接口把code发送到后端获取登录凭证" tabindex="-1">2、再通过wx.request()接口把code发送到后端获取登录凭证 <a class="header-anchor" href="#_2、再通过wx-request-接口把code发送到后端获取登录凭证" aria-label="Permalink to &quot;2、再通过wx.request()接口把code发送到后端获取登录凭证&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>onlogin(){</span></span>
<span class="line"><span>    wx.login({</span></span>
<span class="line"><span>      success:function(res){</span></span>
<span class="line"><span>        const code = res.code;</span></span>
<span class="line"><span>        wx.request({</span></span>
<span class="line"><span>          url: &#39;http://www.kk.com/admin/admin.php&#39;,</span></span>
<span class="line"><span>          data:{</span></span>
<span class="line"><span>            code:code</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          header:{// 设置头部信息</span></span>
<span class="line"><span>            &#39;content-type&#39;: &#39;application/x-www-form-urlencoded&#39;</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          method: &#39;POST&#39;,// 提交方法</span></span>
<span class="line"><span>          success:function(res){</span></span>
<span class="line"><span>            console.log(res)</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span></code></pre></div><h2 id="_3、后端通过appid-appsecret和code发送请求到auth-code2session接口" tabindex="-1">3、后端通过appid，appsecret和code发送请求到auth.code2Session接口 <a class="header-anchor" href="#_3、后端通过appid-appsecret和code发送请求到auth-code2session接口" aria-label="Permalink to &quot;3、后端通过appid，appsecret和code发送请求到auth.code2Session接口&quot;">​</a></h2><h2 id="_4、后端获取接口返回来的信息后再把它返回前端" tabindex="-1">4、后端获取接口返回来的信息后再把它返回前端 <a class="header-anchor" href="#_4、后端获取接口返回来的信息后再把它返回前端" aria-label="Permalink to &quot;4、后端获取接口返回来的信息后再把它返回前端&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 接口地址：https://api.weixin.qq.com/sns/jscode2session?appid=APPID&amp;secret=SECRET&amp;js_code=JSCODE&amp;grant_type=authorization_code</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$code = $_POST[&#39;code&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $url = &quot;https://api.weixin.qq.com/sns/jscode2session?appid=填写自己appid&amp;secret=填写自己的密钥&amp;js_code=$code&amp;grant_type=authorization_code&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $json = https_request($url);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $data = json_decode($json,true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 返回数据</span></span>
<span class="line"><span>    if($data[&#39;errcode&#39;] == 0){</span></span>
<span class="line"><span>        echo json_encode($data);</span></span>
<span class="line"><span>        exit;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    function https_request($url,$data = null)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        if(function_exists(&#39;curl_init&#39;)){</span></span>
<span class="line"><span>        $curl = curl_init();</span></span>
<span class="line"><span>            curl_setopt($curl, CURLOPT_URL, $url);</span></span>
<span class="line"><span>            curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);</span></span>
<span class="line"><span>            curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);</span></span>
<span class="line"><span>            curl_setopt($curl, CURLOPT_SSLVERSION, CURL_SSLVERSION_TLSv1);</span></span>
<span class="line"><span>            if (!empty($data)){</span></span>
<span class="line"><span>                curl_setopt($curl, CURLOPT_POST, 1);</span></span>
<span class="line"><span>                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);</span></span>
<span class="line"><span>            $output = curl_exec($curl);</span></span>
<span class="line"><span>            curl_close($curl);</span></span>
<span class="line"><span>            return $output;</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h2 id="_5、前端获取返回的信息判断是否登录" tabindex="-1">5、前端获取返回的信息判断是否登录 <a class="header-anchor" href="#_5、前端获取返回的信息判断是否登录" aria-label="Permalink to &quot;5、前端获取返回的信息判断是否登录&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>onlogin(){</span></span>
<span class="line"><span>    wx.login({</span></span>
<span class="line"><span>      success:function(res){</span></span>
<span class="line"><span>        const code = res.code;</span></span>
<span class="line"><span>        wx.request({</span></span>
<span class="line"><span>          url: &#39;http://www.kk.com/admin/admin.php&#39;,</span></span>
<span class="line"><span>          data:{</span></span>
<span class="line"><span>            code:code</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          header:{// 设置头部信息</span></span>
<span class="line"><span>            &#39;content-type&#39;: &#39;application/x-www-form-urlencoded&#39;</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          method: &#39;POST&#39;,// 提交方法</span></span>
<span class="line"><span>          success:function(res){</span></span>
<span class="line"><span>            console.log(res)</span></span>
<span class="line"><span>            if(res.data=&#39;&#39;){</span></span>
<span class="line"><span>              wx.showToast({</span></span>
<span class="line"><span>                title: &#39;登录成功&#39;,</span></span>
<span class="line"><span>              })</span></span>
<span class="line"><span>            }else{</span></span>
<span class="line"><span>              wx.showToast({</span></span>
<span class="line"><span>                title: &#39;登录失败&#39;,</span></span>
<span class="line"><span>              })</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span></code></pre></div>`,143);function r(d,u,h,g,q,b){return t(),e("div",null,[o,s("p",null,[a("可以在 "),s("code",null,l(),1),a(" 内进行简单的运算，支持的有如下几种方式：")]),c])}const w=p(i,[["render",r]]);export{v as __pageData,w as default};
