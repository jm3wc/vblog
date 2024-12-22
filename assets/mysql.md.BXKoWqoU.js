import{_ as s,c as a,o as n,a2 as p}from"./chunks/framework.CSGcjqEA.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"mysql.md","filePath":"mysql.md"}'),l={name:"mysql.md"},e=p(`<h2 id="快速入门" tabindex="-1">快速入门 <a class="header-anchor" href="#快速入门" aria-label="Permalink to &quot;快速入门&quot;">​</a></h2><h2 id="mysql" tabindex="-1">Mysql <a class="header-anchor" href="#mysql" aria-label="Permalink to &quot;Mysql&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Mysql 是一种关系型数据库系统; 它的安全性和稳定性已足以满足许多应用程序的要求，</span></span>
<span class="line"><span>而且有着非常高的性价比这不仅是因为MySQL本身是免费的.</span></span>
<span class="line"><span>还因为它对硬件性能要求不那么苛刻这些优点使MySQL成为数据库领域里事实上的标准之一.</span></span>
<span class="line"><span>与其他的开源数据库系统相比，MySQL不仅在性能指标方面高出一截，在使用范围方面也远远领先于其他竞争对手</span></span></code></pre></div><h2 id="mysql有什么作用" tabindex="-1">Mysql有什么作用？ <a class="header-anchor" href="#mysql有什么作用" aria-label="Permalink to &quot;Mysql有什么作用？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>MySQL是 开放源码的关系型数据库管理系统。       </span></span>
<span class="line"><span>对数据库进行统一的管理和控制，使用户能方便定义和操纵数据.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>管理工具</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql.exe phpMyAdmin  MySQLDumper  Navicat  MySQL GUI Tools mysqlworkbench</span></span></code></pre></div><h2 id="什么是关系型数据库" tabindex="-1">什么是关系型数据库 <a class="header-anchor" href="#什么是关系型数据库" aria-label="Permalink to &quot;什么是关系型数据库&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>数据被存放在一些结构化的数据表中，而数据表之间形成内在的交叉关系。</span></span>
<span class="line"><span>存在于数据表之间的这种关系使数据库又被称为关系型数据库</span></span></code></pre></div><h2 id="关系型数据库系统" tabindex="-1">关系型数据库系统 <a class="header-anchor" href="#关系型数据库系统" aria-label="Permalink to &quot;关系型数据库系统&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>MySQL、Oracle、Microsoft SQL Server 和IBM DB2都是关系型数据库系统(database system)。</span></span>
<span class="line"><span>除了管理数据，一个这样的系统还包括用来管理各种关系数据库的程序。</span></span>
<span class="line"><span>一个合格的关系数据库系统不仅要确保各种数据的存储情况安全可靠.</span></span>
<span class="line"><span>还必须能够处理对现有数据进行查询、分析和排序以及对新数据进行保存等诸多命令。</span></span></code></pre></div><h2 id="什么是数据库" tabindex="-1">什么是数据库 <a class="header-anchor" href="#什么是数据库" aria-label="Permalink to &quot;什么是数据库&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>数据库(database)是按照数据结构来组织、存储和管理数据的仓库，也是说数据库是一个由一批数据构成的有序集合，</span></span>
<span class="line"><span>这个集合通常被保存为一个或多个彼此相关的数据表。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>也可以说数据库是一个以某种有组织的方式存储的数据集合。理解数据库的一种最简单的办法是将其想象为一个文件柜。</span></span>
<span class="line"><span>此文件柜是一个存放数据的物理位置，不管数据是什么以及如何组织的。</span></span></code></pre></div><h2 id="表" tabindex="-1">表 <a class="header-anchor" href="#表" aria-label="Permalink to &quot;表&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>将资料放入自己的文件柜时，并不是随便将它们扔进某个抽屉就完事了，</span></span>
<span class="line"><span>而是在文件柜中创建文件，然后将相关的资料放入特定的文件中。</span></span>
<span class="line"><span>在数据库领域中，这种文件称为表。表是一种结构化的文件，可用来存储某种特定类型的数据。</span></span>
<span class="line"><span>表可以保存顾客清单、产品目录，或者其他信息清单。</span></span>
<span class="line"><span>这里关键的一点在于，数据库中的每个表都有一个名字，用来标识自己。此名字是唯一的。</span></span></code></pre></div><h2 id="列和数据类型" tabindex="-1">列和数据类型 <a class="header-anchor" href="#列和数据类型" aria-label="Permalink to &quot;列和数据类型&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>表由列组成。列中存储着表中某部分的信息。</span></span>
<span class="line"><span>理解列的最好办法是将数据库表想象为一个网格。网格中每一列存储着一条特定的信息。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>数据库中每个列都有相应的数据类型。数据类型定义列可以存储的数据种类。</span></span>
<span class="line"><span>例如，如果列中存储的为数字（或许是订单中的物品数），则相应的数据类型应该为数值类型。</span></span>
<span class="line"><span>如果列中存储的是日期、文本、注释、金额等，则应该用恰当的数据类型规定出来。</span></span></code></pre></div><h2 id="行" tabindex="-1">行 <a class="header-anchor" href="#行" aria-label="Permalink to &quot;行&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>表中的数据是按行存储的，所保存的每个记录存储在自己的行内。</span></span>
<span class="line"><span>如果将表想象为网格，网格中垂直的列为表列，水平行为表行。</span></span>
<span class="line"><span>例如，顾客表可以每行存储一个顾客。表中的行数为记录的总数。</span></span></code></pre></div><h2 id="主键" tabindex="-1">主键 <a class="header-anchor" href="#主键" aria-label="Permalink to &quot;主键&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>表中每一行都应该有可以唯一标识自己的一列（或一组列）。</span></span>
<span class="line"><span>一个顾客表可以使用顾客ID列，而订单表可以使用订单ID</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意</span></span>
<span class="line"><span>    任意两行都不具有相同的主键值；</span></span>
<span class="line"><span>    每个行都必须具有一个主键值（主键列不允许NULL值）</span></span>
<span class="line"><span>    不更新主键列中的值</span></span>
<span class="line"><span>    不重用主键列的值</span></span></code></pre></div><h2 id="外键" tabindex="-1">外键 <a class="header-anchor" href="#外键" aria-label="Permalink to &quot;外键&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>如果公共关键字在一个关系中是主关键字，那么这个公共关键字被称为另一个关系的外键。           </span></span>
<span class="line"><span>由此可见，外键表示了两个关系之间的联系。以另一个关系的外键作主关键字的表被称为主表，          </span></span>
<span class="line"><span>具有此外键的表被称为主表的从表。           </span></span>
<span class="line"><span>外键的作用是引用另一个数据表的某条记录; 使两张表形成关联</span></span></code></pre></div><h2 id="实体属性" tabindex="-1">实体属性 <a class="header-anchor" href="#实体属性" aria-label="Permalink to &quot;实体属性&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>实体：客观存在并可相互区别的事物称为实体。实体可以是具体的人、事、物，也可以是抽象的概念或联系.</span></span>
<span class="line"><span>属性：实体所具有的某一特性称为属性。一个实体可以由若干个属性来描述。</span></span></code></pre></div><h2 id="数据表的关系" tabindex="-1">数据表的关系 <a class="header-anchor" href="#数据表的关系" aria-label="Permalink to &quot;数据表的关系&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1:1                        </span></span>
<span class="line"><span>    第一个数据表里的一条数据记录对应着第二个数据表里的一条数据记录，</span></span>
<span class="line"><span>    同时第二个数据表里的每一条数据记录也分别对应着第一个数据表里的一条数据记录          </span></span>
<span class="line"><span>1:n            </span></span>
<span class="line"><span>    第一个数据表里的一条数据记录对应着第二个数据表的多条记录         </span></span>
<span class="line"><span>n:m         </span></span>
<span class="line"><span>    第一个数据表里的一条记录对应着第二个数据表里的多条记录，</span></span>
<span class="line"><span>    同时第二个数据表里的一条记录也可以对应着第一个数据表的多条记录。</span></span></code></pre></div><h2 id="数据库的构建" tabindex="-1">数据库的构建 <a class="header-anchor" href="#数据库的构建" aria-label="Permalink to &quot;数据库的构建&quot;">​</a></h2><h2 id="模型文件以及sql文件下载" tabindex="-1">模型文件以及SQL文件下载 <a class="header-anchor" href="#模型文件以及sql文件下载" aria-label="Permalink to &quot;模型文件以及SQL文件下载&quot;">​</a></h2><p><a href="http://web.wdwangke.com/mdwork/backend/mysql/company.zip" target="_blank" rel="noreferrer"><strong>company文件</strong></a></p><h2 id="创建一个数据库需要准备什么" tabindex="-1">创建一个数据库需要准备什么 <a class="header-anchor" href="#创建一个数据库需要准备什么" aria-label="Permalink to &quot;创建一个数据库需要准备什么&quot;">​</a></h2><h2 id="_1-数据库设计要求" tabindex="-1">1.数据库设计要求 <a class="header-anchor" href="#_1-数据库设计要求" aria-label="Permalink to &quot;1.数据库设计要求&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1.一个好的数据库设计方案应该满足以下几项要求：</span></span>
<span class="line"><span>    数据表里没有重复冗余的数据;</span></span>
<span class="line"><span>    数据表里没有 等重复的数据列;</span></span>
<span class="line"><span>    数据表的空间占用总量越小越好; order1, order2, order3</span></span>
<span class="line"><span>    使用频率高的查询都能以简单高效的方式执行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.命名要求</span></span>
<span class="line"><span>    MySQL对数据列的名字不区分大小写，但对数据库和数据表的名字区分大小写;</span></span>
<span class="line"><span>    数据库、数据表和数据列名字的长度最多不能超过64个字符;</span></span>
<span class="line"><span>    在名字里要避免使用特殊字符;</span></span>
<span class="line"><span>    数据表和数据列的名字应该有意义;</span></span></code></pre></div><h2 id="_2-设计数据库-以公司通信录来设计数据库-数据表" tabindex="-1">2.设计数据库，以公司通信录来设计数据库，数据表 <a class="header-anchor" href="#_2-设计数据库-以公司通信录来设计数据库-数据表" aria-label="Permalink to &quot;2.设计数据库，以公司通信录来设计数据库，数据表&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1，挑实体 </span></span>
<span class="line"><span>2，拉关系</span></span>
<span class="line"><span>3，建库，建表、把实体变成表，把属性变成字段</span></span>
<span class="line"><span>4，1:n  把 1 这边的主键 放到 n 这边做外键</span></span>
<span class="line"><span>5，m:n 把两边的主键放到一个新的关系表 里 做外键</span></span></code></pre></div><h2 id="_3-实体和实体属性" tabindex="-1">3.实体和实体属性 <a class="header-anchor" href="#_3-实体和实体属性" aria-label="Permalink to &quot;3.实体和实体属性&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>person 员工表</span></span>
<span class="line"><span></span></span>
<span class="line"><span>id            员工id</span></span>
<span class="line"><span>name        员工名字</span></span>
<span class="line"><span>avatar        员工头像</span></span>
<span class="line"><span>mobile        手机号</span></span>
<span class="line"><span>sex            性别(1：男 2：女)</span></span>
<span class="line"><span>email        邮箱</span></span>
<span class="line"><span>address        地址</span></span>
<span class="line"><span>depid        部门id(外键)</span></span>
<span class="line"><span>jobid        职位id(外键)</span></span>
<span class="line"><span>createtime    入职时间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>department 部门表</span></span>
<span class="line"><span></span></span>
<span class="line"><span>id            部门id</span></span>
<span class="line"><span>name        部门名称</span></span>
<span class="line"><span></span></span>
<span class="line"><span>job  职位表</span></span>
<span class="line"><span></span></span>
<span class="line"><span>id        职位id</span></span>
<span class="line"><span>name    职位名称</span></span>
<span class="line"><span>depid    部门id(外键)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>admin 管理员表</span></span>
<span class="line"><span></span></span>
<span class="line"><span>id            管理员id</span></span>
<span class="line"><span>username    管理员名称</span></span>
<span class="line"><span>password    密码</span></span>
<span class="line"><span>avatar        头像</span></span>
<span class="line"><span>salt        密码盐</span></span></code></pre></div><h2 id="_4-拉关系" tabindex="-1">4.拉关系 <a class="header-anchor" href="#_4-拉关系" aria-label="Permalink to &quot;4.拉关系&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>员工与部门的关系</span></span>
<span class="line"><span></span></span>
<span class="line"><span>员工    部门  1:1</span></span>
<span class="line"><span>部门    员工  1:n</span></span>
<span class="line"><span></span></span>
<span class="line"><span>员工与职位的关系</span></span>
<span class="line"><span></span></span>
<span class="line"><span>员工    职位  1:1</span></span>
<span class="line"><span>职位    员工  1:n</span></span>
<span class="line"><span></span></span>
<span class="line"><span>职位与部门的关系</span></span>
<span class="line"><span></span></span>
<span class="line"><span>职位    部门  1:1</span></span>
<span class="line"><span>部门    职位  1:n</span></span></code></pre></div><h5 id="下面用navicat来建库-建表" tabindex="-1">下面用Navicat来建库，建表 <a class="header-anchor" href="#下面用navicat来建库-建表" aria-label="Permalink to &quot;下面用Navicat来建库，建表&quot;">​</a></h5><p><strong>1.用Navicat创建一个数据库，把鼠标的箭头指向本地数据库再点击鼠标右键选择新建数据库,名为company</strong></p><p><img src="http://web.wdwangke.com/mdphoto/backend/backend/mysql/Navicat.png" alt="img"></p><p><strong>2.新建模型图</strong></p><p><img src="http://web.wdwangke.com/mdphoto/backend/backend/mysql/Navicat01.png" alt="img"></p><p><strong>3.新建表</strong></p><p><img src="http://web.wdwangke.com/mdphoto/backend/backend/mysql/Navicat02.png" alt="img"></p><p><strong>4.新建字段</strong></p><p>·<img src="http://web.wdwangke.com/mdphoto/backend/backend/mysql/Navicat03.png" alt="img"></p><p><strong>5.新建索引</strong></p><p>·<img src="http://web.wdwangke.com/mdphoto/backend/backend/mysql/Navicat04.png" alt="img"></p><p><strong>6.新建外键</strong></p><p>·<img src="http://web.wdwangke.com/mdphoto/backend/backend/mysql/Navicat05.png" alt="img"></p><p><strong>7.选项</strong></p><p>·<img src="http://web.wdwangke.com/mdphoto/backend/backend/mysql/Navicat06.png" alt="img"></p><p><strong>8.模型图</strong></p><p><img src="http://web.wdwangke.com/mdphoto/backend/backend/mysql/Navicat07.png" alt="img"></p><p><strong>9.建完模型后点击文件—&gt;导出SQL</strong></p><p><img src="http://web.wdwangke.com/mdphoto/backend/backend/mysql/Navicat08.png" alt="img"></p><hr><p><strong>10.选择company数据库右键点击运行SQL文件</strong></p><p><img src="http://web.wdwangke.com/mdphoto/backend/backend/mysql/Navicat09.png" alt="img"></p><h2 id="数据库的结构" tabindex="-1">数据库的结构 <a class="header-anchor" href="#数据库的结构" aria-label="Permalink to &quot;数据库的结构&quot;">​</a></h2><h2 id="表引擎" tabindex="-1">表引擎 <a class="header-anchor" href="#表引擎" aria-label="Permalink to &quot;表引擎&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>MySQL的强大之处在于它的插件式存储引擎，我们可以基于表的特点使用不同的存储引擎，从而达到最好的性能。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql在创建表的时候，可以指定对应的引擎。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在mysql命令中使用：show engines;可以查看到当前服务器支持的所有引擎。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用哪一种引擎需要灵活选择，一个数据库中多个表可以使用不同引擎以满足各种性能和实际需求，</span></span>
<span class="line"><span>使用合适的存储引擎，将会提高整个数据库的性能</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们介绍几种表引擎</span></span></code></pre></div><h2 id="myisam" tabindex="-1">MyISAM <a class="header-anchor" href="#myisam" aria-label="Permalink to &quot;MyISAM&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>MyISAM 存储引擎独立于操作系统，也就是可以在windows上使用，也可以比较简单的将数据转移到linux操作系统上去。</span></span>
<span class="line"><span>这种存储引擎在创建表的时候，会创建三个文件，一个是.frm文件用于存储表的定义，</span></span>
<span class="line"><span>一个是.MYD文件用于存储表的数据，另一个是.MYI文件，存储的是索引。</span></span>
<span class="line"><span>操作系统对大文件的操作是比较慢的，这样将表分为三个文件，</span></span>
<span class="line"><span>那么.MYD这个文件单独来存放数据自然可以优化数据库的查询等操作。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.不支持事务，但是并不代表着有事务操作的项目不能用MyISAM存储引擎，</span></span>
<span class="line"><span>  可以在service层进行根据自己的业务需求进行相应的控制。</span></span>
<span class="line"><span>2.不支持外键。</span></span>
<span class="line"><span>3.查询速度很快，如果数据库insert和update的操作比较多的话比较适用。</span></span>
<span class="line"><span>4.对表进行加锁。</span></span></code></pre></div><h2 id="innodb" tabindex="-1">InnoDB <a class="header-anchor" href="#innodb" aria-label="Permalink to &quot;InnoDB&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>可以把InnoDB看做是MyISAM的一种更新换代产品，它增加了以下几种新功能:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>事务：InnoDB数据表里的数据库操作可以被执行为一个事务，</span></span>
<span class="line"><span>这将允许把几条有着内在逻辑关系的SQL命令当做一个整体来执行。</span></span>
<span class="line"><span>如果在执行时发行错误，所有的命令都将失效，就好像从未执行过这些命令;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>数据行级锁定机制：在执行一个事务的时候，InnoDB数据表的驱动程序使用的是</span></span>
<span class="line"><span>它自已内建的数据行级锁定机制（不是MySQL提供的数据表级锁定机制）。</span></span>
<span class="line"><span>也就是说，在事务的过程中数据表是不会被锁定的，</span></span>
<span class="line"><span>其他用户仍可以访问它，被锁定的只是正在接受事务处理的数据记录;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>外键约束条件：如果在数据表之间定义了关系，InnoDB驱动程序将自动保证数据表的引用</span></span>
<span class="line"><span>一致性在执行过DELETE命令之后也能保持。</span></span>
<span class="line"><span>也就是说，不可能出现数据表A里的一条记录引用了数据表B里一条不复存在的记录的问题。</span></span>
<span class="line"><span>用数据库的术语来讲，这一功能叫做”外键约束条件“;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>崩溃恢复：在发生崩溃后，InnoDB数据表能够迅速地自动恢复到一个稳定可用的状态</span></span>
<span class="line"><span>        （前提是计算机文件系统没有被破坏）;</span></span></code></pre></div><h2 id="memory" tabindex="-1"><strong>Memory</strong> <a class="header-anchor" href="#memory" aria-label="Permalink to &quot;**Memory**&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>将数据存在内存，为了提高数据的访问速度，每一个表实际上和一个磁盘文件关联。文件是frm。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（1）支持的数据类型有限制，比如：不支持TEXT和BLOB类型，对于字符串类型的数据，</span></span>
<span class="line"><span>    只支持固定长度的行，VARCHAR会被自动存储为CHAR类型；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（2）支持的锁粒度为表级锁。所以，在访问量比较大时，表级锁会成为MEMORY存储引擎的瓶颈；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（3）由于数据是存放在内存中，一旦服务器出现故障，数据都会丢失；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（4）查询的时候，如果有用到临时表，而且临时表中有BLOB，TEXT类型的字段，</span></span>
<span class="line"><span>    那么这个临时表就会转化为MyISAM类型的表，性能会急剧降低；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（5）默认使用hash索引。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（6）如果一个内部表很大，会转化为磁盘表。</span></span></code></pre></div><h2 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>我们把表中的每一行叫做一个“记录”，每一个记录包含这行中的所有信息，</span></span>
<span class="line"><span>就像在通讯录数据库中某个人全部的信息，但记录在数据库中并没有专门的记录名，</span></span>
<span class="line"><span>常常用它所在的行数表示这是第几个记录。字段是比记录更小的单位，字段集合组成记录，</span></span>
<span class="line"><span>每个字段描述文献的某一特征，即数据项，并有唯一的供计算机识别的字段标识符。</span></span></code></pre></div><h2 id="字段的数据类型" tabindex="-1">字段的数据类型 <a class="header-anchor" href="#字段的数据类型" aria-label="Permalink to &quot;字段的数据类型&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>MySQL中存的是数据。只要是数据，我们就会规定数据的类型。在表的字段中规定了使用的是某个数据类型。</span></span>
<span class="line"><span>那么，在插入的数据中就要使用对应的数据类型。并且，遵守数据类型的长度要求。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在MySQL里面我们将数据类型分为了以下一些类型：</span></span>
<span class="line"><span>1、数值类型（整型、浮点）</span></span>
<span class="line"><span>2、字符串类型</span></span>
<span class="line"><span>3、日期时间类型</span></span>
<span class="line"><span>4、复合类型</span></span>
<span class="line"><span>5、空间类型（非科学性工作基本不用，不做讲解）</span></span></code></pre></div><h2 id="整型" tabindex="-1">整型 <a class="header-anchor" href="#整型" aria-label="Permalink to &quot;整型&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">MySQL数据类型</th><th style="text-align:left;">所占字节</th><th style="text-align:left;">值范围</th></tr></thead><tbody><tr><td style="text-align:left;">tinyint</td><td style="text-align:left;">1字节</td><td style="text-align:left;">-128~127</td></tr><tr><td style="text-align:left;">smallint</td><td style="text-align:left;">2字节</td><td style="text-align:left;">-32768~32767</td></tr><tr><td style="text-align:left;">mediumint</td><td style="text-align:left;">3字节</td><td style="text-align:left;">-8388608~8388607</td></tr><tr><td style="text-align:left;">int</td><td style="text-align:left;">4字节</td><td style="text-align:left;">范围-2147483648~2147483647</td></tr><tr><td style="text-align:left;">bigint</td><td style="text-align:left;">8字节</td><td style="text-align:left;">±9.22*10的18次方</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>整型的长度不同，在实际使用过程也就不同。</span></span>
<span class="line"><span>MySQL 以一个可选的显示宽度指示器的形式对 SQL 标准进行扩展，这样当从数据库检索一个值时，</span></span>
<span class="line"><span>可以把这个值加长到指定的长度。例如，指定一个字段的类型为 INT(6)，</span></span>
<span class="line"><span>就可以保证所包含数字少于 6 个的值从数据库中检索出来时能够自动地用空格填充。</span></span>
<span class="line"><span>需要注意的是，使用一个宽度指示器不会影响字段的大小和它可以存储的值的范围。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1、同样人类年龄也是，在创建表字段时可用用无符号的整型。因为人类的年龄还没有负数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、在实际使用过程中。我们业务中最大需要存储多大的数值。我们创建表时，就选择什么样的类型来存储这样的值。</span></span></code></pre></div><h2 id="浮点类型" tabindex="-1">浮点类型 <a class="header-anchor" href="#浮点类型" aria-label="Permalink to &quot;浮点类型&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">MySQL数据类型</th><th style="text-align:left;">所占字节</th><th style="text-align:left;">值范围</th></tr></thead><tbody><tr><td style="text-align:left;">float(m, d)</td><td style="text-align:left;">4字节</td><td style="text-align:left;">单精度浮点型，m总个数，d小数位</td></tr><tr><td style="text-align:left;">double(m, d)</td><td style="text-align:left;">8字节</td><td style="text-align:left;">双精度浮点型，m总个数，d小数位</td></tr><tr><td style="text-align:left;">decimal(m, d)</td><td style="text-align:left;"></td><td style="text-align:left;">decimal是存储为字符串的浮点数</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>注意：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.浮点是非精确值，会存在不太准确的情况</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.而decimal叫做定点数。在MySQL内部，本质上是用字符串存储的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实际使用过程中如果存在金额、钱精度要求比较高的浮点数存储，建议使用decimal（定点数）这个类型。</span></span></code></pre></div><h2 id="字符类型" tabindex="-1">字符类型 <a class="header-anchor" href="#字符类型" aria-label="Permalink to &quot;字符类型&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">MySQL数据类型</th><th style="text-align:left;">所占字节</th><th style="text-align:left;">值范围</th></tr></thead><tbody><tr><td style="text-align:left;">CHAR</td><td style="text-align:left;">0-255字节</td><td style="text-align:left;">定长字符串</td></tr><tr><td style="text-align:left;">VARCHAR</td><td style="text-align:left;">0-255字节</td><td style="text-align:left;">变长字符串</td></tr><tr><td style="text-align:left;">TINYBLOB</td><td style="text-align:left;">0-255字节</td><td style="text-align:left;">不超过255个字符的二进制字符串</td></tr><tr><td style="text-align:left;">TINYTEXT</td><td style="text-align:left;">0-255字节</td><td style="text-align:left;">短文本字符串</td></tr><tr><td style="text-align:left;">BLOB</td><td style="text-align:left;">0-65535字节</td><td style="text-align:left;">二进制形式的长文本数据</td></tr><tr><td style="text-align:left;">TEXT</td><td style="text-align:left;">0-65535字节</td><td style="text-align:left;">长文本数据</td></tr><tr><td style="text-align:left;">MEDIUMBLOB</td><td style="text-align:left;">0-16 777 215字节</td><td style="text-align:left;">二进制形式的中等长度文本数据</td></tr><tr><td style="text-align:left;">MEDIUMTEXT</td><td style="text-align:left;">0-16 777 215字节</td><td style="text-align:left;">中等长度文本数据</td></tr><tr><td style="text-align:left;">LOGNGBLOB</td><td style="text-align:left;">0-4 294 967 295字节</td><td style="text-align:left;">二进制形式的极大文本数据</td></tr><tr><td style="text-align:left;">LONGTEXT</td><td style="text-align:left;">0-4 294 967 295字节</td><td style="text-align:left;">极大文本数据</td></tr><tr><td style="text-align:left;">VARBINARY(M)</td><td style="text-align:left;">允许长度0-M个字节的定长字节符串</td><td style="text-align:left;">值的长度+1个字节</td></tr><tr><td style="text-align:left;">BINARY(M)</td><td style="text-align:left;">M</td><td style="text-align:left;">允许长度0-M个字节的定长字节符串</td></tr></tbody></table><p><strong>CHAR</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>类型用于定长字符串，并且必须在圆括号内用一个大小修饰符来定义。</span></span>
<span class="line"><span>这个大小修饰符的范围从 0-255。比指定长度大的值将被截短，</span></span>
<span class="line"><span>而比指定长度小的值将会用空格作填补。</span></span></code></pre></div><p><strong>VARCHAR</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>把这个大小视为值的大小，在长度不足的情况下就用空格补足。</span></span>
<span class="line"><span>而 VARCHAR 类型把它视为最大值并且只使用存储字符串实际需要的长度</span></span>
<span class="line"><span>类型不会被空格填补，但长于指示器的值仍然会被截短。</span></span>
<span class="line"><span>因为 VARCHAR 类型可以根据实际内容动态改变存储值的长度，</span></span>
<span class="line"><span>所以在不能确定字段需要多少字符时使用 VARCHAR 类型可以大大地节约磁盘空间、提高存储效率。</span></span>
<span class="line"><span>4.0版本以下，varchar(20)，指的是20字节，如果存放UTF8汉字时，只能存6个（每个汉字3字节）</span></span>
<span class="line"><span>5.0版本以上，varchar(20)，指的是20字符，无论存放的是数字、字母还是UTF8汉字（每个汉字3字节），</span></span>
<span class="line"><span>都可以存放20个，最大大小是65532字节</span></span></code></pre></div><p><strong>text类型与blob类型</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>对于字段长度要求超过 255 个的情况下，MySQL 提供了 TEXT 和 BLOB 两种类型。</span></span>
<span class="line"><span>根据存储数据的大小，它们都有不同的子类型。这些大型的数据用于存储文本块或图像、</span></span>
<span class="line"><span>声音文件等二进制数据类型。</span></span>
<span class="line"><span>TEXT 和 BLOB 类型在分类和比较上存在区别。</span></span>
<span class="line"><span>BLOB 类型区分大小写，而 TEXT 不区分大小写。大小修饰符不用于各种 BLOB 和 TEXT 子类型。</span></span></code></pre></div><h2 id="时间类型" tabindex="-1">时间类型 <a class="header-anchor" href="#时间类型" aria-label="Permalink to &quot;时间类型&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">MySQL数据类型</th><th style="text-align:left;">所占字节</th><th style="text-align:left;">值范围</th></tr></thead><tbody><tr><td style="text-align:left;">date</td><td style="text-align:left;">3字节</td><td style="text-align:left;">日期，格式：2014-09-18</td></tr><tr><td style="text-align:left;">time</td><td style="text-align:left;">3字节</td><td style="text-align:left;">时间，格式：08:42:30</td></tr><tr><td style="text-align:left;">datetime</td><td style="text-align:left;">8字节</td><td style="text-align:left;">日期时间，格式：2014-09-18 08:42:30</td></tr><tr><td style="text-align:left;">timestamp</td><td style="text-align:left;">4字节</td><td style="text-align:left;">自动存储记录修改的时间</td></tr><tr><td style="text-align:left;">year</td><td style="text-align:left;">1字节</td><td style="text-align:left;">年份</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>注意：</span></span>
<span class="line"><span>1、时间类型在web系统中用的比较少，很多时候很多人喜欢使用int来存储时间。</span></span>
<span class="line"><span>   插入时插入的是unix时间戳，因为这种方式更方便计算。在前端业务中用date类型的函数，</span></span>
<span class="line"><span>   再将unix时间戳转成人们可识别的时间。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、上面的类型你可以根据实际情况实际进行选择</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3、有些人为了在数据库管理中方便查看，也有人使用datetime类型来存储时间。</span></span></code></pre></div><h2 id="复合类型" tabindex="-1">复合类型 <a class="header-anchor" href="#复合类型" aria-label="Permalink to &quot;复合类型&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">MySQL数据类型</th><th style="text-align:left;">所占字节</th><th style="text-align:left;">值范围</th></tr></thead><tbody><tr><td style="text-align:left;">set</td><td style="text-align:left;">集合类型</td><td style="text-align:left;">set(“member”, “member2″, … “member64″)</td></tr><tr><td style="text-align:left;">enum</td><td style="text-align:left;">枚举类型</td><td style="text-align:left;">enum(“member1″, “member2″, … “member65535″)</td></tr></tbody></table><p>一个 ENUM 类型只允许从一个集合中取得一个值；而 SET 类型允许从一个集合中取得任意多个值</p><h2 id="enum-类型" tabindex="-1">ENUM 类型 <a class="header-anchor" href="#enum-类型" aria-label="Permalink to &quot;ENUM 类型&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ENUM 类型因为只允许在集合中取得一个值，有点类似于单选项。</span></span>
<span class="line"><span>在处理相互排拆的数据时容易让人理解，比如人类的性别。</span></span>
<span class="line"><span>ENUM 类型字段可以从集合中取得一个值或使用null值，</span></span>
<span class="line"><span>除此之外的输入将会使 MySQL 在这个字段中插入一个空字符串。</span></span>
<span class="line"><span>另外如果插入值的大小写与集合中值的大小写不匹配，</span></span>
<span class="line"><span>MySQL会自动使用插入值的大小写转换成与集合中大小写一致的值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ENUM 类型在系统内部可以存储为数字，并且从1开始用数字做索引。</span></span>
<span class="line"><span>一个 ENUM 类型最多可以包含 65536 个元素，其中一个元素被 MySQL 保留，</span></span>
<span class="line"><span>用来存储错误信息，这个错误值用索引 0 或者一个空字符串表示。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MySQL 认为 ENUM 类型集合中出现的值是合法输入，除此之外其它任何输入都将失败。</span></span>
<span class="line"><span>这说明通过搜索包含空字符串或对应数字索引为 0 的行就可以很容易地找到错误记录的位置。</span></span></code></pre></div><h2 id="set-类型" tabindex="-1">SET 类型 <a class="header-anchor" href="#set-类型" aria-label="Permalink to &quot;SET 类型&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>SET 类型与 ENUM 类型相似但不相同。SET类型可以从预定义的集合中取得任意数量的值。</span></span>
<span class="line"><span>并且与 ENUM 类型相同的是任何试图在 SET 类型字段中插入非预定义的值都会使MySQL插入一个空字符串。</span></span>
<span class="line"><span>如果插入一个即有合法的元素又有非法的元素的记录，MySQL 将会保留合法的元素，除去非法的元素。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>一个 SET 类型最多可以包含 64 个元素。在 SET 元素中值被存储为一个分离的“位”序列，</span></span>
<span class="line"><span>这些“位”表示与它相对应的元素。</span></span>
<span class="line"><span>“位”是创建有序元素集合的一种简单而有效的方式。</span></span>
<span class="line"><span>并且它还去除了重复的元素，所以SET类型中不可能包含两个相同的元素。</span></span>
<span class="line"><span>希望从 SET 类型字段中找出非法的记录只需查找包含空字符串或二进制值为 0 的行。</span></span></code></pre></div><h2 id="字段其他属性设置" tabindex="-1">字段其他属性设置 <a class="header-anchor" href="#字段其他属性设置" aria-label="Permalink to &quot;字段其他属性设置&quot;">​</a></h2><h4 id="unsigned" tabindex="-1">UNSIGNED <a class="header-anchor" href="#unsigned" aria-label="Permalink to &quot;UNSIGNED&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>UNSIGNED（无符号）</span></span>
<span class="line"><span>主要用于整型和浮点类型，使用无符号。即，没有前面面的-（负号）。</span></span></code></pre></div><h4 id="zerofill" tabindex="-1">ZEROFILL <a class="header-anchor" href="#zerofill" aria-label="Permalink to &quot;ZEROFILL&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>如果宽度小于设定的宽度，则自动填充0，要注意的是，这只是最后显示的结果，</span></span>
<span class="line"><span>在MYSQL中 实际存储的还是1.</span></span></code></pre></div><h4 id="default" tabindex="-1">default <a class="header-anchor" href="#default" aria-label="Permalink to &quot;default&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>可以使用DEFAULT为字段设定一个默认值，</span></span>
<span class="line"><span>当插入记录时，当忘记传该字段的值时，MySQL 会自动为您设置上该字段的默认值</span></span>
<span class="line"><span>default属性确保在没有任何值可用的情况下，赋予某个常量值，这个值必须是常量，</span></span>
<span class="line"><span>因为MySQL不允许插入函数或表达式值。</span></span>
<span class="line"><span>此外，此属性无法用于BLOB或TEXT列。如果已经为此列指定了NULL属性，没有指定默认值时默认值将为NULL，</span></span>
<span class="line"><span>否则默认值将依赖于字段的数据类型。</span></span></code></pre></div><h4 id="not-null" tabindex="-1">not null <a class="header-anchor" href="#not-null" aria-label="Permalink to &quot;not null&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>如果某一个字段设置not null，只能插入空值，不能插入null，</span></span>
<span class="line"><span>因为null并不是空值，而是要占用空间。</span></span>
<span class="line"><span>建议在重要情况下始终使用not null属性，因为它提供了一个基本验证，</span></span>
<span class="line"><span>确保已经向查询传递了所有必要的值。</span></span></code></pre></div><h4 id="null" tabindex="-1">null <a class="header-anchor" href="#null" aria-label="Permalink to &quot;null&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>为列指定null属性时，该列可以保持为空，而不论行中其它列是否已经被填充。</span></span>
<span class="line"><span>记住，null精确的说法是“无”，而不是空字符串或0。</span></span></code></pre></div><h2 id="索引" tabindex="-1">索引 <a class="header-anchor" href="#索引" aria-label="Permalink to &quot;索引&quot;">​</a></h2><h2 id="什么是索引" tabindex="-1">什么是索引 <a class="header-anchor" href="#什么是索引" aria-label="Permalink to &quot;什么是索引&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>索引是对数据库表中一列或多列的值进行排序的一种结构，使用索引可快速访问数据库表中的特定信息。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>举例说明索引：如果把数据库中的某一张看成一本书，那么索引就像是书的目录，</span></span>
<span class="line"><span>可以通过目录快速查找书中指定内容的位置，对于数据库表来说，可以通过索引快速查找表中的数据。</span></span></code></pre></div><h2 id="索引的优缺点" tabindex="-1">索引的优缺点 <a class="header-anchor" href="#索引的优缺点" aria-label="Permalink to &quot;索引的优缺点&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>优：</span></span>
<span class="line"><span>    1.建立索引的列可以保证行的唯一性，生成唯一的rowId</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    2.建立索引可以有效缩短数据的检索时间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    3.建立索引可以加快表与表之间的连接</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    4.为用来排序或者是分组的字段添加索引可以加快分组和排序顺序</span></span>
<span class="line"><span>缺：</span></span>
<span class="line"><span>    1.创建索引和维护索引需要时间成本，这个成本随着数据量的增加而加大</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    2.创建索引和维护索引需要空间成本，每一条索引都要占据数据库的物理存储空间，</span></span>
<span class="line"><span>      数据量越大，占用空间也越大（数据表占据的是数据库的数据空间）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    3.引也不易过多，索引越多写入，修改的速度越慢，会降低表的增删改的效率，</span></span>
<span class="line"><span>      因为每次增删改索引需要进行动态维护，导致时间变长</span></span></code></pre></div><h2 id="mysql的索引类型" tabindex="-1">MySQL的索引类型 <a class="header-anchor" href="#mysql的索引类型" aria-label="Permalink to &quot;MySQL的索引类型&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">索引类型</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;">普通索引</td><td style="text-align:left;">最基本的索引，它没有任何限制</td></tr><tr><td style="text-align:left;">唯一索引</td><td style="text-align:left;">某一行企用了唯一索引则不准许这一列的行数据中有重复的值。针对这一列的每一行数据都要求是唯一的</td></tr><tr><td style="text-align:left;">主键索引</td><td style="text-align:left;">它是一种特殊的唯一索引，不允许有空值。一般是在建表的时候同时创建主键索引，常用于用户ID。类似于书中的页码</td></tr><tr><td style="text-align:left;">全文索引</td><td style="text-align:left;">对于需要全局搜索的数据，进行全文索引</td></tr></tbody></table><h2 id="普通索引" tabindex="-1">普通索引 <a class="header-anchor" href="#普通索引" aria-label="Permalink to &quot;普通索引&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">详细说明</th></tr></thead><tbody><tr><td style="text-align:left;">基本语法</td><td style="text-align:left;">alter table 表 add index(字段)</td></tr><tr><td style="text-align:left;">示例</td><td style="text-align:left;">ALTER TABLE money ADD INDEX(username);</td></tr><tr><td style="text-align:left;">示例解释</td><td style="text-align:left;">为money表的username字段增加索引</td></tr></tbody></table><h2 id="唯一索引" tabindex="-1">唯一索引 <a class="header-anchor" href="#唯一索引" aria-label="Permalink to &quot;唯一索引&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">详细说明</th></tr></thead><tbody><tr><td style="text-align:left;">基本语法</td><td style="text-align:left;">alter table 表 add UNIQUE(字段)</td></tr><tr><td style="text-align:left;">示例</td><td style="text-align:left;">ALTER TABLE money ADD UNIQUE(email);</td></tr><tr><td style="text-align:left;">示例解释</td><td style="text-align:left;">为money表的email字段增加唯一索引</td></tr></tbody></table><h2 id="全文索引" tabindex="-1">全文索引 <a class="header-anchor" href="#全文索引" aria-label="Permalink to &quot;全文索引&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">详细说明</th></tr></thead><tbody><tr><td style="text-align:left;">基本语法</td><td style="text-align:left;">alter table 表 add FULLTEXT(字段)</td></tr><tr><td style="text-align:left;">示例</td><td style="text-align:left;">ALTER TABLE money ADD FULLTEXT(content);</td></tr><tr><td style="text-align:left;">示例解释</td><td style="text-align:left;">为money表的content字段增加唯一索引</td></tr></tbody></table><h2 id="主键索引" tabindex="-1">主键索引 <a class="header-anchor" href="#主键索引" aria-label="Permalink to &quot;主键索引&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">详细说明</th></tr></thead><tbody><tr><td style="text-align:left;">基本语法</td><td style="text-align:left;">alter table 表 add PRIMARY KEY(字段)</td></tr><tr><td style="text-align:left;">示例</td><td style="text-align:left;">ALTER TABLE money ADD PRIMARY KEY(id);</td></tr><tr><td style="text-align:left;">示例解释</td><td style="text-align:left;">为money表的id字段增加主键索引</td></tr></tbody></table><h2 id="创建表时也可以声明索引" tabindex="-1">创建表时也可以声明索引 <a class="header-anchor" href="#创建表时也可以声明索引" aria-label="Permalink to &quot;创建表时也可以声明索引&quot;">​</a></h2><p><strong>创建表时可在创建表语句后加上对应的类型即可声明索引：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PRIMARY KEY(字段)</span></span>
<span class="line"><span>INDEX [索引名] (字段)</span></span>
<span class="line"><span>FULLTEXT [索引名] (字段)</span></span>
<span class="line"><span>UNIQUE[索引名] (字段)</span></span></code></pre></div><p><strong>整体示例如下：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>CREATE TABLE test (</span></span>
<span class="line"><span>    id INT NOT NULL ,</span></span>
<span class="line"><span>    username VARCHAR(20) NOT NULL ,</span></span>
<span class="line"><span>    password INT NOT NULL ,</span></span>
<span class="line"><span>    content INT NOT NULL ,</span></span>
<span class="line"><span>    PRIMARY KEY (id),</span></span>
<span class="line"><span>    INDEX pw (password),</span></span>
<span class="line"><span>    UNIQUE (username),</span></span>
<span class="line"><span>    FULLTEXT (content)</span></span>
<span class="line"><span>) ENGINE = InnoDB;</span></span></code></pre></div><h2 id="英文字符集" tabindex="-1">英文字符集 <a class="header-anchor" href="#英文字符集" aria-label="Permalink to &quot;英文字符集&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">字符集</th><th style="text-align:left;">说明</th><th style="text-align:left;">字节长度</th></tr></thead><tbody><tr><td style="text-align:left;">ASCII</td><td style="text-align:left;">美国标准信息交换代码</td><td style="text-align:left;">单字节</td></tr><tr><td style="text-align:left;">GBK</td><td style="text-align:left;">汉字内码扩展规范</td><td style="text-align:left;">双字节</td></tr><tr><td style="text-align:left;">unicode</td><td style="text-align:left;">万国码</td><td style="text-align:left;">4字节</td></tr><tr><td style="text-align:left;">UTF-8</td><td style="text-align:left;">Unicode的可变长度字符编码</td><td style="text-align:left;">1到6个字节</td></tr></tbody></table><h2 id="sql语句" tabindex="-1">SQL语句 <a class="header-anchor" href="#sql语句" aria-label="Permalink to &quot;SQL语句&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>需要在数据库上执行的大部分工作都由 SQL 语句完成。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：一定要记住，SQL 对大小写不敏感！</span></span>
<span class="line"><span></span></span>
<span class="line"><span>分号是在数据库系统中分隔每条 SQL 语句的标准方法。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SQL (结构化查询语言)是用于执行查询的语法。但是 SQL 语言也包含用于更新、插入和删除记录的语法。</span></span></code></pre></div><h2 id="数据定义语言-dml" tabindex="-1">数据定义语言(DML) <a class="header-anchor" href="#数据定义语言-dml" aria-label="Permalink to &quot;数据定义语言(DML)&quot;">​</a></h2><p><strong>这里我们用company数据库进行对数据的操作</strong></p><p><strong>INSERT INTO(插入语句)</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>单条数据插入</span></span>
<span class="line"><span>    INSERT INTO \`表名\`(\`字段1\`,\`字段2\`)VALUES(&#39;值1&#39;，&#39;值2&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>多条数据插入</span></span>
<span class="line"><span>    INSERT INTO \`表名\`(\`字段1\`,\`字段2\`)VALUES(&#39;值1&#39;，‘值2’),(&#39;值1&#39;,&#39;值2&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>/*在部门表插入数据*/</span></span>
<span class="line"><span>    INSERT INTO \`pre_department\`(\`name\`)VALUES(&#39;技术部&#39;);</span></span></code></pre></div><p><strong>UPDATE(更新语句)</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>更新一个表的数据</span></span>
<span class="line"><span>    UPDATE 表名 SET \`字段1\`=值1,\`字段2\`=值2,\`字段n\`=值n WHERE 条件；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>/*把技术部更新为行政部*/</span></span>
<span class="line"><span>    UPDATE \`pre_department\` SET \`name\`=&#39;行政部&#39; WHERE \`id\` = 1;</span></span></code></pre></div><p><strong>DELETE(删除语句)</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>删除一条数据</span></span>
<span class="line"><span>    DELETE FROM \`表\` WHERE 条件;</span></span>
<span class="line"><span>删除多条数据</span></span>
<span class="line"><span>    DELETE FROM \`表\` WHERE \`id\` IN (&#39;值1&#39;,&#39;值2&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>    DELETE FROM \`pre_department\` WHERE \`id\` IN (&#39;1&#39;,&#39;2&#39;);</span></span></code></pre></div><p><strong>SELECT(查询语句)</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>表示查询全部字段</span></span>
<span class="line"><span>    SELECT * FROM \`表\`;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要查哪个字段就直接写字段</span></span>
<span class="line"><span>    SELECT 字段1,字段2 FROM 表;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>根据where后面的条件查询内容</span></span>
<span class="line"><span>    SELECT * FROM \`表\` WHERE 条件;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查询的条件是id=5并且depid=3的数据</span></span>
<span class="line"><span>    SELECT * FROM \`表\` WHERE \`id\`=5 and \`depid\`=3;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查询的条件是id=5或者是id=8的数据</span></span>
<span class="line"><span>    SELECT * FROM \`表\` WHERE \`id\`=5 or \`id\`=8;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查询 5 - 10之间的数据</span></span>
<span class="line"><span>    SELECT * FROM \`表\` WHERE \`id\` BETWEEN 5 AND 10;</span></span>
<span class="line"><span>    SELECT * FROM \`表\` WHERE \`id\` &gt;= 5 AND \`id\` &lt;= 10;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查询的条件是id=1，或者id=3，或者id=6的数据    </span></span>
<span class="line"><span>    SELECT * FROM \`表\` WHERE \`id\` IN (1,3,6);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查询的条件是id不等于1,3,6的数据</span></span>
<span class="line"><span>    SELECT * FROM \`表\` WHERE \`id\` NOT IN (1,3,6);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>只查询5条</span></span>
<span class="line"><span>    SELECT * FROM \`表\` LIMIT 5;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>从第4条数据开始，只查询5条</span></span>
<span class="line"><span>    SELECT * FROM \`表\` LIMIT 3,5;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>排序（升序：asc，降序：desc）</span></span>
<span class="line"><span>    SELECT * FROM \`表\` ORDER BY \`id\` ASC;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>根据title分组（把相同的title数据分到一组）</span></span>
<span class="line"><span>    SELECT * FROM \`表\` GROUP BY title;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>模糊查询name这个字段里面数据有 &#39;你是&#39;</span></span>
<span class="line"><span>    SELECT * FROM \`表\` WHERE \`name\` like &#39;%你是%&#39;;</span></span></code></pre></div><h2 id="连表查询" tabindex="-1"><strong>连表查询</strong> <a class="header-anchor" href="#连表查询" aria-label="Permalink to &quot;**连表查询**&quot;">​</a></h2><p><strong>LEFT JOIN(左连表)</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>以左边的表为基准，先把左边的表查出来，再查右边的表，若右边的表没对应的数据显示的就为NULL。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>left join是以A表的记录为基础的,A可以看成左表,B可以看成右表,left join是以左表为准的.</span></span>
<span class="line"><span>换句话说,左表(A)的记录将会全部表示出来,而右表(B)只会显示符合搜索条件的记录(例子中为: A.ID = B.bID).</span></span>
<span class="line"><span>B表记录不足的地方均为NULL.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>    SELECT d.name,j.name FROM \`pre_department\` as d LEFT JOIN \`pre_job\` as j on d.id = j.depid;</span></span></code></pre></div><p><strong>RIGHT JOIN(右连表)</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>以右边的表为基准，先把右边的表查出来，再查左边的表，若左边的表没对应的数据显示的就为NULL</span></span>
<span class="line"><span></span></span>
<span class="line"><span>仔细观察一下,就会发现right join和left join的结果刚好相反,这次是以右表(B)为基础的,</span></span>
<span class="line"><span>A表不足的地方用NULL填充。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例：</span></span>
<span class="line"><span>    SELECT j.name,d.name FROM \`pre_job\` as j RIGHT JOIN \`pre_department\` as d on j.depid = d.id;</span></span></code></pre></div><p><strong>INNER JOIN(内连表)</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>以两个表中有至少一个匹配，否则不显示</span></span>
<span class="line"><span>这说明inner join并不以谁为基础,它只显示符合条件的记录。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    SELECT d.name,j.name FROM \`pre_department\` as d INNER JOIN \`pre_job\` as j ON d.id = j.depid;</span></span></code></pre></div><h2 id="sql运算符" tabindex="-1">SQL运算符 <a class="header-anchor" href="#sql运算符" aria-label="Permalink to &quot;SQL运算符&quot;">​</a></h2><p><strong>算术运算符</strong></p><table><thead><tr><th style="text-align:left;">符号</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">+</td><td style="text-align:left;">加法运算</td></tr><tr><td style="text-align:left;">-</td><td style="text-align:left;">减法运算</td></tr><tr><td style="text-align:left;">*</td><td style="text-align:left;">乘法运算</td></tr><tr><td style="text-align:left;">/</td><td style="text-align:left;">除法运算,返回商</td></tr><tr><td style="text-align:left;">%</td><td style="text-align:left;">求余运算,返回余数</td></tr></tbody></table><p><strong>比较运算符</strong></p><table><thead><tr><th style="text-align:left;">符号</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">&gt;</td><td style="text-align:left;">大于</td></tr><tr><td style="text-align:left;">&lt;</td><td style="text-align:left;">小于</td></tr><tr><td style="text-align:left;">&gt;=</td><td style="text-align:left;">大于等于</td></tr><tr><td style="text-align:left;">&lt;=</td><td style="text-align:left;">小于等于</td></tr><tr><td style="text-align:left;">!=,&lt;&gt;</td><td style="text-align:left;">不等于</td></tr><tr><td style="text-align:left;">=</td><td style="text-align:left;">等于</td></tr></tbody></table><p><strong>逻辑运算符</strong></p><table><thead><tr><th style="text-align:left;">符号</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">NOT或者!</td><td style="text-align:left;">逻辑非</td></tr><tr><td style="text-align:left;">AND或者&amp;&amp;</td><td style="text-align:left;">逻辑与</td></tr><tr><td style="text-align:left;">OR或者两条竖线</td><td style="text-align:left;">逻辑或</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&gt;= 查询 id大于等于9</span></span>
<span class="line"><span>    SELECT * FROM \`pre_department\` WHERE id&gt;=9;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>not 查询 ID 除 3 和 10 之外的所有值</span></span>
<span class="line"><span>    SELECT * FROM \`pre_department\` WHERE id NOT IN (&#39;3&#39;,&#39;10&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>and 查询 id为9和名称为技术部</span></span>
<span class="line"><span>    SELECT * FROM \`pre_department\` WHERE id = 9  AND NAME = &#39;技术部&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>or 查询 id为9或者id为1</span></span>
<span class="line"><span>    SELECT * FROM \`pre_department\` WHERE id = 9 OR id = 1;</span></span></code></pre></div><h2 id="sql函数" tabindex="-1">SQL函数 <a class="header-anchor" href="#sql函数" aria-label="Permalink to &quot;SQL函数&quot;">​</a></h2><h2 id="sql-合计函数" tabindex="-1">SQL 合计函数 <a class="header-anchor" href="#sql-合计函数" aria-label="Permalink to &quot;SQL 合计函数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Aggregate 函数的操作面向一系列的值，并返回一个单一的值</span></span></code></pre></div><table><thead><tr><th style="text-align:left;">函数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">AVG(column)</td><td style="text-align:left;">返回某列的平均值</td></tr><tr><td style="text-align:left;">COUNT(column)</td><td style="text-align:left;">返回某列的行数（不包括 NULL 值）</td></tr><tr><td style="text-align:left;">COUNT(*)</td><td style="text-align:left;">返回被选行数</td></tr><tr><td style="text-align:left;">MAX(column)</td><td style="text-align:left;">返回某列的最高值</td></tr><tr><td style="text-align:left;">MIN(column)</td><td style="text-align:left;">返回某列的最低值</td></tr><tr><td style="text-align:left;">SUM(column)</td><td style="text-align:left;">返回某列的总和</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>AVG</span></span>
<span class="line"><span>    SELECT AVG(column) FROM \`表名\`;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COUNT </span></span>
<span class="line"><span>    SELECT COUNT(column) FROM \`表名\`;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MAX</span></span>
<span class="line"><span>    SELECT MAX(column) FROM \`表名\`;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MIN</span></span>
<span class="line"><span>    SELECT MIN(column) FROM \`表名\`;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SUM</span></span>
<span class="line"><span>    SELECT SUM(column) FROM \`表名\`;</span></span></code></pre></div><h2 id="sql命令行" tabindex="-1">SQL命令行 <a class="header-anchor" href="#sql命令行" aria-label="Permalink to &quot;SQL命令行&quot;">​</a></h2><p><strong>除了用Navicat和phpmyadmin对数据库进行增删改查，还可以用命令行</strong></p><p><strong>可以使用windows自带的cmd或者cmder其中一个，首先打开我们的命令行</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>连接MySQL服务</span></span>
<span class="line"><span>    mysql -h localhost -u root -p dbName</span></span>
<span class="line"><span>    -u指的是用户名 -p 指的是密码 -h 指的是主机地址 dbName指的是数据库名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查看数据库列表</span></span>
<span class="line"><span>    show databases;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>创建数据库并且设置编码</span></span>
<span class="line"><span>    create database 数据库名 charset utf8;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>删除数据库</span></span>
<span class="line"><span>    drop database 数据库名;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>选择使用数据库</span></span>
<span class="line"><span>    use 数据库名;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查看某个数据库里的数据表列表</span></span>
<span class="line"><span>    show tables;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查看数据库的创建sql</span></span>
<span class="line"><span>    show create database 数据库名;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查看表的创建sql</span></span>
<span class="line"><span>    show create table 表名;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查看当前数据库</span></span>
<span class="line"><span>    select database();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查看当前MySQL的版本</span></span>
<span class="line"><span>    select version();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>删除一张表里所有的数据</span></span>
<span class="line"><span>    truncate table1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>删除一张表;</span></span>
<span class="line"><span>    drop table 表名;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>修改表名</span></span>
<span class="line"><span>    alter table test rename to test2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>修改表编码</span></span>
<span class="line"><span>    ALTER TABLE \`table\` DEFAULT CHARACTER SET utf8;  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>查看存储引擎</span></span>
<span class="line"><span>    show engines;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查看某个数据库里的所有表</span></span>
<span class="line"><span>    show tables from 数据库名;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>导出数据库</span></span>
<span class="line"><span>    mysqldump -u 用户名 -p 数据库名 &gt; 存放位置/导出的文件名</span></span>
<span class="line"><span>    mysqldump -u root -p company &gt; e:\\demo.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>导出数据表</span></span>
<span class="line"><span>    mysqldump -u 用户名 -p 数据库名 表名&gt; 存放位置/导出的文件名</span></span>
<span class="line"><span>    mysqldump -u root -p demo user&gt; e:\\demo.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>导入数据表</span></span>
<span class="line"><span>第一种</span></span>
<span class="line"><span>       mysql -u 用户名 -p 数据库名 &lt; 存放位置</span></span>
<span class="line"><span>    mysql -u root -p demo &lt; e:\\demo.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第二种</span></span>
<span class="line"><span>    mysql -u root -p</span></span>
<span class="line"><span>    mysql&gt;show databases;</span></span>
<span class="line"><span>    mysql&gt;use demo;</span></span>
<span class="line"><span>    mysql&gt;source e:\\demo.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>清空表语句     </span></span>
<span class="line"><span>    delete和truncate是一样的，但它们有一点不同，那就是DELETE可以返回被删除的记录数，</span></span>
<span class="line"><span>    而TRUNCATE TABLE返回的是0。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    基本语法：TRUNCATE TABLE 表名;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    示例：TRUNCATE TABLE user;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    示例说明：清空表的数据，并且让自增的id从1开始自增</span></span></code></pre></div><h2 id="phpmysql操作" tabindex="-1">PHPMySQL操作 <a class="header-anchor" href="#phpmysql操作" aria-label="Permalink to &quot;PHPMySQL操作&quot;">​</a></h2><p><strong>前面已经说了通过Navicat对数据库的进行增删改查，下面用公司通信录的数据库(company)进行讲解</strong></p><h2 id="模型文件以及sql文件下载-1" tabindex="-1">模型文件以及SQL文件下载 <a class="header-anchor" href="#模型文件以及sql文件下载-1" aria-label="Permalink to &quot;模型文件以及SQL文件下载&quot;">​</a></h2><p><a href="http://web.wdwangke.com/mdwork/backend/mysql/company.zip" target="_blank" rel="noreferrer"><strong>company文件</strong></a></p><h2 id="常用函数" tabindex="-1">常用函数 <a class="header-anchor" href="#常用函数" aria-label="Permalink to &quot;常用函数&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">函数名</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">mysqli_connect</td><td style="text-align:left;">链接数据库</td></tr><tr><td style="text-align:left;">mysqli_connect_errno</td><td style="text-align:left;">链接时提示错误码</td></tr><tr><td style="text-align:left;">mysqli_connect_error</td><td style="text-align:left;">链接时提示错误信息</td></tr><tr><td style="text-align:left;">mysqli_select_db</td><td style="text-align:left;">选择数据库</td></tr><tr><td style="text-align:left;">mysqli_set_charset</td><td style="text-align:left;">设置编码</td></tr><tr><td style="text-align:left;">mysqli_query</td><td style="text-align:left;">执行Sql语句</td></tr><tr><td style="text-align:left;">mysqli_num_rows</td><td style="text-align:left;">获取返回结果行数</td></tr><tr><td style="text-align:left;">mysqli_fetch_all</td><td style="text-align:left;">获取返回所有数据的关联数组，第二个参数是规定返回的数组类型，关联数组：MYSQLI_ASSOC 索引数组：MYSQLI_NUM 所有数组类型：MYSQLI_BOTH</td></tr><tr><td style="text-align:left;">mysqli_fetch_assoc</td><td style="text-align:left;">获取返回的结果集里的一组关联数组</td></tr><tr><td style="text-align:left;">mysqli_insert_id</td><td style="text-align:left;">返回最后一个查询中自动生成的 ID（通过 AUTO_INCREMENT 生成）</td></tr><tr><td style="text-align:left;">mysqli_error</td><td style="text-align:left;">返回执行失败的错误信息</td></tr><tr><td style="text-align:left;">mysqli_affected_rows</td><td style="text-align:left;">返回最后执行SQL语句所影响的记录行数</td></tr></tbody></table><h2 id="链接数据库" tabindex="-1">链接数据库 <a class="header-anchor" href="#链接数据库" aria-label="Permalink to &quot;链接数据库&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>header(&quot;Content-Type:text/html;charset=utf-8&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* </span></span>
<span class="line"><span>    链接数据库</span></span>
<span class="line"><span>        host        主机地址</span></span>
<span class="line"><span>        username    用户名</span></span>
<span class="line"><span>        password    密码</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>$conn = @mysqli_connect(&#39;localhost&#39;,&#39;root&#39;,&#39;root&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//链接数据库失败</span></span>
<span class="line"><span>if(!$conn){</span></span>
<span class="line"><span>    echo &#39;错误码：&#39; . mysqli_connect_errno() . &#39;&lt;br&gt;&#39;;</span></span>
<span class="line"><span>    echo &#39;错误信息：&#39; . mysqli_connect_error();</span></span>
<span class="line"><span>    exit;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$select = mysqli_select_db($conn,&#39;company&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if(!$select){</span></span>
<span class="line"><span>    echo &#39;选择数据库失败&#39;;</span></span>
<span class="line"><span>    exit;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置编码</span></span>
<span class="line"><span>mysqli_set_charset($conn,&#39;utf8&#39;);</span></span></code></pre></div><h2 id="查询所有数据" tabindex="-1">查询所有数据 <a class="header-anchor" href="#查询所有数据" aria-label="Permalink to &quot;查询所有数据&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// sql语句</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$sql = &quot;SELECT * FROM \`pre_admin\`&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$res = mysqli_query($conn,$sql);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$data = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if($res &amp;&amp; mysqli_num_rows($res) &gt; 0){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  $data = mysqli_fetch_all($res,MYSQLI_ASSOC);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var_dump($data);</span></span></code></pre></div><h2 id="查询单条数据" tabindex="-1">查询单条数据 <a class="header-anchor" href="#查询单条数据" aria-label="Permalink to &quot;查询单条数据&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$sql = &quot;SELECT * FROM \`pre_admin\` WHERE \`id\` = &#39;1&#39;&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$res = mysqli_query($conn,$sql);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$data = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if($res &amp;&amp; mysqli_num_rows($res) &gt; 0){</span></span>
<span class="line"><span>    $data = mysqli_fetch_assoc($res);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var_dump($data);</span></span></code></pre></div><h2 id="插入一条新的数据" tabindex="-1">插入一条新的数据 <a class="header-anchor" href="#插入一条新的数据" aria-label="Permalink to &quot;插入一条新的数据&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$username = &#39;admin&#39;;</span></span>
<span class="line"><span>$salt = &#39;6xChSuJQag&#39;;</span></span>
<span class="line"><span>$pwd = md5(&#39;123456&#39;.$salt);</span></span>
<span class="line"><span>$avatar = &#39;2021082310582038867120.jpg&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$sql = &quot;INSERT INTO \`pre_admin\`(\`username\`,\`password\`,\`avatar\`,\`salt\`)VALUES(&quot;$username&quot;,&quot;$pwd&quot;,)&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$res = mysqli_query($conn,$sql);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if($res){</span></span>
<span class="line"><span>    echo mysqli_insert_id($conn);</span></span>
<span class="line"><span>}else {</span></span>
<span class="line"><span>    echo &quot;SQL语句执行失败：&quot; . $sql . &#39;&lt;br /&gt;&#39;;</span></span>
<span class="line"><span>    echo &quot;错误信息：&quot;.mysqli_error($conn);</span></span>
<span class="line"><span>    exit;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="更新一条数据" tabindex="-1">更新一条数据 <a class="header-anchor" href="#更新一条数据" aria-label="Permalink to &quot;更新一条数据&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$username = &#39;demo&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$sql = &quot;UPDATE \`pre_admin\` SET \`username\` = &#39;$username&#39; WHERE \`id\` = &#39;1&#39;&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$res = mysqli_query($conn,$sql);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if($res){</span></span>
<span class="line"><span>    echo mysqli_affected_rows($conn);</span></span>
<span class="line"><span>}else{</span></span>
<span class="line"><span>    echo &#39;SQL语句执行失败：&#39; . $sql .&#39;&lt;br /&gt;&#39;;</span></span>
<span class="line"><span>    echo &#39;错误信息：&#39; . mysqli_error($conn);</span></span>
<span class="line"><span>    exit;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="删除一条数据" tabindex="-1">删除一条数据 <a class="header-anchor" href="#删除一条数据" aria-label="Permalink to &quot;删除一条数据&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 按条件删除</span></span>
<span class="line"><span>$id = 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$sql = &quot;DELETE FROM \`pre_admin\` WHERE \`id\` = &#39;$id&#39;&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$res = mysqli_query($conn,$sql);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if($res){</span></span>
<span class="line"><span>    echo mysqli_affected_rows($conn);</span></span>
<span class="line"><span>}else {</span></span>
<span class="line"><span>    echo &#39;SQL语句执行错误：&#39; . $sql;</span></span>
<span class="line"><span>    echo &#39;错误信息：&#39; . mysqli_error($conn);</span></span>
<span class="line"><span>    exit;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="封装mysql函数" tabindex="-1">封装MySQL函数 <a class="header-anchor" href="#封装mysql函数" aria-label="Permalink to &quot;封装MySQL函数&quot;">​</a></h2><p>下面对增删改查几个数据库操作进行封装，</p><p>因为在前面用PHP对mysql进行增删改查会发现代码很多重复的，</p><p>所以要把那几个常用的封装成函数</p><h2 id="function-php" tabindex="-1"><strong>function.php</strong> <a class="header-anchor" href="#function-php" aria-label="Permalink to &quot;**function.php**&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//声明编码</span></span>
<span class="line"><span>header(&quot;Content-Type:text/html;charset=utf-8&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//单条查询</span></span>
<span class="line"><span>function find($sql = null)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //引入全局变量</span></span>
<span class="line"><span>    global $conn;</span></span>
<span class="line"><span>    $res = mysqli_query($conn, $sql);</span></span>
<span class="line"><span>    if(!$res)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        echo &quot;SQL语句执行失败：&quot;.$sql;</span></span>
<span class="line"><span>        exit;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //返回数据</span></span>
<span class="line"><span>    return mysqli_fetch_assoc($res);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//多条查询</span></span>
<span class="line"><span>function all($sql = null)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //引入全局变量</span></span>
<span class="line"><span>    global $conn;</span></span>
<span class="line"><span>    $res = mysqli_query($conn, $sql);</span></span>
<span class="line"><span>    if(!$res)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        echo &quot;SQL语句执行失败：&quot;.$sql;</span></span>
<span class="line"><span>        exit;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 多条数据就是要循环</span></span>
<span class="line"><span>    $list = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while($data = mysqli_fetch_assoc($res))</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $list[] = $data;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //返回数据</span></span>
<span class="line"><span>    return $list;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 插入函数</span></span>
<span class="line"><span>function add($table, $data)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    // INSERT INTO 表名(\`字段1\`,\`字段2\`,\`字段3\`)VALUES(&#39;值1&#39;,&#39;值2&#39;,&#39;值3&#39;)</span></span>
<span class="line"><span>    global $conn;</span></span>
<span class="line"><span>    global $pre_;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //给表名拼接上表前缀</span></span>
<span class="line"><span>    $table = $pre_.$table;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //将数组里面的索引全部提取出来变成一个新数组</span></span>
<span class="line"><span>    $keys = array_keys($data);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //数组变成字符串</span></span>
<span class="line"><span>    $fields = &quot;\`&quot;.implode(&quot;\`,\`&quot;, $keys).&quot;\`&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $values = &quot;&#39;&quot;.implode(&quot;&#39;,&#39;&quot;, $data).&quot;&#39;&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $sql = &quot;INSERT INTO $table($fields)VALUES($values)&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //执行语句</span></span>
<span class="line"><span>    $res = mysqli_query($conn, $sql);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(!$res)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        echo &quot;SQL语句执行失败：&quot;.$sql;</span></span>
<span class="line"><span>        exit;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //返回插入ID</span></span>
<span class="line"><span>    return mysqli_insert_id($conn);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//更新</span></span>
<span class="line"><span>function update($table, $data, $where = 1)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //UPDATE 表名 SET \`字段1\` = &#39;值1&#39;, \`字段2\` = &#39;值2&#39; WHERE 条件</span></span>
<span class="line"><span>    global $conn;</span></span>
<span class="line"><span>    global $pre_;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //拼接表名</span></span>
<span class="line"><span>    $table = $pre_.$table;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //直接组装</span></span>
<span class="line"><span>    $str = &quot;&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    foreach($data as $key=&gt;$item)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $str .= &quot;\`$key\` = &#39;$item&#39;,&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $str = trim($str, &quot;,&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //组装sql语句</span></span>
<span class="line"><span>    $sql = &quot;UPDATE $table SET $str WHERE $where&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //执行sql</span></span>
<span class="line"><span>    $res = mysqli_query($conn, $sql);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(!$res)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        echo &quot;SQL语句执行失败：&quot;.$sql;</span></span>
<span class="line"><span>        exit;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //返回影响行数</span></span>
<span class="line"><span>    return mysqli_affected_rows($conn);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//删除</span></span>
<span class="line"><span>function del($table, $where = 1)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //DELETE FROM 表名 WHERE where</span></span>
<span class="line"><span>    global $conn;</span></span>
<span class="line"><span>    global $pre_;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $table = $pre_.$table;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $sql = &quot;DELETE FROM $table WHERE $where&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //执行sql</span></span>
<span class="line"><span>    $res = mysqli_query($conn, $sql);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(!$res)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        echo &quot;SQL语句执行失败：&quot;.$sql;</span></span>
<span class="line"><span>        exit;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //返回影响行数</span></span>
<span class="line"><span>    return mysqli_affected_rows($conn);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="config-php" tabindex="-1">config.php <a class="header-anchor" href="#config-php" aria-label="Permalink to &quot;config.php&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span>    header(&quot;Content-Type:text/html;charset=utf-8&quot;);</span></span>
<span class="line"><span>    /* </span></span>
<span class="line"><span>    连接数据库</span></span>
<span class="line"><span>        host        主机地址</span></span>
<span class="line"><span>        username    用户名</span></span>
<span class="line"><span>        password    密码</span></span>
<span class="line"><span>        dbname      默认使用数据库</span></span>
<span class="line"><span>        port        连接到 MySQL 服务器的端口</span></span>
<span class="line"><span>        socket      socket 或要使用的已命名 pipe</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>    $conn=mysqli_connect(&#39;localhost&#39;,&#39;root&#39;,&#39;root&#39;);</span></span>
<span class="line"><span>    if(!$conn){//如果连接数据库失败</span></span>
<span class="line"><span>        echo &quot;错误码：&quot;. mysqli_connect_errno();</span></span>
<span class="line"><span>        echo &quot;错误：&quot;. mysqli_connect_error();</span></span>
<span class="line"><span>        exit;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //选择数据库</span></span>
<span class="line"><span>    mysqli_select_db($conn, &quot;company&quot;);</span></span>
<span class="line"><span>    //设置默认客户端字符集</span></span>
<span class="line"><span>    mysqli_set_charset($conn,&quot;utf8&quot;);</span></span>
<span class="line"><span>    // 引入function函数库</span></span>
<span class="line"><span>    include_once(&#39;function.php&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div><p><strong>test.php</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span>    include_once(&#39;config.php&#39;);</span></span>
<span class="line"><span>    //新增数据</span></span>
<span class="line"><span>    $data=array(</span></span>
<span class="line"><span>        &#39;name&#39;=&gt;&#39;市场部&#39;</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    $res = add(&#39;pre_department&#39;,$data);</span></span>
<span class="line"><span>    if($res){</span></span>
<span class="line"><span>        echo &#39;成功&#39;;</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        echo &#39;失败&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //修改数据 假如修改市场部的名称 在这里id为28，以你的数据为准</span></span>
<span class="line"><span>    $savedata=array(</span></span>
<span class="line"><span>        &#39;name&#39;=&gt;&#39;市场二部&#39;</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    $res = update(&#39;pre_department&#39;,$savedata,&#39;id=28&#39;);</span></span>
<span class="line"><span>    if($res){</span></span>
<span class="line"><span>        echo &#39;成功&#39;;</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        echo &#39;失败&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //查询全部数据</span></span>
<span class="line"><span>    $sql = &quot;select * from \`pre_department\`&quot;;</span></span>
<span class="line"><span>    $data = all($sql);</span></span>
<span class="line"><span>    var_dump($data);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //查询单条数据</span></span>
<span class="line"><span>    $sql = &quot;select * from \`pre_department\` where id=28&quot;;</span></span>
<span class="line"><span>    $data = find($sql);</span></span>
<span class="line"><span>    var_dump($data);</span></span>
<span class="line"><span>?&gt;</span></span></code></pre></div>`,193),t=[e];function i(c,d,o,r,h,g){return n(),a("div",null,t)}const b=s(l,[["render",i]]);export{y as __pageData,b as default};
