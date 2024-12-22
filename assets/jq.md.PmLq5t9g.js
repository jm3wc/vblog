import{_ as s,c as n,o as a,a2 as p}from"./chunks/framework.CSGcjqEA.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"jq.md","filePath":"jq.md"}'),l={name:"jq.md"},t=p(`<h2 id="为什么要学jquery" tabindex="-1">为什么要学jquery <a class="header-anchor" href="#为什么要学jquery" aria-label="Permalink to &quot;为什么要学jquery&quot;">​</a></h2><p>使用javascript开发过程中，有许多的缺点：</p><ol><li>查找元素的方法单一，麻烦。</li><li>遍历数组很麻烦，通常要嵌套一大堆的for循环。</li><li>有兼容性问题。</li><li>想要实现简单的动画效果，也很麻烦</li><li>代码冗余。</li></ol><h2 id="体验jquery的使用" tabindex="-1">体验jquery的使用 <a class="header-anchor" href="#体验jquery的使用" aria-label="Permalink to &quot;体验jquery的使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>* 1. 查找元素的方法多种多样，非常灵活</span></span>
<span class="line"><span>* 2. 拥有隐式迭代特性，因此不再需要手写for循环了。</span></span>
<span class="line"><span>* 3. 完全没有兼容性问题。</span></span>
<span class="line"><span>* 4. 实现动画非常简单，而且功能更加的强大。</span></span>
<span class="line"><span>* 5. 代码简单、粗暴。</span></span>
<span class="line"><span>* */</span></span>
<span class="line"><span>$(document).ready(function () {</span></span>
<span class="line"><span>    $(&quot;#btn1&quot;).click(function () {</span></span>
<span class="line"><span>        $(&quot;div&quot;).show(200);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    $(&quot;#btn2&quot;).click(function () {</span></span>
<span class="line"><span>        $(&quot;div&quot;).text(&quot;我是内容&quot;);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="jquery到底是什么" tabindex="-1">jquery到底是什么 <a class="header-anchor" href="#jquery到底是什么" aria-label="Permalink to &quot;jquery到底是什么&quot;">​</a></h2><blockquote><p>jQuery的官网 <a href="http://jquery.com/" target="_blank" rel="noreferrer">http://jquery.com/</a> jQuery就是一个js库，使用jQuery的话，会比使用JavaScript更简单。</p></blockquote><p><strong>What is jQuery?</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   jQuery is a fast, small, and feature-rich JavaScript library. </span></span>
<span class="line"><span>   It makes things like HTML document traversal and manipulation, </span></span>
<span class="line"><span>   event handling, animation, and Ajax </span></span>
<span class="line"><span>   much simpler with an easy-to-use API that works across a multitude of browsers. </span></span>
<span class="line"><span>   With a combination of versatility and extensibility, </span></span>
<span class="line"><span>   jQuery has changed the way that millions of people write JavaScript.</span></span></code></pre></div><p>js库：把一些常用到的方法写到一个单独的js文件，使用的时候直接去引用这js文件就可以了。 （animate.js、common.js）</p><p>我们知道了，jQuery其实就是一个js文件，里面封装了一大堆的方法方便我们的开发， 其实就是一个加强版的common.js，因此我们学习jQuery，其实就是学习jQuery这个js文件中封装的一大堆方法。</p><h2 id="jquery的版本问题" tabindex="-1">jquery的版本问题 <a class="header-anchor" href="#jquery的版本问题" aria-label="Permalink to &quot;jquery的版本问题&quot;">​</a></h2><blockquote><p>官网下载地址：<a href="http://jquery.com/download/" target="_blank" rel="noreferrer">http://jquery.com/download/</a> jQuery版本有很多，分为1.x 2.x 3.x 1.x和2.x版本jquery都不再更新版本了，现在只更新3.x版本。</p></blockquote><p>大版本分类：</p><ul><li>1.x版本：能够兼容IE678浏览器</li><li>2.x版本：不能兼容IE678浏览器</li><li>3.x版本：不能兼容IE678浏览器，更加的精简（在国内不流行，因为国内使用jQuery的主要目的就是兼容IE678）</li></ul><p>关于压缩版和未压缩版：</p><ul><li>jquery-1.12.4.min.js:压缩版本，适用于生产环境，因为文件比较小，去除了注释、换行、空格等东西，但是基本没有颗阅读性。</li><li>jquery-1.12.4.js:未压缩版本，适用于学习与开发环境，源码清晰，易阅读。</li></ul><h2 id="jquery的入口函数" tabindex="-1">jquery的入口函数 <a class="header-anchor" href="#jquery的入口函数" aria-label="Permalink to &quot;jquery的入口函数&quot;">​</a></h2><p>使用jQuery的三个步骤：</p><ol><li>引入jQuery文件</li><li>入口函数</li><li>功能实现</li></ol><p>关于jQuery的入口函数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//第一种写法</span></span>
<span class="line"><span>$(document).ready(function() {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>//第二种写法</span></span>
<span class="line"><span>$(function() {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>});</span></span></code></pre></div><p>jQuery入口函数与js入口函数的对比：</p><ol><li>JavaScript的入口函数要等到页面中所有资源（包括图片、文件）加载完成才开始执行。</li><li>jQuery的入口函数只会等待文档树加载完成就开始执行，并不会等待图片、文件的加载。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  //1.$是什么?</span></span>
<span class="line"><span>  //如果报了这个错误:$ is not defined,就说明没有引入jQuery文件.</span></span>
<span class="line"><span>  // $(function () {</span></span>
<span class="line"><span>  //</span></span>
<span class="line"><span>  // });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //2.jQuery文件结构.</span></span>
<span class="line"><span>  //其实是一个自执行函数.</span></span>
<span class="line"><span>  // (function(){</span></span>
<span class="line"><span>  //   window.jQuery = window.$ = jQuery;</span></span>
<span class="line"><span>  // }());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //3.</span></span>
<span class="line"><span>  //a.引入一个js文件,是会执行这js文件中的代码的.</span></span>
<span class="line"><span>  //console.log(num);//10</span></span>
<span class="line"><span>  //b.jQuery文件是一个自执行函数,执行这个jQUERY文件中的代码,其实就是执行这个自执行函数.</span></span>
<span class="line"><span>  //c.这个自执行文件就是给window对象添加一个jQuery属性和$属性.</span></span>
<span class="line"><span>  //console.log(window);</span></span>
<span class="line"><span>  //d.$其实和jQuery是等价的,是一个函数.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // console.log(window.jQuery === window.$);//true</span></span>
<span class="line"><span>  // console.log(Object.prototype.toString.call($));//&#39;[object Function]&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //4.$是一个函数</span></span>
<span class="line"><span>  //参数传递不同,效果也不一样.</span></span>
<span class="line"><span>  //4.1 如果参数传递的是一个匿名函数-入口函数</span></span>
<span class="line"><span>  // $(function(){</span></span>
<span class="line"><span>  // });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //4.2 如果参数传递的是一个字符串-选择器/创建一个标签</span></span>
<span class="line"><span>  //$(&#39;#one&#39;);</span></span>
<span class="line"><span>  //$(&#39;&lt;div&gt;啦啦,我是一个div&lt;/div&gt;&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //4.3 如果参数是一个dom对象,那他就会把dom对象转换成jQuery对象.</span></span>
<span class="line"><span>  //$(dom对象);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="jq对象和dom对象-重要" tabindex="-1">jq对象和dom对象(重要) <a class="header-anchor" href="#jq对象和dom对象-重要" aria-label="Permalink to &quot;jq对象和dom对象(重要)&quot;">​</a></h2><ol><li>DOM对象：使用JavaScript中的方法获取页面中的元素返回的对象就是dom对象。</li><li>jQuery对象：jquery对象就是使用jquery的方法获取页面中的元素返回的对象就是jQuery对象。</li><li>jQuery对象其实就是DOM对象的包装集<strong>包装了DOM对象的集合（伪数组）</strong></li><li>DOM对象与jQuery对象的方法不能混用。</li></ol><p>DOM对象转换成jQuery对象：【联想记忆：花钱】</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var $obj = $(domObj);</span></span>
<span class="line"><span>// $(document).ready(function(){});就是典型的DOM对象转jQuery对象</span></span></code></pre></div><p>jQuery对象转换成DOM对象：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var $li = $(&quot;li&quot;);</span></span>
<span class="line"><span>//第一种方法（推荐使用）</span></span>
<span class="line"><span>$li[0]</span></span>
<span class="line"><span>//第二种方法</span></span>
<span class="line"><span>$li.get(0)</span></span></code></pre></div><h2 id="jquery选择器" tabindex="-1">jquery选择器 <a class="header-anchor" href="#jquery选择器" aria-label="Permalink to &quot;jquery选择器&quot;">​</a></h2><h4 id="什么是jquery选择器" tabindex="-1">什么是jQuery选择器 <a class="header-anchor" href="#什么是jquery选择器" aria-label="Permalink to &quot;什么是jQuery选择器&quot;">​</a></h4><ul><li>jQuery选择器是jQuery为我们提供的一组方法，让我们更加方便的获取到页面中的元素。 注意：jQuery选择器返回的是jQuery对象。</li><li>jQuery选择器有很多，基本兼容了CSS1到CSS3所有的选择器，并且jQuery还添加了很多扩展性的选择器。 【查看jQuery文档】</li><li>jQuery选择器虽然很多，但是选择器之间可以相互替代，就是说获取一个元素，你会有很多种方法获取到。 所以我们平时真正能用到的只是少数的最常用的选择器。</li></ul><h4 id="基本选择器" tabindex="-1">基本选择器 <a class="header-anchor" href="#基本选择器" aria-label="Permalink to &quot;基本选择器&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">用法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">ID选择器</td><td style="text-align:left;">$(“#id”);</td><td style="text-align:left;">获取指定ID的元素</td></tr><tr><td style="text-align:left;">类选择器</td><td style="text-align:left;">$(“.class”);</td><td style="text-align:left;">获取同一类class的元素</td></tr><tr><td style="text-align:left;">标签选择器</td><td style="text-align:left;">$(“div”);</td><td style="text-align:left;">获取同一类标签的所有元素</td></tr><tr><td style="text-align:left;">并集选择器</td><td style="text-align:left;">$(“div,p,li”);</td><td style="text-align:left;">使用逗号分隔，只要符合条件之一就可。</td></tr><tr><td style="text-align:left;">交集选择器</td><td style="text-align:left;">$(“div.redClass”);</td><td style="text-align:left;">获取class为redClass的div元素</td></tr></tbody></table><blockquote><p>总结：跟css的选择器用法一模一样。</p></blockquote><h4 id="层级选择器" tabindex="-1">层级选择器 <a class="header-anchor" href="#层级选择器" aria-label="Permalink to &quot;层级选择器&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">用法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">子代选择器</td><td style="text-align:left;">$(“ul&gt;li”);</td><td style="text-align:left;">使用&gt;号，获取儿子层级的元素，注意，并不会获取孙子层级的元素</td></tr><tr><td style="text-align:left;">后代选择器</td><td style="text-align:left;">$(“ul li”);</td><td style="text-align:left;">使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等</td></tr></tbody></table><blockquote><p>总结：跟css的选择器用法一模一样。</p></blockquote><h4 id="过滤选择器" tabindex="-1">过滤选择器 <a class="header-anchor" href="#过滤选择器" aria-label="Permalink to &quot;过滤选择器&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">用法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">:eq（index）</td><td style="text-align:left;">$(“li:eq(2)”).css(“color”, ”red”);</td><td style="text-align:left;">获取到的li元素中，选择索引号为2的元素，索引号index从0开始。</td></tr><tr><td style="text-align:left;">:odd</td><td style="text-align:left;">$(“li:odd”).css(“color”, ”red”);</td><td style="text-align:left;">获取到的li元素中，选择索引号为奇数的元素</td></tr><tr><td style="text-align:left;">:even</td><td style="text-align:left;">$(“li:even”).css(“color”, ”red”);</td><td style="text-align:left;">获取到的li元素中，选择索引号为偶数的元素</td></tr></tbody></table><blockquote><p>总结：这类选择器都带冒号</p></blockquote><h4 id="筛选选择器-方法" tabindex="-1">筛选选择器(方法) <a class="header-anchor" href="#筛选选择器-方法" aria-label="Permalink to &quot;筛选选择器(方法)&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">用法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">children(selector)</td><td style="text-align:left;">$(“ul”).children(“li”)</td><td style="text-align:left;">相当于$(“ul&gt;li”)，子类选择器</td></tr><tr><td style="text-align:left;">find(selector)</td><td style="text-align:left;">$(“ul”).find(“li”);</td><td style="text-align:left;">相当于$(“ul li”),后代选择器</td></tr><tr><td style="text-align:left;">siblings(selector)</td><td style="text-align:left;">$(“#first”).siblings(“li”);</td><td style="text-align:left;">查找兄弟节点，不包括自己本身。</td></tr><tr><td style="text-align:left;">parent()</td><td style="text-align:left;">$(“#first”).parent();</td><td style="text-align:left;">查找父亲</td></tr><tr><td style="text-align:left;">eq(index)</td><td style="text-align:left;">$(“li”).eq(2);</td><td style="text-align:left;">相当于$(“li:eq(2)”),index从0开始</td></tr><tr><td style="text-align:left;">next()</td><td style="text-align:left;">$(“li”).next()</td><td style="text-align:left;">找下一个兄弟</td></tr><tr><td style="text-align:left;">prev()</td><td style="text-align:left;">$(“li”).prev()</td><td style="text-align:left;">找上一次兄弟</td></tr></tbody></table><blockquote><p>总结：筛选选择器的功能与过滤选择器有点类似，但是用法不一样，筛选选择器主要是方法。</p></blockquote><p>【案例：下拉菜单】 代码位于文章尾部 <img src="https://img-blog.csdnimg.cn/20191223173502981.gif" alt="在这里插入图片描述"></p><p>【案例：突出展示】 代码位于文章尾部 <img src="https://img-blog.csdnimg.cn/20191223173420379.gif" alt="在这里插入图片描述"></p><p>【案例：手风琴】 代码位于文章尾部 <img src="https://img-blog.csdnimg.cn/20191223173802590.gif" alt="在这里插入图片描述"></p><p>【案例：淘宝精品】 代码位于文章尾部 <img src="https://img-blog.csdnimg.cn/20191223173958746.gif" alt="在这里插入图片描述"></p><h2 id="元素设置" tabindex="-1">元素设置 <a class="header-anchor" href="#元素设置" aria-label="Permalink to &quot;元素设置&quot;">​</a></h2><h4 id="样式设置" tabindex="-1">样式设置 <a class="header-anchor" href="#样式设置" aria-label="Permalink to &quot;样式设置&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    /*1.设置一个样式*/</span></span>
<span class="line"><span>    //两个参数  设置的样式属性,具体样式</span></span>
<span class="line"><span>    $(&#39;li&#39;).css(&#39;color&#39;,&#39;red&#39;);</span></span>
<span class="line"><span>    //传入对象（设置的样式属性:具体样式）</span></span>
<span class="line"><span>    $(&#39;li&#39;).css({&#39;color&#39;:&#39;red&#39;});</span></span>
<span class="line"><span>    /*2.设置多个样式*/</span></span>
<span class="line"><span>    $(&#39;li&#39;).css({</span></span>
<span class="line"><span>        &#39;color&#39;:&#39;green&#39;,</span></span>
<span class="line"><span>        &#39;font-size&#39;:&#39;20px&#39;</span></span>
<span class="line"><span>    });</span></span></code></pre></div><h4 id="类名设置" tabindex="-1">类名设置 <a class="header-anchor" href="#类名设置" aria-label="Permalink to &quot;类名设置&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    /*1.添加一个类*/</span></span>
<span class="line"><span>    $(&#39;li&#39;).addClass(&#39;now&#39;);</span></span>
<span class="line"><span>    /*2.删除一个类*/</span></span>
<span class="line"><span>    $(&#39;li&#39;).removeClass(&#39;now&#39;);</span></span>
<span class="line"><span>    /*3.切换一个类  有就删除没有就添加*/</span></span>
<span class="line"><span>    $(&#39;li&#39;).toggleClass(&#39;now&#39;);</span></span>
<span class="line"><span>    /*4.匹配一个类  判断是否包含某个类  如果包含返回true否知返回false*/</span></span>
<span class="line"><span>    $(&#39;li&#39;).hasClass(&#39;now&#39;);</span></span></code></pre></div><p>对应案例：<code>案例-《tab切换》</code></p><p><img src="https://img-blog.csdnimg.cn/20191224205225608.gif" alt="在这里插入图片描述"></p><h4 id="属性设置" tabindex="-1">属性设置 <a class="header-anchor" href="#属性设置" aria-label="Permalink to &quot;属性设置&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    /*1.获取属性*/</span></span>
<span class="line"><span>    $(&#39;li&#39;).attr(&#39;name&#39;);</span></span>
<span class="line"><span>    /*2.设置属性*/</span></span>
<span class="line"><span>    $(&#39;li&#39;).attr(&#39;name&#39;,&#39;tom&#39;);</span></span>
<span class="line"><span>    /*3.设置多个属性*/</span></span>
<span class="line"><span>    $(&#39;li&#39;).attr({</span></span>
<span class="line"><span>        &#39;name&#39;:&#39;tom&#39;,</span></span>
<span class="line"><span>        &#39;age&#39;:&#39;18&#39;</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    /*4.删除属性*/</span></span>
<span class="line"><span>    $(&#39;li&#39;).removeAttr(&#39;name&#39;);</span></span></code></pre></div><p>对应案例：<code>案例-《美女相册》</code><img src="https://img-blog.csdnimg.cn/20191226180946383.gif" alt="在这里插入图片描述"></p><h4 id="prop方法" tabindex="-1">prop方法 <a class="header-anchor" href="#prop方法" aria-label="Permalink to &quot;prop方法&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    /*对于布尔类型的属性，不要attr方法，应该用prop方法 prop用法跟attr方法一样。*/</span></span>
<span class="line"><span>    $(&quot;#checkbox&quot;).prop(&quot;checked&quot;);</span></span>
<span class="line"><span>    $(&quot;#checkbox&quot;).prop(&quot;checked&quot;, true);</span></span>
<span class="line"><span>    $(&quot;#checkbox&quot;).prop(&quot;checked&quot;, false);</span></span>
<span class="line"><span>    $(&quot;#checkbox&quot;).removeProp(&quot;checked&quot;);</span></span></code></pre></div><p>对应案例：<code>案例-《表格全选》</code><img src="https://img-blog.csdnimg.cn/20191226181926529.gif" alt="在这里插入图片描述"></p><h2 id="动画" tabindex="-1">动画 <a class="header-anchor" href="#动画" aria-label="Permalink to &quot;动画&quot;">​</a></h2><h4 id="基本动画" tabindex="-1">基本动画 <a class="header-anchor" href="#基本动画" aria-label="Permalink to &quot;基本动画&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    /*注意：动画的本质是改变容器的大小和透明度*/</span></span>
<span class="line"><span>    /*注意：如果不传参数是看不到动画*/</span></span>
<span class="line"><span>    /*注意：可传入特殊的字符  fast normal slow*/</span></span>
<span class="line"><span>    /*注意：可传入数字 单位毫秒*/</span></span>
<span class="line"><span>    /*1.展示动画*/</span></span>
<span class="line"><span>    $(&#39;li&#39;).show();</span></span>
<span class="line"><span>    /*2.隐藏动画*/</span></span>
<span class="line"><span>    $(&#39;li&#39;).hide();</span></span>
<span class="line"><span>    /*3.切换展示和隐藏*/</span></span>
<span class="line"><span>    $(&#39;li&#39;).toggle();</span></span></code></pre></div><h4 id="滑入滑出" tabindex="-1">滑入滑出 <a class="header-anchor" href="#滑入滑出" aria-label="Permalink to &quot;滑入滑出&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    /*注意：动画的本质是改变容器的高度*/</span></span>
<span class="line"><span>    /*1.滑入动画*/</span></span>
<span class="line"><span>    $(&#39;li&#39;).slideDown();</span></span>
<span class="line"><span>    /*2.滑出动画*/</span></span>
<span class="line"><span>    $(&#39;li&#39;).slideUp();</span></span>
<span class="line"><span>    /*3.切换滑入滑出*/</span></span>
<span class="line"><span>    $(&#39;li&#39;).slideToggle();</span></span></code></pre></div><p>对应案例：<code>案例-《下拉菜单2》</code><img src="https://img-blog.csdnimg.cn/20191225134646561.gif" alt="在这里插入图片描述"></p><h4 id="淡入淡出" tabindex="-1">淡入淡出 <a class="header-anchor" href="#淡入淡出" aria-label="Permalink to &quot;淡入淡出&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    /*注意：动画的本质是改变容器的透明度*/</span></span>
<span class="line"><span>    /*1.淡入动画*/</span></span>
<span class="line"><span>    $(&#39;li&#39;).fadeIn();</span></span>
<span class="line"><span>    /*2.淡出动画*/</span></span>
<span class="line"><span>    $(&#39;li&#39;).fadeOut();</span></span>
<span class="line"><span>    /*3.切换淡入淡出*/</span></span>
<span class="line"><span>    $(&#39;li&#39;).fadeToggle();</span></span>
<span class="line"><span>    $(&#39;li&#39;).fadeTo(&#39;speed&#39;,&#39;opacity&#39;);</span></span></code></pre></div><p>对应案例：<code>案例-《淡入淡出》</code></p><p><img src="https://img-blog.csdnimg.cn/20191225134857193.gif" alt="在这里插入图片描述"></p><h4 id="自定义动画" tabindex="-1">自定义动画 <a class="header-anchor" href="#自定义动画" aria-label="Permalink to &quot;自定义动画&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    /*</span></span>
<span class="line"><span>    * 自定义动画</span></span>
<span class="line"><span>    * 参数1：需要做动画的属性</span></span>
<span class="line"><span>    * 参数2：需要执行动画的总时长</span></span>
<span class="line"><span>    * 参数3：执行动画的时候的速度</span></span>
<span class="line"><span>    * 参数4：执行动画完成之后的回调函数</span></span>
<span class="line"><span>    * */</span></span>
<span class="line"><span>    $(&#39;#box1&#39;).animate({left:800},5000);</span></span>
<span class="line"><span>    $(&#39;#box2&#39;).animate({left:800},5000,&#39;linear&#39;);</span></span>
<span class="line"><span>    $(&#39;#box3&#39;).animate({left:800},5000,&#39;swing&#39;,function () {</span></span>
<span class="line"><span>        console.log(&#39;动画执行完成&#39;);</span></span>
<span class="line"><span>    });</span></span></code></pre></div><p>对应案例：<code>案例-《360开关机动画》</code><img src="https://img-blog.csdnimg.cn/20191224211729803.gif" alt="在这里插入图片描述"></p><h4 id="动画队列" tabindex="-1">动画队列 <a class="header-anchor" href="#动画队列" aria-label="Permalink to &quot;动画队列&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    /*</span></span>
<span class="line"><span>    jQuery中有个动画队列的机制。</span></span>
<span class="line"><span>    当我们对一个对象添加多次动画效果时后添加的动作就会被放入这个动画队列中，  </span></span>
<span class="line"><span>    等前面的动画完成后再开始执行。</span></span>
<span class="line"><span>    可是用户的操作往往都比动画快，  </span></span>
<span class="line"><span>    如果用户对一个对象频繁操作时不处理动画队列就会造成队列堆积，</span></span>
<span class="line"><span>    影响到效果。</span></span>
<span class="line"><span>    */</span></span></code></pre></div><h4 id="stop使用" tabindex="-1">stop使用 <a class="header-anchor" href="#stop使用" aria-label="Permalink to &quot;stop使用&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    /*1.停止当前动画  如果动画队列当中还有动画立即执行*/</span></span>
<span class="line"><span>    //$(&#39;div&#39;).stop();</span></span>
<span class="line"><span>    /*2.和stop()效果一致  说明这是默认设置*/</span></span>
<span class="line"><span>    //$(&#39;div&#39;).stop(false,false);</span></span>
<span class="line"><span>    /*3.停止当前动画  清除动画队列*/</span></span>
<span class="line"><span>    //$(&#39;div&#39;).stop(true,false);</span></span>
<span class="line"><span>    /*4.停止当前动画并且到结束位置  清除了动画队列*/</span></span>
<span class="line"><span>    //$(&#39;div&#39;).stop(true,true);</span></span>
<span class="line"><span>    /*5.停止当前动画并且到结束位置  如果动画队列当中还有动画立即执行*/</span></span>
<span class="line"><span>    $(&#39;div&#39;).stop(false,true);</span></span></code></pre></div><p>对应案例：<code>案例-《音乐导航》</code> 对应案例：<code>案例-《工具栏》</code></p><h2 id="节点操作" tabindex="-1">节点操作 <a class="header-anchor" href="#节点操作" aria-label="Permalink to &quot;节点操作&quot;">​</a></h2><h4 id="创建节点" tabindex="-1">创建节点 <a class="header-anchor" href="#创建节点" aria-label="Permalink to &quot;创建节点&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    /*创建节点*/</span></span>
<span class="line"><span>    var $a = $(&#39;&lt;a href=&quot;http://www.baidu.com&quot; target=&quot;_blank&quot;&gt;百度1&lt;/a&gt;&#39;);</span></span></code></pre></div><h4 id="克隆节点" tabindex="-1">克隆节点 <a class="header-anchor" href="#克隆节点" aria-label="Permalink to &quot;克隆节点&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    /*如果想克隆事件  false  true克隆事件*/</span></span>
<span class="line"><span>    var $cloneP = $(&#39;p&#39;).clone(true);</span></span></code></pre></div><h4 id="添加-移动节点" tabindex="-1">添加&amp;移动节点 <a class="header-anchor" href="#添加-移动节点" aria-label="Permalink to &quot;添加&amp;移动节点&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    /*追加自身的最后面  传对象和html格式代码*/</span></span>
<span class="line"><span>    $(&#39;#box&#39;).append(&#39;&lt;a href=&quot;http://www.baidu.com&quot; target=&quot;_blank&quot;&gt;&lt;b&gt;百度3&lt;/b&gt;&lt;/a&gt;&#39;);</span></span>
<span class="line"><span>    $(&#39;#box&#39;).append($(&#39;a&#39;));</span></span>
<span class="line"><span>    /*追加到目标元素最后面  传目标元素的选择器或者对象*/</span></span>
<span class="line"><span>    $(&#39;&lt;a href=&quot;http://www.baidu.com&quot; target=&quot;_blank&quot;&gt;&lt;b&gt;百度3&lt;/b&gt;&lt;/a&gt;&#39;).appendTo($(&#39;#box&#39;));</span></span>
<span class="line"><span>    $(&#39;a&#39;).appendTo(&#39;#box&#39;);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    prepend();</span></span>
<span class="line"><span>    prependTo();</span></span>
<span class="line"><span>    after();</span></span>
<span class="line"><span>    before();</span></span></code></pre></div><h4 id="删除节点-清空节点" tabindex="-1">删除节点&amp;清空节点 <a class="header-anchor" href="#删除节点-清空节点" aria-label="Permalink to &quot;删除节点&amp;清空节点&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    /*1.清空box里面的元素*/</span></span>
<span class="line"><span>    /* 清理门户 */</span></span>
<span class="line"><span>    $(&#39;#box&#39;).empty();</span></span>
<span class="line"><span>    /*2.删除某个元素*/</span></span>
<span class="line"><span>    /* 自杀 */</span></span>
<span class="line"><span>    $(&#39;#box&#39;).remove();</span></span></code></pre></div><p>【案例-《表格删除》】 <img src="https://img-blog.csdnimg.cn/20191225135110832.gif" alt="在这里插入图片描述"></p><h2 id="jquery特殊属性操作" tabindex="-1">jQuery特殊属性操作 <a class="header-anchor" href="#jquery特殊属性操作" aria-label="Permalink to &quot;jQuery特殊属性操作&quot;">​</a></h2><h4 id="val方法" tabindex="-1">val方法 <a class="header-anchor" href="#val方法" aria-label="Permalink to &quot;val方法&quot;">​</a></h4><blockquote><p>val方法用于设置和获取表单元素的值，例如input、textarea的值</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    //设置值</span></span>
<span class="line"><span>    $(&quot;#name&quot;).val(&#39;张三&#39;);</span></span>
<span class="line"><span>    //获取值</span></span>
<span class="line"><span>    $(&quot;#name&quot;).val();</span></span></code></pre></div><h4 id="html方法与text方法" tabindex="-1">html方法与text方法 <a class="header-anchor" href="#html方法与text方法" aria-label="Permalink to &quot;html方法与text方法&quot;">​</a></h4><blockquote><p>html方法相当于innerHTML text方法相当于innerText</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    //设置内容</span></span>
<span class="line"><span>    $(&#39;div&#39;).html(&#39;&lt;span&gt;这是一段内容&lt;/span&gt;&#39;);</span></span>
<span class="line"><span>    //获取内容</span></span>
<span class="line"><span>    $(&#39;div&#39;).html()</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //设置内容</span></span>
<span class="line"><span>    $(&#39;div&#39;).text(&#39;&lt;span&gt;这是一段内容&lt;/span&gt;&#39;);</span></span>
<span class="line"><span>    //获取内容</span></span>
<span class="line"><span>    $(&#39;div&#39;).text()</span></span></code></pre></div><p>区别：html方法会识别html标签，text方法会那内容直接当成字符串，并不会识别html标签。</p><h4 id="width方法与height方法" tabindex="-1">width方法与height方法 <a class="header-anchor" href="#width方法与height方法" aria-label="Permalink to &quot;width方法与height方法&quot;">​</a></h4><blockquote><p>设置或者获取高度</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    //带参数表示设置高度</span></span>
<span class="line"><span>    $(&#39;img&#39;).height(200);</span></span>
<span class="line"><span>    //不带参数获取高度</span></span>
<span class="line"><span>    $(&#39;img&#39;).height();</span></span></code></pre></div><p>获取网页的可视区宽高</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    //获取可视区宽度</span></span>
<span class="line"><span>    $(window).width();</span></span>
<span class="line"><span>    //获取可视区高度</span></span>
<span class="line"><span>    $(window).height();</span></span></code></pre></div><h4 id="scrolltop与scrollleft" tabindex="-1">scrollTop与scrollLeft <a class="header-anchor" href="#scrolltop与scrollleft" aria-label="Permalink to &quot;scrollTop与scrollLeft&quot;">​</a></h4><blockquote><p>设置或者获取垂直滚动条的位置</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    //获取页面被卷曲的高度</span></span>
<span class="line"><span>    $(window).scrollTop();</span></span>
<span class="line"><span>    //获取页面被卷曲的宽度</span></span>
<span class="line"><span>    $(window).scrollLeft();</span></span></code></pre></div><h4 id="offset方法与position方法" tabindex="-1">offset方法与position方法 <a class="header-anchor" href="#offset方法与position方法" aria-label="Permalink to &quot;offset方法与position方法&quot;">​</a></h4><blockquote><p>offset方法获取元素距离document的位置，position方法获取的是元素距离有定位的父元素的位置。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    //获取元素距离document的位置,返回值为对象：{left:100, top:100}</span></span>
<span class="line"><span>    $(selector).offset();</span></span>
<span class="line"><span>    //获取相对于其最近的有定位的父元素的位置。</span></span>
<span class="line"><span>    $(selector).position();</span></span></code></pre></div><h2 id="jquery事件机制" tabindex="-1">jQuery事件机制 <a class="header-anchor" href="#jquery事件机制" aria-label="Permalink to &quot;jQuery事件机制&quot;">​</a></h2><blockquote><p>JavaScript中已经学习过了事件，但是jQuery对JavaScript事件进行了封装，增加并扩展了事件处理机制。jQuery不仅提供了更加优雅的事件处理语法，而且极大的增强了事件的处理能力。</p></blockquote><h4 id="jquery事件发展历程-了解" tabindex="-1">jQuery事件发展历程(了解) <a class="header-anchor" href="#jquery事件发展历程-了解" aria-label="Permalink to &quot;jQuery事件发展历程(了解)&quot;">​</a></h4><p>简单事件绑定&gt;&gt;bind事件绑定&gt;&gt;delegate事件绑定&gt;&gt;on事件绑定(推荐)</p><blockquote><p>简单事件注册</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    click(handler)          //单击事件</span></span>
<span class="line"><span>    mouseenter(handler)     //鼠标进入事件</span></span>
<span class="line"><span>    mouseleave(handler)     //鼠标离开事件</span></span></code></pre></div><p>缺点：不能同时注册多个事件</p><blockquote><p>bind方式注册事件</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    //第一个参数：事件类型</span></span>
<span class="line"><span>    //第二个参数：事件处理程序</span></span>
<span class="line"><span>    $(&quot;p&quot;).bind(&quot;click mouseenter&quot;, function(){</span></span>
<span class="line"><span>        //事件响应方法</span></span>
<span class="line"><span>    });</span></span></code></pre></div><p>缺点：不支持动态事件绑定</p><blockquote><p>delegate注册委托事件</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    // 第一个参数：selector，要绑定事件的元素</span></span>
<span class="line"><span>    // 第二个参数：事件类型</span></span>
<span class="line"><span>    // 第三个参数：事件处理函数</span></span>
<span class="line"><span>    $(&quot;.parentBox&quot;).delegate(&quot;p&quot;, &quot;click&quot;, function(){</span></span>
<span class="line"><span>        //为 .parentBox下面的所有的p标签绑定事件</span></span>
<span class="line"><span>    });</span></span></code></pre></div><p>缺点：只能注册委托事件，因此注册时间需要记得方法太多了</p><blockquote><p>on注册事件</p></blockquote><h4 id="on注册事件-重点" tabindex="-1">on注册事件(重点) <a class="header-anchor" href="#on注册事件-重点" aria-label="Permalink to &quot;on注册事件(重点)&quot;">​</a></h4><blockquote><p>jQuery1.7之后，jQuery用on统一了所有事件的处理方法。</p><p>最现代的方式，兼容zepto(移动端类似jQuery的一个库)，强烈建议使用。</p></blockquote><p>on注册简单事件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    // 表示给$(selector)绑定事件，并且由自己触发，不支持动态绑定。</span></span>
<span class="line"><span>    $(selector).on( &quot;click&quot;, function() {});</span></span></code></pre></div><p>on注册委托事件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    // 表示给$(selector)绑定代理事件，当必须是它的内部元素span才能触发这个事件，支持动态绑定</span></span>
<span class="line"><span>    $(selector).on( &quot;click&quot;,&#39;span&#39;, function() {});</span></span></code></pre></div><p>on注册事件的语法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    // 第一个参数：events，绑定事件的名称可以是由空格分隔的多个事件（标准事件或者自定义事件）</span></span>
<span class="line"><span>    // 第二个参数：selector, 执行事件的后代元素（可选），如果没有后代元素，那么事件将有自己执行。</span></span>
<span class="line"><span>    // 第三个参数：data，传递给处理函数的数据，事件触发的时候通过event.data来使用（不常使用）</span></span>
<span class="line"><span>    // 第四个参数：handler，事件处理函数</span></span>
<span class="line"><span>    $(selector).on(events,[selector],[data],handler);</span></span></code></pre></div><h4 id="事件解绑" tabindex="-1">事件解绑 <a class="header-anchor" href="#事件解绑" aria-label="Permalink to &quot;事件解绑&quot;">​</a></h4><blockquote><p>unbind方式（不用）</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    $(selector).unbind(); //解绑所有的事件</span></span>
<span class="line"><span>    $(selector).unbind(&quot;click&quot;); //解绑指定的事件</span></span></code></pre></div><blockquote><p>undelegate方式（不用）</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    $( selector ).undelegate(); //解绑所有的delegate事件</span></span>
<span class="line"><span>    $( selector).undelegate( &#39;click&#39; ); //解绑所有的click事件</span></span></code></pre></div><blockquote><p>off方式（推荐）</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    // 解绑匹配元素的所有事件</span></span>
<span class="line"><span>    $(selector).off();</span></span>
<span class="line"><span>    // 解绑匹配元素的所有click事件</span></span>
<span class="line"><span>    $(selector).off(&quot;click&quot;);</span></span></code></pre></div><h4 id="触发事件" tabindex="-1">触发事件 <a class="header-anchor" href="#触发事件" aria-label="Permalink to &quot;触发事件&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    $(selector).click(); //触发 click事件</span></span>
<span class="line"><span>    $(selector).trigger(&quot;click&quot;);</span></span></code></pre></div><h4 id="jquery事件对象" tabindex="-1">jQuery事件对象 <a class="header-anchor" href="#jquery事件对象" aria-label="Permalink to &quot;jQuery事件对象&quot;">​</a></h4><p>jQuery事件对象其实就是js事件对象的一个封装，处理了兼容性。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    //screenX和screenY   对应屏幕最左上角的值</span></span>
<span class="line"><span>    //clientX和clientY   距离页面左上角的位置（忽视滚动条）</span></span>
<span class="line"><span>    //pageX和pageY   距离页面最顶部的左上角的位置（会计算滚动条的距离）</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //event.keyCode 按下的键盘代码</span></span>
<span class="line"><span>    //event.data    存储绑定事件时传递的附加数据</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //event.stopPropagation()   阻止事件冒泡行为</span></span>
<span class="line"><span>    //event.preventDefault()    阻止浏览器默认行为</span></span>
<span class="line"><span>    //return false:既能阻止事件冒泡，又能阻止浏览器默认行为。</span></span></code></pre></div><h2 id="jquery补充知识点" tabindex="-1">jQuery补充知识点 <a class="header-anchor" href="#jquery补充知识点" aria-label="Permalink to &quot;jQuery补充知识点&quot;">​</a></h2><h4 id="链式编程" tabindex="-1">链式编程 <a class="header-anchor" href="#链式编程" aria-label="Permalink to &quot;链式编程&quot;">​</a></h4><blockquote><p>通常情况下，只有设置操作才能把链式编程延续下去。因为获取操作的时候，会返回获取到的相应的值，无法返回 jQuery对象。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    end(); // 筛选选择器会改变jQuery对象的DOM对象，想要回复到上一次的状态，并且返回匹配元素之前的状态。</span></span></code></pre></div><p>【案例：五角星评分案例.html】</p><h4 id="each方法" tabindex="-1">each方法 <a class="header-anchor" href="#each方法" aria-label="Permalink to &quot;each方法&quot;">​</a></h4><blockquote><p>jQuery的隐式迭代会对所有的DOM对象设置相同的值，但是如果我们需要给每一个对象设置不同的值的时候，就需要自己进行迭代了。</p></blockquote><p>作用：遍历jQuery对象集合，为每个匹配的元素执行一个函数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    // 参数一表示当前元素在所有匹配元素中的索引号</span></span>
<span class="line"><span>    // 参数二表示当前元素（DOM对象）</span></span>
<span class="line"><span>    $(selector).each(function(index,element){});</span></span></code></pre></div><p>【案例：不同的透明度.html】</p><h4 id="多库共存" tabindex="-1">多库共存 <a class="header-anchor" href="#多库共存" aria-label="Permalink to &quot;多库共存&quot;">​</a></h4><blockquote><p>jQuery使用 作 为 标 示 符 ， 但 是 如 果 与 其 他 框 架 中 的 作为标示符，但是如果与其他框架中的 作为标示符，但是如果与其他框架中的冲突时，jQuery可以释放$符的控制权.</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    var c = $.noConflict();//释放$的控制权,并且把$的能力给了c</span></span></code></pre></div><h2 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件&quot;">​</a></h2><h4 id="常用插件" tabindex="-1">常用插件 <a class="header-anchor" href="#常用插件" aria-label="Permalink to &quot;常用插件&quot;">​</a></h4><blockquote><p>插件：jquery不可能包含所有的功能，我们可以通过插件扩展jquery的功能。</p><p>jQuery有着丰富的插件，使用这些插件能给jQuery提供一些额外的功能。</p></blockquote><ol><li>jquery.color.js</li></ol><blockquote><p>animate不支持颜色的渐变，但是使用了jquery.color.js后，就可以支持颜色的渐变了。</p></blockquote><p>使用插件的步骤</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    //1. 引入jQuery文件</span></span>
<span class="line"><span>    //2. 引入插件（如果有用到css的话，需要引入css）</span></span>
<span class="line"><span>    //3. 使用插件</span></span></code></pre></div><ol><li>jquery.lazyload.js</li></ol><p>懒加载插件</p><h4 id="jquery-ui-js插件" tabindex="-1">jquery.ui.js插件 <a class="header-anchor" href="#jquery-ui-js插件" aria-label="Permalink to &quot;jquery.ui.js插件&quot;">​</a></h4><p>jQueryUI专指由jQuery官方维护的UI方向的插件。</p><p>官方API：<a href="http://api.jqueryui.com/category/all/" target="_blank" rel="noreferrer">http://api.jqueryui.com/category/all/</a></p><p>其他教程：<a href="http://www.runoob.com/jqueryui/jqueryui-tutorial.html" target="_blank" rel="noreferrer">jQueryUI教程</a></p><p>基本使用:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    //1.    引入jQueryUI的样式文件</span></span>
<span class="line"><span>    //2.    引入jQuery</span></span>
<span class="line"><span>    //3.    引入jQueryUI的js文件</span></span>
<span class="line"><span>    //4.    使用jQueryUI功能</span></span></code></pre></div><p>使用jquery.ui.js手风琴菜单</p><h3 id="制作jquery插件" tabindex="-1">制作jquery插件 <a class="header-anchor" href="#制作jquery插件" aria-label="Permalink to &quot;制作jquery插件&quot;">​</a></h3><blockquote><p>原理：jquery插件其实说白了就是给jquery对象增加一个新的方法，让jquery对象拥有某一个功能。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//通过给$.fn添加方法就能够扩展jquery对象</span></span>
<span class="line"><span>$.fn. pluginName = function() {};</span></span></code></pre></div><h2 id="案例代码" tabindex="-1">案例代码 <a class="header-anchor" href="#案例代码" aria-label="Permalink to &quot;案例代码&quot;">​</a></h2><h2 id="【案例-下拉菜单】" tabindex="-1">【案例：下拉菜单】 <a class="header-anchor" href="#【案例-下拉菜单】" aria-label="Permalink to &quot;【案例：下拉菜单】&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>        * {</span></span>
<span class="line"><span>            margin: 0;</span></span>
<span class="line"><span>            padding: 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ul {</span></span>
<span class="line"><span>            list-style: none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .wrap {</span></span>
<span class="line"><span>            width: 330px;</span></span>
<span class="line"><span>            height: 30px;</span></span>
<span class="line"><span>            margin: 100px auto 0;</span></span>
<span class="line"><span>            padding-left: 10px;</span></span>
<span class="line"><span>            background-image: url(images/bg.jpg);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .wrap li{</span></span>
<span class="line"><span>            background-image: url(images/libg.jpg);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .wrap &gt; ul &gt; li {</span></span>
<span class="line"><span>            float: left;</span></span>
<span class="line"><span>            margin-right: 10px;</span></span>
<span class="line"><span>            position: relative;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .wrap a {</span></span>
<span class="line"><span>            display: block;</span></span>
<span class="line"><span>            height: 30px;</span></span>
<span class="line"><span>            width: 100px;</span></span>
<span class="line"><span>            text-decoration: none;</span></span>
<span class="line"><span>            color: #000;</span></span>
<span class="line"><span>            line-height: 30px;</span></span>
<span class="line"><span>            text-align: center;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .wrap li ul {</span></span>
<span class="line"><span>            position: absolute;</span></span>
<span class="line"><span>            top: 30px;</span></span>
<span class="line"><span>            display: none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;wrap&quot;&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>        &lt;li&gt;</span></span>
<span class="line"><span>            &lt;a href=&quot;javascript:void(0);&quot;&gt;一级菜单1&lt;/a&gt;</span></span>
<span class="line"><span>            &lt;ul&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt;二级菜单1&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt;二级菜单2&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt;二级菜单3&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;/ul&gt;</span></span>
<span class="line"><span>        &lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;</span></span>
<span class="line"><span>            &lt;a href=&quot;javascript:void(0);&quot;&gt;一级菜单1&lt;/a&gt;</span></span>
<span class="line"><span>            &lt;ul&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt;二级菜单1&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt;二级菜单2&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt;二级菜单3&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;/ul&gt;</span></span>
<span class="line"><span>        &lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;</span></span>
<span class="line"><span>            &lt;a href=&quot;javascript:void(0);&quot;&gt;一级菜单1&lt;/a&gt;</span></span>
<span class="line"><span>            &lt;ul&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt;二级菜单1&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt;二级菜单2&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt;二级菜单3&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;/ul&gt;</span></span>
<span class="line"><span>        &lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;jquery-1.12.4.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  $(function () {</span></span>
<span class="line"><span>    //需求: 给一级菜单li设置鼠标移入事件，二级菜单显示。</span></span>
<span class="line"><span>    //      给一级菜单li设置鼠标离开事件，二级菜单隐藏。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //获取一级菜单li的方式:</span></span>
<span class="line"><span>    //$(&#39;li&#39;);//不行</span></span>
<span class="line"><span>    //$(&#39;ul&gt;li&#39;);//不行</span></span>
<span class="line"><span>    //$(&#39;.wrap li&#39;);//不行</span></span>
<span class="line"><span>    //$(&#39;.wrap&gt;ul&gt;li&#39;)//可行的.</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //1.给一级菜单li设置鼠标移入事件，二级菜单显示。</span></span>
<span class="line"><span>    $(&#39;.wrap&gt;ul&gt;li&#39;).mouseover(function () {</span></span>
<span class="line"><span>      //console.log(this);//谁触发了鼠标移入事件,那这个this就是谁,this还是一个dom对象.</span></span>
<span class="line"><span>      // $(this).children(&#39;ul&#39;).css(&#39;display&#39;,&#39;block&#39;);//显示就是更改display属性为block.</span></span>
<span class="line"><span>      $(this).children(&#39;ul&#39;).show();//show()方法本质上还是更新display属性为block.</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //2.给一级菜单li设置鼠标离开事件，二级菜单隐藏。</span></span>
<span class="line"><span>    $(&#39;.wrap&gt;ul&gt;li&#39;).mouseout(function () {</span></span>
<span class="line"><span>      $(this).children(&#39;ul&#39;).hide(); //hide()方法本质上还是更新display属性为none</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //3.思考题:</span></span>
<span class="line"><span>    //为什么不给一级菜单a标签设置鼠标移入和离开事件?</span></span>
<span class="line"><span>    //因为这样的话,选不到二级菜单.</span></span>
<span class="line"><span>    // $(&#39;.wrap&gt;ul&gt;li&gt;a&#39;).mouseover(function () {</span></span>
<span class="line"><span>    //   $(this).siblings(&#39;ul&#39;).show();</span></span>
<span class="line"><span>    // });</span></span>
<span class="line"><span>    // $(&#39;.wrap&gt;ul&gt;li&gt;a&#39;).mouseout(function () {</span></span>
<span class="line"><span>    //   $(this).siblings(&#39;ul&#39;).hide();</span></span>
<span class="line"><span>    // });</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="【案例-突出展示】" tabindex="-1">【案例：突出展示】 <a class="header-anchor" href="#【案例-突出展示】" aria-label="Permalink to &quot;【案例：突出展示】&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>        * {</span></span>
<span class="line"><span>            margin: 0;</span></span>
<span class="line"><span>            padding: 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ul {</span></span>
<span class="line"><span>            list-style: none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        body {</span></span>
<span class="line"><span>            background: #000;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .wrap {</span></span>
<span class="line"><span>            margin: 100px auto 0;</span></span>
<span class="line"><span>            width: 630px;</span></span>
<span class="line"><span>                  height: 394px;</span></span>
<span class="line"><span>            padding: 10px 0 0 10px;</span></span>
<span class="line"><span>            background: #000;</span></span>
<span class="line"><span>            overflow: hidden;</span></span>
<span class="line"><span>            border: 1px solid #fff;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .wrap li {</span></span>
<span class="line"><span>            float: left;</span></span>
<span class="line"><span>            margin: 0 10px 10px 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .wrap img {</span></span>
<span class="line"><span>            display: block;</span></span>
<span class="line"><span>                  border: 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;wrap&quot;&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/01.jpg&quot; alt=&quot;&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/02.jpg&quot; alt=&quot;&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/03.jpg&quot; alt=&quot;&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/04.jpg&quot; alt=&quot;&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/05.jpg&quot; alt=&quot;&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/06.jpg&quot; alt=&quot;&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;jquery-1.12.4.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  $(function () {</span></span>
<span class="line"><span>    //需求1:给小人物所在的li标签设置鼠标移入事件:当前li标签透明度为1,其他的兄弟li标签透明度为0.4</span></span>
<span class="line"><span>    //需求2:鼠标离开大盒子,所有的li标签的透明度改成1.</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //获取小人物们所在的li</span></span>
<span class="line"><span>    //$(&#39;.wrap li&#39;)//可以的</span></span>
<span class="line"><span>    //console.log($(&#39;.wrap&#39;).find(&#39;li&#39;));//可以的</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //需求1:</span></span>
<span class="line"><span>    $(&#39;.wrap&#39;).find(&#39;li&#39;).mouseenter(function () {</span></span>
<span class="line"><span>        console.log($(this).css(&#39;opacity&#39;, 1));//这个css方法有返回值,返回值就是设置这个方法的元素本身.</span></span>
<span class="line"><span>        console.log($(this).css(&#39;opacity&#39;, 1).siblings(&#39;li&#39;));</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        $(this).css(&#39;opacity&#39;, 1).siblings(&#39;li&#39;).css(&#39;opacity&#39;,0.4);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //需求2:</span></span>
<span class="line"><span>    $(&#39;.wrap&#39;).mouseleave(function () {</span></span>
<span class="line"><span>        //$(&#39;.wrap&#39;).find(&#39;li&#39;).css(&#39;opacity&#39;,1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //console.log($(this));//在这个离开事件中,this是这整个大盒子.</span></span>
<span class="line"><span>        $(this).find(&#39;li&#39;).css(&#39;opacity&#39;,1);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="【案例-手风琴】" tabindex="-1">【案例：手风琴】 <a class="header-anchor" href="#【案例-手风琴】" aria-label="Permalink to &quot;【案例：手风琴】&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>        * {</span></span>
<span class="line"><span>            padding: 0;</span></span>
<span class="line"><span>            margin: 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ul {</span></span>
<span class="line"><span>            list-style-type: none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .parentWrap {</span></span>
<span class="line"><span>            width: 200px;</span></span>
<span class="line"><span>            text-align: center;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .menuGroup {</span></span>
<span class="line"><span>            border: 1px solid #999;</span></span>
<span class="line"><span>            background-color: #e0ecff;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .groupTitle {</span></span>
<span class="line"><span>            display: block;</span></span>
<span class="line"><span>            height: 20px;</span></span>
<span class="line"><span>            line-height: 20px;</span></span>
<span class="line"><span>            font-size: 16px;</span></span>
<span class="line"><span>            border-bottom: 1px solid #ccc;</span></span>
<span class="line"><span>            cursor: pointer;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .menuGroup &gt; div {</span></span>
<span class="line"><span>            height: 200px;</span></span>
<span class="line"><span>            background-color: #fff;</span></span>
<span class="line"><span>            display: none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;ul class=&quot;parentWrap&quot;&gt;</span></span>
<span class="line"><span>        &lt;li class=&quot;menuGroup&quot;&gt;</span></span>
<span class="line"><span>            &lt;span class=&quot;groupTitle&quot;&gt;标题1&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;div&gt;我是弹出来的div1&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/li&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;li class=&quot;menuGroup&quot;&gt;</span></span>
<span class="line"><span>            &lt;span class=&quot;groupTitle&quot;&gt;标题2&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;div&gt;我是弹出来的div2&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/li&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;li class=&quot;menuGroup&quot;&gt;</span></span>
<span class="line"><span>            &lt;span class=&quot;groupTitle&quot;&gt;标题3&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;div&gt;我是弹出来的div3&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/li&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;li class=&quot;menuGroup&quot;&gt;</span></span>
<span class="line"><span>            &lt;span class=&quot;groupTitle&quot;&gt;标题4&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;div&gt;我是弹出来的div4&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;jquery-1.12.4.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    $(function () {</span></span>
<span class="line"><span>        //需求:点击标题li标签,对应的div显示, 他的兄弟标签li下面的div隐藏.</span></span>
<span class="line"><span>        $(&#39;.parentWrap&gt;.menuGroup&#39;).click(function () {</span></span>
<span class="line"><span>            //jQuery特性:隐式迭代</span></span>
<span class="line"><span>            //jQuery特性:链式编程,在于一个方法返回的是一个jQuery对象,既然是jQueyr对象就可以继续点出jQuery的方法来.</span></span>
<span class="line"><span>            $(this).children(&#39;div&#39;).show().parent().siblings(&#39;li&#39;).children(&#39;div&#39;).hide();</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="【案例-淘宝精品】" tabindex="-1">【案例：淘宝精品】 <a class="header-anchor" href="#【案例-淘宝精品】" aria-label="Permalink to &quot;【案例：淘宝精品】&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>        * {</span></span>
<span class="line"><span>            margin: 0;</span></span>
<span class="line"><span>            padding: 0;</span></span>
<span class="line"><span>            font-size: 12px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        ul {</span></span>
<span class="line"><span>            list-style: none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        a {</span></span>
<span class="line"><span>            text-decoration: none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .wrapper {</span></span>
<span class="line"><span>            width: 298px;</span></span>
<span class="line"><span>            height: 248px;</span></span>
<span class="line"><span>            margin: 100px auto 0;</span></span>
<span class="line"><span>            border: 1px solid pink;</span></span>
<span class="line"><span>            overflow: hidden;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        #left,#center,#right{</span></span>
<span class="line"><span>            float: left;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        #left li , #right li{</span></span>
<span class="line"><span>            background: url(images/lili.jpg) repeat-x;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        #left li a,#right li a{</span></span>
<span class="line"><span>            display: block;</span></span>
<span class="line"><span>            width: 48px;</span></span>
<span class="line"><span>            height: 27px;</span></span>
<span class="line"><span>            border-bottom: 1px solid pink;</span></span>
<span class="line"><span>            line-height: 27px;</span></span>
<span class="line"><span>            text-align: center;</span></span>
<span class="line"><span>            color: black;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        #left li a:hover,#right li a:hover{</span></span>
<span class="line"><span>            background-image: url(images/abg.gif);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        #center {</span></span>
<span class="line"><span>            border-left: 1px solid pink;</span></span>
<span class="line"><span>            border-right: 1px solid pink;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;jquery-1.12.4.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>      $(function () {</span></span>
<span class="line"><span>          //需求1:给左边的li标签们设置鼠标移入事件,让中间索引对应的li显示,其他的li隐藏.</span></span>
<span class="line"><span>          //需求2:给右边的li标签们设置鼠标移入事件,让中间索引对应的li显示,其他的li隐藏.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          //需求1:</span></span>
<span class="line"><span>          $(&#39;#left&gt;li&#39;).mouseenter(function () {</span></span>
<span class="line"><span>              //获取当前鼠标移入的这个li标签的索引.</span></span>
<span class="line"><span>              var idx = $(this).index();//索引:表示的是这个元素在他兄弟元素间的排行.</span></span>
<span class="line"><span>              //console.log(idx);</span></span>
<span class="line"><span>              //让中间索引对应的li显示,其他的li隐藏.</span></span>
<span class="line"><span>              //$(&#39;#center&gt;li:eq(&#39;+idx+&#39;)&#39;); //字符串的拼接</span></span>
<span class="line"><span>              $(&#39;#center&gt;li&#39;).eq(idx).show().siblings(&#39;li&#39;).hide();</span></span>
<span class="line"><span>          });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          //需求2:</span></span>
<span class="line"><span>          $(&#39;#right&gt;li&#39;).mouseenter(function () {</span></span>
<span class="line"><span>              //获取当前鼠标移入的这个li标签的索引.</span></span>
<span class="line"><span>              var idx = $(this).index();</span></span>
<span class="line"><span>              idx += 9;//9不要写死,9是左边li标签的个数.</span></span>
<span class="line"><span>              //让中间索引对应的li显示,其他的li隐藏.</span></span>
<span class="line"><span>              $(&#39;#center&gt;li&#39;).eq(idx).show().siblings(&#39;li&#39;).hide();</span></span>
<span class="line"><span>          });</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>          //因为age已经成为字符串的一部分了.不能拿到age变量的值.</span></span>
<span class="line"><span>          // var age = 18;</span></span>
<span class="line"><span>          // console.log(&quot;我的名字是age&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>          //思考题:</span></span>
<span class="line"><span>          //为什么是给li标签设置鼠标移入事件,而不是给a标签设置鼠标移入事件?</span></span>
<span class="line"><span>          //因为给a标签设置的话,不能拿到正确的索引.</span></span>
<span class="line"><span>          // $(&#39;#left a&#39;).mouseenter(function () {</span></span>
<span class="line"><span>          //    var idx =  $(this).index();</span></span>
<span class="line"><span>          //     console.log(idx);</span></span>
<span class="line"><span>          // });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;wrapper&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;ul id=&quot;left&quot;&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;女靴&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;雪地靴&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;冬裙&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;呢大衣&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;毛衣&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;棉服&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;女裤&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;羽绒服&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;牛仔裤&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;ul id=&quot;center&quot;&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/女靴.jpg&quot; width=&quot;200&quot; height=&quot;250&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/雪地靴.jpg&quot; width=&quot;200&quot; height=&quot;250&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/冬裙.jpg&quot; width=&quot;200&quot; height=&quot;250&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/呢大衣.jpg&quot; width=&quot;200&quot; height=&quot;250&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/毛衣.jpg&quot; width=&quot;200&quot; height=&quot;250&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/棉服.jpg&quot; width=&quot;200&quot; height=&quot;250&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/女裤.jpg&quot; width=&quot;200&quot; height=&quot;250&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/羽绒服.jpg&quot; width=&quot;200&quot; height=&quot;250&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/牛仔裤.jpg&quot; width=&quot;200&quot; height=&quot;250&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/女包.jpg&quot; width=&quot;200&quot; height=&quot;250&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/男包.jpg&quot; width=&quot;200&quot; height=&quot;250&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/登山鞋.jpg&quot; width=&quot;200&quot; height=&quot;250&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/皮带.jpg&quot; width=&quot;200&quot; height=&quot;250&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/围巾.jpg&quot; width=&quot;200&quot; height=&quot;250&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/皮衣.jpg&quot; width=&quot;200&quot; height=&quot;250&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/男毛衣.jpg&quot; width=&quot;200&quot; height=&quot;250&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/男棉服.jpg&quot; width=&quot;200&quot; height=&quot;250&quot;/&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;images/男靴.jpg&quot; width=&quot;200&quot; height=&quot;250&quot; /&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;ul id=&quot;right&quot;&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;女包&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;男包&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;登山鞋&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;皮带&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;围巾&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;皮衣&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;男毛衣&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;男棉服&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;男靴&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h2 id="案例-《tab切换》" tabindex="-1">案例-《tab切换》 <a class="header-anchor" href="#案例-《tab切换》" aria-label="Permalink to &quot;案例-《tab切换》&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>        * {</span></span>
<span class="line"><span>            margin: 0;</span></span>
<span class="line"><span>            padding: 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ul {</span></span>
<span class="line"><span>            list-style: none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .wrapper {</span></span>
<span class="line"><span>            width: 1000px;</span></span>
<span class="line"><span>            height: 475px;</span></span>
<span class="line"><span>            margin: 0 auto;</span></span>
<span class="line"><span>            margin-top: 100px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .tab {</span></span>
<span class="line"><span>            border: 1px solid #ddd;</span></span>
<span class="line"><span>            border-bottom: 0;</span></span>
<span class="line"><span>            height: 36px;</span></span>
<span class="line"><span>            width: 320px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .tab li {</span></span>
<span class="line"><span>            position: relative;</span></span>
<span class="line"><span>            float: left;</span></span>
<span class="line"><span>            width: 80px;</span></span>
<span class="line"><span>            height: 34px;</span></span>
<span class="line"><span>            line-height: 34px;</span></span>
<span class="line"><span>            text-align: center;</span></span>
<span class="line"><span>            cursor: pointer;</span></span>
<span class="line"><span>            border-top: 4px solid #fff;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .tab span {</span></span>
<span class="line"><span>            position: absolute;</span></span>
<span class="line"><span>            right: 0;</span></span>
<span class="line"><span>            top: 10px;</span></span>
<span class="line"><span>            background: #ddd;</span></span>
<span class="line"><span>            width: 1px;</span></span>
<span class="line"><span>            height: 14px;</span></span>
<span class="line"><span>            overflow: hidden;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .products {</span></span>
<span class="line"><span>            width: 1002px;</span></span>
<span class="line"><span>            border: 1px solid #ddd;</span></span>
<span class="line"><span>            height: 476px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .products .main {</span></span>
<span class="line"><span>            float: left;</span></span>
<span class="line"><span>            display: none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .products .main.selected {</span></span>
<span class="line"><span>            display: block;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .tab li.active {</span></span>
<span class="line"><span>            border-color: red;</span></span>
<span class="line"><span>            border-bottom: 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;wrapper&quot;&gt;</span></span>
<span class="line"><span>    &lt;ul class=&quot;tab&quot;&gt;</span></span>
<span class="line"><span>        &lt;li class=&quot;tab-item active&quot;&gt;国际大牌&lt;span&gt;◆&lt;/span&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li class=&quot;tab-item&quot;&gt;国妆名牌&lt;span&gt;◆&lt;/span&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li class=&quot;tab-item&quot;&gt;清洁用品&lt;span&gt;◆&lt;/span&gt;&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li class=&quot;tab-item&quot;&gt;男士精品&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;products&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;main selected&quot;&gt;</span></span>
<span class="line"><span>            &lt;a href=&quot;###&quot;&gt;&lt;img src=&quot;images/guojidapai.jpg&quot; alt=&quot;&quot;/&gt;&lt;/a&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;main&quot;&gt;</span></span>
<span class="line"><span>            &lt;a href=&quot;###&quot;&gt;&lt;img src=&quot;images/guozhuangmingpin.jpg&quot; alt=&quot;&quot;/&gt;&lt;/a&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;main&quot;&gt;</span></span>
<span class="line"><span>            &lt;a href=&quot;###&quot;&gt;&lt;img src=&quot;images/qingjieyongpin.jpg&quot; alt=&quot;&quot;/&gt;&lt;/a&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;main&quot;&gt;</span></span>
<span class="line"><span>            &lt;a href=&quot;###&quot;&gt;&lt;img src=&quot;images/nanshijingpin.jpg&quot; alt=&quot;&quot;/&gt;&lt;/a&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script src=&quot;jquery-1.12.4.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    $(function () {</span></span>
<span class="line"><span>        //需求:给tab栏的每一个li标签设置鼠标移入事件: 当前li添加active类,其他的兄弟li移除active类.</span></span>
<span class="line"><span>        //    找到当前tab栏索引一致的div,让他添加 selected类,其他的兄弟div移除selected类.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //需求1</span></span>
<span class="line"><span>        $(&#39;.tab&gt;.tab-item&#39;).mouseenter(function () {</span></span>
<span class="line"><span>            $(this).addClass(&#39;active&#39;).siblings(&#39;li&#39;).removeClass(&#39;active&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //获取鼠标当前移入的这个li标签的索引</span></span>
<span class="line"><span>            var idx = $(this).index();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //需求2:</span></span>
<span class="line"><span>            $(&#39;.products&gt;.main&#39;).eq(idx).addClass(&#39;selected&#39;).siblings(&#39;div&#39;).removeClass(&#39;selected&#39;);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="案例-《下拉菜单2》" tabindex="-1">案例-《下拉菜单2》 <a class="header-anchor" href="#案例-《下拉菜单2》" aria-label="Permalink to &quot;案例-《下拉菜单2》&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>        * {</span></span>
<span class="line"><span>            margin: 0;</span></span>
<span class="line"><span>            padding: 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ul {</span></span>
<span class="line"><span>            list-style: none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .wrap {</span></span>
<span class="line"><span>            width: 330px;</span></span>
<span class="line"><span>            height: 30px;</span></span>
<span class="line"><span>            margin: 100px auto 0;</span></span>
<span class="line"><span>            padding-left: 10px;</span></span>
<span class="line"><span>            background-image: url(images/bg.jpg);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .wrap li{</span></span>
<span class="line"><span>            background-image: url(images/libg.jpg);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .wrap &gt; ul &gt; li {</span></span>
<span class="line"><span>            float: left;</span></span>
<span class="line"><span>            margin-right: 10px;</span></span>
<span class="line"><span>            position: relative;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .wrap a {</span></span>
<span class="line"><span>            display: block;</span></span>
<span class="line"><span>            height: 30px;</span></span>
<span class="line"><span>            width: 100px;</span></span>
<span class="line"><span>            text-decoration: none;</span></span>
<span class="line"><span>            color: #000;</span></span>
<span class="line"><span>            line-height: 30px;</span></span>
<span class="line"><span>            text-align: center;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .wrap li ul {</span></span>
<span class="line"><span>            position: absolute;</span></span>
<span class="line"><span>            top: 30px;</span></span>
<span class="line"><span>            display: none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;wrap&quot;&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>        &lt;li&gt;</span></span>
<span class="line"><span>            &lt;a href=&quot;javascript:void(0);&quot;&gt;一级菜单1&lt;/a&gt;</span></span>
<span class="line"><span>            &lt;ul&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt;二级菜单1&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt;二级菜单2&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt;二级菜单3&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;/ul&gt;</span></span>
<span class="line"><span>        &lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;</span></span>
<span class="line"><span>            &lt;a href=&quot;javascript:void(0);&quot;&gt;一级菜单1&lt;/a&gt;</span></span>
<span class="line"><span>            &lt;ul&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt;二级菜单1&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt;二级菜单2&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt;二级菜单3&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;/ul&gt;</span></span>
<span class="line"><span>        &lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;</span></span>
<span class="line"><span>            &lt;a href=&quot;javascript:void(0);&quot;&gt;一级菜单1&lt;/a&gt;</span></span>
<span class="line"><span>            &lt;ul&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt;二级菜单1&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt;二级菜单2&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt;二级菜单3&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;/ul&gt;</span></span>
<span class="line"><span>        &lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;jquery-1.12.4.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  $(function () {</span></span>
<span class="line"><span>    //需求: 给一级菜单的li标签设置鼠标移入事件，二级菜单ul显示。</span></span>
<span class="line"><span>    //      给一级菜单li设置鼠标离开事件，二级菜单隐藏。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //鼠标移入事件.</span></span>
<span class="line"><span>    $(&#39;.wrap&gt;ul&gt;li&#39;).mouseenter(function () {</span></span>
<span class="line"><span>      //$(this).children(&#39;ul&#39;).css(&#39;display&#39;,&#39;block&#39;);</span></span>
<span class="line"><span>      //简写</span></span>
<span class="line"><span>      $(this).children(&#39;ul&#39;).stop(true,false).slideDown(300);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //鼠标移出事件.</span></span>
<span class="line"><span>    $(&#39;.wrap&gt;ul&gt;li&#39;).mouseleave(function () {</span></span>
<span class="line"><span>      //$(this).find(&#39;ul&#39;).css(&#39;display&#39;,&#39;none&#39;);</span></span>
<span class="line"><span>      //简写</span></span>
<span class="line"><span>      $(this).find(&#39;ul&#39;).stop(true,false).slideUp(150);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="案例-《360开关机动画》" tabindex="-1">案例-《360开关机动画》 <a class="header-anchor" href="#案例-《360开关机动画》" aria-label="Permalink to &quot;案例-《360开关机动画》&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>        .box {</span></span>
<span class="line"><span>            width: 322px;</span></span>
<span class="line"><span>            position: fixed;</span></span>
<span class="line"><span>            bottom: 0;</span></span>
<span class="line"><span>            right: 0;</span></span>
<span class="line"><span>            overflow: hidden;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        span {</span></span>
<span class="line"><span>            position: absolute;</span></span>
<span class="line"><span>            top: 0;</span></span>
<span class="line"><span>            right: 0;</span></span>
<span class="line"><span>            width: 30px;</span></span>
<span class="line"><span>            height: 20px;</span></span>
<span class="line"><span>            cursor: pointer;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div class=&quot;box&quot; id=&quot;box&quot;&gt;</span></span>
<span class="line"><span>    &lt;span id=&quot;closeButton&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;hd&quot; id=&quot;headPart&quot;&gt;</span></span>
<span class="line"><span>        &lt;img src=&quot;images/t.jpg&quot; alt=&quot;&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;bd&quot; id=&quot;bottomPart&quot;&gt;</span></span>
<span class="line"><span>        &lt;img src=&quot;images/b.jpg&quot; alt=&quot;&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;jquery-1.12.4.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  $(function () {</span></span>
<span class="line"><span>      //1.给关闭按钮一个点击事件.</span></span>
<span class="line"><span>      $(&#39;#closeButton&#39;).click(function () {</span></span>
<span class="line"><span>          //2.让下面那部分的高度动画变为0.</span></span>
<span class="line"><span>          $(&#39;#bottomPart&#39;).animate({</span></span>
<span class="line"><span>              height:0</span></span>
<span class="line"><span>          },500, function () {</span></span>
<span class="line"><span>              //3.让整个大盒子的宽度动画变为0</span></span>
<span class="line"><span>              $(&#39;#box&#39;).animate({</span></span>
<span class="line"><span>                  width:0</span></span>
<span class="line"><span>              },1000);</span></span>
<span class="line"><span>          });</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="案例-《淡入淡出》" tabindex="-1">案例-《淡入淡出》 <a class="header-anchor" href="#案例-《淡入淡出》" aria-label="Permalink to &quot;案例-《淡入淡出》&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>  &lt;title&gt;标题&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;style&gt;</span></span>
<span class="line"><span>    div {</span></span>
<span class="line"><span>      width: 200px;</span></span>
<span class="line"><span>      height: 200px;</span></span>
<span class="line"><span>      background-color: red;</span></span>
<span class="line"><span>      display: none;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;button&quot; value=&quot;淡入&quot; id=&quot;fadeIn&quot;/&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;button&quot; value=&quot;淡出&quot; id=&quot;fadeOut&quot;/&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;button&quot; value=&quot;切换&quot; id=&quot;fadeToggle&quot;/&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;button&quot; value=&quot;淡入到那里&quot; id=&quot;fadeTo&quot;/&gt;&lt;br/&gt;&lt;br/&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;div1&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;jquery-1.12.4.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  $(function () {</span></span>
<span class="line"><span>    //1.淡入 fadeIn</span></span>
<span class="line"><span>    $(&#39;#fadeIn&#39;).click(function () {</span></span>
<span class="line"><span>      //让id为div1的这个元素淡入.</span></span>
<span class="line"><span>      //$(&#39;#div1&#39;).fadeIn(); //不给参数相当于给了一个默认的动画时长,mormal400毫秒</span></span>
<span class="line"><span>      $(&#39;#div1&#39;).fadeIn(1000);</span></span>
<span class="line"><span>      // $(&#39;#div1&#39;).fadeIn(2000, function () {</span></span>
<span class="line"><span>      //   alert(&#39;淡入完成了...&#39;);</span></span>
<span class="line"><span>      // });</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //2.淡出 fadeOut</span></span>
<span class="line"><span>    $(&#39;#fadeOut&#39;).click(function () {</span></span>
<span class="line"><span>      //让id为div1的这个元素淡出</span></span>
<span class="line"><span>      $(&#39;#div1&#39;).fadeOut(1000);</span></span>
<span class="line"><span>      // $(&#39;#div1&#39;).fadeOut(1000, function () {</span></span>
<span class="line"><span>      //   alert(&#39;淡出完成了&#39;);</span></span>
<span class="line"><span>      // });</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //3.切换 fadeToggle</span></span>
<span class="line"><span>    $(&#39;#fadeToggle&#39;).click(function () {</span></span>
<span class="line"><span>      $(&#39;#div1&#39;).fadeToggle(1000);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //4.淡入到那里 fadeTo</span></span>
<span class="line"><span>    $(&#39;#fadeTo&#39;).click(function () {</span></span>
<span class="line"><span>      $(&#39;#div1&#39;).fadeTo(1000,0.5);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="案例-《表格删除》" tabindex="-1">案例-《表格删除》 <a class="header-anchor" href="#案例-《表格删除》" aria-label="Permalink to &quot;案例-《表格删除》&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;head lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>        * {</span></span>
<span class="line"><span>            padding: 0;</span></span>
<span class="line"><span>            margin: 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .wrap {</span></span>
<span class="line"><span>            width: 410px;</span></span>
<span class="line"><span>            margin: 100px auto 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        table {</span></span>
<span class="line"><span>            border-collapse: collapse;</span></span>
<span class="line"><span>            border-spacing: 0;</span></span>
<span class="line"><span>            border: 1px solid #c0c0c0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        th,</span></span>
<span class="line"><span>        td {</span></span>
<span class="line"><span>            border: 1px solid #d0d0d0;</span></span>
<span class="line"><span>            color: #404060;</span></span>
<span class="line"><span>            padding: 10px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        th {</span></span>
<span class="line"><span>            background-color: #09c;</span></span>
<span class="line"><span>            font: bold 16px &quot;Î¢ÈíÑÅºÚ&quot;;</span></span>
<span class="line"><span>            color: #fff;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        td {</span></span>
<span class="line"><span>            font: 14px &quot;Î¢ÈíÑÅºÚ&quot;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        td a.get {</span></span>
<span class="line"><span>            text-decoration: none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        a.del:hover {</span></span>
<span class="line"><span>            text-decoration: underline;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        tbody tr {</span></span>
<span class="line"><span>            background-color: #f0f0f0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        tbody tr:hover {</span></span>
<span class="line"><span>            cursor: pointer;</span></span>
<span class="line"><span>            background-color: #fafafa;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .btnAdd {</span></span>
<span class="line"><span>            width: 110px;</span></span>
<span class="line"><span>            height: 30px;</span></span>
<span class="line"><span>            font-size: 20px;</span></span>
<span class="line"><span>            font-weight: bold;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .form-item {</span></span>
<span class="line"><span>            height: 100%;</span></span>
<span class="line"><span>            position: relative;</span></span>
<span class="line"><span>            padding-left: 100px;</span></span>
<span class="line"><span>            padding-right: 20px;</span></span>
<span class="line"><span>            margin-bottom: 34px;</span></span>
<span class="line"><span>            line-height: 36px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .form-item &gt; .lb {</span></span>
<span class="line"><span>            position: absolute;</span></span>
<span class="line"><span>            left: 0;</span></span>
<span class="line"><span>            top: 0;</span></span>
<span class="line"><span>            display: block;</span></span>
<span class="line"><span>            width: 100px;</span></span>
<span class="line"><span>            text-align: right;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .form-item &gt; .txt {</span></span>
<span class="line"><span>            width: 300px;</span></span>
<span class="line"><span>            height: 32px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .mask {</span></span>
<span class="line"><span>            position: absolute;</span></span>
<span class="line"><span>            top: 0px;</span></span>
<span class="line"><span>            left: 0px;</span></span>
<span class="line"><span>            width: 100%;</span></span>
<span class="line"><span>            height: 100%;</span></span>
<span class="line"><span>            background: #000;</span></span>
<span class="line"><span>            opacity: 0.15;</span></span>
<span class="line"><span>            display: none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .form-add {</span></span>
<span class="line"><span>            position: fixed;</span></span>
<span class="line"><span>            top: 30%;</span></span>
<span class="line"><span>            left: 50%;</span></span>
<span class="line"><span>            margin-left: -197px;</span></span>
<span class="line"><span>            padding-bottom: 20px;</span></span>
<span class="line"><span>            background: #fff;</span></span>
<span class="line"><span>            display: none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .form-add-title {</span></span>
<span class="line"><span>            background-color: #f7f7f7;</span></span>
<span class="line"><span>            border-width: 1px 1px 0 1px;</span></span>
<span class="line"><span>            border-bottom: 0;</span></span>
<span class="line"><span>            margin-bottom: 15px;</span></span>
<span class="line"><span>            position: relative;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .form-add-title span {</span></span>
<span class="line"><span>            width: auto;</span></span>
<span class="line"><span>            height: 18px;</span></span>
<span class="line"><span>            font-size: 16px;</span></span>
<span class="line"><span>            font-family: ËÎÌå;</span></span>
<span class="line"><span>            font-weight: bold;</span></span>
<span class="line"><span>            color: rgb(102, 102, 102);</span></span>
<span class="line"><span>            text-indent: 12px;</span></span>
<span class="line"><span>            padding: 8px 0px 10px;</span></span>
<span class="line"><span>            margin-right: 10px;</span></span>
<span class="line"><span>            display: block;</span></span>
<span class="line"><span>            overflow: hidden;</span></span>
<span class="line"><span>            text-align: left;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .form-add-title div {</span></span>
<span class="line"><span>            width: 16px;</span></span>
<span class="line"><span>            height: 20px;</span></span>
<span class="line"><span>            position: absolute;</span></span>
<span class="line"><span>            right: 10px;</span></span>
<span class="line"><span>            top: 6px;</span></span>
<span class="line"><span>            font-size: 30px;</span></span>
<span class="line"><span>            line-height: 16px;</span></span>
<span class="line"><span>            cursor: pointer;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .form-submit {</span></span>
<span class="line"><span>            text-align: center;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .form-submit input {</span></span>
<span class="line"><span>            width: 170px;</span></span>
<span class="line"><span>            height: 32px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;wrap&quot;&gt;</span></span>
<span class="line"><span>    &lt;input type=&quot;button&quot; value=&quot;清空内容&quot; id=&quot;btn&quot;&gt;</span></span>
<span class="line"><span>    &lt;table&gt;</span></span>
<span class="line"><span>        &lt;thead&gt;</span></span>
<span class="line"><span>        &lt;tr&gt;</span></span>
<span class="line"><span>            &lt;th&gt;课程名称&lt;/th&gt;</span></span>
<span class="line"><span>            &lt;th&gt;所属学院&lt;/th&gt;</span></span>
<span class="line"><span>            &lt;th&gt;操作&lt;/th&gt;</span></span>
<span class="line"><span>        &lt;/tr&gt;</span></span>
<span class="line"><span>        &lt;/thead&gt;</span></span>
<span class="line"><span>        &lt;tbody id=&quot;j_tb&quot;&gt;</span></span>
<span class="line"><span>        &lt;tr&gt;</span></span>
<span class="line"><span>            &lt;!-- &lt;td&gt;&lt;input type=&quot;checkbox&quot;/&gt;&lt;/td&gt; --&gt;</span></span>
<span class="line"><span>            &lt;td&gt;JavaScript&lt;/td&gt;</span></span>
<span class="line"><span>            &lt;td&gt;传智播客-前端与移动开发学院&lt;/td&gt;</span></span>
<span class="line"><span>            &lt;td&gt;&lt;a href=&quot;javascrip:;&quot; class=&quot;get&quot;&gt;DELETE&lt;/a&gt;&lt;/td&gt;</span></span>
<span class="line"><span>        &lt;/tr&gt;</span></span>
<span class="line"><span>        &lt;tr&gt;</span></span>
<span class="line"><span>            &lt;!-- &lt;td&gt;&lt;input type=&quot;checkbox&quot;/&gt;&lt;/td&gt; --&gt;</span></span>
<span class="line"><span>            &lt;td&gt;css&lt;/td&gt;</span></span>
<span class="line"><span>            &lt;td&gt;传智播客-前端与移动开发学院&lt;/td&gt;</span></span>
<span class="line"><span>            &lt;td&gt;&lt;a href=&quot;javascrip:;&quot; class=&quot;get&quot;&gt;DELETE&lt;/a&gt;&lt;/td&gt;</span></span>
<span class="line"><span>        &lt;/tr&gt;</span></span>
<span class="line"><span>        &lt;tr&gt;</span></span>
<span class="line"><span>            &lt;!-- &lt;td&gt;&lt;input type=&quot;checkbox&quot;/&gt;&lt;/td&gt; --&gt;</span></span>
<span class="line"><span>            &lt;td&gt;html&lt;/td&gt;</span></span>
<span class="line"><span>            &lt;td&gt;传智播客-前端与移动开发学院&lt;/td&gt;</span></span>
<span class="line"><span>            &lt;td&gt;&lt;a href=&quot;javascrip:;&quot; class=&quot;get&quot;&gt;DELETE&lt;/a&gt;&lt;/td&gt;</span></span>
<span class="line"><span>        &lt;/tr&gt;</span></span>
<span class="line"><span>        &lt;tr&gt;</span></span>
<span class="line"><span>            &lt;!-- &lt;td&gt;&lt;input type=&quot;checkbox&quot;/&gt;&lt;/td&gt; --&gt;</span></span>
<span class="line"><span>            &lt;td&gt;jQuery&lt;/td&gt;</span></span>
<span class="line"><span>            &lt;td&gt;传智播客-前端与移动开发学院&lt;/td&gt;</span></span>
<span class="line"><span>            &lt;td&gt;&lt;a href=&quot;javascrip:;&quot; class=&quot;get&quot;&gt;DELETE&lt;/a&gt;&lt;/td&gt;</span></span>
<span class="line"><span>        &lt;/tr&gt;</span></span>
<span class="line"><span>        &lt;/tbody&gt;</span></span>
<span class="line"><span>    &lt;/table&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;jquery-1.12.4.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    $(function () {</span></span>
<span class="line"><span>        //1.清空内容</span></span>
<span class="line"><span>        $(&#39;#btn&#39;).click(function () {</span></span>
<span class="line"><span>            //找到tbody,清空他的内容.</span></span>
<span class="line"><span>            $(&#39;#j_tb&#39;).empty();</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //2.删除对应的行.</span></span>
<span class="line"><span>        $(&#39;#j_tb .get&#39;).click(function () {</span></span>
<span class="line"><span>            //点击a标签,删除a标签对应的那一行.</span></span>
<span class="line"><span>            $(this).parent().parent().remove();</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="案例-《美女相册》" tabindex="-1">案例-《美女相册》 <a class="header-anchor" href="#案例-《美女相册》" aria-label="Permalink to &quot;案例-《美女相册》&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>        body {</span></span>
<span class="line"><span>            font-family: &quot;Helvetica&quot;,&quot;Arial&quot;,serif;</span></span>
<span class="line"><span>            color: #333;</span></span>
<span class="line"><span>            background-color: #ccc;</span></span>
<span class="line"><span>            margin: 1em 10%;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        h1 {</span></span>
<span class="line"><span>            color: #333;</span></span>
<span class="line"><span>            background-color: transparent;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        a {</span></span>
<span class="line"><span>            color: #c60;</span></span>
<span class="line"><span>            background-color: transparent;</span></span>
<span class="line"><span>            font-weight: bold;</span></span>
<span class="line"><span>            text-decoration: none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        ul {</span></span>
<span class="line"><span>            padding: 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        li {</span></span>
<span class="line"><span>            float: left;</span></span>
<span class="line"><span>            padding: 1em;</span></span>
<span class="line"><span>            list-style: none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        #imagegallery {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            list-style: none;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #imagegallery li {</span></span>
<span class="line"><span>            margin: 0px 20px 20px 0px;</span></span>
<span class="line"><span>            padding: 0px;</span></span>
<span class="line"><span>            display: inline;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #imagegallery li a img {</span></span>
<span class="line"><span>            border: 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;h2&gt;</span></span>
<span class="line"><span>    美女画廊</span></span>
<span class="line"><span>&lt;/h2&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;ul id=&quot;imagegallery&quot;&gt;</span></span>
<span class="line"><span>    &lt;li&gt;&lt;a href=&quot;images/meinv/1.jpg&quot; title=&quot;美女A&quot;&gt;</span></span>
<span class="line"><span>        &lt;img src=&quot;images/meinv/1-small.jpg&quot; width=&quot;100&quot; alt=&quot;美女1&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;&lt;a href=&quot;images/meinv/2.jpg&quot; title=&quot;美女B&quot;&gt;</span></span>
<span class="line"><span>        &lt;img src=&quot;images/meinv/2-small.jpg&quot; width=&quot;100&quot; alt=&quot;美女2&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;&lt;a href=&quot;images/meinv/3.jpg&quot; title=&quot;美女C&quot;&gt;</span></span>
<span class="line"><span>        &lt;img src=&quot;images/meinv/3-small.jpg&quot; width=&quot;100&quot; alt=&quot;美女3&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;&lt;a href=&quot;images/meinv/4.jpg&quot; title=&quot;美女D&quot;&gt;</span></span>
<span class="line"><span>        &lt;img src=&quot;images/meinv/4-small.jpg&quot; width=&quot;100&quot; alt=&quot;美女4&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span>
<span class="line"><span>&lt;div style=&quot;clear:both&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;img id=&quot;image&quot; src=&quot;images/meinv/placeholder.png&quot; alt=&quot;&quot; width=&quot;450px&quot; /&gt;</span></span>
<span class="line"><span>&lt;p id=&quot;des&quot;&gt;选择一个图片&lt;/p&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;jquery-1.12.4.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  $(function () {</span></span>
<span class="line"><span>      //1.需求</span></span>
<span class="line"><span>      //给小图片a标签设置一个单击事件.</span></span>
<span class="line"><span>      //让id为image的img标签修改src属性为当前点击的a标签的href属性的值</span></span>
<span class="line"><span>      //让id为des的这个p标签的文本设置为当前点击的这个a标签的title属性的值.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      $(&#39;#imagegallery&gt;li&gt;a&#39;).click(function () {</span></span>
<span class="line"><span>          //获取当前点击的a标签的href属性的值和title属性的值。</span></span>
<span class="line"><span>          var srcValue = $(this).attr(&#39;href&#39;);</span></span>
<span class="line"><span>          var contentValue = $(this).attr(&#39;title&#39;);</span></span>
<span class="line"><span>          //给img标签的src属性赋值，以及给p标签的内容赋值。</span></span>
<span class="line"><span>          $(&#39;#image&#39;).attr(&#39;src&#39;,srcValue);</span></span>
<span class="line"><span>          $(&#39;#des&#39;).text(contentValue);</span></span>
<span class="line"><span>          //阻止a标签的跳转</span></span>
<span class="line"><span>          return false;</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h2 id="案例-《表格全选》" tabindex="-1">案例-《表格全选》 <a class="header-anchor" href="#案例-《表格全选》" aria-label="Permalink to &quot;案例-《表格全选》&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;head lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>        * {</span></span>
<span class="line"><span>            padding: 0;</span></span>
<span class="line"><span>            margin: 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .wrap {</span></span>
<span class="line"><span>            width: 300px;</span></span>
<span class="line"><span>            margin: 100px auto 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        table {</span></span>
<span class="line"><span>            border-collapse: collapse;</span></span>
<span class="line"><span>            border-spacing: 0;</span></span>
<span class="line"><span>            border: 1px solid #c0c0c0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        th,</span></span>
<span class="line"><span>        td {</span></span>
<span class="line"><span>            border: 1px solid #d0d0d0;</span></span>
<span class="line"><span>            color: #404060;</span></span>
<span class="line"><span>            padding: 10px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        th {</span></span>
<span class="line"><span>            background-color: #09c;</span></span>
<span class="line"><span>            font: bold 16px &quot;微软雅黑&quot;;</span></span>
<span class="line"><span>            color: #fff;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        td {</span></span>
<span class="line"><span>            font: 14px &quot;微软雅黑&quot;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        tbody tr {</span></span>
<span class="line"><span>            background-color: #f0f0f0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        tbody tr:hover {</span></span>
<span class="line"><span>            cursor: pointer;</span></span>
<span class="line"><span>            background-color: #fafafa;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;wrap&quot;&gt;</span></span>
<span class="line"><span>    &lt;table&gt;</span></span>
<span class="line"><span>        &lt;thead&gt;</span></span>
<span class="line"><span>            &lt;tr&gt;</span></span>
<span class="line"><span>                &lt;th&gt;</span></span>
<span class="line"><span>                    &lt;input type=&quot;checkbox&quot; id=&quot;j_cbAll&quot;/&gt;</span></span>
<span class="line"><span>                &lt;/th&gt;</span></span>
<span class="line"><span>                &lt;th&gt;课程名称&lt;/th&gt;</span></span>
<span class="line"><span>                &lt;th&gt;所属学院&lt;/th&gt;</span></span>
<span class="line"><span>            &lt;/tr&gt;</span></span>
<span class="line"><span>        &lt;/thead&gt;</span></span>
<span class="line"><span>        &lt;tbody id=&quot;j_tb&quot;&gt;</span></span>
<span class="line"><span>            &lt;tr&gt;</span></span>
<span class="line"><span>                &lt;td&gt;</span></span>
<span class="line"><span>                    &lt;input type=&quot;checkbox&quot;/&gt;</span></span>
<span class="line"><span>                &lt;/td&gt;</span></span>
<span class="line"><span>                &lt;td&gt;JavaScript&lt;/td&gt;</span></span>
<span class="line"><span>                &lt;td&gt;前端与移动开发学院&lt;/td&gt;</span></span>
<span class="line"><span>            &lt;/tr&gt;</span></span>
<span class="line"><span>            &lt;tr&gt;</span></span>
<span class="line"><span>                &lt;td&gt;</span></span>
<span class="line"><span>                    &lt;input type=&quot;checkbox&quot;/&gt;</span></span>
<span class="line"><span>                &lt;/td&gt;</span></span>
<span class="line"><span>                &lt;td&gt;css&lt;/td&gt;</span></span>
<span class="line"><span>                &lt;td&gt;前端与移动开发学院&lt;/td&gt;</span></span>
<span class="line"><span>            &lt;/tr&gt;</span></span>
<span class="line"><span>            &lt;tr&gt;</span></span>
<span class="line"><span>                &lt;td&gt;</span></span>
<span class="line"><span>                    &lt;input type=&quot;checkbox&quot;/&gt;</span></span>
<span class="line"><span>                &lt;/td&gt;</span></span>
<span class="line"><span>                &lt;td&gt;html&lt;/td&gt;</span></span>
<span class="line"><span>                &lt;td&gt;前端与移动开发学院&lt;/td&gt;</span></span>
<span class="line"><span>            &lt;/tr&gt;</span></span>
<span class="line"><span>            &lt;tr&gt;</span></span>
<span class="line"><span>                &lt;td&gt;</span></span>
<span class="line"><span>                    &lt;input type=&quot;checkbox&quot;/&gt;</span></span>
<span class="line"><span>                &lt;/td&gt;</span></span>
<span class="line"><span>                &lt;td&gt;jQuery&lt;/td&gt;</span></span>
<span class="line"><span>                &lt;td&gt;前端与移动开发学院&lt;/td&gt;</span></span>
<span class="line"><span>            &lt;/tr&gt;</span></span>
<span class="line"><span>        &lt;/tbody&gt;</span></span>
<span class="line"><span>    &lt;/table&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div id=&quot;one&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;jquery-1.12.4.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  $(function () {</span></span>
<span class="line"><span>      //需求1:上面的多选框选中,下面的多选框们跟着选中,上面的多选框没有选中,下面的多选框们跟着不选中.</span></span>
<span class="line"><span>      //需求2:下面的多选框们,都有单击事件:</span></span>
<span class="line"><span>      //如果下面的多选框们都选中了,那么上面的那个多选框跟着选中,如果下面多选框有一个没有选中,那么上面的多选框就不选中.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      //需求1：</span></span>
<span class="line"><span>      $(&#39;#j_cbAll&#39;).click(function () {</span></span>
<span class="line"><span>          //获取这多选框的checked值。</span></span>
<span class="line"><span>          var checkedValue = $(this).prop(&#39;checked&#39;);</span></span>
<span class="line"><span>          //console.log(checkedValue);</span></span>
<span class="line"><span>          //让下面的多选框们的checked跟随这个checkedValue</span></span>
<span class="line"><span>          $(&#39;#j_tb input&#39;).prop(&#39;checked&#39;,checkedValue);</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      //需求2：</span></span>
<span class="line"><span>      $(&#39;#j_tb input&#39;).click(function () {</span></span>
<span class="line"><span>          //判断下面的那四个多选框是否都被选中了。</span></span>
<span class="line"><span>          var numOfAll = $(&#39;#j_tb input&#39;).length; //获取到下面所有多选框的个数。</span></span>
<span class="line"><span>          var numOfSelect = $(&#39;#j_tb input:checked&#39;).length; //获取到下面被选中的多选框的个数。</span></span>
<span class="line"><span>          console.log(numOfAll + &quot;:&quot; + numOfSelect);</span></span>
<span class="line"><span>          //判断</span></span>
<span class="line"><span>          // if(numOfAll == numOfSelect){</span></span>
<span class="line"><span>          //     //全部被选中。</span></span>
<span class="line"><span>          //     $(&#39;#j_cbAll&#39;).prop(&#39;checked&#39;,true);</span></span>
<span class="line"><span>          // }else {</span></span>
<span class="line"><span>          //     //有的有没选中。</span></span>
<span class="line"><span>          //     $(&#39;#j_cbAll&#39;).prop(&#39;checked&#39;,false);</span></span>
<span class="line"><span>          // }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          //上面这个判断其实可以优化。</span></span>
<span class="line"><span>          $(&#39;#j_cbAll&#39;).prop(&#39;checked&#39;,numOfAll == numOfSelect);</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div>`,199),e=[t];function i(c,o,g,u,r,d){return a(),n("div",null,e)}const b=s(l,[["render",i]]);export{q as __pageData,b as default};
