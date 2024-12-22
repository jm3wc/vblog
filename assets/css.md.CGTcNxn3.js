import{_ as s,c as n,o as a,a2 as p}from"./chunks/framework.CSGcjqEA.js";const m=JSON.parse('{"title":"CSS3基础&选择符","description":"","frontmatter":{},"headers":[],"relativePath":"css.md","filePath":"css.md"}'),l={name:"css.md"},t=p(`<h1 id="css3基础-选择符" tabindex="-1">CSS3基础&amp;选择符 <a class="header-anchor" href="#css3基础-选择符" aria-label="Permalink to &quot;CSS3基础&amp;选择符&quot;">​</a></h1><blockquote><h2 id="css基础知识" tabindex="-1">CSS基础知识 <a class="header-anchor" href="#css基础知识" aria-label="Permalink to &quot;CSS基础知识&quot;">​</a></h2></blockquote><ul><li>CSS是Cascading Style Sheet（层叠样式表）的缩写 是用于增强控制网页样式并允许将样式信息与网页内容分离的一种标记性语言</li><li>使用CSS样式可以有效地对页面进行布局,对页面字体，颜色，背景和其它效果实现精确描述。可以支持多种设备，如手机，PDA，打印机，电视机，游戏机等</li><li>目的：将表现与结构分离</li></ul><hr><blockquote><h2 id="css语法结构" tabindex="-1">CSS语法结构 <a class="header-anchor" href="#css语法结构" aria-label="Permalink to &quot;CSS语法结构&quot;">​</a></h2></blockquote><ul><li>CSS语法由三部分构成:选择符、属性和值,每个属性有一个值,属性和值被冒号分开</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>    body { background-color:#cccccc;}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><hr><blockquote><h2 id="将css应用到网页中" tabindex="-1">将CSS应用到网页中 <a class="header-anchor" href="#将css应用到网页中" aria-label="Permalink to &quot;将CSS应用到网页中&quot;">​</a></h2></blockquote><ul><li>将CSS应用到网页中有：3种方式 尽量使用外部样式表这种方式 目的是让我们的<code>html</code>结构与<code>css</code>表现形式分开</li></ul><p>1.行内样式表：内联样式表是指将CSS样式写在HTML标签中</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body style=&quot;background-color:#ccccc;&quot;&gt;&lt;/body&gt;</span></span>
<span class="line"><span>&lt;h1 style=&quot;font-size:12px; color:#ff0000;&quot;&gt;这是一个标题&lt;/h1&gt;</span></span></code></pre></div><p>2.内部样式表：内部样式表作为页面中的一个单独部分</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>      body {</span></span>
<span class="line"><span>            background-color:#cccccc;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span></code></pre></div><p>3.外部样式表：外部样式表是CSS应用中应用最多的形式，它将CSS样式代码单独放在一个外部文件中， 再由网页进行调用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>style.css</span></span>
<span class="line"><span>    body { background-color:#cccccc;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;style.css&quot; /&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span></code></pre></div><hr><blockquote><h2 id="css选择符" tabindex="-1">CSS选择符 <a class="header-anchor" href="#css选择符" aria-label="Permalink to &quot;CSS选择符&quot;">​</a></h2></blockquote><ul><li><p>元素选择符</p></li><li><p>关系选择符</p></li><li><p>伪类选择符</p></li><li><p>属性选择符</p></li><li><p>伪对象选择符</p></li><li><p>元素选择符</p></li></ul><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">通配选择符</td><td style="text-align:center;">*</td></tr><tr><td style="text-align:center;">类型选择符</td><td style="text-align:center;"><code>body</code></td></tr><tr><td style="text-align:center;">群组选择符</td><td style="text-align:center;"><code>body</code>，<code>p</code>，<code>span</code></td></tr><tr><td style="text-align:center;">ID选择符</td><td style="text-align:center;"><code>#id</code></td></tr><tr><td style="text-align:center;">CLASS选择符</td><td style="text-align:center;"><code>.class</code></td></tr></tbody></table><ul><li>通配选择符</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>* 号表示所有的元素</span></span>
<span class="line"><span>*{ color:blue; margin:0; padding:0;}</span></span></code></pre></div><ul><li>类型选择符</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>类型选择符就是将html标签作为选择符的一种</span></span>
<span class="line"><span>body {} h1 {} p {}</span></span></code></pre></div><ul><li>群组选择符</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>除了可以对单个标签进行样式指定外,还可以对组合标签进行相同的样式定义</span></span>
<span class="line"><span>使用逗号对选择符进行分隔。对页面中需要使用相同样式的地方,只需写一次样式</span></span>
<span class="line"><span>h1,h2, h3, p { font-size:12px; font-family:arial;}</span></span></code></pre></div><ul><li>ID选择符</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>id 及 class 均是css提供由用户给定义标签名称的选择符     </span></span>
<span class="line"><span>id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式</span></span>
<span class="line"><span>id 选择器以 &quot;#&quot; 来定义</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>#p1 { font-size:12px; font-weight:bold;}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;p id=&quot;p1&quot;&gt; 这是一个段落 &lt;/p&gt;</span></span></code></pre></div><ul><li>CLASS选择符</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>在网页中,每个id名称中只能使用一次,不得重复。</span></span>
<span class="line"><span>与id 不同,class允许重复使用</span></span>
<span class="line"><span>比如页面中的多个元素,都可以使用同一个样式定义.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>.p1 { font-size:12px; font-weight:bold;}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;p class=&quot;p1&quot;&gt; 这是一个段落 &lt;/p&gt;</span></span></code></pre></div><ul><li>关系选择符</li></ul><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">包含选择符(所有被E元素包含的F元素)</td><td style="text-align:center;">E F</td></tr><tr><td style="text-align:center;">子选择符(所有作为E元素的子元素F)</td><td style="text-align:center;">E&gt;F</td></tr><tr><td style="text-align:center;">相邻选择符(紧贴在E元素之后F元素)</td><td style="text-align:center;">E+F</td></tr><tr><td style="text-align:center;">兄弟选择符(E元素所有兄弟元素F)</td><td style="text-align:center;">E~F</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>/* 包含选择符 */</span></span>
<span class="line"><span>.son1 a { color:red;} </span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 子选择符 */</span></span>
<span class="line"><span>.son1&gt;a { color:red;} </span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 相邻选择符 */</span></span>
<span class="line"><span>.son1+div { color:green;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 兄弟选择符*/</span></span>
<span class="line"><span>.son1~div { color:yellow;}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div class=&quot;father&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;son1&quot;&gt;</span></span>
<span class="line"><span>        &lt;a href=&quot;#&quot;&gt;son1&lt;/a&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;grandson&quot;&gt;</span></span>
<span class="line"><span>            &lt;a href=&quot;#&quot;&gt;grandson&lt;/a&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;son2&quot;&gt;son2&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;son3&quot;&gt;son3&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><ul><li>伪类选择符</li></ul><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">版本</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">E:link</td><td style="text-align:center;">CSS1</td><td style="text-align:center;">链接未被访问前的样式</td></tr><tr><td style="text-align:center;">E:visited</td><td style="text-align:center;">CSS1</td><td style="text-align:center;">链接已被访问过的样式</td></tr><tr><td style="text-align:center;">E:hover</td><td style="text-align:center;">CSS1/2</td><td style="text-align:center;">鼠标在链接上的样式</td></tr><tr><td style="text-align:center;">E:active</td><td style="text-align:center;">CSS1/2</td><td style="text-align:center;">鼠标点击激活状态的样式(点击瞬间)</td></tr><tr><td style="text-align:center;">E:focus</td><td style="text-align:center;">CSS1/2</td><td style="text-align:center;">元素在产生输入焦点时的样式</td></tr><tr><td style="text-align:center;">E:first-child</td><td style="text-align:center;">CSS2</td><td style="text-align:center;">匹配父元素的第一个子元素</td></tr><tr><td style="text-align:center;">E:last-child</td><td style="text-align:center;">CSS3</td><td style="text-align:center;">匹配父元素的最后一个子元素</td></tr><tr><td style="text-align:center;">E:nth-child(n)</td><td style="text-align:center;">CSS3</td><td style="text-align:center;">匹配父元素的第n个子元素</td></tr><tr><td style="text-align:center;">E:nth-last-child(n)</td><td style="text-align:center;">CSS3</td><td style="text-align:center;">匹配父元素的倒数第n个子元素</td></tr><tr><td style="text-align:center;">E:nth-child(odd)</td><td style="text-align:center;">CSS3</td><td style="text-align:center;">匹配奇数元素</td></tr><tr><td style="text-align:center;">E:nth-child(even)</td><td style="text-align:center;">CSS3</td><td style="text-align:center;">匹配偶数元素</td></tr><tr><td style="text-align:center;">E:checked</td><td style="text-align:center;">CSS3</td><td style="text-align:center;">匹配处于选中状态的元素(用于type为radio与checkbox)</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/* link 未访问的链接 */</span></span>
<span class="line"><span>a:link {color: #FF0000; text-decoration: none} </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* visited 已访问的链接 */</span></span>
<span class="line"><span>a:visited {color: #00FF00; text-decoration: none} </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* hover 鼠标在链接上 */</span></span>
<span class="line"><span>a:hover {color: #FF00FF; text-decoration: underline}  </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* active 激活链接 */</span></span>
<span class="line"><span>a:active {color: #0000FF; text-decoration: underline}  </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* focus 元素在产生输入焦点时的样式 */</span></span>
<span class="line"><span>input[type=&quot;text&quot;]:focus {background: #f6f6f6;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* first-child 匹配父元素的第一个子元素 */</span></span>
<span class="line"><span>li:first-child {color: #f00;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* last-child 匹配父元素的最后一个子元素 */</span></span>
<span class="line"><span>li:last-child {color: #f00;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 奇数 */</span></span>
<span class="line"><span>ul li:nth-child(odd){background-color:#ccc;} </span></span>
<span class="line"><span>ul li:nth-child(2n+1){border-left:2px solid red;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 偶数 */</span></span>
<span class="line"><span>ul li:nth-child(even){background-color:#0F7CCF;}</span></span>
<span class="line"><span>ul li:nth-child(2n){border-left:2px solid black;}   </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 3的倍数 */</span></span>
<span class="line"><span>ul li:nth-child(3n){color:red;font-weight:bold;} </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div class=&quot;test&quot;&gt;</span></span>
<span class="line"><span>    &lt;div&gt;我是一个div元素&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;p&gt;我是一个p元素&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;我是一个p元素&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* checked 匹配用户界面上处于选中状态的元素(用于type为radio与checkbox) */</span></span>
<span class="line"><span>input[name=&quot;love[]&quot;]:checked+label{color:blue;background-color:red;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;checkbox&quot; name=&quot;love[]&quot; id=&quot;book&quot; value=&quot;book&quot;&gt;</span></span>
<span class="line"><span>&lt;label for=&quot;book&quot;&gt;书&lt;/label&gt;</span></span>
<span class="line"><span>&lt;br&gt;</span></span>
<span class="line"><span>&lt;input type=&quot;checkbox&quot; name=&quot;love[]&quot; id=&quot;music&quot; value=&quot;music&quot;&gt;</span></span>
<span class="line"><span>&lt;label for=&quot;music&quot;&gt;音乐&lt;/label&gt;</span></span>
<span class="line"><span>&lt;br&gt;</span></span>
<span class="line"><span>&lt;input type=&quot;checkbox&quot; name=&quot;love[]&quot; id=&quot;movie&quot; value=&quot;movie&quot;&gt;</span></span>
<span class="line"><span>&lt;label for=“movie”&gt;电影&lt;/label&gt;</span></span>
<span class="line"><span>&lt;br&gt;</span></span></code></pre></div><ul><li>属性选择符</li></ul><table><thead><tr><th style="text-align:center;">选择符</th><th style="text-align:center;">版本</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>E[att]</code></td><td style="text-align:center;">CSS2</td><td style="text-align:center;">具有att属性的元素</td></tr><tr><td style="text-align:center;"><code>E[att=&quot;val&quot;</code>]</td><td style="text-align:center;">CSS2</td><td style="text-align:center;">具有att属性且属性值等于val的元素</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>p[class]{color:green;}</span></span>
<span class="line"><span>p[class=&quot;qq&quot;]{color:red;}     </span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;p class=&quot;a&quot;&gt;测试数据1&lt;/p&gt;</span></span>
<span class="line"><span>&lt;p class=&quot;qq&quot;&gt;测试数据2&lt;/p&gt;</span></span></code></pre></div><ul><li>伪对象选择符</li></ul><table><thead><tr><th style="text-align:center;">选择符</th><th style="text-align:center;">版本</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">E:before / E::before</td><td style="text-align:center;">CSS2/3</td><td style="text-align:center;">设置在对象前追加内容。用来和content属性一起使用</td></tr><tr><td style="text-align:center;">E:after / E::after</td><td style="text-align:center;">CSS2/3</td><td style="text-align:center;">设置在对象后追加内容。用来和content属性一起使用</td></tr></tbody></table><blockquote><p>before after</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>.t2::before{content:&#39;123&#39;;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.t2::after{content:&#39;123&#39;;}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;p class=&quot;t2&quot;&gt;test&lt;/p&gt;</span></span></code></pre></div><blockquote><p>选择符优先权</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>!important &gt; 行内样式 &gt;ID选择器 &gt; 类选择器 &gt; 标签 &gt; 通配符 &gt; 继承 &gt; 浏览器默认属性</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CSS样式的层级越深执行的权限就越大</span></span></code></pre></div><h2 id="css语法规则" tabindex="-1">CSS语法规则 <a class="header-anchor" href="#css语法规则" aria-label="Permalink to &quot;CSS语法规则&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">版本</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">!important</td><td style="text-align:center;">CSS1</td><td style="text-align:center;">提升指定样式的应用优先权</td></tr><tr><td style="text-align:center;">@import</td><td style="text-align:center;">CSS1/3</td><td style="text-align:center;">导入外部样式表及目标媒体,该规则必须在样式表头部最先声明</td></tr><tr><td style="text-align:center;">@media</td><td style="text-align:center;">CSS2/3</td><td style="text-align:center;">指定样式表规则用于指定的媒体类型和条件</td></tr><tr><td style="text-align:center;">@font-face</td><td style="text-align:center;">CSS3</td><td style="text-align:center;">设置嵌入HTML文档的OpenType字体</td></tr><tr><td style="text-align:center;">@keyframes</td><td style="text-align:center;">CSS3</td><td style="text-align:center;">指定动画名称和动画效果</td></tr><tr><td style="text-align:center;">CSS度量单位</td><td style="text-align:center;">CSS</td><td style="text-align:center;">CSS常用单位</td></tr><tr><td style="text-align:center;">CSS浏览器前缀</td><td style="text-align:center;">CSS3</td><td style="text-align:center;">CSS浏览器引擎前缀</td></tr></tbody></table><h2 id="important" tabindex="-1">!important <a class="header-anchor" href="#important" aria-label="Permalink to &quot;!important&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>HTML中的标签会继承部分父标签的样式。body { color:#ff0000;}   </span></span>
<span class="line"><span>那么页面中,body之下的所有标签及标签下的所有子标签的文本都将变成红色  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>!important 在两个相同类型的css样式定义中,往优先执行后面一个</span></span>
<span class="line"><span></span></span>
<span class="line"><span>p{font-size:14px;font-size:20px;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但是可以通过!important语法,提升某一句样式表的重要性,使及优先执先 !important标注的语句</span></span>
<span class="line"><span></span></span>
<span class="line"><span>p{ </span></span>
<span class="line"><span>    font-size:14px!important; </span></span>
<span class="line"><span>    font-size:20px;</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h2 id="import" tabindex="-1">@import <a class="header-anchor" href="#import" aria-label="Permalink to &quot;@import&quot;">​</a></h2><ol><li>指定导入的外部样式表及目标媒体</li><li>该规则必须在样式表头部最先声明</li><li>IE使用@import无法引入超过35条的样式表</li><li>使用url(url)和直接使用url需要注意的地方</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@import url(&quot;global.css&quot;);</span></span>
<span class="line"><span>@import url(global.css);</span></span>
<span class="line"><span>@import &quot;global.css&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>以上3种方式都有效。当使用url(url)的方式时，包住路径的引号可有可无；</span></span>
<span class="line"><span>当直接使用url时，包住路径的引号必须保留</span></span>
<span class="line"><span></span></span>
<span class="line"><span>指定媒体查询</span></span>
<span class="line"><span>@import url(example.css) screen and (min-width:800px);</span></span>
<span class="line"><span>@import url(example.css) screen and (width:800px),(color);</span></span>
<span class="line"><span>@import url(example.css) screen and (min-device-width:500px) and (max-device-width:1024px);</span></span></code></pre></div><hr><h2 id="media" tabindex="-1">media <a class="header-anchor" href="#media" aria-label="Permalink to &quot;media&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1. 指定样式表规则用于指定的媒体类型和查询条件</span></span>
<span class="line"><span>2. IE8及以下只能实现CSS2中的部分，即只可以设置媒体类型</span></span>
<span class="line"><span>3. 媒体查询可以被用在CSS中的@media和@import规则上，媒体查询让CSS可以更精确作用于不同的媒体类型和同一媒体的不同条件. </span></span>
<span class="line"><span>通过这个标签属性，我们可以很方便的在不同的设备下实现丰富的界面.特别是移动设备，将会运用更加的广泛.</span></span>
<span class="line"><span>语法结构及用法</span></span>
<span class="line"><span>@media 设备名 only (选取条件) not (选取条件) and(设备选取条件)，设备二{sRules}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;link rel=&quot;stylesheet&quot; media=&quot;screen and (max-width: 600px)&quot; href=&quot;small.css&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@media screen and (max-width: 600px) {   </span></span>
<span class="line"><span>  选择器 {   </span></span>
<span class="line"><span>    属性：属性值；   </span></span>
<span class="line"><span>  }   </span></span>
<span class="line"><span></span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>body {</span></span>
<span class="line"><span>    background-color:lightgreen;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@media screen and (max-width: 300px) {</span></span>
<span class="line"><span>    body {</span></span>
<span class="line"><span>        background-color:lightblue;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">值</th><th style="text-align:center;">Min/Max</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">device-height</td><td style="text-align:center;">length</td><td style="text-align:center;">yes</td><td style="text-align:center;">设备屏幕的输出高</td></tr><tr><td style="text-align:center;">device-width</td><td style="text-align:center;">length</td><td style="text-align:center;">yes</td><td style="text-align:center;">设备屏幕的输出宽度</td></tr><tr><td style="text-align:center;">height</td><td style="text-align:center;">length</td><td style="text-align:center;">yes</td><td style="text-align:center;">渲染界面的高度</td></tr><tr><td style="text-align:center;">width</td><td style="text-align:center;">length</td><td style="text-align:center;">yes</td><td style="text-align:center;">渲染界面的宽度</td></tr><tr><td style="text-align:center;">orientation</td><td style="text-align:center;">portrait , landscape</td><td style="text-align:center;">no</td><td style="text-align:center;">横屏或竖屏</td></tr></tbody></table><h2 id="font-face" tabindex="-1">@font-face <a class="header-anchor" href="#font-face" aria-label="Permalink to &quot;@font-face&quot;">​</a></h2><p>设置嵌入HTML文档的字体</p><p>需要兼容当前的主流浏览器，需同时使用.ttf、.woff、.eot、.svg四种字体格式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@font-face {</span></span>
<span class="line"><span>    font-family: &#39;diyfont&#39;;</span></span>
<span class="line"><span>    src: url(&#39;diyfont.eot&#39;); /* IE9+ */</span></span>
<span class="line"><span>    src: url(&#39;diyfont.eot?#iefix&#39;) format(&#39;embedded-opentype&#39;), /* IE6-IE8 */</span></span>
<span class="line"><span>         url(&#39;diyfont.woff&#39;) format(&#39;woff&#39;), /* chrome、firefox */</span></span>
<span class="line"><span>         url(&#39;diyfont.ttf&#39;) format(&#39;truetype&#39;), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/</span></span>
<span class="line"><span>         url(&#39;diyfont.svg#fontname&#39;) format(&#39;svg&#39;); /* iOS 4.1 */</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h2 id="常用的css度量单位" tabindex="-1">常用的CSS度量单位 <a class="header-anchor" href="#常用的css度量单位" aria-label="Permalink to &quot;常用的CSS度量单位&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>em </span></span>
<span class="line"><span>相对长度单位。相对于当前对象内文本的字体尺寸。 </span></span>
<span class="line"><span>如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>em有如下特点： </span></span>
<span class="line"><span>1. em的值并不是固定的； </span></span>
<span class="line"><span>2. em会继承父级元素的字体大小。 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>px </span></span>
<span class="line"><span>像素（Pixel）。相对长度单位。 </span></span>
<span class="line"><span>像素是相对于显示器屏幕分辨率而言的。譬如，WONDOWS的用户所使用的分辨率一般是96像素/英寸。</span></span>
<span class="line"><span>而MAC的用户所使用的分辨率一般是72像素/英寸。 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>em vs px </span></span>
<span class="line"><span>em 指字体高，任意浏览器的默认字体高都是16px。所以未经调整的浏览器都符合: 1em=16px。</span></span>
<span class="line"><span>那么12px=0.75em, 10px=0.625em。</span></span>
<span class="line"><span>为了简化font-size的换算，需要在css中的body选择器中声明Font-size=62.5%，</span></span>
<span class="line"><span>这就使em值变为 16px*62.5%=10px, 这样12px=1.2em, 10px=1em, </span></span>
<span class="line"><span>也就是说只需要将你的原来的px数值除以10，然后换上em作为单位就行了。 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>rem</span></span>
<span class="line"><span>相对长度单位。相对于根元素(即html元素)font-size计算值的倍数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实例：</span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>    html,h1 {</span></span>
<span class="line"><span>        font-size: 12px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    p {</span></span>
<span class="line"><span>        font-size: 2rem;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;下面的文字将是html定义的字体大小的2倍：&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;p&gt;我是html定义的12px的2倍，字体大小为24px&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在使用rem单位的时候，我们为了统一管理和转换，一般会在初始化(reset.css)中设置</span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>    html{</span></span>
<span class="line"><span>        /* 16px = 1rem */</span></span>
<span class="line"><span>        font-size: 16px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>vw / vh </span></span>
<span class="line"><span>相对于视口的宽度。视口被均分为100单位的vw</span></span>
<span class="line"><span>相对于视口的高度。视口被均分为100单位的vh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>    h1 {</span></span>
<span class="line"><span>        font-size: 8vw;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    h2 {</span></span>
<span class="line"><span>        font-size: 8vh;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><hr><h2 id="颜色" tabindex="-1">颜色 <a class="header-anchor" href="#颜色" aria-label="Permalink to &quot;颜色&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>color:red /* 用单词形式来表示颜色 */</span></span>
<span class="line"><span>color:rgb();   /* 用rgb的形式来表示颜色 */</span></span>
<span class="line"><span>color:rgba();  /* 用rgba的形式来表示颜色 a 表示opacity 表示透明度*/</span></span>
<span class="line"><span>color:#3456787    /* 用十六进制的形式来表示颜色 */</span></span></code></pre></div><hr><h2 id="浏览器引擎前缀-vendor-prefix-有哪些" tabindex="-1">浏览器引擎前缀(Vendor Prefix)有哪些？ <a class="header-anchor" href="#浏览器引擎前缀-vendor-prefix-有哪些" aria-label="Permalink to &quot;浏览器引擎前缀(Vendor Prefix)有哪些？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-moz-     /* 火狐等使用Mozilla浏览器引擎的浏览器 */</span></span>
<span class="line"><span>-webkit-  /* Safari, 谷歌浏览器等使用Webkit引擎的浏览器 */</span></span>
<span class="line"><span>-o-       /* Opera浏览器(早期) */</span></span>
<span class="line"><span>-ms-      /* Internet Explorer (不一定) */</span></span></code></pre></div><hr><h2 id="浏览器引擎前缀-vendor-prefix-的用法" tabindex="-1">浏览器引擎前缀(vendor-prefix)的用法 <a class="header-anchor" href="#浏览器引擎前缀-vendor-prefix-的用法" aria-label="Permalink to &quot;浏览器引擎前缀(vendor-prefix)的用法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>当需要使用浏览器引擎前缀(vendor-prefix)时，最好是把带有各种前缀的写法放在前面，</span></span>
<span class="line"><span>然后把不带前缀的标准的写法放到最后。比如：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 简单属性 */</span></span>
<span class="line"><span>.myClass {</span></span>
<span class="line"><span>    -webkit-animation-name: fadeIn;</span></span>
<span class="line"><span>    -moz-animation-name: fadeIn;</span></span>
<span class="line"><span>    -o-animation-name: fadeIn;</span></span>
<span class="line"><span>    -ms-animation-name: fadeIn;</span></span>
<span class="line"><span>    animation-name: fadeIn;  /* 不带前缀的放到最后 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 复杂属性 keyframes */</span></span>
<span class="line"><span>@-webkit-keyframes fadeIn {</span></span>
<span class="line"><span>    0% { opacity: 0; } 100% { opacity: 0; }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@-moz-keyframes fadeIn {</span></span>
<span class="line"><span>    0% { opacity: 0; } 100% { opacity: 0; }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@-o-keyframes fadeIn {</span></span>
<span class="line"><span>    0% { opacity: 0; } 100% { opacity: 0; }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@-ms-keyframes fadeIn {</span></span>
<span class="line"><span>    0% { opacity: 0; } 100% { opacity: 0; }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/* 不带前缀的放到最后 */</span></span>
<span class="line"><span>@keyframes fadeIn {</span></span>
<span class="line"><span>    0% { opacity: 0; } 100% { opacity: 0; }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="css常用样式-上" tabindex="-1">CSS常用样式（上） <a class="header-anchor" href="#css常用样式-上" aria-label="Permalink to &quot;CSS常用样式（上）&quot;">​</a></h2><ul><li>尺寸样式 (width min-width max-width height min-height max-height)</li><li>字体样式 (font font-style font-variant font-weight font-size.....)</li><li>文本样式 (text-transform white-space tab-size word-wrap.......)</li><li>边框样式（border-width border-style border-color border-radius）</li><li>边距样式（margin padding......）</li><li>背景样式（background-image background-repeat background......）</li><li>列表样式（list-style-type list-style-position list-style-image....）</li><li>鼠标样式（url default auto crosshair pointer move ne-resize......）</li><li>布局样式（文档流 display float clear overflow overflow-x overflow-y.....）</li><li>定位样式（position z-index top right bottom left.......）</li><li>多列样式（column-width column-count column-gap column-rule.....）</li><li>伸缩盒样式（flex flex-grow flex-shrink flex-basis flex-flow.....）</li><li><a href="http://css.doyoe.com/" target="_blank" rel="noreferrer">手册</a></li></ul><h3 id="尺寸样式" tabindex="-1">尺寸样式 <a class="header-anchor" href="#尺寸样式" aria-label="Permalink to &quot;尺寸样式&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">width</td><td style="text-align:center;">宽度</td></tr><tr><td style="text-align:center;">height</td><td style="text-align:center;">高度</td></tr><tr><td style="text-align:center;">min-width</td><td style="text-align:center;">最小宽度</td></tr><tr><td style="text-align:center;">max-width</td><td style="text-align:center;">最大宽度</td></tr><tr><td style="text-align:center;">min-height</td><td style="text-align:center;">最小高度</td></tr><tr><td style="text-align:center;">max-height</td><td style="text-align:center;">最大高度</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;demo&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo{</span></span>
<span class="line"><span>    width:100px;</span></span>
<span class="line"><span>    min-width:100px;</span></span>
<span class="line"><span>    max-width:200px;</span></span>
<span class="line"><span>    height:100px;</span></span>
<span class="line"><span>    min-height:100px;</span></span>
<span class="line"><span>    max-height:200px;</span></span>
<span class="line"><span>    background-color:red;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="字体样式" tabindex="-1">字体样式 <a class="header-anchor" href="#字体样式" aria-label="Permalink to &quot;字体样式&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">font-style</td><td style="text-align:center;">设置字体样式</td></tr><tr><td style="text-align:center;">font-variant</td><td style="text-align:center;">设置字体为小型的大写字母</td></tr><tr><td style="text-align:center;">font-weight</td><td style="text-align:center;">设置字体粗细</td></tr><tr><td style="text-align:center;">font-size</td><td style="text-align:center;">设置字体尺寸</td></tr><tr><td style="text-align:center;">font-family</td><td style="text-align:center;">设置字体类型</td></tr><tr><td style="text-align:center;">font</td><td style="text-align:center;">字体缩写(style variant weight size/line-height family)</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;demo&quot;&gt;demo&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo{</span></span>
<span class="line"><span>    font-style:normal;  /* 指定文本字体样式为正常的字体 */</span></span>
<span class="line"><span>    font-style:italic;    /* 指定文本字体样式为斜体。对于没有设计斜体的特殊字体，如果要使用斜体外观将应用oblique */</span></span>
<span class="line"><span>    font-style:oblique; /* 指定文本字体样式为倾斜的字体。人为的使文字倾斜，而不是去选取字体中的斜体字 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    font-variant:normal; /* 正常的字体 */</span></span>
<span class="line"><span>    font-variant:small-caps; /* 小型的大写字母字体 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    font-weight:normal; /*正常的字体。相当于数字值400*/</span></span>
<span class="line"><span>    font-weight:bold; /* bold粗体。相当于数字值700*/</span></span>
<span class="line"><span>    font-weight:bolder; /* bolder：定义比继承值更重的值 */</span></span>
<span class="line"><span>    font-weight:lighter; /* lighter：定义比继承值更轻的值 */</span></span>
<span class="line"><span>    font-weight:900;  /* 用数值来表示 100-900*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    font-size:20px;  /* 设置字体大小 */</span></span>
<span class="line"><span>    font-family:&#39;微软雅黑&#39;; /* 设置字体类型 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    font:italic small-caps bolder 20px/30px &#39;微软雅黑&#39;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="文本样式" tabindex="-1">文本样式 <a class="header-anchor" href="#文本样式" aria-label="Permalink to &quot;文本样式&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">text-align</td><td style="text-align:center;">设置文本中内容的水平对齐方式</td></tr><tr><td style="text-align:center;">letter-spacing</td><td style="text-align:center;">设置文本之间的间距</td></tr><tr><td style="text-align:center;">text-indent</td><td style="text-align:center;">设置文本首行缩进</td></tr><tr><td style="text-align:center;">line-height</td><td style="text-align:center;">设置行高</td></tr><tr><td style="text-align:center;">text-shadow</td><td style="text-align:center;">设置文本阴影</td></tr><tr><td style="text-align:center;">text-decoration</td><td style="text-align:center;">设置文本样式缩写</td></tr><tr><td style="text-align:center;">text-transform</td><td style="text-align:center;">设置文本大小写</td></tr><tr><td style="text-align:center;">white-space</td><td style="text-align:center;">设置文本空格的处理方式</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;demo&quot;&gt;XXXX&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>text-align:left;  /*内容左对齐*/</span></span>
<span class="line"><span>text-align:center;    /*内容居中对齐*/</span></span>
<span class="line"><span>text-align:right;    /*内容右对齐*/</span></span>
<span class="line"><span>text-align:justify;    /*内容两端对齐，但对于强制打断的行（被打断的这一行）及最后一行（包括仅有一行文本的情况，因为它既是第一行也是最后一行）不做处理*/</span></span>
<span class="line"><span>text-align:start;    /*内容对齐开始边界*/</span></span>
<span class="line"><span>text-align:end;        /*内容对齐结束边界*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>letter-spacing:30px;    /*字与字之间的间距*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>text-indent:30px;    /*首行缩进*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>line-height:30px;    /*行高*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>text-shadow:10px 20px 30px red;        /* 水平方向的值 垂直方向的值 阴影模糊的值 模糊的颜色 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>text-decoration:underline solid red; /* 线的位置 线的类型 线的颜色*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>text-transform:none;  /*无转换*/</span></span>
<span class="line"><span>text-transform:capitalize; /*将每个单词的第一个字母转换成大写*/</span></span>
<span class="line"><span>text-transform:uppercase; /*将每个单词转换成大写*/</span></span>
<span class="line"><span>text-transform:lowercase; /*将每个单词转换成小写*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>white-space:normal; /*默认处理方式*/</span></span>
<span class="line"><span>white-space:pre; /*用等宽字体显示预先格式化的文本，不合并文字间的空白距离，当文字超出边界时不换行。*/</span></span>
<span class="line"><span>white-space:nowrap; /*强制在同一行内显示所有文本，合并文本间的多余空白，直到文本结束或者遭遇br对象*/</span></span>
<span class="line"><span>white-space:pre-wrap; /*用等宽字体显示预先格式化的文本，不合并文字间的空白距离，当文字碰到边界时发生换行*/</span></span>
<span class="line"><span>white-space:pre-line; /*保持文本的换行，不保留文字间的空白距离，当文字碰到边界时发生换行*/</span></span></code></pre></div><h3 id="边框样式" tabindex="-1">边框样式 <a class="header-anchor" href="#边框样式" aria-label="Permalink to &quot;边框样式&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">border-width</td><td style="text-align:center;">设置元素边框宽度</td></tr><tr><td style="text-align:center;">border-style</td><td style="text-align:center;">设置元素边框样式</td></tr><tr><td style="text-align:center;">border-color</td><td style="text-align:center;">设置元素边框颜色</td></tr><tr><td style="text-align:center;">border</td><td style="text-align:center;">复合属性。设置元素边框的特性</td></tr><tr><td style="text-align:center;">border-radius</td><td style="text-align:center;">设置元素使用圆角边框</td></tr><tr><td style="text-align:center;">box-shadow</td><td style="text-align:center;">设置元素阴影</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;demo&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo{</span></span>
<span class="line"><span>    width:100px;</span></span>
<span class="line"><span>    height:100px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    border-width:20px;  /*设置元素边框宽度*/</span></span>
<span class="line"><span>    border-style:solid;    /*设置元素边框样式*/</span></span>
<span class="line"><span>    border-color:red;    /*设置元素边框颜色*/</span></span>
<span class="line"><span>    border:1px solid red; /*复合属性。设置元素边框的特性*/</span></span>
<span class="line"><span>    border-radius:20px;    /*设置元素使用圆角边框*/</span></span>
<span class="line"><span>    box-shadow:10px 20px 30px 40px green;    /*设置元素阴影*/</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="举例1-利用-border-属性画一个三角形-小技巧" tabindex="-1">举例1：利用 border 属性画一个三角形（小技巧） <a class="header-anchor" href="#举例1-利用-border-属性画一个三角形-小技巧" aria-label="Permalink to &quot;举例1：利用 border 属性画一个三角形（小技巧）&quot;">​</a></h3><p>完整代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>div{</span></span>
<span class="line"><span>    width: 0;</span></span>
<span class="line"><span>    height: 0;</span></span>
<span class="line"><span>    border: 50px solid transparent;</span></span>
<span class="line"><span>    border-top-color: red;</span></span>
<span class="line"><span>    border-bottom: none;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>步骤如下：</p><p>（1）当我们设置盒子的width和height为0时，此时效果如下：</p><p><img src="http://img.smyhvae.com/20170728_1639.png" alt="img"></p><p>（2）然后将border的底部取消：</p><p><img src="http://img.smyhvae.com/20170728_1645.png" alt="img"></p><p>（3）最后设置border的左边和右边为白色或者<strong>透明</strong>：</p><p><img src="http://img.smyhvae.com/20170728_1649.png" alt="img"></p><p>这样，一个三角形就画好了。</p><h3 id="举例2-利用-border-属性画一个三角形-更推荐的技巧" tabindex="-1">举例2：利用 border 属性画一个三角形（更推荐的技巧） <a class="header-anchor" href="#举例2-利用-border-属性画一个三角形-更推荐的技巧" aria-label="Permalink to &quot;举例2：利用 border 属性画一个三角形（更推荐的技巧）&quot;">​</a></h3><p>上面的例子1中，画出来的是直角三角形，可如果我想画等边三角形，要怎么做呢？</p><p>完整代码如下：（用 css 画等边三角形）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.div1{</span></span>
<span class="line"><span>    width: 0;</span></span>
<span class="line"><span>    height: 0;</span></span>
<span class="line"><span>    border-top: 30px solid red;</span></span>
<span class="line"><span>    /* 通过改变 border-left 和 border-right 中的像素值，来改变三角形的形状 */</span></span>
<span class="line"><span>    border-left: 20px solid transparent;</span></span>
<span class="line"><span>    border-right: 20px solid transparent;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>效果如下：</p><p><img src="http://img.smyhvae.com/20191004_1830.png" alt="img"></p><p>另外，我们在上方代码的基础之上，再加一个 <code>border-radus: 20px;</code> 就能画出一个扇形。</p><h3 id="边距样式" tabindex="-1">边距样式 <a class="header-anchor" href="#边距样式" aria-label="Permalink to &quot;边距样式&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">margin</td><td style="text-align:center;">外边距</td></tr><tr><td style="text-align:center;">padding</td><td style="text-align:center;">内边距</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;demo&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo{</span></span>
<span class="line"><span>    width:100px;</span></span>
<span class="line"><span>    height:100px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    background-color:red;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    margin:10px;</span></span>
<span class="line"><span>    margin:10px 20px;</span></span>
<span class="line"><span>    margin:10px 20px 30px;</span></span>
<span class="line"><span>    margin:10px 20px 30px 40px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    padding:10px;</span></span>
<span class="line"><span>    padding:10px 20px;</span></span>
<span class="line"><span>    padding:10px 20px 30px;</span></span>
<span class="line"><span>    padding:10px 20px 30px 40px;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="背景样式" tabindex="-1">背景样式 <a class="header-anchor" href="#背景样式" aria-label="Permalink to &quot;背景样式&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">background-color</td><td style="text-align:center;">设置元素的背景颜色</td></tr><tr><td style="text-align:center;">background-image</td><td style="text-align:center;">设置元素的背景图像</td></tr><tr><td style="text-align:center;">background</td><td style="text-align:center;">复合属性。设置元素的背景特性</td></tr><tr><td style="text-align:center;">background-repeat</td><td style="text-align:center;">设置元素的背景图像如何铺排填充</td></tr><tr><td style="text-align:center;">background-position</td><td style="text-align:center;">设置元素的背景图像位置</td></tr><tr><td style="text-align:center;">background-size</td><td style="text-align:center;">设置元素的背景图像的尺寸大小</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;demo&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo{</span></span>
<span class="line"><span>    width:100px;</span></span>
<span class="line"><span>    height:100px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    background-color:red;        /*设置元素的背景颜色*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    background-image:url(&#39;pic.png&#39;);    /*设置元素的背景图像*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    background-repeat:repeat-x;        /*设置元素的背景图像如何铺排填充*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    background-position:right top;    /*设置元素的背景图像位置*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    background:url(test1.jpg) no-repeat  10px 20px/110px 130px      #aaa;</span></span>
<span class="line"><span>    /*image repeat  position size  color */</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="列表样式" tabindex="-1">列表样式 <a class="header-anchor" href="#列表样式" aria-label="Permalink to &quot;列表样式&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">list-style-type</td><td style="text-align:center;">设置列表项所使用的预设标记</td></tr><tr><td style="text-align:center;">list-style-position</td><td style="text-align:center;">设置列表项标记如何根据文本排列</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;ul class=&quot;demo&quot;&gt;</span></span>
<span class="line"><span>    &lt;li&gt;demo&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;demo&lt;/li&gt;</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo{</span></span>
<span class="line"><span>    list-style-type:circle;    /*空心圆*/</span></span>
<span class="line"><span>    list-style-type:disc;    /*实心圆*/</span></span>
<span class="line"><span>    list-style-type:square;    /*实心方块*/</span></span>
<span class="line"><span>    list-style-type:none;    /*不使用项目符号*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    list-style-position:outside;  /*列表项目标记放置在文本以外，且环绕文本不根据标记对齐*/</span></span>
<span class="line"><span>    list-style-position:inside;      /*列表项目标记放置在文本以内，且环绕文本根据标记对齐*/</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="鼠标样式" tabindex="-1">鼠标样式 <a class="header-anchor" href="#鼠标样式" aria-label="Permalink to &quot;鼠标样式&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;p&gt;请把鼠标移动到单词上，可以看到鼠标指针发生变化：&lt;/p&gt;</span></span>
<span class="line"><span>&lt;span style=&quot;cursor:auto&quot;&gt;Auto - 默认。浏览器设置的光标。&lt;/span&gt;&lt;br /&gt;</span></span>
<span class="line"><span>&lt;span style=&quot;cursor:crosshair&quot;&gt;Crosshair - 光标呈现为十字线。&lt;/span&gt;&lt;br /&gt;</span></span>
<span class="line"><span>&lt;span style=&quot;cursor:default&quot;&gt;Default -  默认光标（通常是一个箭头）&lt;/span&gt;&lt;br /&gt;</span></span>
<span class="line"><span>&lt;span style=&quot;cursor:pointer&quot;&gt;Pointer - 光标呈现为指示链接的指针（一只手）&lt;/span&gt;&lt;br /&gt;</span></span>
<span class="line"><span>&lt;span style=&quot;cursor:move&quot;&gt;Move - 此光标指示某对象可被移动&lt;/span&gt;&lt;br /&gt;</span></span>
<span class="line"><span>&lt;span style=&quot;cursor:e-resize&quot;&gt;e-resize - 此光标指示矩形框的边缘可被向右（东）移动&lt;/span&gt;&lt;br /&gt;</span></span>
<span class="line"><span>&lt;span style=&quot;cursor:ne-resize&quot;&gt;ne-resize - 此光标指示矩形框的边缘可被向上及向右移动（北/东）&lt;/span&gt;&lt;br /&gt;</span></span>
<span class="line"><span>&lt;span style=&quot;cursor:nw-resize&quot;&gt;nw-resize - 此光标指示矩形框的边缘可被向上及向左移动（北/西）&lt;/span&gt;&lt;br /&gt;</span></span>
<span class="line"><span>&lt;span style=&quot;cursor:n-resize&quot;&gt;n-resize - 此光标指示矩形框的边缘可被向上（北）移动&lt;/span&gt;&lt;br /&gt;</span></span>
<span class="line"><span>&lt;span style=&quot;cursor:se-resize&quot;&gt;se-resize - 此光标指示矩形框的边缘可被向下及向右移动（南/东）&lt;/span&gt;&lt;br /&gt;</span></span>
<span class="line"><span>&lt;span style=&quot;cursor:sw-resize&quot;&gt;sw-resize - 此光标指示矩形框的边缘可被向下及向左移动（南/西）&lt;/span&gt;&lt;br /&gt;</span></span>
<span class="line"><span>&lt;span style=&quot;cursor:s-resize&quot;&gt;s-resize - 此光标指示矩形框的边缘可被向下移动（南）&lt;/span&gt;&lt;br /&gt;</span></span>
<span class="line"><span>&lt;span style=&quot;cursor:w-resize&quot;&gt;w-resize - 此光标指示矩形框的边缘可被向左移动（西）&lt;/span&gt;&lt;br /&gt;</span></span>
<span class="line"><span>&lt;span style=&quot;cursor:text&quot;&gt;text - 此光标指示文本&lt;/span&gt;&lt;br /&gt;</span></span>
<span class="line"><span>&lt;span style=&quot;cursor:wait&quot;&gt;wait - 此光标指示程序正忙（通常是一只表或沙漏）&lt;/span&gt;&lt;br /&gt;</span></span>
<span class="line"><span>&lt;span style=&quot;cursor:help&quot;&gt;help - 此光标指示可用的帮助（通常是一个问号或一个气球）&lt;/span&gt;&lt;br /&gt;</span></span>
<span class="line"><span>&lt;span  style=&quot;cursor: url(&#39;GerardTalbot.cur&#39;), default;&quot;&gt;url - 需使用的自定义光标的 URL&lt;/span&gt;&lt;br /&gt;</span></span></code></pre></div><h3 id="布局样式" tabindex="-1">布局样式 <a class="header-anchor" href="#布局样式" aria-label="Permalink to &quot;布局样式&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">display</td><td style="text-align:center;">元素的显示模式</td></tr><tr><td style="text-align:center;">float</td><td style="text-align:center;">元素浮动</td></tr><tr><td style="text-align:center;">clear</td><td style="text-align:center;">清除浮动</td></tr><tr><td style="text-align:center;">overflow</td><td style="text-align:center;">复合属性。设置元素处理溢出内容的方式</td></tr></tbody></table><ol><li>文档流是浏览器解析网页的一个重要概念,对于一个XHTML网页,body元素下的任意元素</li><li>根据其前后顺序，组成了一个上下关系,这便是文档流</li><li>浏览器根据这些元素的顺序去显示它们在网页中的位置。文档流是浏览器的默认显示规则</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;demo&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo{</span></span>
<span class="line"><span>    width:100px;</span></span>
<span class="line"><span>    height:100px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    background-color:red;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    display:inline-block;         /*行间块状元素*/</span></span>
<span class="line"><span>    display:inline;            /*行间元素*/</span></span>
<span class="line"><span>    display: block;            /*块状元素*/</span></span>
<span class="line"><span>    display: none;            /*隐藏元素*/</span></span>
<span class="line"><span>    display: flex;            /*弹性元素*/</span></span>
<span class="line"><span>    display: inline-flex;     /*行间弹性元素*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    float:left;        /*左浮动*/</span></span>
<span class="line"><span>    float:right;    /*右浮动*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    clear:left;        /*左清除*/</span></span>
<span class="line"><span>    clear:right;    /*右清除*/</span></span>
<span class="line"><span>    clear:both;        /*两边清除*/</span></span>
<span class="line"><span>    clear:none;        /*不清除*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    overflow:visible;        /*对溢出内容不做处理，内容可能会超出容器。*/</span></span>
<span class="line"><span>    overflow:hidden;        /*隐藏溢出容器的内容且不出现滚动条。*/</span></span>
<span class="line"><span>    overflow:scroll;        /*隐藏溢出容器的内容，溢出的内容将以卷动滚动条的方式呈现。*/</span></span>
<span class="line"><span>    overflow:auto;            /*当内容没有溢出容器时不出现滚动条，当内容溢出容器时出现滚动条，按需出现滚动条*/</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="文本主要内容" tabindex="-1">文本主要内容 <a class="header-anchor" href="#文本主要内容" aria-label="Permalink to &quot;文本主要内容&quot;">​</a></h2><ul><li>标准文档流 <ul><li>标准文档流的特性</li><li>行内元素和块级元素</li><li>行内元素和块级元素的相互转换</li></ul></li><li>浮动的性质</li><li>浮动的清除</li><li>浏览器的兼容性问题</li><li>浮动中margin相关</li><li>关于margin的IE6兼容问题</li></ul><h2 id="标准文档流" tabindex="-1">标准文档流 <a class="header-anchor" href="#标准文档流" aria-label="Permalink to &quot;标准文档流&quot;">​</a></h2><p>宏观地讲，我们的web页面和photoshop等设计软件有本质的区别：web页面的制作，是个“流”，必须从上而下，像“织毛衣”。而设计软件，想往哪里画个东西，都能画。</p><h3 id="标准文档流的特性" tabindex="-1">标准文档流的特性 <a class="header-anchor" href="#标准文档流的特性" aria-label="Permalink to &quot;标准文档流的特性&quot;">​</a></h3><p><strong>（1）空白折叠现象：</strong></p><p>无论多少个空格、换行、tab，都会折叠为一个空格。</p><p>比如，如果我们想让img标签之间没有空隙，必须紧密连接：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;img src=&quot;images/0.jpg&quot; /&gt;&lt;img src=&quot;images/1.jpg&quot; /&gt;&lt;img src=&quot;images/2.jpg&quot; /&gt;</span></span></code></pre></div><p><strong>（2）高矮不齐，底边对齐：</strong></p><p>举例如下：</p><p><img src="http://img.smyhvae.com/20170729_1508_2.png" alt="img"></p><p><strong>（3）自动换行，一行写不满，换行写。</strong></p><h3 id="行内元素和块级元素" tabindex="-1">行内元素和块级元素 <a class="header-anchor" href="#行内元素和块级元素" aria-label="Permalink to &quot;行内元素和块级元素&quot;">​</a></h3><p>学习的初期，我们就要知道，标准文档流等级森严。标签分为两种等级：</p><ul><li>行内元素</li><li>块级元素</li></ul><p>我们可以举一个例子，看看块级元素和行内元素的区别：</p><p><img src="http://img.smyhvae.com/20170729_1529_2.png" alt="img"></p><p>上图中可以看到，<code>h1</code>标签是块级元素，占据了整行，<code>span</code>标签是行内元素，只占据内容这一部分。</p><p>现在我们尝试给两个标签设置宽高。效果如下：</p><p><img src="http://img.smyhvae.com/20170729_1532_2.png" alt="img"></p><p>上图中，我们尝试给两个标签设置宽高，但发现，宽高属性只对块级元素<code>h1</code>生效。于是我们可以做出如下总结。</p><p><strong>行内元素和块级元素的区别：</strong>（非常重要）</p><p>行内元素：</p><ul><li>与其他行内元素并排；</li><li>不能设置宽、高。默认的宽度，就是文字的宽度。</li></ul><p>块级元素：</p><ul><li>霸占一行，不能与其他任何元素并列；</li><li>能接受宽、高。如果不设置宽度，那么宽度将默认变为父亲的100%。</li></ul><p><strong>行内元素和块级元素的分类：</strong></p><p>在以前的HTML知识中，我们已经将标签分过类，当时分为了：文本级、容器级。</p><p>从HTML的角度来讲，标签分为：</p><ul><li>文本级标签：p、span、a、b、i、u、em。</li><li>容器级标签：div、h系列、li、dt、dd。</li></ul><blockquote><p>PS：为甚么说p是文本级标签呢？因为p里面只能放文字&amp;图片&amp;表单元素，p里面不能放h和ul，p里面也不能放p。</p></blockquote><p>现在，从CSS的角度讲，CSS的分类和上面的很像，就p不一样：</p><ul><li>行内元素：除了p之外，所有的文本级标签，都是行内元素。p是个文本级，但是是个块级元素。</li><li>块级元素：所有的容器级标签都是块级元素，还有p标签。</li></ul><p>我们把上面的分类画一个图，即可一目了然：</p><p><img src="http://img.smyhvae.com/20170729_1545.png" alt="img"></p><h3 id="行内元素和块级元素的相互转换" tabindex="-1">行内元素和块级元素的相互转换 <a class="header-anchor" href="#行内元素和块级元素的相互转换" aria-label="Permalink to &quot;行内元素和块级元素的相互转换&quot;">​</a></h3><p>我们可以通过<code>display</code>属性将块级元素和行内元素进行相互转换。display即“显示模式”。</p><h4 id="块级元素可以转换为行内元素" tabindex="-1">块级元素可以转换为行内元素： <a class="header-anchor" href="#块级元素可以转换为行内元素" aria-label="Permalink to &quot;块级元素可以转换为行内元素：&quot;">​</a></h4><p>一旦，给一个块级元素（比如div）设置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>display: inline;</span></span></code></pre></div><p>那么，这个标签将立即变为行内元素，此时它和一个span无异。inline就是“行内”。也就是说：</p><ul><li>此时这个div不能设置宽度、高度；</li><li>此时这个div可以和别人并排了。</li></ul><p>举例如下：</p><p><img src="http://img.smyhvae.com/20170729_1629.png" alt="img"></p><h4 id="行内元素转换为块级元素" tabindex="-1">行内元素转换为块级元素： <a class="header-anchor" href="#行内元素转换为块级元素" aria-label="Permalink to &quot;行内元素转换为块级元素：&quot;">​</a></h4><p>同样的道理，一旦给一个行内元素（比如span）设置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>display: block;</span></span></code></pre></div><p>那么，这个标签将立即变为块级元素，此时它和一个div无异。block”是“块”的意思。也就是说：</p><ul><li>此时这个span能够设置宽度、高度</li><li>此时这个span必须霸占一行了，别人无法和他并排</li><li>如果不设置宽度，将撑满父亲</li></ul><p>举例如下：</p><p><img src="http://img.smyhvae.com/20170729_1638.png" alt="img"></p><p>标准流里面的限制非常多，导致很多页面效果无法实现。如果我们现在就要并排、并且就要设置宽高，那该怎么办呢？办法是：移民！<strong>脱离标准流</strong>！</p><p>css中一共有三种手段，使一个元素脱离标准文档流：</p><ul><li>（1）浮动</li><li>（2）绝对定位</li><li>（3）固定定位</li></ul><p>这便引出我们今天要讲的内容：浮动。</p><h2 id="浮动的性质" tabindex="-1">浮动的性质 <a class="header-anchor" href="#浮动的性质" aria-label="Permalink to &quot;浮动的性质&quot;">​</a></h2><blockquote><p>浮动是css里面布局用的最多的属性。</p></blockquote><p>现在有两个div，分别设置宽高。我们知道，它们的效果如下：</p><p><img src="http://img.smyhvae.com/20170729_1722.png" alt="img"></p><p>此时，如果给这两个div增加一个浮动属性，比如<code>float: left;</code>，效果如下：</p><p><img src="http://img.smyhvae.com/20170729_1723.png" alt="img"></p><p>这就达到了浮动的效果。此时，两个元素并排了，并且两个元素都能够设置宽度、高度了（这在上一段的标准流中，不能实现）。</p><p>浮动想学好，一定要知道三个性质。接下来讲一讲。</p><h3 id="性质1-浮动的元素脱标" tabindex="-1">性质1：浮动的元素脱标 <a class="header-anchor" href="#性质1-浮动的元素脱标" aria-label="Permalink to &quot;性质1：浮动的元素脱标&quot;">​</a></h3><p>脱标即脱离标准流。我们来看几个例子。</p><p>证明1：</p><p><img src="http://img.smyhvae.com/20170729_2028.png" alt="img"></p><p>上图中，在默认情况下，两个div标签是上下进行排列的。现在由于float属性让上图中的第一个<code>&lt;div&gt;</code>标签出现了浮动，于是这个标签在另外一个层面上进行排列。而第二个<code>&lt;div&gt;</code>还在自己的层面上遵从标准流进行排列。</p><p>证明2：</p><p><img src="http://img.smyhvae.com/20180111_2320.png" alt="img"></p><p>上图中，span标签在标准流中，是不能设置宽高的（因为是行内元素）。但是，一旦设置为浮动之后，即使不转成块级元素，也能够设置宽高了。</p><p>所以能够证明一件事：**一旦一个元素浮动了，那么，将能够并排了，并且能够设置宽高了。无论它原来是个div还是个span。**所有标签，浮动之后，已经不区分行内、块级了。</p><h3 id="性质2-浮动的元素互相贴靠" tabindex="-1">性质2：浮动的元素互相贴靠 <a class="header-anchor" href="#性质2-浮动的元素互相贴靠" aria-label="Permalink to &quot;性质2：浮动的元素互相贴靠&quot;">​</a></h3><p>我们来看一个例子就明白了。</p><p>我们给三个div均设置了<code>float: left;</code>属性之后，然后设置宽高。当改变浏览器窗口大小时，可以看到div的贴靠效果：</p><p><img src="http://img.smyhvae.com/20170730_1910.gif" alt="img"></p><p>上图显示，3号如果有足够空间，那么就会靠着2号。如果没有足够的空间，那么会靠着1号大哥。 如果没有足够的空间靠着1号大哥，3号自己去贴左墙。</p><p>不过3号自己去贴墙的时候，注意：</p><p><img src="http://img.smyhvae.com/20170730_1928.gif" alt="img"></p><p>上图显示，3号贴左墙的时候，并不会往1号里面挤。</p><p>同样，float还有一个属性值是<code>right</code>，这个和属性值<code>left</code>是对称的。</p><h3 id="性质3-浮动的元素有-字围-效果" tabindex="-1">性质3：浮动的元素有“字围”效果 <a class="header-anchor" href="#性质3-浮动的元素有-字围-效果" aria-label="Permalink to &quot;性质3：浮动的元素有“字围”效果&quot;">​</a></h3><p>来看一张图就明白了。我们让div浮动，p不浮动。</p><p><img src="http://img.smyhvae.com/20170730_2005.png" alt="img"></p><p>上图中，我们发现：<strong>div挡住了p，但不会挡住p中的文字</strong>，形成“字围”效果。</p><p>总结：<strong>标准流中的文字不会被浮动的盒子遮挡住</strong>。（文字就像水一样）</p><p>关于浮动我们要强调一点，浮动这个东西，为避免混乱，我们在初期一定要遵循一个原则：<strong>永远不是一个东西单独浮动，浮动都是一起浮动，要浮动，大家都浮动。</strong></p><h3 id="性质4-收缩" tabindex="-1">性质4：收缩 <a class="header-anchor" href="#性质4-收缩" aria-label="Permalink to &quot;性质4：收缩&quot;">​</a></h3><p>收缩：一个浮动的元素，如果没有设置width，那么将自动收缩为内容的宽度（这点非常像行内元素）。</p><p>举例如下：</p><p><img src="http://img.smyhvae.com/20170801_1720.png" alt="img"></p><p>上图中，div本身是块级元素，如果不设置width，它会单独霸占整行；但是，设置div浮动后，它会收缩</p><h3 id="浮动的补充-做网站时注意" tabindex="-1">浮动的补充（做网站时注意） <a class="header-anchor" href="#浮动的补充-做网站时注意" aria-label="Permalink to &quot;浮动的补充（做网站时注意）&quot;">​</a></h3><p><img src="http://img.smyhvae.com/20170731_2248.png" alt="img"></p><p>上图所示，将para1和para2设置为浮动，它们是div的儿子。此时para1+para2的宽度小于div的宽度。效果如上图所示。可如果设置para1+para2的宽度大于div的宽度，我们会发现，para2掉下来了：</p><p><img src="http://img.smyhvae.com/20170731_2252_2.png" alt="img"></p><h3 id="布置一个作业" tabindex="-1">布置一个作业 <a class="header-anchor" href="#布置一个作业" aria-label="Permalink to &quot;布置一个作业&quot;">​</a></h3><p>布置一个作业，要求实现下面的效果：</p><p><img src="http://img.smyhvae.com/20170801_0858.png" alt="img"></p><p>为实现上方效果，代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot; &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;&gt;</span></span>
<span class="line"><span>&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot; xml:lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html;charset=UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>        *{</span></span>
<span class="line"><span>            margin: 0;</span></span>
<span class="line"><span>            padding: 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .header{</span></span>
<span class="line"><span>            width: 970px;</span></span>
<span class="line"><span>            height: 103px;</span></span>
<span class="line"><span>            /*居中。这个语句的意思是：居中：*/</span></span>
<span class="line"><span>            margin: 0 auto;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .header .logo{</span></span>
<span class="line"><span>            float: left;</span></span>
<span class="line"><span>            width: 277px;</span></span>
<span class="line"><span>            height: 103px;</span></span>
<span class="line"><span>            background-color: red;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .header .language{</span></span>
<span class="line"><span>            float: right;</span></span>
<span class="line"><span>            width: 137px;</span></span>
<span class="line"><span>            height: 49px;</span></span>
<span class="line"><span>            background-color: green;</span></span>
<span class="line"><span>            margin-bottom: 8px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .header .nav{</span></span>
<span class="line"><span>            float: right;</span></span>
<span class="line"><span>            width: 679px;</span></span>
<span class="line"><span>            height: 46px;</span></span>
<span class="line"><span>            background-color: green;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .content{</span></span>
<span class="line"><span>            width: 970px;</span></span>
<span class="line"><span>            height: 435px;</span></span>
<span class="line"><span>            /*居中，这个语句今天没讲，你照抄，就是居中：*/</span></span>
<span class="line"><span>            margin: 0 auto;</span></span>
<span class="line"><span>            margin-top: 10px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .content .banner{</span></span>
<span class="line"><span>            float: left;</span></span>
<span class="line"><span>            width: 310px;</span></span>
<span class="line"><span>            height: 435px;</span></span>
<span class="line"><span>            background-color: gold;</span></span>
<span class="line"><span>            margin-right: 10px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .content .rightPart{</span></span>
<span class="line"><span>            float: left;</span></span>
<span class="line"><span>            width: 650px;</span></span>
<span class="line"><span>            height: 435px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .content .rightPart .main{</span></span>
<span class="line"><span>            width: 650px;</span></span>
<span class="line"><span>            height: 400px;</span></span>
<span class="line"><span>            margin-bottom: 10px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .content .rightPart .links{</span></span>
<span class="line"><span>            width: 650px;</span></span>
<span class="line"><span>            height: 25px;</span></span>
<span class="line"><span>            background-color: blue;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .content .rightPart .main .news{</span></span>
<span class="line"><span>            float: left;</span></span>
<span class="line"><span>            width: 450px;</span></span>
<span class="line"><span>            height: 400px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .content .rightPart .main .hotpic{</span></span>
<span class="line"><span>            float: left;</span></span>
<span class="line"><span>            width: 190px;</span></span>
<span class="line"><span>            height: 400px;</span></span>
<span class="line"><span>            background-color: purple;</span></span>
<span class="line"><span>            margin-left: 10px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .content .rightPart .main .news .news1{</span></span>
<span class="line"><span>            width: 450px;</span></span>
<span class="line"><span>            height: 240px;</span></span>
<span class="line"><span>            background-color: skyblue;</span></span>
<span class="line"><span>            margin-bottom: 10px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .content .rightPart .main .news .news2{</span></span>
<span class="line"><span>            width: 450px;</span></span>
<span class="line"><span>            height: 110px;</span></span>
<span class="line"><span>            background-color: skyblue;</span></span>
<span class="line"><span>            margin-bottom: 10px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .content .rightPart .main .news .news3{</span></span>
<span class="line"><span>            width: 450px;</span></span>
<span class="line"><span>            height: 30px;</span></span>
<span class="line"><span>            background-color: skyblue;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .footer{</span></span>
<span class="line"><span>            width: 970px;</span></span>
<span class="line"><span>            height: 35px;</span></span>
<span class="line"><span>            background-color: pink;</span></span>
<span class="line"><span>            /*没学，就是居中：*/</span></span>
<span class="line"><span>            margin: 0 auto;</span></span>
<span class="line"><span>            margin-top: 10px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;!-- 头部 --&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;header&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;logo&quot;&gt;logo&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;language&quot;&gt;语言选择&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;nav&quot;&gt;导航条&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 主要内容 --&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;content&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;banner&quot;&gt;大广告&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;rightPart&quot;&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;main&quot;&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;news&quot;&gt;</span></span>
<span class="line"><span>                    &lt;div class=&quot;news1&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>                    &lt;div class=&quot;news2&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>                    &lt;div class=&quot;news3&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;hotpic&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;links&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 页尾 --&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;footer&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>其实，这个页面的布局是下面这个网站：</p><p><img src="http://img.smyhvae.com/20170801_0900.png" alt="img"></p><h2 id="浮动的清除" tabindex="-1">浮动的清除 <a class="header-anchor" href="#浮动的清除" aria-label="Permalink to &quot;浮动的清除&quot;">​</a></h2><blockquote><p>这里所说的清除浮动，指的是清除浮动与浮动之间的影响。</p></blockquote><h3 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h3><p>通过上面这个例子，我们发现，此例中的网页就是通过浮动实现并排的。</p><p>比如说一个网页有header、content、footer这三部分。就拿content部分来举例，如果设置content的儿子为浮动，但是，这个儿子又是一个全新的标准流，于是儿子的儿子仍然在标准流里。</p><p>从学习浮动的第一天起，我们就要明白，浮动有开始，就要有清除。我们先来做个实验。</p><p>下面这个例子，有两个块级元素div，div没有任何属性，每个div里有li，效果如下：</p><p><img src="http://img.smyhvae.com/20170801_2122.png" alt="img"></p><p>上面这个例子很简单。可如果我们给里面的<code>&lt;li&gt;</code>标签加浮动。效果却成了下面这个样子：</p><p>代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>        *{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        li{</span></span>
<span class="line"><span>            float: left;</span></span>
<span class="line"><span>            width: 100px;</span></span>
<span class="line"><span>            height: 20px;</span></span>
<span class="line"><span>            background-color: pink;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;box1&quot;&gt;</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>            &lt;li&gt;生命壹号1&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;生命壹号2&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;生命壹号3&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;生命壹号4&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;box2&quot;&gt;</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>            &lt;li&gt;许嵩1&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;许嵩2&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;许嵩3&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;许嵩4&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>效果如下：</p><p><img src="http://img.smyhvae.com/20170801_2137.png" alt="img"></p><p>上图中，我们发现：第二组中的第1个li，去贴靠第一组中的最后一个li了（我们本以为这些li会分成两排）。</p><p>这便引出我们要讲的：清除浮动的第一种方式。 那该怎么解决呢？</p><h3 id="方法1-给浮动元素的祖先元素加高度" tabindex="-1">方法1：给浮动元素的祖先元素加高度 <a class="header-anchor" href="#方法1-给浮动元素的祖先元素加高度" aria-label="Permalink to &quot;方法1：给浮动元素的祖先元素加高度&quot;">​</a></h3><p>造成前言中这个现象的根本原因是：li的<strong>父亲div没有设置高度</strong>，导致这两个div的高度均为0px（我们可以通过网页的审查元素进行查看）。div的高度为零，导致不能给自己浮动的孩子，撑起一个容器。</p><p>撑不起一个容器，导致自己的孩子没办法在自己的内部进行正确的浮动。</p><p>好，现在就算给这个div设置高度，可如果div自己的高度小于孩子的高度，也会出现不正常的现象：</p><p><img src="http://img.smyhvae.com/20170801_2152.png" alt="img"></p><p>给div设置一个正确的合适的高度（至少保证高度大于儿子的高度），就可以看到正确的现象：</p><p><img src="http://img.smyhvae.com/20170801_2153.png" alt="img"></p><p><strong>总结：</strong></p><p><strong>如果一个元素要浮动，那么它的祖先元素一定要有高度。</strong></p><p><strong>有高度的盒子，才能关住浮动</strong>。（记住这句过来人的经验之语）</p><p>只要浮动在一个有高度的盒子中，那么这个浮动就不会影响后面的浮动元素。所以就是清除浮动带来的影响了。</p><p><img src="http://img.smyhvae.com/20170801_2200.png" alt="img"></p><p><img src="http://img.smyhvae.com/20170801_2201.png" alt="img"></p><h3 id="方法2-clear-both" tabindex="-1">方法2：clear:both; <a class="header-anchor" href="#方法2-clear-both" aria-label="Permalink to &quot;方法2：clear:both;&quot;">​</a></h3><p>网页制作中，高度height其实很少出现。为什么？因为能被内容撑高！也就是说，刚刚我们讲解的方法1，工作中用得很少。</p><p>那么，能不能不写height，也把浮动清除了呢？也让浮动之间，互不影响呢？</p><p>这个时候，我们可以使用<code>clear:both;</code>这个属性。如下：</p><p><img src="http://img.smyhvae.com/20170801_2233.png" alt="img"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>clear:both;</span></span></code></pre></div><p>clear就是清除，both指的是左浮动、右浮动都要清除。<code>clear:both</code>的意思就是：<strong>不允许左侧和右侧有浮动对象。</strong></p><p>这种方法有一个非常大的、致命的问题，<strong>它所在的标签，margin属性失效了</strong>。读者可以试试看。</p><p>margin失效的本质原因是：上图中的box1和box2，高度为零。</p><h3 id="方法3-隔墙法" tabindex="-1">方法3：隔墙法 <a class="header-anchor" href="#方法3-隔墙法" aria-label="Permalink to &quot;方法3：隔墙法&quot;">​</a></h3><p>上面这个例子中，为了防止第二个div贴靠到第二个div，我们可以在这两个div中间用一个新的div隔开，然后给这个新的div设置<code>clear: both;</code>属性；同时，既然这个新的div无法设置margin属性，我们可以给它设置height，以达到margin的效果（曲线救国）。这便是隔墙法。</p><p>我们看看例子效果就知道了：</p><p><img src="http://img.smyhvae.com/20170802_1109.png" alt="img"></p><p>上图这个例子就是隔墙法。</p><p><strong>内墙法：</strong></p><p>近些年，有演化出了“内墙法”：</p><p><img src="http://img.smyhvae.com/20170802_1123.png" alt="img"></p><p>上面这个图非常重要，当作内墙法的公式，先记下来。</p><p>为了讲内墙法，我们先记住一句重要的话：<strong>一个父亲是不能被浮动的儿子撑出高度的</strong>。举例如下：</p><p>（1）我们在一个div里放一个有宽高的p，效果如下：（很简单）</p><p><img src="http://img.smyhvae.com/20170802_1716.png" alt="img"></p><p>（2）可如果在此基础之上，给p设置浮动，却发现父亲div没有高度了：</p><p><img src="http://img.smyhvae.com/20170802_1730.png" alt="img"></p><p>（3）此时，我么可以在div的里面放一个div（作为内墙），就可以让父亲div恢复高度：</p><p><img src="http://img.smyhvae.com/20170802_1812.png" alt="img"></p><p>于是，我们采用内墙法解决前言中的问题：</p><p><img src="http://img.smyhvae.com/20170802_1834.png" alt="img"></p><p>与外墙法相比，内墙法的优势（本质区别）在于：内墙法可以给它所在的家撑出宽度（让box1有高）。即：box1的高度可以自适应内容。</p><p>而外墙法，虽然一道墙可以把两个div隔开，但是这两个div没有高，也就是说，无法wrap_content。</p><h3 id="清除浮动方法4-overflow-hidden" tabindex="-1">清除浮动方法4：overflow:hidden; <a class="header-anchor" href="#清除浮动方法4-overflow-hidden" aria-label="Permalink to &quot;清除浮动方法4：overflow:hidden;&quot;">​</a></h3><p>我们可以使用如下属性：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>overflow:hidden;</span></span></code></pre></div><p>overflow即“溢出”， hidden即“隐藏”。这个属性的意思是“溢出隐藏”。顾名思义：所有溢出边框的内容，都要隐藏掉。如下：</p><p><img src="http://img.smyhvae.com/20170804_1449.png" alt="img"></p><p>上图显示，<code>overflow:hidden;</code>的本意是清除溢出到盒子外面的文字。但是，前端开发工程师发现了，它能做偏方。如下：</p><p>一个父亲不能被自己浮动的儿子，撑出高度。但是，只要给父亲加上<code>overflow:hidden</code>; 那么，父亲就能被儿子撑出高了。这是一个偏方。</p><p>举个例子：</p><p><img src="http://img.smyhvae.com/20170804_1920.png" alt="img"></p><p>那么对于前言中的例子，我们同样可以使用这一属性：</p><p><img src="http://img.smyhvae.com/20170804_1934.png" alt="img"></p><p>这一招，实际上生成了BFC。关于BFC的解释，详见本项目的另外一篇文章《前端面试/CSS盒模型及BFC.md》。</p><h2 id="浮动清除的总结" tabindex="-1">浮动清除的总结 <a class="header-anchor" href="#浮动清除的总结" aria-label="Permalink to &quot;浮动清除的总结&quot;">​</a></h2><blockquote><p>我们在上一段讲了四种清除浮动的方法，本段来进行一个总结。</p></blockquote><p>浮动的元素，只能被有高度的盒子关住。 也就是说，如果盒子内部有浮动，这个盒子有高，那么妥妥的，浮动不会互相影响。</p><h3 id="_1、加高法" tabindex="-1">1、加高法 <a class="header-anchor" href="#_1、加高法" aria-label="Permalink to &quot;1、加高法&quot;">​</a></h3><p>工作上，我们绝对不会给所有的盒子加高度，这是因为麻烦，并且不能适应页面的快速变化。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div&gt;     //设置height</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div&gt;    //设置height</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><h3 id="_2、clear-both-法" tabindex="-1">2、<code>clear:both;</code>法 <a class="header-anchor" href="#_2、clear-both-法" aria-label="Permalink to &quot;2、\`clear:both;\`法&quot;">​</a></h3><p>最简单的清除浮动的方法，就是给盒子增加clear:both；表示自己的内部元素，不受其他盒子的影响。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div&gt;   //clear:both;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>浮动确实被清除了，不会互相影响了。但是有一个问题，就是margin失效。两个div之间，没有任何的间隙了。</p><h3 id="_3、隔墙法" tabindex="-1">3、隔墙法 <a class="header-anchor" href="#_3、隔墙法" aria-label="Permalink to &quot;3、隔墙法&quot;">​</a></h3><p>在两部分浮动元素中间，建一个墙。隔开两部分浮动，让后面的浮动元素，不去追前面的浮动元素。 墙用自己的身体当做了间隙。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div class=&quot;cl h10&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>我们发现，隔墙法好用，但是第一个div，还是没有高度。如果我们现在想让第一个div，自动根据自己的儿子撑出高度，我们就要想一些“小伎俩”。</p><p>内墙法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;cl h10&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>内墙法的优点就是，不仅仅能够让后部分的p不去追前部分的p了，并且能把第一个div撑出高度。这样，这个div的背景、边框就能够根据p的高度来撑开了。</p><h3 id="_4、overflow-hidden" tabindex="-1">4、<code>overflow:hidden;</code> <a class="header-anchor" href="#_4、overflow-hidden" aria-label="Permalink to &quot;4、\`overflow:hidden;\`&quot;">​</a></h3><p>这个属性的本意，就是将所有溢出盒子的内容，隐藏掉。但是，我们发现这个东西能够用于浮动的清除。 我们知道，一个父亲，不能被自己浮动的儿子撑出高度，但是，如果这个父亲加上了overflow:hidden；那么这个父亲就能够被浮动的儿子撑出高度了。这个现象，不能解释，就是浏览器的偏方。 并且,overflow:hidden;能够让margin生效。</p><p><strong>清除浮动的例子：</strong></p><p>我们现在举个例子，要求实现下图中无序列表部分的效果：</p><p><img src="http://img.smyhvae.com/20170804_2321.png" alt="img"></p><p>对比一下我们讲的四种清除浮动的方法。如果用外墙法，ul中不能插入div标签，因为ul中只能插入li，如果插入li的墙，会浪费语义。如果用内墙法，不美观。综合对比，还是用第四种方法来实现吧，这会让标签显得极其干净整洁：</p><p><img src="http://img.smyhvae.com/20170805_1615.png" alt="img"></p><p>上方代码中，如果没有加<code>overflow:hidden;</code>，那么第二行的li会紧跟着第一行li的后面。</p><h2 id="浏览器的兼容性问题" tabindex="-1">浏览器的兼容性问题 <a class="header-anchor" href="#浏览器的兼容性问题" aria-label="Permalink to &quot;浏览器的兼容性问题&quot;">​</a></h2><blockquote><p>讲一下上述知识点涉及到的浏览器兼容问题。</p></blockquote><h3 id="兼容性1-微型盒子" tabindex="-1">兼容性1（微型盒子） <a class="header-anchor" href="#兼容性1-微型盒子" aria-label="Permalink to &quot;兼容性1（微型盒子）&quot;">​</a></h3><p><strong>兼容性的第一条</strong>：IE6不支持小于12px的盒子，任何小于12px的盒子，在IE6中看都大。即：IE 6不支持微型盒子。</p><p>举个例子。我们设置一个height为 5px 、宽度为 200px的盒子，看下在IE 8和 IE 6中的显示效果：</p><p><img src="http://img.smyhvae.com/20170805_1726.png" alt="img"></p><p>解决办法很简单，就是将盒子的字号大小，设置为<strong>小于盒子的高</strong>，比如，如果盒子的高为5px，那就把font-size设置为0px(0px &lt; 5px)。如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>height: 5px;</span></span>
<span class="line"><span>_font-size: 0px;</span></span></code></pre></div><p>我们现在介绍一下浏览器hack。hack就是“黑客”，就是使用浏览器提供的后门，针对某一种浏览器做兼容。</p><p>IE6留了一个<strong>后门</strong>：只要给css属性之前，加上<strong>下划线</strong>，这个属性就是IE6的专有属性。</p><p>比如说，我们给背景颜色这个属性加上下划线，就变成了<code>_background-color: green;</code>。效果如下：</p><p><img src="http://img.smyhvae.com/20170805_2026.png" alt="img"></p><p>于是乎，为了解决微型盒子（即height小于12px）的问题，正确写法：（注意不要忘记下划线）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>height: 10px;</span></span>
<span class="line"><span>_font-size:0;</span></span></code></pre></div><h3 id="兼容性2" tabindex="-1">兼容性2 <a class="header-anchor" href="#兼容性2" aria-label="Permalink to &quot;兼容性2&quot;">​</a></h3><p>**兼容性的第二条：**IE6不支持用<code>overflow:hidden;</code>来清除浮动。</p><p>解决办法，以毒攻毒。追加一条：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>_zoom:1;</span></span></code></pre></div><p>完整写法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>overflow: hidden;</span></span>
<span class="line"><span>_zoom:1;</span></span></code></pre></div><p>实际上，<code>_zoom:1;</code>能够触发浏览器hasLayout机制。这个机制，不要深究了，因为只有IE6有。我们只需要让IE6好用，具体的实现机制，可以自行查阅。</p><p>需要强调的是，<code>overflow:hidden;</code>的本意，就是让溢出盒子的border的内容隐藏，这个功能是IE6兼容的。不兼容的是<code>overflow:hidden;</code>清除浮动的时候。</p><p><strong>总结：</strong></p><p>我们刚才学习的两个IE6的兼容问题，都是通过多写一条hack来解决的，这个我们称为伴生属性，即两个属性，要写一起写。</p><p>属性1：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>height:6px;</span></span>
<span class="line"><span>_font-size:0;</span></span></code></pre></div><p>属性2：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>overflow:hidden;</span></span>
<span class="line"><span>_zoom:1;</span></span></code></pre></div><h2 id="margin相关" tabindex="-1">margin相关 <a class="header-anchor" href="#margin相关" aria-label="Permalink to &quot;margin相关&quot;">​</a></h2><blockquote><p>我们来讲一下浮动中和margin相关的知识。</p></blockquote><h3 id="margin塌陷-margin重叠" tabindex="-1">margin塌陷/margin重叠 <a class="header-anchor" href="#margin塌陷-margin重叠" aria-label="Permalink to &quot;margin塌陷/margin重叠&quot;">​</a></h3><p><strong>标准文档流中，竖直方向的margin不叠加，取</strong>较大的值**作为margin(水平方向的margin是可以叠加的，即水平方向没有塌陷现象)。如下图所示：</p><p><img src="http://img.smyhvae.com/20170805_0904.png" alt="img"></p><p>如果不在标准流，比如盒子都浮动了，那么两个盒子之间是没有塌陷现象的。</p><h3 id="盒子居中margin-0-auto" tabindex="-1">盒子居中<code>margin:0 auto;</code> <a class="header-anchor" href="#盒子居中margin-0-auto" aria-label="Permalink to &quot;盒子居中\`margin:0 auto;\`&quot;">​</a></h3><p>margin的值可以为auto，表示自动。当left、right两个方向都是auto的时候，盒子居中了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>margin-left: auto;</span></span>
<span class="line"><span>margin-right: auto;</span></span></code></pre></div><p>盒子居中的简写为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>margin:0 auto;</span></span></code></pre></div><p>对上方代码的理解：上下的margin为0，左右的margin都尽可能的大，于是就居中了。</p><p>注意：</p><ul><li>（1）只有标准流的盒子，才能使用<code>margin:0 auto;</code>居中。也就是说，当一个盒子浮动了、绝对定位了、固定定位了，都不能使用margin:0 auto;</li><li>（2）使用<code>margin:0 auto;</code>的盒子，必须有width，有明确的width。（可以这样理解，如果没有明确的width，那么它的width就是霸占整行，没有意义）</li><li>（3）<code>margin:0 auto;</code>是让盒子居中，不是让盒子里的文本居中。文本的居中，要使用<code>text-align:center;</code></li></ul><p>对上面的第三条总结一下：（非常重要）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>margin:0 auto;    //让这个div自己在大容器中的水平方向上居中。</span></span>
<span class="line"><span>text-align: center;  //让这个div内部的文本居中。</span></span></code></pre></div><p>顺便普及一下知识，text-align还有：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>text-align:left;     //没啥用，因为默认居左</span></span>
<span class="line"><span>text-align:right;    //文本居右</span></span></code></pre></div><h3 id="善于使用父亲的padding-而不是儿子的margin" tabindex="-1">善于使用父亲的padding，而不是儿子的margin <a class="header-anchor" href="#善于使用父亲的padding-而不是儿子的margin" aria-label="Permalink to &quot;善于使用父亲的padding，而不是儿子的margin&quot;">​</a></h3><p>我们来看一个奇怪的现象。现在有下面这样一个结构：（div中放一个p）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;p&gt;&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span></code></pre></div><p>上面的结构中，我们尝试通过给儿子<code>p</code>一个<code>margin-top:50px;</code>的属性，让其与父亲保持50px的上边距。结果却看到了下面的奇怪的现象：</p><p><img src="http://img.smyhvae.com/20170806_1537.png" alt="img"></p><p>此时我们给父亲div加一个border属性，就正常了：</p><p><img src="http://img.smyhvae.com/20170806_1544.png" alt="img"></p><p>如果父亲没有border，那么儿子的margin实际上踹的是“流”，踹的是这“行”。所以，父亲整体也掉下来了。</p><p><strong>margin这个属性，本质上描述的是兄弟和兄弟之间的距离； 最好不要用这个marign表达父子之间的距离。</strong></p><p>所以，如果要表达父子之间的距离，我们一定要善于使用父亲的padding，而不是儿子的margin。</p><h2 id="关于margin的ie6兼容问题" tabindex="-1">关于margin的IE6兼容问题 <a class="header-anchor" href="#关于margin的ie6兼容问题" aria-label="Permalink to &quot;关于margin的IE6兼容问题&quot;">​</a></h2><h3 id="ie6的双倍margin的bug" tabindex="-1">IE6的双倍margin的bug： <a class="header-anchor" href="#ie6的双倍margin的bug" aria-label="Permalink to &quot;IE6的双倍margin的bug：&quot;">​</a></h3><p>当出现连续浮动的元素，携带与浮动方向相同的margin时，队首的元素，会双倍marign。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span></code></pre></div><p><img src="http://img.smyhvae.com/20170806_1558.png" alt="img"></p><p>解决方案：</p><p>（1）使浮动的方向和margin的方向，相反。</p><p>所以，你就会发现，我们特别喜欢，浮动的方向和margin的方向相反。并且，前端开发工程师，把这个当做习惯了。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    float: left;</span></span>
<span class="line"><span>    margin-right: 40px;</span></span></code></pre></div><p>（2）使用hack：（没必要，别惯着这个IE6）</p><p>单独给队首的元素，写一个一半的margin：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;li class=&quot;no1&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>ul li.no1{</span></span>
<span class="line"><span>    _margin-left:20px;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>PS：双倍margin的问题，面试经常问哦。</p><h3 id="ie6的3px-bug" tabindex="-1">IE6的3px bug <a class="header-anchor" href="#ie6的3px-bug" aria-label="Permalink to &quot;IE6的3px bug&quot;">​</a></h3><p><img src="http://img.smyhvae.com/20170806_1616.png" alt="img"></p><p>解决办法：不用管，因为根本就不允许用儿子踹父亲（即描述父子之间的距离，请用padding，而不是margin）。所以，如果你出现了3px bug，说明你的代码不标准。</p><p>IE6，千万不要跟他死坑、较劲，它不配。 格调要高，我们讲IE6的兼容性问题，就是为了增加面试的成功率，不是为了成为IE6的专家。</p><h2 id="fireworks和others" tabindex="-1">Fireworks和others <a class="header-anchor" href="#fireworks和others" aria-label="Permalink to &quot;Fireworks和others&quot;">​</a></h2><h3 id="fireworks" tabindex="-1">Fireworks <a class="header-anchor" href="#fireworks" aria-label="Permalink to &quot;Fireworks&quot;">​</a></h3><p>fireworks是Adobe公司的一个设计软件。功能非常多，我们以后用啥讲啥。Fireworks的默认文件格式是png。</p><p>标尺的快捷键：Ctrl + Alt+ R</p><h3 id="others" tabindex="-1">others <a class="header-anchor" href="#others" aria-label="Permalink to &quot;others&quot;">​</a></h3><p>首行缩进两个汉字：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>text-indent: 2em;</span></span></code></pre></div><p>上方属性中，单位比较奇怪，叫做em，em就是汉字的一个宽度。indent的意思是缩进。</p><h3 id="清除浮动" tabindex="-1">清除浮动 <a class="header-anchor" href="#清除浮动" aria-label="Permalink to &quot;清除浮动&quot;">​</a></h3><p>一、浮动产生原因</p><ul><li>简单地说浮动是因为使用了float:left或float:right或两者都有而产生的浮动，导致样式缺失或者不正确显示等问题；</li></ul><p>二、浮动产生负作用</p><ul><li><p>1、背景不能显示 由于浮动产生，如果对父级设置了（CSS background背景）CSS背景颜色或CSS背景图片，而父级不能被撑开，所以导致CSS背景不能显示。</p></li><li><p>2、边框不能撑开 如果父级设置了CSS边框属性（css border），由于子级里使用了float属性，产生浮动，父级不能被撑开，导致边框不能随内容而被撑开。</p></li><li><p>3、margin padding设置值不能正确显示 由于浮动导致父级子级之间设置了css padding、css margin属性的值不能正确表达。特别是上下边的padding和margin不能正确显示。</p></li></ul><p>三、css解决浮动，清除浮动方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>首先列举一个小案例：</span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>    .box{margin: 50px auto;border:1px solid #ccc;background: #fc9;color:#fff;}</span></span>
<span class="line"><span>    .red{width: 80px;height: 100px;background: red;float:left;}</span></span>
<span class="line"><span>    .sienna{width: 80px;height: 100px;background: sienna;float:left;}</span></span>
<span class="line"><span>    .blue{width: 80px;height: 100px;background: blue;float:left;}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;red&quot;&gt;1&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;sienna&quot;&gt;2&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;blue&quot;&gt;3&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>子元素都设置了float属性，父元素div高度不能撑开，样式margin属性显示有问题；</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>方法一：添加新的元素 、应用 clear：both；</span></span>
<span class="line"><span>在浮动的盒子之下再放一个标签，在这个标签中使用clear:both，来清除浮动对页面的影响.</span></span>
<span class="line"><span>注意：一般情况下不会使用这一种方式来清除浮动。因为这种清除浮动的方式会增加页面的标签，造成结构的混乱.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.clear{clear: both;}</span></span>
<span class="line"><span>&lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;red&quot;&gt;1&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;sienna&quot;&gt;2&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;blue&quot;&gt;3&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;clear&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方法二： 使用伪元素来清除浮动(:after,注意：作用于浮动元素的父亲）</span></span>
<span class="line"><span>主要推荐使用这种方法清除浮动</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.clearfix:after{</span></span>
<span class="line"><span>    content:&quot;&quot;;/*设置内容为空*/</span></span>
<span class="line"><span>    height:0;/*高度为0*/</span></span>
<span class="line"><span>    line-height:0;/*行高为0*/</span></span>
<span class="line"><span>    display:block;/*将文本转为块级元素*/</span></span>
<span class="line"><span>    visibility:hidden;/*将元素隐藏*/</span></span>
<span class="line"><span>    clear:both;/*清除浮动*/</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.clearfix{</span></span>
<span class="line"><span>    zoom:1;/*为了兼容IE*/</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;box clearfix&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;red&quot;&gt;1&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;sienna&quot;&gt;2&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;blue&quot;&gt;3&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="定位样式" tabindex="-1">定位样式 <a class="header-anchor" href="#定位样式" aria-label="Permalink to &quot;定位样式&quot;">​</a></h3><p>CSS的定位属性有三种，分别是绝对定位、相对定位、固定定位。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    position: absolute;  &lt;!-- 绝对定位 --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    position: relative;  &lt;!-- 相对定位 --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    position: fixed;     &lt;!-- 固定定位 --&gt;</span></span></code></pre></div><p>下面逐一介绍。</p><h2 id="相对定位" tabindex="-1">相对定位 <a class="header-anchor" href="#相对定位" aria-label="Permalink to &quot;相对定位&quot;">​</a></h2><p><strong>相对定位</strong>：让元素相对于自己原来的位置，进行位置调整（可用于盒子的位置微调）。</p><p>我们之前学习的背景属性中，是通过如下格式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    background-position:向右偏移量 向下偏移量;</span></span></code></pre></div><p>但这回的定位属性，是通过如下格式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    left: 50px;</span></span>
<span class="line"><span>    top: 50px;</span></span></code></pre></div><p>相对定位的举例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!doctype html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span> &lt;head&gt;</span></span>
<span class="line"><span>  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta name=&quot;Generator&quot; content=&quot;EditPlus®&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta name=&quot;Author&quot; content=&quot;&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta name=&quot;Keywords&quot; content=&quot;&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta name=&quot;Description&quot; content=&quot;&quot;&gt;</span></span>
<span class="line"><span>  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        body{</span></span>
<span class="line"><span>            margin: 0px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .div1{</span></span>
<span class="line"><span>            width: 200px;</span></span>
<span class="line"><span>            height: 200px;</span></span>
<span class="line"><span>            border: 1px solid red;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .div2{</span></span>
<span class="line"><span>            position: relative;/*相对定位：相对于自己原来的位置*/</span></span>
<span class="line"><span>            left: 50px;/*横坐标：正值表示向右偏移，负值表示向左偏移*/</span></span>
<span class="line"><span>            top: 50px;/*纵坐标：正值表示向下偏移，负值表示向上偏移*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            width: 200px;</span></span>
<span class="line"><span>            height: 200px;</span></span>
<span class="line"><span>            border: 1px solid red;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span> &lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> &lt;body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;div class=&quot;div1&quot;&gt;有生之年&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;div2&quot;&gt;狭路相逢&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> &lt;/body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>效果：</p><p><img src="http://img.smyhvae.com/2015-10-03-css-28.png" alt="img"></p><h3 id="相对定位不脱标" tabindex="-1">相对定位不脱标 <a class="header-anchor" href="#相对定位不脱标" aria-label="Permalink to &quot;相对定位不脱标&quot;">​</a></h3><p><strong>相对定位</strong>：不脱标，老家留坑，<strong>别人不会把它的位置挤走</strong>。</p><p>也就是说，相对定位的真实位置还在老家，只不过影子出去了，可以到处飘。</p><h3 id="相对定位的用途" tabindex="-1">相对定位的用途 <a class="header-anchor" href="#相对定位的用途" aria-label="Permalink to &quot;相对定位的用途&quot;">​</a></h3><p>如果想做“压盖”效果（把一个div放到另一个div之上），我们一般<strong>不用</strong>相对定位来做。相对定位，就两个作用：</p><ul><li>（1）微调元素</li><li>（2）做绝对定位的参考，子绝父相</li></ul><h3 id="相对定位的定位值" tabindex="-1">相对定位的定位值 <a class="header-anchor" href="#相对定位的定位值" aria-label="Permalink to &quot;相对定位的定位值&quot;">​</a></h3><ul><li>left：盒子右移</li><li>right：盒子左移</li><li>top：盒子下移</li><li>bottom：盒子上移</li></ul><p>PS：负数表示相反的方向。</p><p>↘：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    left: 40px;</span></span>
<span class="line"><span>    top: 10px;</span></span></code></pre></div><p>↙：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    right: 100px;</span></span>
<span class="line"><span>    top: 100px;</span></span></code></pre></div><p>↖：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    right: 100px;</span></span>
<span class="line"><span>    bottom: 100px;</span></span></code></pre></div><p>↗：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    left: 200px;</span></span>
<span class="line"><span>    bottom: 200px;</span></span></code></pre></div><p><img src="http://img.smyhvae.com/20180115_1716.png" alt="img"></p><p>如果要描述上面这张图的方向，我们可以首先可以这样描述：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    left: 200px;</span></span>
<span class="line"><span>    top: 100px;</span></span></code></pre></div><p>因为<code>left: 200px</code>等价于<code>right: -200px</code>，所以这张图其实有四种写法。</p><h2 id="绝对定位" tabindex="-1">绝对定位 <a class="header-anchor" href="#绝对定位" aria-label="Permalink to &quot;绝对定位&quot;">​</a></h2><p><strong>绝对定位</strong>：定义横纵坐标。原点在父容器的左上角或左下角。横坐标用left表示，纵坐标用top或者bottom表示。</p><p>格式举例如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    position: absolute;  /*绝对定位*/</span></span>
<span class="line"><span>    left: 10px;  /*横坐标*/</span></span>
<span class="line"><span>    top/bottom: 20px;  /*纵坐标*/</span></span></code></pre></div><h3 id="绝对定位脱标" tabindex="-1">绝对定位脱标 <a class="header-anchor" href="#绝对定位脱标" aria-label="Permalink to &quot;绝对定位脱标&quot;">​</a></h3><p><strong>绝对定位的盒子脱离了标准文档流。</strong></p><p>所以，所有的标准文档流的性质，绝对定位之后都不遵守了。</p><p>绝对定位之后，标签就不区分所谓的行内元素、块级元素了，不需要<code>display:block</code>就可以设置宽、高了。</p><h3 id="绝对定位的参考点-重要" tabindex="-1">绝对定位的参考点（重要） <a class="header-anchor" href="#绝对定位的参考点-重要" aria-label="Permalink to &quot;绝对定位的参考点（重要）&quot;">​</a></h3><p>（1）如果用<strong>top描述</strong>，那么参考点就是<strong>页面的左上角</strong>，而不是浏览器的左上角：</p><p><img src="http://img.smyhvae.com/20180115_2120.png" alt="img"></p><p>（2）如果用<strong>bottom描述</strong>，那么参考点就是<strong>浏览器首屏窗口尺寸</strong>（好好理解“首屏”二字），对应的页面的左下角：</p><p><img src="http://img.smyhvae.com/20180115_2121.png" alt="img"></p><p>为了理解“<strong>首屏</strong>”二字的含义，我们来看一下动态图：</p><p><img src="https://img.smyhvae.com/20180115_2200.gif" alt="img"></p><p>问题：</p><p><img src="http://img.smyhvae.com/20180115_2131.png" alt="img"></p><p>答案：</p><p>用bottom的定位的时候，参考的是浏览器首屏大小对应的页面左下角。</p><p><img src="http://img.smyhvae.com/20180115_2132.png" alt="img"></p><h3 id="以盒子为参考点" tabindex="-1">以盒子为参考点 <a class="header-anchor" href="#以盒子为参考点" aria-label="Permalink to &quot;以盒子为参考点&quot;">​</a></h3><p>一个绝对定位的元素，如果父辈元素中也出现了已定位（无论是绝对定位、相对定位，还是固定定位）的元素，那么将以父辈这个元素，为参考点。</p><p>如下：（子绝父相）</p><p><img src="http://img.smyhvae.com/20180115_2210.png" alt="img"></p><p>以下几点需要注意。</p><p>（1） 要听最近的已经定位的祖先元素的，不一定是父亲，可能是爷爷：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>        &lt;div class=&quot;box1&quot;&gt;        相对定位</span></span>
<span class="line"><span>            &lt;div class=&quot;box2&quot;&gt;    没有定位</span></span>
<span class="line"><span>                &lt;p&gt;&lt;/p&gt;           绝对定位，将以box1为参考，因为box2没有定位，box1就是最近的父辈元素</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span></code></pre></div><p>再比如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>        &lt;div class=&quot;box1&quot;&gt;        相对定位</span></span>
<span class="line"><span>            &lt;div class=&quot;box2&quot;&gt;    相对定位</span></span>
<span class="line"><span>                &lt;p&gt;&lt;/p&gt;           绝对定位，将以box2为参考，因为box2是自己最近的父辈元素</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span></code></pre></div><p>（2）不一定是相对定位，任何定位，都可以作为儿子的参考点：</p><p>子绝父绝、<strong>子绝父相</strong>、子绝父固，都是可以给儿子定位的。但是在工程上，如果子绝、父绝，没有一个盒子在标准流里面了，所以页面就不稳固，没有任何实战用途。</p><p><strong>工程应用：</strong></p><p>“<strong>子绝父相</strong>”有意义：这样可以保证父亲没有脱标，儿子脱标在父亲的范围里面移动。于是，工程上经常这样做：</p><blockquote><p>父亲浮动，设置相对定位（零偏移），然后让儿子绝对定位一定的距离。</p></blockquote><p>（3）绝对定位的儿子，无视参考的那个盒子的padding：</p><p>下图中，绿色部分是父亲div的padding，蓝色部分p是div的内容区域。此时，如果div相对定位，p绝对定位，那么， p将无视父亲的padding，在border内侧为参考点，进行定位：</p><p><img src="http://img.smyhvae.com/20180116_0812.png" alt="img"></p><p><strong>工程应用：</strong></p><p>绝对定位非常适合用来做“压盖”效果。我们来举个lagou.com上的例子。</p><p>现在有如下两张图片素材：</p><p><img src="http://img.smyhvae.com/20180116_1115.png" alt="img"></p><p><img src="http://img.smyhvae.com/20180116_1116.jpg" alt="img"></p><p>要求作出如下效果：</p><p><img src="http://img.smyhvae.com/20180116_1117.png" alt="img"></p><p>代码实现如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>        .box{</span></span>
<span class="line"><span>            margin: 100px;</span></span>
<span class="line"><span>            width: 308px;</span></span>
<span class="line"><span>            height: 307px;</span></span>
<span class="line"><span>            border: 1px solid #FF7E00;</span></span>
<span class="line"><span>            position: relative;  /*子绝父相*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .box .image img{</span></span>
<span class="line"><span>            width: 308px;</span></span>
<span class="line"><span>            height: 196px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .box .dtc{</span></span>
<span class="line"><span>            display: block;  /*转为块级元素，才能设置span的宽高*/</span></span>
<span class="line"><span>            width: 52px;</span></span>
<span class="line"><span>            height: 28px;</span></span>
<span class="line"><span>            background-image: url(http://img.smyhvae.com/20180116_1115.png);</span></span>
<span class="line"><span>            background-position: -108px 0px; /*这里用到了精灵图*/</span></span>
<span class="line"><span>            position: absolute;  /*采用绝对定位的方式，将精灵图盖在最上层*/</span></span>
<span class="line"><span>            top: -9px;</span></span>
<span class="line"><span>            left: 13px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .box h4{</span></span>
<span class="line"><span>            background-color: black;</span></span>
<span class="line"><span>            color: white;</span></span>
<span class="line"><span>            width:308px;</span></span>
<span class="line"><span>            height: 40px;</span></span>
<span class="line"><span>            line-height: 40px;</span></span>
<span class="line"><span>            position: absolute;</span></span>
<span class="line"><span>            top: 156px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span>        &lt;span class=&quot;dtc&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;image&quot;&gt;</span></span>
<span class="line"><span>            &lt;img src=&quot;http://img.smyhvae.com/20180116_1116.jpg&quot; alt=&quot;&quot;&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;h4&gt;广东深圳宝安区建安一路海雅缤纷城4楼&lt;/h4&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>代码解释如下：</p><ul><li>为了显示“多套餐”那个小图，我们需要用到精灵图。</li><li>“多套餐”下方黑色背景的文字都是通过“子绝父相”的方式的盖在大海报image的上方的。</li></ul><p>代码的效果如下：</p><p><img src="http://img.smyhvae.com/20180116_1335.png" alt="img"></p><h3 id="让绝对定位中的盒子在父亲里居中" tabindex="-1">让绝对定位中的盒子在父亲里居中 <a class="header-anchor" href="#让绝对定位中的盒子在父亲里居中" aria-label="Permalink to &quot;让绝对定位中的盒子在父亲里居中&quot;">​</a></h3><p>我们知道，如果想让一个<strong>标准流中的盒子在父亲里居中</strong>（水平方向看），可以将其设置<code>margin: 0 auto</code>属性。</p><p>可如果盒子是绝对定位的，此时已经脱标了，如果还想让其居中（位于父亲的正中间），可以这样做：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    div {</span></span>
<span class="line"><span>        width: 600px;</span></span>
<span class="line"><span>        height: 60px;</span></span>
<span class="line"><span>        position: absolute;  绝对定位的盒子</span></span>
<span class="line"><span>        left: 50%;           首先，让左边线居中</span></span>
<span class="line"><span>        top: 0;</span></span>
<span class="line"><span>        margin-left: -300px;  然后，向左移动宽度（600px）的一半</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>如上方代码所示，我们先让这个宽度为600px的盒子，左边线居中，然后向左移动宽度（600px）的一半，就达到效果了。</p><p><img src="http://img.smyhvae.com/20180116_1356.png" alt="img"></p><p>我们可以总结成一个公式：</p><blockquote><p>left:50%; margin-left:负的宽度的一半</p></blockquote><h2 id="固定定位" tabindex="-1">固定定位 <a class="header-anchor" href="#固定定位" aria-label="Permalink to &quot;固定定位&quot;">​</a></h2><p><strong>固定定位</strong>：就是相对浏览器窗口进行定位。无论页面如何滚动，这个盒子显示的位置不变。</p><p>备注：IE6不兼容。</p><p><strong>用途1</strong>：网页右下角的“返回到顶部”</p><p>比如我们经常看到的网页右下角显示的“返回到顶部”，就可以固定定位。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    &lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>        .backtop{</span></span>
<span class="line"><span>            position: fixed;</span></span>
<span class="line"><span>            bottom: 100px;</span></span>
<span class="line"><span>            right: 30px;</span></span>
<span class="line"><span>            width: 60px;</span></span>
<span class="line"><span>            height: 60px;</span></span>
<span class="line"><span>            background-color: gray;</span></span>
<span class="line"><span>            text-align: center;</span></span>
<span class="line"><span>            line-height:30px;</span></span>
<span class="line"><span>            color:white;</span></span>
<span class="line"><span>            text-decoration: none;   /*去掉超链接的下划线*/</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span></code></pre></div><p>**用途2：**顶部导航条</p><p>我们经常能看到固定在网页顶端的导航条，可以用固定定位来做。</p><p>需要注意的是，假设顶部导航条的高度是60px，那么，为了防止其他的内容被导航条覆盖，我们要给body标签设置60px的padding-top。</p><p>顶部导航条的实现如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot; &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;&gt;</span></span>
<span class="line"><span>&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot; xml:lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html;charset=UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>        *{</span></span>
<span class="line"><span>            margin: 0;</span></span>
<span class="line"><span>            padding: 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>body{</span></span>
<span class="line"><span>            /*为什么要写这个？*/</span></span>
<span class="line"><span>            /*不希望我们的页面被nav挡住*/</span></span>
<span class="line"><span>            padding-top: 60px;</span></span>
<span class="line"><span>            /*IE6不兼容固定定位，所以这个padding没有什么用，就去掉就行了*/</span></span>
<span class="line"><span>            _padding-top:0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .nav{</span></span>
<span class="line"><span>            position: fixed;</span></span>
<span class="line"><span>            top: 0;</span></span>
<span class="line"><span>            left: 0;</span></span>
<span class="line"><span>            width: 100%;</span></span>
<span class="line"><span>            height: 60px;</span></span>
<span class="line"><span>            background-color: #333;</span></span>
<span class="line"><span>            z-index: 99999999;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .inner_c{</span></span>
<span class="line"><span>            width: 1000px;</span></span>
<span class="line"><span>            height: 60px;</span></span>
<span class="line"><span>            margin: 0 auto;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .inner_c ul{</span></span>
<span class="line"><span>            list-style: none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .inner_c ul li{</span></span>
<span class="line"><span>            float: left;</span></span>
<span class="line"><span>            width: 100px;</span></span>
<span class="line"><span>            height: 60px;</span></span>
<span class="line"><span>            text-align: center;</span></span>
<span class="line"><span>            line-height: 60px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .inner_c ul li a{</span></span>
<span class="line"><span>            display: block;</span></span>
<span class="line"><span>            width: 100px;</span></span>
<span class="line"><span>            height: 60px;</span></span>
<span class="line"><span>            color:white;</span></span>
<span class="line"><span>            text-decoration: none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .inner_c ul li a:hover{</span></span>
<span class="line"><span>            background-color: gold;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        p{</span></span>
<span class="line"><span>            font-size: 30px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .btn{</span></span>
<span class="line"><span>            display: block;</span></span>
<span class="line"><span>            width: 120px;</span></span>
<span class="line"><span>            height: 30px;</span></span>
<span class="line"><span>            background-color: orange;</span></span>
<span class="line"><span>            position: relative;</span></span>
<span class="line"><span>            top: 2px;</span></span>
<span class="line"><span>            left: 1px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;nav&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;inner_c&quot;&gt;</span></span>
<span class="line"><span>            &lt;ul&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;网页栏目&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;网页栏目&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;网页栏目&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;网页栏目&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;网页栏目&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;网页栏目&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;网页栏目&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;网页栏目&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;网页栏目&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;网页栏目&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;/ul&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h3 id="_5、z-index属性" tabindex="-1">5、z-index属性： <a class="header-anchor" href="#_5、z-index属性" aria-label="Permalink to &quot;5、z-index属性：&quot;">​</a></h3><p><strong>z-index</strong>属性：表示谁压着谁。数值大的压盖住数值小的。</p><p>有如下特性：</p><p>（1）属性值大的位于上层，属性值小的位于下层。</p><p>（2）z-index值没有单位，就是一个正整数。默认的z-index值是0。</p><p>（3）如果大家都没有z-index值，或者z-index值一样，那么在HTML代码里写在后面，谁就在上面能压住别人。定位了的元素，永远能够压住没有定位的元素。</p><p>（4）只有定位了的元素，才能有z-index值。也就是说，不管相对定位、绝对定位、固定定位，都可以使用z-index值。<strong>而浮动的元素不能用</strong>。</p><p>（5）从父现象：父亲怂了，儿子再牛逼也没用。意思是，如果父亲1比父亲2大，那么，即使儿子1比儿子2小，儿子1也能在最上层。</p><p>针对（1）（2）（3）条，举例如下：</p><p>这是默认情况下的例子：（div2在上层，div1在下层）</p><p><img src="http://img.smyhvae.com/2015-10-03-css-32.png" alt="img"></p><p>现在加一个<code>z-index</code>属性，要求效果如下：</p><p><img src="http://img.smyhvae.com/2015-10-03-css-33.png" alt="img"></p><p>第五条分析：</p><p><img src="http://img.smyhvae.com/20180116_1445.png" alt="img"></p><p>z-index属性的应用还是很广泛的。当好几个已定位的标签出现覆盖的现象时，我们可以用这个z-index属性决定，谁处于最上方。也就是<strong>层级</strong>的应用。</p><p><strong>层级：</strong></p><p>（1）必须有定位（除去static）</p><p>（2）用<code>z-index</code>来控制层级数。</p><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">position</td><td style="text-align:center;">定位方式</td></tr><tr><td style="text-align:center;">left</td><td style="text-align:center;">设置元素参照相对物左边界向右偏移位置</td></tr><tr><td style="text-align:center;">right</td><td style="text-align:center;">设置元素参照相对物右边界向左偏移位置</td></tr><tr><td style="text-align:center;">top</td><td style="text-align:center;">设置元素参照相对物顶边界向下偏移位置</td></tr><tr><td style="text-align:center;">bottom</td><td style="text-align:center;">设置元素参照相对物底边界向上偏移位置</td></tr><tr><td style="text-align:center;">z-index</td><td style="text-align:center;">设置元素的层叠顺序</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;demo&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo{</span></span>
<span class="line"><span>    width:100px;</span></span>
<span class="line"><span>    height:100px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    position: static;    /*静态定位*/</span></span>
<span class="line"><span>    position:absolute;    /*绝对定位*/</span></span>
<span class="line"><span>    position: relative;    /*相对定位*/</span></span>
<span class="line"><span>    position: fixed;    /*固定定位*/</span></span>
<span class="line"><span>    position: sticky;    /*头部固定定位*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    left:20px;    /*设置元素参照相对物左边界向右偏移位置*/</span></span>
<span class="line"><span>    right:30px;    /*设置元素参照相对物右边界向左偏移位置*/</span></span>
<span class="line"><span>    top:30px;    /*设置元素参照相对物顶边界向下偏移位置*/</span></span>
<span class="line"><span>    bottom:30px;    /*设置元素参照相对物底边界向上偏移位置*/</span></span>
<span class="line"><span>    z-index:30;    /*设置元素的层叠顺序*/</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="前言-1" tabindex="-1">前言 <a class="header-anchor" href="#前言-1" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>CSS3中的 flex 属性，在布局方面做了非常大的改进，使得我们对<strong>多个元素之间</strong>的布局排列变得十分灵活，适应性非常强。其强大的伸缩性和自适应性，在网页开中可以发挥极大的作用。</p><h3 id="flex-初体验" tabindex="-1">flex 初体验 <a class="header-anchor" href="#flex-初体验" aria-label="Permalink to &quot;flex 初体验&quot;">​</a></h3><p>我们先来看看下面这个最简单的布局：</p><p><img src="http://img.smyhvae.com/20191009_1555.png" alt="img"></p><p>上面这张图中的布局是我们都熟悉的：默认文档流中，在一个父容器里放置多个块级的子元素，那么，这些子元素会默认从上往下排列。</p><p>在此基础之上，如果我给父容器仅仅加一个 <code>display: flex</code>属性，此时，这些子元素的布局会摇身一变：</p><p><img src="http://img.smyhvae.com/20191009_1600.png" alt="img"></p><p>没错，子元素们会<strong>在水平方向上，从左至右排列</strong>，就是这么神奇。到此为止，你已经掌握了关于 flex 的一半的知识。</p><h3 id="flex-布局的优势" tabindex="-1">flex 布局的优势 <a class="header-anchor" href="#flex-布局的优势" aria-label="Permalink to &quot;flex 布局的优势&quot;">​</a></h3><p>1、<strong>flex 布局的子元素不会脱离文档流</strong>，很好地遵从了“流的特性”。</p><p>但你如果用 float 来做布局，float 属性的元素会脱离文档流，而且会涉及到各种 BFC、清除浮动的问题。浮动相关的问题，比较麻烦，所以也成了面试必问的经典题目。但有了 flex 布局之后，这些问题都不存在的。</p><p>2、<strong>flex 是一种现代的布局方式，是 W3C 第一次提供真正用于布局的 CSS 规范</strong>。 flex 非常提供了丰富的属性，非常灵活，让布局的实现更佳多样化，且方便易用。</p><p>flex 唯一的缺点就在于，它不支持低版本的 IE 浏览器。</p><h3 id="flex-的兼容性问题" tabindex="-1">flex 的兼容性问题 <a class="header-anchor" href="#flex-的兼容性问题" aria-label="Permalink to &quot;flex 的兼容性问题&quot;">​</a></h3><p><img src="http://img.smyhvae.com/20191005_1200.png" alt="img"></p><p>上图中可以看到， flex 布局不支持 IE9 及以下的版本；IE10及以上也只是部分支持。如果你的页面不需要处理 IE浏览器的兼容性问题，则可以放心大胆地使用 flex 布局。</p><p>但是，比如网易新闻、淘宝这样的大型网站，面对的是海量用户，即便使用低版本浏览器的用户比例很少，但绝对基数仍然是很庞大的。因此，这些网站为了兼容低版本的 IE 浏览器，暂时还不敢尝试使用 flex 布局。</p><h3 id="概念-弹性盒子、子元素" tabindex="-1">概念：弹性盒子、子元素 <a class="header-anchor" href="#概念-弹性盒子、子元素" aria-label="Permalink to &quot;概念：弹性盒子、子元素&quot;">​</a></h3><p>在讲 flex 的知识点之前，我们事先约定两个概念：</p><ul><li><strong>弹性盒子</strong>：指的是使用 <code>display:flex</code> 或 <code>display:inline-flex</code> 声明的<strong>父容器</strong>。</li><li><strong>子元素/弹性元素</strong>：指的是父容器里面的子元素们（父容器被声明为 flex 盒子的情况下）。</li></ul><h3 id="概念-主轴和侧轴" tabindex="-1">概念：主轴和侧轴 <a class="header-anchor" href="#概念-主轴和侧轴" aria-label="Permalink to &quot;概念：主轴和侧轴&quot;">​</a></h3><p>在上面的“初体验”例子中，我们发现，弹性盒子里面的子元素们，默认是从左至右排列的，这个方向，代表的就是主轴的方向。</p><p>在此，我们引入主轴和侧轴的概念。</p><p><img src="http://img.smyhvae.com/20191009_1701.png" alt="img"></p><p>如上图所示：</p><ul><li>主轴：flex容器的主轴，默认是水平方向，从左向右。</li><li>侧轴：与主轴垂直的轴称作侧轴，默认是垂直方向，从上往下。</li></ul><p>PS：主轴和侧轴并不是固定不变的，可以通过 <code>flex-direction</code> 更换方向，我们在后面会讲到。</p><h2 id="弹性盒子" tabindex="-1">弹性盒子 <a class="header-anchor" href="#弹性盒子" aria-label="Permalink to &quot;弹性盒子&quot;">​</a></h2><h3 id="声明定义" tabindex="-1">声明定义 <a class="header-anchor" href="#声明定义" aria-label="Permalink to &quot;声明定义&quot;">​</a></h3><p>使用 <code>display:flex</code> 或 <code>display:inline-flex</code> 声明一个<strong>父容器</strong>为弹性盒子。此时，这个父容器里的子元素们，会遵循弹性布局。</p><p>备注：一般是用 <code>display:flex</code>这个属性。<code>display:inline-flex</code>用得较少。</p><h3 id="flex-direction-属性" tabindex="-1">flex-direction 属性 <a class="header-anchor" href="#flex-direction-属性" aria-label="Permalink to &quot;flex-direction 属性&quot;">​</a></h3><p><code>flex-direction</code>：用于设置盒子中<strong>子元素</strong>的排列方向。属性值可以是：</p><table><thead><tr><th style="text-align:left;">属性值</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">row</td><td style="text-align:left;">从左到右水平排列子元素（默认值）</td></tr><tr><td style="text-align:left;">column</td><td style="text-align:left;">从上到下垂直排列子元素</td></tr><tr><td style="text-align:left;">row-reverse</td><td style="text-align:left;">从右向左排列子元素</td></tr><tr><td style="text-align:left;">column-reverse</td><td style="text-align:left;">从下到上垂直排列子元素</td></tr></tbody></table><p>备注：如果我们不给父容器写<code>flex-direction</code>这个属性，那么，子元素默认就是从左到右排列的。</p><p>代码演示：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>        *{</span></span>
<span class="line"><span>            margin: 0;</span></span>
<span class="line"><span>            padding: 0;</span></span>
<span class="line"><span>            list-style: none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>       body{</span></span>
<span class="line"><span>           background-color: #eee;</span></span>
<span class="line"><span>           font-family: &quot;Microsoft Yahei&quot;;</span></span>
<span class="line"><span>           font-size:22px;</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        h3{</span></span>
<span class="line"><span>            font-weight: normal;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        section{</span></span>
<span class="line"><span>            width: 1000px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            margin:40px auto;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ul{</span></span>
<span class="line"><span>            background-color: #fff;</span></span>
<span class="line"><span>            border: 1px solid #ccc;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ul li{</span></span>
<span class="line"><span>            width: 200px;</span></span>
<span class="line"><span>            height: 200px;</span></span>
<span class="line"><span>            background-color: pink;</span></span>
<span class="line"><span>            margin:10px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        section:nth-child(1) ul{</span></span>
<span class="line"><span>            overflow: hidden; /* 清除浮动 */</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        section:nth-child(1) ul li{</span></span>
<span class="line"><span>            float: left;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        /* 设置伸缩盒子*/</span></span>
<span class="line"><span>        section:nth-child(2) ul{</span></span>
<span class="line"><span>            display: flex;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        section:nth-child(3) ul{</span></span>
<span class="line"><span>            /* 设置伸缩布局*/</span></span>
<span class="line"><span>            display: flex;</span></span>
<span class="line"><span>            /* 设置主轴方向*/</span></span>
<span class="line"><span>            flex-direction: row;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        section:nth-child(4) ul{</span></span>
<span class="line"><span>            /* 设置伸缩布局*/</span></span>
<span class="line"><span>            display: flex;</span></span>
<span class="line"><span>            /* 设置主轴方向 :水平翻转*/</span></span>
<span class="line"><span>            flex-direction: row-reverse;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        section:nth-child(5) ul{</span></span>
<span class="line"><span>            /* 设置伸缩布局*/</span></span>
<span class="line"><span>            display: flex;</span></span>
<span class="line"><span>            /* 设置主轴方向 :垂直*/</span></span>
<span class="line"><span>            flex-direction: column;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        section:nth-child(6) ul{</span></span>
<span class="line"><span>            /* 设置伸缩布局*/</span></span>
<span class="line"><span>            display: flex;</span></span>
<span class="line"><span>            /* 设置主轴方向 :垂直*/</span></span>
<span class="line"><span>            flex-direction: column-reverse;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;section&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;传统布局&lt;/h3&gt;</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>            &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;/section&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;section&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;伸缩布局 display:flex&lt;/h3&gt;</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>            &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;/section&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;section&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;主轴方向 flex-direction:row&lt;/h3&gt;</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>            &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;/section&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;section&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;主轴方向 flex-direction:row-reverse&lt;/h3&gt;</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>            &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;/section&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;section&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;主轴方向 flex-direction:column&lt;/h3&gt;</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>            &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;/section&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;section&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;主轴方向 flex-direction:column-reverse&lt;/h3&gt;</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>            &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;/section&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h3 id="flex-wrap-属性" tabindex="-1">flex-wrap 属性 <a class="header-anchor" href="#flex-wrap-属性" aria-label="Permalink to &quot;flex-wrap 属性&quot;">​</a></h3><p><code>flex-wrap</code>：控制子元素溢出时的换行处理。</p><h3 id="justify-content-属性" tabindex="-1">justify-content 属性 <a class="header-anchor" href="#justify-content-属性" aria-label="Permalink to &quot;justify-content 属性&quot;">​</a></h3><p><code>justify-content</code>：控制子元素在主轴上的排列方式。</p><h2 id="弹性元素" tabindex="-1">弹性元素 <a class="header-anchor" href="#弹性元素" aria-label="Permalink to &quot;弹性元素&quot;">​</a></h2><h3 id="justify-content-属性-1" tabindex="-1">justify-content 属性 <a class="header-anchor" href="#justify-content-属性-1" aria-label="Permalink to &quot;justify-content 属性&quot;">​</a></h3><ul><li><code>justify-content: flex-start;</code> 设置子元素在<strong>主轴上的对齐方式</strong>。属性值可以是： <ul><li><code>flex-start</code> 从主轴的起点对齐（默认值）</li><li><code>flex-end</code> 从主轴的终点对齐</li><li><code>center</code> 居中对齐</li><li><code>space-around</code> 在父盒子里平分</li><li><code>space-between</code> 两端对齐 平分</li></ul></li></ul><p>代码演示：（在浏览器中打开看效果）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>        *{</span></span>
<span class="line"><span>            margin: 0;</span></span>
<span class="line"><span>            padding: 0;</span></span>
<span class="line"><span>            list-style:none;}</span></span>
<span class="line"><span>        body{</span></span>
<span class="line"><span>            background-color: #eee;</span></span>
<span class="line"><span>            font-family: &quot;Microsoft Yahei&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        section{</span></span>
<span class="line"><span>            width: 1000px;</span></span>
<span class="line"><span>            margin:50px auto;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        section h3{</span></span>
<span class="line"><span>            font-size:22px;</span></span>
<span class="line"><span>            font-weight: normal;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ul{</span></span>
<span class="line"><span>            border: 1px solid #999;</span></span>
<span class="line"><span>            background-color: #fff;</span></span>
<span class="line"><span>            display: flex;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ul li{</span></span>
<span class="line"><span>            width: 200px;</span></span>
<span class="line"><span>            height: 200px;</span></span>
<span class="line"><span>            background: pink;</span></span>
<span class="line"><span>            margin:10px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        section:nth-child(1) ul{</span></span>
<span class="line"><span>            /* 主轴对齐方式：从主轴开始的方向对齐*/</span></span>
<span class="line"><span>            justify-content: flex-start;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        section:nth-child(2) ul{</span></span>
<span class="line"><span>            /* 主轴对齐方式：从主轴结束的方向对齐*/</span></span>
<span class="line"><span>            justify-content: flex-end;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        section:nth-child(3) ul{</span></span>
<span class="line"><span>            /* 主轴对齐方式：居中对齐*/</span></span>
<span class="line"><span>            justify-content: center;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        section:nth-child(4) ul{</span></span>
<span class="line"><span>            /* 主轴对齐方式：在父盒子中平分*/</span></span>
<span class="line"><span>            justify-content: space-around;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        section:nth-child(5) ul{</span></span>
<span class="line"><span>            /* 主轴对齐方式：两端对齐 平分*/</span></span>
<span class="line"><span>            justify-content: space-between;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;section&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;主轴的对齐方式：justify-content:flex-start&lt;/h3&gt;</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>            &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;/section&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;section&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;主轴的对齐方式：justify-content:flex-end&lt;/h3&gt;</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>            &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;/section&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;section&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;主轴的对齐方式：justify-content:center&lt;/h3&gt;</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>            &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;/section&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;section&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;主轴的对齐方式：justify-content:space-round&lt;/h3&gt;</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>            &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;/section&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;section&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;主轴的对齐方式：justify-content:space-bettwen&lt;/h3&gt;</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>            &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;4&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;/section&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h3 id="align-items-属性" tabindex="-1">align-items 属性 <a class="header-anchor" href="#align-items-属性" aria-label="Permalink to &quot;align-items 属性&quot;">​</a></h3><p><code>align-items</code>：设置子元素在<strong>侧轴上的对齐方式</strong>。属性值可以是： - <code>flex-start</code> 从侧轴开始的方向对齐 - <code>flex-end</code> 从侧轴结束的方向对齐 - <code>baseline</code> 基线 默认同flex-start - <code>center</code> 中间对齐 - <code>stretch</code> 拉伸</p><p>代码演示：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>        *{</span></span>
<span class="line"><span>            margin: 0;</span></span>
<span class="line"><span>            padding: 0;</span></span>
<span class="line"><span>            list-style:none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        body{</span></span>
<span class="line"><span>            background-color: #eee;</span></span>
<span class="line"><span>            font-family: &quot;Microsoft Yahei&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        section{</span></span>
<span class="line"><span>            width: 1000px;</span></span>
<span class="line"><span>            margin:50px auto;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        section h3{</span></span>
<span class="line"><span>            font-size:22px;</span></span>
<span class="line"><span>            font-weight: normal;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ul{</span></span>
<span class="line"><span>            border: 1px solid #999;</span></span>
<span class="line"><span>            background-color: #fff;</span></span>
<span class="line"><span>            display: flex;</span></span>
<span class="line"><span>            height:500px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ul li{</span></span>
<span class="line"><span>            width: 200px;</span></span>
<span class="line"><span>            height: 200px;</span></span>
<span class="line"><span>            background: pink;</span></span>
<span class="line"><span>            margin:10px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        section:nth-child(1) ul{</span></span>
<span class="line"><span>            /* 侧轴对齐方式 ：从侧轴开始的方向对齐*/</span></span>
<span class="line"><span>            align-items:flex-start;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        section:nth-child(2) ul{</span></span>
<span class="line"><span>            /* 侧轴对齐方式 ：从侧轴结束的方向对齐*/</span></span>
<span class="line"><span>            align-items:flex-end;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        section:nth-child(3) ul{</span></span>
<span class="line"><span>            /* 侧轴对齐方式 ：居中*/</span></span>
<span class="line"><span>            align-items:center;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        section:nth-child(4) ul{</span></span>
<span class="line"><span>            /* 侧轴对齐方式 ：基线 默认同flex-start*/</span></span>
<span class="line"><span>            align-items:baseline;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        section:nth-child(5) ul{</span></span>
<span class="line"><span>            /* 侧轴对齐方式 ：拉伸*/</span></span>
<span class="line"><span>            align-items:stretch;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        section:nth-child(5) ul li{</span></span>
<span class="line"><span>            height:auto;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;section&gt;</span></span>
<span class="line"><span>    &lt;h3&gt;侧轴的对齐方式:align-items ：flex-start&lt;/h3&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>        &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>&lt;/section&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;section&gt;</span></span>
<span class="line"><span>    &lt;h3&gt;侧轴的对齐方式：align-items:flex-end&lt;/h3&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>        &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>&lt;/section&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;section&gt;</span></span>
<span class="line"><span>    &lt;h3&gt;侧轴的对齐方式：align-items:center&lt;/h3&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>        &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>&lt;/section&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;section&gt;</span></span>
<span class="line"><span>    &lt;h3&gt;侧轴的对齐方式：align-itmes:baseline&lt;/h3&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>        &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>&lt;/section&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;section&gt;</span></span>
<span class="line"><span>    &lt;h3&gt;侧轴的对齐方式：align-itmes: stretch&lt;/h3&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>        &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>&lt;/section&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h3 id="flex属性-设置子盒子的权重" tabindex="-1"><code>flex</code>属性：设置子盒子的权重 <a class="header-anchor" href="#flex属性-设置子盒子的权重" aria-label="Permalink to &quot;\`flex\`属性：设置子盒子的权重&quot;">​</a></h3><p>代码演示：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>        *{</span></span>
<span class="line"><span>            margin: 0;</span></span>
<span class="line"><span>            padding: 0;</span></span>
<span class="line"><span>            list-style:none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        body{</span></span>
<span class="line"><span>            background-color: #eee;</span></span>
<span class="line"><span>            font-family: &quot;Microsoft Yahei&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        section{</span></span>
<span class="line"><span>            width: 1000px;</span></span>
<span class="line"><span>            margin:50px auto;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        section h3{</span></span>
<span class="line"><span>            font-size:22px;</span></span>
<span class="line"><span>            font-weight: normal;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ul{</span></span>
<span class="line"><span>            border: 1px solid #999;</span></span>
<span class="line"><span>            background-color: #fff;</span></span>
<span class="line"><span>            display: flex;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ul li{</span></span>
<span class="line"><span>            width: 200px;</span></span>
<span class="line"><span>            height: 200px;</span></span>
<span class="line"><span>            background: pink;</span></span>
<span class="line"><span>            margin:10px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        section:nth-child(1) ul li:nth-child(1){</span></span>
<span class="line"><span>            flex:1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        section:nth-child(1) ul li:nth-child(2){</span></span>
<span class="line"><span>            flex:1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        section:nth-child(1) ul li:nth-child(3){</span></span>
<span class="line"><span>            flex:8;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        section:nth-child(2) ul li:nth-child(1){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        section:nth-child(2) ul li:nth-child(2){</span></span>
<span class="line"><span>            flex:1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        section:nth-child(2) ul li:nth-child(3){</span></span>
<span class="line"><span>           flex:4;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;section&gt;</span></span>
<span class="line"><span>    &lt;h3&gt;伸缩比例:flex&lt;/h3&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>        &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>&lt;/section&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;section&gt;</span></span>
<span class="line"><span>    &lt;h3&gt;伸缩比例:flex&lt;/h3&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>        &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>&lt;/section&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h2 id="相关链接" tabindex="-1">相关链接 <a class="header-anchor" href="#相关链接" aria-label="Permalink to &quot;相关链接&quot;">​</a></h2><h3 id="css-flexbox-可视化手册" tabindex="-1">CSS Flexbox 可视化手册 <a class="header-anchor" href="#css-flexbox-可视化手册" aria-label="Permalink to &quot;CSS Flexbox 可视化手册&quot;">​</a></h3><p>可视化的截图如下：（请点开链接，查看大图）</p><p><a href="http://img.smyhvae.com/20190821_2101.png" target="_blank" rel="noreferrer">http://img.smyhvae.com/20190821_2101.png</a></p><p>相关文章：</p><ul><li>【英文原版】 CSS Flexbox Fundamentals Visual Guide：<a href="https://medium.com/swlh/css-flexbox-fundamentals-visual-guide-1c467f480dac" target="_blank" rel="noreferrer">https://medium.com/swlh/css-flexbox-fundamentals-visual-guide-1c467f480dac</a></li><li>【中文翻译】CSS Flexbox 可视化手册：<a href="https://zhuanlan.zhihu.com/p/56046851" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/56046851</a></li></ul><h3 id="flex-相关的推荐文章" tabindex="-1">flex 相关的推荐文章 <a class="header-anchor" href="#flex-相关的推荐文章" aria-label="Permalink to &quot;flex 相关的推荐文章&quot;">​</a></h3><ul><li>flex 效果在线演示：<a href="https://demos.scotch.io/visual-guide-to-css3-flexbox-flexbox-playground/demos/" target="_blank" rel="noreferrer">https://demos.scotch.io/visual-guide-to-css3-flexbox-flexbox-playground/demos/</a></li><li>A Complete Guide to Flexbox | 英文原版：<a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noreferrer">https://css-tricks.com/snippets/css/a-guide-to-flexbox/</a></li><li>CSS3 Flexbox 布局完全指南 | 中文翻译：<a href="https://www.html.cn/archives/8629" target="_blank" rel="noreferrer">https://www.html.cn/archives/8629</a></li></ul><h3 id="flex-相关的教程" tabindex="-1">flex 相关的教程 <a class="header-anchor" href="#flex-相关的教程" aria-label="Permalink to &quot;flex 相关的教程&quot;">​</a></h3><ul><li>[后盾人 flex 教程](<a href="http://houdunren.gitee.io/note/css/10" target="_blank" rel="noreferrer">http://houdunren.gitee.io/note/css/10</a> 弹性布局.html)</li></ul><h4 id="技巧-使用-margin-自动撑满剩余空间" tabindex="-1">技巧：使用 margin 自动撑满剩余空间 <a class="header-anchor" href="#技巧-使用-margin-自动撑满剩余空间" aria-label="Permalink to &quot;技巧：使用 margin 自动撑满剩余空间&quot;">​</a></h4><h3 id="伸缩盒样式" tabindex="-1">伸缩盒样式 <a class="header-anchor" href="#伸缩盒样式" aria-label="Permalink to &quot;伸缩盒样式&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">flex-grow</td><td style="text-align:center;">设置弹性盒的扩展比率</td></tr><tr><td style="text-align:center;">flex-shrink</td><td style="text-align:center;">设置弹性盒的收缩比率</td></tr><tr><td style="text-align:center;">flex-basis</td><td style="text-align:center;">设置弹性盒伸缩基准值</td></tr><tr><td style="text-align:center;">flex</td><td style="text-align:center;">复合属性。设置缩盒对象的子元素如何分配空间</td></tr><tr><td style="text-align:center;">flex-direction</td><td style="text-align:center;">设置弹性盒元素水平方向的显示方式</td></tr><tr><td style="text-align:center;">flex-wrap</td><td style="text-align:center;">设置弹性盒元素垂直方向的显示方式</td></tr><tr><td style="text-align:center;">flex-flow</td><td style="text-align:center;">复合属性。设置弹性盒模型对象的子元素显示方式</td></tr><tr><td style="text-align:center;">align-content</td><td style="text-align:center;">设置弹性盒元素所在行垂直方向的排列方式</td></tr><tr><td style="text-align:center;">align-items</td><td style="text-align:center;">设置弹性盒元素垂直方向的排列方式</td></tr><tr><td style="text-align:center;">align-self</td><td style="text-align:center;">设置弹性子元素垂直方向的排列方式</td></tr><tr><td style="text-align:center;">justify-content</td><td style="text-align:center;">设置弹性盒元素水平方向的排列方式</td></tr></tbody></table><hr><h3 id="flex-grow-flex-basis" tabindex="-1">flex-grow，flex-basis <a class="header-anchor" href="#flex-grow-flex-basis" aria-label="Permalink to &quot;flex-grow，flex-basis&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;demo&quot;&gt;</span></span>
<span class="line"><span>  &lt;div style=&quot;background-color:coral;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div style=&quot;background-color:lightblue;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo {</span></span>
<span class="line"><span>  width: 400px;</span></span>
<span class="line"><span>  height: 100px;</span></span>
<span class="line"><span>  border: 1px solid #c3c3c3;</span></span>
<span class="line"><span>  display: flex;    /*设置元素为弹性盒子*/</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo div{</span></span>
<span class="line"><span>    flex-basis:100px;  /* 设置弹性盒伸缩基准值 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo div:nth-child(1) {</span></span>
<span class="line"><span>    flex-grow: 1;  /*设置弹性盒的扩展比率*/</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo div:nth-child(2) {</span></span>
<span class="line"><span>    flex-grow: 3;    /*设置弹性盒的扩展比率*/</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="flex-shrink" tabindex="-1">flex-shrink <a class="header-anchor" href="#flex-shrink" aria-label="Permalink to &quot;flex-shrink&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;demo&quot;&gt;</span></span>
<span class="line"><span>  &lt;div style=&quot;background-color:coral;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div style=&quot;background-color:lightblue;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div style=&quot;background-color:green;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div style=&quot;background-color:red;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo {</span></span>
<span class="line"><span>  width: 350px;</span></span>
<span class="line"><span>  height: 100px;</span></span>
<span class="line"><span>  border: 1px solid #c3c3c3;</span></span>
<span class="line"><span>  display: flex; /*设置元素为弹性盒子*/</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo div{</span></span>
<span class="line"><span>    flex-basis:100px;   /* 设置弹性盒伸缩基准值 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo div:nth-child(1){</span></span>
<span class="line"><span>    flex-shrink:5;    /* 设置弹性盒的收缩比率 */</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="flex" tabindex="-1">flex <a class="header-anchor" href="#flex" aria-label="Permalink to &quot;flex&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;demo&quot;&gt;</span></span>
<span class="line"><span>    &lt;div style=&quot;background-color:red;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div style=&quot;background-color:green;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div style=&quot;background-color:blue;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo{</span></span>
<span class="line"><span>    display:flex;</span></span>
<span class="line"><span>    width:400px;</span></span>
<span class="line"><span>    height:100px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo div:nth-child(1){flex:1 1 400px;}</span></span>
<span class="line"><span>.demo div:nth-child(2){flex:1 2 400px;}</span></span>
<span class="line"><span>.demo div:nth-child(3){flex:1 2 400px;}</span></span></code></pre></div><h3 id="flex-direction" tabindex="-1">flex-direction <a class="header-anchor" href="#flex-direction" aria-label="Permalink to &quot;flex-direction&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;ul class=&quot;demo&quot;&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:red;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:green;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:blue;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo{</span></span>
<span class="line"><span>    display:flex;</span></span>
<span class="line"><span>    flex-direction:row;    /*默认值。项目将水平显示正如一行一样*/</span></span>
<span class="line"><span>    flex-direction:row-reverse;    /*与 row 相同，但是以相反的顺序*/</span></span>
<span class="line"><span>    flex-direction:column; /*项目将垂直显示，正如一列一样*/</span></span>
<span class="line"><span>    flex-direction:column-reverse; /*与 column 相同，但是以相反的顺序*/</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo li{</span></span>
<span class="line"><span>    width:100px;</span></span>
<span class="line"><span>    height:100px;</span></span>
<span class="line"><span>    list-style:none;</span></span>
<span class="line"><span>    border:1px solid #ccc;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="flex-wrap" tabindex="-1">flex-wrap <a class="header-anchor" href="#flex-wrap" aria-label="Permalink to &quot;flex-wrap&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;ul class=&quot;demo&quot;&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:coral;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:lightblue;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:khaki;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:pink;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:lightgrey;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:lightgreen;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo{</span></span>
<span class="line"><span>    width:200px;</span></span>
<span class="line"><span>    height:200px;</span></span>
<span class="line"><span>    display:flex;</span></span>
<span class="line"><span>    flex-wrap:nowrap;    /*flex容器为单行。该情况下flex子项可能会溢出容器*/</span></span>
<span class="line"><span>    flex-wrap:wrap;        /*flex容器为多行。该情况下flex子项溢出的部分会被放置到新行，子项内部会发生断行*/</span></span>
<span class="line"><span>    flex-wrap:wrap-reverse;    /*反转 wrap 排列*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo li{</span></span>
<span class="line"><span>    width:50px;</span></span>
<span class="line"><span>    height:50px;</span></span>
<span class="line"><span>    list-style:none;</span></span>
<span class="line"><span>    border:1px solid #ccc;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="flex-flow" tabindex="-1">flex-flow <a class="header-anchor" href="#flex-flow" aria-label="Permalink to &quot;flex-flow&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;ul class=&quot;demo&quot;&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:coral;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:lightblue;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:khaki;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:pink;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:lightgrey;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:lightgreen;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo{</span></span>
<span class="line"><span>    width:200px;</span></span>
<span class="line"><span>    height:200px;</span></span>
<span class="line"><span>    display:flex;</span></span>
<span class="line"><span>    flex-flow:column wrap-reverse;  /*水平方向的排列、垂直方向的排列*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo li{</span></span>
<span class="line"><span>    width:50px;</span></span>
<span class="line"><span>    height:50px;</span></span>
<span class="line"><span>    list-style:none;</span></span>
<span class="line"><span>    border:1px solid #ccc;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="align-content" tabindex="-1">align-content <a class="header-anchor" href="#align-content" aria-label="Permalink to &quot;align-content&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;ul class=&quot;demo&quot;&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:coral;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:lightblue;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:khaki;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:pink;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:lightgrey;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:lightgreen;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo{</span></span>
<span class="line"><span>    width:200px;</span></span>
<span class="line"><span>    height:200px;</span></span>
<span class="line"><span>    display:flex;</span></span>
<span class="line"><span>    border:1px solid red;</span></span>
<span class="line"><span>    flex-flow: row wrap;</span></span>
<span class="line"><span>    align-content:stretch;     /*默认值。项目被拉伸以适应容器*/</span></span>
<span class="line"><span>    align-content:center;    /*项目位于容器的中心*/</span></span>
<span class="line"><span>    align-content:flex-start;     /*项目位于容器的开头*/</span></span>
<span class="line"><span>    align-content:flex-end;     /*项目位于容器的结尾*/</span></span>
<span class="line"><span>    align-content:space-between;     /*项目位于各行之间留有空白的容器内*/</span></span>
<span class="line"><span>    align-content:space-around;     /*项目位于各行之前、之间、之后都留有空白的容器内*/</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo li{</span></span>
<span class="line"><span>    width:50px;</span></span>
<span class="line"><span>    height:50px;</span></span>
<span class="line"><span>    list-style:none;</span></span>
<span class="line"><span>    border:1px solid #ccc;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="align-items" tabindex="-1">align-items <a class="header-anchor" href="#align-items" aria-label="Permalink to &quot;align-items&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;ul class=&quot;demo&quot;&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:coral;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:lightblue;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:khaki;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:pink;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:lightgrey;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:lightgreen;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo{</span></span>
<span class="line"><span>    width:200px;</span></span>
<span class="line"><span>    height:200px;</span></span>
<span class="line"><span>    padding:0;</span></span>
<span class="line"><span>    display:flex;</span></span>
<span class="line"><span>    border:1px solid red;</span></span>
<span class="line"><span>    align-items:stretch;    /*默认值。元素被拉伸以适应容器*/</span></span>
<span class="line"><span>    align-items:baseline;    /*元素位于容器的基线上*/</span></span>
<span class="line"><span>    align-items:center;        /*元素位于容器的中心*/</span></span>
<span class="line"><span>    align-items:flex-start;    /*元素位于容器的开头*/</span></span>
<span class="line"><span>    align-items:flex-end;    /*元素位于容器的结尾*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo li{</span></span>
<span class="line"><span>    width:50px;</span></span>
<span class="line"><span>    height:50px;</span></span>
<span class="line"><span>    list-style:none;</span></span>
<span class="line"><span>    border:1px solid #ccc;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="align-self" tabindex="-1">align-self <a class="header-anchor" href="#align-self" aria-label="Permalink to &quot;align-self&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;ul class=&quot;demo&quot;&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:coral;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:lightblue;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:khaki;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:pink;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:lightgrey;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:lightgreen;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo{</span></span>
<span class="line"><span>    width:200px;</span></span>
<span class="line"><span>    height:200px;</span></span>
<span class="line"><span>    padding:0;</span></span>
<span class="line"><span>    display:flex;</span></span>
<span class="line"><span>    border:1px solid red;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo li{</span></span>
<span class="line"><span>    width:50px;</span></span>
<span class="line"><span>    height:50px;</span></span>
<span class="line"><span>    list-style:none;</span></span>
<span class="line"><span>    border:1px solid #ccc;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo li:nth-child(3){</span></span>
<span class="line"><span>    align-self:auto;    /*默认值。元素继承了它的父容器的 align-items 属性。如果没有父容器则为 &quot;stretch&quot;*/</span></span>
<span class="line"><span>    align-self:stretch;        /*元素被拉伸以适应容器*/</span></span>
<span class="line"><span>    align-self:center;        /*元素位于容器的中心*/</span></span>
<span class="line"><span>    align-self:baseline;    /*元素位于容器的基线上*/</span></span>
<span class="line"><span>    align-self:flex-start;    /*元素位于容器的开头*/</span></span>
<span class="line"><span>    align-self:flex-end;    /*元素位于容器的结尾*/</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="justify-content" tabindex="-1">justify-content <a class="header-anchor" href="#justify-content" aria-label="Permalink to &quot;justify-content&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;ul class=&quot;demo&quot;&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:coral;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:lightblue;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:khaki;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li style=&quot;background-color:pink;&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo{</span></span>
<span class="line"><span>    width:400px;</span></span>
<span class="line"><span>    height:200px;</span></span>
<span class="line"><span>    padding:0;</span></span>
<span class="line"><span>    border:1px solid red;</span></span>
<span class="line"><span>    display:flex;</span></span>
<span class="line"><span>    justify-content:center;        /*项目位于容器的中心*/</span></span>
<span class="line"><span>    justify-content:flex-start;    /*默认值。项目位于容器的开头*/</span></span>
<span class="line"><span>    justify-content:flex-end;    /*项目位于容器的结尾*/</span></span>
<span class="line"><span>    justify-content:space-between;    /*项目位于各行之间留有空白的容器内*/</span></span>
<span class="line"><span>    justify-content:space-around;    /*项目位于各行之前、之间、之后都留有空白的容器内*/</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo li{</span></span>
<span class="line"><span>    width:50px;</span></span>
<span class="line"><span>    height:50px;</span></span>
<span class="line"><span>    list-style:none;</span></span>
<span class="line"><span>    border:1px solid #ccc;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h1 id="css3动画" tabindex="-1">CSS3动画 <a class="header-anchor" href="#css3动画" aria-label="Permalink to &quot;CSS3动画&quot;">​</a></h1><h2 id="css动画制作" tabindex="-1">CSS动画制作 <a class="header-anchor" href="#css动画制作" aria-label="Permalink to &quot;CSS动画制作&quot;">​</a></h2><ul><li>变换样式 （transform）</li><li>过渡样式 （transition）</li><li>自定义动画（animate）</li><li><a href="http://css.doyoe.com/" target="_blank" rel="noreferrer">手册</a></li></ul><h2 id="变换样式-transform" tabindex="-1">变换样式(transform) <a class="header-anchor" href="#变换样式-transform" aria-label="Permalink to &quot;变换样式(transform)&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">translate()</td><td style="text-align:center;">2D平移，第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认值为0</td></tr><tr><td style="text-align:center;">translateX()</td><td style="text-align:center;">指定对象X轴（水平方向）的平移</td></tr><tr><td style="text-align:center;">translateY()</td><td style="text-align:center;">指定对象Y轴（垂直方向）的平移</td></tr><tr><td style="text-align:center;">rotate()</td><td style="text-align:center;">指定对象的2D rotation（2D旋转），需先有 &lt;&#39; transform-origin &#39;&gt; 属性的定义</td></tr><tr><td style="text-align:center;">rotateX()</td><td style="text-align:center;">指定对象在x轴上的旋转角度</td></tr><tr><td style="text-align:center;">rotateY()</td><td style="text-align:center;">指定对象在y轴上的旋转角度</td></tr><tr><td style="text-align:center;">rotateZ()</td><td style="text-align:center;">指定对象在z轴上的旋转角度</td></tr><tr><td style="text-align:center;">scale()</td><td style="text-align:center;">指定对象的2D scale（2D缩放）。第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认取第一个参数的值</td></tr><tr><td style="text-align:center;">scaleX()</td><td style="text-align:center;">指定对象X轴的（水平方向）缩放</td></tr><tr><td style="text-align:center;">scaleY()</td><td style="text-align:center;">指定对象Y轴的（垂直方向）缩放</td></tr><tr><td style="text-align:center;">skew()</td><td style="text-align:center;">指定对象skew transformation（斜切扭曲）。第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认值为0</td></tr><tr><td style="text-align:center;">skewX()</td><td style="text-align:center;">指定对象X轴的（水平方向）扭曲</td></tr><tr><td style="text-align:center;">skewY()</td><td style="text-align:center;">指定对象Y轴的（垂直方向）扭曲</td></tr><tr><td style="text-align:center;">transform</td><td style="text-align:center;">复合属性。设置对象的变换</td></tr><tr><td style="text-align:center;">transform-origin</td><td style="text-align:center;">设置对象中的变换所参照的原点</td></tr><tr><td style="text-align:center;">transform-style</td><td style="text-align:center;">指定某元素的子元素是否位于三维空间内</td></tr><tr><td style="text-align:center;">perspective</td><td style="text-align:center;">perspective 属性定义 3D 元素距视图的距离，以像素计。该属性允许您改变 3D 元素查看 3D 元素的视图</td></tr><tr><td style="text-align:center;">perspective-origin</td><td style="text-align:center;">指定透视点的位置</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;3D元素&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>        *{</span></span>
<span class="line"><span>            margin:0;</span></span>
<span class="line"><span>            padding:0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        html{</span></span>
<span class="line"><span>            height:100%;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            /* 背景色渐变属性 线性渐变 */</span></span>
<span class="line"><span>            background:linear-gradient(#ff0 0%, #000 80%);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        body{</span></span>
<span class="line"><span>            text-align: center;</span></span>
<span class="line"><span>            padding-top:7em;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        input{</span></span>
<span class="line"><span>            display: none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        label{</span></span>
<span class="line"><span>            display: inline-block;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            width:5em;</span></span>
<span class="line"><span>            height:3em;</span></span>
<span class="line"><span>            line-height:3em;</span></span>
<span class="line"><span>            text-align: center;</span></span>
<span class="line"><span>            border:1px solid #666;</span></span>
<span class="line"><span>            cursor: pointer;</span></span>
<span class="line"><span>            border-radius: 5px;</span></span>
<span class="line"><span>            margin-right:2em;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            transition:all linear .3s;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        label:last-child{</span></span>
<span class="line"><span>            margin-right:0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        label:hover{</span></span>
<span class="line"><span>            transform:translateY(-10px);</span></span>
<span class="line"><span>            box-shadow: 0px 10px 20px 0px rgb(156, 154, 154);</span></span>
<span class="line"><span>            background-color:aqua;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .clear{</span></span>
<span class="line"><span>            height:10em;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* 3D空间 */</span></span>
<span class="line"><span>        .views{</span></span>
<span class="line"><span>            width:250px;</span></span>
<span class="line"><span>            height:250px;</span></span>
<span class="line"><span>            /* border:1px solid red; */</span></span>
<span class="line"><span>            margin:0 auto;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            position: relative;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            /* 设置3D效果的距离 近大远小 */</span></span>
<span class="line"><span>            perspective: 1000px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* 3D的立体元素 */</span></span>
<span class="line"><span>        .box{</span></span>
<span class="line"><span>            width:100%;</span></span>
<span class="line"><span>            height:100%;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            /* 将元素以3D的效果显示 */</span></span>
<span class="line"><span>            transform-style: preserve-3d;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            /* 稍微的转换一下角度，看到不同的层面 */</span></span>
<span class="line"><span>            transform:rotateX(-15deg) rotateY(20deg);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            transition:all ease-in-out .3s;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* 6个面 */</span></span>
<span class="line"><span>        .face{</span></span>
<span class="line"><span>            width:100%;</span></span>
<span class="line"><span>            height:100%;</span></span>
<span class="line"><span>            line-height:250px;</span></span>
<span class="line"><span>            font-size:2em;</span></span>
<span class="line"><span>            font-weight: bold;</span></span>
<span class="line"><span>            text-align: center;</span></span>
<span class="line"><span>            background-color:rgba(51, 51, 51, .1);</span></span>
<span class="line"><span>            border:1px solid #fff;</span></span>
<span class="line"><span>            position: absolute;</span></span>
<span class="line"><span>            left:0;</span></span>
<span class="line"><span>            top:0;</span></span>
<span class="line"><span>            box-shadow: 0px 0px 20px 0px #333;</span></span>
<span class="line"><span>            color:#fff;</span></span>
<span class="line"><span>            opacity: .6;</span></span>
<span class="line"><span>            transition:all ease-in-out .3s;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .front{</span></span>
<span class="line"><span>            transform:translate3d(0px, 0px, 125px);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .back{</span></span>
<span class="line"><span>            transform:rotateY(180deg) translate3d(0px, 0px, 125px);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .left{</span></span>
<span class="line"><span>            transform:rotateY(-90deg) translate3d(0px, 0px, 125px);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .right{</span></span>
<span class="line"><span>            transform:rotateY(90deg) translate3d(0px, 0px, 125px);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .top{</span></span>
<span class="line"><span>            transform:rotateX(90deg) translate3d(0px, 0px, 125px);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .bottom{</span></span>
<span class="line"><span>            transform:rotateX(-90deg) translate3d(0px, 0px, 125px);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        input:checked + label{</span></span>
<span class="line"><span>            transform:translateY(-10px);</span></span>
<span class="line"><span>            box-shadow: 0px 10px 20px 0px rgb(156, 154, 154);</span></span>
<span class="line"><span>            background-color:aqua;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #front:checked ~ .views .box{</span></span>
<span class="line"><span>            transform:rotateX(-15deg) rotateY(20deg);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #back:checked ~ .views .box{</span></span>
<span class="line"><span>            transform:rotateX(-15deg) rotateY(200deg);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #left:checked ~ .views .box{</span></span>
<span class="line"><span>            transform:rotateX(-15deg) rotateY(110deg);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #right:checked ~ .views .box{</span></span>
<span class="line"><span>            transform:rotateX(-15deg) rotateY(-70deg);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #top:checked ~ .views .box{</span></span>
<span class="line"><span>            transform:rotateY(20deg) rotateX(-90deg);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #bottom:checked ~ .views .box{</span></span>
<span class="line"><span>            transform:rotateY(20deg) rotateX(90deg);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #big:checked ~ .views .box{</span></span>
<span class="line"><span>            transform:scale(2) rotateX(-15deg) rotateY(20deg);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #small:checked ~ .views .box{</span></span>
<span class="line"><span>            transform:scale(.5) rotateX(-15deg) rotateY(20deg);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #rotate:checked ~ .views .box{</span></span>
<span class="line"><span>            animation:rotate linear 6s infinite;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @keyframes rotate{</span></span>
<span class="line"><span>            0%{</span></span>
<span class="line"><span>                transform:rotateX(0deg) rotateY(0deg);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            100%{</span></span>
<span class="line"><span>                transform:rotateX(360deg) rotateY(360deg);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* 展开 */</span></span>
<span class="line"><span>        #open:checked ~ .views .box .front{</span></span>
<span class="line"><span>            transform:translate3d(0px, 0px, 300px);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #open:checked ~ .views .box .back{</span></span>
<span class="line"><span>            transform:rotateY(180deg) translate3d(0px, 0px, 300px);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #open:checked ~ .views .box .left{</span></span>
<span class="line"><span>            transform:rotateY(-90deg) translate3d(0px, 0px, 300px);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #open:checked ~ .views .box .right{</span></span>
<span class="line"><span>            transform:rotateY(90deg) translate3d(0px, 0px, 300px);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #open:checked ~ .views .box .top{</span></span>
<span class="line"><span>            transform:rotateX(90deg) translate3d(0px, 0px, 300px);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #open:checked ~ .views .box .bottom{</span></span>
<span class="line"><span>            transform:rotateX(-90deg) translate3d(0px, 0px, 300px);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;input type=&quot;radio&quot; name=&quot;box&quot; id=&quot;front&quot; checked /&gt;</span></span>
<span class="line"><span>    &lt;label for=&quot;front&quot;&gt;正面&lt;/label&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;input type=&quot;radio&quot; name=&quot;box&quot; id=&quot;back&quot; /&gt;</span></span>
<span class="line"><span>    &lt;label for=&quot;back&quot;&gt;背面&lt;/label&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;input type=&quot;radio&quot; name=&quot;box&quot; id=&quot;left&quot; /&gt;</span></span>
<span class="line"><span>    &lt;label for=&quot;left&quot;&gt;左边&lt;/label&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;input type=&quot;radio&quot; name=&quot;box&quot; id=&quot;right&quot; /&gt;</span></span>
<span class="line"><span>    &lt;label for=&quot;right&quot;&gt;右边&lt;/label&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;input type=&quot;radio&quot; name=&quot;box&quot; id=&quot;top&quot; /&gt;</span></span>
<span class="line"><span>    &lt;label for=&quot;top&quot;&gt;上面&lt;/label&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;input type=&quot;radio&quot; name=&quot;box&quot; id=&quot;bottom&quot; /&gt;</span></span>
<span class="line"><span>    &lt;label for=&quot;bottom&quot;&gt;下面&lt;/label&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;input type=&quot;radio&quot; name=&quot;box&quot; id=&quot;big&quot; /&gt;</span></span>
<span class="line"><span>    &lt;label for=&quot;big&quot;&gt;放大&lt;/label&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;input type=&quot;radio&quot; name=&quot;box&quot; id=&quot;small&quot; /&gt;</span></span>
<span class="line"><span>    &lt;label for=&quot;small&quot;&gt;缩小&lt;/label&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;input type=&quot;radio&quot; name=&quot;box&quot; id=&quot;rotate&quot; /&gt;</span></span>
<span class="line"><span>    &lt;label for=&quot;rotate&quot;&gt;旋转&lt;/label&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;input type=&quot;radio&quot; name=&quot;box&quot; id=&quot;open&quot; /&gt;</span></span>
<span class="line"><span>    &lt;label for=&quot;open&quot;&gt;展开&lt;/label&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;div class=&quot;clear&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 3D空间 --&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;views&quot;&gt;</span></span>
<span class="line"><span>        &lt;!-- 3D元素 --&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;face front&quot;&gt;正面&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;face back&quot;&gt;背面&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;face left&quot;&gt;左面&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;face right&quot;&gt;右面&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;face top&quot;&gt;上面&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;face bottom&quot;&gt;下面&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><hr><h2 id="perspective-origin" tabindex="-1">perspective-origin <a class="header-anchor" href="#perspective-origin" aria-label="Permalink to &quot;perspective-origin&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;wrapper w1&quot;&gt;</span></span>
<span class="line"><span>    &lt;div&gt;1&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;wrapper w2&quot;&gt;</span></span>
<span class="line"><span>    &lt;div&gt;2&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.wrapper {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    width: 200px;</span></span>
<span class="line"><span>    height: 200px;</span></span>
<span class="line"><span>    margin: 10px;</span></span>
<span class="line"><span>    border: 1px solid #000;</span></span>
<span class="line"><span>    -webkit-perspective: 150px;   /*设置3D元素与3D页面间的距离*/</span></span>
<span class="line"><span>    perspective: 150px;        /*设置3D元素与3D页面间的距离*/</span></span>
<span class="line"><span>    -webkit-transform-style: preserve-3d;    /*设置元素的效果在3D空间内显示*/</span></span>
<span class="line"><span>    transform-style: preserve-3d;        /*设置元素的效果在3D空间内显示*/</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.w1 {</span></span>
<span class="line"><span>    -webkit-perspective-origin: center top;</span></span>
<span class="line"><span>    perspective-origin: center top;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.w2 {</span></span>
<span class="line"><span>    -webkit-perspective-origin: center bottom;</span></span>
<span class="line"><span>    perspective-origin: center bottom;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.wrapper &gt; div {</span></span>
<span class="line"><span>    width: 180px;</span></span>
<span class="line"><span>    height: 120px;</span></span>
<span class="line"><span>    margin: 40px 10px;</span></span>
<span class="line"><span>    background-color: #ccc;</span></span>
<span class="line"><span>    -webkit-transform: rotatex(90deg);</span></span>
<span class="line"><span>    transform: rotatex(90deg);</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h2 id="过渡样式-transition" tabindex="-1">过渡样式(transition) <a class="header-anchor" href="#过渡样式-transition" aria-label="Permalink to &quot;过渡样式(transition)&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">transition-property</td><td style="text-align:center;">设置对象中的参与过渡的属性</td></tr><tr><td style="text-align:center;">transition-duration</td><td style="text-align:center;">设置对象过渡的持续时间</td></tr><tr><td style="text-align:center;">transition-timing-function</td><td style="text-align:center;">设置对象中过渡的类型</td></tr><tr><td style="text-align:center;">transition-delay</td><td style="text-align:center;">设置对象延迟过渡的时间</td></tr><tr><td style="text-align:center;">transition</td><td style="text-align:center;">复合属性。设置对象变换时的过渡效果</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;demo&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo{</span></span>
<span class="line"><span>    width:100px;</span></span>
<span class="line"><span>    height:100px;</span></span>
<span class="line"><span>    background-color:red;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    transition-property:all;    /*设置对象中的参与过渡的属性*/</span></span>
<span class="line"><span>    transition-duration:3s;        /*设置对象过渡的持续时间*/</span></span>
<span class="line"><span>    transition-timing-function:linear;    /*设置对象中过渡的类型*/</span></span>
<span class="line"><span>    transition-delay:2s;        /*设置对象延迟过渡的时间*/</span></span>
<span class="line"><span>    transition:all 3s linear 1s;    /*复合属性。设置对象变换时的过渡效果*/</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo:hover{</span></span>
<span class="line"><span>    background-color:green;</span></span>
<span class="line"><span>    transform:rotate(300deg) skew(-20deg) scale(3.0) translate(100px,0);</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h2 id="自定义动画-animation" tabindex="-1">自定义动画(animation) <a class="header-anchor" href="#自定义动画-animation" aria-label="Permalink to &quot;自定义动画(animation)&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">animation-name</td><td style="text-align:center;">设置对象所应用的动画名称</td></tr><tr><td style="text-align:center;">animation-duration</td><td style="text-align:center;">设置对象动画的持续时间</td></tr><tr><td style="text-align:center;">animation-timing-function</td><td style="text-align:center;">设置对象动画的过渡类型</td></tr><tr><td style="text-align:center;">animation-delay</td><td style="text-align:center;">设置对象动画延迟的时间</td></tr><tr><td style="text-align:center;">animation-iteration-count</td><td style="text-align:center;">设置动画的播放次数</td></tr><tr><td style="text-align:center;">animation-direction</td><td style="text-align:center;">设置对象动画在循环中是否反向运动</td></tr><tr><td style="text-align:center;">animation-play-state</td><td style="text-align:center;">设置对象动画的状态</td></tr><tr><td style="text-align:center;">animation-fill-mode</td><td style="text-align:center;">设置对象动画时间之外的状态</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;demo&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo{</span></span>
<span class="line"><span>    width:100px;</span></span>
<span class="line"><span>    height:100px;</span></span>
<span class="line"><span>    background-color:red;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    animation-name:demo;    /*设置对象所应用的动画名称*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    animation-duration:3s;    /*设置对象动画的持续时间*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    animation-timing-function:linear;    /*设置对象动画的过渡类型*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    animation-delay:2s;        /*设置对象动画延迟的时间*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    animation-iteration-count:infinite;     /*无限循环*/</span></span>
<span class="line"><span>    animation-iteration-count:5;        /*设置对象动画的循环次数*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    animation-direction:normal;        /*正常方向*/</span></span>
<span class="line"><span>    animation-direction:reverse;    /*反方向运行*/</span></span>
<span class="line"><span>    animation-direction:alternate;    /*动画先正常运行再反方向运行，并持续交替运行*/</span></span>
<span class="line"><span>    animation-direction:alternate-reverse;/*动画先反运行再正方向运行，并持续交替运行*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    animation-fill-mode:none;        /*默认值。不设置对象动画之外的状态*/</span></span>
<span class="line"><span>    animation-fill-mode:forwards;    /*设置对象状态为动画结束时的状态*/</span></span>
<span class="line"><span>    animation-fill-mode:backwards;    /*设置对象状态为动画开始时的状态*/</span></span>
<span class="line"><span>    animation-fill-mode:both;        </span></span>
<span class="line"><span>    /*</span></span>
<span class="line"><span>        设置对象状态为动画在播放之前或之后，其动画效果是否可见,</span></span>
<span class="line"><span>        both的运行轨迹:0%——动画运行中——100%;</span></span>
<span class="line"><span>        最后：animation-fill-mode的状态和animation-direction的值有关。 </span></span>
<span class="line"><span>        1、当animation-direction为normal 或 alternate时，和上面的状态相同。 </span></span>
<span class="line"><span>        2、当animation-direction为alternate-reverse 或reverse 时，状态刚好和上面相反。从100%到0%执行。</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    animation:demo 2s ease-out forwards;    /*复合属性。设置对象所应用的动画特效*/</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@keyframes demo{</span></span>
<span class="line"><span>    from{background-color:red;}</span></span>
<span class="line"><span>    20%{background-color:pink;}</span></span>
<span class="line"><span>    40%{background-color:blue;}</span></span>
<span class="line"><span>    60%{background-color:yellow;}</span></span>
<span class="line"><span>    80%{background-color:black;}</span></span>
<span class="line"><span>    to{background-color:green;}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.demo:hover{</span></span>
<span class="line"><span>    animation-play-state:paused;  /*暂停*/</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,636),e=[t];function i(c,o,r,d,g,h){return a(),n("div",null,e)}const b=s(l,[["render",i]]);export{m as __pageData,b as default};
