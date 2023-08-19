---
title: 重绘与回流
date: 2023-03-04
tags:
 - Dom
 - made_by_jy
categories:
 - Dom
---

## 重绘与回流

1. **构造渲染树**
2. 计算它们在设备视口(viewport)内的确切位置和大小（**回流**）如：width:50%
3. 将渲染树的每个节点都转换为屏幕上的实际像素，这个阶段就叫做**重绘**节点。



#### 为了构建渲染树，浏览器主要完成了以下工作：

1. 从DOM树的根节点开始遍历每个可见节点。
2. 对于每个可见的节点，找到CSSOM树中对应的规则，并应用它们。
3. 根据每个可见节点以及其对应的样式，组合生成渲染树。

第一步中，既然说到了要遍历可见的节点，那么我们得先知道，什么节点是不可见的。不可见的节点包括：

- 一些不会渲染输出的节点，比如**script、meta、link**等。
- 一些通过css进行隐藏的节点。比如display:none。注意，**利用visibility和opacity隐藏的节点，还是会显示在渲染树上的**。**只有display:none的节点才不会显示在渲染树上。**

**注意：渲染树只包含可见的节点**

#### **回流一定会触发重绘，而重绘不一定会回流**

回流这一阶段主要是计算节点的位置和几何信息，那么当页面布局和几何信息发生变化的时候，就需要回流。比如以下情况：

* 添加或删除可见的DOM元素
* 元素的位置发生变化
* 元素的尺寸发生变化（包括外边距、内边框、边框大小、高度和宽度等）
* 内容发生变化，比如文本变化或图片被另一个不同尺寸的图片所替代。
* 页面一开始渲染的时候（这肯定避免不了）
* 浏览器的窗口尺寸变化（因为回流是根据视口的大小来计算元素的位置和大小的）

#### 批量修改DOM

当我们需要对DOM对一系列修改的时候，可以通过以下步骤减少回流重绘次数：

1. 使元素脱离文档流
2. 对其进行多次修改
3. 将元素带回到文档中。

**有三种方式可以让DOM脱离文档流**：

- 隐藏元素，应用修改，重新显示
- 使用文档片段(document fragment)在当前DOM之外构建一个子树，再把它拷贝回文档。
- 将原始元素拷贝到一个脱离文档的节点中，修改节点后，再替换原始的元素。

```js
function appendDataToElement(appendToElement, data) {
    let li;
    for (let i = 0; i < data.length; i++) {
    	li = document.createElement('li');
        li.textContent = 'text';
        appendToElement.appendChild(li);
    }
}
const ul = document.getElementById('list');
ul.style.display = 'none';
appendDataToElement(ul, data);
ul.style.display = 'block';
//1 隐藏元素，应用修改，重新显示

const ul = document.getElementById('list');
const fragment = document.createDocumentFragment();
appendDataToElement(fragment, data);
ul.appendChild(fragment);
//2 使用文档片段(document fragment)在当前DOM之外构建一个子树，再把它拷贝回文档。

const ul = document.getElementById('list');
const clone = ul.cloneNode(true);
appendDataToElement(clone, data);
ul.parentNode.replaceChild(clone, ul);
//3 将原始元素拷贝到一个脱离文档的节点中，修改节点后，再替换原始的元素。

```

#### 对于复杂动画效果,使用绝对定位让其脱离文档流

#### 重点

- 使用**css3**硬件加速，可以让transform、opacity、filters这些动画不会引起回流重绘
- 对于动画的其它属性，比如background-color这些，还是会引起回流重绘的，不过它还是可以提升这些动画的性能。