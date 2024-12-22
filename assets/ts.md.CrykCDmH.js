import{_ as a,c as s,o as n,a2 as e}from"./chunks/framework.CSGcjqEA.js";const m=JSON.parse('{"title":"什么是 TypeScript","description":"","frontmatter":{},"headers":[],"relativePath":"ts.md","filePath":"ts.md"}'),p={name:"ts.md"},t=e(`<h1 id="什么是-typescript" tabindex="-1">什么是 TypeScript <a class="header-anchor" href="#什么是-typescript" aria-label="Permalink to &quot;什么是 TypeScript&quot;">​</a></h1><blockquote><p>Typed JavaScript at Any Scale. 添加了类型系统的 JavaScript，适用于任何规模的项目。</p></blockquote><p>以上描述是官网[<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#link-1" target="_blank" rel="noreferrer">1]</a>对于 TypeScript 的定义。</p><p>它强调了 TypeScript 的两个最重要的特性——类型系统、适用于任何规模。</p><h2 id="typescript-的特性§" tabindex="-1">TypeScript 的特性<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#typescript-%E7%9A%84%E7%89%B9%E6%80%A7" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#typescript-的特性§" aria-label="Permalink to &quot;TypeScript 的特性[§](http://ts.xcatliu.com/introduction/what-is-typescript.html#typescript-的特性)&quot;">​</a></h2><h3 id="类型系统§" tabindex="-1">类型系统<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#类型系统§" aria-label="Permalink to &quot;类型系统[§](http://ts.xcatliu.com/introduction/what-is-typescript.html#类型系统)&quot;">​</a></h3><p>从 TypeScript 的名字就可以看出来，「类型」是其最核心的特性。</p><p>我们知道，JavaScript 是一门非常灵活的编程语言：</p><ul><li>它没有类型约束，一个变量可能初始化时是字符串，过一会儿又被赋值为数字。</li><li>由于隐式类型转换的存在，有的变量的类型很难在运行前就确定。</li><li>基于原型的面向对象编程，使得原型上的属性或方法可以在运行时被修改。</li><li>函数是 JavaScript 中的一等公民[<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#link-2" target="_blank" rel="noreferrer">2]</a>，可以赋值给变量，也可以当作参数或返回值。</li></ul><p>这种灵活性就像一把双刃剑，一方面使得 JavaScript 蓬勃发展，无所不能，从 2013 年开始就一直蝉联最普遍使用的编程语言排行榜冠军[<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#link-3" target="_blank" rel="noreferrer">3]</a>；另一方面也使得它的代码质量参差不齐，维护成本高，运行时错误多。</p><p>而 TypeScript 的类型系统，在很大程度上弥补了 JavaScript 的缺点。</p><h4 id="typescript-是静态类型§" tabindex="-1">TypeScript 是静态类型<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#typescript-%E6%98%AF%E9%9D%99%E6%80%81%E7%B1%BB%E5%9E%8B" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#typescript-是静态类型§" aria-label="Permalink to &quot;TypeScript 是静态类型[§](http://ts.xcatliu.com/introduction/what-is-typescript.html#typescript-是静态类型)&quot;">​</a></h4><p>类型系统按照「类型检查的时机」来分类，可以分为动态类型和静态类型。</p><p>动态类型是指在运行时才会进行类型检查，这种语言的类型错误往往会导致运行时错误。JavaScript 是一门解释型语言[<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#link-4" target="_blank" rel="noreferrer">4]</a>，没有编译阶段，所以它是动态类型，以下这段代码在运行时才会报错：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let foo = 1;</span></span>
<span class="line"><span>foo.split(&#39; &#39;);</span></span>
<span class="line"><span>// Uncaught TypeError: foo.split is not a function</span></span>
<span class="line"><span>// 运行时会报错（foo.split 不是一个函数），造成线上 bug</span></span></code></pre></div><p>静态类型是指编译阶段就能确定每个变量的类型，这种语言的类型错误往往会导致语法错误。TypeScript 在运行前需要先编译为 JavaScript，而在编译阶段就会进行类型检查，所以 <strong>TypeScript 是静态类型</strong>，这段 TypeScript 代码在编译阶段就会报错了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let foo = 1;</span></span>
<span class="line"><span>foo.split(&#39; &#39;);</span></span>
<span class="line"><span>// Property &#39;split&#39; does not exist on type &#39;number&#39;.</span></span>
<span class="line"><span>// 编译时会报错（数字没有 split 方法），无法通过编译</span></span></code></pre></div><p>你可能会奇怪，这段 TypeScript 代码看上去和 JavaScript 没有什么区别呀。</p><p>没错！大部分 JavaScript 代码都只需要经过少量的修改（或者完全不用修改）就变成 TypeScript 代码，这得益于 TypeScript 强大的[类型推论][]，即使不去手动声明变量 <code>foo</code> 的类型，也能在变量初始化时自动推论出它是一个 <code>number</code> 类型。</p><p>完整的 TypeScript 代码是这样的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let foo: number = 1;</span></span>
<span class="line"><span>foo.split(&#39; &#39;);</span></span>
<span class="line"><span>// Property &#39;split&#39; does not exist on type &#39;number&#39;.</span></span>
<span class="line"><span>// 编译时会报错（数字没有 split 方法），无法通过编译</span></span></code></pre></div><h4 id="typescript-是弱类型§" tabindex="-1">TypeScript 是弱类型<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#typescript-%E6%98%AF%E5%BC%B1%E7%B1%BB%E5%9E%8B" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#typescript-是弱类型§" aria-label="Permalink to &quot;TypeScript 是弱类型[§](http://ts.xcatliu.com/introduction/what-is-typescript.html#typescript-是弱类型)&quot;">​</a></h4><p>类型系统按照「是否允许隐式类型转换」来分类，可以分为强类型和弱类型。</p><p>以下这段代码不管是在 JavaScript 中还是在 TypeScript 中都是可以正常运行的，运行时数字 <code>1</code> 会被隐式类型转换为字符串 <code>&#39;1&#39;</code>，加号 <code>+</code> 被识别为字符串拼接，所以打印出结果是字符串 <code>&#39;11&#39;</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>console.log(1 + &#39;1&#39;);</span></span>
<span class="line"><span>// 打印出字符串 &#39;11&#39;</span></span></code></pre></div><p>TypeScript 是完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性，所以<strong>它们都是弱类型</strong>。</p><p>作为对比，Python 是强类型，以下代码会在运行时报错：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>print(1 + &#39;1&#39;)</span></span>
<span class="line"><span># TypeError: unsupported operand type(s) for +: &#39;int&#39; and &#39;str&#39;</span></span></code></pre></div><p>若要修复该错误，需要进行强制类型转换：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>print(str(1) + &#39;1&#39;)</span></span>
<span class="line"><span># 打印出字符串 &#39;11&#39;</span></span></code></pre></div><blockquote><p>强/弱是相对的，Python 在处理整型和浮点型相加时，会将整型隐式转换为浮点型，但是这并不影响 Python 是强类型的结论，因为大部分情况下 Python 并不会进行隐式类型转换。相比而言，JavaScript 和 TypeScript 中不管加号两侧是什么类型，都可以通过隐式类型转换计算出一个结果——而不是报错——所以 JavaScript 和 TypeScript 都是弱类型。</p></blockquote><blockquote><p>虽然 TypeScript 不限制加号两侧的类型，但是我们可以借助 TypeScript 提供的类型系统，以及 ESLint 提供的代码检查功能，来限制加号两侧必须同为数字或同为字符串[<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#link-5" target="_blank" rel="noreferrer">5]</a>。这在一定程度上使得 TypeScript 向「强类型」更近一步了——当然，这种限制是可选的。</p></blockquote><p>这样的类型系统体现了 TypeScript 的核心设计理念[<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#link-6" target="_blank" rel="noreferrer">6]</a>：在完整保留 JavaScript 运行时行为的基础上，通过引入静态类型系统来提高代码的可维护性，减少可能出现的 bug。</p><h3 id="适用于任何规模§" tabindex="-1">适用于任何规模<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#%E9%80%82%E7%94%A8%E4%BA%8E%E4%BB%BB%E4%BD%95%E8%A7%84%E6%A8%A1" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#适用于任何规模§" aria-label="Permalink to &quot;适用于任何规模[§](http://ts.xcatliu.com/introduction/what-is-typescript.html#适用于任何规模)&quot;">​</a></h3><p>TypeScript 非常适用于大型项目——这是显而易见的，类型系统可以为大型项目带来更高的可维护性，以及更少的 bug。</p><p>在中小型项目中推行 TypeScript 的最大障碍就是认为使用 TypeScript 需要写额外的代码，降低开发效率。但事实上，由于有[类型推论][]，大部分类型都不需要手动声明了。相反，TypeScript 增强了编辑器（IDE）的功能，包括代码补全、接口提示、跳转到定义、代码重构等，这在很大程度上提高了开发效率。而且 TypeScript 有近百个[编译选项][]，如果你认为类型检查过于严格，那么可以通过修改编译选项来降低类型检查的标准。</p><p>TypeScript 还可以和 JavaScript 共存。这意味着如果你有一个使用 JavaScript 开发的旧项目，又想使用 TypeScript 的特性，那么你不需要急着把整个项目都迁移到 TypeScript，你可以使用 TypeScript 编写新文件，然后在后续更迭中逐步迁移旧文件。如果一些 JavaScript 文件的迁移成本太高，TypeScript 也提供了一个方案，可以让你在不修改 JavaScript 文件的前提下，编写一个[类型声明文件][]，实现旧项目的渐进式迁移。</p><p>事实上，就算你从来没学习过 TypeScript，你也可能已经在不知不觉中使用到了 TypeScript——在 VSCode 编辑器中编写 JavaScript 时，代码补全和接口提示等功能就是通过 TypeScript Language Service 实现的[<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#link-7" target="_blank" rel="noreferrer">7]</a>：</p><p><img src="http://ts.xcatliu.com/assets/what-is-typescript-vscode.png" alt="what-is-typescript-vscode"></p><p>一些第三方库原生支持了 TypeScript，在使用时就能获得代码补全了，比如 Vue 3.0[<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#link-8" target="_blank" rel="noreferrer">8]</a>：</p><p><img src="http://ts.xcatliu.com/assets/what-is-typescript-vue.png" alt="what-is-typescript-vue"></p><p>有一些第三方库原生不支持 TypeScript，但是可以通过安装社区维护的类型声明库[<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#link-9" target="_blank" rel="noreferrer">9]</a>（比如通过运行 <code>npm install --save-dev @types/react</code> 来安装 React 的类型声明库）来获得代码补全能力——不管是在 JavaScript 项目中还是在 TypeScript 中项目中都是支持的：</p><p><img src="http://ts.xcatliu.com/assets/what-is-typescript-react.png" alt="what-is-typescript-react"></p><p>由此可见，TypeScript 的发展已经深入到前端社区的方方面面了，任何规模的项目都或多或少得到了 TypeScript 的支持。</p><h3 id="与标准同步发展§" tabindex="-1">与标准同步发展<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#%E4%B8%8E%E6%A0%87%E5%87%86%E5%90%8C%E6%AD%A5%E5%8F%91%E5%B1%95" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#与标准同步发展§" aria-label="Permalink to &quot;与标准同步发展[§](http://ts.xcatliu.com/introduction/what-is-typescript.html#与标准同步发展)&quot;">​</a></h3><p>TypeScript 的另一个重要的特性就是坚持与 ECMAScript 标准[<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#link-10" target="_blank" rel="noreferrer">10]</a>同步发展。</p><p>ECMAScript 是 JavaScript 核心语法的标准，自 2015 年起，每年都会发布一个新版本，包含一些新的语法。</p><p>一个新的语法从提案到变成正式标准，需要经历以下几个阶段：</p><ul><li>Stage 0：展示阶段，仅仅是提出了讨论、想法，尚未正式提案。</li><li>Stage 1：征求意见阶段，提供抽象的 API 描述，讨论可行性，关键算法等。</li><li>Stage 2：草案阶段，使用正式的规范语言精确描述其语法和语义。</li><li>Stage 3：候选人阶段，语法的设计工作已完成，需要浏览器、Node.js 等环境支持，搜集用户的反馈。</li><li>Stage 4：定案阶段，已准备好将其添加到正式的 ECMAScript 标准中。</li></ul><p>一个语法进入到 Stage 3 阶段后，TypeScript 就会实现它。一方面，让我们可以尽早的使用到最新的语法，帮助它进入到下一个阶段；另一方面，处于 Stage 3 阶段的语法已经比较稳定了，基本不会有语法的变更，这使得我们能够放心的使用它。</p><p>除了实现 ECMAScript 标准之外，TypeScript 团队也推进了诸多语法提案，比如可选链操作符（<code>?.</code>）[<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#link-11" target="_blank" rel="noreferrer">11]</a>、空值合并操作符（<code>??</code>）[<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#link-12" target="_blank" rel="noreferrer">12]</a>、Throw 表达式[<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#link-13" target="_blank" rel="noreferrer">13]</a>、正则匹配索引[<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#link-14" target="_blank" rel="noreferrer">14]</a>等。</p><h2 id="总结§" tabindex="-1">总结<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#%E6%80%BB%E7%BB%93" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#总结§" aria-label="Permalink to &quot;总结[§](http://ts.xcatliu.com/introduction/what-is-typescript.html#总结)&quot;">​</a></h2><p>什么是 TypeScript？</p><ul><li>TypeScript 是添加了类型系统的 JavaScript，适用于任何规模的项目。</li><li>TypeScript 是一门静态类型、弱类型的语言。</li><li>TypeScript 是完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性。</li><li>TypeScript 可以编译为 JavaScript，然后运行在浏览器、Node.js 等任何能运行 JavaScript 的环境中。</li><li>TypeScript 拥有很多编译选项，类型检查的严格程度由你决定。</li><li>TypeScript 可以和 JavaScript 共存，这意味着 JavaScript 项目能够渐进式的迁移到 TypeScript。</li><li>TypeScript 增强了编辑器（IDE）的功能，提供了代码补全、接口提示、跳转到定义、代码重构等能力。</li><li>TypeScript 拥有活跃的社区，大多数常用的第三方库都提供了类型声明。</li><li>TypeScript 与标准同步发展，符合最新的 ECMAScript 标准（stage 3）。</li></ul><h2 id="附-typescript-的发展历史§" tabindex="-1">附：TypeScript 的发展历史<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#%E9%99%84typescript-%E7%9A%84%E5%8F%91%E5%B1%95%E5%8E%86%E5%8F%B2" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#附-typescript-的发展历史§" aria-label="Permalink to &quot;附：TypeScript 的发展历史[§](http://ts.xcatliu.com/introduction/what-is-typescript.html#附typescript-的发展历史)&quot;">​</a></h2><ul><li>2012-10：微软发布了 TypeScript 第一个版本（0.8），此前已经在微软内部开发了两年。</li><li>2014-04：TypeScript 发布了 1.0 版本。</li><li>2014-10：Angular 发布了 2.0 版本，它是一个基于 TypeScript 开发的前端框架。</li><li>2015-01：ts-loader 发布，webpack 可以编译 TypeScript 文件了。</li><li>2015-04：微软发布了 Visual Studio Code，它内置了对 TypeScript 语言的支持，它自身也是用 TypeScript 开发的。</li><li>2016-05：<code>@types/react</code> 发布，TypeScript 可以开发 React 应用了。</li><li>2016-05：<code>@types/node</code> 发布，TypeScript 可以开发 Node.js 应用了。</li><li>2016-09：TypeScript 发布了 2.0 版本。</li><li>2018-06：TypeScript 发布了 3.0 版本。</li><li>2019-02：TypeScript 宣布由官方团队来维护 typescript-eslint，以支持在 TypeScript 文件中运行 ESLint 检查。</li><li>2020-05：Deno 发布了 1.0 版本，它是一个 JavaScript 和 TypeScript 运行时。</li><li>2020-08：TypeScript 发布了 4.0 版本。</li><li>2020-09：Vue 发布了 3.0 版本，官方支持 TypeScript。</li></ul><h2 id="参考资料§" tabindex="-1">参考资料<a href="http://ts.xcatliu.com/introduction/what-is-typescript.html#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#参考资料§" aria-label="Permalink to &quot;参考资料[§](http://ts.xcatliu.com/introduction/what-is-typescript.html#参考资料)&quot;">​</a></h2><ol><li><a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">TypeScript 官网</a></li><li><a href="https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch2.html" target="_blank" rel="noreferrer">第 2 章: 一等公民的函数</a> · 函数式编程指北</li><li><a href="https://insights.stackoverflow.com/survey/2020" target="_blank" rel="noreferrer">StackOverflow 2020 开发者调查报告</a></li><li><a href="https://web.stanford.edu/class/cs98si/slides/overview.html" target="_blank" rel="noreferrer">斯坦福 JavaScript 第一课</a></li><li><a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md" target="_blank" rel="noreferrer">TypeScript ESLint 规则 <code>restrict-plus-operands</code></a></li><li><a href="https://github.com/microsoft/TypeScript/wiki/TypeScript-Design-Goals" target="_blank" rel="noreferrer">TypeScript 设计理念</a></li><li><a href="https://code.visualstudio.com/docs/languages/typescript" target="_blank" rel="noreferrer">Visual Studio Code 中集成了 TypeScript</a></li><li><a href="https://v3.vuejs.org/guide/typescript-support.html" target="_blank" rel="noreferrer">Vue 3.0 支持 TypeScript</a></li><li><a href="https://github.com/DefinitelyTyped/DefinitelyTyped" target="_blank" rel="noreferrer">Definitely Typed</a>——TypeScript 团队帮助维护的类型定义仓库</li><li><a href="https://tc39.es/process-document/" target="_blank" rel="noreferrer">ECMAScript 标准</a></li><li><a href="https://github.com/tc39/proposal-optional-chaining" target="_blank" rel="noreferrer">可选链操作符（<code>?.</code>）</a></li><li><a href="https://github.com/tc39/proposal-nullish-coalescing" target="_blank" rel="noreferrer">空值合并操作符（<code>??</code>）</a></li><li><a href="https://github.com/tc39/proposal-throw-expressions" target="_blank" rel="noreferrer">Throw 表达式</a></li><li><a href="https://github.com/tc39/proposal-regexp-match-indices" target="_blank" rel="noreferrer">正则匹配索引</a></li></ol><h1 id="安装-typescript" tabindex="-1">安装 TypeScript <a class="header-anchor" href="#安装-typescript" aria-label="Permalink to &quot;安装 TypeScript&quot;">​</a></h1><p>TypeScript 的命令行工具安装方法如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install -g typescript</span></span></code></pre></div><p>以上命令会在全局环境下安装 <code>tsc</code> 命令，安装完成之后，我们就可以在任何地方执行 <code>tsc</code> 命令了。</p><p>编译一个 TypeScript 文件很简单：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tsc hello.ts</span></span></code></pre></div><p>我们约定使用 TypeScript 编写的文件以 <code>.ts</code> 为后缀，用 TypeScript 编写 React 时，以 <code>.tsx</code> 为后缀。</p><h2 id="编辑器§" tabindex="-1">编辑器<a href="http://ts.xcatliu.com/introduction/get-typescript.html#%E7%BC%96%E8%BE%91%E5%99%A8" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#编辑器§" aria-label="Permalink to &quot;编辑器[§](http://ts.xcatliu.com/introduction/get-typescript.html#编辑器)&quot;">​</a></h2><p>TypeScript 最大的优势之一便是增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等。</p><p>主流的编辑器都支持 TypeScript，这里我推荐使用 <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">Visual Studio Code</a>。</p><p>它是一款开源，跨终端的轻量级编辑器，内置了对 TypeScript 的支持。</p><p>另外它本身也是<a href="https://github.com/Microsoft/vscode/" target="_blank" rel="noreferrer">用 TypeScript 编写的</a>。</p><p>下载安装：<a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">https://code.visualstudio.com/</a></p><p>获取其他编辑器或 IDE 对 TypeScript 的支持：</p><ul><li><a href="https://github.com/Microsoft/TypeScript-Sublime-Plugin" target="_blank" rel="noreferrer">Sublime Text</a></li><li><a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noreferrer">WebStorm</a></li><li><a href="https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support#vim" target="_blank" rel="noreferrer">Vim</a></li><li><a href="https://github.com/ananthakumaran/tide" target="_blank" rel="noreferrer">Emacs</a></li><li><a href="https://github.com/palantir/eclipse-typescript" target="_blank" rel="noreferrer">Eclipse</a></li><li><a href="https://atom.io/packages/atom-typescript" target="_blank" rel="noreferrer">Atom</a></li><li>[Visual Studio 2019](<a href="https://marketplace.visualstudio.com/search?term=TypeScriptTeam&amp;target=VS&amp;category=All" target="_blank" rel="noreferrer">https://marketplace.visualstudio.com/search?term=TypeScriptTeam&amp;target=VS&amp;category=All</a> categories&amp;vsVersion=vs2019&amp;sortBy=UpdatedDate)</li><li>[Visual Studio 2017](<a href="https://marketplace.visualstudio.com/search?term=TypeScriptTeam&amp;target=VS&amp;category=All" target="_blank" rel="noreferrer">https://marketplace.visualstudio.com/search?term=TypeScriptTeam&amp;target=VS&amp;category=All</a> categories&amp;vsVersion=vs15&amp;sortBy=UpdatedDate)</li></ul><h1 id="hello-typescript" tabindex="-1">Hello TypeScript <a class="header-anchor" href="#hello-typescript" aria-label="Permalink to &quot;Hello TypeScript&quot;">​</a></h1><p>我们从一个简单的例子开始。</p><p>将以下代码复制到 <code>hello.ts</code> 中：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function sayHello(person: string) {</span></span>
<span class="line"><span>    return &#39;Hello, &#39; + person;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let user = &#39;Tom&#39;;</span></span>
<span class="line"><span>console.log(sayHello(user));</span></span></code></pre></div><p>然后执行</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tsc hello.ts</span></span></code></pre></div><p>这时候会生成一个编译好的文件 <code>hello.js</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function sayHello(person) {</span></span>
<span class="line"><span>    return &#39;Hello, &#39; + person;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var user = &#39;Tom&#39;;</span></span>
<span class="line"><span>console.log(sayHello(user));</span></span></code></pre></div><p>在 TypeScript 中，我们使用 <code>:</code> 指定变量的类型，<code>:</code> 的前后有没有空格都可以。</p><p>上述例子中，我们用 <code>:</code> 指定 <code>person</code> 参数类型为 <code>string</code>。但是编译为 js 之后，并没有什么检查的代码被插入进来。</p><p>这是因为 <strong>TypeScript 只会在编译时对类型进行静态检查，如果发现有错误，编译的时候就会报错</strong>。而在运行时，与普通的 JavaScript 文件一样，不会对类型进行检查。</p><p>如果我们需要保证运行时的参数类型，还是得手动对类型进行判断：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function sayHello(person: string) {</span></span>
<span class="line"><span>    if (typeof person === &#39;string&#39;) {</span></span>
<span class="line"><span>        return &#39;Hello, &#39; + person;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        throw new Error(&#39;person is not a string&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let user = &#39;Tom&#39;;</span></span>
<span class="line"><span>console.log(sayHello(user));</span></span></code></pre></div><blockquote><p><code>let</code> 是 ES6 中的关键字，和 <code>var</code> 类似，用于定义一个局部变量，可以参阅 <a href="http://es6.ruanyifeng.com/#docs/let" target="_blank" rel="noreferrer">let 和 const 命令</a>。</p></blockquote><p>下面尝试把这段代码编译一下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function sayHello(person: string) {</span></span>
<span class="line"><span>    return &#39;Hello, &#39; + person;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let user = [0, 1, 2];</span></span>
<span class="line"><span>console.log(sayHello(user));</span></span></code></pre></div><p>编辑器中会提示错误，编译的时候也会出错：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>hello.ts:6:22 - error TS2345: Argument of type &#39;number[]&#39; is not assignable to parameter of type &#39;string&#39;.</span></span></code></pre></div><p>但是还是生成了 js 文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function sayHello(person) {</span></span>
<span class="line"><span>    return &#39;Hello, &#39; + person;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var user = [0, 1, 2];</span></span>
<span class="line"><span>console.log(sayHello(user));</span></span></code></pre></div><p>这是因为 <strong>TypeScript 编译的时候即使报错了，还是会生成编译结果</strong>，我们仍然可以使用这个编译之后的文件。</p><p>如果要在报错的时候终止 js 文件的生成，可以在 <code>tsconfig.json</code> 中配置 <code>noEmitOnError</code> 即可。关于 <code>tsconfig.json</code>，请参阅<a href="http://www.typescriptlang.org/docs/handbook/tsconfig-json.html" target="_blank" rel="noreferrer">官方手册</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html" target="_blank" rel="noreferrer">中文版</a>）。</p><h1 id="原始数据类型" tabindex="-1">原始数据类型 <a class="header-anchor" href="#原始数据类型" aria-label="Permalink to &quot;原始数据类型&quot;">​</a></h1><p>JavaScript 的类型分为两种：原始数据类型（<a href="https://developer.mozilla.org/en-US/docs/Glossary/Primitive" target="_blank" rel="noreferrer">Primitive data types</a>）和对象类型（Object types）。</p><p>原始数据类型包括：布尔值、数值、字符串、<code>null</code>、<code>undefined</code> 以及 ES6 中的新类型 <a href="http://es6.ruanyifeng.com/#docs/symbol" target="_blank" rel="noreferrer"><code>Symbol</code></a> 和 ES10 中的新类型 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt" target="_blank" rel="noreferrer"><code>BigInt</code></a>。</p><p>本节主要介绍<strong>前五种</strong>原始数据类型在 TypeScript 中的应用。</p><h2 id="布尔值§" tabindex="-1">布尔值<a href="http://ts.xcatliu.com/basics/primitive-data-types.html#%E5%B8%83%E5%B0%94%E5%80%BC" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#布尔值§" aria-label="Permalink to &quot;布尔值[§](http://ts.xcatliu.com/basics/primitive-data-types.html#布尔值)&quot;">​</a></h2><p>布尔值是最基础的数据类型，在 TypeScript 中，使用 <code>boolean</code> 定义布尔值类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let isDone: boolean = false;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 编译通过</span></span>
<span class="line"><span>// 后面约定，未强调编译错误的代码片段，默认为编译通过</span></span></code></pre></div><p>注意，使用构造函数 <code>Boolean</code> 创造的对象<strong>不是</strong>布尔值：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let createdByNewBoolean: boolean = new Boolean(1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Type &#39;Boolean&#39; is not assignable to type &#39;boolean&#39;.</span></span>
<span class="line"><span>//   &#39;boolean&#39; is a primitive, but &#39;Boolean&#39; is a wrapper object. Prefer using &#39;boolean&#39; when possible.</span></span></code></pre></div><p>事实上 <code>new Boolean()</code> 返回的是一个 <code>Boolean</code> 对象：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let createdByNewBoolean: Boolean = new Boolean(1);</span></span></code></pre></div><p>直接调用 <code>Boolean</code> 也可以返回一个 <code>boolean</code> 类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let createdByBoolean: boolean = Boolean(1);</span></span></code></pre></div><p>在 TypeScript 中，<code>boolean</code> 是 JavaScript 中的基本类型，而 <code>Boolean</code> 是 JavaScript 中的构造函数。其他基本类型（除了 <code>null</code> 和 <code>undefined</code>）一样，不再赘述。</p><h2 id="数值§" tabindex="-1">数值<a href="http://ts.xcatliu.com/basics/primitive-data-types.html#%E6%95%B0%E5%80%BC" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#数值§" aria-label="Permalink to &quot;数值[§](http://ts.xcatliu.com/basics/primitive-data-types.html#数值)&quot;">​</a></h2><p>使用 <code>number</code> 定义数值类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let decLiteral: number = 6;</span></span>
<span class="line"><span>let hexLiteral: number = 0xf00d;</span></span>
<span class="line"><span>// ES6 中的二进制表示法</span></span>
<span class="line"><span>let binaryLiteral: number = 0b1010;</span></span>
<span class="line"><span>// ES6 中的八进制表示法</span></span>
<span class="line"><span>let octalLiteral: number = 0o744;</span></span>
<span class="line"><span>let notANumber: number = NaN;</span></span>
<span class="line"><span>let infinityNumber: number = Infinity;</span></span></code></pre></div><p>编译结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var decLiteral = 6;</span></span>
<span class="line"><span>var hexLiteral = 0xf00d;</span></span>
<span class="line"><span>// ES6 中的二进制表示法</span></span>
<span class="line"><span>var binaryLiteral = 10;</span></span>
<span class="line"><span>// ES6 中的八进制表示法</span></span>
<span class="line"><span>var octalLiteral = 484;</span></span>
<span class="line"><span>var notANumber = NaN;</span></span>
<span class="line"><span>var infinityNumber = Infinity;</span></span></code></pre></div><p>其中 <code>0b1010</code> 和 <code>0o744</code> 是 <a href="http://es6.ruanyifeng.com/#docs/number#%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%92%8C%E5%85%AB%E8%BF%9B%E5%88%B6%E8%A1%A8%E7%A4%BA%E6%B3%95" target="_blank" rel="noreferrer">ES6 中的二进制和八进制表示法</a>，它们会被编译为十进制数字。</p><h2 id="字符串§" tabindex="-1">字符串<a href="http://ts.xcatliu.com/basics/primitive-data-types.html#%E5%AD%97%E7%AC%A6%E4%B8%B2" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#字符串§" aria-label="Permalink to &quot;字符串[§](http://ts.xcatliu.com/basics/primitive-data-types.html#字符串)&quot;">​</a></h2><p>使用 <code>string</code> 定义字符串类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let myName: string = &#39;Tom&#39;;</span></span>
<span class="line"><span>let myAge: number = 25;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 模板字符串</span></span>
<span class="line"><span>let sentence: string = \`Hello, my name is \${myName}.</span></span>
<span class="line"><span>I&#39;ll be \${myAge + 1} years old next month.\`;</span></span></code></pre></div><p>编译结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var myName = &#39;Tom&#39;;</span></span>
<span class="line"><span>var myAge = 25;</span></span>
<span class="line"><span>// 模板字符串</span></span>
<span class="line"><span>var sentence = &quot;Hello, my name is &quot; + myName + &quot;.\\nI&#39;ll be &quot; + (myAge + 1) + &quot; years old next month.&quot;;</span></span></code></pre></div><p>其中 \`\`\` 用来定义 <a href="http://es6.ruanyifeng.com/#docs/string#%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2" target="_blank" rel="noreferrer">ES6 中的模板字符串</a>，<code>\${expr}</code> 用来在模板字符串中嵌入表达式。</p><h2 id="空值§" tabindex="-1">空值<a href="http://ts.xcatliu.com/basics/primitive-data-types.html#%E7%A9%BA%E5%80%BC" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#空值§" aria-label="Permalink to &quot;空值[§](http://ts.xcatliu.com/basics/primitive-data-types.html#空值)&quot;">​</a></h2><p>JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 <code>void</code> 表示没有任何返回值的函数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function alertName(): void {</span></span>
<span class="line"><span>    alert(&#39;My name is Tom&#39;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>声明一个 <code>void</code> 类型的变量没有什么用，因为你只能将它赋值为 <code>undefined</code> 和 <code>null</code>（只在 --strictNullChecks 未指定时）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let unusable: void = undefined;</span></span></code></pre></div><h2 id="null-和-undefined§" tabindex="-1">Null 和 Undefined<a href="http://ts.xcatliu.com/basics/primitive-data-types.html#null-%E5%92%8C-undefined" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#null-和-undefined§" aria-label="Permalink to &quot;Null 和 Undefined[§](http://ts.xcatliu.com/basics/primitive-data-types.html#null-和-undefined)&quot;">​</a></h2><p>在 TypeScript 中，可以使用 <code>null</code> 和 <code>undefined</code> 来定义这两个原始数据类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let u: undefined = undefined;</span></span>
<span class="line"><span>let n: null = null;</span></span></code></pre></div><p>与 <code>void</code> 的区别是，<code>undefined</code> 和 <code>null</code> 是所有类型的子类型。也就是说 <code>undefined</code> 类型的变量，可以赋值给 <code>number</code> 类型的变量：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 这样不会报错</span></span>
<span class="line"><span>let num: number = undefined;</span></span>
<span class="line"><span>// 这样也不会报错</span></span>
<span class="line"><span>let u: undefined;</span></span>
<span class="line"><span>let num: number = u;</span></span></code></pre></div><p>而 <code>void</code> 类型的变量不能赋值给 <code>number</code> 类型的变量：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let u: void;</span></span>
<span class="line"><span>let num: number = u;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Type &#39;void&#39; is not assignable to type &#39;number&#39;.</span></span></code></pre></div><h2 id="参考§" tabindex="-1">参考<a href="http://ts.xcatliu.com/basics/primitive-data-types.html#%E5%8F%82%E8%80%83" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#参考§" aria-label="Permalink to &quot;参考[§](http://ts.xcatliu.com/basics/primitive-data-types.html#参考)&quot;">​</a></h2><ul><li><a href="http://www.typescriptlang.org/docs/handbook/basic-types.html" target="_blank" rel="noreferrer">Basic Types</a>（[中文版](<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic" target="_blank" rel="noreferrer">https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic</a> Types.html)）</li><li><a href="https://developer.mozilla.org/en-US/docs/Glossary/Primitive" target="_blank" rel="noreferrer">Primitive data types</a></li><li>[ES6 中的新类型 <code>Symbol</code>][]</li><li><a href="http://es6.ruanyifeng.com/#docs/number#%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%92%8C%E5%85%AB%E8%BF%9B%E5%88%B6%E8%A1%A8%E7%A4%BA%E6%B3%95" target="_blank" rel="noreferrer">ES6 中的二进制和八进制表示法</a></li><li><a href="http://es6.ruanyifeng.com/#docs/string#%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2" target="_blank" rel="noreferrer">ES6 中的模板字符串</a></li></ul><h1 id="任意值" tabindex="-1">任意值 <a class="header-anchor" href="#任意值" aria-label="Permalink to &quot;任意值&quot;">​</a></h1><p>任意值（Any）用来表示允许赋值为任意类型。</p><h2 id="什么是任意值类型§" tabindex="-1">什么是任意值类型<a href="http://ts.xcatliu.com/basics/any.html#%E4%BB%80%E4%B9%88%E6%98%AF%E4%BB%BB%E6%84%8F%E5%80%BC%E7%B1%BB%E5%9E%8B" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#什么是任意值类型§" aria-label="Permalink to &quot;什么是任意值类型[§](http://ts.xcatliu.com/basics/any.html#什么是任意值类型)&quot;">​</a></h2><p>如果是一个普通类型，在赋值过程中改变类型是不被允许的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let myFavoriteNumber: string = &#39;seven&#39;;</span></span>
<span class="line"><span>myFavoriteNumber = 7;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(2,1): error TS2322: Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span></span></code></pre></div><p>但如果是 <code>any</code> 类型，则允许被赋值为任意类型。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let myFavoriteNumber: any = &#39;seven&#39;;</span></span>
<span class="line"><span>myFavoriteNumber = 7;</span></span></code></pre></div><h2 id="任意值的属性和方法§" tabindex="-1">任意值的属性和方法<a href="http://ts.xcatliu.com/basics/any.html#%E4%BB%BB%E6%84%8F%E5%80%BC%E7%9A%84%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#任意值的属性和方法§" aria-label="Permalink to &quot;任意值的属性和方法[§](http://ts.xcatliu.com/basics/any.html#任意值的属性和方法)&quot;">​</a></h2><p>在任意值上访问任何属性都是允许的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let anyThing: any = &#39;hello&#39;;</span></span>
<span class="line"><span>console.log(anyThing.myName);</span></span>
<span class="line"><span>console.log(anyThing.myName.firstName);</span></span></code></pre></div><p>也允许调用任何方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let anyThing: any = &#39;Tom&#39;;</span></span>
<span class="line"><span>anyThing.setName(&#39;Jerry&#39;);</span></span>
<span class="line"><span>anyThing.setName(&#39;Jerry&#39;).sayHello();</span></span>
<span class="line"><span>anyThing.myName.setFirstName(&#39;Cat&#39;);</span></span></code></pre></div><p>可以认为，<strong>声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值</strong>。</p><h2 id="未声明类型的变量§" tabindex="-1">未声明类型的变量<a href="http://ts.xcatliu.com/basics/any.html#%E6%9C%AA%E5%A3%B0%E6%98%8E%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%8F%98%E9%87%8F" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#未声明类型的变量§" aria-label="Permalink to &quot;未声明类型的变量[§](http://ts.xcatliu.com/basics/any.html#未声明类型的变量)&quot;">​</a></h2><p><strong>变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let something;</span></span>
<span class="line"><span>something = &#39;seven&#39;;</span></span>
<span class="line"><span>something = 7;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>something.setName(&#39;Tom&#39;);</span></span></code></pre></div><p>等价于</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let something: any;</span></span>
<span class="line"><span>something = &#39;seven&#39;;</span></span>
<span class="line"><span>something = 7;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>something.setName(&#39;Tom&#39;);</span></span></code></pre></div><h2 id="参考§-1" tabindex="-1">参考<a href="http://ts.xcatliu.com/basics/any.html#%E5%8F%82%E8%80%83" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#参考§-1" aria-label="Permalink to &quot;参考[§](http://ts.xcatliu.com/basics/any.html#参考)&quot;">​</a></h2><ul><li><a href="http://www.typescriptlang.org/docs/handbook/basic-types.html#any" target="_blank" rel="noreferrer">Basic Types # Any</a>（[中文版](<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic" target="_blank" rel="noreferrer">https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic</a> Types.html#任意值)）</li></ul><h1 id="类型推论" tabindex="-1">类型推论 <a class="header-anchor" href="#类型推论" aria-label="Permalink to &quot;类型推论&quot;">​</a></h1><p>如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。</p><h2 id="什么是类型推论§" tabindex="-1">什么是类型推论<a href="http://ts.xcatliu.com/basics/type-inference.html#%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E5%9E%8B%E6%8E%A8%E8%AE%BA" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#什么是类型推论§" aria-label="Permalink to &quot;什么是类型推论[§](http://ts.xcatliu.com/basics/type-inference.html#什么是类型推论)&quot;">​</a></h2><p>以下代码虽然没有指定类型，但是会在编译的时候报错：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let myFavoriteNumber = &#39;seven&#39;;</span></span>
<span class="line"><span>myFavoriteNumber = 7;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(2,1): error TS2322: Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span></span></code></pre></div><p>事实上，它等价于：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let myFavoriteNumber: string = &#39;seven&#39;;</span></span>
<span class="line"><span>myFavoriteNumber = 7;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(2,1): error TS2322: Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span></span></code></pre></div><p>TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。</p><p><strong>如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 <code>any</code> 类型而完全不被类型检查</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let myFavoriteNumber;</span></span>
<span class="line"><span>myFavoriteNumber = &#39;seven&#39;;</span></span>
<span class="line"><span>myFavoriteNumber = 7;</span></span></code></pre></div><h2 id="参考§-2" tabindex="-1">参考<a href="http://ts.xcatliu.com/basics/type-inference.html#%E5%8F%82%E8%80%83" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#参考§-2" aria-label="Permalink to &quot;参考[§](http://ts.xcatliu.com/basics/type-inference.html#参考)&quot;">​</a></h2><ul><li><a href="http://www.typescriptlang.org/docs/handbook/type-inference.html" target="_blank" rel="noreferrer">Type Inference</a>（[中文版](<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type" target="_blank" rel="noreferrer">https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type</a> Inference.html)）</li></ul><h1 id="联合类型" tabindex="-1">联合类型 <a class="header-anchor" href="#联合类型" aria-label="Permalink to &quot;联合类型&quot;">​</a></h1><p>联合类型（Union Types）表示取值可以为多种类型中的一种。</p><h2 id="简单的例子§" tabindex="-1">简单的例子<a href="http://ts.xcatliu.com/basics/union-types.html#%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#简单的例子§" aria-label="Permalink to &quot;简单的例子[§](http://ts.xcatliu.com/basics/union-types.html#简单的例子)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let myFavoriteNumber: string | number;</span></span>
<span class="line"><span>myFavoriteNumber = &#39;seven&#39;;</span></span>
<span class="line"><span>myFavoriteNumber = 7;</span></span>
<span class="line"><span>let myFavoriteNumber: string | number;</span></span>
<span class="line"><span>myFavoriteNumber = true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(2,1): error TS2322: Type &#39;boolean&#39; is not assignable to type &#39;string | number&#39;.</span></span>
<span class="line"><span>//   Type &#39;boolean&#39; is not assignable to type &#39;number&#39;.</span></span></code></pre></div><p>联合类型使用 <code>|</code> 分隔每个类型。</p><p>这里的 <code>let myFavoriteNumber: string | number</code> 的含义是，允许 <code>myFavoriteNumber</code> 的类型是 <code>string</code> 或者 <code>number</code>，但是不能是其他类型。</p><h2 id="访问联合类型的属性或方法§" tabindex="-1">访问联合类型的属性或方法<a href="http://ts.xcatliu.com/basics/union-types.html#%E8%AE%BF%E9%97%AE%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%B1%9E%E6%80%A7%E6%88%96%E6%96%B9%E6%B3%95" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#访问联合类型的属性或方法§" aria-label="Permalink to &quot;访问联合类型的属性或方法[§](http://ts.xcatliu.com/basics/union-types.html#访问联合类型的属性或方法)&quot;">​</a></h2><p>当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们<strong>只能访问此联合类型的所有类型里共有的属性或方法</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function getLength(something: string | number): number {</span></span>
<span class="line"><span>    return something.length;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(2,22): error TS2339: Property &#39;length&#39; does not exist on type &#39;string | number&#39;.</span></span>
<span class="line"><span>//   Property &#39;length&#39; does not exist on type &#39;number&#39;.</span></span></code></pre></div><p>上例中，<code>length</code> 不是 <code>string</code> 和 <code>number</code> 的共有属性，所以会报错。</p><p>访问 <code>string</code> 和 <code>number</code> 的共有属性是没问题的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function getString(something: string | number): string {</span></span>
<span class="line"><span>    return something.toString();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let myFavoriteNumber: string | number;</span></span>
<span class="line"><span>myFavoriteNumber = &#39;seven&#39;;</span></span>
<span class="line"><span>console.log(myFavoriteNumber.length); // 5</span></span>
<span class="line"><span>myFavoriteNumber = 7;</span></span>
<span class="line"><span>console.log(myFavoriteNumber.length); // 编译时报错</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(5,30): error TS2339: Property &#39;length&#39; does not exist on type &#39;number&#39;.</span></span></code></pre></div><p>上例中，第二行的 <code>myFavoriteNumber</code> 被推断成了 <code>string</code>，访问它的 <code>length</code> 属性不会报错。</p><p>而第四行的 <code>myFavoriteNumber</code> 被推断成了 <code>number</code>，访问它的 <code>length</code> 属性时就报错了。</p><h2 id="参考§-3" tabindex="-1">参考<a href="http://ts.xcatliu.com/basics/union-types.html#%E5%8F%82%E8%80%83" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#参考§-3" aria-label="Permalink to &quot;参考[§](http://ts.xcatliu.com/basics/union-types.html#参考)&quot;">​</a></h2><ul><li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types" target="_blank" rel="noreferrer">Advanced Types # Union Types</a>（[中文版](<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced" target="_blank" rel="noreferrer">https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced</a> Types.html#联合类型)）</li></ul><h1 id="对象的类型——接口" tabindex="-1">对象的类型——接口 <a class="header-anchor" href="#对象的类型——接口" aria-label="Permalink to &quot;对象的类型——接口&quot;">​</a></h1><p>在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。</p><h2 id="什么是接口§" tabindex="-1">什么是接口<a href="http://ts.xcatliu.com/basics/type-of-object-interfaces.html#%E4%BB%80%E4%B9%88%E6%98%AF%E6%8E%A5%E5%8F%A3" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#什么是接口§" aria-label="Permalink to &quot;什么是接口[§](http://ts.xcatliu.com/basics/type-of-object-interfaces.html#什么是接口)&quot;">​</a></h2><p>在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。</p><p>TypeScript 中的接口是一个非常灵活的概念，除了可用于<a href="http://ts.xcatliu.com/advanced/class-and-interfaces.html#%E7%B1%BB%E5%AE%9E%E7%8E%B0%E6%8E%A5%E5%8F%A3" target="_blank" rel="noreferrer">对类的一部分行为进行抽象</a>以外，也常用于对「对象的形状（Shape）」进行描述。</p><h2 id="简单的例子§-1" tabindex="-1">简单的例子<a href="http://ts.xcatliu.com/basics/type-of-object-interfaces.html#%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#简单的例子§-1" aria-label="Permalink to &quot;简单的例子[§](http://ts.xcatliu.com/basics/type-of-object-interfaces.html#简单的例子)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Person {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    age: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let tom: Person = {</span></span>
<span class="line"><span>    name: &#39;Tom&#39;,</span></span>
<span class="line"><span>    age: 25</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>上面的例子中，我们定义了一个接口 <code>Person</code>，接着定义了一个变量 <code>tom</code>，它的类型是 <code>Person</code>。这样，我们就约束了 <code>tom</code> 的形状必须和接口 <code>Person</code> 一致。</p><p>接口一般首字母大写。<a href="https://msdn.microsoft.com/en-us/library/8bc1fexb(v=vs.71).aspx" target="_blank" rel="noreferrer">有的编程语言中会建议接口的名称加上 <code>I</code> 前缀</a>。</p><p>定义的变量比接口少了一些属性是不允许的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Person {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    age: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let tom: Person = {</span></span>
<span class="line"><span>    name: &#39;Tom&#39;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(6,5): error TS2322: Type &#39;{ name: string; }&#39; is not assignable to type &#39;Person&#39;.</span></span>
<span class="line"><span>//   Property &#39;age&#39; is missing in type &#39;{ name: string; }&#39;.</span></span></code></pre></div><p>多一些属性也是不允许的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Person {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    age: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let tom: Person = {</span></span>
<span class="line"><span>    name: &#39;Tom&#39;,</span></span>
<span class="line"><span>    age: 25,</span></span>
<span class="line"><span>    gender: &#39;male&#39;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(9,5): error TS2322: Type &#39;{ name: string; age: number; gender: string; }&#39; is not assignable to type &#39;Person&#39;.</span></span>
<span class="line"><span>//   Object literal may only specify known properties, and &#39;gender&#39; does not exist in type &#39;Person&#39;.</span></span></code></pre></div><p>可见，<strong>赋值的时候，变量的形状必须和接口的形状保持一致</strong>。</p><h2 id="可选属性§" tabindex="-1">可选属性<a href="http://ts.xcatliu.com/basics/type-of-object-interfaces.html#%E5%8F%AF%E9%80%89%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#可选属性§" aria-label="Permalink to &quot;可选属性[§](http://ts.xcatliu.com/basics/type-of-object-interfaces.html#可选属性)&quot;">​</a></h2><p>有时我们希望不要完全匹配一个形状，那么可以用可选属性：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Person {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    age?: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let tom: Person = {</span></span>
<span class="line"><span>    name: &#39;Tom&#39;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>interface Person {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    age?: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let tom: Person = {</span></span>
<span class="line"><span>    name: &#39;Tom&#39;,</span></span>
<span class="line"><span>    age: 25</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>可选属性的含义是该属性可以不存在。</p><p>这时<strong>仍然不允许添加未定义的属性</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Person {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    age?: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let tom: Person = {</span></span>
<span class="line"><span>    name: &#39;Tom&#39;,</span></span>
<span class="line"><span>    age: 25,</span></span>
<span class="line"><span>    gender: &#39;male&#39;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// examples/playground/index.ts(9,5): error TS2322: Type &#39;{ name: string; age: number; gender: string; }&#39; is not assignable to type &#39;Person&#39;.</span></span>
<span class="line"><span>//   Object literal may only specify known properties, and &#39;gender&#39; does not exist in type &#39;Person&#39;.</span></span></code></pre></div><h2 id="任意属性§" tabindex="-1">任意属性<a href="http://ts.xcatliu.com/basics/type-of-object-interfaces.html#%E4%BB%BB%E6%84%8F%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#任意属性§" aria-label="Permalink to &quot;任意属性[§](http://ts.xcatliu.com/basics/type-of-object-interfaces.html#任意属性)&quot;">​</a></h2><p>有时候我们希望一个接口允许有任意的属性，可以使用如下方式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Person {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    age?: number;</span></span>
<span class="line"><span>    [propName: string]: any;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let tom: Person = {</span></span>
<span class="line"><span>    name: &#39;Tom&#39;,</span></span>
<span class="line"><span>    gender: &#39;male&#39;</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>使用 <code>[propName: string]</code> 定义了任意属性取 <code>string</code> 类型的值。</p><p>需要注意的是，<strong>一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Person {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    age?: number;</span></span>
<span class="line"><span>    [propName: string]: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let tom: Person = {</span></span>
<span class="line"><span>    name: &#39;Tom&#39;,</span></span>
<span class="line"><span>    age: 25,</span></span>
<span class="line"><span>    gender: &#39;male&#39;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(3,5): error TS2411: Property &#39;age&#39; of type &#39;number&#39; is not assignable to string index type &#39;string&#39;.</span></span>
<span class="line"><span>// index.ts(7,5): error TS2322: Type &#39;{ [x: string]: string | number; name: string; age: number; gender: string; }&#39; is not assignable to type &#39;Person&#39;.</span></span>
<span class="line"><span>//   Index signatures are incompatible.</span></span>
<span class="line"><span>//     Type &#39;string | number&#39; is not assignable to type &#39;string&#39;.</span></span>
<span class="line"><span>//       Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span></span></code></pre></div><p>上例中，任意属性的值允许是 <code>string</code>，但是可选属性 <code>age</code> 的值却是 <code>number</code>，<code>number</code> 不是 <code>string</code> 的子属性，所以报错了。</p><p>另外，在报错信息中可以看出，此时 <code>{ name: &#39;Tom&#39;, age: 25, gender: &#39;male&#39; }</code> 的类型被推断成了 <code>{ [x: string]: string | number; name: string; age: number; gender: string; }</code>，这是联合类型和接口的结合。</p><p>一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Person {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    age?: number;</span></span>
<span class="line"><span>    [propName: string]: string | number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let tom: Person = {</span></span>
<span class="line"><span>    name: &#39;Tom&#39;,</span></span>
<span class="line"><span>    age: 25,</span></span>
<span class="line"><span>    gender: &#39;male&#39;</span></span>
<span class="line"><span>};</span></span></code></pre></div><h2 id="只读属性§" tabindex="-1">只读属性<a href="http://ts.xcatliu.com/basics/type-of-object-interfaces.html#%E5%8F%AA%E8%AF%BB%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#只读属性§" aria-label="Permalink to &quot;只读属性[§](http://ts.xcatliu.com/basics/type-of-object-interfaces.html#只读属性)&quot;">​</a></h2><p>有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 <code>readonly</code> 定义只读属性：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Person {</span></span>
<span class="line"><span>    readonly id: number;</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    age?: number;</span></span>
<span class="line"><span>    [propName: string]: any;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let tom: Person = {</span></span>
<span class="line"><span>    id: 89757,</span></span>
<span class="line"><span>    name: &#39;Tom&#39;,</span></span>
<span class="line"><span>    gender: &#39;male&#39;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tom.id = 9527;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(14,5): error TS2540: Cannot assign to &#39;id&#39; because it is a constant or a read-only property.</span></span></code></pre></div><p>上例中，使用 <code>readonly</code> 定义的属性 <code>id</code> 初始化后，又被赋值了，所以报错了。</p><p><strong>注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Person {</span></span>
<span class="line"><span>    readonly id: number;</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    age?: number;</span></span>
<span class="line"><span>    [propName: string]: any;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let tom: Person = {</span></span>
<span class="line"><span>    name: &#39;Tom&#39;,</span></span>
<span class="line"><span>    gender: &#39;male&#39;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tom.id = 89757;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(8,5): error TS2322: Type &#39;{ name: string; gender: string; }&#39; is not assignable to type &#39;Person&#39;.</span></span>
<span class="line"><span>//   Property &#39;id&#39; is missing in type &#39;{ name: string; gender: string; }&#39;.</span></span>
<span class="line"><span>// index.ts(13,5): error TS2540: Cannot assign to &#39;id&#39; because it is a constant or a read-only property.</span></span></code></pre></div><p>上例中，报错信息有两处，第一处是在对 <code>tom</code> 进行赋值的时候，没有给 <code>id</code> 赋值。</p><p>第二处是在给 <code>tom.id</code> 赋值的时候，由于它是只读属性，所以报错了。</p><h2 id="参考§-4" tabindex="-1">参考<a href="http://ts.xcatliu.com/basics/type-of-object-interfaces.html#%E5%8F%82%E8%80%83" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#参考§-4" aria-label="Permalink to &quot;参考[§](http://ts.xcatliu.com/basics/type-of-object-interfaces.html#参考)&quot;">​</a></h2><ul><li><a href="http://www.typescriptlang.org/docs/handbook/interfaces.html" target="_blank" rel="noreferrer">Interfaces</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html" target="_blank" rel="noreferrer">中文版</a>）</li></ul><h1 id="数组的类型" tabindex="-1">数组的类型 <a class="header-anchor" href="#数组的类型" aria-label="Permalink to &quot;数组的类型&quot;">​</a></h1><p>在 TypeScript 中，数组类型有多种定义方式，比较灵活。</p><h2 id="「类型-方括号」表示法§" tabindex="-1">「类型 + 方括号」表示法<a href="http://ts.xcatliu.com/basics/type-of-array.html#%E7%B1%BB%E5%9E%8B--%E6%96%B9%E6%8B%AC%E5%8F%B7%E8%A1%A8%E7%A4%BA%E6%B3%95" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#「类型-方括号」表示法§" aria-label="Permalink to &quot;「类型 + 方括号」表示法[§](http://ts.xcatliu.com/basics/type-of-array.html#类型--方括号表示法)&quot;">​</a></h2><p>最简单的方法是使用「类型 + 方括号」来表示数组：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let fibonacci: number[] = [1, 1, 2, 3, 5];</span></span></code></pre></div><p>数组的项中<strong>不允许</strong>出现其他的类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let fibonacci: number[] = [1, &#39;1&#39;, 2, 3, 5];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Type &#39;string&#39; is not assignable to type &#39;number&#39;.</span></span></code></pre></div><p>数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let fibonacci: number[] = [1, 1, 2, 3, 5];</span></span>
<span class="line"><span>fibonacci.push(&#39;8&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Argument of type &#39;&quot;8&quot;&#39; is not assignable to parameter of type &#39;number&#39;.</span></span></code></pre></div><p>上例中，<code>push</code> 方法只允许传入 <code>number</code> 类型的参数，但是却传了一个 <code>&quot;8&quot;</code> 类型的参数，所以报错了。这里 <code>&quot;8&quot;</code> 是一个字符串字面量类型，会在后续章节中详细介绍。</p><h2 id="数组泛型§" tabindex="-1">数组泛型<a href="http://ts.xcatliu.com/basics/type-of-array.html#%E6%95%B0%E7%BB%84%E6%B3%9B%E5%9E%8B" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#数组泛型§" aria-label="Permalink to &quot;数组泛型[§](http://ts.xcatliu.com/basics/type-of-array.html#数组泛型)&quot;">​</a></h2><p>我们也可以使用数组泛型（Array Generic） <code>Array&lt;elemType&gt;</code> 来表示数组：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let fibonacci: Array&lt;number&gt; = [1, 1, 2, 3, 5];</span></span></code></pre></div><p>关于泛型，可以参考<a href="http://ts.xcatliu.com/advanced/generics.html" target="_blank" rel="noreferrer">泛型</a>一章。</p><h2 id="用接口表示数组§" tabindex="-1">用接口表示数组<a href="http://ts.xcatliu.com/basics/type-of-array.html#%E7%94%A8%E6%8E%A5%E5%8F%A3%E8%A1%A8%E7%A4%BA%E6%95%B0%E7%BB%84" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#用接口表示数组§" aria-label="Permalink to &quot;用接口表示数组[§](http://ts.xcatliu.com/basics/type-of-array.html#用接口表示数组)&quot;">​</a></h2><p>接口也可以用来描述数组：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface NumberArray {</span></span>
<span class="line"><span>    [index: number]: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let fibonacci: NumberArray = [1, 1, 2, 3, 5];</span></span></code></pre></div><p><code>NumberArray</code> 表示：只要索引的类型是数字时，那么值的类型必须是数字。</p><p>虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。</p><p>不过有一种情况例外，那就是它常用来表示类数组。</p><h2 id="类数组§" tabindex="-1">类数组<a href="http://ts.xcatliu.com/basics/type-of-array.html#%E7%B1%BB%E6%95%B0%E7%BB%84" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#类数组§" aria-label="Permalink to &quot;类数组[§](http://ts.xcatliu.com/basics/type-of-array.html#类数组)&quot;">​</a></h2><p>类数组（Array-like Object）不是数组类型，比如 <code>arguments</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function sum() {</span></span>
<span class="line"><span>    let args: number[] = arguments;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Type &#39;IArguments&#39; is missing the following properties from type &#39;number[]&#39;: pop, push, concat, join, and 24 more.</span></span></code></pre></div><p>上例中，<code>arguments</code> 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function sum() {</span></span>
<span class="line"><span>    let args: {</span></span>
<span class="line"><span>        [index: number]: number;</span></span>
<span class="line"><span>        length: number;</span></span>
<span class="line"><span>        callee: Function;</span></span>
<span class="line"><span>    } = arguments;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这个例子中，我们除了约束当索引的类型是数字时，值的类型必须是数字之外，也约束了它还有 <code>length</code> 和 <code>callee</code> 两个属性。</p><p>事实上常用的类数组都有自己的接口定义，如 <code>IArguments</code>, <code>NodeList</code>, <code>HTMLCollection</code> 等：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function sum() {</span></span>
<span class="line"><span>    let args: IArguments = arguments;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>其中 <code>IArguments</code> 是 TypeScript 中定义好了的类型，它实际上就是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface IArguments {</span></span>
<span class="line"><span>    [index: number]: any;</span></span>
<span class="line"><span>    length: number;</span></span>
<span class="line"><span>    callee: Function;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>关于内置对象，可以参考<a href="http://ts.xcatliu.com/basics/built-in-objects.html" target="_blank" rel="noreferrer">内置对象</a>一章。</p><h2 id="any-在数组中的应用§" tabindex="-1">any 在数组中的应用<a href="http://ts.xcatliu.com/basics/type-of-array.html#any-%E5%9C%A8%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E5%BA%94%E7%94%A8" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#any-在数组中的应用§" aria-label="Permalink to &quot;any 在数组中的应用[§](http://ts.xcatliu.com/basics/type-of-array.html#any-在数组中的应用)&quot;">​</a></h2><p>一个比较常见的做法是，用 <code>any</code> 表示数组中允许出现任意类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let list: any[] = [&#39;xcatliu&#39;, 25, { website: &#39;http://xcatliu.com&#39; }];</span></span></code></pre></div><h2 id="参考§-5" tabindex="-1">参考<a href="http://ts.xcatliu.com/basics/type-of-array.html#%E5%8F%82%E8%80%83" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#参考§-5" aria-label="Permalink to &quot;参考[§](http://ts.xcatliu.com/basics/type-of-array.html#参考)&quot;">​</a></h2><ul><li><a href="http://www.typescriptlang.org/docs/handbook/basic-types.html#array" target="_blank" rel="noreferrer">Basic Types # Array</a>（[中文版](<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic" target="_blank" rel="noreferrer">https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic</a> Types.html#数组)）</li><li><a href="http://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types" target="_blank" rel="noreferrer">Interfaces # Indexable Types</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html#%E6%95%B0%E7%BB%84%E7%B1%BB%E5%9E%8B" target="_blank" rel="noreferrer">中文版</a>）</li></ul><h1 id="函数的类型" tabindex="-1">函数的类型 <a class="header-anchor" href="#函数的类型" aria-label="Permalink to &quot;函数的类型&quot;">​</a></h1><blockquote><p><a href="https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch2.html" target="_blank" rel="noreferrer">函数是 JavaScript 中的一等公民</a></p></blockquote><h2 id="函数声明§" tabindex="-1">函数声明<a href="http://ts.xcatliu.com/basics/type-of-function.html#%E5%87%BD%E6%95%B0%E5%A3%B0%E6%98%8E" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#函数声明§" aria-label="Permalink to &quot;函数声明[§](http://ts.xcatliu.com/basics/type-of-function.html#函数声明)&quot;">​</a></h2><p>在 JavaScript 中，有两种常见的定义函数的方式——函数声明（Function Declaration）和函数表达式（Function Expression）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 函数声明（Function Declaration）</span></span>
<span class="line"><span>function sum(x, y) {</span></span>
<span class="line"><span>    return x + y;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 函数表达式（Function Expression）</span></span>
<span class="line"><span>let mySum = function (x, y) {</span></span>
<span class="line"><span>    return x + y;</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function sum(x: number, y: number): number {</span></span>
<span class="line"><span>    return x + y;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注意，<strong>输入多余的（或者少于要求的）参数，是不被允许的</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function sum(x: number, y: number): number {</span></span>
<span class="line"><span>    return x + y;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>sum(1, 2, 3);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(4,1): error TS2346: Supplied parameters do not match any signature of call target.</span></span>
<span class="line"><span>function sum(x: number, y: number): number {</span></span>
<span class="line"><span>    return x + y;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>sum(1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(4,1): error TS2346: Supplied parameters do not match any signature of call target.</span></span></code></pre></div><h2 id="函数表达式§" tabindex="-1">函数表达式<a href="http://ts.xcatliu.com/basics/type-of-function.html#%E5%87%BD%E6%95%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#函数表达式§" aria-label="Permalink to &quot;函数表达式[§](http://ts.xcatliu.com/basics/type-of-function.html#函数表达式)&quot;">​</a></h2><p>如果要我们现在写一个对函数表达式（Function Expression）的定义，可能会写成这样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let mySum = function (x: number, y: number): number {</span></span>
<span class="line"><span>    return x + y;</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 <code>mySum</code>，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 <code>mySum</code> 添加类型，则应该是这样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let mySum: (x: number, y: number) =&gt; number = function (x: number, y: number): number {</span></span>
<span class="line"><span>    return x + y;</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>注意不要混淆了 TypeScript 中的 <code>=&gt;</code> 和 ES6 中的 <code>=&gt;</code>。</p><p>在 TypeScript 的类型定义中，<code>=&gt;</code> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。</p><p>在 ES6 中，<code>=&gt;</code> 叫做箭头函数，应用十分广泛，可以参考 <a href="http://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0" target="_blank" rel="noreferrer">ES6 中的箭头函数</a>。</p><h2 id="用接口定义函数的形状§" tabindex="-1">用接口定义函数的形状<a href="http://ts.xcatliu.com/basics/type-of-function.html#%E7%94%A8%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89%E5%87%BD%E6%95%B0%E7%9A%84%E5%BD%A2%E7%8A%B6" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#用接口定义函数的形状§" aria-label="Permalink to &quot;用接口定义函数的形状[§](http://ts.xcatliu.com/basics/type-of-function.html#用接口定义函数的形状)&quot;">​</a></h2><p>我们也可以使用接口的方式来定义一个函数需要符合的形状：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface SearchFunc {</span></span>
<span class="line"><span>    (source: string, subString: string): boolean;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let mySearch: SearchFunc;</span></span>
<span class="line"><span>mySearch = function(source: string, subString: string) {</span></span>
<span class="line"><span>    return source.search(subString) !== -1;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>采用函数表达式|接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。</p><h2 id="可选参数§" tabindex="-1">可选参数<a href="http://ts.xcatliu.com/basics/type-of-function.html#%E5%8F%AF%E9%80%89%E5%8F%82%E6%95%B0" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#可选参数§" aria-label="Permalink to &quot;可选参数[§](http://ts.xcatliu.com/basics/type-of-function.html#可选参数)&quot;">​</a></h2><p>前面提到，输入多余的（或者少于要求的）参数，是不允许的。那么如何定义可选的参数呢？</p><p>与接口中的可选属性类似，我们用 <code>?</code> 表示可选的参数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function buildName(firstName: string, lastName?: string) {</span></span>
<span class="line"><span>    if (lastName) {</span></span>
<span class="line"><span>        return firstName + &#39; &#39; + lastName;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        return firstName;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let tomcat = buildName(&#39;Tom&#39;, &#39;Cat&#39;);</span></span>
<span class="line"><span>let tom = buildName(&#39;Tom&#39;);</span></span></code></pre></div><p>需要注意的是，可选参数必须接在必需参数后面。换句话说，<strong>可选参数后面不允许再出现必需参数了</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function buildName(firstName?: string, lastName: string) {</span></span>
<span class="line"><span>    if (firstName) {</span></span>
<span class="line"><span>        return firstName + &#39; &#39; + lastName;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        return lastName;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let tomcat = buildName(&#39;Tom&#39;, &#39;Cat&#39;);</span></span>
<span class="line"><span>let tom = buildName(undefined, &#39;Tom&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(1,40): error TS1016: A required parameter cannot follow an optional parameter.</span></span></code></pre></div><h2 id="参数默认值§" tabindex="-1">参数默认值<a href="http://ts.xcatliu.com/basics/type-of-function.html#%E5%8F%82%E6%95%B0%E9%BB%98%E8%AE%A4%E5%80%BC" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#参数默认值§" aria-label="Permalink to &quot;参数默认值[§](http://ts.xcatliu.com/basics/type-of-function.html#参数默认值)&quot;">​</a></h2><p>在 ES6 中，我们允许给函数的参数添加默认值，<strong>TypeScript 会将添加了默认值的参数识别为可选参数</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function buildName(firstName: string, lastName: string = &#39;Cat&#39;) {</span></span>
<span class="line"><span>    return firstName + &#39; &#39; + lastName;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let tomcat = buildName(&#39;Tom&#39;, &#39;Cat&#39;);</span></span>
<span class="line"><span>let tom = buildName(&#39;Tom&#39;);</span></span></code></pre></div><p>此时就不受「可选参数必须接在必需参数后面」的限制了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function buildName(firstName: string = &#39;Tom&#39;, lastName: string) {</span></span>
<span class="line"><span>    return firstName + &#39; &#39; + lastName;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let tomcat = buildName(&#39;Tom&#39;, &#39;Cat&#39;);</span></span>
<span class="line"><span>let cat = buildName(undefined, &#39;Cat&#39;);</span></span></code></pre></div><blockquote><p>关于默认参数，可以参考 <a href="http://es6.ruanyifeng.com/#docs/function#%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E7%9A%84%E9%BB%98%E8%AE%A4%E5%80%BC" target="_blank" rel="noreferrer">ES6 中函数参数的默认值</a>。</p></blockquote><h2 id="剩余参数§" tabindex="-1">剩余参数<a href="http://ts.xcatliu.com/basics/type-of-function.html#%E5%89%A9%E4%BD%99%E5%8F%82%E6%95%B0" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#剩余参数§" aria-label="Permalink to &quot;剩余参数[§](http://ts.xcatliu.com/basics/type-of-function.html#剩余参数)&quot;">​</a></h2><p>ES6 中，可以使用 <code>...rest</code> 的方式获取函数中的剩余参数（rest 参数）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function push(array, ...items) {</span></span>
<span class="line"><span>    items.forEach(function(item) {</span></span>
<span class="line"><span>        array.push(item);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let a: any[] = [];</span></span>
<span class="line"><span>push(a, 1, 2, 3);</span></span></code></pre></div><p>事实上，<code>items</code> 是一个数组。所以我们可以用数组的类型来定义它：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function push(array: any[], ...items: any[]) {</span></span>
<span class="line"><span>    items.forEach(function(item) {</span></span>
<span class="line"><span>        array.push(item);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let a = [];</span></span>
<span class="line"><span>push(a, 1, 2, 3);</span></span></code></pre></div><p>注意，rest 参数只能是最后一个参数，关于 rest 参数，可以参考 <a href="http://es6.ruanyifeng.com/#docs/function#rest%E5%8F%82%E6%95%B0" target="_blank" rel="noreferrer">ES6 中的 rest 参数</a>。</p><h2 id="重载§" tabindex="-1">重载<a href="http://ts.xcatliu.com/basics/type-of-function.html#%E9%87%8D%E8%BD%BD" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#重载§" aria-label="Permalink to &quot;重载[§](http://ts.xcatliu.com/basics/type-of-function.html#重载)&quot;">​</a></h2><p>重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。</p><p>比如，我们需要实现一个函数 <code>reverse</code>，输入数字 <code>123</code> 的时候，输出反转的数字 <code>321</code>，输入字符串 <code>&#39;hello&#39;</code> 的时候，输出反转的字符串 <code>&#39;olleh&#39;</code>。</p><p>利用联合类型，我们可以这么实现：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function reverse(x: number | string): number | string | void {</span></span>
<span class="line"><span>    if (typeof x === &#39;number&#39;) {</span></span>
<span class="line"><span>        return Number(x.toString().split(&#39;&#39;).reverse().join(&#39;&#39;));</span></span>
<span class="line"><span>    } else if (typeof x === &#39;string&#39;) {</span></span>
<span class="line"><span>        return x.split(&#39;&#39;).reverse().join(&#39;&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>然而这样有一个缺点，就是不能够精确的表达，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。</strong></p><p>这时，我们可以使用重载定义多个 <code>reverse</code> 的函数类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function reverse(x: number): number;</span></span>
<span class="line"><span>function reverse(x: string): string;</span></span>
<span class="line"><span>function reverse(x: number | string): number | string | void {</span></span>
<span class="line"><span>    if (typeof x === &#39;number&#39;) {</span></span>
<span class="line"><span>        return Number(x.toString().split(&#39;&#39;).reverse().join(&#39;&#39;));</span></span>
<span class="line"><span>    } else if (typeof x === &#39;string&#39;) {</span></span>
<span class="line"><span>        return x.split(&#39;&#39;).reverse().join(&#39;&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上例中，我们重复定义了多次函数 <code>reverse</code>，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。</p><p>注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。</p><h2 id="参考§-6" tabindex="-1">参考<a href="http://ts.xcatliu.com/basics/type-of-function.html#%E5%8F%82%E8%80%83" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#参考§-6" aria-label="Permalink to &quot;参考[§](http://ts.xcatliu.com/basics/type-of-function.html#参考)&quot;">​</a></h2><ul><li><a href="http://www.typescriptlang.org/docs/handbook/functions.html" target="_blank" rel="noreferrer">Functions</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Functions.html" target="_blank" rel="noreferrer">中文版</a>）</li><li><a href="http://www.typescriptlang.org/docs/handbook/interfaces.html#function-types" target="_blank" rel="noreferrer">Functions # Function Types</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html#%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B" target="_blank" rel="noreferrer">中文版</a>）</li><li><a href="https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/" target="_blank" rel="noreferrer">JS 函数式编程指南</a></li><li><a href="http://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0" target="_blank" rel="noreferrer">ES6 中的箭头函数</a></li><li><a href="http://es6.ruanyifeng.com/#docs/function#%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E7%9A%84%E9%BB%98%E8%AE%A4%E5%80%BC" target="_blank" rel="noreferrer">ES6 中函数参数的默认值</a></li><li><a href="http://es6.ruanyifeng.com/#docs/function#rest%E5%8F%82%E6%95%B0" target="_blank" rel="noreferrer">ES6 中的 rest 参数</a></li></ul><h1 id="类型断言" tabindex="-1">类型断言 <a class="header-anchor" href="#类型断言" aria-label="Permalink to &quot;类型断言&quot;">​</a></h1><p>类型断言（Type Assertion）可以用来手动指定一个值的类型。</p><h2 id="语法§" tabindex="-1">语法<a href="http://ts.xcatliu.com/basics/type-assertion.html#%E8%AF%AD%E6%B3%95" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#语法§" aria-label="Permalink to &quot;语法[§](http://ts.xcatliu.com/basics/type-assertion.html#语法)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>值 as 类型</span></span></code></pre></div><p>或</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;类型&gt;值</span></span></code></pre></div><p>在 tsx 语法（React 的 jsx 语法的 ts 版）中必须使用前者，即 <code>值 as 类型</code>。</p><p>形如 <code>&lt;Foo&gt;</code> 的语法在 tsx 中表示的是一个 <code>ReactNode</code>，在 ts 中除了表示类型断言之外，也可能是表示一个<a href="http://ts.xcatliu.com/advanced/generics.html" target="_blank" rel="noreferrer">泛型</a>。</p><p>故建议大家在使用类型断言时，统一使用 <code>值 as 类型</code> 这样的语法，本书中也会贯彻这一思想。</p><h2 id="类型断言的用途§" tabindex="-1">类型断言的用途<a href="http://ts.xcatliu.com/basics/type-assertion.html#%E7%B1%BB%E5%9E%8B%E6%96%AD%E8%A8%80%E7%9A%84%E7%94%A8%E9%80%94" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#类型断言的用途§" aria-label="Permalink to &quot;类型断言的用途[§](http://ts.xcatliu.com/basics/type-assertion.html#类型断言的用途)&quot;">​</a></h2><p>类型断言的常见用途有以下几种：</p><h3 id="将一个联合类型断言为其中一个类型§" tabindex="-1">将一个联合类型断言为其中一个类型<a href="http://ts.xcatliu.com/basics/type-assertion.html#%E5%B0%86%E4%B8%80%E4%B8%AA%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E6%96%AD%E8%A8%80%E4%B8%BA%E5%85%B6%E4%B8%AD%E4%B8%80%E4%B8%AA%E7%B1%BB%E5%9E%8B" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#将一个联合类型断言为其中一个类型§" aria-label="Permalink to &quot;将一个联合类型断言为其中一个类型[§](http://ts.xcatliu.com/basics/type-assertion.html#将一个联合类型断言为其中一个类型)&quot;">​</a></h3><p><a href="http://ts.xcatliu.com/basics/union-types.html#%E8%AE%BF%E9%97%AE%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%B1%9E%E6%80%A7%E6%88%96%E6%96%B9%E6%B3%95" target="_blank" rel="noreferrer">之前提到过</a>，当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们<strong>只能访问此联合类型的所有类型中共有的属性或方法</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Cat {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    run(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface Fish {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    swim(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function getName(animal: Cat | Fish) {</span></span>
<span class="line"><span>    return animal.name;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法，比如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Cat {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    run(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface Fish {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    swim(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function isFish(animal: Cat | Fish) {</span></span>
<span class="line"><span>    if (typeof animal.swim === &#39;function&#39;) {</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts:11:23 - error TS2339: Property &#39;swim&#39; does not exist on type &#39;Cat | Fish&#39;.</span></span>
<span class="line"><span>//   Property &#39;swim&#39; does not exist on type &#39;Cat&#39;.</span></span></code></pre></div><p>上面的例子中，获取 <code>animal.swim</code> 的时候会报错。</p><p>此时可以使用类型断言，将 <code>animal</code> 断言成 <code>Fish</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Cat {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    run(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface Fish {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    swim(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function isFish(animal: Cat | Fish) {</span></span>
<span class="line"><span>    if (typeof (animal as Fish).swim === &#39;function&#39;) {</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这样就可以解决访问 <code>animal.swim</code> 时报错的问题了。</p><p>需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Cat {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    run(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface Fish {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    swim(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function swim(animal: Cat | Fish) {</span></span>
<span class="line"><span>    (animal as Fish).swim();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tom: Cat = {</span></span>
<span class="line"><span>    name: &#39;Tom&#39;,</span></span>
<span class="line"><span>    run() { console.log(&#39;run&#39;) }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>swim(tom);</span></span>
<span class="line"><span>// Uncaught TypeError: animal.swim is not a function\`</span></span></code></pre></div><p>上面的例子编译时不会报错，但在运行时会报错：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Uncaught TypeError: animal.swim is not a function\`</span></span></code></pre></div><p>原因是 <code>(animal as Fish).swim()</code> 这段代码隐藏了 <code>animal</code> 可能为 <code>Cat</code> 的情况，将 <code>animal</code> 直接断言为 <code>Fish</code> 了，而 TypeScript 编译器信任了我们的断言，故在调用 <code>swim()</code> 时没有编译错误。</p><p>可是 <code>swim</code> 函数接受的参数是 <code>Cat | Fish</code>，一旦传入的参数是 <code>Cat</code> 类型的变量，由于 <code>Cat</code> 上没有 <code>swim</code> 方法，就会导致运行时错误了。</p><p>总之，使用类型断言时一定要格外小心，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误。</p><h3 id="将一个父类断言为更加具体的子类§" tabindex="-1">将一个父类断言为更加具体的子类<a href="http://ts.xcatliu.com/basics/type-assertion.html#%E5%B0%86%E4%B8%80%E4%B8%AA%E7%88%B6%E7%B1%BB%E6%96%AD%E8%A8%80%E4%B8%BA%E6%9B%B4%E5%8A%A0%E5%85%B7%E4%BD%93%E7%9A%84%E5%AD%90%E7%B1%BB" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#将一个父类断言为更加具体的子类§" aria-label="Permalink to &quot;将一个父类断言为更加具体的子类[§](http://ts.xcatliu.com/basics/type-assertion.html#将一个父类断言为更加具体的子类)&quot;">​</a></h3><p>当类之间有继承关系时，类型断言也是很常见的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class ApiError extends Error {</span></span>
<span class="line"><span>    code: number = 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class HttpError extends Error {</span></span>
<span class="line"><span>    statusCode: number = 200;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function isApiError(error: Error) {</span></span>
<span class="line"><span>    if (typeof (error as ApiError).code === &#39;number&#39;) {</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面的例子中，我们声明了函数 <code>isApiError</code>，它用来判断传入的参数是不是 <code>ApiError</code> 类型，为了实现这样一个函数，它的参数的类型肯定得是比较抽象的父类 <code>Error</code>，这样的话这个函数就能接受 <code>Error</code> 或它的子类作为参数了。</p><p>但是由于父类 <code>Error</code> 中没有 <code>code</code> 属性，故直接获取 <code>error.code</code> 会报错，需要使用类型断言获取 <code>(error as ApiError).code</code>。</p><p>大家可能会注意到，在这个例子中有一个更合适的方式来判断是不是 <code>ApiError</code>，那就是使用 <code>instanceof</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class ApiError extends Error {</span></span>
<span class="line"><span>    code: number = 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class HttpError extends Error {</span></span>
<span class="line"><span>    statusCode: number = 200;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function isApiError(error: Error) {</span></span>
<span class="line"><span>    if (error instanceof ApiError) {</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面的例子中，确实使用 <code>instanceof</code> 更加合适，因为 <code>ApiError</code> 是一个 JavaScript 的类，能够通过 <code>instanceof</code> 来判断 <code>error</code> 是否是它的实例。</p><p>但是有的情况下 <code>ApiError</code> 和 <code>HttpError</code> 不是一个真正的类，而只是一个 TypeScript 的接口（<code>interface</code>），接口是一个类型，不是一个真正的值，它在编译结果中会被删除，当然就无法使用 <code>instanceof</code> 来做运行时判断了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface ApiError extends Error {</span></span>
<span class="line"><span>    code: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface HttpError extends Error {</span></span>
<span class="line"><span>    statusCode: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function isApiError(error: Error) {</span></span>
<span class="line"><span>    if (error instanceof ApiError) {</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts:9:26 - error TS2693: &#39;ApiError&#39; only refers to a type, but is being used as a value here.</span></span></code></pre></div><p>此时就只能用类型断言，通过判断是否存在 <code>code</code> 属性，来判断传入的参数是不是 <code>ApiError</code> 了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface ApiError extends Error {</span></span>
<span class="line"><span>    code: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface HttpError extends Error {</span></span>
<span class="line"><span>    statusCode: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function isApiError(error: Error) {</span></span>
<span class="line"><span>    if (typeof (error as ApiError).code === &#39;number&#39;) {</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="将任何一个类型断言为-any§" tabindex="-1">将任何一个类型断言为 <code>any</code><a href="http://ts.xcatliu.com/basics/type-assertion.html#%E5%B0%86%E4%BB%BB%E4%BD%95%E4%B8%80%E4%B8%AA%E7%B1%BB%E5%9E%8B%E6%96%AD%E8%A8%80%E4%B8%BA-any" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#将任何一个类型断言为-any§" aria-label="Permalink to &quot;将任何一个类型断言为 \`any\`[§](http://ts.xcatliu.com/basics/type-assertion.html#将任何一个类型断言为-any)&quot;">​</a></h3><p>理想情况下，TypeScript 的类型系统运转良好，每个值的类型都具体而精确。</p><p>当我们引用一个在此类型上不存在的属性或方法时，就会报错：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const foo: number = 1;</span></span>
<span class="line"><span>foo.length = 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts:2:5 - error TS2339: Property &#39;length&#39; does not exist on type &#39;number&#39;.</span></span></code></pre></div><p>上面的例子中，数字类型的变量 <code>foo</code> 上是没有 <code>length</code> 属性的，故 TypeScript 给出了相应的错误提示。</p><p>这种错误提示显然是非常有用的。</p><p>但有的时候，我们非常确定这段代码不会出错，比如下面这个例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>window.foo = 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts:1:8 - error TS2339: Property &#39;foo&#39; does not exist on type &#39;Window &amp; typeof globalThis&#39;.</span></span></code></pre></div><p>上面的例子中，我们需要将 <code>window</code> 上添加一个属性 <code>foo</code>，但 TypeScript 编译时会报错，提示我们 <code>window</code> 上不存在 <code>foo</code> 属性。</p><p>此时我们可以使用 <code>as any</code> 临时将 <code>window</code> 断言为 <code>any</code> 类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>(window as any).foo = 1;</span></span></code></pre></div><p>在 <code>any</code> 类型的变量上，访问任何属性都是允许的。</p><p>需要注意的是，将一个变量断言为 <code>any</code> 可以说是解决 TypeScript 中类型问题的最后一个手段。</p><p><strong>它极有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要使用 <code>as any</code>。</strong></p><p>上面的例子中，我们也可以通过[扩展 window 的类型（TODO）][]解决这个错误，不过如果只是临时的增加 <code>foo</code> 属性，<code>as any</code> 会更加方便。</p><p>总之，<strong>一方面不能滥用 <code>as any</code>，另一方面也不要完全否定它的作用，我们需要在类型的严格性和开发的便利性之间掌握平衡</strong>（这也是 <a href="https://github.com/Microsoft/TypeScript/wiki/TypeScript-Design-Goals" target="_blank" rel="noreferrer">TypeScript 的设计理念</a>之一），才能发挥出 TypeScript 最大的价值。</p><h3 id="将-any-断言为一个具体的类型§" tabindex="-1">将 <code>any</code> 断言为一个具体的类型<a href="http://ts.xcatliu.com/basics/type-assertion.html#%E5%B0%86-any-%E6%96%AD%E8%A8%80%E4%B8%BA%E4%B8%80%E4%B8%AA%E5%85%B7%E4%BD%93%E7%9A%84%E7%B1%BB%E5%9E%8B" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#将-any-断言为一个具体的类型§" aria-label="Permalink to &quot;将 \`any\` 断言为一个具体的类型[§](http://ts.xcatliu.com/basics/type-assertion.html#将-any-断言为一个具体的类型)&quot;">​</a></h3><p>在日常的开发中，我们不可避免的需要处理 <code>any</code> 类型的变量，它们可能是由于第三方库未能定义好自己的类型，也有可能是历史遗留的或其他人编写的烂代码，还可能是受到 TypeScript 类型系统的限制而无法精确定义类型的场景。</p><p>遇到 <code>any</code> 类型的变量时，我们可以选择无视它，任由它滋生更多的 <code>any</code>。</p><p>我们也可以选择改进它，通过类型断言及时的把 <code>any</code> 断言为精确的类型，亡羊补牢，使我们的代码向着高可维护性的目标发展。</p><p>举例来说，历史遗留的代码中有个 <code>getCacheData</code>，它的返回值是 <code>any</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function getCacheData(key: string): any {</span></span>
<span class="line"><span>    return (window as any).cache[key];</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>那么我们在使用它时，最好能够将调用了它之后的返回值断言成一个精确的类型，这样就方便了后续的操作：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function getCacheData(key: string): any {</span></span>
<span class="line"><span>    return (window as any).cache[key];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface Cat {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    run(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tom = getCacheData(&#39;tom&#39;) as Cat;</span></span>
<span class="line"><span>tom.run();</span></span></code></pre></div><p>上面的例子中，我们调用完 <code>getCacheData</code> 之后，立即将它断言为 <code>Cat</code> 类型。这样的话明确了 <code>tom</code> 的类型，后续对 <code>tom</code> 的访问时就有了代码补全，提高了代码的可维护性。</p><h2 id="类型断言的限制§" tabindex="-1">类型断言的限制<a href="http://ts.xcatliu.com/basics/type-assertion.html#%E7%B1%BB%E5%9E%8B%E6%96%AD%E8%A8%80%E7%9A%84%E9%99%90%E5%88%B6" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#类型断言的限制§" aria-label="Permalink to &quot;类型断言的限制[§](http://ts.xcatliu.com/basics/type-assertion.html#类型断言的限制)&quot;">​</a></h2><blockquote><p>本小节的前置知识点：[结构类型系统（TODO）][]、[类型兼容性（TODO）][]</p></blockquote><p>从上面的例子中，我们可以总结出：</p><ul><li>联合类型可以被断言为其中一个类型</li><li>父类可以被断言为子类</li><li>任何类型都可以被断言为 any</li><li>any 可以被断言为任何类型</li></ul><p>那么类型断言有没有什么限制呢？是不是任何一个类型都可以被断言为任何另一个类型呢？</p><p>答案是否定的——并不是任何一个类型都可以被断言为任何另一个类型。</p><p>具体来说，若 <code>A</code> 兼容 <code>B</code>，那么 <code>A</code> 能够被断言为 <code>B</code>，<code>B</code> 也能被断言为 <code>A</code>。</p><p>下面我们通过一个简化的例子，来理解类型断言的限制：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Animal {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface Cat {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    run(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let tom: Cat = {</span></span>
<span class="line"><span>    name: &#39;Tom&#39;,</span></span>
<span class="line"><span>    run: () =&gt; { console.log(&#39;run&#39;) }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>let animal: Animal = tom;</span></span></code></pre></div><p>我们知道，TypeScript 是结构类型系统，类型之间的对比只会比较它们最终的结构，而会忽略它们定义时的关系。</p><p>在上面的例子中，<code>Cat</code> 包含了 <code>Animal</code> 中的所有属性，除此之外，它还有一个额外的方法 <code>run</code>。TypeScript 并不关心 <code>Cat</code> 和 <code>Animal</code> 之间定义时是什么关系，而只会看它们最终的结构有什么关系——所以它与 <code>Cat extends Animal</code> 是等价的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Animal {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface Cat extends Animal {</span></span>
<span class="line"><span>    run(): void;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>那么也不难理解为什么 <code>Cat</code> 类型的 <code>tom</code> 可以赋值给 <code>Animal</code> 类型的 <code>animal</code> 了——就像面向对象编程中我们可以将子类的实例赋值给类型为父类的变量。</p><p>我们把它换成 TypeScript 中更专业的说法，即：<code>Animal</code> 兼容 <code>Cat</code>。</p><p>当 <code>Animal</code> 兼容 <code>Cat</code> 时，它们就可以互相进行类型断言了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Animal {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface Cat {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    run(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function testAnimal(animal: Animal) {</span></span>
<span class="line"><span>    return (animal as Cat);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function testCat(cat: Cat) {</span></span>
<span class="line"><span>    return (cat as Animal);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这样的设计其实也很容易就能理解：</p><ul><li>允许 <code>animal as Cat</code> 是因为「父类可以被断言为子类」，这个前面已经学习过了</li><li>允许 <code>cat as Animal</code> 是因为既然子类拥有父类的属性和方法，那么被断言为父类，获取父类的属性、调用父类的方法，就不会有任何问题，故「子类可以被断言为父类」</li></ul><p>需要注意的是，这里我们使用了简化的父类子类的关系来表达类型的兼容性，而实际上 TypeScript 在判断类型的兼容性时，比这种情况复杂很多，详细请参考[类型的兼容性（TODO)][]章节。</p><p>总之，若 <code>A</code> 兼容 <code>B</code>，那么 <code>A</code> 能够被断言为 <code>B</code>，<code>B</code> 也能被断言为 <code>A</code>。</p><p>同理，若 <code>B</code> 兼容 <code>A</code>，那么 <code>A</code> 能够被断言为 <code>B</code>，<code>B</code> 也能被断言为 <code>A</code>。</p><p>所以这也可以换一种说法：</p><p>要使得 <code>A</code> 能够被断言为 <code>B</code>，只需要 <code>A</code> 兼容 <code>B</code> 或 <code>B</code> 兼容 <code>A</code> 即可，这也是为了在类型断言时的安全考虑，毕竟毫无根据的断言是非常危险的。</p><p>综上所述：</p><ul><li>联合类型可以被断言为其中一个类型</li><li>父类可以被断言为子类</li><li>任何类型都可以被断言为 any</li><li>any 可以被断言为任何类型</li><li>要使得 <code>A</code> 能够被断言为 <code>B</code>，只需要 <code>A</code> 兼容 <code>B</code> 或 <code>B</code> 兼容 <code>A</code> 即可</li></ul><p>其实前四种情况都是最后一个的特例。</p><h2 id="双重断言§" tabindex="-1">双重断言<a href="http://ts.xcatliu.com/basics/type-assertion.html#%E5%8F%8C%E9%87%8D%E6%96%AD%E8%A8%80" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#双重断言§" aria-label="Permalink to &quot;双重断言[§](http://ts.xcatliu.com/basics/type-assertion.html#双重断言)&quot;">​</a></h2><p>既然：</p><ul><li>任何类型都可以被断言为 any</li><li>any 可以被断言为任何类型</li></ul><p>那么我们是不是可以使用双重断言 <code>as any as Foo</code> 来将任何一个类型断言为任何另一个类型呢？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Cat {</span></span>
<span class="line"><span>    run(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface Fish {</span></span>
<span class="line"><span>    swim(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function testCat(cat: Cat) {</span></span>
<span class="line"><span>    return (cat as any as Fish);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在上面的例子中，若直接使用 <code>cat as Fish</code> 肯定会报错，因为 <code>Cat</code> 和 <code>Fish</code> 互相都不兼容。</p><p>但是若使用双重断言，则可以打破「要使得 <code>A</code> 能够被断言为 <code>B</code>，只需要 <code>A</code> 兼容 <code>B</code> 或 <code>B</code> 兼容 <code>A</code> 即可」的限制，将任何一个类型断言为任何另一个类型。</p><p>若你使用了这种双重断言，那么十有八九是非常错误的，它很可能会导致运行时错误。</p><p><strong>除非迫不得已，千万别用双重断言。</strong></p><h2 id="类型断言-vs-类型转换§" tabindex="-1">类型断言 vs 类型转换<a href="http://ts.xcatliu.com/basics/type-assertion.html#%E7%B1%BB%E5%9E%8B%E6%96%AD%E8%A8%80-vs-%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#类型断言-vs-类型转换§" aria-label="Permalink to &quot;类型断言 vs 类型转换[§](http://ts.xcatliu.com/basics/type-assertion.html#类型断言-vs-类型转换)&quot;">​</a></h2><p>类型断言只会影响 TypeScript 编译时的类型，类型断言语句在编译结果中会被删除：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function toBoolean(something: any): boolean {</span></span>
<span class="line"><span>    return something as boolean;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>toBoolean(1);</span></span>
<span class="line"><span>// 返回值为 1</span></span></code></pre></div><p>在上面的例子中，将 <code>something</code> 断言为 <code>boolean</code> 虽然可以通过编译，但是并没有什么用，代码在编译后会变成：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function toBoolean(something) {</span></span>
<span class="line"><span>    return something;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>toBoolean(1);</span></span>
<span class="line"><span>// 返回值为 1</span></span></code></pre></div><p>所以类型断言不是类型转换，它不会真的影响到变量的类型。</p><p>若要进行类型转换，需要直接调用类型转换的方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function toBoolean(something: any): boolean {</span></span>
<span class="line"><span>    return Boolean(something);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>toBoolean(1);</span></span>
<span class="line"><span>// 返回值为 true</span></span></code></pre></div><h2 id="类型断言-vs-类型声明§" tabindex="-1">类型断言 vs 类型声明<a href="http://ts.xcatliu.com/basics/type-assertion.html#%E7%B1%BB%E5%9E%8B%E6%96%AD%E8%A8%80-vs-%E7%B1%BB%E5%9E%8B%E5%A3%B0%E6%98%8E" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#类型断言-vs-类型声明§" aria-label="Permalink to &quot;类型断言 vs 类型声明[§](http://ts.xcatliu.com/basics/type-assertion.html#类型断言-vs-类型声明)&quot;">​</a></h2><p>在这个例子中：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function getCacheData(key: string): any {</span></span>
<span class="line"><span>    return (window as any).cache[key];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface Cat {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    run(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tom = getCacheData(&#39;tom&#39;) as Cat;</span></span>
<span class="line"><span>tom.run();</span></span></code></pre></div><p>我们使用 <code>as Cat</code> 将 <code>any</code> 类型断言为了 <code>Cat</code> 类型。</p><p>但实际上还有其他方式可以解决这个问题：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function getCacheData(key: string): any {</span></span>
<span class="line"><span>    return (window as any).cache[key];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface Cat {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    run(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tom: Cat = getCacheData(&#39;tom&#39;);</span></span>
<span class="line"><span>tom.run();</span></span></code></pre></div><p>上面的例子中，我们通过类型声明的方式，将 <code>tom</code> 声明为 <code>Cat</code>，然后再将 <code>any</code> 类型的 <code>getCacheData(&#39;tom&#39;)</code> 赋值给 <code>Cat</code> 类型的 <code>tom</code>。</p><p>这和类型断言是非常相似的，而且产生的结果也几乎是一样的——<code>tom</code> 在接下来的代码中都变成了 <code>Cat</code> 类型。</p><p>它们的区别，可以通过这个例子来理解：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Animal {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface Cat {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    run(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const animal: Animal = {</span></span>
<span class="line"><span>    name: &#39;tom&#39;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>let tom = animal as Cat;</span></span></code></pre></div><p>在上面的例子中，由于 <code>Animal</code> 兼容 <code>Cat</code>，故可以将 <code>animal</code> 断言为 <code>Cat</code> 赋值给 <code>tom</code>。</p><p>但是若直接声明 <code>tom</code> 为 <code>Cat</code> 类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Animal {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface Cat {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    run(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const animal: Animal = {</span></span>
<span class="line"><span>    name: &#39;tom&#39;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>let tom: Cat = animal;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts:12:5 - error TS2741: Property &#39;run&#39; is missing in type &#39;Animal&#39; but required in type &#39;Cat&#39;.</span></span></code></pre></div><p>则会报错，不允许将 <code>animal</code> 赋值为 <code>Cat</code> 类型的 <code>tom</code>。</p><p>这很容易理解，<code>Animal</code> 可以看作是 <code>Cat</code> 的父类，当然不能将父类的实例赋值给类型为子类的变量。</p><p>深入的讲，它们的核心区别就在于：</p><ul><li><code>animal</code> 断言为 <code>Cat</code>，只需要满足 <code>Animal</code> 兼容 <code>Cat</code> 或 <code>Cat</code> 兼容 <code>Animal</code> 即可</li><li><code>animal</code> 赋值给 <code>tom</code>，需要满足 <code>Cat</code> 兼容 <code>Animal</code> 才行</li></ul><p>但是 <code>Cat</code> 并不兼容 <code>Animal</code>。</p><p>而在前一个例子中，由于 <code>getCacheData(&#39;tom&#39;)</code> 是 <code>any</code> 类型，<code>any</code> 兼容 <code>Cat</code>，<code>Cat</code> 也兼容 <code>any</code>，故</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const tom = getCacheData(&#39;tom&#39;) as Cat;</span></span></code></pre></div><p>等价于</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const tom: Cat = getCacheData(&#39;tom&#39;);</span></span></code></pre></div><p>知道了它们的核心区别，就知道了类型声明是比类型断言更加严格的。</p><p>所以为了增加代码的质量，我们最好优先使用类型声明，这也比类型断言的 <code>as</code> 语法更加优雅。</p><h2 id="类型断言-vs-泛型§" tabindex="-1">类型断言 vs 泛型<a href="http://ts.xcatliu.com/basics/type-assertion.html#%E7%B1%BB%E5%9E%8B%E6%96%AD%E8%A8%80-vs-%E6%B3%9B%E5%9E%8B" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#类型断言-vs-泛型§" aria-label="Permalink to &quot;类型断言 vs 泛型[§](http://ts.xcatliu.com/basics/type-assertion.html#类型断言-vs-泛型)&quot;">​</a></h2><blockquote><p>本小节的前置知识点：<a href="http://ts.xcatliu.com/advanced/generics.html" target="_blank" rel="noreferrer">泛型</a></p></blockquote><p>还是这个例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function getCacheData(key: string): any {</span></span>
<span class="line"><span>    return (window as any).cache[key];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface Cat {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    run(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tom = getCacheData(&#39;tom&#39;) as Cat;</span></span>
<span class="line"><span>tom.run();</span></span></code></pre></div><p>我们还有第三种方式可以解决这个问题，那就是泛型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function getCacheData&lt;T&gt;(key: string): T {</span></span>
<span class="line"><span>    return (window as any).cache[key];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface Cat {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    run(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tom = getCacheData&lt;Cat&gt;(&#39;tom&#39;);</span></span>
<span class="line"><span>tom.run();</span></span></code></pre></div><p>通过给 <code>getCacheData</code> 函数添加了一个泛型 <code>&lt;T&gt;</code>，我们可以更加规范的实现对 <code>getCacheData</code> 返回值的约束，这也同时去除掉了代码中的 <code>any</code>，是最优的一个解决方案。</p><h2 id="参考§-7" tabindex="-1">参考<a href="http://ts.xcatliu.com/basics/type-assertion.html#%E5%8F%82%E8%80%83" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#参考§-7" aria-label="Permalink to &quot;参考[§](http://ts.xcatliu.com/basics/type-assertion.html#参考)&quot;">​</a></h2><ul><li><a href="https://basarat.gitbooks.io/typescript/content/docs/types/type-assertion.html" target="_blank" rel="noreferrer">TypeScript Deep Dive / Type Assertion</a></li><li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types" target="_blank" rel="noreferrer">Advanced Types # Type Guards and Differentiating Types</a>（[中文版](<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced" target="_blank" rel="noreferrer">https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced</a> Types.html#类型保护与区分类型（type-guards-and-differentiating-types）)）</li><li><a href="https://github.com/Microsoft/TypeScript/wiki/TypeScript-Design-Goals" target="_blank" rel="noreferrer">TypeScript 的设计理念</a></li></ul><h1 id="声明文件" tabindex="-1">声明文件 <a class="header-anchor" href="#声明文件" aria-label="Permalink to &quot;声明文件&quot;">​</a></h1><p>当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。</p><h2 id="新语法索引§" tabindex="-1">新语法索引<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E6%96%B0%E8%AF%AD%E6%B3%95%E7%B4%A2%E5%BC%95" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#新语法索引§" aria-label="Permalink to &quot;新语法索引[§](http://ts.xcatliu.com/basics/declaration-files.html#新语法索引)&quot;">​</a></h2><p>由于本章涉及大量新语法，故在本章开头列出新语法的索引，方便大家在使用这些新语法时能快速查找到对应的讲解：</p><ul><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#declare-var" target="_blank" rel="noreferrer"><code>declare var</code></a> 声明全局变量</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#declare-function" target="_blank" rel="noreferrer"><code>declare function</code></a> 声明全局方法</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#declare-class" target="_blank" rel="noreferrer"><code>declare class</code></a> 声明全局类</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#declare-enum" target="_blank" rel="noreferrer"><code>declare enum</code></a> 声明全局枚举类型</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#declare-namespace" target="_blank" rel="noreferrer"><code>declare namespace</code></a> 声明（含有子属性的）全局对象</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#interface-%E5%92%8C-type" target="_blank" rel="noreferrer"><code>interface</code> 和 <code>type</code></a> 声明全局类型</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#export" target="_blank" rel="noreferrer"><code>export</code></a> 导出变量</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#export-namespace" target="_blank" rel="noreferrer"><code>export namespace</code></a> 导出（含有子属性的）对象</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#export-default" target="_blank" rel="noreferrer"><code>export default</code></a> ES6 默认导出</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#export-1" target="_blank" rel="noreferrer"><code>export =</code></a> commonjs 导出模块</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#export-as-namespace" target="_blank" rel="noreferrer"><code>export as namespace</code></a> UMD 库声明全局变量</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#declare-global" target="_blank" rel="noreferrer"><code>declare global</code></a> 扩展全局变量</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#declare-module" target="_blank" rel="noreferrer"><code>declare module</code></a> 扩展模块</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#san-xie-xian-zhi-ling" target="_blank" rel="noreferrer"><code>///</code></a> 三斜线指令</li></ul><h2 id="什么是声明语句§" tabindex="-1">什么是声明语句<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E4%BB%80%E4%B9%88%E6%98%AF%E5%A3%B0%E6%98%8E%E8%AF%AD%E5%8F%A5" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#什么是声明语句§" aria-label="Permalink to &quot;什么是声明语句[§](http://ts.xcatliu.com/basics/declaration-files.html#什么是声明语句)&quot;">​</a></h2><p>假如我们想使用第三方库 jQuery，一种常见的方式是在 html 中通过 <code>&lt;script&gt;</code> 标签引入 jQuery，然后就可以使用全局变量 <code>$</code> 或 <code>jQuery</code> 了。</p><p>我们通常这样获取一个 <code>id</code> 是 <code>foo</code> 的元素：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$(&#39;#foo&#39;);</span></span>
<span class="line"><span>// or</span></span>
<span class="line"><span>jQuery(&#39;#foo&#39;);</span></span></code></pre></div><p>但是在 ts 中，编译器并不知道 <code>$</code> 或 <code>jQuery</code> 是什么东西<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/01-jquery" target="_blank" rel="noreferrer">1</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>jQuery(&#39;#foo&#39;);</span></span>
<span class="line"><span>// ERROR: Cannot find name &#39;jQuery&#39;.</span></span></code></pre></div><p>这时，我们需要使用 <code>declare var</code> 来定义它的类型<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/02-declare-var" target="_blank" rel="noreferrer">2</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>declare var jQuery: (selector: string) =&gt; any;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>jQuery(&#39;#foo&#39;);</span></span></code></pre></div><p>上例中，<code>declare var</code> 并没有真的定义一个变量，只是定义了全局变量 <code>jQuery</code> 的类型，仅仅会用于编译时的检查，在编译结果中会被删除。它编译结果是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>jQuery(&#39;#foo&#39;);</span></span></code></pre></div><p>除了 <code>declare var</code> 之外，还有其他很多种声明语句，将会在后面详细介绍。</p><h2 id="什么是声明文件§" tabindex="-1">什么是声明文件<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E4%BB%80%E4%B9%88%E6%98%AF%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#什么是声明文件§" aria-label="Permalink to &quot;什么是声明文件[§](http://ts.xcatliu.com/basics/declaration-files.html#什么是声明文件)&quot;">​</a></h2><p>通常我们会把声明语句放到一个单独的文件（<code>jQuery.d.ts</code>）中，这就是声明文件<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/03-jquery-d-ts" target="_blank" rel="noreferrer">3</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// src/jQuery.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare var jQuery: (selector: string) =&gt; any;</span></span>
<span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>jQuery(&#39;#foo&#39;);</span></span></code></pre></div><p>声明文件必需以 <code>.d.ts</code> 为后缀。</p><p>一般来说，ts 会解析项目中所有的 <code>*.ts</code> 文件，当然也包含以 <code>.d.ts</code> 结尾的文件。所以当我们将 <code>jQuery.d.ts</code> 放到项目中时，其他所有 <code>*.ts</code> 文件就都可以获得 <code>jQuery</code> 的类型定义了。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/path/to/project</span></span>
<span class="line"><span>├── src</span></span>
<span class="line"><span>|  ├── index.ts</span></span>
<span class="line"><span>|  └── jQuery.d.ts</span></span>
<span class="line"><span>└── tsconfig.json</span></span></code></pre></div><p>假如仍然无法解析，那么可以检查下 <code>tsconfig.json</code> 中的 <code>files</code>、<code>include</code> 和 <code>exclude</code> 配置，确保其包含了 <code>jQuery.d.ts</code> 文件。</p><p>这里只演示了全局变量这种模式的声明文件，假如是通过模块导入的方式使用第三方库的话，那么引入声明文件又是另一种方式了，将会在后面详细介绍。</p><h3 id="第三方声明文件§" tabindex="-1">第三方声明文件<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E7%AC%AC%E4%B8%89%E6%96%B9%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#第三方声明文件§" aria-label="Permalink to &quot;第三方声明文件[§](http://ts.xcatliu.com/basics/declaration-files.html#第三方声明文件)&quot;">​</a></h3><p>当然，jQuery 的声明文件不需要我们定义了，社区已经帮我们定义好了：<a href="https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jquery/index.d.ts" target="_blank" rel="noreferrer">jQuery in DefinitelyTyped</a>。</p><p>我们可以直接下载下来使用，但是更推荐的是使用 <code>@types</code> 统一管理第三方库的声明文件。</p><p><code>@types</code> 的使用方式很简单，直接用 npm 安装对应的声明模块即可，以 jQuery 举例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install @types/jquery --save-dev</span></span></code></pre></div><p>可以在<a href="https://microsoft.github.io/TypeSearch/" target="_blank" rel="noreferrer">这个页面</a>搜索你需要的声明文件。</p><h2 id="书写声明文件§" tabindex="-1">书写声明文件<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E4%B9%A6%E5%86%99%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#书写声明文件§" aria-label="Permalink to &quot;书写声明文件[§](http://ts.xcatliu.com/basics/declaration-files.html#书写声明文件)&quot;">​</a></h2><p>当一个第三方库没有提供声明文件时，我们就需要自己书写声明文件了。前面只介绍了最简单的声明文件内容，而真正书写一个声明文件并不是一件简单的事，以下会详细介绍如何书写声明文件。</p><p>在不同的场景下，声明文件的内容和使用方式会有所区别。</p><p>库的使用场景主要有以下几种：</p><ul><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#quan-ju-bian-liang" target="_blank" rel="noreferrer">全局变量</a>：通过 <code>&lt;script&gt;</code> 标签引入第三方库，注入全局变量</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#npm-bao" target="_blank" rel="noreferrer">npm 包</a>：通过 <code>import foo from &#39;foo&#39;</code> 导入，符合 ES6 模块规范</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#umd-ku" target="_blank" rel="noreferrer">UMD 库</a>：既可以通过 <code>&lt;script&gt;</code> 标签引入，又可以通过 <code>import</code> 导入</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#zhi-jie-kuo-zhan-quan-ju-bian-liang" target="_blank" rel="noreferrer">直接扩展全局变量</a>：通过 <code>&lt;script&gt;</code> 标签引入后，改变一个全局变量的结构</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#zai-npm-bao-huo-umd-ku-zhong-kuo-zhan-quan-ju-bian-liang" target="_blank" rel="noreferrer">在 npm 包或 UMD 库中扩展全局变量</a>：引用 npm 包或 UMD 库后，改变一个全局变量的结构</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#mo-kuai-cha-jian" target="_blank" rel="noreferrer">模块插件</a>：通过 <code>&lt;script&gt;</code> 或 <code>import</code> 导入后，改变另一个模块的结构</li></ul><h3 id="全局变量§" tabindex="-1">全局变量<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#全局变量§" aria-label="Permalink to &quot;全局变量[§](http://ts.xcatliu.com/basics/declaration-files.html#全局变量)&quot;">​</a></h3><p>全局变量是最简单的一种场景，之前举的例子就是通过 <code>&lt;script&gt;</code> 标签引入 jQuery，注入全局变量 <code>$</code> 和 <code>jQuery</code>。</p><p>使用全局变量的声明文件时，如果是以 <code>npm install @types/xxx --save-dev</code> 安装的，则不需要任何配置。如果是将声明文件直接存放于当前项目中，则建议和其他源码一起放到 <code>src</code> 目录下（或者对应的源码目录下）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/path/to/project</span></span>
<span class="line"><span>├── src</span></span>
<span class="line"><span>|  ├── index.ts</span></span>
<span class="line"><span>|  └── jQuery.d.ts</span></span>
<span class="line"><span>└── tsconfig.json</span></span></code></pre></div><p>如果没有生效，可以检查下 <code>tsconfig.json</code> 中的 <code>files</code>、<code>include</code> 和 <code>exclude</code> 配置，确保其包含了 <code>jQuery.d.ts</code> 文件。</p><p>全局变量的声明文件主要有以下几种语法：</p><ul><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#declare-var" target="_blank" rel="noreferrer"><code>declare var</code></a> 声明全局变量</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#declare-function" target="_blank" rel="noreferrer"><code>declare function</code></a> 声明全局方法</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#declare-class" target="_blank" rel="noreferrer"><code>declare class</code></a> 声明全局类</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#declare-enum" target="_blank" rel="noreferrer"><code>declare enum</code></a> 声明全局枚举类型</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#declare-namespace" target="_blank" rel="noreferrer"><code>declare namespace</code></a> 声明（含有子属性的）全局对象</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#interface-he-type" target="_blank" rel="noreferrer"><code>interface</code> 和 <code>type</code></a> 声明全局类型</li></ul><h4 id="declare-var§" tabindex="-1"><code>declare var</code><a href="http://ts.xcatliu.com/basics/declaration-files.html#declare-var" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#declare-var§" aria-label="Permalink to &quot;\`declare var\`[§](http://ts.xcatliu.com/basics/declaration-files.html#declare-var)&quot;">​</a></h4><p>在所有的声明语句中，<code>declare var</code> 是最简单的，如之前所学，它能够用来定义一个全局变量的类型。与其类似的，还有 <code>declare let</code> 和 <code>declare const</code>，使用 <code>let</code> 与使用 <code>var</code> 没有什么区别：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// src/jQuery.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare let jQuery: (selector: string) =&gt; any;</span></span>
<span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>jQuery(&#39;#foo&#39;);</span></span>
<span class="line"><span>// 使用 declare let 定义的 jQuery 类型，允许修改这个全局变量</span></span>
<span class="line"><span>jQuery = function(selector) {</span></span>
<span class="line"><span>    return document.querySelector(selector);</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>而当我们使用 <code>const</code> 定义时，表示此时的全局变量是一个常量，不允许再去修改它的值了<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/04-declare-const-jquery" target="_blank" rel="noreferrer">4</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// src/jQuery.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare const jQuery: (selector: string) =&gt; any;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>jQuery(&#39;#foo&#39;);</span></span>
<span class="line"><span>// 使用 declare const 定义的 jQuery 类型，禁止修改这个全局变量</span></span>
<span class="line"><span>jQuery = function(selector) {</span></span>
<span class="line"><span>    return document.querySelector(selector);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>// ERROR: Cannot assign to &#39;jQuery&#39; because it is a constant or a read-only property.</span></span></code></pre></div><p>一般来说，全局变量都是禁止修改的常量，所以大部分情况都应该使用 <code>const</code> 而不是 <code>var</code> 或 <code>let</code>。</p><p>需要注意的是，声明语句中只能定义类型，切勿在声明语句中定义具体的实现<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/05-declare-jquery-value" target="_blank" rel="noreferrer">5</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>declare const jQuery = function(selector) {</span></span>
<span class="line"><span>    return document.querySelector(selector);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>// ERROR: An implementation cannot be declared in ambient contexts.</span></span></code></pre></div><h4 id="declare-function§" tabindex="-1"><code>declare function</code><a href="http://ts.xcatliu.com/basics/declaration-files.html#declare-function" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#declare-function§" aria-label="Permalink to &quot;\`declare function\`[§](http://ts.xcatliu.com/basics/declaration-files.html#declare-function)&quot;">​</a></h4><p><code>declare function</code> 用来定义全局函数的类型。jQuery 其实就是一个函数，所以也可以用 <code>function</code> 来定义：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// src/jQuery.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare function jQuery(selector: string): any;</span></span>
<span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>jQuery(&#39;#foo&#39;);</span></span></code></pre></div><p>在函数类型的声明语句中，函数重载也是支持的<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/06-declare-function" target="_blank" rel="noreferrer">6</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// src/jQuery.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare function jQuery(selector: string): any;</span></span>
<span class="line"><span>declare function jQuery(domReadyCallback: () =&gt; any): any;</span></span>
<span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>jQuery(&#39;#foo&#39;);</span></span>
<span class="line"><span>jQuery(function() {</span></span>
<span class="line"><span>    alert(&#39;Dom Ready!&#39;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><h4 id="declare-class§" tabindex="-1"><code>declare class</code><a href="http://ts.xcatliu.com/basics/declaration-files.html#declare-class" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#declare-class§" aria-label="Permalink to &quot;\`declare class\`[§](http://ts.xcatliu.com/basics/declaration-files.html#declare-class)&quot;">​</a></h4><p>当全局变量是一个类的时候，我们用 <code>declare class</code> 来定义它的类型<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/07-declare-class" target="_blank" rel="noreferrer">7</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// src/Animal.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare class Animal {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    constructor(name: string);</span></span>
<span class="line"><span>    sayHi(): string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let cat = new Animal(&#39;Tom&#39;);</span></span></code></pre></div><p>同样的，<code>declare class</code> 语句也只能用来定义类型，不能用来定义具体的实现，比如定义 <code>sayHi</code> 方法的具体实现则会报错：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// src/Animal.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare class Animal {</span></span>
<span class="line"><span>    name: string;</span></span>
<span class="line"><span>    constructor(name: string);</span></span>
<span class="line"><span>    sayHi() {</span></span>
<span class="line"><span>        return \`My name is \${this.name}\`;</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    // ERROR: An implementation cannot be declared in ambient contexts.</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="declare-enum§" tabindex="-1"><code>declare enum</code><a href="http://ts.xcatliu.com/basics/declaration-files.html#declare-enum" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#declare-enum§" aria-label="Permalink to &quot;\`declare enum\`[§](http://ts.xcatliu.com/basics/declaration-files.html#declare-enum)&quot;">​</a></h4><p>使用 <code>declare enum</code> 定义的枚举类型也称作外部枚举（Ambient Enums），举例如下<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/08-declare-enum" target="_blank" rel="noreferrer">8</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// src/Directions.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare enum Directions {</span></span>
<span class="line"><span>    Up,</span></span>
<span class="line"><span>    Down,</span></span>
<span class="line"><span>    Left,</span></span>
<span class="line"><span>    Right</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];</span></span></code></pre></div><p>与其他全局变量的类型声明一致，<code>declare enum</code> 仅用来定义类型，而不是具体的值。</p><p><code>Directions.d.ts</code> 仅仅会用于编译时的检查，声明文件里的内容在编译结果中会被删除。它编译结果是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];</span></span></code></pre></div><p>其中 <code>Directions</code> 是由第三方库定义好的全局变量。</p><h4 id="declare-namespace§" tabindex="-1"><code>declare namespace</code><a href="http://ts.xcatliu.com/basics/declaration-files.html#declare-namespace" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#declare-namespace§" aria-label="Permalink to &quot;\`declare namespace\`[§](http://ts.xcatliu.com/basics/declaration-files.html#declare-namespace)&quot;">​</a></h4><p><code>namespace</code> 是 ts 早期时为了解决模块化而创造的关键字，中文称为命名空间。</p><p>由于历史遗留原因，在早期还没有 ES6 的时候，ts 提供了一种模块化方案，使用 <code>module</code> 关键字表示内部模块。但由于后来 ES6 也使用了 <code>module</code> 关键字，ts 为了兼容 ES6，使用 <code>namespace</code> 替代了自己的 <code>module</code>，更名为命名空间。</p><p>随着 ES6 的广泛应用，现在已经不建议再使用 ts 中的 <code>namespace</code>，而推荐使用 ES6 的模块化方案了，故我们不再需要学习 <code>namespace</code> 的使用了。</p><p><code>namespace</code> 被淘汰了，但是在声明文件中，<code>declare namespace</code> 还是比较常用的，它用来表示全局变量是一个对象，包含很多子属性。</p><p>比如 <code>jQuery</code> 是一个全局变量，它是一个对象，提供了一个 <code>jQuery.ajax</code> 方法可以调用，那么我们就应该使用 <code>declare namespace jQuery</code> 来声明这个拥有多个子属性的全局变量。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// src/jQuery.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare namespace jQuery {</span></span>
<span class="line"><span>    function ajax(url: string, settings?: any): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>jQuery.ajax(&#39;/api/get_something&#39;);</span></span></code></pre></div><p>注意，在 <code>declare namespace</code> 内部，我们直接使用 <code>function ajax</code> 来声明函数，而不是使用 <code>declare function ajax</code>。类似的，也可以使用 <code>const</code>, <code>class</code>, <code>enum</code> 等语句<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/09-declare-namespace" target="_blank" rel="noreferrer">9</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// src/jQuery.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare namespace jQuery {</span></span>
<span class="line"><span>    function ajax(url: string, settings?: any): void;</span></span>
<span class="line"><span>    const version: number;</span></span>
<span class="line"><span>    class Event {</span></span>
<span class="line"><span>        blur(eventType: EventType): void</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    enum EventType {</span></span>
<span class="line"><span>        CustomClick</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>jQuery.ajax(&#39;/api/get_something&#39;);</span></span>
<span class="line"><span>console.log(jQuery.version);</span></span>
<span class="line"><span>const e = new jQuery.Event();</span></span>
<span class="line"><span>e.blur(jQuery.EventType.CustomClick);</span></span></code></pre></div><h5 id="嵌套的命名空间§" tabindex="-1">嵌套的命名空间<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E5%B5%8C%E5%A5%97%E7%9A%84%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#嵌套的命名空间§" aria-label="Permalink to &quot;嵌套的命名空间[§](http://ts.xcatliu.com/basics/declaration-files.html#嵌套的命名空间)&quot;">​</a></h5><p>如果对象拥有深层的层级，则需要用嵌套的 <code>namespace</code> 来声明深层的属性的类型<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/10-declare-namespace-nesting" target="_blank" rel="noreferrer">10</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// src/jQuery.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare namespace jQuery {</span></span>
<span class="line"><span>    function ajax(url: string, settings?: any): void;</span></span>
<span class="line"><span>    namespace fn {</span></span>
<span class="line"><span>        function extend(object: any): void;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>jQuery.ajax(&#39;/api/get_something&#39;);</span></span>
<span class="line"><span>jQuery.fn.extend({</span></span>
<span class="line"><span>    check: function() {</span></span>
<span class="line"><span>        return this.each(function() {</span></span>
<span class="line"><span>            this.checked = true;</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>假如 <code>jQuery</code> 下仅有 <code>fn</code> 这一个属性（没有 <code>ajax</code> 等其他属性或方法），则可以不需要嵌套 <code>namespace</code><a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/11-declare-namespace-dot" target="_blank" rel="noreferrer">11</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// src/jQuery.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare namespace jQuery.fn {</span></span>
<span class="line"><span>    function extend(object: any): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>jQuery.fn.extend({</span></span>
<span class="line"><span>    check: function() {</span></span>
<span class="line"><span>        return this.each(function() {</span></span>
<span class="line"><span>            this.checked = true;</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>});</span></span></code></pre></div><h4 id="interface-和-type§" tabindex="-1"><code>interface</code> 和 <code>type</code><a href="http://ts.xcatliu.com/basics/declaration-files.html#interface-%E5%92%8C-type" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#interface-和-type§" aria-label="Permalink to &quot;\`interface\` 和 \`type\`[§](http://ts.xcatliu.com/basics/declaration-files.html#interface-和-type)&quot;">​</a></h4><p>除了全局变量之外，可能有一些类型我们也希望能暴露出来。在类型声明文件中，我们可以直接使用 <code>interface</code> 或 <code>type</code> 来声明一个全局的接口或类型<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/12-interface" target="_blank" rel="noreferrer">12</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// src/jQuery.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface AjaxSettings {</span></span>
<span class="line"><span>    method?: &#39;GET&#39; | &#39;POST&#39;</span></span>
<span class="line"><span>    data?: any;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>declare namespace jQuery {</span></span>
<span class="line"><span>    function ajax(url: string, settings?: AjaxSettings): void;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这样的话，在其他文件中也可以使用这个接口或类型了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let settings: AjaxSettings = {</span></span>
<span class="line"><span>    method: &#39;POST&#39;,</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>        name: &#39;foo&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>jQuery.ajax(&#39;/api/post_something&#39;, settings);</span></span></code></pre></div><p><code>type</code> 与 <code>interface</code> 类似，不再赘述。</p><h5 id="防止命名冲突§" tabindex="-1">防止命名冲突<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E9%98%B2%E6%AD%A2%E5%91%BD%E5%90%8D%E5%86%B2%E7%AA%81" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#防止命名冲突§" aria-label="Permalink to &quot;防止命名冲突[§](http://ts.xcatliu.com/basics/declaration-files.html#防止命名冲突)&quot;">​</a></h5><p>暴露在最外层的 <code>interface</code> 或 <code>type</code> 会作为全局类型作用于整个项目中，我们应该尽可能的减少全局变量或全局类型的数量。故最好将他们放到 <code>namespace</code> 下<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/13-avoid-name-conflict" target="_blank" rel="noreferrer">13</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// src/jQuery.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare namespace jQuery {</span></span>
<span class="line"><span>    interface AjaxSettings {</span></span>
<span class="line"><span>        method?: &#39;GET&#39; | &#39;POST&#39;</span></span>
<span class="line"><span>        data?: any;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    function ajax(url: string, settings?: AjaxSettings): void;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注意，在使用这个 <code>interface</code> 的时候，也应该加上 <code>jQuery</code> 前缀：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let settings: jQuery.AjaxSettings = {</span></span>
<span class="line"><span>    method: &#39;POST&#39;,</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>        name: &#39;foo&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>jQuery.ajax(&#39;/api/post_something&#39;, settings);</span></span></code></pre></div><h4 id="声明合并§" tabindex="-1">声明合并<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E5%A3%B0%E6%98%8E%E5%90%88%E5%B9%B6" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#声明合并§" aria-label="Permalink to &quot;声明合并[§](http://ts.xcatliu.com/basics/declaration-files.html#声明合并)&quot;">​</a></h4><p>假如 jQuery 既是一个函数，可以直接被调用 <code>jQuery(&#39;#foo&#39;)</code>，又是一个对象，拥有子属性 <code>jQuery.ajax()</code>（事实确实如此），那么我们可以组合多个声明语句，它们会不冲突的合并起来<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/14-declaration-merging" target="_blank" rel="noreferrer">14</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// src/jQuery.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare function jQuery(selector: string): any;</span></span>
<span class="line"><span>declare namespace jQuery {</span></span>
<span class="line"><span>    function ajax(url: string, settings?: any): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>jQuery(&#39;#foo&#39;);</span></span>
<span class="line"><span>jQuery.ajax(&#39;/api/get_something&#39;);</span></span></code></pre></div><p>关于声明合并的更多用法，可以查看<a href="http://ts.xcatliu.com/advanced/declaration-merging.html" target="_blank" rel="noreferrer">声明合并</a>章节。</p><h3 id="npm-包§" tabindex="-1">npm 包<a href="http://ts.xcatliu.com/basics/declaration-files.html#npm-%E5%8C%85" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#npm-包§" aria-label="Permalink to &quot;npm 包[§](http://ts.xcatliu.com/basics/declaration-files.html#npm-包)&quot;">​</a></h3><p>一般我们通过 <code>import foo from &#39;foo&#39;</code> 导入一个 npm 包，这是符合 ES6 模块规范的。</p><p>在我们尝试给一个 npm 包创建声明文件之前，需要先看看它的声明文件是否已经存在。一般来说，npm 包的声明文件可能存在于两个地方：</p><ol><li>与该 npm 包绑定在一起。判断依据是 <code>package.json</code> 中有 <code>types</code> 字段，或者有一个 <code>index.d.ts</code> 声明文件。这种模式不需要额外安装其他包，是最为推荐的，所以以后我们自己创建 npm 包的时候，最好也将声明文件与 npm 包绑定在一起。</li><li>发布到 <code>@types</code> 里。我们只需要尝试安装一下对应的 <code>@types</code> 包就知道是否存在该声明文件，安装命令是 <code>npm install @types/foo --save-dev</code>。这种模式一般是由于 npm 包的维护者没有提供声明文件，所以只能由其他人将声明文件发布到 <code>@types</code> 里了。</li></ol><p>假如以上两种方式都没有找到对应的声明文件，那么我们就需要自己为它写声明文件了。由于是通过 <code>import</code> 语句导入的模块，所以声明文件存放的位置也有所约束，一般有两种方案：</p><ol><li>创建一个 <code>node_modules/@types/foo/index.d.ts</code> 文件，存放 <code>foo</code> 模块的声明文件。这种方式不需要额外的配置，但是 <code>node_modules</code> 目录不稳定，代码也没有被保存到仓库中，无法回溯版本，有不小心被删除的风险，故不太建议用这种方案，一般只用作临时测试。</li><li>创建一个 <code>types</code> 目录，专门用来管理自己写的声明文件，将 <code>foo</code> 的声明文件放到 <code>types/foo/index.d.ts</code> 中。这种方式需要配置下 <code>tsconfig.json</code> 中的 <code>paths</code> 和 <code>baseUrl</code> 字段。</li></ol><p>目录结构：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/path/to/project</span></span>
<span class="line"><span>├── src</span></span>
<span class="line"><span>|  └── index.ts</span></span>
<span class="line"><span>├── types</span></span>
<span class="line"><span>|  └── foo</span></span>
<span class="line"><span>|     └── index.d.ts</span></span>
<span class="line"><span>└── tsconfig.json</span></span></code></pre></div><p><code>tsconfig.json</code> 内容：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span>        &quot;module&quot;: &quot;commonjs&quot;,</span></span>
<span class="line"><span>        &quot;baseUrl&quot;: &quot;./&quot;,</span></span>
<span class="line"><span>        &quot;paths&quot;: {</span></span>
<span class="line"><span>            &quot;*&quot;: [&quot;types/*&quot;]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如此配置之后，通过 <code>import</code> 导入 <code>foo</code> 的时候，也会去 <code>types</code> 目录下寻找对应的模块的声明文件了。</p><p>注意 <code>module</code> 配置可以有很多种选项，不同的选项会影响模块的导入导出模式。这里我们使用了 <code>commonjs</code> 这个最常用的选项，后面的教程也都默认使用的这个选项。</p><p>不管采用了以上两种方式中的哪一种，我都<strong>强烈建议</strong>大家将书写好的声明文件（通过给第三方库发 pull request，或者直接提交到 <code>@types</code> 里）发布到开源社区中，享受了这么多社区的优秀的资源，就应该在力所能及的时候给出一些回馈。只有所有人都参与进来，才能让 ts 社区更加繁荣。</p><p>npm 包的声明文件主要有以下几种语法：</p><ul><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#export" target="_blank" rel="noreferrer"><code>export</code></a> 导出变量</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#export-namespace" target="_blank" rel="noreferrer"><code>export namespace</code></a> 导出（含有子属性的）对象</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#export-default" target="_blank" rel="noreferrer"><code>export default</code></a> ES6 默认导出</li><li><a href="http://ts.xcatliu.com/basics/declaration-files.html#export-1" target="_blank" rel="noreferrer"><code>export =</code></a> commonjs 导出模块</li></ul><h4 id="export§" tabindex="-1"><code>export</code><a href="http://ts.xcatliu.com/basics/declaration-files.html#export" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#export§" aria-label="Permalink to &quot;\`export\`[§](http://ts.xcatliu.com/basics/declaration-files.html#export)&quot;">​</a></h4><p>npm 包的声明文件与全局变量的声明文件有很大区别。在 npm 包的声明文件中，使用 <code>declare</code> 不再会声明一个全局变量，而只会在当前文件中声明一个局部变量。只有在声明文件中使用 <code>export</code> 导出，然后在使用方 <code>import</code> 导入后，才会应用到这些类型声明。</p><p><code>export</code> 的语法与普通的 ts 中的语法类似，区别仅在于声明文件中禁止定义具体的实现<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/15-export" target="_blank" rel="noreferrer">15</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// types/foo/index.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const name: string;</span></span>
<span class="line"><span>export function getName(): string;</span></span>
<span class="line"><span>export class Animal {</span></span>
<span class="line"><span>    constructor(name: string);</span></span>
<span class="line"><span>    sayHi(): string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export enum Directions {</span></span>
<span class="line"><span>    Up,</span></span>
<span class="line"><span>    Down,</span></span>
<span class="line"><span>    Left,</span></span>
<span class="line"><span>    Right</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export interface Options {</span></span>
<span class="line"><span>    data: any;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>对应的导入和使用模块应该是这样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { name, getName, Animal, Directions, Options } from &#39;foo&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(name);</span></span>
<span class="line"><span>let myName = getName();</span></span>
<span class="line"><span>let cat = new Animal(&#39;Tom&#39;);</span></span>
<span class="line"><span>let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];</span></span>
<span class="line"><span>let options: Options = {</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>        name: &#39;foo&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span></code></pre></div><h5 id="混用-declare-和-export§" tabindex="-1">混用 <code>declare</code> 和 <code>export</code><a href="http://ts.xcatliu.com/basics/declaration-files.html#%E6%B7%B7%E7%94%A8-declare-%E5%92%8C-export" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#混用-declare-和-export§" aria-label="Permalink to &quot;混用 \`declare\` 和 \`export\`[§](http://ts.xcatliu.com/basics/declaration-files.html#混用-declare-和-export)&quot;">​</a></h5><p>我们也可以使用 <code>declare</code> 先声明多个变量，最后再用 <code>export</code> 一次性导出。上例的声明文件可以等价的改写为<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/16-declare-and-export" target="_blank" rel="noreferrer">16</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// types/foo/index.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare const name: string;</span></span>
<span class="line"><span>declare function getName(): string;</span></span>
<span class="line"><span>declare class Animal {</span></span>
<span class="line"><span>    constructor(name: string);</span></span>
<span class="line"><span>    sayHi(): string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>declare enum Directions {</span></span>
<span class="line"><span>    Up,</span></span>
<span class="line"><span>    Down,</span></span>
<span class="line"><span>    Left,</span></span>
<span class="line"><span>    Right</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface Options {</span></span>
<span class="line"><span>    data: any;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export { name, getName, Animal, Directions, Options };</span></span></code></pre></div><p>注意，与全局变量的声明文件类似，<code>interface</code> 前是不需要 <code>declare</code> 的。</p><h4 id="export-namespace§" tabindex="-1"><code>export namespace</code><a href="http://ts.xcatliu.com/basics/declaration-files.html#export-namespace" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#export-namespace§" aria-label="Permalink to &quot;\`export namespace\`[§](http://ts.xcatliu.com/basics/declaration-files.html#export-namespace)&quot;">​</a></h4><p>与 <code>declare namespace</code> 类似，<code>export namespace</code> 用来导出一个拥有子属性的对象<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/17-export-namespace" target="_blank" rel="noreferrer">17</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// types/foo/index.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export namespace foo {</span></span>
<span class="line"><span>    const name: string;</span></span>
<span class="line"><span>    namespace bar {</span></span>
<span class="line"><span>        function baz(): string;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { foo } from &#39;foo&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(foo.name);</span></span>
<span class="line"><span>foo.bar.baz();</span></span></code></pre></div><h4 id="export-default§" tabindex="-1"><code>export default</code><a href="http://ts.xcatliu.com/basics/declaration-files.html#export-default" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#export-default§" aria-label="Permalink to &quot;\`export default\`[§](http://ts.xcatliu.com/basics/declaration-files.html#export-default)&quot;">​</a></h4><p>在 ES6 模块系统中，使用 <code>export default</code> 可以导出一个默认值，使用方可以用 <code>import foo from &#39;foo&#39;</code> 而不是 <code>import { foo } from &#39;foo&#39;</code> 来导入这个默认值。</p><p>在类型声明文件中，<code>export default</code> 用来导出默认值的类型<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/18-export-default" target="_blank" rel="noreferrer">18</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// types/foo/index.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function foo(): string;</span></span>
<span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import foo from &#39;foo&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>foo();</span></span></code></pre></div><p>注意，只有 <code>function</code>、<code>class</code> 和 <code>interface</code> 可以直接默认导出，其他的变量需要先定义出来，再默认导出<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/19-export-default-enum-error" target="_blank" rel="noreferrer">19</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// types/foo/index.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default enum Directions {</span></span>
<span class="line"><span>// ERROR: Expression expected.</span></span>
<span class="line"><span>    Up,</span></span>
<span class="line"><span>    Down,</span></span>
<span class="line"><span>    Left,</span></span>
<span class="line"><span>    Right</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上例中 <code>export default enum</code> 是错误的语法，需要使用 <code>declare enum</code> 定义出来，然后使用 <code>export default</code> 导出：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// types/foo/index.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare enum Directions {</span></span>
<span class="line"><span>    Up,</span></span>
<span class="line"><span>    Down,</span></span>
<span class="line"><span>    Left,</span></span>
<span class="line"><span>    Right</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default Directions;</span></span></code></pre></div><p>针对这种默认导出，我们一般会将导出语句放在整个声明文件的最前面<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/20-export-default-enum" target="_blank" rel="noreferrer">20</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// types/foo/index.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default Directions;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare enum Directions {</span></span>
<span class="line"><span>    Up,</span></span>
<span class="line"><span>    Down,</span></span>
<span class="line"><span>    Left,</span></span>
<span class="line"><span>    Right</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="export-§" tabindex="-1"><code>export =</code><a href="http://ts.xcatliu.com/basics/declaration-files.html#export-" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#export-§" aria-label="Permalink to &quot;\`export =\`[§](http://ts.xcatliu.com/basics/declaration-files.html#export-)&quot;">​</a></h4><p>在 commonjs 规范中，我们用以下方式来导出一个模块：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 整体导出</span></span>
<span class="line"><span>module.exports = foo;</span></span>
<span class="line"><span>// 单个导出</span></span>
<span class="line"><span>exports.bar = bar;</span></span></code></pre></div><p>在 ts 中，针对这种模块导出，有多种方式可以导入，第一种方式是 <code>const ... = require</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 整体导入</span></span>
<span class="line"><span>const foo = require(&#39;foo&#39;);</span></span>
<span class="line"><span>// 单个导入</span></span>
<span class="line"><span>const bar = require(&#39;foo&#39;).bar;</span></span></code></pre></div><p>第二种方式是 <code>import ... from</code>，注意针对整体导出，需要使用 <code>import * as</code> 来导入：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 整体导入</span></span>
<span class="line"><span>import * as foo from &#39;foo&#39;;</span></span>
<span class="line"><span>// 单个导入</span></span>
<span class="line"><span>import { bar } from &#39;foo&#39;;</span></span></code></pre></div><p>第三种方式是 <code>import ... require</code>，这也是 ts 官方推荐的方式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 整体导入</span></span>
<span class="line"><span>import foo = require(&#39;foo&#39;);</span></span>
<span class="line"><span>// 单个导入</span></span>
<span class="line"><span>import bar = foo.bar;</span></span></code></pre></div><p>对于这种使用 commonjs 规范的库，假如要为它写类型声明文件的话，就需要使用到 <code>export =</code> 这种语法了<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/21-export-equal" target="_blank" rel="noreferrer">21</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// types/foo/index.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export = foo;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare function foo(): string;</span></span>
<span class="line"><span>declare namespace foo {</span></span>
<span class="line"><span>    const bar: number;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>需要注意的是，上例中使用了 <code>export =</code> 之后，就不能再单个导出 <code>export { bar }</code> 了。所以我们通过声明合并，使用 <code>declare namespace foo</code> 来将 <code>bar</code> 合并到 <code>foo</code> 里。</p><p>准确地讲，<code>export =</code> 不仅可以用在声明文件中，也可以用在普通的 ts 文件中。实际上，<code>import ... require</code> 和 <code>export =</code> 都是 ts 为了兼容 AMD 规范和 commonjs 规范而创立的新语法，由于并不常用也不推荐使用，所以这里就不详细介绍了，感兴趣的可以看<a href="https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require" target="_blank" rel="noreferrer">官方文档</a>。</p><p>由于很多第三方库是 commonjs 规范的，所以声明文件也就不得不用到 <code>export =</code> 这种语法了。但是还是需要再强调下，相比与 <code>export =</code>，我们更推荐使用 ES6 标准的 <code>export default</code> 和 <code>export</code>。</p><h3 id="umd-库§" tabindex="-1">UMD 库<a href="http://ts.xcatliu.com/basics/declaration-files.html#umd-%E5%BA%93" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#umd-库§" aria-label="Permalink to &quot;UMD 库[§](http://ts.xcatliu.com/basics/declaration-files.html#umd-库)&quot;">​</a></h3><p>既可以通过 <code>&lt;script&gt;</code> 标签引入，又可以通过 <code>import</code> 导入的库，称为 UMD 库。相比于 npm 包的类型声明文件，我们需要额外声明一个全局变量，为了实现这种方式，ts 提供了一个新语法 <code>export as namespace</code>。</p><h4 id="export-as-namespace§" tabindex="-1"><code>export as namespace</code><a href="http://ts.xcatliu.com/basics/declaration-files.html#export-as-namespace" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#export-as-namespace§" aria-label="Permalink to &quot;\`export as namespace\`[§](http://ts.xcatliu.com/basics/declaration-files.html#export-as-namespace)&quot;">​</a></h4><p>一般使用 <code>export as namespace</code> 时，都是先有了 npm 包的声明文件，再基于它添加一条 <code>export as namespace</code> 语句，即可将声明好的一个变量声明为全局变量，举例如下<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/22-export-as-namespace" target="_blank" rel="noreferrer">22</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// types/foo/index.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export as namespace foo;</span></span>
<span class="line"><span>export = foo;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare function foo(): string;</span></span>
<span class="line"><span>declare namespace foo {</span></span>
<span class="line"><span>    const bar: number;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>当然它也可以与 <code>export default</code> 一起使用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// types/foo/index.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export as namespace foo;</span></span>
<span class="line"><span>export default foo;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare function foo(): string;</span></span>
<span class="line"><span>declare namespace foo {</span></span>
<span class="line"><span>    const bar: number;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="直接扩展全局变量§" tabindex="-1">直接扩展全局变量<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E7%9B%B4%E6%8E%A5%E6%89%A9%E5%B1%95%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#直接扩展全局变量§" aria-label="Permalink to &quot;直接扩展全局变量[§](http://ts.xcatliu.com/basics/declaration-files.html#直接扩展全局变量)&quot;">​</a></h3><p>有的第三方库扩展了一个全局变量，可是此全局变量的类型却没有相应的更新过来，就会导致 ts 编译错误，此时就需要扩展全局变量的类型。比如扩展 <code>String</code> 类型<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/23-merge-global-interface" target="_blank" rel="noreferrer">23</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface String {</span></span>
<span class="line"><span>    prependHello(): string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;foo&#39;.prependHello();</span></span></code></pre></div><p>通过声明合并，使用 <code>interface String</code> 即可给 <code>String</code> 添加属性或方法。</p><p>也可以使用 <code>declare namespace</code> 给已有的命名空间添加类型声明<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/24-merge-global-namespace" target="_blank" rel="noreferrer">24</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// types/jquery-plugin/index.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare namespace JQuery {</span></span>
<span class="line"><span>    interface CustomOptions {</span></span>
<span class="line"><span>        bar: string;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface JQueryStatic {</span></span>
<span class="line"><span>    foo(options: JQuery.CustomOptions): string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>jQuery.foo({</span></span>
<span class="line"><span>    bar: &#39;&#39;</span></span>
<span class="line"><span>});</span></span></code></pre></div><h3 id="在-npm-包或-umd-库中扩展全局变量§" tabindex="-1">在 npm 包或 UMD 库中扩展全局变量<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E5%9C%A8-npm-%E5%8C%85%E6%88%96-umd-%E5%BA%93%E4%B8%AD%E6%89%A9%E5%B1%95%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#在-npm-包或-umd-库中扩展全局变量§" aria-label="Permalink to &quot;在 npm 包或 UMD 库中扩展全局变量[§](http://ts.xcatliu.com/basics/declaration-files.html#在-npm-包或-umd-库中扩展全局变量)&quot;">​</a></h3><p>如之前所说，对于一个 npm 包或者 UMD 库的声明文件，只有 <code>export</code> 导出的类型声明才能被导入。所以对于 npm 包或 UMD 库，如果导入此库之后会扩展全局变量，则需要使用另一种语法在声明文件中扩展全局变量的类型，那就是 <code>declare global</code>。</p><h4 id="declare-global§" tabindex="-1"><code>declare global</code><a href="http://ts.xcatliu.com/basics/declaration-files.html#declare-global" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#declare-global§" aria-label="Permalink to &quot;\`declare global\`[§](http://ts.xcatliu.com/basics/declaration-files.html#declare-global)&quot;">​</a></h4><p>使用 <code>declare global</code> 可以在 npm 包或者 UMD 库的声明文件中扩展全局变量的类型<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/25-declare-global" target="_blank" rel="noreferrer">25</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// types/foo/index.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare global {</span></span>
<span class="line"><span>    interface String {</span></span>
<span class="line"><span>        prependHello(): string;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export {};</span></span>
<span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;bar&#39;.prependHello();</span></span></code></pre></div><p>注意即使此声明文件不需要导出任何东西，仍然需要导出一个空对象，用来告诉编译器这是一个模块的声明文件，而不是一个全局变量的声明文件。</p><h3 id="模块插件§" tabindex="-1">模块插件<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E6%A8%A1%E5%9D%97%E6%8F%92%E4%BB%B6" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#模块插件§" aria-label="Permalink to &quot;模块插件[§](http://ts.xcatliu.com/basics/declaration-files.html#模块插件)&quot;">​</a></h3><p>有时通过 <code>import</code> 导入一个模块插件，可以改变另一个原有模块的结构。此时如果原有模块已经有了类型声明文件，而插件模块没有类型声明文件，就会导致类型不完整，缺少插件部分的类型。ts 提供了一个语法 <code>declare module</code>，它可以用来扩展原有模块的类型。</p><h4 id="declare-module§" tabindex="-1"><code>declare module</code><a href="http://ts.xcatliu.com/basics/declaration-files.html#declare-module" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#declare-module§" aria-label="Permalink to &quot;\`declare module\`[§](http://ts.xcatliu.com/basics/declaration-files.html#declare-module)&quot;">​</a></h4><p>如果是需要扩展原有模块的话，需要在类型声明文件中先引用原有模块，再使用 <code>declare module</code> 扩展原有模块<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/26-declare-module" target="_blank" rel="noreferrer">26</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// types/moment-plugin/index.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import * as moment from &#39;moment&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare module &#39;moment&#39; {</span></span>
<span class="line"><span>    export function foo(): moment.CalendarKey;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import * as moment from &#39;moment&#39;;</span></span>
<span class="line"><span>import &#39;moment-plugin&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>moment.foo();</span></span></code></pre></div><p><code>declare module</code> 也可用于在一个文件中一次性声明多个模块的类型<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/27-multiple-declare-module" target="_blank" rel="noreferrer">27</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// types/foo-bar.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare module &#39;foo&#39; {</span></span>
<span class="line"><span>    export interface Foo {</span></span>
<span class="line"><span>        foo: string;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare module &#39;bar&#39; {</span></span>
<span class="line"><span>    export function bar(): string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { Foo } from &#39;foo&#39;;</span></span>
<span class="line"><span>import * as bar from &#39;bar&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let f: Foo;</span></span>
<span class="line"><span>bar.bar();</span></span></code></pre></div><h3 id="声明文件中的依赖§" tabindex="-1">声明文件中的依赖<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6%E4%B8%AD%E7%9A%84%E4%BE%9D%E8%B5%96" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#声明文件中的依赖§" aria-label="Permalink to &quot;声明文件中的依赖[§](http://ts.xcatliu.com/basics/declaration-files.html#声明文件中的依赖)&quot;">​</a></h3><p>一个声明文件有时会依赖另一个声明文件中的类型，比如在前面的 <code>declare module</code> 的例子中，我们就在声明文件中导入了 <code>moment</code>，并且使用了 <code>moment.CalendarKey</code> 这个类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// types/moment-plugin/index.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import * as moment from &#39;moment&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare module &#39;moment&#39; {</span></span>
<span class="line"><span>    export function foo(): moment.CalendarKey;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>除了可以在声明文件中通过 <code>import</code> 导入另一个声明文件中的类型之外，还有一个语法也可以用来导入另一个声明文件，那就是三斜线指令。</p><h4 id="三斜线指令§" tabindex="-1">三斜线指令<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E4%B8%89%E6%96%9C%E7%BA%BF%E6%8C%87%E4%BB%A4" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#三斜线指令§" aria-label="Permalink to &quot;三斜线指令[§](http://ts.xcatliu.com/basics/declaration-files.html#三斜线指令)&quot;">​</a></h4><p>与 <code>namespace</code> 类似，三斜线指令也是 ts 在早期版本中为了描述模块之间的依赖关系而创造的语法。随着 ES6 的广泛应用，现在已经不建议再使用 ts 中的三斜线指令来声明模块之间的依赖关系了。</p><p>但是在声明文件中，它还是有一定的用武之地。</p><p>类似于声明文件中的 <code>import</code>，它可以用来导入另一个声明文件。与 <code>import</code> 的区别是，当且仅当在以下几个场景下，我们才需要使用三斜线指令替代 <code>import</code>：</p><ul><li>当我们在<strong>书写</strong>一个全局变量的声明文件时</li><li>当我们需要<strong>依赖</strong>一个全局变量的声明文件时</li></ul><h5 id="书写一个全局变量的声明文件§" tabindex="-1"><strong>书写</strong>一个全局变量的声明文件<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E4%B9%A6%E5%86%99%E4%B8%80%E4%B8%AA%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F%E7%9A%84%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#书写一个全局变量的声明文件§" aria-label="Permalink to &quot;**书写**一个全局变量的声明文件[§](http://ts.xcatliu.com/basics/declaration-files.html#书写一个全局变量的声明文件)&quot;">​</a></h5><p>这些场景听上去很拗口，但实际上很好理解——在全局变量的声明文件中，是不允许出现 <code>import</code>, <code>export</code> 关键字的。一旦出现了，那么他就会被视为一个 npm 包或 UMD 库，就不再是全局变量的声明文件了。故当我们在书写一个全局变量的声明文件时，如果需要引用另一个库的类型，那么就必须用三斜线指令了<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/28-triple-slash-directives" target="_blank" rel="noreferrer">28</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// types/jquery-plugin/index.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/// &lt;reference types=&quot;jquery&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare function foo(options: JQuery.AjaxSettings): string;</span></span>
<span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>foo({});</span></span></code></pre></div><p>三斜线指令的语法如上，<code>///</code> 后面使用 xml 的格式添加了对 <code>jquery</code> 类型的依赖，这样就可以在声明文件中使用 <code>JQuery.AjaxSettings</code> 类型了。</p><p>注意，三斜线指令必须放在文件的最顶端，三斜线指令的前面只允许出现单行或多行注释。</p><h5 id="依赖一个全局变量的声明文件§" tabindex="-1"><strong>依赖</strong>一个全局变量的声明文件<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E4%BE%9D%E8%B5%96%E4%B8%80%E4%B8%AA%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F%E7%9A%84%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#依赖一个全局变量的声明文件§" aria-label="Permalink to &quot;**依赖**一个全局变量的声明文件[§](http://ts.xcatliu.com/basics/declaration-files.html#依赖一个全局变量的声明文件)&quot;">​</a></h5><p>在另一个场景下，当我们需要依赖一个全局变量的声明文件时，由于全局变量不支持通过 <code>import</code> 导入，当然也就必须使用三斜线指令来引入了<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/29-triple-slash-directives-global" target="_blank" rel="noreferrer">29</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// types/node-plugin/index.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/// &lt;reference types=&quot;node&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function foo(p: NodeJS.Process): string;</span></span>
<span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { foo } from &#39;node-plugin&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>foo(global.process);</span></span></code></pre></div><p>在上面的例子中，我们通过三斜线指引入了 <code>node</code> 的类型，然后在声明文件中使用了 <code>NodeJS.Process</code> 这个类型。最后在使用到 <code>foo</code> 的时候，传入了 <code>node</code> 中的全局变量 <code>process</code>。</p><p>由于引入的 <code>node</code> 中的类型都是全局变量的类型，它们是没有办法通过 <code>import</code> 来导入的，所以这种场景下也只能通过三斜线指令来引入了。</p><p>以上两种使用场景下，都是由于需要书写或需要依赖全局变量的声明文件，所以必须使用三斜线指令。在其他的一些不是必要使用三斜线指令的情况下，就都需要使用 <code>import</code> 来导入。</p><h5 id="拆分声明文件§" tabindex="-1">拆分声明文件<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E6%8B%86%E5%88%86%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#拆分声明文件§" aria-label="Permalink to &quot;拆分声明文件[§](http://ts.xcatliu.com/basics/declaration-files.html#拆分声明文件)&quot;">​</a></h5><p>当我们的全局变量的声明文件太大时，可以通过拆分为多个文件，然后在一个入口文件中将它们一一引入，来提高代码的可维护性。比如 <code>jQuery</code> 的声明文件就是这样的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// node_modules/@types/jquery/index.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/// &lt;reference types=&quot;sizzle&quot; /&gt;</span></span>
<span class="line"><span>/// &lt;reference path=&quot;JQueryStatic.d.ts&quot; /&gt;</span></span>
<span class="line"><span>/// &lt;reference path=&quot;JQuery.d.ts&quot; /&gt;</span></span>
<span class="line"><span>/// &lt;reference path=&quot;misc.d.ts&quot; /&gt;</span></span>
<span class="line"><span>/// &lt;reference path=&quot;legacy.d.ts&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export = jQuery;</span></span></code></pre></div><p>其中用到了 <code>types</code> 和 <code>path</code> 两种不同的指令。它们的区别是：<code>types</code> 用于声明对另一个库的依赖，而 <code>path</code> 用于声明对另一个文件的依赖。</p><p>上例中，<code>sizzle</code> 是与 <code>jquery</code> 平行的另一个库，所以需要使用 <code>types=&quot;sizzle&quot;</code> 来声明对它的依赖。而其他的三斜线指令就是将 <code>jquery</code> 的声明拆分到不同的文件中了，然后在这个入口文件中使用 <code>path=&quot;foo&quot;</code> 将它们一一引入。</p><h5 id="其他三斜线指令§" tabindex="-1">其他三斜线指令<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E5%85%B6%E4%BB%96%E4%B8%89%E6%96%9C%E7%BA%BF%E6%8C%87%E4%BB%A4" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#其他三斜线指令§" aria-label="Permalink to &quot;其他三斜线指令[§](http://ts.xcatliu.com/basics/declaration-files.html#其他三斜线指令)&quot;">​</a></h5><p>除了这两种三斜线指令之外，还有其他的三斜线指令，比如 <code>/// &lt;reference no-default-lib=&quot;true&quot;/&gt;</code>, <code>/// &lt;amd-module /&gt;</code> 等，但它们都是废弃的语法，故这里就不介绍了，详情可见<a href="http://www.typescriptlang.org/docs/handbook/triple-slash-directives.html" target="_blank" rel="noreferrer">官网</a>。</p><h3 id="自动生成声明文件§" tabindex="-1">自动生成声明文件<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#自动生成声明文件§" aria-label="Permalink to &quot;自动生成声明文件[§](http://ts.xcatliu.com/basics/declaration-files.html#自动生成声明文件)&quot;">​</a></h3><p>如果库的源码本身就是由 ts 写的，那么在使用 <code>tsc</code> 脚本将 ts 编译为 js 的时候，添加 <code>declaration</code> 选项，就可以同时也生成 <code>.d.ts</code> 声明文件了。</p><p>我们可以在命令行中添加 <code>--declaration</code>（简写 <code>-d</code>），或者在 <code>tsconfig.json</code> 中添加 <code>declaration</code> 选项。这里以 <code>tsconfig.json</code> 为例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span>        &quot;module&quot;: &quot;commonjs&quot;,</span></span>
<span class="line"><span>        &quot;outDir&quot;: &quot;lib&quot;,</span></span>
<span class="line"><span>        &quot;declaration&quot;: true,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上例中我们添加了 <code>outDir</code> 选项，将 ts 文件的编译结果输出到 <code>lib</code> 目录下，然后添加了 <code>declaration</code> 选项，设置为 <code>true</code>，表示将会由 ts 文件自动生成 <code>.d.ts</code> 声明文件，也会输出到 <code>lib</code> 目录下。</p><p>运行 <code>tsc</code> 之后，目录结构如下<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/declaration-files/30-auto-d-ts" target="_blank" rel="noreferrer">30</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/path/to/project</span></span>
<span class="line"><span>├── lib</span></span>
<span class="line"><span>|  ├── bar</span></span>
<span class="line"><span>|  |  ├── index.d.ts</span></span>
<span class="line"><span>|  |  └── index.js</span></span>
<span class="line"><span>|  ├── index.d.ts</span></span>
<span class="line"><span>|  └── index.js</span></span>
<span class="line"><span>├── src</span></span>
<span class="line"><span>|  ├── bar</span></span>
<span class="line"><span>|  |  └── index.ts</span></span>
<span class="line"><span>|  └── index.ts</span></span>
<span class="line"><span>├── package.json</span></span>
<span class="line"><span>└── tsconfig.json</span></span></code></pre></div><p>在这个例子中，<code>src</code> 目录下有两个 ts 文件，分别是 <code>src/index.ts</code> 和 <code>src/bar/index.ts</code>，它们被编译到 <code>lib</code> 目录下的同时，也会生成对应的两个声明文件 <code>lib/index.d.ts</code> 和 <code>lib/bar/index.d.ts</code>。它们的内容分别是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// src/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export * from &#39;./bar&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function foo() {</span></span>
<span class="line"><span>    return &#39;foo&#39;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// src/bar/index.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function bar() {</span></span>
<span class="line"><span>    return &#39;bar&#39;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// lib/index.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export * from &#39;./bar&#39;;</span></span>
<span class="line"><span>export default function foo(): string;</span></span>
<span class="line"><span>// lib/bar/index.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export declare function bar(): string;</span></span></code></pre></div><p>可见，自动生成的声明文件基本保持了源码的结构，而将具体实现去掉了，生成了对应的类型声明。</p><p>使用 <code>tsc</code> 自动生成声明文件时，每个 ts 文件都会对应一个 <code>.d.ts</code> 声明文件。这样的好处是，使用方不仅可以在使用 <code>import foo from &#39;foo&#39;</code> 导入默认的模块时获得类型提示，还可以在使用 <code>import bar from &#39;foo/lib/bar&#39;</code> 导入一个子模块时，也获得对应的类型提示。</p><p>除了 <code>declaration</code> 选项之外，还有几个选项也与自动生成声明文件有关，这里只简单列举出来，不做详细演示了：</p><ul><li><code>declarationDir</code> 设置生成 <code>.d.ts</code> 文件的目录</li><li><code>declarationMap</code> 对每个 <code>.d.ts</code> 文件，都生成对应的 <code>.d.ts.map</code>（sourcemap）文件</li><li><code>emitDeclarationOnly</code> 仅生成 <code>.d.ts</code> 文件，不生成 <code>.js</code> 文件</li></ul><h2 id="发布声明文件§" tabindex="-1">发布声明文件<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E5%8F%91%E5%B8%83%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#发布声明文件§" aria-label="Permalink to &quot;发布声明文件[§](http://ts.xcatliu.com/basics/declaration-files.html#发布声明文件)&quot;">​</a></h2><p>当我们为一个库写好了声明文件之后，下一步就是将它发布出去了。</p><p>此时有两种方案：</p><ol><li>将声明文件和源码放在一起</li><li>将声明文件发布到 <code>@types</code> 下</li></ol><p>这两种方案中优先选择第一种方案。保持声明文件与源码在一起，使用时就不需要额外增加单独的声明文件库的依赖了，而且也能保证声明文件的版本与源码的版本保持一致。</p><p>仅当我们在给别人的仓库添加类型声明文件，但原作者不愿意合并 pull request 时，才需要使用第二种方案，将声明文件发布到 <code>@types</code> 下。</p><h3 id="将声明文件和源码放在一起§" tabindex="-1">将声明文件和源码放在一起<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E5%B0%86%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6%E5%92%8C%E6%BA%90%E7%A0%81%E6%94%BE%E5%9C%A8%E4%B8%80%E8%B5%B7" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#将声明文件和源码放在一起§" aria-label="Permalink to &quot;将声明文件和源码放在一起[§](http://ts.xcatliu.com/basics/declaration-files.html#将声明文件和源码放在一起)&quot;">​</a></h3><p>如果声明文件是通过 <code>tsc</code> 自动生成的，那么无需做任何其他配置，只需要把编译好的文件也发布到 npm 上，使用方就可以获取到类型提示了。</p><p>如果是手动写的声明文件，那么需要满足以下条件之一，才能被正确的识别：</p><ul><li>给 <code>package.json</code> 中的 <code>types</code> 或 <code>typings</code> 字段指定一个类型声明文件地址</li><li>在项目根目录下，编写一个 <code>index.d.ts</code> 文件</li><li>针对入口文件（<code>package.json</code> 中的 <code>main</code> 字段指定的入口文件），编写一个同名不同后缀的 <code>.d.ts</code> 文件</li></ul><p>第一种方式是给 <code>package.json</code> 中的 <code>types</code> 或 <code>typings</code> 字段指定一个类型声明文件地址。比如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;name&quot;: &quot;foo&quot;,</span></span>
<span class="line"><span>    &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span>    &quot;main&quot;: &quot;lib/index.js&quot;,</span></span>
<span class="line"><span>    &quot;types&quot;: &quot;foo.d.ts&quot;,</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>指定了 <code>types</code> 为 <code>foo.d.ts</code> 之后，导入此库的时候，就会去找 <code>foo.d.ts</code> 作为此库的类型声明文件了。</p><p><code>typings</code> 与 <code>types</code> 一样，只是另一种写法。</p><p>如果没有指定 <code>types</code> 或 <code>typings</code>，那么就会在根目录下寻找 <code>index.d.ts</code> 文件，将它视为此库的类型声明文件。</p><p>如果没有找到 <code>index.d.ts</code> 文件，那么就会寻找入口文件（<code>package.json</code> 中的 <code>main</code> 字段指定的入口文件）是否存在对应同名不同后缀的 <code>.d.ts</code> 文件。</p><p>比如 <code>package.json</code> 是这样时：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;name&quot;: &quot;foo&quot;,</span></span>
<span class="line"><span>    &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span>    &quot;main&quot;: &quot;lib/index.js&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>就会先识别 <code>package.json</code> 中是否存在 <code>types</code> 或 <code>typings</code> 字段。发现不存在，那么就会寻找是否存在 <code>index.d.ts</code> 文件。如果还是不存在，那么就会寻找是否存在 <code>lib/index.d.ts</code> 文件。假如说连 <code>lib/index.d.ts</code> 都不存在的话，就会被认为是一个没有提供类型声明文件的库了。</p><p>有的库为了支持导入子模块，比如 <code>import bar from &#39;foo/lib/bar&#39;</code>，就需要额外再编写一个类型声明文件 <code>lib/bar.d.ts</code> 或者 <code>lib/bar/index.d.ts</code>，这与自动生成声明文件类似，一个库中同时包含了多个类型声明文件。</p><h3 id="将声明文件发布到-types-下§" tabindex="-1">将声明文件发布到 <code>@types</code> 下<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E5%B0%86%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6%E5%8F%91%E5%B8%83%E5%88%B0-types-%E4%B8%8B" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#将声明文件发布到-types-下§" aria-label="Permalink to &quot;将声明文件发布到 \`@types\` 下[§](http://ts.xcatliu.com/basics/declaration-files.html#将声明文件发布到-types-下)&quot;">​</a></h3><p>如果我们是在给别人的仓库添加类型声明文件，但原作者不愿意合并 pull request，那么就需要将声明文件发布到 <code>@types</code> 下。</p><p>与普通的 npm 模块不同，<code>@types</code> 是统一由 <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/" target="_blank" rel="noreferrer">DefinitelyTyped</a> 管理的。要将声明文件发布到 <code>@types</code> 下，就需要给 <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/" target="_blank" rel="noreferrer">DefinitelyTyped</a> 创建一个 pull-request，其中包含了类型声明文件，测试代码，以及 <code>tsconfig.json</code> 等。</p><p>pull-request 需要符合它们的规范，并且通过测试，才能被合并，稍后就会被自动发布到 <code>@types</code> 下。</p><p>在 <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/" target="_blank" rel="noreferrer">DefinitelyTyped</a> 中创建一个新的类型声明，需要用到一些工具，<a href="https://github.com/DefinitelyTyped/DefinitelyTyped/" target="_blank" rel="noreferrer">DefinitelyTyped</a> 的文档中已经有了<a href="https://github.com/DefinitelyTyped/DefinitelyTyped#create-a-new-package" target="_blank" rel="noreferrer">详细的介绍</a>，这里就不赘述了，以官方文档为准。</p><p>如果大家有此类需求，可以参考下笔者<a href="https://github.com/DefinitelyTyped/DefinitelyTyped/pull/30336/files" target="_blank" rel="noreferrer">提交的 pull-request</a> 。</p><h2 id="参考§-8" tabindex="-1">参考<a href="http://ts.xcatliu.com/basics/declaration-files.html#%E5%8F%82%E8%80%83" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#参考§-8" aria-label="Permalink to &quot;参考[§](http://ts.xcatliu.com/basics/declaration-files.html#参考)&quot;">​</a></h2><ul><li><a href="http://www.typescriptlang.org/docs/handbook/writing-declaration-files.html" target="_blank" rel="noreferrer">Writing Declaration Files</a>（[中文版](<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/declaration" target="_blank" rel="noreferrer">https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/declaration</a> files/Introduction.html)）</li><li><a href="http://www.typescriptlang.org/docs/handbook/triple-slash-directives.html" target="_blank" rel="noreferrer">Triple-Slash Directives</a>（[中文版](<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Triple-Slash" target="_blank" rel="noreferrer">https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Triple-Slash</a> Directives.html)）</li><li><a href="https://github.com/Microsoft/TypeScript/issues/22217#issuecomment-369783776" target="_blank" rel="noreferrer">typeRoots or paths</a></li><li><a href="https://github.com/DefinitelyTyped/DefinitelyTyped/" target="_blank" rel="noreferrer">DefinitelyTyped</a></li></ul><h1 id="内置对象" tabindex="-1">内置对象 <a class="header-anchor" href="#内置对象" aria-label="Permalink to &quot;内置对象&quot;">​</a></h1><p>JavaScript 中有很多<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects" target="_blank" rel="noreferrer">内置对象</a>，它们可以直接在 TypeScript 中当做定义好了的类型。</p><p>内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。</p><h2 id="ecmascript-的内置对象§" tabindex="-1">ECMAScript 的内置对象<a href="http://ts.xcatliu.com/basics/built-in-objects.html#ecmascript-%E7%9A%84%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#ecmascript-的内置对象§" aria-label="Permalink to &quot;ECMAScript 的内置对象[§](http://ts.xcatliu.com/basics/built-in-objects.html#ecmascript-的内置对象)&quot;">​</a></h2><p>ECMAScript 标准提供的内置对象有：</p><p><code>Boolean</code>、<code>Error</code>、<code>Date</code>、<code>RegExp</code> 等。</p><p>我们可以在 TypeScript 中将变量定义为这些类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let b: Boolean = new Boolean(1);</span></span>
<span class="line"><span>let e: Error = new Error(&#39;Error occurred&#39;);</span></span>
<span class="line"><span>let d: Date = new Date();</span></span>
<span class="line"><span>let r: RegExp = /[a-z]/;</span></span></code></pre></div><p>更多的内置对象，可以查看 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects" target="_blank" rel="noreferrer">MDN 的文档</a>。</p><p>而他们的定义文件，则在 <a href="https://github.com/Microsoft/TypeScript/tree/master/src/lib" target="_blank" rel="noreferrer">TypeScript 核心库的定义文件</a>中。</p><h2 id="dom-和-bom-的内置对象§" tabindex="-1">DOM 和 BOM 的内置对象<a href="http://ts.xcatliu.com/basics/built-in-objects.html#dom-%E5%92%8C-bom-%E7%9A%84%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#dom-和-bom-的内置对象§" aria-label="Permalink to &quot;DOM 和 BOM 的内置对象[§](http://ts.xcatliu.com/basics/built-in-objects.html#dom-和-bom-的内置对象)&quot;">​</a></h2><p>DOM 和 BOM 提供的内置对象有：</p><p><code>Document</code>、<code>HTMLElement</code>、<code>Event</code>、<code>NodeList</code> 等。</p><p>TypeScript 中会经常用到这些类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let body: HTMLElement = document.body;</span></span>
<span class="line"><span>let allDiv: NodeList = document.querySelectorAll(&#39;div&#39;);</span></span>
<span class="line"><span>document.addEventListener(&#39;click&#39;, function(e: MouseEvent) {</span></span>
<span class="line"><span>  // Do something</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>它们的定义文件同样在 <a href="https://github.com/Microsoft/TypeScript/tree/master/src/lib" target="_blank" rel="noreferrer">TypeScript 核心库的定义文件</a>中。</p><h2 id="typescript-核心库的定义文件§" tabindex="-1">TypeScript 核心库的定义文件<a href="http://ts.xcatliu.com/basics/built-in-objects.html#typescript-%E6%A0%B8%E5%BF%83%E5%BA%93%E7%9A%84%E5%AE%9A%E4%B9%89%E6%96%87%E4%BB%B6" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#typescript-核心库的定义文件§" aria-label="Permalink to &quot;TypeScript 核心库的定义文件[§](http://ts.xcatliu.com/basics/built-in-objects.html#typescript-核心库的定义文件)&quot;">​</a></h2><p><a href="https://github.com/Microsoft/TypeScript/tree/master/src/lib" target="_blank" rel="noreferrer">TypeScript 核心库的定义文件</a>中定义了所有浏览器环境需要用到的类型，并且是预置在 TypeScript 中的。</p><p>当你在使用一些常用的方法的时候，TypeScript 实际上已经帮你做了很多类型判断的工作了，比如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Math.pow(10, &#39;2&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(1,14): error TS2345: Argument of type &#39;string&#39; is not assignable to parameter of type &#39;number&#39;.</span></span></code></pre></div><p>上面的例子中，<code>Math.pow</code> 必须接受两个 <code>number</code> 类型的参数。事实上 <code>Math.pow</code> 的类型定义如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Math {</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * Returns the value of a base expression taken to a specified power.</span></span>
<span class="line"><span>     * @param x The base value of the expression.</span></span>
<span class="line"><span>     * @param y The exponent value of the expression.</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    pow(x: number, y: number): number;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>再举一个 DOM 中的例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>document.addEventListener(&#39;click&#39;, function(e) {</span></span>
<span class="line"><span>    console.log(e.targetCurrent);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(2,17): error TS2339: Property &#39;targetCurrent&#39; does not exist on type &#39;MouseEvent&#39;.</span></span></code></pre></div><p>上面的例子中，<code>addEventListener</code> 方法是在 TypeScript 核心库中定义的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Document extends Node, GlobalEventHandlers, NodeSelector, DocumentEvent {</span></span>
<span class="line"><span>    addEventListener(type: string, listener: (ev: MouseEvent) =&gt; any, useCapture?: boolean): void;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>所以 <code>e</code> 被推断成了 <code>MouseEvent</code>，而 <code>MouseEvent</code> 是没有 <code>targetCurrent</code> 属性的，所以报错了。</p><p>注意，TypeScript 核心库的定义中不包含 Node.js 部分。</p><h2 id="用-typescript-写-node-js§" tabindex="-1">用 TypeScript 写 Node.js<a href="http://ts.xcatliu.com/basics/built-in-objects.html#%E7%94%A8-typescript-%E5%86%99-nodejs" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#用-typescript-写-node-js§" aria-label="Permalink to &quot;用 TypeScript 写 Node.js[§](http://ts.xcatliu.com/basics/built-in-objects.html#用-typescript-写-nodejs)&quot;">​</a></h2><p>Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install @types/node --save-dev</span></span></code></pre></div><h2 id="参考§-9" tabindex="-1">参考<a href="http://ts.xcatliu.com/basics/built-in-objects.html#%E5%8F%82%E8%80%83" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#参考§-9" aria-label="Permalink to &quot;参考[§](http://ts.xcatliu.com/basics/built-in-objects.html#参考)&quot;">​</a></h2><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects" target="_blank" rel="noreferrer">内置对象</a></li><li><a href="https://github.com/Microsoft/TypeScript/tree/master/src/lib" target="_blank" rel="noreferrer">TypeScript 核心库的定义文件</a></li></ul><h1 id="类型别名" tabindex="-1">类型别名 <a class="header-anchor" href="#类型别名" aria-label="Permalink to &quot;类型别名&quot;">​</a></h1><p>类型别名用来给一个类型起个新名字。</p><h2 id="简单的例子§-2" tabindex="-1">简单的例子<a href="http://ts.xcatliu.com/advanced/type-aliases.html#%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#简单的例子§-2" aria-label="Permalink to &quot;简单的例子[§](http://ts.xcatliu.com/advanced/type-aliases.html#简单的例子)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type Name = string;</span></span>
<span class="line"><span>type NameResolver = () =&gt; string;</span></span>
<span class="line"><span>type NameOrResolver = Name | NameResolver;</span></span>
<span class="line"><span>function getName(n: NameOrResolver): Name {</span></span>
<span class="line"><span>    if (typeof n === &#39;string&#39;) {</span></span>
<span class="line"><span>        return n;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        return n();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上例中，我们使用 <code>type</code> 创建类型别名。</p><p>类型别名常用于联合类型。</p><h2 id="参考§-10" tabindex="-1">参考<a href="http://ts.xcatliu.com/advanced/type-aliases.html#%E5%8F%82%E8%80%83" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#参考§-10" aria-label="Permalink to &quot;参考[§](http://ts.xcatliu.com/advanced/type-aliases.html#参考)&quot;">​</a></h2><ul><li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases" target="_blank" rel="noreferrer">Advanced Types # Type Aliases</a>（[中文版](<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced" target="_blank" rel="noreferrer">https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced</a> Types.html#类型别名)）</li></ul><h1 id="字符串字面量类型" tabindex="-1">字符串字面量类型 <a class="header-anchor" href="#字符串字面量类型" aria-label="Permalink to &quot;字符串字面量类型&quot;">​</a></h1><p>字符串字面量类型用来约束取值只能是某几个字符串中的一个。</p><h2 id="简单的例子§-3" tabindex="-1">简单的例子<a href="http://ts.xcatliu.com/advanced/string-literal-types.html#%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#简单的例子§-3" aria-label="Permalink to &quot;简单的例子[§](http://ts.xcatliu.com/advanced/string-literal-types.html#简单的例子)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type EventNames = &#39;click&#39; | &#39;scroll&#39; | &#39;mousemove&#39;;</span></span>
<span class="line"><span>function handleEvent(ele: Element, event: EventNames) {</span></span>
<span class="line"><span>    // do something</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>handleEvent(document.getElementById(&#39;hello&#39;), &#39;scroll&#39;);  // 没问题</span></span>
<span class="line"><span>handleEvent(document.getElementById(&#39;world&#39;), &#39;dblclick&#39;); // 报错，event 不能为 &#39;dblclick&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(7,47): error TS2345: Argument of type &#39;&quot;dblclick&quot;&#39; is not assignable to parameter of type &#39;EventNames&#39;.</span></span></code></pre></div><p>上例中，我们使用 <code>type</code> 定了一个字符串字面量类型 <code>EventNames</code>，它只能取三种字符串中的一种。</p><p>注意，<strong>类型别名与字符串字面量类型都是使用 <code>type</code> 进行定义。</strong></p><h2 id="参考§-11" tabindex="-1">参考<a href="http://ts.xcatliu.com/advanced/string-literal-types.html#%E5%8F%82%E8%80%83" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#参考§-11" aria-label="Permalink to &quot;参考[§](http://ts.xcatliu.com/advanced/string-literal-types.html#参考)&quot;">​</a></h2><ul><li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types" target="_blank" rel="noreferrer">Advanced Types # Type Aliases</a>（[中文版](<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced" target="_blank" rel="noreferrer">https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced</a> Types.html#字符串字面量类型)）</li></ul><h1 id="元组" tabindex="-1">元组 <a class="header-anchor" href="#元组" aria-label="Permalink to &quot;元组&quot;">​</a></h1><p>数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。</p><p>元组起源于函数编程语言（如 F#），这些语言中会频繁使用元组。</p><h2 id="简单的例子§-4" tabindex="-1">简单的例子<a href="http://ts.xcatliu.com/advanced/tuple.html#%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#简单的例子§-4" aria-label="Permalink to &quot;简单的例子[§](http://ts.xcatliu.com/advanced/tuple.html#简单的例子)&quot;">​</a></h2><p>定义一对值分别为 <code>string</code> 和 <code>number</code> 的元组：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let tom: [string, number] = [&#39;Tom&#39;, 25];</span></span></code></pre></div><p>当赋值或访问一个已知索引的元素时，会得到正确的类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let tom: [string, number];</span></span>
<span class="line"><span>tom[0] = &#39;Tom&#39;;</span></span>
<span class="line"><span>tom[1] = 25;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tom[0].slice(1);</span></span>
<span class="line"><span>tom[1].toFixed(2);</span></span></code></pre></div><p>也可以只赋值其中一项：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let tom: [string, number];</span></span>
<span class="line"><span>tom[0] = &#39;Tom&#39;;</span></span></code></pre></div><p>但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let tom: [string, number];</span></span>
<span class="line"><span>tom = [&#39;Tom&#39;, 25];</span></span>
<span class="line"><span>let tom: [string, number];</span></span>
<span class="line"><span>tom = [&#39;Tom&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Property &#39;1&#39; is missing in type &#39;[string]&#39; but required in type &#39;[string, number]&#39;.</span></span></code></pre></div><h2 id="越界的元素§" tabindex="-1">越界的元素<a href="http://ts.xcatliu.com/advanced/tuple.html#%E8%B6%8A%E7%95%8C%E7%9A%84%E5%85%83%E7%B4%A0" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#越界的元素§" aria-label="Permalink to &quot;越界的元素[§](http://ts.xcatliu.com/advanced/tuple.html#越界的元素)&quot;">​</a></h2><p>当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let tom: [string, number];</span></span>
<span class="line"><span>tom = [&#39;Tom&#39;, 25];</span></span>
<span class="line"><span>tom.push(&#39;male&#39;);</span></span>
<span class="line"><span>tom.push(true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Argument of type &#39;true&#39; is not assignable to parameter of type &#39;string | number&#39;.</span></span></code></pre></div><h2 id="参考§-12" tabindex="-1">参考<a href="http://ts.xcatliu.com/advanced/tuple.html#%E5%8F%82%E8%80%83" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#参考§-12" aria-label="Permalink to &quot;参考[§](http://ts.xcatliu.com/advanced/tuple.html#参考)&quot;">​</a></h2><ul><li><a href="http://www.typescriptlang.org/docs/handbook/basic-types.html#tuple" target="_blank" rel="noreferrer">Basic Types # Tuple</a>（[中文版](<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic" target="_blank" rel="noreferrer">https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic</a> Types.html#元组-tuple)）</li></ul><h1 id="枚举" tabindex="-1">枚举 <a class="header-anchor" href="#枚举" aria-label="Permalink to &quot;枚举&quot;">​</a></h1><p>枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。</p><h2 id="简单的例子§-5" tabindex="-1">简单的例子<a href="http://ts.xcatliu.com/advanced/enum.html#%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#简单的例子§-5" aria-label="Permalink to &quot;简单的例子[§](http://ts.xcatliu.com/advanced/enum.html#简单的例子)&quot;">​</a></h2><p>枚举使用 <code>enum</code> 关键字来定义：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};</span></span></code></pre></div><p>枚举成员会被赋值为从 <code>0</code> 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(Days[&quot;Sun&quot;] === 0); // true</span></span>
<span class="line"><span>console.log(Days[&quot;Mon&quot;] === 1); // true</span></span>
<span class="line"><span>console.log(Days[&quot;Tue&quot;] === 2); // true</span></span>
<span class="line"><span>console.log(Days[&quot;Sat&quot;] === 6); // true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(Days[0] === &quot;Sun&quot;); // true</span></span>
<span class="line"><span>console.log(Days[1] === &quot;Mon&quot;); // true</span></span>
<span class="line"><span>console.log(Days[2] === &quot;Tue&quot;); // true</span></span>
<span class="line"><span>console.log(Days[6] === &quot;Sat&quot;); // true</span></span></code></pre></div><p>事实上，上面的例子会被编译为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var Days;</span></span>
<span class="line"><span>(function (Days) {</span></span>
<span class="line"><span>    Days[Days[&quot;Sun&quot;] = 0] = &quot;Sun&quot;;</span></span>
<span class="line"><span>    Days[Days[&quot;Mon&quot;] = 1] = &quot;Mon&quot;;</span></span>
<span class="line"><span>    Days[Days[&quot;Tue&quot;] = 2] = &quot;Tue&quot;;</span></span>
<span class="line"><span>    Days[Days[&quot;Wed&quot;] = 3] = &quot;Wed&quot;;</span></span>
<span class="line"><span>    Days[Days[&quot;Thu&quot;] = 4] = &quot;Thu&quot;;</span></span>
<span class="line"><span>    Days[Days[&quot;Fri&quot;] = 5] = &quot;Fri&quot;;</span></span>
<span class="line"><span>    Days[Days[&quot;Sat&quot;] = 6] = &quot;Sat&quot;;</span></span>
<span class="line"><span>})(Days || (Days = {}));</span></span></code></pre></div><h2 id="手动赋值§" tabindex="-1">手动赋值<a href="http://ts.xcatliu.com/advanced/enum.html#%E6%89%8B%E5%8A%A8%E8%B5%8B%E5%80%BC" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#手动赋值§" aria-label="Permalink to &quot;手动赋值[§](http://ts.xcatliu.com/advanced/enum.html#手动赋值)&quot;">​</a></h2><p>我们也可以给枚举项手动赋值：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(Days[&quot;Sun&quot;] === 7); // true</span></span>
<span class="line"><span>console.log(Days[&quot;Mon&quot;] === 1); // true</span></span>
<span class="line"><span>console.log(Days[&quot;Tue&quot;] === 2); // true</span></span>
<span class="line"><span>console.log(Days[&quot;Sat&quot;] === 6); // true</span></span></code></pre></div><p>上面的例子中，未手动赋值的枚举项会接着上一个枚举项递增。</p><p>如果未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(Days[&quot;Sun&quot;] === 3); // true</span></span>
<span class="line"><span>console.log(Days[&quot;Wed&quot;] === 3); // true</span></span>
<span class="line"><span>console.log(Days[3] === &quot;Sun&quot;); // false</span></span>
<span class="line"><span>console.log(Days[3] === &quot;Wed&quot;); // true</span></span></code></pre></div><p>上面的例子中，递增到 <code>3</code> 的时候与前面的 <code>Sun</code> 的取值重复了，但是 TypeScript 并没有报错，导致 <code>Days[3]</code> 的值先是 <code>&quot;Sun&quot;</code>，而后又被 <code>&quot;Wed&quot;</code> 覆盖了。编译的结果是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var Days;</span></span>
<span class="line"><span>(function (Days) {</span></span>
<span class="line"><span>    Days[Days[&quot;Sun&quot;] = 3] = &quot;Sun&quot;;</span></span>
<span class="line"><span>    Days[Days[&quot;Mon&quot;] = 1] = &quot;Mon&quot;;</span></span>
<span class="line"><span>    Days[Days[&quot;Tue&quot;] = 2] = &quot;Tue&quot;;</span></span>
<span class="line"><span>    Days[Days[&quot;Wed&quot;] = 3] = &quot;Wed&quot;;</span></span>
<span class="line"><span>    Days[Days[&quot;Thu&quot;] = 4] = &quot;Thu&quot;;</span></span>
<span class="line"><span>    Days[Days[&quot;Fri&quot;] = 5] = &quot;Fri&quot;;</span></span>
<span class="line"><span>    Days[Days[&quot;Sat&quot;] = 6] = &quot;Sat&quot;;</span></span>
<span class="line"><span>})(Days || (Days = {}));</span></span></code></pre></div><p>所以使用的时候需要注意，最好不要出现这种覆盖的情况。</p><p>手动赋值的枚举项可以不是数字，此时需要使用类型断言来让 tsc 无视类型检查 (编译出的 js 仍然是可用的)：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>enum Days {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = &lt;any&gt;&quot;S&quot;};</span></span>
<span class="line"><span>var Days;</span></span>
<span class="line"><span>(function (Days) {</span></span>
<span class="line"><span>    Days[Days[&quot;Sun&quot;] = 7] = &quot;Sun&quot;;</span></span>
<span class="line"><span>    Days[Days[&quot;Mon&quot;] = 8] = &quot;Mon&quot;;</span></span>
<span class="line"><span>    Days[Days[&quot;Tue&quot;] = 9] = &quot;Tue&quot;;</span></span>
<span class="line"><span>    Days[Days[&quot;Wed&quot;] = 10] = &quot;Wed&quot;;</span></span>
<span class="line"><span>    Days[Days[&quot;Thu&quot;] = 11] = &quot;Thu&quot;;</span></span>
<span class="line"><span>    Days[Days[&quot;Fri&quot;] = 12] = &quot;Fri&quot;;</span></span>
<span class="line"><span>    Days[Days[&quot;Sat&quot;] = &quot;S&quot;] = &quot;Sat&quot;;</span></span>
<span class="line"><span>})(Days || (Days = {}));</span></span></code></pre></div><p>当然，手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 <code>1</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>enum Days {Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(Days[&quot;Sun&quot;] === 7); // true</span></span>
<span class="line"><span>console.log(Days[&quot;Mon&quot;] === 1.5); // true</span></span>
<span class="line"><span>console.log(Days[&quot;Tue&quot;] === 2.5); // true</span></span>
<span class="line"><span>console.log(Days[&quot;Sat&quot;] === 6.5); // true</span></span></code></pre></div><h2 id="常数项和计算所得项§" tabindex="-1">常数项和计算所得项<a href="http://ts.xcatliu.com/advanced/enum.html#%E5%B8%B8%E6%95%B0%E9%A1%B9%E5%92%8C%E8%AE%A1%E7%AE%97%E6%89%80%E5%BE%97%E9%A1%B9" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#常数项和计算所得项§" aria-label="Permalink to &quot;常数项和计算所得项[§](http://ts.xcatliu.com/advanced/enum.html#常数项和计算所得项)&quot;">​</a></h2><p>枚举项有两种类型：常数项（constant member）和计算所得项（computed member）。</p><p>前面我们所举的例子都是常数项，一个典型的计算所得项的例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>enum Color {Red, Green, Blue = &quot;blue&quot;.length};</span></span></code></pre></div><p>上面的例子中，<code>&quot;blue&quot;.length</code> 就是一个计算所得项。</p><p>上面的例子不会报错，但是<strong>如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>enum Color {Red = &quot;red&quot;.length, Green, Blue};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(1,33): error TS1061: Enum member must have initializer.</span></span>
<span class="line"><span>// index.ts(1,40): error TS1061: Enum member must have initializer.</span></span></code></pre></div><p>下面是常数项和计算所得项的完整定义，部分引用自<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Enums.html" target="_blank" rel="noreferrer">中文手册 - 枚举</a>：</p><p>当满足以下条件时，枚举成员被当作是常数：</p><ul><li>不具有初始化函数并且之前的枚举成员是常数。在这种情况下，当前枚举成员的值为上一个枚举成员的值加 <code>1</code>。但第一个枚举元素是个例外。如果它没有初始化方法，那么它的初始值为 <code>0</code>。</li><li>枚举成员使用常数枚举表达式初始化。常数枚举表达式是 TypeScript 表达式的子集，它可以在编译阶段求值。当一个表达式满足下面条件之一时，它就是一个常数枚举表达式： <ul><li>数字字面量</li><li>引用之前定义的常数枚举成员（可以是在不同的枚举类型中定义的）如果这个成员是在同一个枚举类型中定义的，可以使用非限定名来引用</li><li>带括号的常数枚举表达式</li><li><code>+</code>, <code>-</code>, <code>~</code> 一元运算符应用于常数枚举表达式</li><li><code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>, <code>&lt;&lt;</code>, <code>&gt;&gt;</code>, <code>&gt;&gt;&gt;</code>, <code>&amp;</code>, <code>|</code>, <code>^</code> 二元运算符，常数枚举表达式做为其一个操作对象。若常数枚举表达式求值后为 NaN 或 Infinity，则会在编译阶段报错</li></ul></li></ul><p>所有其它情况的枚举成员被当作是需要计算得出的值。</p><h2 id="常数枚举§" tabindex="-1">常数枚举<a href="http://ts.xcatliu.com/advanced/enum.html#%E5%B8%B8%E6%95%B0%E6%9E%9A%E4%B8%BE" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#常数枚举§" aria-label="Permalink to &quot;常数枚举[§](http://ts.xcatliu.com/advanced/enum.html#常数枚举)&quot;">​</a></h2><p>常数枚举是使用 <code>const enum</code> 定义的枚举类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const enum Directions {</span></span>
<span class="line"><span>    Up,</span></span>
<span class="line"><span>    Down,</span></span>
<span class="line"><span>    Left,</span></span>
<span class="line"><span>    Right</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];</span></span></code></pre></div><p>常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。</p><p>上例的编译结果是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];</span></span></code></pre></div><p>假如包含了计算成员，则会在编译阶段报错：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const enum Color {Red, Green, Blue = &quot;blue&quot;.length};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(1,38): error TS2474: In &#39;const&#39; enum declarations member initializer must be constant expression.</span></span></code></pre></div><h2 id="外部枚举§" tabindex="-1">外部枚举<a href="http://ts.xcatliu.com/advanced/enum.html#%E5%A4%96%E9%83%A8%E6%9E%9A%E4%B8%BE" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#外部枚举§" aria-label="Permalink to &quot;外部枚举[§](http://ts.xcatliu.com/advanced/enum.html#外部枚举)&quot;">​</a></h2><p>外部枚举（Ambient Enums）是使用 <code>declare enum</code> 定义的枚举类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>declare enum Directions {</span></span>
<span class="line"><span>    Up,</span></span>
<span class="line"><span>    Down,</span></span>
<span class="line"><span>    Left,</span></span>
<span class="line"><span>    Right</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];</span></span></code></pre></div><p>之前提到过，<code>declare</code> 定义的类型只会用于编译时的检查，编译结果中会被删除。</p><p>上例的编译结果是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];</span></span></code></pre></div><p>外部枚举与声明语句一样，常出现在声明文件中。</p><p>同时使用 <code>declare</code> 和 <code>const</code> 也是可以的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>declare const enum Directions {</span></span>
<span class="line"><span>    Up,</span></span>
<span class="line"><span>    Down,</span></span>
<span class="line"><span>    Left,</span></span>
<span class="line"><span>    Right</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];</span></span></code></pre></div><p>编译结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];</span></span></code></pre></div><blockquote><p>TypeScript 的枚举类型的概念<a href="https://msdn.microsoft.com/zh-cn/library/sbbt4032.aspx" target="_blank" rel="noreferrer">来源于 C#</a>。</p></blockquote><h2 id="参考§-13" tabindex="-1">参考<a href="http://ts.xcatliu.com/advanced/enum.html#%E5%8F%82%E8%80%83" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#参考§-13" aria-label="Permalink to &quot;参考[§](http://ts.xcatliu.com/advanced/enum.html#参考)&quot;">​</a></h2><ul><li><a href="http://www.typescriptlang.org/docs/handbook/enums.html" target="_blank" rel="noreferrer">Enums</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Enums.html" target="_blank" rel="noreferrer">中文版</a>）</li><li><a href="https://msdn.microsoft.com/zh-cn/library/sbbt4032.aspx" target="_blank" rel="noreferrer">C# Enum</a></li></ul><h1 id="类" tabindex="-1">类 <a class="header-anchor" href="#类" aria-label="Permalink to &quot;类&quot;">​</a></h1><p>传统方法中，JavaScript 通过构造函数实现类的概念，通过原型链实现继承。而在 ES6 中，我们终于迎来了 <code>class</code>。</p><p>TypeScript 除了实现了所有 ES6 中的类的功能以外，还添加了一些新的用法。</p><p>这一节主要介绍类的用法，下一节再介绍如何定义类的类型。</p><h2 id="类的概念§" tabindex="-1">类的概念<a href="http://ts.xcatliu.com/advanced/class.html#%E7%B1%BB%E7%9A%84%E6%A6%82%E5%BF%B5" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#类的概念§" aria-label="Permalink to &quot;类的概念[§](http://ts.xcatliu.com/advanced/class.html#类的概念)&quot;">​</a></h2><p>虽然 JavaScript 中有类的概念，但是可能大多数 JavaScript 程序员并不是非常熟悉类，这里对类相关的概念做一个简单的介绍。</p><ul><li>类（Class）：定义了一件事物的抽象特点，包含它的属性和方法</li><li>对象（Object）：类的实例，通过 <code>new</code> 生成</li><li>面向对象（OOP）的三大特性：封装、继承、多态</li><li>封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据</li><li>继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性</li><li>多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 <code>Cat</code> 和 <code>Dog</code> 都继承自 <code>Animal</code>，但是分别实现了自己的 <code>eat</code> 方法。此时针对某一个实例，我们无需了解它是 <code>Cat</code> 还是 <code>Dog</code>，就可以直接调用 <code>eat</code> 方法，程序会自动判断出来应该如何执行 <code>eat</code></li><li>存取器（getter &amp; setter）：用以改变属性的读取和赋值行为</li><li>修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 <code>public</code> 表示公有属性或方法</li><li>抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现</li><li>接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口</li></ul><h2 id="es6-中类的用法§" tabindex="-1">ES6 中类的用法<a href="http://ts.xcatliu.com/advanced/class.html#es6-%E4%B8%AD%E7%B1%BB%E7%9A%84%E7%94%A8%E6%B3%95" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#es6-中类的用法§" aria-label="Permalink to &quot;ES6 中类的用法[§](http://ts.xcatliu.com/advanced/class.html#es6-中类的用法)&quot;">​</a></h2><p>下面我们先回顾一下 ES6 中类的用法，更详细的介绍可以参考 <a href="http://es6.ruanyifeng.com/#docs/class" target="_blank" rel="noreferrer">ECMAScript 6 入门 - Class</a>。</p><h3 id="属性和方法§" tabindex="-1">属性和方法<a href="http://ts.xcatliu.com/advanced/class.html#%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#属性和方法§" aria-label="Permalink to &quot;属性和方法[§](http://ts.xcatliu.com/advanced/class.html#属性和方法)&quot;">​</a></h3><p>使用 <code>class</code> 定义类，使用 <code>constructor</code> 定义构造函数。</p><p>通过 <code>new</code> 生成新实例的时候，会自动调用构造函数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Animal {</span></span>
<span class="line"><span>    public name;</span></span>
<span class="line"><span>    constructor(name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    sayHi() {</span></span>
<span class="line"><span>        return \`My name is \${this.name}\`;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let a = new Animal(&#39;Jack&#39;);</span></span>
<span class="line"><span>console.log(a.sayHi()); // My name is Jack</span></span></code></pre></div><h3 id="类的继承§" tabindex="-1">类的继承<a href="http://ts.xcatliu.com/advanced/class.html#%E7%B1%BB%E7%9A%84%E7%BB%A7%E6%89%BF" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#类的继承§" aria-label="Permalink to &quot;类的继承[§](http://ts.xcatliu.com/advanced/class.html#类的继承)&quot;">​</a></h3><p>使用 <code>extends</code> 关键字实现继承，子类中使用 <code>super</code> 关键字来调用父类的构造函数和方法。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Cat extends Animal {</span></span>
<span class="line"><span>  constructor(name) {</span></span>
<span class="line"><span>    super(name); // 调用父类的 constructor(name)</span></span>
<span class="line"><span>    console.log(this.name);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  sayHi() {</span></span>
<span class="line"><span>    return &#39;Meow, &#39; + super.sayHi(); // 调用父类的 sayHi()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let c = new Cat(&#39;Tom&#39;); // Tom</span></span>
<span class="line"><span>console.log(c.sayHi()); // Meow, My name is Tom</span></span></code></pre></div><h3 id="存取器§" tabindex="-1">存取器<a href="http://ts.xcatliu.com/advanced/class.html#%E5%AD%98%E5%8F%96%E5%99%A8" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#存取器§" aria-label="Permalink to &quot;存取器[§](http://ts.xcatliu.com/advanced/class.html#存取器)&quot;">​</a></h3><p>使用 getter 和 setter 可以改变属性的赋值和读取行为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Animal {</span></span>
<span class="line"><span>  constructor(name) {</span></span>
<span class="line"><span>    this.name = name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  get name() {</span></span>
<span class="line"><span>    return &#39;Jack&#39;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  set name(value) {</span></span>
<span class="line"><span>    console.log(&#39;setter: &#39; + value);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let a = new Animal(&#39;Kitty&#39;); // setter: Kitty</span></span>
<span class="line"><span>a.name = &#39;Tom&#39;; // setter: Tom</span></span>
<span class="line"><span>console.log(a.name); // Jack</span></span></code></pre></div><h3 id="静态方法§" tabindex="-1">静态方法<a href="http://ts.xcatliu.com/advanced/class.html#%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#静态方法§" aria-label="Permalink to &quot;静态方法[§](http://ts.xcatliu.com/advanced/class.html#静态方法)&quot;">​</a></h3><p>使用 <code>static</code> 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Animal {</span></span>
<span class="line"><span>  static isAnimal(a) {</span></span>
<span class="line"><span>    return a instanceof Animal;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let a = new Animal(&#39;Jack&#39;);</span></span>
<span class="line"><span>Animal.isAnimal(a); // true</span></span>
<span class="line"><span>a.isAnimal(a); // TypeError: a.isAnimal is not a function</span></span></code></pre></div><h2 id="es7-中类的用法§" tabindex="-1">ES7 中类的用法<a href="http://ts.xcatliu.com/advanced/class.html#es7-%E4%B8%AD%E7%B1%BB%E7%9A%84%E7%94%A8%E6%B3%95" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#es7-中类的用法§" aria-label="Permalink to &quot;ES7 中类的用法[§](http://ts.xcatliu.com/advanced/class.html#es7-中类的用法)&quot;">​</a></h2><p>ES7 中有一些关于类的提案，TypeScript 也实现了它们，这里做一个简单的介绍。</p><h3 id="实例属性§" tabindex="-1">实例属性<a href="http://ts.xcatliu.com/advanced/class.html#%E5%AE%9E%E4%BE%8B%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#实例属性§" aria-label="Permalink to &quot;实例属性[§](http://ts.xcatliu.com/advanced/class.html#实例属性)&quot;">​</a></h3><p>ES6 中实例的属性只能通过构造函数中的 <code>this.xxx</code> 来定义，ES7 提案中可以直接在类里面定义：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Animal {</span></span>
<span class="line"><span>  name = &#39;Jack&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  constructor() {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let a = new Animal();</span></span>
<span class="line"><span>console.log(a.name); // Jack</span></span></code></pre></div><h3 id="静态属性§" tabindex="-1">静态属性<a href="http://ts.xcatliu.com/advanced/class.html#%E9%9D%99%E6%80%81%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#静态属性§" aria-label="Permalink to &quot;静态属性[§](http://ts.xcatliu.com/advanced/class.html#静态属性)&quot;">​</a></h3><p>ES7 提案中，可以使用 <code>static</code> 定义一个静态属性：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Animal {</span></span>
<span class="line"><span>  static num = 42;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  constructor() {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(Animal.num); // 42</span></span></code></pre></div><h2 id="typescript-中类的用法§" tabindex="-1">TypeScript 中类的用法<a href="http://ts.xcatliu.com/advanced/class.html#typescript-%E4%B8%AD%E7%B1%BB%E7%9A%84%E7%94%A8%E6%B3%95" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#typescript-中类的用法§" aria-label="Permalink to &quot;TypeScript 中类的用法[§](http://ts.xcatliu.com/advanced/class.html#typescript-中类的用法)&quot;">​</a></h2><h3 id="public-private-和-protected§" tabindex="-1">public private 和 protected<a href="http://ts.xcatliu.com/advanced/class.html#public-private-%E5%92%8C-protected" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#public-private-和-protected§" aria-label="Permalink to &quot;public private 和 protected[§](http://ts.xcatliu.com/advanced/class.html#public-private-和-protected)&quot;">​</a></h3><p>TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 <code>public</code>、<code>private</code> 和 <code>protected</code>。</p><ul><li><code>public</code> 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 <code>public</code> 的</li><li><code>private</code> 修饰的属性或方法是私有的，不能在声明它的类的外部访问</li><li><code>protected</code> 修饰的属性或方法是受保护的，它和 <code>private</code> 类似，区别是它在子类中也是允许被访问的</li></ul><p>下面举一些例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Animal {</span></span>
<span class="line"><span>  public name;</span></span>
<span class="line"><span>  public constructor(name) {</span></span>
<span class="line"><span>    this.name = name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let a = new Animal(&#39;Jack&#39;);</span></span>
<span class="line"><span>console.log(a.name); // Jack</span></span>
<span class="line"><span>a.name = &#39;Tom&#39;;</span></span>
<span class="line"><span>console.log(a.name); // Tom</span></span></code></pre></div><p>上面的例子中，<code>name</code> 被设置为了 <code>public</code>，所以直接访问实例的 <code>name</code> 属性是允许的。</p><p>很多时候，我们希望有的属性是无法直接存取的，这时候就可以用 <code>private</code> 了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Animal {</span></span>
<span class="line"><span>  private name;</span></span>
<span class="line"><span>  public constructor(name) {</span></span>
<span class="line"><span>    this.name = name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let a = new Animal(&#39;Jack&#39;);</span></span>
<span class="line"><span>console.log(a.name);</span></span>
<span class="line"><span>a.name = &#39;Tom&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(9,13): error TS2341: Property &#39;name&#39; is private and only accessible within class &#39;Animal&#39;.</span></span>
<span class="line"><span>// index.ts(10,1): error TS2341: Property &#39;name&#39; is private and only accessible within class &#39;Animal&#39;.</span></span></code></pre></div><p>需要注意的是，TypeScript 编译之后的代码中，并没有限制 <code>private</code> 属性在外部的可访问性。</p><p>上面的例子编译后的代码是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var Animal = (function () {</span></span>
<span class="line"><span>  function Animal(name) {</span></span>
<span class="line"><span>    this.name = name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return Animal;</span></span>
<span class="line"><span>})();</span></span>
<span class="line"><span>var a = new Animal(&#39;Jack&#39;);</span></span>
<span class="line"><span>console.log(a.name);</span></span>
<span class="line"><span>a.name = &#39;Tom&#39;;</span></span></code></pre></div><p>使用 <code>private</code> 修饰的属性或方法，在子类中也是不允许访问的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Animal {</span></span>
<span class="line"><span>  private name;</span></span>
<span class="line"><span>  public constructor(name) {</span></span>
<span class="line"><span>    this.name = name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Cat extends Animal {</span></span>
<span class="line"><span>  constructor(name) {</span></span>
<span class="line"><span>    super(name);</span></span>
<span class="line"><span>    console.log(this.name);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(11,17): error TS2341: Property &#39;name&#39; is private and only accessible within class &#39;Animal&#39;.</span></span></code></pre></div><p>而如果是用 <code>protected</code> 修饰，则允许在子类中访问：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Animal {</span></span>
<span class="line"><span>  protected name;</span></span>
<span class="line"><span>  public constructor(name) {</span></span>
<span class="line"><span>    this.name = name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Cat extends Animal {</span></span>
<span class="line"><span>  constructor(name) {</span></span>
<span class="line"><span>    super(name);</span></span>
<span class="line"><span>    console.log(this.name);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>当构造函数修饰为 <code>private</code> 时，该类不允许被继承或者实例化：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Animal {</span></span>
<span class="line"><span>  public name;</span></span>
<span class="line"><span>  private constructor(name) {</span></span>
<span class="line"><span>    this.name = name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class Cat extends Animal {</span></span>
<span class="line"><span>  constructor(name) {</span></span>
<span class="line"><span>    super(name);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let a = new Animal(&#39;Jack&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(7,19): TS2675: Cannot extend a class &#39;Animal&#39;. Class constructor is marked as private.</span></span>
<span class="line"><span>// index.ts(13,9): TS2673: Constructor of class &#39;Animal&#39; is private and only accessible within the class declaration.</span></span></code></pre></div><p>当构造函数修饰为 <code>protected</code> 时，该类只允许被继承：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Animal {</span></span>
<span class="line"><span>  public name;</span></span>
<span class="line"><span>  protected constructor(name) {</span></span>
<span class="line"><span>    this.name = name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class Cat extends Animal {</span></span>
<span class="line"><span>  constructor(name) {</span></span>
<span class="line"><span>    super(name);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let a = new Animal(&#39;Jack&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(13,9): TS2674: Constructor of class &#39;Animal&#39; is protected and only accessible within the class declaration.</span></span></code></pre></div><h3 id="参数属性§" tabindex="-1">参数属性<a href="http://ts.xcatliu.com/advanced/class.html#%E5%8F%82%E6%95%B0%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#参数属性§" aria-label="Permalink to &quot;参数属性[§](http://ts.xcatliu.com/advanced/class.html#参数属性)&quot;">​</a></h3><p>修饰符和<code>readonly</code>还可以使用在构造函数参数中，等同于类中定义该属性同时给该属性赋值，使代码更简洁。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Animal {</span></span>
<span class="line"><span>  // public name: string;</span></span>
<span class="line"><span>  public constructor(public name) {</span></span>
<span class="line"><span>    // this.name = name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="readonly§" tabindex="-1">readonly<a href="http://ts.xcatliu.com/advanced/class.html#readonly" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#readonly§" aria-label="Permalink to &quot;readonly[§](http://ts.xcatliu.com/advanced/class.html#readonly)&quot;">​</a></h3><p>只读属性关键字，只允许出现在属性声明或索引签名或构造函数中。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Animal {</span></span>
<span class="line"><span>  readonly name;</span></span>
<span class="line"><span>  public constructor(name) {</span></span>
<span class="line"><span>    this.name = name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let a = new Animal(&#39;Jack&#39;);</span></span>
<span class="line"><span>console.log(a.name); // Jack</span></span>
<span class="line"><span>a.name = &#39;Tom&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(10,3): TS2540: Cannot assign to &#39;name&#39; because it is a read-only property.</span></span></code></pre></div><p>注意如果 <code>readonly</code> 和其他访问修饰符同时存在的话，需要写在其后面。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Animal {</span></span>
<span class="line"><span>  // public readonly name;</span></span>
<span class="line"><span>  public constructor(public readonly name) {</span></span>
<span class="line"><span>    // this.name = name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="抽象类§" tabindex="-1">抽象类<a href="http://ts.xcatliu.com/advanced/class.html#%E6%8A%BD%E8%B1%A1%E7%B1%BB" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#抽象类§" aria-label="Permalink to &quot;抽象类[§](http://ts.xcatliu.com/advanced/class.html#抽象类)&quot;">​</a></h3><p><code>abstract</code> 用于定义抽象类和其中的抽象方法。</p><p>什么是抽象类？</p><p>首先，抽象类是不允许被实例化的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>abstract class Animal {</span></span>
<span class="line"><span>  public name;</span></span>
<span class="line"><span>  public constructor(name) {</span></span>
<span class="line"><span>    this.name = name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  public abstract sayHi();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let a = new Animal(&#39;Jack&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(9,11): error TS2511: Cannot create an instance of the abstract class &#39;Animal&#39;.</span></span></code></pre></div><p>上面的例子中，我们定义了一个抽象类 <code>Animal</code>，并且定义了一个抽象方法 <code>sayHi</code>。在实例化抽象类的时候报错了。</p><p>其次，抽象类中的抽象方法必须被子类实现：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>abstract class Animal {</span></span>
<span class="line"><span>  public name;</span></span>
<span class="line"><span>  public constructor(name) {</span></span>
<span class="line"><span>    this.name = name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  public abstract sayHi();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Cat extends Animal {</span></span>
<span class="line"><span>  public eat() {</span></span>
<span class="line"><span>    console.log(\`\${this.name} is eating.\`);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let cat = new Cat(&#39;Tom&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(9,7): error TS2515: Non-abstract class &#39;Cat&#39; does not implement inherited abstract member &#39;sayHi&#39; from class &#39;Animal&#39;.</span></span></code></pre></div><p>上面的例子中，我们定义了一个类 <code>Cat</code> 继承了抽象类 <code>Animal</code>，但是没有实现抽象方法 <code>sayHi</code>，所以编译报错了。</p><p>下面是一个正确使用抽象类的例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>abstract class Animal {</span></span>
<span class="line"><span>  public name;</span></span>
<span class="line"><span>  public constructor(name) {</span></span>
<span class="line"><span>    this.name = name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  public abstract sayHi();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Cat extends Animal {</span></span>
<span class="line"><span>  public sayHi() {</span></span>
<span class="line"><span>    console.log(\`Meow, My name is \${this.name}\`);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let cat = new Cat(&#39;Tom&#39;);</span></span></code></pre></div><p>上面的例子中，我们实现了抽象方法 <code>sayHi</code>，编译通过了。</p><p>需要注意的是，即使是抽象方法，TypeScript 的编译结果中，仍然会存在这个类，上面的代码的编译结果是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var __extends =</span></span>
<span class="line"><span>  (this &amp;&amp; this.__extends) ||</span></span>
<span class="line"><span>  function (d, b) {</span></span>
<span class="line"><span>    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];</span></span>
<span class="line"><span>    function __() {</span></span>
<span class="line"><span>      this.constructor = d;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>var Animal = (function () {</span></span>
<span class="line"><span>  function Animal(name) {</span></span>
<span class="line"><span>    this.name = name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return Animal;</span></span>
<span class="line"><span>})();</span></span>
<span class="line"><span>var Cat = (function (_super) {</span></span>
<span class="line"><span>  __extends(Cat, _super);</span></span>
<span class="line"><span>  function Cat() {</span></span>
<span class="line"><span>    _super.apply(this, arguments);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  Cat.prototype.sayHi = function () {</span></span>
<span class="line"><span>    console.log(&#39;Meow, My name is &#39; + this.name);</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>  return Cat;</span></span>
<span class="line"><span>})(Animal);</span></span>
<span class="line"><span>var cat = new Cat(&#39;Tom&#39;);</span></span></code></pre></div><h2 id="类的类型§" tabindex="-1">类的类型<a href="http://ts.xcatliu.com/advanced/class.html#%E7%B1%BB%E7%9A%84%E7%B1%BB%E5%9E%8B" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#类的类型§" aria-label="Permalink to &quot;类的类型[§](http://ts.xcatliu.com/advanced/class.html#类的类型)&quot;">​</a></h2><p>给类加上 TypeScript 的类型很简单，与接口类似：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Animal {</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span>  constructor(name: string) {</span></span>
<span class="line"><span>    this.name = name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  sayHi(): string {</span></span>
<span class="line"><span>    return \`My name is \${this.name}\`;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let a: Animal = new Animal(&#39;Jack&#39;);</span></span>
<span class="line"><span>console.log(a.sayHi()); // My name is Jack</span></span></code></pre></div><h2 id="参考§-14" tabindex="-1">参考<a href="http://ts.xcatliu.com/advanced/class.html#%E5%8F%82%E8%80%83" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#参考§-14" aria-label="Permalink to &quot;参考[§](http://ts.xcatliu.com/advanced/class.html#参考)&quot;">​</a></h2><ul><li><a href="http://www.typescriptlang.org/docs/handbook/classes.html" target="_blank" rel="noreferrer">Classes</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Classes.html" target="_blank" rel="noreferrer">中文版</a>）</li><li><a href="http://es6.ruanyifeng.com/#docs/class" target="_blank" rel="noreferrer">ECMAScript 6 入门 - Class</a></li></ul><h1 id="类与接口" tabindex="-1">类与接口 <a class="header-anchor" href="#类与接口" aria-label="Permalink to &quot;类与接口&quot;">​</a></h1><p><a href="http://ts.xcatliu.com/basics/type-of-object-interfaces.html" target="_blank" rel="noreferrer">之前学习过</a>，接口（Interfaces）可以用于对「对象的形状（Shape）」进行描述。</p><p>这一章主要介绍接口的另一个用途，对类的一部分行为进行抽象。</p><h2 id="类实现接口§" tabindex="-1">类实现接口<a href="http://ts.xcatliu.com/advanced/class-and-interfaces.html#%E7%B1%BB%E5%AE%9E%E7%8E%B0%E6%8E%A5%E5%8F%A3" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#类实现接口§" aria-label="Permalink to &quot;类实现接口[§](http://ts.xcatliu.com/advanced/class-and-interfaces.html#类实现接口)&quot;">​</a></h2><p>实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 <code>implements</code> 关键字来实现。这个特性大大提高了面向对象的灵活性。</p><p>举例来说，门是一个类，防盗门是门的子类。如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。这时候如果有另一个类，车，也有报警器的功能，就可以考虑把报警器提取出来，作为一个接口，防盗门和车都去实现它：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Alarm {</span></span>
<span class="line"><span>    alert(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Door {</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class SecurityDoor extends Door implements Alarm {</span></span>
<span class="line"><span>    alert() {</span></span>
<span class="line"><span>        console.log(&#39;SecurityDoor alert&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Car implements Alarm {</span></span>
<span class="line"><span>    alert() {</span></span>
<span class="line"><span>        console.log(&#39;Car alert&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>一个类可以实现多个接口：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Alarm {</span></span>
<span class="line"><span>    alert(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface Light {</span></span>
<span class="line"><span>    lightOn(): void;</span></span>
<span class="line"><span>    lightOff(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Car implements Alarm, Light {</span></span>
<span class="line"><span>    alert() {</span></span>
<span class="line"><span>        console.log(&#39;Car alert&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    lightOn() {</span></span>
<span class="line"><span>        console.log(&#39;Car light on&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    lightOff() {</span></span>
<span class="line"><span>        console.log(&#39;Car light off&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上例中，<code>Car</code> 实现了 <code>Alarm</code> 和 <code>Light</code> 接口，既能报警，也能开关车灯。</p><h2 id="接口继承接口§" tabindex="-1">接口继承接口<a href="http://ts.xcatliu.com/advanced/class-and-interfaces.html#%E6%8E%A5%E5%8F%A3%E7%BB%A7%E6%89%BF%E6%8E%A5%E5%8F%A3" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#接口继承接口§" aria-label="Permalink to &quot;接口继承接口[§](http://ts.xcatliu.com/advanced/class-and-interfaces.html#接口继承接口)&quot;">​</a></h2><p>接口与接口之间可以是继承关系：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Alarm {</span></span>
<span class="line"><span>    alert(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface LightableAlarm extends Alarm {</span></span>
<span class="line"><span>    lightOn(): void;</span></span>
<span class="line"><span>    lightOff(): void;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这很好理解，<code>LightableAlarm</code> 继承了 <code>Alarm</code>，除了拥有 <code>alert</code> 方法之外，还拥有两个新方法 <code>lightOn</code> 和 <code>lightOff</code>。</p><h2 id="接口继承类§" tabindex="-1">接口继承类<a href="http://ts.xcatliu.com/advanced/class-and-interfaces.html#%E6%8E%A5%E5%8F%A3%E7%BB%A7%E6%89%BF%E7%B1%BB" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#接口继承类§" aria-label="Permalink to &quot;接口继承类[§](http://ts.xcatliu.com/advanced/class-and-interfaces.html#接口继承类)&quot;">​</a></h2><p>常见的面向对象语言中，接口是不能继承类的，但是在 TypeScript 中却是可以的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Point {</span></span>
<span class="line"><span>    x: number;</span></span>
<span class="line"><span>    y: number;</span></span>
<span class="line"><span>    constructor(x: number, y: number) {</span></span>
<span class="line"><span>        this.x = x;</span></span>
<span class="line"><span>        this.y = y;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface Point3d extends Point {</span></span>
<span class="line"><span>    z: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let point3d: Point3d = {x: 1, y: 2, z: 3};</span></span></code></pre></div><p>为什么 TypeScript 会支持接口继承类呢？</p><p>实际上，当我们在声明 <code>class Point</code> 时，除了会创建一个名为 <code>Point</code> 的类之外，同时也创建了一个名为 <code>Point</code> 的类型（实例的类型）。</p><p>所以我们既可以将 <code>Point</code> 当做一个类来用（使用 <code>new Point</code> 创建它的实例）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Point {</span></span>
<span class="line"><span>    x: number;</span></span>
<span class="line"><span>    y: number;</span></span>
<span class="line"><span>    constructor(x: number, y: number) {</span></span>
<span class="line"><span>        this.x = x;</span></span>
<span class="line"><span>        this.y = y;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const p = new Point(1, 2);</span></span></code></pre></div><p>也可以将 <code>Point</code> 当做一个类型来用（使用 <code>: Point</code> 表示参数的类型）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Point {</span></span>
<span class="line"><span>    x: number;</span></span>
<span class="line"><span>    y: number;</span></span>
<span class="line"><span>    constructor(x: number, y: number) {</span></span>
<span class="line"><span>        this.x = x;</span></span>
<span class="line"><span>        this.y = y;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function printPoint(p: Point) {</span></span>
<span class="line"><span>    console.log(p.x, p.y);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printPoint(new Point(1, 2));</span></span></code></pre></div><p>这个例子实际上可以等价于：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Point {</span></span>
<span class="line"><span>    x: number;</span></span>
<span class="line"><span>    y: number;</span></span>
<span class="line"><span>    constructor(x: number, y: number) {</span></span>
<span class="line"><span>        this.x = x;</span></span>
<span class="line"><span>        this.y = y;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface PointInstanceType {</span></span>
<span class="line"><span>    x: number;</span></span>
<span class="line"><span>    y: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function printPoint(p: PointInstanceType) {</span></span>
<span class="line"><span>    console.log(p.x, p.y);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printPoint(new Point(1, 2));</span></span></code></pre></div><p>上例中我们新声明的 <code>PointInstanceType</code> 类型，与声明 <code>class Point</code> 时创建的 <code>Point</code> 类型是等价的。</p><p>所以回到 <code>Point3d</code> 的例子中，我们就能很容易的理解为什么 TypeScript 会支持接口继承类了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Point {</span></span>
<span class="line"><span>    x: number;</span></span>
<span class="line"><span>    y: number;</span></span>
<span class="line"><span>    constructor(x: number, y: number) {</span></span>
<span class="line"><span>        this.x = x;</span></span>
<span class="line"><span>        this.y = y;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface PointInstanceType {</span></span>
<span class="line"><span>    x: number;</span></span>
<span class="line"><span>    y: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 等价于 interface Point3d extends PointInstanceType</span></span>
<span class="line"><span>interface Point3d extends Point {</span></span>
<span class="line"><span>    z: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let point3d: Point3d = {x: 1, y: 2, z: 3};</span></span></code></pre></div><p>当我们声明 <code>interface Point3d extends Point</code> 时，<code>Point3d</code> 继承的实际上是类 <code>Point</code> 的实例的类型。</p><p>换句话说，可以理解为定义了一个接口 <code>Point3d</code> 继承另一个接口 <code>PointInstanceType</code>。</p><p>所以「接口继承类」和「接口继承接口」没有什么本质的区别。</p><p>值得注意的是，<code>PointInstanceType</code> 相比于 <code>Point</code>，缺少了 <code>constructor</code> 方法，这是因为声明 <code>Point</code> 类时创建的 <code>Point</code> 类型是不包含构造函数的。另外，除了构造函数是不包含的，静态属性或静态方法也是不包含的（实例的类型当然不应该包括构造函数、静态属性或静态方法）。</p><p>换句话说，声明 <code>Point</code> 类时创建的 <code>Point</code> 类型只包含其中的实例属性和实例方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Point {</span></span>
<span class="line"><span>    /** 静态属性，坐标系原点 */</span></span>
<span class="line"><span>    static origin = new Point(0, 0);</span></span>
<span class="line"><span>    /** 静态方法，计算与原点距离 */</span></span>
<span class="line"><span>    static distanceToOrigin(p: Point) {</span></span>
<span class="line"><span>        return Math.sqrt(p.x * p.x + p.y * p.y);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    /** 实例属性，x 轴的值 */</span></span>
<span class="line"><span>    x: number;</span></span>
<span class="line"><span>    /** 实例属性，y 轴的值 */</span></span>
<span class="line"><span>    y: number;</span></span>
<span class="line"><span>    /** 构造函数 */</span></span>
<span class="line"><span>    constructor(x: number, y: number) {</span></span>
<span class="line"><span>        this.x = x;</span></span>
<span class="line"><span>        this.y = y;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    /** 实例方法，打印此点 */</span></span>
<span class="line"><span>    printPoint() {</span></span>
<span class="line"><span>        console.log(this.x, this.y);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface PointInstanceType {</span></span>
<span class="line"><span>    x: number;</span></span>
<span class="line"><span>    y: number;</span></span>
<span class="line"><span>    printPoint(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let p1: Point;</span></span>
<span class="line"><span>let p2: PointInstanceType;</span></span></code></pre></div><p>上例中最后的类型 <code>Point</code> 和类型 <code>PointInstanceType</code> 是等价的。</p><p>同样的，在接口继承类的时候，也只会继承它的实例属性和实例方法。</p><h2 id="参考§-15" tabindex="-1">参考<a href="http://ts.xcatliu.com/advanced/class-and-interfaces.html#%E5%8F%82%E8%80%83" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#参考§-15" aria-label="Permalink to &quot;参考[§](http://ts.xcatliu.com/advanced/class-and-interfaces.html#参考)&quot;">​</a></h2><ul><li><a href="http://www.typescriptlang.org/docs/handbook/interfaces.html" target="_blank" rel="noreferrer">Interfaces</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html" target="_blank" rel="noreferrer">中文版</a>）</li></ul><h1 id="泛型" tabindex="-1">泛型 <a class="header-anchor" href="#泛型" aria-label="Permalink to &quot;泛型&quot;">​</a></h1><p>泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。</p><h2 id="简单的例子§-6" tabindex="-1">简单的例子<a href="http://ts.xcatliu.com/advanced/generics.html#%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#简单的例子§-6" aria-label="Permalink to &quot;简单的例子[§](http://ts.xcatliu.com/advanced/generics.html#简单的例子)&quot;">​</a></h2><p>首先，我们来实现一个函数 <code>createArray</code>，它可以创建一个指定长度的数组，同时将每一项都填充一个默认值：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function createArray(length: number, value: any): Array&lt;any&gt; {</span></span>
<span class="line"><span>    let result = [];</span></span>
<span class="line"><span>    for (let i = 0; i &lt; length; i++) {</span></span>
<span class="line"><span>        result[i] = value;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return result;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>createArray(3, &#39;x&#39;); // [&#39;x&#39;, &#39;x&#39;, &#39;x&#39;]</span></span></code></pre></div><p>上例中，我们使用了<a href="http://ts.xcatliu.com/basics/type-of-array.html#%E6%95%B0%E7%BB%84%E6%B3%9B%E5%9E%8B" target="_blank" rel="noreferrer">之前提到过的数组泛型</a>来定义返回值的类型。</p><p>这段代码编译不会报错，但是一个显而易见的缺陷是，它并没有准确的定义返回值的类型：</p><p><code>Array&lt;any&gt;</code> 允许数组的每一项都为任意类型。但是我们预期的是，数组中每一项都应该是输入的 <code>value</code> 的类型。</p><p>这时候，泛型就派上用场了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function createArray&lt;T&gt;(length: number, value: T): Array&lt;T&gt; {</span></span>
<span class="line"><span>    let result: T[] = [];</span></span>
<span class="line"><span>    for (let i = 0; i &lt; length; i++) {</span></span>
<span class="line"><span>        result[i] = value;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return result;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>createArray&lt;string&gt;(3, &#39;x&#39;); // [&#39;x&#39;, &#39;x&#39;, &#39;x&#39;]</span></span></code></pre></div><p>上例中，我们在函数名后添加了 <code>&lt;T&gt;</code>，其中 <code>T</code> 用来指代任意输入的类型，在后面的输入 <code>value: T</code> 和输出 <code>Array&lt;T&gt;</code> 中即可使用了。</p><p>接着在调用的时候，可以指定它具体的类型为 <code>string</code>。当然，也可以不手动指定，而让类型推论自动推算出来：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function createArray&lt;T&gt;(length: number, value: T): Array&lt;T&gt; {</span></span>
<span class="line"><span>    let result: T[] = [];</span></span>
<span class="line"><span>    for (let i = 0; i &lt; length; i++) {</span></span>
<span class="line"><span>        result[i] = value;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return result;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>createArray(3, &#39;x&#39;); // [&#39;x&#39;, &#39;x&#39;, &#39;x&#39;]</span></span></code></pre></div><h2 id="多个类型参数§" tabindex="-1">多个类型参数<a href="http://ts.xcatliu.com/advanced/generics.html#%E5%A4%9A%E4%B8%AA%E7%B1%BB%E5%9E%8B%E5%8F%82%E6%95%B0" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#多个类型参数§" aria-label="Permalink to &quot;多个类型参数[§](http://ts.xcatliu.com/advanced/generics.html#多个类型参数)&quot;">​</a></h2><p>定义泛型的时候，可以一次定义多个类型参数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function swap&lt;T, U&gt;(tuple: [T, U]): [U, T] {</span></span>
<span class="line"><span>    return [tuple[1], tuple[0]];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>swap([7, &#39;seven&#39;]); // [&#39;seven&#39;, 7]</span></span></code></pre></div><p>上例中，我们定义了一个 <code>swap</code> 函数，用来交换输入的元组。</p><h2 id="泛型约束§" tabindex="-1">泛型约束<a href="http://ts.xcatliu.com/advanced/generics.html#%E6%B3%9B%E5%9E%8B%E7%BA%A6%E6%9D%9F" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#泛型约束§" aria-label="Permalink to &quot;泛型约束[§](http://ts.xcatliu.com/advanced/generics.html#泛型约束)&quot;">​</a></h2><p>在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function loggingIdentity&lt;T&gt;(arg: T): T {</span></span>
<span class="line"><span>    console.log(arg.length);</span></span>
<span class="line"><span>    return arg;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(2,19): error TS2339: Property &#39;length&#39; does not exist on type &#39;T&#39;.</span></span></code></pre></div><p>上例中，泛型 <code>T</code> 不一定包含属性 <code>length</code>，所以编译的时候报错了。</p><p>这时，我们可以对泛型进行约束，只允许这个函数传入那些包含 <code>length</code> 属性的变量。这就是泛型约束：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Lengthwise {</span></span>
<span class="line"><span>    length: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function loggingIdentity&lt;T extends Lengthwise&gt;(arg: T): T {</span></span>
<span class="line"><span>    console.log(arg.length);</span></span>
<span class="line"><span>    return arg;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上例中，我们使用了 <code>extends</code> 约束了泛型 <code>T</code> 必须符合接口 <code>Lengthwise</code> 的形状，也就是必须包含 <code>length</code> 属性。</p><p>此时如果调用 <code>loggingIdentity</code> 的时候，传入的 <code>arg</code> 不包含 <code>length</code>，那么在编译阶段就会报错了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Lengthwise {</span></span>
<span class="line"><span>    length: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function loggingIdentity&lt;T extends Lengthwise&gt;(arg: T): T {</span></span>
<span class="line"><span>    console.log(arg.length);</span></span>
<span class="line"><span>    return arg;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>loggingIdentity(7);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(10,17): error TS2345: Argument of type &#39;7&#39; is not assignable to parameter of type &#39;Lengthwise&#39;.</span></span></code></pre></div><p>多个类型参数之间也可以互相约束：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function copyFields&lt;T extends U, U&gt;(target: T, source: U): T {</span></span>
<span class="line"><span>    for (let id in source) {</span></span>
<span class="line"><span>        target[id] = (&lt;T&gt;source)[id];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return target;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let x = { a: 1, b: 2, c: 3, d: 4 };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>copyFields(x, { b: 10, d: 20 });</span></span></code></pre></div><p>上例中，我们使用了两个类型参数，其中要求 <code>T</code> 继承 <code>U</code>，这样就保证了 <code>U</code> 上不会出现 <code>T</code> 中不存在的字段。</p><h2 id="泛型接口§" tabindex="-1">泛型接口<a href="http://ts.xcatliu.com/advanced/generics.html#%E6%B3%9B%E5%9E%8B%E6%8E%A5%E5%8F%A3" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#泛型接口§" aria-label="Permalink to &quot;泛型接口[§](http://ts.xcatliu.com/advanced/generics.html#泛型接口)&quot;">​</a></h2><p><a href="http://ts.xcatliu.com/basics/type-of-function.html#%E6%8E%A5%E5%8F%A3%E4%B8%AD%E5%87%BD%E6%95%B0%E7%9A%84%E5%AE%9A%E4%B9%89" target="_blank" rel="noreferrer">之前学习过</a>，可以使用接口的方式来定义一个函数需要符合的形状：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface SearchFunc {</span></span>
<span class="line"><span>  (source: string, subString: string): boolean;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let mySearch: SearchFunc;</span></span>
<span class="line"><span>mySearch = function(source: string, subString: string) {</span></span>
<span class="line"><span>    return source.search(subString) !== -1;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>当然也可以使用含有泛型的接口来定义函数的形状：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface CreateArrayFunc {</span></span>
<span class="line"><span>    &lt;T&gt;(length: number, value: T): Array&lt;T&gt;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let createArray: CreateArrayFunc;</span></span>
<span class="line"><span>createArray = function&lt;T&gt;(length: number, value: T): Array&lt;T&gt; {</span></span>
<span class="line"><span>    let result: T[] = [];</span></span>
<span class="line"><span>    for (let i = 0; i &lt; length; i++) {</span></span>
<span class="line"><span>        result[i] = value;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return result;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>createArray(3, &#39;x&#39;); // [&#39;x&#39;, &#39;x&#39;, &#39;x&#39;]</span></span></code></pre></div><p>进一步，我们可以把泛型参数提前到接口名上：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface CreateArrayFunc&lt;T&gt; {</span></span>
<span class="line"><span>    (length: number, value: T): Array&lt;T&gt;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let createArray: CreateArrayFunc&lt;any&gt;;</span></span>
<span class="line"><span>createArray = function&lt;T&gt;(length: number, value: T): Array&lt;T&gt; {</span></span>
<span class="line"><span>    let result: T[] = [];</span></span>
<span class="line"><span>    for (let i = 0; i &lt; length; i++) {</span></span>
<span class="line"><span>        result[i] = value;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return result;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>createArray(3, &#39;x&#39;); // [&#39;x&#39;, &#39;x&#39;, &#39;x&#39;]</span></span></code></pre></div><p>注意，此时在使用泛型接口的时候，需要定义泛型的类型。</p><h2 id="泛型类§" tabindex="-1">泛型类<a href="http://ts.xcatliu.com/advanced/generics.html#%E6%B3%9B%E5%9E%8B%E7%B1%BB" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#泛型类§" aria-label="Permalink to &quot;泛型类[§](http://ts.xcatliu.com/advanced/generics.html#泛型类)&quot;">​</a></h2><p>与泛型接口类似，泛型也可以用于类的类型定义中：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class GenericNumber&lt;T&gt; {</span></span>
<span class="line"><span>    zeroValue: T;</span></span>
<span class="line"><span>    add: (x: T, y: T) =&gt; T;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let myGenericNumber = new GenericNumber&lt;number&gt;();</span></span>
<span class="line"><span>myGenericNumber.zeroValue = 0;</span></span>
<span class="line"><span>myGenericNumber.add = function(x, y) { return x + y; };</span></span></code></pre></div><h2 id="泛型参数的默认类型§" tabindex="-1">泛型参数的默认类型<a href="http://ts.xcatliu.com/advanced/generics.html#%E6%B3%9B%E5%9E%8B%E5%8F%82%E6%95%B0%E7%9A%84%E9%BB%98%E8%AE%A4%E7%B1%BB%E5%9E%8B" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#泛型参数的默认类型§" aria-label="Permalink to &quot;泛型参数的默认类型[§](http://ts.xcatliu.com/advanced/generics.html#泛型参数的默认类型)&quot;">​</a></h2><p>在 TypeScript 2.3 以后，我们可以为泛型中的类型参数指定默认类型。当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function createArray&lt;T = string&gt;(length: number, value: T): Array&lt;T&gt; {</span></span>
<span class="line"><span>    let result: T[] = [];</span></span>
<span class="line"><span>    for (let i = 0; i &lt; length; i++) {</span></span>
<span class="line"><span>        result[i] = value;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return result;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="参考§-16" tabindex="-1">参考<a href="http://ts.xcatliu.com/advanced/generics.html#%E5%8F%82%E8%80%83" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#参考§-16" aria-label="Permalink to &quot;参考[§](http://ts.xcatliu.com/advanced/generics.html#参考)&quot;">​</a></h2><ul><li><a href="http://www.typescriptlang.org/docs/handbook/generics.html" target="_blank" rel="noreferrer">Generics</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/generics.html" target="_blank" rel="noreferrer">中文版</a>）</li><li><a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#generic-parameter-defaults" target="_blank" rel="noreferrer">Generic parameter defaults</a></li></ul><h1 id="声明合并" tabindex="-1">声明合并 <a class="header-anchor" href="#声明合并" aria-label="Permalink to &quot;声明合并&quot;">​</a></h1><p>如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型：</p><h2 id="函数的合并§" tabindex="-1">函数的合并<a href="http://ts.xcatliu.com/advanced/declaration-merging.html#%E5%87%BD%E6%95%B0%E7%9A%84%E5%90%88%E5%B9%B6" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#函数的合并§" aria-label="Permalink to &quot;函数的合并[§](http://ts.xcatliu.com/advanced/declaration-merging.html#函数的合并)&quot;">​</a></h2><p><a href="http://ts.xcatliu.com/basics/type-of-function.html#%E9%87%8D%E8%BD%BD" target="_blank" rel="noreferrer">之前学习过</a>，我们可以使用重载定义多个函数类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function reverse(x: number): number;</span></span>
<span class="line"><span>function reverse(x: string): string;</span></span>
<span class="line"><span>function reverse(x: number | string): number | string {</span></span>
<span class="line"><span>    if (typeof x === &#39;number&#39;) {</span></span>
<span class="line"><span>        return Number(x.toString().split(&#39;&#39;).reverse().join(&#39;&#39;));</span></span>
<span class="line"><span>    } else if (typeof x === &#39;string&#39;) {</span></span>
<span class="line"><span>        return x.split(&#39;&#39;).reverse().join(&#39;&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="接口的合并§" tabindex="-1">接口的合并<a href="http://ts.xcatliu.com/advanced/declaration-merging.html#%E6%8E%A5%E5%8F%A3%E7%9A%84%E5%90%88%E5%B9%B6" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#接口的合并§" aria-label="Permalink to &quot;接口的合并[§](http://ts.xcatliu.com/advanced/declaration-merging.html#接口的合并)&quot;">​</a></h2><p>接口中的属性在合并时会简单的合并到一个接口中：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Alarm {</span></span>
<span class="line"><span>    price: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface Alarm {</span></span>
<span class="line"><span>    weight: number;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>相当于：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Alarm {</span></span>
<span class="line"><span>    price: number;</span></span>
<span class="line"><span>    weight: number;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注意，<strong>合并的属性的类型必须是唯一的</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Alarm {</span></span>
<span class="line"><span>    price: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface Alarm {</span></span>
<span class="line"><span>    price: number;  // 虽然重复了，但是类型都是 \`number\`，所以不会报错</span></span>
<span class="line"><span>    weight: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface Alarm {</span></span>
<span class="line"><span>    price: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface Alarm {</span></span>
<span class="line"><span>    price: string;  // 类型不一致，会报错</span></span>
<span class="line"><span>    weight: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.ts(5,3): error TS2403: Subsequent variable declarations must have the same type.  Variable &#39;price&#39; must be of type &#39;number&#39;, but here has type &#39;string&#39;.</span></span></code></pre></div><p>接口中方法的合并，与函数的合并一样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Alarm {</span></span>
<span class="line"><span>    price: number;</span></span>
<span class="line"><span>    alert(s: string): string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface Alarm {</span></span>
<span class="line"><span>    weight: number;</span></span>
<span class="line"><span>    alert(s: string, n: number): string;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>相当于：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Alarm {</span></span>
<span class="line"><span>    price: number;</span></span>
<span class="line"><span>    weight: number;</span></span>
<span class="line"><span>    alert(s: string): string;</span></span>
<span class="line"><span>    alert(s: string, n: number): string;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="类的合并§" tabindex="-1">类的合并<a href="http://ts.xcatliu.com/advanced/declaration-merging.html#%E7%B1%BB%E7%9A%84%E5%90%88%E5%B9%B6" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#类的合并§" aria-label="Permalink to &quot;类的合并[§](http://ts.xcatliu.com/advanced/declaration-merging.html#类的合并)&quot;">​</a></h2><p>类的合并与接口的合并规则一致。</p><h2 id="参考§-17" tabindex="-1">参考<a href="http://ts.xcatliu.com/advanced/declaration-merging.html#%E5%8F%82%E8%80%83" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#参考§-17" aria-label="Permalink to &quot;参考[§](http://ts.xcatliu.com/advanced/declaration-merging.html#参考)&quot;">​</a></h2><ul><li><a href="http://www.typescriptlang.org/docs/handbook/declaration-merging.html" target="_blank" rel="noreferrer">Declaration Merging</a>（[中文版](<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Declaration" target="_blank" rel="noreferrer">https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Declaration</a> Merging.html)）</li></ul><h1 id="扩展阅读" tabindex="-1">扩展阅读 <a class="header-anchor" href="#扩展阅读" aria-label="Permalink to &quot;扩展阅读&quot;">​</a></h1><p>此处记录了<a href="http://www.typescriptlang.org/docs/handbook/basic-types.html" target="_blank" rel="noreferrer">官方手册</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/" target="_blank" rel="noreferrer">中文版</a>）中包含，但是本书未涉及的概念。</p><p>我认为它们是一些不重要或者不属于 TypeScript 的概念，所以这里只给出一个简单的释义，详细内容可以点击链接深入理解。</p><ul><li><a href="http://www.typescriptlang.org/docs/handbook/basic-types.html#never" target="_blank" rel="noreferrer">Never</a>（[中文版](<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic" target="_blank" rel="noreferrer">https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic</a> Types.html#never)）：永远不存在值的类型，一般用于错误处理函数</li><li><a href="http://www.typescriptlang.org/docs/handbook/variable-declarations.html" target="_blank" rel="noreferrer">Variable Declarations</a>（[中文版](<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Variable" target="_blank" rel="noreferrer">https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Variable</a> Declarations.html)）：使用 <code>let</code> 和 <code>const</code> 替代 <code>var</code>，这是 <a href="http://es6.ruanyifeng.com/#docs/let" target="_blank" rel="noreferrer">ES6 的知识</a></li><li><a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Functions.html#this" target="_blank" rel="noreferrer"><code>this</code></a>：箭头函数的运用，这是 <a href="http://es6.ruanyifeng.com/#docs/function" target="_blank" rel="noreferrer">ES6 的知识</a></li><li><a href="http://www.typescriptlang.org/docs/handbook/generics.html#using-class-types-in-generics" target="_blank" rel="noreferrer">Using Class Types in Generics</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Generics.html#%E5%9C%A8%E6%B3%9B%E5%9E%8B%E9%87%8C%E4%BD%BF%E7%94%A8%E7%B1%BB%E7%B1%BB%E5%9E%8B" target="_blank" rel="noreferrer">中文版</a>）：创建工厂函数时，需要引用构造函数的类类型</li><li><a href="http://www.typescriptlang.org/docs/handbook/type-inference.html#best-common-type" target="_blank" rel="noreferrer">Best common type</a>（[中文版](<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type" target="_blank" rel="noreferrer">https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type</a> Inference.html#最佳通用类型)）：数组的类型推论</li><li><a href="http://www.typescriptlang.org/docs/handbook/type-inference.html#contextual-type" target="_blank" rel="noreferrer">Contextual Type</a>（[中文版](<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type" target="_blank" rel="noreferrer">https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type</a> Inference.html#上下文类型)）：函数输入的类型推论</li><li><a href="http://www.typescriptlang.org/docs/handbook/type-compatibility.html" target="_blank" rel="noreferrer">Type Compatibility</a>（[中文版](<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type" target="_blank" rel="noreferrer">https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type</a> Compatibility.html)）：允许不严格符合类型，只需要在一定规则下兼容即可</li><li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types" target="_blank" rel="noreferrer">Advanced Types</a>（[中文版](<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced" target="_blank" rel="noreferrer">https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced</a> Types.html#交叉类型（intersection-types）)）：使用 <code>&amp;</code> 将多种类型的共有部分叠加成一种类型</li><li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types" target="_blank" rel="noreferrer">Type Guards and Differentiating Types</a>（[中文版](<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced" target="_blank" rel="noreferrer">https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced</a> Types.html#类型保护与区分类型（type-guards-and-differentiating-types）)）：联合类型在一些情况下被识别为特定的类型</li><li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions" target="_blank" rel="noreferrer">Discriminated Unions</a>（[中文版](<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced" target="_blank" rel="noreferrer">https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced</a> Types.html#可辨识联合（discriminated-unions）)）：使用 <code>|</code> 联合多个接口的时候，通过一个共有的属性形成可辨识联合</li><li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#polymorphic-this-types" target="_blank" rel="noreferrer">Polymorphic <code>this</code> types</a>（[中文版](<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced" target="_blank" rel="noreferrer">https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced</a> Types.html#多态的this类型)）：父类的某个方法返回 <code>this</code>，当子类继承父类后，子类的实例调用此方法，返回的 <code>this</code> 能够被 TypeScript 正确的识别为子类的实例。</li><li><a href="http://www.typescriptlang.org/docs/handbook/symbols.html" target="_blank" rel="noreferrer">Symbols</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Symbols.html" target="_blank" rel="noreferrer">中文版</a>）：新原生类型，这是 <a href="http://es6.ruanyifeng.com/#docs/symbol" target="_blank" rel="noreferrer">ES6 的知识</a></li><li><a href="http://www.typescriptlang.org/docs/handbook/iterators-and-generators.html" target="_blank" rel="noreferrer">Iterators and Generators</a>（[中文版](<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Iterators" target="_blank" rel="noreferrer">https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Iterators</a> and Generators.html)）：迭代器，这是 <a href="http://es6.ruanyifeng.com/#docs/iterator" target="_blank" rel="noreferrer">ES6 的知识</a></li><li><a href="http://www.typescriptlang.org/docs/handbook/namespaces.html" target="_blank" rel="noreferrer">Namespaces</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Namespaces.html" target="_blank" rel="noreferrer">中文版</a>）：避免全局污染，现在已被 <a href="http://es6.ruanyifeng.com/#docs/module" target="_blank" rel="noreferrer">ES6 Module</a> 替代</li><li><a href="http://www.typescriptlang.org/docs/handbook/decorators.html" target="_blank" rel="noreferrer">Decorators</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Decorators.html" target="_blank" rel="noreferrer">中文版</a>）：修饰器，这是 <a href="http://es6.ruanyifeng.com/#docs/decorator" target="_blank" rel="noreferrer">ES7 的一个提案</a></li><li><a href="http://www.typescriptlang.org/docs/handbook/mixins.html" target="_blank" rel="noreferrer">Mixins</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Mixins.html" target="_blank" rel="noreferrer">中文版</a>）：一种编程模式，与 TypeScript 没有直接关系，可以参考 <a href="http://es6.ruanyifeng.com/#docs/class#Mixin%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%AE%9E%E7%8E%B0" target="_blank" rel="noreferrer">ES6 中 Mixin 模式的实现</a></li></ul><h1 id="代码检查" tabindex="-1">代码检查 <a class="header-anchor" href="#代码检查" aria-label="Permalink to &quot;代码检查&quot;">​</a></h1><p>2019 年 1 月，<a href="https://www.oschina.net/news/103818/future-typescript-eslint" target="_blank" rel="noreferrer">TypeScirpt 官方决定全面采用 ESLint</a> 作为代码检查的工具，并创建了一个新项目 <a href="https://github.com/typescript-eslint/typescript-eslint" target="_blank" rel="noreferrer">typescript-eslint</a>，提供了 TypeScript 文件的解析器 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser" target="_blank" rel="noreferrer">@typescript-eslint/parser</a> 和相关的配置选项 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin" target="_blank" rel="noreferrer">@typescript-eslint/eslint-plugin</a> 等。而之前的两个 lint 解决方案都将弃用：</p><ul><li><a href="https://github.com/eslint/typescript-eslint-parser" target="_blank" rel="noreferrer">typescript-eslint-parser</a> 已停止维护</li><li><a href="https://palantir.github.io/tslint/" target="_blank" rel="noreferrer">TSLint</a> 将提供迁移工具，并在 typescript-eslint 的功能足够完整后停止维护 TSLint（Once we consider ESLint feature-complete w.r.t. TSLint, we will deprecate TSLint and help users migrate to ESLint<a href="https://medium.com/palantir/tslint-in-2019-1a144c2317a9" target="_blank" rel="noreferrer">1</a>）</li></ul><p>综上所述，目前以及将来的 TypeScript 的代码检查方案就是 <a href="https://github.com/typescript-eslint/typescript-eslint" target="_blank" rel="noreferrer">typescript-eslint</a>。</p><h2 id="什么是代码检查§" tabindex="-1">什么是代码检查<a href="http://ts.xcatliu.com/engineering/lint.html#%E4%BB%80%E4%B9%88%E6%98%AF%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#什么是代码检查§" aria-label="Permalink to &quot;什么是代码检查[§](http://ts.xcatliu.com/engineering/lint.html#什么是代码检查)&quot;">​</a></h2><p>代码检查主要是用来发现代码错误、统一代码风格。</p><p>在 JavaScript 项目中，我们一般使用 <a href="https://eslint.org/" target="_blank" rel="noreferrer">ESLint</a> 来进行代码检查，它通过插件化的特性极大的丰富了适用范围，搭配 <a href="https://github.com/typescript-eslint/typescript-eslint" target="_blank" rel="noreferrer">typescript-eslint</a> 之后，甚至可以用来检查 TypeScript 代码。</p><h2 id="为什么需要代码检查§" tabindex="-1">为什么需要代码检查<a href="http://ts.xcatliu.com/engineering/lint.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#为什么需要代码检查§" aria-label="Permalink to &quot;为什么需要代码检查[§](http://ts.xcatliu.com/engineering/lint.html#为什么需要代码检查)&quot;">​</a></h2><p>有人会觉得，JavaScript 非常灵活，所以需要代码检查。而 TypeScript 已经能够在编译阶段检查出很多问题了，为什么还需要代码检查呢？</p><p>因为 TypeScript 关注的重心是类型的检查，而不是代码风格。当团队的人员越来越多时，同样的逻辑不同的人写出来可能会有很大的区别：</p><ul><li>缩进应该是四个空格还是两个空格？</li><li>是否应该禁用 <code>var</code>？</li><li>接口名是否应该以 <code>I</code> 开头？</li><li>是否应该强制使用 <code>===</code> 而不是 <code>==</code>？</li></ul><p>这些问题 TypeScript 不会关注，但是却影响到多人协作开发时的效率、代码的可理解性以及可维护性。</p><p>下面来看一个具体的例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var myName = &#39;Tom&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(\`My name is \${myNane}\`);</span></span>
<span class="line"><span>console.log(\`My name is \${myName.toStrng()}\`);</span></span></code></pre></div><p>以上代码你能看出有什么错误吗？</p><p>分别用 tsc 编译和 eslint 检查后，报错信息如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var myName = &#39;Tom&#39;;</span></span>
<span class="line"><span>// eslint 报错信息：</span></span>
<span class="line"><span>// Unexpected var, use let or const instead.eslint(no-var)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(\`My name is \${myNane}\`);</span></span>
<span class="line"><span>// tsc 报错信息：</span></span>
<span class="line"><span>// Cannot find name &#39;myNane&#39;. Did you mean &#39;myName&#39;?</span></span>
<span class="line"><span>// eslint 报错信息：</span></span>
<span class="line"><span>// &#39;myNane&#39; is not defined.eslint(no-undef)</span></span>
<span class="line"><span>console.log(\`My name is \${myName.toStrng()}\`);</span></span>
<span class="line"><span>// tsc 报错信息：</span></span>
<span class="line"><span>// Property &#39;toStrng&#39; does not exist on type &#39;string&#39;. Did you mean &#39;toString&#39;?</span></span></code></pre></div><table><thead><tr><th style="text-align:left;">存在的问题</th><th style="text-align:left;"><code>tsc</code> 是否报错</th><th style="text-align:left;"><code>eslint</code> 是否报错</th></tr></thead><tbody><tr><td style="text-align:left;">应该使用 <code>let</code> 或 <code>const</code> 而不是 <code>var</code></td><td style="text-align:left;">❌</td><td style="text-align:left;">✅</td></tr><tr><td style="text-align:left;"><code>myName</code> 被误写成了 <code>myNane</code></td><td style="text-align:left;">✅</td><td style="text-align:left;">✅</td></tr><tr><td style="text-align:left;"><code>toString</code> 被误写成了 <code>toStrng</code></td><td style="text-align:left;">✅️</td><td style="text-align:left;">❌</td></tr></tbody></table><p>上例中，我们使用了 <code>var</code> 来定义一个变量，但其实 ES6 中有更先进的语法 <code>let</code> 和 <code>const</code>，此时就可以通过 <code>eslint</code> 检查出来，提示我们应该使用 <code>let</code> 或 <code>const</code> 而不是 <code>var</code>。</p><p>对于未定义的变量 <code>myNane</code>，<code>tsc</code> 和 <code>eslint</code> 都可以检查出来。</p><p>由于 <code>eslint</code> 无法识别 <code>myName</code> 存在哪些方法，所以对于拼写错误的 <code>toString</code> 没有检查出来。</p><p>由此可见，<code>eslint</code> 能够发现出一些 <code>tsc</code> 不会关心的错误，检查出一些潜在的问题，所以代码检查还是非常重要的。</p><h2 id="在-typescript-中使用-eslint§" tabindex="-1">在 TypeScript 中使用 ESLint<a href="http://ts.xcatliu.com/engineering/lint.html#%E5%9C%A8-typescript-%E4%B8%AD%E4%BD%BF%E7%94%A8-eslint" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#在-typescript-中使用-eslint§" aria-label="Permalink to &quot;在 TypeScript 中使用 ESLint[§](http://ts.xcatliu.com/engineering/lint.html#在-typescript-中使用-eslint)&quot;">​</a></h2><h3 id="安装-eslint§" tabindex="-1">安装 ESLint<a href="http://ts.xcatliu.com/engineering/lint.html#%E5%AE%89%E8%A3%85-eslint" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#安装-eslint§" aria-label="Permalink to &quot;安装 ESLint[§](http://ts.xcatliu.com/engineering/lint.html#安装-eslint)&quot;">​</a></h3><p>ESLint 可以安装在当前项目中或全局环境下，因为代码检查是项目的重要组成部分，所以我们一般会将它安装在当前项目中。可以运行下面的脚本来安装：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install --save-dev eslint</span></span></code></pre></div><p>由于 ESLint 默认使用 <a href="https://github.com/eslint/espree" target="_blank" rel="noreferrer">Espree</a> 进行语法解析，无法识别 TypeScript 的一些语法，故我们需要安装 <a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser" target="_blank" rel="noreferrer"><code>@typescript-eslint/parser</code></a>，替代掉默认的解析器，别忘了同时安装 <code>typescript</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install --save-dev typescript @typescript-eslint/parser</span></span></code></pre></div><p>接下来需要安装对应的插件 <a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin" target="_blank" rel="noreferrer">@typescript-eslint/eslint-plugin</a> 它作为 eslint 默认规则的补充，提供了一些额外的适用于 ts 语法的规则。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install --save-dev @typescript-eslint/eslint-plugin</span></span></code></pre></div><h3 id="创建配置文件§" tabindex="-1">创建配置文件<a href="http://ts.xcatliu.com/engineering/lint.html#%E5%88%9B%E5%BB%BA%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#创建配置文件§" aria-label="Permalink to &quot;创建配置文件[§](http://ts.xcatliu.com/engineering/lint.html#创建配置文件)&quot;">​</a></h3><p>ESLint 需要一个配置文件来决定对哪些规则进行检查，配置文件的名称一般是 <code>.eslintrc.js</code> 或 <code>.eslintrc.json</code>。</p><p>当运行 ESLint 的时候检查一个文件的时候，它会首先尝试读取该文件的目录下的配置文件，然后再一级一级往上查找，将所找到的配置合并起来，作为当前被检查文件的配置。</p><p>我们在项目的根目录下创建一个 <code>.eslintrc.js</code>，内容如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    parser: &#39;@typescript-eslint/parser&#39;,</span></span>
<span class="line"><span>    plugins: [&#39;@typescript-eslint&#39;],</span></span>
<span class="line"><span>    rules: {</span></span>
<span class="line"><span>        // 禁止使用 var</span></span>
<span class="line"><span>        &#39;no-var&#39;: &quot;error&quot;,</span></span>
<span class="line"><span>        // 优先使用 interface 而不是 type</span></span>
<span class="line"><span>        &#39;@typescript-eslint/consistent-type-definitions&#39;: [</span></span>
<span class="line"><span>            &quot;error&quot;,</span></span>
<span class="line"><span>            &quot;interface&quot;</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>以上配置中，我们指定了两个规则，其中 <code>no-var</code> 是 ESLint 原生的规则，<code>@typescript-eslint/consistent-type-definitions</code> 是 <code>@typescript-eslint/eslint-plugin</code> 新增的规则。</p><p>规则的取值一般是一个数组（上例中的 <code>@typescript-eslint/consistent-type-definitions</code>），其中第一项是 <code>off</code>、<code>warn</code> 或 <code>error</code> 中的一个，表示关闭、警告和报错。后面的项都是该规则的其他配置。</p><p>如果没有其他配置的话，则可以将规则的取值简写为数组中的第一项（上例中的 <code>no-var</code>）。</p><p>关闭、警告和报错的含义如下：</p><ul><li>关闭：禁用此规则</li><li>警告：代码检查时输出错误信息，但是不会影响到 exit code</li><li>报错：发现错误时，不仅会输出错误信息，而且 exit code 将被设为 1（一般 exit code 不为 0 则表示执行出现错误）</li></ul><h3 id="检查一个-ts-文件§" tabindex="-1">检查一个 ts 文件<a href="http://ts.xcatliu.com/engineering/lint.html#%E6%A3%80%E6%9F%A5%E4%B8%80%E4%B8%AA-ts-%E6%96%87%E4%BB%B6" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#检查一个-ts-文件§" aria-label="Permalink to &quot;检查一个 ts 文件[§](http://ts.xcatliu.com/engineering/lint.html#检查一个-ts-文件)&quot;">​</a></h3><p>创建了配置文件之后，我们来创建一个 ts 文件看看是否能用 ESLint 去检查它。</p><p>创建一个新文件 <code>index.ts</code>，将以下内容复制进去：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var myName = &#39;Tom&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Foo = {};</span></span></code></pre></div><p>然后执行以下命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>./node_modules/.bin/eslint index.ts</span></span></code></pre></div><p>则会得到如下报错信息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/path/to/index.ts</span></span>
<span class="line"><span>  1:1  error  Unexpected var, use let or const instead  no-var</span></span>
<span class="line"><span>  3:6  error  Use an \`interface\` instead of a \`type\`    @typescript-eslint/consistent-type-definitions</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✖ 2 problems (2 errors, 0 warnings)</span></span>
<span class="line"><span>  2 errors and 0 warnings potentially fixable with the \`--fix\` option.</span></span></code></pre></div><p>上面的结果显示，刚刚配置的两个规则都生效了：禁止使用 <code>var</code>；优先使用 <code>interface</code> 而不是 <code>type</code>。</p><p>需要注意的是，我们使用的是 <code>./node_modules/.bin/eslint</code>，而不是全局的 <code>eslint</code> 脚本，这是因为代码检查是项目的重要组成部分，所以我们一般会将它安装在当前项目中。</p><p>可是每次执行这么长一段脚本颇有不便，我们可以通过在 <code>package.json</code> 中添加一个 <code>script</code> 来创建一个 npm script 来简化这个步骤：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;scripts&quot;: {</span></span>
<span class="line"><span>        &quot;eslint&quot;: &quot;eslint index.ts&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这时只需执行 <code>npm run eslint</code> 即可。</p><h3 id="检查整个项目的-ts-文件§" tabindex="-1">检查整个项目的 ts 文件<a href="http://ts.xcatliu.com/engineering/lint.html#%E6%A3%80%E6%9F%A5%E6%95%B4%E4%B8%AA%E9%A1%B9%E7%9B%AE%E7%9A%84-ts-%E6%96%87%E4%BB%B6" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#检查整个项目的-ts-文件§" aria-label="Permalink to &quot;检查整个项目的 ts 文件[§](http://ts.xcatliu.com/engineering/lint.html#检查整个项目的-ts-文件)&quot;">​</a></h3><p>我们的项目源文件一般是放在 <code>src</code> 目录下，所以需要将 <code>package.json</code> 中的 <code>eslint</code> 脚本改为对一个目录进行检查。由于 <code>eslint</code> 默认不会检查 <code>.ts</code> 后缀的文件，所以需要加上参数 <code>--ext .ts</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;scripts&quot;: {</span></span>
<span class="line"><span>        &quot;eslint&quot;: &quot;eslint src --ext .ts&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>此时执行 <code>npm run eslint</code> 即会检查 <code>src</code> 目录下的所有 <code>.ts</code> 后缀的文件。</p><h3 id="在-vscode-中集成-eslint-检查§" tabindex="-1">在 VSCode 中集成 ESLint 检查<a href="http://ts.xcatliu.com/engineering/lint.html#%E5%9C%A8-vscode-%E4%B8%AD%E9%9B%86%E6%88%90-eslint-%E6%A3%80%E6%9F%A5" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#在-vscode-中集成-eslint-检查§" aria-label="Permalink to &quot;在 VSCode 中集成 ESLint 检查[§](http://ts.xcatliu.com/engineering/lint.html#在-vscode-中集成-eslint-检查)&quot;">​</a></h3><p>在编辑器中集成 ESLint 检查，可以在开发过程中就发现错误，甚至可以在保存时自动修复错误，极大的增加了开发效率。</p><p>要在 VSCode 中集成 ESLint 检查，我们需要先安装 ESLint 插件，点击「扩展」按钮，搜索 ESLint，然后安装即可。</p><p>VSCode 中的 ESLint 插件默认是不会检查 <code>.ts</code> 后缀的，需要在「文件 =&gt; 首选项 =&gt; 设置 =&gt; 工作区」中（也可以在项目根目录下创建一个配置文件 <code>.vscode/settings.json</code>），添加以下配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;eslint.validate&quot;: [</span></span>
<span class="line"><span>        &quot;javascript&quot;,</span></span>
<span class="line"><span>        &quot;javascriptreact&quot;,</span></span>
<span class="line"><span>        &quot;typescript&quot;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;typescript.tsdk&quot;: &quot;node_modules/typescript/lib&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这时再打开一个 <code>.ts</code> 文件，将鼠标移到红色提示处，即可看到这样的报错信息了：</p><p><img src="http://ts.xcatliu.com/assets/vscode-eslint-error.png" alt="VSCode ESLint 错误信息"></p><p>我们还可以开启保存时自动修复的功能，通过配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;eslint.autoFixOnSave&quot;: true,</span></span>
<span class="line"><span>    &quot;eslint.validate&quot;: [</span></span>
<span class="line"><span>        &quot;javascript&quot;,</span></span>
<span class="line"><span>        &quot;javascriptreact&quot;,</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;language&quot;: &quot;typescript&quot;,</span></span>
<span class="line"><span>            &quot;autoFix&quot;: true</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;typescript.tsdk&quot;: &quot;node_modules/typescript/lib&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>就可以在保存文件后，自动修复为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let myName = &#39;Tom&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface Foo {}</span></span></code></pre></div><h3 id="使用-prettier-修复格式错误§" tabindex="-1">使用 Prettier 修复格式错误<a href="http://ts.xcatliu.com/engineering/lint.html#%E4%BD%BF%E7%94%A8-prettier-%E4%BF%AE%E5%A4%8D%E6%A0%BC%E5%BC%8F%E9%94%99%E8%AF%AF" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#使用-prettier-修复格式错误§" aria-label="Permalink to &quot;使用 Prettier 修复格式错误[§](http://ts.xcatliu.com/engineering/lint.html#使用-prettier-修复格式错误)&quot;">​</a></h3><p>ESLint 包含了一些代码格式的检查，比如空格、分号等。但前端社区中有一个更先进的工具可以用来格式化代码，那就是 <a href="https://prettier.io/" target="_blank" rel="noreferrer">Prettier</a>。</p><p>Prettier 聚焦于代码的格式化，通过语法分析，重新整理代码的格式，让所有人的代码都保持同样的风格。</p><p>首先需要安装 Prettier：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install --save-dev prettier</span></span></code></pre></div><p>然后创建一个 <code>prettier.config.js</code> 文件，里面包含 Prettier 的配置项。Prettier 的配置项很少，这里我推荐大家一个配置规则，作为参考：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// prettier.config.js or .prettierrc.js</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    // 一行最多 100 字符</span></span>
<span class="line"><span>    printWidth: 100,</span></span>
<span class="line"><span>    // 使用 4 个空格缩进</span></span>
<span class="line"><span>    tabWidth: 4,</span></span>
<span class="line"><span>    // 不使用缩进符，而使用空格</span></span>
<span class="line"><span>    useTabs: false,</span></span>
<span class="line"><span>    // 行尾需要有分号</span></span>
<span class="line"><span>    semi: true,</span></span>
<span class="line"><span>    // 使用单引号</span></span>
<span class="line"><span>    singleQuote: true,</span></span>
<span class="line"><span>    // 对象的 key 仅在必要时用引号</span></span>
<span class="line"><span>    quoteProps: &#39;as-needed&#39;,</span></span>
<span class="line"><span>    // jsx 不使用单引号，而使用双引号</span></span>
<span class="line"><span>    jsxSingleQuote: false,</span></span>
<span class="line"><span>    // 末尾不需要逗号</span></span>
<span class="line"><span>    trailingComma: &#39;none&#39;,</span></span>
<span class="line"><span>    // 大括号内的首尾需要空格</span></span>
<span class="line"><span>    bracketSpacing: true,</span></span>
<span class="line"><span>    // jsx 标签的反尖括号需要换行</span></span>
<span class="line"><span>    jsxBracketSameLine: false,</span></span>
<span class="line"><span>    // 箭头函数，只有一个参数的时候，也需要括号</span></span>
<span class="line"><span>    arrowParens: &#39;always&#39;,</span></span>
<span class="line"><span>    // 每个文件格式化的范围是文件的全部内容</span></span>
<span class="line"><span>    rangeStart: 0,</span></span>
<span class="line"><span>    rangeEnd: Infinity,</span></span>
<span class="line"><span>    // 不需要写文件开头的 @prettier</span></span>
<span class="line"><span>    requirePragma: false,</span></span>
<span class="line"><span>    // 不需要自动在文件开头插入 @prettier</span></span>
<span class="line"><span>    insertPragma: false,</span></span>
<span class="line"><span>    // 使用默认的折行标准</span></span>
<span class="line"><span>    proseWrap: &#39;preserve&#39;,</span></span>
<span class="line"><span>    // 根据显示样式决定 html 要不要折行</span></span>
<span class="line"><span>    htmlWhitespaceSensitivity: &#39;css&#39;,</span></span>
<span class="line"><span>    // 换行符使用 lf</span></span>
<span class="line"><span>    endOfLine: &#39;lf&#39;</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>接下来安装 VSCode 中的 Prettier 插件，然后修改 <code>.vscode/settings.json</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;files.eol&quot;: &quot;\\n&quot;,</span></span>
<span class="line"><span>    &quot;editor.tabSize&quot;: 4,</span></span>
<span class="line"><span>    &quot;editor.formatOnSave&quot;: true,</span></span>
<span class="line"><span>    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;,</span></span>
<span class="line"><span>    &quot;eslint.autoFixOnSave&quot;: true,</span></span>
<span class="line"><span>    &quot;eslint.validate&quot;: [</span></span>
<span class="line"><span>        &quot;javascript&quot;,</span></span>
<span class="line"><span>        &quot;javascriptreact&quot;,</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;language&quot;: &quot;typescript&quot;,</span></span>
<span class="line"><span>            &quot;autoFix&quot;: true</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;typescript.tsdk&quot;: &quot;node_modules/typescript/lib&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这样就实现了保存文件时自动格式化并且自动修复 ESLint 错误。</p><p>需要注意的是，由于 ESLint 也可以检查一些代码格式的问题，所以在和 Prettier 配合使用时，我们一般会把 ESLint 中的代码格式相关的规则禁用掉，否则就会有冲突了。</p><h3 id="使用-alloyteam-的-eslint-配置§" tabindex="-1">使用 AlloyTeam 的 ESLint 配置<a href="http://ts.xcatliu.com/engineering/lint.html#%E4%BD%BF%E7%94%A8-alloyteam-%E7%9A%84-eslint-%E9%85%8D%E7%BD%AE" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#使用-alloyteam-的-eslint-配置§" aria-label="Permalink to &quot;使用 AlloyTeam 的 ESLint 配置[§](http://ts.xcatliu.com/engineering/lint.html#使用-alloyteam-的-eslint-配置)&quot;">​</a></h3><p>ESLint 原生的规则和 <code>@typescript-eslint/eslint-plugin</code> 的规则太多了，而且原生的规则有一些在 TypeScript 中支持的不好，需要禁用掉。</p><p>这里我推荐使用 <a href="https://github.com/AlloyTeam/eslint-config-alloy#typescript" target="_blank" rel="noreferrer">AlloyTeam ESLint 规则中的 TypeScript 版本</a>，它已经为我们提供了一套完善的配置规则，并且与 Prettier 是完全兼容的（eslint-config-alloy 不包含任何代码格式的规则，代码格式的问题交给更专业的 Prettier 去处理）。</p><p>安装：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-alloy</span></span></code></pre></div><p>在你的项目根目录下创建 <code>.eslintrc.js</code>，并将以下内容复制到文件中即可：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    extends: [</span></span>
<span class="line"><span>        &#39;alloy&#39;,</span></span>
<span class="line"><span>        &#39;alloy/typescript&#39;,</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    env: {</span></span>
<span class="line"><span>        // 您的环境变量（包含多个预定义的全局变量）</span></span>
<span class="line"><span>        // Your environments (which contains several predefined global variables)</span></span>
<span class="line"><span>        //</span></span>
<span class="line"><span>        // browser: true,</span></span>
<span class="line"><span>        // node: true,</span></span>
<span class="line"><span>        // mocha: true,</span></span>
<span class="line"><span>        // jest: true,</span></span>
<span class="line"><span>        // jquery: true</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    globals: {</span></span>
<span class="line"><span>        // 您的全局变量（设置为 false 表示它不允许被重新赋值）</span></span>
<span class="line"><span>        // Your global variables (setting to false means it&#39;s not allowed to be reassigned)</span></span>
<span class="line"><span>        //</span></span>
<span class="line"><span>        // myGlobal: false</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    rules: {</span></span>
<span class="line"><span>        // 自定义您的规则</span></span>
<span class="line"><span>        // Customize your rules</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>更多的使用方法，请参考 <a href="https://github.com/AlloyTeam/eslint-config-alloy" target="_blank" rel="noreferrer">AlloyTeam ESLint 规则</a></p><h3 id="使用-eslint-检查-tsx-文件§" tabindex="-1">使用 ESLint 检查 tsx 文件<a href="http://ts.xcatliu.com/engineering/lint.html#%E4%BD%BF%E7%94%A8-eslint-%E6%A3%80%E6%9F%A5-tsx-%E6%96%87%E4%BB%B6" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#使用-eslint-检查-tsx-文件§" aria-label="Permalink to &quot;使用 ESLint 检查 tsx 文件[§](http://ts.xcatliu.com/engineering/lint.html#使用-eslint-检查-tsx-文件)&quot;">​</a></h3><p>如果需要同时支持对 tsx 文件的检查，则需要对以上步骤做一些调整：</p><h4 id="安装-eslint-plugin-react§" tabindex="-1">安装 <code>eslint-plugin-react</code><a href="http://ts.xcatliu.com/engineering/lint.html#%E5%AE%89%E8%A3%85-eslint-plugin-react" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#安装-eslint-plugin-react§" aria-label="Permalink to &quot;安装 \`eslint-plugin-react\`[§](http://ts.xcatliu.com/engineering/lint.html#安装-eslint-plugin-react)&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install --save-dev eslint-plugin-react</span></span></code></pre></div><h4 id="package-json-中的-scripts-eslint-添加-tsx-后缀§" tabindex="-1">package.json 中的 scripts.eslint 添加 <code>.tsx</code> 后缀<a href="http://ts.xcatliu.com/engineering/lint.html#packagejson-%E4%B8%AD%E7%9A%84-scriptseslint-%E6%B7%BB%E5%8A%A0-tsx-%E5%90%8E%E7%BC%80" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#package-json-中的-scripts-eslint-添加-tsx-后缀§" aria-label="Permalink to &quot;package.json 中的 scripts.eslint 添加 \`.tsx\` 后缀[§](http://ts.xcatliu.com/engineering/lint.html#packagejson-中的-scriptseslint-添加-tsx-后缀)&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;scripts&quot;: {</span></span>
<span class="line"><span>        &quot;eslint&quot;: &quot;eslint src --ext .ts,.tsx&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="vscode-的配置中新增-typescriptreact-检查§" tabindex="-1">VSCode 的配置中新增 typescriptreact 检查<a href="http://ts.xcatliu.com/engineering/lint.html#vscode-%E7%9A%84%E9%85%8D%E7%BD%AE%E4%B8%AD%E6%96%B0%E5%A2%9E-typescriptreact-%E6%A3%80%E6%9F%A5" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#vscode-的配置中新增-typescriptreact-检查§" aria-label="Permalink to &quot;VSCode 的配置中新增 typescriptreact 检查[§](http://ts.xcatliu.com/engineering/lint.html#vscode-的配置中新增-typescriptreact-检查)&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;files.eol&quot;: &quot;\\\\n&quot;,</span></span>
<span class="line"><span>    &quot;editor.tabSize&quot;: 4,</span></span>
<span class="line"><span>    &quot;editor.formatOnSave&quot;: true,</span></span>
<span class="line"><span>    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;,</span></span>
<span class="line"><span>    &quot;eslint.autoFixOnSave&quot;: true,</span></span>
<span class="line"><span>    &quot;eslint.validate&quot;: [</span></span>
<span class="line"><span>        &quot;javascript&quot;,</span></span>
<span class="line"><span>        &quot;javascriptreact&quot;,</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;language&quot;: &quot;typescript&quot;,</span></span>
<span class="line"><span>            &quot;autoFix&quot;: true</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;language&quot;: &quot;typescriptreact&quot;,</span></span>
<span class="line"><span>            &quot;autoFix&quot;: true</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;typescript.tsdk&quot;: &quot;node_modules/typescript/lib&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="使用-alloyteam-eslint-规则中的-typescript-react-版本§" tabindex="-1">使用 AlloyTeam ESLint 规则中的 TypeScript React 版本<a href="http://ts.xcatliu.com/engineering/lint.html#%E4%BD%BF%E7%94%A8-alloyteam-eslint-%E8%A7%84%E5%88%99%E4%B8%AD%E7%9A%84-typescript-react-%E7%89%88%E6%9C%AC" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#使用-alloyteam-eslint-规则中的-typescript-react-版本§" aria-label="Permalink to &quot;使用 AlloyTeam ESLint 规则中的 TypeScript React 版本[§](http://ts.xcatliu.com/engineering/lint.html#使用-alloyteam-eslint-规则中的-typescript-react-版本)&quot;">​</a></h4><p><a href="https://github.com/AlloyTeam/eslint-config-alloy#typescript-react" target="_blank" rel="noreferrer">AlloyTeam ESLint 规则中的 TypeScript React 版本</a></p><h2 id="troubleshootings§" tabindex="-1">Troubleshootings<a href="http://ts.xcatliu.com/engineering/lint.html#troubleshootings" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#troubleshootings§" aria-label="Permalink to &quot;Troubleshootings[§](http://ts.xcatliu.com/engineering/lint.html#troubleshootings)&quot;">​</a></h2><h3 id="cannot-find-module-typescript-eslint-parser-§" tabindex="-1">Cannot find module &#39;@typescript-eslint/parser&#39;<a href="http://ts.xcatliu.com/engineering/lint.html#cannot-find-module-typescript-eslintparser" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#cannot-find-module-typescript-eslint-parser-§" aria-label="Permalink to &quot;Cannot find module &#39;@typescript-eslint/parser&#39;[§](http://ts.xcatliu.com/engineering/lint.html#cannot-find-module-typescript-eslintparser)&quot;">​</a></h3><p>你运行的是全局的 eslint，需要改为运行 <code>./node_modules/.bin/eslint</code>。</p><h3 id="vscode-没有显示出-eslint-的报错§" tabindex="-1">VSCode 没有显示出 ESLint 的报错<a href="http://ts.xcatliu.com/engineering/lint.html#vscode-%E6%B2%A1%E6%9C%89%E6%98%BE%E7%A4%BA%E5%87%BA-eslint-%E7%9A%84%E6%8A%A5%E9%94%99" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#vscode-没有显示出-eslint-的报错§" aria-label="Permalink to &quot;VSCode 没有显示出 ESLint 的报错[§](http://ts.xcatliu.com/engineering/lint.html#vscode-没有显示出-eslint-的报错)&quot;">​</a></h3><ol><li>检查「文件 =&gt; 首选项 =&gt; 设置」中有没有配置正确</li><li>检查必要的 npm 包有没有安装</li><li>检查 <code>.eslintrc.js</code> 有没有配置</li><li>检查文件是不是在 <code>.eslintignore</code> 中</li></ol><p>如果以上步骤都不奏效，则可以在「文件 =&gt; 首选项 =&gt; 设置」中配置 <code>&quot;eslint.trace.server&quot;: &quot;messages&quot;</code>，按 <code>Ctrl</code>+<code>Shift</code>+<code>U</code> 打开输出面板，然后选择 ESLint 输出，查看具体错误。</p><p><img src="http://ts.xcatliu.com/assets/vscode-output-eslint.png" alt="VSCode 的 ESLint 输出"></p><h3 id="为什么有些定义了的变量-比如使用-enum-定义的变量-未使用-eslint-却没有报错-§" tabindex="-1">为什么有些定义了的变量（比如使用 <code>enum</code> 定义的变量）未使用，ESLint 却没有报错？<a href="http://ts.xcatliu.com/engineering/lint.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E4%BA%9B%E5%AE%9A%E4%B9%89%E4%BA%86%E7%9A%84%E5%8F%98%E9%87%8F%E6%AF%94%E5%A6%82%E4%BD%BF%E7%94%A8-enum-%E5%AE%9A%E4%B9%89%E7%9A%84%E5%8F%98%E9%87%8F%E6%9C%AA%E4%BD%BF%E7%94%A8eslint-%E5%8D%B4%E6%B2%A1%E6%9C%89%E6%8A%A5%E9%94%99" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#为什么有些定义了的变量-比如使用-enum-定义的变量-未使用-eslint-却没有报错-§" aria-label="Permalink to &quot;为什么有些定义了的变量（比如使用 \`enum\` 定义的变量）未使用，ESLint 却没有报错？[§](http://ts.xcatliu.com/engineering/lint.html#为什么有些定义了的变量比如使用-enum-定义的变量未使用eslint-却没有报错)&quot;">​</a></h3><p>因为无法支持这种变量定义的检查。建议在 <code>tsconfig.json</code> 中添加以下配置，使 <code>tsc</code> 编译过程能够检查出定义了未使用的变量：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span>        &quot;noUnusedLocals&quot;: true,</span></span>
<span class="line"><span>        &quot;noUnusedParameters&quot;: true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="启用了-nounusedparameters-之后-只使用了第二个参数-但是又必须传入第一个参数-这就会报错了§" tabindex="-1">启用了 noUnusedParameters 之后，只使用了第二个参数，但是又必须传入第一个参数，这就会报错了<a href="http://ts.xcatliu.com/engineering/lint.html#%E5%90%AF%E7%94%A8%E4%BA%86-nounusedparameters-%E4%B9%8B%E5%90%8E%E5%8F%AA%E4%BD%BF%E7%94%A8%E4%BA%86%E7%AC%AC%E4%BA%8C%E4%B8%AA%E5%8F%82%E6%95%B0%E4%BD%86%E6%98%AF%E5%8F%88%E5%BF%85%E9%A1%BB%E4%BC%A0%E5%85%A5%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%82%E6%95%B0%E8%BF%99%E5%B0%B1%E4%BC%9A%E6%8A%A5%E9%94%99%E4%BA%86" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#启用了-nounusedparameters-之后-只使用了第二个参数-但是又必须传入第一个参数-这就会报错了§" aria-label="Permalink to &quot;启用了 noUnusedParameters 之后，只使用了第二个参数，但是又必须传入第一个参数，这就会报错了[§](http://ts.xcatliu.com/engineering/lint.html#启用了-nounusedparameters-之后只使用了第二个参数但是又必须传入第一个参数这就会报错了)&quot;">​</a></h3><p>第一个参数以下划线开头即可，参考 <a href="https://github.com/Microsoft/TypeScript/issues/9458" target="_blank" rel="noreferrer">https://github.com/Microsoft/TypeScript/issues/9458</a></p><h1 id="编译选项" tabindex="-1">编译选项 <a class="header-anchor" href="#编译选项" aria-label="Permalink to &quot;编译选项&quot;">​</a></h1><p>TypeScript 提供了非常多的编译选项，但是官方文档对每一项的解释很抽象，这一章会详细介绍每一个选项的作用，并给出对应的示例。</p><p>索引（点击选项跳转到详细介绍）：</p><table><thead><tr><th style="text-align:left;">选项</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="http://ts.xcatliu.com/engineering/compiler-options.html#allowjs" target="_blank" rel="noreferrer"><code>allowJs</code></a></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;">允许编译 js 文件</td></tr><tr><td style="text-align:left;"><a href="http://ts.xcatliu.com/engineering/compiler-options.html#allowsyntheticdefaultimports" target="_blank" rel="noreferrer"><code>allowSyntheticDefaultImports</code></a></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;">允许对不包含默认导出的模块使用默认导入。这个选项不会影响生成的代码，只会影响类型检查。</td></tr></tbody></table><h2 id="allowjs§" tabindex="-1">allowJs<a href="http://ts.xcatliu.com/engineering/compiler-options.html#allowjs" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#allowjs§" aria-label="Permalink to &quot;allowJs[§](http://ts.xcatliu.com/engineering/compiler-options.html#allowjs)&quot;">​</a></h2><blockquote><p>允许编译 js 文件。</p></blockquote><p>设置为 <code>true</code> 时，js 文件会被 tsc 编译，否则不会。一般在项目中 js, ts 混合开发时需要设置。</p><p><a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/compiler-options/01-allowJs" target="_blank" rel="noreferrer">查看示例</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 设置为 true 时，编译后的文件包含 foo.js</span></span>
<span class="line"><span>├── lib</span></span>
<span class="line"><span>│   ├── foo.js</span></span>
<span class="line"><span>│   └── index.js</span></span>
<span class="line"><span>├── src</span></span>
<span class="line"><span>│   ├── foo.js</span></span>
<span class="line"><span>│   └── index.ts</span></span>
<span class="line"><span>├── package.json</span></span>
<span class="line"><span>└── tsconfig.json</span></span>
<span class="line"><span># 设置为 false 时，编译后的文件不包含 foo.js</span></span>
<span class="line"><span>├── lib</span></span>
<span class="line"><span>│   └── index.js</span></span>
<span class="line"><span>├── src</span></span>
<span class="line"><span>│   ├── foo.js</span></span>
<span class="line"><span>│   └── index.ts</span></span>
<span class="line"><span>├── package.json</span></span>
<span class="line"><span>└── tsconfig.json</span></span></code></pre></div><h2 id="allowsyntheticdefaultimports§" tabindex="-1">allowSyntheticDefaultImports<a href="http://ts.xcatliu.com/engineering/compiler-options.html#allowsyntheticdefaultimports" target="_blank" rel="noreferrer">§</a> <a class="header-anchor" href="#allowsyntheticdefaultimports§" aria-label="Permalink to &quot;allowSyntheticDefaultImports[§](http://ts.xcatliu.com/engineering/compiler-options.html#allowsyntheticdefaultimports)&quot;">​</a></h2><blockquote><p>允许对不包含默认导出的模块使用默认导入。这个选项不会影响生成的代码，只会影响类型检查。</p></blockquote><p><code>export = foo</code> 是 ts 为了兼容 commonjs 创造的语法，它对应于 commonjs 中的 <code>module.exports = foo</code>。</p><p>在 ts 中，如果要引入一个通过 <code>export = foo</code> 导出的模块，标准的语法是 <code>import foo = require(&#39;foo&#39;)</code>，或者 <code>import * as foo from &#39;foo&#39;</code>。</p><p>但由于历史原因，我们已经习惯了使用 <code>import foo from &#39;foo&#39;</code>。</p><p>这个选项就是为了解决这个问题。当它设置为 <code>true</code> 时，允许使用 <code>import foo from &#39;foo&#39;</code> 来导入一个通过 <code>export = foo</code> 导出的模块。当它设置为 <code>false</code> 时，则不允许，会报错。</p><p>当然，我们一般不会在 ts 文件中使用 <code>export = foo</code> 来导出模块，而是在<a href="http://ts.xcatliu.com/basics/declaration-files#export-1" target="_blank" rel="noreferrer">写（符合 commonjs 规范的）第三方库的声明文件</a>时，才会用到 <code>export = foo</code> 来导出类型。</p><p>比如 React 的声明文件中，就是通过 <code>export = React</code> 来导出类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export = React;</span></span>
<span class="line"><span>export as namespace React;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare namespace React {</span></span>
<span class="line"><span>    // 声明 React 的类型</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>此时若我们通过 <code>import React from &#39;react&#39;</code> 来导入 react 则会报错，<a href="https://github.com/xcatliu/typescript-tutorial/tree/master/examples/compiler-options/02-allowSyntheticDefaultImports" target="_blank" rel="noreferrer">查看示例</a> ：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import React from &#39;react&#39;;</span></span>
<span class="line"><span>// Module &#39;&quot;typescript-tutorial/examples/compiler-options/02-allowSyntheticDefaultImports/false/node_modules/@types/react/index&quot;&#39; can only be default-imported using the &#39;esModuleInterop&#39; flagts(1259)</span></span></code></pre></div><p>解决办法就是将 <code>allowSyntheticDefaultImports</code> 设置为 <code>true</code>。</p>`,1129),l=[t];function i(c,o,r,d,h,u){return n(),s("div",null,l)}const b=a(p,[["render",i]]);export{m as __pageData,b as default};
