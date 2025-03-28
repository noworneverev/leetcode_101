---
sidebar_position: 1
---

# 1.1 算法解释

顾名思义，`贪心算法或贪心思想` (greedy algorithm) 采用贪心的策略，`保证每次操作都是局部最优的`，从而使最后得到的结果是`全局最优的`。

举一个最简单的例子：小明和小王喜欢吃苹果，小明可以吃五个，小王可以吃三个。已知苹果园里有吃不完的苹果，求小明和小王一共最多吃多少个苹果。在这个例子中，我们可以选用的贪心策略为，每个人吃自己能吃的最多数量的苹果，这在每个人身上都是局部最优的。又因为全局结果是局部结果的简单求和，且局部结果互不相干，因此局部最优的策略同样是全局最优的。

证明一道题能用贪心算法解决，有时远比用贪心算法解决该题更复杂。一般情况下，在简单操作后，具有明显的从局部到整体的递推关系，或者可以通过数学归纳法推测结果时，我们才会使用贪心算法。
