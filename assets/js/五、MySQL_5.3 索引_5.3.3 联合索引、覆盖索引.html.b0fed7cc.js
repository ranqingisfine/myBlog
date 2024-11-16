"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5340],{6262:(e,t)=>{t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[e,a]of t)n[e]=a;return n}},5093:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>p,data:()=>c});var a=n(641);const i=n.p+"assets/img/54.22c8e1c0.png",r=n.p+"assets/img/55.83a76419.png",o=n.p+"assets/img/56.ca105962.png",l=n.p+"assets/img/57.ab279df8.png",s={},p=(0,n(6262).A)(s,[["render",function(e,t){return(0,a.uX)(),(0,a.CE)("div",null,t[0]||(t[0]=[(0,a.Fv)('<h1 id="_5-3-3-联合索引、覆盖索引" tabindex="-1"><a class="header-anchor" href="#_5-3-3-联合索引、覆盖索引"><span>5.3.3 联合索引、覆盖索引</span></a></h1><h2 id="前言-回表" tabindex="-1"><a class="header-anchor" href="#前言-回表"><span>前言：回表</span></a></h2><h3 id="_1、什么是回表" tabindex="-1"><a class="header-anchor" href="#_1、什么是回表"><span>1、什么是回表</span></a></h3><p>回表（<code>Look Up</code>）指的是在进行索引查询时，首先通过索引定位到对应页，然后再根据行的物理地址找到所需的数据行。换句话说，回表是指根据索引查询到的主键值再去访问<strong>主键索引</strong>，从而获取完整的数据记录。</p><h3 id="_2、什么情况下会回表" tabindex="-1"><a class="header-anchor" href="#_2、什么情况下会回表"><span>2、什么情况下会回表</span></a></h3><ul><li><p><strong>索引不覆盖所有需要查询的字段</strong>：当查询语句中需要返回的列不在索引列上时，即使通过索引定位了相关行，仍然需要回表获取其他列的值。</p></li><li><p><strong>使用了非聚簇索引</strong>：非聚簇索引（Secondary Index）只包含了索引列的副本以及指向对应主键的引用，查询需要通过回表才能获取完整的行数据</p></li><li><p><strong>使用了覆盖索引但超过了最大索引长度</strong>：在MySQL的InnoDB存储引擎中，每个索引项的最大长度是767字节，如果查询需要返回的字段长度超过了该限制，同样会触发回表操作。</p></li></ul><h3 id="_3、如何避免回表" tabindex="-1"><a class="header-anchor" href="#_3、如何避免回表"><span>3、如何避免回表</span></a></h3><ul><li><strong>覆盖索引</strong>：如果查询的字段都在某个索引上，并且没有超过最大索引长度限制，MySQL可以直接从索引中获取所需数据，而无需回表。</li><li><strong>使用聚簇索引</strong>：InnoDB存储引擎的主键索引是聚簇索引，它包含了整个行的数据。当查询条件使用了主键或者通过主键查询时，MySQL可以直接从主键索引中获取所有需要的数据，无需回表。</li></ul><h2 id="一、联合索引" tabindex="-1"><a class="header-anchor" href="#一、联合索引"><span>一、联合索引</span></a></h2><p>对于表的单列(如id)数据，是可以建立索引的，<strong>对于多列(id和name组合,或者,name和id*<em>组合*</em>)，也可以建立索引</strong>。联合索引，也称之为组合索引。</p><h3 id="_1、存储结构" tabindex="-1"><a class="header-anchor" href="#_1、存储结构"><span>1、存储结构</span></a></h3><p><strong>联合索引底层存储结构是怎么样的？</strong></p><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2、联合索引好处" tabindex="-1"><a class="header-anchor" href="#_2、联合索引好处"><span>2、联合索引好处</span></a></h3><ul><li><strong>避免回表</strong></li></ul><p>如在user的id列建有索引，select id from user这个不用回表，直接从索引中读取id的值，而select id,name from user中，不能返回除id列其他的值，所以必须要回表。</p><p>如果建有了id和name列的联合索引，则可以避免回表。</p><p>另外，建立了id和name的联合索引(id列在在前)，则select id from user可以避免回表，而不用单独建立id列的单列索引。</p><ul><li><strong>个单列查询返回行较多，同时查返回行较少，联合索引更高效</strong></li></ul><p>如果select * from user where id=2 和select * from user where name=&#39;tom&#39; 各自返回的行数比较多，而select * from user where id=2 and name=&#39;tom&#39;返回的行数比较少，那么这个时候使用联合索引更加高效。</p><h2 id="二、覆盖索引" tabindex="-1"><a class="header-anchor" href="#二、覆盖索引"><span>二、覆盖索引</span></a></h2><p>覆盖索引是select的数据列只用从索引中就能够取得，不必读取数据行，换句话说查询列要被所建的索引覆盖。无需回表，速度更快。</p><p>explain的输出结果Extra字段为Using index时，能够触发索引覆盖。</p>',26)]))}]]),c=JSON.parse('{"path":"/%E4%BA%94%E3%80%81MySQL/5.3%20%E7%B4%A2%E5%BC%95/5.3.3%20%E8%81%94%E5%90%88%E7%B4%A2%E5%BC%95%E3%80%81%E8%A6%86%E7%9B%96%E7%B4%A2%E5%BC%95.html","title":"5.3.3 联合索引、覆盖索引","lang":"zh-CN","frontmatter":{"\x3c!--cover":"/assets/images/cover2.jpg--\x3e","icon":"pen-to-square","date":"2024-11-16T00:00:00.000Z","category":["MySQL","索引"],"tag":["联合索引","覆盖索引","回表"],"star":true,"ticky":true,"description":"5.3.3 联合索引、覆盖索引 前言：回表 1、什么是回表 回表（Look Up）指的是在进行索引查询时，首先通过索引定位到对应页，然后再根据行的物理地址找到所需的数据行。换句话说，回表是指根据索引查询到的主键值再去访问主键索引，从而获取完整的数据记录。 2、什么情况下会回表 索引不覆盖所有需要查询的字段：当查询语句中需要返回的列不在索引列上时，即使通...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/myBlog/%E4%BA%94%E3%80%81MySQL/5.3%20%E7%B4%A2%E5%BC%95/5.3.3%20%E8%81%94%E5%90%88%E7%B4%A2%E5%BC%95%E3%80%81%E8%A6%86%E7%9B%96%E7%B4%A2%E5%BC%95.html"}],["meta",{"property":"og:site_name","content":"Java笔记"}],["meta",{"property":"og:title","content":"5.3.3 联合索引、覆盖索引"}],["meta",{"property":"og:description","content":"5.3.3 联合索引、覆盖索引 前言：回表 1、什么是回表 回表（Look Up）指的是在进行索引查询时，首先通过索引定位到对应页，然后再根据行的物理地址找到所需的数据行。换句话说，回表是指根据索引查询到的主键值再去访问主键索引，从而获取完整的数据记录。 2、什么情况下会回表 索引不覆盖所有需要查询的字段：当查询语句中需要返回的列不在索引列上时，即使通..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-16T02:15:23.000Z"}],["meta",{"property":"article:tag","content":"联合索引"}],["meta",{"property":"article:tag","content":"覆盖索引"}],["meta",{"property":"article:tag","content":"回表"}],["meta",{"property":"article:published_time","content":"2024-11-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-16T02:15:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5.3.3 联合索引、覆盖索引\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-16T02:15:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"冉庆\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"前言：回表","slug":"前言-回表","link":"#前言-回表","children":[{"level":3,"title":"1、什么是回表","slug":"_1、什么是回表","link":"#_1、什么是回表","children":[]},{"level":3,"title":"2、什么情况下会回表","slug":"_2、什么情况下会回表","link":"#_2、什么情况下会回表","children":[]},{"level":3,"title":"3、如何避免回表","slug":"_3、如何避免回表","link":"#_3、如何避免回表","children":[]}]},{"level":2,"title":"一、联合索引","slug":"一、联合索引","link":"#一、联合索引","children":[{"level":3,"title":"1、存储结构","slug":"_1、存储结构","link":"#_1、存储结构","children":[]},{"level":3,"title":"2、联合索引好处","slug":"_2、联合索引好处","link":"#_2、联合索引好处","children":[]}]},{"level":2,"title":"二、覆盖索引","slug":"二、覆盖索引","link":"#二、覆盖索引","children":[]}],"git":{"createdTime":1731723323000,"updatedTime":1731723323000,"contributors":[{"name":"ranqing","email":"2516488782@qq.com","commits":1}]},"readingTime":{"minutes":2.76,"words":829},"filePathRelative":"五、MySQL/5.3 索引/5.3.3 联合索引、覆盖索引.md","localizedDate":"2024年11月16日","excerpt":"\\n<h2>前言：回表</h2>\\n<h3>1、什么是回表</h3>\\n<p>回表（<code>Look Up</code>）指的是在进行索引查询时，首先通过索引定位到对应页，然后再根据行的物理地址找到所需的数据行。换句话说，回表是指根据索引查询到的主键值再去访问<strong>主键索引</strong>，从而获取完整的数据记录。</p>\\n<h3>2、什么情况下会回表</h3>\\n<ul>\\n<li>\\n<p><strong>索引不覆盖所有需要查询的字段</strong>：当查询语句中需要返回的列不在索引列上时，即使通过索引定位了相关行，仍然需要回表获取其他列的值。</p>\\n</li>\\n<li>\\n<p><strong>使用了非聚簇索引</strong>：非聚簇索引（Secondary Index）只包含了索引列的副本以及指向对应主键的引用，查询需要通过回表才能获取完整的行数据</p>\\n</li>\\n<li>\\n<p><strong>使用了覆盖索引但超过了最大索引长度</strong>：在MySQL的InnoDB存储引擎中，每个索引项的最大长度是767字节，如果查询需要返回的字段长度超过了该限制，同样会触发回表操作。</p>\\n</li>\\n</ul>","autoDesc":true}')}}]);