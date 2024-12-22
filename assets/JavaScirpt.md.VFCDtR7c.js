import{_ as s,c as n,o as a,a2 as e}from"./chunks/framework.CSGcjqEA.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScirpt.md","filePath":"JavaScirpt.md"}'),p={name:"JavaScirpt.md"},l=e(`<h2 id="初识javascirpt" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>初识JavaScirpt <a class="header-anchor" href="#初识javascirpt" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)初识JavaScirpt&quot;">​</a></h2><ul><li>JavaScript 是世界上最流行的语言之一，是一种运行在客户端的脚本语言 （Script 是脚本的意思）</li><li>脚本语言：不需要编译，运行过程中由 js 解释器( js 引擎）逐行来进行解释并执行</li><li>现在也可以基于 Node.js 技术进行服务器端编程</li></ul><p><img src="https://img-blog.csdnimg.cn/575f5e51a4f644b7b315887d2f07c97d.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><h3 id="浏览器执行js简介" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>浏览器执行JS简介 <a class="header-anchor" href="#浏览器执行js简介" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)浏览器执行JS简介&quot;">​</a></h3><p>浏览器分成两部分：渲染引擎和 JS 引擎</p><ul><li>渲染引擎：用来解析HTML与CSS，俗称内核，比如 chrome 浏览器的 blink ，老版本的 webkit</li><li>JS 引擎：也称为 JS 解释器。 用来读取网页中的JavaScript代码，对其处理后运行，比如 chrome 浏览器的 V8</li></ul><p>浏览器本身并不会执行JS代码，而是通过内置 JavaScript 引擎(解释器) 来执行 JS 代码 。JS 引擎执行代码时逐行解释每一句源码（转换为机器语言），然后由计算机去执行，所以 JavaScript 语言归为脚本语言，会逐行解释执行。</p><p><img src="https://img-blog.csdnimg.cn/6626246651a048ab94cff1c8afe62fc2.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><h3 id="js的组成" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>JS的组成 <a class="header-anchor" href="#js的组成" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)JS的组成&quot;">​</a></h3><p>JavaScript 包括 ECMAScript、DOM、BOM</p><p><img src="https://img-blog.csdnimg.cn/a9331f588aa54d43b22ae207249f0e1f.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><h4 id="ecmascript" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>ECMAScript <a class="header-anchor" href="#ecmascript" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)ECMAScript&quot;">​</a></h4><p><strong>ECMAScript</strong> 是由ECMA 国际（ 原欧洲计算机制造商协会）进行标准化的一门编程语言，这种语言在万维网上应用广泛，它往往被称为 JavaScript 或 JScript，但实际上后两者是 ECMAScript 语言的实现和扩展。</p><p><img src="https://img-blog.csdnimg.cn/931cd1c9d4fd44e9b547284a635daa26.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><p>ECMAScript：ECMAScript 规定了JS的编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套JS语法工业标准。</p><h4 id="dom文档对象模型" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>DOM文档对象模型 <a class="header-anchor" href="#dom文档对象模型" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)DOM文档对象模型&quot;">​</a></h4><p><strong>文档对象模型</strong>（Document Object Model，简称DOM），是W3C组织推荐的处理可扩展标记语言的标准编程接口。通过 DOM 提供的接口可以对页面上的各种元素进行操作（大小、位置、颜色等）。</p><h4 id="bom浏览器对象模型" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>BOM浏览器对象模型 <a class="header-anchor" href="#bom浏览器对象模型" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)BOM浏览器对象模型&quot;">​</a></h4><p><strong>BOM</strong> (Browser Object Model，简称BOM) 是指浏览器对象模型，它提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。通过BOM可以操作浏览器窗口，比如弹出框、控制浏览器跳转、获取分辨率等。</p><h2 id="js初体验" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>JS初体验 <a class="header-anchor" href="#js初体验" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)JS初体验&quot;">​</a></h2><h3 id="_1-行内式js" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>1.行内式JS <a class="header-anchor" href="#_1-行内式js" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)1.行内式JS&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;input type=&quot;button&quot; value=&quot;点我试试&quot; onclink=&quot;javascript:alert(&#39;Hello World&#39;)&quot; /&gt;</span></span></code></pre></div><ol><li>可以将单行或少量JS代码写在HTML标签的事件属性中(以on开头的属性)，如： onclink</li><li>注意单双引号的使用：在HTML中我们推荐使用<strong>双引号</strong>，JS中我们推荐使用<strong>单引号</strong></li><li>可读性差，在 HTML 中编入 JS 大量代码时，不方便阅读</li><li>特殊情况下使用</li></ol><h3 id="_1-2、内嵌式js" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>1.2、内嵌式JS <a class="header-anchor" href="#_1-2、内嵌式js" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)1.2、内嵌式JS&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>     alert(&#39;Hello World!&#39;);</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><ul><li>可以将多行JS代码写到<code>&lt;script&gt;</code>标签中</li><li>内嵌 JS 是学习时常用的方式</li></ul><h3 id="_1-3、外部js" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>1.3、外部JS <a class="header-anchor" href="#_1-3、外部js" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)1.3、外部JS&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script src=&quot;my.js&quot;&gt;&lt;/script&gt;</span></span></code></pre></div><ol><li><p>利于HTML页面代码结构化，把单独JS代码独立到HTML页面之外，既美观，又方便</p></li><li><p>引用外部JS文件的script标签中间不可以写代码</p></li><li><p>适合于JS代码量比较大的情况</p></li></ol><h2 id="js基本语法" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>JS基本语法 <a class="header-anchor" href="#js基本语法" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)JS基本语法&quot;">​</a></h2><h3 id="_2-1、注释" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.1、注释 <a class="header-anchor" href="#_2-1、注释" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.1、注释&quot;">​</a></h3><h4 id="_2-1-1、单行注释" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.1.1、单行注释 <a class="header-anchor" href="#_2-1-1、单行注释" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.1.1、单行注释&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//  单行注释</span></span></code></pre></div><ul><li>快捷键<code>ctrl + /</code></li></ul><h4 id="_2-1-2、多行注释" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.1.2、多行注释 <a class="header-anchor" href="#_2-1-2、多行注释" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.1.2、多行注释&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>	多行注释</span></span>
<span class="line"><span>*/</span></span></code></pre></div><ul><li>快捷键 <code>shift + alt + a</code></li><li>vscode中修改快捷键方式：vscode➡ 首选项按钮➡ 键盘快捷方式 ➡ 查找原来的快捷键➡ 修改为新的快捷键➡ 回车确认</li></ul><h3 id="_2-2、输入输出语句" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.2、输入输出语句 <a class="header-anchor" href="#_2-2、输入输出语句" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.2、输入输出语句&quot;">​</a></h3><table><thead><tr><th>方法</th><th>说明</th><th>归属</th></tr></thead><tbody><tr><td>alert(msg);</td><td>浏览器弹出警示框</td><td>浏览器</td></tr><tr><td>console.log(msg);</td><td>浏览器控制台打印输出信息</td><td>浏览器</td></tr><tr><td>prompt(info);</td><td>浏览看弹出输入框，用户可以输入</td><td>浏览器</td></tr></tbody></table><ul><li><code>alert()</code> 主要用来显示消息给用户</li><li><code>console.log()</code> 用来给程序员看自己运行时的消息</li></ul><h3 id="_2-3、变量" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.3、变量 <a class="header-anchor" href="#_2-3、变量" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.3、变量&quot;">​</a></h3><ul><li><p>变量是用于存放数据的<strong>容器</strong>，我们通过<strong>变量名</strong>获取数据，甚至数据可以修改</p></li><li><p><strong>本质：<strong>变量是程序在</strong>内存</strong>中申请的一块用来存放数据的空间</p></li></ul><h4 id="_2-3-1、变量初始化" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.3.1、变量初始化 <a class="header-anchor" href="#_2-3-1、变量初始化" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.3.1、变量初始化&quot;">​</a></h4><ol><li><p>var是一个JS关键字，用来声明变量(variable变量的意思)。使用该关键字声明变量后，计算机会自动为变量分配内存空间。</p></li><li><p>age 是程序员定义的变量名，我们要通过变量名来访问内存中分配的空间</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//声明变量同时赋值为18</span></span>
<span class="line"><span>var age = 18; </span></span>
<span class="line"><span>//同时声明多个变量时，只需要写一个 var， 多个变量名之间使用英文逗号隔开。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var age = 18, address =&#39;火影村&#39;,salary = 15000;</span></span></code></pre></div><h4 id="_2-3-2、声明变量特殊情况" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.3.2、声明变量特殊情况 <a class="header-anchor" href="#_2-3-2、声明变量特殊情况" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.3.2、声明变量特殊情况&quot;">​</a></h4><table><thead><tr><th>情况</th><th>说明</th><th>结果</th></tr></thead><tbody><tr><td>var age; console.log(age);</td><td>只声明，不赋值</td><td>undefined</td></tr><tr><td>console.log(age)</td><td>不声明 不赋值 直接使用</td><td>报错</td></tr><tr><td>age = 10;console.log(age);</td><td>不声明 只赋值</td><td>10</td></tr></tbody></table><h4 id="_2-3-3、变量的命名规范" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.3.3、变量的命名规范 <a class="header-anchor" href="#_2-3-3、变量的命名规范" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.3.3、变量的命名规范&quot;">​</a></h4><ol><li><p>由字母(A-Z,a-z)，数字(0-9)，下划线(_)，美元符号($)组成，如:usrAge,num01,__name</p></li><li><p>严格区分大小写。 <code>var app;</code> 和 <code>var App;</code> 是两个变量</p></li><li><p>不能以数字开头。</p></li><li><p>不能是关键字，保留字。例如：<code>var,for,while</code></p></li><li><p>遵循驼峰命名法。首字母小写，后面单词的首字母需要大写。<code>myFirstName</code></p></li><li><p>推荐翻译网站：有道 爱词霸</p></li></ol><h3 id="_2-4、数据类型" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.4、数据类型 <a class="header-anchor" href="#_2-4、数据类型" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.4、数据类型&quot;">​</a></h3><p><strong>JavaScript</strong> **是一种弱类型或者说动态语言。**这意味着不用提前声明变量的类型，在程序运行过程中，类型会被自动确定。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var age = 10; 			 //这是一个数字型</span></span>
<span class="line"><span>var areYouOk = &#39;使得&#39;;	//这是一个字符串</span></span></code></pre></div><ul><li><p>在代码运行时，变量的数据类型是由 JS引擎 根据 = 右边变量值的数据类型来判断 的，运行完毕之后， 变量就确定了数据类型。</p></li><li><p>JavaScript 拥有动态类型，同时也意味着相同的变量可用作不同的类型</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var x = 6;		//x为数字</span></span>
<span class="line"><span>var x = &quot;Bill&quot;;	//x为字符串</span></span></code></pre></div><p>JS 把数据类型分为两类：</p><ul><li>基本数据类型(Number,String,Boolean,Undefined,Null)</li><li>复杂数据类型(Object)</li></ul><h4 id="_2-4-1、基本数据类型" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.4.1、基本数据类型 <a class="header-anchor" href="#_2-4-1、基本数据类型" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.4.1、基本数据类型&quot;">​</a></h4><table><thead><tr><th>简单数据类型</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>Number</td><td>数字型，包含整型值和浮点型值，如21，0.21</td><td>0</td></tr><tr><td>Boolean</td><td>布尔值类型，如true，false ，等价于1和0</td><td>false</td></tr><tr><td>Undefined</td><td>var a; 声明了变量a但是没有赋值，此时a=undefined</td><td>undefined（未定义的）</td></tr><tr><td>string</td><td>字符串类型，如“张三”</td><td>“”</td></tr><tr><td>Null</td><td>var a = null;声明了变量a为空值</td><td>null</td></tr></tbody></table><h4 id="_2-4-2、数字型number" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.4.2、数字型Number <a class="header-anchor" href="#_2-4-2、数字型number" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.4.2、数字型Number&quot;">​</a></h4><p>JavaScript 数字类型既可以用来保存整数值，也可以保存小数(浮点数）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var age = 12;		//整数</span></span>
<span class="line"><span>var Age = 21.3747;	//小数</span></span></code></pre></div><h4 id="_2-4-2、数字型进制" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.4.2、数字型进制 <a class="header-anchor" href="#_2-4-2、数字型进制" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.4.2、数字型进制&quot;">​</a></h4><p>最常见的进制有二进制、八进制、十进制、十六进制。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 1.八进制数字序列范围：0~7</span></span>
<span class="line"><span>var num1 = 07; 		//对应十进制的7</span></span>
<span class="line"><span>var Num2 = 019;		//对应十进制的19</span></span>
<span class="line"><span>var num3 = 08;		//对应十进制的8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2.十六进制数字序列范围：0~9以及A~F</span></span>
<span class="line"><span>var num = 0xA;</span></span></code></pre></div><ul><li><strong>在JS中八进制前面加0，十六进制前面加 0x</strong></li></ul><h5 id="_1数字型范围" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>①数字型范围 <a class="header-anchor" href="#_1数字型范围" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)①数字型范围&quot;">​</a></h5><ul><li>JS中数值的最大值：<code>Number.MAX_VALUE</code></li><li>JS中数值的最小值：<code>Number.MIN_VALUE</code></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>consol.log(Number.MAX_VALUE);</span></span>
<span class="line"><span>consol.log(Number.MIN_VALUE);</span></span></code></pre></div><h5 id="_2数字型的三个特殊值" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>②数字型的三个特殊值 <a class="header-anchor" href="#_2数字型的三个特殊值" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)②数字型的三个特殊值&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>alert(Infinity); 	//Infinity(无穷大)</span></span>
<span class="line"><span>alert(-Infinity); 	//-Infinity(无穷小)</span></span>
<span class="line"><span>alert(NaN);       	//NaN - Not a Number ,代表任何一个非数值</span></span></code></pre></div><ul><li>Infinity ，代表无穷大，大于任何数值</li><li>-Infinity ，代表无穷小，小于任何数值</li><li>Nan ，Not a Number，代表一个非数值</li></ul><h5 id="_3isnan" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>③isNaN <a class="header-anchor" href="#_3isnan" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)③isNaN&quot;">​</a></h5><p>这个方法用来判断非数字，并且返回一个值，如果是数字返回的是false，如果不是数字返回的是true</p><p><img src="https://img-blog.csdnimg.cn/54b996bc0fb74c7fa6b23b55e891bcde.png#pic_center" alt="在这里插入图片描述"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var userAge = 21;</span></span>
<span class="line"><span>var isOk = isNan(userAge);</span></span>
<span class="line"><span>console.log(isOk);		//false,21不是一个非数字</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var userName = &quot;andy&quot;;</span></span>
<span class="line"><span>console.log(isNan(userName));	//true,&quot;andy&quot;是一个非数字</span></span></code></pre></div><h4 id="_2-4-3、字符串型string" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.4.3、字符串型String <a class="header-anchor" href="#_2-4-3、字符串型string" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.4.3、字符串型String&quot;">​</a></h4><p>字符串型可以是引号中的任意文本，其语法为 “<strong>双引号</strong>” 和 &quot;<strong>单引号</strong>’’</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var strMsg = &quot;我爱北京天安门~&quot;;		//使用双引号表示字符串</span></span>
<span class="line"><span>var strMsg = &#39;我爱北京&#39;;			  //使用单引号表示字符串</span></span></code></pre></div><p>因为 HTML 标签里面的属性使用的是双引号，JS 这里我们更推荐<strong>使用单引号</strong>。</p><h5 id="_1字符串引号嵌套" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>①字符串引号嵌套 <a class="header-anchor" href="#_1字符串引号嵌套" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)①字符串引号嵌套&quot;">​</a></h5><p>JS可以用 <strong>单引号嵌套双引号</strong>，或者用 <strong>双引号嵌套单引号</strong>（<strong>外双内单，外单内双</strong>）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var strMsg =&#39;我是一个“高富帅”&#39; //可以用 &#39; &#39; 包含 &quot; &quot;</span></span>
<span class="line"><span>var strMsg2 =&quot;我是&#39;高富帅&#39;&quot; //可以用&quot; &quot;  包含  &#39;&#39;</span></span></code></pre></div><h5 id="_2字符串转义符" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>②字符串转义符 <a class="header-anchor" href="#_2字符串转义符" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)②字符串转义符&quot;">​</a></h5><p>类似HTML里面的特殊字符，字符串中也有特殊字符，我们称之为转义符。</p><p>转义符都是 \\ 开头的，常用的转义符及其说明如下：</p><table><thead><tr><th>转义符</th><th>解释说明</th></tr></thead><tbody><tr><td>\\n</td><td>换行符，n是newline</td></tr><tr><td>\\ \\</td><td>斜杠\\</td></tr><tr><td>\\ ’</td><td>’ 单引号</td></tr><tr><td>\\ ‘’</td><td>‘’ 双引号</td></tr><tr><td>\\ t</td><td>tab 缩进</td></tr><tr><td>\\ b</td><td>空格，b是blank的意思</td></tr></tbody></table><h5 id="_3字符串长度" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>③字符串长度 <a class="header-anchor" href="#_3字符串长度" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)③字符串长度&quot;">​</a></h5><p>字符串是由若干字符组成的，这些字符的数量就是字符串的长度。通过字符串的 length 属性可以获取整个字符串的长度。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//通过字符串的length属性可以获取整个字符串的长度</span></span>
<span class="line"><span>var strMsg = &quot;我是高富帅！&quot;;</span></span>
<span class="line"><span>alert(strMsg.length);     //显示6</span></span></code></pre></div><h5 id="_4字符串的拼接" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>④字符串的拼接 <a class="header-anchor" href="#_4字符串的拼接" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)④字符串的拼接&quot;">​</a></h5><ul><li>多个字符串之间可以使用 + 进行拼接，其拼接方式为 <strong>字符串 + 任何类型 = 拼接之后的新字符串</strong></li><li>拼接前会把与字符串相加的任何类型转成字符串，再拼接成一个新的字符串</li></ul><p><strong>注意</strong>：字符串 + 任何类型 =拼接之后的新字符串</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//1 字符串相加</span></span>
<span class="line"><span>alert(&#39;hello&#39; + &#39; &#39; + &#39;World&#39;);  //hello World</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//2 数值字符串相加</span></span>
<span class="line"><span>alert(&#39;100&#39; + &#39;100&#39;); //100100</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//3 数值字符串+数值</span></span>
<span class="line"><span>alert(&#39;12&#39;+12); //1212</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//4 数值+数值</span></span>
<span class="line"><span>alert(12+12); //24</span></span></code></pre></div><ul><li><code>+</code> 号总结口诀：🌏数值相加，字符相连🌏</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var  age = 18;</span></span>
<span class="line"><span>console.log(&#39;我今年&#39;+age+&#39;岁&#39;);</span></span>
<span class="line"><span>console.log(&#39;我今年&#39;+age+&#39;岁&#39;);  //引引加加，最终也是上面的形式</span></span></code></pre></div><p>⑤字符串拼接加强</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>console.log(&#39;Pink老师&#39; + 18);			//只要有字符就会相连</span></span>
<span class="line"><span>var age = 18;</span></span>
<span class="line"><span>// console.log(&#39;Pink老师age岁了&#39;);		//这样不行,会输出 &quot;Pink老师age岁了&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(&#39;Pink老师&#39; + age);		 // Pink老师18</span></span>
<span class="line"><span>console.log(&#39;Pink老师&#39; + age + &#39;岁啦&#39;);	// Pink老师18岁啦</span></span></code></pre></div><ul><li>我们经常会将字符串和变量来拼接，因为变量可以很方便地修改里面的值</li><li>变量是不能添加引号的，因为加引号的变量会变成字符串</li><li>如果变量两侧都有字符串拼接，口诀==🌏“引引加加 ”，删掉数字🌏==变量写加中间</li></ul><h4 id="_2-4-4、布尔型boolean" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.4.4、布尔型Boolean <a class="header-anchor" href="#_2-4-4、布尔型boolean" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.4.4、布尔型Boolean&quot;">​</a></h4><ul><li>布尔类型有两个值：true 和 false ，其中 true 表示真（对），而 false 表示假（错）。</li><li>布尔型和数字型相加的时候， true 的值为 1 ，false 的值为 0。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var flag = true;</span></span>
<span class="line"><span>console.log(flag + 1); // 2 true当加法来看当1来看，flase当0来看</span></span></code></pre></div><h4 id="_2-4-5、undefined未定义" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.4.5、undefined未定义 <a class="header-anchor" href="#_2-4-5、undefined未定义" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.4.5、undefined未定义&quot;">​</a></h4><ul><li>一个<strong>声明后没有被赋值</strong>的变量会有一个默认值 undefined ( 如果进行相连或者相加时，注意结果）</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 如果一个变量声明未赋值，就是undefined 未定义数据类型</span></span>
<span class="line"><span>var str;</span></span>
<span class="line"><span>console.log(str);				//undefined</span></span>
<span class="line"><span>var variable = undefined;</span></span>
<span class="line"><span>console.log(variable + &#39;Pink&#39;); //undefinedPink</span></span>
<span class="line"><span>console.log(variable + 18); //NaN</span></span></code></pre></div><p>1.undefined 和 字符串 相加，会拼接字符串</p><p>2.undefined 和 数字相加，最后结果是<strong>NaN</strong></p><h4 id="_2-4-6、空值null" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.4.6、空值null <a class="header-anchor" href="#_2-4-6、空值null" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.4.6、空值null&quot;">​</a></h4><ul><li>一个声明变量给 null 值，里面存的值为空</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var space = null;</span></span>
<span class="line"><span>console.log(space + &#39;pink&#39;); //nullpink</span></span>
<span class="line"><span>console.llog(space + 1); // 1</span></span></code></pre></div><h4 id="_2-4-7、typeof" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.4.7、typeof <a class="header-anchor" href="#_2-4-7、typeof" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.4.7、typeof&quot;">​</a></h4><ul><li>typeof 可用来获取检测变量的数据类型</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var num = 18;</span></span>
<span class="line"><span>console.log(typeof num) // 结果 number</span></span></code></pre></div><p>不同类型的返回值</p><table><thead><tr><th>类型</th><th>例</th><th>结果</th></tr></thead><tbody><tr><td>string</td><td>typeof “小白”</td><td>“string”</td></tr><tr><td>number</td><td>typeof 18</td><td>“number”</td></tr><tr><td>boolean</td><td>typeof true</td><td>“boolean”</td></tr><tr><td>undefined</td><td>typeof undefined</td><td>“undefined”</td></tr><tr><td>null</td><td>typeof null</td><td>“object”</td></tr></tbody></table><h4 id="_2-4-8、字面量" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.4.8、字面量 <a class="header-anchor" href="#_2-4-8、字面量" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.4.8、字面量&quot;">​</a></h4><p>字面量是在源代码中一个固定值的表示法，通俗来说，就是字面量表示如何表达这个值。</p><ul><li>数字字面量：8，9，10</li><li>字符串字面量：‘大前端’，‘后端’</li><li>布尔字面量：true、false</li></ul><p>通过控制台的颜色判断属于哪种数据类型</p><table><thead><tr><th>黑色</th><th>字符串</th></tr></thead><tbody><tr><td>蓝色</td><td>数值</td></tr><tr><td>灰色</td><td>undefined 和 null</td></tr></tbody></table><h3 id="_2-5、数据类型转换" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.5、数据类型转换 <a class="header-anchor" href="#_2-5、数据类型转换" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.5、数据类型转换&quot;">​</a></h3><p>使用表单、prompt 获取过来的数据默认是字符串类型的，此时就不能直接简单的进行加法运算，而需要转换变量的数据类型。通俗来说，<strong>就是把一种数据类型的变量转换成另外一种数据类型</strong>。</p><p>我们通常会实现3种方式的转换：</p><ul><li>转换为字符串类型</li><li>转换为数字型</li><li>转换为布尔型</li></ul><h4 id="_1转换为字符串型" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>①转换为字符串型 <a class="header-anchor" href="#_1转换为字符串型" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)①转换为字符串型&quot;">​</a></h4><table><thead><tr><th>方式</th><th>说明</th><th>案例</th></tr></thead><tbody><tr><td>toString()</td><td>转成字符串</td><td>var num = 1; alert(num.toString());</td></tr><tr><td>String()强制转换</td><td>转成字符串</td><td>var num = 1; alert(String(num));</td></tr><tr><td><strong>加号拼接字符串</strong></td><td>和字符串拼接的结果都是字符串</td><td>var num =1; alert(num+“我是字符串”);</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//1.把数字型转换为字符串型 toString()  变量.toString()</span></span>
<span class="line"><span>var num = 10;</span></span>
<span class="line"><span>var str = num.toString();</span></span>
<span class="line"><span>console.log(str);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//2.强制转换</span></span>
<span class="line"><span>console.log(String(num));</span></span></code></pre></div><ul><li>toString() 和 String() 使用方式不一样</li><li>三种转换方式，我们更喜欢用第三种加号拼接字符串转换方式，这一方式也称为隐士转换</li></ul><h4 id="_2转换为数字型" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>②转换为数字型 <a class="header-anchor" href="#_2转换为数字型" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)②转换为数字型&quot;">​</a></h4><table><thead><tr><th>方式</th><th>说明</th><th>案例</th></tr></thead><tbody><tr><td><strong>parselnt(string)函数</strong></td><td>将string类型转成整数数值型</td><td>parselnt(‘78’)</td></tr><tr><td><strong>parseFloat(string)函数</strong></td><td>将string类型转成浮点数数值型</td><td>parseFloat(‘78.21’)</td></tr><tr><td>Number()强制转换函数</td><td>将string类型转换为数值型</td><td>Number(‘12’)</td></tr><tr><td>js 隐式转换(- * /)</td><td>利用算术运算隐式转换为数值型</td><td>‘12’-0</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 1.parseInt()</span></span>
<span class="line"><span>var age =prompt(&#39;请输入您的年龄&#39;);</span></span>
<span class="line"><span>consolo.log(parseInt(age));  //数字型18</span></span>
<span class="line"><span>consolo.log(parseInt(&#39;3.14&#39;));  //3取整</span></span>
<span class="line"><span>consolo.log(parseInt(&#39;3.94&#39;));  //3,不会四舍五入</span></span>
<span class="line"><span>consolo.log(parseInt(&#39;120px&#39;));  //120,会去掉单位</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2.parseFloat()</span></span>
<span class="line"><span>console.log(parseFloat(&#39;3.14&#39;));  //3.14</span></span>
<span class="line"><span>consolo.log(parseFloat(&#39;120px&#39;));  //120,会去掉单位</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 3.利用Number(变量)</span></span>
<span class="line"><span>var str =&#39;123&#39;;</span></span>
<span class="line"><span>console.log(Number(str));</span></span>
<span class="line"><span>console.log(Number(&#39;12&#39;));   </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 4.利用了算术运算 - * /   隐式转换</span></span>
<span class="line"><span>console.log(&#39;12&#39;-0);  // 12</span></span>
<span class="line"><span>console.log(&#39;123&#39; - &#39;120&#39;);  //3</span></span>
<span class="line"><span>console.log(&#39;123&#39; * 1);  // 123</span></span></code></pre></div><p>1.注意 parseInt 和 parseFloat ，这两个是重点</p><p>2.隐式转换是我们在进行算数运算的时候，JS自动转换了数据类型</p><h4 id="_3转换为布尔型" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>③转换为布尔型 <a class="header-anchor" href="#_3转换为布尔型" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)③转换为布尔型&quot;">​</a></h4><table><thead><tr><th>方法</th><th>说明</th><th>案例</th></tr></thead><tbody><tr><td>Boolean()函数</td><td>其他类型转成布尔值</td><td>Boolean(‘true’);</td></tr></tbody></table><ul><li><p>代表空，否定的值会被转换为false，如 ’ ’ , 0, NaN , null , undefined</p></li><li><p>其余的值都会被被转换为true</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>console.log(Boolean(&#39;&#39;)); //false</span></span>
<span class="line"><span>console.log(Boolean(0));  //false</span></span>
<span class="line"><span>console.log(Boolean(NaN)); //false</span></span>
<span class="line"><span>console.log(Boolean(null)); //false</span></span>
<span class="line"><span>console.log(Boolean(undefined)); //false</span></span>
<span class="line"><span>console.log(Boolean(&#39;小白&#39;)); //true</span></span>
<span class="line"><span>console.log(Boolean(12));   //true</span></span></code></pre></div><h3 id="_2-6、运算符" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.6、运算符 <a class="header-anchor" href="#_2-6、运算符" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.6、运算符&quot;">​</a></h3><p>运算符（operator）也被称为<strong>操作符</strong>，是用于实现赋值、比较和执行算数运算等功能的符号</p><p>JavaScript 中常用的运算符有：</p><ul><li>算数运算符</li><li>递增和递减运算符</li><li>比较运算符</li><li>逻辑运算符</li><li>赋值运算符</li></ul><h4 id="_2-6-1、算术运算符" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.6.1、算术运算符 <a class="header-anchor" href="#_2-6-1、算术运算符" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.6.1、算术运算符&quot;">​</a></h4><p>概念：算术运算使用的符号，用于执行两个变量或值的算术运算。</p><table><thead><tr><th>运算符</th><th>描述</th><th>实例</th></tr></thead><tbody><tr><td>+</td><td>加</td><td>10 + 20 =30</td></tr><tr><td>-</td><td>减</td><td>10 - 20 =-10</td></tr><tr><td>*</td><td>乘</td><td>10 * 20 =200</td></tr><tr><td>/</td><td>除</td><td>10 / 20 =0.5</td></tr><tr><td>%</td><td>取余数（取模）</td><td>返回出发的余数 9 % 2 =1</td></tr></tbody></table><h4 id="_2-6-2、浮点数的精度问题" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.6.2、浮点数的精度问题 <a class="header-anchor" href="#_2-6-2、浮点数的精度问题" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.6.2、浮点数的精度问题&quot;">​</a></h4><p>浮点数值的最高精度是17位小数，但在进行算数计算时其精确度远远不如整数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var result = 0.1 +0.2; //结果不是0.3，0.30000000000000004</span></span>
<span class="line"><span>console.log(0.07 * 100); //结果不是7，而是7.000000000000001</span></span></code></pre></div><p><strong>所以不要直接判断两个浮点数是否相等</strong></p><h4 id="_2-6-3、递增和递减运算符" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.6.3、递增和递减运算符 <a class="header-anchor" href="#_2-6-3、递增和递减运算符" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.6.3、递增和递减运算符&quot;">​</a></h4><p>递增（++）</p><p>递减（- -）</p><p>放在变量前面时，我们称为<strong>前置递增(递减)运算符</strong></p><p>放在变量后面时，我们称为<strong>后置递增(递减)运算符</strong></p><p><strong>注意</strong>：递增和递减运算符必须和变量配合使用。</p><h5 id="_1前置递增运算符" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>①前置递增运算符 <a class="header-anchor" href="#_1前置递增运算符" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)①前置递增运算符&quot;">​</a></h5><p>++num num = num + 1</p><p>使用口诀:<strong>先自加，后返回值</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var num = 10;</span></span>
<span class="line"><span>alert (++num + 10); // 21</span></span></code></pre></div><p>先自加 10+1=11，返回11，此时num=11</p><h5 id="_2后置递增运算符" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>②后置递增运算符 <a class="header-anchor" href="#_2后置递增运算符" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)②后置递增运算符&quot;">​</a></h5><p>num ++ num = num +1</p><p>使用口诀:<strong>先返回原值，后自加</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var num = 10;</span></span>
<span class="line"><span>alert(10 + num++); // 20</span></span></code></pre></div><h5 id="_3小结" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>③小结 <a class="header-anchor" href="#_3小结" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)③小结&quot;">​</a></h5><ul><li>前置递增和后置递增运算符可以简化代码的编写，让变量的值 + 1 比以前写法更简单</li><li>单独使用时，运行结果相同，与其他代码联用时，执行结果会不同</li><li>开发时，大多使用后置递增/减，并且代码独占一行</li></ul><h4 id="_2-6-4、比较-关系-运算符" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.6.4、比较(关系)运算符 <a class="header-anchor" href="#_2-6-4、比较-关系-运算符" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.6.4、比较(关系)运算符&quot;">​</a></h4><p>比较运算符是<strong>两个数据进行比较时所使用的运算符</strong>，比较运算后，会<strong>返回一个布尔值</strong>(true / false)作为比较运算的结果。</p><table><thead><tr><th>运算符名称</th><th>说明</th><th>案例</th><th>结果</th></tr></thead><tbody><tr><td>&lt;</td><td>小于号</td><td>1 &lt; 2</td><td>true</td></tr><tr><td>&gt;</td><td>大于号</td><td>1 &gt; 2</td><td>false</td></tr><tr><td>&gt;=</td><td>大于等于号(大于或者等于)</td><td>2 &gt;= 2</td><td>true</td></tr><tr><td>&lt;=</td><td>小于等于号(小于或者等于)</td><td>3 &lt;= 2</td><td>false</td></tr><tr><td>==</td><td>判等号(会转型)</td><td>37 == 37</td><td>true</td></tr><tr><td>!=</td><td>不等号</td><td>37 != 37</td><td>false</td></tr><tr><td>=== !==</td><td>全等 要求值和数据类型都一致</td><td>37 === ‘37’</td><td>false</td></tr></tbody></table><h5 id="_1-小结" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>①===== 小结 <a class="header-anchor" href="#_1-小结" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)①===== 小结&quot;">​</a></h5><table><thead><tr><th>符号</th><th>作用</th><th>用法</th></tr></thead><tbody><tr><td>=</td><td>赋值</td><td>把右边给左边</td></tr><tr><td>==</td><td>判断</td><td>判断两边值是否相等(注意此时有隐士转换)</td></tr><tr><td>===</td><td>全等</td><td>判断两边的值和数据类型是否完全相同</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>console.log(18 == &#39;18&#39;);		//true</span></span>
<span class="line"><span>console.log(18 === &#39;18&#39;);		//false</span></span></code></pre></div><h4 id="_2-6-5、逻辑运算符" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.6.5、逻辑运算符 <a class="header-anchor" href="#_2-6-5、逻辑运算符" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.6.5、逻辑运算符&quot;">​</a></h4><p>逻辑运算符是用来进行布尔值运算的运算符，其返回值也是布尔值</p><table><thead><tr><th>逻辑运算符</th><th>说明</th><th>案例</th></tr></thead><tbody><tr><td>&amp;&amp;</td><td>“逻辑与”，简称&quot;与&quot; and</td><td>true &amp;&amp; false</td></tr><tr><td></td><td></td><td></td></tr><tr><td>！</td><td>“逻辑非”，简称&quot;非&quot; not</td><td>！true</td></tr></tbody></table><p>逻辑与：两边都是 true才返回 true，否则返回 false</p><p><img src="https://img-blog.csdnimg.cn/27faf833bca6432ab3edc64aeef5733c.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><p>逻辑或：两边都为 false 才返回 false，否则都为true</p><p><img src="https://img-blog.csdnimg.cn/8477f4ed90c646a492d4815ea476f3dc.png#pic_center" alt="在这里插入图片描述"></p><p>逻辑非：逻辑非（!）也叫作取反符，用来取一个布尔值相反的值，如 true 的相反值是 false</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var isOk = !true;</span></span>
<span class="line"><span>console.log(isOk);  // false</span></span>
<span class="line"><span>//逻辑非（!）也叫作取反符，用来取一个布尔值相反的值，如 true 的相反值是 false</span></span></code></pre></div><h5 id="_2-6-5-1、短路运算-逻辑中断" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.6.5.1、短路运算(逻辑中断) <a class="header-anchor" href="#_2-6-5-1、短路运算-逻辑中断" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.6.5.1、短路运算(逻辑中断)&quot;">​</a></h5><p>短路运算的原理：当有多个表达式（值）时,左边的表达式值可以确定结果时,就不再继续运算右边的表达式的值</p><h6 id="_1逻辑与" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>①逻辑与 <a class="header-anchor" href="#_1逻辑与" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)①逻辑与&quot;">​</a></h6><ul><li><p>语法：表达式1 &amp;&amp; 表达式2</p></li><li><p>如果第一个表达式的值为真，则返回表达式2</p></li><li><p>如果第一个表达式的值为假，则返回表达式1</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>console.log(123 &amp;&amp; 456);   //456</span></span>
<span class="line"><span>console.log(0 &amp;&amp; 456);     //0</span></span>
<span class="line"><span>console.log(123 &amp;&amp; 456 &amp;&amp; 789);  //789</span></span></code></pre></div><h6 id="_2逻辑或" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>②逻辑或 <a class="header-anchor" href="#_2逻辑或" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)②逻辑或&quot;">​</a></h6><ul><li><p>语法：表达式1 || 表达式2</p></li><li><p>如果第一个表达式的值为真，则返回表达式1</p></li><li><p>如果第一个表达式的值为假，则返回表达式2</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>console.log(123 || 456); //123</span></span>
<span class="line"><span>console.log(0 || 456);   //456</span></span>
<span class="line"><span>console.log(123 || 456 || 789);  //123</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var num = 0;</span></span>
<span class="line"><span>console.log(123 || num++);</span></span>
<span class="line"><span>// 先返回在加，相当于 (123 || 0)</span></span>
<span class="line"><span>console.log(num);    // 123</span></span></code></pre></div><h4 id="_2-6-6、赋值运算符" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.6.6、赋值运算符 <a class="header-anchor" href="#_2-6-6、赋值运算符" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.6.6、赋值运算符&quot;">​</a></h4><p>概念：用来把数据赋值给变量的运算符。</p><table><thead><tr><th>赋值运算符</th><th>说明</th><th>案例</th></tr></thead><tbody><tr><td>=</td><td>直接赋值</td><td>var usrName = ‘我是值’</td></tr><tr><td>+= ，-=</td><td>加，减一个数后再赋值</td><td>var age = 10； age+=5；//15</td></tr><tr><td>*=，/=，%=</td><td>成，除，取模后再赋值</td><td>var age = 2; age*=5; //10</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var age = 10;</span></span>
<span class="line"><span>age += 5;  // 相当于 age = age + 5;</span></span>
<span class="line"><span>age -= 5;  // 相当于 age = age - 5;</span></span>
<span class="line"><span>age *= 10; // 相当于 age = age * 10;</span></span></code></pre></div><h4 id="_2-6-7、运算符优先级" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.6.7、运算符优先级 <a class="header-anchor" href="#_2-6-7、运算符优先级" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.6.7、运算符优先级&quot;">​</a></h4><table><thead><tr><th>优先级</th><th>运算符</th><th>顺序</th></tr></thead><tbody><tr><td>1</td><td>小括号</td><td>()</td></tr><tr><td>2</td><td>一元运算符</td><td>++ – ！</td></tr><tr><td>3</td><td>算数运算符</td><td><strong>先 * / 后 + -</strong></td></tr><tr><td>4</td><td>关系运算符</td><td><strong>&gt;, &gt;= , &lt; , &lt;=</strong>,</td></tr><tr><td>5</td><td>相等运算符</td><td>，！=，=，！==</td></tr><tr><td>6</td><td>逻辑运算符</td><td>**先 &amp;&amp; 后</td></tr><tr><td>7</td><td>赋值运算符</td><td>=</td></tr><tr><td>8</td><td>逗号运算符</td><td>，</td></tr></tbody></table><p>1.一元运算符里面的<strong>逻辑非</strong>优先级很高</p><p>2.<strong>逻辑与</strong> 比 <strong>逻辑或</strong> 优先级高</p><p>3.练习题</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>console.log( 4 &gt;= 6 || &#39;人&#39; != &#39;阿凡达&#39; &amp;&amp; !(12 * 2 == 144) &amp;&amp; true)	// true</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var a = 3 &gt; 5 &amp;&amp; 2 &lt; 7 &amp;&amp; 3 == 4; </span></span>
<span class="line"><span>console.log(a); 	//false </span></span>
<span class="line"><span></span></span>
<span class="line"><span>var b = 3 &lt;= 4 || 3 &gt; 1 || 3 != 2; </span></span>
<span class="line"><span>console.log(b); 	//true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var c = 2 === &quot;2&quot;; </span></span>
<span class="line"><span>console.log(c);  	//false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var d = !c || b &amp;&amp; a ;</span></span>
<span class="line"><span>console.log(d);		//true</span></span></code></pre></div><h3 id="_2-7、流程控制" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.7、流程控制 <a class="header-anchor" href="#_2-7、流程控制" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.7、流程控制&quot;">​</a></h3><p>流程控制主要有三种结构，分别是顺序结构、分支结构和循环结构，这三种结构代表三种代码执行的顺序</p><h4 id="_2-7-1、分支结构" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.7.1、分支结构 <a class="header-anchor" href="#_2-7-1、分支结构" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.7.1、分支结构&quot;">​</a></h4><p>JS 语言提供了两种分支结构语句：<strong>JS 语句</strong> <strong>switch语句</strong></p><h5 id="_1if语句" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>①if语句 <a class="header-anchor" href="#_1if语句" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)①if语句&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 条件成立执行代码，否则什么也不做</span></span>
<span class="line"><span>if (条件表达式) {</span></span>
<span class="line"><span>    //条件成立执行的代码语句</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>案例：进入网吧</p><p>弹出一个输入框，要求用户输入年龄，如果年龄大于等于 18 岁，允许进网吧</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var usrAge = prompt(&#39;请输入您的年龄:&#39;);</span></span>
<span class="line"><span>if(usrAge &gt;= 18)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>      alert(&#39;您的年龄合法，欢迎来到老子网吧享受学习的乐趣！&#39;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_2if-else-语句" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>②if else 语句 <a class="header-anchor" href="#_2if-else-语句" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)②if else 语句&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 条件成立，执行if里面代码，否则执行else里面的代码</span></span>
<span class="line"><span>if(条件表达式)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //[如果]条件成立执行的代码</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        //[否则]执行的代码</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>案例：判断闰年</p><p>接收用户输入的年份，如果是闰年就弹出闰年，否则弹出是平年</p><p><strong>算法</strong>：能被4整除且不能整除100的为闰年（如2004年就是闰年，1901年不是闰年）或者能够被 400 整除的就是闰年</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var year = prompt(&#39;请输入年份&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (year % 4 == 0 &amp;&amp; year % 100 !=0 || year % 400 ==0)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>   alert(&#39;这个年份是闰年&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  alert(&#39;这个年份是平年&#39;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_3if-else-if-语句" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>③if else if 语句 <a class="header-anchor" href="#_3if-else-if-语句" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)③if else if 语句&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>if(条件表达式1)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  语句1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else if(条件表达式2)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>   语句2;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else if(条件表达式3)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  语句3;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>   //上述条件都不成立执行此处代码</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>案例:接收用户输入的分数，根据分数输出对应的等级字母 A、B、C、D、E</p><p>其中：</p><ol><li><p>90分(含)以上 ，输出：A</p></li><li><p>80分(含)~ 90 分(不含)，输出：B</p></li><li><p>70分(含)~ 80 分(不含)，输出：C</p></li><li><p>60分(含)~ 70 分(不含)，输出：D</p></li><li><p>60分(不含) 以下，输出： E</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> var score = prompt(&#39;请您输入分数:&#39;);</span></span>
<span class="line"><span>        if (score &gt;= 90) {</span></span>
<span class="line"><span>            alert(&#39;宝贝，你是我的骄傲&#39;);</span></span>
<span class="line"><span>        } else if (score &gt;= 80) {</span></span>
<span class="line"><span>            alert(&#39;宝贝，你已经很出色了&#39;);</span></span>
<span class="line"><span>        } else if (score &gt;= 70) {</span></span>
<span class="line"><span>            alert(&#39;你要继续加油喽&#39;);</span></span>
<span class="line"><span>        } else if (score &gt;= 60) {</span></span>
<span class="line"><span>            alert(&#39;孩子，你很危险&#39;);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            alert(&#39;可以再努力点吗，你很棒，但还不够棒&#39;);</span></span>
<span class="line"><span>        }</span></span></code></pre></div><h4 id="_2-7-2、三元表达式" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.7.2、三元表达式 <a class="header-anchor" href="#_2-7-2、三元表达式" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.7.2、三元表达式&quot;">​</a></h4><ul><li><p>语法结构 : 表达式1 ? 表达式2 : 表达式3</p></li><li><p>执行思路</p></li></ul><p>如果表达式1为true，则返回表达式2的值,如果表达式1为false，则返回表达式3的值</p><p><strong>案例：数字补0</strong></p><p>用户输入数字，如果数字小于10，则在前面补0，比如01，09，</p><p>如果数字大于10，则不需要补，比如20</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var figuer = prompt(&#39;请输入0~59之间的一个数字&#39;);</span></span>
<span class="line"><span>        var result = figuer &lt; 10 ? &#39;0&#39; + figuer : figue</span></span>
<span class="line"><span>        alert(result);</span></span></code></pre></div><h4 id="_2-7-3、switch" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>2.7.3、switch <a class="header-anchor" href="#_2-7-3、switch" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)2.7.3、switch&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>switch(表达式){</span></span>
<span class="line"><span>  case value1:</span></span>
<span class="line"><span>     //表达式等于 value1 时要执行的代码</span></span>
<span class="line"><span>     break;</span></span>
<span class="line"><span>  case value2:</span></span>
<span class="line"><span>     //表达式等于value2 时要执行的代码</span></span>
<span class="line"><span>     break;</span></span>
<span class="line"><span>  default:</span></span>
<span class="line"><span>     //表达式不等于任何一个value时要执行的代码</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>switch ：开关 转换 ， case ：小例子 选项</li><li>关键字 switch 后面<strong>括号内</strong>可以是<strong>表达式或值</strong>， 通常是一个<strong>变量</strong></li><li>关键字 case , 后跟一个选项的表达式或值，<strong>后面跟一个冒号</strong></li><li>switch 表达式的值会与结构中的 case 的值做比较</li><li>如果存在匹配<strong>全等</strong>(===) ，则与该 case 关联的代码块会被执行，并在遇到 <strong>break 时停止</strong>，整个 switch 语句代码执行结束</li><li>如果所有的 case 的值都和表达式的值不匹配，则执行 default 里的代码</li><li><strong>执行case 里面的语句时，如果没有break，则继续执行下一个case里面的语句</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 用户在弹出框里面输入一个水果，如果有就弹出该水果的价格， 如果没有该水果就弹出“没有此水果”</span></span>
<span class="line"><span>        var fruit = prompt(&#39;请您输入查询的苹果&#39;);</span></span>
<span class="line"><span>        switch (fruit) {</span></span>
<span class="line"><span>            case &#39;苹果&#39;:</span></span>
<span class="line"><span>                alert(&#39;苹果的价格为3.5元/千克&#39;);</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            case &#39;香蕉&#39;:</span></span>
<span class="line"><span>                alert(&#39;香蕉的价格为3元/千克&#39;);</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            default:</span></span>
<span class="line"><span>                alert(&#39;没有这种水果&#39;);</span></span>
<span class="line"><span>        }</span></span></code></pre></div><h2 id="断点调试" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>断点调试 <a class="header-anchor" href="#断点调试" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)断点调试&quot;">​</a></h2><ol><li><p>浏览器中按 F12–&gt; sources --&gt;找到需要调试的文件–&gt;在程序的某一行设置断点(在行数点一下)</p></li><li><p>刷新浏览器</p></li><li><p>Watch: 监视，通过watch可以监视变量的值的变化，非常的常用</p></li><li><p>F11: 程序单步执行，让程序一行一行的执行，这个时候，观察watch中变量的值的变化</p></li></ol><h2 id="循环" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>循环 <a class="header-anchor" href="#循环" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)循环&quot;">​</a></h2><h3 id="_4-1、for循环" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>4.1、for循环 <a class="header-anchor" href="#_4-1、for循环" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)4.1、for循环&quot;">​</a></h3><p>在程序中，一组被重复执行的语句被称之为<strong>循环体</strong>，能否继续重复执行，取决于循环的<strong>终止条件</strong>。由循环体及循环的终止条件组成的语句，被称之为<strong>循环语句</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>for(初始化变量;条件表达式;操作表达式)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>   //循环体</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>1.输入10句&quot;娘子晚安哈！&quot;</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//基本写法</span></span>
<span class="line"><span>for(var i = 1; i&lt;=10; i++  )</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>         console.log(&#39;娘子晚安哈&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>// 用户输入次数</span></span>
<span class="line"><span>var num = prompt(&#39;请输入次数:&#39;);</span></span>
<span class="line"><span>for(var i = 1; i&lt;= num ;i++)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        console.log(&#39;娘子晚安哈&#39;);</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p><strong>2.求1-100之间所有整数的累加和</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 求1-100所以的整数和</span></span>
<span class="line"><span>var sum = 0;</span></span>
<span class="line"><span>for (var i = 1; i &lt;= 100; i++) {</span></span>
<span class="line"><span>    var sum = sum + i;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(sum);</span></span></code></pre></div><p><strong>3.求1-100之间所有数的平均值</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> // 3.求1-100之间所有数的平均值</span></span>
<span class="line"><span>var sum = 0;</span></span>
<span class="line"><span>for (var i = 1; i &lt;= 100; i++) {</span></span>
<span class="line"><span>    var sum = sum + i;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(sum / 100);</span></span></code></pre></div><p><strong>4.求1-100之间所有偶数和奇数的和</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//    4.求1-100之间所有偶数和奇数的和</span></span>
<span class="line"><span>var sum1 = 0;</span></span>
<span class="line"><span>var sum2 = 0;</span></span>
<span class="line"><span>for (var i = 1; i &lt;= 100; i++) {</span></span>
<span class="line"><span>    if (i % 2 == 0) {</span></span>
<span class="line"><span>        sum1 = sum1 + i;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        sum2 = sum2 + i;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(&#39;偶数和为&#39; + sum1);</span></span>
<span class="line"><span>console.log(&#39;奇数和为&#39; + sum2);</span></span></code></pre></div><p><strong>5.求1-100之间所有能被3整除的数字的和</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 5.求1-100之间所有能被3整除的数字的和</span></span>
<span class="line"><span>var sum = 0;</span></span>
<span class="line"><span>for (var i = 1; i &lt;= 100; i++) {</span></span>
<span class="line"><span>    if (i % 3 == 0) {</span></span>
<span class="line"><span>        sum += i;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(sum);</span></span></code></pre></div><p><strong>6.要求用户输入班级人数，之后依次输入每个学生的成绩，最后打印出该班级总的成绩以及平均成绩。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var num = prompt(&#39;请输入班级总的人数:&#39;); // num 班级总的人数</span></span>
<span class="line"><span>var sum = 0; // 总成绩</span></span>
<span class="line"><span>var average = 0; // 平均成绩</span></span>
<span class="line"><span>for (var i = 1; i &lt;= num; i++) {</span></span>
<span class="line"><span>     var score = prompt(&#39;请输入第&#39; + i + &#39;个学生的成绩&#39;);</span></span>
<span class="line"><span>    //这里接收的是str，必须转换为数值</span></span>
<span class="line"><span>     sum = sum + parseFloat(score);         </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>average = sum / num;</span></span>
<span class="line"><span>alert(&#39;班级总的成绩是：&#39; + sum);</span></span>
<span class="line"><span>alert(&#39;班级总的平均成绩是：&#39; + average);</span></span></code></pre></div><p><strong>7.一行打印5个星星</strong></p><p>我们采取追加字符串的方式，这样可以打印到控制台上</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var star = &#39;&#39;;</span></span>
<span class="line"><span>for (var i = 1; i &lt;= 5; i++) {</span></span>
<span class="line"><span>     star += &#39;☆&#39;;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>console.log(star);</span></span></code></pre></div><h3 id="_4-2、双重for循环" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>4.2、双重for循环 <a class="header-anchor" href="#_4-2、双重for循环" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)4.2、双重for循环&quot;">​</a></h3><p><strong>循环嵌套</strong>是指在一个循环语句中再定义一个循环语句的语法结构，例如在for循环语句中，可以再嵌套一个for 循环，这样的 for 循环语句我们称之为双重for循环。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>for(外循环的初始;外循环的条件;外形循环的操作表达式){</span></span>
<span class="line"><span>    for(内循环的初始;内循环的条件;内循环的操作表达式){</span></span>
<span class="line"><span>        需执行的代码;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>内层循环可以看做外层循环的语句</li><li>内层循环执行的顺序也要遵循 for 循环的执行顺序</li><li>外层循环执行一次，内层循环要执行全部次数</li></ul><h4 id="_1打印五行五列星星" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>①打印五行五列星星 <a class="header-anchor" href="#_1打印五行五列星星" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)①打印五行五列星星&quot;">​</a></h4><p>核心：</p><ul><li>内层循环负责一行打印五个星星</li><li>外层循环负责打印五行</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var star = &#39;&#39;;</span></span>
<span class="line"><span>for(var j = 1;j&lt;=5;j++)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>   for (var i = 1; i &lt;= 5; i++)</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>     star += &#39;☆&#39;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>    //每次满5个星星就加一次换行</span></span>
<span class="line"><span>    star +=&#39;\\n&#39;  </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(star);</span></span></code></pre></div><h4 id="_2打印n行n列的星星" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>②打印n行n列的星星 <a class="header-anchor" href="#_2打印n行n列的星星" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)②打印n行n列的星星&quot;">​</a></h4><p>要求用户输入行数和列数，之后在控制台打印出用户输入行数和列数的星星</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var star = &#39;&#39;;</span></span>
<span class="line"><span>var row = prompt(&#39;请输入行数&#39;);</span></span>
<span class="line"><span>var col = prompt(&#39;请输入列数&#39;);</span></span>
<span class="line"><span>for (var j = 1; j &lt;= col; j++) {</span></span>
<span class="line"><span>    for (var i = 1; i &lt;= row; i++) {</span></span>
<span class="line"><span>        star += &#39;☆&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    star += &#39;\\n&#39;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(star);</span></span></code></pre></div><h4 id="_3打印倒三角形" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>③打印倒三角形 <a class="header-anchor" href="#_3打印倒三角形" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)③打印倒三角形&quot;">​</a></h4><p><img src="https://img-blog.csdnimg.cn/737dd2f352e74767bb8f2a89e6539061.png#pic_center" alt="在这里插入图片描述"></p><ul><li>一共有10行，但是每行的星星个数不一样，因此需要用到双重 for 循环</li><li>外层的 for 控制行数 i ，循环10次可以打印10行</li><li>内层的 for 控制每行的星星个数 j</li><li>核心算法： 每一行星星的个数： j = i ; j &lt;= 10; j++</li><li>每行打印完毕后，都需要重新换一行</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var star = &#39;&#39;;</span></span>
<span class="line"><span>var row = prompt(&#39;请输入行数&#39;);</span></span>
<span class="line"><span>var col = prompt(&#39;请输入列数&#39;);</span></span>
<span class="line"><span>for (var i = 1; i &lt;= row; i++) {</span></span>
<span class="line"><span>    for (var j = i; j &lt;= col; j++) {</span></span>
<span class="line"><span>        star += &#39;☆&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    star += &#39;\\n&#39;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(star);</span></span></code></pre></div><h3 id="_4-3、while循环" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>4.3、while循环 <a class="header-anchor" href="#_4-3、while循环" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)4.3、while循环&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>while(条件表达式){</span></span>
<span class="line"><span>  //循环体代码</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>执行思路：</p><ul><li><p>先执行条件表达式，如果结果为 true，则执行循环体代码；如果为 false，则退出循环，执行后面代码</p></li><li><p>执行循环体代码</p></li><li><p>循环体代码执行完毕后，程序会继续判断执行条件表达式，如条件仍为true，则会继续执行循环体，直到循环条件为 false 时，整个循环过程才会结束</p></li></ul><p><strong>注意</strong>：</p><ul><li><p>使用 while 循环时一定要注意，它必须要有退出条件，否则会称为死循环</p></li><li><p>while 循环和 for 循环的不同之处在于 while 循环可以做较为复杂的条件判断，比如判断用户名和密码</p></li></ul><h4 id="_1打印人的一生" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>①打印人的一生 <a class="header-anchor" href="#_1打印人的一生" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)①打印人的一生&quot;">​</a></h4><p>从1岁到99岁</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var age = 0;</span></span>
<span class="line"><span>while (age &lt;= 100) {</span></span>
<span class="line"><span>    age++;</span></span>
<span class="line"><span>    console.log(&#39;您今年&#39; + age + &#39;岁了&#39;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_2计算-1-100-之间所有整数的和" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>②计算 1 ~ 100 之间所有整数的和 <a class="header-anchor" href="#_2计算-1-100-之间所有整数的和" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)②计算 1 ~ 100 之间所有整数的和&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var figure = 1;</span></span>
<span class="line"><span>        var sum = 0;</span></span>
<span class="line"><span>        while (figure &lt;= 100) {</span></span>
<span class="line"><span>            sum += figure;</span></span>
<span class="line"><span>            figure++;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        console.log(&#39;1-100的整数和为&#39; + sum);</span></span></code></pre></div><h3 id="_4-4、do-while循环" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>4.4、do while循环 <a class="header-anchor" href="#_4-4、do-while循环" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)4.4、do while循环&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>do {</span></span>
<span class="line"><span>  //循环体代码-条件表达式为true的时候重复执行循环一代码</span></span>
<span class="line"><span>}while(条件表达式);</span></span></code></pre></div><p>执行思路：</p><ol><li><p>先执行一次循环体代码</p></li><li><p>再执行表达式，如果结果为true，则继续执行循环体代码，如果为false，则退出循环，继续执行后面的代码</p></li><li><p>先执行再判断循环体，<strong>所以dowhile循环语句至少会执行一次循环体代码</strong></p></li></ol><p><strong>需求：弹出一个提示框， 你爱我吗？ 如果输入我爱你，就提示结束，否则，一直询问</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>do {</span></span>
<span class="line"><span>	var love = prompt(&#39;你爱我吗？&#39;);</span></span>
<span class="line"><span>} while (love != &#39;我爱你&#39;);</span></span>
<span class="line"><span>	alert(&#39;登录成功&#39;);</span></span></code></pre></div><h3 id="_4-5、continue-关键字" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>4.5、continue 关键字 <a class="header-anchor" href="#_4-5、continue-关键字" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)4.5、continue 关键字&quot;">​</a></h3><p>continue 关键字用于<strong>立即跳出本次循环，继续下一次循环</strong>（本次循环体中 continue 之后的代码就会少执行一次）。</p><p>例如，吃5个包子，第3个有虫子，就扔掉第3个，继续吃第4个第5个包子</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>for (var i = 1; i &lt;= 5; i++) {</span></span>
<span class="line"><span> if (i == 3) {</span></span>
<span class="line"><span>     console.log(&#39;这个包子有虫子，扔掉&#39;);</span></span>
<span class="line"><span>     continue; // 跳出本次循环，跳出的是第3次循环 </span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  console.log(&#39;我正在吃第&#39; + i + &#39;个包子呢&#39;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-6、break关键字" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>4.6、break关键字 <a class="header-anchor" href="#_4-6、break关键字" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)4.6、break关键字&quot;">​</a></h3><p>break 关键字用于<strong>立即跳出整个循环</strong></p><p>例如，吃5个包子，吃到第3个发现里面有半个虫子，其余的也不吃了</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>for (var i = 1; i &lt;= 5; i++) {</span></span>
<span class="line"><span>   if (i == 3) {</span></span>
<span class="line"><span>       break; // 直接退出整个for 循环，跳到整个for下面的语句</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   console.log(&#39;我正在吃第&#39; + i + &#39;个包子呢&#39;);</span></span>
<span class="line"><span> }</span></span></code></pre></div><h2 id="数组" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>数组 <a class="header-anchor" href="#数组" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)数组&quot;">​</a></h2><p>数组(Array)是指一组数据的集合，其中的每个数据被称作元素，在数组中可以存放任意类型的元素。数组是一种将一组数据存储在单个变量名下的优雅方式。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//普通变量一次只能存储一个值</span></span>
<span class="line"><span>var num = 10;</span></span>
<span class="line"><span>//数组一次可以存储多个值</span></span>
<span class="line"><span>var arr =[1,2,3,4,5];</span></span></code></pre></div><h3 id="_5-1、创建数组" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>5.1、创建数组 <a class="header-anchor" href="#_5-1、创建数组" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)5.1、创建数组&quot;">​</a></h3><p>JavaScript 中创建数组有两种方式：</p><ul><li>利用 new 创建数组</li><li>利用数组字面量创建数组</li></ul><h4 id="_1利用-new-创建数组" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>①利用 new 创建数组 <a class="header-anchor" href="#_1利用-new-创建数组" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)①利用 new 创建数组&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var 数组名 = new Array();</span></span>
<span class="line"><span>var arr = new Array(); //创建一个新的空数组</span></span></code></pre></div><ul><li><p>这种方式暂且了解，等学完对象再看</p></li><li><p>注意 <code>Array()</code>，A要大写</p></li></ul><h4 id="_2利用数组字面量创建数组" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>②利用数组字面量创建数组 <a class="header-anchor" href="#_2利用数组字面量创建数组" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)②利用数组字面量创建数组&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 1.利用数组字面量方式创建空的数组 </span></span>
<span class="line"><span>var 数组名 =[];</span></span>
<span class="line"><span>// 2.使用数组字面量方式创建带初始值的数组</span></span>
<span class="line"><span>var 数组名 =[&#39;小白&#39;,&#39;小黑&#39;,&#39;小黄&#39;,&#39;瑞奇&#39;];</span></span>
<span class="line"><span>// 3.数组中可以存放任意类型的数据，例如字符串，数字，布尔值等</span></span>
<span class="line"><span>var arrStus =[&#39;小白&#39;，12,true,28.9];</span></span></code></pre></div><ul><li>数组的字面量是方括号 <code>[]</code></li><li>声明数组并赋值称为数组的初始化</li><li>这种字面量方式也是我们以后最多使用的方式</li></ul><h3 id="_5-2、数组的索引-下标" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>5.2、数组的索引（下标） <a class="header-anchor" href="#_5-2、数组的索引-下标" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)5.2、数组的索引（下标）&quot;">​</a></h3><p>索引 (下标) ：用来访问数组元素的序号（数组下标从 0 开始）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//定义数组</span></span>
<span class="line"><span>var arrStus = [1,2,3];</span></span>
<span class="line"><span>//获取数组中的第2个元素</span></span>
<span class="line"><span>alert(arrStus[1]);</span></span></code></pre></div><h3 id="_5-3遍历数组" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>5.3遍历数组 <a class="header-anchor" href="#_5-3遍历数组" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)5.3遍历数组&quot;">​</a></h3><p>我们可以通过 for 循环索引遍历数组中的每一项</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 数组索引访问数组中的元素</span></span>
<span class="line"><span>var arr = [&#39;red&#39;,&#39;green&#39;, &#39;blue&#39;];</span></span>
<span class="line"><span>console.log(arr[0]) // red</span></span>
<span class="line"><span>console.log(arr[1]) // green</span></span>
<span class="line"><span>console.log(arr[2]) // blue</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// for循环遍历数组</span></span>
<span class="line"><span>var arr = [&#39;red&#39;,&#39;green&#39;, &#39;blue&#39;];</span></span>
<span class="line"><span>for (var i = 0; i &lt; arr.length; i++){</span></span>
<span class="line"><span>    console.log(arrStus[i]);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_5-4、数组的长度" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>5.4、数组的长度 <a class="header-anchor" href="#_5-4、数组的长度" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)5.4、数组的长度&quot;">​</a></h3><p>使用“数组名.length”可以访问数组元素的数量（数组长度）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var arrStus = [1,2,3];</span></span>
<span class="line"><span>alert(arrStus.length);  // 3</span></span></code></pre></div><p><strong>注意</strong>：</p><ul><li><p>此处数组的长度是<strong>数组元素的个数</strong> ，不要和<strong>数组的索引号</strong>混淆</p></li><li><p>当我们数组里面的元素个数发生了变化，这个 length 属性跟着一起变化</p></li></ul><h3 id="_5-5、案例" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>5.5、案例 <a class="header-anchor" href="#_5-5、案例" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)5.5、案例&quot;">​</a></h3><p><strong>1.请将 [“关羽”,“张飞”,“马超”,“赵云”,“黄忠”,“刘备”,“姜维”]; 数组里的元素依次打印到控制台</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var arr = [&quot;关羽&quot;,&quot;张飞&quot;,&quot;马超&quot;,&quot;赵云&quot;,&quot;黄忠&quot;,&quot;刘备&quot;,&quot;姜维&quot;]; </span></span>
<span class="line"><span>// 遍历  从第一个到最后一个</span></span>
<span class="line"><span>for(var i = 0; i &lt; arr.length; i++ )  { </span></span>
<span class="line"><span>   console.log( arr[i] );</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>2.求数组 [2,6,1,7, 4] 里面所有元素的和以及平均值</strong></p><ul><li>①声明一个求和变量 sum。</li><li>①遍历这个数组，把里面每个数组元素加到 sum 里面。</li><li>①用求和变量 sum 除以数组的长度就可以得到数组的平均值。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var arr = [2, 6, 1, 7, 4];</span></span>
<span class="line"><span>var sum = 0;</span></span>
<span class="line"><span>var average = 0;</span></span>
<span class="line"><span>for (var i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span>    sum += arr[i];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>average = sum / i; //此时i为5</span></span>
<span class="line"><span>//      average = sum / arr.length;</span></span>
<span class="line"><span>console.log(&#39;和为&#39; + sum);</span></span>
<span class="line"><span>console.log(&#39;平均值为&#39; + average);</span></span></code></pre></div><p><strong>3.求数组[2,6,1,77,52,25,7]中的最大值</strong></p><ul><li>①声明一个保存最大元素的变量 max。</li><li>②默认最大值可以取数组中的第一个元素。</li><li>③遍历这个数组，把里面每个数组元素和 max 相比较。</li><li>④如果这个数组元素大于max 就把这个数组元素存到 max 里面，否则继续下一轮比较。</li><li>⑤最后输出这个 max。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> var arr = [2, 6, 1, 77, 52, 25, 7];</span></span>
<span class="line"><span>        var max = arr[0];</span></span>
<span class="line"><span>        var temp;</span></span>
<span class="line"><span>        for (var i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span>            if (max &lt; arr[i]) {</span></span>
<span class="line"><span>                temp = max;</span></span>
<span class="line"><span>                max = arr[i];</span></span>
<span class="line"><span>                arr[i] = temp;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        console.log(&#39;最大值为&#39; + max);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方法二：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var arrNum = [2,6,1,77,52,25,7];</span></span>
<span class="line"><span>var maxNum = arrNum[0]; // 用来保存最大元素,默认最大值是数组中的第一个元素</span></span>
<span class="line"><span>// 从0 开始循环数组里的每个元素</span></span>
<span class="line"><span>for(var i = 0;i&lt; arrNum.length; i++){</span></span>
<span class="line"><span>    // 如果数组里当前循环的元素大于 maxNum，则保存这个元素和下标</span></span>
<span class="line"><span>    if(arrNum[i] &gt; maxNum){</span></span>
<span class="line"><span>        maxNum = arrNum[i]; // 保存数值到变量 maxNum</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>4.将数组 [‘red’, ‘green’, ‘blue’, ‘pink’] 里面的元素转换为字符串</strong></p><p>思路：就是把里面的元素相加就好了，但是注意保证是字符相加</p><ul><li>①需要一个新变量 str 用于存放转换完的字符串。</li><li>②遍历原来的数组，分别把里面数据取出来，加到字符串变量 str 里面。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var arr = [&#39;red&#39;,&#39;green&#39;,&#39;blue&#39;,&#39;pink&#39;];</span></span>
<span class="line"><span>var str =&#39;&#39;;</span></span>
<span class="line"><span>for(var i = 0; i &lt; arr.length; i++){</span></span>
<span class="line"><span>    str += arr[i];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(str);</span></span>
<span class="line"><span>// redgreenbluepink</span></span></code></pre></div><p><strong>5.将数组 [‘red’, ‘green’, ‘blue’, ‘pink’] 转换为字符串，并且用 | 或其他符号分割</strong></p><ul><li>①需要一个新变量用于存放转换完的字符串 str。</li><li>①遍历原来的数组，分别把里面数据取出来，加到字符串里面。</li><li>①同时在后面多加一个分隔符。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var arr = [&#39;red&#39;, &#39;green&#39;, &#39;blue&#39;, &#39;pink&#39;];</span></span>
<span class="line"><span>var str = &#39;&#39;;</span></span>
<span class="line"><span>var separator = &#39;|&#39;;</span></span>
<span class="line"><span>for (var i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span>   str += arr[i] + separator;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(str);</span></span>
<span class="line"><span>// red|green|blue|pink</span></span></code></pre></div><h3 id="_5-6、数组中新增元素" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>5.6、数组中新增元素 <a class="header-anchor" href="#_5-6、数组中新增元素" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)5.6、数组中新增元素&quot;">​</a></h3><h4 id="_1通过修改-length-长度新增数组元素" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>①通过修改 length 长度新增数组元素 <a class="header-anchor" href="#_1通过修改-length-长度新增数组元素" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)①通过修改 length 长度新增数组元素&quot;">​</a></h4><ul><li><p>可以通过修改 length 长度来实现数组扩容的目的</p></li><li><p>length 属性是可读写的</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var arr = [&#39;red&#39;, &#39;green&#39;, &#39;blue&#39;, &#39;pink&#39;];</span></span>
<span class="line"><span>arr.length = 7;</span></span>
<span class="line"><span>console.log(arr);</span></span>
<span class="line"><span>console.log(arr[4]);</span></span>
<span class="line"><span>console.log(arr[5]);</span></span>
<span class="line"><span>console.log(arr[6]);</span></span></code></pre></div><p>其中索引号是 4，5，6 的空间没有给值，就是声明变量未给值，默认值就是 <strong>undefined</strong></p><h4 id="_2通过修改数组索引新增数组元素" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>②通过修改数组索引新增数组元素 <a class="header-anchor" href="#_2通过修改数组索引新增数组元素" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)②通过修改数组索引新增数组元素&quot;">​</a></h4><ul><li><p>可以通过修改数组索引的方式追加数组元素</p></li><li><p>不能直接给数组名赋值，否则会覆盖掉以前的数据</p></li><li><p>这种方式也是我们最常用的一种方式</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var arr = [&#39;red&#39;, &#39;green&#39;, &#39;blue&#39;, &#39;pink&#39;];</span></span>
<span class="line"><span>arr[4] = &#39;hotpink&#39;;</span></span>
<span class="line"><span>console.log(arr);</span></span></code></pre></div><h3 id="_5-7、数组中新增元素" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>5.7、数组中新增元素 <a class="header-anchor" href="#_5-7、数组中新增元素" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)5.7、数组中新增元素&quot;">​</a></h3><p><strong>1.新建一个数组，里面存放10个整数（ 1~10）， 要求使用循环追加的方式输出： [1,2,3,4,5,6,7,8,9,10]</strong></p><ul><li>①使用循环来追加数组。</li><li>②声明一个空数组 arr。</li><li>③循环中的计数器 i 可以作为数组元素存入。</li><li>由于数组的索引号是从0开始的， 因此计数器从 0 开始更合适，存入的数组元素要+1。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var arr = [];</span></span>
<span class="line"><span>for (var i = 0; i &lt; 10; i++){</span></span>
<span class="line"><span>    arr[i] = i + 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(arr);</span></span></code></pre></div><p><strong>2.将数组 [2, 0, 6, 1, 77, 0, 52, 0, 25, 7] 中大于等于 10 的元素选出来，放入新数组</strong></p><ul><li>①声明一个新的数组用于存放新数据。</li><li>②遍历原来的数组，找出大于等于 10 的元素。</li><li>③依次追加给新数组 newArr。</li></ul><p>实现代码1：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];</span></span>
<span class="line"><span>var newArr = [];</span></span>
<span class="line"><span>// 定义一个变量 用来计算 新数组的索引号</span></span>
<span class="line"><span>var j = 0;</span></span>
<span class="line"><span>for (var i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span>    if (arr[i] &gt;= 10) {</span></span>
<span class="line"><span>        // 给新数组</span></span>
<span class="line"><span>        newArr[j] = arr[i];</span></span>
<span class="line"><span>        // 索引号 不断自加</span></span>
<span class="line"><span>        j++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(newArr);</span></span></code></pre></div><p>实现代码2：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];</span></span>
<span class="line"><span>var newArr = [];</span></span>
<span class="line"><span>for (var i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span>    if (arr[i] &gt;= 10) {</span></span>
<span class="line"><span>        // 给新数组</span></span>
<span class="line"><span>        newArr[newArr.length] = arr[i];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(newArr);</span></span></code></pre></div><h3 id="_5-8、删除指定数组元素" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>5.8、删除指定数组元素 <a class="header-anchor" href="#_5-8、删除指定数组元素" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)5.8、删除指定数组元素&quot;">​</a></h3><p><strong>将数组[2, 0, 6, 1, 77, 0, 52, 0, 25, 7]中的 0 去掉后，形成一个不包含 0 的新数组。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];</span></span>
<span class="line"><span>var newArr = [];</span></span>
<span class="line"><span>for(var i = 0; i &lt;arr.length; i++){</span></span>
<span class="line"><span>    if(arr[i] != 0){</span></span>
<span class="line"><span>        newArr[newArr.length] = arr[i];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(newArr);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//老师代码</span></span>
<span class="line"><span>var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];</span></span>
<span class="line"><span>var newArr = [];   // 空数组的默认的长度为 0 </span></span>
<span class="line"><span>// 定义一个变量 i 用来计算新数组的索引号</span></span>
<span class="line"><span>for (var i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span>    // 找出大于 10 的数</span></span>
<span class="line"><span>    if (arr[i] != 0) {</span></span>
<span class="line"><span>        // 给新数组</span></span>
<span class="line"><span>        // 每次存入一个值，newArr长度都会 +1  </span></span>
<span class="line"><span>        newArr[newArr.length] = arr[i];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(newArr);</span></span></code></pre></div><h3 id="_5-9、翻转数组" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>5.9、翻转数组 <a class="header-anchor" href="#_5-9、翻转数组" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)5.9、翻转数组&quot;">​</a></h3><p><strong>将数组 [‘red’, ‘green’, ‘blue’, ‘pink’, ‘purple’] 的内容反过来存放</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 把旧数组索引号的第4个取过来(arr.length - 1),给新数组索引号第0个元素(newArr.length)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var arr = [&#39;red&#39;,&#39;green&#39;,&#39;blue&#39;,&#39;pink&#39;,&#39;purple&#39;];</span></span>
<span class="line"><span>var newArr = [];</span></span>
<span class="line"><span>for (var i = arr.length -1; i&gt;=0; i--){</span></span>
<span class="line"><span>    newArr[newArr.length] = arr[i];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(newArr);</span></span></code></pre></div><h3 id="_5-10、数组排序" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119249534" target="_blank" rel="noreferrer"></a>5.10、数组排序 <a class="header-anchor" href="#_5-10、数组排序" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)5.10、数组排序&quot;">​</a></h3><p>冒泡排序</p><p>将数组 [5, 4, 3, 2, 1]中的元素按照从小到大的顺序排序，输出： 1，2，3，4，5</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var arr = [5,4,3,2,1];</span></span>
<span class="line"><span>for (var i = 0; i &lt; arr.length-1; i++){ //外层循环管趟数，5个数共交换4躺</span></span>
<span class="line"><span>    for (var j = 0; j &lt;= arr.length - i - 1; j++){</span></span>
<span class="line"><span>        //里层循环管每一趟交换的次数</span></span>
<span class="line"><span>        //前一个和后面一个数组元素相比较</span></span>
<span class="line"><span>        if(arr[j] &gt; arr[j+1]){</span></span>
<span class="line"><span>            var temp = arr[j];</span></span>
<span class="line"><span>            arr[j] = arr[j+1];</span></span>
<span class="line"><span>            arr[j+1] = temp;</span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(arr);</span></span></code></pre></div><p><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>1、函数</p><p>函数：就是封装了一段<strong>可被重复调用执行的代码块</strong>。通过此代码块可以实现大量代码的重复使用。</p><h3 id="_1-1、函数的使用" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>1.1、函数的使用 <a class="header-anchor" href="#_1-1、函数的使用" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)1.1、函数的使用&quot;">​</a></h3><p>函数在使用时分为两步：<strong>声明函数</strong>和<strong>调用函数</strong></p><h4 id="_1声明函数" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>①声明函数 <a class="header-anchor" href="#_1声明函数" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)①声明函数&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//声明函数</span></span>
<span class="line"><span>function 函数名(){</span></span>
<span class="line"><span>     //函数体代码</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>function 是声明函数的关键字,<strong>必须小写</strong></li><li>由于函数一般是为了实现某个功能才定义的， 所以通常我们将函数名命名为动词，比如 getSum</li></ul><h4 id="_2调用函数" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>②调用函数 <a class="header-anchor" href="#_2调用函数" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)②调用函数&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//调用函数</span></span>
<span class="line"><span>函数名(); //通过调用函数名来执行函数体代码</span></span></code></pre></div><ul><li>调用的时候<strong>千万不要忘记添加小括号</strong></li><li>口诀：函数不调用，自己不执行</li></ul><p><strong>注意</strong>：声明函数本身并不会执行代码，只有调用函数时才会执行函数体代码。</p><h3 id="_1-2、函数的封装" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>1.2、函数的封装 <a class="header-anchor" href="#_1-2、函数的封装" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)1.2、函数的封装&quot;">​</a></h3><ul><li>函数的封装是把一个或者多个功能通过<strong>函数的方式</strong>封装起来，对外只提供一个简单的函数接口</li></ul><h3 id="_1-3、函数的参数" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>1.3、函数的参数 <a class="header-anchor" href="#_1-3、函数的参数" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)1.3、函数的参数&quot;">​</a></h3><h4 id="_1-3-1、形参和实参" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>1.3.1、形参和实参 <a class="header-anchor" href="#_1-3-1、形参和实参" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)1.3.1、形参和实参&quot;">​</a></h4><p><strong>在声明函数时</strong>，可以在函数名称后面的小括号中添加一些参数，这些参数被称为<strong>形参</strong>，而在<strong>调用该函数</strong>时，同样也需要传递相应的参数，这些参数被称为<strong>实参</strong>。</p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><strong>形参</strong></td><td><strong>形</strong>式上的<strong>参</strong>数 <strong>函数定义</strong>的时候 传递的参数 当前并不知道是什么</td></tr><tr><td><strong>实参</strong></td><td><strong>实</strong>际上的<strong>参</strong>数 <strong>函数调用</strong>的时候 传递的参数 实参是传递给形参的</td></tr></tbody></table><p><strong>参数的作用</strong> : 在<strong>函数内部</strong>某些值不能固定，我们可以通过参数在<strong>调用函数时传递不同的值</strong>进去</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 带参数的函数声明</span></span>
<span class="line"><span>function 函数名(形参1, 形参2 , 形参3...) { // 可以定义任意多的参数，用逗号分隔</span></span>
<span class="line"><span>  // 函数体</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 带参数的函数调用</span></span>
<span class="line"><span>函数名(实参1, 实参2, 实参3...);</span></span></code></pre></div><p>例如：利用函数求任意两个数的和</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 声明函数</span></span>
<span class="line"><span>function getSum(num1,num2){</span></span>
<span class="line"><span>    console.log(num1+num2)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 调用函数</span></span>
<span class="line"><span>getSum(1,3) //4</span></span>
<span class="line"><span>getSum(6，5) //11</span></span></code></pre></div><ul><li><p>函数调用的时候实参值是传递给形参的</p></li><li><p>形参简单理解为:<strong>不用声明的变量</strong></p></li><li><p>实参和形参的多个参数之间用<code>逗号(,)</code>分隔，</p></li></ul><h4 id="_1-3-2、形参和实参个数不匹配" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>1.3.2、形参和实参个数不匹配 <a class="header-anchor" href="#_1-3-2、形参和实参个数不匹配" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)1.3.2、形参和实参个数不匹配&quot;">​</a></h4><table><thead><tr><th>参数个数</th><th>说明</th></tr></thead><tbody><tr><td>实参个数等于形参个数</td><td>输出正确结果</td></tr><tr><td>实参个数多于形参个数</td><td>只取到形参的个数</td></tr><tr><td>实参个数小于形参个数</td><td>多的形参定义为undefined，结果为NaN</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function sum(num1, num2) {</span></span>
<span class="line"><span>    console.log(num1 + num2);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>sum(100, 200);             // 300，形参和实参个数相等，输出正确结果</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sum(100, 400, 500, 700);   // 500，实参个数多于形参，只取到形参的个数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sum(200);                  // 实参个数少于形参，多的形参定义为undefined，结果为NaN</span></span></code></pre></div><p><strong>注意：在JavaScript中，形参的默认值是undefined</strong></p><h4 id="_1-3-3、小结" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>1.3.3、小结 <a class="header-anchor" href="#_1-3-3、小结" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)1.3.3、小结&quot;">​</a></h4><ul><li>函数可以带参数也可以不带参数</li><li>声明函数的时候，函数名括号里面的是形参，形参的默认值为 undefined</li><li>调用函数的时候，函数名括号里面的是实参</li><li>多个参数中间用逗号分隔</li><li>形参的个数可以和实参个数不匹配，但是结果不可预计，我们尽量要匹配</li></ul><h3 id="_1-4、函数的返回值" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>1.4、函数的返回值 <a class="header-anchor" href="#_1-4、函数的返回值" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)1.4、函数的返回值&quot;">​</a></h3><h4 id="_1-4-1、return语句" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>1.4.1、return语句 <a class="header-anchor" href="#_1-4-1、return语句" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)1.4.1、return语句&quot;">​</a></h4><p>有的时候，我们会希望函数将值返回给调用者，此时通过使用 return 语句就可以实现。</p><p>return 语句的语法格式如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 声明函数</span></span>
<span class="line"><span>function 函数名（）{</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>    return  需要返回的值;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 调用函数</span></span>
<span class="line"><span>函数名();    // 此时调用函数就可以得到函数体内return 后面的值</span></span></code></pre></div><ul><li><p>在使用 return 语句时，函数会停止执行，并返回指定的值</p></li><li><p>如果函数没有 return ，返回的值是 undefined</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 声明函数</span></span>
<span class="line"><span>function sum(){</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>    return  666;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 调用函数</span></span>
<span class="line"><span>sum();      // 此时 sum 的值就等于666，因为 return 语句会把自身后面的值返回给调用者</span></span></code></pre></div><h4 id="_1-4-2、return-终止函数" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>1.4.2、return 终止函数 <a class="header-anchor" href="#_1-4-2、return-终止函数" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)1.4.2、return 终止函数&quot;">​</a></h4><p>return 语句之后的代码不被执行</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function add(num1，num2){</span></span>
<span class="line"><span>    //函数体</span></span>
<span class="line"><span>    return num1 + num2; // 注意：return 后的代码不执行</span></span>
<span class="line"><span>    alert(&#39;我不会被执行，因为前面有 return&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var resNum = add(21,6); // 调用函数，传入两个实参，并通过 resNum 接收函数返回值</span></span>
<span class="line"><span>alert(resNum);          // 27</span></span></code></pre></div><h4 id="_1-4-3、return-的返回值" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>1.4.3、return 的返回值 <a class="header-anchor" href="#_1-4-3、return-的返回值" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)1.4.3、return 的返回值&quot;">​</a></h4><p>return <strong>只能返回一个值</strong>。如果用逗号隔开多个值，<strong>以最后一个为准</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function add(num1，num2){</span></span>
<span class="line"><span>    //函数体</span></span>
<span class="line"><span>    return num1,num2;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var resNum = add(21,6); // 调用函数，传入两个实参，并通过 resNum 接收函数返回值</span></span>
<span class="line"><span>alert(resNum);          // 6</span></span></code></pre></div><h4 id="_1-4-4、小结" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>1.4.4、小结 <a class="header-anchor" href="#_1-4-4、小结" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)1.4.4、小结&quot;">​</a></h4><p>函数都是有返回值的</p><ol><li>如果有 return ，则返回 return 后面的值</li><li>如果没有 return，则返回 undefined</li></ol><h4 id="_1-4-5、区别" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>1.4.5、区别 <a class="header-anchor" href="#_1-4-5、区别" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)1.4.5、区别&quot;">​</a></h4><p>break、continue、return 的区别</p><ul><li><code>break</code> ： 结束当前循环体(如 for、while)</li><li><code>continue</code> ：跳出本次循环，继续执行下次循环(如for、while)</li><li><code>return</code> ：不仅可以退出循环，还能够返回 return 语句中的值，同时还可以结束当前的函数体内的代码</li></ul><h4 id="_1-4-5、练习" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>1.4.5、练习 <a class="header-anchor" href="#_1-4-5、练习" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)1.4.5、练习&quot;">​</a></h4><p><strong>1.利用函数求任意两个数的最大值</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function getMax(num1, num2) {</span></span>
<span class="line"><span>    return num1 &gt; num2 ? num1 : num2;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(getMax(1, 2));</span></span>
<span class="line"><span>console.log(getMax(11, 2));</span></span></code></pre></div><p><strong>2.求数组 [5,2,99,101,67,77] 中的最大数值</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//定义一个获取数组中最大数的函数</span></span>
<span class="line"><span>function getMaxFromArr(numArray){</span></span>
<span class="line"><span>    var maxNum = numArray[0];</span></span>
<span class="line"><span>    for(var i = 0; i &lt; numArray.length;i++){</span></span>
<span class="line"><span>        if(numArray[i]&gt;maxNum){</span></span>
<span class="line"><span>            maxNum = numArray[i];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return maxNum;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var arrNum = [5,2,99,101,67,77];</span></span>
<span class="line"><span>var maxN = getMaxFromArr(arrNum);  //这个实参是个数组</span></span>
<span class="line"><span>alert(&#39;最大值为&#39; + maxN);</span></span></code></pre></div><p><strong>3.创建一个函数，实现两个数之间的加减乘除运算，并将结果返回</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var a = parseFloat(prompt(&#39;请输入第一个数&#39;));</span></span>
<span class="line"><span>var b = parseFloat(prompt(&#39;请输入第二个数&#39;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function count(a,b){</span></span>
<span class="line"><span>    var arr = [a + b, a - b, a * b, a / b];</span></span>
<span class="line"><span>    return arr;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var result = count(a,b);</span></span>
<span class="line"><span>console.log(result)</span></span></code></pre></div><h3 id="_1-5、arguments的使用" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>1.5、arguments的使用 <a class="header-anchor" href="#_1-5、arguments的使用" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)1.5、arguments的使用&quot;">​</a></h3><p>当我们不确定有多少个参数传递的时候，可以用 arguments 来获取。在 JavaScript 中，arguments 实际上它是当前函数的一个内置对象。所有函数都内置了一个 arguments 对象，arguments 对象中存储了传递的所有实参。</p><ul><li><p><strong>arguments</strong>存放的是传递过来的实参</p></li><li><p><strong>arguments展示形式是一个伪数组，因此可以进行遍历。伪数组具有以下特点</strong></p></li></ul><p>①：具有 length 属性</p><p>②：按索引方式储存数据</p><p>③：不具有数组的 push , pop 等方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 函数声明</span></span>
<span class="line"><span>function fn() {</span></span>
<span class="line"><span>    console.log(arguments);  //里面存储了所有传递过来的实参</span></span>
<span class="line"><span>    console.log(arrguments.length); // 3</span></span>
<span class="line"><span>    console.log(arrguments[2]); // 3</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 函数调用</span></span>
<span class="line"><span>fn(1,2,3);</span></span></code></pre></div><p>例如：利用函数求任意个数的最大值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> function maxValue() {</span></span>
<span class="line"><span>    var max = arguments[0];</span></span>
<span class="line"><span>    for (var i = 0; i &lt; arguments.length; i++) {</span></span>
<span class="line"><span>        if (max &lt; arguments[i]) {</span></span>
<span class="line"><span>            max = arguments[i];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return max;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(maxValue(2, 4, 5, 9)); // 9</span></span>
<span class="line"><span>console.log(maxValue(12, 4, 9)); // 12</span></span></code></pre></div><h3 id="、函数调用另外一个函数" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>、函数调用另外一个函数 <a class="header-anchor" href="#、函数调用另外一个函数" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)、函数调用另外一个函数&quot;">​</a></h3><p>因为每个函数都是独立的代码块，用于完成特殊任务，因此经常会用到函数相互调用的情况。具体演示在下面的函数练习中会有。</p><h3 id="_1-6、函数练习" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>1.6、函数练习 <a class="header-anchor" href="#_1-6、函数练习" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)1.6、函数练习&quot;">​</a></h3><p><strong>1.利用函数封装方式，翻转任意一个数组</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function reverse(arr) {</span></span>
<span class="line"><span>    var newArr = [];</span></span>
<span class="line"><span>    for (var i = arr.length - 1; i &gt;= 0; i--) {</span></span>
<span class="line"><span>        newArr[newArr.length] = arr[i];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return newArr;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var arr1 = reverse([1, 3, 4, 6, 9]);</span></span>
<span class="line"><span>console.log(arr1);</span></span></code></pre></div><p><strong>2.利用函数封装方式，对数组排序 – 冒泡排序</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function sort(arr) {</span></span>
<span class="line"><span>    for (var i = 0; i &lt; arr.length - 1; i++) {</span></span>
<span class="line"><span>        for (var j = 0; j &lt; arr.length - i - 1; j++) {</span></span>
<span class="line"><span>            if (arr[j] &gt; arr[j+1]) { </span></span>
<span class="line"><span>	            var temp = arr[j];</span></span>
<span class="line"><span>	            arr[j] = arr[j + 1]; </span></span>
<span class="line"><span>	            arr[j + 1] = temp;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return arr;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>3.输入一个年份，判断是否是闰年（闰年：能被4整除并且不能被100整数，或者能被400整除）</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function isRun(year) {</span></span>
<span class="line"><span>     var flag = false;</span></span>
<span class="line"><span>     if (year % 4 === 0 &amp;&amp; year % 100 !== 0 || year % 400 === 0) {</span></span>
<span class="line"><span>        flag = true;</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>    return flag;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(isRun(2010));</span></span>
<span class="line"><span>console.log(isRun(2012));</span></span></code></pre></div><p><strong>4.用户输入年份，输出当前年份2月份的天数，如果是闰年，则2月份是 29天， 如果是平年，则2月份是 28天</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function backDay() {</span></span>
<span class="line"><span>    var year = prompt(&#39;请您输入年份:&#39;);</span></span>
<span class="line"><span>    if (isRun(year)) { //调用函数需要加小括号</span></span>
<span class="line"><span>        alert(&#39;你输入的&#39; + year + &#39;是闰年，2月份有29天&#39;);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        alert(&#39;您输入的&#39; + year + &#39;不是闰年，2月份有28天&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>backDay();</span></span>
<span class="line"><span>//判断是否是闰年的函数</span></span>
<span class="line"><span>function isRun(year) {</span></span>
<span class="line"><span>    var flag = false;</span></span>
<span class="line"><span>    if (year % 4 === 0 &amp;&amp; year % 100 !== 0 || year % 400 === 0) {</span></span>
<span class="line"><span>        flag = true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return flag;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_1-7、函数的两种声明方式" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>1.7、函数的两种声明方式 <a class="header-anchor" href="#_1-7、函数的两种声明方式" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)1.7、函数的两种声明方式&quot;">​</a></h3><h4 id="_1-7-1、自定义函数方式-命名函数" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>1.7.1、自定义函数方式(命名函数) <a class="header-anchor" href="#_1-7-1、自定义函数方式-命名函数" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)1.7.1、自定义函数方式(命名函数)&quot;">​</a></h4><p>利用函数关键字 function 自定义函数方式。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 声明定义方式</span></span>
<span class="line"><span>function fn() {...}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 调用  </span></span>
<span class="line"><span>fn();</span></span></code></pre></div><ol><li><p><strong>因为有名字，所以也被称为命名函数</strong></p></li><li><p><strong>调用函数的代码既可以放到声明函数的前面，也可以放在声明函数的后面</strong></p></li></ol><h4 id="_1-7-2、函数表达式方式-匿名函数" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>1.7.2、函数表达式方式(匿名函数) <a class="header-anchor" href="#_1-7-2、函数表达式方式-匿名函数" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)1.7.2、函数表达式方式(匿名函数)&quot;">​</a></h4><p>利用函数表达式方式的写法如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 这是函数表达式写法，匿名函数后面跟分号结束</span></span>
<span class="line"><span>var fn = function(){...};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 调用的方式，函数调用必须写到函数体下面</span></span>
<span class="line"><span>fn();</span></span></code></pre></div><ul><li><p>因为函数没有名字，所以也称为<strong>匿名函数</strong></p></li><li><p>这个fn 里面存储的是一个函数</p></li><li><p><strong>函数调用的代码必须写到函数体后面</strong></p></li></ul><h2 id="作用域" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>作用域 <a class="header-anchor" href="#作用域" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)作用域&quot;">​</a></h2><p>通常来说，一段程序代码中所用到的名字并不总是有效和可用的，而限定这个名字的<strong>可用性的代码范围</strong>就是这个名字的<strong>作用域</strong>。作用域的使用提高了程序逻辑的局部性，增强了程序的可靠性，减少了名字冲突。</p><p>JavaScript (ES6前) 中的作用域有两种：</p><ul><li>全局作用域</li><li>局部作用域(函数作用域)</li></ul><h3 id="_2-1、全局作用域" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>2.1、全局作用域 <a class="header-anchor" href="#_2-1、全局作用域" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)2.1、全局作用域&quot;">​</a></h3><p>作用于所有代码执行的环境(整个 script 标签内部)或者一个独立的 js 文件</p><h3 id="_2-2、局部-函数-作用域" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>2.2、局部（函数）作用域 <a class="header-anchor" href="#_2-2、局部-函数-作用域" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)2.2、局部（函数）作用域&quot;">​</a></h3><p>作用于函数内的代码环境，就是局部作用域。 因为跟函数有关系，所以也称为函数作用域</p><h3 id="_2-3、js-没有块级作用域" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>2.3、JS 没有块级作用域 <a class="header-anchor" href="#_2-3、js-没有块级作用域" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)2.3、JS 没有块级作用域&quot;">​</a></h3><ul><li>块作用域由 <code>{}</code> 包括</li><li>在其他编程语言中（如 java、c#等），在 if 语句、循环语句中创建的变量，仅仅只能在本 if 语句、本循环语句中使用，如下面的Java代码：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>if(true){</span></span>
<span class="line"><span>    int num = 123;</span></span>
<span class="line"><span>    System.out.println(num);	// 123</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>System.out.println(num);		// 报错</span></span></code></pre></div><p>JS 中没有块级作用域(在ES6之前)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>if(true){</span></span>
<span class="line"><span>    int num = 123;</span></span>
<span class="line"><span>    System.out.println(num);	// 123</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>System.out.println(num);		// 123</span></span></code></pre></div><h2 id="变量的作用域" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>变量的作用域 <a class="header-anchor" href="#变量的作用域" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)变量的作用域&quot;">​</a></h2><p>在JavaScript中，根据作用域的不同，变量可以分为两种：</p><ul><li>全局变量</li><li>局部变量</li></ul><h3 id="_3-1、全局变量" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>3.1、全局变量 <a class="header-anchor" href="#_3-1、全局变量" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)3.1、全局变量&quot;">​</a></h3><p>在全局作用域下声明的变量叫做全局变量（<strong>在函数外部定义的变量</strong>）</p><ul><li><p>全局变量在代码的任何位置都可以使用</p></li><li><p>在全局作用域下 var 声明的变量 是全局变量</p></li><li><p>特殊情况下，在函数内不使用 var 声明的变量也是全局变量（不建议使用）</p></li></ul><h3 id="_3-2、局部变量" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>3.2、局部变量 <a class="header-anchor" href="#_3-2、局部变量" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)3.2、局部变量&quot;">​</a></h3><p>在局部作用域下声明的变量叫做局部变量（<strong>在函数内部定义的变量</strong>）</p><ul><li><p>局部变量只能在该函数内部使用</p></li><li><p>在函数内部 var 声明的变量是局部变量</p></li><li><p>函数的<strong>形参</strong>实际上就是<strong>局部变量</strong></p></li></ul><h3 id="_3-3、区别" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>3.3、区别 <a class="header-anchor" href="#_3-3、区别" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)3.3、区别&quot;">​</a></h3><ul><li><p>全局变量：在任何一个地方都可以使用，只有在浏览器关闭时才会被销毁，因此比较占内存</p></li><li><p>局部变量：只在函数内部使用，当其所在的代码块被执行时，会被初始化；当代码块运行结束后，就会被销毁，因此更节省内存空间</p></li></ul><h2 id="作用域链" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>作用域链 <a class="header-anchor" href="#作用域链" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)作用域链&quot;">​</a></h2><ol><li><p>只要是代码，就至少有一个作用域</p></li><li><p>写在函数内部的叫局部作用域</p></li><li><p>如果函数中还有函数，那么在这个作用域中就又可以诞生一个作用域</p></li><li><p>根据在内部函数可以访问外部函数变量的这种机制，用链式查找决定哪些数据能被内部函数访问，就称作作用域链</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 作用域链: 内部函数访问外部函数的变量，采取的是链式查找的方式来决定取哪个值，这种结构我们称为作用域链表</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var num = 10;</span></span>
<span class="line"><span>funtion fn() { //外部函数</span></span>
<span class="line"><span>    var num = 20;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    function fun() { //内部函数</span></span>
<span class="line"><span>        console.log(num);  // 20 ,一级一级访问</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>作用域链：采取<strong>就近原则</strong>的方式来查找变量最终的值。</li></ul><h2 id="预解析" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>预解析 <a class="header-anchor" href="#预解析" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)预解析&quot;">​</a></h2><p>首先来看几段代码和结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>console.log(num);  // 结果是多少？</span></span>
<span class="line"><span>//会报错 num is undefined</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>console.log(num);  // 结果是多少？</span></span>
<span class="line"><span>var num = 10;   </span></span>
<span class="line"><span>// undefined</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 命名函数(自定义函数方式):若我们把函数调用放在函数声明上面</span></span>
<span class="line"><span>fn();				//11</span></span>
<span class="line"><span>function fn() {</span></span>
<span class="line"><span>    console.log(&#39;11&#39;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 匿名函数(函数表达式方式):若我们把函数调用放在函数声明上面</span></span>
<span class="line"><span>fn();</span></span>
<span class="line"><span>var  fn = function() {</span></span>
<span class="line"><span>    console.log(&#39;22&#39;); // 报错</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//相当于执行了以下代码</span></span>
<span class="line"><span>var fn;</span></span>
<span class="line"><span>fn();      //fn没赋值，没这个，报错</span></span>
<span class="line"><span>var  fn = function() {</span></span>
<span class="line"><span>    console.log(&#39;22&#39;); //报错</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>JavaScript 代码是由浏览器中的 JavaScript 解析器来执行的。JavaScript 解析器在运行 JavaScript 代码的时候分为两步：<strong>预解析和代码执行。</strong></p><ul><li><p><strong>预解析</strong>：js引擎会把js里面所有的 <strong>var</strong> 还有 <strong>function</strong> 提升到当前作用域的最前面</p></li><li><p><strong>代码执行</strong>：从上到下执行JS语句</p></li></ul><p>预解析只会发生在通过 var 定义的变量和 function 上。学习预解析能够让我们知道<strong>为什么在变量声明之前访问变量的值是 undefined</strong>，<strong>为什么在函数声明之前就可以调用函数。</strong></p><h3 id="_5-1、变量预解析-变量提升" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>5.1、变量预解析(变量提升) <a class="header-anchor" href="#_5-1、变量预解析-变量提升" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)5.1、变量预解析(变量提升)&quot;">​</a></h3><p>变量预解析也叫做变量提升、函数提升</p><p>变量提升: 变量的声明会被提升到<strong>当前作用域</strong>的最上面，变量的赋值不会提升</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>console.log(num);  // 结果是多少？</span></span>
<span class="line"><span>var num = 10;   </span></span>
<span class="line"><span>// undefined</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//相当于执行了以下代码</span></span>
<span class="line"><span>var num;		// 变量声明提升到当前作用域最上面</span></span>
<span class="line"><span>console.log(num);</span></span>
<span class="line"><span>num = 10;		// 变量的赋值不会提升</span></span></code></pre></div><h3 id="_5-2、函数预解析-函数提升" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>5.2、函数预解析(函数提升) <a class="header-anchor" href="#_5-2、函数预解析-函数提升" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)5.2、函数预解析(函数提升)&quot;">​</a></h3><p>函数提升： 函数的声明会被提升到<strong>当前作用域</strong>的最上面，但是不会调用函数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>fn();				//11</span></span>
<span class="line"><span>function fn() {</span></span>
<span class="line"><span>    console.log(&#39;11&#39;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_5-3、解决函数表达式声明调用问题" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>5.3、解决函数表达式声明调用问题 <a class="header-anchor" href="#_5-3、解决函数表达式声明调用问题" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)5.3、解决函数表达式声明调用问题&quot;">​</a></h3><p>对于函数表达式声明调用需要记住：<strong>函数表达式调用必须写在函数声明的下面</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 匿名函数(函数表达式方式):若我们把函数调用放在函数声明上面</span></span>
<span class="line"><span>fn();</span></span>
<span class="line"><span>var  fn = function() {</span></span>
<span class="line"><span>    console.log(&#39;22&#39;); // 报错</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//相当于执行了以下代码</span></span>
<span class="line"><span>var fn;</span></span>
<span class="line"><span>fn();      //fn没赋值，没这个，报错</span></span>
<span class="line"><span>var  fn = function() {</span></span>
<span class="line"><span>    console.log(&#39;22&#39;); //报错</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_5-4、预解析练习" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250991" target="_blank" rel="noreferrer"></a>5.4、预解析练习 <a class="header-anchor" href="#_5-4、预解析练习" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250991)5.4、预解析练习&quot;">​</a></h3><p>预解析部分十分重要，可以通过下面4个练习来理解。<br> Pink老师的视频讲解预解析：<a href="https://www.bilibili.com/video/BV1Sy4y1C7ha?p=143" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1Sy4y1C7ha?p=143</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 练习1</span></span>
<span class="line"><span>var num = 10;</span></span>
<span class="line"><span>fun();</span></span>
<span class="line"><span>function fun() {</span></span>
<span class="line"><span>    console.log(num);	//undefined</span></span>
<span class="line"><span>    var num = 20;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 最终结果是 undefined</span></span></code></pre></div><p>上述代码相当于执行了以下操作</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var num;</span></span>
<span class="line"><span>function fun() {</span></span>
<span class="line"><span>    var num;</span></span>
<span class="line"><span>    console.log(num);</span></span>
<span class="line"><span>    num = 20;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>num = 10;</span></span>
<span class="line"><span>fun();</span></span></code></pre></div><hr><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 练习2</span></span>
<span class="line"><span>var num = 10;</span></span>
<span class="line"><span>function fn(){</span></span>
<span class="line"><span>    console.log(num);		//undefined</span></span>
<span class="line"><span>    var num = 20;</span></span>
<span class="line"><span>    console.log(num);		//20</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fn();</span></span>
<span class="line"><span>// 最终结果是 undefined 20</span></span></code></pre></div><p>上述代码相当于执行了以下操作</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var num;</span></span>
<span class="line"><span>function fn(){</span></span>
<span class="line"><span>    var num;</span></span>
<span class="line"><span>    console.log(num);</span></span>
<span class="line"><span>    num = 20;</span></span>
<span class="line"><span>    console.log(num);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>num = 10;</span></span>
<span class="line"><span>fn();</span></span></code></pre></div><hr><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 练习3</span></span>
<span class="line"><span>var a = 18;</span></span>
<span class="line"><span>f1();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function f1() {</span></span>
<span class="line"><span>    var b = 9;</span></span>
<span class="line"><span>    console.log(a);</span></span>
<span class="line"><span>    console.log(b);</span></span>
<span class="line"><span>    var a = &#39;123&#39;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上述代码相当于执行了以下操作</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var a;</span></span>
<span class="line"><span>function f1() {</span></span>
<span class="line"><span>    var b;</span></span>
<span class="line"><span>    var a</span></span>
<span class="line"><span>    b = 9;</span></span>
<span class="line"><span>    console.log(a);	//undefined</span></span>
<span class="line"><span>    console.log(b);	//9</span></span>
<span class="line"><span>    a = &#39;123&#39;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>a = 18;</span></span>
<span class="line"><span>f1();</span></span></code></pre></div><hr><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 练习4</span></span>
<span class="line"><span>f1();</span></span>
<span class="line"><span>console.log(c);</span></span>
<span class="line"><span>console.log(b);</span></span>
<span class="line"><span>console.log(a);</span></span>
<span class="line"><span>function f1() {</span></span>
<span class="line"><span>    var a = b = c = 9;</span></span>
<span class="line"><span>    // 相当于 var a = 9; b = 9;c = 9;  b和c的前面没有var声明,当全局变量看</span></span>
<span class="line"><span>    // 集体声明 var a = 9,b = 9,c = 9;</span></span>
<span class="line"><span>    console.log(a);</span></span>
<span class="line"><span>    console.log(b);</span></span>
<span class="line"><span>    console.log(c);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上述代码相当于执行了以下操作</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function f1() {</span></span>
<span class="line"><span>    var a;</span></span>
<span class="line"><span>    a = b = c = 9;</span></span>
<span class="line"><span>    console.log(a);	//9</span></span>
<span class="line"><span>    console.log(b);	//9</span></span>
<span class="line"><span>    console.log(c);	//9</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>f1();</span></span>
<span class="line"><span>console.log(c);	//9</span></span>
<span class="line"><span>console.log(b);	//9</span></span>
<span class="line"><span>console.log(a);	//报错 a是局部变量</span></span></code></pre></div><p><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>1、对象</p><p>在 JavaScript 中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象，例如字符串、数值、数组、函数等。</p><p>对象是由属性和方法组成的：</p><ul><li>属性：事物的<strong>特征，<strong>在对象中用</strong>属性</strong>来表示（常用名词）</li><li>方法：事物的<strong>行为，<strong>在对象中用</strong>方法</strong>来表示（常用动词）</li></ul><h3 id="_1-1、创建对象" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>1.1、创建对象 <a class="header-anchor" href="#_1-1、创建对象" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)1.1、创建对象&quot;">​</a></h3><p>在 JavaScript 中，现阶段我们可以采用三种方式创建对象（object）：</p><ul><li>利用字面量创建对象</li><li>利用 new Object创建对象</li><li>利用构造函数创建对象</li></ul><h4 id="_1利用字面量创建对象" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>①利用字面量创建对象 <a class="header-anchor" href="#_1利用字面量创建对象" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)①利用字面量创建对象&quot;">​</a></h4><p>对象字面量：就是花括号 <code>{ }</code> 里面包含了表达这个具体事物（对象）的属性和方法</p><p><code>{ }</code> 里面采取键值对的形式表示</p><ul><li>键：相当于属性名</li><li>值：相当于属性值，可以是任意类型的值（数字类型、字符串类型、布尔类型，函数类型等）</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var star = {</span></span>
<span class="line"><span>    name : &#39;pink&#39;,</span></span>
<span class="line"><span>    age : 18,</span></span>
<span class="line"><span>    sex : &#39;男&#39;,</span></span>
<span class="line"><span>    sayHi : function(){</span></span>
<span class="line"><span>        alert(&#39;大家好啊~&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>// 多个属性或者方法中间用逗号隔开</span></span>
<span class="line"><span>// 方法冒号后面跟的是一个匿名函数</span></span></code></pre></div><h5 id="对象的调用" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>对象的调用 <a class="header-anchor" href="#对象的调用" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)对象的调用&quot;">​</a></h5><ul><li><p>对象里面的属性调用 : 对象.属性名 ，这个小点 . 就理解为“ <strong>的</strong> ”</p></li><li><p>对象里面属性的另一种调用方式 : 对象[‘属性名’]，注意方括号里面的属性必须<strong>加引号</strong>，我们后面会用</p></li><li><p>对象里面的方法调用：对象.方法名() ，注意这个方法名字后面<strong>一定加括号</strong></p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>console.log(star.name)     // 调用名字属性</span></span>
<span class="line"><span>console.log(star[&#39;name&#39;])  // 调用名字属性</span></span>
<span class="line"><span>star.sayHi();              // 调用 sayHi 方法,注意，一定不要忘记带后面的括号</span></span></code></pre></div><h5 id="变量、属性、函数、方法总结" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>变量、属性、函数、方法总结 <a class="header-anchor" href="#变量、属性、函数、方法总结" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)变量、属性、函数、方法总结&quot;">​</a></h5><ul><li>变量：单独声明赋值，单独存在</li><li>属性：对象里面的变量称为属性，不需要声明，用来描述该对象的特征</li><li>函数：单独存在的，通过==“函数名()”==的方式就可以调用</li><li>方法：对象里面的函数称为方法，方法不需要声明，使用==“对象.方法名()”==的方式就可以调用，方法用来描述该对象的行为和功能。</li></ul><h4 id="_2利用-new-object-创建对象" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>②利用 new Object 创建对象 <a class="header-anchor" href="#_2利用-new-object-创建对象" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)②利用 new Object 创建对象&quot;">​</a></h4><p>跟之前的 <code>new Array()</code> 原理一致：<code>var 对象名 = new Object();</code></p><p>使用的格式：对象.属性 = 值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var obj = new Object(); //创建了一个空的对象</span></span>
<span class="line"><span>obj.name = &#39;张三丰&#39;;</span></span>
<span class="line"><span>obj.age = 18;</span></span>
<span class="line"><span>obj.sex = &#39;男&#39;;</span></span>
<span class="line"><span>obj.sayHi = function() {</span></span>
<span class="line"><span>    console.log(&#39;hi~&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//1.我们是利用等号赋值的方法添加对象</span></span>
<span class="line"><span>//2.每个属性和方法之间用分号结束</span></span>
<span class="line"><span>console.log(obj.name);</span></span>
<span class="line"><span>console.log(obj[&#39;sex&#39;]);</span></span>
<span class="line"><span>obj.sayHi();</span></span></code></pre></div><h4 id="_3利用构造函数创建对象" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>③利用构造函数创建对象 <a class="header-anchor" href="#_3利用构造函数创建对象" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)③利用构造函数创建对象&quot;">​</a></h4><p><strong>构造函数</strong> ：是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与 new 运算符一起使用。我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。</p><p>在 js 中，使用构造函数要时要注意以下两点：</p><ul><li>构造函数用于创建某一类对象，其首字母要大写</li><li>构造函数要和 new 一起使用才有意义</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//构造函数的语法格式</span></span>
<span class="line"><span>function 构造函数名() {</span></span>
<span class="line"><span>    this.属性 = 值;</span></span>
<span class="line"><span>    this.方法 = function() {}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>new 构造函数名();</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//1. 构造函数名字首字母要大写</span></span>
<span class="line"><span>//2. 构造函数不需要return就可以返回结果</span></span>
<span class="line"><span>//3. 调用构造函数必须使用 new</span></span>
<span class="line"><span>//4. 我们只要new Star() 调用函数就创建了一个对象</span></span>
<span class="line"><span>//5. 我们的属性和方法前面必须加this</span></span>
<span class="line"><span>function Star(uname,age,sex) {</span></span>
<span class="line"><span>    this.name = uname;</span></span>
<span class="line"><span>    this.age = age;</span></span>
<span class="line"><span>    this.sex = sex;</span></span>
<span class="line"><span>    this.sing = function(sang){</span></span>
<span class="line"><span>        console.log(sang);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var ldh = new Star(&#39;刘德华&#39;,18,&#39;男&#39;);</span></span>
<span class="line"><span>console.log(typeof ldh) // object对象，调用函数返回的是对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(ldh.name);</span></span>
<span class="line"><span>console.log(ldh[&#39;sex&#39;]);</span></span>
<span class="line"><span>ldh.sing(&#39;冰雨&#39;);</span></span>
<span class="line"><span>//把冰雨传给了sang</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var zxy = new Star(&#39;张学友&#39;,19,&#39;男&#39;);</span></span></code></pre></div><ul><li>构造函数名字首字母要大写</li><li>函数内的属性和方法前面需要添加 this ，表示当前对象的属性和方法。</li><li>构造函数中不需要 return 返回结果。</li><li>当我们创建对象的时候，必须用 new 来调用构造函数。</li></ul><h5 id="构造函数和对象" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>构造函数和对象 <a class="header-anchor" href="#构造函数和对象" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)构造函数和对象&quot;">​</a></h5><ul><li>构造函数，如 Stars()，抽象了对象的公共部分，封装到了函数里面，它泛指某一大类（class）</li><li>创建对象，如 new Stars()，特指某一个，通过 new 关键字创建对象的过程我们也称为对象实例化</li></ul><p><img src="https://img-blog.csdnimg.cn/3745ecf7ca3c42fbbd59ee2d22e91802.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><h5 id="new关键字" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>new关键字 <a class="header-anchor" href="#new关键字" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)new关键字&quot;">​</a></h5><p>new 在执行时会做四件事:</p><ol><li>在内存中创建一个新的空对象。</li><li>让 this 指向这个新的对象。</li><li>执行构造函数里面的代码，给这个新对象添加属性和方法</li><li>返回这个新对象（所以构造函数里面不需要return）</li></ol><h3 id="_1-2、遍历对象的属性" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>1.2、遍历对象的属性 <a class="header-anchor" href="#_1-2、遍历对象的属性" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)1.2、遍历对象的属性&quot;">​</a></h3><ul><li><code>for...in</code> 语句用于对数组或者对象的属性进行循环操作</li></ul><p>语法如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>for(变量 in 对象名字){</span></span>
<span class="line"><span>    // 在此执行代码</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>语法中的变量是自定义的，它需要符合命名规范，通常我们会将这个变量写为 k 或者 key。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>for(var k in obj) {</span></span>
<span class="line"><span>    console.log(k);		//这里的 k 是属性名</span></span>
<span class="line"><span>    console.log(obj[k]);//这里的 obj[k] 是属性值</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var obj = {</span></span>
<span class="line"><span>    name: &#39;秦sir&#39;,</span></span>
<span class="line"><span>    age: 18,</span></span>
<span class="line"><span>    sex: &#39;男&#39;,</span></span>
<span class="line"><span>    fn:function() {};</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>console.log(obj.name);</span></span>
<span class="line"><span>console.log(obj.age);</span></span>
<span class="line"><span>console.log(obj.sex);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//for in 遍历我们的对象</span></span>
<span class="line"><span>//for (变量 in 对象){}</span></span>
<span class="line"><span>//我们使用for in 里面的变量 我们喜欢写k 或者key</span></span>
<span class="line"><span>for(var k in obj){</span></span>
<span class="line"><span>    console.log(k); // k 变量 输出得到的是属性名</span></span>
<span class="line"><span>    console.log(obj[k]); // obj[k] 得到的是属性值</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="内置对象" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>内置对象 <a class="header-anchor" href="#内置对象" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)内置对象&quot;">​</a></h2><ul><li><p>JavaScript 中的对象分为3种：自定义对象 、内置对象、 浏览器对象</p></li><li><p>内置对象就是指 JS 语言自带的一些对象，这些对象供开发者使用，并提供了一些常用的或是最基本而必要的功能</p></li><li><p>JavaScript 提供了多个内置对象：Math、 Date 、Array、String等</p></li></ul><h3 id="_2-1、查文档" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>2.1、查文档 <a class="header-anchor" href="#_2-1、查文档" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)2.1、查文档&quot;">​</a></h3><p>学习一个内置对象的使用，只要学会其常用成员的使用即可，我们可以通过查文档学习，可以通过MDN/W3C来查询</p><p>MDN: <a href="https://developer.mozilla.org/zh-CN/" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/</a></p><h4 id="_2-1-1、如何学习对象中的方法" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>2.1.1、如何学习对象中的方法 <a class="header-anchor" href="#_2-1-1、如何学习对象中的方法" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)2.1.1、如何学习对象中的方法&quot;">​</a></h4><ol><li>查阅该方法的功能</li><li>查看里面参数的意义和类型</li><li>查看返回值的意义和类型</li><li>通过 demo 进行测试</li></ol><h2 id="math对象" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>Math对象 <a class="header-anchor" href="#math对象" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)Math对象&quot;">​</a></h2><p>Math 对象不是构造函数，它具有数学常数和函数的属性和方法。跟数学相关的运算（求绝对值，取整、最大值等）可以使用 Math 中的成员。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// Math数学对象，不是一个构造函数，所以我们不需要new 来调用，而是直接使用里面的属性和方法即可</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Math.PI		 			// 圆周率</span></span>
<span class="line"><span>Math.floor() 	 		// 向下取整</span></span>
<span class="line"><span>Math.ceil()             // 向上取整</span></span>
<span class="line"><span>Math.round()            // 四舍五入版 就近取整   注意 -3.5   结果是  -3 </span></span>
<span class="line"><span>Math.abs()		 		// 绝对值</span></span>
<span class="line"><span>Math.max()/Math.min()	// 求最大和最小值</span></span></code></pre></div><p><strong>注意</strong>：上面的方法必须带括号</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>console.log(Math.PI);  </span></span>
<span class="line"><span>console.log(Math.max(1,99,3)); // 99</span></span></code></pre></div><p><strong>练习：封装自己的数学对象</strong></p><p>利用对象封装自己的数学对象，里面有PI 最大值 和最小值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var myMath = {</span></span>
<span class="line"><span>    PI: 3.141592653,</span></span>
<span class="line"><span>    max: function() {</span></span>
<span class="line"><span>        var max = arguments[0];</span></span>
<span class="line"><span>        for (var i = 1; i &lt; arguments.length; i++) {</span></span>
<span class="line"><span>            if (arguments[i] &gt; max) {</span></span>
<span class="line"><span>                max = arguments[i];</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return max;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    min: function() {</span></span>
<span class="line"><span>        var min = arguments[0];</span></span>
<span class="line"><span>        for (var i = 1; i &lt; arguments.length; i++) {</span></span>
<span class="line"><span>            if (arguments[i] &lt; min) {</span></span>
<span class="line"><span>                min = arguments[i];</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return min;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(myMath.PI);</span></span>
<span class="line"><span>console.log(myMath.max(1, 5, 9));</span></span>
<span class="line"><span>console.log(myMath.min(1, 5, 9));</span></span></code></pre></div><h3 id="_3-math绝对值和三个取整方法" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>3.Math绝对值和三个取整方法 <a class="header-anchor" href="#_3-math绝对值和三个取整方法" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)3.Math绝对值和三个取整方法&quot;">​</a></h3><ul><li><code>Math.abs()</code> 取绝对值</li><li>三个取整方法： <ul><li><code>Math.floor()</code> : 向下取整</li><li><code>Math.ceil()</code> : 向上取整</li><li><code>Matg.round()</code> : 四舍五入，其他数字都是四舍五入，但是5特殊，它往大了取</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//1.绝对值方法</span></span>
<span class="line"><span>console.log(Math.abs(1));  // 1</span></span>
<span class="line"><span>console.log(Math.abs(-1)); // 1</span></span>
<span class="line"><span>console.log(Math.abs(&#39;-1&#39;)); // 1 隐式转换，会把字符串 -1 转换为数字型</span></span>
<span class="line"><span>//2.三个取整方法</span></span>
<span class="line"><span>console.log(Math.floor(1.1)); // 1 向下取整，向最小的取值 floor-地板</span></span>
<span class="line"><span>console.log(Math.floor(1.9)); //1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(Math.ceil(1.1)); //2 向上取整，向最大的取值 ceil-天花板</span></span>
<span class="line"><span>console.log(Math.ceil(1.9)); //2 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>//四舍五入 其他数字都是四舍五入，但是5特殊，它往大了取</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(Math.round(1.1)); //1 四舍五入</span></span>
<span class="line"><span>console.log(Math.round(1.5)); //2</span></span>
<span class="line"><span>console.log(Math.round(1.9)); //2</span></span>
<span class="line"><span>console.log(Math.round(-1.1)); // -1</span></span>
<span class="line"><span>console.log(Math.round(-1.5)); // -1</span></span></code></pre></div><h3 id="_4-随机数方法random" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>4.随机数方法random() <a class="header-anchor" href="#_4-随机数方法random" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)4.随机数方法random()&quot;">​</a></h3><ul><li>random() 方法可以随机返回一个小数，其取值范围是 [0，1)，左闭右开 0 &lt;= x &lt; 1</li><li>得到一个两数之间的随机整数，包括第一个数，不包括第二个数</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 得到两个数之间的随机整数，并且包含这两个整数</span></span>
<span class="line"><span>function getRandom(min,max) {</span></span>
<span class="line"><span>    return Math.floor(Math.random() * (max - min + 1)) + min;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(getRandom(1,10));</span></span></code></pre></div><p><strong>1.随机点名</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var arr = [&#39;张三&#39;, &#39;李四&#39;,&#39;王五&#39;,&#39;秦六&#39;]；</span></span>
<span class="line"><span>console.log(arr[getRandom(0,arr.length - 1)]);</span></span></code></pre></div><p><strong>2.猜数字游戏</strong></p><p><img src="https://img-blog.csdnimg.cn/c1bd0e00171448ab8ec5af0763dd9cf2.png#pic_center" alt="在这里插入图片描述"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function getRandom(min,max) {</span></span>
<span class="line"><span>    return Math.floor(Math.random() * (max - min + 1)) + min;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var random = getRandom(1,10);</span></span>
<span class="line"><span>while(true) { //死循环 ，需要退出循环条件</span></span>
<span class="line"><span>     var num = prompt(&#39;请输入1~10之间的一个整数:&#39;);</span></span>
<span class="line"><span>     if(num &gt; random) {</span></span>
<span class="line"><span>         alert(&#39;你猜大了&#39;);</span></span>
<span class="line"><span>     }else if (num &lt; random) {</span></span>
<span class="line"><span>         alert(&#39;你猜小了&#39;);</span></span>
<span class="line"><span>     }else {</span></span>
<span class="line"><span>         alert(&#39;你猜中了&#39;);</span></span>
<span class="line"><span>         break; //退出整个循环</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="data-日期对象" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>Data()日期对象 <a class="header-anchor" href="#data-日期对象" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)Data()日期对象&quot;">​</a></h2><ul><li><p>Date 对象和 Math 对象不一样，他是一个构造函数，所以我们需要实例化后才能使用</p></li><li><p>Date 实例用来处理日期和时间</p></li></ul><h3 id="_4-1、date-方法的使用" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>4.1、Date()方法的使用 <a class="header-anchor" href="#_4-1、date-方法的使用" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)4.1、Date()方法的使用&quot;">​</a></h3><h4 id="_4-1-1、获取当前时间必须实例化" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>4.1.1、获取当前时间必须实例化 <a class="header-anchor" href="#_4-1-1、获取当前时间必须实例化" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)4.1.1、获取当前时间必须实例化&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var now = new Date();</span></span>
<span class="line"><span>console.log(now);</span></span></code></pre></div><h4 id="_4-1-2、date-构造函数的参数" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>4.1.2、Date()构造函数的参数 <a class="header-anchor" href="#_4-1-2、date-构造函数的参数" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)4.1.2、Date()构造函数的参数&quot;">​</a></h4><p>如果括号里面有时间，就返回参数里面的时间。例如日期格式字符串为 <code>‘2019-5-1’</code>，可以写成<code>new Date(&#39;2019-5-1&#39;)</code> 或者 <code>new Date(&#39;2019/5/1&#39;)</code></p><ul><li>如果Date()不写参数，就返回当前时间</li><li>如果Date()里面写参数，就返回括号里面输入的时间</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 1.如果没有参数，返回当前系统的当前时间</span></span>
<span class="line"><span>var now = new Date();</span></span>
<span class="line"><span>console.log(now);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2.参数常用的写法 数字型 2019,10,1  字符串型 &#39;2019-10-1 8:8:8&#39; 时分秒</span></span>
<span class="line"><span>// 如果Date()里面写参数，就返回括号里面输入的时间 </span></span>
<span class="line"><span>var data = new Date(2019,10,1);</span></span>
<span class="line"><span>console.log(data);  // 返回的是11月不是10月</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var data2 = new Date(&#39;2019-10-1 8:8:8&#39;);</span></span>
<span class="line"><span>console.log(data2);</span></span></code></pre></div><h3 id="_4-2、日期格式化" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>4.2、日期格式化 <a class="header-anchor" href="#_4-2、日期格式化" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)4.2、日期格式化&quot;">​</a></h3><p>我们想要 2019-8-8 8:8:8 格式的日期，要怎么办？</p><p>需要获取日期指定的部分，所以我们要手动的得到这种格式</p><table><thead><tr><th>方法名</th><th>说明</th><th>代码</th></tr></thead><tbody><tr><td>getFullYear()</td><td>获取当年</td><td>dObj.getFullYear()</td></tr><tr><td>getMonth()</td><td>获取当月(0-11)</td><td>dObj.getMonth()</td></tr><tr><td>getDate()</td><td>获取当天日期</td><td>dObj.getDate()</td></tr><tr><td>getDay()</td><td>获取星期几(周日0到周六6)</td><td>dObj.getDay()</td></tr><tr><td>getHours()</td><td>获取当前小时</td><td>dObj.getHours()</td></tr><tr><td>getMinutes()</td><td>获取当前小时</td><td>dObj.getMinutes()</td></tr><tr><td>getSeconds()</td><td>获取当前秒钟</td><td>dObj.gerSeconds()</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var date = new Date();</span></span>
<span class="line"><span>console.log(date.getFullYear()); // 返回当前日期的年 2019</span></span>
<span class="line"><span>console.log(date.getMonth() + 1);  //返回的月份小一个月 记得月份 +1</span></span>
<span class="line"><span>console.log(date.getDate); //返回的是几号</span></span>
<span class="line"><span>console.log(date.getDay());  //周一返回1 周6返回六 周日返回0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 写一个 2019年 5月 1日 星期三</span></span>
<span class="line"><span>var date = new Date(); </span></span>
<span class="line"><span>var year =  date.getFullYear();</span></span>
<span class="line"><span>var month = date.getMonth() + 1;</span></span>
<span class="line"><span>var dates = date.getDate();</span></span>
<span class="line"><span>console.log(&#39;今天是&#39; + year +&#39;年&#39; + month + &#39;月&#39; + dates +&#39;日&#39; );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 封装一个函数返回当前的时分秒 格式 08:08:08</span></span>
<span class="line"><span>function getTimer() {</span></span>
<span class="line"><span>    var time = new Date();</span></span>
<span class="line"><span>    var h = time.getHours();</span></span>
<span class="line"><span>    h = h &lt; 10 ? &#39;0&#39; + h : h;</span></span>
<span class="line"><span>    var m = time.getMinutes();</span></span>
<span class="line"><span>    m = m &lt; 10 ? &#39;0&#39; + m : m;</span></span>
<span class="line"><span>    var s = time.getSeconds();</span></span>
<span class="line"><span>    s = s &lt; 10 ? &#39;0&#39; + s : s;</span></span>
<span class="line"><span>    return h + &#39;:&#39; + m + &#39;:&#39; + s;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(getTimer());</span></span></code></pre></div><h3 id="_4-3、获取日期的总的毫秒形式" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>4.3、获取日期的总的毫秒形式 <a class="header-anchor" href="#_4-3、获取日期的总的毫秒形式" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)4.3、获取日期的总的毫秒形式&quot;">​</a></h3><ul><li><code>date.valueOf()</code> ：得到现在时间距离1970.1.1总的毫秒数</li><li><code>date.getTime()</code> ：得到现在时间距离1970.1.1总的毫秒数</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 获取Date总的毫秒数 不是当前时间的毫秒数 而是距离1970年1月1号过了多少毫秒数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 实例化Date对象</span></span>
<span class="line"><span>var date = new Date();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 1 .通过 valueOf()  getTime() 用于获取对象的原始值</span></span>
<span class="line"><span>console.log(date.valueOf());  //得到现在时间距离1970.1.1总的毫秒数</span></span>
<span class="line"><span>console.log(date.getTime());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2.简单的写法</span></span>
<span class="line"><span>var date1 = +new Date();  // +new Date()返回的就是总的毫秒数，</span></span>
<span class="line"><span>console.log(date1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 3. HTML5中提供的方法 获得总的毫秒数 有兼容性问题</span></span>
<span class="line"><span>console.log(Date.now());</span></span></code></pre></div><h4 id="倒计时效果" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>倒计时效果 <a class="header-anchor" href="#倒计时效果" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)倒计时效果&quot;">​</a></h4><p><img src="https://img-blog.csdnimg.cn/30532fd39876470b978818007f8a0b13.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function countDown(time) {</span></span>
<span class="line"><span>    var nowTime = +new Date(); //没有参数，返回的是当前时间总的毫秒数</span></span>
<span class="line"><span>    var inputTime = +new Date(time); // 有参数，返回的是用户输入时间的总毫秒数</span></span>
<span class="line"><span>    var times = (inputTime - nowTime) / 1000; //times就是剩余时间的总的秒数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var d = parseInt(times / 60 / 60 / 24); //天数</span></span>
<span class="line"><span>    d &lt; 10 ? &#39;0&#39; + d : d;</span></span>
<span class="line"><span>    var h = parseInt(times / 60 / 60 % 24); //小时</span></span>
<span class="line"><span>    h &lt; 10 ? &#39;0&#39; + h : h;</span></span>
<span class="line"><span>    var m = parseInt(times / 60 % 60); //分</span></span>
<span class="line"><span>    m &lt; 10 ? &#39;0&#39; + m : m;</span></span>
<span class="line"><span>    var s = parseInt(times % 60); //秒</span></span>
<span class="line"><span>    s &lt; 10 ? &#39;0&#39; + s : s;</span></span>
<span class="line"><span>    return d + &#39;天&#39; + h + &#39;时&#39; + m + &#39;分&#39; + s + &#39;秒&#39;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(countDown(&#39;2020-11-09 18:29:00&#39;));</span></span>
<span class="line"><span>var date = new Date;</span></span>
<span class="line"><span>console.log(date); //现在时间</span></span></code></pre></div><h2 id="数组对象" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>数组对象 <a class="header-anchor" href="#数组对象" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)数组对象&quot;">​</a></h2><h3 id="_5-1、数组对象的创建" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>5.1、数组对象的创建 <a class="header-anchor" href="#_5-1、数组对象的创建" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)5.1、数组对象的创建&quot;">​</a></h3><p>创建数组对象的两种方式</p><ul><li>字面量方式</li><li>new Array()</li></ul><h3 id="_5-2、检测是否为数组" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>5.2、检测是否为数组 <a class="header-anchor" href="#_5-2、检测是否为数组" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)5.2、检测是否为数组&quot;">​</a></h3><ul><li>instanceof 运算符，可以判断一个对象是否属于某种类型</li><li><code>Array.isArray()</code> 用于判断一个对象是否为数组，isArray() 是 HTML5 中提供的方法</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var arr = [1, 23];</span></span>
<span class="line"><span>var obj = {};</span></span>
<span class="line"><span>console.log(arr instanceof Array); // true</span></span>
<span class="line"><span>console.log(obj instanceof Array); // false</span></span>
<span class="line"><span>console.log(Array.isArray(arr));   // true</span></span>
<span class="line"><span>console.log(Array.isArray(obj));   // false</span></span></code></pre></div><h3 id="_5-3、添加删除数组元素" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>5.3、添加删除数组元素 <a class="header-anchor" href="#_5-3、添加删除数组元素" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)5.3、添加删除数组元素&quot;">​</a></h3><table><thead><tr><th>方法名</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>push(参数1…)</td><td>末尾添加一个或多个元素，注意修改原数组</td><td>并返回新的长度</td></tr><tr><td>pop()</td><td>删除数组最后一个元素</td><td>返回它删除的元素的值</td></tr><tr><td>unshift(参数1…)</td><td>向数组的开头添加一个或更多元素，注意修改原数组</td><td>并返回新的长度</td></tr><tr><td>shift()</td><td>删除数组的第一个元素，数组长度减1，无参数，修改原数组</td><td>并返回第一个元素</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 1.push() 在我们数组的末尾，添加一个或者多个数组元素 push 推</span></span>
<span class="line"><span>var arr = [1, 2, 3];</span></span>
<span class="line"><span>arr.push(4, &#39;秦晓&#39;);</span></span>
<span class="line"><span>console.log(arr);</span></span>
<span class="line"><span>console.log(arr.push(4, &#39;秦晓&#39;));</span></span>
<span class="line"><span>console.log(arr);</span></span>
<span class="line"><span>// push 完毕之后，返回结果是新数组的长度</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2. unshift 在我们数组的开头 添加一个或者多个数组元素</span></span>
<span class="line"><span>arr.unshift(&#39;red&#39;);</span></span>
<span class="line"><span>console.log(arr);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// pop() 它可以删除数组的最后一个元素，一次只能删除一个元素</span></span>
<span class="line"><span>arr.pop(); //不加参数</span></span>
<span class="line"><span>// shift() 它剋删除数组的第一个元素,一次只能删除一个元素</span></span>
<span class="line"><span>arr.shift(); //不加参数</span></span></code></pre></div><h4 id="👉筛选数组" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>👉筛选数组 <a class="header-anchor" href="#👉筛选数组" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)👉筛选数组&quot;">​</a></h4><p>有一个包含工资的数组[1500,1200,2000,2100,1800],要求把数组中工资超过2000的删除，剩余的放到新数组里面</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var arr = [1500, 1200, 2000, 2100, 1800];</span></span>
<span class="line"><span>var newArr = [];</span></span>
<span class="line"><span>for (var i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span>    if (arr[i] &lt; 2000) {</span></span>
<span class="line"><span>        newArr.push(arr[i]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(newArr);</span></span></code></pre></div><h3 id="_5-4、数组排序" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>5.4、数组排序 <a class="header-anchor" href="#_5-4、数组排序" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)5.4、数组排序&quot;">​</a></h3><table><thead><tr><th>方法名</th><th>说明</th><th>是否修改原数组</th></tr></thead><tbody><tr><td>reverse()</td><td>颠倒数组中元素的顺序，无参数</td><td>该方法会改变原来的数组，返回新数组</td></tr><tr><td>sort()</td><td>对数组的元素进行排序</td><td>该方法会改变原来的数组，返回新数组</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 1.翻转数组</span></span>
<span class="line"><span>var arr = [&#39;pink&#39;,&#39;red&#39;,&#39;blue&#39;];</span></span>
<span class="line"><span>arr.reverse();</span></span>
<span class="line"><span>console.log(arr);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2.数组排序(冒泡排序)</span></span>
<span class="line"><span>var arr1 = [3,4,7,1];</span></span>
<span class="line"><span>arr1.sort();</span></span>
<span class="line"><span>console.log(arr1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 对于双位数</span></span>
<span class="line"><span>var arr = [1,64,9,61];</span></span>
<span class="line"><span>arr.sort(function(a,b) {</span></span>
<span class="line"><span>     return b - a;  //降序的排列</span></span>
<span class="line"><span>     return a - b; //升序</span></span>
<span class="line"><span> 	}</span></span>
<span class="line"><span> )</span></span></code></pre></div><h3 id="_5-5、数组索引" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>5.5、数组索引 <a class="header-anchor" href="#_5-5、数组索引" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)5.5、数组索引&quot;">​</a></h3><table><thead><tr><th>方法名</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>indexOf()</td><td>数组中查找给定元素的第一个索引</td><td>如果存在返回索引号，如果不存在，则返回-1</td></tr><tr><td>lastIndexOf()</td><td>在数组的最后一个索引，从后向前索引</td><td>如果存在返回索引号，如果不存在，则返回-1</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//返回数组元素索引号方法 indexOf(数组元素)  作用就是返回该数组元素的索引号</span></span>
<span class="line"><span>//它只发返回第一个满足条件的索引号</span></span>
<span class="line"><span>//如果找不到元素，则返回-1</span></span>
<span class="line"><span>var arr = [&#39;red&#39;,&#39;green&#39;,&#39;blue&#39;,&#39;pink&#39;,&#39;blue&#39;];</span></span>
<span class="line"><span>console.log(arr.indexOf(&#39;blue&#39;));  // 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(arr.lastIndexOf(&#39;blue&#39;)); // 4</span></span></code></pre></div><h4 id="_5-5-1、数组去重" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>5.5.1、数组去重 <a class="header-anchor" href="#_5-5-1、数组去重" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)5.5.1、数组去重&quot;">​</a></h4><p><img src="https://img-blog.csdnimg.cn/47fbf1445f964722aee1463bee9a6fab.png#pic_center" alt="在这里插入图片描述"></p><p>分析：把旧数组里面不重复的元素选取出来放到新数组中，重复的元素只保留一个，放到新数组中去重。</p><p>核心算法：我们遍历旧数组，然后拿着旧数组元素去查询新数组，如果该元素在新数组里面没有出现过，我们就添加，否则不添加。</p><p>我们怎么知道该元素没有存在？ 利用 新数组.indexOf(数组元素) 如果返回是 -1 就说明 新数组里面没有改元素</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 封装一个去重的函数 unique 独一无二的</span></span>
<span class="line"><span>function unique(arr) {</span></span>
<span class="line"><span>    var newArr = [];</span></span>
<span class="line"><span>    for (var i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span>        if (newArr.indexOf(arr[i]) === -1) {</span></span>
<span class="line"><span>            newArr.push(arr[i]);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return newArr;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var demo = unique([&#39;c&#39;, &#39;a&#39;, &#39;z&#39;, &#39;a&#39;, &#39;x&#39;, &#39;a&#39;, &#39;x&#39;, &#39;c&#39;, &#39;b&#39;]);</span></span>
<span class="line"><span>console.log(demo);</span></span></code></pre></div><h3 id="_5-6、数组转化为字符串" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>5.6、数组转化为字符串 <a class="header-anchor" href="#_5-6、数组转化为字符串" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)5.6、数组转化为字符串&quot;">​</a></h3><table><thead><tr><th>方法名</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>toString()</td><td>把数组转换成字符串，逗号分隔每一项</td><td>返回一个字符串</td></tr><tr><td>join(‘分隔符’)</td><td>方法用于把数组中的所有元素转换为一个字符串</td><td>返回一个字符串</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 1.toString() 将我们的数组转换为字符串</span></span>
<span class="line"><span>var arr = [1, 2, 3];</span></span>
<span class="line"><span>console.log(arr.toString()); // 1,2,3</span></span>
<span class="line"><span>// 2.join(&#39;分隔符&#39;)</span></span>
<span class="line"><span>var arr1 = [&#39;green&#39;, &#39;blue&#39;, &#39;red&#39;];</span></span>
<span class="line"><span>console.log(arr1.join()); // 不写默认用逗号分割</span></span>
<span class="line"><span>console.log(arr1.join(&#39;-&#39;)); //  green-blue-red</span></span>
<span class="line"><span>console.log(arr1.join(&#39;&amp;&#39;)); // green&amp;blue&amp;red</span></span></code></pre></div><h3 id="_5-7、其他方法" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>5.7、其他方法 <a class="header-anchor" href="#_5-7、其他方法" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)5.7、其他方法&quot;">​</a></h3><table><thead><tr><th>方法名</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>concat()</td><td>连接两个或多个数组 不影响原数组</td><td>返回一个新的数组</td></tr><tr><td>slice()</td><td>数组截取slice(begin,end)</td><td>返回被截取项目的新数组</td></tr><tr><td>splice()</td><td>数组删除splice(第几个开始要删除的个数)</td><td>返回被删除项目的新数组，这个会影响原数组</td></tr></tbody></table><h2 id="字符串对象" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>字符串对象 <a class="header-anchor" href="#字符串对象" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)字符串对象&quot;">​</a></h2><h3 id="_6-1、基本包装类型" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>6.1、基本包装类型 <a class="header-anchor" href="#_6-1、基本包装类型" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)6.1、基本包装类型&quot;">​</a></h3><p>为了方便操作基本数据类型，JavaScript 还提供了三个特殊的引用类型：String、Number和 Boolean。</p><p><strong>基本包装类型</strong>就是把简单数据类型包装成为复杂数据类型，这样基本数据类型就有了属性和方法。</p><p>我们看看下面代码有什么问题吗？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var str = &#39;andy&#39;;</span></span>
<span class="line"><span>console.log(str.length);</span></span></code></pre></div><p>按道理基本数据类型是没有属性和方法的，而对象才有属性和方法，但上面代码却可以执行，这是因为 js 会把基本数据类型包装为复杂数据类型，其执行过程如下 ：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 1.生成临时变量,把简单类型包装为复杂数据类型</span></span>
<span class="line"><span>var temp = new String(&#39;andy&#39;);</span></span>
<span class="line"><span>// 2.赋值给我们声明的字符变量</span></span>
<span class="line"><span>str = temp;</span></span>
<span class="line"><span>// 3.销毁临时变量</span></span>
<span class="line"><span>temp = null;</span></span></code></pre></div><h3 id="_6-2、字符串的不可变" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>6.2、字符串的不可变 <a class="header-anchor" href="#_6-2、字符串的不可变" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)6.2、字符串的不可变&quot;">​</a></h3><p>指的是里面的值不可变，虽然看上去可以改变内容，但其实是地址变了，内存中新开辟了一个内存空间。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var str = &#39;abc&#39;;</span></span>
<span class="line"><span>str = &#39;hello&#39;;</span></span>
<span class="line"><span>// 当重新给 str 赋值的时候，常量&#39;abc&#39;不会被修改，依然在内存中</span></span>
<span class="line"><span>// 重新给字符串赋值，会重新在内存中开辟空间，这个特点就是字符串的不可变</span></span>
<span class="line"><span>// 由于字符串的不可变，在大量拼接字符串的时候会有效率问题</span></span>
<span class="line"><span>var str = &#39;&#39;;</span></span>
<span class="line"><span>for(var i = 0; i &lt; 10000;  i++){</span></span>
<span class="line"><span>    str += i;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(str);</span></span>
<span class="line"><span>// 这个结果需要花费大量时间来显示，因为需要不断的开辟新的空间</span></span></code></pre></div><h3 id="_6-3、根据字符返回位置" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>6.3、根据字符返回位置 <a class="header-anchor" href="#_6-3、根据字符返回位置" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)6.3、根据字符返回位置&quot;">​</a></h3><p>字符串所有的方法，都不会修改字符串本身(字符串是不可变的)，<strong>操作完成会返回一个新的字符串</strong></p><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>indexOf(‘要查找的字符’，开始的位置)</td><td>返回指定内容在元字符串中的位置，如果找不到就返回-1，开始的位置是index索引号</td></tr><tr><td>lastIndexOf()</td><td>从后往前找，只找第一个匹配的</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> // 字符串对象  根据字符返回位置  str.indexOf(&#39;要查找的字符&#39;, [起始的位置])</span></span>
<span class="line"><span>        var str = &#39;改革春风吹满地，春天来了&#39;;</span></span>
<span class="line"><span>        console.log(str.indexOf(&#39;春&#39;)); //默认从0开始查找 ，结果为2</span></span>
<span class="line"><span>        console.log(str.indexOf(&#39;春&#39;, 3)); // 从索引号是 3的位置开始往后查找，结果是8</span></span></code></pre></div><h4 id="_6-3-1、返回字符位置" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>6.3.1、返回字符位置 <a class="header-anchor" href="#_6-3-1、返回字符位置" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)6.3.1、返回字符位置&quot;">​</a></h4><p>查找字符串 “abcoefoxyozzopp” 中所有o出现的位置以及次数</p><ul><li>核心算法：先查找第一个o出现的位置</li><li>然后 只要 indexOf返回的结果不是 -1 就继续往后查找</li><li>因为 indexOf 只能查找到第一个，所以后面的查找，一定是当前索引加1，从而继续查找</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var str = &quot;oabcoefoxyozzopp&quot;;</span></span>
<span class="line"><span>var index = str.indexOf(&#39;o&#39;);</span></span>
<span class="line"><span>var num = 0;</span></span>
<span class="line"><span>// console.log(index);</span></span>
<span class="line"><span>while (index !== -1) {</span></span>
<span class="line"><span>    console.log(index);</span></span>
<span class="line"><span>    num++;</span></span>
<span class="line"><span>    index = str.indexOf(&#39;o&#39;, index + 1);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(&#39;o出现的次数是: &#39; + num);</span></span></code></pre></div><h3 id="_6-4、根据位置返回字符" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>6.4、根据位置返回字符 <a class="header-anchor" href="#_6-4、根据位置返回字符" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)6.4、根据位置返回字符&quot;">​</a></h3><table><thead><tr><th>方法名</th><th>说明</th><th>使用</th></tr></thead><tbody><tr><td>charAt(index)</td><td>返回指定位置的字符(index字符串的索引号)</td><td>str.charAt(0)</td></tr><tr><td>charCodeAt(index)</td><td>获取指定位置处字符的ASCII码(index索引号)</td><td>str.charCodeAt(0)</td></tr><tr><td>str[index]</td><td>获取指定位置处字符</td><td>HTML,IE8+支持和charAt()等效</td></tr></tbody></table><h5 id="返回字符位置" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>返回字符位置 <a class="header-anchor" href="#返回字符位置" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)返回字符位置&quot;">​</a></h5><p>判断一个字符串 “abcoefoxyozzopp” 中出现次数最多的字符，并统计其次数</p><ul><li>核心算法：利用 charAt() 遍历这个字符串</li><li>把每个字符都存储给对象， 如果对象没有该属性，就为1，如果存在了就 +1</li><li>遍历对象，得到最大值和该字符</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    // 有一个对象 来判断是否有该属性 对象[&#39;属性名&#39;]</span></span>
<span class="line"><span>    var o = {</span></span>
<span class="line"><span>        age: 18</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (o[&#39;sex&#39;]) {</span></span>
<span class="line"><span>        console.log(&#39;里面有该属性&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        console.log(&#39;没有该属性&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //  判断一个字符串 &#39;abcoefoxyozzopp&#39; 中出现次数最多的字符，并统计其次数。</span></span>
<span class="line"><span>    // o.a = 1</span></span>
<span class="line"><span>    // o.b = 1</span></span>
<span class="line"><span>    // o.c = 1</span></span>
<span class="line"><span>    // o.o = 4</span></span>
<span class="line"><span>    // 核心算法：利用 charAt() 遍历这个字符串</span></span>
<span class="line"><span>    // 把每个字符都存储给对象， 如果对象没有该属性，就为1，如果存在了就 +1</span></span>
<span class="line"><span>    // 遍历对象，得到最大值和该字符</span></span>
<span class="line"><span>    var str = &#39;abcoefoxyozzopp&#39;;</span></span>
<span class="line"><span>    var o = {};</span></span>
<span class="line"><span>    for (var i = 0; i &lt; str.length; i++) {</span></span>
<span class="line"><span>        var chars = str.charAt(i); // chars 是 字符串的每一个字符</span></span>
<span class="line"><span>        if (o[chars]) { // o[chars] 得到的是属性值</span></span>
<span class="line"><span>            o[chars]++;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            o[chars] = 1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    console.log(o);</span></span>
<span class="line"><span>    // 2. 遍历对象</span></span>
<span class="line"><span>    var max = 0;</span></span>
<span class="line"><span>    var ch = &#39;&#39;;</span></span>
<span class="line"><span>    for (var k in o) {</span></span>
<span class="line"><span>        // k 得到是 属性名</span></span>
<span class="line"><span>        // o[k] 得到的是属性值</span></span>
<span class="line"><span>        if (o[k] &gt; max) {</span></span>
<span class="line"><span>            max = o[k];</span></span>
<span class="line"><span>            ch = k;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    console.log(max);</span></span>
<span class="line"><span>    console.log(&#39;最多的字符是&#39; + ch);</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="_6-5、字符串操作方法" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>6.5、字符串操作方法 <a class="header-anchor" href="#_6-5、字符串操作方法" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)6.5、字符串操作方法&quot;">​</a></h3><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>concat(str1,str2,str3…)</td><td>concat() 方法用于连接两个或对各字符串。拼接字符串</td></tr><tr><td>substr(start,length)</td><td>从 start 位置开始(索引号), length 取的个数。</td></tr><tr><td>slice(start,end)</td><td>从 start 位置开始，截取到 end 位置 ，end 取不到 (两个都是索引号)</td></tr><tr><td>substring(start,end)</td><td>从 start 位置开始，截取到 end 位置 ，end 取不到 (基本和 slice 相同，但是不接受负)</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    // 1. concat(&#39;字符串1&#39;,&#39;字符串2&#39;....)</span></span>
<span class="line"><span>    var str = &#39;andy&#39;;</span></span>
<span class="line"><span>    console.log(str.concat(&#39;red&#39;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 2. substr(&#39;截取的起始位置&#39;, &#39;截取几个字符&#39;);</span></span>
<span class="line"><span>    var str1 = &#39;改革春风吹满地&#39;;</span></span>
<span class="line"><span>    console.log(str1.substr(2, 2)); // 第一个2 是索引号的2   第二个2 是取几个字符</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="_6-6、replace-方法" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>6.6、replace()方法 <a class="header-anchor" href="#_6-6、replace-方法" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)6.6、replace()方法&quot;">​</a></h3><p>replace() 方法用于在字符串中用一些字符替换另一些字符</p><p>其使用格式：<code>replace(被替换的字符,要替换为的字符串)</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    // 1. 替换字符 replace(&#39;被替换的字符&#39;, &#39;替换为的字符&#39;)  它只会替换第一个字符</span></span>
<span class="line"><span>    var str = &#39;andyandy&#39;;</span></span>
<span class="line"><span>    console.log(str.replace(&#39;a&#39;, &#39;b&#39;));</span></span>
<span class="line"><span>    // 有一个字符串 &#39;abcoefoxyozzopp&#39;  要求把里面所有的 o 替换为 *</span></span>
<span class="line"><span>    var str1 = &#39;abcoefoxyozzopp&#39;;</span></span>
<span class="line"><span>    while (str1.indexOf(&#39;o&#39;) !== -1) {</span></span>
<span class="line"><span>        str1 = str1.replace(&#39;o&#39;, &#39;*&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    console.log(str1);</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="_6-7、split-方法" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>6.7、split()方法 <a class="header-anchor" href="#_6-7、split-方法" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)6.7、split()方法&quot;">​</a></h3><p>split() 方法用于切分字符串，它可以将字符串切分为数组。在切分完毕之后，返回的是一个新数组。</p><p>例如下面代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var str = &#39;a,b,c,d&#39;;</span></span>
<span class="line"><span>console.log(str.split(&#39;,&#39;));</span></span>
<span class="line"><span>// 返回的是一个数组 [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;]</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>// 2. 字符转换为数组 split(&#39;分隔符&#39;)    前面我们学过 join 把数组转换为字符串</span></span>
<span class="line"><span>    var str2 = &#39;red, pink, blue&#39;;</span></span>
<span class="line"><span>    console.log(str2.split(&#39;,&#39;));</span></span>
<span class="line"><span>    var str3 = &#39;red&amp;pink&amp;blue&#39;;</span></span>
<span class="line"><span>    console.log(str3.split(&#39;&amp;&#39;));</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="_6-8、大小写转换" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>6.8、大小写转换 <a class="header-anchor" href="#_6-8、大小写转换" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)6.8、大小写转换&quot;">​</a></h3><ul><li><code>toUpperCase()</code> 转换大写</li><li><code>toLowerCase()</code> 转换小写</li></ul><h2 id="简单类型于复杂类型" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>简单类型于复杂类型 <a class="header-anchor" href="#简单类型于复杂类型" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)简单类型于复杂类型&quot;">​</a></h2><p>简单类型又叫做基本数据类型或者值类型，复杂类型又叫做引用类型。</p><ul><li>值类型：简单数据类型/基本数据类型，在存储时变量中存储的是值本身，因此叫做值类型 <ul><li>string ，number，boolean，undefined，null</li></ul></li><li>引用类型：复杂数据类型，在存储时变量中存储的仅仅是地址（引用），因此叫做引用数据类型 <ul><li>通过 new 关键字创建的对象（系统对象、自定义对象），如 Object、Array、Date等</li></ul></li></ul><h3 id="_7-1、堆和栈" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>7.1、堆和栈 <a class="header-anchor" href="#_7-1、堆和栈" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)7.1、堆和栈&quot;">​</a></h3><p>堆栈空间分配区别：</p><ol><li>栈（操作系统）：由操作系统自动分配释放存放函数的参数值、局部变量的值等。其操作方式类似于数据结构中的栈； <ul><li>简单数据类型存放到栈里面</li></ul></li><li>堆（操作系统）：存储复杂类型(对象)，一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收。 <ul><li>复杂数据类型存放到堆里面</li></ul></li></ol><p><img src="https://img-blog.csdnimg.cn/ec62026538be449cb9c639f1fa54c844.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><p>注意：JavaScript中没有堆栈的概念，通过堆栈的方式，可以让大家更容易理解代码的一些执行方式，便于将来学习其他语言。</p><h3 id="_7-2、简单类型的内存分配" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>7.2、简单类型的内存分配 <a class="header-anchor" href="#_7-2、简单类型的内存分配" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)7.2、简单类型的内存分配&quot;">​</a></h3><ul><li>值类型（简单数据类型）： string ，number，boolean，undefined，null</li><li>值类型变量的数据直接存放在变量（栈空间）中</li></ul><p><img src="https://img-blog.csdnimg.cn/50bbae6222344edb9dac860c4538c527.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><ul><li>引用类型（复杂数据类型）：通过 new 关键字创建的对象（系统对象、自定义对象），如 Object、Array、Date等</li><li>引用类型变量（栈空间）里存放的是地址，真正的对象实例存放在堆空间中</li></ul><p><img src="https://img-blog.csdnimg.cn/c6b0e56f9a6c436b9c46afcd8133d623.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    // 简单数据类型 null  返回的是一个空的对象  object </span></span>
<span class="line"><span>    var timer = null;</span></span>
<span class="line"><span>    console.log(typeof timer);</span></span>
<span class="line"><span>    // 如果有个变量我们以后打算存储为对象，暂时没想好放啥， 这个时候就给 null </span></span>
<span class="line"><span>    // 1. 简单数据类型 是存放在栈里面 里面直接开辟一个空间存放的是值</span></span>
<span class="line"><span>    // 2. 复杂数据类型 首先在栈里面存放地址 十六进制表示  然后这个地址指向堆里面的数据</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="_7-3、简单类型传参" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>7.3、简单类型传参 <a class="header-anchor" href="#_7-3、简单类型传参" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)7.3、简单类型传参&quot;">​</a></h3><p>函数的形参也可以看做是一个变量，当我们把一个值类型变量作为参数传给函数的形参时，其实是把变量在栈空间里的值复制了一份给形参，那么在方法内部对形参做任何修改，都不会影响到的外部变量。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    // 简单数据类型传参</span></span>
<span class="line"><span>    function fn(a) {</span></span>
<span class="line"><span>        a++;</span></span>
<span class="line"><span>        console.log(a);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    var x = 10;</span></span>
<span class="line"><span>    fn(x);</span></span>
<span class="line"><span>    console.log(x);</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="_7-4、复杂类型传参" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/119250137" target="_blank" rel="noreferrer"></a>7.4、复杂类型传参 <a class="header-anchor" href="#_7-4、复杂类型传参" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/119250137)7.4、复杂类型传参&quot;">​</a></h3><p>函数的形参也可以看做是一个变量，当我们把引用类型变量传给形参时，其实是把变量在栈空间里保存的堆地址复制给了形参，形参和实参其实保存的是同一个堆地址，所以操作的是同一个对象。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    // 复杂数据类型传参</span></span>
<span class="line"><span>    function Person(name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    function f1(x) { // x = p</span></span>
<span class="line"><span>        console.log(x.name); // 2. 这个输出什么 ?  刘德华   </span></span>
<span class="line"><span>        x.name = &quot;张学友&quot;;</span></span>
<span class="line"><span>        console.log(x.name); // 3. 这个输出什么 ?   张学友</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    var p = new Person(&quot;刘德华&quot;);</span></span>
<span class="line"><span>    console.log(p.name); // 1. 这个输出什么 ?   刘德华 </span></span>
<span class="line"><span>    f1(p);</span></span>
<span class="line"><span>    console.log(p.name); // 4. 这个输出什么 ?   张学友</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>1、DOM简介</p><h3 id="_1-1、什么是dom" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>1.1、什么是DOM <a class="header-anchor" href="#_1-1、什么是dom" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)1.1、什么是DOM&quot;">​</a></h3><p>文档对象模型（Document Object Model，简称 DOM），是 W3C 组织推荐的处理可扩展标记语言（HTML或者XML）的标准编程接口</p><p>W3C 已经定义了一系列的 DOM 接口，通过这些 DOM 接口可以改变网页的内容、结构和样式。</p><p><img src="https://img-blog.csdnimg.cn/fc42557d25be4683881c2f0f231bc778.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><ul><li>文档：一个页面就是一个文档，DOM中使用doucument来表示</li><li>元素：页面中的所有标签都是元素，DOM中使用 element 表示</li><li>节点：网页中的所有内容都是节点（标签，属性，文本，注释等），DOM中使用node表示</li></ul><p>DOM 把以上内容都看做是对象</p><h2 id="获取元素" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>获取元素 <a class="header-anchor" href="#获取元素" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)获取元素&quot;">​</a></h2><h3 id="_2-1、如何获取页面元素" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>2.1、如何获取页面元素 <a class="header-anchor" href="#_2-1、如何获取页面元素" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)2.1、如何获取页面元素&quot;">​</a></h3><p>DOM在我们实际开发中主要用来操作元素。</p><p>我们如何来获取页面中的元素呢?</p><p>获取页面中的元素可以使用以下几种方式:</p><ul><li>根据 ID 获取</li><li>根据标签名获取</li><li>通过 HTML5 新增的方法获取</li><li>特殊元素获取</li></ul><h3 id="_2-2、根据id获取" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>2.2、根据ID获取 <a class="header-anchor" href="#_2-2、根据id获取" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)2.2、根据ID获取&quot;">​</a></h3><p>使用 <code>getElementByld()</code> 方法可以获取带ID的元素对象</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>doucument.getElementByld(&#39;id名&#39;)</span></span></code></pre></div><p>使用 <code>console.dir()</code> 可以打印我们获取的元素对象，更好的查看对象里面的属性和方法。</p><p><strong>示例</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div id=&quot;time&quot;&gt;2019-9-9&lt;/div&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    // 1.因为我们文档页面从上往下加载，所以得先有标签，所以script写在标签下面</span></span>
<span class="line"><span>    // 2.get 获得 element 元素 by 通过 驼峰命名法</span></span>
<span class="line"><span>    // 3.参数 id是大小写敏感的字符串</span></span>
<span class="line"><span>    // 4.返回的是一个元素对象</span></span>
<span class="line"><span>    var timer = document.getElementById(&#39;time&#39;);</span></span>
<span class="line"><span>    console.log(timer);</span></span>
<span class="line"><span>    // 5. console.dir 打印我们的元素对象，更好的查看里面的属性和方法</span></span>
<span class="line"><span>    console.dir(timer);</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="_2-3、根据标签名获取" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>2.3、根据标签名获取 <a class="header-anchor" href="#_2-3、根据标签名获取" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)2.3、根据标签名获取&quot;">​</a></h3><p>根据<strong>标签名</strong>获取，使用 <code>getElementByTagName()</code> 方法可以返回带有指定标签名的<strong>对象的集合</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>doucument.getElementsByTagName(&#39;标签名&#39;);</span></span></code></pre></div><ul><li>因为得到的是一个对象的集合，所以我们想要操作里面的元素就需要遍历</li><li>得到元素对象是动态的</li><li>返回的是获取过来元素对象的集合，以伪数组的形式存储</li><li>如果获取不到元素，则返回为空的伪数组(因为获取不到对象)</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;ul&gt;</span></span>
<span class="line"><span>    &lt;li&gt;知否知否，应是等你好久&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;知否知否，应是等你好久&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;知否知否，应是等你好久&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;知否知否，应是等你好久&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;知否知否，应是等你好久&lt;/li&gt;</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    // 1.返回的是获取过来元素对象的集合 以伪数组的形式存储</span></span>
<span class="line"><span>    var lis = document.getElementsByTagName(&#39;li&#39;);</span></span>
<span class="line"><span>    console.log(lis);</span></span>
<span class="line"><span>    console.log(lis[0]);</span></span>
<span class="line"><span>    // 2.依次打印,遍历</span></span>
<span class="line"><span>    for (var i = 0; i &lt; lis.length; i++) {</span></span>
<span class="line"><span>        console.log(lis[i]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 3.如果页面中只有 1 个 li，返回的还是伪数组的形式</span></span>
<span class="line"><span>    // 4.如果页面中没有这个元素，返回的是空伪数组</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="_2-4、根据标签名获取" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>2.4、根据标签名获取 <a class="header-anchor" href="#_2-4、根据标签名获取" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)2.4、根据标签名获取&quot;">​</a></h3><p>还可以根据标签名获取某个元素（父元素）内部所有指定标签名的子元素,获取的时候不包括父元素自己</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>element.getElementsByTagName(&#39;标签名&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ol.getElementsByTagName(&#39;li&#39;);</span></span></code></pre></div><p>注意：父元素必须是单个对象(必须指明是哪一个元素对象)，获取的时候不包括父元素自己</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>	//element.getElementsByTagName(&#39;标签名&#39;); 父元素必须是指定的单个元素</span></span>
<span class="line"><span>    var ol = document.getElementById(&#39;ol&#39;);</span></span>
<span class="line"><span>    console.log(ol.getElementsByTagName(&#39;li&#39;));</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="_2-5、通过h5新增方法获取" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>2.5、通过H5新增方法获取 <a class="header-anchor" href="#_2-5、通过h5新增方法获取" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)2.5、通过H5新增方法获取&quot;">​</a></h3><h4 id="_1getelementsbyclassname" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>①getElementsByClassName <a class="header-anchor" href="#_1getelementsbyclassname" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)①getElementsByClassName&quot;">​</a></h4><p>根据类名返回元素对象合集</p><ul><li><code>document.getElementsByClassName(&#39;类名&#39;)</code></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>document.getElementsByClassName(&#39;类名&#39;);</span></span></code></pre></div><h4 id="_2document-queryselector" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>②document.querySelector <a class="header-anchor" href="#_2document-queryselector" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)②document.querySelector&quot;">​</a></h4><p>根据指定选择器返回第一个元素对象</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>document.querySelector(&#39;选择器&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 切记里面的选择器需要加符号 </span></span>
<span class="line"><span>// 类选择器.box </span></span>
<span class="line"><span>// id选择器 #nav</span></span>
<span class="line"><span>var firstBox = document.querySelector(&#39;.box&#39;);</span></span></code></pre></div><h4 id="_3document-queryselectorall" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>③document.querySelectorAll <a class="header-anchor" href="#_3document-queryselectorall" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)③document.querySelectorAll&quot;">​</a></h4><p>根据指定选择器返回所有元素对象</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>document.querySelectorAll(&#39;选择器&#39;);</span></span></code></pre></div><p>注意：</p><p><code>querySelector</code> 和 <code>querySelectorAll</code> 里面的选择器需要加符号,比如: <code>document.querySelector(&#39;#nav&#39;);</code></p><h4 id="_4例子" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>④例子 <a class="header-anchor" href="#_4例子" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)④例子&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    // 1. getElementsByClassName 根据类名获得某些元素集合</span></span>
<span class="line"><span>    var boxs = document.getElementsByClassName(&#39;box&#39;);</span></span>
<span class="line"><span>    console.log(boxs);</span></span>
<span class="line"><span>    // 2. querySelector 返回指定选择器的第一个元素对象  切记 里面的选择器需要加符号 .box  #nav</span></span>
<span class="line"><span>    var firstBox = document.querySelector(&#39;.box&#39;);</span></span>
<span class="line"><span>    console.log(firstBox);</span></span>
<span class="line"><span>    var nav = document.querySelector(&#39;#nav&#39;);</span></span>
<span class="line"><span>    console.log(nav);</span></span>
<span class="line"><span>    var li = document.querySelector(&#39;li&#39;);</span></span>
<span class="line"><span>    console.log(li);</span></span>
<span class="line"><span>    // 3. querySelectorAll()返回指定选择器的所有元素对象集合</span></span>
<span class="line"><span>    var allBox = document.querySelectorAll(&#39;.box&#39;);</span></span>
<span class="line"><span>    console.log(allBox);</span></span>
<span class="line"><span>    var lis = document.querySelectorAll(&#39;li&#39;);</span></span>
<span class="line"><span>    console.log(lis);</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="_2-6、获取特殊元素" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>2.6、获取特殊元素 <a class="header-anchor" href="#_2-6、获取特殊元素" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)2.6、获取特殊元素&quot;">​</a></h3><h4 id="_1获取body元素" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>①获取body元素 <a class="header-anchor" href="#_1获取body元素" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)①获取body元素&quot;">​</a></h4><p>返回body元素对象</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>document.body;</span></span></code></pre></div><h4 id="_2获取html元素" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>②获取html元素 <a class="header-anchor" href="#_2获取html元素" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)②获取html元素&quot;">​</a></h4><p>返回html元素对象</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>document.documentElement;</span></span></code></pre></div><h2 id="事件基础" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>事件基础 <a class="header-anchor" href="#事件基础" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)事件基础&quot;">​</a></h2><h3 id="_3-1、事件概述" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>3.1、事件概述 <a class="header-anchor" href="#_3-1、事件概述" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)3.1、事件概述&quot;">​</a></h3><p>JavaScript 使我们有能力创建动态页面，而事件是可以被 JavaScript 侦测到的行为。</p><p>简单理解： 触发— 响应机制。</p><p>网页中的每个元素都可以产生某些可以触发 JavaScript 的事件，例如，我们可以在用户点击某按钮时产生一个事件，然后去执行某些操作。</p><h3 id="_3-2、事件三要素" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>3.2、事件三要素 <a class="header-anchor" href="#_3-2、事件三要素" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)3.2、事件三要素&quot;">​</a></h3><ol><li>事件源(谁)</li><li>事件类型(什么事件)</li><li>事件处理程序(做啥)</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    // 点击一个按钮，弹出对话框</span></span>
<span class="line"><span>    // 1. 事件是有三部分组成  事件源  事件类型  事件处理程序   我们也称为事件三要素</span></span>
<span class="line"><span>    //(1) 事件源 事件被触发的对象   谁  按钮</span></span>
<span class="line"><span>    var btn = document.getElementById(&#39;btn&#39;);</span></span>
<span class="line"><span>    //(2) 事件类型  如何触发 什么事件 比如鼠标点击(onclick) 还是鼠标经过 还是键盘按下</span></span>
<span class="line"><span>    //(3) 事件处理程序  通过一个函数赋值的方式 完成</span></span>
<span class="line"><span>    btn.onclick = function() {</span></span>
<span class="line"><span>        alert(&#39;点秋香&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="_3-3、执行事件的步骤" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>3.3、执行事件的步骤 <a class="header-anchor" href="#_3-3、执行事件的步骤" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)3.3、执行事件的步骤&quot;">​</a></h3><ol><li>获取事件源</li><li>注册事件(绑定事件)</li><li>添加事件处理程序(采取函数赋值形式)</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    // 执行事件步骤</span></span>
<span class="line"><span>    // 点击div 控制台输出 我被选中了</span></span>
<span class="line"><span>    // 1. 获取事件源</span></span>
<span class="line"><span>    var div = document.querySelector(&#39;div&#39;);</span></span>
<span class="line"><span>    // 2.绑定事件 注册事件</span></span>
<span class="line"><span>    // div.onclick </span></span>
<span class="line"><span>    // 3.添加事件处理程序 </span></span>
<span class="line"><span>    div.onclick = function() {</span></span>
<span class="line"><span>        console.log(&#39;我被选中了&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="_3-4、鼠标事件" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>3.4、鼠标事件 <a class="header-anchor" href="#_3-4、鼠标事件" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)3.4、鼠标事件&quot;">​</a></h3><table><thead><tr><th>鼠标事件</th><th>触发条件</th></tr></thead><tbody><tr><td>onclick</td><td>鼠标点击左键触发</td></tr><tr><td>onmouseover</td><td>鼠标经过触发</td></tr><tr><td>onmouseout</td><td>鼠标离开触发</td></tr><tr><td>onfocus</td><td>获得鼠标焦点触发</td></tr><tr><td>onblur</td><td>失去鼠标焦点触发</td></tr><tr><td>onmousemove</td><td>鼠标移动触发</td></tr><tr><td>onmouseup</td><td>鼠标弹起触发</td></tr><tr><td>onmousedown</td><td>鼠标按下触发</td></tr></tbody></table><h2 id="操作元素" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>操作元素 <a class="header-anchor" href="#操作元素" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)操作元素&quot;">​</a></h2><p>JavaScript 的 DOM 操作可以改变网页内容、结构和样式，我们可以利用 DOM 操作元素来改变元素里面的内容 、属性等。注意以下都是属性</p><h3 id="_4-1、改变元素内容" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>4.1、改变元素内容 <a class="header-anchor" href="#_4-1、改变元素内容" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)4.1、改变元素内容&quot;">​</a></h3><p>从起始位置到终止位置的内容，但它去除html标签，同时空格和换行也会去掉。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>element.innerText</span></span></code></pre></div><p>起始位置到终止位置的全部内容，包括HTML标签，同时保留空格和换行</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>element.innerHTML</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;p&gt;</span></span>
<span class="line"><span>        我是文字</span></span>
<span class="line"><span>        &lt;span&gt;123&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // innerText 和 innerHTML的区别 </span></span>
<span class="line"><span>        // 1. innerText 不识别html标签,去除空格和换行</span></span>
<span class="line"><span>        var div = document.querySelector(&#39;div&#39;);</span></span>
<span class="line"><span>        div.innerText = &#39;&lt;strong&gt;今天是：&lt;/strong&gt; 2019&#39;;</span></span>
<span class="line"><span>        // 2. innerHTML 识别html标签 保留空格和换行的</span></span>
<span class="line"><span>        div.innerHTML = &#39;&lt;strong&gt;今天是：&lt;/strong&gt; 2019&#39;;</span></span>
<span class="line"><span>        // 这两个属性是可读写的  可以获取元素里面的内容</span></span>
<span class="line"><span>        var p = document.querySelector(&#39;p&#39;);</span></span>
<span class="line"><span>        console.log(p.innerText);</span></span>
<span class="line"><span>        console.log(p.innerHTML);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><p><img src="https://img-blog.csdnimg.cn/f3394f40561e45c299c09d7bbecdb513.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><h3 id="_4-2、改变元素属性" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>4.2、改变元素属性 <a class="header-anchor" href="#_4-2、改变元素属性" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)4.2、改变元素属性&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// img.属性</span></span>
<span class="line"><span>img.src = &quot;xxx&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>input.value = &quot;xxx&quot;;</span></span>
<span class="line"><span>input.type = &quot;xxx&quot;;</span></span>
<span class="line"><span>input.checked = &quot;xxx&quot;;</span></span>
<span class="line"><span>input.selected = true / false;</span></span>
<span class="line"><span>input.disabled = true / false;</span></span></code></pre></div><h3 id="_4-3、改变样式属性" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>4.3、改变样式属性 <a class="header-anchor" href="#_4-3、改变样式属性" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)4.3、改变样式属性&quot;">​</a></h3><p>我们可以通过 JS 修改元素的大小、颜色、位置等样式。</p><ul><li>行内样式操作</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// element.style</span></span>
<span class="line"><span>div.style.backgroundColor = &#39;pink&#39;;</span></span>
<span class="line"><span>div.style.width = &#39;250px&#39;;</span></span></code></pre></div><ul><li>类名样式操作</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// element.className</span></span></code></pre></div><p>注意：</p><ol><li>JS里面的样式采取驼峰命名法，比如 fontSize ，backgroundColor</li><li>JS 修改 style 样式操作 ，产生的是行内样式，CSS权重比较高</li><li>如果样式修改较多，可以采取操作类名方式更改元素样式</li><li>class 因为是个保留字，因此使用<code>className</code>来操作元素类名属性</li><li>className 会直接更改元素的类名，会覆盖原先的类名</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;first&quot;&gt;文本&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 1. 使用 element.style 获得修改元素样式  如果样式比较少 或者 功能简单的情况下使用</span></span>
<span class="line"><span>        var test = document.querySelector(&#39;div&#39;);</span></span>
<span class="line"><span>        test.onclick = function() {</span></span>
<span class="line"><span>            // this.style.backgroundColor = &#39;purple&#39;;</span></span>
<span class="line"><span>            // this.style.color = &#39;#fff&#39;;</span></span>
<span class="line"><span>            // this.style.fontSize = &#39;25px&#39;;</span></span>
<span class="line"><span>            // this.style.marginTop = &#39;100px&#39;;</span></span>
<span class="line"><span>            // 让我们当前元素的类名改为了 change</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 2. 我们可以通过 修改元素的className更改元素的样式 适合于样式较多或者功能复杂的情况</span></span>
<span class="line"><span>            // 3. 如果想要保留原先的类名，我们可以这么做 多类名选择器</span></span>
<span class="line"><span>            // this.className = &#39;change&#39;;</span></span>
<span class="line"><span>            this.className = &#39;first change&#39;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_4-4、总结" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>4.4、总结 <a class="header-anchor" href="#_4-4、总结" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)4.4、总结&quot;">​</a></h3><p><img src="https://img-blog.csdnimg.cn/f6835ead437948e3804c4432ceb812ad.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><h3 id="_4-5、排他思想" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>4.5、排他思想 <a class="header-anchor" href="#_4-5、排他思想" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)4.5、排他思想&quot;">​</a></h3><p>如果有同一组元素，我们相要某一个元素实现某种样式，需要用到循环的排他思想算法：</p><ol><li>所有元素全部清除样式（干掉其他人）</li><li>给当前元素设置样式 （留下我自己）</li><li>注意顺序不能颠倒，首先干掉其他人，再设置自己</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;button&gt;按钮1&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;button&gt;按钮2&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;button&gt;按钮3&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;button&gt;按钮4&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;button&gt;按钮5&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 1. 获取所有按钮元素</span></span>
<span class="line"><span>        var btns = document.getElementsByTagName(&#39;button&#39;);</span></span>
<span class="line"><span>        // btns得到的是伪数组  里面的每一个元素 btns[i]</span></span>
<span class="line"><span>        for (var i = 0; i &lt; btns.length; i++) {</span></span>
<span class="line"><span>            btns[i].onclick = function() {</span></span>
<span class="line"><span>                // (1) 我们先把所有的按钮背景颜色去掉  干掉所有人</span></span>
<span class="line"><span>                for (var i = 0; i &lt; btns.length; i++) {</span></span>
<span class="line"><span>                    btns[i].style.backgroundColor = &#39;&#39;;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                // (2) 然后才让当前的元素背景颜色为pink 留下我自己</span></span>
<span class="line"><span>                this.style.backgroundColor = &#39;pink&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //2. 首先先排除其他人，然后才设置自己的样式 这种排除其他人的思想我们成为排他思想</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><p><img src="https://img-blog.csdnimg.cn/c4ab0beac7444b208441727a380b437e.gif#pic_center" alt="在这里插入图片描述"></p><h3 id="_4-6、自定义属性" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>4.6、自定义属性 <a class="header-anchor" href="#_4-6、自定义属性" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)4.6、自定义属性&quot;">​</a></h3><h4 id="_4-6-1、获取属性值" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>4.6.1、获取属性值 <a class="header-anchor" href="#_4-6-1、获取属性值" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)4.6.1、获取属性值&quot;">​</a></h4><ul><li>获取内置属性值(元素本身自带的属性)</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>element.属性;</span></span></code></pre></div><ul><li>获取自定义的属性</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>element.getAttribute(&#39;属性&#39;);</span></span></code></pre></div><h4 id="_4-6-2、设置属性值" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>4.6.2、设置属性值 <a class="header-anchor" href="#_4-6-2、设置属性值" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)4.6.2、设置属性值&quot;">​</a></h4><ul><li>设置内置属性值</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>element.属性 = &#39;值&#39;;</span></span></code></pre></div><ul><li>主要设置自定义的属性</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>element.setAttribute(&#39;属性&#39;,&#39;值&#39;);</span></span></code></pre></div><h4 id="_4-6-3、移除属性" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>4.6.3、移除属性 <a class="header-anchor" href="#_4-6-3、移除属性" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)4.6.3、移除属性&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>element.removeAttribute(&#39;属性&#39;);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;demo&quot; index=&quot;1&quot; class=&quot;nav&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        var div = document.querySelector(&#39;div&#39;);</span></span>
<span class="line"><span>        // 1. 获取元素的属性值</span></span>
<span class="line"><span>        // (1) element.属性</span></span>
<span class="line"><span>        console.log(div.id);</span></span>
<span class="line"><span>        //(2) element.getAttribute(&#39;属性&#39;)  get得到获取 attribute 属性的意思 我们程序员自己添加的属性我们称为自定义属性 index</span></span>
<span class="line"><span>        console.log(div.getAttribute(&#39;id&#39;));</span></span>
<span class="line"><span>        console.log(div.getAttribute(&#39;index&#39;));</span></span>
<span class="line"><span>        // 2. 设置元素属性值</span></span>
<span class="line"><span>        // (1) element.属性= &#39;值&#39;</span></span>
<span class="line"><span>        div.id = &#39;test&#39;;</span></span>
<span class="line"><span>        div.className = &#39;navs&#39;;</span></span>
<span class="line"><span>        // (2) element.setAttribute(&#39;属性&#39;, &#39;值&#39;);  主要针对于自定义属性</span></span>
<span class="line"><span>        div.setAttribute(&#39;index&#39;, 2);</span></span>
<span class="line"><span>        div.setAttribute(&#39;class&#39;, &#39;footer&#39;); // class 特殊  这里面写的就是class 不是className</span></span>
<span class="line"><span>        // 3 移除属性 removeAttribute(属性)    </span></span>
<span class="line"><span>        div.removeAttribute(&#39;index&#39;);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_4-7、h5自定义属性" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>4.7、H5自定义属性 <a class="header-anchor" href="#_4-7、h5自定义属性" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)4.7、H5自定义属性&quot;">​</a></h3><p>自定义属性目的：</p><ul><li>保存并保存数据，有些数据可以保存到页面中而不用保存到数据库中</li><li>有些自定义属性很容易引起歧义，不容易判断到底是内置属性还是自定义的，所以H5有了规定</li></ul><h4 id="_4-7-1-设置h5自定义属性" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>4.7.1 设置H5自定义属性 <a class="header-anchor" href="#_4-7-1-设置h5自定义属性" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)4.7.1 设置H5自定义属性&quot;">​</a></h4><p>H5规定自定义属性 <code>data-</code>开头作为属性名并赋值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div data-index = &quot;1&quot;&gt;&lt;/&gt;</span></span>
<span class="line"><span>// 或者使用JavaScript设置</span></span>
<span class="line"><span>div.setAttribute(&#39;data-index&#39;,1);</span></span></code></pre></div><h4 id="_4-7-2-获取h5自定义属性" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>4.7.2 获取H5自定义属性 <a class="header-anchor" href="#_4-7-2-获取h5自定义属性" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)4.7.2 获取H5自定义属性&quot;">​</a></h4><ul><li>兼容性获取 <code>element.getAttribute(&#39;data-index&#39;)</code></li><li>H5新增的：<code>element.dataset.index</code> 或<code>element.dataset[&#39;index&#39;]</code> IE11才开始支持</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div getTime=&quot;20&quot; data-index=&quot;2&quot; data-list-name=&quot;andy&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        var div = document.querySelector(&#39;div&#39;);</span></span>
<span class="line"><span>        console.log(div.getAttribute(&#39;getTime&#39;));</span></span>
<span class="line"><span>        div.setAttribute(&#39;data-time&#39;, 20);</span></span>
<span class="line"><span>        console.log(div.getAttribute(&#39;data-index&#39;));</span></span>
<span class="line"><span>        console.log(div.getAttribute(&#39;data-list-name&#39;));</span></span>
<span class="line"><span>        // h5新增的获取自定义属性的方法 它只能获取data-开头的</span></span>
<span class="line"><span>        // dataset 是一个集合里面存放了所有以data开头的自定义属性</span></span>
<span class="line"><span>        console.log(div.dataset);</span></span>
<span class="line"><span>        console.log(div.dataset.index);</span></span>
<span class="line"><span>        console.log(div.dataset[&#39;index&#39;]);</span></span>
<span class="line"><span>        // 如果自定义属性里面有多个-链接的单词，我们获取的时候采取 驼峰命名法</span></span>
<span class="line"><span>        console.log(div.dataset.listName);</span></span>
<span class="line"><span>        console.log(div.dataset[&#39;listName&#39;]);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h2 id="节点操作" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>节点操作 <a class="header-anchor" href="#节点操作" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)节点操作&quot;">​</a></h2><p>获取元素通常使用两种方式：</p><table><thead><tr><th>1.利用DOM提供的方法获取元素</th><th>2.利用节点层级关系获取元素</th></tr></thead><tbody><tr><td>document.getElementById()</td><td>利用父子兄节点关系获取元素</td></tr><tr><td>document.getElementsByTagName()</td><td>逻辑性强，但是兼容性较差</td></tr><tr><td>document.querySelector 等</td><td></td></tr><tr><td>逻辑性不强，繁琐</td><td></td></tr></tbody></table><p>这两种方式都可以获取元素节点，我们后面都会使用，但是节点操作更简单</p><p>一般的，节点至少拥有三个基本属性</p><h3 id="_5-1、节点概述" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>5.1、节点概述 <a class="header-anchor" href="#_5-1、节点概述" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)5.1、节点概述&quot;">​</a></h3><p>网页中的所有内容都是节点（标签、属性、文本、注释等），在DOM 中，节点使用 node 来表示。</p><p>HTML DOM 树中的所有节点均可通过 JavaScript 进行访问，所有 HTML 元素（节点）均可被修改，也可以创建或删除。</p><p><img src="https://img-blog.csdnimg.cn/f176c025b5ff43468d53ed4d49259812.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><p>一般的，节点至少拥有nodeType（节点类型）、nodeName（节点名称）和nodeValue（节点值）这三个基本属性。</p><ul><li>元素节点：nodeType 为1</li><li>属性节点：nodeType 为2</li><li>文本节点：nodeType 为3(文本节点包括文字、空格、换行等)</li></ul><p>我们在实际开发中，节点操作主要操作的是<strong>元素节点</strong></p><p>利用 DOM 树可以把节点划分为不同的层级关系，常见的是<strong>父子兄层级关系</strong>。</p><h3 id="_5-2、父级节点" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>5.2、父级节点 <a class="header-anchor" href="#_5-2、父级节点" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)5.2、父级节点&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>node.parentNode</span></span></code></pre></div><ul><li><code>parentNode</code>属性可以返回某节点的父结点，注意是最近的一个父结点</li><li>如果指定的节点没有父结点则返回null</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;!-- 节点的优点 --&gt;</span></span>
<span class="line"><span>    &lt;div&gt;我是div&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;span&gt;我是span&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>        &lt;li&gt;我是li&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;我是li&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;我是li&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;我是li&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;demo&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span>            &lt;span class=&quot;erweima&quot;&gt;×&lt;/span&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 1. 父节点 parentNode</span></span>
<span class="line"><span>        var erweima = document.querySelector(&#39;.erweima&#39;);</span></span>
<span class="line"><span>        // var box = document.querySelector(&#39;.box&#39;);</span></span>
<span class="line"><span>        // 得到的是离元素最近的父级节点(亲爸爸) 如果找不到父节点就返回为 null</span></span>
<span class="line"><span>        console.log(erweima.parentNode);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_5-3、子结点" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>5.3、子结点 <a class="header-anchor" href="#_5-3、子结点" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)5.3、子结点&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>parentNode.childNodes(标准)</span></span></code></pre></div><ul><li><code>parentNode.childNodes</code> 返回包含指定节点的子节点的集合，该集合为即时更新的集合</li><li>返回值包含了所有的子结点，包括元素节点，文本节点等</li><li>如果只想要获得里面的元素节点，则需要专门处理。所以我们一般不提倡使用<code>childNodes</code></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>parentNode.children(非标准)</span></span></code></pre></div><ul><li><code>parentNode.children</code> 是一个只读属性，返回所有的子元素节点</li><li>它只返回子元素节点，其余节点不返回 （<strong>这个是我们重点掌握的</strong>）</li><li>虽然 children 是一个非标准，但是得到了各个浏览器的支持，因此我们可以放心使用</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>        &lt;li&gt;我是li&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;我是li&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;我是li&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;我是li&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;ol&gt;</span></span>
<span class="line"><span>        &lt;li&gt;我是li&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;我是li&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;我是li&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;我是li&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ol&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // DOM 提供的方法（API）获取</span></span>
<span class="line"><span>        var ul = document.querySelector(&#39;ul&#39;);</span></span>
<span class="line"><span>        var lis = ul.querySelectorAll(&#39;li&#39;);</span></span>
<span class="line"><span>        // 1. 子节点  childNodes 所有的子节点 包含 元素节点 文本节点等等</span></span>
<span class="line"><span>        console.log(ul.childNodes);</span></span>
<span class="line"><span>        console.log(ul.childNodes[0].nodeType);</span></span>
<span class="line"><span>        console.log(ul.childNodes[1].nodeType);</span></span>
<span class="line"><span>        // 2. children 获取所有的子元素节点 也是我们实际开发常用的</span></span>
<span class="line"><span>        console.log(ul.children);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h4 id="_5-3-1、第一个子结点" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>5.3.1、第一个子结点 <a class="header-anchor" href="#_5-3-1、第一个子结点" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)5.3.1、第一个子结点&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>parentNode.firstChild</span></span></code></pre></div><ul><li><code>firstChild</code> 返回第一个子节点，找不到则返回null</li><li>同样，也是包含所有的节点</li></ul><h4 id="_5-3-2、最后一个子结点" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>5.3.2、最后一个子结点 <a class="header-anchor" href="#_5-3-2、最后一个子结点" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)5.3.2、最后一个子结点&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>parentNode.lastChild</span></span></code></pre></div><ul><li><code>lastChild</code> 返回最后一个子节点，找不到则返回null</li><li>同样，也是包含所有的节点</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;ol&gt;</span></span>
<span class="line"><span>        &lt;li&gt;我是li1&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;我是li2&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;我是li3&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;我是li4&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;我是li5&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ol&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        var ol = document.querySelector(&#39;ol&#39;);</span></span>
<span class="line"><span>        // 1. firstChild 第一个子节点 不管是文本节点还是元素节点</span></span>
<span class="line"><span>        console.log(ol.firstChild);</span></span>
<span class="line"><span>        console.log(ol.lastChild);</span></span>
<span class="line"><span>        // 2. firstElementChild 返回第一个子元素节点 ie9才支持</span></span>
<span class="line"><span>        console.log(ol.firstElementChild);</span></span>
<span class="line"><span>        console.log(ol.lastElementChild);</span></span>
<span class="line"><span>        // 3. 实际开发的写法  既没有兼容性问题又返回第一个子元素</span></span>
<span class="line"><span>        console.log(ol.children[0]);			//第一个子元素节点</span></span>
<span class="line"><span>        console.log(ol.children[ol.children.length - 1]);//最后一个子元素节点</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><p><img src="https://img-blog.csdnimg.cn/dde9c5a059d34c8da3641043a4ecb7df.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><h4 id="_5-3-3、第一个子结点-兼容性" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>5.3.3、第一个子结点(兼容性) <a class="header-anchor" href="#_5-3-3、第一个子结点-兼容性" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)5.3.3、第一个子结点(兼容性)&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>parentNode.firstElementChild</span></span></code></pre></div><ul><li><code>firstElementChild</code> 返回第一个子节点，找不到则返回null</li><li>有兼容性问题，IE9以上才支持</li></ul><h4 id="_5-3-4、最后一个子结点-兼容性" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>5.3.4、最后一个子结点(兼容性) <a class="header-anchor" href="#_5-3-4、最后一个子结点-兼容性" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)5.3.4、最后一个子结点(兼容性)&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>parentNode.lastElementChild</span></span></code></pre></div><ul><li><code>lastElementChild</code> 返回最后一个子节点，找不到则返回null</li><li>有兼容性问题，IE9以上才支持</li></ul><h4 id="_5-3-5、解决方案" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>5.3.5、解决方案 <a class="header-anchor" href="#_5-3-5、解决方案" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)5.3.5、解决方案&quot;">​</a></h4><p>实际开发中，firstChild 和 lastChild 包含其他节点，操作不方便，而 firstElementChild 和 lastElementChild 又有兼容性问题，那么我们如何获取第一个子元素节点或最后一个子元素节点呢？</p><blockquote><p>解决方案</p></blockquote><ul><li><p>如果想要第一个子元素节点，可以使用 <code>parentNode.chilren[0]</code></p></li><li><p>如果想要最后一个子元素节点，可以使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 数组元素个数减1 就是最后一个元素的索引号</span></span>
<span class="line"><span>parentNode.chilren[parentNode.chilren.length - 1]</span></span></code></pre></div></li><li><p>示例：</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;ol&gt;</span></span>
<span class="line"><span>        &lt;li&gt;我是li1&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;我是li2&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;我是li3&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;我是li4&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ol&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        var ol = document.querySelector(&#39;ol&#39;);</span></span>
<span class="line"><span>        // 1.firstChild 获取第一个子结点的，包含文本结点和元素结点</span></span>
<span class="line"><span>        console.log(ol.firstChild);</span></span>
<span class="line"><span>        // 返回的是文本结点 #text(第一个换行结点)</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        console.log(ol.lastChild);</span></span>
<span class="line"><span>        // 返回的是文本结点 #text(最后一个换行结点)</span></span>
<span class="line"><span>        // 2. firstElementChild 返回第一个子元素结点</span></span>
<span class="line"><span>        console.log(ol.firstElementChild);</span></span>
<span class="line"><span>        // &lt;li&gt;我是li1&lt;/li&gt;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 第2个方法有兼容性问题，需要IE9以上才支持</span></span>
<span class="line"><span>        // 3.实际开发中，既没有兼容性问题，又返回第一个子元素</span></span>
<span class="line"><span>        console.log(ol.children[0]);</span></span>
<span class="line"><span>        // &lt;li&gt;我是li1&lt;/li&gt;</span></span>
<span class="line"><span>        console.log(ol.children[3]);</span></span>
<span class="line"><span>        // &lt;li&gt;我是li4&lt;/li&gt;</span></span>
<span class="line"><span>        // 当里面li个数不唯一时候，需要取到最后一个结点时这么写</span></span>
<span class="line"><span>        console.log(ol.children[ol.children.length - 1]);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_5-4、兄弟节点" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>5.4、兄弟节点 <a class="header-anchor" href="#_5-4、兄弟节点" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)5.4、兄弟节点&quot;">​</a></h3><h4 id="_5-4-1、下一个兄弟节点" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>5.4.1、下一个兄弟节点 <a class="header-anchor" href="#_5-4-1、下一个兄弟节点" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)5.4.1、下一个兄弟节点&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>node.nextSibling</span></span></code></pre></div><ul><li><code>nextSibling</code> 返回当前元素的下一个兄弟元素节点，找不到则返回null</li><li>同样，也是包含所有的节点</li></ul><h4 id="_5-4-2、上一个兄弟节点" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>5.4.2、上一个兄弟节点 <a class="header-anchor" href="#_5-4-2、上一个兄弟节点" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)5.4.2、上一个兄弟节点&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>node.previousSibling</span></span></code></pre></div><ul><li><p><code>previousSibling</code> 返回当前元素上一个兄弟元素节点，找不到则返回null</p></li><li><p>同样，也是包含所有的节点</p></li></ul><h4 id="_5-4-3、下一个兄弟节点-兼容性" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>5.4.3、下一个兄弟节点(兼容性) <a class="header-anchor" href="#_5-4-3、下一个兄弟节点-兼容性" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)5.4.3、下一个兄弟节点(兼容性)&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>node.nextElementSibling</span></span></code></pre></div><ul><li><code>nextElementSibling</code> 返回当前元素下一个兄弟元素节点，找不到则返回null</li><li>有兼容性问题，IE9才支持</li></ul><h4 id="_5-4-4、上一个兄弟节点-兼容性" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>5.4.4、上一个兄弟节点(兼容性) <a class="header-anchor" href="#_5-4-4、上一个兄弟节点-兼容性" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)5.4.4、上一个兄弟节点(兼容性)&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>node.previousElementSibling</span></span></code></pre></div><ul><li><code>previousElementSibling</code> 返回当前元素上一个兄弟元素节点，找不到则返回null</li><li>有兼容性问题，IE9才支持</li></ul><p>示例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div&gt;我是div&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;span&gt;我是span&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        var div = document.querySelector(&#39;div&#39;);</span></span>
<span class="line"><span>        // 1.nextSibling 下一个兄弟节点 包含元素节点或者 文本节点等等</span></span>
<span class="line"><span>        console.log(div.nextSibling);		// #text</span></span>
<span class="line"><span>        console.log(div.previousSibling);	// #text</span></span>
<span class="line"><span>        // 2. nextElementSibling 得到下一个兄弟元素节点</span></span>
<span class="line"><span>        console.log(div.nextElementSibling);	//&lt;span&gt;我是span&lt;/span&gt;</span></span>
<span class="line"><span>        console.log(div.previousElementSibling);//null</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><p><strong>如何解决兼容性问题 ？</strong></p><p>答：自己封装一个兼容性的函数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function getNextElementSibling(element) {</span></span>
<span class="line"><span>    var el = element;</span></span>
<span class="line"><span>    while(el = el.nextSibling) {</span></span>
<span class="line"><span>        if(el.nodeType === 1){</span></span>
<span class="line"><span>            return el;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return null;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_5-5、创建节点" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>5.5、创建节点 <a class="header-anchor" href="#_5-5、创建节点" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)5.5、创建节点&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>document.createElement(&#39;tagName&#39;);</span></span></code></pre></div><ul><li><code>document.createElement()</code> 方法创建由 tagName 指定的HTML 元素</li><li>因为这些元素原先不存在，是根据我们的需求动态生成的，所以我们也称为<strong>动态创建元素节点</strong></li></ul><h4 id="_5-5-1、添加节点" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>5.5.1、添加节点 <a class="header-anchor" href="#_5-5-1、添加节点" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)5.5.1、添加节点&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>node.appendChild(child)</span></span></code></pre></div><ul><li><code>node.appendChild()</code> 方法将一个节点添加到指定父节点的子节点列表<strong>末尾</strong>。类似于 CSS 里面的 after 伪元素。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>node.insertBefore(child,指定元素)</span></span></code></pre></div><ul><li><code>node.insertBefore()</code> 方法将一个节点添加到父节点的指定子节点<strong>前面</strong>。类似于 CSS 里面的 before 伪元素。</li></ul><p>示例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>        &lt;li&gt;123&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 1. 创建节点元素节点</span></span>
<span class="line"><span>        var li = document.createElement(&#39;li&#39;);</span></span>
<span class="line"><span>        // 2. 添加节点 node.appendChild(child)  node 父级  child 是子级 后面追加元素  类似于数组中的push</span></span>
<span class="line"><span>        // 先获取父亲ul</span></span>
<span class="line"><span>        var ul = document.querySelector(&#39;ul&#39;);</span></span>
<span class="line"><span>        ul.appendChild(li);</span></span>
<span class="line"><span>        // 3. 添加节点 node.insertBefore(child, 指定元素);</span></span>
<span class="line"><span>        var lili = document.createElement(&#39;li&#39;);</span></span>
<span class="line"><span>        ul.insertBefore(lili, ul.children[0]);</span></span>
<span class="line"><span>        // 4. 我们想要页面添加一个新的元素分两步: 1. 创建元素 2. 添加元素</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h4 id="_5-5-2、删除节点" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>5.5.2、删除节点 <a class="header-anchor" href="#_5-5-2、删除节点" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)5.5.2、删除节点&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>node.removeChild(child)</span></span></code></pre></div><ul><li><code>node.removeChild()</code>方法从 DOM 中删除一个子节点，返回删除的节点</li></ul><h4 id="_5-5-3、复制节点-克隆节点" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>5.5.3、复制节点(克隆节点) <a class="header-anchor" href="#_5-5-3、复制节点-克隆节点" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)5.5.3、复制节点(克隆节点)&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>node.cloneNode()</span></span></code></pre></div><ul><li><code>node.cloneNode()</code>方法返回调用该方法的节点的一个副本。 也称为克隆节点/拷贝节点</li><li>如果括号参数为空或者为 false ，则是浅拷贝，即只克隆复制节点本身，不克隆里面的子节点</li><li>如果括号参数为 true ，则是深度拷贝，会复制节点本身以及里面所有的子节点</li></ul><p>示例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>        &lt;li&gt;1111&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        var ul = document.querySelector(&#39;ul&#39;);</span></span>
<span class="line"><span>        // 1. node.cloneNode(); 括号为空或者里面是false 浅拷贝 只复制标签不复制里面的内容</span></span>
<span class="line"><span>        // 2. node.cloneNode(true); 括号为true 深拷贝 复制标签复制里面的内容</span></span>
<span class="line"><span>        var lili = ul.children[0].cloneNode(true);</span></span>
<span class="line"><span>        ul.appendChild(lili);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><p><img src="https://img-blog.csdnimg.cn/78d882e140344b47b288cbf90fd79a50.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><h4 id="_5-5-4、面试题" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>5.5.4、面试题 <a class="header-anchor" href="#_5-5-4、面试题" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)5.5.4、面试题&quot;">​</a></h4><p>三种动态创建元素的区别</p><ul><li>doucument.write()</li><li>element.innerHTML</li><li>document.createElement()</li></ul><p>区别：</p><ul><li><code>document.write()</code> 是直接将内容写入页面的内容流，但是文档流执行完毕，则它会导致页面全部重绘</li><li><code>innerHTML</code> 是将内容写入某个 DOM 节点，不会导致页面全部重绘</li><li><code>innerHTML</code> 创建多个元素效率更高（不要拼接字符串，采取数组形式拼接），结构稍微复杂</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;innner&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;create&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 2. innerHTML 创建元素</span></span>
<span class="line"><span>        var inner = document.querySelector(&#39;.inner&#39;);</span></span>
<span class="line"><span>        // 2.1 innerHTML 用拼接字符串方法</span></span>
<span class="line"><span>        for (var i = 0; i &lt;= 100; i++) {</span></span>
<span class="line"><span>            inner.innerHTML += &#39;&lt;a href=&quot;#&quot;&gt;百度&lt;/a&gt;&#39;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 2.2 innerHTML 用数组形式拼接</span></span>
<span class="line"><span>        var arr = [];</span></span>
<span class="line"><span>        for (var i = 0; i &lt;= 100; i++) {</span></span>
<span class="line"><span>            arr.push(&#39;&lt;a href=&quot;#&quot;&gt;百度&lt;/a&gt;&#39;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        inner.innerHTML = arr.join(&#39;&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 3.document.createElement() 创建元素</span></span>
<span class="line"><span>        var create = document.querySelector(&#39;.create&#39;);</span></span>
<span class="line"><span>        var a = document.createElement(&#39;a&#39;);</span></span>
<span class="line"><span>        create.appendChild(a);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><ul><li><code>createElement()</code>创建多个元素效率稍低一点点，但是结构更清晰</li></ul><blockquote><p>总结：不同浏览器下， innerHTML 效率要比 createElement 高</p></blockquote><h2 id="dom核心" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>DOM核心 <a class="header-anchor" href="#dom核心" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)DOM核心&quot;">​</a></h2><p>对于DOM操作，我们主要针对子元素的操作，主要有</p><ul><li>创建</li><li>增</li><li>删</li><li>改</li><li>查</li><li>属性操作</li><li>时间操作</li></ul><h3 id="_6-1、创建" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>6.1、创建 <a class="header-anchor" href="#_6-1、创建" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)6.1、创建&quot;">​</a></h3><ol><li>document.write</li><li>innerHTML</li><li>createElement</li></ol><h3 id="_6-2、增" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>6.2、增 <a class="header-anchor" href="#_6-2、增" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)6.2、增&quot;">​</a></h3><ol><li>appendChild</li><li>insertBefore</li></ol><h3 id="_6-3、删" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>6.3、删 <a class="header-anchor" href="#_6-3、删" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)6.3、删&quot;">​</a></h3><ol><li>removeChild</li></ol><h3 id="_6-4、改" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>6.4、改 <a class="header-anchor" href="#_6-4、改" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)6.4、改&quot;">​</a></h3><ul><li>主要修改dom的元素属性，dom元素的内容、属性、表单的值等</li></ul><ol><li>修改元素属性：src、href、title 等</li><li>修改普通元素内容：innerHTML、innerText</li><li>修改表单元素：value、type、disabled</li><li>修改元素样式：style、className</li></ol><h3 id="_6-5、查" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>6.5、查 <a class="header-anchor" href="#_6-5、查" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)6.5、查&quot;">​</a></h3><ul><li>主要获取查询dom的元素</li></ul><ol><li><strong>DOM提供的API方法</strong>：getElementById、getElementsByTagName (古老用法，不推荐)</li><li><strong>H5提供的新方法</strong>：querySelector、querySelectorAll (提倡)</li><li>利用节点操作获取元素：父(parentNode)、子(children)、兄(previousElementSibling、nextElementSibling) 提倡</li></ol><h3 id="_6-6、属性操作" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>6.6、属性操作 <a class="header-anchor" href="#_6-6、属性操作" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)6.6、属性操作&quot;">​</a></h3><ul><li>主要针对于自定义属性</li></ul><ol><li>setAttribute：设置dom的属性值</li><li>getAttribute：得到dom的属性值</li><li>removeAttribute：移除属性</li></ol><h2 id="事件高级" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>事件高级 <a class="header-anchor" href="#事件高级" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)事件高级&quot;">​</a></h2><h3 id="_7-1、注册事件-绑定事件" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>7.1、注册事件(绑定事件) <a class="header-anchor" href="#_7-1、注册事件-绑定事件" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)7.1、注册事件(绑定事件)&quot;">​</a></h3><p>给元素添加事件，称为注册事件或者绑定事件。</p><p>注册事件有两种方式：传统方式和方法监听注册方式</p><table><thead><tr><th>传统注册方式</th><th>方法监听注册方式</th></tr></thead><tbody><tr><td>利用 on 开头的事件 onclick</td><td>w3c 标准推荐方式</td></tr><tr><td><code>&lt;button onclick = &quot;alert(&quot;hi&quot;)&quot;&gt;&lt;/button&gt;</code></td><td>addEventListener() 它是一个方法</td></tr><tr><td>btn.onclick = function() {}</td><td>IE9 之前的 IE 不支持此方法，可使用 attachEvent() 代替</td></tr><tr><td>特点：注册事件的唯一性</td><td>特点：同一个元素同一个事件可以注册多个监听器</td></tr><tr><td>同一个元素同一个事件只能设置一个处理函数，最后注册的处理函数将会覆盖前面注册的处理函数</td><td>按注册顺序依次执行</td></tr></tbody></table><h4 id="_1addeventlistener事件监听方式" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>①addEventListener事件监听方式 <a class="header-anchor" href="#_1addeventlistener事件监听方式" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)①addEventListener事件监听方式&quot;">​</a></h4><ul><li><code>eventTarget.addEventListener()</code>方法将指定的监听器注册到 eventTarget（目标对象）上</li><li>当该对象触发指定的事件时，就会执行事件处理函数</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>eventTarget.addEventListener(type,listener[,useCapture])</span></span></code></pre></div><p>该方法接收三个参数：</p><ul><li><code>type</code>:事件类型字符串，比如click,mouseover,注意这里不要带on</li><li><code>listener</code>：事件处理函数，事件发生时，会调用该监听函数</li><li><code>useCapture</code>：可选参数，是一个布尔值，默认是 false。学完 DOM 事件流后，我们再进一步学习</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;button&gt;传统注册事件&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;button&gt;方法监听注册事件&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;button&gt;ie9 attachEvent&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        var btns = document.querySelectorAll(&#39;button&#39;);</span></span>
<span class="line"><span>        // 1. 传统方式注册事件</span></span>
<span class="line"><span>        btns[0].onclick = function() {</span></span>
<span class="line"><span>            alert(&#39;hi&#39;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        btns[0].onclick = function() {</span></span>
<span class="line"><span>                alert(&#39;hao a u&#39;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // 2. 事件监听注册事件 addEventListener </span></span>
<span class="line"><span>            // (1) 里面的事件类型是字符串 所以加引号 而且不带on</span></span>
<span class="line"><span>            // (2) 同一个元素 同一个事件可以添加多个侦听器（事件处理程序）</span></span>
<span class="line"><span>        btns[1].addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span>            alert(22);</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        btns[1].addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span>                alert(33);</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            // 3. attachEvent ie9以前的版本支持</span></span>
<span class="line"><span>        btns[2].attachEvent(&#39;onclick&#39;, function() {</span></span>
<span class="line"><span>            alert(11);</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h4 id="_2attachevent事件监听方式-兼容" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>②attachEvent事件监听方式(兼容) <a class="header-anchor" href="#_2attachevent事件监听方式-兼容" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)②attachEvent事件监听方式(兼容)&quot;">​</a></h4><ul><li><code>eventTarget.attachEvent()</code>方法将指定的监听器注册到 eventTarget（目标对象） 上</li><li>当该对象触发指定的事件时，指定的回调函数就会被执行</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>eventTarget.attachEvent(eventNameWithOn,callback)</span></span></code></pre></div><p>该方法接收两个参数：</p><ul><li><code>eventNameWithOn</code>：事件类型字符串，比如 onclick 、onmouseover ，这里要带 on</li><li><code>callback</code>： 事件处理函数，当目标触发事件时回调函数被调用</li><li>ie9以前的版本支持</li></ul><h4 id="_3注册事件兼容性解决方案" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>③注册事件兼容性解决方案 <a class="header-anchor" href="#_3注册事件兼容性解决方案" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)③注册事件兼容性解决方案&quot;">​</a></h4><p>兼容性处理的原则：首先照顾大多数浏览器，再处理特殊浏览器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> function addEventListener(element, eventName, fn) {</span></span>
<span class="line"><span>      // 判断当前浏览器是否支持 addEventListener 方法</span></span>
<span class="line"><span>      if (element.addEventListener) {</span></span>
<span class="line"><span>        element.addEventListener(eventName, fn);  // 第三个参数 默认是false</span></span>
<span class="line"><span>      } else if (element.attachEvent) {</span></span>
<span class="line"><span>        element.attachEvent(&#39;on&#39; + eventName, fn);</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        // 相当于 element.onclick = fn;</span></span>
<span class="line"><span>        element[&#39;on&#39; + eventName] = fn;</span></span>
<span class="line"><span> }</span></span></code></pre></div><h3 id="_7-2、删除事件-解绑事件" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>7.2、删除事件(解绑事件) <a class="header-anchor" href="#_7-2、删除事件-解绑事件" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)7.2、删除事件(解绑事件)&quot;">​</a></h3><h4 id="_7-2-1、removeeventlistener删除事件方式" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>7.2.1、removeEventListener删除事件方式 <a class="header-anchor" href="#_7-2-1、removeeventlistener删除事件方式" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)7.2.1、removeEventListener删除事件方式&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>eventTarget.removeEventListener(type,listener[,useCapture]);</span></span></code></pre></div><p>该方法接收三个参数：</p><ul><li><code>type</code>:事件类型字符串，比如click,mouseover,注意这里不要带on</li><li><code>listener</code>：事件处理函数，事件发生时，会调用该监听函数</li><li><code>useCapture</code>：可选参数，是一个布尔值，默认是 false。学完 DOM 事件流后，我们再进一步学习</li></ul><h4 id="_7-2-2、detachevent删除事件方式-兼容" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>7.2.2、detachEvent删除事件方式(兼容) <a class="header-anchor" href="#_7-2-2、detachevent删除事件方式-兼容" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)7.2.2、detachEvent删除事件方式(兼容)&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>eventTarget.detachEvent(eventNameWithOn,callback);</span></span></code></pre></div><p>该方法接收两个参数：</p><ul><li><code>eventNameWithOn</code>：事件类型字符串，比如 onclick 、onmouseover ，这里要带 on</li><li><code>callback</code>： 事件处理函数，当目标触发事件时回调函数被调用</li><li>ie9以前的版本支持</li></ul><h4 id="_7-2-3、传统事件删除方式" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>7.2.3、传统事件删除方式 <a class="header-anchor" href="#_7-2-3、传统事件删除方式" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)7.2.3、传统事件删除方式&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>eventTarget.onclick = null;</span></span></code></pre></div><p>事件删除示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div&gt;1&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div&gt;2&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div&gt;3&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        var divs = document.querySelectorAll(&#39;div&#39;);</span></span>
<span class="line"><span>        divs[0].onclick = function() {</span></span>
<span class="line"><span>            alert(11);</span></span>
<span class="line"><span>            // 1. 传统方式删除事件</span></span>
<span class="line"><span>            divs[0].onclick = null;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 2.removeEventListener 删除事件</span></span>
<span class="line"><span>        divs[1].addEventListener(&#39;click&#39;,fn);   //里面的fn不需要调用加小括号</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        function fn(){</span></span>
<span class="line"><span>            alert(22);</span></span>
<span class="line"><span>            divs[1].removeEventListener(&#39;click&#39;,fn);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 3.IE9 中的删除事件方式</span></span>
<span class="line"><span>        divs[2].attachEvent(&#39;onclick&#39;,fn1);</span></span>
<span class="line"><span>        function fn1() {</span></span>
<span class="line"><span>            alert(33);</span></span>
<span class="line"><span>            divs[2].detachEvent(&#39;onclick&#39;,fn1);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h4 id="_7-2-4、删除事件兼容性解决方案" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>7.2.4、删除事件兼容性解决方案 <a class="header-anchor" href="#_7-2-4、删除事件兼容性解决方案" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)7.2.4、删除事件兼容性解决方案&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> function removeEventListener(element, eventName, fn) {</span></span>
<span class="line"><span>      // 判断当前浏览器是否支持 removeEventListener 方法</span></span>
<span class="line"><span>      if (element.removeEventListener) {</span></span>
<span class="line"><span>        element.removeEventListener(eventName, fn);  // 第三个参数 默认是false</span></span>
<span class="line"><span>      } else if (element.detachEvent) {</span></span>
<span class="line"><span>        element.detachEvent(&#39;on&#39; + eventName, fn);</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        element[&#39;on&#39; + eventName] = null;</span></span>
<span class="line"><span> }</span></span></code></pre></div><h3 id="_7-3、dom事件流" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>7.3、DOM事件流 <a class="header-anchor" href="#_7-3、dom事件流" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)7.3、DOM事件流&quot;">​</a></h3><ul><li>事件流描述的是从页面中接收事件的顺序</li><li>事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即DOM事件流</li></ul><p><img src="https://img-blog.csdnimg.cn/063297f2336f43dfb246930ae877a9ad.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><ul><li><p>事件冒泡： IE 最早提出，事件开始时由最具体的元素接收，然后逐级向上传播到到 DOM 最顶层节点的过程。</p></li><li><p>事件捕获： 网景最早提出，由 DOM 最顶层节点开始，然后逐级向下传播到到最具体的元素接收的过程。</p></li></ul><p><strong>加深理解</strong>：</p><p>我们向水里面扔一块石头，首先它会有一个下降的过程，这个过程就可以理解为从最顶层向事件发生的最具体元素（目标点）的捕获过程；之后会产生泡泡，会在最低点（ 最具体元素）之后漂浮到水面上，这个过程相当于事件冒泡。</p><p><img src="https://img-blog.csdnimg.cn/51f0146f0e334813b35d9b7075382a33.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><h4 id="_7-3-1、捕获阶段" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>7.3.1、捕获阶段 <a class="header-anchor" href="#_7-3-1、捕获阶段" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)7.3.1、捕获阶段&quot;">​</a></h4><ul><li>document -&gt; html -&gt; body -&gt; father -&gt; son</li></ul><p>两个盒子嵌套，一个父盒子一个子盒子，我们的需求是当点击父盒子时弹出 father ，当点击子盒子时弹出 son</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;father&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;son&quot;&gt;son盒子&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // dom 事件流 三个阶段</span></span>
<span class="line"><span>        // 1. JS 代码中只能执行捕获或者冒泡其中的一个阶段。</span></span>
<span class="line"><span>        // 2. onclick 和 attachEvent（ie） 只能得到冒泡阶段。</span></span>
<span class="line"><span>        // 3. 捕获阶段 如果addEventListener 第三个参数是 true 那么则处于捕获阶段  document -&gt; html -&gt; body -&gt; father -&gt; son</span></span>
<span class="line"><span>        var son = document.querySelector(&#39;.son&#39;);</span></span>
<span class="line"><span>        son.addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span>             alert(&#39;son&#39;);</span></span>
<span class="line"><span>        }, true);</span></span>
<span class="line"><span>        var father = document.querySelector(&#39;.father&#39;);</span></span>
<span class="line"><span>        father.addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span>            alert(&#39;father&#39;);</span></span>
<span class="line"><span>        }, true);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><p>但是因为DOM流的影响，我们点击子盒子，会先弹出 father，之后再弹出 son</p><p><img src="https://img-blog.csdnimg.cn/65d6a7c8038f414fbf03c3ac4d2ce293.gif#pic_center" alt="在这里插入图片描述"></p><p>这是因为捕获阶段由 DOM 最顶层节点开始，然后逐级向下传播到到最具体的元素接收</p><ul><li><p>document -&gt; html -&gt; body -&gt; father -&gt; son</p></li><li><p>先看 document 的事件，没有；再看 html 的事件，没有；再看 body 的事件，没有；再看 father 的事件，有就先执行；再看 son 的事件，再执行。</p></li></ul><h4 id="_7-3-2、冒泡阶段" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>7.3.2、冒泡阶段 <a class="header-anchor" href="#_7-3-2、冒泡阶段" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)7.3.2、冒泡阶段&quot;">​</a></h4><ul><li>son -&gt; father -&gt;body -&gt; html -&gt; document</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;father&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;son&quot;&gt;son盒子&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>		// 4. 冒泡阶段 如果addEventListener 第三个参数是 false 或者 省略 那么则处于冒泡阶段  son -&gt; father -&gt;body -&gt; html -&gt; document</span></span>
<span class="line"><span>        var son = document.querySelector(&#39;.son&#39;);</span></span>
<span class="line"><span>        son.addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span>            alert(&#39;son&#39;);</span></span>
<span class="line"><span>        }, false);</span></span>
<span class="line"><span>        var father = document.querySelector(&#39;.father&#39;);</span></span>
<span class="line"><span>        father.addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span>            alert(&#39;father&#39;);</span></span>
<span class="line"><span>        }, false);</span></span>
<span class="line"><span>        document.addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span>            alert(&#39;document&#39;);</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><p>我们点击子盒子，会弹出 son、father、document</p><p><img src="https://img-blog.csdnimg.cn/9ab4190f50d14c7aa879789476a394e9.gif#pic_center" alt="在这里插入图片描述"></p><p>这是因为冒泡阶段开始时由最具体的元素接收，然后逐级向上传播到到 DOM 最顶层节点</p><ul><li>son -&gt; father -&gt;body -&gt; html -&gt; document</li></ul><h4 id="_7-3-3、小结" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>7.3.3、小结 <a class="header-anchor" href="#_7-3-3、小结" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)7.3.3、小结&quot;">​</a></h4><ul><li><p>JS 代码中只能执行捕获或者冒泡其中的一个阶段</p></li><li><p><code>onclick</code> 和 <code>attachEvent</code>只能得到冒泡阶段</p></li><li><p><code>addEventListener(type,listener[,useCapture])</code>第三个参数如果是 true，表示在事件捕获阶段调用事件处理程序；如果是 false (不写默认就是false),表示在事件冒泡阶段调用事件处理程序</p></li><li><p>实际开发中我们很少使用事件捕获，我们更关注事件冒泡。</p></li><li><p>有些事件是没有冒泡的，比如 onblur、onfocus、onmouseenter、onmouseleave</p></li></ul><h3 id="_7-4、事件对象" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>7.4、事件对象 <a class="header-anchor" href="#_7-4、事件对象" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)7.4、事件对象&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>eventTarget.onclick = function(event) {</span></span>
<span class="line"><span>   // 这个 event 就是事件对象，我们还喜欢的写成 e 或者 evt </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>eventTarget.addEventListener(&#39;click&#39;, function(event) {</span></span>
<span class="line"><span>   // 这个 event 就是事件对象，我们还喜欢的写成 e 或者 evt  </span></span>
<span class="line"><span>})</span></span></code></pre></div><ul><li>官方解释：event 对象代表事件的状态，比如键盘按键的状态、鼠标的位置、鼠标按钮的状态</li><li>简单理解： <ul><li>事件发生后，跟事件相关的一系列信息数据的集合都放到这个对象里面</li><li>这个对象就是事件对象 event，它有很多属性和方法，比如“ <ul><li>谁绑定了这个事件</li><li>鼠标触发事件的话，会得到鼠标的相关信息，如鼠标位置</li><li>键盘触发事件的话，会得到键盘的相关信息，如按了哪个键</li></ul></li></ul></li><li>这个 event 是个形参，系统帮我们设定为事件对象，不需要传递实参过去</li><li>当我们注册事件时， event 对象就会被系统自动创建，并依次传递给事件监听器（事件处理函数）</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div&gt;123&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 事件对象</span></span>
<span class="line"><span>        var div = document.querySelector(&#39;div&#39;);</span></span>
<span class="line"><span>        div.onclick = function(e) {</span></span>
<span class="line"><span>                // console.log(e);</span></span>
<span class="line"><span>                // console.log(window.event);</span></span>
<span class="line"><span>                // e = e || window.event;</span></span>
<span class="line"><span>                console.log(e);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        // 1. event 就是一个事件对象 写到我们侦听函数的 小括号里面 当形参来看</span></span>
<span class="line"><span>        // 2. 事件对象只有有了事件才会存在，它是系统给我们自动创建的，不需要我们传递参数</span></span>
<span class="line"><span>        // 3. 事件对象 是 我们事件的一系列相关数据的集合 跟事件相关的 比如鼠标点击里面就包含了鼠标的相关信息，鼠标坐标啊，如果是键盘事件里面就包含的键盘事件的信息 比如 判断用户按下了那个键</span></span>
<span class="line"><span>        // 4. 这个事件对象我们可以自己命名 比如 event 、 evt、 e</span></span>
<span class="line"><span>        // 5. 事件对象也有兼容性问题 ie678 通过 window.event 兼容性的写法  e = e || window.event;</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h4 id="_7-4-1、事件对象的兼容性方案" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>7.4.1、事件对象的兼容性方案 <a class="header-anchor" href="#_7-4-1、事件对象的兼容性方案" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)7.4.1、事件对象的兼容性方案&quot;">​</a></h4><p>事件对象本身的获取存在兼容问题：</p><ol><li>标准浏览器中是浏览器给方法传递的参数，只需要定义形参 e 就可以获取到。</li><li>在 IE6~8 中，浏览器不会给方法传递参数，如果需要的话，需要到 window.event 中获取查找</li></ol><p>解决：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>e = e || window.event;</span></span></code></pre></div><h4 id="_7-4-2、事件对象的常见属性和方法" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>7.4.2、事件对象的常见属性和方法 <a class="header-anchor" href="#_7-4-2、事件对象的常见属性和方法" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)7.4.2、事件对象的常见属性和方法&quot;">​</a></h4><table><thead><tr><th>事件对象属性方法</th><th>说明</th></tr></thead><tbody><tr><td>e.target</td><td>返回触发事件的对象 标准</td></tr><tr><td>e.srcElement</td><td>返回触发事件的对象 非标准 ie6-8使用</td></tr><tr><td>e.type</td><td>返回事件的类型 比如<code>click</code> <code>mouseover</code> 不带on</td></tr><tr><td>e.cancelBubble</td><td>该属性阻止冒泡，非标准，ie6-8使用</td></tr><tr><td>e.returnValue</td><td>该属性阻止默认行为 非标准，ie6-8使用</td></tr><tr><td>e.preventDefault()</td><td>该方法阻止默认行为 标准 比如不让链接跳转</td></tr><tr><td>e.stopPropagation()</td><td>阻止冒泡 标准</td></tr></tbody></table><p>e.target 和 this 的区别：</p><ul><li>this 是事件绑定的元素， 这个函数的调用者（绑定这个事件的元素）</li><li>e.target 是事件触发的元素。</li></ul><h3 id="_7-5、事件对象阻止默认行为" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>7.5、事件对象阻止默认行为 <a class="header-anchor" href="#_7-5、事件对象阻止默认行为" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)7.5、事件对象阻止默认行为&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div&gt;123&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;a href=&quot;http://www.baidu.com&quot;&gt;百度&lt;/a&gt;</span></span>
<span class="line"><span>    &lt;form action=&quot;http://www.baidu.com&quot;&gt;</span></span>
<span class="line"><span>        &lt;input type=&quot;submit&quot; value=&quot;提交&quot; name=&quot;sub&quot;&gt;</span></span>
<span class="line"><span>    &lt;/form&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 常见事件对象的属性和方法</span></span>
<span class="line"><span>        // 1. 返回事件类型</span></span>
<span class="line"><span>        var div = document.querySelector(&#39;div&#39;);</span></span>
<span class="line"><span>        div.addEventListener(&#39;click&#39;, fn);</span></span>
<span class="line"><span>        div.addEventListener(&#39;mouseover&#39;, fn);</span></span>
<span class="line"><span>        div.addEventListener(&#39;mouseout&#39;, fn);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        function fn(e) {</span></span>
<span class="line"><span>            console.log(e.type);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 2. 阻止默认行为（事件） 让链接不跳转 或者让提交按钮不提交</span></span>
<span class="line"><span>        var a = document.querySelector(&#39;a&#39;);</span></span>
<span class="line"><span>        a.addEventListener(&#39;click&#39;, function(e) {</span></span>
<span class="line"><span>                e.preventDefault(); //  dom 标准写法</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            // 3. 传统的注册方式</span></span>
<span class="line"><span>        a.onclick = function(e) {</span></span>
<span class="line"><span>            // 普通浏览器 e.preventDefault();  方法</span></span>
<span class="line"><span>            // e.preventDefault();</span></span>
<span class="line"><span>            // 低版本浏览器 ie678  returnValue  属性</span></span>
<span class="line"><span>            // e.returnValue;</span></span>
<span class="line"><span>            // 我们可以利用return false 也能阻止默认行为 没有兼容性问题 特点： return 后面的代码不执行了， 而且只限于传统的注册方式</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>            alert(11);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_7-6、阻止事件冒泡" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>7.6、阻止事件冒泡 <a class="header-anchor" href="#_7-6、阻止事件冒泡" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)7.6、阻止事件冒泡&quot;">​</a></h3><p>事件冒泡：开始时由最具体的元素接收，然后逐级向上传播到到 DOM 最顶层节点</p><p>事件冒泡本身的特性，会带来的坏处，也会带来的好处，需要我们灵活掌握。</p><ul><li>标准写法</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>e.stopPropagation();</span></span></code></pre></div><ul><li>非标准写法： IE6-8 利用对象事件 cancelBubble属性</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>e.cancelBubble = true;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;father&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;son&quot;&gt;son儿子&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 常见事件对象的属性和方法</span></span>
<span class="line"><span>        // 阻止冒泡  dom 推荐的标准 stopPropagation() </span></span>
<span class="line"><span>        var son = document.querySelector(&#39;.son&#39;);</span></span>
<span class="line"><span>        son.addEventListener(&#39;click&#39;, function(e) {</span></span>
<span class="line"><span>            alert(&#39;son&#39;);</span></span>
<span class="line"><span>            e.stopPropagation(); // stop 停止  Propagation 传播</span></span>
<span class="line"><span>            e.cancelBubble = true; // 非标准 cancel 取消 bubble 泡泡</span></span>
<span class="line"><span>        }, false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        var father = document.querySelector(&#39;.father&#39;);</span></span>
<span class="line"><span>        father.addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span>            alert(&#39;father&#39;);</span></span>
<span class="line"><span>        }, false);</span></span>
<span class="line"><span>        document.addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span>            alert(&#39;document&#39;);</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h4 id="_7-6-1、阻止事件冒泡的兼容性解决方案" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>7.6.1、阻止事件冒泡的兼容性解决方案 <a class="header-anchor" href="#_7-6-1、阻止事件冒泡的兼容性解决方案" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)7.6.1、阻止事件冒泡的兼容性解决方案&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>if(e &amp;&amp; e.stopPropagation){</span></span>
<span class="line"><span>      e.stopPropagation();</span></span>
<span class="line"><span>  }else{</span></span>
<span class="line"><span>      window.event.cancelBubble = true;</span></span>
<span class="line"><span>  }</span></span></code></pre></div><h4 id="_4-4-4-e-target-与-this" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>4.4.4 e.target 与 this <a class="header-anchor" href="#_4-4-4-e-target-与-this" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)4.4.4 e.target 与 this&quot;">​</a></h4><blockquote><p>e.target 与 this 的区别</p></blockquote><ul><li><code>this</code>是事件绑定的元素，这个函数的调用者(绑定这个事件的元素)</li><li><code>e.target</code>是事件触发的元素</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div&gt;123&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>        &lt;li&gt;abc&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;abc&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;abc&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 常见事件对象的属性和方法</span></span>
<span class="line"><span>        // 1. e.target 返回的是触发事件的对象（元素）  this 返回的是绑定事件的对象（元素）</span></span>
<span class="line"><span>        // 区别 ： e.target 点击了那个元素，就返回那个元素 this 那个元素绑定了这个点击事件，那么就返回谁</span></span>
<span class="line"><span>        var div = document.querySelector(&#39;div&#39;);</span></span>
<span class="line"><span>        div.addEventListener(&#39;click&#39;, function(e) {</span></span>
<span class="line"><span>            console.log(e.target);</span></span>
<span class="line"><span>            console.log(this);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        var ul = document.querySelector(&#39;ul&#39;);</span></span>
<span class="line"><span>        ul.addEventListener(&#39;click&#39;, function(e) {</span></span>
<span class="line"><span>                // 我们给ul 绑定了事件  那么this 就指向ul  </span></span>
<span class="line"><span>                console.log(this);</span></span>
<span class="line"><span>                console.log(e.currentTarget);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // e.target 指向我们点击的那个对象 谁触发了这个事件 我们点击的是li e.target 指向的就是li</span></span>
<span class="line"><span>                console.log(e.target);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            // 了解兼容性</span></span>
<span class="line"><span>            // div.onclick = function(e) {</span></span>
<span class="line"><span>            //     e = e || window.event;</span></span>
<span class="line"><span>            //     var target = e.target || e.srcElement;</span></span>
<span class="line"><span>            //     console.log(target);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // }</span></span>
<span class="line"><span>        // 2. 了解 跟 this 有个非常相似的属性 currentTarget  ie678不认识</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h4 id="_4-4-5-事件对象的兼容性" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>4.4.5 事件对象的兼容性 <a class="header-anchor" href="#_4-4-5-事件对象的兼容性" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)4.4.5 事件对象的兼容性&quot;">​</a></h4><p>事件对象本身的获取存在兼容问题：</p><ul><li>标准浏览器中浏览器是给方法传递的参数，只需定义形参e就可以获取到</li><li>在 IE6 -&gt; 8 中，浏览器不会给方法传递参数，如果需要的话，需要到<code>window.event</code>中获取查找</li></ul><blockquote><p>解决方案</p></blockquote><ul><li><code>e = e || window.event</code></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div&gt;123&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 事件对象</span></span>
<span class="line"><span>        var div = document.querySelector(&#39;div&#39;);</span></span>
<span class="line"><span>        div.onclick = function(e) {</span></span>
<span class="line"><span>                // e = e || window.event;</span></span>
<span class="line"><span>                console.log(e);</span></span>
<span class="line"><span>				// 事件对象也有兼容性问题 ie678 通过 window.event 兼容性的写法  e = e || window.event;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_7-7、事件委托" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>7.7、事件委托 <a class="header-anchor" href="#_7-7、事件委托" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)7.7、事件委托&quot;">​</a></h3><ul><li>事件委托也称为事件代理，在 jQuery 里面称为事件委派</li><li>事件委托的原理 <ul><li><strong>不是每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点</strong></li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>        &lt;li&gt;知否知否，点我应有弹框在手！&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;知否知否，点我应有弹框在手！&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;知否知否，点我应有弹框在手！&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;知否知否，点我应有弹框在手！&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;知否知否，点我应有弹框在手！&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 事件委托的核心原理：给父节点添加侦听器， 利用事件冒泡影响每一个子节点</span></span>
<span class="line"><span>        var ul = document.querySelector(&#39;ul&#39;);</span></span>
<span class="line"><span>        ul.addEventListener(&#39;click&#39;, function(e) {</span></span>
<span class="line"><span>            // alert(&#39;知否知否，点我应有弹框在手！&#39;);</span></span>
<span class="line"><span>            // e.target 这个可以得到我们点击的对象</span></span>
<span class="line"><span>            e.target.style.backgroundColor = &#39;pink&#39;;</span></span>
<span class="line"><span>            // 点了谁，就让谁的style里面的backgroundColor颜色变为pink</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><p>以上案例：给 ul 注册点击事件，然后利用事件对象的 target 来找到当前点击的 li，因为点击 li，事件会冒泡到 ul 上， ul 有注册事件，就会触发事件监听器。</p><h3 id="_7-8、常见的鼠标事件" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>7.8、常见的鼠标事件 <a class="header-anchor" href="#_7-8、常见的鼠标事件" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)7.8、常见的鼠标事件&quot;">​</a></h3><table><thead><tr><th>鼠标事件</th><th>触发条件</th></tr></thead><tbody><tr><td>onclick</td><td>鼠标点击左键触发</td></tr><tr><td>onmouseover</td><td>鼠标经过触发</td></tr><tr><td>onmouseout</td><td>鼠标离开触发</td></tr><tr><td>onfocus</td><td>获得鼠标焦点触发</td></tr><tr><td>onblur</td><td>失去鼠标焦点触发</td></tr><tr><td>onmousemove</td><td>鼠标移动触发</td></tr><tr><td>onmouseup</td><td>鼠标弹起触发</td></tr><tr><td>onmousedown</td><td>鼠标按下触发</td></tr></tbody></table><h4 id="_7-8-1、禁止鼠标右键与鼠标选中" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>7.8.1、禁止鼠标右键与鼠标选中 <a class="header-anchor" href="#_7-8-1、禁止鼠标右键与鼠标选中" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)7.8.1、禁止鼠标右键与鼠标选中&quot;">​</a></h4><ul><li><code>contextmenu</code>主要控制应该何时显示上下文菜单，主要用于程序员取消默认的上下文菜单</li><li><code>selectstart</code> 禁止鼠标选中</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;我是一段不愿意分享的文字&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 1. contextmenu 我们可以禁用右键菜单</span></span>
<span class="line"><span>        document.addEventListener(&#39;contextmenu&#39;, function(e) {</span></span>
<span class="line"><span>                e.preventDefault(); // 阻止默认行为</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            // 2. 禁止选中文字 selectstart</span></span>
<span class="line"><span>        document.addEventListener(&#39;selectstart&#39;, function(e) {</span></span>
<span class="line"><span>            e.preventDefault();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h4 id="_7-8-2、鼠标事件对象" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>7.8.2、鼠标事件对象 <a class="header-anchor" href="#_7-8-2、鼠标事件对象" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)7.8.2、鼠标事件对象&quot;">​</a></h4><ul><li><strong>event</strong>对象代表事件的状态，跟事件相关的一系列信息的集合</li><li>现阶段我们主要是用鼠标事件对象 <strong>MouseEvent</strong> 和键盘事件对象 <strong>KeyboardEvent。</strong></li></ul><table><thead><tr><th>鼠标事件对象</th><th>说明</th></tr></thead><tbody><tr><td>e.clientX</td><td>返回鼠标相对于浏览器窗口<strong>可视区</strong>的X坐标</td></tr><tr><td>e.clientY</td><td>返回鼠标相对于浏览器窗口<strong>可视区</strong>的Y坐标</td></tr><tr><td>e.pageX（重点）</td><td>返回鼠标相对于文档页面的X坐标 IE9+ 支持</td></tr><tr><td>e.pageY（重点）</td><td>返回鼠标相对于文档页面的Y坐标 IE9+ 支持</td></tr><tr><td>e.screenX</td><td>返回鼠标相对于电脑屏幕的X坐标</td></tr><tr><td>e.screenY</td><td>返回鼠标相对于电脑屏幕的Y坐标</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 鼠标事件对象 MouseEvent</span></span>
<span class="line"><span>        document.addEventListener(&#39;click&#39;, function(e) {</span></span>
<span class="line"><span>            // 1. client 鼠标在可视区的x和y坐标</span></span>
<span class="line"><span>            console.log(e.clientX);</span></span>
<span class="line"><span>            console.log(e.clientY);</span></span>
<span class="line"><span>            console.log(&#39;---------------------&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 2. page 鼠标在页面文档的x和y坐标</span></span>
<span class="line"><span>            console.log(e.pageX);</span></span>
<span class="line"><span>            console.log(e.pageY);</span></span>
<span class="line"><span>            console.log(&#39;---------------------&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 3. screen 鼠标在电脑屏幕的x和y坐标</span></span>
<span class="line"><span>            console.log(e.screenX);</span></span>
<span class="line"><span>            console.log(e.screenY);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_7-9、常用的键盘事件" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>7.9、常用的键盘事件 <a class="header-anchor" href="#_7-9、常用的键盘事件" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)7.9、常用的键盘事件&quot;">​</a></h3><table><thead><tr><th>键盘事件</th><th>触发条件</th></tr></thead><tbody><tr><td>onkeyup</td><td>某个键盘按键被松开时触发</td></tr><tr><td>onkeydown</td><td>某个键盘按键被按下时触发</td></tr><tr><td>onkeypress</td><td>某个键盘按键被按下时触发，但是它不识别功能键，比如 ctrl shift 箭头等</td></tr></tbody></table><ul><li><strong>如果使用addEventListener 不需要加 on</strong></li><li><code>onkeypress</code> 和前面2个的区别是，它不识别功能键，比如左右箭头，shift 等</li><li>三个事件的执行顺序是： keydown – keypress — keyup</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 常用的键盘事件</span></span>
<span class="line"><span>        //1. keyup 按键弹起的时候触发 </span></span>
<span class="line"><span>        // document.onkeyup = function() {</span></span>
<span class="line"><span>        //         console.log(&#39;我弹起了&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //     }</span></span>
<span class="line"><span>        document.addEventListener(&#39;keyup&#39;, function() {</span></span>
<span class="line"><span>            console.log(&#39;我弹起了&#39;);</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //3. keypress 按键按下的时候触发  不能识别功能键 比如 ctrl shift 左右箭头啊</span></span>
<span class="line"><span>        document.addEventListener(&#39;keypress&#39;, function() {</span></span>
<span class="line"><span>                console.log(&#39;我按下了press&#39;);</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            //2. keydown 按键按下的时候触发  能识别功能键 比如 ctrl shift 左右箭头啊</span></span>
<span class="line"><span>        document.addEventListener(&#39;keydown&#39;, function() {</span></span>
<span class="line"><span>                console.log(&#39;我按下了down&#39;);</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            // 4. 三个事件的执行顺序  keydown -- keypress -- keyup</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h4 id="_7-9-1、键盘对象属性" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115416921" target="_blank" rel="noreferrer"></a>7.9.1、键盘对象属性 <a class="header-anchor" href="#_7-9-1、键盘对象属性" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115416921)7.9.1、键盘对象属性&quot;">​</a></h4><table><thead><tr><th>键盘事件对象 <strong>属性</strong></th><th>说明</th></tr></thead><tbody><tr><td>keyCode</td><td>返回该<strong>键</strong>值的ASCII值</td></tr></tbody></table><ul><li><code>onkeydown</code>和 <code>onkeyup</code> 不区分字母大小写，<code>onkeypress</code> 区分字母大小写。</li><li>在我们实际开发中，我们更多的使用keydown和keyup， 它能识别所有的键（包括功能键）</li><li><code>Keypress</code> 不识别功能键，但是<code>keyCode</code>属性能区分大小写，返回不同的ASCII值</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 键盘事件对象中的keyCode属性可以得到相应键的ASCII码值</span></span>
<span class="line"><span>        // 1. 我们的keyup 和keydown事件不区分字母大小写  a 和 A 得到的都是65</span></span>
<span class="line"><span>        // 2. 我们的keypress 事件 区分字母大小写  a  97 和 A 得到的是65</span></span>
<span class="line"><span>        document.addEventListener(&#39;keyup&#39;, function(e) {</span></span>
<span class="line"><span>            console.log(&#39;up:&#39; + e.keyCode);</span></span>
<span class="line"><span>            // 我们可以利用keycode返回的ASCII码值来判断用户按下了那个键</span></span>
<span class="line"><span>            if (e.keyCode === 65) {</span></span>
<span class="line"><span>                alert(&#39;您按下的a键&#39;);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                alert(&#39;您没有按下a键&#39;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        document.addEventListener(&#39;keypress&#39;, function(e) {</span></span>
<span class="line"><span>            console.log(&#39;press:&#39; + e.keyCode);</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><p><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>1、BOM概述</p><ul><li>BOM = Browser Object Model 👉浏览器对象模型</li><li>它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是 window</li><li>BOM 由一系列相关的对象构成，并且每个对象都提供了很多方法与属性</li><li>BOM 缺乏标准，JavaScript 语法的标准化组织是 ECMA, DOM 的标准化组织是 W3C, BOM最初是Netscape 浏览器标准的一部分</li></ul><table><thead><tr><th>DOM</th><th>BOM</th></tr></thead><tbody><tr><td>文档对象模型</td><td>浏览器对象模型</td></tr><tr><td>DOM 就是把 文档 当作一个对象来看待</td><td>把 浏览器当作一个对象来看待</td></tr><tr><td>DOM 的顶级对象是 document</td><td>BOM 的顶级对象是 window</td></tr><tr><td>DOM 主要学习的是操作页面元素</td><td>BOM 学习的是浏览器窗口交互的一些对象</td></tr><tr><td>DOM 是 W3C 标准规范</td><td>BOM 是浏览器厂商在各自浏览器上定义的，兼容性较差</td></tr></tbody></table><h3 id="_1-1、bom的构成" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>1.1、BOM的构成 <a class="header-anchor" href="#_1-1、bom的构成" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115406408)1.1、BOM的构成&quot;">​</a></h3><p><img src="https://img-blog.csdnimg.cn/5c83bf307ec9486687a5f52312943ecb.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><ul><li><p>BOM 比 DOM 更大。它包含 DOM。</p></li><li><p>window 对象是浏览器的顶级对象，它具有双重角色</p></li><li><p>它是 JS 访问浏览器窗口的一个接口</p></li><li><p>它是一个全局对象。定义在全局作用域中的变量、函数都会变成 window 对象的属性和方法</p></li><li><p>在调用的时候可以省略 window，前面学习的对话框都属于 window 对象方法，如 <code>alert()、prompt()</code>等。</p></li><li><p><strong>注意</strong>：window下的一个特殊属性 window.name</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 定义在全局作用域中的变量会变成window对象的属性</span></span>
<span class="line"><span>var num = 10;</span></span>
<span class="line"><span>console.log(window.num);</span></span>
<span class="line"><span>// 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义在全局作用域中的函数会变成window对象的方法</span></span>
<span class="line"><span>function fn() {</span></span>
<span class="line"><span>    console.log(11);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.fn();</span></span>
<span class="line"><span>// 11</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var name = 10;  //不要用这个name变量,window下有一个特殊属性window.name</span></span>
<span class="line"><span>console.log(window.num);</span></span></code></pre></div><h2 id="window-对象的常见事件" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>window 对象的常见事件 <a class="header-anchor" href="#window-对象的常见事件" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115406408)window 对象的常见事件&quot;">​</a></h2><h3 id="_2-1、窗口加载事件" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>2.1、窗口加载事件 <a class="header-anchor" href="#_2-1、窗口加载事件" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115406408)2.1、窗口加载事件&quot;">​</a></h3><p><code>window.onload</code>是窗口（页面）加载事件，当文档内容完全加载完成会触发该事件（包括图像，脚本文件，CSS文件等），就调用的处理函数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>window.onload = function(){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 或者</span></span>
<span class="line"><span>window.addEventListener(&quot;load&quot;,function(){});</span></span></code></pre></div><p>注意：</p><ul><li><p>有了<code>window.onload</code>就可以把JS代码写到页面元素的上方</p></li><li><p>因为<code>onload</code>是等页面内容全部加载完毕，再去执行处理函数</p></li><li><p><code>window.onload</code> 传统注册事件方式，只能写一次</p></li><li><p>如果有多个，会以最后一个<code>window.onload</code>为准</p></li><li><p><strong>如果使用addEventListener 则没有限制</strong></p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>document.addEventListener(&#39;DOMContentLoaded&#39;,function(){})</span></span></code></pre></div><p>接收两个参数：</p><ul><li><p>DOMCountentLoaded事件触发时，仅当DOM加载完成，不包括样式表，图片，flash等等</p></li><li><p>如果页面的图片很多的话, 从用户访问到onload触发可能需要较长的时间</p></li><li><p>交互效果就不能实现，必然影响用户的体验，此时用 <code>DOMContentLoaded</code>事件比较合适。</p></li></ul><h4 id="_2-1-1、区别" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>2.1.1、区别 <a class="header-anchor" href="#_2-1-1、区别" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115406408)2.1.1、区别&quot;">​</a></h4><ul><li><code>load</code>等页面内容全部加载完毕，包括页面dom元素，图片，flash，css等</li><li><code>DOMContentLoaded</code> 是DOM加载完毕，不包含图片 flash css 等就可以执行，加载速度比load更快一些</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    // window.onload = function() {</span></span>
<span class="line"><span>    //     var btn = document.querySelector(&#39;button&#39;);</span></span>
<span class="line"><span>    //     btn.addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span>    //         alert(&#39;点击我&#39;);</span></span>
<span class="line"><span>    //     })</span></span>
<span class="line"><span>    // }</span></span>
<span class="line"><span>    // window.onload = function() {</span></span>
<span class="line"><span>    //     alert(22);</span></span>
<span class="line"><span>    // }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    window.addEventListener(&#39;load&#39;, function() {</span></span>
<span class="line"><span>        var btn = document.querySelector(&#39;button&#39;);</span></span>
<span class="line"><span>        btn.addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span>            alert(&#39;点击我&#39;);</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    window.addEventListener(&#39;load&#39;, function() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        alert(22);</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    document.addEventListener(&#39;DOMContentLoaded&#39;, function() {</span></span>
<span class="line"><span>            alert(33);</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        // load 等页面内容全部加载完毕，包含页面dom元素 图片 flash  css 等等</span></span>
<span class="line"><span>        // DOMContentLoaded 是DOM 加载完毕，不包含图片 falsh css 等就可以执行 加载速度比 load更快一些</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="_2-2、调整窗口大小事件" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>2.2、调整窗口大小事件 <a class="header-anchor" href="#_2-2、调整窗口大小事件" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115406408)2.2、调整窗口大小事件&quot;">​</a></h3><p><code>window.onresize</code> 是调整窗口大小加载事件，当触发时就调用的处理函数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>window.onresize = function() {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 或者</span></span>
<span class="line"><span>window.addEventListener(&#39;resize&#39;,function(){});</span></span></code></pre></div><ul><li>只要窗口大小发生像素变化，就会触发这个事件</li><li>我们经常利用这个事件完成响应式布局。<code>window.innerWidth</code> 当前屏幕的宽度</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        window.addEventListener(&#39;load&#39;, function() {</span></span>
<span class="line"><span>            var div = document.querySelector(&#39;div&#39;);</span></span>
<span class="line"><span>            window.addEventListener(&#39;resize&#39;, function() {</span></span>
<span class="line"><span>                console.log(window.innerWidth);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                console.log(&#39;变化了&#39;);</span></span>
<span class="line"><span>                if (window.innerWidth &lt;= 800) {</span></span>
<span class="line"><span>                    div.style.display = &#39;none&#39;;</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    div.style.display = &#39;block&#39;;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>    &lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h2 id="定时器" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>定时器 <a class="header-anchor" href="#定时器" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115406408)定时器&quot;">​</a></h2><p>window 对象给我们提供了两个定时器</p><ul><li><code>setTimeout()</code></li><li><code>setInterval()</code></li></ul><h3 id="_3-1、settimeout-定时器" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>3.1、setTimeout()定时器 <a class="header-anchor" href="#_3-1、settimeout-定时器" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115406408)3.1、setTimeout()定时器&quot;">​</a></h3><p><code>setTimeout()</code>方法用于设置一个定时器，该定时器在定时器到期后执行调用函数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>window.setTimeout(调用函数,[延迟的毫秒数]);</span></span></code></pre></div><p><strong>注意</strong>：</p><ul><li><code>window</code>可以省略</li><li>这个调用函数 <ul><li>可以直接写函数</li><li>或者写函数名</li><li>或者采取字符串 <strong>‘函数名()’</strong> （不推荐）</li></ul></li><li>延迟的毫秒数省略默认是0，如果写，必须是毫秒</li><li>因为定时器可能有很多，所以我们经常给定时器赋值一个标识符</li><li><code>setTimeout()</code> 这个调用函数我们也称为<strong>回调函数</strong> callback</li><li>普通函数是按照代码顺序直接调用，而这个函数，需要等待事件，事件到了才会去调用这个函数，因此称为回调函数。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 1. setTimeout </span></span>
<span class="line"><span>        // 语法规范：  window.setTimeout(调用函数, 延时时间);</span></span>
<span class="line"><span>        // 1. 这个window在调用的时候可以省略</span></span>
<span class="line"><span>        // 2. 这个延时时间单位是毫秒 但是可以省略，如果省略默认的是0</span></span>
<span class="line"><span>        // 3. 这个调用函数可以直接写函数 还可以写 函数名 还有一个写法 &#39;函数名()&#39;</span></span>
<span class="line"><span>        // 4. 页面中可能有很多的定时器，我们经常给定时器加标识符 （名字)</span></span>
<span class="line"><span>        // setTimeout(function() {</span></span>
<span class="line"><span>        //     console.log(&#39;时间到了&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // }, 2000);</span></span>
<span class="line"><span>        function callback() {</span></span>
<span class="line"><span>            console.log(&#39;爆炸了&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        var timer1 = setTimeout(callback, 3000);</span></span>
<span class="line"><span>        var timer2 = setTimeout(callback, 5000);</span></span>
<span class="line"><span>        // setTimeout(&#39;callback()&#39;, 3000); // 我们不提倡这个写法</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_3-2、cleartimeout-停止定时器" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>3.2、clearTimeout()停止定时器 <a class="header-anchor" href="#_3-2、cleartimeout-停止定时器" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115406408)3.2、clearTimeout()停止定时器&quot;">​</a></h3><ul><li><code>clearTimeout()</code>方法取消了先前通过调用 <code>setTimeout()</code>建立的定时器</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>window.clearTimeout(timeoutID)</span></span></code></pre></div><p><strong>注意</strong>：</p><ul><li><code>window</code>可以省略</li><li>里面的参数就是定时器的标识符</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;button&gt;点击停止定时器&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        var btn = document.querySelector(&#39;button&#39;);</span></span>
<span class="line"><span>        var timer = setTimeout(function() {</span></span>
<span class="line"><span>            console.log(&#39;爆炸了&#39;);</span></span>
<span class="line"><span>        }, 5000);</span></span>
<span class="line"><span>        btn.addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span>            clearTimeout(timer);</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_3-3、setinterval-定时器" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>3.3、setInterval()定时器 <a class="header-anchor" href="#_3-3、setinterval-定时器" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115406408)3.3、setInterval()定时器&quot;">​</a></h3><ul><li><code>setInterval()</code>方法重复调用一个函数，每隔这个时间，就去调用一次回调函数</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>window.setInterval(回调函数,[间隔的毫秒数]);</span></span></code></pre></div><ul><li><code>window</code>可以省略</li><li>这个回调函数: <ul><li>可以直接写函数</li><li>或者写函数名</li><li>或者采取字符 ‘函数名()’</li></ul></li><li>第一次执行也是间隔毫秒数之后执行，之后每隔毫秒数就执行一次</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 1. setInterval </span></span>
<span class="line"><span>        // 语法规范：  window.setInterval(调用函数, 延时时间);</span></span>
<span class="line"><span>        setInterval(function() {</span></span>
<span class="line"><span>            console.log(&#39;继续输出&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }, 1000);</span></span>
<span class="line"><span>        // 2. setTimeout  延时时间到了，就去调用这个回调函数，只调用一次 就结束了这个定时器</span></span>
<span class="line"><span>        // 3. setInterval  每隔这个延时时间，就去调用这个回调函数，会调用很多次，重复调用这个函数</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_3-4、clearinterval-停止定时器" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>3.4、clearInterval()停止定时器 <a class="header-anchor" href="#_3-4、clearinterval-停止定时器" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115406408)3.4、clearInterval()停止定时器&quot;">​</a></h3><ul><li><code>clearInterval ( )</code> 方法取消了先前通过调用 <code>setInterval()</code> 建立的定时器</li></ul><p><strong>注意</strong>：</p><ul><li><code>window</code>可以省略</li><li>里面的参数就是定时器的标识符</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;button class=&quot;begin&quot;&gt;开启定时器&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;button class=&quot;stop&quot;&gt;停止定时器&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        var begin = document.querySelector(&#39;.begin&#39;);</span></span>
<span class="line"><span>        var stop = document.querySelector(&#39;.stop&#39;);</span></span>
<span class="line"><span>        var timer = null; // 全局变量  null是一个空对象</span></span>
<span class="line"><span>        begin.addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span>            timer = setInterval(function() {</span></span>
<span class="line"><span>                console.log(&#39;ni hao ma&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            }, 1000);</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        stop.addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span>            clearInterval(timer);</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_3-5、this指向" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>3.5、this指向 <a class="header-anchor" href="#_3-5、this指向" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115406408)3.5、this指向&quot;">​</a></h3><ul><li><code>this</code>的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定<code>this</code>到底指向谁</li></ul><p>现阶段，我们先了解一下几个this指向</p><ul><li>全局作用域或者普通函数中<code>this</code>指向全局对象<code>window</code>(注意定时器里面的this指向window)</li><li>方法调用中谁调用<code>this</code>指向谁</li><li>构造函数中<code>this</code>指向构造函数实例</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;button&gt;点击&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // this 指向问题 一般情况下this的最终指向的是那个调用它的对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 1. 全局作用域或者普通函数中this指向全局对象window（ 注意定时器里面的this指向window）</span></span>
<span class="line"><span>        console.log(this);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        function fn() {</span></span>
<span class="line"><span>            console.log(this);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        window.fn();</span></span>
<span class="line"><span>        window.setTimeout(function() {</span></span>
<span class="line"><span>            console.log(this);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }, 1000);</span></span>
<span class="line"><span>        // 2. 方法调用中谁调用this指向谁</span></span>
<span class="line"><span>        var o = {</span></span>
<span class="line"><span>            sayHi: function() {</span></span>
<span class="line"><span>                console.log(this); // this指向的是 o 这个对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        o.sayHi();</span></span>
<span class="line"><span>        var btn = document.querySelector(&#39;button&#39;);</span></span>
<span class="line"><span>        // btn.onclick = function() {</span></span>
<span class="line"><span>        //     console.log(this); // this指向的是btn这个按钮对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // }</span></span>
<span class="line"><span>        btn.addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span>                console.log(this); // this指向的是btn这个按钮对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            // 3. 构造函数中this指向构造函数的实例</span></span>
<span class="line"><span>        function Fun() {</span></span>
<span class="line"><span>            console.log(this); // this 指向的是fun 实例对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        var fun = new Fun();</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h2 id="js执行机制" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>JS执行机制 <a class="header-anchor" href="#js执行机制" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115406408)JS执行机制&quot;">​</a></h2><h3 id="_4-1、js是单线程" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>4.1、JS是单线程 <a class="header-anchor" href="#_4-1、js是单线程" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115406408)4.1、JS是单线程&quot;">​</a></h3><ul><li>JavaScript 语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。这是因为 Javascript 这门脚本语言诞生的使命所致——JavaScript 是为处理页面中用户的交互，以及操作 DOM 而诞生的。比如我们对某个 DOM 元素进行添加和删除操作，不能同时进行。 应该先进行添加，之后再删除。</li><li>单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。这样所导致的问题是： 如果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。</li></ul><h3 id="_4-2、一个问题" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>4.2、一个问题 <a class="header-anchor" href="#_4-2、一个问题" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115406408)4.2、一个问题&quot;">​</a></h3><p>以下代码执行的结果是什么？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>console.log(1);</span></span>
<span class="line"><span>setTimeout(function() {</span></span>
<span class="line"><span>    console.log(3);</span></span>
<span class="line"><span>},1000);</span></span>
<span class="line"><span>console.log(2);</span></span></code></pre></div><p>那么以下代码执行的结果又是什么？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>console.log(1);</span></span>
<span class="line"><span>setTimeout(function() {</span></span>
<span class="line"><span>    console.log(3);</span></span>
<span class="line"><span>},0);</span></span>
<span class="line"><span>console.log(2);</span></span></code></pre></div><h3 id="_4-3、同步和异步" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>4.3、同步和异步 <a class="header-anchor" href="#_4-3、同步和异步" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115406408)4.3、同步和异步&quot;">​</a></h3><ul><li>为了解决这个问题，利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程</li><li>于是，JS 中出现了同步和异步。</li><li>同步: <ul><li>前一个任务结束后再执行后一个任务</li></ul></li><li>异步： <ul><li>在做这件事的同时，你还可以去处理其他事情</li></ul></li></ul><blockquote><p>同步任务</p></blockquote><ul><li>同步任务都在主线程上执行，形成一个 执行栈</li></ul><blockquote><p>异步任务</p></blockquote><ul><li>JS中的异步是通过回调函数实现的</li><li>异步任务有以下三种类型 <ul><li>普通事件，如<code>click</code>,<code>resize</code>等</li><li>资源加载，如<code>load</code>,<code>error</code>等</li><li>定时器，包括<code>setInterval</code>,<code>setTimeout</code>等</li></ul></li><li>异步任务相关回调函数添加到任务队列中</li></ul><p><img src="https://img-blog.csdnimg.cn/f0cc815b48574ce2bb068501a9394a5e.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><ol><li>先执行执行栈中的同步任务</li><li>异步任务(回调函数)放入任务队列中</li><li>一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行</li></ol><p><img src="https://img-blog.csdnimg.cn/d337ebf7ba2c40c7a768fd91f6bfbf56.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><p>此时再来看我们刚才的问题：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>console.log(1);</span></span>
<span class="line"><span>setTimeout(function() {</span></span>
<span class="line"><span>    console.log(3);</span></span>
<span class="line"><span>},1000);</span></span>
<span class="line"><span>console.log(2);</span></span></code></pre></div><ul><li>执行的结果和顺序为 1、2、3</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>console.log(1);</span></span>
<span class="line"><span>setTimeout(function() {</span></span>
<span class="line"><span>    console.log(3);</span></span>
<span class="line"><span>},0);</span></span>
<span class="line"><span>console.log(2);</span></span></code></pre></div><ul><li>执行的结果和顺序为 1、2、3</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 3. 第三个问题</span></span>
<span class="line"><span>console.log(1);</span></span>
<span class="line"><span>document.onclick = function() {</span></span>
<span class="line"><span>    console.log(&#39;click&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(2);</span></span>
<span class="line"><span>setTimeout(function() {</span></span>
<span class="line"><span>    console.log(3)</span></span>
<span class="line"><span>}, 3000)</span></span></code></pre></div><p><img src="https://img-blog.csdnimg.cn/eaabe7880146428fb68e6e64f23db40c.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><p>同步任务放在执行栈中执行，异步任务由异步进程处理放到任务队列中，执行栈中的任务执行完毕会去任务队列中查看是否有异步任务执行，由于主线程不断的重复获得任务、执行任务、再获取任务、再执行，所以这种机制被称为事件循环（ event loop）。</p><h2 id="location对象" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>location对象 <a class="header-anchor" href="#location对象" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115406408)location对象&quot;">​</a></h2><ul><li>window 对象给我们提供了一个 <code>location</code>属性用于获取或者设置窗体的url，并且可以解析url。因为这个属性返回的是一个对象，所以我们将这个属性也称为 location 对象。</li></ul><h3 id="_5-1、url" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>5.1、url <a class="header-anchor" href="#_5-1、url" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115406408)5.1、url&quot;">​</a></h3><p>==统一资源定位符（uniform resouce locator）==是互联网上标准资源的地址。互联网上的每个文件都有一个唯一的 URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它。</p><p>url 的一般语法格式为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>protocol://host[:port]/path/[?query]#fragment</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http://www.itcast.cn/index.html?name=andy&amp;age=18#link</span></span></code></pre></div><table><thead><tr><th>组成</th><th>说明</th></tr></thead><tbody><tr><td>protocol</td><td>通信协议 常用的http,ftp,maito等</td></tr><tr><td>host</td><td>主机(域名) www.itheima.com</td></tr><tr><td>port</td><td>端口号，可选</td></tr><tr><td>path</td><td>路径 由零或多个<code>&#39;/&#39;</code>符号隔开的字符串</td></tr><tr><td>query</td><td>参数 以键值对的形式，通过<code>&amp;</code>符号分隔开来</td></tr><tr><td>fragment</td><td>片段 <code>#</code>后面内容 常见于链接 锚点</td></tr></tbody></table><h3 id="_5-2、location对象属性" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>5.2、location对象属性 <a class="header-anchor" href="#_5-2、location对象属性" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115406408)5.2、location对象属性&quot;">​</a></h3><table><thead><tr><th>location对象属性</th><th>返回值</th></tr></thead><tbody><tr><td>location.href</td><td>获取或者设置整个URL</td></tr><tr><td>location.host</td><td>返回主机（域名）www.baidu.com</td></tr><tr><td>location.port</td><td>返回端口号，如果未写返回空字符串</td></tr><tr><td>location.pathname</td><td>返回路径</td></tr><tr><td>location.search</td><td>返回参数</td></tr><tr><td>location.hash</td><td>返回片段 #后面内容常见于链接 锚点</td></tr></tbody></table><p>重点记住： <code>href</code>和<code>search</code></p><p>需求：5s之后跳转页面</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;button&gt;点击&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        var btn = document.querySelector(&#39;button&#39;);</span></span>
<span class="line"><span>        var div = document.querySelector(&#39;div&#39;);</span></span>
<span class="line"><span>        var timer = 5;</span></span>
<span class="line"><span>        setInterval(function() {</span></span>
<span class="line"><span>            if (timer == 0) {</span></span>
<span class="line"><span>                location.href = &#39;http://www.itcast.cn&#39;;</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                div.innerHTML = &#39;您将在&#39; + timer + &#39;秒钟之后跳转到首页&#39;;</span></span>
<span class="line"><span>                timer--;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }, 1000);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_5-3、location对象方法" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>5.3、location对象方法 <a class="header-anchor" href="#_5-3、location对象方法" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115406408)5.3、location对象方法&quot;">​</a></h3><table><thead><tr><th>location对象方法</th><th>返回值</th></tr></thead><tbody><tr><td>location.assign()</td><td>跟href一样，可以跳转页面（也称为重定向页面）</td></tr><tr><td>location.replace()</td><td>替换当前页面，因为不记录历史，所以不能后退页面</td></tr><tr><td>location.reload()</td><td>重新加载页面，相当于刷新按钮或者 f5 ，如果参数为true 强制刷新 ctrl+f5</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;button&gt;点击&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        var btn = document.querySelector(&#39;button&#39;);</span></span>
<span class="line"><span>        btn.addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span>            // 记录浏览历史，所以可以实现后退功能</span></span>
<span class="line"><span>            // location.assign(&#39;http://www.itcast.cn&#39;);</span></span>
<span class="line"><span>            // 不记录浏览历史，所以不可以实现后退功能</span></span>
<span class="line"><span>            // location.replace(&#39;http://www.itcast.cn&#39;);</span></span>
<span class="line"><span>            location.reload(true);</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_5-4、获取url参数" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>5.4、获取URL参数 <a class="header-anchor" href="#_5-4、获取url参数" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115406408)5.4、获取URL参数&quot;">​</a></h3><p>我们简单写一个登录框，点击登录跳转到 index.html</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;form action=&quot;index.html&quot;&gt;</span></span>
<span class="line"><span>        用户名： &lt;input type=&quot;text&quot; name=&quot;uname&quot;&gt;</span></span>
<span class="line"><span>        &lt;input type=&quot;submit&quot; value=&quot;登录&quot;&gt;</span></span>
<span class="line"><span>    &lt;/form&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><p>接下来我们写 index.html</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        console.log(location.search); // ?uname=andy</span></span>
<span class="line"><span>        // 1.先去掉？  substr(&#39;起始的位置&#39;，截取几个字符);</span></span>
<span class="line"><span>        var params = location.search.substr(1); // uname=andy</span></span>
<span class="line"><span>        console.log(params);</span></span>
<span class="line"><span>        // 2. 利用=把字符串分割为数组 split(&#39;=&#39;);</span></span>
<span class="line"><span>        var arr = params.split(&#39;=&#39;);</span></span>
<span class="line"><span>        console.log(arr); // [&quot;uname&quot;, &quot;ANDY&quot;]</span></span>
<span class="line"><span>        var div = document.querySelector(&#39;div&#39;);</span></span>
<span class="line"><span>        // 3.把数据写入div中</span></span>
<span class="line"><span>        div.innerHTML = arr[1] + &#39;欢迎您&#39;;</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><p>这样我们就能获取到路径上的URL参数</p><h2 id="navigator对象" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>navigator对象 <a class="header-anchor" href="#navigator对象" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115406408)navigator对象&quot;">​</a></h2><ul><li>navigator 对象包含有关浏览器的信息，它有很多属性</li><li>我们常用的是<code>userAgent</code>,该属性可以返回由客户机发送服务器的<code>user-agent</code>头部的值</li></ul><p>下面前端代码可以判断用户是用哪个终端打开页面的，如果是用 PC 打开的，我们就跳转到 PC 端的页面，如果是用手机打开的，就跳转到手机端页面</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {</span></span>
<span class="line"><span>    window.location.href = &quot;&quot;;     //手机</span></span>
<span class="line"><span> } else {</span></span>
<span class="line"><span>    window.location.href = &quot;&quot;;     //电脑</span></span>
<span class="line"><span> }</span></span></code></pre></div><h2 id="history对象" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115406408" target="_blank" rel="noreferrer"></a>history对象 <a class="header-anchor" href="#history对象" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115406408)history对象&quot;">​</a></h2><ul><li>window 对象给我们提供了一个 history 对象，与浏览器历史记录进行交互</li><li>该对象包含用户（在浏览器窗口中）访问过的 URL。</li></ul><table><thead><tr><th>history对象方法</th><th>作用</th></tr></thead><tbody><tr><td>back()</td><td>可以后退功能</td></tr><tr><td>forward()</td><td>前进功能</td></tr><tr><td>go(参数)</td><td>前进后退功能，参数如果是 1 前进1个页面 如果是 -1 后退1个页面</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;a href=&quot;list.html&quot;&gt;点击我去往列表页&lt;/a&gt;</span></span>
<span class="line"><span>    &lt;button&gt;前进&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        var btn = document.querySelector(&#39;button&#39;);</span></span>
<span class="line"><span>        btn.addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span>            // history.forward();</span></span>
<span class="line"><span>            history.go(1);</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><p><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>1、面向对象</p><p>面向对象更贴近我们的实际生活, 可以使用面向对象描述现实世界事物. 但是事物分为具体的事物和抽象的事物</p><p>面向对象的思维特点：</p><ol><li>抽取（抽象）对象共用的属性和行为组织(封装)成一个类(模板)</li><li>对类进行实例化, 获取类的对象</li></ol><h3 id="_1-1、对象" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>1.1、对象 <a class="header-anchor" href="#_1-1、对象" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)1.1、对象&quot;">​</a></h3><p>在 JavaScript 中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象，例如字符串、数值、数组、函数等。</p><p>对象是由属性和方法组成的</p><ul><li>属性：事物的<strong>特征，<strong>在对象中用</strong>属性</strong>来表示</li><li>方法：事物的<strong>行为，<strong>在对象中用</strong>方法</strong>来表示</li></ul><h3 id="_1-2、类" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>1.2、类 <a class="header-anchor" href="#_1-2、类" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)1.2、类&quot;">​</a></h3><p>在 ES6 中新增加了类的概念，可以使用 class 关键字声明一个类，之后以这个类来实例化对象。</p><ul><li>类抽象了对象的公共部分，它泛指某一大类（class）</li><li>对象特指某一个，通过类实例化一个具体的对象</li></ul><h4 id="_1-2-1、创建类" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>1.2.1、创建类 <a class="header-anchor" href="#_1-2-1、创建类" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)1.2.1、创建类&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class name {</span></span>
<span class="line"><span>    // class body</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>创建实例</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var XX = new name();</span></span></code></pre></div><p>注意：类必须使用<code>new</code> 实例化对象</p><h4 id="_1-2-2、构造函数" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>1.2.2、构造函数 <a class="header-anchor" href="#_1-2-2、构造函数" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)1.2.2、构造函数&quot;">​</a></h4><p>constructor() 方法是类的构造函数(默认方法)，用于传递参数,返回实例对象，通过 new 命令生成对象实例时，自动调用该方法。如果没有显示定义, 类内部会自动给我们创建一个constructor()</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    // 1. 创建类 class  创建一个 明星类</span></span>
<span class="line"><span>    class Star {</span></span>
<span class="line"><span>        // constructor 构造器或者构造函数</span></span>
<span class="line"><span>        constructor(uname, age) {</span></span>
<span class="line"><span>            this.uname = uname;</span></span>
<span class="line"><span>            this.age = age;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 2. 利用类创建对象 new</span></span>
<span class="line"><span>    var ldh = new Star(&#39;刘德华&#39;, 18);</span></span>
<span class="line"><span>    var zxy = new Star(&#39;张学友&#39;, 20);</span></span>
<span class="line"><span>    console.log(ldh);</span></span>
<span class="line"><span>    console.log(zxy);</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><ul><li>通过 class 关键字创建类，类名我们还是习惯性<strong>定义首字母大写</strong></li><li>类里面有个 <code>constructor</code>函数，可以接收传递过来的参数，同时返回实例对象</li><li><code>constructor</code>函数只要 new 生成实例时，就会自动调用这个函数，如果我们不写这个函数，类也会自动生成这个函数</li><li>最后注意语法规范 <ul><li>创建类➡类名后面不要加小括号</li><li>生成实例➡类名后面加小括号</li><li>构造函数不需要加 function 关键字</li></ul></li></ul><h4 id="_1-2-3、类中添加方法" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>1.2.3、类中添加方法 <a class="header-anchor" href="#_1-2-3、类中添加方法" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)1.2.3、类中添加方法&quot;">​</a></h4><p>语法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Person {</span></span>
<span class="line"><span>  constructor(name,age) {   </span></span>
<span class="line"><span>      // constructor 称为构造器或者构造函数</span></span>
<span class="line"><span>      this.name = name;</span></span>
<span class="line"><span>      this.age = age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>   say() {</span></span>
<span class="line"><span>      console.log(this.name + &#39;你好&#39;);</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}      </span></span>
<span class="line"><span>var ldh = new Person(&#39;刘德华&#39;, 18); </span></span>
<span class="line"><span>ldh.say()</span></span></code></pre></div><p><strong>注意</strong>： 方法之间不能加逗号分隔，同时方法不需要添加 function 关键字。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    // 1. 创建类 class  创建一个 明星类</span></span>
<span class="line"><span>    class Star {</span></span>
<span class="line"><span>        // 类的共有属性放到 constructor 里面</span></span>
<span class="line"><span>        constructor(uname, age) {</span></span>
<span class="line"><span>            this.uname = uname;</span></span>
<span class="line"><span>            this.age = age;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        sing(song) {</span></span>
<span class="line"><span>            console.log(this.uname + song);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 2. 利用类创建对象 new</span></span>
<span class="line"><span>    var ldh = new Star(&#39;刘德华&#39;, 18);</span></span>
<span class="line"><span>    var zxy = new Star(&#39;张学友&#39;, 20);</span></span>
<span class="line"><span>    console.log(ldh);</span></span>
<span class="line"><span>    console.log(zxy);</span></span>
<span class="line"><span>    // (1) 我们类里面所有的函数不需要写function </span></span>
<span class="line"><span>    // (2) 多个函数方法之间不需要添加逗号分隔</span></span>
<span class="line"><span>    ldh.sing(&#39;冰雨&#39;);</span></span>
<span class="line"><span>    zxy.sing(&#39;李香兰&#39;);</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><ul><li>类的共有属性放到<code>constructor</code> 里面</li><li>类里面的函数都不需要写 <code>function</code> 关键字</li></ul><h3 id="_1-3-、类的继承" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>1.3 、类的继承 <a class="header-anchor" href="#_1-3-、类的继承" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)1.3 、类的继承&quot;">​</a></h3><p>现实中的继承：子承父业，比如我们都继承了父亲的姓。</p><p>程序中的继承：子类可以继承父类的一些属性和方法。</p><p>语法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 父类</span></span>
<span class="line"><span>class Father {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 子类继承父类</span></span>
<span class="line"><span>class Son extends Father {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>看一个实例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    // 父类有加法方法</span></span>
<span class="line"><span>    class Father {</span></span>
<span class="line"><span>        constructor(x, y) {</span></span>
<span class="line"><span>            this.x = x;</span></span>
<span class="line"><span>            this.y = y;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        sum() {</span></span>
<span class="line"><span>            console.log(this.x + this.y);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 子类继承父类加法方法 同时 扩展减法方法</span></span>
<span class="line"><span>    class Son extends Father {</span></span>
<span class="line"><span>        constructor(x, y) {</span></span>
<span class="line"><span>            // 利用super 调用父类的构造函数</span></span>
<span class="line"><span>            // super 必须在子类this之前调用</span></span>
<span class="line"><span>            super(x, y);</span></span>
<span class="line"><span>            this.x = x;</span></span>
<span class="line"><span>            this.y = y;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        subtract() {</span></span>
<span class="line"><span>            console.log(this.x - this.y);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    var son = new Son(5, 3);</span></span>
<span class="line"><span>    son.subtract();</span></span>
<span class="line"><span>    son.sum();</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="_1-4、super关键字" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>1.4、super关键字 <a class="header-anchor" href="#_1-4、super关键字" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)1.4、super关键字&quot;">​</a></h3><ul><li><code>super</code> 关键字用于访问和调用对象父类上的函数，可以调用父类的构造函数，也可以调用父类的普通函数</li></ul><h4 id="_1-4-1、调用父类的构造函数" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>1.4.1、调用父类的构造函数 <a class="header-anchor" href="#_1-4-1、调用父类的构造函数" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)1.4.1、调用父类的构造函数&quot;">​</a></h4><p>语法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 父类</span></span>
<span class="line"><span>class Person {</span></span>
<span class="line"><span>    constructor(surname){</span></span>
<span class="line"><span>        this.surname = surname;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 子类继承父类</span></span>
<span class="line"><span>class Student entends Person {</span></span>
<span class="line"><span>    constructor(surname,firstname) {</span></span>
<span class="line"><span>        super(surname);					//调用父类的 constructor(surname)</span></span>
<span class="line"><span>        this.firstname = firstname;		//定义子类独有的属性</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注意：<strong>子类在构造函数中使用super,必须放到this前面（必须先调用父类的构造方法，在使用子类构造方法）</strong></p><p>案例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 父类</span></span>
<span class="line"><span>class Father {</span></span>
<span class="line"><span>    constructor(surname){</span></span>
<span class="line"><span>        this.surname = surname;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    saySurname() {</span></span>
<span class="line"><span>        console.log(&#39;我的姓是&#39; + this.surname);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 子类继承父类</span></span>
<span class="line"><span>class Son entends Father {</span></span>
<span class="line"><span>    constructor(surname,firstname) {</span></span>
<span class="line"><span>        super(surname);					//调用父类的 constructor(surname)</span></span>
<span class="line"><span>        this.firstname = firstname;		//定义子类独有的属性</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    sayFirstname() {</span></span>
<span class="line"><span>        console.log(&#39;我的名字是:&#39; + this.firstname);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var damao = new Son(&#39;刘&#39;,&#39;德华&#39;);</span></span>
<span class="line"><span>damao.saySurname();</span></span>
<span class="line"><span>damao.sayFirstname();</span></span></code></pre></div><h4 id="_1-4-2、调用父类的普通函数" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>1.4.2、调用父类的普通函数 <a class="header-anchor" href="#_1-4-2、调用父类的普通函数" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)1.4.2、调用父类的普通函数&quot;">​</a></h4><p>语法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Father {</span></span>
<span class="line"><span>    say() {</span></span>
<span class="line"><span>        return &#39;我是爸爸&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class Son extends Father {</span></span>
<span class="line"><span>    say(){</span></span>
<span class="line"><span>        // super.say() super调用父类的方法</span></span>
<span class="line"><span>        return super.say() + &#39;的儿子&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var damao = new Son();</span></span>
<span class="line"><span>console.log(damao.say());</span></span></code></pre></div><ul><li><p>多个方法之间不需要添加逗号分隔</p></li><li><p>继承中属性和方法的查找原则：就近原则，先看子类，再看父类</p></li></ul><h3 id="_1-4、三个注意点" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>1.4、三个注意点 <a class="header-anchor" href="#_1-4、三个注意点" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)1.4、三个注意点&quot;">​</a></h3><ol><li>在ES6中类没有变量提升，所以必须先定义类，才能通过类实例化对象</li><li>类里面的共有属性和方法一定要加 <code>this</code>使用</li><li>类里面的<code>this</code>指向： <ul><li>constructor 里面的 <code>this</code>指向实例对象</li><li>方法里面的<code>this</code>指向这个方法的调用者</li></ul></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;button&gt;点击&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        var that;</span></span>
<span class="line"><span>        var _that;</span></span>
<span class="line"><span>        class Star {</span></span>
<span class="line"><span>            constructor(uname, age) {</span></span>
<span class="line"><span>                // constructor 里面的this 指向的是 创建的实例对象</span></span>
<span class="line"><span>                that = this;</span></span>
<span class="line"><span>                this.uname = uname;</span></span>
<span class="line"><span>                this.age = age;</span></span>
<span class="line"><span>                // this.sing();</span></span>
<span class="line"><span>                this.btn = document.querySelector(&#39;button&#39;);</span></span>
<span class="line"><span>                this.btn.onclick = this.sing;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            sing() {</span></span>
<span class="line"><span>            // 这个sing方法里面的this 指向的是 btn 这个按钮,因为这个按钮调用了这个函数</span></span>
<span class="line"><span>                console.log(that.uname); </span></span>
<span class="line"><span>                // that里面存储的是constructor里面的this</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            dance() {</span></span>
<span class="line"><span>                // 这个dance里面的this 指向的是实例对象 ldh 因为ldh 调用了这个函数</span></span>
<span class="line"><span>                _that = this;</span></span>
<span class="line"><span>                console.log(this);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        var ldh = new Star(&#39;刘德华&#39;);</span></span>
<span class="line"><span>        console.log(that === ldh);</span></span>
<span class="line"><span>        ldh.dance();</span></span>
<span class="line"><span>        console.log(_that === ldh);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 1. 在 ES6 中类没有变量提升，所以必须先定义类，才能通过类实例化对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 2. 类里面的共有的属性和方法一定要加this使用.</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h2 id="构造函数和原型" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>构造函数和原型 <a class="header-anchor" href="#构造函数和原型" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)构造函数和原型&quot;">​</a></h2><h3 id="_2-1、概述" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>2.1、概述 <a class="header-anchor" href="#_2-1、概述" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)2.1、概述&quot;">​</a></h3><p>在典型的 OOP 的语言中（如 Java），都存在类的概念，类就是对象的模板，对象就是类的实例，但在 ES6之前， JS 中并没用引入类的概念。</p><p>ES6， 全称 ECMAScript 6.0 ，2015.06 发版。但是目前浏览器的 JavaScript 是 ES5 版本，大多数高版本的浏览器也支持 ES6，不过只实现了 ES6 的部分特性和功能。</p><p>在 ES6之前 ，对象不是基于类创建的，而是用一种称为构建函数的特殊函数来定义对象和它们的特征。</p><ul><li>创建对象有三种方式 <ul><li><strong>对象字面量</strong></li><li><strong>new Object()</strong></li><li><strong>自定义构造函数</strong></li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 1. 利用 new Object() 创建对象</span></span>
<span class="line"><span>var obj1 = new Object();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2. 利用对象字面量创建对象</span></span>
<span class="line"><span>var obj2 = {}；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 3.利用构造函数创建对象</span></span>
<span class="line"><span>function Star(uname,age) {</span></span>
<span class="line"><span>    this.uname = uname;</span></span>
<span class="line"><span>    this.age = age;</span></span>
<span class="line"><span>    this.sing = function() {</span></span>
<span class="line"><span>        console.log(&#39;我会唱歌&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var ldh = new Star(&#39;刘德华&#39;,18);</span></span></code></pre></div><p>注意：</p><ol><li>构造函数用于创建某一类对象，其首字母要大写</li><li>构造函数要和<code>new</code>一起使用才有意义</li></ol><h3 id="_2-2、构造函数" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>2.2、构造函数 <a class="header-anchor" href="#_2-2、构造函数" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)2.2、构造函数&quot;">​</a></h3><ul><li>构造函数是一种特殊的函数，主要用来初始化对象(为对象成员变量赋初始值)，它总与<code>new</code>一起使用</li><li>我们可以把对象中的一些公共的属性和方法抽取出来，然后封装到这个函数里面</li></ul><p>new 在执行时会做四件事</p><ol><li>在内存中创建一个新的空对象。</li><li>让 this 指向这个新的对象。</li><li>执行构造函数里面的代码，给这个新对象添加属性和方法。</li><li>返回这个新对象（所以构造函数里面不需要 return ）。</li></ol><h4 id="_2-2-1、静态成员和实例成员" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>2.2.1、静态成员和实例成员 <a class="header-anchor" href="#_2-2-1、静态成员和实例成员" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)2.2.1、静态成员和实例成员&quot;">​</a></h4><p>JavaScript 的构造函数中可以添加一些成员，可以在构造函数本身上添加，也可以在构造函数内部的<code>this</code>上添加。通过这两种方式添加的成员，就分别称为静态成员和实例成员。</p><ul><li>静态成员: 在构造函数本身上添加的成员为静态成员，只能由构造函数本身来访问</li><li>实例成员: 在构造函数内部创建的对象成员称为实例成员，只能由实例化的对象来访问</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 构造函数中的属性和方法我们称为成员，成员可以添加</span></span>
<span class="line"><span>function Star(uname,age) {</span></span>
<span class="line"><span>    this.uname = uname;</span></span>
<span class="line"><span>    this.age = age;</span></span>
<span class="line"><span>    this.sing = function() {</span></span>
<span class="line"><span>        console.log(&#39;我会唱歌&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var ldh = new Star(&#39;刘德华&#39;,18);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 实例成员就是构造函数内部通过this添加的成员  uname age sing  就是实例成员</span></span>
<span class="line"><span>// 实例成员只能通过实例化的对象来访问</span></span>
<span class="line"><span>ldh.sing();</span></span>
<span class="line"><span>Star.uname; // undefined     不可以通过构造函数来访问实例成员</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 静态成员就是在构造函数本身上添加的成员 sex 就是静态成员</span></span>
<span class="line"><span>// 静态成员只能通过构造函数来访问</span></span>
<span class="line"><span>Star.sex = &#39;男&#39;;</span></span>
<span class="line"><span>Star.sex;</span></span>
<span class="line"><span>ldh.sex; // undefined  不能通过对象来访问</span></span></code></pre></div><h4 id="_2-2-2、构造函数的问题" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>2.2.2、构造函数的问题 <a class="header-anchor" href="#_2-2-2、构造函数的问题" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)2.2.2、构造函数的问题&quot;">​</a></h4><p>构造函数方法很好用，但是存在浪费内存的问题。</p><p><img src="https://img-blog.csdnimg.cn/080f8513ab074159abf16942fd009b2b.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><ul><li><strong>我们希望所有的对象使用同一个函数，这样就比较节省内存</strong></li></ul><h3 id="_2-3、构造函数原型-prototype" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>2.3、构造函数原型 prototype <a class="header-anchor" href="#_2-3、构造函数原型-prototype" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)2.3、构造函数原型 prototype&quot;">​</a></h3><ul><li>构造函数通过原型分配的函数是所有对象所共享的,这样就解决了内存浪费问题</li><li>JavaScript 规定，每一个构造函数都有一个<code>prototype</code>属性，指向另一个对象，注意这个<code>prototype</code>就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有</li><li>我们可以把那些不变的方法，直接定义在<code>prototype</code> 对象上，这样所有对象的实例就可以共享这些方法</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 1. 构造函数的问题. </span></span>
<span class="line"><span>        function Star(uname, age) {</span></span>
<span class="line"><span>    		//公共属性定义到构造函数里面</span></span>
<span class="line"><span>            this.uname = uname;</span></span>
<span class="line"><span>            this.age = age;</span></span>
<span class="line"><span>            // this.sing = function() {</span></span>
<span class="line"><span>            //     console.log(&#39;我会唱歌&#39;);</span></span>
<span class="line"><span>            // }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>		//公共的方法我们放到原型对象身上</span></span>
<span class="line"><span>        Star.prototype.sing = function() {</span></span>
<span class="line"><span>            console.log(&#39;我会唱歌&#39;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        var ldh = new Star(&#39;刘德华&#39;, 18);</span></span>
<span class="line"><span>        var zxy = new Star(&#39;张学友&#39;, 19);</span></span>
<span class="line"><span>        console.log(ldh.sing === zxy.sing);</span></span>
<span class="line"><span>        ldh.sing();</span></span>
<span class="line"><span>        zxy.sing();</span></span>
<span class="line"><span>        // 2. 一般情况下,我们的公共属性定义到构造函数里面, 公共的方法我们放到原型对象身上</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><ul><li>一般情况下,我们的公共属性定义到构造函数里面, 公共的方法我们放到原型对象身上</li></ul><p>问答：原型是什么？</p><ul><li>一个对象，我们也称为 <code>prototype</code> 为原型对象</li></ul><p>问答：原型的作用是什么？</p><ul><li>共享方法</li></ul><h3 id="_2-4、对象原型-proto" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>2.4、对象原型 __ proto __ <a class="header-anchor" href="#_2-4、对象原型-proto" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)2.4、对象原型 \\_\\_ proto \\_\\_&quot;">​</a></h3><ul><li>对象都会有一个属性 <code>_proto_</code> 指向构造函数的<code>prototype</code>原型对象，之所以我们对象可以使用构造函数<code>prototype</code> 原型对象的属性和方法，就是因为对象有<code>_proto_</code>原型的存在。</li><li><code>_proto_</code>对象原型和原型对象 <code>prototype</code> 是等价的</li><li><code>_proto_</code>对象原型的意义就在于为对象的查找机制提供一个方向，或者说一条路线，但是它是一个非标准属性，因此实际开发中，不可以使用这个属性，它只是内部指向原型对象 <code>prototype</code></li></ul><p><img src="https://img-blog.csdnimg.cn/e8e771c189c548f7b67209722f6289dc.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><ul><li><code>Star.prototype 和 ldh._proto_</code> 指向相同</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        function Star(uname, age) {</span></span>
<span class="line"><span>            this.uname = uname;</span></span>
<span class="line"><span>            this.age = age;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        Star.prototype.sing = function() {</span></span>
<span class="line"><span>            console.log(&#39;我会唱歌&#39;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        var ldh = new Star(&#39;刘德华&#39;, 18);</span></span>
<span class="line"><span>        var zxy = new Star(&#39;张学友&#39;, 19);</span></span>
<span class="line"><span>        ldh.sing();</span></span>
<span class="line"><span>        console.log(ldh); </span></span>
<span class="line"><span>		// 对象身上系统自己添加一个 __proto__ 指向我们构造函数的原型对象 prototype</span></span>
<span class="line"><span>        console.log(ldh.__proto__ === Star.prototype);</span></span>
<span class="line"><span>        // 方法的查找规则: 首先先看ldh 对象身上是否有 sing 方法,如果有就执行这个对象上的sing</span></span>
<span class="line"><span>        // 如果没有sing 这个方法,因为有 __proto__ 的存在,就去构造函数原型对象prototype身上去查找sing这个方法</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_2-5、constructor-构造函数" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>2.5、constructor 构造函数 <a class="header-anchor" href="#_2-5、constructor-构造函数" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)2.5、constructor 构造函数&quot;">​</a></h3><ul><li><p>对象原型(__ proto __) 和构造函数(prototype)原型对象 里面都有一个属性 constructor 属性， constructor 我们称为构造函数，因为它指回构造函数本身。</p></li><li><p><code>constructor</code>主要用于记录该对象引用于哪个构造函数，它可以让原型对象重新指向原来的构造函数</p></li><li><p><strong>一般情况下，对象的方法都在构造函数(prototype)的原型对象中设置</strong></p></li><li><p>如果有多个对象的方法，我们可以给原型对象<code>prototype</code>采取对象形式赋值，但是这样会覆盖构造函数原型对象原来的内容，这样修改后的原型对象<code>constructor</code>就不再指向当前构造函数了。此时，我们可以在修改后的原型对象中，添加一个<code>constructor</code>指向原来的构造函数</p></li></ul><p>具体请看实例配合理解</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        function Star(uname, age) {</span></span>
<span class="line"><span>            this.uname = uname;</span></span>
<span class="line"><span>            this.age = age;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 很多情况下,我们需要手动的利用constructor 这个属性指回 原来的构造函数</span></span>
<span class="line"><span>        // Star.prototype.sing = function() {</span></span>
<span class="line"><span>        //     console.log(&#39;我会唱歌&#39;);</span></span>
<span class="line"><span>        // };</span></span>
<span class="line"><span>        // Star.prototype.movie = function() {</span></span>
<span class="line"><span>        //     console.log(&#39;我会演电影&#39;);</span></span>
<span class="line"><span>        // }</span></span>
<span class="line"><span>        Star.prototype = {</span></span>
<span class="line"><span>            // 如果我们修改了原来的原型对象,给原型对象赋值的是一个对象,则必须手动的利用constructor指回原来的构造函数</span></span>
<span class="line"><span>            constructor: Star,</span></span>
<span class="line"><span>            sing: function() {</span></span>
<span class="line"><span>                console.log(&#39;我会唱歌&#39;);</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            movie: function() {</span></span>
<span class="line"><span>                console.log(&#39;我会演电影&#39;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        var ldh = new Star(&#39;刘德华&#39;, 18);</span></span>
<span class="line"><span>        var zxy = new Star(&#39;张学友&#39;, 19);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_2-6、构造函数、实例、原型对象三者关系" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>2.6、构造函数、实例、原型对象三者关系 <a class="header-anchor" href="#_2-6、构造函数、实例、原型对象三者关系" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)2.6、构造函数、实例、原型对象三者关系&quot;">​</a></h3><p><img src="https://img-blog.csdnimg.cn/8ee8345e99974afd93ce053e7988712d.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><h3 id="_2-7、原型链查找规则" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>2.7、原型链查找规则 <a class="header-anchor" href="#_2-7、原型链查找规则" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)2.7、原型链查找规则&quot;">​</a></h3><ol><li>当访问一个对象的属性(包括方法)时，首先查找这个对象自身有没有该属性</li><li>如果没有就查找它的原型(也就是<code>_proto_</code>指向的<code>prototype原型对象</code>)</li><li>如果还没有就查找原型对象的原型(Object的原型对象)</li><li>依次类推一直找到Object为止(null)</li><li>__ proto __对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条路线。</li></ol><p><img src="https://img-blog.csdnimg.cn/c1cbd18ff3444621bf151654714b85cd.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        function Star(uname, age) {</span></span>
<span class="line"><span>            this.uname = uname;</span></span>
<span class="line"><span>            this.age = age;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        Star.prototype.sing = function() {</span></span>
<span class="line"><span>            console.log(&#39;我会唱歌&#39;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        var ldh = new Star(&#39;刘德华&#39;, 18);</span></span>
<span class="line"><span>        // 1. 只要是对象就有__proto__ 原型, 指向原型对象</span></span>
<span class="line"><span>        console.log(Star.prototype);</span></span>
<span class="line"><span>        console.log(Star.prototype.__proto__ === Object.prototype);</span></span>
<span class="line"><span>        // 2.我们Star原型对象里面的__proto__原型指向的是 Object.prototype</span></span>
<span class="line"><span>        console.log(Object.prototype.__proto__);</span></span>
<span class="line"><span>        // 3. 我们Object.prototype原型对象里面的__proto__原型  指向为 null</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_2-8、原型对象this指向" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>2.8、原型对象this指向 <a class="header-anchor" href="#_2-8、原型对象this指向" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)2.8、原型对象this指向&quot;">​</a></h3><ul><li>构造函数中的 <code>this</code>指向我们的实例对象</li><li>原型对象里面放的是方法，这个方法里面的<code>this</code>指向的是这个方法的调用者，也就是这个实例对象</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        function Star(uname, age) {</span></span>
<span class="line"><span>            this.uname = uname;</span></span>
<span class="line"><span>            this.age = age;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        var that;</span></span>
<span class="line"><span>        Star.prototype.sing = function() {</span></span>
<span class="line"><span>            console.log(&#39;我会唱歌&#39;);</span></span>
<span class="line"><span>            that = this;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        var ldh = new Star(&#39;刘德华&#39;, 18);</span></span>
<span class="line"><span>        // 1. 在构造函数中,里面this指向的是对象实例 ldh</span></span>
<span class="line"><span>        ldh.sing();</span></span>
<span class="line"><span>        console.log(that === ldh);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 2.原型对象函数里面的this 指向的是 实例对象 ldh</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_2-9、扩展内置对象" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>2.9、扩展内置对象 <a class="header-anchor" href="#_2-9、扩展内置对象" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)2.9、扩展内置对象&quot;">​</a></h3><ul><li>可以通过原型对象，对原来的内置对象进行扩展自定义的方法</li><li>比如给数组增加自定义求偶数和的功能</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 原型对象的应用 扩展内置对象方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Array.prototype.sum = function() {</span></span>
<span class="line"><span>            var sum = 0;</span></span>
<span class="line"><span>            for (var i = 0; i &lt; this.length; i++) {</span></span>
<span class="line"><span>                sum += this[i];</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return sum;</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        // Array.prototype = {</span></span>
<span class="line"><span>        //     sum: function() {</span></span>
<span class="line"><span>        //         var sum = 0;</span></span>
<span class="line"><span>        //         for (var i = 0; i &lt; this.length; i++) {</span></span>
<span class="line"><span>        //             sum += this[i];</span></span>
<span class="line"><span>        //         }</span></span>
<span class="line"><span>        //         return sum;</span></span>
<span class="line"><span>        //     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // }</span></span>
<span class="line"><span>        var arr = [1, 2, 3];</span></span>
<span class="line"><span>        console.log(arr.sum());</span></span>
<span class="line"><span>        console.log(Array.prototype);</span></span>
<span class="line"><span>        var arr1 = new Array(11, 22, 33);</span></span>
<span class="line"><span>        console.log(arr1.sum());</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><p>注意：</p><ul><li>数组和字符串内置对象不能给原型对象覆盖操作<code>Array.prototype = {}</code>，只能是<code>Array.prototype.xxx = function(){}</code>的方式</li></ul><h2 id="继承" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>继承 <a class="header-anchor" href="#继承" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)继承&quot;">​</a></h2><p>ES6 之前并没有给我们提供<code>extends</code>继承</p><ul><li>我们可以通过构造函数+原型对象模拟实现继承，被称为组合继承</li></ul><h3 id="_3-1、call" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>3.1、call() <a class="header-anchor" href="#_3-1、call" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)3.1、call()&quot;">​</a></h3><p>调用这个函数，并且修改函数运行时的 this 指向</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>fun.call(thisArg,arg1,arg2,......)</span></span></code></pre></div><ul><li><code>thisArg</code>：当前调用函数 this 的指向对象</li><li><code>arg1,arg2</code>： 传递的其他参数</li></ul><p>示例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // call 方法</span></span>
<span class="line"><span>        function fn(x, y) {</span></span>
<span class="line"><span>            console.log(&#39;我希望我的希望有希望&#39;);</span></span>
<span class="line"><span>            console.log(this);		// Object{...}</span></span>
<span class="line"><span>            console.log(x + y);		// 3</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        var o = {</span></span>
<span class="line"><span>            name: &#39;andy&#39;</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        // fn();</span></span>
<span class="line"><span>        // 1. call() 可以调用函数</span></span>
<span class="line"><span>        // fn.call();</span></span>
<span class="line"><span>        // 2. call() 可以改变这个函数的this指向 此时这个函数的this 就指向了o这个对象</span></span>
<span class="line"><span>        fn.call(o, 1, 2);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_3-2、借用构造函数继承父类型属性" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>3.2、借用构造函数继承父类型属性 <a class="header-anchor" href="#_3-2、借用构造函数继承父类型属性" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)3.2、借用构造函数继承父类型属性&quot;">​</a></h3><ul><li>核心原理: 通过 <code>call()</code> 把父类型的 this 指向子类型的 this，这样就可以实现子类型继承父类型的属性</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 借用父构造函数继承属性</span></span>
<span class="line"><span>        // 1. 父构造函数</span></span>
<span class="line"><span>        function Father(uname, age) {</span></span>
<span class="line"><span>            // this 指向父构造函数的对象实例</span></span>
<span class="line"><span>            this.uname = uname;</span></span>
<span class="line"><span>            this.age = age;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 2 .子构造函数 </span></span>
<span class="line"><span>        function Son(uname, age, score) {</span></span>
<span class="line"><span>            // this 指向子构造函数的对象实例</span></span>
<span class="line"><span>            Father.call(this, uname, age);</span></span>
<span class="line"><span>            this.score = score;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        var son = new Son(&#39;刘德华&#39;, 18, 100);</span></span>
<span class="line"><span>        console.log(son);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_3-3、借用原型对象继承父类型方法" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>3.3、借用原型对象继承父类型方法 <a class="header-anchor" href="#_3-3、借用原型对象继承父类型方法" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)3.3、借用原型对象继承父类型方法&quot;">​</a></h3><ul><li>一般情况下，对象的方法都在构造函数的原型对象中设置，通过构造函数无法继承父类方法</li></ul><p>核心原理：</p><ol><li>将子类所共享的方法提取出来，让子类的 <code>prototype 原型对象 = new 父类()</code></li><li>本质： 子类原型对象等于是实例化父类，因为父类实例化之后另外开辟空间，就不会影响原来父类原型对象</li><li>将子类的<code>constructor</code>重新指向子类的构造函数</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 借用父构造函数继承属性</span></span>
<span class="line"><span>        // 1. 父构造函数</span></span>
<span class="line"><span>        function Father(uname, age) {</span></span>
<span class="line"><span>            // this 指向父构造函数的对象实例</span></span>
<span class="line"><span>            this.uname = uname;</span></span>
<span class="line"><span>            this.age = age;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        Father.prototype.money = function() {</span></span>
<span class="line"><span>            console.log(100000);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        // 2 .子构造函数 </span></span>
<span class="line"><span>        function Son(uname, age, score) {</span></span>
<span class="line"><span>            // this 指向子构造函数的对象实例</span></span>
<span class="line"><span>            Father.call(this, uname, age);</span></span>
<span class="line"><span>            this.score = score;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // Son.prototype = Father.prototype;  这样直接赋值会有问题,如果修改了子原型对象,父原型对象也会跟着一起变化</span></span>
<span class="line"><span>        Son.prototype = new Father();</span></span>
<span class="line"><span>        // 如果利用对象的形式修改了原型对象,别忘了利用constructor 指回原来的构造函数</span></span>
<span class="line"><span>        Son.prototype.constructor = Son;</span></span>
<span class="line"><span>        // 这个是子构造函数专门的方法</span></span>
<span class="line"><span>        Son.prototype.exam = function() {</span></span>
<span class="line"><span>            console.log(&#39;孩子要考试&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        var son = new Son(&#39;刘德华&#39;, 18, 100);</span></span>
<span class="line"><span>        console.log(son);</span></span>
<span class="line"><span>        console.log(Father.prototype);</span></span>
<span class="line"><span>        console.log(Son.prototype.constructor);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_3-3-类的本质" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>3.3 类的本质 <a class="header-anchor" href="#_3-3-类的本质" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)3.3 类的本质&quot;">​</a></h3><ol><li>class 本质还是 function</li><li>类的所有方法都定义在类的 <code>prototype</code>属性上</li><li>类创建的实例，里面也有<code>_proto_</code>指向类的<code>prototype</code>原型对象</li><li>所以 ES6 的类它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。</li><li>所以 ES6 的类其实就是语法糖</li><li>语法糖：语法糖就是一种便捷写法，简单理解</li></ol><h2 id="es5新增方法" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>ES5新增方法 <a class="header-anchor" href="#es5新增方法" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)ES5新增方法&quot;">​</a></h2><p>ES5 给我们新增了一些方法，可以很方便的操作数组或者字符串</p><ul><li>数组方法</li><li>字符串方法</li><li>对象方法</li></ul><h3 id="_4-1、数组方法" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>4.1、数组方法 <a class="header-anchor" href="#_4-1、数组方法" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)4.1、数组方法&quot;">​</a></h3><ul><li>迭代(遍历)方法：foreach() ，map()，filter()，some() ，every() ;</li></ul><h4 id="_4-1-1、foreach" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>4.1.1、forEach() <a class="header-anchor" href="#_4-1-1、foreach" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)4.1.1、forEach()&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>array.forEach(function(currentValue,index,arr))</span></span></code></pre></div><ul><li>currentValue : 数组当前项的值</li><li>index: 数组当前项的索引</li><li>arr: 数组对象本身</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // forEach 迭代(遍历) 数组</span></span>
<span class="line"><span>        var arr = [1, 2, 3];</span></span>
<span class="line"><span>        var sum = 0;</span></span>
<span class="line"><span>        arr.forEach(function(value, index, array) {</span></span>
<span class="line"><span>            console.log(&#39;每个数组元素&#39; + value);</span></span>
<span class="line"><span>            console.log(&#39;每个数组元素的索引号&#39; + index);</span></span>
<span class="line"><span>            console.log(&#39;数组本身&#39; + array);</span></span>
<span class="line"><span>            sum += value;</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        console.log(sum);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h4 id="_4-1-2、filter-筛选数组" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>4.1.2、filter()筛选数组 <a class="header-anchor" href="#_4-1-2、filter-筛选数组" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)4.1.2、filter()筛选数组&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>array.filter(function(currentValue,index,arr))</span></span></code></pre></div><ul><li><code>filter()</code>方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素，主要用于筛选数组</li><li>注意它直接返回一个新数组</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // filter 筛选数组</span></span>
<span class="line"><span>        var arr = [12, 66, 4, 88, 3, 7];</span></span>
<span class="line"><span>        var newArr = arr.filter(function(value, index) {</span></span>
<span class="line"><span>            // return value &gt;= 20;</span></span>
<span class="line"><span>            return value % 2 === 0;</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        console.log(newArr);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h4 id="_4-1-3、some" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>4.1.3、some() <a class="header-anchor" href="#_4-1-3、some" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)4.1.3、some()&quot;">​</a></h4><ul><li><code>some()</code>方法用于检测数组中的元素是否满足指定条件（查找数组中是否有满足条件的元素）</li><li>注意它返回的是布尔值，如果查找到这个元素，就返回true，如果查找不到就返回false</li><li>如果找到第一个满足条件的元素，则终止循环，不再继续查找</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // some 查找数组中是否有满足条件的元素 </span></span>
<span class="line"><span>        var arr1 = [&#39;red&#39;, &#39;pink&#39;, &#39;blue&#39;];</span></span>
<span class="line"><span>        var flag1 = arr1.some(function(value) {</span></span>
<span class="line"><span>            return value == &#39;pink&#39;;</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        console.log(flag1);</span></span>
<span class="line"><span>        // 1. filter 也是查找满足条件的元素 返回的是一个数组 而且是把所有满足条件的元素返回回来</span></span>
<span class="line"><span>        // 2. some 也是查找满足条件的元素是否存在  返回的是一个布尔值 如果查找到第一个满足条件的元素就终止循环</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_4-2、字符串方法" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>4.2、字符串方法 <a class="header-anchor" href="#_4-2、字符串方法" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)4.2、字符串方法&quot;">​</a></h3><ul><li><code>trim()</code>方法会从一个字符串的两端删除空白字符</li><li><code>trim()</code>方法并不影响原字符串本身，它返回的是一个新的字符串</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;input type=&quot;text&quot;&gt; &lt;button&gt;点击&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // trim 方法去除字符串两侧空格</span></span>
<span class="line"><span>        var str = &#39;   an  dy   &#39;;</span></span>
<span class="line"><span>        console.log(str);</span></span>
<span class="line"><span>        var str1 = str.trim();</span></span>
<span class="line"><span>        console.log(str1);</span></span>
<span class="line"><span>        var input = document.querySelector(&#39;input&#39;);</span></span>
<span class="line"><span>        var btn = document.querySelector(&#39;button&#39;);</span></span>
<span class="line"><span>        var div = document.querySelector(&#39;div&#39;);</span></span>
<span class="line"><span>        btn.onclick = function() {</span></span>
<span class="line"><span>            var str = input.value.trim();</span></span>
<span class="line"><span>            if (str === &#39;&#39;) {</span></span>
<span class="line"><span>                alert(&#39;请输入内容&#39;);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                console.log(str);</span></span>
<span class="line"><span>                console.log(str.length);</span></span>
<span class="line"><span>                div.innerHTML = str;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_4-3、对象方法" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>4.3、对象方法 <a class="header-anchor" href="#_4-3、对象方法" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)4.3、对象方法&quot;">​</a></h3><h4 id="_4-3-1、object-keys" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>4.3.1、Object.keys() <a class="header-anchor" href="#_4-3-1、object-keys" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)4.3.1、Object.keys()&quot;">​</a></h4><ol><li><code>Object.keys()</code>用于获取对象自身所有的属性</li><li>效果类似<code>for...in</code></li><li>返回一个由属性名组成的数组</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 用于获取对象自身所有的属性</span></span>
<span class="line"><span>        var obj = {</span></span>
<span class="line"><span>            id: 1,</span></span>
<span class="line"><span>            pname: &#39;小米&#39;,</span></span>
<span class="line"><span>            price: 1999,</span></span>
<span class="line"><span>            num: 2000</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        var arr = Object.keys(obj);</span></span>
<span class="line"><span>        console.log(arr);</span></span>
<span class="line"><span>        arr.forEach(function(value) {</span></span>
<span class="line"><span>            console.log(value);</span></span>
<span class="line"><span>            // id</span></span>
<span class="line"><span>            // pname</span></span>
<span class="line"><span>            // price</span></span>
<span class="line"><span>            // num</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h4 id="_4-3-2、object-defineproperty" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>4.3.2、Object.defineProperty() <a class="header-anchor" href="#_4-3-2、object-defineproperty" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)4.3.2、Object.defineProperty()&quot;">​</a></h4><ul><li><code>Object.defineProperty()</code>定义对象中新属性或修改原有的属性(了解)</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Object.defineProperty(obj,prop,descriptor)</span></span></code></pre></div><ul><li>obj : 目标对象</li><li>prop : 需定义或修改的属性的名字</li><li>descriptor : 目标属性所拥有的特性</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // Object.defineProperty() 定义新属性或修改原有的属性</span></span>
<span class="line"><span>        var obj = {</span></span>
<span class="line"><span>            id: 1,</span></span>
<span class="line"><span>            pname: &#39;小米&#39;,</span></span>
<span class="line"><span>            price: 1999</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        // 1. 以前的对象添加和修改属性的方式</span></span>
<span class="line"><span>        // obj.num = 1000;</span></span>
<span class="line"><span>        // obj.price = 99;</span></span>
<span class="line"><span>        // console.log(obj);</span></span>
<span class="line"><span>        // 2. Object.defineProperty() 定义新属性或修改原有的属性</span></span>
<span class="line"><span>        Object.defineProperty(obj, &#39;num&#39;, {</span></span>
<span class="line"><span>            value: 1000,</span></span>
<span class="line"><span>            enumerable: true</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        console.log(obj);</span></span>
<span class="line"><span>        Object.defineProperty(obj, &#39;price&#39;, {</span></span>
<span class="line"><span>            value: 9.9</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        console.log(obj);</span></span>
<span class="line"><span>        Object.defineProperty(obj, &#39;id&#39;, {</span></span>
<span class="line"><span>            // 如果值为false 不允许修改这个属性值 默认值也是false</span></span>
<span class="line"><span>            writable: false,</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        obj.id = 2;</span></span>
<span class="line"><span>        console.log(obj);</span></span>
<span class="line"><span>        Object.defineProperty(obj, &#39;address&#39;, {</span></span>
<span class="line"><span>            value: &#39;中国山东蓝翔技校xx单元&#39;,</span></span>
<span class="line"><span>            // 如果只为false 不允许修改这个属性值 默认值也是false</span></span>
<span class="line"><span>            writable: false,</span></span>
<span class="line"><span>            // enumerable 如果值为false 则不允许遍历, 默认的值是 false</span></span>
<span class="line"><span>            enumerable: false,</span></span>
<span class="line"><span>            // configurable 如果为false 则不允许删除这个属性 不允许在修改第三个参数里面的特性 默认为false</span></span>
<span class="line"><span>            configurable: false</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        console.log(obj);</span></span>
<span class="line"><span>        console.log(Object.keys(obj));</span></span>
<span class="line"><span>        delete obj.address;</span></span>
<span class="line"><span>        console.log(obj);</span></span>
<span class="line"><span>        delete obj.pname;</span></span>
<span class="line"><span>        console.log(obj);</span></span>
<span class="line"><span>        Object.defineProperty(obj, &#39;address&#39;, {</span></span>
<span class="line"><span>            value: &#39;中国山东蓝翔技校xx单元&#39;,</span></span>
<span class="line"><span>            // 如果值为false 不允许修改这个属性值 默认值也是false</span></span>
<span class="line"><span>            writable: true,</span></span>
<span class="line"><span>            // enumerable 如果值为false 则不允许遍历, 默认的值是 false</span></span>
<span class="line"><span>            enumerable: true,</span></span>
<span class="line"><span>            // configurable 如果为false 则不允许删除这个属性 默认为false</span></span>
<span class="line"><span>            configurable: true</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        console.log(obj.address);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><ul><li>第三个参数 descriptor 说明：以对象形式{ }书写</li><li>value：设置属性的值，默认为undefined</li><li>writeable: 值是否可以重写 true | false 默认为false</li><li>enumerable: 目标属性是否可以被枚举 true | false 默认为false</li><li>configurable: 目标属性是否可以被删除或是否可以再次修改特性 true | false 默认为false</li></ul><h2 id="函数进阶" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>函数进阶 <a class="header-anchor" href="#函数进阶" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)函数进阶&quot;">​</a></h2><h3 id="_5-1、函数的定义方式" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>5.1、函数的定义方式 <a class="header-anchor" href="#_5-1、函数的定义方式" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)5.1、函数的定义方式&quot;">​</a></h3><ol><li>函数声明方式 function 关键字(命名函数)</li><li>函数表达式(匿名函数)</li><li>new Function()</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var fn = new Function(&#39;参数1&#39;,&#39;参数2&#39;,.....,&#39;函数体&#39;);</span></span></code></pre></div><ul><li><p>Function 里面参数都必须是字符串格式</p></li><li><p>第三种方式执行效率低，也不方便书写，因此较少使用</p></li><li><p>所有函数都是 Function 的实例(对象)</p></li><li><p>函数也属于对象</p></li></ul><p><img src="https://img-blog.csdnimg.cn/41f3e6248b384edba0cef92f7557b9b3.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        //  函数的定义方式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 1. 自定义函数(命名函数) </span></span>
<span class="line"><span></span></span>
<span class="line"><span>        function fn() {};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 2. 函数表达式 (匿名函数)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        var fun = function() {};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 3. 利用 new Function(&#39;参数1&#39;,&#39;参数2&#39;, &#39;函数体&#39;);</span></span>
<span class="line"><span>		//             Function 里面参数都必须是字符串格式，执行效率低，较少写</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        var f = new Function(&#39;a&#39;, &#39;b&#39;, &#39;console.log(a + b)&#39;);</span></span>
<span class="line"><span>        f(1, 2);</span></span>
<span class="line"><span>        // 4. 所有函数都是 Function 的实例(对象)</span></span>
<span class="line"><span>        console.dir(f);</span></span>
<span class="line"><span>        // 5. 函数也属于对象</span></span>
<span class="line"><span>        console.log(f instanceof Object);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_5-2、函数的调用方式" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>5.2、函数的调用方式 <a class="header-anchor" href="#_5-2、函数的调用方式" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)5.2、函数的调用方式&quot;">​</a></h3><ol><li>普通函数</li><li>对象的方法</li><li>构造函数</li><li>绑定事件函数</li><li>定时器函数</li><li>立即执行函数</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 函数的调用方式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 1. 普通函数</span></span>
<span class="line"><span>        function fn() {</span></span>
<span class="line"><span>            console.log(&#39;人生的巅峰&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // fn();   fn.call()</span></span>
<span class="line"><span>        // 2. 对象的方法</span></span>
<span class="line"><span>        var o = {</span></span>
<span class="line"><span>            sayHi: function() {</span></span>
<span class="line"><span>                console.log(&#39;人生的巅峰&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        o.sayHi();</span></span>
<span class="line"><span>        // 3. 构造函数</span></span>
<span class="line"><span>        function Star() {};</span></span>
<span class="line"><span>        new Star();</span></span>
<span class="line"><span>        // 4. 绑定事件函数</span></span>
<span class="line"><span>        // btn.onclick = function() {};   // 点击了按钮就可以调用这个函数</span></span>
<span class="line"><span>        // 5. 定时器函数</span></span>
<span class="line"><span>        // setInterval(function() {}, 1000);  这个函数是定时器自动1秒钟调用一次</span></span>
<span class="line"><span>        // 6. 立即执行函数</span></span>
<span class="line"><span>        (function() {</span></span>
<span class="line"><span>            console.log(&#39;人生的巅峰&#39;);</span></span>
<span class="line"><span>        })();</span></span>
<span class="line"><span>        // 立即执行函数是自动调用</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_5-3、函数内this的指向" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>5.3、函数内this的指向 <a class="header-anchor" href="#_5-3、函数内this的指向" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)5.3、函数内this的指向&quot;">​</a></h3><ul><li><code>this</code>指向，是当我们调用函数的时候确定的，调用方式的不同决定了<code>this</code>的指向不同，一般我们指向我们的调用者</li></ul><table><thead><tr><th style="text-align:center;">调用方式</th><th style="text-align:center;">this指向</th></tr></thead><tbody><tr><td style="text-align:center;">普通函数调用</td><td style="text-align:center;">window</td></tr><tr><td style="text-align:center;">构造函数调用</td><td style="text-align:center;">实例对象，原型对象里面的方法也指向实例对象</td></tr><tr><td style="text-align:center;">对象方法调用</td><td style="text-align:center;">该方法所属对象</td></tr><tr><td style="text-align:center;">事件绑定方法</td><td style="text-align:center;">绑定事件对象</td></tr><tr><td style="text-align:center;">定时器函数</td><td style="text-align:center;">window</td></tr><tr><td style="text-align:center;">立即执行函数</td><td style="text-align:center;">window</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;button&gt;点击&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 函数的不同调用方式决定了this 的指向不同</span></span>
<span class="line"><span>        // 1. 普通函数 this 指向window</span></span>
<span class="line"><span>        function fn() {</span></span>
<span class="line"><span>            console.log(&#39;普通函数的this&#39; + this);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        window.fn();</span></span>
<span class="line"><span>        // 2. 对象的方法 this指向的是对象 o</span></span>
<span class="line"><span>        var o = {</span></span>
<span class="line"><span>            sayHi: function() {</span></span>
<span class="line"><span>                console.log(&#39;对象方法的this:&#39; + this);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        o.sayHi();</span></span>
<span class="line"><span>        // 3. 构造函数 this 指向 ldh 这个实例对象 原型对象里面的this 指向的也是 ldh这个实例对象</span></span>
<span class="line"><span>        function Star() {};</span></span>
<span class="line"><span>        Star.prototype.sing = function() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        var ldh = new Star();</span></span>
<span class="line"><span>        // 4. 绑定事件函数 this 指向的是函数的调用者 btn这个按钮对象</span></span>
<span class="line"><span>        var btn = document.querySelector(&#39;button&#39;);</span></span>
<span class="line"><span>        btn.onclick = function() {</span></span>
<span class="line"><span>            console.log(&#39;绑定时间函数的this:&#39; + this);</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        // 5. 定时器函数 this 指向的也是window</span></span>
<span class="line"><span>        window.setTimeout(function() {</span></span>
<span class="line"><span>            console.log(&#39;定时器的this:&#39; + this);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }, 1000);</span></span>
<span class="line"><span>        // 6. 立即执行函数 this还是指向window</span></span>
<span class="line"><span>        (function() {</span></span>
<span class="line"><span>            console.log(&#39;立即执行函数的this&#39; + this);</span></span>
<span class="line"><span>        })();</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="_5-4、改变函数内部this指向" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>5.4、改变函数内部this指向 <a class="header-anchor" href="#_5-4、改变函数内部this指向" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)5.4、改变函数内部this指向&quot;">​</a></h3><ul><li>JavaScript 为我们专门提供了一些函数方法来帮我们处理函数内部 this 的指向问题，常用的有 <code>bind(),call(),apply()</code>三种方法</li></ul><h4 id="_5-4-1、call-方法" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>5.4.1、call() 方法 <a class="header-anchor" href="#_5-4-1、call-方法" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)5.4.1、call() 方法&quot;">​</a></h4><ul><li><code>call()</code>方法调用一个对象，简单理解为调用函数的方式，但是它可以改变函数的<code>this</code>指向</li><li><code>fun.call(thisArg,arg1,arg2,.....)</code></li><li><code>thisArg</code>: 在 fun 函数运行时指定的 this 值</li><li><code>arg1,arg2</code>: 传递的其他参数</li><li>返回值就是函数的返回值，因为它就是调用函数</li><li>因此当我们想改变 this 指向，同时想调用这个函数的时候，可以使用 call，比如继承</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 改变函数内this指向  js提供了三种方法  call()  apply()  bind()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 1. call()</span></span>
<span class="line"><span>        var o = {</span></span>
<span class="line"><span>            name: &#39;andy&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        function fn(a, b) {</span></span>
<span class="line"><span>            console.log(this);</span></span>
<span class="line"><span>            console.log(a + b);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        fn.call(o, 1, 2);</span></span>
<span class="line"><span>        // call 第一个可以调用函数 第二个可以改变函数内的this 指向</span></span>
<span class="line"><span>        // call 的主要作用可以实现继承</span></span>
<span class="line"><span>        function Father(uname, age, sex) {</span></span>
<span class="line"><span>            this.uname = uname;</span></span>
<span class="line"><span>            this.age = age;</span></span>
<span class="line"><span>            this.sex = sex;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        function Son(uname, age, sex) {</span></span>
<span class="line"><span>            Father.call(this, uname, age, sex);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        var son = new Son(&#39;刘德华&#39;, 18, &#39;男&#39;);</span></span>
<span class="line"><span>        console.log(son);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h4 id="_5-4-2、apply-方法" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>5.4.2、apply()方法 <a class="header-anchor" href="#_5-4-2、apply-方法" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)5.4.2、apply()方法&quot;">​</a></h4><ul><li><code>apply()</code>方法调用一个函数，简单理解为调用函数的方式，但是它可以改变函数的 <code>this</code>指向</li><li><code>fun.apply(thisArg,[argsArray])</code></li><li>thisArg: 在 fun 函数运行时指定的 this 值</li><li>argsArray : 传递的值，必须包含在数组里面</li><li>返回值就是函数的返回值，因为它就是调用函数</li><li>因此 apply 主要跟数组有关系，比如使用 Math.max() 求数组的最大值</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 改变函数内this指向  js提供了三种方法  call()  apply()  bind()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 2. apply()  应用 运用的意思</span></span>
<span class="line"><span>        var o = {</span></span>
<span class="line"><span>            name: &#39;andy&#39;</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        function fn(arr) {</span></span>
<span class="line"><span>            console.log(this);</span></span>
<span class="line"><span>            console.log(arr); // &#39;pink&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        fn.apply(o, [&#39;pink&#39;]);</span></span>
<span class="line"><span>        // 1. 也是调用函数 第二个可以改变函数内部的this指向</span></span>
<span class="line"><span>        // 2. 但是他的参数必须是数组(伪数组)</span></span>
<span class="line"><span>        // 3. apply 的主要应用 比如说我们可以利用 apply 借助于数学内置对象求数组最大值 </span></span>
<span class="line"><span>        // Math.max();</span></span>
<span class="line"><span>        var arr = [1, 66, 3, 99, 4];</span></span>
<span class="line"><span>        var arr1 = [&#39;red&#39;, &#39;pink&#39;];</span></span>
<span class="line"><span>        // var max = Math.max.apply(null, arr);</span></span>
<span class="line"><span>        var max = Math.max.apply(Math, arr);</span></span>
<span class="line"><span>        var min = Math.min.apply(Math, arr);</span></span>
<span class="line"><span>        console.log(max, min);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h4 id="_5-4-3、bind-方法" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>5.4.3、bind()方法 <a class="header-anchor" href="#_5-4-3、bind-方法" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)5.4.3、bind()方法&quot;">​</a></h4><ul><li><code>bind()</code>方法不会调用函数。但是能改变函数内部 <code>this</code>指向</li><li><code>fun.bind(thisArg,arg1,arg2,....)</code></li><li>返回由指定的 <code>this</code>值和初始化参数改造的 原函数拷贝</li><li>因此当我们只是想改变 this 指向，并且不想调用这个函数的时候，可以使用bind</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;button&gt;点击&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;button&gt;点击&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;button&gt;点击&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 改变函数内this指向  js提供了三种方法  call()  apply()  bind()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 3. bind()  绑定 捆绑的意思</span></span>
<span class="line"><span>        var o = {</span></span>
<span class="line"><span>            name: &#39;andy&#39;</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        function fn(a, b) {</span></span>
<span class="line"><span>            console.log(this);</span></span>
<span class="line"><span>            console.log(a + b);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        var f = fn.bind(o, 1, 2);</span></span>
<span class="line"><span>        f();</span></span>
<span class="line"><span>        // 1. 不会调用原来的函数   可以改变原来函数内部的this 指向</span></span>
<span class="line"><span>        // 2. 返回的是原函数改变this之后产生的新函数</span></span>
<span class="line"><span>        // 3. 如果有的函数我们不需要立即调用,但是又想改变这个函数内部的this指向此时用bind</span></span>
<span class="line"><span>        // 4. 我们有一个按钮,当我们点击了之后,就禁用这个按钮,3秒钟之后开启这个按钮</span></span>
<span class="line"><span>        // var btn1 = document.querySelector(&#39;button&#39;);</span></span>
<span class="line"><span>        // btn1.onclick = function() {</span></span>
<span class="line"><span>        //     this.disabled = true; // 这个this 指向的是 btn 这个按钮</span></span>
<span class="line"><span>        //     // var that = this;</span></span>
<span class="line"><span>        //     setTimeout(function() {</span></span>
<span class="line"><span>        //         // that.disabled = false; // 定时器函数里面的this 指向的是window</span></span>
<span class="line"><span>        //         this.disabled = false; // 此时定时器函数里面的this 指向的是btn</span></span>
<span class="line"><span>        //     }.bind(this), 3000); // 这个this 指向的是btn 这个对象</span></span>
<span class="line"><span>        // }</span></span>
<span class="line"><span>        var btns = document.querySelectorAll(&#39;button&#39;);</span></span>
<span class="line"><span>        for (var i = 0; i &lt; btns.length; i++) {</span></span>
<span class="line"><span>            btns[i].onclick = function() {</span></span>
<span class="line"><span>                this.disabled = true;</span></span>
<span class="line"><span>                setTimeout(function() {</span></span>
<span class="line"><span>                    this.disabled = false;</span></span>
<span class="line"><span>                }.bind(this), 2000);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h4 id="_5-4-4、总结" tabindex="-1"><a href="https://blog.csdn.net/Augenstern_QXL/article/details/115219073" target="_blank" rel="noreferrer"></a>5.4.4、总结 <a class="header-anchor" href="#_5-4-4、总结" aria-label="Permalink to &quot;[](https://blog.csdn.net/Augenstern_QXL/article/details/115219073)5.4.4、总结&quot;">​</a></h4><p>call apply bind 总结：</p><p>相同点：</p><ul><li>都可以改变函数内部的 <code>this</code>指向</li></ul><p>区别点：</p><ul><li><code>call</code>和<code>apply</code>会调用函数，并且改变函数内部的<code>this</code>指向</li><li><code>call</code>和<code>apply</code>传递的参数不一样，call 传递参数，apply 必须数组形式</li><li><code>bind</code>不会调用函数，可以改变函数内部<code>this</code>指向</li></ul><p>主要应用场景</p><ol><li><code>call</code>经常做继承</li><li><code>apply</code>经常跟数组有关系，比如借助于数学对线实现数组最大值与最小值</li><li><code>bind</code>不调用函数，但是还想改变this指向，比如改变定时器内部的this指向</li></ol><p>原文：<a href="https://blog.csdn.net/Augenstern_QXL/article/details/115344398" target="_blank" rel="noreferrer">https://blog.csdn.net/Augenstern_QXL/article/details/115344398</a></p>`,1306),t=[l];function i(r,c,o,d,h,g){return a(),n("div",null,t)}const v=s(p,[["render",i]]);export{b as __pageData,v as default};
