---
title: The C Language
separator: <!--s-->
verticalSeparator: <!--v-->
theme: simple
highlightTheme: github
css: custom.css
revealOptions:
    transition: 'slide'
    transitionSpeed: fast
    center: false
    slideNumber: "c/t"
    width: 1000
---

<div class="middle center">
<div style="width: 100%">

# C Language Introduction

<hr />

by [@Jwanng](https://github.com/Mandorian)

</div>
</div>

<!--v-->
## 主要内容
+ 函数
+ 结构体
+ 最大公约数
+ 最小公倍数

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
+ 返回类型可以是{int,float,double,long,void}等数据类型
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
+ 使用'struct Point point'来创建Point结构体变量
+ 结构体的初始化可以使用初始化表来完成,如'point = {1, 2}'
+ 使用'.'运算符来访问Point结构体内部变量,如'point.x 和 point.y'
+ 使用`typedef`为结构体定义别名简化代码,如'typedef struct Point Point'
+ 结构体也可以用作函数参数和函数返回值类型

<!--s-->
<div class="middle center">
<div style="width: 100%">

# 最大公约数(GCD)                                                                                                                                    
</div>
</div>

<!--s-->
<div class="middle center">
<div style="width: 100%">

# 最小公倍数(LCM)

</div>
</div>
