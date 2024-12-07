"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7421],{6262:(e,t)=>{t.A=(e,t)=>{const r=e.__vccOpts||e;for(const[e,i]of t)r[e]=i;return r}},7553:(e,t,r)=>{r.r(t),r.d(t,{comp:()=>o,data:()=>p});var i=r(641);const n={},o=(0,r(6262).A)(n,[["render",function(e,t){return(0,i.uX)(),(0,i.CE)("div",null,t[0]||(t[0]=[(0,i.Fv)('<h1 id="_2-3-6-实战-内存分配与回收策略" tabindex="-1"><a class="header-anchor" href="#_2-3-6-实战-内存分配与回收策略"><span>2.3.6 实战：内存分配与回收策略</span></a></h1><p><strong>JDK8堆内存划分</strong>：</p><ul><li><p>新生代</p><ul><li>eden区 8</li><li>survivor0区 1</li><li>survivor1区 1</li></ul></li><li><p>老年代</p></li><li><p>元空间</p></li></ul><p><strong>1、对象在新生代Eden区分配</strong></p><p>当Eden区没有足够空间进行分配时，虚拟机将发起一次Minor GC，然后如果Survivor区无法装下，分配担保机制将对象转移到老年代。</p><p><strong>2、大对象直接进入老年代</strong></p><p>避免Eden区和两个Survivor区之间来回复制，产生大量内存复制操作。</p><p>注意：</p><ul><li>只有eden区满了才会触发Minor GC，Survivor区满了不会触发MinorGC</li><li>Survivor区满了，触发规则进入老年代</li></ul><p><strong>3、长期存活的对象进入老年代</strong></p><p>对象如果经过第一次Minor GC后仍然存活，并且能被Survivor区容纳的话，该对象会被移动到Sruvivor区中，并且将对象年龄设置为1岁。</p><ul><li>对象每熬过一次Minor GC，年龄就增加1，当增加到默认值15，就会被晋升到老年代中。</li><li>如果survivor空间中相同年龄所有对象大小的总和大于Survivor区的一半，年龄大于或者等于该年龄的对象就可以直接进入老年代</li></ul><p><strong>4、空间分配担保</strong></p><p>只要老年代的连续空间大于新生代总对象大小或者历次晋升的平均大小，就会进行Minor GC，否则进行Full GC</p>',14)]))}]]),p=JSON.parse('{"path":"/%E4%BA%8C%E3%80%81JVM/2.3%20%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8%E4%B8%8E%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D%E7%AD%96%E7%95%A5/2.3.6%20%E5%AE%9E%E6%88%98%EF%BC%9A%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D%E4%B8%8E%E5%9B%9E%E6%94%B6%E7%AD%96%E7%95%A5.html","title":"2.3.6 实战：内存分配与回收策略","lang":"zh-CN","frontmatter":{"\x3c!--cover":"/assets/images/cover2.jpg--\x3e","icon":"pen-to-square","date":"2024-12-07T00:00:00.000Z","category":["JVM","垃圾收集器与内存分配策略"],"tag":["内存分配与回收策略"],"star":true,"ticky":true,"description":"2.3.6 实战：内存分配与回收策略 JDK8堆内存划分： 新生代 eden区 8 survivor0区 1 survivor1区 1 老年代 元空间 1、对象在新生代Eden区分配 当Eden区没有足够空间进行分配时，虚拟机将发起一次Minor GC，然后如果Survivor区无法装下，分配担保机制将对象转移到老年代。 2、大对象直接进入老年代 避免...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/myBlog/%E4%BA%8C%E3%80%81JVM/2.3%20%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8%E4%B8%8E%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D%E7%AD%96%E7%95%A5/2.3.6%20%E5%AE%9E%E6%88%98%EF%BC%9A%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D%E4%B8%8E%E5%9B%9E%E6%94%B6%E7%AD%96%E7%95%A5.html"}],["meta",{"property":"og:site_name","content":"Java笔记"}],["meta",{"property":"og:title","content":"2.3.6 实战：内存分配与回收策略"}],["meta",{"property":"og:description","content":"2.3.6 实战：内存分配与回收策略 JDK8堆内存划分： 新生代 eden区 8 survivor0区 1 survivor1区 1 老年代 元空间 1、对象在新生代Eden区分配 当Eden区没有足够空间进行分配时，虚拟机将发起一次Minor GC，然后如果Survivor区无法装下，分配担保机制将对象转移到老年代。 2、大对象直接进入老年代 避免..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T08:27:26.000Z"}],["meta",{"property":"article:tag","content":"内存分配与回收策略"}],["meta",{"property":"article:published_time","content":"2024-12-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T08:27:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2.3.6 实战：内存分配与回收策略\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-07T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T08:27:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"冉庆\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1733560046000,"updatedTime":1733560046000,"contributors":[{"name":"ranqing","email":"2516488782@qq.com","commits":1}]},"readingTime":{"minutes":1.34,"words":401},"filePathRelative":"二、JVM/2.3 垃圾收集器与内存分配策略/2.3.6 实战：内存分配与回收策略.md","localizedDate":"2024年12月7日","excerpt":"\\n<p><strong>JDK8堆内存划分</strong>：</p>\\n<ul>\\n<li>\\n<p>新生代</p>\\n<ul>\\n<li>eden区 8</li>\\n<li>survivor0区 1</li>\\n<li>survivor1区 1</li>\\n</ul>\\n</li>\\n<li>\\n<p>老年代</p>\\n</li>\\n<li>\\n<p>元空间</p>\\n</li>\\n</ul>\\n<p><strong>1、对象在新生代Eden区分配</strong></p>\\n<p>当Eden区没有足够空间进行分配时，虚拟机将发起一次Minor GC，然后如果Survivor区无法装下，分配担保机制将对象转移到老年代。</p>","autoDesc":true}')}}]);