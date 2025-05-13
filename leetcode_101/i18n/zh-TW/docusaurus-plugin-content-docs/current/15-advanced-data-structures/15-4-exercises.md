---
sidebar_position: 78
---

# 15.4 練習

## 基礎難度

### [1135. Connecting Cities With Minimum Cost](https://leetcode.com/problems/connecting-cities-with-minimum-cost/)

使用並查集，按照 Kruskal’s Algorithm 再解一次這道題吧。
<details>
<summary>題解</summary>

#### **問題描述**
有 `n` 個城市（編號從 1 到 n），你可以從 `connections` 中選擇一些邊來連接這些城市。  
每條邊是 `[city1, city2, cost]`，表示從 `city1` 到 `city2` 建一條路需要花費 `cost`。  
請回傳連接所有城市的**最小總成本**，如果無法連通所有城市，回傳 `-1`。

---

#### **解題思路：最小生成樹（Minimum Spanning Tree, MST）**

這題是一個典型的 **最小生成樹** 問題，我們可以使用：

- **Kruskal 演算法**：從權重最小的邊開始嘗試連接城市，直到所有城市連通。
- 搭配 **Union-Find**（並查集）判斷是否已在同一集合中（避免成環）。

---

#### **Kruskal 步驟簡述**
1. 將所有邊依照成本 `cost` 升序排序
2. 初始化 Union-Find（並查集）結構
3. 逐條邊嘗試連接：
   - 如果兩個城市不在同一集合，就把它們合併並加總成本
   - 如果已經連了 `n - 1` 條邊，就可以停止
4. 若最終合併的邊數不足 `n - 1`，代表有城市無法連通 → 回傳 `-1`

---

#### **Python 程式碼**
```python
class Solution:
    def minimumCost(self, n: int, connections: List[List[int]]) -> int:
        parent = list(range(n + 1))  # 1-based index

        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])  # 路徑壓縮
            return parent[x]

        def union(x, y):
            root_x, root_y = find(x), find(y)
            if root_x == root_y:
                return False  # 已經連通，不能重複連
            parent[root_x] = root_y
            return True

        connections.sort(key=lambda x: x[2])  # 依成本排序
        total_cost = 0
        edges_used = 0

        for u, v, cost in connections:
            if union(u, v):
                total_cost += cost
                edges_used += 1
                if edges_used == n - 1:
                    return total_cost

        return -1
```

---

#### **時間與空間複雜度**

* **時間複雜度**：\$O(E \log E + E \cdot \alpha(N))\$，排序 + Union-Find 操作（\$\alpha\$ 為阿克曼函數反函數，趨近常數）
* **空間複雜度**：\$O(N)\$，用於 Union-Find 的 parent 陣列

---

#### **總結**

- 經典 MST 問題，與 1584 題邏輯一致
- 若熟悉 Kruskal + Union-Find 可迅速套用
- 適合與 Prim、Dijkstra 作法進行比較學習

</details>


---

## 進階難度

### [432. All O`one Data Structure](https://leetcode.com/problems/all-oone-data-structure/)

設計一個包含 increaseKey，decreaseKey，getMaxKey，getMinKey 均為 $O(1)$ 時間複雜度的資料結構。

<details>
<summary>題解</summary>

#### **問題描述**
請你實作一個支援以下操作的資料結構 `AllOne`：

- `inc(key)`：將 `key` 的計數加一（若不存在則設為 1）
- `dec(key)`：將 `key` 的計數減一（若為 1 則刪除 key）
- `getMaxKey()`：回傳目前**擁有最大計數的 key**（若有多個回傳任一個）
- `getMinKey()`：回傳目前**擁有最小計數的 key**（若有多個回傳任一個）

要求所有操作的 **時間複雜度為 O(1)**。

---

#### **解題思路：雙向鏈結串列 + 雜湊表 HashMap**

本題的關鍵是「如何 O(1) 找出最大 / 最小計數的 key」。

---

#### ✅ 資料結構設計

使用以下三個結構：

1. `key_count_map`：記錄每個 key 的計數 `key → count`
2. `count_bucket_map`：記錄每個 count 對應的雙向鏈結節點（桶）`count → Bucket`
3. **雙向鏈結串列（bucket list）**：
   - 每個節點是一個計數桶（bucket）
   - `bucket.val = count`, `bucket.set = 所有此 count 的 key`
   - 左 → 小 count，右 → 大 count（所以頭是最小，尾是最大）

---

#### ✅ 操作核心概念

- 每次 `inc/dec` 都會讓某個 key 從一個 bucket 移到另一個 bucket（count 改變）
- 若新的 count 所在的 bucket 不存在，則動態插入
- 若舊的 bucket 沒有 key 了，則移除

---

#### **Python 實作**
```python
class Bucket:
    def __init__(self, val):
        self.val = val
        self.keys = set()
        self.prev = self.next = None

class AllOne:

    def __init__(self):
        self.key_count = {}
        self.count_bucket = {}
        self.head = Bucket(float('-inf'))
        self.tail = Bucket(float('inf'))
        self.head.next = self.tail
        self.tail.prev = self.head

    def _insert_after(self, prev_bucket, new_bucket):
        new_bucket.prev = prev_bucket
        new_bucket.next = prev_bucket.next
        prev_bucket.next.prev = new_bucket
        prev_bucket.next = new_bucket

    def _remove_bucket(self, bucket):
        bucket.prev.next = bucket.next
        bucket.next.prev = bucket.prev
        del self.count_bucket[bucket.val]

    def inc(self, key: str) -> None:
        count = self.key_count.get(key, 0)
        self.key_count[key] = count + 1

        curr_bucket = self.count_bucket.get(count)
        next_bucket = self.count_bucket.get(count + 1)

        if not next_bucket:
            next_bucket = Bucket(count + 1)
            self.count_bucket[count + 1] = next_bucket
            self._insert_after(curr_bucket or self.head, next_bucket)
        next_bucket.keys.add(key)

        if curr_bucket:
            curr_bucket.keys.remove(key)
            if not curr_bucket.keys:
                self._remove_bucket(curr_bucket)

    def dec(self, key: str) -> None:
        if key not in self.key_count:
            return
        count = self.key_count[key]
        if count == 1:
            del self.key_count[key]
        else:
            self.key_count[key] = count - 1

        curr_bucket = self.count_bucket[count]
        prev_bucket = self.count_bucket.get(count - 1)

        if count > 1:
            if not prev_bucket:
                prev_bucket = Bucket(count - 1)
                self.count_bucket[count - 1] = prev_bucket
                self._insert_after(curr_bucket.prev, prev_bucket)
            prev_bucket.keys.add(key)

        curr_bucket.keys.remove(key)
        if not curr_bucket.keys:
            self._remove_bucket(curr_bucket)

    def getMaxKey(self) -> str:
        if self.tail.prev == self.head:
            return ""
        return next(iter(self.tail.prev.keys))

    def getMinKey(self) -> str:
        if self.head.next == self.tail:
            return ""
        return next(iter(self.head.next.keys))
```

---

#### **時間與空間複雜度**

* **時間複雜度**：所有操作為 $O(1)$，因為：

  * 查找 key → count 是雜湊
  * 每個 key 最多加入/移出桶一次
  * 雙向鏈結串列操作為常數時間
* **空間複雜度**：$O(K)$，$K$ 為 key 數量

---

</details>


---

### [716. Max Stack](https://leetcode.com/problems/max-stack/)

設計一個支持 push，pop，top，getMax 和 popMax 的堆疊。可以用類似 LRU 的方法降低時間複雜度，但因為要獲取的是最大值，我們應該把 unordered_map 換成哪一種資料結構呢？

<details>
<summary>題解</summary>

#### **問題描述**
請你實作一個 Max Stack（支援取最大值的堆疊），支援以下操作：

- `push(x)`：推入元素 `x`
- `pop()`：移除並回傳堆疊頂端的元素
- `top()`：回傳堆疊頂端元素（不移除）
- `peekMax()`：回傳堆疊中**最大值**
- `popMax()`：移除並回傳**堆疊中最靠近頂端的最大值**

---

#### **解題思路：堆疊 + 雙向鏈結串列 + 排序支援**

這題的難點是 `popMax()`：你需要在堆疊中找出**最大值，並且從中間刪除最靠近頂端的那一個**。

---

#### ✅ 資料結構設計

使用以下三個資料結構來支援所有操作為平均 $O(\log n)$：

1. **雙向鏈結串列**：模擬堆疊（支援從中間刪除）
2. **排序樹（如 TreeMap）或 heapq + counter**：找出最大值
3. **value → [list of node] 的映射**：支援快速從排序結構中找到對應節點

---

#### ✅ 最簡方式（支援 `popMax()`）的 Python 範例：用兩個堆疊模擬

這種方式可通過題目，但 `popMax()` 不是 O(1)，僅為實用解：

```python
class MaxStack:

    def __init__(self):
        self.stack = []
        self.max_stack = []

    def push(self, x: int) -> None:
        self.stack.append(x)
        if not self.max_stack or x >= self.max_stack[-1]:
            self.max_stack.append(x)

    def pop(self) -> int:
        val = self.stack.pop()
        if val == self.max_stack[-1]:
            self.max_stack.pop()
        return val

    def top(self) -> int:
        return self.stack[-1]

    def peekMax(self) -> int:
        return self.max_stack[-1]

    def popMax(self) -> int:
        max_val = self.peekMax()
        buffer = []
        while self.top() != max_val:
            buffer.append(self.pop())
        self.pop()  # remove max
        while buffer:
            self.push(buffer.pop())
        return max_val
```

---

#### **時間與空間複雜度**

* **push/pop/top/peekMax**：$O(1)$
* **popMax**：最差 $O(n)$（需要將整個堆疊掃一遍）

---

#### **進階做法補充（追求 log n 操作）**

如果你希望所有操作都在 $O(\log n)$ 或 $O(1)$：

* 使用 **雙向鏈結串列**（記錄堆疊順序）
* 使用 **平衡樹結構（如 TreeMap 或 OrderedDict）** 記錄 val → list of node
* `popMax()` 就能快速找最大值並刪除對應節點（從中間移除）

此解法 LeetCode 通過但實作複雜，實務上多選用第一種較簡潔版本即可。

---

#### **總結**

- 可通過 LeetCode 的簡單做法是「兩個堆疊」
- 若面試追求最佳化，可考慮「雙向鏈結串列 + TreeMap」
- 是經典複合資料結構題，適合與 LRU、All O(1) Data Structure 並練習

</details>
```
