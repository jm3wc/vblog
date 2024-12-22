import{_ as s,c as n,o as a,a2 as p}from"./chunks/framework.CSGcjqEA.js";const b=JSON.parse('{"title":"变量let与const","description":"","frontmatter":{},"headers":[],"relativePath":"es6.md","filePath":"es6.md"}'),l={name:"es6.md"},e=p(`<h1 id="变量let与const" tabindex="-1">变量let与const <a class="header-anchor" href="#变量let与const" aria-label="Permalink to &quot;变量let与const&quot;">​</a></h1><h3 id="let" tabindex="-1">let <a class="header-anchor" href="#let" aria-label="Permalink to &quot;let&quot;">​</a></h3><blockquote><p>let 声明的变量，具有如下几个特点：</p></blockquote><ul><li>let 声明的变量具有块作用域的特征。</li><li>在同一个块级作用域，不能重复声明变量。</li><li>let 声明的变量不存在变量提升。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let a = 1</span></span>
<span class="line"><span>console.log(a);//1</span></span>
<span class="line"><span>console.log(b);//Uncaught ReferenceError: b is not defined</span></span>
<span class="line"><span>let b = 2;</span></span>
<span class="line"><span>function foo(){</span></span>
<span class="line"><span>    let a = 1;</span></span>
<span class="line"><span>    let a = 2;//Uncaught SyntaxError: Identifier &#39;a&#39; has already been declared</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="const" tabindex="-1">const <a class="header-anchor" href="#const" aria-label="Permalink to &quot;const&quot;">​</a></h3><blockquote><p>const 声明一个只读变量，声明之后不允许改变</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const a = 1;</span></span>
<span class="line"><span>console.log(a); //1</span></span>
<span class="line"><span>a = 2; //Uncaught TypeError: Assignment to constant variable.</span></span></code></pre></div><blockquote><p>const 声明创建一个值的只读引用。但这并不意味着它所持有的值是不可变的，只是变量标识符不能重新分配。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const obj = {a:1,b:2};</span></span>
<span class="line"><span>console.log(obj.a);//1</span></span>
<span class="line"><span>obj.a = 3;</span></span>
<span class="line"><span>console.log(obj.a);//3</span></span></code></pre></div><blockquote><p>关于 var 和 let 区别的一个例子</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>for (var i = 0; i &lt; 10; i++) {</span></span>
<span class="line"><span>    setTimeout(function(){</span></span>
<span class="line"><span>        console.log(i);</span></span>
<span class="line"><span>    },100)</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>// 该代码运行后，会在控制台打印出10个10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (let i = 0; i &lt; 10; i++) {</span></span>
<span class="line"><span>    setTimeout(function(){</span></span>
<span class="line"><span>        console.log(i);</span></span>
<span class="line"><span>    },100)</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>// 则该代码运行后，就会在控制台打印出0-9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>总结:</span></span>
<span class="line"><span>  var 声明的变量属于函数作用域，let 和 const 声明的变量属于块级作用域；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  var 存在变量提升现象，而 let 和 const 没有此类现象；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  var 变量可以重复声明，而在同一个块级作用域，let 变量不能重新声明，const 变量不能修改。</span></span></code></pre></div><h3 id="symbol" tabindex="-1">Symbol <a class="header-anchor" href="#symbol" aria-label="Permalink to &quot;Symbol&quot;">​</a></h3><ul><li>symbol 是一种基本数据类型</li><li>每个从Symbol()返回的symbol值都是唯一的。一个symbol值能作为对象属性的标识符；</li><li>Symbol()函数会返回symbol类型的值，该类型具有静态属性和静态方法。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let sy = Symbol(&quot;KK&quot;);</span></span>
<span class="line"><span>console.log(sy);             // Symbol(KK)</span></span>
<span class="line"><span>console.log(typeof(sy));     // &quot;symbol&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 相同参数 Symbol() 返回的值不相等</span></span>
<span class="line"><span>let sy1 = Symbol(&quot;kk&quot;); </span></span>
<span class="line"><span>console.log(sy === sy1);       // false</span></span></code></pre></div><ul><li>Symbol 值作为属性名</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  let sy = Symbol(&quot;key1&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 写法1</span></span>
<span class="line"><span>let syObject = {};</span></span>
<span class="line"><span>syObject[sy] = &quot;kk&quot;;</span></span>
<span class="line"><span>console.log(syObject);    // {Symbol(key1): &quot;kk&quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 写法2</span></span>
<span class="line"><span>let syObject = {</span></span>
<span class="line"><span>  [sy]: &quot;kk&quot;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>console.log(syObject);    // {Symbol(key1): &quot;kk&quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 写法3</span></span>
<span class="line"><span>let syObject = {};</span></span>
<span class="line"><span>Object.defineProperty(syObject, sy, {value: &quot;kk&quot;});</span></span>
<span class="line"><span>console.log(syObject);   // {Symbol(key1): &quot;kk&quot;}</span></span></code></pre></div><ul><li>Symbol 作为对象属性名时不能用.运算符，要用方括号</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let sy = Symbol();</span></span>
<span class="line"><span>let syObject = {};</span></span>
<span class="line"><span>syObject[sy] = &quot;kk&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(syObject[sy]);  // &quot;kk&quot;</span></span>
<span class="line"><span>console.log(syObject.sy) // undefined</span></span></code></pre></div><h3 id="set" tabindex="-1">Set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;Set&quot;">​</a></h3><blockquote><p>对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用</p></blockquote><ul><li>集合表示无重复值的有序列表；let set = new Set ();创建一个新的集合；</li><li>set.add();</li><li>set.delete()</li><li>校验某个值是否在set中：set.has()</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  const set1 = new Set([1, 2, 3, 3, 4, 5, 2]);</span></span>
<span class="line"><span>  console.log(set1) // Set(5) {1, 2, 3, 4, 5}</span></span>
<span class="line"><span>  let set2 = [...set1]</span></span>
<span class="line"><span>  console.log(set2) // (5) [1, 2, 3, 4, 5]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  var mySet = new Set();</span></span>
<span class="line"><span>  mySet.add(1);</span></span>
<span class="line"><span>  mySet.add(5).add(&quot;some text&quot;); // 可以链式调用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  console.log(mySet);</span></span>
<span class="line"><span>  // Set [1, 5, &quot;some text&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  mySet.add(5).add(1);</span></span>
<span class="line"><span>  console.log(mySet);</span></span>
<span class="line"><span>  // Set [1, 5, &quot;some text&quot;]  // 重复的值没有被添加进去</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  var mySet = new Set();</span></span>
<span class="line"><span>  mySet.add(&quot;foo&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  console.log(mySet.delete(&quot;bar&quot;)); // 返回 false，不包含 &quot;bar&quot; 这个元素</span></span>
<span class="line"><span>  console.log(mySet.delete(&quot;foo&quot;)); // 返回 true，删除成功</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  console.log(mySet.has(&quot;foo&quot;));    // 返回 false，&quot;foo&quot; 已经成功删除</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  var mySet = new Set();</span></span>
<span class="line"><span>  mySet.add(&#39;foo&#39;);</span></span>
<span class="line"><span>  console.log(mySet.has(&#39;foo&#39;));  // 返回 true</span></span>
<span class="line"><span>  console.log(mySet.has(&#39;bar&#39;));// 返回 false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  var set1 = new Set();</span></span>
<span class="line"><span>  var obj1 = {&#39;key1&#39;: 1};</span></span>
<span class="line"><span>  set1.add(obj1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  console.log(set1.has(obj1));      // 返回 true</span></span>
<span class="line"><span>  console.log(set1.has({&#39;key1&#39;: 1}));  // 会返回 false，因为其是另一个对象的引用</span></span>
<span class="line"><span>  console.log(set1.add({&#39;key1&#39;: 1})); // 现在 set1 中有2条（不同引用的）对象了</span></span></code></pre></div><h3 id="map" tabindex="-1">Map <a class="header-anchor" href="#map" aria-label="Permalink to &quot;Map&quot;">​</a></h3><blockquote><p>Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值。</p></blockquote><ul><li>Map 对象。</li><li>Map 与数组的关系。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let myMap = new Map();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let keyObj = {};</span></span>
<span class="line"><span>let keyFunc = function() {};</span></span>
<span class="line"><span>let keyString = &#39;a string&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 添加键</span></span>
<span class="line"><span>myMap.set(keyString, &quot;和键&#39;a string&#39;关联的值&quot;);</span></span>
<span class="line"><span>myMap.set(keyObj, &quot;和键keyObj关联的值&quot;);</span></span>
<span class="line"><span>myMap.set(keyFunc, &quot;和键keyFunc关联的值&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>myMap.size; // 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 读取值</span></span>
<span class="line"><span>myMap.get(keyString);    // &quot;和键&#39;a string&#39;关联的值&quot;</span></span>
<span class="line"><span>myMap.get(keyObj);       // &quot;和键keyObj关联的值&quot;</span></span>
<span class="line"><span>myMap.get(keyFunc);      // &quot;和键keyFunc关联的值&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(myMap.get(&#39;a string&#39;));  // &quot;和键&#39;a string&#39;关联的值&quot;  </span></span>
<span class="line"><span>// 因为keyString === &#39;a string&#39;</span></span>
<span class="line"><span>console.log(myMap.get({}))          // undefined, 因为keyObj !== {}</span></span>
<span class="line"><span>console.log(myMap.get(function() {})); // undefined, 因为keyFunc !== function () {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>let kvArray = [[&quot;key1&quot;, &quot;value1&quot;], [&quot;key2&quot;, &quot;value2&quot;]];</span></span>
<span class="line"><span>// 使用常规的Map构造函数可以将一个二维键值对数组转换成一个Map对象</span></span>
<span class="line"><span>let myMap = new Map(kvArray);</span></span>
<span class="line"><span>// 使用Array.from函数可以将一个Map对象转换成一个二维键值对数组</span></span>
<span class="line"><span>console.log(Array.from(myMap)); // 输出和kvArray相同的数组</span></span>
<span class="line"><span>// 更简洁的方法来做如上同样的事情，使用展开运算符</span></span>
<span class="line"><span>console.log([...myMap]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Map对象同数组进行合并时，如果有重复的键值，则后面的会覆盖前面的。</span></span>
<span class="line"><span>let first = new Map([</span></span>
<span class="line"><span>  [1, &#39;one&#39;],</span></span>
<span class="line"><span>  [2, &#39;two&#39;],</span></span>
<span class="line"><span>  [3, &#39;three&#39;],</span></span>
<span class="line"><span>]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let second = new Map([</span></span>
<span class="line"><span>  [1, &#39;uno&#39;],</span></span>
<span class="line"><span>  [2, &#39;dos&#39;]</span></span>
<span class="line"><span>]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let merged = new Map([...first, ...second, [1, &#39;eins&#39;]]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(merged); // Map(3) {1 =&gt; &#39;eins&#39;, 2 =&gt; &#39;dos&#39;, 3 =&gt; &#39;three&#39;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(merged.get(1)); //eins</span></span>
<span class="line"><span>console.log(merged.get(2)); // dos</span></span>
<span class="line"><span>console.log(merged.get(3)); // three</span></span></code></pre></div><h2 id="字符串扩展" tabindex="-1">字符串扩展 <a class="header-anchor" href="#字符串扩展" aria-label="Permalink to &quot;字符串扩展&quot;">​</a></h2><ul><li>includes()：返回布尔值，判断是否找到参数字符串。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let string = &quot;apple,banana,orange&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>banana = string.includes(&quot;banana&quot;);     </span></span>
<span class="line"><span>console.log(banana)            // true</span></span></code></pre></div><h2 id="数组扩展" tabindex="-1">数组扩展 <a class="header-anchor" href="#数组扩展" aria-label="Permalink to &quot;数组扩展&quot;">​</a></h2><ul><li>包含includes()</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 参数1：包含的指定值</span></span>
<span class="line"><span>console.log([1, 2, 3].includes(1));    // true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 参数2：可选，搜索的起始索引，默认为0</span></span>
<span class="line"><span>console.log([1, 2, 3].includes(1, 2)); // false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// NaN 的包含判断</span></span>
<span class="line"><span>console.log([1, NaN, 3].includes(NaN)); // true</span></span></code></pre></div><ul><li>扩展运算符...</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [1, 2],</span></span>
<span class="line"><span>    arr1 = [...arr];</span></span>
<span class="line"><span>console.log(arr1); // [1, 2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 数组含空位</span></span>
<span class="line"><span>let arr2 = [1, , 3],</span></span>
<span class="line"><span>    arr3 = [...arr2];</span></span>
<span class="line"><span>console.log(arr3); [1, undefined, 3]</span></span></code></pre></div><h2 id="模板字符串" tabindex="-1">模板字符串 <a class="header-anchor" href="#模板字符串" aria-label="Permalink to &quot;模板字符串&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let demo = &#39;ES6&#39;;</span></span>
<span class="line"><span>let str = \`Hello \${demo}\`;</span></span>
<span class="line"><span>console.log(str);</span></span></code></pre></div><h2 id="函数扩展" tabindex="-1">函数扩展 <a class="header-anchor" href="#函数扩展" aria-label="Permalink to &quot;函数扩展&quot;">​</a></h2><ul><li>箭头函数</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var f = v =&gt; v;</span></span>
<span class="line"><span>//等价于</span></span>
<span class="line"><span>var f = function(a){</span></span>
<span class="line"><span> return a;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>f(1);  //1</span></span>
<span class="line"><span>console.log(f(1))</span></span></code></pre></div><ul><li>函数体中的 this 对象</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function fn(){</span></span>
<span class="line"><span>  setTimeout(()=&gt;{</span></span>
<span class="line"><span>    // 定义时，this 绑定的是 fn 中的 this 对象</span></span>
<span class="line"><span>    console.log(this.a);</span></span>
<span class="line"><span>  },0)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var a = 20;</span></span>
<span class="line"><span>// fn 的 this 对象为 {a: 19}</span></span>
<span class="line"><span>fn.call({a: 18});  // 18</span></span></code></pre></div><ul><li>不定参数</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function f(...values){</span></span>
<span class="line"><span>    console.log(values.length);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>f(1,2);      //2</span></span>
<span class="line"><span>f(1,2,3,4);  //4</span></span></code></pre></div><h2 id="对象扩展" tabindex="-1">对象扩展 <a class="header-anchor" href="#对象扩展" aria-label="Permalink to &quot;对象扩展&quot;">​</a></h2><ul><li>Object.assign(target, source_1, ···)</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 基本用法</span></span>
<span class="line"><span>let target = {a: 1};</span></span>
<span class="line"><span>let object2 = {b: 2};</span></span>
<span class="line"><span>let object3 = {c: 3};</span></span>
<span class="line"><span>Object.assign(target,object2,object3);  </span></span>
<span class="line"><span>// 第一个参数是目标对象，后面的参数是源对象</span></span>
<span class="line"><span>console.log(target);  // {a: 1, b: 2, c: 3}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 合并具有相同属性的对象</span></span>
<span class="line"><span>const o1 = { a: 1, b: 1, c: 1 };</span></span>
<span class="line"><span>const o2 = { b: 2, c: 2 };</span></span>
<span class="line"><span>const o3 = { c: 3 };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const obj = Object.assign({}, o1, o2, o3);</span></span>
<span class="line"><span>console.log(obj); // { a: 1, b: 2, c: 3 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//数组的处理</span></span>
<span class="line"><span>console.log(Object.assign([2,3], [5]));  // [5,3]</span></span></code></pre></div><ul><li>Object.is(value1, value2)</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 用来比较两个值是否严格相等</span></span>
<span class="line"><span>console.log(Object.is(&quot;q&quot;,&quot;q&quot;));      // true</span></span>
<span class="line"><span>console.log(Object.is(1,1));          // true</span></span>
<span class="line"><span>console.log(Object.is([1],[1]));      // false</span></span>
<span class="line"><span>console.log(Object.is({q:1},{q:1}));  // false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//与（===）的区别</span></span>
<span class="line"><span>//一是+0不等于-0</span></span>
<span class="line"><span>console.log(Object.is(+0,-0));  //false</span></span>
<span class="line"><span>console.log(+0 === -0)  //true</span></span>
<span class="line"><span>//二是NaN等于本身</span></span>
<span class="line"><span>console.log(Object.is(NaN,NaN)); //true</span></span>
<span class="line"><span>console.log(NaN === NaN)  //false</span></span></code></pre></div><ul><li>Object.defineProperty()</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Archiver() {</span></span>
<span class="line"><span>  var temperature = null;</span></span>
<span class="line"><span>  var archive = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Object.defineProperty(this, &#39;temperature&#39;, {</span></span>
<span class="line"><span>    get: function() {</span></span>
<span class="line"><span>      console.log(&#39;get!&#39;);</span></span>
<span class="line"><span>      return temperature;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    set: function(value) {</span></span>
<span class="line"><span>      temperature = value;</span></span>
<span class="line"><span>      archive.push({ val: temperature });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  this.getArchive = function() { return archive; };</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var arc = new Archiver();</span></span>
<span class="line"><span>arc.temperature; // &#39;get!&#39;</span></span>
<span class="line"><span>arc.temperature = 11;</span></span>
<span class="line"><span>arc.temperature = 13;</span></span>
<span class="line"><span>console.log(arc.getArchive()) // [{ val: 11 }, { val: 13 }]</span></span></code></pre></div><ul><li>Object.keys(), Object.values()</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// Object.keys(): 返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。</span></span>
<span class="line"><span>// Object.values(): 返回一个给定对象自身的所有可枚举属性值的数组.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 简单数组</span></span>
<span class="line"><span>var arr = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];</span></span>
<span class="line"><span>console.log(Object.keys(arr)); // console: [&#39;0&#39;, &#39;1&#39;, &#39;2&#39;];</span></span>
<span class="line"><span>console.log(Object.values(obj)); // [&#39;bar&#39;, 42]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 类数组对象</span></span>
<span class="line"><span>var obj = { 0: &#39;a&#39;, 1: &#39;b&#39;, 2: &#39;c&#39; };</span></span>
<span class="line"><span>console.log(Object.keys(obj)); // console: [&#39;0&#39;, &#39;1&#39;, &#39;2&#39;]</span></span>
<span class="line"><span>console.log(Object.values(obj)); // [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 排序的类数组对象</span></span>
<span class="line"><span>var anObj = { 100: &#39;a&#39;, 2: &#39;b&#39;, 7: &#39;c&#39; };</span></span>
<span class="line"><span>console.log(Object.keys(anObj)); // console: [&#39;2&#39;, &#39;7&#39;, &#39;100&#39;]</span></span>
<span class="line"><span>console.log(Object.values(an_obj)); // [&#39;b&#39;, &#39;c&#39;, &#39;a&#39;]</span></span></code></pre></div><h3 id="class类" tabindex="-1">class类 <a class="header-anchor" href="#class类" aria-label="Permalink to &quot;class类&quot;">​</a></h3><ul><li>class（类声明）</li><li>重复声明一个类会引起类型错误。</li><li>类表达式定义一个类后再声明一个类同样会报错</li><li>constructor 创建 和 初始化 class创建对象的特殊方法，一个类中只能有 一个 构造方法constructor</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Polygon {</span></span>
<span class="line"><span>  constructor(height, width) {</span></span>
<span class="line"><span>    this.name = &#39;Polygon&#39;;</span></span>
<span class="line"><span>    this.height = height;</span></span>
<span class="line"><span>    this.width = width;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let polygon = new Polygon(171, 20);</span></span>
<span class="line"><span>console.log(polygon) //Polygon {name: &#39;Polygon&#39;, height: 171, width: 20}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 重复定义</span></span>
<span class="line"><span>class Polygon{} //Uncaught SyntaxError: Identifier &#39;Polygon&#39; has already been declared</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 静态方法</span></span>
<span class="line"><span>class Example{</span></span>
<span class="line"><span>    static sum(a, b) {</span></span>
<span class="line"><span>        console.log(a+b);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Example.sum(1, 2); // 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 原型方法</span></span>
<span class="line"><span>class Example {</span></span>
<span class="line"><span>    sum(a, b) {</span></span>
<span class="line"><span>        console.log(a + b);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let exam = new Example();</span></span>
<span class="line"><span>exam.sum(1, 2); // 3</span></span></code></pre></div><ul><li>super关键字 至多出现 一次</li><li>必须在使用 this 关键字之前使用</li><li>super关键字 也可以用来调用父对象上的函数。</li><li>extends ，用来创建一个子类继承另一个类</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  class Person {</span></span>
<span class="line"><span>        constructor(name) {</span></span>
<span class="line"><span>            this.name = name;</span></span>
<span class="line"><span>            this.sex = &quot;男&quot;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    class Student extends Person {</span></span>
<span class="line"><span>        constructor(name, age) {</span></span>
<span class="line"><span>            super(name);</span></span>
<span class="line"><span>            this.age = age;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    let s = new Student(&quot;张三&quot;, 11);</span></span>
<span class="line"><span>    console.log(s.name);</span></span>
<span class="line"><span>    console.log(s.age);</span></span>
<span class="line"><span>    console.log(s.sex);</span></span></code></pre></div><ul><li>getter / setter</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Square extends Polygon {</span></span>
<span class="line"><span>    constructor(length) {        </span></span>
<span class="line"><span>        // 在这里, 它调用了父类的构造函数, 并将 length 提供给 Polygon 的&quot;width&quot;和&quot;height&quot;    </span></span>
<span class="line"><span>        super(length, length);</span></span>
<span class="line"><span>        // 注意: 在派生类中, 必须先调用 super() 才能使用 &quot;this&quot;。</span></span>
<span class="line"><span>        // 忽略这个，将会导致一个引用错误。</span></span>
<span class="line"><span>        this.name = &#39;正方形&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    get area () {</span></span>
<span class="line"><span>        return this.height * this.width;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    set area(value) {</span></span>
<span class="line"><span>        // 注意：不能使用 this.area = value 为area赋值</span></span>
<span class="line"><span>        // 否则会导致循环call setter方法导致爆栈</span></span>
<span class="line"><span>        this._area = value;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let category = new Square(100) </span></span>
<span class="line"><span>console.log(category) // Square {name: &#39;正方形&#39;, height: 100, width: 100}</span></span></code></pre></div><h3 id="export-与-import" tabindex="-1">export 与 import <a class="header-anchor" href="#export-与-import" aria-label="Permalink to &quot;export 与 import&quot;">​</a></h3><ul><li>除export default外，导出的函数什么和类声明都必须要有名称</li><li>import命令会提升到整个模块的头部，首先执行。</li><li>模块导入导出各种类型的变量，如字符串，数值，函数，类。</li></ul><h3 id="export导出" tabindex="-1">export导出 <a class="header-anchor" href="#export导出" aria-label="Permalink to &quot;export导出&quot;">​</a></h3><blockquote><p>test.js</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function f1 ()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    console.log(&quot;函数1: functino 1&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let b = </span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    name:&quot;test_one&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str = &quot;hell绿绿绿&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export {</span></span>
<span class="line"><span>    f1,b,str</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>demo.html</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script type=&quot;module&quot;&gt;</span></span>
<span class="line"><span>    import {f1,b,str} from &quot;./demo.js&quot;;</span></span>
<span class="line"><span>    console.log(f1,b,str)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="export-default导出" tabindex="-1">export default导出 <a class="header-anchor" href="#export-default导出" aria-label="Permalink to &quot;export default导出&quot;">​</a></h3><blockquote><p>test1.js</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const demo =  {</span></span>
<span class="line"><span>    name: &#39;张三&#39;,</span></span>
<span class="line"><span>    age: 18,</span></span>
<span class="line"><span>    devement: &#39;编程&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default demo</span></span></code></pre></div><blockquote><p>demo1.html</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script type=&quot;module&quot;&gt;</span></span>
<span class="line"><span>    // 不需要加{}， 使用任意变量接收</span></span>
<span class="line"><span>    import demo from &quot;./test3.js&quot;; </span></span>
<span class="line"><span>    console.log(demo)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="as的用法" tabindex="-1">as的用法 <a class="header-anchor" href="#as的用法" aria-label="Permalink to &quot;as的用法&quot;">​</a></h3><blockquote><p>test.js</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function f1 ()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    console.log(&quot;函数1: functino 1&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let b = </span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    name:&quot;test_one&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str = &quot;hell绿绿绿&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export {</span></span>
<span class="line"><span>    f1,b,str</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 或者 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>export {</span></span>
<span class="line"><span>    f1 as fun1,</span></span>
<span class="line"><span>    b as b1,</span></span>
<span class="line"><span>    str as strs</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>demo.html</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script type=&quot;module&quot;&gt;</span></span>
<span class="line"><span>    import * as test  from &quot;./demo.js&quot;;</span></span>
<span class="line"><span>    import { fun1, b1, strs} from &quot;./test.js&quot;;</span></span>
<span class="line"><span>    console.log(test) </span></span>
<span class="line"><span>    console.log(fun1, b1, strs)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="基本用法" tabindex="-1">基本⽤法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本⽤法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Promise是⼀个构造函数，⾃⼰身上有all、reject、resolve等⽅法，</span></span>
<span class="line"><span>原型上有then、catch 等⽅法； new出来的Promise对象就有then、catch⽅法;</span></span>
<span class="line"><span>Promise传⼊两个参数：resolve，reject，</span></span>
<span class="line"><span>分别表示异步操作执⾏成功后的回调函数和异步操作执⾏失败后的回调函数;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var p = new Promise(function (resolve, reject) {</span></span>
<span class="line"><span>    //做⼀些异步操作 </span></span>
<span class="line"><span>    setTimeout(function () { </span></span>
<span class="line"><span>        console.log(&#39;执⾏完成&#39;);</span></span>
<span class="line"><span>        resolve(&#39;操作resolve&#39;);</span></span>
<span class="line"><span>     }, 2000);</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>p.then(function(successMessage){ </span></span>
<span class="line"><span>    //successMessage的值是上⾯调⽤resolve(...)⽅法传⼊的值.</span></span>
<span class="line"><span>     console.log(&quot; message: &quot; + successMessage); </span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="reject、resolve的用法" tabindex="-1">reject、resolve的⽤法 <a class="header-anchor" href="#reject、resolve的用法" aria-label="Permalink to &quot;reject、resolve的⽤法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>reject的作⽤就是把Promise的状态置为rejected，这样我们在then中就能捕捉到然后执⾏“失败”情况的回调</span></span>
<span class="line"><span>then⽅法可以接受两个参数，第⼀个对应resolve的回调，第⼆个对应reject的回调。</span></span>
<span class="line"><span>所以我们能够分别拿到他们传过来的数据。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>function testReject() </span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    var p = new Promise(function (resolve, reject) { </span></span>
<span class="line"><span>        //做⼀些异步操作 </span></span>
<span class="line"><span>        setTimeout(function(){ </span></span>
<span class="line"><span>            var num = Math.ceil(Math.random()*10); </span></span>
<span class="line"><span>            //⽣成1-10的随机数 </span></span>
<span class="line"><span>            if(num &lt;= 5){ </span></span>
<span class="line"><span>                resolve(num); </span></span>
<span class="line"><span>            }else{</span></span>
<span class="line"><span>                reject(&#39;数字超出了范围&#39;);</span></span>
<span class="line"><span>            } </span></span>
<span class="line"><span>        }, 2000); </span></span>
<span class="line"><span>    }); </span></span>
<span class="line"><span>    return p; </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>testReject().then(</span></span>
<span class="line"><span>    function(data) { </span></span>
<span class="line"><span>        console.log(&#39;resolved状态&#39;);</span></span>
<span class="line"><span>        console.log(data); </span></span>
<span class="line"><span>    }, </span></span>
<span class="line"><span>    function(reason, data) { </span></span>
<span class="line"><span>        console.log(&#39;rejected状态&#39;); </span></span>
<span class="line"><span>        console.log(reason); </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>);</span></span></code></pre></div><h3 id="all" tabindex="-1">all() <a class="header-anchor" href="#all" aria-label="Permalink to &quot;all()&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const promise1 = Promise.resolve(3);</span></span>
<span class="line"><span>const promise2 = 42;</span></span>
<span class="line"><span>const promise3 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    setTimeout(resolve, 100, &#39;foo&#39;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Promise.all([promise1, promise2, promise3]).then((values) =&gt; {</span></span>
<span class="line"><span>    console.log(values);</span></span>
<span class="line"><span>    // (3) [3, 42, &#39;foo&#39;]</span></span>
<span class="line"><span>});</span></span></code></pre></div><h3 id="async-await" tabindex="-1">async/await <a class="header-anchor" href="#async-await" aria-label="Permalink to &quot;async/await&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>await 操作符用于等待一个Promise 对象。它只能在异步函数 async function 中使用。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async 函数中可能会有 await 表达式，async 函数执行时，如果遇到 await 就会先暂停执行 ，</span></span>
<span class="line"><span>等到触发的异步操作完成后，恢复 async 函数的执行并返回解析值。</span></span></code></pre></div><h3 id="async" tabindex="-1">async <a class="header-anchor" href="#async" aria-label="Permalink to &quot;async&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>async function demo()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    var p1 = new Promise(function(resolve,reject){</span></span>
<span class="line"><span>        resolve(&#39;成功&#39;)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //同步执行</span></span>
<span class="line"><span>    //var res = await p1;</span></span>
<span class="line"><span>    //console.log(res)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //异步执行</span></span>
<span class="line"><span>    p1.then(success =&gt; console.log(success))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    console.log(&#39;看谁先执行&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>demo()</span></span></code></pre></div><h3 id="await" tabindex="-1">await <a class="header-anchor" href="#await" aria-label="Permalink to &quot;await&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>async function demo()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    var p1 = new Promise(function(resolve,reject){</span></span>
<span class="line"><span>        resolve(&#39;成功&#39;)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //同步执行</span></span>
<span class="line"><span>    var res = await p1;</span></span>
<span class="line"><span>    console.log(res)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //异步执行</span></span>
<span class="line"><span>    // p1.then(success =&gt; console.log(success))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    console.log(&#39;看谁先执行&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>demo()</span></span></code></pre></div>`,90),i=[e];function t(c,o,r,u,d,h){return a(),n("div",null,i)}const v=s(l,[["render",t]]);export{b as __pageData,v as default};
