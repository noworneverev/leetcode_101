---
sidebar_position: 78
---

# 14.4 練習

## 基礎難度

### [1059. All Paths from Source Lead to Destination](https://leetcode.com/problems/all-paths-from-source-lead-to-destination/)

雖然使用深度優先搜尋（DFS）可以解決大部分圖的遍歷問題，但需要特別注意檢查是否陷入了環路。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個有向圖（directed graph）中的 `n` 個節點（編號從 0 到 n-1），一個起點 `source` 和終點 `destination`，以及一組邊 `edges`，請判斷：  
是否**從 `source` 出發的所有可能路徑都會走到 `destination`**，而且**不能停在其他地方或形成環**。

---

#### **條件判斷要成立的三個必要條件**
1. 所有路徑**都要能抵達 destination**
2. **不能有環（cycle）** → 否則可能會卡在裡面走不出來
3. **destination 節點不能有出邊** → 否則可能會走出去

---

#### **解題思路：DFS + 拜訪狀態記錄（避免環與重複計算）**

1. 先將 `edges` 建成圖的鄰接表 `graph`
2. 用 DFS 從 `source` 開始搜尋
3. 每個節點依照以下邏輯處理：
   - 若是 **目前路徑中已經走過**（visited in current path）→ 有環 → 回傳 False
   - 若目前節點 **沒有出邊且不是 destination** → 路徑走錯 → 回傳 False
   - 若已經計算過且是合法的 → 直接回傳 True（用 memo 做剪枝）

---

#### **Python 程式碼**
```python
class Solution:
    def leadsToDestination(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        from collections import defaultdict

        graph = defaultdict(list)
        for u, v in edges:
            graph[u].append(v)

        visited = set()  # 當前 DFS 路徑上的節點
        memo = {}        # 紀錄某節點是否已驗證為合法

        def dfs(node):
            if node in memo:
                return memo[node]
            if node in visited:
                return False  # 有環
            if not graph[node]:
                return node == destination  # 沒出邊時必須是終點

            visited.add(node)
            for nei in graph[node]:
                if not dfs(nei):
                    memo[node] = False
                    visited.remove(node)
                    return False
            visited.remove(node)
            memo[node] = True
            return True

        return dfs(source)
```

---

#### **時間與空間複雜度**

* **時間複雜度**：$O(n + e)$，其中 $n$ 是節點數，$e$ 是邊數（遍歷所有節點與邊）
* **空間複雜度**：$O(n)$，DFS 遞迴堆疊與 memo/visited 使用的空間

---

#### **總結**

- 這題關鍵是：**判斷圖中是否有環 & 所有路徑都走向 destination 且只停在那裡**
- 需要記錄目前路徑是否已走過節點來偵測「環」
- 可與 802、207 類似圖上 DFS 題型一起練習

</details>


---

## 進階難度

### [1135. Connecting Cities With Minimum Cost](https://leetcode.com/problems/connecting-cities-with-minimum-cost/)

筆者其實已經撰寫了這道題的詳細解答，但後來發現該題需要付費解鎖才能查看。為了避免版權糾紛，將此題移至練習題中。本題考察最小生成樹（minimum spanning tree, MST）的求法，通常可以用兩種演算法實現：

- **Prim’s Algorithm**：利用優先佇列選擇最小的消耗。
- **Kruskal’s Algorithm**：對邊排序後使用並查集（Union-Find）。

<details>
<summary>題解</summary>

#### **問題描述**
給定 `n` 個城市（標號從 1 到 n）與一組 `connections`，每個 connection 為三元組 `[city1, city2, cost]`，表示在兩城市之間建設道路的花費。  
你可以選擇部分連線來建造，**要求讓所有城市連通，且總花費最小**。如果做不到，回傳 `-1`。

---

#### **範例**
```plaintext
輸入：n = 3, connections = [[1,2,5],[1,3,6],[2,3,1]]
輸出：6  （選擇 [2,3,1] + [1,2,5]）

輸入：n = 4, connections = [[1,2,3],[3,4,4]]
輸出：-1  （無法讓所有城市連通）
````

---

#### **解題思路：最小生成樹（MST）— Kruskal 演算法**

這題本質是經典的 **Minimum Spanning Tree（最小生成樹）** 問題，可以用：

* **Kruskal 演算法**：從權重最小的邊開始連接，使用 Union-Find 檢查是否形成環。
* 直到連通的邊數為 `n - 1` 為止。

---

#### **步驟整理**

1. 對 `connections` 依照 `cost` 進行排序
2. 初始化 Union-Find（Disjoint Set）來追蹤城市是否已連通
3. 遍歷每條邊：

   * 若兩城市不在同一集合，將它們連接起來，累加 `cost`
   * 直到我們連了 `n - 1` 條邊（剛好連通整張圖）
4. 若最後沒有連通所有城市 → 回傳 `-1`

---

#### **Python 程式碼：使用 Kruskal + Union-Find**

```python
class Solution:
    def minimumCost(self, n: int, connections: List[List[int]]) -> int:
        parent = [i for i in range(n + 1)]

        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]

        def union(x, y):
            px, py = find(x), find(y)
            if px == py:
                return False
            parent[px] = py
            return True

        connections.sort(key=lambda x: x[2])
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

* **時間複雜度**：$O(E \log E)$，$E$ 為邊數，排序 + Union-Find
* **空間複雜度**：$O(n)$，儲存城市的父節點陣列

---

#### **總結**

- 經典 Kruskal 演算法應用於最小生成樹
- 用 Union-Find 判斷是否已連接避免成環
- 搭配題目 1584（Min Cost to Connect All Points）一併練習效果更好

</details>


---

### [882. Reachable Nodes In Subdivided Graph](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/)

筆者考慮了很久，最終決定將這道題放在練習題中，而非詳細講解。本題屬於經典的節點最短距離問題，常用的解法包括：

- **Bellman-Ford** 單源最短路演算法（允許負邊權重）。
- **Dijkstra** 無負邊單源最短路演算法。

雖然這些都是經典演算法，但 LeetCode 中相關題型較少，因此這裡僅供讀者自行深入學習。

<details>
<summary>題解</summary>

#### **問題描述**
給你一個無向圖，每條邊可被「細分」成若干中繼節點（sub-nodes），例如邊 `[u, v, cnt]` 表示這條邊有 `cnt` 個中繼節點，從 `u` 走到 `v` 共需要 `cnt + 1` 步。

給定 `maxMoves` 步數上限，從節點 `0` 出發，問最多可以拜訪多少個「**原始節點與中繼節點**」？

---

#### **範例**
```plaintext
輸入：
edges = [[0,1,4],[1,2,6],[0,2,8]]
maxMoves = 10
n = 3

輸出：13
````

---

#### **解題思路：Dijkstra + 模擬中繼點覆蓋**

這題核心類似於「帶步數限制的單源最短路問題」，我們從節點 `0` 開始，用 **Dijkstra（優先佇列）** 模擬拜訪節點與邊上的中繼節點：

1. **用 Dijkstra 求出每個節點的最短距離**（即走過的步數）
2. 拜訪原始節點條件：`dist[u] <= maxMoves`
3. 對每條邊 `[u, v, cnt]`，能夠拜訪的中繼節點數為：

   ```python
   min(max(0, maxMoves - dist[u]) + max(0, maxMoves - dist[v]), cnt)
   ```

---

#### **Python 程式碼**

```python
import heapq
from collections import defaultdict

class Solution:
    def reachableNodes(self, edges: List[List[int]], maxMoves: int, n: int) -> int:
        graph = defaultdict(list)
        for u, v, w in edges:
            graph[u].append((v, w))
            graph[v].append((u, w))

        dist = [float('inf')] * n
        dist[0] = 0
        heap = [(0, 0)]  # (dist, node)

        while heap:
            d, u = heapq.heappop(heap)
            if d > dist[u]:
                continue
            for v, w in graph[u]:
                if dist[u] + w + 1 < dist[v]:
                    dist[v] = dist[u] + w + 1
                    heapq.heappush(heap, (dist[v], v))

        # 拜訪過的原始節點
        ans = sum(d <= maxMoves for d in dist)

        # 每條邊的中繼節點
        for u, v, w in edges:
            a = max(0, maxMoves - dist[u])
            b = max(0, maxMoves - dist[v])
            ans += min(a + b, w)

        return ans
```

---

#### **時間與空間複雜度**

* **時間複雜度**：$O(E \log N)$，$E$ 為邊數，$N$ 為節點數，Dijkstra 演算法複雜度
* **空間複雜度**：$O(N + E)$，鄰接表與距離陣列

---

#### **總結**

- 本質是 Dijkstra + 額外邏輯計算中繼節點
- 小心 `cnt` 表示的是「中繼節點個數」，需要額外模擬
- 經典題型，可與 743、1631 等 Dijkstra 題練習

</details>
