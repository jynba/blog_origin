---
title: css知识点
date: 2023-03-15
tags:
  - CSS
  - made_by_jy
categories:
  - CSS
---

### **小 tips**

**media**

**font-size**

**rem**

`谷歌浏览器对于svg最小font-size为12px，无法设置低于12px的。`
**解决方案**：
transform: scale(0.7)
缩放对应 svg

**flex:1 是什么意思？**
**答：flex: 1; === flex: 1 1 0**
第一个参数表示: flex-grow 定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大
第二个参数表示: flex-shrink 定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小
第三个参数表示: flex-basis 给上面两个属性分配多余空间之前, 计算项目是否有多余空间, 默认值为 auto, 即项目本身的大小
flex:1 可以实现平分元素

**BFC 是什么？**
[十分钟理解 BFC](https://zhuanlan.zhihu.com/p/25321647)

- BFC（block formatting context）块级格式化上下文
  只要元素满足下面任一条件即可触发 BFC 特性：
  body 根元素
  浮动元素：float 除 none 以外的值
  绝对定位元素：position (absolute、fixed)
  display 为 inline-block、table-cells、flex
  overflow 除了 visible 以外的值 (hidden、auto、scroll)

1. 同一个 BFC 下外边距会发生折叠
2. BFC 可以包含浮动的元素（清除浮动）
3. BFC 可以阻止元素被浮动元素覆盖

当浮动元素使得出现环绕效果或 margin 重叠时:
可以在外部添加一个 div，然后设置 overflow:hidden，保证不同块内元素不影响外部布局

**Style 和 getComputedStyle 的区别**

- style<只能>获取到内嵌样式的值即（style="margin-left: 0; "）style 属性中的 css 样式，这就是 style 的地盘。那 getComputedStyle()那就不一样了简直是内外通吃，只要 css 样式被应用，其值就能被 getComputedStyle()取到
- style 可以读写，getComputedStyle 只能读
- getComputedStyle 可以操作伪类选择器，以此来做一些判断

```CSS
/* getComputedStyle 用例： */

/* 用 JS 判断当前是处于黑暗模式，还是浅色主题 */
:root {
    --mode: 'unknown';
}

@media (prefers-color-scheme: dark) {
    /* 黑暗模式 */
    :root {
         --mode: 'dark';
         --colorLink: #bfdbff;
         --colorMark: #cc0000;
         --colorText: #ffffff;
         --colorLight: #777777;
    }
}

@media (prefers-color-scheme: light) {
    /* 浅色主题 */
    :root {
         --mode: 'light';
         --colorLink: #34538b;
         --colorMark: #cc0000;
         --colorText: #000000;
         --colorLight: #cccccc;
    }
}
var mode = getComputedStyle(document.documentElement).getPropertyValue('--mode').trim();
// mode结果是'"dark"'则表示黑夜主题，深色模式，黑暗风格，护眼模式。

/* 在 JS 判断当前是 PC 还是 Mobile，可以获得 screen.width，但这个 width 信息是不准确的，手机也存在横屏的时候，会产生临界宽度的问题。
这个时候我们可以利用 getComputedStyle 拿 CSS 的伪元素信息，再搭配 CSS 原生支持的 any-hover 属性，就能在 CSS 和 JS 两处地方，准确地知道：当前是 PC 还是 Mobile。any-pointer:none表示没有什么输入装置可以实现hover悬停，即没有鼠标输入设备：移动端
// strContent结果是'none'则表示支持 hover，是 PC 端，
// strContent结果是'"hoverNone"'则表示不支持 hover 经过，需要换成 click 事件，是 Mobile 端 */
@media screen and (max-width: 480px) {
    /* 小屏幕宽度下的响应式布局 */
}

@media (any-hover: none) {
    body::before {
        content: 'hoverNone';
        display: none;
    }
}

var strContent = getComputedStyle(document.body, '::before').content;

```

- getComputedStyle 会引起回流，因为它需要获取祖先节点的一些信息进行计算（譬如宽高等），所以用的时候慎用，回流会引起性能问题。

**复合图层优化**
(transform t'r)

- 复合图层的作用：
  复合层的位图，会交由 GPU 合成。比 CPU 处理的要快
  需要 repaint 时只需要 repaint 本身，不会影响到其他层。
  对于 transform 和 opacity 效果，不会触发 layout 、layer 和 paint,直接进入合成线程处理
  CPU 和 GPU 之间的并行性，可以同时运行以创建高效的图形管道。

如：使用 CSS 的 transform:translate 来实现动画效果，这可以避开重排和重绘阶段，直接在非主线程上执行合成动画操作
相对于重绘和重排，合成能大大提升绘制效率。其实这就是**硬件加速**

**absolute 和硬件加速**
absolute 虽然可以脱离普通文档流，但是无法脱离默认复合层。
所以，就算 absolute 中信息改变时不会改变普通文档流中 render 树，但是，浏览器最终绘制时，是整个复合层绘制的，所以 absolute 中信息的改变，仍然会影响整个复合层的绘制。

（浏览器会重绘它，如果复合层中内容多，absolute 带来的绘制信息变化过大，资源消耗是非常严重的）

而硬件加速直接就是在另一个复合层了（另起炉灶），所以它的信息改变不会影响默认复合层（当然了，内部肯定会影响属于自己的复合层），仅仅是引发最后的合成（输出视图）
