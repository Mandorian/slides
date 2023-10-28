---
title: The C Language
separator: <!--s-->
verticalSeparator: <!--v-->
theme: simple
highlightTheme: github
css: assets/css/custom.css
revealOptions:
    transition: 'fade'
    transitionSpeed: fast
    center: false
    slideNumber: "c/t"
    width: 1000
---

<div class="middle center">
<div style="width: 100%">

# The   C Language 

<hr />

by [@Jwanng](https://github.com/Mandorian)

</div>
</div>

<!--v-->
## 主要内容
<div class="fragment">

+ 函数
</div>

<div class="fragment">

+ 结构体
  <div class="fragment">
  
  + 结构体排序
  </div>
</div>

<div class="fragment">

+ 最大公约数
  <div class="fragment">

  + 欧几里德算法
  + 更相减损术
  </div>

</div>

<div class="fragment">

+ 最小公倍数
</div>

<!--s-->
<div class="middle center">
<div style="width: 100%">

# 函数

</div>
</div>

<!--v-->
## 格式
``` c
返回类型 函数名(参数列表) {
    主要内容
}
```
+ 返回类型可以是{int，float，double，long，void，struct}等数据类型
+ 函数名命名规范:
>

<!--v-->
## 形参和实参
+ 形参
+ 实参

<!--v-->
## 常用函数
```c
int max(int a, int b) {
    return a > b ? a : b;
}
```
``` c
int min(int a, int b) {
    return a < b ? a : b;
}
```
``` c
int gcd(int a, int b) {
    return b ? gcd(b, a % b) : a;
}
```
``` c
int lcm(int a, int b) {
    return a / gcd(a, b) * b;
}
```

<!--s-->
<div class="middle center">
<div style="width: 100%">

# 结构体(struct)

</div>
</div>

<!--v-->
## 简要
结构体是一个或多个变量的集合，这些变量可能为不同的类型，为了方便处理将这些变量组织在一个名字之下。  
``` c
//一个简单二维坐标结构体
struct Point {
    int x, y;
};
```

<div class="fragment">

+ 使用'struct Point point'来创建Point结构体变量
</div>

<div class="fragment">

+ 结构体的初始化可以使用初始化表来完成，如'point = {1, 2}'
</div>

<div class="fragment">

+ 使用'.'运算符来访问Point结构体内部变量，如'point.x 和 point.y'
</div>

<div class="fragment">

+ 使用`typedef`为结构体定义别名简化代码，如'typedef struct Point Point'
</div>

<div class="fragment">

+ 结构体也可以用作函数参数和函数返回值类型
</div>

<!--v-->
## 结构体排序
对于结构体排序，常常会选用结构体中的某一变量为标准进行排序，我们可以仿照一维数组的冒泡排序（从小到大）。    
假设我们有一个`struct Point`数组，按照其$x$坐标从小到大排序。
``` c[0|3-6]
for (int i = 1; i < n; ++ i) {
    for (int j = 0; j < n - i; ++ j) {
        if (point[j].x > point[j + 1].x) {
            struct Point temp = point[j];
            point[j] = point[j + 1];
            point[j + 1] = temp;
        }
    }
}
```

<!--s-->
<div class="middle center">
<div style="width: 100%">

# 最大公约数(GCD)                                                                                                                             
</div>
</div>

<!--v-->
## 定义
最大公约数即为 ***Greatest Common Divisor***，常缩写为 gcd。  
一组整数的公约数，是指同时是这组数中每一个数的约数的数。一组整数的最大公约数，是指所有公约数里面最大的一个。    

若$a\ |\ b$则称$a$为$b$的约数，$b$为$a$的倍数。

如何求两个数甚至多个数的最大公约数呢？

<div class="fragment">

+ 欧几里德算法（辗转相除法）
</div>

<div class="fragment">

+ 更相减损术
</div>

<!--v-->
## 欧几里德算法
假设已知两个数$a$和$b$，如何求出二者的最大公约数？  

假设$a>b$，若$b$是$a$的约数可以得到$gcd(a,b)=b$，下面考虑$b$不是$a$的约数的情况，可以证明$gcd(a,b)=gcd(b,a\\% b)$。  

证明如下：  

<div class="fragment">

假设$a=k\times b + c$，$d\ |\ a$，$d\ |\ b$，可以推出$d\ |\ a-b$，$d$是$a,b,a-b$的公约数，那么$gcd(a,b)=gcd(a-b,b)$。
</div>

<div class="fragment">

可以推出$gcd(a-b,b)=gcd(a-2\times b, b)=...=gcd(a-k\times b, b)$。
</div>

<div class="fragment">

$\because a-k\times b = c=a \\% b$  
$\therefore gcd(a,b)=gcd(a\\% b, b)=gcd(b,a\\%b)$
</div>

<div class="fragment">

根据上面的公式可以写出求两个数最大公约数的写法，可以采用递归or迭代。
</div>

<!--v-->
``` c 
// 递归写法
int gcd(int a, int b) {
    if (!b) return a;
    return gcd(b, a % b);
}
```
``` c
// 迭代写法
int gcd(int a, int b) {
  while (b != 0) {
    int tmp = a;
    a = b;
    b = tmp % b;
  }
  return a;
}
```

<!--s-->
<div class="middle center">
<div style="width: 100%">

# 最小公倍数(LCM)

</div>
</div>

<!--v-->
## 定义
一组整数的公倍数，是指同时是这组数中每一个数的倍数的数。0 是任意一组整数的公倍数。  
一组整数的最小公倍数，是指所有正的公倍数里面，最小的一个数。    

结论：  
对于任意两个数$a,b$有$gcd(a,b)\times lcm(a,b)=a\times b$。  

可以得出$lcm(a,b)=\frac{a\times b}{gcd(a,b)}$

``` c
int lcm(int a, int b) {
    return a / gcd(a, b) * b;
}
```

<!--s-->
<!-- .slide: data-background="./thanks.png" -->