import{_ as t,c as a,o as n,a2 as s}from"./chunks/framework.CSGcjqEA.js";const q=JSON.parse('{"title":"HTML基础&结构","description":"","frontmatter":{},"headers":[],"relativePath":"html.md","filePath":"html.md"}'),e={name:"html.md"},l=s(`<h1 id="html基础-结构" tabindex="-1">HTML基础&amp;结构 <a class="header-anchor" href="#html基础-结构" aria-label="Permalink to &quot;HTML基础&amp;结构&quot;">​</a></h1><blockquote><h2 id="什么是html" tabindex="-1">什么是HTML <a class="header-anchor" href="#什么是html" aria-label="Permalink to &quot;什么是HTML&quot;">​</a></h2></blockquote><ol><li>HyperText Markup Language 简称为HTML</li><li>HyperText: 超文本 (文本 + 图片 + 音频 + 视频 + 链接)</li><li>Markup Language: 标记语言</li><li>由SGML(标准通用标记语言)发展而来</li><li>写给浏览器的语言</li></ol><hr><blockquote><h2 id="html版本以及历史" tabindex="-1">HTML版本以及历史 <a class="header-anchor" href="#html版本以及历史" aria-label="Permalink to &quot;HTML版本以及历史&quot;">​</a></h2></blockquote><ol><li>html 1.0——1993年6月(IETF制定)</li><li>HTML 2.0——1995年11月</li><li>HTML 3.0——1996年1月</li><li>HTML 4.0——1997年</li><li>HTML 5.0——2008年1月22日(第一份正式草案)</li><li>W3C: World Wide Web Consortium (W3C 理事会或万维网联盟) <a href="http://www.w3.org/" target="_blank" rel="noreferrer">http://www.w3.org</a></li></ol><hr><blockquote><h2 id="html5" tabindex="-1">HTML5 <a class="header-anchor" href="#html5" aria-label="Permalink to &quot;HTML5&quot;">​</a></h2></blockquote><p>HTML5的设计目的是为了在移动设备上支持多媒体。 新的语法特征被引进以支持这一点，如video、audio和canvas svg webgl标记。 HTML5还引进了新的功能，可以真正改变用户与文档的交互方式，包括：</p><ol><li>新的解析规则增强了灵活性</li><li>新属性</li><li>淘汰过时的或冗余的属性</li><li>一个HTML5文档到另一个文档间的拖放功能</li><li>离线编辑等等</li></ol><p>支持Html5的浏览器包括Firefox，IE9及其更高版本，Chrome，Safari，Opera等； 搜狗浏览器、QQ浏览器、猎豹浏览器等国产浏览器同样具备支持HTML5的能力</p><hr><blockquote><h2 id="html5声明标签" tabindex="-1">HTML5声明标签 <a class="header-anchor" href="#html5声明标签" aria-label="Permalink to &quot;HTML5声明标签&quot;">​</a></h2></blockquote><h5 id="_1-定义和用法" tabindex="-1">1. 定义和用法 <a class="header-anchor" href="#_1-定义和用法" aria-label="Permalink to &quot;1. 定义和用法&quot;">​</a></h5><p><code>&lt;!DOCTYPE&gt;</code> 声明是文档中的第一个成分，位于</p><p>标签之前 该标签告知浏览器文档所使用的 HTML 规范</p><h5 id="_2-html5文档声明" tabindex="-1">2. HTML5文档声明 <a class="header-anchor" href="#_2-html5文档声明" aria-label="Permalink to &quot;2. HTML5文档声明&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE HTML&gt;</span></span></code></pre></div><p>注释：<code>&lt;!DOCTYPE&gt;</code> 标签没有结束标签！ 提示：<code>&lt;!DOCTYPE&gt;</code> 对大小写不敏感。 在所有 HTML 文档中规定文档类型很重要，这样浏览器才能了解所预期的文档类型。</p><hr><blockquote><h2 id="html基本结构" tabindex="-1">HTML基本结构 <a class="header-anchor" href="#html基本结构" aria-label="Permalink to &quot;HTML基本结构&quot;">​</a></h2></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE HTML&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;head&gt;</span></span>
<span class="line"><span>        &lt;title&gt;我的第一个网页&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;/head&gt;</span></span>
<span class="line"><span>    &lt;body&gt;</span></span>
<span class="line"><span>        Hello world~</span></span>
<span class="line"><span>    &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><ul><li>HTML元素由开始标签和结束标签组成</li><li>位于开始标签和结束标签中的文本是元素的内容</li><li>HTML标签有开始必须有结束，如果是没有内容的标签(空标签), 用/&gt;来结束</li><li>标签名不区分大小写，但是XHTML中标签名必须用小写</li><li>标签具有属性，属性用来表示标签的性质和特征。属性要在开始标签中指定</li></ul><hr><blockquote><h2 id="html基本元素" tabindex="-1">HTML基本元素 <a class="header-anchor" href="#html基本元素" aria-label="Permalink to &quot;HTML基本元素&quot;">​</a></h2></blockquote><h5 id="_1-换行" tabindex="-1">1. 换行 <a class="header-anchor" href="#_1-换行" aria-label="Permalink to &quot;1. 换行&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;br /&gt;</span></span></code></pre></div><h5 id="_2-段落" tabindex="-1">2. 段落 <a class="header-anchor" href="#_2-段落" aria-label="Permalink to &quot;2. 段落&quot;">​</a></h5><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">align</td><td style="text-align:center;">对齐方式 （left，right， center）</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;p&gt;这是一个段落&lt;p/&gt;</span></span></code></pre></div><h5 id="_3-标题" tabindex="-1">3. 标题 <a class="header-anchor" href="#_3-标题" aria-label="Permalink to &quot;3. 标题&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;h1&gt;标题1&lt;h1/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;h2&gt;标题2&lt;h2/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;h3&gt;标题3&lt;h3/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;h4&gt;标题4&lt;h4/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;h5&gt;标题5&lt;h5/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;h6&gt;标题6&lt;h6/&gt;</span></span></code></pre></div><h5 id="_4-水平线" tabindex="-1">4. 水平线 <a class="header-anchor" href="#_4-水平线" aria-label="Permalink to &quot;4. 水平线&quot;">​</a></h5><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">size</td><td style="text-align:center;">指定线的粗细(px)</td></tr><tr><td style="text-align:center;">width</td><td style="text-align:center;">指定线的长度(px或%)</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;hr size=&quot;5&quot; width=&quot;50%&quot; align=&quot;center&quot; /&gt;</span></span></code></pre></div><h5 id="_5-文本格式化" tabindex="-1">5. 文本格式化 <a class="header-anchor" href="#_5-文本格式化" aria-label="Permalink to &quot;5. 文本格式化&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;b&gt;定义粗体文本&lt;/b&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;i&gt; 定义斜体文本 &lt;/i&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;s&gt;定义删除文本&lt;/s&gt; &lt;del&gt;&lt;/del&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;u&gt;定义下划线文本&lt;/u&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;sup&gt;定义上标字&lt;/sup&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;sub&gt;定义下标字&lt;/sub&gt;</span></span></code></pre></div><h5 id="_6-预格式文本" tabindex="-1">6. 预格式文本 <a class="header-anchor" href="#_6-预格式文本" aria-label="Permalink to &quot;6. 预格式文本&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;pre&gt;标签可以保留文字在源代码中的格式,使得页面中显示的内容和源代码中的格式一致&lt;/pre&gt;</span></span></code></pre></div><h5 id="_7-字体" tabindex="-1">7. 字体 <a class="header-anchor" href="#_7-字体" aria-label="Permalink to &quot;7. 字体&quot;">​</a></h5><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">size</td><td style="text-align:center;">定义字体大小</td></tr><tr><td style="text-align:center;">face</td><td style="text-align:center;">定义字体</td></tr><tr><td style="text-align:center;">color</td><td style="text-align:center;">定义字体颜色</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;font&gt;这是一段文字&lt;/font&gt;</span></span></code></pre></div><ul><li>16进制的模式 #DCC123</li><li>单词模式 red ,blue ,green ,black</li><li>RGB rgb(20,100,35) 0-255</li></ul><h5 id="_8-链接" tabindex="-1">8. 链接 <a class="header-anchor" href="#_8-链接" aria-label="Permalink to &quot;8. 链接&quot;">​</a></h5><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">href</td><td style="text-align:center;">定义链接地址</td></tr><tr><td style="text-align:center;">title</td><td style="text-align:center;">链接提示信息</td></tr><tr><td style="text-align:center;">target</td><td style="text-align:center;">链接打开方式(*blank 新的空白页,*self 当前页,_top)</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;a href=&quot;URL&quot;&gt; ~ &lt;/a&gt;</span></span></code></pre></div><blockquote><p>(1). 区分内部外部链接</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>外部链接：&lt;a href=&quot;http://www.163.com&quot;&gt; 网易 &lt;/a&gt;</span></span>
<span class="line"><span>内部链接：&lt;a href=&quot;about.html&quot;&gt; 公司简介 &lt;/a&gt;</span></span></code></pre></div><blockquote><p>(2). 锚点</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>锚点(锚点标签用于使用户&quot;跳&quot;到文档的某个部分)</span></span>
<span class="line"><span>&lt;a name=&quot;位置名&quot;&gt; ~ &lt;/a&gt;</span></span>
<span class="line"><span>&lt;a href=&quot;#位置名&quot;&gt; ~ &lt;/a&gt;</span></span></code></pre></div><blockquote><p>(3). 其他应用链接</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;a href=&quot;mailto:邮箱地址&quot;&gt;邮件链接&lt;/a&gt;</span></span>
<span class="line"><span>&lt;a href=&quot;tel:电话号码&quot;&gt;一键拨打&lt;/a&gt;</span></span>
<span class="line"><span>&lt;a href=&quot;sms:139xxxxxxx&quot;&gt;一键发送短信&lt;/a&gt;</span></span></code></pre></div><h5 id="_9-图像" tabindex="-1">9. 图像 <a class="header-anchor" href="#_9-图像" aria-label="Permalink to &quot;9. 图像&quot;">​</a></h5><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">src</td><td style="text-align:center;">定义图像的url</td></tr><tr><td style="text-align:center;">alt</td><td style="text-align:center;">定义图像的替代文本</td></tr><tr><td style="text-align:center;">width</td><td style="text-align:center;">设置图像的宽度</td></tr><tr><td style="text-align:center;">height</td><td style="text-align:center;">设置图像的高度</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;img src=&quot;URL&quot; width=&quot;100&quot; height=&quot;100&quot; alt=&quot;替代文字&quot; /&gt;</span></span></code></pre></div><h5 id="_10-html图像热区" tabindex="-1">10. HTML图像热区 <a class="header-anchor" href="#_10-html图像热区" aria-label="Permalink to &quot;10. HTML图像热区&quot;">​</a></h5><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">shape</td><td style="text-align:center;">热区形状(rect,circle,poly)</td></tr><tr><td style="text-align:center;">coords</td><td style="text-align:center;">形状的坐标值</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;img src=&quot;URL&quot; usemap=&quot;# map 名称&quot; /&gt;</span></span>
<span class="line"><span>&lt;map name=&quot;map 名称&quot;&gt;</span></span>
<span class="line"><span>    &lt;area shape=&quot;形状&quot; coords=&quot;坐标值&quot; href=&quot;URL&quot; /&gt;</span></span>
<span class="line"><span>&lt;/map&gt;</span></span></code></pre></div><h5 id="_11-html的特殊字符" tabindex="-1">11. HTML的特殊字符 <a class="header-anchor" href="#_11-html的特殊字符" aria-label="Permalink to &quot;11. HTML的特殊字符&quot;">​</a></h5><ul><li>某些字符在 HTML 中具有特殊意义,如大于号 (&lt;) 定义 HTML 标签的开始</li><li>字符实体用于在 HTML 文档中插入特殊字符,如版权号 ,注册商标等</li><li>通常情况下,HTML会自动截去多余的空格。不管你加多少空格,都被看做一个空格。</li><li>比如你在两个字之间加了10个空格,HTML会截去9个空格,只保留一个。</li><li>为了在网页中增加空格,你可以使用\`\`表示空格。</li></ul><blockquote><p>HTML的特殊字符</p></blockquote><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">结构</th></tr></thead><tbody><tr><td style="text-align:center;">空格</td><td style="text-align:center;">\`\`</td></tr><tr><td style="text-align:center;">小于号</td><td style="text-align:center;"><code>&lt;</code></td></tr><tr><td style="text-align:center;">大于号</td><td style="text-align:center;"><code>&gt;</code></td></tr><tr><td style="text-align:center;">引号</td><td style="text-align:center;"><code>&quot;</code></td></tr><tr><td style="text-align:center;">版权号</td><td style="text-align:center;"><code>©</code></td></tr><tr><td style="text-align:center;">注册商标</td><td style="text-align:center;"><code>®</code></td></tr><tr><td style="text-align:center;">商标</td><td style="text-align:center;"><code>™</code></td></tr><tr><td style="text-align:center;">乘号</td><td style="text-align:center;"><code>×</code></td></tr><tr><td style="text-align:center;">除号</td><td style="text-align:center;"><code>÷</code></td></tr><tr><td style="text-align:center;">元（yen）</td><td style="text-align:center;"><code>¥</code></td></tr><tr><td style="text-align:center;">镑（pound）</td><td style="text-align:center;"><code>£</code></td></tr><tr><td style="text-align:center;">和号</td><td style="text-align:center;"><code>&amp;</code></td></tr></tbody></table><h1 id="html表格-列表-框架" tabindex="-1">HTML表格&amp;列表&amp;框架 <a class="header-anchor" href="#html表格-列表-框架" aria-label="Permalink to &quot;HTML表格&amp;列表&amp;框架&quot;">​</a></h1><blockquote><h2 id="html表格" tabindex="-1">HTML表格 <a class="header-anchor" href="#html表格" aria-label="Permalink to &quot;HTML表格&quot;">​</a></h2><p>表格由 <code>&lt;table&gt;</code> 标签以及一个或多个 tr、th或td 元素组成 单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等</p></blockquote><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">width</td><td style="text-align:center;">指定表格的宽度</td></tr><tr><td style="text-align:center;">height</td><td style="text-align:center;">表格的高度</td></tr><tr><td style="text-align:center;">border</td><td style="text-align:center;">指定表格边框的宽度</td></tr><tr><td style="text-align:center;">cellpadding</td><td style="text-align:center;">指定边框与内容之间的空白</td></tr><tr><td style="text-align:center;">cellspacing</td><td style="text-align:center;">指定单元格之间的空白</td></tr><tr><td style="text-align:center;">align</td><td style="text-align:center;">指定对齐方式</td></tr><tr><td style="text-align:center;">valign</td><td style="text-align:center;">垂直排列方式</td></tr><tr><td style="text-align:center;">colspan</td><td style="text-align:center;">合并列单元格</td></tr><tr><td style="text-align:center;">rowspan</td><td style="text-align:center;">合并行单元格</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;table border=&quot;1&quot;&gt;</span></span>
<span class="line"><span>  &lt;tr&gt;</span></span>
<span class="line"><span>    &lt;td&gt;row 1, cell 1&lt;/td&gt; &lt;td&gt;row 1, cell 2&lt;/td&gt;</span></span>
<span class="line"><span>  &lt;/tr&gt;</span></span>
<span class="line"><span>  &lt;tr&gt;</span></span>
<span class="line"><span>    &lt;td&gt;row 2, cell 1&lt;/td&gt; &lt;td&gt;row 2, cell 2&lt;/td&gt;</span></span>
<span class="line"><span>  &lt;/tr&gt;</span></span>
<span class="line"><span>&lt;/table&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;table&gt; 定义表格</span></span>
<span class="line"><span>&lt;th&gt; 定义表头</span></span>
<span class="line"><span>&lt;tr&gt; 定义表格的行</span></span>
<span class="line"><span>&lt;td&gt; 定义表格单元</span></span></code></pre></div><hr><blockquote><h2 id="html列表" tabindex="-1">HTML列表 <a class="header-anchor" href="#html列表" aria-label="Permalink to &quot;HTML列表&quot;">​</a></h2><p>列表用来在网页上组织信息,HTML能够创建三种类型的列表:无序列表、有序列表、定义列表</p></blockquote><ul><li>无序列表</li></ul><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">属性值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">Type</td><td style="text-align:center;">disc、Circle、square</td><td style="text-align:center;">用来设置项目前面的标记</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;ul&gt;</span></span>
<span class="line"><span>  &lt;li&gt;......&lt;/li&gt;</span></span>
<span class="line"><span>  &lt;li&gt;......&lt;/li&gt;</span></span>
<span class="line"><span>  &lt;li&gt;......&lt;/li&gt;</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span></code></pre></div><ul><li>有序列表</li></ul><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">属性值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">Type</td><td style="text-align:center;">1、 a 、 A、i、I</td><td style="text-align:center;">用来设置项目前面的标记</td></tr><tr><td style="text-align:center;">start</td><td style="text-align:center;">数值</td><td style="text-align:center;">从哪里开始</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;ol&gt;</span></span>
<span class="line"><span>  &lt;li&gt;......&lt;/li&gt;</span></span>
<span class="line"><span>  &lt;li&gt;......&lt;/li&gt;</span></span>
<span class="line"><span>  &lt;li&gt;......&lt;/li&gt;</span></span>
<span class="line"><span>&lt;/ol&gt;</span></span></code></pre></div><ul><li>定义列表</li></ul><blockquote><p>定义列表用来组织术语和它们的定义 任何信息如果包含多个术语和相对应的解释,都可以使用定义列表进行组织</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;dl&gt;</span></span>
<span class="line"><span>  &lt;dt&gt;HTML&lt;/dt&gt;</span></span>
<span class="line"><span>  &lt;dd&gt;html 是超文本标记语言&lt;/dd&gt;</span></span>
<span class="line"><span>  &lt;dt&gt;XHTML&lt;/dt&gt;</span></span>
<span class="line"><span>  &lt;dd&gt;可扩展超文本置标语言 &lt;/dd&gt;</span></span>
<span class="line"><span>  &lt;dd&gt;表现形式与超文本置标语言(HTML)类似,不过语法上更加严格 &lt;/dd&gt;</span></span>
<span class="line"><span>&lt;/dl&gt;</span></span></code></pre></div><hr><blockquote><h2 id="html-背景" tabindex="-1">HTML 背景 <a class="header-anchor" href="#html-背景" aria-label="Permalink to &quot;HTML 背景&quot;">​</a></h2></blockquote><ol><li>设置背景颜色 <code>&lt;body bgcolor=&quot;#000000&quot;&gt;</code></li><li>设置背景图片 <code>&lt;body background=&quot;bg.jpg&quot;&gt;</code></li><li>设置网页的字颜色 <code>&lt;body text=&quot;#cccccc&quot;&gt;</code></li></ol><hr><blockquote><h2 id="html-框架" tabindex="-1">HTML 框架 <a class="header-anchor" href="#html-框架" aria-label="Permalink to &quot;HTML 框架&quot;">​</a></h2></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>框架的作用就是把浏览器窗口划分成多个子窗口。 每个子窗口可以载入自的HTML文档</span></span>
<span class="line"><span>在HTML文档中 frameset 与body同级，只能存在一个</span></span></code></pre></div><ul><li>框架基本结构</li></ul><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">rows</td><td style="text-align:center;">上下分割窗口</td></tr><tr><td style="text-align:center;">cols</td><td style="text-align:center;">左右分割窗口</td></tr><tr><td style="text-align:center;">src</td><td style="text-align:center;">指定要载入到框架的页面地址</td></tr><tr><td style="text-align:center;">name</td><td style="text-align:center;">框架的名称</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;frameset rows=&quot;高度A,高度B&quot;&gt;</span></span>
<span class="line"><span>    &lt;frame src=&quot;top.html&quot; /&gt;</span></span>
<span class="line"><span>    &lt;frameset cols=&quot;宽度A,宽度B&quot;&gt;</span></span>
<span class="line"><span>      &lt;frame src=&quot;menu.html&quot; /&gt;</span></span>
<span class="line"><span>      &lt;frame src=&quot;main.html&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/frameset&gt;</span></span>
<span class="line"><span>&lt;/frameset&gt;</span></span></code></pre></div><ul><li>frame框架标签</li></ul><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">属性值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">scrolling</td><td style="text-align:center;">yes、no、auto</td><td style="text-align:center;">是否显示滚动条</td></tr><tr><td style="text-align:center;">noresize</td><td style="text-align:center;">...</td><td style="text-align:center;">禁止改变框架的尺寸大小</td></tr><tr><td style="text-align:center;">marginwidth</td><td style="text-align:center;">px</td><td style="text-align:center;">框架内左右的空白区域</td></tr><tr><td style="text-align:center;">marginheight</td><td style="text-align:center;">px</td><td style="text-align:center;">框架内上下的空白区域</td></tr><tr><td style="text-align:center;">frameborder</td><td style="text-align:center;">1,0</td><td style="text-align:center;">是否显示边框</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;frame scrolling=&quot;yes&quot; noresize /&gt;</span></span>
<span class="line"><span>&lt;frame marginwidth=&quot;左右缩进&quot; marginheight=&quot;上下缩进&quot; /&gt;</span></span></code></pre></div><ul><li>内嵌框架iframe</li></ul><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">属性值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">width</td><td style="text-align:center;">px,%</td><td style="text-align:center;">指定框架的宽度</td></tr><tr><td style="text-align:center;">height</td><td style="text-align:center;">px,%</td><td style="text-align:center;">指定框架的高度</td></tr><tr><td style="text-align:center;">scrolling</td><td style="text-align:center;">yes,no,auto</td><td style="text-align:center;">是否显示滚动条</td></tr><tr><td style="text-align:center;">frameborder</td><td style="text-align:center;">1,0</td><td style="text-align:center;">是否显示边框</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;iframe src=&quot;URL&quot; name=&quot;框架名&quot;&gt; ~ &lt;/iframe&gt;</span></span></code></pre></div><h1 id="html表单" tabindex="-1">HTML表单 <a class="header-anchor" href="#html表单" aria-label="Permalink to &quot;HTML表单&quot;">​</a></h1><blockquote><p>表单是一个包含表单元素的区域。 表单能够包含 input 元素,textarea、select、fieldset、legend 和 label元素。 表单使用标签<code>(&lt;form&gt;)</code>定义。 表单用于向服务器传输数据。</p></blockquote><ul><li>表单的结构</li></ul><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">name</td><td style="text-align:center;">表单的名称</td></tr><tr><td style="text-align:center;">action</td><td style="text-align:center;">表单提交地址</td></tr><tr><td style="text-align:center;">method</td><td style="text-align:center;">表单数据提交的方式 (get ,post)</td></tr><tr><td style="text-align:center;">enctype</td><td style="text-align:center;">MIME类型</td></tr><tr><td style="text-align:center;">novalidate</td><td style="text-align:center;">规定当提交表单时不对表单数据（输入）进行验证</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;form name=&quot;form1&quot; action=&quot;URL&quot; method=&quot;get&quot;&gt;</span></span>
<span class="line"><span>    用户名:&lt;input type=&quot;text&quot; name=&quot;uname&quot; /&gt;</span></span>
<span class="line"><span>    密 码:&lt;input type=&quot;password&quot; name=&quot;passwd&quot; /&gt;</span></span>
<span class="line"><span>&lt;/form&gt;</span></span></code></pre></div><ul><li>input类型</li></ul><table><thead><tr><th style="text-align:center;">类型</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">button</td><td style="text-align:center;">定义可点击的按钮（大多与 JavaScript 使用来启动脚本）</td></tr><tr><td style="text-align:center;">checkbox</td><td style="text-align:center;">定义复选框。</td></tr><tr><td style="text-align:center;">color</td><td style="text-align:center;">定义拾色器。</td></tr><tr><td style="text-align:center;">date</td><td style="text-align:center;">定义日期字段（带有 calendar 控件）</td></tr><tr><td style="text-align:center;">month</td><td style="text-align:center;">定义日期字段的月（带有 calendar 控件）</td></tr><tr><td style="text-align:center;">week</td><td style="text-align:center;">定义日期字段的周（带有 calendar 控件）</td></tr><tr><td style="text-align:center;">time</td><td style="text-align:center;">定义日期字段的时、分、秒（带有 time 控件）</td></tr><tr><td style="text-align:center;">email</td><td style="text-align:center;">定义用于 e-mail 地址的文本字段</td></tr><tr><td style="text-align:center;">file</td><td style="text-align:center;">定义输入字段和 &quot;浏览...&quot; 按钮，供文件上传</td></tr><tr><td style="text-align:center;">hidden</td><td style="text-align:center;">定义隐藏输入字段</td></tr><tr><td style="text-align:center;">image</td><td style="text-align:center;">定义图像作为提交按钮,必须把 src 属性 和 alt 属性 结合使用。</td></tr><tr><td style="text-align:center;">number</td><td style="text-align:center;">定义带有 spinner 控件的数字字段</td></tr><tr><td style="text-align:center;">password</td><td style="text-align:center;">定义密码字段。字段中的字符会被遮蔽。</td></tr><tr><td style="text-align:center;">radio</td><td style="text-align:center;">定义单选按钮。</td></tr><tr><td style="text-align:center;">range</td><td style="text-align:center;">定义带有 slider 控件的数字字段。</td></tr><tr><td style="text-align:center;">reset</td><td style="text-align:center;">定义重置按钮。重置按钮会将所有表单字段重置为初始值。</td></tr><tr><td style="text-align:center;">search</td><td style="text-align:center;">定义用于搜索的文本字段。</td></tr><tr><td style="text-align:center;">submit</td><td style="text-align:center;">定义提交按钮。提交按钮向服务器发送数据。</td></tr><tr><td style="text-align:center;">tel</td><td style="text-align:center;">定义用于电话号码的文本字段。</td></tr><tr><td style="text-align:center;">text</td><td style="text-align:center;">默认。定义单行输入字段，用户可在其中输入文本。默认是 20 个字符。</td></tr><tr><td style="text-align:center;">url</td><td style="text-align:center;">定义用于 URL 的文本字段。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;input type=&quot;button&quot; value=&quot;普通按钮&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;checkbox&quot; value=&quot;复选框&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;color&quot; value=&quot;拾色器&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;date&quot; value=&quot;&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;month&quot; value=&quot;&quot; /&gt;选择月份</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;week&quot; value=&quot;&quot; /&gt;选择周</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;time&quot; value=&quot;&quot; /&gt;选择时间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;email&quot; value=&quot;&quot; /&gt;Email</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;file&quot; value=&quot;&quot; /&gt;文件类型</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;hidden&quot; value=&quot;&quot; /&gt;隐藏域</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;image&quot; src=&quot;&quot; alt=&quot;Submit&quot; /&gt;选择图片</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;number&quot; value=&quot;&quot; /&gt;数字键盘</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;password&quot; value=&quot;&quot; /&gt;输入密码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;radio&quot; value=&quot;&quot; /&gt;单选按钮</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;range&quot; min=&quot;0&quot; max=&quot;10&quot; step=&quot;1&quot; /&gt;选择范围</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;reset&quot; value=&quot;重置&quot; /&gt;表单重置按钮</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;search&quot; value=&quot;&quot; /&gt;用于搜索</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;submit&quot; value=&quot;提交&quot; /&gt; 提交按钮</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;tel&quot; value=&quot;&quot; /&gt;电话号码字段</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;text&quot; value=&quot;&quot; /&gt;输入框</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;url&quot; value=&quot;http://baidu.com&quot; /&gt;输入连接</span></span></code></pre></div><ul><li>input属性</li></ul><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">type</td><td style="text-align:center;">input元素类型</td></tr><tr><td style="text-align:center;">name</td><td style="text-align:center;">input元素的名称</td></tr><tr><td style="text-align:center;">value</td><td style="text-align:center;">input元素的值</td></tr><tr><td style="text-align:center;">size</td><td style="text-align:center;">input元素的宽度</td></tr><tr><td style="text-align:center;">readonly</td><td style="text-align:center;">是否只读</td></tr><tr><td style="text-align:center;">maxlength</td><td style="text-align:center;">输入字符的字符长度</td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;">是否禁用</td></tr><tr><td style="text-align:center;">autofocus</td><td style="text-align:center;">属性规定当页面加载时按钮应当自动地获得焦点</td></tr><tr><td style="text-align:center;">form</td><td style="text-align:center;">位于 form 表单外的输入字段（但仍然属于 form 表单的一部分）</td></tr><tr><td style="text-align:center;">pattern</td><td style="text-align:center;">pattern 属性规定用于验证 <code>&lt;input&gt;</code> 元素的值的正则表达式</td></tr><tr><td style="text-align:center;">placeholder</td><td style="text-align:center;">属性规定可描述输入字段预期值的简短的提示信息</td></tr><tr><td style="text-align:center;">list</td><td style="text-align:center;">list 属性引用 <code>&lt;datalist&gt;</code> 元素，其中包含 <code>&lt;input&gt;</code> 元素的预定义选项</td></tr><tr><td style="text-align:center;">min, max, step</td><td style="text-align:center;">最小值,最大值,如果 step=&quot;3&quot;，则合法数字应该是 -3、0、3、6，以此类推</td></tr><tr><td style="text-align:center;">multiple</td><td style="text-align:center;">可接受多个值的文件上传字段</td></tr><tr><td style="text-align:center;">required</td><td style="text-align:center;">必填</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;input type=&quot;text&quot; readonly /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;text&quot; maxlength /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=&quot;text&quot; disabled /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;input type=text autofocus /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---form---</span></span>
<span class="line"><span>&lt;form action=&quot;demo_form.html&quot; id=&quot;form1&quot;&gt;</span></span>
<span class="line"><span>First name: &lt;input type=&quot;text&quot; name=&quot;fname&quot;&gt;&lt;br&gt;</span></span>
<span class="line"><span>&lt;input type=&quot;submit&quot; value=&quot;Submit&quot;&gt;</span></span>
<span class="line"><span>&lt;/form&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Last name: &lt;input type=&quot;text&quot; name=&quot;lname&quot; form=&quot;form1&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>---pattern---</span></span>
<span class="line"><span>&lt;form action=&quot;demo_form.html&quot;&gt;</span></span>
<span class="line"><span>Country code: &lt;input type=&quot;text&quot; name=&quot;country_code&quot; pattern=&quot;[A-Za-z]{3}&quot; title=&quot;Three letter country code&quot;&gt;</span></span>
<span class="line"><span>&lt;input type=&quot;submit&quot;&gt;</span></span>
<span class="line"><span>&lt;/form&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---list---</span></span>
<span class="line"><span>&lt;form action=&quot;demo-form.php&quot; method=&quot;get&quot;&gt;</span></span>
<span class="line"><span>&lt;input list=&quot;browsers&quot; name=&quot;browser&quot;&gt;</span></span>
<span class="line"><span>&lt;datalist id=&quot;browsers&quot;&gt;</span></span>
<span class="line"><span>  &lt;option value=&quot;Internet Explorer&quot;&gt;</span></span>
<span class="line"><span>  &lt;option value=&quot;Firefox&quot;&gt;</span></span>
<span class="line"><span>  &lt;option value=&quot;Chrome&quot;&gt;</span></span>
<span class="line"><span>  &lt;option value=&quot;Opera&quot;&gt;</span></span>
<span class="line"><span>  &lt;option value=&quot;Safari&quot;&gt;</span></span>
<span class="line"><span>&lt;/datalist&gt;</span></span>
<span class="line"><span>&lt;input type=&quot;submit&quot;&gt;</span></span>
<span class="line"><span>&lt;/form&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>---min, max, step---</span></span>
<span class="line"><span>&lt;input type=&quot;number&quot; name=&quot;quantity&quot; step=&quot;2&quot; min=&quot;1&quot; max=&quot;6&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>---multiple---</span></span>
<span class="line"><span>选择图片: &lt;input type=&quot;file&quot; name=&quot;img&quot; multiple&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>---require---</span></span>
<span class="line"><span>&lt;input type=&quot;text&quot; name=&quot;usrname&quot; required&gt;</span></span></code></pre></div><ul><li>textarea(多行文本框)</li></ul><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">name</td><td style="text-align:center;">元素的名称</td></tr><tr><td style="text-align:center;">rows</td><td style="text-align:center;">指定文本框的高度</td></tr><tr><td style="text-align:center;">cols</td><td style="text-align:center;">指定文本框的宽度</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;textarea name=&quot;content&quot; rows=&quot;5&quot; cols=&quot;50&quot;&gt; &lt;/textarea&gt;</span></span></code></pre></div><ul><li>select(下拉列表框)</li></ul><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">name</td><td style="text-align:center;">下拉列表框的名称</td></tr><tr><td style="text-align:center;">size</td><td style="text-align:center;">下拉列表框的显示行数</td></tr><tr><td style="text-align:center;">multiple</td><td style="text-align:center;">是否多选</td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;">是否禁用</td></tr><tr><td style="text-align:center;">selected</td><td style="text-align:center;">设置默认选中的选项</td></tr><tr><td style="text-align:center;">value</td><td style="text-align:center;">选项的值</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;select name=&quot;city&quot;&gt;</span></span>
<span class="line"><span>  &lt;option value=&quot;0&quot;&gt;请选择&lt;/option&gt;</span></span>
<span class="line"><span>  &lt;option value=&quot;bj&quot;&gt;北京&lt;/option&gt;</span></span>
<span class="line"><span>  &lt;option value=&quot;gz&quot;&gt;广州&lt;/option&gt;</span></span>
<span class="line"><span>&lt;/select&gt;</span></span></code></pre></div><ul><li>optgroup(用于组合选项的标签)</li></ul><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">label</td><td style="text-align:center;">指定组合选项名称</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;select name=&quot;city&quot;&gt;</span></span>
<span class="line"><span>  &lt;option value=&quot;0&quot;&gt;请选择&lt;/option&gt;</span></span>
<span class="line"><span>  &lt;optgroup label=&quot;主要城市&quot;&gt;</span></span>
<span class="line"><span>      &lt;option value=&quot;bj&quot;&gt;北京&lt;/option&gt;</span></span>
<span class="line"><span>      &lt;option value=&quot;gz&quot;&gt;广州&lt;/option&gt;</span></span>
<span class="line"><span>  &lt;/optgroup&gt;</span></span>
<span class="line"><span>&lt;/select&gt;</span></span></code></pre></div><ul><li>fieldset(组合标签)</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;fieldset&gt;</span></span>
<span class="line"><span>  &lt;legend&gt;基本资料&lt;/legend&gt;</span></span>
<span class="line"><span>  &lt;form&gt;&lt;/form&gt;</span></span>
<span class="line"><span>&lt;/fieldset&gt;</span></span></code></pre></div><ul><li>lable</li></ul><blockquote><p>lable标签的作用是将输入项或选项及其标签文字关联起来</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;input type=&quot;radio&quot; name=&quot;sex&quot; value=&quot;1&quot; id=&quot;male&quot; /&gt;</span></span>
<span class="line"><span>&lt;label for=&quot;male&quot;&gt;男&lt;/label&gt;</span></span>
<span class="line"><span>&lt;input type=&quot;radio&quot; name=&quot;sex&quot; value=&quot;0&quot; id=&quot;female&quot; /&gt;</span></span>
<span class="line"><span>&lt;label for=&quot;female&quot;&gt;女&lt;/label&gt;</span></span></code></pre></div><h1 id="html5新增标签" tabindex="-1">HTML5新增标签 <a class="header-anchor" href="#html5新增标签" aria-label="Permalink to &quot;HTML5新增标签&quot;">​</a></h1><blockquote><h2 id="head设置页面头信息" tabindex="-1">head设置页面头信息 <a class="header-anchor" href="#head设置页面头信息" aria-label="Permalink to &quot;head设置页面头信息&quot;">​</a></h2></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>设置页面标题</span></span>
<span class="line"><span>    &lt;title&gt; ~ &lt;/title&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>设置页面编码:</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    utf-8 多国语言编码</span></span>
<span class="line"><span>    gb2312 中文简体编码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>设置页面关键字,内容介绍</span></span>
<span class="line"><span>    &lt;meta name=&quot;keywords&quot; content=&quot;关键字1,关键字2,...&quot; /&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;description&quot; content=&quot;关键字1,关键字2,...&quot; /&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;author&quot; content=&quot;mycodewind，mycodewind@qq.com&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;copyright&quot; content=&quot;本网站版权归XXXXX所有&quot;&gt;</span></span></code></pre></div><blockquote><h2 id="audio音频标签" tabindex="-1">audio音频标签 <a class="header-anchor" href="#audio音频标签" aria-label="Permalink to &quot;audio音频标签&quot;">​</a></h2></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1.标签定义及使用说明</span></span>
<span class="line"><span></span></span>
<span class="line"><span> &lt;audio&gt; 标签定义声音，比如音乐或其他音频流。</span></span>
<span class="line"><span>目前，&lt;audio&gt; 元素支持的3种文件格式：MP3、Wav、Ogg。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 浏览器支持</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   IE 9+、Firefox、Opera、Chrome 和 Safari 都支持 &lt;audio&gt; 标签。</span></span>
<span class="line"><span>   注释： IE 8 或更早版本的 IE 浏览器不支持 &lt;audio&gt; 标签。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.属性</span></span>
<span class="line"><span>    Autoplay:如果出现该属性，则音频在就绪后马上播放  autoplay=”autoplay”</span></span>
<span class="line"><span>    Controls:如果出现该属性，则向用户显示音频控件 controls=”controls”</span></span>
<span class="line"><span>    Loop:如果出现该属性，则每当音频结束时重新开始播放 loop=”loop”</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 实例</span></span>
<span class="line"><span>&lt;audio controls&gt;</span></span>
<span class="line"><span>  &lt;source src=&quot;horse.ogg&quot; type=&quot;audio/ogg&quot;&gt;</span></span>
<span class="line"><span>  &lt;source src=&quot;horse.mp3&quot; type=&quot;audio/mpeg&quot;&gt;</span></span>
<span class="line"><span>  &lt;source src=&quot;horse.wav&quot; type=&quot;audio/wav&quot;&gt;</span></span>
<span class="line"><span>  您的浏览器不支持 audio 元素。</span></span>
<span class="line"><span>&lt;/audio&gt;</span></span></code></pre></div><blockquote><h2 id="video标签将视频作为页面背景" tabindex="-1">video标签将视频作为页面背景 <a class="header-anchor" href="#video标签将视频作为页面背景" aria-label="Permalink to &quot;video标签将视频作为页面背景&quot;">​</a></h2></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>        body{</span></span>
<span class="line"><span>            margin:0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        video{</span></span>
<span class="line"><span>            position: fixed;</span></span>
<span class="line"><span>            right:0;</span></span>
<span class="line"><span>            bottom:0;</span></span>
<span class="line"><span>            min-width:100%;</span></span>
<span class="line"><span>            min-height:100%;</span></span>
<span class="line"><span>            width:auto;</span></span>
<span class="line"><span>            height:auto;</span></span>
<span class="line"><span>            z-index:-1000;</span></span>
<span class="line"><span>            /* -webkit-filter: grayscale(100%); */</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;video autoplay id=&quot;background&quot; muted&gt;</span></span>
<span class="line"><span>        &lt;source src=&quot;./80s.mp4&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/video&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    //获取id为background的元素</span></span>
<span class="line"><span>    var background = document.getElementById(&quot;background&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //将视频速度调慢</span></span>
<span class="line"><span>    background.playbackRate = 0.5;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><blockquote><h2 id="div布局容器标签" tabindex="-1">div布局容器标签 <a class="header-anchor" href="#div布局容器标签" aria-label="Permalink to &quot;div布局容器标签&quot;">​</a></h2></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>div 与其它标签一样,也是一个XHTML所支持的标签     </span></span>
<span class="line"><span>  div 是XHTML中指定的,专门用于布局设计的容器标签       </span></span>
<span class="line"><span>  在css布局方式中,div是这种布局方式的核心对象,我们的页面排版不再依赖于表格       </span></span>
<span class="line"><span>  仅从div的使用上说,做一个简单的布局只需要两样东西:div与css       </span></span>
<span class="line"><span>  因此我们称这种布局方式为 div + css 布局       </span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;div id=&quot;header&quot;&gt;页面头部&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;div id=&quot;content&quot;&gt;</span></span>
<span class="line"><span>      &lt;div id=&quot;left&quot;&gt;&lt;/div&gt; </span></span>
<span class="line"><span>      &lt;div id=&quot;right&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;div id=&quot;footer&quot;&gt;页脚&lt;/div&gt;</span></span></code></pre></div><blockquote><h2 id="span区块标签" tabindex="-1">span区块标签 <a class="header-anchor" href="#span区块标签" aria-label="Permalink to &quot;span区块标签&quot;">​</a></h2></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1.标签定义及使用说明</span></span>
<span class="line"><span>&lt;span&gt; 用于对文档中的行内元素进行组合。</span></span>
<span class="line"><span>&lt;span&gt; 标签没有固定的格式表现。当对它应用样式时，它才会产生视觉上的变化。</span></span>
<span class="line"><span>如果不对 &lt;span&gt; 应用样式，那么 &lt;span&gt; 元素中的文本与其他文本不会任何视觉上的差异。</span></span>
<span class="line"><span>&lt;span&gt; 标签提供了一种将文本的一部分或者文档的一部分独立出来的方式。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实例：</span></span>
<span class="line"><span>&lt;p&gt;我的母亲有 &lt;span style=&quot;color:blue&quot;&gt;蓝色&lt;/span&gt; 的眼睛。&lt;/p&gt;</span></span></code></pre></div><blockquote><h2 id="header头部标签" tabindex="-1">header头部标签 <a class="header-anchor" href="#header头部标签" aria-label="Permalink to &quot;header头部标签&quot;">​</a></h2></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1.标签定义及使用说明</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;header&gt; 标签定义文档或者文档的一部分区域的页眉。</span></span>
<span class="line"><span>&lt;header&gt; 元素应该作为介绍内容或者导航链接栏的容器。</span></span>
<span class="line"><span>在一个文档中，您可以定义多个 &lt;header&gt; 元素。</span></span>
<span class="line"><span>注释：&lt;header&gt; 标签不能被放在 &lt;footer&gt;、&lt;address&gt; 或者另一个 &lt;header&gt; 元素内部。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 浏览器支持</span></span>
<span class="line"><span> IE 9、Firefox、Opera、Chrome 和 Safari 支持 &lt;header&gt; 标签。</span></span>
<span class="line"><span>  注释：IE 8 或更早版本的 IE 浏览器不支持 &lt;header&gt; 标签。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 实例</span></span>
<span class="line"><span>&lt;article&gt;</span></span>
<span class="line"><span>  &lt;header&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Internet Explorer 9&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;p&gt;&lt;time pubdate datetime=&quot;2011-03-15&quot;&gt;&lt;/time&gt;&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/header&gt;</span></span>
<span class="line"><span>  &lt;p&gt;Windows Internet Explorer 9 (abbreviated as IE9) was released to</span></span>
<span class="line"><span>  the  public on March 14, 2011 at 21:00 PDT.....&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/article&gt;</span></span></code></pre></div><blockquote><h2 id="footer底部标签" tabindex="-1">footer底部标签 <a class="header-anchor" href="#footer底部标签" aria-label="Permalink to &quot;footer底部标签&quot;">​</a></h2></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1.标签定义及使用说明</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;footer&gt; 标签定义文档或者文档的一部分区域的页脚。</span></span>
<span class="line"><span>&lt;footer&gt; 元素应该包含它所包含的元素的信息。</span></span>
<span class="line"><span>在典型情况下，该元素会包含文档创作者的姓名、文档的版权信息、使用条款的链接、联系信息等等。</span></span>
<span class="line"><span>在一个文档中，您可以定义多个 &lt;footer&gt; 元素。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 浏览器支持</span></span>
<span class="line"><span>IE 9、Firefox、Opera、Chrome 和 Safari 支持 &lt;footer&gt; 标签。</span></span>
<span class="line"><span>注释：IE 8 或更早版本的 IE 浏览器不支持 &lt;footer&gt; 标签。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 实例</span></span>
<span class="line"><span>&lt;footer&gt;</span></span>
<span class="line"><span>  &lt;p&gt;Posted by: Hege Refsnes&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;&lt;time pubdate datetime=&quot;2012-03-01&quot;&gt;&lt;/time&gt;&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/footer&gt;</span></span></code></pre></div><blockquote><h2 id="nav导航元素" tabindex="-1">nav导航元素 <a class="header-anchor" href="#nav导航元素" aria-label="Permalink to &quot;nav导航元素&quot;">​</a></h2></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1.标签定义及使用说明</span></span>
<span class="line"><span></span></span>
<span class="line"><span>表示页面中导航链接的部分，例如：传统导航条，侧边栏导航，页内导航，翻页等</span></span>
<span class="line"><span>&lt;nav&gt; 标签定义导航链接的部分。</span></span>
<span class="line"><span>并不是所有的 HTML 文档都要使用到 &lt;nav&gt; 元素。&lt;nav&gt; 元素只是作为标注一个导航链接的区域。</span></span>
<span class="line"><span>在不同设备上（手机或者PC）可以制定导航链接是否显示，以适应不同屏幕的需求。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 浏览器支持</span></span>
<span class="line"><span>目前大多数浏览器支持 &lt;nav&gt; 标签。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 实例</span></span>
<span class="line"><span>&lt;nav&gt;</span></span>
<span class="line"><span>  &lt;a href=&quot;/html/&quot;&gt;HTML&lt;/a&gt; |</span></span>
<span class="line"><span>  &lt;a href=&quot;/css/&quot;&gt;CSS&lt;/a&gt; |</span></span>
<span class="line"><span>  &lt;a href=&quot;/js/&quot;&gt;JavaScript&lt;/a&gt; |</span></span>
<span class="line"><span>  &lt;a href=&quot;/jquery/&quot;&gt;jQuery&lt;/a&gt;</span></span>
<span class="line"><span>&lt;/nav&gt;</span></span></code></pre></div><blockquote><h2 id="base标签" tabindex="-1">base标签 <a class="header-anchor" href="#base标签" aria-label="Permalink to &quot;base标签&quot;">​</a></h2></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1.标签定义及使用说明</span></span>
<span class="line"><span>&lt;base&gt; 标签为页面上的所有的相对链接规定默认 URL 或默认目标。</span></span>
<span class="line"><span>在一个文档中，最多能使用一个 &lt;base&gt; 元素。</span></span>
<span class="line"><span>&lt;base&gt; 标签必须位于 &lt;head&gt; 元素内部。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.浏览器支持</span></span>
<span class="line"><span>所有主流浏览器都支持 &lt;base&gt; 标签。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.实例</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;base href=&quot;/Volumes/dancework/html/images/&quot;&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;!--/Volumes/dancework/html/images/cover.jpg--&gt;</span></span>
<span class="line"><span>    &lt;img src=&quot;cover.jpg&quot; /&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div>`,136),p=[l];function i(o,c,d,r,u,g){return n(),a("div",null,p)}const y=t(e,[["render",i]]);export{q as __pageData,y as default};
