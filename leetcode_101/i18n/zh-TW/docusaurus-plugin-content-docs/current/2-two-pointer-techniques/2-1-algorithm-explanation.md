---
sidebar_position: 5
---

# 2.1 算法解释

雙指針主要用於遍歷數組，兩個指針指向不同的元素，從而協同完成任務。也可以延伸到多個數組的多個指針。

若兩個指針指向同一數組，遍歷方向相同且不會相交，則也稱為滑動窗口（兩個指針包圍的區域即為當前的窗口），經常用於區間搜索。

若兩個指針指向同一數組，但是遍歷方向相反，則可以用來進行搜索，待搜索的數組往往是排好序的。

在 C++ 中，要注意 `const` 的位置對指針效果的影響：

```cpp
int x;
int * p1 = &x; // 指针可以被修改，值也可以被修改
const int * p2 = &x; // 指针可以被修改，值不可以被修改（const int）
int * const p3 = &x; // 指针不可以被修改（* const），值可以被修改
const int * const p4 = &x; // 指针不可以被修改，值也不可以被修改
```
