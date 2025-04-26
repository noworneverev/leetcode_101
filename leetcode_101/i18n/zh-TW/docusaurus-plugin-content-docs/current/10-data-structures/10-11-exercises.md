---
sidebar_position: 58
---

# 10.11 練習

## 基礎難度

### [566. Reshape the Matrix](https://leetcode.com/problems/reshape-the-matrix/)

這題沒什麼難度，只是需要耐心操作。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個 `m x n` 的二維矩陣 `mat`，以及兩個整數 `r` 和 `c`，代表你想要將 `mat` **重塑成 `r x c` 的新矩陣**。  
重塑時**原本矩陣中的元素順序（row-wise）不能改變**。  
如果不能重塑（元素總數不一致），就回傳原始矩陣。

---

#### **範例**
```plaintext
輸入: mat = [[1,2],[3,4]], r = 1, c = 4
輸出: [[1,2,3,4]]
```
```plaintext
輸入: mat = [[1,2],[3,4]], r = 2, c = 4
輸出: [[1,2],[3,4]]  # 無法重塑，回傳原始
```

---

#### **解題思路**

1. **確認是否可重塑：**
   - `原始總元素數 = m × n`
   - `新矩陣總元素數 = r × c`
   - 若兩者不等 → 直接回傳原始矩陣

2. **展平成一維陣列**：
   - 使用 itertools 或巢狀 for-loop，將所有元素按 row-wise 存到一維 list。

3. **重新構造 r × c 的新矩陣**：
   - 將展平後的一維陣列，每次取 `c` 個元素形成一個 row。

---

#### **Python 範例程式碼**
```python
class Solution:
    def matrixReshape(self, mat: List[List[int]], r: int, c: int) -> List[List[int]]:
        m, n = len(mat), len(mat[0])
        if m * n != r * c:
            return mat  # 無法重塑，回傳原始矩陣

        flat = [num for row in mat for num in row]  # 展平成一維陣列
        return [flat[i * c:(i + 1) * c] for i in range(r)]  # 分成 r 個 row，每個 row 有 c 個元素
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(m \times n)$，展平並重建矩陣。
- **空間複雜度**：$O(m \times n)$，需要額外儲存一個新矩陣。


</details>

---

### [225. Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/)

使用類似的方式，我們也可以用佇列（queue）實現堆疊（stack）。

<details>
<summary>題解</summary>

#### **問題描述**
請用 **佇列（Queue）** 實作一個 **堆疊（Stack）**，也就是要模擬 **先進後出（LIFO）** 的行為，但只能使用 **先進先出（FIFO）** 的佇列操作。

**你需要實作以下方法：**
- `push(x)`：將元素壓入堆疊頂端。
- `pop()`：移除並回傳堆疊頂端元素。
- `top()`：回傳堆疊頂端元素。
- `empty()`：回傳堆疊是否為空。

---

#### **解題思路**
雖然佇列是 FIFO（先進先出），但我們可以透過「移動順序」來模擬堆疊的 LIFO 行為。

##### ✅ 方法：使用單個佇列（queue）實作
- `push(x)`：將新元素放入隊尾，再把前面的元素依序「移到隊尾」，讓新加入的元素變成「最前面」（堆疊頂）。
- `pop()`：直接從隊首移除元素（就是堆疊頂）。
- `top()`：看隊首元素。
- `empty()`：檢查佇列是否為空。

---

#### **Python 範例程式碼**
```python
from collections import deque

class MyStack:
    def __init__(self):
        self.q = deque()

    def push(self, x: int) -> None:
        self.q.append(x)
        # 把前面的元素移到隊尾
        for _ in range(len(self.q) - 1):
            self.q.append(self.q.popleft())

    def pop(self) -> int:
        return self.q.popleft()

    def top(self) -> int:
        return self.q[0]

    def empty(self) -> bool:
        return not self.q
```

---

#### **時間複雜度分析**
- `push`：$O(n)$，因為需要重新排列順序
- `pop`：$O(1)$
- `top`：$O(1)$
- `empty`：$O(1)$

</details>

---

### [503. Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/)

`Daily Temperatures` 的變種題。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個 **循環陣列** `nums`，請對每個元素找出「下一個較大的元素」。  
- 若右邊沒有比它大的數，則輸出 `-1`。
- 因為是「循環陣列」，所以你可以「繞回開頭」繼續找。

**範例**
```plaintext
輸入: nums = [1, 2, 1]
輸出: [2, -1, 2]
```

---

#### **解題思路**

這題是典型的 **單調堆疊（Monotonic Stack）** 應用。

##### ✅ 重點觀察：
- 需要找「右邊第一個比自己大的數」→ 單調遞減堆疊（stack 存的是 index）
- 因為是「循環陣列」，所以我們可以將陣列「走兩遍」來模擬環狀效果。

---

#### **解法步驟**

1. **初始化**
   - `res`：預設全部是 `-1`
   - `stack`：存放「可能為下一個較大值的候選位置」

2. **遍歷 `2n` 次，模擬環狀**
   - 對於每個 `i`，使用 `i % n` 取得實際索引位置
   - 若當前值比 stack 頂部所指的值大，代表找到「下一個較大的元素」

3. **只在第一次迴圈把 index 放進 stack**
   - 避免重複處理同一個位置

---

#### **Python 範例程式碼**
```python
class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        n = len(nums)
        res = [-1] * n
        stack = []

        for i in range(2 * n):
            curr = nums[i % n]
            while stack and nums[stack[-1]] < curr:
                idx = stack.pop()
                res[idx] = curr
            if i < n:
                stack.append(i)
        return res
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(n)$，每個元素最多進出 stack 一次
- **空間複雜度**：$O(n)$，用於結果和 stack

---

#### **範例解析**
```plaintext
nums = [1, 2, 1]
索引 =   0  1  2

模擬 2 倍長度：i = 0 ~ 5

i = 0 → 1 → stack: [0]
i = 1 → 2 > nums[0] → res[0] = 2 → stack: [1]
i = 2 → 1 → stack: [1, 2]
i = 3 → 1 → 無變化
i = 4 → 2 > nums[2] → res[2] = 2
i = 5 → 1 → 結束

res = [2, -1, 2]
```

</details>

---

### [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)

使用什麼資料結構可以快速判斷是否有重複呢？

<details>
<summary>題解</summary>

#### **問題描述**
給定一個整數陣列 `nums`，判斷是否存在**重複元素**。  
若存在任意一個值出現兩次以上，回傳 `True`；否則回傳 `False`。

---

#### **最佳解法：使用集合 Set**
利用集合的特性：**不會儲存重複元素**，我們可以在遍歷陣列時檢查元素是否已出現過。

---

#### **Python 程式碼**
```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(n)$，最多遍歷一次陣列。
- **空間複雜度**：$O(n)$，最壞情況下每個數都不同，全部加入 `set`。

</details>

---

### [697. Degree of an Array](https://leetcode.com/problems/degree-of-an-array/)

如何對陣列進行預處理，才能正確且快速計算子陣列的長度？

<details>
<summary>題解</summary>

#### **問題描述**
給定一個整數陣列 `nums`，其「**度（degree）**」定義為 **陣列中某個數字出現的最高頻率**。

請找出具有與整體陣列相同度的**最短子陣列的長度**。

---

#### **範例**
```plaintext
輸入: nums = [1,2,2,3,1]
輸出: 2  # 子陣列 [2,2] 度為 2，與整體度相同

輸入: nums = [1,2,2,3,1,4,2]
輸出: 6  # 子陣列 [2,2,3,1,4,2]
```

---

#### **解題思路**

1. **統計每個數的出現次數（frequency）**
2. **記錄每個數首次與最後一次出現的位置（first index, last index）**
3. **找出最大度數，然後針對所有具有最大度的數字，計算其子陣列長度（last - first + 1）**
4. **取最短長度作為答案**

---

#### **Python 程式碼**
```python
from collections import defaultdict

class Solution:
    def findShortestSubArray(self, nums: List[int]) -> int:
        count = defaultdict(int)
        first_index = {}
        last_index = {}
        
        for i, num in enumerate(nums):
            count[num] += 1
            if num not in first_index:
                first_index[num] = i
            last_index[num] = i

        degree = max(count.values())
        return min(last_index[num] - first_index[num] + 1 for num in count if count[num] == degree)
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(n)$，只遍歷陣列 1 次
- **空間複雜度**：$O(n)$，儲存頻率與索引資料

</details>

---

### [594. Longest Harmonious Subsequence](https://leetcode.com/problems/longest-harmonious-subsequence/)

`最長連續序列` 的變種題。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個整數陣列 `nums`，找出其中最長的**和諧子序列（harmonious subsequence）** 的長度。  

**定義：**  
和諧子序列是指一個序列，其中最大值與最小值的差為 **1**，例如：
```plaintext
[1, 2, 2, 1] 是和諧的（max - min = 1）
[1, 3, 1, 3] 則不是（max - min = 2）
```

---

#### **解題思路**

這是一題**統計 + 對鄰接 key 比較的問題**，解法如下：

1. **使用 `Counter` 統計每個數字出現次數**
2. **遍歷所有 key `x`，若 `x+1` 存在，就組成和諧序列**
   - `count[x] + count[x+1]` 是一個合法子序列長度
3. **取所有合法情況中的最大值作為答案**

---

#### **Python 範例程式碼**
```python
from collections import Counter

class Solution:
    def findLHS(self, nums: List[int]) -> int:
        freq = Counter(nums)
        max_len = 0
        for x in freq:
            if x + 1 in freq:
                max_len = max(max_len, freq[x] + freq[x + 1])
        return max_len
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(n)$，掃描一遍並計算統計
- **空間複雜度**：$O(n)$，儲存 `Counter`


</details>


---

### [15. 3Sum](https://leetcode.com/problems/3sum/)

因為排序的複雜度是 $O(n \log n) < O(n^2)$，我們既可以先排序後再進行 $O(n^2)$ 的指針搜尋，也可以直接利用雜湊表進行 $O(n^2)$ 的搜尋。


<details>
<summary>題解</summary>

#### **問題描述**
給定一個整數陣列 `nums`，找出所有**不重複的三元組 (a, b, c)**，使得：
```
a + b + c = 0
```

**要求：**
- 不得包含重複的三元組。
- 可以回傳答案的順序任意。

---

#### **解題思路：排序 + 雙指針（Two Pointers）**

這是一道經典的三數和問題（3Sum），核心邏輯如下：

1. **先對陣列排序**，方便去重與使用雙指針。
2. **固定一個數 `nums[i]`，對其右側使用雙指針掃描**
   - 左指針 `l` 從 `i+1` 開始，右指針 `r` 從末端開始。
   - 如果三數和為 0，就記錄結果，並略過重複數字。
   - 如果總和 < 0 → 左指針右移；總和 > 0 → 右指針左移。
3. **跳過重複的數字**，避免結果重複。

---

#### **Python 範例程式碼**
```python
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        res = []
        n = len(nums)

        for i in range(n):
            if i > 0 and nums[i] == nums[i - 1]:
                continue  # 跳過重複元素

            l, r = i + 1, n - 1
            while l < r:
                total = nums[i] + nums[l] + nums[r]
                if total == 0:
                    res.append([nums[i], nums[l], nums[r]])
                    l += 1
                    r -= 1
                    # 跳過重複左邊和右邊
                    while l < r and nums[l] == nums[l - 1]:
                        l += 1
                    while l < r and nums[r] == nums[r + 1]:
                        r -= 1
                elif total < 0:
                    l += 1
                else:
                    r -= 1
        return res
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(n^2)$，排序 + 雙指針掃描
- **空間複雜度**：$O(\text{log}n)$（排序使用的遞迴棧空間），結果儲存不算在內


</details>

---

## 進階難度

### [287. Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)

`尋找丟失的數字` 的變種題。除了標記負值的方法，你是否有其它算法來解決這個問題？


<details>
<summary>題解</summary>

#### **問題描述**
給定一個包含 `n + 1` 個整數的陣列 `nums`，每個整數都在區間 `[1, n]` 之間（包含 1 和 n）。  
保證**至少有一個數字重複出現**，請你找出這個重複的數字。**不能修改陣列**、只能用 $O(1)$ 額外空間。

---

#### **範例**
```plaintext
輸入: nums = [1, 3, 4, 2, 2]
輸出: 2

輸入: nums = [3, 1, 3, 4, 2]
輸出: 3
```

---

#### **解題思路：Floyd 快慢指針找環入口（Cycle Detection）**

這題限制很多：
- ❌ 不可修改陣列
- ❌ 不可用額外空間
- ✅ 要找出重複元素

這讓我們可以聯想到：**「Linked List 環偵測」的 Floyd 龜兔賽跑演算法**

##### ✅ 核心想法：
- 將陣列視為一個「**隱藏的 linked list**」，`nums[i]` 指向下一個節點 `nums[nums[i]]`
- 由於存在重複元素，這個鏈會出現「**環**」
- 用快慢指針找出**相遇點**，再從頭與相遇點同步走，找到**環的起點**，就是答案

---

#### **Python 範例程式碼**
```python
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        # 第一步：找交點
        slow = fast = 0
        while True:
            slow = nums[slow]
            fast = nums[nums[fast]]
            if slow == fast:
                break

        # 第二步：找環的起點（即重複數字）
        slow = 0
        while slow != fast:
            slow = nums[slow]
            fast = nums[fast]
        
        return slow
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(n)$（類似環形 linked list 的最壞走訪時間）
- **空間複雜度**：$O(1)$（不使用額外空間）

</details>


---

### [313. Super Ugly Number](https://leetcode.com/problems/super-ugly-number/)

嘗試使用優先佇列來解決這個問題。

<details>
<summary>題解（優先佇列 Min Heap）</summary>

#### **問題描述**
輸入一個整數 `n` 和一組質數 `primes`，回傳第 `n` 個**超級醜數（super ugly number）**。  
超級醜數定義為：只能被 `primes` 中的數整除的正整數（質因數只能來自 `primes`）。

---

#### **解題思路：使用優先佇列（Min Heap）**

##### ✅ 關鍵觀念

- 將每個超級醜數乘上 `primes` 中的每一個質數，就能產生下一批候選超級醜數。
- 我們用一個 **最小堆（min heap）** 來維持所有可能的候選值，每次取最小的值，確保是排序好的。
- 另外用一個 `set` 避免加入重複數字。

---

#### **演算法步驟**

1. 初始化 heap：`heap = [1]`，因為第 1 個超級醜數永遠是 `1`
2. 建立 `seen = {1}` 集合來避免重複
3. 迴圈執行 `n` 次，每次：
   - 從堆中取出最小值 `x`
   - 將 `x * p` 推進堆中（對每個質數 `p`）
   - 如果這個結果沒看過（不在 `seen` 中），就加入 `heap` 和 `seen`
4. 第 `n` 次取出來的 `x` 就是第 `n` 個超級醜數

---

#### **Python 範例程式碼**
```python
import heapq

class Solution:
    def nthSuperUglyNumber(self, n: int, primes: List[int]) -> int:
        heap = [1]
        seen = set([1])
        
        for _ in range(n):
            x = heapq.heappop(heap)
            for p in primes:
                new_ugly = x * p
                if new_ugly not in seen:
                    seen.add(new_ugly)
                    heapq.heappush(heap, new_ugly)
        return x
```

---

#### **時間與空間複雜度分析**

- **時間複雜度**：近似 $O(n \log k)$，其中 $k$ 為候選數數量（實際和質數數量與分布有關）
- **空間複雜度**：$O(n)$，heap 和 seen 至多存放 n 個候選值

---

#### **舉例說明**

```python
n = 12
primes = [2, 7, 13, 19]

初始 heap: [1]

每次彈出最小值，然後乘上每個質數放回去：
1 → 推入 2, 7, 13, 19
heap = [2, 7, 13, 19]

接下來彈出 2，乘上所有 primes 推入：
2×2=4, 2×7=14, 2×13=26, 2×19=38 ...
```

你會得到排序後的序列：
```plaintext
1, 2, 4, 7, 8, 13, 14, 16, 19, 26, 28, 32, ...
→ 第 12 個是 32 ✅
```

</details>


<details>
<summary>題解（DP）</summary>

#### **問題描述**
給定一個整數 `n` 和一組**質數陣列** `primes`，請找出第 `n` 個**超級醜數（Super Ugly Number）**。

- 超級醜數：是指只能被 `primes` 中的質數整除的正整數（例如只包含 2, 3, 5 的乘積因子）
- 第 1 個超級醜數定義為 `1`

---

#### **範例**
```plaintext
輸入: n = 12, primes = [2, 7, 13, 19]
輸出: 32
解釋: 超級醜數為 [1, 2, 4, 7, 8, 13, 14, 16, 19, 26, 28, 32]
```

---

#### **解題思路：動態規劃 + 多指標**

這題是經典的「Ugly Number II」的進階版，使用的技巧是：
> **多指標指向 dp 陣列 + 不斷選出最小醜數擴展**

---

#### ✅ Step by step 解法

1. 建立 `dp` 陣列，`dp[0] = 1`，代表第 1 個超級醜數是 `1`
2. 設 `k = len(primes)`，每個質數對應一個指標 `idx[i]`（初始都為 0）
3. 每一輪找出所有 `primes[i] * dp[idx[i]]` 中最小值
4. 加入 `dp`，並將所有造成最小值的指標 `idx[i] += 1`

---

#### **Python 範例程式碼**
```python
class Solution:
    def nthSuperUglyNumber(self, n: int, primes: List[int]) -> int:
        k = len(primes)
        dp = [1] * n
        idx = [0] * k  # 每個 prime 的指標

        for i in range(1, n):
            candidates = [primes[j] * dp[idx[j]] for j in range(k)]
            next_ugly = min(candidates)
            dp[i] = next_ugly

            # 所有等於 min 的候選都前進（避免重複）
            for j in range(k):
                if candidates[j] == next_ugly:
                    idx[j] += 1

        return dp[-1]
```

---

#### **時間與空間複雜度**

- **時間複雜度**：$O(n \cdot k)$，其中 $k$ 是 `primes` 的長度（每次計算 $k$ 個候選）
- **空間複雜度**：$O(n + k)$，儲存 `dp` 和 `idx`


</details>

---

### [870. Advantage Shuffle](https://leetcode.com/problems/advantage-shuffle/)

如果我們需要比較大小關係，而且同一數字可能出現多次，那麼應該使用什麼資料結構呢？

<details>
<summary>題解</summary>

#### **問題描述**
給定兩個等長的陣列 `nums1` 和 `nums2`，你可以重新排列 `nums1`，讓它在**盡可能多的位置上，`nums1[i] > nums2[i]`**。

請回傳你重新排列後的 `nums1`。

---

#### **範例**
```plaintext
輸入:
nums1 = [2,7,11,15]
nums2 = [1,10,4,11]

輸出:
[2,11,7,15]

解釋：
對應位置比較：
- 2 > 1 ✅
- 11 > 10 ✅
- 7 > 4 ✅
- 15 <= 11 ❌ → 無法超越，只好丟 weakest
```

---

#### **解題思路：貪婪 + 雙指針 + 排序**

我們的目標是：
> 盡可能讓 `nums1[i] > nums2[i]`，且每個 `nums1[i]` 只能用一次

##### ✅ 直覺貪婪策略：
- 把 `nums1` 排序起來（從小到大）
- 把 `nums2` 依照「數值大小 + 原始索引」排序，方便最後放回對應位置
- 用**雙指針**從兩端對應策略：
  - 如果 `nums1` 中的最小值可以贏過 `nums2` 中的某個值，就分配它（貪婪搶勝）
  - 否則，把 `nums1` 中最小的「廢牌」分給 `nums2` 中最大的（反正贏不了，不要浪費好牌）

---

#### **Python 範例程式碼**
```python
class Solution:
    def advantageCount(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums1.sort()
        nums2_sorted = sorted([(num, i) for i, num in enumerate(nums2)])
        res = [0] * len(nums1)

        l, r = 0, len(nums1) - 1
        for num, i in reversed(nums2_sorted):
            if nums1[r] > num:
                res[i] = nums1[r]
                r -= 1
            else:
                res[i] = nums1[l]
                l += 1
        return res
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(n \log n)$，排序 `nums1` 和 `nums2`
- **空間複雜度**：$O(n)$，用於排序與結果儲存

---

#### **總結**
✅ 貪婪分配策略：強牌打強，弱牌消耗  
✅ 雙指針搭配排序技巧，實現最優配置  
</details>

---

### [307. Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/)

`前綴和` 的變種題。好吧我承認，這題可能稍微超出範圍，你或許需要搜索一下什麼是`線段樹`。

<details>
<summary>題解</summary>

#### **問題描述**
設計一個支援「**單點修改**」與「**區間總和查詢**」的資料結構。

必須實作兩個操作：
- `update(index, val)`：把 `nums[index]` 更新成 `val`
- `sumRange(left, right)`：回傳 `nums[left] + nums[left+1] + ... + nums[right]`

---

#### **解題思路：樹狀陣列（Binary Indexed Tree, Fenwick Tree）**

這種題目如果**只查詢**可以用前綴和（Prefix Sum），  
但因為要**頻繁修改**，Prefix Sum 效率不夠好，  
所以要用更進階的資料結構：**Binary Indexed Tree (BIT)**

---

#### **核心概念**
- 用一個額外陣列 `bit` 來快速更新與查詢區間和。
- 兩個關鍵操作：
  - `_add(i, delta)`：把 `nums[i]` 加上 `delta`
  - `_prefixSum(i)`：計算 `nums[0]` 到 `nums[i-1]` 的和

---

#### **Python 程式碼**
```python
class NumArray:
    def __init__(self, nums: List[int]):
        self.n = len(nums)
        self.nums = nums[:]  # 儲存原本的值
        self.bit = [0] * (self.n + 1)
        for i in range(self.n):
            self._add(i + 1, nums[i])

    def _add(self, i: int, delta: int):
        while i <= self.n:
            self.bit[i] += delta
            i += i & -i  # 加上最低位 1

    def _prefixSum(self, i: int) -> int:
        res = 0
        while i > 0:
            res += self.bit[i]
            i -= i & -i  # 減去最低位 1
        return res

    def update(self, index: int, val: int) -> None:
        delta = val - self.nums[index]
        self.nums[index] = val
        self._add(index + 1, delta)

    def sumRange(self, left: int, right: int) -> int:
        return self._prefixSum(right + 1) - self._prefixSum(left)
```

---

#### **時間與空間複雜度**
- **時間複雜度**：
  - `update`：$O(\log n)$
  - `sumRange`：$O(\log n)$
- **空間複雜度**：$O(n)$，需要一個額外的 BIT 陣列

</details>