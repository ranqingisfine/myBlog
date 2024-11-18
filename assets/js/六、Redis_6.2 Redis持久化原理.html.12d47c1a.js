"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[788],{6262:(e,a)=>{a.A=(e,a)=>{const i=e.__vccOpts||e;for(const[e,s]of a)i[e]=s;return i}},4226:(e,a,i)=>{i.r(a),i.d(a,{comp:()=>l,data:()=>g});var s=i(641);const t=i.p+"assets/img/1.6514a9de.png",r=i.p+"assets/img/2.7bf6ff16.png",n=i.p+"assets/img/3.9662b69a.png",p=i.p+"assets/img/4.7a85eebe.png",d=i.p+"assets/img/5.41358298.png",o={},l=(0,i(6262).A)(o,[["render",function(e,a){return(0,s.uX)(),(0,s.CE)("div",null,a[0]||(a[0]=[(0,s.Fv)('<h1 id="_6-2-redis持久化原理" tabindex="-1"><a class="header-anchor" href="#_6-2-redis持久化原理"><span>6.2 Redis持久化原理</span></a></h1><p>Redis持久化方式有RDB和AOF</p><h2 id="一、rdb" tabindex="-1"><a class="header-anchor" href="#一、rdb"><span>一、RDB</span></a></h2><p>RDB 是⼀种快照存储持久化⽅式，具体就是将 Redis 某⼀时刻的内存数据保存到硬盘的⽂件当中，默认保存的⽂件名为 dump.rdb ，⽽在 Redis 服务器启动时，会重新加载 dump.rdb ⽂件的数据到内存当中恢复数据。</p><h3 id="_1、开启rdb持久化方式" tabindex="-1"><a class="header-anchor" href="#_1、开启rdb持久化方式"><span>1、开启RDB持久化方式</span></a></h3><ul><li>命令生成：客户端可以通过向 Redis 服务器发送 save 或 bgsave 命令让服务器⽣成 rdb ⽂件</li><li>通过服务器配置⽂件指定触发 RDB 条件。</li></ul><h4 id="_1-1-命令生成方式" tabindex="-1"><a class="header-anchor" href="#_1-1-命令生成方式"><span>1.1 命令生成方式</span></a></h4><p><strong>save命令</strong>：命令是⼀个同步操作，同步数据到磁盘上。当客户端向服务器发送 save 命令请求进⾏持久化时，服务器会阻塞 save 命令之后的其他客户端的请求，直到数据同步完成。</p><figure><img src="'+t+'" alt="save命令" tabindex="0" loading="lazy"><figcaption>save命令</figcaption></figure><p>注意：如果数据量太⼤，同步数据会执⾏很久，⽽这期间Redis服务器也⽆法接收其他请求，所以，最好不要在⽣产环境使⽤ save 命令。</p><p><strong>bgsave命令</strong>：bgsave 命令是⼀个异步操作，异步保存数据集到磁盘上</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当客户端发服务发出 bgsave 命令时， Redis 服务器主进程会 forks ⼀个⼦进程来数据同步问题，在将数据保存到rdb⽂件之后，⼦进程会退出。</p><p>所以，与 save 命令相⽐， Redis 服务器在处理 bgsave 采⽤⼦线程进⾏IO写⼊，⽽主进程仍然可以接收其他请求。主进程其实会阻塞在fork()过程中，通常情况下该指令执行的速度比较快，对性能影响不大。</p><h4 id="_1-2-服务器配置文件方式" tabindex="-1"><a class="header-anchor" href="#_1-2-服务器配置文件方式"><span>1.2 服务器配置⽂件方式</span></a></h4><p><strong>服务器配置⾃动触发：<strong>除了通过客户端发送命令外，还有⼀种⽅式，就是在 Redis 配置⽂件中的 save 指定到达触发RDB持久化的条件，⽐如</strong>【多少秒内⾄少达到多少写操作】就开启 RDB 数据同步。</strong></p><p>​ 这种通过服务器配置⽂件触发RDB的⽅式，与bgsave命令类似，达到触发条件时，会forks⼀个⼦进程进⾏数据同步，不过最好不要通过这⽅式来触发RDB持久化，因为设置触发的时间太短，则容易频繁写⼊rdb⽂件，影响服务器性能，时间设置太⻓则会造成数据丢失。</p><h3 id="_2、rdb文件生成流程" tabindex="-1"><a class="header-anchor" href="#_2、rdb文件生成流程"><span>2、RDB文件生成流程</span></a></h3><p>前⾯介绍了三种让服务器⽣成rdb⽂件的⽅式，⽆论是由主进程⽣成还是⼦进程来⽣成，其过程如下：</p><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li><p>⽣成临时rdb⽂件，并写⼊数据。</p></li><li><p>完成数据写⼊，⽤临时⽂代替代正式rdb⽂件。</p></li><li><p>删除原来的db⽂件。</p></li></ol><p>RDB默认⽣成的⽂件名为dump.rdb</p><h3 id="_3、rdb的优缺点" tabindex="-1"><a class="header-anchor" href="#_3、rdb的优缺点"><span>3、RDB的优缺点</span></a></h3><p><strong>优点：</strong></p><ol><li><p>**恢复快。**与AOF⽅式相⽐，通过rdb⽂件恢复数据⽐较快。</p></li><li><p>**适合备份。**rdb⽂件⾮常紧凑，适合于数据备份。</p></li><li><p>**性能影响小。**通过RDB进⾏数据备，由于使⽤⼦进程⽣成，所以对Redis服务器性能影响较⼩。</p></li><li><p>**大规模。**适合⼤规模的数据恢复！</p></li><li><p>**完整性不高。**对数据的完整性要不⾼！</p><p><strong>（又快又小，但完整性不高）</strong></p></li></ol><p><strong>缺点：</strong></p><ol><li>宕机数据丢失。如果服务器宕机的话，采⽤ RDB 的⽅式会造成某个时段内数据的丢失，⽐如我们设置10分钟同步⼀次或5分钟达到1000次写⼊就同步⼀次，那么如果还没达到触发条件服务器就死机了，那么这个时间段的数据会丢失。</li><li>save阻塞。使⽤save命令会造成服务器阻塞，直接数据同步完成才能接收后续请求。</li><li>bgsave耗内存使⽤bgsave命令在forks⼦进程时，如果数据量太⼤，forks的过程也会发⽣阻塞，另外，forks⼦进程会耗费内存。</li></ol><h2 id="二、aof" tabindex="-1"><a class="header-anchor" href="#二、aof"><span>二、AOF</span></a></h2><p>AOF(Append-only file) 。与 RDB 存储某个时刻的快照不同， AOF 持久化⽅式会记录客户端对服务器的每⼀次写操作命令，并将这些写操作以 Redis 协议追加保存到以后缀为 aof ⽂件末尾，在Redis服务器重启时，会加载并运⾏ aof ⽂件的命令，以达到恢复数据的⽬的。</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_1、开启aof持久化方式" tabindex="-1"><a class="header-anchor" href="#_1、开启aof持久化方式"><span>1、开启AOF持久化方式</span></a></h3><p>Redis默认不开启AOF持久化⽅式</p><p><strong>三种写入策略</strong></p><p><strong>always</strong>：客户端的每⼀个写操作都保存到 aof ⽂件当，这种策略很安全，但是每个写请注都有IO操作，所以也很慢</p><p><strong>everysec</strong>：appendfsync 的默认写⼊策略，每秒写⼊⼀次 aof ⽂件，因此，最多可能会丢失1s的数据。</p><p><strong>no</strong>：Redis 服务器不负责写⼊ aof ，⽽是交由操作系统来处理什么时候写⼊ aof ⽂件。更快，但也是最不安全的选择，不推荐使⽤。</p><h3 id="_2、aof重写" tabindex="-1"><a class="header-anchor" href="#_2、aof重写"><span>2、AOF重写</span></a></h3><p>AOF将客户端的每⼀个写操作都追加到 aof ⽂件末尾，⽐如对⼀个key多次执⾏incr命令，这时候， aof 保存每⼀次命令到aof⽂件中，aof⽂件会变得⾮常⼤。</p><p>​ aof⽂件太⼤，加载aof⽂件恢复数据时，就会⾮常慢，为了解决这个问题，Redis⽀持aof⽂件重写，通过重写aof，可以⽣成⼀个恢复当前数据的最少命令集</p><p>重写的好处：1.、压缩aof⽂件，减少磁盘占⽤量。2、将aof的命令压缩为最⼩命令集，加快了数据恢复的速度。</p><h3 id="_3、aof优缺点" tabindex="-1"><a class="header-anchor" href="#_3、aof优缺点"><span>3、AOF优缺点</span></a></h3><p><strong>优点</strong>：AOF只是追加⽇志⽂件，因此对服务器性能影响较⼩，速度⽐RDB要快，消耗的内存较少。 <strong>（恢复慢、影响大，但是完整性更好）</strong></p><p><strong>缺点</strong>：</p><p>1、 AOF⽅式⽣成的⽇志⽂件太⼤，即使通过AOF重写，⽂件体积仍然很⼤。 2、恢复数据的速度⽐RDB慢。</p><h2 id="三、rdb和aof对比" tabindex="-1"><a class="header-anchor" href="#三、rdb和aof对比"><span>三、RDB和AOF对比</span></a></h2><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当RDB与AOF两种⽅式都开启时，Redis会优先使⽤AOF⽇志来恢复数据，因为AOF保存的⽂件⽐RDB⽂件更完整。</p><p>RDB特点：（又快又小，但完整性不高） AOF特点：（恢复慢、影响大，但是完整性更好）</p><p>在实际应用中，可以同时开启RDB和AOF进行持久化，以便结合两者的优点</p>',49)]))}]]),g=JSON.parse('{"path":"/%E5%85%AD%E3%80%81Redis/6.2%20Redis%E6%8C%81%E4%B9%85%E5%8C%96%E5%8E%9F%E7%90%86.html","title":"6.2 Redis持久化原理","lang":"zh-CN","frontmatter":{"\x3c!--cover":"/assets/images/cover2.jpg--\x3e","icon":"pen-to-square","date":"2024-11-18T00:00:00.000Z","category":["Redis"],"tag":["redis持久化","RDB","AOF"],"star":true,"ticky":true,"description":"6.2 Redis持久化原理 Redis持久化方式有RDB和AOF 一、RDB RDB 是⼀种快照存储持久化⽅式，具体就是将 Redis 某⼀时刻的内存数据保存到硬盘的⽂件当中，默认保存的⽂件名为 dump.rdb ，⽽在 Redis 服务器启动时，会重新加载 dump.rdb ⽂件的数据到内存当中恢复数据。 1、开启RDB持久化方式 命令生成：客户端...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/myBlog/%E5%85%AD%E3%80%81Redis/6.2%20Redis%E6%8C%81%E4%B9%85%E5%8C%96%E5%8E%9F%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"Java笔记"}],["meta",{"property":"og:title","content":"6.2 Redis持久化原理"}],["meta",{"property":"og:description","content":"6.2 Redis持久化原理 Redis持久化方式有RDB和AOF 一、RDB RDB 是⼀种快照存储持久化⽅式，具体就是将 Redis 某⼀时刻的内存数据保存到硬盘的⽂件当中，默认保存的⽂件名为 dump.rdb ，⽽在 Redis 服务器启动时，会重新加载 dump.rdb ⽂件的数据到内存当中恢复数据。 1、开启RDB持久化方式 命令生成：客户端..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T10:03:31.000Z"}],["meta",{"property":"article:tag","content":"redis持久化"}],["meta",{"property":"article:tag","content":"RDB"}],["meta",{"property":"article:tag","content":"AOF"}],["meta",{"property":"article:published_time","content":"2024-11-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-18T10:03:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"6.2 Redis持久化原理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-18T10:03:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"冉庆\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"一、RDB","slug":"一、rdb","link":"#一、rdb","children":[{"level":3,"title":"1、开启RDB持久化方式","slug":"_1、开启rdb持久化方式","link":"#_1、开启rdb持久化方式","children":[]},{"level":3,"title":"2、RDB文件生成流程","slug":"_2、rdb文件生成流程","link":"#_2、rdb文件生成流程","children":[]},{"level":3,"title":"3、RDB的优缺点","slug":"_3、rdb的优缺点","link":"#_3、rdb的优缺点","children":[]}]},{"level":2,"title":"二、AOF","slug":"二、aof","link":"#二、aof","children":[{"level":3,"title":"1、开启AOF持久化方式","slug":"_1、开启aof持久化方式","link":"#_1、开启aof持久化方式","children":[]},{"level":3,"title":"2、AOF重写","slug":"_2、aof重写","link":"#_2、aof重写","children":[]},{"level":3,"title":"3、AOF优缺点","slug":"_3、aof优缺点","link":"#_3、aof优缺点","children":[]}]},{"level":2,"title":"三、RDB和AOF对比","slug":"三、rdb和aof对比","link":"#三、rdb和aof对比","children":[]}],"git":{"createdTime":1731922439000,"updatedTime":1731924211000,"contributors":[{"name":"ranqing","email":"2516488782@qq.com","commits":2}]},"readingTime":{"minutes":5.06,"words":1517},"filePathRelative":"六、Redis/6.2 Redis持久化原理.md","localizedDate":"2024年11月18日","excerpt":"\\n<p>Redis持久化方式有RDB和AOF</p>\\n<h2>一、RDB</h2>\\n<p>RDB 是⼀种快照存储持久化⽅式，具体就是将 Redis 某⼀时刻的内存数据保存到硬盘的⽂件当中，默认保存的⽂件名为 dump.rdb ，⽽在 Redis 服务器启动时，会重新加载 dump.rdb ⽂件的数据到内存当中恢复数据。</p>\\n<h3>1、开启RDB持久化方式</h3>\\n<ul>\\n<li>命令生成：客户端可以通过向 Redis 服务器发送 save 或 bgsave 命令让服务器⽣成 rdb ⽂件</li>\\n<li>通过服务器配置⽂件指定触发 RDB 条件。</li>\\n</ul>\\n<h4>1.1 命令生成方式</h4>","autoDesc":true}')}}]);