---
title: 虚拟DOM与Diff算法
date: 2023-03-04
tags:
 - Dom
 - made_by_jy
categories: 
 - Dom
---

`使用虚拟DOM算法的损耗计算`： 总损耗 = 虚拟DOM增删改+（与Diff算法效率有关）真实DOM差异增删改+（较少的节点）排版与重绘

`直接操作真实DOM的损耗计算`： 总损耗 = 真实DOM完全增删改+（可能较多的节点）排版与重绘

Diff算法是:`深度优先算法`。 时间复杂度:`O(n)`

五种比较情况：

- 1、`oldS 和 newS `使用`sameVnode方法`进行比较，`sameVnode(oldS, newS)`
- 2、`oldS 和 newE `使用`sameVnode方法`进行比较，`sameVnode(oldS, newE)`
- 3、`oldE 和 newS `使用`sameVnode方法`进行比较，`sameVnode(oldE, newS)`
- 4、`oldE 和 newE `使用`sameVnode方法`进行比较，`sameVnode(oldE, newE)`
- 5、如果以上逻辑都匹配不到，再把所有旧子节点的 `key` 做一个映射到旧节点下标的 `key -> index` 表，然后用新 `vnode` 的 `key` 去找出在旧节点中可以复用的位置。

![截屏2021-08-08 下午3.31.48.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fdbca1cefdec4ba08637c37a70f26af6~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

![截屏2021-08-08 下午3.37.51.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ec374b664e94888b00721829738ea7a~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)