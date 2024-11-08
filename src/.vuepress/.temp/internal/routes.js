export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"博客主页","i":"home"} }],
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/intro.html.js"), meta: {"d":1730764800000,"l":"2024年11月5日","v":"/assets/images/cover3.jpg","e":"\n<p>将你的个人介绍和档案放置在此处。</p>\n","r":{"minutes":0.09,"words":28},"t":"五、介绍页","y":"a"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"d":1730678400000,"l":"2024年11月4日","c":["使用指南"],"r":{"minutes":0.1,"words":29},"t":"四、主要功能与配置演示","y":"a"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "demo_disable.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"c":["使用指南"],"g":["禁用"],"e":"<p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p>\n","r":{"minutes":0.43,"words":128},"t":"布局与功能禁用","i":"gears","O":4,"y":"a"} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "demo_encrypt.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"c":["使用指南"],"g":["加密"],"n":true,"r":{"minutes":0.51,"words":154},"t":"密码加密的文章","i":"lock","y":"a"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "demo_layout.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"c":["指南"],"g":["布局"],"e":"<p>布局包括:</p>\n<ul>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/navbar.html\" target=\"_blank\" rel=\"noopener noreferrer\">导航栏</a></li>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html\" target=\"_blank\" rel=\"noopener noreferrer\">侧边栏</a></li>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/footer.html\" target=\"_blank\" rel=\"noopener noreferrer\">页脚</a></li>\n</ul>","r":{"minutes":0.53,"words":159},"t":"布局","i":"object-group","O":2,"y":"a"} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "demo_markdown.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"c":["使用指南"],"g":["Markdown"],"e":"<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>\n<p>你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>\n","r":{"minutes":3.47,"words":1041},"t":"Markdown 展示","i":"fab fa-markdown","O":2,"y":"a"} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "demo_page.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"a":"Ms.Hope","d":1577836800000,"l":"2020年1月1日","c":["使用指南"],"g":["页面配置","使用指南"],"u":true,"v":"/assets/images/cover1.jpg","e":"<p><code>more</code> 注释之前的内容被视为文章摘要。</p>\n","r":{"minutes":1.76,"words":529},"t":"页面配置","i":"file","O":3,"y":"a"} }],
  ["/%E4%BA%8C%E3%80%81JVM/", { loader: () => import(/* webpackChunkName: "二、JVM_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/二、JVM/index.html.js"), meta: {"d":1730505600000,"l":"2024年11月2日","c":["使用指南"],"r":{"minutes":0.06,"words":19},"t":"二、JVM","y":"a"} }],
  ["/%E4%B8%89%E3%80%81%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/3.1%20%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F.html", { loader: () => import(/* webpackChunkName: "三、设计模式_3.1 代理模式.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/三、设计模式/3.1 代理模式.html.js"), meta: {"d":1730419200000,"l":"2024年11月1日","c":["设计模式"],"g":["代理模式","静态代理","JDK动态代理","cglib动态代理"],"v":"/assets/images/cover2.jpg","e":"\n<h2>介绍</h2>\n<p>代理模式提供了对目标对象额外的访问方式，即通过代理对象访问目标对象，这样可以在不修改原目标对象的前提下，提供额外的功能操作，扩展目标对象的功能。</p>\n<p>简言之，代理模式就是设置一个中间代理来控制访问原目标对象，以达到增强原对象的功能和简化访问方式。</p>\n<figure><figcaption>ae</figcaption></figure>\n<p><strong>UML理解</strong></p>\n<div class=\"language- line-numbers-mode\" data-highlighter=\"shiki\" data-ext=\"\" data-title=\"\" style=\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\"><pre class=\"shiki shiki-themes one-light one-dark-pro vp-code\"><code><span class=\"line\"><span>代理对象实现真实对象的同一个接口，然后代理对象引用真实对象，代理对象给真实对象的方法增强</span></span></code></pre>\n<div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0\"><div class=\"line-number\"></div></div></div>","r":{"minutes":6.48,"words":1943},"t":"3.1 代理模式","i":"pen-to-square","y":"a"} }],
  ["/%E4%B8%89%E3%80%81%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/", { loader: () => import(/* webpackChunkName: "三、设计模式_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/三、设计模式/index.html.js"), meta: {"d":1730592000000,"l":"2024年11月3日","c":["使用指南"],"r":{"minutes":0.07,"words":22},"t":"三、设计模式","y":"a"} }],
  ["/%E4%B8%80%E3%80%81Java%E5%9F%BA%E7%A1%80/", { loader: () => import(/* webpackChunkName: "一、Java基础_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/一、Java基础/index.html.js"), meta: {"d":1730419200000,"l":"2024年11月1日","c":["使用指南"],"r":{"minutes":0.07,"words":21},"t":"一、Java基础","y":"a"} }],
  ["/%E4%BA%8C%E3%80%81JVM/2.8%20Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E4%B8%8E%E7%BA%BF%E7%A8%8B/2.8.1%20%E8%A1%A1%E9%87%8F%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%80%A7%E8%83%BD.html", { loader: () => import(/* webpackChunkName: "二、JVM_2.8 Java内存模型与线程_2.8.1 衡量服务器性能.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/二、JVM/2.8 Java内存模型与线程/2.8.1 衡量服务器性能.html.js"), meta: {"d":1730678400000,"l":"2024年11月4日","c":["JVM","Java内存模型与线程"],"g":["QPS","TPS","PV","UV","RT","最佳线程数"],"e":"\n<blockquote>\n<p>QPS</p>\n</blockquote>\n<p>QPS表示系统/接口每秒能够处理的查询请求次数</p>\n<blockquote>\n<p>TPS</p>\n</blockquote>\n<p>TPS表示系统每秒能响应的请求次数（事务数），可以衡量一个服务器性能的高低好坏。</p>\n<p>TPS和QPS区别：一个事务指客户端向服务器发送请求然后服务器作出反应的过程。而在TPS中，为处理1次请求可能会引发后续多次对服务器端的访问才能完成这次工作。每次访问都算1次QPS，所以一次TPS可能包含多个QPS。</p>\n<p>如：访问一个页面会请求服务器3次，产生了1个T，3个Q。</p>","r":{"minutes":1.26,"words":379},"t":"2.8.1 衡量服务器性能","i":"pen-to-square","y":"a"} }],
  ["/%E4%BA%8C%E3%80%81JVM/2.8%20Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E4%B8%8E%E7%BA%BF%E7%A8%8B/2.8.2%20Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B.html", { loader: () => import(/* webpackChunkName: "二、JVM_2.8 Java内存模型与线程_2.8.2 Java内存模型.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/二、JVM/2.8 Java内存模型与线程/2.8.2 Java内存模型.html.js"), meta: {"d":1730851200000,"l":"2024年11月6日","c":["JVM","Java内存模型与线程"],"g":["主内存与工作内存","volatile关键字","Java内存模型特征","happens-before"],"e":"\n<h2>一、主内存与工作内存</h2>\n<p>Java内存模型规定了所有的变量都存储在主内存中，每条线程还有自己的工作内存，线程的工作内存保存了被该线程使用的变量的主内存副本，线程对变量的所有操作（读取、赋值等）都必须在工作内存中进行，而不能直接读写主内存中的数据。不同的线程之间也无法直接访问对方工作内存中的变量，线程间变量值的传递均需要通过主内存来完成。</p>\n<h2>二、volatile型变量特殊规则</h2>\n<p>一个变量被定义成volatile后，它将具备两项特性：</p>\n<h3>1、可见性</h3>\n<p>保证此变量对所有线程的可见性，这里的“可见性”是指一条线程修改了这个变量的值，新值对于其他线程来说是立即可知的</p>","r":{"minutes":7.98,"words":2394},"t":"2.8.2 Java内存模型","i":"pen-to-square","y":"a"} }],
  ["/%E4%BA%8C%E3%80%81JVM/2.8%20Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E4%B8%8E%E7%BA%BF%E7%A8%8B/2.8.3%20Java%E4%B8%8E%E7%BA%BF%E7%A8%8B.html", { loader: () => import(/* webpackChunkName: "二、JVM_2.8 Java内存模型与线程_2.8.3 Java与线程.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/二、JVM/2.8 Java内存模型与线程/2.8.3 Java与线程.html.js"), meta: {"d":1730851200000,"l":"2024年11月6日","c":["JVM","Java内存模型与线程"],"g":["内核线程实现","用户线程实现","混合实现","线程调度","状态转换"],"e":"\n<p>进程是操作系统分配资源的最小单元，线程是操作系统调度的最小单元。Thread所有关键方法都被声明为Native。</p>\n<p>操作系统实现线程的三种方式：</p>\n<ul>\n<li>使用内核线程实现（线程和内核线程1:1实现）</li>\n<li>使用用户线程实现（进程和用户线程1:N实现）</li>\n<li>使用用户线程➕轻量级进程混合实现（N:M实现）</li>\n</ul>\n<h2>一、内核线程实现</h2>\n<p><strong>Java线程是采用内核线程来实现的。</strong></p>\n<p>内核线程是直接由操作系统内核支持的线程，这种线程由内核来完成线程切换，内核通过操纵调度器对线程进行调度，并负责将线程的任务映射到各个处理器上。</p>","r":{"minutes":4.32,"words":1295},"t":"2.8.3 Java与线程","i":"pen-to-square","y":"a"} }],
  ["/%E4%BA%8C%E3%80%81JVM/2.8%20Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E4%B8%8E%E7%BA%BF%E7%A8%8B/2.8.4%20Java%E4%B8%8E%E5%8D%8F%E7%A8%8B.html", { loader: () => import(/* webpackChunkName: "二、JVM_2.8 Java内存模型与线程_2.8.4 Java与协程.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/二、JVM/2.8 Java内存模型与线程/2.8.4 Java与协程.html.js"), meta: {"d":1730937600000,"l":"2024年11月7日","c":["JVM","Java内存模型与线程"],"g":["线程缺陷","协程"],"e":"\n<h2>一、线程的缺陷</h2>\n<p>在理解虚拟线程前，我们先回顾一下线程的特点：</p>\n<ul>\n<li>线程是由操作系统创建并调度的资源；</li>\n<li>线程切换会耗费大量CPU时间；</li>\n<li>一个系统能同时调度的线程数量是有限的，通常在几百至几千级别。</li>\n</ul>\n<p>因此，我们说线程是一种重量级资源。在服务器端，对用户请求，通常都实现为一个线程处理一个请求。由于用户的请求数往往远超操作系统能同时调度的线程数量，所以通常使用线程池来尽量减少频繁创建和销毁线程的成本</p>\n<p>对于需要处理大量IO请求的任务来说，使用线程是低效的，因为一旦读写IO，线程就必须进入等待状态，直到IO数据返回。常见的IO操作包括：</p>","r":{"minutes":3.18,"words":954},"t":"2.8.4 Java与协程","i":"pen-to-square","y":"a"} }],
  ["/%E4%BA%8C%E3%80%81JVM/2.7%20%E5%89%8D%E7%AB%AF%E7%BC%96%E8%AF%91%E4%B8%8E%E4%BC%98%E5%8C%96/2.7.1%20%E8%AF%AD%E6%B3%95%E7%B3%96.html", { loader: () => import(/* webpackChunkName: "二、JVM_2.7 前端编译与优化_2.7.1 语法糖.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/二、JVM/2.7 前端编译与优化/2.7.1 语法糖.html.js"), meta: {"d":1730678400000,"l":"2024年11月4日","c":["JVM","前端编译与优化"],"g":["final关键字","泛型","装箱拆箱"],"e":"\n<p>指的是在计算机语言中添加的某种语法，这种语法对语言的编译结果和功能并没有实际影响，但是却能更方便程序员使用该语言。</p>\n<p>常见的语法糖：泛型、自动装箱拆箱、条件编译等。</p>\n<p><strong>解语法糖</strong>：Java虚拟机运行时并不支持这些语法，它们在编译阶段会还原回原始的基础语法结构，这个过程叫解语法糖。</p>\n","r":{"minutes":0.53,"words":159},"t":"2.7.1 语法糖","i":"pen-to-square","y":"a"} }],
  ["/%E4%BA%8C%E3%80%81JVM/2.7%20%E5%89%8D%E7%AB%AF%E7%BC%96%E8%AF%91%E4%B8%8E%E4%BC%98%E5%8C%96/2.7.2%20%E6%B3%9B%E5%9E%8B.html", { loader: () => import(/* webpackChunkName: "二、JVM_2.7 前端编译与优化_2.7.2 泛型.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/二、JVM/2.7 前端编译与优化/2.7.2 泛型.html.js"), meta: {"d":1730678400000,"l":"2024年11月4日","c":["JVM","前端编译与优化"],"g":["泛型","类型擦除"],"e":"\n<p>泛型的本质是参数化类型或者参数化多态的应用。</p>\n<h2>概念</h2>\n<p>Java语言中的泛型只在程序源码中存在，在编译之后的字节码文件中，全部泛型都被替换为原来的裸类型，并在相应的地方插入了强制转型代码。因此对于Java来说，<code>ArrayList&lt;Integer&gt;</code>与<code>ArrayList&lt;String&gt;</code>其实是同一个类型。</p>\n<p><strong>优缺点</strong></p>\n<div class=\"language-java line-numbers-mode\" data-highlighter=\"shiki\" data-ext=\"java\" data-title=\"java\" style=\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\"><pre class=\"shiki shiki-themes one-light one-dark-pro vp-code\"><code><span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#E06C75\">缺点：性能低，需要不断的拆箱和装箱</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#E06C75\">优点：擦除式泛型的实现只需要在Javac编译器上做出改进即可，不需要改动字节码、不需要改动虚拟机，保证了和之前版本的兼容性。</span></span></code></pre>\n<div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>","r":{"minutes":3.24,"words":973},"t":"2.7.2 泛型","i":"pen-to-square","y":"a"} }],
  ["/%E4%BA%8C%E3%80%81JVM/2.7%20%E5%89%8D%E7%AB%AF%E7%BC%96%E8%AF%91%E4%B8%8E%E4%BC%98%E5%8C%96/2.7.3%20%E8%87%AA%E5%8A%A8%E8%A3%85%E7%AE%B1%E3%80%81%E6%8B%86%E7%AE%B1.html", { loader: () => import(/* webpackChunkName: "二、JVM_2.7 前端编译与优化_2.7.3 自动装箱、拆箱.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/二、JVM/2.7 前端编译与优化/2.7.3 自动装箱、拆箱.html.js"), meta: {"d":1730678400000,"l":"2024年11月4日","c":["JVM","前端编译与优化"],"g":["装箱、拆箱","语法糖"],"e":"\n<h2>一、什么是装箱</h2>\n<p>为什么要装箱？——让基本类型具备对象的特征，实现更多的功能。</p>\n<div class=\"language-java line-numbers-mode\" data-highlighter=\"shiki\" data-ext=\"java\" data-title=\"java\" style=\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\"><pre class=\"shiki shiki-themes one-light one-dark-pro vp-code\"><code><span class=\"line\"><span style=\"--shiki-light:#C18401;--shiki-dark:#E5C07B\">Integer</span><span style=\"--shiki-light:#E45649;--shiki-dark:#E06C75\"> i</span><span style=\"--shiki-light:#383A42;--shiki-dark:#56B6C2\">=</span><span style=\"--shiki-light:#A626A4;--shiki-dark:#C678DD\">new</span><span style=\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\"> Integer</span><span style=\"--shiki-light:#383A42;--shiki-dark:#E06C75\">(</span><span style=\"--shiki-light:#986801;--shiki-dark:#D19A66\">10</span><span style=\"--shiki-light:#383A42;--shiki-dark:#E06C75\">)</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">;</span><span style=\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\">//JDK5前必须new</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#C18401;--shiki-dark:#E5C07B\">Integer</span><span style=\"--shiki-light:#E45649;--shiki-dark:#E06C75\"> i</span><span style=\"--shiki-light:#383A42;--shiki-dark:#56B6C2\">=</span><span style=\"--shiki-light:#986801;--shiki-dark:#D19A66\">10</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">;</span><span style=\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\">//JDK5后自动装箱</span></span></code></pre>\n<div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>","r":{"minutes":2.19,"words":658},"t":"2.7.3 自动装箱、拆箱","i":"pen-to-square","y":"a"} }],
  ["/%E4%BA%8C%E3%80%81JVM/2.9%20%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E4%B8%8E%E9%94%81%E4%BC%98%E5%8C%96/2.9.1%20Java%E8%AF%AD%E8%A8%80%E4%B8%AD%E7%9A%84%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8.html", { loader: () => import(/* webpackChunkName: "二、JVM_2.9 线程安全与锁优化_2.9.1 Java语言中的线程安全.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/二、JVM/2.9 线程安全与锁优化/2.9.1 Java语言中的线程安全.html.js"), meta: {"d":1730937600000,"l":"2024年11月7日","c":["JVM","前端编译与优化"],"g":["泛型","类型擦除"],"e":"\n<p>什么是<strong>线程安全</strong>：当多个线程同时访问一个对象时，调用这个对象的行为都可以获得正确的结果，那就称这个对象是线程安全的。</p>\n<p>Java语言中操作共享的数据分为以下五类：</p>\n<ul>\n<li>不可变</li>\n<li>绝对线程安全</li>\n<li>相对线程安全</li>\n<li>线程兼容</li>\n<li>线程对立</li>\n</ul>\n<h2>1、不可变</h2>\n<p>不可变的对象一定是线程安全的，用final关键字修饰就可以保证它是不可变的。可以类比java.lang.String类的对象实例，它是一个典型的不可变对象，用户调用它的subString()、replace()、和concat()这些方法都不会影响它原来的值，只会返回一个新构建的字符串（关于String字符串的理解后续会发布一篇）。</p>","r":{"minutes":4.02,"words":1206},"t":"2.9.1 Java语言中的线程安全","i":"pen-to-square","y":"a"} }],
  ["/%E4%B8%80%E3%80%81Java%E5%9F%BA%E7%A1%80/1.1%20JDK8%E6%96%B0%E7%89%B9%E6%80%A7/1.1.1%20%E6%8E%A5%E5%8F%A3%E7%9A%84%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95%E5%92%8C%E9%BB%98%E8%AE%A4%E6%96%B9%E6%B3%95.html", { loader: () => import(/* webpackChunkName: "一、Java基础_1.1 JDK8新特性_1.1.1 接口的静态方法和默认方法.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/一、Java基础/1.1 JDK8新特性/1.1.1 接口的静态方法和默认方法.html.js"), meta: {"d":1730419200000,"l":"2024年11月1日","c":["JDK8新特性"],"g":["default关键字","static关键字"],"e":"\n<p>JDK8前interface</p>\n<div class=\"language- line-numbers-mode\" data-highlighter=\"shiki\" data-ext=\"\" data-title=\"\" style=\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\"><pre class=\"shiki shiki-themes one-light one-dark-pro vp-code\"><code><span class=\"line\"><span>变量修饰符：public、static、final</span></span>\n<span class=\"line\"><span>方法：public、abstract</span></span></code></pre>\n<div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>","r":{"minutes":2.01,"words":604},"t":"1.1.1 接口的静态方法和默认方法","i":"pen-to-square","y":"a"} }],
  ["/%E4%B8%80%E3%80%81Java%E5%9F%BA%E7%A1%80/1.2%20%E5%85%B3%E9%94%AE%E5%AD%97/1.2.1%20final%E5%85%B3%E9%94%AE%E5%AD%97%E5%AF%B9%E7%90%86%E8%A7%A3.html", { loader: () => import(/* webpackChunkName: "一、Java基础_1.2 关键字_1.2.1 final关键字对理解.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/一、Java基础/1.2 关键字/1.2.1 final关键字对理解.html.js"), meta: {"d":1730332800000,"l":"2024年10月31日","c":["JVM"],"g":["final关键字","final内存语义"],"e":"\n<h2>一、修饰基本数据类型</h2>\n<p>当final修饰的是一个基本数据类型数据时, 这个数据的值在初始化后将不能被改变。final修饰基本数据类型时的内存示意图：</p>\n<figure><figcaption>image</figcaption></figure>\n<p>变量a在初始化后将永远指向003这块内存, 而这块内存在初始化后将永远保存数值100。</p>\n<div class=\"language-java line-numbers-mode\" data-highlighter=\"shiki\" data-ext=\"java\" data-title=\"java\" style=\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\"><pre class=\"shiki shiki-themes one-light one-dark-pro vp-code\"><code><span class=\"line\"><span style=\"--shiki-light:#A626A4;--shiki-dark:#C678DD\">final</span><span style=\"--shiki-light:#A626A4;--shiki-dark:#C678DD\"> int</span><span style=\"--shiki-light:#E45649;--shiki-dark:#E06C75\"> a</span><span style=\"--shiki-light:#383A42;--shiki-dark:#56B6C2\">=</span><span style=\"--shiki-light:#986801;--shiki-dark:#D19A66\">100</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#E06C75\">a</span><span style=\"--shiki-light:#383A42;--shiki-dark:#56B6C2\">=</span><span style=\"--shiki-light:#986801;--shiki-dark:#D19A66\">30</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">;</span><span style=\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\">//编译器会报错提示无法将值赋给final变量a</span></span></code></pre>\n<div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>","r":{"minutes":3.8,"words":1139},"t":"1.2.1 final关键字的理解","i":"pen-to-square","y":"a"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/%E4%BA%8C%E3%80%81JVM/2.8%20Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E4%B8%8E%E7%BA%BF%E7%A8%8B/", { loader: () => import(/* webpackChunkName: "二、JVM_2.8 Java内存模型与线程_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/二、JVM/2.8 Java内存模型与线程/index.html.js"), meta: {"t":"2.8 Java内存模型与线程"} }],
  ["/%E4%BA%8C%E3%80%81JVM/2.7%20%E5%89%8D%E7%AB%AF%E7%BC%96%E8%AF%91%E4%B8%8E%E4%BC%98%E5%8C%96/", { loader: () => import(/* webpackChunkName: "二、JVM_2.7 前端编译与优化_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/二、JVM/2.7 前端编译与优化/index.html.js"), meta: {"t":"2.7 前端编译与优化"} }],
  ["/%E4%BA%8C%E3%80%81JVM/2.9%20%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E4%B8%8E%E9%94%81%E4%BC%98%E5%8C%96/", { loader: () => import(/* webpackChunkName: "二、JVM_2.9 线程安全与锁优化_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/二、JVM/2.9 线程安全与锁优化/index.html.js"), meta: {"t":"2.9 线程安全与锁优化"} }],
  ["/%E4%B8%80%E3%80%81Java%E5%9F%BA%E7%A1%80/1.1%20JDK8%E6%96%B0%E7%89%B9%E6%80%A7/", { loader: () => import(/* webpackChunkName: "一、Java基础_1.1 JDK8新特性_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/一、Java基础/1.1 JDK8新特性/index.html.js"), meta: {"t":"1.1 JDK8新特性"} }],
  ["/%E4%B8%80%E3%80%81Java%E5%9F%BA%E7%A1%80/1.2%20%E5%85%B3%E9%94%AE%E5%AD%97/", { loader: () => import(/* webpackChunkName: "一、Java基础_1.2 关键字_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/一、Java基础/1.2 关键字/index.html.js"), meta: {"t":"1.2 关键字"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"t":"分类","I":false} }],
  ["/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "category_使用指南_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/使用指南/index.html.js"), meta: {"t":"使用指南 分类","I":false} }],
  ["/category/%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "category_指南_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/指南/index.html.js"), meta: {"t":"指南 分类","I":false} }],
  ["/category/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/", { loader: () => import(/* webpackChunkName: "category_设计模式_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/设计模式/index.html.js"), meta: {"t":"设计模式 分类","I":false} }],
  ["/category/jvm/", { loader: () => import(/* webpackChunkName: "category_jvm_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/jvm/index.html.js"), meta: {"t":"JVM 分类","I":false} }],
  ["/category/java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E4%B8%8E%E7%BA%BF%E7%A8%8B/", { loader: () => import(/* webpackChunkName: "category_java内存模型与线程_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/java内存模型与线程/index.html.js"), meta: {"t":"Java内存模型与线程 分类","I":false} }],
  ["/category/%E5%89%8D%E7%AB%AF%E7%BC%96%E8%AF%91%E4%B8%8E%E4%BC%98%E5%8C%96/", { loader: () => import(/* webpackChunkName: "category_前端编译与优化_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/前端编译与优化/index.html.js"), meta: {"t":"前端编译与优化 分类","I":false} }],
  ["/category/jdk8%E6%96%B0%E7%89%B9%E6%80%A7/", { loader: () => import(/* webpackChunkName: "category_jdk8新特性_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/jdk8新特性/index.html.js"), meta: {"t":"JDK8新特性 分类","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"t":"标签","I":false} }],
  ["/tag/%E7%A6%81%E7%94%A8/", { loader: () => import(/* webpackChunkName: "tag_禁用_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/禁用/index.html.js"), meta: {"t":"标签: 禁用","I":false} }],
  ["/tag/%E5%8A%A0%E5%AF%86/", { loader: () => import(/* webpackChunkName: "tag_加密_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/加密/index.html.js"), meta: {"t":"标签: 加密","I":false} }],
  ["/tag/%E5%B8%83%E5%B1%80/", { loader: () => import(/* webpackChunkName: "tag_布局_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/布局/index.html.js"), meta: {"t":"标签: 布局","I":false} }],
  ["/tag/markdown/", { loader: () => import(/* webpackChunkName: "tag_markdown_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/markdown/index.html.js"), meta: {"t":"标签: Markdown","I":false} }],
  ["/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/", { loader: () => import(/* webpackChunkName: "tag_页面配置_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/页面配置/index.html.js"), meta: {"t":"标签: 页面配置","I":false} }],
  ["/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "tag_使用指南_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/使用指南/index.html.js"), meta: {"t":"标签: 使用指南","I":false} }],
  ["/tag/%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F/", { loader: () => import(/* webpackChunkName: "tag_代理模式_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/代理模式/index.html.js"), meta: {"t":"标签: 代理模式","I":false} }],
  ["/tag/%E9%9D%99%E6%80%81%E4%BB%A3%E7%90%86/", { loader: () => import(/* webpackChunkName: "tag_静态代理_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/静态代理/index.html.js"), meta: {"t":"标签: 静态代理","I":false} }],
  ["/tag/jdk%E5%8A%A8%E6%80%81%E4%BB%A3%E7%90%86/", { loader: () => import(/* webpackChunkName: "tag_jdk动态代理_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/jdk动态代理/index.html.js"), meta: {"t":"标签: JDK动态代理","I":false} }],
  ["/tag/cglib%E5%8A%A8%E6%80%81%E4%BB%A3%E7%90%86/", { loader: () => import(/* webpackChunkName: "tag_cglib动态代理_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/cglib动态代理/index.html.js"), meta: {"t":"标签: cglib动态代理","I":false} }],
  ["/tag/qps/", { loader: () => import(/* webpackChunkName: "tag_qps_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/qps/index.html.js"), meta: {"t":"标签: QPS","I":false} }],
  ["/tag/tps/", { loader: () => import(/* webpackChunkName: "tag_tps_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/tps/index.html.js"), meta: {"t":"标签: TPS","I":false} }],
  ["/tag/pv/", { loader: () => import(/* webpackChunkName: "tag_pv_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/pv/index.html.js"), meta: {"t":"标签: PV","I":false} }],
  ["/tag/uv/", { loader: () => import(/* webpackChunkName: "tag_uv_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/uv/index.html.js"), meta: {"t":"标签: UV","I":false} }],
  ["/tag/rt/", { loader: () => import(/* webpackChunkName: "tag_rt_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/rt/index.html.js"), meta: {"t":"标签: RT","I":false} }],
  ["/tag/%E6%9C%80%E4%BD%B3%E7%BA%BF%E7%A8%8B%E6%95%B0/", { loader: () => import(/* webpackChunkName: "tag_最佳线程数_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/最佳线程数/index.html.js"), meta: {"t":"标签: 最佳线程数","I":false} }],
  ["/tag/%E4%B8%BB%E5%86%85%E5%AD%98%E4%B8%8E%E5%B7%A5%E4%BD%9C%E5%86%85%E5%AD%98/", { loader: () => import(/* webpackChunkName: "tag_主内存与工作内存_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/主内存与工作内存/index.html.js"), meta: {"t":"标签: 主内存与工作内存","I":false} }],
  ["/tag/volatile%E5%85%B3%E9%94%AE%E5%AD%97/", { loader: () => import(/* webpackChunkName: "tag_volatile关键字_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/volatile关键字/index.html.js"), meta: {"t":"标签: volatile关键字","I":false} }],
  ["/tag/java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E7%89%B9%E5%BE%81/", { loader: () => import(/* webpackChunkName: "tag_java内存模型特征_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/java内存模型特征/index.html.js"), meta: {"t":"标签: Java内存模型特征","I":false} }],
  ["/tag/happens-before/", { loader: () => import(/* webpackChunkName: "tag_happens-before_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/happens-before/index.html.js"), meta: {"t":"标签: happens-before","I":false} }],
  ["/tag/%E5%86%85%E6%A0%B8%E7%BA%BF%E7%A8%8B%E5%AE%9E%E7%8E%B0/", { loader: () => import(/* webpackChunkName: "tag_内核线程实现_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/内核线程实现/index.html.js"), meta: {"t":"标签: 内核线程实现","I":false} }],
  ["/tag/%E7%94%A8%E6%88%B7%E7%BA%BF%E7%A8%8B%E5%AE%9E%E7%8E%B0/", { loader: () => import(/* webpackChunkName: "tag_用户线程实现_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/用户线程实现/index.html.js"), meta: {"t":"标签: 用户线程实现","I":false} }],
  ["/tag/%E6%B7%B7%E5%90%88%E5%AE%9E%E7%8E%B0/", { loader: () => import(/* webpackChunkName: "tag_混合实现_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/混合实现/index.html.js"), meta: {"t":"标签: 混合实现","I":false} }],
  ["/tag/%E7%BA%BF%E7%A8%8B%E8%B0%83%E5%BA%A6/", { loader: () => import(/* webpackChunkName: "tag_线程调度_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/线程调度/index.html.js"), meta: {"t":"标签: 线程调度","I":false} }],
  ["/tag/%E7%8A%B6%E6%80%81%E8%BD%AC%E6%8D%A2/", { loader: () => import(/* webpackChunkName: "tag_状态转换_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/状态转换/index.html.js"), meta: {"t":"标签: 状态转换","I":false} }],
  ["/tag/%E7%BA%BF%E7%A8%8B%E7%BC%BA%E9%99%B7/", { loader: () => import(/* webpackChunkName: "tag_线程缺陷_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/线程缺陷/index.html.js"), meta: {"t":"标签: 线程缺陷","I":false} }],
  ["/tag/%E5%8D%8F%E7%A8%8B/", { loader: () => import(/* webpackChunkName: "tag_协程_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/协程/index.html.js"), meta: {"t":"标签: 协程","I":false} }],
  ["/tag/final%E5%85%B3%E9%94%AE%E5%AD%97/", { loader: () => import(/* webpackChunkName: "tag_final关键字_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/final关键字/index.html.js"), meta: {"t":"标签: final关键字","I":false} }],
  ["/tag/%E6%B3%9B%E5%9E%8B/", { loader: () => import(/* webpackChunkName: "tag_泛型_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/泛型/index.html.js"), meta: {"t":"标签: 泛型","I":false} }],
  ["/tag/%E8%A3%85%E7%AE%B1%E6%8B%86%E7%AE%B1/", { loader: () => import(/* webpackChunkName: "tag_装箱拆箱_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/装箱拆箱/index.html.js"), meta: {"t":"标签: 装箱拆箱","I":false} }],
  ["/tag/%E7%B1%BB%E5%9E%8B%E6%93%A6%E9%99%A4/", { loader: () => import(/* webpackChunkName: "tag_类型擦除_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/类型擦除/index.html.js"), meta: {"t":"标签: 类型擦除","I":false} }],
  ["/tag/%E8%A3%85%E7%AE%B1%E3%80%81%E6%8B%86%E7%AE%B1/", { loader: () => import(/* webpackChunkName: "tag_装箱、拆箱_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/装箱、拆箱/index.html.js"), meta: {"t":"标签: 装箱、拆箱","I":false} }],
  ["/tag/%E8%AF%AD%E6%B3%95%E7%B3%96/", { loader: () => import(/* webpackChunkName: "tag_语法糖_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/语法糖/index.html.js"), meta: {"t":"标签: 语法糖","I":false} }],
  ["/tag/default%E5%85%B3%E9%94%AE%E5%AD%97/", { loader: () => import(/* webpackChunkName: "tag_default关键字_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/default关键字/index.html.js"), meta: {"t":"标签: default关键字","I":false} }],
  ["/tag/static%E5%85%B3%E9%94%AE%E5%AD%97/", { loader: () => import(/* webpackChunkName: "tag_static关键字_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/static关键字/index.html.js"), meta: {"t":"标签: static关键字","I":false} }],
  ["/tag/final%E5%86%85%E5%AD%98%E8%AF%AD%E4%B9%89/", { loader: () => import(/* webpackChunkName: "tag_final内存语义_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/final内存语义/index.html.js"), meta: {"t":"标签: final内存语义","I":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"t":"文章","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"t":"星标","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"t":"时间轴","I":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
