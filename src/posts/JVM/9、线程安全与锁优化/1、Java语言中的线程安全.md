---
<!--cover: /assets/images/cover2.jpg-->
icon: pen-to-square
date: 2024-11-07
category:
  - JVM
  - 前端编译与优化
tag:
  - 泛型
  - 类型擦除
star: true
ticky: true
---
# 9.1 Java语言中的线程安全

什么是**线程安全**：当多个线程同时访问一个对象时，调用这个对象的行为都可以获得正确的结果，那就称这个对象是线程安全的。

Java语言中操作共享的数据分为以下五类：

- 不可变
- 绝对线程安全
- 相对线程安全
- 线程兼容
- 线程对立

## 1、不可变

不可变的对象一定是线程安全的，用final关键字修饰就可以保证它是不可变的。可以类比java.lang.String类的对象实例，它是一个典型的不可变对象，用户调用它的subString()、replace()、和concat()这些方法都不会影响它原来的值，只会返回一个新构建的字符串（关于String字符串的理解后续会发布一篇）。

Java类库API中符合不可变要求的类型常用的有：String、Number、Long、Double等包装器类型、BigInteger和BigDecimal等，但是Number子类型的原子类AtomicInteger和AtomicLong则是可变的。

## 2、绝对线程安全

众所周知java.tuil.Vector是一个线程安全的容器，因为它的add()、get()、size()等方法都是被synchronized修饰的，尽管效率不高，但保证了原子性、可见性和有序性。不过，即使它所有的方法都被修饰成synchronized，也不意味着调用它的时候就永远不需要同步手段了，看下面的例子：

```java
/**
 * @Author Ran Qing
 * @Date 2024/11/7 16:49
 */
public class VectorTest {

    private static  Vector<Integer> vector=new Vector<>();

    public static void main(String[] args) {
        while (true){
            for (int i = 0; i < 10; i++) {
                vector.add(i);
            }

            Thread removeThread =new Thread(new Runnable() {
                @Override
                public void run() {
                    for (int i = 0; i < vector.size(); i++) {
                        vector.remove(i);
                    }
                }
            });

            Thread printThread=new Thread(new Runnable() {
                @Override
                public void run() {
                    for (int i = 0; i < vector.size(); i++) {
                        System.out.println(vector.get(i));
                    }
                }
            });

            removeThread.start();
            printThread.start();

            while (Thread.activeCount() > 20);
        }
    }
}

```

运行结果抛出了ArrayIndexOutOfBoundsException。因为如果另一个线程恰好在错误的时间里删除了一个元素，导致需要i已经不再可用，再用i访问数组就会抛出一个ArrayIndexOutOfBoundsException异常。

也就是说：在多线程环境中，如果不在方法调用端做额外的同步措施，使用这段代码仍然是不安全的。

为了保证vector.size()和vector.remove()、vector.get()的原子性，加入同步来保证Vector访问的线程安全性：

```java
Thread removeThread =new Thread(new Runnable() {
                @Override
                public void run() {
                    synchronized (vector){
                        for (int i = 0; i < vector.size(); i++) {
                            vector.remove(i);
                        }
                    }
                }
            });
Thread printThread=new Thread(new Runnable() {
                @Override
                public void run() {
                    synchronized (vector){
                        for (int i = 0; i < vector.size(); i++) {
                            System.out.println(vector.get(i));
                        }
                    }
                }
            });
```

## 3、相对线程安全

相对线程安全就是通常说的线程安全，它需要保证对这个对象的**单次的操作**是线程安全的，我们在调用的时候不需要进行额外的保障措施，但是对于一些特定顺序的连续调用，就可能需要在调用端使用额外的同步手段来保证调用的正确性。

Java里大部分声称线程安全的类都属于这种类型，如上面的Vector、HashTable等集合。

**引出一个问题：同步容器的所有操作一定是线程安全的吗？**

不是，注意上面加粗的**单独的操作**，可以看到，Vector这样的同步容器的所有公有方法全都是synchronized的，也就是说，我们可以在多线程场景中放心的使用单独这些方法，因为这些方法本身的确是线程安全的。从上面代码可以看出，因为，虽然同步容器的所有方法都加了锁，但是对这些容器的复合操作无法保证其线程安全性。需要客户端通过主动加锁来保证。

比如上面的代码片段：

```java
for (int i = 0; i < vector.size(); i++) {
     ystem.out.println(vector.get(i));
}
```

乍一看没什么问题，但是会抛出ArrayIndexOutOfBoundsException，原因在上面说了。

另外，并发容器是Java 5中提供的，主要用来代替同步容器。有更好的并发能力。而且其中的ConcurrentHashMap定义了线程安全的复合操作

## 4、线程对立

一个线程对立的例子就是Thread类的suspend()和resume()方法。如果两个线程同时持有一个线程对象，一个尝试去中断线程，一个尝试去恢复线程，在并发进行的情况下，无论调用时是否进行了同步，目标线程都存在死锁的风险——假如suspend中断的线程就是即将要执行resume的那个线程（也就是说执行resume()的线程被中断了，就无法让另一个线程恢复），那就肯定产生死锁了。正是这个原因，suspend()和resume()已经被废弃了。



