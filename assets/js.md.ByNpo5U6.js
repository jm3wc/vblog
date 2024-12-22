import{_ as a,c as p,o as e,a2 as n,m as s}from"./chunks/framework.CSGcjqEA.js";const q=JSON.parse('{"title":"Javascript基础","description":"","frontmatter":{},"headers":[],"relativePath":"js.md","filePath":"js.md"}'),l={name:"js.md"},t=n(`<h1 id="javascript基础" tabindex="-1">Javascript基础 <a class="header-anchor" href="#javascript基础" aria-label="Permalink to &quot;Javascript基础&quot;">​</a></h1><blockquote><p>Javascipt是一种动态、弱类型、基于原型的脚本语言，由web浏览器进行解释和执行</p></blockquote><h2 id="javascript的组成" tabindex="-1">Javascript的组成 <a class="header-anchor" href="#javascript的组成" aria-label="Permalink to &quot;Javascript的组成&quot;">​</a></h2><ol><li>ECMAScript : 核心 (描述了javascript组成语言的语法和基本对象)</li><li>DOM : 文档对象模型 (描述处理网页内容的方法和接口)</li><li>BOM : 浏览器对象模型 (描述与浏览器进行交互的方法和接口)</li></ol><hr><h2 id="javascript应用到网页的几种方式" tabindex="-1">Javascript应用到网页的几种方式 <a class="header-anchor" href="#javascript应用到网页的几种方式" aria-label="Permalink to &quot;Javascript应用到网页的几种方式&quot;">​</a></h2><blockquote><p>方法一：将javascript代码插入html文档</p><p>部分的标签中<code>&lt;script&gt;</code></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;script type=“text/javascript”&gt;</span></span>
<span class="line"><span>      //javascript 代码</span></span>
<span class="line"><span>      alert(‘hello world’);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span></code></pre></div><blockquote><p>方法二：将javascript代码存放在一个独立的文件。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>test.js</span></span>
<span class="line"><span>alert(‘hello wordld’);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>test.html</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>  &lt;script type=“text/javascript”src=“test.js”&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span></code></pre></div><hr><h2 id="js注释" tabindex="-1">JS注释 <a class="header-anchor" href="#js注释" aria-label="Permalink to &quot;JS注释&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//          单行注释     </span></span>
<span class="line"><span>/* …*/      多行注释</span></span></code></pre></div><h2 id="js定义变量" tabindex="-1">JS定义变量 <a class="header-anchor" href="#js定义变量" aria-label="Permalink to &quot;JS定义变量&quot;">​</a></h2><blockquote><p>变量由 var 运算符加变量名定义</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var age = 25;     </span></span>
<span class="line"><span>var mood = ‘happy’;</span></span></code></pre></div><h2 id="js拼接" tabindex="-1">JS拼接 <a class="header-anchor" href="#js拼接" aria-label="Permalink to &quot;JS拼接&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>当+存在于变量与字符串中间位置的时候就代表是拼接或者连接的作用    </span></span>
<span class="line"><span>+= 代表什么意思 var a = 1;  a += 3; a = a+3;  给当前这个变量增加多少</span></span></code></pre></div><hr><h2 id="js变量的命名有哪些规则" tabindex="-1">JS变量的命名有哪些规则 <a class="header-anchor" href="#js变量的命名有哪些规则" aria-label="Permalink to &quot;JS变量的命名有哪些规则&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1. 第一个字符必须是字母、下划线(_)、或美元符号 ($); </span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 变量名中不能包含空格或标点符号（$ 除外);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 变量名区分大小写;       </span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 不能使用保留字、关键字  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 为了让变量名有更好的可读性，可以在变量名中适当的插入下划线分隔，       </span></span>
<span class="line"><span>如：var my_mood = ‘happy’; </span></span>
<span class="line"><span></span></span>
<span class="line"><span>5.使用驼峰命名法(大驼峰,小驼峰)或者匈牙利命名法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[1]小驼峰式命名法（lower camel case）：</span></span>
<span class="line"><span>第一个单字以小写字母开始；第二个单字的首字母大写，</span></span>
<span class="line"><span>例如：firstName、lastName。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[2]大驼峰式命名法（upper camel case）：</span></span>
<span class="line"><span>每一个单字的首字母都采用大写字母，</span></span>
<span class="line"><span>例如：FirstName、LastName、CamelCase。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[3]匈牙利命名法:</span></span>
<span class="line"><span>变量名＝数据类型+对象描述</span></span>
<span class="line"><span>数据类型：指点是JavaScript中六种数据类型之一,undefined、null、boolean、number、string和Object</span></span>
<span class="line"><span>对象描述：指对象名字全称或名字的一部分，而且要有明确含义，易记而且还要好理解</span></span>
<span class="line"><span>案例：</span></span>
<span class="line"><span>var aPerson = []; // Array数组</span></span>
<span class="line"><span>var oBtn = document.getElementById(&#39;btn&#39;); //Object对象</span></span>
<span class="line"><span>var fnName = function () {}; // function函数</span></span>
<span class="line"><span>var sName = &quot;alanScott&quot;; // string字符串</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>6.JavaScript变量名中代表数据类型都有对应的字线，如下所示：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>s: 表示字符串String</span></span>
<span class="line"><span>i: 表示整型Int(它是Number中的整数类型)</span></span>
<span class="line"><span>fl: 表示浮点Float(它是Number中的小数类型)</span></span>
<span class="line"><span>b: 表示布尔Boolean</span></span>
<span class="line"><span>a: 表示数组Array</span></span>
<span class="line"><span>o: 表示对象Object</span></span>
<span class="line"><span>fn: 表示函数Function</span></span>
<span class="line"><span>re: 表示正则Regular Expression</span></span></code></pre></div><h2 id="js关键字保留字汇总" tabindex="-1">JS关键字保留字汇总 <a class="header-anchor" href="#js关键字保留字汇总" aria-label="Permalink to &quot;JS关键字保留字汇总&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>关键字大全：</span></span>
<span class="line"><span>    break    do  instanceof  typeof</span></span>
<span class="line"><span>    case     else    new     var</span></span>
<span class="line"><span>    catch    finally     return  void</span></span>
<span class="line"><span>    continue     for     switch  while</span></span>
<span class="line"><span>    debugger    function    this    with</span></span>
<span class="line"><span>    default  if  throw   delete</span></span>
<span class="line"><span>    in   try</span></span>
<span class="line"><span></span></span>
<span class="line"><span>保留字大全：</span></span>
<span class="line"><span>    abstract     enum    int     short</span></span>
<span class="line"><span>    boolean  export  interface   static</span></span>
<span class="line"><span>    byte     extends     long    super</span></span>
<span class="line"><span>    char     final   native  synchronized</span></span>
<span class="line"><span>    class    float   package     throws</span></span>
<span class="line"><span>    const    goto    private     transient</span></span>
<span class="line"><span>    debugger     implements  protected   volatile</span></span>
<span class="line"><span>    double   import  public</span></span></code></pre></div><hr><h2 id="js常见的数据类型" tabindex="-1">JS常见的数据类型 <a class="header-anchor" href="#js常见的数据类型" aria-label="Permalink to &quot;JS常见的数据类型&quot;">​</a></h2><ol><li>字符串(String)</li><li>数值 (Number)</li><li>布尔类型 (Boolean)</li><li>数组(Array)</li><li>对象(Object)</li><li>undefined</li><li>NULL</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1.字符串(String)</span></span>
<span class="line"><span>  字符串由零个或多个字符构成，字符包括字母，数字，标点符号和空格;</span></span>
<span class="line"><span>  字符串必须放在引号里（单引号或双引号）;</span></span>
<span class="line"><span>  var mood = “happy”;</span></span>
<span class="line"><span>  var mood = ‘happy’;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.数值(Number)</span></span>
<span class="line"><span>  var age = 25;</span></span>
<span class="line"><span>  var price = 33.25; </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.布尔类型 (Boolean)</span></span>
<span class="line"><span>  布尔型数据只能有两种种值 true 和 false;</span></span>
<span class="line"><span>  var married = true;</span></span>
<span class="line"><span>  var married = false;</span></span>
<span class="line"><span>  与字符串不同，不要把布尔值用引号括起来。</span></span>
<span class="line"><span>  布尔值 false 与 字符串 &quot;false&quot;是两回事。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>4.数组(Array)</span></span>
<span class="line"><span>  我们的变量一般都只能存储一个内容 所以它其实是一个单一的容器</span></span>
<span class="line"><span>  我们的数组一般可以存一个或者是多个值 ，所以数组是一个大的容器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  组成部分:</span></span>
<span class="line"><span>    数组其实是由多个 (键-值) 所组成的一个多容器</span></span>
<span class="line"><span>    数组的索引 默认是从0开始的</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  定义数组</span></span>
<span class="line"><span>    var arr = new Array(23,23,45,56,435);</span></span>
<span class="line"><span>    var arr2 = [23,34,546];</span></span>
<span class="line"><span>    var arr3 = new Array();</span></span>
<span class="line"><span>    arr3[0] = 234;</span></span>
<span class="line"><span>    arr3[1] = 234;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>5.对象(Object)</span></span>
<span class="line"><span>  对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。</span></span>
<span class="line"><span>  属性由逗号分隔.</span></span>
<span class="line"><span>  var person={firstname:&quot;Bill&quot;, lastname:&quot;Gates&quot;, id:5566};</span></span>
<span class="line"><span>  上面例子中的对象 (person) 有三个属性：firstname、lastname 以及 id</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>6.Undefined </span></span>
<span class="line"><span>  在 JavaScript 中, undefined 是一个没有设置值的变量。</span></span>
<span class="line"><span>  typeof 一个没有值的变量会返回 undefined。</span></span>
<span class="line"><span>  var person = undefined;    </span></span>
<span class="line"><span>  你可以设置为 undefined 来清空对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>7.NULL</span></span>
<span class="line"><span>  在 JavaScript 中 null 表示 &quot;什么都没有&quot;。</span></span>
<span class="line"><span>  null是一个只有一个值的特殊类型。表示一个空对象引用。</span></span>
<span class="line"><span>  var person = null;        </span></span>
<span class="line"><span>  你可以设置为 null 来清空对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Undefined 和 Null 的区别</span></span>
<span class="line"><span>  typeof undefined             // undefined</span></span>
<span class="line"><span>  typeof null                  // object</span></span>
<span class="line"><span>  null === undefined           // false</span></span>
<span class="line"><span>  null == undefined            // true</span></span></code></pre></div><hr><h2 id="js查看数据类型" tabindex="-1">JS查看数据类型 <a class="header-anchor" href="#js查看数据类型" aria-label="Permalink to &quot;JS查看数据类型&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var mood = &quot;happy&quot;;</span></span>
<span class="line"><span>alert(typeof mood);</span></span>
<span class="line"><span>alert(typeof 95);</span></span></code></pre></div><h2 id="转换成字符串" tabindex="-1">转换成字符串 <a class="header-anchor" href="#转换成字符串" aria-label="Permalink to &quot;转换成字符串&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var married = false;</span></span>
<span class="line"><span>alert(married.toString());  // outputs &quot;false&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var age = 25;</span></span>
<span class="line"><span>alert(age.toString());  //outputs &quot;25&quot;</span></span></code></pre></div><h2 id="转换成数字" tabindex="-1">转换成数字 <a class="header-anchor" href="#转换成数字" aria-label="Permalink to &quot;转换成数字&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">函数</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">parseInt()</td><td style="text-align:center;">转换成整数</td></tr><tr><td style="text-align:center;">parseFloat()</td><td style="text-align:center;">转换成浮点数</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var test = parseInt(&quot;blue&quot;);    //returns NaN</span></span>
<span class="line"><span>var test = parseInt(&quot;1234blue&quot;);    //returns 1234</span></span>
<span class="line"><span>var test = parseInt(&quot;22.5&quot;);    //returns 22</span></span>
<span class="line"><span>var test = parseInt(&quot;asd23434&quot;);  //returns NaN</span></span>
<span class="line"><span>var test = parseFloat(&quot;1234blue&quot;);  //returns 1234</span></span>
<span class="line"><span>var test = parseFloat(&quot;22.5&quot;);    //returns 22.5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var a = &quot;23&quot;;</span></span>
<span class="line"><span>var b = 1;</span></span>
<span class="line"><span>alert(a+b); //231 这个例子说明 如果不是同种类型的话 那么+代表的是拼接的意思</span></span>
<span class="line"><span>alert(a-b); //22这个例子说明除了+这种特殊的运算方式以外即使是不同类型那么也能够进行运算</span></span></code></pre></div><h2 id="运算符" tabindex="-1">运算符 <a class="header-anchor" href="#运算符" aria-label="Permalink to &quot;运算符&quot;">​</a></h2><blockquote><p>算术运算符 + - * / %</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var total = (1 + 4) * 5;</span></span>
<span class="line"><span>var i = 100;</span></span>
<span class="line"><span>var temp = (i – 20) / 2;</span></span>
<span class="line"><span>alert(“10”+ 20)   //return 1020;</span></span>
<span class="line"><span>alert(10 + 20)    //return 30;</span></span></code></pre></div><h2 id="赋值运算符" tabindex="-1">赋值运算符 <a class="header-anchor" href="#赋值运算符" aria-label="Permalink to &quot;赋值运算符&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var x = 10;</span></span>
<span class="line"><span>var y =5;</span></span>
<span class="line"><span>x+=y;      //x=x+y</span></span>
<span class="line"><span>x-=y;        //x=x-y</span></span>
<span class="line"><span>x*=y;        //x=x*y</span></span>
<span class="line"><span>x/=y;        //x=x/y</span></span>
<span class="line"><span>x%=y;        //x=x%y</span></span>
<span class="line"><span>console.log(x);</span></span></code></pre></div><h2 id="后增量-后减量运算符-先赋值-在自增" tabindex="-1">后增量/后减量运算符 ++/-- 先赋值 在自增 <a class="header-anchor" href="#后增量-后减量运算符-先赋值-在自增" aria-label="Permalink to &quot;后增量/后减量运算符 ++/-- 先赋值 在自增&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var i = 10;</span></span>
<span class="line"><span>var a = i++;    // i = i + 1;</span></span>
<span class="line"><span>alert(a);</span></span></code></pre></div><h2 id="前增量-前减量运算符-先自增-在赋值" tabindex="-1">前增量/前减量运算符 ++/-- 先自增 在赋值 <a class="header-anchor" href="#前增量-前减量运算符-先自增-在赋值" aria-label="Permalink to &quot;前增量/前减量运算符 ++/-- 先自增 在赋值&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var i = 10;</span></span>
<span class="line"><span>var a = ++i;    // i = i + 1;</span></span>
<span class="line"><span>alert(a);</span></span></code></pre></div><h2 id="比较运算符" tabindex="-1">比较运算符 (&gt;, &lt;, &gt;=, &lt;=, ==, !=) <a class="header-anchor" href="#比较运算符" aria-label="Permalink to &quot;比较运算符 (&gt;, &lt;, &gt;=, &lt;=, ==, !=)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>alert ( 10 &gt; 5 );       //outputs  true</span></span>
<span class="line"><span>var i = 100;</span></span>
<span class="line"><span>var n = 100;</span></span>
<span class="line"><span>alert(i == n);          //outputs true;</span></span>
<span class="line"><span>alert(i != n);          //outputs false;</span></span>
<span class="line"><span>alert(i === n)         //数据类型，值相等</span></span></code></pre></div><h2 id="逻辑运算符" tabindex="-1">逻辑运算符 <a class="header-anchor" href="#逻辑运算符" aria-label="Permalink to &quot;逻辑运算符&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&amp;&amp; ：逻辑与     </span></span>
<span class="line"><span>|| : 逻辑或     </span></span>
<span class="line"><span>！ ：逻辑非  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>var i = 8;</span></span>
<span class="line"><span>alert ( i&lt;5 &amp;&amp; i&lt;10);           //outputs false</span></span>
<span class="line"><span>alert ( i &gt; 100 || i &lt; 10);     //outputs true</span></span>
<span class="line"><span>alert(!(10 &gt; 5));             //outputs false</span></span></code></pre></div><h2 id="逻辑短路" tabindex="-1">逻辑短路 <a class="header-anchor" href="#逻辑短路" aria-label="Permalink to &quot;逻辑短路&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>逻辑与短路</span></span>
<span class="line"><span>var a = 5 &amp;&amp; 6;</span></span>
<span class="line"><span>console.log(a); //返回的结果为 6</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var a = false &amp;&amp; 6;</span></span>
<span class="line"><span>console.log(a); //返回的结果为 false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>逻辑或短路</span></span>
<span class="line"><span>var a = false || 6;</span></span>
<span class="line"><span>console.log(a); //返回的结果为 6</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var a = true || 6;</span></span>
<span class="line"><span>console.log(a); //返回的结果为 true</span></span></code></pre></div><h2 id="三元运算符" tabindex="-1">三元运算符 <a class="header-anchor" href="#三元运算符" aria-label="Permalink to &quot;三元运算符&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>如名字表示的三元运算符需要三个操作数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法是 条件 ? 结果1 : 结果2;</span></span>
<span class="line"><span>这里你把条件写在问号(?)的前面后面跟着用冒号(:)分隔的结果1和结果2。满足条件时结果1否则结果2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var a = 5;</span></span>
<span class="line"><span>var b = 3;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var res = a&gt;b?&quot;真&quot;:&quot;假&quot;;</span></span>
<span class="line"><span>console.log(res);</span></span></code></pre></div><hr><h2 id="程序流程控制" tabindex="-1">程序流程控制 <a class="header-anchor" href="#程序流程控制" aria-label="Permalink to &quot;程序流程控制&quot;">​</a></h2><p>1.条件语句</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>if(10 &gt; 5) {</span></span>
<span class="line"><span>  alert(“hello world”);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var i = 90;</span></span>
<span class="line"><span>if(i &gt; 100){</span></span>
<span class="line"><span> alert(i + “大于100”);</span></span>
<span class="line"><span>}else if(i &gt; 80) {</span></span>
<span class="line"><span> alert(i + “大于80”);</span></span>
<span class="line"><span>}else{</span></span>
<span class="line"><span> alert(i + “小于100”);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>2.Switch 语句</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Switch 语句相当于条件判断的变种方式 或者是另外的一种形式</span></span>
<span class="line"><span>var i = 25;</span></span>
<span class="line"><span>switch(i){</span></span>
<span class="line"><span>  case 25:</span></span>
<span class="line"><span>  case 100:</span></span>
<span class="line"><span>      alert(100);</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>  default:</span></span>
<span class="line"><span>        alert(‘other’);</span></span>
<span class="line"><span> }</span></span></code></pre></div><h2 id="循环语句" tabindex="-1">循环语句 <a class="header-anchor" href="#循环语句" aria-label="Permalink to &quot;循环语句&quot;">​</a></h2><h4 id="while" tabindex="-1">while <a class="header-anchor" href="#while" aria-label="Permalink to &quot;while&quot;">​</a></h4>`,60),i=s("blockquote",{需执行的代码:""},[s("p",null,"while(条件)")],-1),c=n(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var i = 1;</span></span>
<span class="line"><span>while(i &lt; 3){</span></span>
<span class="line"><span>  alert(i);</span></span>
<span class="line"><span>  i++;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="do-while" tabindex="-1">Do…while <a class="header-anchor" href="#do-while" aria-label="Permalink to &quot;Do…while&quot;">​</a></h4><blockquote><p>do { 需执行的代码 } while (变量&lt;=结束值)</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var i = 1;</span></span>
<span class="line"><span>do {</span></span>
<span class="line"><span>  alert(i);</span></span>
<span class="line"><span>  i++;</span></span>
<span class="line"><span>}while(i &lt; 3);</span></span></code></pre></div><h4 id="for-循环语句" tabindex="-1">for 循环语句 <a class="header-anchor" href="#for-循环语句" aria-label="Permalink to &quot;for 循环语句&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>for(var count = 1; count &lt; 11; count++){</span></span>
<span class="line"><span>  alert(count);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="foreach-循环语句" tabindex="-1">forEach 循环语句 <a class="header-anchor" href="#foreach-循环语句" aria-label="Permalink to &quot;forEach 循环语句&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var arryAll = [];  </span></span>
<span class="line"><span>arryAll.push(1);  </span></span>
<span class="line"><span>arryAll.push(2);  </span></span>
<span class="line"><span>arryAll.push(3);  </span></span>
<span class="line"><span>arryAll.push(4);  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>//匿名方式</span></span>
<span class="line"><span>arryAll.forEach(function(e){  </span></span>
<span class="line"><span>    console.log(e);  </span></span>
<span class="line"><span>})  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>function t1(arg){</span></span>
<span class="line"><span>    console.log(arg);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//非匿名方式</span></span>
<span class="line"><span>arryAll.forEach(t1);</span></span></code></pre></div><h4 id="for-in-循环语句" tabindex="-1">for...in 循环语句 <a class="header-anchor" href="#for-in-循环语句" aria-label="Permalink to &quot;for...in 循环语句&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>for...in 语句用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var x</span></span>
<span class="line"><span>var mycars = new Array()</span></span>
<span class="line"><span>mycars[0] = &quot;Saab&quot;</span></span>
<span class="line"><span>mycars[1] = &quot;Volvo&quot;</span></span>
<span class="line"><span>mycars[2] = &quot;BMW&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (x in mycars)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    document.write(mycars[x] + &quot;&lt;br /&gt;&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="for-of-循环语句" tabindex="-1">for...of 循环语句 <a class="header-anchor" href="#for-of-循环语句" aria-label="Permalink to &quot;for...of 循环语句&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var arr = [&#39;小明&#39;,&#39;张三&#39;,&#39;小红&#39;,&#39;小兰&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for(var item of arr)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    console.log(item)</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h2 id="break和continue有什么区别" tabindex="-1">break和continue有什么区别？ <a class="header-anchor" href="#break和continue有什么区别" aria-label="Permalink to &quot;break和continue有什么区别？&quot;">​</a></h2><ol><li>break 语句可以立即退出循环;</li><li>continue 语句只是退出当前循环;</li></ol><h4 id="break语句" tabindex="-1">break语句 <a class="header-anchor" href="#break语句" aria-label="Permalink to &quot;break语句&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var n = 0;</span></span>
<span class="line"><span>for(var i=1; i &lt; 10; i++){</span></span>
<span class="line"><span>  if( i &gt; 5){</span></span>
<span class="line"><span>     break;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  n++;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>alert(n);</span></span></code></pre></div><h4 id="continue语句" tabindex="-1">continue语句 <a class="header-anchor" href="#continue语句" aria-label="Permalink to &quot;continue语句&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var n = 0;</span></span>
<span class="line"><span>for(var i = 1; i &lt; 10; i++){</span></span>
<span class="line"><span>  if(i == 4){</span></span>
<span class="line"><span>      continue;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  n++;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>alert(n);</span></span></code></pre></div><h1 id="javascript函数" tabindex="-1">Javascript函数 <a class="header-anchor" href="#javascript函数" aria-label="Permalink to &quot;Javascript函数&quot;">​</a></h1><h2 id="什么是函数" tabindex="-1">什么是函数？ <a class="header-anchor" href="#什么是函数" aria-label="Permalink to &quot;什么是函数？&quot;">​</a></h2><blockquote><p>函数就是完成某个功能的一组语句，函数由关键字 <code>function</code> 函数名加一组参数定义</p><p>函数在定义后可以被重复调用，通常将常用的功能写成一个函数</p><p>利用函数可以使代码的组织结构更多清晰</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function say_hello (name, msg){</span></span>
<span class="line"><span>      alert(&quot;hello&quot;+ name + &quot;:&quot;+ msg);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>say_hello(“david”, “how are you today?”);</span></span></code></pre></div><h2 id="如何定义一个函数" tabindex="-1">如何定义一个函数？ <a class="header-anchor" href="#如何定义一个函数" aria-label="Permalink to &quot;如何定义一个函数？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义函数的方法有很多种：</span></span>
<span class="line"><span>1、函数声明</span></span>
<span class="line"><span>function sum1(n1,n2)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    console.log(n1+n2);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>sum1(1,2);  //3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、函数表达式（存储在变量中）</span></span>
<span class="line"><span>var sum2 = function(n1,n2)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    console.log(n1+n2);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sum2(1,2);    //3</span></span></code></pre></div><h2 id="函数重构" tabindex="-1">函数重构 <a class="header-anchor" href="#函数重构" aria-label="Permalink to &quot;函数重构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function demo()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    console.log(&#39;js函数&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>demo();        </span></span>
<span class="line"><span></span></span>
<span class="line"><span>function demo()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    console.log(&#39;覆盖的js函数&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>demo();</span></span></code></pre></div><h2 id="使用-return-语句从函数返回值" tabindex="-1">使用 return 语句从函数返回值 <a class="header-anchor" href="#使用-return-语句从函数返回值" aria-label="Permalink to &quot;使用 return 语句从函数返回值&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function sum (num1, num2){</span></span>
<span class="line"><span>   return num1 + num2;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var s = sum(1, 2);</span></span>
<span class="line"><span>alert(s);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：</span></span>
<span class="line"><span>位于return 语句之后的任何代码都永远不会执行！</span></span>
<span class="line"><span>在JavaScript中，不一定要指定返回值！</span></span></code></pre></div><h2 id="函数参数设置默认值" tabindex="-1">函数参数设置默认值 <a class="header-anchor" href="#函数参数设置默认值" aria-label="Permalink to &quot;函数参数设置默认值&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function sum (a=1, b=2)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  return a + b;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(sum());</span></span>
<span class="line"><span>console.log(sum(10));</span></span>
<span class="line"><span>console.log(sum(10,20));</span></span></code></pre></div><h2 id="函数参数总数获取" tabindex="-1">函数参数总数获取 <a class="header-anchor" href="#函数参数总数获取" aria-label="Permalink to &quot;函数参数总数获取&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function demo(a,b,c,d)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    return 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(demo.length);</span></span></code></pre></div><h2 id="什么是全局变量-什么是局部变量" tabindex="-1">什么是全局变量？什么是局部变量？ <a class="header-anchor" href="#什么是全局变量-什么是局部变量" aria-label="Permalink to &quot;什么是全局变量？什么是局部变量？&quot;">​</a></h2><ol><li>变量既可以是全局，也可以是局部的</li><li>全局变量：可以在脚本中的任何位置被引用，一旦你在某个脚本里声明了全局变量,你就可以在这个脚本的任何位置（包括函数内部）引用它,全局变量的作用域是整个脚本;</li><li>局部变量：只存在于对它做出声明的函数内部,在函数的外部无法相用它,局部变量的作用域仅限于函数内部</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var global = &quot;global&quot;;//全局变量</span></span>
<span class="line"><span>function test()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>　　var local=&quot;local&quot;; //局部变量</span></span>
<span class="line"><span>　　global2=&quot;global2&quot;; //全局变量</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在函数外用var声明的变量一般就是全局变量</span></span>
<span class="line"><span>定义在函数当中，但是没有用var声明的是全局变量</span></span>
<span class="line"><span>定义在函数当中，用var声明的是局部变量</span></span></code></pre></div><h2 id="递归函数" tabindex="-1">递归函数 <a class="header-anchor" href="#递归函数" aria-label="Permalink to &quot;递归函数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>递归函数：在函数里面调用自己 从而实现循环的效果</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function test(num)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  if(num == 0 || num == 1){</span></span>
<span class="line"><span>        return 1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return num*test(num-1);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>document.write(&quot;5的阶乘为:&quot;+test(5));</span></span></code></pre></div><h2 id="回调函数" tabindex="-1">回调函数 <a class="header-anchor" href="#回调函数" aria-label="Permalink to &quot;回调函数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>在js当中我们可能会常常见到一种函数叫做回调函数，回调函数一般在执行完一些操作后所调用的函数.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function A(callback) {</span></span>
<span class="line"><span>    callback(&#39;stuff&#39;, &#39;goes&#39;, &#39;here&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function B(a, b, c) {</span></span>
<span class="line"><span>    console.log(a + &quot; &quot; + b + &quot; &quot; + c);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>A(B);   //B就是我们的回调函数</span></span></code></pre></div><h2 id="闭包函数" tabindex="-1">闭包函数 <a class="header-anchor" href="#闭包函数" aria-label="Permalink to &quot;闭包函数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>闭包就是一个函数能够访问其函数外部作用域中的变量。</span></span>
<span class="line"><span>简单来说闭包就是定义在函数体内部的函数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>闭包的三大特点为：</span></span>
<span class="line"><span>    1、函数嵌套函数</span></span>
<span class="line"><span>    2、内部函数可以访问外部函数的变量</span></span>
<span class="line"><span>    3、参数和变量不会被回收。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>代码结构：</span></span>
<span class="line"><span>function test() </span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    var a = 1;</span></span>
<span class="line"><span>    return function () </span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        console.log(a);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var demo = test();</span></span>
<span class="line"><span>demo();</span></span></code></pre></div><h2 id="立即调用的函数表达式" tabindex="-1">立即调用的函数表达式 <a class="header-anchor" href="#立即调用的函数表达式" aria-label="Permalink to &quot;立即调用的函数表达式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>(function(){ /* code */ })();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这种写法都是以圆括号开头，引擎就会认为后面跟的是一个表示式，而不是函数定义。</span></span>
<span class="line"><span>所以就避免了错误，这就叫做“立即调用的函数表达式”</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var i = function(){ return 10; }();</span></span>
<span class="line"><span>console.log(i)</span></span></code></pre></div><h2 id="eval" tabindex="-1">eval <a class="header-anchor" href="#eval" aria-label="Permalink to &quot;eval&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>eval 接受一个字符串类型的参数，将这个字符串作为代码在上下文环境中执行，并返回执行的结果</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var i = 1;</span></span>
<span class="line"><span>eval(&quot;i = i + 1&quot;);</span></span>
<span class="line"><span>eval(&quot;alert(i);&quot;);</span></span></code></pre></div><h1 id="dom模型用法" tabindex="-1">DOM模型用法 <a class="header-anchor" href="#dom模型用法" aria-label="Permalink to &quot;DOM模型用法&quot;">​</a></h1><h3 id="模型概述" tabindex="-1">模型概述 <a class="header-anchor" href="#模型概述" aria-label="Permalink to &quot;模型概述&quot;">​</a></h3><blockquote><p>DOM (document object model) 文档对象模型</p></blockquote><h3 id="dom节点" tabindex="-1">DOM节点 <a class="header-anchor" href="#dom节点" aria-label="Permalink to &quot;DOM节点&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1.元素节点     与HTML标签挂钩</span></span>
<span class="line"><span>2.文本节点     与HTML标签内容挂钩</span></span>
<span class="line"><span>3.属性节点     与HTML标签的属性挂钩 同时也包含css属性</span></span></code></pre></div><p><img src="http://web.wdwangke.com/mdphoto/base/js/dom2.png" alt="dom"></p><h3 id="查找节点" tabindex="-1">查找节点 <a class="header-anchor" href="#查找节点" aria-label="Permalink to &quot;查找节点&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//通过id获取元素</span></span>
<span class="line"><span>console.log(document.getElementById(&quot;demo&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//通过name属性获取元素</span></span>
<span class="line"><span>console.log(document.getElementsByName(&quot;demo&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//通过class属性获取元素</span></span>
<span class="line"><span>console.log(document.getElementsByClassName(&quot;demo&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//通过标签名称获取元素</span></span>
<span class="line"><span>console.log(document.getElementsByTagName(&quot;input&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//通过css选择符获取元素获取单个</span></span>
<span class="line"><span>console.log(document.querySelector(&quot;.demo&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//通过css选择符获取元素获取全部</span></span>
<span class="line"><span>console.log(document.querySelectorAll(&quot;.demo&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//只能在 HTML 输出流中使用 document.write，在文档已加载后使用它（比如在函数中），会覆盖整个文档</span></span>
<span class="line"><span>document.write(&#39;hello world&#39;);</span></span></code></pre></div><h3 id="文本内容操作" tabindex="-1">文本内容操作 <a class="header-anchor" href="#文本内容操作" aria-label="Permalink to &quot;文本内容操作&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span></span>
<span class="line"><span>  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;demo2&quot;&gt;hello world &lt;i&gt;斜体&lt;/i&gt;&lt;u&gt;下划线&lt;/u&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  var demo2 = document.getElementById(&quot;demo2&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //innerHTML 可以获取该元素的内容包括html标签</span></span>
<span class="line"><span>  console.log(demo2.innerHTML);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //innerText 可以获取该元素的内容不包括html标签</span></span>
<span class="line"><span>  console.log(demo2.innerText);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //返回内容的长度</span></span>
<span class="line"><span>  console.log(demo2.innerHTML.length);</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="样式操作" tabindex="-1">样式操作 <a class="header-anchor" href="#样式操作" aria-label="Permalink to &quot;样式操作&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>        #demo1, .demo2{</span></span>
<span class="line"><span>            width: 300px;</span></span>
<span class="line"><span>            height: 200px;</span></span>
<span class="line"><span>            border: 1px solid #cccc;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .blue{</span></span>
<span class="line"><span>            color: violet;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .fb{</span></span>
<span class="line"><span>            background-color: yellowgreen;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .blueblue {</span></span>
<span class="line"><span>            color: darkgoldenrod;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;demo1&quot;&gt;我是第一行的内容&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;demo2&quot;&gt;我是第二行的内容&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    (function() {</span></span>
<span class="line"><span>        var element = document.getElementById(&#39;demo1&#39;)</span></span>
<span class="line"><span>        // 一、直接设置style的属性</span></span>
<span class="line"><span>        element.style.height = &#39;100px&#39;;</span></span>
<span class="line"><span>        element.style[&#39;text-align&#39;] = &#39;center&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 二、改变class</span></span>
<span class="line"><span>        element.className = &#39;blue&#39;;</span></span>
<span class="line"><span>        element.className += &#39;blue fb&#39;;</span></span>
<span class="line"><span>    })();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="属性操作" tabindex="-1">属性操作 <a class="header-anchor" href="#属性操作" aria-label="Permalink to &quot;属性操作&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span></span>
<span class="line"><span>  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;demo&quot; data-name=&quot;demo&quot;&gt;测试DIV&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    var demo = document.getElementById(&quot;demo&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // attributes 获取元素的所有属性</span></span>
<span class="line"><span>    console.log(demo.attributes);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //setAttribute 设置属性</span></span>
<span class="line"><span>    demo.setAttribute(&quot;class&quot;,&quot;demo&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //getAttribute 获取属性</span></span>
<span class="line"><span>    console.log(demo.getAttribute(&quot;class&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //hasAttribute 返回一个布尔值，表示当前元素节点是否包含指定属性。</span></span>
<span class="line"><span>    console.log(demo.hasAttribute(&quot;class&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //removeAttribute 用于从当前元素节点移除属性。</span></span>
<span class="line"><span>    demo.removeAttribute(&quot;class&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //dataset 属性 用户获取 html5指定的 data-* 属性</span></span>
<span class="line"><span>    console.log(demo.dataset);</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="盒模型相关属性" tabindex="-1">盒模型相关属性 <a class="header-anchor" href="#盒模型相关属性" aria-label="Permalink to &quot;盒模型相关属性&quot;">​</a></h3><p><img src="http://web.wdwangke.com/mdphoto/base/js/box.png" alt="dom"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span></span>
<span class="line"><span>  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;demo&quot; class=&quot;demo&quot;&gt;测试DIV&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;demo2&quot; class=&quot;demo&quot;&gt;测试DIV-2&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;demo3&quot; class=&quot;demo&quot;&gt;测试DIV-3&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;demo4&quot; class=&quot;demo&quot;&gt;测试DIV-4&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  // 返回元素节点可见部分的高度</span></span>
<span class="line"><span>  console.log(demo.clientHeight);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 返回元素节点可见部分的宽度</span></span>
<span class="line"><span>  console.log(demo.clientWidth);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 等于元素节点左边框（left border）的宽度</span></span>
<span class="line"><span>  console.log(demo.clientLeft);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 等于网页元素顶部边框的宽度</span></span>
<span class="line"><span>  console.log(demo.clientTop);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 返回某个网页元素的总高度</span></span>
<span class="line"><span>  console.log(document.documentElement.scrollHeight);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 返回总宽度</span></span>
<span class="line"><span>  console.log(document.documentElement.scrollWidth);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 表示网页元素的水平滚动条向右侧滚动的像素数量</span></span>
<span class="line"><span>  document.body.onscroll = function () {</span></span>
<span class="line"><span>        console.log(document.documentElement.scrollLeft)</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 表示网页元素的垂直滚动条向下滚动的像素数量。对于那些没有滚动条的网页元素，这两个属性总是等于0。</span></span>
<span class="line"><span>   document.body.onscroll = function () {</span></span>
<span class="line"><span>        console.log(document.documentElement.scrollTop)</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="javascript事件" tabindex="-1">Javascript事件 <a class="header-anchor" href="#javascript事件" aria-label="Permalink to &quot;Javascript事件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>JavaScript和HTML之间的交互是通过用户和浏览器操作页面时引发的事件来处理的</span></span>
<span class="line"><span>页面载入完成时，会触发一个事件。用户点击按钮时，点击也是一个事件。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>绑定事件的两种方式！</span></span>
<span class="line"><span></span></span>
<span class="line"><span>直接绑定</span></span>
<span class="line"><span>  &lt;img src=&quot;01.jpg&quot; onclick=&quot;alert(&#39;触发事件&#39;);&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>间接绑定</span></span>
<span class="line"><span>  document.getElementById(&#39;demo&#39;).onclick = function()</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      alert(&#39;触发事件&#39;)</span></span>
<span class="line"><span>  }</span></span></code></pre></div><h3 id="事件类型" tabindex="-1">事件类型 <a class="header-anchor" href="#事件类型" aria-label="Permalink to &quot;事件类型&quot;">​</a></h3><blockquote><p>鼠标事件</p></blockquote><table><thead><tr><th style="text-align:center;">事件名</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">click</td><td style="text-align:center;">当鼠标点击时触发</td></tr><tr><td style="text-align:center;">dblclick</td><td style="text-align:center;">当鼠标双击时触发</td></tr><tr><td style="text-align:center;">mouseover</td><td style="text-align:center;">当鼠标指针移动到元素上时触发</td></tr><tr><td style="text-align:center;">mouseout</td><td style="text-align:center;">当鼠标指针移出元素时触发</td></tr><tr><td style="text-align:center;">mouseenter</td><td style="text-align:center;">当鼠标指针移动到元素上时触发（不支持冒泡）</td></tr><tr><td style="text-align:center;">mouseleave</td><td style="text-align:center;">当鼠标指针移出元素上时触发（不支持冒泡）</td></tr><tr><td style="text-align:center;">mousemove</td><td style="text-align:center;">当鼠标指针移动到元素上时触发</td></tr><tr><td style="text-align:center;">mousedown</td><td style="text-align:center;">当元素上按下鼠标按钮时触发</td></tr><tr><td style="text-align:center;">mouseup</td><td style="text-align:center;">当在元素上释放鼠标按钮时触发</td></tr><tr><td style="text-align:center;">mousewheel</td><td style="text-align:center;">当鼠标滚轮正在被滚动时运行的脚本</td></tr><tr><td style="text-align:center;">scroll</td><td style="text-align:center;">当元素滚动条被滚动时运行的脚本</td></tr></tbody></table><blockquote><p>键盘事件</p></blockquote><table><thead><tr><th style="text-align:center;">事件名</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">keydown</td><td style="text-align:center;">某个键盘按键被按下</td></tr><tr><td style="text-align:center;">keypress</td><td style="text-align:center;">某个键盘按键被按下并松开</td></tr><tr><td style="text-align:center;">keyup</td><td style="text-align:center;">某个键盘按键被松开</td></tr></tbody></table><blockquote><p>表单事件</p></blockquote><table><thead><tr><th style="text-align:center;">事件名</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">blur</td><td style="text-align:center;">元素失去焦点时运行的脚本</td></tr><tr><td style="text-align:center;">focus</td><td style="text-align:center;">元素获取焦点时触发</td></tr><tr><td style="text-align:center;">focusout</td><td style="text-align:center;">元素即将失去焦点时触发</td></tr><tr><td style="text-align:center;">change</td><td style="text-align:center;">在元素值被改变时运行的脚本</td></tr><tr><td style="text-align:center;">input</td><td style="text-align:center;">代替<code>keyup</code>、<code>keydown</code> 再输入的时候就会触发</td></tr><tr><td style="text-align:center;">reset</td><td style="text-align:center;">表单重置时触发</td></tr><tr><td style="text-align:center;">submit</td><td style="text-align:center;">表单提交时触发</td></tr><tr><td style="text-align:center;">select</td><td style="text-align:center;">用户选取文本时触发 ( <code>&lt;input&gt;</code> 和 <code>&lt;textarea&gt;</code>)</td></tr></tbody></table><blockquote><p>剪贴板事件</p></blockquote><table><thead><tr><th style="text-align:center;">事件名</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">copy</td><td style="text-align:center;">该事件在用户拷贝元素内容时触发</td></tr><tr><td style="text-align:center;">cut</td><td style="text-align:center;">该事件在用户剪切元素内容时触发</td></tr><tr><td style="text-align:center;">paste</td><td style="text-align:center;">该事件在用户粘贴元素内容时触发</td></tr></tbody></table><blockquote><p>触摸事件</p></blockquote><table><thead><tr><th style="text-align:center;">事件名</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td style="text-align:center;">touchstart</td><td style="text-align:center;">手指按到屏幕上</td></tr><tr><td style="text-align:center;">touchmove</td><td style="text-align:center;">手指在屏幕上滑动</td></tr><tr><td style="text-align:center;">touchend</td><td style="text-align:center;">手指离开屏幕</td></tr><tr><td style="text-align:center;">touchcancle</td><td style="text-align:center;">特殊情况下关闭/退出时触发</td></tr></tbody></table><blockquote><p>拖动事件</p></blockquote><table><thead><tr><th style="text-align:center;">事件名</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td style="text-align:center;">drag</td><td style="text-align:center;">该事件在元素正在拖动时触发</td></tr><tr><td style="text-align:center;">dragend</td><td style="text-align:center;">该事件在用户完成元素的拖动时触发</td></tr><tr><td style="text-align:center;">dragenter</td><td style="text-align:center;">该事件在拖动的元素进入放置目标时触发</td></tr><tr><td style="text-align:center;">dragleave</td><td style="text-align:center;">该事件在拖动元素离开放置目标时触发</td></tr><tr><td style="text-align:center;">dragover</td><td style="text-align:center;">该事件在拖动元素在放置目标上时触发</td></tr><tr><td style="text-align:center;">dragstart</td><td style="text-align:center;">该事件在用户开始拖动元素时触发</td></tr><tr><td style="text-align:center;">drop</td><td style="text-align:center;">该事件在拖动元素放置在目标区域时触发</td></tr></tbody></table><h3 id="事件监听" tabindex="-1">事件监听 <a class="header-anchor" href="#事件监听" aria-label="Permalink to &quot;事件监听&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;input type=&quot;button&quot; value=&quot;test1&quot; id=&quot;btn1&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  var btn1 = document.getElementById(&quot;btn1&quot;);</span></span>
<span class="line"><span>  var count = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  var handle1 = function () {</span></span>
<span class="line"><span>    alert(count++);</span></span>
<span class="line"><span>    if (count == 3) </span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      alert(&quot;事件结束&quot;)</span></span>
<span class="line"><span>      btn1.removeEventListener(&quot;click&quot;, handle1, false);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  btn1.addEventListener(&#39;click&#39;, handle1, false);</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="事件冒泡、捕获、代理" tabindex="-1">事件冒泡、捕获、代理 <a class="header-anchor" href="#事件冒泡、捕获、代理" aria-label="Permalink to &quot;事件冒泡、捕获、代理&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>事件捕获：父级元素先触发，子集元素后触发</span></span>
<span class="line"><span>事件冒泡：子集元素先触发，父级元素后触发</span></span></code></pre></div><blockquote><p>事件冒泡</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;html lang=&quot;zh-cn&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>  &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;</span></span>
<span class="line"><span>  &lt;title&gt;js事件机制&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;style&gt;</span></span>
<span class="line"><span>    #parent{</span></span>
<span class="line"><span>            width: 200px;</span></span>
<span class="line"><span>            height:200px;</span></span>
<span class="line"><span>            text-align: center;</span></span>
<span class="line"><span>            line-height: 3;</span></span>
<span class="line"><span>            background: green;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        #child{</span></span>
<span class="line"><span>            width: 100px;</span></span>
<span class="line"><span>            height: 100px;</span></span>
<span class="line"><span>            margin: 0 auto;</span></span>
<span class="line"><span>            background: orange;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;parent&quot;&gt;</span></span>
<span class="line"><span>    父元素</span></span>
<span class="line"><span>    &lt;div id=&quot;child&quot;&gt;</span></span>
<span class="line"><span>      子元素</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>    var parent = document.getElementById(&quot;parent&quot;);</span></span>
<span class="line"><span>    var child = document.getElementById(&quot;child&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    document.body.addEventListener(&quot;click&quot;, function (e) {</span></span>
<span class="line"><span>      console.log(&quot;click-body&quot;);</span></span>
<span class="line"><span>    }, false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    parent.addEventListener(&quot;click&quot;, function (e) {</span></span>
<span class="line"><span>      console.log(&quot;click-parent&quot;);</span></span>
<span class="line"><span>    }, false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    child.addEventListener(&quot;click&quot;, function (e) {</span></span>
<span class="line"><span>      console.log(&quot;click-child&quot;);</span></span>
<span class="line"><span>    }, false);</span></span>
<span class="line"><span>  &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><blockquote><p>事件捕获</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;html lang=&quot;zh-cn&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>  &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;</span></span>
<span class="line"><span>  &lt;title&gt;js事件机制&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;style&gt;</span></span>
<span class="line"><span>    #parent{</span></span>
<span class="line"><span>            width: 200px;</span></span>
<span class="line"><span>            height:200px;</span></span>
<span class="line"><span>            text-align: center;</span></span>
<span class="line"><span>            line-height: 3;</span></span>
<span class="line"><span>            background: green;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        #child{</span></span>
<span class="line"><span>            width: 100px;</span></span>
<span class="line"><span>            height: 100px;</span></span>
<span class="line"><span>            margin: 0 auto;</span></span>
<span class="line"><span>            background: orange;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;parent&quot;&gt;</span></span>
<span class="line"><span>    父元素</span></span>
<span class="line"><span>    &lt;div id=&quot;child&quot;&gt;</span></span>
<span class="line"><span>      子元素</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>    var parent = document.getElementById(&quot;parent&quot;);</span></span>
<span class="line"><span>    var child = document.getElementById(&quot;child&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    document.body.addEventListener(&quot;click&quot;, function (e) {</span></span>
<span class="line"><span>      console.log(&quot;click-body&quot;);</span></span>
<span class="line"><span>    }, false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    parent.addEventListener(&quot;click&quot;, function (e) {</span></span>
<span class="line"><span>      console.log(&quot;click-parent---事件传播&quot;);</span></span>
<span class="line"><span>    }, false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //新增事件捕获事件代码</span></span>
<span class="line"><span>    parent.addEventListener(&quot;click&quot;, function (e) {</span></span>
<span class="line"><span>      console.log(&quot;click-parent--事件捕获&quot;);</span></span>
<span class="line"><span>    }, true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    child.addEventListener(&quot;click&quot;, function (e) {</span></span>
<span class="line"><span>      console.log(&quot;click-child&quot;);</span></span>
<span class="line"><span>    }, false);</span></span>
<span class="line"><span>  &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h3 id="事件的代理-委托原理" tabindex="-1">事件的代理/委托原理 <a class="header-anchor" href="#事件的代理-委托原理" aria-label="Permalink to &quot;事件的代理/委托原理&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>事件委托是指将事件绑定目标元素的到父元素上，利用冒泡机制触发该事件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>优点：</span></span>
<span class="line"><span>    可以减少事件注册，节省大量内存占用</span></span>
<span class="line"><span>    可以将事件应用于动态添加的子元素上</span></span>
<span class="line"><span></span></span>
<span class="line"><span>缺点：</span></span>
<span class="line"><span>    使用不当会造成事件在不应该触发时触发</span></span>
<span class="line"><span>&lt;html lang=&quot;zh-cn&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>  &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;</span></span>
<span class="line"><span>  &lt;title&gt;js事件机制&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;style&gt;</span></span>
<span class="line"><span>    #parent{</span></span>
<span class="line"><span>            width: 200px;</span></span>
<span class="line"><span>            height:200px;</span></span>
<span class="line"><span>            text-align: center;</span></span>
<span class="line"><span>            line-height: 3;</span></span>
<span class="line"><span>            background: green;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        #child{</span></span>
<span class="line"><span>            width: 100px;</span></span>
<span class="line"><span>            height: 100px;</span></span>
<span class="line"><span>            margin: 0 auto;</span></span>
<span class="line"><span>            background: orange;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;parent&quot;&gt;</span></span>
<span class="line"><span>    父元素</span></span>
<span class="line"><span>    &lt;div id=&quot;child&quot;&gt;</span></span>
<span class="line"><span>      子元素</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>    var parent = document.getElementById(&quot;parent&quot;);</span></span>
<span class="line"><span>    var child = document.getElementById(&quot;child&quot;);</span></span>
<span class="line"><span>    parent.onclick = function (e) {</span></span>
<span class="line"><span>      if (e.target.id == &quot;child&quot;) {</span></span>
<span class="line"><span>        console.log(&quot;您点击了child元素&quot;)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h3 id="阻止事件冒泡、事件捕获" tabindex="-1">阻止事件冒泡、事件捕获 <a class="header-anchor" href="#阻止事件冒泡、事件捕获" aria-label="Permalink to &quot;阻止事件冒泡、事件捕获&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot; onclick=&quot;alert(&#39;html&#39;)&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span></span>
<span class="line"><span>  &lt;script src=&quot;https://cdn.bootcss.com/jquery/1.12.2/jquery.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body onclick=&quot;alert(&#39;body&#39;)&quot;&gt;</span></span>
<span class="line"><span>  &lt;!--html--&gt;</span></span>
<span class="line"><span>  &lt;div style=&quot;width:400px; height:400px; background:red&quot; onclick=&quot;alert(this.style.background)&quot;&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;div2&quot; style=&quot;width:300px; height:300px; background:palevioletred&quot;&gt;</span></span>
<span class="line"><span>      &lt;div style=&quot;width:200px; height:200px; background:yellow&quot; onclick=&quot;alert(this.style.background)&quot;&gt;</span></span>
<span class="line"><span>        &lt;div id=&quot;div1&quot; style=&quot;width:100px; height:100px; background:palegreen&quot;&gt;</span></span>
<span class="line"><span>          &lt;a id=&quot;aaa&quot; href=&quot;http://www.baidu.com&quot;&gt;aaa&lt;/a&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;script&gt;</span></span>
<span class="line"><span>    //此jquery既阻止默认行为又停止冒泡</span></span>
<span class="line"><span>    // $(&quot;#div1&quot;).on(&#39;click&#39;,function(){</span></span>
<span class="line"><span>    //     return false;</span></span>
<span class="line"><span>    // });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    window.onload = function () {</span></span>
<span class="line"><span>      var oDiv1 = document.getElementById(&#39;div1&#39;);</span></span>
<span class="line"><span>      var oDiv2 = document.getElementById(&#39;div2&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      oDiv1.onclick = function (ev) {</span></span>
<span class="line"><span>        var oEvent = ev || event;</span></span>
<span class="line"><span>        alert(&quot;this is div1&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //js阻止事件冒泡</span></span>
<span class="line"><span>        oEvent.cancelBubble = true;</span></span>
<span class="line"><span>        oEvent.stopPropagation();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //js阻止链接默认行为，没有停止冒泡</span></span>
<span class="line"><span>        oEvent.preventDefault(); </span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      oDiv2.onclick = function (ev) {</span></span>
<span class="line"><span>        var oEvent = ev || event;</span></span>
<span class="line"><span>        alert(&quot;this is div2&quot;);</span></span>
<span class="line"><span>        oEvent.cancelBubble = true;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h1 id="bom" tabindex="-1">BOM <a class="header-anchor" href="#bom" aria-label="Permalink to &quot;BOM&quot;">​</a></h1><blockquote><p>BOM : Browser Object Model 浏览器对象模型</p></blockquote><h3 id="window对象" tabindex="-1">Window对象 <a class="header-anchor" href="#window对象" aria-label="Permalink to &quot;Window对象&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>alert(&quot;系统提示框&quot;);</span></span>
<span class="line"><span>confirm(&quot;确认对话框&quot;);</span></span>
<span class="line"><span>prompt(&quot;输入对话框&quot;);</span></span></code></pre></div><h3 id="location对象" tabindex="-1">Location对象 <a class="header-anchor" href="#location对象" aria-label="Permalink to &quot;Location对象&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Location 对象包含有关当前 URL 的信息</span></span>
<span class="line"><span>Location 对象是 window 对象的一部分，可通过 window.Location 属性对其进行访问</span></span>
<span class="line"><span></span></span>
<span class="line"><span>document.write(location.href) // 返回完整的URL</span></span>
<span class="line"><span>location.reload() // 重新载入当前文档</span></span></code></pre></div><h3 id="history对象" tabindex="-1">History对象 <a class="header-anchor" href="#history对象" aria-label="Permalink to &quot;History对象&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>history对象是window对象的子对象，对应于浏览器的历史记录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.history.go(-1);</span></span>
<span class="line"><span>window.history.go(1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>history.back();</span></span>
<span class="line"><span>history.forward();</span></span></code></pre></div><h3 id="定时器" tabindex="-1">定时器 <a class="header-anchor" href="#定时器" aria-label="Permalink to &quot;定时器&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>window.setInterval();   设置循环定时器</span></span>
<span class="line"><span>      var T = window.setInterval(test,1000);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.clearInterval();  清除循环定时器</span></span>
<span class="line"><span>      window.clearInterval(T);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.setTimeout();    设置单次定时器</span></span>
<span class="line"><span>      var T = setTimeout(test,1000);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.clearTimeout()    清除单次定时器</span></span>
<span class="line"><span>      clearTimeout();</span></span></code></pre></div><h3 id="本地存储" tabindex="-1">本地存储 <a class="header-anchor" href="#本地存储" aria-label="Permalink to &quot;本地存储&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// localStorage 永久存储</span></span>
<span class="line"><span>//设置缓存</span></span>
<span class="line"><span>localStorage.setItem(&#39;username&#39;, &#39;张三&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//获取</span></span>
<span class="line"><span>console.log(localStorage.getItem(&#39;username&#39;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//删除指定key</span></span>
<span class="line"><span>localStorage.removeItem(&#39;username&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//清空</span></span>
<span class="line"><span>localStorage.clear()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// sessionStorage 关闭浏览器就没有了</span></span>
<span class="line"><span>sessionStorage.setItem(&#39;username&#39;, &#39;李四&#39;)</span></span>
<span class="line"><span>console.log(sessionStorage.getItem(&#39;username&#39;))</span></span>
<span class="line"><span>sessionStorage.removeItem(&#39;username&#39;)</span></span>
<span class="line"><span>sessionStorage.clear()</span></span></code></pre></div><h3 id="cookie缓存对象" tabindex="-1">Cookie缓存对象 <a class="header-anchor" href="#cookie缓存对象" aria-label="Permalink to &quot;Cookie缓存对象&quot;">​</a></h3><blockquote><p>Cookie 是服务器保存在浏览器的一小段文本信息，每个 Cookie 的大小一般不能超过4KB。浏览器每次向服务器发出请求，就会自动附上这段信息</p></blockquote><ul><li>Cookie 保存以下几方面的信息 <ul><li>Cookie的名字</li><li>Cookie的值</li><li>到期时间</li><li>所属域名（默认是当前域名）</li><li>生效的路径（默认是当前网址</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//设置cookie</span></span>
<span class="line"><span>document.cookie = &#39;username=张三&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取cookie</span></span>
<span class="line"><span>console.log(document.cookie)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//删除cookie</span></span>
<span class="line"><span>document.cookie = &#39;username=; max-age=0&#39;;</span></span></code></pre></div><h3 id="cookie封装" tabindex="-1">Cookie封装 <a class="header-anchor" href="#cookie封装" aria-label="Permalink to &quot;Cookie封装&quot;">​</a></h3><blockquote><p>cookie.html</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>    &lt;head&gt;</span></span>
<span class="line"><span>        &lt;meta charset=&quot;utf-8&quot;&gt;</span></span>
<span class="line"><span>        &lt;title&gt;cookie example&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;/head&gt;</span></span>
<span class="line"><span>    &lt;body&gt;</span></span>
<span class="line"><span>        &lt;script type=&quot;text/javascript&quot; src=&quot;cookie.js&quot; &gt;&lt;/script&gt;</span></span>
<span class="line"><span>        &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>            console.log(&#39;----------cookie对象-------------&#39;);</span></span>
<span class="line"><span>            console.log(cookie);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            console.log(&#39;----------对象-------------&#39;);</span></span>
<span class="line"><span>            console.log(cookie.getCookies());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            console.log(&#39;----------设置cookie-------------&#39;);</span></span>
<span class="line"><span>            console.log(cookie.set(&#39;name&#39;, &#39;wlh&#39;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            console.log(&#39;----------设置cookie 123-------------&#39;);</span></span>
<span class="line"><span>            console.log(cookie.set(&#39;name&#39;, &#39;wlh123&#39;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            console.log(&#39;----------设置cookie age-------------&#39;);</span></span>
<span class="line"><span>            console.log(cookie.set(&#39;age&#39;, 20));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            console.log(&#39;----------获取cookie-------------&#39;);</span></span>
<span class="line"><span>            console.log(cookie.get(&#39;name&#39;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            console.log(&#39;----------获取所有-------------&#39;);</span></span>
<span class="line"><span>            console.log(cookie.getCookies());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            console.log(&#39;----------清除age-------------&#39;);</span></span>
<span class="line"><span>            console.log(cookie.remove(&#39;age&#39;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            console.log(&#39;----------获取所有-------------&#39;);</span></span>
<span class="line"><span>            console.log(cookie.getCookies());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            console.log(&#39;----------清除所有-------------&#39;);</span></span>
<span class="line"><span>            console.log(cookie.clear());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            console.log(&#39;----------获取所有-------------&#39;);</span></span>
<span class="line"><span>            console.log(cookie.getCookies());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            console.log(&#39;----------解决冲突-------------&#39;);</span></span>
<span class="line"><span>            var $Cookie = cookie.noConflict(true /*a new name of cookie*/);</span></span>
<span class="line"><span>            console.log($Cookie);</span></span>
<span class="line"><span>            console.log(&#39;----------使用新的命名-------------&#39;);</span></span>
<span class="line"><span>            console.log($Cookie.getCookies());</span></span>
<span class="line"><span>        &lt;/script&gt;</span></span>
<span class="line"><span>    &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><blockquote><p>cookie.js</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span> * HTTP Cookie:存储会话信息</span></span>
<span class="line"><span> * 名称和值传送时必须是经过RUL编码的</span></span>
<span class="line"><span> * cookie绑定在指定的域名下，非本域无法共享cookie，但是可以是在主站共享cookie给子站</span></span>
<span class="line"><span> * cookie有一些限制：比如IE6 &amp; IE6- 限定在20个；IE7 50个；Opear 30个...所以一般会根据【必须】需求才设定cookie</span></span>
<span class="line"><span> * cookie的名称不分大小写；同时建议将cookie URL编码；路径是区分cookie在不同情况下传递的好方式；带安全标志cookie</span></span>
<span class="line"><span> *     在SSL情况下发送到服务器端，http则不会。建议针对cookie设置expires、domain、 path；每个cookie小于4KB</span></span>
<span class="line"><span> * */</span></span>
<span class="line"><span>//对cookie的封装，采取getter、setter方式</span></span>
<span class="line"><span>(function(global){</span></span>
<span class="line"><span>    //获取cookie对象，以对象表示</span></span>
<span class="line"><span>    function getCookiesObj(){</span></span>
<span class="line"><span>        var cookies = {};</span></span>
<span class="line"><span>        if(document.cookie){</span></span>
<span class="line"><span>            var objs = document.cookie.split(&#39;; &#39;);</span></span>
<span class="line"><span>            for(var i in objs){</span></span>
<span class="line"><span>                var index = objs[i].indexOf(&#39;=&#39;),</span></span>
<span class="line"><span>                    name = objs[i].substr(0, index),</span></span>
<span class="line"><span>                    value = objs[i].substr(index + 1, objs[i].length);    </span></span>
<span class="line"><span>                cookies[name] = value;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return cookies;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //设置cookie</span></span>
<span class="line"><span>    function set(name, value, opts){</span></span>
<span class="line"><span>        //opts maxAge, path, domain, secure</span></span>
<span class="line"><span>        if(name &amp;&amp; value){</span></span>
<span class="line"><span>            var cookie = encodeURIComponent(name) + &#39;=&#39; + encodeURIComponent(value);</span></span>
<span class="line"><span>            //可选参数</span></span>
<span class="line"><span>            if(opts){</span></span>
<span class="line"><span>                if(opts.maxAge){</span></span>
<span class="line"><span>                    cookie += &#39;; max-age=&#39; + opts.maxAge; </span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                if(opts.path){</span></span>
<span class="line"><span>                    cookie += &#39;; path=&#39; + opts.path;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                if(opts.domain){</span></span>
<span class="line"><span>                    cookie += &#39;; domain=&#39; + opts.domain;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                if(opts.secure){</span></span>
<span class="line"><span>                    cookie += &#39;; secure&#39;;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            document.cookie = cookie;</span></span>
<span class="line"><span>            return cookie;</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>            return &#39;&#39;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //获取cookie</span></span>
<span class="line"><span>    function get(name){</span></span>
<span class="line"><span>        return decodeURIComponent(getCookiesObj()[name]) || null;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //清除某个cookie</span></span>
<span class="line"><span>    function remove(name){</span></span>
<span class="line"><span>        if(getCookiesObj()[name]){</span></span>
<span class="line"><span>            document.cookie = name + &#39;=; max-age=0&#39;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //清除所有cookie</span></span>
<span class="line"><span>    function clear(){</span></span>
<span class="line"><span>        var cookies = getCookiesObj();</span></span>
<span class="line"><span>        for(var key in cookies){</span></span>
<span class="line"><span>            document.cookie = key + &#39;=; max-age=0&#39;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //获取所有cookies</span></span>
<span class="line"><span>    function getCookies(name){</span></span>
<span class="line"><span>        return getCookiesObj();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //解决冲突</span></span>
<span class="line"><span>    function noConflict(name){</span></span>
<span class="line"><span>        if(name &amp;&amp; typeof name === &#39;string&#39;){</span></span>
<span class="line"><span>            if(name &amp;&amp; window[&#39;cookie&#39;]){</span></span>
<span class="line"><span>                window[name] = window[&#39;cookie&#39;];</span></span>
<span class="line"><span>                delete window[&#39;cookie&#39;];</span></span>
<span class="line"><span>                return window[name];</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>            return window[&#39;cookie&#39;];</span></span>
<span class="line"><span>            delete window[&#39;cookie&#39;];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    global[&#39;cookie&#39;] = {</span></span>
<span class="line"><span>        &#39;getCookies&#39;: getCookies,</span></span>
<span class="line"><span>        &#39;set&#39;: set,</span></span>
<span class="line"><span>        &#39;get&#39;: get,</span></span>
<span class="line"><span>        &#39;remove&#39;: remove,</span></span>
<span class="line"><span>        &#39;clear&#39;: clear,</span></span>
<span class="line"><span>        &#39;noConflict&#39;: noConflict</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>})(window);</span></span></code></pre></div>`,111),o=[t,i,c];function r(d,u,h,g,b,v){return e(),p("div",null,o)}const k=a(l,[["render",r]]);export{q as __pageData,k as default};
