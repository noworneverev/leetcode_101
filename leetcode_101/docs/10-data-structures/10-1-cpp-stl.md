---
sidebar_position: 48
---

# 10.1 C++ STL

在刷题时，我们几乎一定会用到各种数据结构来辅助我们解决问题，因此我们必须熟悉各种数据结构的特点。C++ STL 提供的数据结构包括（实际底层细节可能因编译器而异）：

1. Sequence Containers：维持顺序的容器。
   1. vector：`动态数组`，是我们最常使用的数据结构之一，用于 $O(1)$ 的随机读取。因为大部分算法的时间复杂度都会大于 $O(n)$，因此我们经常新建 vector 来存储各种数据或中间变量。因为在尾部增删的复杂度是 $O(1)$，我们也可以把它当作 stack 来用。
   2. list：`双向链表`，也可以当作 stack 和 queue 来使用。由于 LeetCode 的题目多用 Node 来表示链表，且链表不支持快速随机读取，因此我们很少用到这个数据结构。一个例外是经典的 LRU 问题，我们需要利用链表的特性来解决，我们在后文会遇到这个问题。
   3.  deque：双端队列，这是一个非常强大的数据结构，既支持 $O(1)$ 随机读取，又支持 $O(1)$ 时间的头部增删和尾部增删（因此可以当作 stack 和 queue 来使用），不过有一定的额外开销。也可以用来近似一个双向链表来使用。
   4.  array：固定大小的数组，一般在刷题时我们不使用。
   5.  forward_list：单向链表，一般在刷题时我们不使用。
2.  Container Adaptors：基于其它容器实现的容器。
    1.  stack：`后入先出（LIFO）的数据结构`，默认基于 deque 实现。stack 常用于深度优先搜索、一些字符串匹配问题以及单调栈问题。
    2.  `先入先出（FIFO）的数据结构`，默认基于 deque 实现。queue 常用于广度优先搜索。
    3.  priority_queue：`优先队列（最大值先出的数据结构）`，默认基于 vector 实现堆结构。它可以在 $O(n \log n)$ 的时间排序数组，$O(\log n)$ 的时间插入任意值，$O(1)$ 的时间获得最大值，$O(\log n)$ 的时间删除最大值。priority_queue 常用于维护数据结构并快速获取最大值，并且可以自定义比较函数；比如通过存储负值或者更改比小函数为比大函数，即可实现最小值先出。
3.  Ordered Associative Containers：有序关联容器。
    1.  set：有序集合，元素不可重复，底层实现默认为红黑树，即一种特殊的二叉查找树（BST）。它可以在 $O(n \log n)$ 的时间排序数组，$O(\log n)$ 的时间插入、删除、查找任意值，$O(\log n)$ 的时间获得最小或最大值。这里注意，set 和 priority_queue 都可以用于维护数据结构并快速获取最大最小值，但是它们的时间复杂度和功能略有区别，如 priority_queue 默认不支持删除任意值，而 set 获得最大或最小值的时间复杂度略高，具体使用哪个根据需求而定。
    2.  multiset：支持重复元素的 set。
    3.  map：`有序映射或有序表`，在 set 的基础上加上映射关系，可以对每个元素 key 存一个值 value。
    4.  multimap：支持重复元素的 map。
4.  Unordered Associative Containers：无序关联容器。
    1.  unordered_set：`哈希集合`，可以在 $O(1)$ 的时间快速插入、查找、删除元素，常用于快速的查询一个元素是否在这个容器内。
    2.  unordered_multiset：支持重复元素的 unordered_set。
    3.  unordered_map：`哈希映射或哈希表`，在 unordered_set 的基础上加上映射关系，可以对每一个元素 key 存一个值 value。在某些情况下，如果 key 的范围已知且较小，我们也可以用 vector 代替 unordered_map，用位置表示 key，用每个位置的值表示 value。
    4.  unordered_multimap：支持重复元素的 unordered_map。

因为这并不是一本讲解 C++ 原理的书，更多的 STL 细节请读者自行搜索。只有理解了这些数据结构的原理和使用方法，才能够更加游刃有余地解决算法和数据结构问题。
