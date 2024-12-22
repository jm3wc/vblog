import{_ as s,c as a,o as n,a2 as p}from"./chunks/framework.CSGcjqEA.js";const b=JSON.parse('{"title":"Flex 布局教程：语法篇","description":"","frontmatter":{},"headers":[],"relativePath":"Flex布局.md","filePath":"Flex布局.md"}'),e={name:"Flex布局.md"},l=p(`<h1 id="flex-布局教程-语法篇" tabindex="-1">Flex 布局教程：语法篇 <a class="header-anchor" href="#flex-布局教程-语法篇" aria-label="Permalink to &quot;Flex 布局教程：语法篇&quot;">​</a></h1><p>网页布局（layout）是 CSS 的一个重点应用。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071001.gif" alt="img"></p><p>布局的传统解决方案，基于<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/box_model" target="_blank" rel="noreferrer">盒状模型</a>，依赖 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display" target="_blank" rel="noreferrer"><code>display</code></a> 属性 + <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position" target="_blank" rel="noreferrer"><code>position</code></a>属性 + <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float" target="_blank" rel="noreferrer"><code>float</code></a>属性。它对于那些特殊布局非常不方便，比如，<a href="https://css-tricks.com/centering-css-complete-guide/" target="_blank" rel="noreferrer">垂直居中</a>就不容易实现。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071002.png" alt="img"></p><p>2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071003.jpg" alt="img"></p><p>Flex 布局将成为未来布局的首选方案。本文介绍它的语法，<a href="https://www.ruanyifeng.com/blog/2015/07/flex-examples.html" target="_blank" rel="noreferrer">下一篇文章</a>给出常见布局的 Flex 写法。网友 <a href="http://vgee.cn/" target="_blank" rel="noreferrer">JailBreak</a> 为本文的所有示例制作了 <a href="http://static.vgee.cn/static/index.html" target="_blank" rel="noreferrer">Demo</a>，也可以参考。</p><p>以下内容主要参考了下面两篇文章：<a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noreferrer">A Complete Guide to Flexbox</a> 和 <a href="https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties" target="_blank" rel="noreferrer">A Visual Guide to CSS3 Flexbox Properties</a>。</p><h2 id="一、flex-布局是什么" tabindex="-1">一、Flex 布局是什么？ <a class="header-anchor" href="#一、flex-布局是什么" aria-label="Permalink to &quot;一、Flex 布局是什么？&quot;">​</a></h2><p>Flex 是 Flexible Box 的缩写，意为&quot;弹性布局&quot;，用来为盒状模型提供最大的灵活性。</p><p>任何一个容器都可以指定为 Flex 布局。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box{</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p>行内元素也可以使用 Flex 布局。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box{</span></span>
<span class="line"><span>  display: inline-flex;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p>Webkit 内核的浏览器，必须加上<code>-webkit</code>前缀。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box{</span></span>
<span class="line"><span>  display: -webkit-flex; /* Safari */</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p>注意，设为 Flex 布局以后，子元素的<code>float</code>、<code>clear</code>和<code>vertical-align</code>属性将失效。</p><h2 id="二、基本概念" tabindex="-1">二、基本概念 <a class="header-anchor" href="#二、基本概念" aria-label="Permalink to &quot;二、基本概念&quot;">​</a></h2><p>采用 Flex 布局的元素，称为 Flex 容器（flex container），简称&quot;容器&quot;。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称&quot;项目&quot;。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png" alt="img"></p><p>容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做<code>main start</code>，结束位置叫做<code>main end</code>；交叉轴的开始位置叫做<code>cross start</code>，结束位置叫做<code>cross end</code>。</p><p>项目默认沿主轴排列。单个项目占据的主轴空间叫做<code>main size</code>，占据的交叉轴空间叫做<code>cross size</code>。</p><h2 id="三、容器的属性" tabindex="-1">三、容器的属性 <a class="header-anchor" href="#三、容器的属性" aria-label="Permalink to &quot;三、容器的属性&quot;">​</a></h2><p>以下6个属性设置在容器上。</p><blockquote><ul><li>flex-direction</li><li>flex-wrap</li><li>flex-flow</li><li>justify-content</li><li>align-items</li><li>align-content</li></ul></blockquote><h3 id="_3-1-flex-direction属性" tabindex="-1">3.1 flex-direction属性 <a class="header-anchor" href="#_3-1-flex-direction属性" aria-label="Permalink to &quot;3.1 flex-direction属性&quot;">​</a></h3><p><code>flex-direction</code>属性决定主轴的方向（即项目的排列方向）。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  flex-direction: row | row-reverse | column | column-reverse;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png" alt="img"></p><p>它可能有4个值。</p><blockquote><ul><li><code>row</code>（默认值）：主轴为水平方向，起点在左端。</li><li><code>row-reverse</code>：主轴为水平方向，起点在右端。</li><li><code>column</code>：主轴为垂直方向，起点在上沿。</li><li><code>column-reverse</code>：主轴为垂直方向，起点在下沿。</li></ul></blockquote><h3 id="_3-2-flex-wrap属性" tabindex="-1">3.2 flex-wrap属性 <a class="header-anchor" href="#_3-2-flex-wrap属性" aria-label="Permalink to &quot;3.2 flex-wrap属性&quot;">​</a></h3><p>默认情况下，项目都排在一条线（又称&quot;轴线&quot;）上。<code>flex-wrap</code>属性定义，如果一条轴线排不下，如何换行。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png" alt="img"></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box{</span></span>
<span class="line"><span>  flex-wrap: nowrap | wrap | wrap-reverse;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p>它可能取三个值。</p><p>（1）<code>nowrap</code>（默认）：不换行。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071007.png" alt="img"></p><p>（2）<code>wrap</code>：换行，第一行在上方。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071008.jpg" alt="img"></p><p>（3）<code>wrap-reverse</code>：换行，第一行在下方。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071009.jpg" alt="img"></p><h3 id="_3-3-flex-flow" tabindex="-1">3.3 flex-flow <a class="header-anchor" href="#_3-3-flex-flow" aria-label="Permalink to &quot;3.3 flex-flow&quot;">​</a></h3><p><code>flex-flow</code>属性是<code>flex-direction</code>属性和<code>flex-wrap</code>属性的简写形式，默认值为<code>row nowrap</code>。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  flex-flow: &lt;flex-direction&gt; || &lt;flex-wrap&gt;;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><h3 id="_3-4-justify-content属性" tabindex="-1">3.4 justify-content属性 <a class="header-anchor" href="#_3-4-justify-content属性" aria-label="Permalink to &quot;3.4 justify-content属性&quot;">​</a></h3><p><code>justify-content</code>属性定义了项目在主轴上的对齐方式。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  justify-content: flex-start | flex-end | center | space-between | space-around;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png" alt="img"></p><p>它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。</p><blockquote><ul><li><code>flex-start</code>（默认值）：左对齐</li><li><code>flex-end</code>：右对齐</li><li><code>center</code>： 居中</li><li><code>space-between</code>：两端对齐，项目之间的间隔都相等。</li><li><code>space-around</code>：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</li></ul></blockquote><h3 id="_3-5-align-items属性" tabindex="-1">3.5 align-items属性 <a class="header-anchor" href="#_3-5-align-items属性" aria-label="Permalink to &quot;3.5 align-items属性&quot;">​</a></h3><p><code>align-items</code>属性定义项目在交叉轴上如何对齐。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  align-items: flex-start | flex-end | center | baseline | stretch;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png" alt="img"></p><p>它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。</p><blockquote><ul><li><code>flex-start</code>：交叉轴的起点对齐。</li><li><code>flex-end</code>：交叉轴的终点对齐。</li><li><code>center</code>：交叉轴的中点对齐。</li><li><code>baseline</code>: 项目的第一行文字的基线对齐。</li><li><code>stretch</code>（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。</li></ul></blockquote><h3 id="_3-6-align-content属性" tabindex="-1">3.6 align-content属性 <a class="header-anchor" href="#_3-6-align-content属性" aria-label="Permalink to &quot;3.6 align-content属性&quot;">​</a></h3><p><code>align-content</code>属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  align-content: flex-start | flex-end | center | space-between | space-around | stretch;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png" alt="img"></p><p>该属性可能取6个值。</p><blockquote><ul><li><code>flex-start</code>：与交叉轴的起点对齐。</li><li><code>flex-end</code>：与交叉轴的终点对齐。</li><li><code>center</code>：与交叉轴的中点对齐。</li><li><code>space-between</code>：与交叉轴两端对齐，轴线之间的间隔平均分布。</li><li><code>space-around</code>：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</li><li><code>stretch</code>（默认值）：轴线占满整个交叉轴。</li></ul></blockquote><h3 id="四、项目的属性" tabindex="-1">四、项目的属性 <a class="header-anchor" href="#四、项目的属性" aria-label="Permalink to &quot;四、项目的属性&quot;">​</a></h3><p>以下6个属性设置在项目上。</p><blockquote><ul><li><code>order</code></li><li><code>flex-grow</code></li><li><code>flex-shrink</code></li><li><code>flex-basis</code></li><li><code>flex</code></li><li><code>align-self</code></li></ul></blockquote><h3 id="_4-1-order属性" tabindex="-1">4.1 order属性 <a class="header-anchor" href="#_4-1-order属性" aria-label="Permalink to &quot;4.1 order属性&quot;">​</a></h3><p><code>order</code>属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.item {</span></span>
<span class="line"><span>  order: &lt;integer&gt;;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png" alt="img"></p><h3 id="_4-2-flex-grow属性" tabindex="-1">4.2 flex-grow属性 <a class="header-anchor" href="#_4-2-flex-grow属性" aria-label="Permalink to &quot;4.2 flex-grow属性&quot;">​</a></h3><p><code>flex-grow</code>属性定义项目的放大比例，默认为<code>0</code>，即如果存在剩余空间，也不放大。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.item {</span></span>
<span class="line"><span>  flex-grow: &lt;number&gt;; /* default 0 */</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png" alt="img"></p><p>如果所有项目的<code>flex-grow</code>属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的<code>flex-grow</code>属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。</p><h3 id="_4-3-flex-shrink属性" tabindex="-1">4.3 flex-shrink属性 <a class="header-anchor" href="#_4-3-flex-shrink属性" aria-label="Permalink to &quot;4.3 flex-shrink属性&quot;">​</a></h3><p><code>flex-shrink</code>属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.item {</span></span>
<span class="line"><span>  flex-shrink: &lt;number&gt;; /* default 1 */</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071015.jpg" alt="img"></p><p>如果所有项目的<code>flex-shrink</code>属性都为1，当空间不足时，都将等比例缩小。如果一个项目的<code>flex-shrink</code>属性为0，其他项目都为1，则空间不足时，前者不缩小。</p><p>负值对该属性无效。</p><h3 id="_4-4-flex-basis属性" tabindex="-1">4.4 flex-basis属性 <a class="header-anchor" href="#_4-4-flex-basis属性" aria-label="Permalink to &quot;4.4 flex-basis属性&quot;">​</a></h3><p><code>flex-basis</code>属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为<code>auto</code>，即项目的本来大小。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.item {</span></span>
<span class="line"><span>  flex-basis: &lt;length&gt; | auto; /* default auto */</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p>它可以设为跟<code>width</code>或<code>height</code>属性一样的值（比如350px），则项目将占据固定空间。</p><h3 id="_4-5-flex属性" tabindex="-1">4.5 flex属性 <a class="header-anchor" href="#_4-5-flex属性" aria-label="Permalink to &quot;4.5 flex属性&quot;">​</a></h3><p><code>flex</code>属性是<code>flex-grow</code>, <code>flex-shrink</code> 和 <code>flex-basis</code>的简写，默认值为<code>0 1 auto</code>。后两个属性可选。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.item {</span></span>
<span class="line"><span>  flex: none | [ &lt;&#39;flex-grow&#39;&gt; &lt;&#39;flex-shrink&#39;&gt;? || &lt;&#39;flex-basis&#39;&gt; ]</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p>该属性有两个快捷值：<code>auto</code> (<code>1 1 auto</code>) 和 none (<code>0 0 auto</code>)。</p><p>建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。</p><h3 id="_4-6-align-self属性" tabindex="-1">4.6 align-self属性 <a class="header-anchor" href="#_4-6-align-self属性" aria-label="Permalink to &quot;4.6 align-self属性&quot;">​</a></h3><p><code>align-self</code>属性允许单个项目有与其他项目不一样的对齐方式，可覆盖<code>align-items</code>属性。默认值为<code>auto</code>，表示继承父元素的<code>align-items</code>属性，如果没有父元素，则等同于<code>stretch</code>。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.item {</span></span>
<span class="line"><span>  align-self: auto | flex-start | flex-end | center | baseline | stretch;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png" alt="img"></p><p>该属性可能取6个值，除了auto，其他都与align-items属性完全一致。</p><h1 id="flex-布局教程-实例篇" tabindex="-1">Flex 布局教程：实例篇 <a class="header-anchor" href="#flex-布局教程-实例篇" aria-label="Permalink to &quot;Flex 布局教程：实例篇&quot;">​</a></h1><p>你会看到，不管是什么布局，Flex往往都可以几行命令搞定。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071327.png" alt="img"></p><p>我只列出代码，详细的语法解释请查阅<a href="https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html" target="_blank" rel="noreferrer">《Flex布局教程：语法篇》</a>。我的主要参考资料是<a href="https://davidwalsh.name/flexbox-dice" target="_blank" rel="noreferrer">Landon Schropp</a>的文章和<a href="https://philipwalton.github.io/solved-by-flexbox/" target="_blank" rel="noreferrer">Solved by Flexbox</a>。</p><h2 id="一、骰子的布局" tabindex="-1">一、骰子的布局 <a class="header-anchor" href="#一、骰子的布局" aria-label="Permalink to &quot;一、骰子的布局&quot;">​</a></h2><p>骰子的一面，最多可以放置9个点。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071328.png" alt="img"></p><p>下面，就来看看Flex如何实现，从1个点到9个点的布局。你可以到<a href="https://codepen.io/LandonSchropp/pen/KpzzGo" target="_blank" rel="noreferrer">codepen</a>查看Demo。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071329.png" alt="img"></p><p>如果不加说明，本节的HTML模板一律如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span>  &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div></blockquote><p>上面代码中，div元素（代表骰子的一个面）是Flex容器，span元素（代表一个点）是Flex项目。如果有多个项目，就要添加多个span元素，以此类推。</p><h3 id="_1-1-单项目" tabindex="-1">1.1 单项目 <a class="header-anchor" href="#_1-1-单项目" aria-label="Permalink to &quot;1.1 单项目&quot;">​</a></h3><p>首先，只有左上角1个点的情况。Flex布局默认就是首行左对齐，所以一行代码就够了。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071301.png" alt="img"></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p>设置项目的对齐方式，就能实现居中对齐和右对齐。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071302.png" alt="img"></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  justify-content: center;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071303.png" alt="img"></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  justify-content: flex-end;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p>设置交叉轴对齐方式，可以垂直移动主轴。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071304.png" alt="img"></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  align-items: center;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071305.png" alt="img"></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  justify-content: center;</span></span>
<span class="line"><span>  align-items: center;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071306.png" alt="img"></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  justify-content: center;</span></span>
<span class="line"><span>  align-items: flex-end;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071307.png" alt="img"></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  justify-content: flex-end;</span></span>
<span class="line"><span>  align-items: flex-end;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><h3 id="_1-2-双项目" tabindex="-1">1.2 双项目 <a class="header-anchor" href="#_1-2-双项目" aria-label="Permalink to &quot;1.2 双项目&quot;">​</a></h3><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071308.png" alt="img"></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  justify-content: space-between;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071309.png" alt="img"></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  flex-direction: column;</span></span>
<span class="line"><span>  justify-content: space-between;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071310.png" alt="img"></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  flex-direction: column;</span></span>
<span class="line"><span>  justify-content: space-between;</span></span>
<span class="line"><span>  align-items: center;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071311.png" alt="img"></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  flex-direction: column;</span></span>
<span class="line"><span>  justify-content: space-between;</span></span>
<span class="line"><span>  align-items: flex-end;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071312.png" alt="img"></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.item:nth-child(2) {</span></span>
<span class="line"><span>  align-self: center;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071313.png" alt="img"></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  justify-content: space-between;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.item:nth-child(2) {</span></span>
<span class="line"><span>  align-self: flex-end;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><h3 id="_1-3-三项目" tabindex="-1">1.3 三项目 <a class="header-anchor" href="#_1-3-三项目" aria-label="Permalink to &quot;1.3 三项目&quot;">​</a></h3><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071314.png" alt="img"></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.item:nth-child(2) {</span></span>
<span class="line"><span>  align-self: center;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.item:nth-child(3) {</span></span>
<span class="line"><span>  align-self: flex-end;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><h3 id="_1-4-四项目" tabindex="-1">1.4 四项目 <a class="header-anchor" href="#_1-4-四项目" aria-label="Permalink to &quot;1.4 四项目&quot;">​</a></h3><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071315.png" alt="img"></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  flex-wrap: wrap;</span></span>
<span class="line"><span>  justify-content: flex-end;</span></span>
<span class="line"><span>  align-content: space-between;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071316.png" alt="img"></p><p>HTML代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;column&quot;&gt;</span></span>
<span class="line"><span>    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;column&quot;&gt;</span></span>
<span class="line"><span>    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div></blockquote><p>CSS代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  flex-wrap: wrap;</span></span>
<span class="line"><span>  align-content: space-between;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.column {</span></span>
<span class="line"><span>  flex-basis: 100%;</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  justify-content: space-between;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><h3 id="_1-5-六项目" tabindex="-1">1.5 六项目 <a class="header-anchor" href="#_1-5-六项目" aria-label="Permalink to &quot;1.5 六项目&quot;">​</a></h3><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071317.png" alt="img"></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  flex-wrap: wrap;</span></span>
<span class="line"><span>  align-content: space-between;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071318.png" alt="img"></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  flex-direction: column;</span></span>
<span class="line"><span>  flex-wrap: wrap;</span></span>
<span class="line"><span>  align-content: space-between;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071319.png" alt="img"></p><p>HTML代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;row&quot;&gt;</span></span>
<span class="line"><span>    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;row&quot;&gt;</span></span>
<span class="line"><span>    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;row&quot;&gt;</span></span>
<span class="line"><span>     &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>     &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div></blockquote><p>CSS代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  flex-wrap: wrap;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.row{</span></span>
<span class="line"><span>  flex-basis: 100%;</span></span>
<span class="line"><span>  display:flex;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.row:nth-child(2){</span></span>
<span class="line"><span>  justify-content: center;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.row:nth-child(3){</span></span>
<span class="line"><span>  justify-content: space-between;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><h3 id="_1-6-九项目" tabindex="-1">1.6 九项目 <a class="header-anchor" href="#_1-6-九项目" aria-label="Permalink to &quot;1.6 九项目&quot;">​</a></h3><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071320.png" alt="img"></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  flex-wrap: wrap;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><h2 id="二、网格布局" tabindex="-1">二、网格布局 <a class="header-anchor" href="#二、网格布局" aria-label="Permalink to &quot;二、网格布局&quot;">​</a></h2><h3 id="_2-1-基本网格布局" tabindex="-1">2.1 基本网格布局 <a class="header-anchor" href="#_2-1-基本网格布局" aria-label="Permalink to &quot;2.1 基本网格布局&quot;">​</a></h3><p>最简单的网格布局，就是平均分布。在容器里面平均分配空间，跟上面的骰子布局很像，但是需要设置项目的自动缩放。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071321.png" alt="img"></p><p>HTML代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;Grid&quot;&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;Grid-cell&quot;&gt;...&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;Grid-cell&quot;&gt;...&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;Grid-cell&quot;&gt;...&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div></blockquote><p>CSS代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.Grid {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.Grid-cell {</span></span>
<span class="line"><span>  flex: 1;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><h3 id="_2-2-百分比布局" tabindex="-1">2.2 百分比布局 <a class="header-anchor" href="#_2-2-百分比布局" aria-label="Permalink to &quot;2.2 百分比布局&quot;">​</a></h3><p>某个网格的宽度为固定的百分比，其余网格平均分配剩余的空间。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071322.png" alt="img"></p><p>HTML代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;Grid&quot;&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;Grid-cell u-1of4&quot;&gt;...&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;Grid-cell&quot;&gt;...&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;Grid-cell u-1of3&quot;&gt;...&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div></blockquote><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.Grid {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.Grid-cell {</span></span>
<span class="line"><span>  flex: 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.Grid-cell.u-full {</span></span>
<span class="line"><span>  flex: 0 0 100%;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.Grid-cell.u-1of2 {</span></span>
<span class="line"><span>  flex: 0 0 50%;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.Grid-cell.u-1of3 {</span></span>
<span class="line"><span>  flex: 0 0 33.3333%;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.Grid-cell.u-1of4 {</span></span>
<span class="line"><span>  flex: 0 0 25%;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><h2 id="三、圣杯布局" tabindex="-1">三、圣杯布局 <a class="header-anchor" href="#三、圣杯布局" aria-label="Permalink to &quot;三、圣杯布局&quot;">​</a></h2><p><a href="https://en.wikipedia.org/wiki/Holy_Grail_(web_design)" target="_blank" rel="noreferrer">圣杯布局</a>（Holy Grail Layout）指的是一种最常见的网站布局。页面从上到下，分成三个部分：头部（header），躯干（body），尾部（footer）。其中躯干又水平分成三栏，从左到右为：导航、主栏、副栏。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071323.png" alt="img"></p><p>HTML代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body class=&quot;HolyGrail&quot;&gt;</span></span>
<span class="line"><span>  &lt;header&gt;...&lt;/header&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;HolyGrail-body&quot;&gt;</span></span>
<span class="line"><span>    &lt;main class=&quot;HolyGrail-content&quot;&gt;...&lt;/main&gt;</span></span>
<span class="line"><span>    &lt;nav class=&quot;HolyGrail-nav&quot;&gt;...&lt;/nav&gt;</span></span>
<span class="line"><span>    &lt;aside class=&quot;HolyGrail-ads&quot;&gt;...&lt;/aside&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;footer&gt;...&lt;/footer&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div></blockquote><p>CSS代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.HolyGrail {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  min-height: 100vh;</span></span>
<span class="line"><span>  flex-direction: column;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>header,</span></span>
<span class="line"><span>footer {</span></span>
<span class="line"><span>  flex: 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.HolyGrail-body {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  flex: 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.HolyGrail-content {</span></span>
<span class="line"><span>  flex: 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.HolyGrail-nav, .HolyGrail-ads {</span></span>
<span class="line"><span>  /* 两个边栏的宽度设为12em */</span></span>
<span class="line"><span>  flex: 0 0 12em;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.HolyGrail-nav {</span></span>
<span class="line"><span>  /* 导航放到最左边 */</span></span>
<span class="line"><span>  order: -1;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><p>如果是小屏幕，躯干的三栏自动变为垂直叠加。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@media (max-width: 768px) {</span></span>
<span class="line"><span>  .HolyGrail-body {</span></span>
<span class="line"><span>    flex-direction: column;</span></span>
<span class="line"><span>    flex: 1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  .HolyGrail-nav,</span></span>
<span class="line"><span>  .HolyGrail-ads,</span></span>
<span class="line"><span>  .HolyGrail-content {</span></span>
<span class="line"><span>    flex: auto;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><h2 id="四、输入框的布局" tabindex="-1">四、输入框的布局 <a class="header-anchor" href="#四、输入框的布局" aria-label="Permalink to &quot;四、输入框的布局&quot;">​</a></h2><p>我们常常需要在输入框的前方添加提示，后方添加按钮。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071324.png" alt="img"></p><p>HTML代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;InputAddOn&quot;&gt;</span></span>
<span class="line"><span>  &lt;span class=&quot;InputAddOn-item&quot;&gt;...&lt;/span&gt;</span></span>
<span class="line"><span>  &lt;input class=&quot;InputAddOn-field&quot;&gt;</span></span>
<span class="line"><span>  &lt;button class=&quot;InputAddOn-item&quot;&gt;...&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div></blockquote><p>CSS代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.InputAddOn {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.InputAddOn-field {</span></span>
<span class="line"><span>  flex: 1;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><h2 id="五、悬挂式布局" tabindex="-1">五、悬挂式布局 <a class="header-anchor" href="#五、悬挂式布局" aria-label="Permalink to &quot;五、悬挂式布局&quot;">​</a></h2><p>有时，主栏的左侧或右侧，需要添加一个图片栏。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071325.png" alt="img"></p><p>HTML代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;Media&quot;&gt;</span></span>
<span class="line"><span>  &lt;img class=&quot;Media-figure&quot; src=&quot;&quot; alt=&quot;&quot;&gt;</span></span>
<span class="line"><span>  &lt;p class=&quot;Media-body&quot;&gt;...&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div></blockquote><p>CSS代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.Media {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  align-items: flex-start;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.Media-figure {</span></span>
<span class="line"><span>  margin-right: 1em;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.Media-body {</span></span>
<span class="line"><span>  flex: 1;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><h3 id="六、固定的底栏" tabindex="-1">六、固定的底栏 <a class="header-anchor" href="#六、固定的底栏" aria-label="Permalink to &quot;六、固定的底栏&quot;">​</a></h3><p>有时，页面内容太少，无法占满一屏的高度，底栏就会抬高到页面的中间。这时可以采用Flex布局，让底栏总是出现在页面的底部。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071326.png" alt="img"></p><p>HTML代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body class=&quot;Site&quot;&gt;</span></span>
<span class="line"><span>  &lt;header&gt;...&lt;/header&gt;</span></span>
<span class="line"><span>  &lt;main class=&quot;Site-content&quot;&gt;...&lt;/main&gt;</span></span>
<span class="line"><span>  &lt;footer&gt;...&lt;/footer&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div></blockquote><p>CSS代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.Site {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  min-height: 100vh;</span></span>
<span class="line"><span>  flex-direction: column;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.Site-content {</span></span>
<span class="line"><span>  flex: 1;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote><h3 id="七-流式布局" tabindex="-1">七，流式布局 <a class="header-anchor" href="#七-流式布局" aria-label="Permalink to &quot;七，流式布局&quot;">​</a></h3><p>每行的项目数固定，会自动分行。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071330.png" alt="img"></p><p>CSS的写法。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.parent {</span></span>
<span class="line"><span>  width: 200px;</span></span>
<span class="line"><span>  height: 150px;</span></span>
<span class="line"><span>  background-color: black;</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  flex-flow: row wrap;</span></span>
<span class="line"><span>  align-content: flex-start;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.child {</span></span>
<span class="line"><span>  box-sizing: border-box;</span></span>
<span class="line"><span>  background-color: white;</span></span>
<span class="line"><span>  flex: 0 0 25%;</span></span>
<span class="line"><span>  height: 50px;</span></span>
<span class="line"><span>  border: 1px solid red;</span></span>
<span class="line"><span>}</span></span></code></pre></div></blockquote>`,212),t=[l];function i(o,c,d,g,r,u){return n(),a("div",null,t)}const m=s(e,[["render",i]]);export{b as __pageData,m as default};
