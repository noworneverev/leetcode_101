---
sidebar_position: 25
---

# 5.5 練習

## 基礎難度

### [130. Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)

從最外側開始填充，然後再考慮內部區域。

<details>
<summary>題解</summary>

#### 問題描述

給定一個 `m x n` 的二維矩陣，包含 `'X'` 和 `'O'`，找出所有被 `'X'` 包圍的區域，並將這些區域內的 `'O'` 替換為 `'X'`。被包圍的區域指的是完全被 `'X'` 包圍的 `'O'` 區域（上下左右四個方向）。

#### 解題思路

1. **關鍵觀察**:
   - 位於矩陣邊界上的 `'O'` 以及與邊界相連的 `'O'` 不會被包圍。
   - 需要先將這些邊界上的 `'O'` 以及與其相連的 `'O'` 標記出來。

2. **解法設計**:
   - 遍歷矩陣的四條邊界，對每個邊界上的 `'O'` 執行深度優先搜尋（DFS）或廣度優先搜尋（BFS），將與邊界相連的 `'O'` 標記為特殊字符（例如 `'T'`）。
   - 遍歷矩陣：
     - 將剩餘的 `'O'` 替換為 `'X'`。
     - 將之前標記為 `'T'` 的恢復為 `'O'`。

3. **演算法步驟**:
   - 使用 DFS 或 BFS 標記所有邊界的 `'O'`。
   - 替換剩餘的內部 `'O'`，恢復被標記的字符。

#### Python 範例程式碼

```python
class Solution:
    def solve(self, board: List[List[str]]) -> None:
        if not board or not board[0]:
            return
        
        rows, cols = len(board), len(board[0])
        
        def dfs(r, c):
            if r < 0 or c < 0 or r >= rows or c >= cols or board[r][c] != 'O':
                return
            board[r][c] = 'T'  # 標記為暫存字符
            # 向四個方向遞迴
            dfs(r + 1, c)
            dfs(r - 1, c)
            dfs(r, c + 1)
            dfs(r, c - 1)
        
        # 標記邊界上的 'O'
        for r in range(rows):
            dfs(r, 0)
            dfs(r, cols - 1)
        for c in range(cols):
            dfs(0, c)
            dfs(rows - 1, c)
        
        # 處理矩陣
        for r in range(rows):
            for c in range(cols):
                if board[r][c] == 'O':
                    board[r][c] = 'X'  # 替換被包圍的 'O'
                elif board[r][c] == 'T':
                    board[r][c] = 'O'  # 恢復邊界連通的 'O'
```

#### 複雜度分析

- **時間複雜度**: $O(m \times n)$，其中 $m$ 和 $n$ 分別是矩陣的行數和列數。DFS 遍歷整個矩陣。
- **空間複雜度**: $O(m \times n)$，最壞情況下遞迴堆疊深度等於矩陣大小。

</details>


---

### [257. Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/)

輸出二元樹中所有從根節點到葉子節點的路徑。使用回溯法與否有什麼區別？

<details>
<summary>題解</summary>

#### 問題描述

給定一個二元樹，返回所有從根節點到葉節點的路徑。每條路徑以字符串形式表示，節點之間用 `"->"` 連接。

#### 解題思路

1. **問題分解**:
   - 路徑從根節點開始，延伸至每個葉節點。
   - 使用遞迴遍歷二元樹，逐步構造路徑。
   - 當到達葉節點時，將完整路徑加入結果列表。

2. **演算法設計**:
   - 使用深度優先搜尋（DFS）從根節點開始遍歷。
   - 每次進入新節點時，將其值加入當前路徑。
   - 若節點為葉節點，將當前路徑轉為字符串並加入結果。
   - 若不是葉節點，繼續對其左右子節點遞迴。

3. **特別處理**:
   - 如果樹為空，直接返回空列表。

#### Python 範例程式碼

```python
class Solution:
    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:
        def dfs(node, path, paths):
            if not node:
                return
            path.append(str(node.val))  # 加入當前節點值
            if not node.left and not node.right:  # 如果是葉節點
                paths.append("->".join(path))  # 將路徑轉為字符串
            else:
                dfs(node.left, path, paths)  # 遞迴左子樹
                dfs(node.right, path, paths)  # 遞迴右子樹
            path.pop()  # 回溯

        paths = []
        dfs(root, [], paths)
        return paths
```

#### 複雜度分析

- **時間複雜度**: $O(n)$，其中 $n$ 是樹中節點數量。每個節點訪問一次。
- **空間複雜度**: $O(h)$，其中 $h$ 是樹的高度。遞迴堆疊的最大深度與樹的高度成正比。

</details>


---

## 進階難度

### [47. Permutations II](https://leetcode.com/problems/permutations-ii/)

排列問題的進階版本，如何處理重複的元素？

<details>
<summary>題解</summary>

#### 問題描述

給定一個可能包含重複元素的數字序列 `nums`，返回所有不重複的全排列。

#### 解題思路

1. **關鍵觀察**:
   - 因為輸入數列可能包含重複數字，我們需要確保結果中的排列是唯一的。
   - 使用 `Counter` 來記錄每個數字的剩餘次數，可以在迭代中避免重複。

2. **解法設計**:
   - 透過回溯法 (Backtracking) 枚舉所有排列：
     - 每次選取數字前，檢查其計數是否大於 0。
     - 選取後，將計數減 1，並繼續遞迴。
     - 回溯時恢復該數字的計數，並從當前路徑中移除該數字。
   - 當路徑長度等於輸入數列長度時，將路徑加入結果。

---

#### Python 範例程式碼

```python
from collections import Counter

class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        def btrack(path, counter):
            if len(path) == len(nums):  # 當路徑長度等於數列長度時，加入結果
                ans.append(path[:])
                return
            for x in counter:  # 遍歷所有唯一的數字
                if counter[x] > 0:
                    path.append(x)  # 將數字加入路徑
                    counter[x] -= 1  # 減少該數字的剩餘次數
                    btrack(path, counter)  # 遞迴
                    path.pop()  # 回溯時移除數字
                    counter[x] += 1  # 恢復計數
        
        ans = []
        btrack([], Counter(nums))  # 初始化計數器並開始回溯
        return ans
```

---

#### 複雜度分析

- **時間複雜度**: $O(n \times n!)$，其中 $n$ 是輸入數字的個數。
  - 總共有 $n!$ 個排列，每個排列的生成過程需要 $O(n)$ 時間。
- **空間複雜度**: $O(n)$，用於遞迴堆疊和路徑的暫存空間。

</details>



---

### [40. Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)

組合問題的進階版本，如何處理重複的元素？

<details>
<summary>題解</summary>

#### 問題描述

給定一個整數數組 `candidates` 和一個目標值 `target`，找出所有不重複的組合，使得組合中的數字總和等於 `target`。  
`candidates` 中的每個數字只能在每個組合中使用一次。

---

#### 解題思路

1. **關鍵觀察**:
   - 每個數字只能使用一次，因此需要在遍歷過程中跳過重複的數字。
   - 使用排序來幫助識別相鄰的重複數字，並在回溯過程中跳過它們。

2. **解法設計**:
   - 先對 `candidates` 排序，方便後續處理重複元素。
   - 使用回溯法 (Backtracking)：
     - 每次選擇一個數字，將其加入當前路徑，並減少剩餘的目標值。
     - 遞迴處理下一個數字，確保索引只向後移動以避免重複使用。
     - 回溯時將數字移出路徑。
   - 如果當前數字與前一個數字相同且前一個數字未被使用，則跳過當前數字。

3. **重複處理**:
   - 透過 `if i > start and candidates[i] == candidates[i - 1]` 跳過重複數字。

---

#### Python 範例程式碼

```python
class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        def backtrack(start, path, remaining):
            if remaining == 0:  # 如果目標值達成，加入結果
                ans.append(path[:])
                return
            for i in range(start, len(candidates)):
                # 跳過重複數字
                if i > start and candidates[i] == candidates[i - 1]:
                    continue
                # 如果當前數字大於剩餘目標值，提前終止
                if candidates[i] > remaining:
                    break
                path.append(candidates[i])  # 選擇當前數字
                backtrack(i + 1, path, remaining - candidates[i])  # 遞迴處理
                path.pop()  # 回溯，移除當前數字
        
        candidates.sort()  # 排序以便處理重複元素
        ans = []
        backtrack(0, [], target)
        return ans
```

---

#### 複雜度分析

- **時間複雜度**: $O(2^n)$，其中 $n$ 是 `candidates` 的長度。
  - 雖然排序需要 $O(n \log n)$ 時間，但主要的時間花費在回溯過程中，最壞情況下可能有 $2^n$ 種組合需要檢查。
- **空間複雜度**: $O(n)$，遞迴堆疊的深度最多為 $n$。

</details>


---

### [37. Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)

非常經典的數獨問題，可以利用回溯法解決。事實上，針對數獨類型的問題，有許多進階的搜索方法和剪枝策略可以提升求解速度，例如啟發式搜索。

<details>
<summary>題解</summary>

#### 問題描述

編寫一個函式來解決數獨問題。  
數獨的解法需要滿足以下條件：
1. 每行的數字 `1-9` 必須唯一。
2. 每列的數字 `1-9` 必須唯一。
3. 每個 $3 \times 3$ 的小方格內數字 `1-9` 必須唯一。

輸入是一個 $9 \times 9$ 的二維列表，其中 `'.'` 表示空格，需用數字填充。

---

#### 解題思路

1. **問題拆解**:
   - 使用回溯法 (Backtracking) 試圖填入數字。
   - 對每個空格測試數字 `1-9`，檢查是否符合數獨規則。
   - 如果符合則遞迴嘗試填寫下一格，否則回溯。

2. **有效性檢查**:
   - 在每次填入數字時，檢查是否滿足數獨的行、列和 $3 \times 3$ 區域規則。

3. **優化**:
   - 使用遞迴優先填入空格數量最少的位置，以減少無效測試次數。

---

#### Python 範例程式碼

```python
class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        def is_valid(r, c, num):
            # 檢查列是否有重複
            if num in board[r]:
                return False
            # 檢查行是否有重複
            if num in (board[i][c] for i in range(9)):
                return False
            # 檢查 3x3 小方格是否有重複
            box_r, box_c = r // 3 * 3, c // 3 * 3
            for i in range(box_r, box_r + 3):
                for j in range(box_c, box_c + 3):
                    if board[i][j] == num:
                        return False
            return True

        def backtrack():
            for r in range(9):
                for c in range(9):
                    if board[r][c] == '.':  # 找到一個空格
                        for num in map(str, range(1, 10)):  # 試圖填入 '1' 到 '9'
                            if is_valid(r, c, num):  # 檢查是否合法
                                board[r][c] = num
                                if backtrack():  # 遞迴嘗試下一步
                                    return True
                                board[r][c] = '.'  # 回溯
                        return False  # 若無法填入任何數字則失敗
            return True  # 若所有格子都已填滿，返回成功

        backtrack()
```

---

#### 複雜度分析

- **時間複雜度**: 最壞情況為 $O(9^{81})$，即最多需要嘗試每個格子可能的數字排列。但實際情況下，由於剪枝和限制，平均會遠小於最壞情況。
- **空間複雜度**: $O(81)$，遞迴堆疊的深度最多為 81 層。

</details>


---

### [310. Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/)

如何將這道題轉化為搜索類型的問題？應該使用深度優先搜索還是廣度優先搜索？

<details>
<summary>題解</summary>

#### 問題描述

給定一個無向圖，表示為 $n$ 個節點的樹，其中每個節點被編號為 `0` 到 `n-1`，樹的邊緣表示為一個列表 `edges`，其中 `edges[i] = [a, b]` 表示節點 `a` 和節點 `b` 之間的邊。  
目標是找到所有樹的**最小高度樹**（Minimum Height Trees, MHT）的根。返回所有可能的根節點。

---

#### 解題思路

1. **關鍵觀察**:
   - 樹的「中心節點」可以是 1 或 2 個節點，這些節點構成最小高度樹的根。
   - 使用拓撲排序修剪樹中的葉子節點，直到剩下 1 或 2 個節點為止。

2. **解法**:
   - 利用 BFS 和鄰接表來實現拓撲排序。
   - 每次移除葉子節點，並更新鄰接節點的度數，將新的葉子節點加入隊列。
   - 當剩餘節點數量小於等於 2 時，返回這些節點。

---

#### Python 範例程式碼

```python
from collections import deque, defaultdict

class Solution:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        if n == 1:
            return [0]
        
        # 建立鄰接表和度數表
        graph = defaultdict(list)
        degree = [0] * n
        for a, b in edges:
            graph[a].append(b)
            graph[b].append(a)
            degree[a] += 1
            degree[b] += 1

        # 初始化葉子節點
        leaves = deque([i for i in range(n) if degree[i] == 1])

        # 拓撲排序修剪葉子
        remaining_nodes = n
        while remaining_nodes > 2:
            remaining_nodes -= len(leaves)
            for _ in range(len(leaves)):
                leaf = leaves.popleft()
                for neighbor in graph[leaf]:
                    degree[neighbor] -= 1
                    if degree[neighbor] == 1:
                        leaves.append(neighbor)

        # 剩下的節點即為樹的中心
        return list(leaves)
```

---

#### 複雜度分析

- **時間複雜度**: $O(n)$，每條邊只被訪問一次。
- **空間複雜度**: $O(n)$，用於鄰接表和隊列。

</details>