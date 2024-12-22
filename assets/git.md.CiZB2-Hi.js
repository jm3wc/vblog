import{_ as a,c as s,o as n,a2 as e}from"./chunks/framework.CSGcjqEA.js";const b=JSON.parse('{"title":"安装Git图形界面","description":"","frontmatter":{},"headers":[],"relativePath":"git.md","filePath":"git.md"}'),p={name:"git.md"},t=e(`<h1 id="安装git图形界面" tabindex="-1">安装Git图形界面 <a class="header-anchor" href="#安装git图形界面" aria-label="Permalink to &quot;安装Git图形界面&quot;">​</a></h1><h2 id="windows-平台上安装" tabindex="-1">Windows 平台上安装 <a class="header-anchor" href="#windows-平台上安装" aria-label="Permalink to &quot;Windows 平台上安装&quot;">​</a></h2><p>在 Windows 平台上安装 Git 同样轻松，有个叫做 msysGit 的项目提供了安装包，可以到 GitHub 的页面上下载 exe 安装文件并运行：</p><p>安装包下载地址：<a href="https://gitforwindows.org/" target="_blank" rel="noreferrer">https://gitforwindows.org/</a></p><p>官网慢，可以用国内的镜像：<a href="https://npm.taobao.org/mirrors/git-for-windows/%E3%80%82" target="_blank" rel="noreferrer">https://npm.taobao.org/mirrors/git-for-windows/。</a></p><p>完成安装之后，就可以使用命令行的 git 工具（已经自带了 ssh 客户端）了，另外还有一个图形界面的 Git 项目管理工具。</p><p>在开始菜单里找到&quot;Git&quot;-&gt;&quot;Git Bash&quot;，会弹出 Git 命令窗口，你可以在该窗口进行 Git 操作。</p><h2 id="mac-平台上安装" tabindex="-1">Mac 平台上安装 <a class="header-anchor" href="#mac-平台上安装" aria-label="Permalink to &quot;Mac 平台上安装&quot;">​</a></h2><p>在 Mac 平台上安装 Git 最容易的当属使用图形化的 Git 安装工具，下载地址为：</p><p><a href="http://sourceforge.net/projects/git-osx-installer/" target="_blank" rel="noreferrer">http://sourceforge.net/projects/git-osx-installer/</a></p><h1 id="git基本命令" tabindex="-1">Git基本命令 <a class="header-anchor" href="#git基本命令" aria-label="Permalink to &quot;Git基本命令&quot;">​</a></h1><h2 id="git-基本操作" tabindex="-1">Git 基本操作 <a class="header-anchor" href="#git-基本操作" aria-label="Permalink to &quot;Git 基本操作&quot;">​</a></h2><blockquote><p>Git 的工作就是创建和保存你项目的快照及与之后的快照进行对比。 本章将对有关创建与提交你的项目快照的命令作介绍。</p><p>Git 常用的是以下 6 个命令：git clone、git push、git add 、git commit、git checkout、git pull，后面我们会详细介绍。</p></blockquote><p><img src="https://topmost.gitee.io/book/mdphoto/base/git/git1.jpg" alt="Image text"></p><p>说明：</p><ul><li>workspace：工作区</li><li>staging area：暂存区/缓存区</li><li>local repository：或本地仓库</li><li>remote repository：远程仓库</li></ul><p>一个简单的操作步骤：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ git init    </span></span>
<span class="line"><span>$ git add .    </span></span>
<span class="line"><span>$ git commit</span></span></code></pre></div><ul><li>git init - 初始化仓库。</li><li>git add . - 添加文件到暂存区。</li><li>git commit - 将暂存区内容添加到仓库中。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git init - 初始化仓库</span></span>
<span class="line"><span>git add . - 添加文件到暂存区。</span></span>
<span class="line"><span>git commit -m &#39;项目名称&#39; （提交到本地仓库）</span></span>
<span class="line"><span>git remote add origin 码云项目地址 （连接远程仓库）</span></span>
<span class="line"><span>git push -u origin master 把本地仓库推送到远程仓库</span></span></code></pre></div><h2 id="创建仓库命令" tabindex="-1">创建仓库命令 <a class="header-anchor" href="#创建仓库命令" aria-label="Permalink to &quot;创建仓库命令&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">命令</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">git init</td><td style="text-align:center;">初始化仓库</td></tr><tr><td style="text-align:center;">git clone</td><td style="text-align:center;">拷贝一份远程仓库，也就是下载一个项目。</td></tr></tbody></table><h2 id="提交与修改" tabindex="-1">提交与修改 <a class="header-anchor" href="#提交与修改" aria-label="Permalink to &quot;提交与修改&quot;">​</a></h2><blockquote><p>Git 的工作就是创建和保存你的项目的快照及与之后的快照进行对比。</p></blockquote><p>下表列出了有关创建与提交你的项目的快照的命令：</p><table><thead><tr><th style="text-align:center;">命令</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">git add</td><td style="text-align:center;">添加文件到仓库</td></tr><tr><td style="text-align:center;">git status</td><td style="text-align:center;">查看仓库当前的状态，显示有变更的文件。</td></tr><tr><td style="text-align:center;">git diff</td><td style="text-align:center;">比较文件的不同，即暂存区和工作区的差异。</td></tr><tr><td style="text-align:center;">git commit</td><td style="text-align:center;">提交暂存区到本地仓库。</td></tr><tr><td style="text-align:center;">git reset</td><td style="text-align:center;">回退版本。</td></tr><tr><td style="text-align:center;">git rm</td><td style="text-align:center;">删除工作区文件。</td></tr><tr><td style="text-align:center;">git mv</td><td style="text-align:center;">移动或重命名工作区文件。</td></tr></tbody></table><h2 id="提交日志" tabindex="-1">提交日志 <a class="header-anchor" href="#提交日志" aria-label="Permalink to &quot;提交日志&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">命令</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">git log</td><td style="text-align:center;">查看历史提交记录</td></tr><tr><td style="text-align:center;">git blame</td><td style="text-align:center;">以列表形式查看指定文件的历史修改记录</td></tr></tbody></table><h2 id="远程操作" tabindex="-1">远程操作 <a class="header-anchor" href="#远程操作" aria-label="Permalink to &quot;远程操作&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">命令</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">git remote</td><td style="text-align:center;">远程仓库操作</td></tr><tr><td style="text-align:center;">git fetch</td><td style="text-align:center;">从远程获取代码库</td></tr><tr><td style="text-align:center;">git pull</td><td style="text-align:center;">下载远程代码并合并</td></tr><tr><td style="text-align:center;">git push</td><td style="text-align:center;">上传远程代码并合并</td></tr></tbody></table><h1 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h1><p><img src="https://topmost.gitee.io/book/mdphoto/base/git/git.png" alt="Image text"></p><h3 id="工作流程" tabindex="-1">工作流程 <a class="header-anchor" href="#工作流程" aria-label="Permalink to &quot;工作流程&quot;">​</a></h3><p><img src="https://www.quickask.net/dist/assets/images/php/git/git.jpg" alt="git"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Working Directory：本地工作目录（工作区）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Stage(Index)：暂存区</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Repository：仓库，仓库又分本地仓库和远程仓库</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Remote：远程仓库</span></span></code></pre></div><h3 id="全局身份设置" tabindex="-1">全局身份设置 <a class="header-anchor" href="#全局身份设置" aria-label="Permalink to &quot;全局身份设置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git config --global user.name &quot;Your Name&quot;</span></span>
<span class="line"><span>git config --global user.email &quot;Your Email&quot;</span></span></code></pre></div><h3 id="设置换行符选项" tabindex="-1">设置换行符选项 <a class="header-anchor" href="#设置换行符选项" aria-label="Permalink to &quot;设置换行符选项&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git config --global core.autocrlf false</span></span>
<span class="line"><span>git config --global core.safecrlf false</span></span></code></pre></div><h3 id="查看全局配置" tabindex="-1">查看全局配置 <a class="header-anchor" href="#查看全局配置" aria-label="Permalink to &quot;查看全局配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git config --global --list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>系统全局git配置文件：.gitconfig</span></span>
<span class="line"><span>一般该文件会放到计算机的家目录，MAC为例的话：/用户/用户名/.gitconfig</span></span></code></pre></div><h1 id="本地操作" tabindex="-1">本地操作 <a class="header-anchor" href="#本地操作" aria-label="Permalink to &quot;本地操作&quot;">​</a></h1><h3 id="克隆已创建的仓库" tabindex="-1">克隆已创建的仓库 <a class="header-anchor" href="#克隆已创建的仓库" aria-label="Permalink to &quot;克隆已创建的仓库&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git clone http://www.demo.com/repo.git</span></span></code></pre></div><h3 id="克隆已创建的仓库-带账号密码" tabindex="-1">克隆已创建的仓库(带账号密码) <a class="header-anchor" href="#克隆已创建的仓库-带账号密码" aria-label="Permalink to &quot;克隆已创建的仓库(带账号密码)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git clone http://邮箱(或用户名):密码@仓库</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意： 邮箱中的 @ 要使用 %40 代替，仓库 URL 不需要 http://</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git clone http://邮箱地址%40qq.com:密码@gitee.com/xxxxx/demo.git(这个是仓库地址)</span></span></code></pre></div><h3 id="创建一个新的本地仓库" tabindex="-1">创建一个新的本地仓库 <a class="header-anchor" href="#创建一个新的本地仓库" aria-label="Permalink to &quot;创建一个新的本地仓库&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git init</span></span></code></pre></div><h3 id="显示已修改的文件" tabindex="-1">显示已修改的文件 <a class="header-anchor" href="#显示已修改的文件" aria-label="Permalink to &quot;显示已修改的文件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git status</span></span></code></pre></div><h3 id="显示与上次提交版本文件的不同" tabindex="-1">显示与上次提交版本文件的不同 <a class="header-anchor" href="#显示与上次提交版本文件的不同" aria-label="Permalink to &quot;显示与上次提交版本文件的不同&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git diff</span></span></code></pre></div><h3 id="当前所有修改添加到暂存区" tabindex="-1">当前所有修改添加到暂存区 <a class="header-anchor" href="#当前所有修改添加到暂存区" aria-label="Permalink to &quot;当前所有修改添加到暂存区&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git add</span></span></code></pre></div><h3 id="提交本地的所有修改" tabindex="-1">提交本地的所有修改 <a class="header-anchor" href="#提交本地的所有修改" aria-label="Permalink to &quot;提交本地的所有修改&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git commit -a</span></span>
<span class="line"><span></span></span>
<span class="line"><span>添加备注方式提交</span></span>
<span class="line"><span>git commit -m &#39;备注写这里&#39;</span></span></code></pre></div><h3 id="从当前目录的所有文件中查找文本内容" tabindex="-1">从当前目录的所有文件中查找文本内容 <a class="header-anchor" href="#从当前目录的所有文件中查找文本内容" aria-label="Permalink to &quot;从当前目录的所有文件中查找文本内容&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git grep &quot;Hello&quot;</span></span></code></pre></div><h3 id="在某一版本中搜索文本" tabindex="-1">在某一版本中搜索文本 <a class="header-anchor" href="#在某一版本中搜索文本" aria-label="Permalink to &quot;在某一版本中搜索文本&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git grep &quot;Hello&quot; v2.5</span></span></code></pre></div><h1 id="提交历史" tabindex="-1">提交历史 <a class="header-anchor" href="#提交历史" aria-label="Permalink to &quot;提交历史&quot;">​</a></h1><h3 id="从最新提交开始-显示所有的提交记录-显示hash-作者信息-提交的标题和时间" tabindex="-1">从最新提交开始，显示所有的提交记录（显示hash， 作者信息，提交的标题和时间） <a class="header-anchor" href="#从最新提交开始-显示所有的提交记录-显示hash-作者信息-提交的标题和时间" aria-label="Permalink to &quot;从最新提交开始，显示所有的提交记录（显示hash， 作者信息，提交的标题和时间）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git log</span></span></code></pre></div><h3 id="显示所有提交-仅显示提交的hash和message" tabindex="-1">显示所有提交（仅显示提交的hash和message） <a class="header-anchor" href="#显示所有提交-仅显示提交的hash和message" aria-label="Permalink to &quot;显示所有提交（仅显示提交的hash和message）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git log --oneline</span></span></code></pre></div><h3 id="显示某个用户的所有提交" tabindex="-1">显示某个用户的所有提交 <a class="header-anchor" href="#显示某个用户的所有提交" aria-label="Permalink to &quot;显示某个用户的所有提交&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git log --author=&quot;username&quot;</span></span></code></pre></div><h3 id="显示某个文件的所有修改" tabindex="-1">显示某个文件的所有修改 <a class="header-anchor" href="#显示某个文件的所有修改" aria-label="Permalink to &quot;显示某个文件的所有修改&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git log -p &lt;file&gt;</span></span></code></pre></div><h3 id="谁-在什么时间-修改了文件的什么内容" tabindex="-1">谁，在什么时间，修改了文件的什么内容 <a class="header-anchor" href="#谁-在什么时间-修改了文件的什么内容" aria-label="Permalink to &quot;谁，在什么时间，修改了文件的什么内容&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git blame &lt;file&gt;</span></span></code></pre></div><h1 id="版本回滚" tabindex="-1">版本回滚 <a class="header-anchor" href="#版本回滚" aria-label="Permalink to &quot;版本回滚&quot;">​</a></h1><h3 id="head说明" tabindex="-1">HEAD说明 <a class="header-anchor" href="#head说明" aria-label="Permalink to &quot;HEAD说明&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>HEAD 表示当前版本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HEAD^ 上一个版本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HEAD^^ 上上一个版本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HEAD^^^ 上上上一个版本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>以此类推...</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>可以使用 ～数字表示---------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>HEAD~0 表示当前版本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HEAD~1 上一个版本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HEAD~2 上上一个版本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HEAD~3 上上上一个版本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>以此类推...</span></span></code></pre></div><h3 id="reset-回退提交commit" tabindex="-1">reset(回退提交commit) <a class="header-anchor" href="#reset-回退提交commit" aria-label="Permalink to &quot;reset(回退提交commit)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>--mixed 为默认参数，回退提交，只保留工作区</span></span>
<span class="line"><span>--soft参数，回退提交，保留暂存区(add)和工作区，让仓库恢复到执行(git commit)之前的状态</span></span>
<span class="line"><span>--hard参数，回退提交，全部区域回退，一点不保留(版本库/暂存区/工作区)</span></span></code></pre></div><blockquote><p>mixed 为默认参数，回退提交，只保留工作区</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>回退 所有文件 到上一个版本</span></span>
<span class="line"><span>git reset HEAD^  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>回退 指定文件 到上一个版本</span></span>
<span class="line"><span>git reset HEAD^ demo.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span>回退到 指定版本</span></span>
<span class="line"><span>git reset 提交id&lt;commit&gt;</span></span></code></pre></div><blockquote><p>soft参数，回退提交，保留暂存区(add)和工作区，让仓库恢复到执行(git commit)之前的状态</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git reset --soft HEAD^</span></span>
<span class="line"><span></span></span>
<span class="line"><span>执行完查看一下状态,可以看一下保留状态是否在暂存区</span></span>
<span class="line"><span>git status</span></span></code></pre></div><blockquote><p>hard参数，回退提交，全部区域回退，一点不保留(版本库/暂存区/工作区)</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git reset --hard HEAD^</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：谨慎使用 –-hard 参数，它会删除回退点之前的所有信息</span></span></code></pre></div><h3 id="restore-回退暂存区add" tabindex="-1">restore(回退暂存区add) <a class="header-anchor" href="#restore-回退暂存区add" aria-label="Permalink to &quot;restore(回退暂存区add)&quot;">​</a></h3><blockquote><p>暂存区(add) 回退 工作区</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>回退 所有文件 从 暂存区到工作区</span></span>
<span class="line"><span>git restore --staged .</span></span>
<span class="line"><span></span></span>
<span class="line"><span>回退 指定文件 从 暂存区到工作区</span></span>
<span class="line"><span>git restore --staged index.html</span></span></code></pre></div><blockquote><p>将工作区的文件修改撤销(内容撤销) restore/checkout 都可以</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>撤销 所有文件 的内容修改</span></span>
<span class="line"><span>git restore .</span></span>
<span class="line"><span></span></span>
<span class="line"><span>撤销 指定文件 的内容修改</span></span>
<span class="line"><span>git restore index.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>撤销 所有文件 的内容修改</span></span>
<span class="line"><span>git checkout .</span></span>
<span class="line"><span></span></span>
<span class="line"><span>撤销 指定文件 的内容修改</span></span>
<span class="line"><span>git checkout index.html</span></span></code></pre></div><h1 id="分支与标签" tabindex="-1">分支与标签 <a class="header-anchor" href="#分支与标签" aria-label="Permalink to &quot;分支与标签&quot;">​</a></h1><h3 id="列出所有的分支" tabindex="-1">列出所有的分支 <a class="header-anchor" href="#列出所有的分支" aria-label="Permalink to &quot;列出所有的分支&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git branch</span></span></code></pre></div><h3 id="基于当前分支创建新分支" tabindex="-1">基于当前分支创建新分支 <a class="header-anchor" href="#基于当前分支创建新分支" aria-label="Permalink to &quot;基于当前分支创建新分支&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git branch &lt;new-branch&gt;</span></span></code></pre></div><h3 id="切换分支" tabindex="-1">切换分支 <a class="header-anchor" href="#切换分支" aria-label="Permalink to &quot;切换分支&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git checkout &lt;branch&gt;</span></span></code></pre></div><h3 id="基于远程分支创建新的可追溯的分支" tabindex="-1">基于远程分支创建新的可追溯的分支 <a class="header-anchor" href="#基于远程分支创建新的可追溯的分支" aria-label="Permalink to &quot;基于远程分支创建新的可追溯的分支&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git branch --track &lt;new-branch&gt; &lt;remote-branch&gt;</span></span></code></pre></div><h3 id="删除本地分支" tabindex="-1">删除本地分支 <a class="header-anchor" href="#删除本地分支" aria-label="Permalink to &quot;删除本地分支&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git branch -d &lt;branch&gt;</span></span></code></pre></div><h3 id="给当前版本打标签" tabindex="-1">给当前版本打标签 <a class="header-anchor" href="#给当前版本打标签" aria-label="Permalink to &quot;给当前版本打标签&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git tag &lt;tag-name&gt;</span></span></code></pre></div><h3 id="删除标签" tabindex="-1">删除标签 <a class="header-anchor" href="#删除标签" aria-label="Permalink to &quot;删除标签&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git tag -d &lt;tag-name&gt;</span></span></code></pre></div><h1 id="rebase-merge-分支合并" tabindex="-1">rebase/merge/分支合并 <a class="header-anchor" href="#rebase-merge-分支合并" aria-label="Permalink to &quot;rebase/merge/分支合并&quot;">​</a></h1><h3 id="原文转载" tabindex="-1">原文转载 <a class="header-anchor" href="#原文转载" aria-label="Permalink to &quot;原文转载&quot;">​</a></h3><p><a href="https://www.jianshu.com/p/f23f72251abc" target="_blank" rel="noreferrer">https://www.jianshu.com/p/f23f72251abcopen in new window</a></p><h3 id="git-rebase-和-git-merge-的区别" tabindex="-1">git rebase 和 git merge 的区别 <a class="header-anchor" href="#git-rebase-和-git-merge-的区别" aria-label="Permalink to &quot;git rebase 和 git merge 的区别&quot;">​</a></h3><blockquote><p>共同点</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>两条命令主要的用途：合并分支</span></span></code></pre></div><blockquote><p>区别点</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>merge</span></span>
<span class="line"><span>特点：自动创建一个新的commit</span></span>
<span class="line"><span>如果合并的时候遇到冲突，仅需要修改后重新commit</span></span>
<span class="line"><span>优点：记录了真实的commit情况，包括每个分支的详情</span></span>
<span class="line"><span>缺点：每次merge会自动产生一个merge commit</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rebase</span></span>
<span class="line"><span>特点：会合并之前的commit历史</span></span>
<span class="line"><span>优点：得到更简洁的项目历史，去掉了merge commit</span></span>
<span class="line"><span>缺点：如果合并出现代码问题不容易定位，因为re-write了history</span></span>
<span class="line"><span></span></span>
<span class="line"><span>合并时如果出现冲突需要按照如下步骤解决</span></span>
<span class="line"><span>1、修改冲突部分</span></span>
<span class="line"><span>2、git add</span></span>
<span class="line"><span>3、git rebase --continue</span></span>
<span class="line"><span>4、如果第三步无效可以执行 git rebase --skip</span></span></code></pre></div><h3 id="使用习惯" tabindex="-1">使用习惯 <a class="header-anchor" href="#使用习惯" aria-label="Permalink to &quot;使用习惯&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>如果你想要一个干净的，没有merge commit的线性历史树，那么你应该选择git rebase</span></span>
<span class="line"><span>如果你想保留完整的历史记录，并且想要避免重写commit history的风险，你应该选择使用git merge</span></span></code></pre></div><h3 id="正常的时间线" tabindex="-1">正常的时间线 <a class="header-anchor" href="#正常的时间线" aria-label="Permalink to &quot;正常的时间线&quot;">​</a></h3><p><img src="https://www.quickask.net/dist/assets/images/php/git/git_normal.png" alt="normal"></p><h3 id="merge操作" tabindex="-1">merge操作 <a class="header-anchor" href="#merge操作" aria-label="Permalink to &quot;merge操作&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git checkout feature    切换分支</span></span>
<span class="line"><span>git merge master        合并分支</span></span></code></pre></div><p><img src="https://www.quickask.net/dist/assets/images/php/git/git_merge.png" alt="merge"></p><h3 id="rebase操作" tabindex="-1">rebase操作 <a class="header-anchor" href="#rebase操作" aria-label="Permalink to &quot;rebase操作&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git checkout feature</span></span>
<span class="line"><span>git rebase master</span></span></code></pre></div><p><img src="https://www.quickask.net/dist/assets/images/php/git/git_rebase.png" alt="rebase"></p><h1 id="更新与发布" tabindex="-1">更新与发布 <a class="header-anchor" href="#更新与发布" aria-label="Permalink to &quot;更新与发布&quot;">​</a></h1><h3 id="远程仓库" tabindex="-1">远程仓库 <a class="header-anchor" href="#远程仓库" aria-label="Permalink to &quot;远程仓库&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>查看远程版本库信息</span></span>
<span class="line"><span>git remote -v</span></span>
<span class="line"><span></span></span>
<span class="line"><span>添加远程版本库</span></span>
<span class="line"><span>git remote add &lt;remote&gt; &lt;url&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>删除远程版本库</span></span>
<span class="line"><span>git remote rm &lt;remote&gt;</span></span></code></pre></div><h3 id="远程操作需要重启安全认证" tabindex="-1">远程操作需要重启安全认证 <a class="header-anchor" href="#远程操作需要重启安全认证" aria-label="Permalink to &quot;远程操作需要重启安全认证&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git config --global http.sslVerify true</span></span></code></pre></div><h3 id="更新操作" tabindex="-1">更新操作 <a class="header-anchor" href="#更新操作" aria-label="Permalink to &quot;更新操作&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>注意：fatal: refusing to merge unrelated histories</span></span>
<span class="line"><span></span></span>
<span class="line"><span>上述的错误是说，拉取/推送的仓库，与本地仓库没有任何关系，我们可以添加参数，强制拉取/推送</span></span>
<span class="line"><span>git push origin master --allow-unrelated-histories</span></span></code></pre></div><blockquote><p>fetch 下载操作(不合并本地仓库)</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>从远程主机的master分支拉取最新内容下来，但不合并到HEAD中(下载)</span></span>
<span class="line"><span>git fetch origin master</span></span>
<span class="line"><span></span></span>
<span class="line"><span>将拉取下来的最新内容合并到当前所在的分支中</span></span>
<span class="line"><span>git merge FETCH_HEAD</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：fatal: refusing to merge unrelated histories 报错就强制拉取</span></span>
<span class="line"><span>git merge FETCH_HEAD --allow-unrelated-histories</span></span></code></pre></div><blockquote><p>pull 拉取操作(合并本地仓库)</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>普通拉取</span></span>
<span class="line"><span>git pull origin master</span></span>
<span class="line"><span></span></span>
<span class="line"><span>强制拉取</span></span>
<span class="line"><span>git pull origin master --allow-unrelated-histories</span></span></code></pre></div><h3 id="推送操作" tabindex="-1">推送操作 <a class="header-anchor" href="#推送操作" aria-label="Permalink to &quot;推送操作&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>普通推送</span></span>
<span class="line"><span>git push origin master</span></span>
<span class="line"><span></span></span>
<span class="line"><span>强制推送</span></span>
<span class="line"><span>git push origin master --allow-unrelated-histories</span></span></code></pre></div><h3 id="发布标签" tabindex="-1">发布标签 <a class="header-anchor" href="#发布标签" aria-label="Permalink to &quot;发布标签&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git push --tags</span></span></code></pre></div><h3 id="git-stash" tabindex="-1">git stash <a class="header-anchor" href="#git-stash" aria-label="Permalink to &quot;git stash&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>情景1：我在本地修改好后，发现远程分支已经被改动了，此时我本地也被改动了就造成了冲突，无法 push 或者 pull</span></span>
<span class="line"><span>此时，就可以用 git stash 来处理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 把本地的改动暂存起来</span></span>
<span class="line"><span>git stash </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 拉取远程分支（此时本地分支会回滚到上次commit的情况，你的改动都存在stash中）</span></span>
<span class="line"><span>git pull  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 将stash中改动重新加回本地分支，就可以继续修改了，当然，如果改好了就是add,commit,push</span></span>
<span class="line"><span>git stash pop</span></span>
<span class="line"><span>情景2：例如忘记切换，将代码写错了分支，直接在 master 分支上做改动，这里假设我的分支是 test 分支</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 把本地当前改动暂存起来，此时master分支就恢复到了上次拉取时的状态</span></span>
<span class="line"><span>git stash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 切换到需要改动的分支</span></span>
<span class="line"><span>git checkout test</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 将改动pop到自己当前的分支</span></span>
<span class="line"><span>git stash pop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>顾名思义，stash 就是一个栈，平时我们把需要暂存的文件存到栈中，把代码恢复到上次拉取的状态以进行操作。</span></span></code></pre></div><h1 id="gitignore忽略文件" tabindex="-1">gitignore忽略文件 <a class="header-anchor" href="#gitignore忽略文件" aria-label="Permalink to &quot;gitignore忽略文件&quot;">​</a></h1><h3 id="git的忽略文件的语法规则" tabindex="-1">Git的忽略文件的语法规则 <a class="header-anchor" href="#git的忽略文件的语法规则" aria-label="Permalink to &quot;Git的忽略文件的语法规则&quot;">​</a></h3><blockquote><p><strong>.gitignore</strong></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 这是注释行，将被忽略</span></span>
<span class="line"><span>*.a       # 忽略所有以.a为扩展名的文件    </span></span>
<span class="line"><span>!lib.a    # 但是名为lib.a的文件或目录不要忽略，即使前面设置了对*.a的忽略</span></span>
<span class="line"><span>/TODO     # 只忽略此目录下的TODO文件，子目录中的TODO文件不忽略</span></span>
<span class="line"><span>build/    # 忽略所有build目录下的文件，但如果是名为build的文件则不忽略</span></span>
<span class="line"><span>doc/*.txt # 忽略文件如doc/notes.txt，但是文件如doc/server/arch.txt不忽略</span></span></code></pre></div><h3 id="设置好之后-有个关键的步骤一定要清楚缓存提交生效" tabindex="-1">设置好之后，有个关键的步骤一定要清楚缓存提交生效！！！ <a class="header-anchor" href="#设置好之后-有个关键的步骤一定要清楚缓存提交生效" aria-label="Permalink to &quot;设置好之后，有个关键的步骤一定要清楚缓存提交生效！！！&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git rm -r --cached .</span></span>
<span class="line"><span>git add .</span></span>
<span class="line"><span>git commit -m &#39;update .gitignore&#39;</span></span></code></pre></div><h3 id="git通过命令忽略指定文件" tabindex="-1">Git通过命令忽略指定文件 <a class="header-anchor" href="#git通过命令忽略指定文件" aria-label="Permalink to &quot;Git通过命令忽略指定文件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>忽略指定文件</span></span>
<span class="line"><span>git update-index --assume-unchanged ./test.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>取消忽略指定文件</span></span>
<span class="line"><span>git update-index --no-assume-unchanged ./test.txt</span></span></code></pre></div><h1 id="git配置hook钩子自动更新" tabindex="-1">Git配置Hook钩子自动更新 <a class="header-anchor" href="#git配置hook钩子自动更新" aria-label="Permalink to &quot;Git配置Hook钩子自动更新&quot;">​</a></h1><h3 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1、在服务器上提前设置好公钥，步骤请去gitee官网查看</span></span>
<span class="line"><span>2、在服务器的web目录下先提前克隆仓库代码下来</span></span>
<span class="line"><span>3、并设置权限和用户组</span></span>
<span class="line"><span>    sudo chmod -R 777 /home/wwwroot/demo</span></span>
<span class="line"><span>    sudo chown -R www:www /home/wwwroot/demo</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>4、经常有人会忽略.git目录也是需要设置权限和所有组的</span></span>
<span class="line"><span>    cd demo</span></span>
<span class="line"><span>    sudo chmod -R 777 .git/</span></span>
<span class="line"><span>    sudo chown -R www:www .git/</span></span></code></pre></div><h3 id="钩子文件" tabindex="-1">钩子文件 <a class="header-anchor" href="#钩子文件" aria-label="Permalink to &quot;钩子文件&quot;">​</a></h3><blockquote><p>在web站点根目录,新建文件夹<code>/hook/deploy.php</code></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 自动更新钩子</span></span>
<span class="line"><span> **/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//需要修改为自己服务器上项目的路径的</span></span>
<span class="line"><span>$local = &#39;/home/wwwroot/demo.com&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//webhooks中设置的密码</span></span>
<span class="line"><span>$password = &#39;demo&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//获取请求参数</span></span>
<span class="line"><span>$request = file_get_contents(&#39;php://input&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if(empty($request)) </span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    die(&#39;request is empty&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//验证密码是否正确</span></span>
<span class="line"><span>$data = json_decode($request, true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if($data[&#39;password&#39;] != $password) </span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    die(&#39;password is error&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//自己git仓库地址，加上用户名(可以用空间地址,因为用户名一般是邮箱,但是邮箱@符号会被解析)密码防止没有权限</span></span>
<span class="line"><span>//$remote = &#39;https://用户名:密码@gitee.com/xxxxxxx/xxxx.git&#39;;</span></span>
<span class="line"><span>$remote = &#39;https://用户名:密码@gitee.com/xxxxxxx/demo.git&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>exec(&quot;cd {$local} &amp;&amp; git pull {$remote} 2&gt;&amp;1; chmod -R 777 {$local}; chown -R www:www {$local};&quot;, $output);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if(!empty($output) &amp;&amp; is_array($output))</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    $msg = &quot;error: Your local changes to the following files would be overwritten by merge&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $merge = stripos($output[2], $msg);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if($merge !== FALSE)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        shell_exec(&quot;cd {$local} &amp;&amp; git reset --hard;&quot;);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        exec(&quot;cd {$local} &amp;&amp; git pull {$remote} 2&gt;&amp;1; chmod -R 777 {$local}; chown -R www:www {$local};&quot;, $result);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        echo $output[2];</span></span>
<span class="line"><span>    }else</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        echo $output[2];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span> * 以下代码可删除</span></span>
<span class="line"><span> * pull遇到错误 error: Your local changes to the following files would be overwritten by merge:</span></span>
<span class="line"><span> * 执行：git reset --hard 即可</span></span>
<span class="line"><span> * exec 函数要开启  一般默认是禁用的  需要修改 php.ini disable_functions 保存 成功 php-fpm</span></span>
<span class="line"><span> * lnmp 重启fpm  /etc/init.d/php-fpm restart</span></span>
<span class="line"><span> */</span></span></code></pre></div><h3 id="码云部署配置" tabindex="-1">码云部署配置 <a class="header-anchor" href="#码云部署配置" aria-label="Permalink to &quot;码云部署配置&quot;">​</a></h3><p><img src="https://www.quickask.net/dist/assets/images/php/git/hook.png" alt="ajax3"></p><h1 id="git-pull-push免输入密码设置" tabindex="-1">git/pull/push免输入密码设置 <a class="header-anchor" href="#git-pull-push免输入密码设置" aria-label="Permalink to &quot;git/pull/push免输入密码设置&quot;">​</a></h1><p><strong>1、先cd到根目录，执行git config --global credential.helper store命令</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git config --global credential.helper store</span></span></code></pre></div><p><strong>2、执行之后会在.gitconfig文件中多加红色字体项</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[user]</span></span>
<span class="line"><span>        name = xxx</span></span>
<span class="line"><span>        email = xxxx@xxxx.com</span></span>
<span class="line"><span>[credential]</span></span>
<span class="line"><span>        helper = store</span></span></code></pre></div><p><strong>3、之后cd到项目目录，执行git pull命令，会提示输入账号密码。输完这一次以后就不再需要，并且会在根目录生成一个.git-credentials文件</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git pull</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Username for &#39;https://git.oschina.net&#39;: xxxx@xxxx.com</span></span>
<span class="line"><span>Password for &#39;https://xxxx@xxxx.com@git.oschina.net&#39;:</span></span>
<span class="line"><span>cat .git-credentials</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://Username:Password@git.oschina.net</span></span></code></pre></div><p><strong>4、之后pull/push代码都不再需要输入账号密码了~</strong></p><h1 id="git-flow分支管理" tabindex="-1">Git-Flow分支管理 <a class="header-anchor" href="#git-flow分支管理" aria-label="Permalink to &quot;Git-Flow分支管理&quot;">​</a></h1><h3 id="转载支持原创" tabindex="-1">转载支持原创 <a class="header-anchor" href="#转载支持原创" aria-label="Permalink to &quot;转载支持原创&quot;">​</a></h3><ul><li><a href="https://www.jianshu.com/p/36292d36e41d" target="_blank" rel="noreferrer">https://www.jianshu.com/p/36292d36e41dopen in new window</a></li><li><a href="https://timegoesby.top/Git-Flow/" target="_blank" rel="noreferrer">https://timegoesby.top/Git-Flow/open in new window</a></li><li><a href="https://juejin.cn/post/6981033629837164581#heading-12" target="_blank" rel="noreferrer">https://juejin.cn/post/6981033629837164581#heading-12open in new window</a></li></ul><p><img src="https://www.quickask.net/dist/assets/images/php/git/flow.png" alt="flow"></p><h3 id="常用分支" tabindex="-1">常用分支 <a class="header-anchor" href="#常用分支" aria-label="Permalink to &quot;常用分支&quot;">​</a></h3><h4 id="production分支" tabindex="-1">Production分支 <a class="header-anchor" href="#production分支" aria-label="Permalink to &quot;Production分支&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>也就是我们经常使用的Master分支，这个分支是生产环境的代码。</span></span>
<span class="line"><span>这个分支只能从其他分支合并，不能在这个分支直接修改。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Master</span></span></code></pre></div><h4 id="develop分支" tabindex="-1">Develop分支 <a class="header-anchor" href="#develop分支" aria-label="Permalink to &quot;Develop分支&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>这个分支是我们是我们的主开发分支，主要合并其他分支，比如Feature分支</span></span>
<span class="line"><span>Develop -&gt; Master</span></span></code></pre></div><h4 id="feature分支" tabindex="-1">Feature分支 <a class="header-anchor" href="#feature分支" aria-label="Permalink to &quot;Feature分支&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>这个分支主要是用来开发一个新的功能，一旦开发完成，我们将会合并回Develop分支</span></span>
<span class="line"><span>Feature -&gt; Develop -&gt; Master</span></span></code></pre></div><h4 id="release分支" tabindex="-1">Release分支 <a class="header-anchor" href="#release分支" aria-label="Permalink to &quot;Release分支&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>当你需要发布一个新Release的时候，我们基于Develop分支创建一个Release分支，</span></span>
<span class="line"><span>完成Release后，会合并到Master和Develop分支</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Develop == Release</span></span>
<span class="line"><span>Release -&gt; Master</span></span>
<span class="line"><span>Release -&gt; Develop</span></span></code></pre></div><h4 id="hotfix分支" tabindex="-1">Hotfix分支 <a class="header-anchor" href="#hotfix分支" aria-label="Permalink to &quot;Hotfix分支&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>当我们在Production发现新的Bug时候，我们需要创建一个Hotfix, 完成Hotfix后，我们合并回Master和Develop分支</span></span>
<span class="line"><span>所以Hotfix的改动会进入下一个Release</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hotfix -&gt; Master</span></span>
<span class="line"><span>Hotfix -&gt; Develop</span></span></code></pre></div><h3 id="如何使用这些分支" tabindex="-1">如何使用这些分支 <a class="header-anchor" href="#如何使用这些分支" aria-label="Permalink to &quot;如何使用这些分支&quot;">​</a></h3><h4 id="master-devlop分支" tabindex="-1">Master/Devlop分支 <a class="header-anchor" href="#master-devlop分支" aria-label="Permalink to &quot;Master/Devlop分支&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>所有在Master分支上的Commit应该打上Tag，一般情况下Master不存在Commit，Devlop分支基于Master分支创建</span></span></code></pre></div><p><img src="https://www.quickask.net/dist/assets/images/php/git/devlop.png" alt="flow"></p><h4 id="feature分支-1" tabindex="-1">Feature分支 <a class="header-anchor" href="#feature分支-1" aria-label="Permalink to &quot;Feature分支&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Feature分支做完后，必须合并回Develop分支, 合并完分支后一般会删点这个Feature分支，毕竟保留下来意义也不大</span></span></code></pre></div><p><img src="https://www.quickask.net/dist/assets/images/php/git/feature.png" alt="flow"></p><h4 id="release分支-1" tabindex="-1">Release分支 <a class="header-anchor" href="#release分支-1" aria-label="Permalink to &quot;Release分支&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Release分支基于Develop分支创建，创建Release分支之后，我们可以在这个Release分支上测试，修改Bug等。</span></span>
<span class="line"><span>发布Release分支时，合并Release到Master和Develop分支上</span></span>
<span class="line"><span>同时在Master分支上打个Tag记住Release版本号，然后就可以删除Release分支了</span></span></code></pre></div><p><img src="https://www.quickask.net/dist/assets/images/php/git/release.png" alt="flow"></p><h4 id="hotfix分支-1" tabindex="-1">Hotfix分支 <a class="header-anchor" href="#hotfix分支-1" aria-label="Permalink to &quot;Hotfix分支&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>hotfix分支基于Master分支创建，开发完后需要合并回Master和Develop分支，同时在Master上打一个tag</span></span></code></pre></div><p><img src="https://www.quickask.net/dist/assets/images/php/git/hotfix.png" alt="flow"></p><h3 id="安装git-flow" tabindex="-1">安装git-flow <a class="header-anchor" href="#安装git-flow" aria-label="Permalink to &quot;安装git-flow&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Windows (Cygwin): 安装 git-flow, 你需要 wget 和 util-linux</span></span>
<span class="line"><span>wget -q -O - --no-check-certificate https://github.com/nvie/gitflow/raw/develop/contrib/gitflow-installer.sh | bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Linux</span></span>
<span class="line"><span>apt-get install git-flow</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mac Homebrew</span></span>
<span class="line"><span>brew install git-flow-avh</span></span></code></pre></div><h3 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to &quot;初始化&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>进入项目文件夹(.git所在到文件夹)下，输入如下命令</span></span>
<span class="line"><span>git flow init</span></span>
<span class="line"><span></span></span>
<span class="line"><span>接下来设置每个分支的名字，一般不需要更改，按默认的全程回车就好</span></span>
<span class="line"><span></span></span>
<span class="line"><span>创建完之后可以查看一下当前的分支</span></span>
<span class="line"><span>git branch</span></span></code></pre></div><h3 id="开发新功能-feature分支" tabindex="-1">开发新功能(feature分支) <a class="header-anchor" href="#开发新功能-feature分支" aria-label="Permalink to &quot;开发新功能(feature分支)&quot;">​</a></h3><p>需求：新建一个 demo.html 并添加内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git flow feature start 分支名</span></span>
<span class="line"><span>git flow feature finish 分支名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在feature下面创建demo分支 做新功能</span></span>
<span class="line"><span>git flow feature start demo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查看状态，看一下是否有切换分支</span></span>
<span class="line"><span>git status</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后新建demo.html文件,添加并提交</span></span>
<span class="line"><span>git add .</span></span>
<span class="line"><span>git commit -m &quot;create demo.html&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>完成feature下面的demo分支 完成新功能</span></span>
<span class="line"><span>git flow feature finish demo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这个命令会将该feature下的demo分支合并到develop，并自动删除demo分支</span></span></code></pre></div><h3 id="发布-release分支" tabindex="-1">发布(release分支) <a class="header-anchor" href="#发布-release分支" aria-label="Permalink to &quot;发布(release分支)&quot;">​</a></h3><p>需求：新建一个 release.html 并添加内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git flow release start 版本号</span></span>
<span class="line"><span>git flow release finish 版本号</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当在某个阶段，我们的feature都已经完善，并且通过了测试，我们可以将该develop分支进行发布（release）</span></span>
<span class="line"><span>git flow release start 1.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查看状态，看一下是否有切换分支</span></span>
<span class="line"><span>git status</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后新建release.html文件,添加并提交</span></span>
<span class="line"><span>git add .</span></span>
<span class="line"><span>git commit -m &quot;create release.html&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>发布新版本</span></span>
<span class="line"><span>git flow release finish 1.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>该命令会触发如下几个操作</span></span>
<span class="line"><span>    Git-Flow从远程仓库fetch数据以确保本地的数据是最新的</span></span>
<span class="line"><span>    内容被合并到 master 和 develop </span></span>
<span class="line"><span>    发布分支被删除，回到develop</span></span></code></pre></div><h3 id="更新远程分支" tabindex="-1">更新远程分支 <a class="header-anchor" href="#更新远程分支" aria-label="Permalink to &quot;更新远程分支&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git push origin master</span></span>
<span class="line"><span>git push origin develop</span></span>
<span class="line"><span>git push --tags</span></span></code></pre></div><h3 id="修复bug-hotfix分支" tabindex="-1">修复bug(Hotfix分支) <a class="header-anchor" href="#修复bug-hotfix分支" aria-label="Permalink to &quot;修复bug(Hotfix分支)&quot;">​</a></h3><p>git flow基于master分支，用于紧急修复，修改完成后合并到master，develop分支</p><p>需求：新建一个 bug.html 并添加内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git flow hotfix start 分支名</span></span>
<span class="line"><span>git flow hotfix finish 分支名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>创建修补分支</span></span>
<span class="line"><span>git flow hotfix start bug</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查看状态，看一下是否有切换分支</span></span>
<span class="line"><span>git status</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后新建bug.html文件,添加并提交</span></span>
<span class="line"><span>git add .</span></span>
<span class="line"><span>git commit -m &quot;create bug.html&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>完成修复程序</span></span>
<span class="line"><span>git flow hotfix finish bug</span></span>
<span class="line"><span></span></span>
<span class="line"><span>该命令和完成发布非常相似，会进行如下操作：</span></span>
<span class="line"><span>    该修改会同时合并到develop和master（以确保错误不会再次进入下一个版本）</span></span>
<span class="line"><span>    分支被删除，并在此进入develop</span></span></code></pre></div><h1 id="git资源加速" tabindex="-1">Git资源加速 <a class="header-anchor" href="#git资源加速" aria-label="Permalink to &quot;Git资源加速&quot;">​</a></h1><h3 id="查看全局配置-1" tabindex="-1">查看全局配置 <a class="header-anchor" href="#查看全局配置-1" aria-label="Permalink to &quot;查看全局配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git config --global --list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>系统全局git配置文件：.gitconfig</span></span>
<span class="line"><span>一般该文件会放到计算机的家目录，MAC为例的话：/用户/用户名/.gitconfig</span></span></code></pre></div><h3 id="设置git仓库的速度-针对克隆、拉取" tabindex="-1">设置Git仓库的速度(针对克隆、拉取) <a class="header-anchor" href="#设置git仓库的速度-针对克隆、拉取" aria-label="Permalink to &quot;设置Git仓库的速度(针对克隆、拉取)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git项目时，有时速度比较慢，可以设置--depth=1，只要最后一个版本的代码，而不要.git目录中的东西</span></span>
<span class="line"><span>git clone --depth=1 https://github.com/demo/demo.git</span></span></code></pre></div><h3 id="设置git克隆代码的下载量-缓冲区大小" tabindex="-1">设置Git克隆代码的下载量(缓冲区大小) <a class="header-anchor" href="#设置git克隆代码的下载量-缓冲区大小" aria-label="Permalink to &quot;设置Git克隆代码的下载量(缓冲区大小)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>可以根据你需要下载的文件大小，将postBuffer值配置成合适的大小</span></span>
<span class="line"><span>git config --global http.postBuffer 524288000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这样已经配置好了，如果你不确定，可以根据以下命令查看postBuffer</span></span>
<span class="line"><span>git config --list</span></span></code></pre></div><h3 id="设置git克隆最低速度时间-当网络比较慢的情况下试用" tabindex="-1">设置Git克隆最低速度时间，当网络比较慢的情况下试用 <a class="header-anchor" href="#设置git克隆最低速度时间-当网络比较慢的情况下试用" aria-label="Permalink to &quot;设置Git克隆最低速度时间，当网络比较慢的情况下试用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git config --global http.lowSpeedLimit 0</span></span>
<span class="line"><span>git config --global http.lowSpeedTime 999999</span></span></code></pre></div><h3 id="github镜像加速器地址一览" tabindex="-1">GitHub镜像加速器地址一览 <a class="header-anchor" href="#github镜像加速器地址一览" aria-label="Permalink to &quot;GitHub镜像加速器地址一览&quot;">​</a></h3><ul><li>fastgit.org：<a href="https://doc.fastgit.org/" target="_blank" rel="noreferrer">https://doc.fastgit.org/open in new window</a></li><li>gitclone.com：<a href="https://gitclone.com/" target="_blank" rel="noreferrer">https://gitclone.com/open in new window</a></li><li>GitHub 文件加速：<a href="https://mirror.ghproxy.com/" target="_blank" rel="noreferrer">https://mirror.ghproxy.com/open in new window</a></li><li>Github 仓库加速：<a href="https://github.zhlh6.cn/" target="_blank" rel="noreferrer">https://github.zhlh6.cn/open in new window</a></li><li>Github 仓库加速：<a href="http://toolwa.com/github/" target="_blank" rel="noreferrer">http://toolwa.com/github/open in new window</a></li></ul><h3 id="github镜像加速器" tabindex="-1">GitHub镜像加速器 <a class="header-anchor" href="#github镜像加速器" aria-label="Permalink to &quot;GitHub镜像加速器&quot;">​</a></h3><p>直接修改 git 的配置，使用<a href="https://doc.fastgit.org/" target="_blank" rel="noreferrer">FastGitopen in new window</a> 替换所有指向 GitHub 的链接，参考官网的使用配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git config --global url.&quot;https://hub.fastgit.xyz/&quot;.insteadOf &quot;https://github.com/&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git config protocol.https.allow always</span></span></code></pre></div><h3 id="取消github镜像加速器" tabindex="-1">取消GitHub镜像加速器 <a class="header-anchor" href="#取消github镜像加速器" aria-label="Permalink to &quot;取消GitHub镜像加速器&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>取消代理</span></span>
<span class="line"><span>git config --global --unset url.&quot;https://hub.fastgit.xyz/&quot;.insteadOf &quot;https://github.com/&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>直接找到全局的.gitconfig，去掉下面的配置就可以了</span></span>
<span class="line"><span>[url &quot;https://hub.fastgit.xyz/&quot;]</span></span>
<span class="line"><span>    insteadOf = https://github.com/</span></span></code></pre></div><h1 id="git添加第三方秘钥" tabindex="-1">Git添加第三方秘钥 <a class="header-anchor" href="#git添加第三方秘钥" aria-label="Permalink to &quot;Git添加第三方秘钥&quot;">​</a></h1><h3 id="创建秘钥文件" tabindex="-1">创建秘钥文件 <a class="header-anchor" href="#创建秘钥文件" aria-label="Permalink to &quot;创建秘钥文件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ssh-keygen -t rsa -C &quot;你的邮箱&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>或者通过下面的命令可以给秘钥起不同的名字</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ssh-keygen -t gitee -C &quot;你的邮箱&quot;</span></span>
<span class="line"><span>ssh-keygen -t github -C &quot;你的邮箱&quot;</span></span>
<span class="line"><span>填写好自己的邮箱后，然后一路回车。成功执行后，会生成秘钥文件，路径为：用户主目录</span></span>
<span class="line"><span>~/.ssh/id_rsa   私钥文件</span></span>
<span class="line"><span>~/.ssh/id_rsa.pub 公钥文件</span></span></code></pre></div><h3 id="登录github-gitee平台上传自己的秘钥-配置服务端" tabindex="-1">登录github/gitee平台上传自己的秘钥(配置服务端) <a class="header-anchor" href="#登录github-gitee平台上传自己的秘钥-配置服务端" aria-label="Permalink to &quot;登录github/gitee平台上传自己的秘钥(配置服务端)&quot;">​</a></h3><p><img src="https://www.quickask.net/dist/assets/images/php/git/gitee-ssh-key.png" alt="gitee-ssh-key"><img src="https://www.quickask.net/dist/assets/images/php/git/github-key.png" alt="gitee-ssh-key"></p><h3 id="让本机电脑识别秘钥" tabindex="-1">让本机电脑识别秘钥 <a class="header-anchor" href="#让本机电脑识别秘钥" aria-label="Permalink to &quot;让本机电脑识别秘钥&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ssh-add &quot;你的 id-rsa 文件地址&quot;</span></span></code></pre></div><h3 id="添加后秘钥后验证是否关联平台成功-需要联网-gitee-github" tabindex="-1">添加后秘钥后验证是否关联平台成功-需要联网(gitee/github) <a class="header-anchor" href="#添加后秘钥后验证是否关联平台成功-需要联网-gitee-github" aria-label="Permalink to &quot;添加后秘钥后验证是否关联平台成功-需要联网(gitee/github)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>验证github平台是否</span></span>
<span class="line"><span>ssh -T git@github.com</span></span>
<span class="line"><span>Hi xxxxx! You&#39;ve successfully authenticated, but GitHub does not provide shell access.</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ssh -T git@gitee.com</span></span>
<span class="line"><span>Hi xxxxx! You&#39;ve successfully authenticated, but GitHub does not provide shell access.</span></span></code></pre></div><h3 id="github平台将密码换成了token" tabindex="-1">Github平台将密码换成了token <a class="header-anchor" href="#github平台将密码换成了token" aria-label="Permalink to &quot;Github平台将密码换成了token&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git push origin master</span></span>
<span class="line"><span></span></span>
<span class="line"><span>remote: Support for password authentication was removed on August 13, 2021.</span></span>
<span class="line"><span>Please use a personal access token instead.</span></span>
<span class="line"><span>github平台认为，用户在更新(pull) 或者是 推送(push) 代码的时候 使用 用户密码是一种不安全的方式，</span></span>
<span class="line"><span>然后特意将验证机制改为了token秘钥方式来验证</span></span>
<span class="line"><span>我们看一下如何生成 token</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>github登录 -&gt; 右上角菜单 -&gt; settings -&gt; Developer settings -&gt; Personal access tokens</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后选择 Generate new token 生成新token</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最后生成的 token 要自己保存好，因为他只显示一次</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最后就可以在 pull /  push 操作的时候用 token 代替密码了</span></span></code></pre></div><p><img src="https://www.quickask.net/dist/assets/images/php/git/github-token.png" alt="github-key"></p><h1 id="git第三方多秘钥管理" tabindex="-1">Git第三方多秘钥管理 <a class="header-anchor" href="#git第三方多秘钥管理" aria-label="Permalink to &quot;Git第三方多秘钥管理&quot;">​</a></h1><h3 id="前提条件-请看上一章节" tabindex="-1">前提条件-请看上一章节 <a class="header-anchor" href="#前提条件-请看上一章节" aria-label="Permalink to &quot;前提条件-请看上一章节&quot;">​</a></h3><blockquote><ul><li>已经在<code>gihub</code>上面添加好<code>SSH-KEY</code>验证了</li></ul></blockquote><h3 id="git-pull的时候-报错信息" tabindex="-1">git pull的时候，报错信息 <a class="header-anchor" href="#git-pull的时候-报错信息" aria-label="Permalink to &quot;git pull的时候，报错信息&quot;">​</a></h3><p><strong>解决<a href="mailto:git@github.com.Permission" target="_blank" rel="noreferrer">git@github.com.Permission</a> denied (publickey)</strong></p><p><img src="https://www.quickask.net/dist/assets/images/php/git/gitpull.png" alt="gitpull"></p><h3 id="先验证一下key是否有效" tabindex="-1">先验证一下Key是否有效 <a class="header-anchor" href="#先验证一下key是否有效" aria-label="Permalink to &quot;先验证一下Key是否有效&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo ssh -T git@github.com</span></span></code></pre></div><h3 id="如果是下面的结果说明验证失败" tabindex="-1">如果是下面的结果说明验证失败 <a class="header-anchor" href="#如果是下面的结果说明验证失败" aria-label="Permalink to &quot;如果是下面的结果说明验证失败&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>No more authentication methods to try.  </span></span>
<span class="line"><span>Permission denied (publickey).</span></span></code></pre></div><h3 id="然后执行命令" tabindex="-1">然后执行命令 <a class="header-anchor" href="#然后执行命令" aria-label="Permalink to &quot;然后执行命令&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo ssh-agent -s</span></span></code></pre></div><h3 id="接着在执行" tabindex="-1">接着在执行 <a class="header-anchor" href="#接着在执行" aria-label="Permalink to &quot;接着在执行&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo ssh-add ~/.ssh/id_rsa</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这条命令需要注意一下，请确保自己要添加的KEY 是不是这个文件,以我的为例，因为我有：</span></span>
<span class="line"><span>gitee的KEY 和 github的KEY，先去看看目录里面有的key文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ~/.ssh/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>id_rsa</span></span>
<span class="line"><span>id_rsa.pub</span></span>
<span class="line"><span>github_rsa</span></span>
<span class="line"><span>github_rsa.pub</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因为 我要添加的是github的KEY文件 所以我执行的命令是：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo ssh-add ~/.ssh/github_rsa</span></span></code></pre></div><h3 id="是否添加key成功" tabindex="-1">是否添加KEY成功 <a class="header-anchor" href="#是否添加key成功" aria-label="Permalink to &quot;是否添加KEY成功&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Identity added: ...这是ssh key文件路径的信息</span></span></code></pre></div><h3 id="最后再验证一下key" tabindex="-1">最后再验证一下KEY <a class="header-anchor" href="#最后再验证一下key" aria-label="Permalink to &quot;最后再验证一下KEY&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo ssh -T git@github.com</span></span>
<span class="line"><span>$ ssh -T git@github.com</span></span>
<span class="line"><span>Hi xxxxx! You&#39;ve successfully authenticated, but GitHub does not provide shell access.</span></span></code></pre></div><h3 id="git配置多个ssh-key" tabindex="-1">Git配置多个SSH-KEY <a class="header-anchor" href="#git配置多个ssh-key" aria-label="Permalink to &quot;Git配置多个SSH-KEY&quot;">​</a></h3><blockquote><ul><li>在 <code>~/.ssh/</code> 目录下新建一个<code>config</code>文件，添加如下内容（其中<code>Host</code>和<code>HostName</code>填写<code>git</code>服务器的域名，<code>IdentityFile</code>指定私钥的路径）</li></ul></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># gitee</span></span>
<span class="line"><span>Host gitee.com</span></span>
<span class="line"><span>HostName gitee.com</span></span>
<span class="line"><span>PreferredAuthentications publickey</span></span>
<span class="line"><span>IdentityFile ~/.ssh/id_rsa</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># github</span></span>
<span class="line"><span>Host github.com</span></span>
<span class="line"><span>HostName github.com</span></span>
<span class="line"><span>PreferredAuthentications publickey</span></span>
<span class="line"><span>IdentityFile ~/.ssh/github_rsa</span></span></code></pre></div><h3 id="bad-owner-or-permissions-on-ssh-config的解决" tabindex="-1">Bad owner or permissions on .ssh/config的解决 <a class="header-anchor" href="#bad-owner-or-permissions-on-ssh-config的解决" aria-label="Permalink to &quot;Bad owner or permissions on .ssh/config的解决&quot;">​</a></h3><blockquote><ul><li>这个时候，只需要在<code>.ssh</code>目录，执行以下命令行：</li></ul></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo chmod 600 config</span></span></code></pre></div>`,257),i=[t];function l(o,c,h,r,d,g){return n(),s("div",null,i)}const m=a(p,[["render",l]]);export{b as __pageData,m as default};
