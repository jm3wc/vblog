import{_ as s,c as a,o as n,a2 as p}from"./chunks/framework.CSGcjqEA.js";const g=JSON.parse('{"title":"PHP日期函数","description":"","frontmatter":{},"headers":[],"relativePath":"PHP语法.md","filePath":"PHP语法.md"}'),l={name:"PHP语法.md"},e=p(`<h2 id="php变量" tabindex="-1">PHP变量 <a class="header-anchor" href="#php变量" aria-label="Permalink to &quot;PHP变量&quot;">​</a></h2><blockquote><h4 id="什么是变量" tabindex="-1">什么是变量 <a class="header-anchor" href="#什么是变量" aria-label="Permalink to &quot;什么是变量&quot;">​</a></h4></blockquote><p>变量是用于储存值的容器，与代数类似，可以给 PHP 变量赋予某个值（x=5）或者表达式（z=x+y）。变量可以是很短的名称（如 x 和 y）或者更具描述性的名称（如 age、carname、totalvolume）。</p><blockquote><h4 id="php变量命名的规则" tabindex="-1">PHP变量命名的规则 <a class="header-anchor" href="#php变量命名的规则" aria-label="Permalink to &quot;PHP变量命名的规则&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>变量以美元符 $ 开头，然后是变量名;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>变量名由字母或下划线开头，由字母，下划线，数字组成;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>变量名区分大小写;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>变量名里面不能够有标点符号,空格 除了下划线以外</span></span>
<span class="line"><span></span></span>
<span class="line"><span>php是弱类型的语言，不需要事先声明变量的数据类型;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>php可以不用显示的声明变量就直接使用，不过好的编码习惯：所有的变量在使用前应该进行声明;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>可以使用驼峰命名法、匈牙利命名法、帕斯卡命名法、来给变量进行命名。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//例：</span></span>
<span class="line"><span>    $a = 25;</span></span>
<span class="line"><span>    $age = 18;</span></span></code></pre></div><blockquote><h4 id="变量赋值" tabindex="-1">变量赋值 <a class="header-anchor" href="#变量赋值" aria-label="Permalink to &quot;变量赋值&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>值赋值：就是将赋值表达式的值复制到变量;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>引用赋值：php4引入了引用赋值功能，创建的变量与另一个变量引用的内容相同。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $val_1 = &#39;hello word&#39;;</span></span>
<span class="line"><span>    $val_2 = &amp;$val_1;  //把$val_1的内存空间地址赋值给$val_2,是同一个值</span></span>
<span class="line"><span>    $val_2 = &#39;hello&#39;; </span></span>
<span class="line"><span>    $val_1 = &#39;hello&#39;;</span></span></code></pre></div><blockquote><h4 id="变量的变量" tabindex="-1">变量的变量 <a class="header-anchor" href="#变量的变量" aria-label="Permalink to &quot;变量的变量&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    $val_1 = &#39;hello&#39;;</span></span>
<span class="line"><span>    $$val_1 = &#39;world&#39;;</span></span>
<span class="line"><span>    echo $hello;</span></span>
<span class="line"><span>    echo $val_1;</span></span>
<span class="line"><span>    echo \${$val_1};</span></span></code></pre></div><blockquote><h4 id="php的超全局变量" tabindex="-1">PHP的超全局变量 <a class="header-anchor" href="#php的超全局变量" aria-label="Permalink to &quot;PHP的超全局变量&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>php提供了很多有用的预定义变量，用于提供大量与环境有关的信息。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(1) $_SERVER 服务器变量  该全局变量包含着服务器和客户端配置及当前请求环境的有关信息</span></span>
<span class="line"><span>    $_SERVER[&#39;SERVER_NAME&#39;]; //当前运行脚本所在的服务器的主机名</span></span>
<span class="line"><span>    $_SERVER[&#39;REMOTE_ADDR&#39;]; //客户端IP地址</span></span>
<span class="line"><span>    $_SERVER[&#39;REQUEST_URI&#39;]; //URL的路径部份</span></span>
<span class="line"><span>    $_SERVER[&#39;HTTP_USER_AGENT&#39;]; //操作系统和浏览器的有关信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(2) $_GET   该变量包含使用 GET 方法传递的参数的有关信息;</span></span>
<span class="line"><span>    例：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    url: http://www.test.com?id=100&amp;page=2</span></span>
<span class="line"><span>    $id = $_GET[&#39;id&#39;];</span></span>
<span class="line"><span>    $page = $_GET[&#39;page&#39;];</span></span>
<span class="line"><span>    echo $id,page;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(3) $_POST  该变量包含使用 POST 方法传递的参数的有关信息;</span></span>
<span class="line"><span>    html:</span></span>
<span class="line"><span>         &lt;form action=&quot;index.php&quot; method=&quot;POST&quot;&gt;</span></span>
<span class="line"><span>            &lt;table&gt;</span></span>
<span class="line"><span>                &lt;tr&gt;</span></span>
<span class="line"><span>                    &lt;td&gt;用户名:&lt;/td&gt;</span></span>
<span class="line"><span>                    &lt;td&gt;&lt;input type=&quot;text&quot; name=&quot;username&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span>                &lt;/tr&gt;</span></span>
<span class="line"><span>                &lt;tr&gt;</span></span>
<span class="line"><span>                    &lt;td&gt;密码:&lt;/td&gt;</span></span>
<span class="line"><span>                    &lt;td&gt;&lt;input type=&quot;password&quot; name=&quot;pwd&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span>                &lt;/tr&gt;</span></span>
<span class="line"><span>                &lt;tr&gt;</span></span>
<span class="line"><span>                    &lt;td&gt;&lt;/td&gt;</span></span>
<span class="line"><span>                    &lt;td&gt;&lt;input type=&quot;submit&quot; value=&quot;提交&quot; /&gt;&lt;/td&gt;</span></span>
<span class="line"><span>                &lt;/tr&gt;</span></span>
<span class="line"><span>            &lt;/table&gt;</span></span>
<span class="line"><span>        &lt;/form&gt;</span></span>
<span class="line"><span>    php:    </span></span>
<span class="line"><span>        $username = $_POST[‘username’];</span></span>
<span class="line"><span>        $passwd = $_POST[‘pwd’];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(4) $_REQUEST 该变量记录着通过各种输入方法传递给脚本的变量，如GET POST,但不要用这个超级全局变量，因为它不安全而且速度比较慢;</span></span>
<span class="line"><span>(5) $_COOKIE  cookie变量数组</span></span>
<span class="line"><span>(6) $_SESSION 会话变量数组</span></span>
<span class="line"><span>(7) $_FILES 与上传文件有关的变量数组</span></span>
<span class="line"><span>(8) $_ENV 环境变量数组</span></span>
<span class="line"><span>(9) $GLOBALS 有全局变量数组</span></span></code></pre></div><blockquote><h4 id="常量的定义" tabindex="-1">常量的定义 <a class="header-anchor" href="#常量的定义" aria-label="Permalink to &quot;常量的定义&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>常量是指在程序执行中无法修改的值。如 test (3.14);</span></span>
<span class="line"><span>在脚本执行期间该值不能改变;</span></span>
<span class="line"><span>常量对大小写敏感，通常常量名总是大写;</span></span>
<span class="line"><span>常量是全局的，可以在脚本的任何地方引用;</span></span>
<span class="line"><span>常量分为内置常量和自定义常量;</span></span>
<span class="line"><span>常量使用define()函数定义;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>    define(&#39;test&#39;,3.14);</span></span>
<span class="line"><span>    echo test;</span></span></code></pre></div><blockquote><h4 id="内置常量" tabindex="-1">内置常量 <a class="header-anchor" href="#内置常量" aria-label="Permalink to &quot;内置常量&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PHP_OS           PHP所在的操作系统的名字</span></span>
<span class="line"><span>PHP_VERSION      当前 PHP 的版本</span></span></code></pre></div><blockquote><p>魔术常量</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>__LINE__    文件中的当前行号;</span></span>
<span class="line"><span>__FILE__    文件的完整路径和文件名;</span></span>
<span class="line"><span>__FUNCTION__    函数名称;</span></span>
<span class="line"><span>__CLASS__    类的名称;</span></span>
<span class="line"><span>__METHOD__    类的方法名;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 例：</span></span>
<span class="line"><span>  class a { </span></span>
<span class="line"><span>        function fa() { </span></span>
<span class="line"><span>            return __METHOD__; </span></span>
<span class="line"><span>        } </span></span>
<span class="line"><span></span></span>
<span class="line"><span>        function fb() { </span></span>
<span class="line"><span>            return __FUNCTION__; </span></span>
<span class="line"><span>        } </span></span>
<span class="line"><span>   } </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $Obj = new a(); </span></span>
<span class="line"><span>    echo $Obj-&gt;fa();// output a::fa  返回类名称与函数名称</span></span>
<span class="line"><span>    echo $Obj-&gt;fb();// output fb 仅返回回函数名称</span></span></code></pre></div><h2 id="php数据类型" tabindex="-1">PHP数据类型 <a class="header-anchor" href="#php数据类型" aria-label="Permalink to &quot;PHP数据类型&quot;">​</a></h2><h2 id="什么是数据类型" tabindex="-1">什么是数据类型 <a class="header-anchor" href="#什么是数据类型" aria-label="Permalink to &quot;什么是数据类型&quot;">​</a></h2><p>String（字符串）, Integer（整型）, Float（浮点型）, Boolean（布尔型）, Array（数组）, Object（对象）, NULL（空值）resource（资源）这都是PHP的数据类型。</p><p>上面几种数据细分为标量类型、复合类型、还有特殊类型。</p><blockquote><h4 id="标量类型" tabindex="-1">标量类型 <a class="header-anchor" href="#标量类型" aria-label="Permalink to &quot;标量类型&quot;">​</a></h4></blockquote><h2 id="_1、字符串-string" tabindex="-1">1、字符串 (string) <a class="header-anchor" href="#_1、字符串-string" aria-label="Permalink to &quot;1、字符串 (string)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    字符串有三种定义方式：单引号，双引号，定界符(heredoc);</span></span>
<span class="line"><span>    单引号字符串中出现的变量不会被变量的值替代;</span></span>
<span class="line"><span>    双引号字符串中最重要的一点是其中的变量会被变量值替代;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    如果遇到美元符号($)解析器会尽可能多地取得后面的字符以组成一个合法的变量名.</span></span>
<span class="line"><span>    如果想明确的指定名字的结束，用花括号把变量名括起来。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    例：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        $beer = &quot;Heineken&quot;;</span></span>
<span class="line"><span>        echo &quot;He drank some {$beer}s&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>字符串定界的方法使用定界符语法 &quot;&lt;&lt;&lt;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    例：</span></span>
<span class="line"><span>        $str = &lt;&lt;&lt;EOD</span></span>
<span class="line"><span>        This is test.</span></span>
<span class="line"><span>        Hello word.</span></span>
<span class="line"><span>        EOD;</span></span>
<span class="line"><span>        echo $str;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  转义字符</span></span>
<span class="line"><span>    \\n    换行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    \\r    回车 ( WINDOW \\r\\n ) (linux \\n) （Mac OS \\r）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    \\t    水平制表符 (按键盘 tab 产生的效果)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    \\\\    反斜线</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    \\$    美元符(表示变量的开始)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    \\&quot;    双引号</span></span></code></pre></div><h2 id="_2、整型-integer" tabindex="-1">2、整型(integer) <a class="header-anchor" href="#_2、整型-integer" aria-label="Permalink to &quot;2、整型(integer)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>整数是一个没有小数的数字。</span></span>
<span class="line"><span>整数规则:</span></span>
<span class="line"><span>    整数必须至少有一个数字 (0-9)</span></span>
<span class="line"><span>    整数不能包含逗号或空格</span></span>
<span class="line"><span>    整数是没有小数点的</span></span>
<span class="line"><span>    整数可以是正数或负数</span></span>
<span class="line"><span>    整型可以用三种格式来指定：十进制， 十六进制（ 以 0x 为前缀）或八进制（前缀为 0）</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>    $a = 1234;</span></span>
<span class="line"><span>    var_dump($a);</span></span></code></pre></div><h2 id="_3、浮点型-float-double" tabindex="-1">3、浮点型(float, double) <a class="header-anchor" href="#_3、浮点型-float-double" aria-label="Permalink to &quot;3、浮点型(float, double)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>浮点数是带小数部分的数字，或是指数形式。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>    $a = 1.234; </span></span>
<span class="line"><span>    var_dump($a); //float(1.234)</span></span></code></pre></div><h2 id="_4、布尔型-bool" tabindex="-1">4、布尔型（bool） <a class="header-anchor" href="#_4、布尔型-bool" aria-label="Permalink to &quot;4、布尔型（bool）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>布尔型可以是 TRUE 或 FALSE，布尔型通常用于条件判断。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>以下值被认为是FALSE:</span></span>
<span class="line"><span>    布尔值  FALSE</span></span>
<span class="line"><span>    整型值 0</span></span>
<span class="line"><span>    浮点型值 0.0</span></span>
<span class="line"><span>    空白字符串和字符串 “0”</span></span>
<span class="line"><span>    没有成员变量的数组</span></span>
<span class="line"><span>    没有单元的对象(php4适用)</span></span>
<span class="line"><span>    特殊类型的NULL</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>    $fo1 = false;</span></span>
<span class="line"><span>    var_dump($fo1);</span></span></code></pre></div><blockquote><h4 id="复合数据类型" tabindex="-1">复合数据类型 <a class="header-anchor" href="#复合数据类型" aria-label="Permalink to &quot;复合数据类型&quot;">​</a></h4></blockquote><h2 id="_1、数组-array" tabindex="-1">1、数组 (array) <a class="header-anchor" href="#_1、数组-array" aria-label="Permalink to &quot;1、数组 (array)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>数组可以在一个变量中存储多个值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>    $data = [&#39;一&#39;,&#39;二&#39;,&#39;三&#39;];</span></span>
<span class="line"><span>    $data1 = array(&#39;a&#39; =&gt; &#39;周一&#39;,&#39;b&#39; =&gt; &#39;周二&#39;,&#39;c&#39; =&gt; &#39;周三&#39;)</span></span>
<span class="line"><span>    var_dump($data);</span></span>
<span class="line"><span>    var_dump($data1);</span></span></code></pre></div><h2 id="_2、对象-object" tabindex="-1">2、对象 (Object) <a class="header-anchor" href="#_2、对象-object" aria-label="Permalink to &quot;2、对象 (Object)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>对象是存储数据和有关如何处理数据的信息的数据类型</span></span>
<span class="line"><span>    $test = new test;</span></span>
<span class="line"><span>    var_dump($test);</span></span></code></pre></div><blockquote><h4 id="特殊类型" tabindex="-1">特殊类型 <a class="header-anchor" href="#特殊类型" aria-label="Permalink to &quot;特殊类型&quot;">​</a></h4></blockquote><h2 id="_1、资源-resource" tabindex="-1">1、资源 (resource) <a class="header-anchor" href="#_1、资源-resource" aria-label="Permalink to &quot;1、资源 (resource)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>存放资源数据( PHP外部数据, 如数据库, 文件 )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>    $fh = fopen(&quot;test.txt&quot;, &quot;rw&quot;);</span></span>
<span class="line"><span>    var_dump($fh);</span></span></code></pre></div><h2 id="_2、空值-null" tabindex="-1">2、空值 (null) <a class="header-anchor" href="#_2、空值-null" aria-label="Permalink to &quot;2、空值 (null)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>null 无，表示没有值，null不表示空格，也不表示0;</span></span>
<span class="line"><span>    以下情况，则认为是null:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    没有设置为任何预定义的变量;</span></span>
<span class="line"><span>    明确的赋值为null;</span></span>
<span class="line"><span>    使用函数unset()清除;</span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>    $x = &quot;Hello world!&quot;;</span></span>
<span class="line"><span>    $x = null;</span></span>
<span class="line"><span>    var_dump($x);</span></span></code></pre></div><blockquote><h4 id="类型自动转换" tabindex="-1">类型自动转换 <a class="header-anchor" href="#类型自动转换" aria-label="Permalink to &quot;类型自动转换&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>因为php对于类型定义非常的松散，所以有时会根据引用变量的环境，将变量自动转换为最适合的类型;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>    $num = 5;</span></span>
<span class="line"><span>    $str = &quot;15&quot;;</span></span>
<span class="line"><span>    echo $num + $str;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $str = &quot;100 hello&quot;;</span></span>
<span class="line"><span>    $num = 200;</span></span>
<span class="line"><span>    echo $num + $str;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $str = &#39;1.2&#39;;</span></span>
<span class="line"><span>    if($str){  //if 判断为 true</span></span>
<span class="line"><span>         echo &#39;hello world&#39;;</span></span>
<span class="line"><span>    }</span></span></code></pre></div><blockquote><h4 id="类型转换" tabindex="-1">类型转换 <a class="header-anchor" href="#类型转换" aria-label="Permalink to &quot;类型转换&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>第一种转换方式： (int)  (bool)  (float)  (string)  (array) (object)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例： </span></span>
<span class="line"><span>    $num = 3.14;</span></span>
<span class="line"><span>    $res = (int)$num;</span></span>
<span class="line"><span>    $res = (float)$num;</span></span>
<span class="line"><span>    $res = (string)$num;</span></span>
<span class="line"><span>    $res = (bool)$num;</span></span>
<span class="line"><span>    $res = (array)$num;</span></span>
<span class="line"><span>    $res = (object)$num;</span></span>
<span class="line"><span>    var_dump($res);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第二种转换方式：  intval()  floatval()  strval()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>    $str=&quot;123.9abc&quot;;   </span></span>
<span class="line"><span>    $int=intval($str);     //转换后数值：123   </span></span>
<span class="line"><span>    $float=floatval($str); //转换后数值：123.9   </span></span>
<span class="line"><span>    $str=strval($float);   //转换后字符串：&quot;123.9&quot;    </span></span>
<span class="line"><span>    var_dump($int);</span></span>
<span class="line"><span>    var_dump($float);</span></span>
<span class="line"><span>    var_dump($str);</span></span>
<span class="line"><span>第三种转换方式：  settype();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>    $num=12.8;   </span></span>
<span class="line"><span>    settype($num,&quot;int&quot;);   </span></span>
<span class="line"><span>    settype($num,&quot;float&quot;);   </span></span>
<span class="line"><span>    settype($num,&quot;string&quot;);   </span></span>
<span class="line"><span>    settype($num,&quot;bool&quot;);   </span></span>
<span class="line"><span>    settype($num,&quot;array&quot;);   </span></span>
<span class="line"><span>    settype($num,&quot;object&quot;);    </span></span>
<span class="line"><span>    var_dump($num);</span></span></code></pre></div><blockquote><h4 id="与类型相关的函数" tabindex="-1">与类型相关的函数 <a class="header-anchor" href="#与类型相关的函数" aria-label="Permalink to &quot;与类型相关的函数&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1.gettype() 返回变量的类型</span></span>
<span class="line"><span></span></span>
<span class="line"><span>共有8个可能的值 string、integer、float、boolean、array、object、null、unknow</span></span>
<span class="line"><span>$str = &#39;hello&#39;;</span></span>
<span class="line"><span>echo gettype($str);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.is_type() 查看变量是否属于某个类型,是返回 TRUE ,否返回 FALSE;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$arr = array(1);</span></span>
<span class="line"><span>echo is_array($arr);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$num = 5;</span></span>
<span class="line"><span>echo is_int($num);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.var_dump();  函数用来得到变量的类型和值的详细信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$str = &#39;hello&#39;;</span></span>
<span class="line"><span>var_dump($str);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$arr = array(&#39;A&#39;, &#39;B&#39;, &#39;C&#39;);</span></span>
<span class="line"><span>var_dump($arr);</span></span></code></pre></div><h2 id="php运算符" tabindex="-1">PHP运算符 <a class="header-anchor" href="#php运算符" aria-label="Permalink to &quot;PHP运算符&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  算术运算符 </span></span>
<span class="line"><span>  赋值运算符  </span></span>
<span class="line"><span>  字符串运算符 </span></span>
<span class="line"><span>  递增(++)和递减(--)运算符 </span></span>
<span class="line"><span>  逻辑运算符 </span></span>
<span class="line"><span>  比较运算符 </span></span>
<span class="line"><span>  三元运算符</span></span></code></pre></div><blockquote><h4 id="算数运算符" tabindex="-1">算数运算符 <a class="header-anchor" href="#算数运算符" aria-label="Permalink to &quot;算数运算符&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+ 加法运算      $a + $b</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 减法运算      $a - $b</span></span>
<span class="line"><span></span></span>
<span class="line"><span>* 乘法运算      $a * $b</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/ 除法运算      $a / $b</span></span>
<span class="line"><span></span></span>
<span class="line"><span>% 取模运算（求余数)   $a % $b</span></span></code></pre></div><blockquote><h4 id="赋值运算符" tabindex="-1">赋值运算符 <a class="header-anchor" href="#赋值运算符" aria-label="Permalink to &quot;赋值运算符&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>赋值运算符，将一个数据值赋给一个变量;</span></span>
<span class="line"><span>组合赋值运算符，在赋值之前会完成某个运算;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$a = 5    赋值</span></span>
<span class="line"><span>$a += 5   加法赋值    $a = $a + 5</span></span>
<span class="line"><span>$a -= 5   减法赋值    $a = $a – 5</span></span>
<span class="line"><span>$a *= 5   乘法赋值    $a = $a * 5</span></span>
<span class="line"><span>$a /= 5   除法赋值    $a = $a / 5</span></span>
<span class="line"><span>$a .= 5   拼接赋值    $a = $a.5</span></span></code></pre></div><blockquote><h4 id="字符串运算符" tabindex="-1">字符串运算符 <a class="header-anchor" href="#字符串运算符" aria-label="Permalink to &quot;字符串运算符&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>字符串运算符用于拼接字符串, 拼接表示将两个或多个对象组合起来;</span></span>
<span class="line"><span>$a = &quot;hello&quot;;</span></span>
<span class="line"><span>$b = $a . &quot;world&quot;;</span></span>
<span class="line"><span>echo $b;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$b = &quot;Hello&quot;;</span></span>
<span class="line"><span>$b .= &quot;World!&quot;;</span></span>
<span class="line"><span>echo $b;</span></span></code></pre></div><blockquote><h4 id="递增-和递减-运算符" tabindex="-1">递增(++)和递减(--)运算符 <a class="header-anchor" href="#递增-和递减-运算符" aria-label="Permalink to &quot;递增(++)和递减(--)运算符&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>递增和递减运算符将变量的当前值加1或减1，可以使代码更简洁;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>++$i    先加  $i的值加1，然后再返回$i的值;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$i++    后加  先返回$i的值，然后再将$i的值加1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--$i    先减  $i的值减1，然后再返回$i的值;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$i--    后减  先返回$i的值，然后再将$i的值减1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$i = 5;</span></span>
<span class="line"><span>$a = $i++;</span></span>
<span class="line"><span>echo &#39;i = &#39;.$i;</span></span>
<span class="line"><span>echo &#39;&lt;br&gt;&#39;;</span></span>
<span class="line"><span>echo &#39;a = &#39;.$a;</span></span></code></pre></div><blockquote><h4 id="逻辑运算符" tabindex="-1">逻辑运算符 <a class="header-anchor" href="#逻辑运算符" aria-label="Permalink to &quot;逻辑运算符&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>利用逻辑运算符可以根据多个变量的值进行判断，这使得控制程序的流程成为可能.</span></span>
<span class="line"><span>逻辑操作符常用于控制结构中，如if条件和while及for循环;</span></span>
<span class="line"><span>&amp;&amp;，  AND   逻辑与  </span></span>
<span class="line"><span>||，  OR    逻辑或</span></span>
<span class="line"><span>!,    NOT   逻辑非</span></span></code></pre></div><blockquote><h4 id="比较运算符" tabindex="-1">比较运算符 <a class="header-anchor" href="#比较运算符" aria-label="Permalink to &quot;比较运算符&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>比较运算符，返回一个布尔值 TRUE 或 FALSE;</span></span>
<span class="line"><span>&gt;         大于</span></span>
<span class="line"><span>&lt;         小于</span></span>
<span class="line"><span>&gt;=        大于或等于</span></span>
<span class="line"><span>&lt;=        小于或等于</span></span>
<span class="line"><span>!=        不等于</span></span>
<span class="line"><span>&lt;&gt;        不等于</span></span>
<span class="line"><span>==        等于</span></span>
<span class="line"><span>===       全等于 （两个比较的内容里，类型也要一样）</span></span>
<span class="line"><span>!==       全不等</span></span></code></pre></div><blockquote><h4 id="三元运算符" tabindex="-1">三元运算符 <a class="header-anchor" href="#三元运算符" aria-label="Permalink to &quot;三元运算符&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>语法：expression1 ? expression2 : expression3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$a = 5;</span></span>
<span class="line"><span>$b = 2;</span></span>
<span class="line"><span>$res = $a &gt; $b ? &quot;yes&quot;:&quot;no&quot;;</span></span>
<span class="line"><span>echo $res;</span></span></code></pre></div><blockquote><h4 id="运算符的优先级" tabindex="-1">运算符的优先级 <a class="header-anchor" href="#运算符的优先级" aria-label="Permalink to &quot;运算符的优先级&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>所谓运算符的优先级指的是哪一个运算符应该先计算。 具体运算符的优先级，参考php手册;</span></span>
<span class="line"><span>赋值运算，从右到左</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo 1 + 2 * 3;   //outputs 7</span></span></code></pre></div><h2 id="php流程控制" tabindex="-1">PHP流程控制 <a class="header-anchor" href="#php流程控制" aria-label="Permalink to &quot;PHP流程控制&quot;">​</a></h2><h2 id="_1、if语句" tabindex="-1">1、if语句 <a class="header-anchor" href="#_1、if语句" aria-label="Permalink to &quot;1、if语句&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>If语句用括号中的表达式返回值（true 或 false )来控制是否执行指定的代码程序.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$os = &quot;windows&quot;;</span></span>
<span class="line"><span>if($os == &#39;mac&#39;){</span></span>
<span class="line"><span>    echo &#39;你的系统OS是mac&#39;;</span></span>
<span class="line"><span>}else if($os == &#39;liunx&#39;){</span></span>
<span class="line"><span>    echo &#39;你的系统OS是liunx&#39;;</span></span>
<span class="line"><span>}else{</span></span>
<span class="line"><span>    echo &#39;你的系统OS是windows&#39;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_2、switch-语句" tabindex="-1">2、switch 语句 <a class="header-anchor" href="#_2、switch-语句" aria-label="Permalink to &quot;2、switch 语句&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>switch 语句可以看作是if-else组合的一种变体，如果需要比较有限值的变量，通常会使用switch语句;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$os = &quot;windows&quot;;</span></span>
<span class="line"><span>switch($os){</span></span>
<span class="line"><span>  case &#39;mac&#39;:</span></span>
<span class="line"><span>    echo &quot;你的系统OS是mac&quot;;</span></span>
<span class="line"><span>    break;</span></span>
<span class="line"><span>  case &#39;liunx&#39;:</span></span>
<span class="line"><span>    echo &quot;你的系统OS是liunx&quot;;</span></span>
<span class="line"><span>    break;</span></span>
<span class="line"><span>  default:</span></span>
<span class="line"><span>    echo &quot;你的系统OS是windows&quot;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>在每个case块的末尾处都有break语句，如果没有break语句，就会执行所有后续的case块直到遇到break语句为止;</span></span></code></pre></div><h2 id="php循环" tabindex="-1">PHP循环 <a class="header-anchor" href="#php循环" aria-label="Permalink to &quot;PHP循环&quot;">​</a></h2><h2 id="do-while" tabindex="-1">do{}while() <a class="header-anchor" href="#do-while" aria-label="Permalink to &quot;do{}while()&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>do...while 语句会至少执行一次代码，然后检查条件，只要条件成立，就会重复进行循环。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>    $i=1;</span></span>
<span class="line"><span>    do</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $i++;</span></span>
<span class="line"><span>        echo &quot;The number is &quot; . $i . &quot;&lt;br&gt;&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    while ($i&lt;=5);</span></span></code></pre></div><h2 id="while" tabindex="-1">while(){} <a class="header-anchor" href="#while" aria-label="Permalink to &quot;while(){}&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>while 循环将重复执行代码块，直到指定的条件不成立</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>    $i=1;</span></span>
<span class="line"><span>    while($i&lt;=5)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        echo &quot;The number is &quot; . $i . &quot;&lt;br&gt;&quot;;</span></span>
<span class="line"><span>        $i++;</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h2 id="for" tabindex="-1">for(){} <a class="header-anchor" href="#for" aria-label="Permalink to &quot;for(){}&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>for 循环用于您预先知道脚本需要运行的次数的情况。</span></span>
<span class="line"><span>例:</span></span>
<span class="line"><span>for ($i=1; $i&lt;=5; $i++)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    echo &quot;数字为 &quot; . $i . ‘&lt;br&gt;’;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><h2 id="foreach" tabindex="-1">foreach(){} <a class="header-anchor" href="#foreach" aria-label="Permalink to &quot;foreach(){}&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>foreach 循环用于遍历数组，它根据数组中每个元素来循环代码块。</span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>    $x = array(&quot;Google&quot;, &quot;Runoob&quot;, &quot;Taobao&quot;);</span></span>
<span class="line"><span>    foreach ($x as $value) {</span></span>
<span class="line"><span>        echo $value.‘&lt;br&gt;’;</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h2 id="遍历二维数组" tabindex="-1">遍历二维数组 <a class="header-anchor" href="#遍历二维数组" aria-label="Permalink to &quot;遍历二维数组&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    $products = array(</span></span>
<span class="line"><span>        array(</span></span>
<span class="line"><span>            &#39;pname&#39; =&gt; &#39;nokia n73&#39;,</span></span>
<span class="line"><span>            &#39;price&#39; =&gt;  1500,</span></span>
<span class="line"><span>        ),</span></span>
<span class="line"><span>        array(</span></span>
<span class="line"><span>            &#39;pname&#39; =&gt; &#39;nokia 5800&#39;,</span></span>
<span class="line"><span>            &#39;price&#39; =&gt;  2000,</span></span>
<span class="line"><span>        ),</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    foreach ($products as $product_k =&gt; $product_v) {</span></span>
<span class="line"><span>        foreach ($product_v as $key =&gt; $val) {</span></span>
<span class="line"><span>            echo $key . &#39;=&gt;&#39; . $val;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h2 id="break" tabindex="-1">break <a class="header-anchor" href="#break" aria-label="Permalink to &quot;break&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>如果包含一个break语句，将立即结束 while、do…while、for、foreach、switch的执行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for($i=0;$i &lt; 5;$i++){</span></span>
<span class="line"><span>    if($i == 3){</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    echo $i.&quot;&lt;br&gt;&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="continue" tabindex="-1">continue <a class="header-anchor" href="#continue" aria-label="Permalink to &quot;continue&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>continue 语句使当前循环执行结束，并从下一次循环开始执行.</span></span>
<span class="line"><span>for($i=0;$i &lt; 5;$i++){</span></span>
<span class="line"><span>    if($i == 3){</span></span>
<span class="line"><span>        continue;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    echo $i.&quot;&lt;br&gt;&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="php函数" tabindex="-1">PHP函数 <a class="header-anchor" href="#php函数" aria-label="Permalink to &quot;PHP函数&quot;">​</a></h2><h2 id="什么是函数" tabindex="-1">什么是函数 <a class="header-anchor" href="#什么是函数" aria-label="Permalink to &quot;什么是函数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>函数是用来完成某种特定任务的可重用代码块;</span></span>
<span class="line"><span>函数可以使程序更具模块化,拥有良好的结构;</span></span>
<span class="line"><span>函数定义后在程序中可以重复调用;</span></span>
<span class="line"><span>函数分为内置函数和自定义函数</span></span></code></pre></div><blockquote><h4 id="内置函数" tabindex="-1">内置函数 <a class="header-anchor" href="#内置函数" aria-label="Permalink to &quot;内置函数&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PHP系统提供了大量功能强大的函数，帮助我们解决各种问题</span></span></code></pre></div><blockquote><h4 id="创建自定义函数" tabindex="-1">创建自定义函数 <a class="header-anchor" href="#创建自定义函数" aria-label="Permalink to &quot;创建自定义函数&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function function_name(parameters) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //function body</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function sayhello(){</span></span>
<span class="line"><span>  echo &#39;hello&#39;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>函数用function关键字来声明;</span></span>
<span class="line"><span>函数名称是由字母或下划线开始,中间可以包含数字;</span></span>
<span class="line"><span>函数名不区分大小写,不过在调用函数的时候，通常使用其在定义时相同的形式;</span></span>
<span class="line"><span>php不支持函数重载, 所以自定义函数不能和内置函数重名;</span></span>
<span class="line"><span>不能在一个文件中自定义同名的函数;</span></span>
<span class="line"><span>参数出现在括号中,如果有多个参数用逗号分隔;</span></span></code></pre></div><blockquote><h4 id="传递参数" tabindex="-1">传递参数 <a class="header-anchor" href="#传递参数" aria-label="Permalink to &quot;传递参数&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>值传递(传值)</span></span>
<span class="line"><span>    函数内对参数值的改变不会影响函数外部的值;</span></span>
<span class="line"><span>引用传递(传址)</span></span>
<span class="line"><span>    有些情况下，可能希望在函数体内对参数的修改在函数体外也能反映;</span></span>
<span class="line"><span>    使用引用传递参数要在参数前加上&quot;&amp;&quot;符号;</span></span>
<span class="line"><span>    变量本身传入，传入后的变量与原变量建立联系;</span></span>
<span class="line"><span>    函数体内变量的变化，会影响到原变量本身;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>默认参数值</span></span>
<span class="line"><span>    可以为参数指定默认值，在没有提供其他值的情况下，则将默认值自动赋给该参数;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>可选参数</span></span>
<span class="line"><span>    可以指定某个参数为可选参数，这些参数需要放在参数列表的末尾，需且要指定其默认值为空;</span></span>
<span class="line"><span>    如果指定了多个可选参数，可以选择性地传递某些参数;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>function demo($name,$age = null){</span></span>
<span class="line"><span>    echo &#39;姓名：&#39; . $name . &#39; 年龄：&#39; .$age;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>demo(&#39;李四&#39;);</span></span></code></pre></div><blockquote><h4 id="从函数返回值" tabindex="-1">从函数返回值 <a class="header-anchor" href="#从函数返回值" aria-label="Permalink to &quot;从函数返回值&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>通常情况下，只依靠函数做某些事情还不够;</span></span>
<span class="line"><span>需要将函数的执行结果返回给调用者，这时可以使用 return 语句返回结果;</span></span>
<span class="line"><span>return 语句变执行后，将使得函数立即结束运行，并且将控制权返回被调用的行;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function mysquare($num)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if ($num == 4) {</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>        echo &#39;1&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    $res = $num * $num;</span></span>
<span class="line"><span>    return $res;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>echo mysquare(4);</span></span></code></pre></div><blockquote><h4 id="递归函数" tabindex="-1">递归函数 <a class="header-anchor" href="#递归函数" aria-label="Permalink to &quot;递归函数&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>递归函数是一个可以重复调用自身的函数，直到满足某个条件为止;</span></span>
<span class="line"><span>递归函数常用来解决一些重复的问题;</span></span>
<span class="line"><span>递归应该特别注意条件，防止进入死循环中;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function demo($val)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if($val == 0 || $val == 1){</span></span>
<span class="line"><span>        return 1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return $val * demo($val - 1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo demo(3);</span></span></code></pre></div><blockquote><h4 id="变量作用域和生命周期" tabindex="-1">变量作用域和生命周期 <a class="header-anchor" href="#变量作用域和生命周期" aria-label="Permalink to &quot;变量作用域和生命周期&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>由于引入了函数，程序中变量的能见度发生了变化，即变量的作用范围发生了改变;    </span></span>
<span class="line"><span>变量分为:全局变量，局部变量，静态变量;</span></span></code></pre></div><blockquote><h4 id="全局变量" tabindex="-1">全局变量 <a class="header-anchor" href="#全局变量" aria-label="Permalink to &quot;全局变量&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>函数体外定义的变量为全局变量，与局部变量相反，全局变量可以在程序的任何地方访问;   </span></span>
<span class="line"><span>如果在函数体中需要使用全局变量，使用 global 关键字访问;    </span></span>
<span class="line"><span>全局变量的作用域：从声明它的那条语句开始到文件末尾;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$test = &#39;test&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function demo(){</span></span>
<span class="line"><span>    global $test;</span></span>
<span class="line"><span>    echo $test;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>demo();</span></span></code></pre></div><blockquote><h4 id="局部变量" tabindex="-1">局部变量 <a class="header-anchor" href="#局部变量" aria-label="Permalink to &quot;局部变量&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>局部变量：只存在于对它做出声明的函数内部,在函数的外部无法相用它,局部变量的作用域仅限于函数内部</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$test = &#39;test&#39;;// 全局变量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function demo(){</span></span>
<span class="line"><span>    $test = &#39;demo&#39;;// 局部变量</span></span>
<span class="line"><span>    echo $test;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>demo();</span></span></code></pre></div><blockquote><h4 id="静态变量" tabindex="-1">静态变量 <a class="header-anchor" href="#静态变量" aria-label="Permalink to &quot;静态变量&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>局部变量在函数退出时会被撤消，与局部变量不同.</span></span>
<span class="line"><span>静态变量在函数退出时不会丢失值，并且再次调用函数时还能保留这个值;</span></span>
<span class="line"><span>在变量名前面加上 static 关键字就可以声明一个静态变量;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function keep_val(){</span></span>
<span class="line"><span>    static $count = 0;</span></span>
<span class="line"><span>    $count++;</span></span>
<span class="line"><span>    echo $count;</span></span>
<span class="line"><span>    echo &#39;&lt;br&gt;&#39;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>keep_val();</span></span>
<span class="line"><span>keep_val();</span></span>
<span class="line"><span>keep_val();</span></span></code></pre></div><blockquote><h4 id="函数库" tabindex="-1">函数库 <a class="header-anchor" href="#函数库" aria-label="Permalink to &quot;函数库&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>通常将常用的函数组织到函数库中，可以在以后类似的应用程序中重复使用。</span></span>
<span class="line"><span>需要调用时使用include()或require()将函数库包含到脚本中;  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>include 与 require</span></span>
<span class="line"><span></span></span>
<span class="line"><span>include()语句将在其被调用的位置处包含一个文件。</span></span>
<span class="line"><span>  include(&quot;init.php&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>include_once()的作用与include()相同，不过它会首先验证是否已经包含了该文件.</span></span>
<span class="line"><span>如果已经包含，则不再执行include_once();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>require()</span></span>
<span class="line"><span>require_once() </span></span>
<span class="line"><span></span></span>
<span class="line"><span>require() 与 include() 之间的区别</span></span>
<span class="line"><span>如果require()包含文件出错时，脚本将停止执行。 而使用include()脚本将继续执行。</span></span></code></pre></div><blockquote><h4 id="回调函数" tabindex="-1">回调函数 <a class="header-anchor" href="#回调函数" aria-label="Permalink to &quot;回调函数&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function demo($callback)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //调用回调函数</span></span>
<span class="line"><span>    $callback();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// test函数</span></span>
<span class="line"><span>function test(){</span></span>
<span class="line"><span>    echo &quot;hello world&quot;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 参数</span></span>
<span class="line"><span>demo(&#39;test&#39;);</span></span></code></pre></div><blockquote><h4 id="匿名函数" tabindex="-1">匿名函数 <a class="header-anchor" href="#匿名函数" aria-label="Permalink to &quot;匿名函数&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>匿名函数，也就是没有函数名的函数。</span></span>
<span class="line"><span>匿名函数的第一种用法，直接把函数赋值给变量，调用变量即为调用函数。</span></span>
<span class="line"><span>匿名函数的写法比较灵活。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$greet = function($name)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>echo $name.&#39;，你好&#39;;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$greet(&#39;明天&#39;);</span></span>
<span class="line"><span>$greet(&#39;PHP&#39;);</span></span></code></pre></div><blockquote><h4 id="闭包函数" tabindex="-1">闭包函数 <a class="header-anchor" href="#闭包函数" aria-label="Permalink to &quot;闭包函数&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>php的闭包（Closure）也就是匿名函数。是PHP5.3引入的。</span></span>
<span class="line"><span>闭包的几个作用：</span></span>
<span class="line"><span>1 减少foreach的循环的代码</span></span>
<span class="line"><span>2 减少函数的参数</span></span>
<span class="line"><span>3 解除递归函数</span></span>
<span class="line"><span>4 关于延迟绑定</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//闭包：延长局部变量的使用范围，缺点：内存泄露</span></span>
<span class="line"><span>function callFunc( $func ) {</span></span>
<span class="line"><span>    $func( &#39;some string&#39; );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$printStrFunc = function( $str ) {</span></span>
<span class="line"><span>    echo $str;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>callFunc( $printStrFunc );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//也可以直接将匿名函数进行传递。如果你了解js，这种写法可能会很熟悉 callFunc( function( $str ) {</span></span>
<span class="line"><span>// echo $str;</span></span>
<span class="line"><span>// } );</span></span></code></pre></div><h2 id="php数学函数" tabindex="-1">PHP数学函数 <a class="header-anchor" href="#php数学函数" aria-label="Permalink to &quot;PHP数学函数&quot;">​</a></h2><h2 id="什么是数学函数" tabindex="-1">什么是数学函数 <a class="header-anchor" href="#什么是数学函数" aria-label="Permalink to &quot;什么是数学函数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>函数能处理 integer 和 float 范围内的值。</span></span></code></pre></div><blockquote><h4 id="abs" tabindex="-1">abs <a class="header-anchor" href="#abs" aria-label="Permalink to &quot;abs&quot;">​</a></h4></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">x</td><td style="text-align:left;">必需。一个数。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>abs() 函数返回一个数的绝对值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>abs(x)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例</span></span>
<span class="line"><span>echo(abs(6.7));</span></span>
<span class="line"><span>echo(abs(-3));</span></span>
<span class="line"><span>echo(abs(3));</span></span></code></pre></div><blockquote><h4 id="ceil" tabindex="-1">ceil <a class="header-anchor" href="#ceil" aria-label="Permalink to &quot;ceil&quot;">​</a></h4></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">x</td><td style="text-align:left;">必需。一个数。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>ceil() 函数向上舍入为最接近的整数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>ceil(x)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>说明</span></span>
<span class="line"><span>返回不小于 x 的下一个整数，x 如果有小数部分则进一位。ceil() 返回的类型仍然是 float，因为 float 值的范围通常比 integer 要大。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例</span></span>
<span class="line"><span>echo(ceil(0.60));</span></span>
<span class="line"><span>echo(ceil(0.40));</span></span>
<span class="line"><span>echo(ceil(5));</span></span>
<span class="line"><span>echo(ceil(5.1));</span></span>
<span class="line"><span>echo(ceil(-5.1));</span></span>
<span class="line"><span>echo(ceil(-5.9));</span></span></code></pre></div><blockquote><h4 id="floor" tabindex="-1">floor <a class="header-anchor" href="#floor" aria-label="Permalink to &quot;floor&quot;">​</a></h4></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">x</td><td style="text-align:left;">必需。一个数。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>floor() 函数向下舍入为最接近的整数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>floor(x)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>说明</span></span>
<span class="line"><span>返回不大于 x 的下一个整数，将 x 的小数部分舍去取整。floor() 返回的类型仍然是 float，因为 float 值的范围通常比 integer 要大。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例</span></span>
<span class="line"><span>在本例中，我们将对不同的数应用 floor() 函数：</span></span>
<span class="line"><span>echo(floor(0.60));</span></span>
<span class="line"><span>echo(floor(0.40));</span></span>
<span class="line"><span>echo(floor(5));</span></span>
<span class="line"><span>echo(floor(5.1));</span></span>
<span class="line"><span>echo(floor(-5.1));</span></span>
<span class="line"><span>echo(floor(-5.9));</span></span></code></pre></div><blockquote><h4 id="max" tabindex="-1">max <a class="header-anchor" href="#max" aria-label="Permalink to &quot;max&quot;">​</a></h4></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">x</td><td style="text-align:left;">必需。一个数。</td></tr><tr><td style="text-align:left;">y</td><td style="text-align:left;">必需。一个数。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>max() 返回最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>max(x,y)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例</span></span>
<span class="line"><span>echo(max(5,7));</span></span>
<span class="line"><span>echo(max(-3,5));</span></span>
<span class="line"><span>echo(max(-3,-5));</span></span>
<span class="line"><span>echo(max(7.25,7.30));</span></span></code></pre></div><blockquote><h4 id="min" tabindex="-1">min <a class="header-anchor" href="#min" aria-label="Permalink to &quot;min&quot;">​</a></h4></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">x</td><td style="text-align:left;">必需。一个数。</td></tr><tr><td style="text-align:left;">y</td><td style="text-align:left;">必需。一个数。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>min() 返回最大值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>min(x,y)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例</span></span>
<span class="line"><span>echo(min(5,7));</span></span>
<span class="line"><span>echo(min(-3,5));</span></span>
<span class="line"><span>echo(min(-3,-5));</span></span>
<span class="line"><span>echo(min(7.25,7.30));</span></span></code></pre></div><blockquote><h4 id="mt-rand" tabindex="-1">mt_rand <a class="header-anchor" href="#mt-rand" aria-label="Permalink to &quot;mt_rand&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>mt_rand() 使用 Mersenne Twister 算法返回随机整数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>mt_rand(min,max)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例</span></span>
<span class="line"><span>在本例中，我们会返回一些随机数：</span></span>
<span class="line"><span>echo(mt_rand());</span></span>
<span class="line"><span>echo(mt_rand());</span></span>
<span class="line"><span>echo(mt_rand(10,100));</span></span></code></pre></div><blockquote><h4 id="pi" tabindex="-1">pi <a class="header-anchor" href="#pi" aria-label="Permalink to &quot;pi&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>pi() 函数返回圆周率的值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>pi()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo pi();</span></span></code></pre></div><blockquote><h4 id="pow" tabindex="-1">pow <a class="header-anchor" href="#pow" aria-label="Permalink to &quot;pow&quot;">​</a></h4></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">x</td><td style="text-align:left;">必需。一个数。</td></tr><tr><td style="text-align:left;">y</td><td style="text-align:left;">必需。一个数。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>pow() 函数返回 x 的 y 次方。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>pow(x,y)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例</span></span>
<span class="line"><span>echo pow(4,2);</span></span>
<span class="line"><span>echo pow(6,2);</span></span>
<span class="line"><span>echo pow(-6,2);</span></span>
<span class="line"><span>echo pow(-6,-2);</span></span>
<span class="line"><span>echo pow(-6,5.5);</span></span></code></pre></div><blockquote><h4 id="rand" tabindex="-1">rand <a class="header-anchor" href="#rand" aria-label="Permalink to &quot;rand&quot;">​</a></h4></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">min,max</td><td style="text-align:left;">可选。规定随机数产生的范围。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>rand() 函数返回随机整数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>rand(min,max)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例</span></span>
<span class="line"><span>echo(rand());</span></span>
<span class="line"><span>echo(rand());</span></span>
<span class="line"><span>echo(rand(10,100));</span></span></code></pre></div><blockquote><h4 id="round" tabindex="-1">round <a class="header-anchor" href="#round" aria-label="Permalink to &quot;round&quot;">​</a></h4></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">x</td><td style="text-align:left;">可选。规定要舍入的数字。</td></tr><tr><td style="text-align:left;">prec</td><td style="text-align:left;">可选。规定小数点后的位数。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>round() 函数对浮点数进行四舍五入。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>round(x,prec)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例</span></span>
<span class="line"><span>echo(round(0.60));</span></span>
<span class="line"><span>echo(round(0.50));</span></span>
<span class="line"><span>echo(round(0.49));</span></span>
<span class="line"><span>echo(round(-4.40));</span></span>
<span class="line"><span>echo(round(-4.60));</span></span></code></pre></div><h1 id="php日期函数" tabindex="-1">PHP日期函数 <a class="header-anchor" href="#php日期函数" aria-label="Permalink to &quot;PHP日期函数&quot;">​</a></h1><h2 id="date-default-timezone-set" tabindex="-1">date_default_timezone_set <a class="header-anchor" href="#date-default-timezone-set" aria-label="Permalink to &quot;date_default_timezone_set&quot;">​</a></h2><blockquote><p>设置在脚本中所有日期/时间函数的默认时区</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>date_default_timezone_set(&quot;PRC&quot;);</span></span></code></pre></div><h2 id="time" tabindex="-1">time <a class="header-anchor" href="#time" aria-label="Permalink to &quot;time&quot;">​</a></h2><blockquote><p>time() 函数返回当前时间的 Unix 时间戳，返回自从 Unix 纪元（格林威治时间 1970 年 1 月 1 日 00:00:00）到当前时间的秒数。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>echo time()</span></span></code></pre></div><h2 id="date" tabindex="-1">date <a class="header-anchor" href="#date" aria-label="Permalink to &quot;date&quot;">​</a></h2><blockquote><p>date() 函数格式化一个本地时间／日期。</p></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">format</td><td style="text-align:left;">必需。规定如何返回结果。</td></tr><tr><td style="text-align:left;">timestamp</td><td style="text-align:left;">可选。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>echo date(&quot;Y-m-d&quot;,time());</span></span></code></pre></div><h2 id="strtotime" tabindex="-1">strtotime <a class="header-anchor" href="#strtotime" aria-label="Permalink to &quot;strtotime&quot;">​</a></h2><blockquote><p>将任何英文文本的日期时间描述解析为 Unix 时间戳。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>echo strotime(&#39;2021-08-26&#39;);</span></span></code></pre></div><h2 id="php数组" tabindex="-1">PHP数组 <a class="header-anchor" href="#php数组" aria-label="Permalink to &quot;PHP数组&quot;">​</a></h2><h2 id="什么是数组" tabindex="-1">什么是数组 <a class="header-anchor" href="#什么是数组" aria-label="Permalink to &quot;什么是数组&quot;">​</a></h2><p>数组可以理解为有序的（键-值)对组成的数据值的集合; 如果我们把变量理解为单个值的容器，那么数组就是可以包含多个值的容器; 根据索引值的不同数组分为：索引数组和关联数组;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$week = array(&quot;a&quot;=&gt; &quot;星期一&quot;, &quot;b&quot;=&gt;&quot;星期二&quot;, &quot;c&quot;=&gt; &quot;星期三&quot;);//a是键，星期一是值</span></span></code></pre></div><h2 id="创建数组" tabindex="-1">创建数组 <a class="header-anchor" href="#创建数组" aria-label="Permalink to &quot;创建数组&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>与其它语言的数组实现方式不同，php不需要在创建数组时指定其大小;</span></span>
<span class="line"><span>因为php是一种松散类型的语言，所以甚至不需要在使用前先声明;</span></span>
<span class="line"><span>索引可以是整型数字或者是字符串;</span></span>
<span class="line"><span>索引数组：索引为整数,如果没有指定索引值则默认为零，依次递增;</span></span>
<span class="line"><span>关联数组：索引为字符串的数组;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  $arr = array();</span></span>
<span class="line"><span>  $fruits = array(&quot;orange&quot;, &quot;apple&quot;, &quot;banana&quot;);</span></span>
<span class="line"><span>  $languages = array(&quot;en&quot;=&gt; &quot;english&quot;, &quot;cn&quot;=&gt; &quot;china&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  $arr[key] = value;  直接对数组变量赋值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果方括号中没有指定索引，则取当前最大整数索引值，新的键名将是该值 + 1。</span></span>
<span class="line"><span>如果当前还没有整数索引，则键名将为0。如果指定的键名已经有值了，该值将被覆盖。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>  $fruits[] = &quot;orange&quot;;</span></span>
<span class="line"><span>  $fruits[] = &quot;apple&quot;;</span></span>
<span class="line"><span>  $languages[&quot;en&quot;] = &quot;english&quot;;</span></span>
<span class="line"><span>  $languages[&quot;cn&quot;] = &quot;china&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用函数创建数组  range() 建立一个包含指定范围单元的数组</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>  $num = range(1, 100);</span></span>
<span class="line"><span>  var_dump($num);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  $letter = range(&#39;a&#39;,&#39;I&#39;);</span></span>
<span class="line"><span>  var_dump($letter);</span></span></code></pre></div><blockquote><h4 id="删除数组或数组元素" tabindex="-1">删除数组或数组元素 <a class="header-anchor" href="#删除数组或数组元素" aria-label="Permalink to &quot;删除数组或数组元素&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>删除数组或数组元素  (注意：删除数组元素不会重建索引)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>unset 释放给定的变量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>    $fruits = array(&#39;apple&#39;, &#39;banana&#39;, &#39;orange&#39;);</span></span>
<span class="line"><span>    print_r($fruits);</span></span>
<span class="line"><span>    unset($fruits[1]);</span></span>
<span class="line"><span>    print_r($fruits);</span></span></code></pre></div><blockquote><h4 id="常用的数组函数" tabindex="-1">常用的数组函数 <a class="header-anchor" href="#常用的数组函数" aria-label="Permalink to &quot;常用的数组函数&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1.print_r() 打印数组</span></span>
<span class="line"><span>    $today = getdate();</span></span>
<span class="line"><span>    print_r($today);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.count() 取得数组大小</span></span>
<span class="line"><span>    count($week); </span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.in_array() 检查数组中是否包含某个值</span></span>
<span class="line"><span>    in_array(&#39;apple&#39;, $fruits);</span></span>
<span class="line"><span>    var_dump(in_array(apple, $fruits));</span></span></code></pre></div><blockquote><h4 id="数组排序" tabindex="-1">数组排序 <a class="header-anchor" href="#数组排序" aria-label="Permalink to &quot;数组排序&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sort() 、 rsort() 对数组进行升序和降序</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  $fruits = array(&quot;lemon&quot;, &quot;orange&quot;, &quot;banana&quot;, &quot;apple&quot;);</span></span>
<span class="line"><span>  sort($fruits);</span></span>
<span class="line"><span>  print_r($fruits);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ksort()、krsort() 对数组按索引进行升序或降序, 并保持索引关系</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  $fruits = array(&quot;l&quot;=&gt;&quot;lemon&quot;, &quot;o&quot;=&gt;&quot;orange&quot;, &quot;b&quot;=&gt;&quot;banana&quot;, &quot;a&quot;=&gt;&quot;apple&quot;);</span></span>
<span class="line"><span>  ksort($fruits);</span></span>
<span class="line"><span>  print_r($fruits);</span></span></code></pre></div><blockquote><h4 id="字符串与数组转换" tabindex="-1">字符串与数组转换 <a class="header-anchor" href="#字符串与数组转换" aria-label="Permalink to &quot;字符串与数组转换&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>explode  explode() 函数把字符串打散为数组。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>  $str = &quot;1,2,3,4,5,6&quot;;</span></span>
<span class="line"><span>  $arr = explode(&#39;,&#39;, $str);</span></span>
<span class="line"><span>  print_r($arr);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>implode  implode() 函数将数组元素连接成字符</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>    $arr = array(&#39;a&#39;,&#39;b&#39;, &#39;c&#39;, &#39;d&#39;);</span></span>
<span class="line"><span>    $str = implode(&#39;|&#39;, $arr );</span></span>
<span class="line"><span>    echo $str;</span></span></code></pre></div><h4 id="array-pop" tabindex="-1"><code>array_pop</code> <a class="header-anchor" href="#array-pop" aria-label="Permalink to &quot;\`array_pop\`&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>array_pop() 函数删除数组中的最后一个元素。</span></span></code></pre></div><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">array</td><td style="text-align:left;">必需。规定输入的数组参数。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>例：</span></span>
<span class="line"><span>    $stack = array(&quot;orange&quot;, &quot;banana&quot;, &quot;apple&quot;, &quot;raspberry&quot;);</span></span>
<span class="line"><span>    $fruit = array_pop($stack);</span></span>
<span class="line"><span>    print_r($stack);</span></span></code></pre></div><h4 id="array-push" tabindex="-1"><code>array_push</code> <a class="header-anchor" href="#array-push" aria-label="Permalink to &quot;\`array_push\`&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>array_push() 函数向数组尾部插入一个或多个元素。</span></span>
<span class="line"><span>提示：您可以添加一个或者多个值。</span></span>
<span class="line"><span>注释：即使您的数组有字符串键名，您所添加的元素将是数字键名</span></span>
<span class="line"><span>注释：如果用 array_push() 来给数组增加一个单元，还不如用 $array[] =，因为这样没有调用函数的额外负担。</span></span>
<span class="line"><span>注释：如果第一个参数不是数组，array_push() 将发出一条警告。这和 $var[] 的行为不同，后者会新建一个数组。</span></span></code></pre></div><table><thead><tr><th style="text-align:left;"><strong>参数</strong></th><th style="text-align:left;"><strong>描述</strong></th></tr></thead><tbody><tr><td style="text-align:left;">array</td><td style="text-align:left;">必需。规定一个数组。</td></tr><tr><td style="text-align:left;">value1</td><td style="text-align:left;">必需。规定要添加的值。</td></tr><tr><td style="text-align:left;">value2</td><td style="text-align:left;">可选。规定要添加的值。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>例：</span></span>
<span class="line"><span>    $stack = array(&quot;orange&quot;, &quot;banana&quot;);</span></span>
<span class="line"><span>    array_push($stack, &quot;apple&quot;, &quot;raspberry&quot;);</span></span>
<span class="line"><span>    print_r($stack);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $a=array(&quot;a&quot;=&gt;&quot;Dog&quot;,&quot;b&quot;=&gt;&quot;Cat&quot;);</span></span>
<span class="line"><span>    array_push($a,&quot;Horse&quot;,&quot;Bird&quot;);</span></span>
<span class="line"><span>    print_r($a);</span></span></code></pre></div><h5 id="array-rand" tabindex="-1"><code>array_rand</code> <a class="header-anchor" href="#array-rand" aria-label="Permalink to &quot;\`array_rand\`&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>array_rand() 函数从数组中随机选出一个或多个元素，并返回。</span></span>
<span class="line"><span>第二个参数用来确定要选出几个元素。如果选出的元素不止一个，则返回包含随机键名的数组，否则返回该元素的键名。</span></span>
<span class="line"><span>注释：自 PHP 4.2.0 起，不再需要用 srand() 或 mt_srand() 函数给随机数发生器播种，现已被自动完成。</span></span></code></pre></div><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;"><strong>描述</strong></th></tr></thead><tbody><tr><td style="text-align:left;">array</td><td style="text-align:left;">必需。规定输入的数组参数</td></tr><tr><td style="text-align:left;">number</td><td style="text-align:left;">可选。默认是 1。规定返回多少个随机的元素</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>例：</span></span>
<span class="line"><span>    $a = array(&quot;a&quot; =&gt; &quot;Dog&quot;, &quot;b&quot; =&gt; &quot;Cat&quot;, &quot;c&quot; =&gt; &quot;Horse&quot;);</span></span>
<span class="line"><span>    print_r(array_rand($a, 2));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $array = array(</span></span>
<span class="line"><span>        &#39;fruit1&#39; =&gt; &#39;apple&#39;,</span></span>
<span class="line"><span>        &#39;fruit2&#39; =&gt; &#39;orange&#39;,</span></span>
<span class="line"><span>        &#39;fruit3&#39; =&gt; &#39;grape&#39;,</span></span>
<span class="line"><span>        &#39;fruit4&#39; =&gt; &#39;apple&#39;,</span></span>
<span class="line"><span>        &#39;fruit5&#39; =&gt; &#39;apple&#39;</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    print_r(array_rand($array, 1));</span></span></code></pre></div><h5 id="array-sum" tabindex="-1"><code>array_sum</code> <a class="header-anchor" href="#array-sum" aria-label="Permalink to &quot;\`array_sum\`&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>array_sum() 函数返回数组中所有值的总和。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果所有值多是整数，则返回一个整数值。如果其中有一个或多个值是浮点数，则返回浮点数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PHP 4.2.1 之前的版本修改了传入的数组本身，将其中的字符串值转换成数值（大多数情况下都转换成了零，根据具体制而定）。</span></span></code></pre></div><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">array</td><td style="text-align:left;">必需。规定输入的数组。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>例：</span></span>
<span class="line"><span>    $a=array(0=&gt;&quot;5&quot;,1=&gt;&quot;15&quot;,2=&gt;&quot;25&quot;);</span></span>
<span class="line"><span>    echo array_sum($a);</span></span></code></pre></div><h2 id="php字符串" tabindex="-1">PHP字符串 <a class="header-anchor" href="#php字符串" aria-label="Permalink to &quot;PHP字符串&quot;">​</a></h2><blockquote><h4 id="echo" tabindex="-1">echo <a class="header-anchor" href="#echo" aria-label="Permalink to &quot;echo&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>echo() 函数输出一个或多个字符串。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>echo(strings)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例</span></span>
<span class="line"><span>echo &#39;没有返回值&#39;;</span></span>
<span class="line"><span>echo &#39;可以输出多个值，使用逗号分隔;&#39;;</span></span></code></pre></div><blockquote><h4 id="print" tabindex="-1">print <a class="header-anchor" href="#print" aria-label="Permalink to &quot;print&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>print() 函数输出一个或多个字符串。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>print(strings)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例</span></span>
<span class="line"><span>print (&quot;hello $val&quot;);</span></span>
<span class="line"><span>print &quot;hello world&quot;;</span></span></code></pre></div><blockquote><h4 id="printf" tabindex="-1">printf <a class="header-anchor" href="#printf" aria-label="Permalink to &quot;printf&quot;">​</a></h4></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">format</td><td style="text-align:left;">必需。规定字符串以及如何格式化其中的变量。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>printf() 函数输出格式化的字符串。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>printf(format,arg1,arg2,arg++)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>说明</span></span>
<span class="line"><span>%% - 返回百分比符号</span></span>
<span class="line"><span>%b - 二进制数</span></span>
<span class="line"><span>%c - 依照 ASCII 值的字符</span></span>
<span class="line"><span>%d - 带符号十进制数</span></span>
<span class="line"><span>%e - 可续计数法（比如 1.5e+3）</span></span>
<span class="line"><span>%u - 无符号十进制数</span></span>
<span class="line"><span>%f - 浮点数(local settings aware)</span></span>
<span class="line"><span>%F - 浮点数(not local settings aware)</span></span>
<span class="line"><span>%o - 八进制数</span></span>
<span class="line"><span>%s - 字符串</span></span>
<span class="line"><span>%x - 十六进制数（小写字母）</span></span>
<span class="line"><span>%X - 十六进制数（大写字母）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例</span></span>
<span class="line"><span>$str = &quot;123 test&quot;;</span></span>
<span class="line"><span>printf(&quot;整数：%d&quot;, $str);</span></span>
<span class="line"><span>printf(&quot;浮点数：%.2f&quot;, $str);</span></span>
<span class="line"><span>printf(&quot;字符串：%s&quot;, $str);</span></span></code></pre></div><blockquote><h4 id="var-dump" tabindex="-1">var_dump <a class="header-anchor" href="#var-dump" aria-label="Permalink to &quot;var_dump&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var_dump() 函数用于输出变量的相关信息。显示关于一个或多个表达式的结构信息，包括表达式的类型与值。数组将递归展开值，通过缩进显示其结构。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $a = array(1, 2, array(&quot;a&quot;, &quot;b&quot;, &quot;c&quot;));</span></span>
<span class="line"><span>    var_dump($a);</span></span></code></pre></div><blockquote><h4 id="htmlspecialchars" tabindex="-1">htmlspecialchars <a class="header-anchor" href="#htmlspecialchars" aria-label="Permalink to &quot;htmlspecialchars&quot;">​</a></h4></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">string</td><td style="text-align:left;">必需。规定要解码的字符串。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>htmlspecialchars() 函数把一些预定义的字符转换为 HTML 实体。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>预定义的字符是：</span></span>
<span class="line"><span>&amp; （和号） 成为 &amp;</span></span>
<span class="line"><span>&quot; （双引号） 成为 &quot;</span></span>
<span class="line"><span>’ （单引号） 成为 ’</span></span>
<span class="line"><span>&lt; （小于） 成为 &lt;</span></span>
<span class="line"><span>&gt; （大于） 成为 &gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$str = &#39;&lt;div class=&quot;test&quot;&gt;测试&lt;/div&gt;&#39;;</span></span>
<span class="line"><span>echo $str;// 输出的结果为测试</span></span>
<span class="line"><span>echo htmlspecialchars($str);// 输出的结果为&lt;div class=&quot;test&quot;&gt;测试&lt;/div&gt;</span></span></code></pre></div><blockquote><h4 id="ltrim-rtrim-trim" tabindex="-1">ltrim rtrim trim <a class="header-anchor" href="#ltrim-rtrim-trim" aria-label="Permalink to &quot;ltrim rtrim trim&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>ltrim() 函数从字符串左侧删除空格或其他预定义字符。</span></span>
<span class="line"><span>rtrim() 函数从字符串右侧删除空格或其他预定义字符。</span></span>
<span class="line"><span>trim() 函数从字符串的两端删除空白字符和其他预定义字符。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>ltrim(string,charlist)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例</span></span>
<span class="line"><span>$str = &quot;       Hello World!&quot;;</span></span>
<span class="line"><span>echo ltrim($str);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$str = &quot;Hello World!    &quot;;、</span></span>
<span class="line"><span>echo rtrim($str);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$str = &quot; Hello World! &quot;;</span></span>
<span class="line"><span>echo trim($str);</span></span></code></pre></div><blockquote><h4 id="md5" tabindex="-1">md5 <a class="header-anchor" href="#md5" aria-label="Permalink to &quot;md5&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>md5() 函数计算字符串的 MD5 散列。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>md5() 函数使用 RSA 数据安全，包括 MD5 报文摘译算法。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果成功，则返回所计算的 MD5 散列，如果失败，则返回 false。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>md5(_string_,_raw_)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例</span></span>
<span class="line"><span>$str = &quot;Hello&quot;;</span></span>
<span class="line"><span>echo md5($str);</span></span></code></pre></div><blockquote><h4 id="sha1" tabindex="-1">sha1 <a class="header-anchor" href="#sha1" aria-label="Permalink to &quot;sha1&quot;">​</a></h4></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>sha1() 函数计算字符串的 SHA-1 散列。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sha1() 函数使用美国 Secure Hash 算法 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果成功，则返回所计算的 SHA-1 散列，如果失败，则返回 false。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>sha1(_string_,_raw_)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例</span></span>
<span class="line"><span>$str = &#39;Hello&#39;;</span></span>
<span class="line"><span>echo sha1($str);</span></span></code></pre></div><blockquote><h4 id="str-replace-str-ireplace" tabindex="-1">str_replace str_ireplace <a class="header-anchor" href="#str-replace-str-ireplace" aria-label="Permalink to &quot;str_replace str_ireplace&quot;">​</a></h4></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">find</td><td style="text-align:left;">必需。规定要查找的值。</td></tr><tr><td style="text-align:left;">replace</td><td style="text-align:left;">必需。规定替换 find 中的值的值。</td></tr><tr><td style="text-align:left;">string</td><td style="text-align:left;">必需。规定被搜索的字符串。</td></tr><tr><td style="text-align:left;">count</td><td style="text-align:left;">可选。一个变量，对替换数进行计数。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>str_replace() 函数使用一个字符串替换字符串中的另一些字符。</span></span>
<span class="line"><span>str_ireplace() 函数使用一个字符串替换字符串中的另一些字符。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>str_replace(find,replace,string,count)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例子</span></span>
<span class="line"><span>echo str_replace(&quot;world&quot;,&quot;John&quot;,&quot;Hello world!&quot;);</span></span></code></pre></div><blockquote><h4 id="strpos-stripos" tabindex="-1">strpos stripos <a class="header-anchor" href="#strpos-stripos" aria-label="Permalink to &quot;strpos stripos&quot;">​</a></h4></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">string</td><td style="text-align:left;">必需。规定被搜索的字符串。</td></tr><tr><td style="text-align:left;">find</td><td style="text-align:left;">必需。规定要查找的字符。</td></tr><tr><td style="text-align:left;">start</td><td style="text-align:left;">可选。规定开始搜索的位置。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>stripos() 函数返回字符串在另一个字符串中第一次出现的位置。</span></span>
<span class="line"><span>如果没有找到该字符串，则返回 false。</span></span>
<span class="line"><span>strpos() 查找字符串在另一字符串中第一次出现的位置（区分大小写）</span></span>
<span class="line"><span>strripos()查找字符串在另一字符串中最后一次出现的位置（不区分大小写）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>stripos(string,find,start)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>提示和注释</span></span>
<span class="line"><span>注释：该函数对大小写不敏感。如需进行对大小写敏感的搜索，请使用 strpos() 函数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例</span></span>
<span class="line"><span>echo stripos(&quot;Hello world!&quot;,&quot;WO&quot;);</span></span></code></pre></div><blockquote><h4 id="str-shuffle" tabindex="-1">str_shuffle <a class="header-anchor" href="#str-shuffle" aria-label="Permalink to &quot;str_shuffle&quot;">​</a></h4></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">string</td><td style="text-align:left;">必需。规定要打乱的字符串。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>str_shuffle() 函数随机地打乱字符串中的所有字符。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>str_shuffle(string)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例</span></span>
<span class="line"><span>echo str_shuffle(&quot;Hello World&quot;);</span></span></code></pre></div><blockquote><h4 id="strip-tags" tabindex="-1">strip_tags <a class="header-anchor" href="#strip-tags" aria-label="Permalink to &quot;strip_tags&quot;">​</a></h4></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">string</td><td style="text-align:left;">必需。规定要检查的字符串。</td></tr><tr><td style="text-align:left;">allow</td><td style="text-align:left;">可选。规定允许的标签。这些标签不会被删除。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>strip_tags() 函数剥去 HTML、XML 以及 PHP 的标签。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>strip_tags(string,allow)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例</span></span>
<span class="line"><span>echo strip_tags(&quot;Hello &lt;b&gt;world!&lt;/b&gt;&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例</span></span>
<span class="line"><span>echo strip_tags(&quot;Hello &lt;b&gt;&lt;i&gt;world!&lt;/i&gt;&lt;/b&gt;&quot;,&quot;&lt;b&gt;&quot;);</span></span></code></pre></div><blockquote><h4 id="strtolower" tabindex="-1">strtolower <a class="header-anchor" href="#strtolower" aria-label="Permalink to &quot;strtolower&quot;">​</a></h4></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">string</td><td style="text-align:left;">必需。规定要转换的字符串。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>strtolower() 函数把字符串转换为小写。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>strtolower(string)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例</span></span>
<span class="line"><span>echo strtolower(&quot;Hello WORLD!&quot;);</span></span></code></pre></div><blockquote><h4 id="strtoupper" tabindex="-1">strtoupper <a class="header-anchor" href="#strtoupper" aria-label="Permalink to &quot;strtoupper&quot;">​</a></h4></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">string</td><td style="text-align:left;">必需。规定要转换的字符串。</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>strtoupper() 函数把字符串转换为大写。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>strtoupper(string)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例</span></span>
<span class="line"><span>echo strtoupper(&quot;Hello WORLD!&quot;);</span></span></code></pre></div><blockquote><h4 id="substr" tabindex="-1">substr <a class="header-anchor" href="#substr" aria-label="Permalink to &quot;substr&quot;">​</a></h4></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">string</td><td style="text-align:left;">必需。规定要返回其中一部分的字符串。</td></tr><tr><td style="text-align:left;">start</td><td style="text-align:left;">必需。规定在字符串的何处开始。 正数 - 在字符串的指定位置开始 负数 - 在从字符串结尾的指定位置开始 0 - 在字符串中的第一个字符处开始</td></tr><tr><td style="text-align:left;">length</td><td style="text-align:left;">可选。规定要返回的字符串长度。默认是直到字符串的结尾。 正数 - 从 start 参数所在的位置返回 负数 - 从字符串末端返回</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>定义和用法</span></span>
<span class="line"><span>substr() 函数返回字符串的一部分。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法</span></span>
<span class="line"><span>substr(_string_,_start_,_length_)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo substr(&quot;Hello world&quot;,10).&quot;&lt;br&gt;&quot;;</span></span>
<span class="line"><span>echo substr(&quot;Hello world&quot;,1).&quot;&lt;br&gt;&quot;;</span></span>
<span class="line"><span>echo substr(&quot;Hello world&quot;,3).&quot;&lt;br&gt;&quot;;</span></span>
<span class="line"><span>echo substr(&quot;Hello world&quot;,7).&quot;&lt;br&gt;&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo substr(&quot;Hello world&quot;,-1).&quot;&lt;br&gt;&quot;;</span></span>
<span class="line"><span>echo substr(&quot;Hello world&quot;,-10).&quot;&lt;br&gt;&quot;;</span></span>
<span class="line"><span>echo substr(&quot;Hello world&quot;,-8).&quot;&lt;br&gt;&quot;;</span></span>
<span class="line"><span>echo substr(&quot;Hello world&quot;,-4).&quot;&lt;br&gt;&quot;;</span></span></code></pre></div><h2 id="php面向对象" tabindex="-1">PHP面向对象 <a class="header-anchor" href="#php面向对象" aria-label="Permalink to &quot;PHP面向对象&quot;">​</a></h2><h2 id="类与对象" tabindex="-1">类与对象 <a class="header-anchor" href="#类与对象" aria-label="Permalink to &quot;类与对象&quot;">​</a></h2><h2 id="过程式编程" tabindex="-1">过程式编程 <a class="header-anchor" href="#过程式编程" aria-label="Permalink to &quot;过程式编程&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>初学编程的方法通常由顺序结构开始。</span></span>
<span class="line"><span>这是步骤式的过程性编程,过程式编程方法下的制成品,是一个“大胖子”,为什么呢?</span></span>
<span class="line"><span>假设拆开这个制成品，里面是无数纠缠不清的程序和数据(变量等),数据是给各程序共享的。</span></span>
<span class="line"><span>即任何程序都可以读取或修改它,一个程序接着另一个程序来执行。</span></span>
<span class="line"><span>假设要修改这个制成品,就有一种触发牵动全身的感觉,例如改了这个程序,可能会影响其他的程序。</span></span></code></pre></div><h2 id="面向对象编程" tabindex="-1">面向对象编程 <a class="header-anchor" href="#面向对象编程" aria-label="Permalink to &quot;面向对象编程&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>OOP(Object-Oriented Programming)面向对象编程</span></span>
<span class="line"><span>面向对象程序设计的诞生为开发策略带来的极大的改变,</span></span>
<span class="line"><span>使编程的注意力重新从应用程序的逻辑回到其数据上来。</span></span>
<span class="line"><span>换句话说,OOP将焦点从过程式编程转向最终建模的真实体。</span></span>
<span class="line"><span>这使得应用程序更接近我们周围的现实世界。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>OOP达到了软件工程的三个目标:重用性、灵活性和扩展性。</span></span>
<span class="line"><span>采用面向对象方法可以使系统各部分各司其职、各尽所能;</span></span>
<span class="line"><span>使其编程的代码更简洁、更易于维护,并且具有更强的可重用性</span></span></code></pre></div><h2 id="类" tabindex="-1">类 <a class="header-anchor" href="#类" aria-label="Permalink to &quot;类&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>日常环境由无数实体组成:植物,人群,交通工具,食物... 每个实体都由一组性质和行为来定义。</span></span>
<span class="line"><span>例如: 男人可以定义有:身高,体重,是否帅,肤色等性质,并且定义有能赚钱,能下厨,能开车等行为。</span></span>
<span class="line"><span>在OOP术语中,实体的性质和行为的具体定义称为类</span></span></code></pre></div><h2 id="对象" tabindex="-1">对象 <a class="header-anchor" href="#对象" aria-label="Permalink to &quot;对象&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>通过类创建出来的实体称为对象。</span></span>
<span class="line"><span>对象是系统中用来描述客观事物的一个实体。</span></span>
<span class="line"><span>它是构成系统的一个基本单位,数据与代码都被捆绑在一个实体中。</span></span>
<span class="line"><span>一个对象由一组属性和对这组属性进行操作的一组行为组成。</span></span>
<span class="line"><span>从更抽象的角度来说,对象是问题域或实现域中某些事物的一个抽象.</span></span>
<span class="line"><span>它反映该事物在系统中需要保存的信息和发挥的作用.</span></span>
<span class="line"><span>它是一组属性和有权对这些属性进行操作的一组行为的封装体。</span></span>
<span class="line"><span>客观世界是由对象和对象之间的联系组成的。</span></span></code></pre></div><h2 id="类和对象的关系" tabindex="-1">类和对象的关系 <a class="header-anchor" href="#类和对象的关系" aria-label="Permalink to &quot;类和对象的关系&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>类与对象的关系就如模具和铸件的关系,类的实例化结果就是对象,对象的抽象就是类.</span></span>
<span class="line"><span>类描述了一组有相同特性(属性)和相同行为(方法)的对象</span></span></code></pre></div><h2 id="php的面向对象" tabindex="-1">PHP的面向对象 <a class="header-anchor" href="#php的面向对象" aria-label="Permalink to &quot;PHP的面向对象&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PHP4开始提供了面向对象功能,但存在许多不足。</span></span>
<span class="line"><span>从PHP4到PHP5是一次全新革新,PHP5已经完全支持面向对象,对PHP面向对象功能大幅改进和提高。</span></span></code></pre></div><h2 id="定义类" tabindex="-1">定义类 <a class="header-anchor" href="#定义类" aria-label="Permalink to &quot;定义类&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span>Class test {</span></span>
<span class="line"><span>    public $name = &quot;test&quot;;//声明属性，并且赋初值</span></span>
<span class="line"><span>    public $age = &quot;22&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public function say(){//方法</span></span>
<span class="line"><span>        echo &#39;你好！&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><h2 id="创建对象-实例化" tabindex="-1">创建对象(实例化) <a class="header-anchor" href="#创建对象-实例化" aria-label="Permalink to &quot;创建对象(实例化)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>创建对象使用 new 关键字</span></span>
<span class="line"><span>$test = new test();</span></span></code></pre></div><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>属性用于描述类某个层面的性质,它与一般的PHP变量非常相似。</span></span>
<span class="line"><span>因为PHP是弱类型的语类,属性甚至不需要声明;</span></span>
<span class="line"><span>但不建议这么做。相反常见的做法是在类开始处声明属性,可以为属性赋初值。</span></span>
<span class="line"><span>class test {</span></span>
<span class="line"><span>     public $name;</span></span>
<span class="line"><span>     public $age;</span></span>
<span class="line"><span> }</span></span></code></pre></div><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>方法与函数非常相似,只不过方法用来定义特定类的行为。</span></span>
<span class="line"><span>与函数一样,方法可以接受输入参数,可以向调用者返回一个值.</span></span>
<span class="line"><span>public function say(){</span></span>
<span class="line"><span>    $str = &#39;hello&#39;;</span></span>
<span class="line"><span>    return $str;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="访问对象中的成员" tabindex="-1">访问对象中的成员 <a class="header-anchor" href="#访问对象中的成员" aria-label="Permalink to &quot;访问对象中的成员&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PHP对象中的成员有两种:一种是成员属性,一种是成员方法;</span></span>
<span class="line"><span>怎么去使用对象的成员呢?</span></span>
<span class="line"><span>要想访问对象中的成员就要使用一个特殊的操作符“-&gt;”来完成对象成员的访问</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$test = new test;//实例化test类</span></span>
<span class="line"><span>echo $test-&gt;name;//访问对象属性</span></span>
<span class="line"><span>echo $test-&gt;say();//访问对象方法</span></span></code></pre></div><h2 id="this" tabindex="-1">this <a class="header-anchor" href="#this" aria-label="Permalink to &quot;this&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>访问对象中的成员,是通过“对象-&gt;成员”的方式访问的.</span></span>
<span class="line"><span>这是在对象的外部去访问对象中成员的形式.</span></span>
<span class="line"><span>那么如果我想在对象的内部,让对象里的方法访问本对象的属性.</span></span>
<span class="line"><span>或者是对象中的方法去调用本对象的其它方法这时我们怎么办?</span></span>
<span class="line"><span>因为对象里面的所有的成员都要用对象来调用,包括对象的内部成员之间的调用,</span></span>
<span class="line"><span>所以在PHP里面给我们提供了一个本对象的引用$this;</span></span>
<span class="line"><span>class test {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   public $name;</span></span>
<span class="line"><span>   public $age;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   function say(){</span></span>
<span class="line"><span>       echo $this-&gt;name;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="const常量" tabindex="-1">const常量 <a class="header-anchor" href="#const常量" aria-label="Permalink to &quot;const常量&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>可以在类中定义常量,即不会在类中改变的值。</span></span>
<span class="line"><span>对于从该类实例化的任何对象来说,常量值在这些对象的整个生命周期中都保持不变。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>类常量如下创建:const NAME = ‘value’;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>假设定义一个与数学有关的类,其包括一些定义数学函数的方法以及常量</span></span>
<span class="line"><span>   class math_function {</span></span>
<span class="line"><span>       const PI = 3.1415926;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>访问常量</span></span>
<span class="line"><span> echo self::PI; //类内部访问</span></span>
<span class="line"><span> echo math_function::PI; //类外部访问</span></span></code></pre></div><h2 id="static静态属性与静态方法" tabindex="-1">static静态属性与静态方法 <a class="header-anchor" href="#static静态属性与静态方法" aria-label="Permalink to &quot;static静态属性与静态方法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>使用static 关键字可以用来标识成员属性,也可以用来标识成员方法.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>static $test_static = &#39;value&#39;; //属性</span></span>
<span class="line"><span></span></span>
<span class="line"><span>static function test(){   //方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>声明类属性或方法为静态,就可以不实例化类而直接访问         </span></span>
<span class="line"><span>静态方法不需要通过对象即可调用,所以伪变量 $this 在静态方法中不可用。         </span></span>
<span class="line"><span>静态属性不可以由对象通过 -&gt; 操作符来访问。         </span></span>
<span class="line"><span></span></span>
<span class="line"><span> class Test{</span></span>
<span class="line"><span>       static $a=&#39;static&#39;;</span></span>
<span class="line"><span>       static function m(){</span></span>
<span class="line"><span>         return self::$a; //类内部访问</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>echo Test::$a; //外部访问属性         </span></span>
<span class="line"><span>echo Test::m(); //外部访问方法  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>静态的成员属于类所有,所以我们在静态方法里,不能使用$this来引用静态成员.</span></span>
<span class="line"><span>建议使用self关键字来调用。</span></span></code></pre></div><h2 id="访问修饰符" tabindex="-1">访问修饰符 <a class="header-anchor" href="#访问修饰符" aria-label="Permalink to &quot;访问修饰符&quot;">​</a></h2><h3 id="什么是访问修饰符" tabindex="-1">什么是访问修饰符 <a class="header-anchor" href="#什么是访问修饰符" aria-label="Permalink to &quot;什么是访问修饰符&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>访问修饰符允许开发人员对类成员的访问进行限制,这是PHP5的新特性。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public 公共修饰符</span></span>
<span class="line"><span>     类的成员将没有访问限制,所有的外部成员都可以访问(读和写)这个类成员。</span></span>
<span class="line"><span>     在属性或方法前面加上关键字public,或不加任何关键字,都可以声明一个公共属性或方法。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private 私有修饰符</span></span>
<span class="line"><span>     被定义为private的成员,对于同一个类的所有成员是可见的,即没有访问限制;</span></span>
<span class="line"><span>     但对于该类的外部代码是不允许改变甚至读操作,对于该类的子类也不能访问。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>protected 保护修饰符</span></span>
<span class="line"><span>     被修饰为protected的成员不能被该类的外部代码访问。</span></span>
<span class="line"><span>     但是对于该类的直接子类有访问权限,可以进行属性、方法的读及写操作。</span></span>
<span class="line"><span>     被子类继承的protected成员,在子类外部同样不能被访问</span></span></code></pre></div><h4 id="public" tabindex="-1">public <a class="header-anchor" href="#public" aria-label="Permalink to &quot;public&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class demo</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public $name = &#39;alan scott&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public function test()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        echo $this-&gt;name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$demo = new demo();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo $demo-&gt;name;</span></span>
<span class="line"><span>echo &quot;&lt;br /&gt;&quot;;</span></span>
<span class="line"><span>echo $demo-&gt;test();</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><h4 id="private" tabindex="-1">private <a class="header-anchor" href="#private" aria-label="Permalink to &quot;private&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class demo</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    private $name = &#39;alan scott&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public function test()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return $this-&gt;name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class test extends demo</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public function test2()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return $this-&gt;name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$demo = new demo();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo $demo-&gt;test();</span></span>
<span class="line"><span>echo &quot;&lt;br /&gt;&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$test = new test();</span></span>
<span class="line"><span>echo $test-&gt;test2();//为空</span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><h4 id="protected" tabindex="-1">protected <a class="header-anchor" href="#protected" aria-label="Permalink to &quot;protected&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span>class demo</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public $name = &#39;alan scott&#39;;</span></span>
<span class="line"><span>    protected $age = &#39;1000&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public function test()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return $this-&gt;age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class test extends demo</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public function test2()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return $this-&gt;age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$demo = new demo();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// echo $demo-&gt;age;//会报错</span></span>
<span class="line"><span>echo &quot;&lt;br /&gt;&quot;;</span></span>
<span class="line"><span>// echo $demo-&gt;test();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$test = new test();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// echo $test-&gt;age;//会报错</span></span>
<span class="line"><span>echo &quot;&lt;br /&gt;&quot;;</span></span>
<span class="line"><span>echo $test-&gt;test2();</span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><h1 id="魔术方法" tabindex="-1">魔术方法 <a class="header-anchor" href="#魔术方法" aria-label="Permalink to &quot;魔术方法&quot;">​</a></h1><h4 id="什么是魔术方法" tabindex="-1">什么是魔术方法 <a class="header-anchor" href="#什么是魔术方法" aria-label="Permalink to &quot;什么是魔术方法&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PHP 将所有以 __（两个下划线）开头的类方法保留为魔术方法。</span></span>
<span class="line"><span>所以在定义类方法时，除了上述魔术方法，建议不要以 __ 为前缀。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所有的魔术方法 必须 声明为 public。</span></span></code></pre></div><h4 id="构造函数" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>构造函数</span></span>
<span class="line"><span>通常我们希望在对象实例化时可以初始化某些属性,或执行某些方法</span></span>
<span class="line"><span>当然,可以在对象实例化之后再这么做,不过如果能在实例化的时候自动完成这些操作会更方便</span></span>
<span class="line"><span>oop就有这样一种机制,称为构造函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>声明构造函数格式:</span></span>
<span class="line"><span>    class BaseClass</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        function __construct()</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            echo &quot;In BaseClass constructor\\n&quot;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $obj = new BaseClass();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var_dump($obj);</span></span></code></pre></div><h4 id="析构函数" tabindex="-1">析构函数 <a class="header-anchor" href="#析构函数" aria-label="Permalink to &quot;析构函数&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>析构函数</span></span>
<span class="line"><span>在PHP4中没有析构函数,php5中引入了析构函数。</span></span>
<span class="line"><span>析构函数允许在销毁一个类之前执行的一些操作或完成一些功能,</span></span>
<span class="line"><span>这些操作或功能通常在所有对该类的引用都被重置或超出作用域时自动发生。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    class BaseClass</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        function __destruct()</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            echo &#39;class instance destroyed&#39;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $obj = new BaseClass();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var_dump($obj);</span></span></code></pre></div><h4 id="魔术方法-1" tabindex="-1">魔术方法 <a class="header-anchor" href="#魔术方法-1" aria-label="Permalink to &quot;魔术方法&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>魔术方法是PHP面向对象中特有的特性。</span></span>
<span class="line"><span>它们在特定的情况下被触发，都是以双下划线开头，你可以把它们理解为钩子。</span></span>
<span class="line"><span>利用魔术方法可以轻松实现PHP面向对象中重载。</span></span>
<span class="line"><span>魔术方法很多还是成对出现的，以下列出目前PHP中所有的模式方法。</span></span></code></pre></div><h4 id="set" tabindex="-1">__set() <a class="header-anchor" href="#set" aria-label="Permalink to &quot;__set()&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span>Class test{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>        当给不可访问或不存在属性赋值时被调用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    **/</span></span>
<span class="line"><span>    public  function __set($name,$val){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        echo &quot;自动执行了test类中的__set方法,当前属性为:{$name},值为:{$val}&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$test = new test();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$test-&gt;name = &quot;小狗&quot;;</span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><h4 id="get" tabindex="-1">__get() <a class="header-anchor" href="#get" aria-label="Permalink to &quot;__get()&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span>Class test{</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>        读取不可访问或不存在属性时被调用</span></span>
<span class="line"><span>    **/</span></span>
<span class="line"><span>   public  function __get($name){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        echo &quot;自动执行了test类中的__get方法,当前属性为:{$name}&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$test = new test();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$name = $test-&gt;age;</span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><h2 id="封装-继承-多态-对象链" tabindex="-1">封装-继承-多态-对象链 <a class="header-anchor" href="#封装-继承-多态-对象链" aria-label="Permalink to &quot;封装-继承-多态-对象链&quot;">​</a></h2><h3 id="oop三个基本概念" tabindex="-1">OOP三个基本概念 <a class="header-anchor" href="#oop三个基本概念" aria-label="Permalink to &quot;OOP三个基本概念&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>OOP三个基本概念:封装、继承、多态</span></span></code></pre></div><h3 id="封装" tabindex="-1">封装 <a class="header-anchor" href="#封装" aria-label="Permalink to &quot;封装&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>封装就是把对象的属性和行为结合成一个独立的相同单位,并尽可能隐蔽对象的内部细节信息隐蔽.</span></span>
<span class="line"><span>即尽可能隐蔽对象的内部细节,对外形成一道屏障.</span></span>
<span class="line"><span>只保留有限的对外接口使之与外部发生联系。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>封装的原则在软件上的反映是:</span></span>
<span class="line"><span>要求使对象以外的部分不能随意存取对象的内部数据(属性).</span></span>
<span class="line"><span>从而有效的避免了外部错误对它的“交叉感染”,使软件错误能够局部化,大大减少查错和排错的难度。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>类的封装性带来的优点:隐藏类的实现细节,让使用者只能通过事先定义好的方法来访问数据.</span></span>
<span class="line"><span>可以方便的加入逻辑控制,进行数据检查,限制对属性的不合理操作。便于修改增强代码的可维护性。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;?php</span></span>
<span class="line"><span>class test</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    private $name;</span></span>
<span class="line"><span>    private $age;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    function get_age()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return $this-&gt;age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    function set_age($age)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        if ($age &lt; 0 || $age &gt; 130) {</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        $this-&gt;age = $age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>$test = new test();</span></span>
<span class="line"><span>$test-&gt;set_age(10);</span></span>
<span class="line"><span>$age = $test-&gt;get_age();</span></span>
<span class="line"><span>var_dump($test);</span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><h3 id="继承" tabindex="-1">继承 <a class="header-anchor" href="#继承" aria-label="Permalink to &quot;继承&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>面向对象开发方法建立在继承概念的基础上,这种策略提高了代码的重用性。       </span></span>
<span class="line"><span>继承是指建立一个新的派生类,从先前定义的类中继承属性和方法.</span></span>
<span class="line"><span>而且可以重新定义或加进新的属性和方法,从而建立类的层次或等级。       </span></span>
<span class="line"><span>说的简单点就是,继承是子类自动共享父类的数据结构和方法的机制,这是类之间的一种关系。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在定义和实现一个类的时候,可以在一个已经存在的类的基础之上来进行,</span></span>
<span class="line"><span>把这个已经存在的类所定义的内容作为自己的内容,并加入若干新的内容。 </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>在PHP中,类继承通过 extends 关键字实现;</span></span>
<span class="line"><span>继承其他类的类称为子类(child class 或 subclass)</span></span>
<span class="line"><span>子类所继承的类称为父类( parent class) 或 基类 (base class)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class test</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    private $x;</span></span>
<span class="line"><span>    private $y;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public function __construct($x=&#39;&#39;,$y=&#39;&#39;)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $this-&gt;x = $x;</span></span>
<span class="line"><span>        $this-&gt;y = $y;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public function add()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return $this-&gt;x + $this-&gt;y;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class demo extends test</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$demo = new demo(&#39;2&#39;,&#39;3&#39;);</span></span>
<span class="line"><span>$add = $demo-&gt;add();</span></span>
<span class="line"><span>var_dump($add)</span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><h3 id="多态" tabindex="-1">多态 <a class="header-anchor" href="#多态" aria-label="Permalink to &quot;多态&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>对象的多态性是指在父类中定义的属性或行为被子类继承之后.</span></span>
<span class="line"><span>可以具有不同的数据类型或表现出不同的行为。</span></span>
<span class="line"><span>这使得同一个属性或行为在父类及其各个子类中具有不同的语义。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;?php</span></span>
<span class="line"><span>class animal{</span></span>
<span class="line"><span>    public function can(){</span></span>
<span class="line"><span>        echo &quot;this function weill be re-write in the children&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class cat extends animal{</span></span>
<span class="line"><span>    public function can(){</span></span>
<span class="line"><span>        echo &quot;I can climb&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class dog extends animal{</span></span>
<span class="line"><span>    public function can(){</span></span>
<span class="line"><span>        echo &quot;I can swim&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function test($obj){</span></span>
<span class="line"><span>    $obj-&gt;can();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>test(new cat());</span></span>
<span class="line"><span>test(new dog());</span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><h3 id="对象链" tabindex="-1">对象链 <a class="header-anchor" href="#对象链" aria-label="Permalink to &quot;对象链&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>实例化一个对象后，连续的调用多个方法成员。使用return this表示本对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法格式:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$obj-&gt;a()-&gt;b()-&gt;c();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;?php</span></span>
<span class="line"><span>class test</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public $name;</span></span>
<span class="line"><span>    public function __construct($name = &#39;&#39;)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $this-&gt;name = $name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public function self()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        echo &quot;我是{$this-&gt;name},&quot;;</span></span>
<span class="line"><span>        return $this;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public function eat()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        echo &quot;正在吃饭，&quot;;</span></span>
<span class="line"><span>        return $this;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public function sleep()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        echo &quot;已经吃饱，正在睡觉，非诚勿扰。&quot;;</span></span>
<span class="line"><span>        return $this;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>$test = new test(&#39;小明&#39;);</span></span>
<span class="line"><span>$test-&gt;self()-&gt;eat()-&gt;sleep();</span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><h2 id="命名空间" tabindex="-1">命名空间 <a class="header-anchor" href="#命名空间" aria-label="Permalink to &quot;命名空间&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>php5.3新加的特性,为了避免产生类名冲突而产生的。</span></span>
<span class="line"><span>1、命名空间采用namespace来声明</span></span>
<span class="line"><span>2、如果在一个文件中包含命名空间,它必须在其它所有代码之前声明命名空间。</span></span>
<span class="line"><span>3、任意合法的PHP代码都可以包含在命名空间中,但只有三种类型的代码受命名空间的影响:类,函数和常量</span></span>
<span class="line"><span>4、不提倡在同一个文件中定义多个命名空间</span></span>
<span class="line"><span>5、use 别名使用</span></span></code></pre></div><h4 id="class-php" tabindex="-1">class.php <a class="header-anchor" href="#class-php" aria-label="Permalink to &quot;class.php&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span>namespace test;//定义了一个名字空间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class test{</span></span>
<span class="line"><span>    public function demo()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        echo &#39;test类里的demo方法&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function time(){</span></span>
<span class="line"><span>  return &quot;demo里面的time函数&quot;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const PHP_OS=&#39;demo里面的常量&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><h4 id="index-php" tabindex="-1">index.php <a class="header-anchor" href="#index-php" aria-label="Permalink to &quot;index.php&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span>header(&#39;Content-Type:text/html;charset=utf-8&#39;);</span></span>
<span class="line"><span>include_once(&#39;class.php&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$test = new test\\test();</span></span>
<span class="line"><span>use test as demo;//使用别名</span></span>
<span class="line"><span>$test = new demo\\test();</span></span>
<span class="line"><span>$test-&gt;demo();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo time();          //非限定名称</span></span>
<span class="line"><span>echo &quot;&lt;br&gt;&quot;;</span></span>
<span class="line"><span>echo test\\time();   //限定名称</span></span>
<span class="line"><span>echo &quot;&lt;br&gt;&quot;;</span></span>
<span class="line"><span>echo \\test\\time();  //完全限定名称</span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div>`,297),t=[e];function i(c,o,h,r,d,u){return n(),a("div",null,t)}const q=s(l,[["render",i]]);export{g as __pageData,q as default};
