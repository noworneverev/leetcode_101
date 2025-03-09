---
sidebar_position: 34
---

# 6.9 練習

## 基礎難度

### [213. House Robber II](https://leetcode.com/problems/house-robber-ii/)

強盜搶劫問題的 follow-up，如何處理環形陣列呢？

<details>
<summary>題解</summary>

#### 問題描述

給定一個環狀排列的房屋（即第 0 間房和最後一間房相鄰），每間房內有一定的金額，不能偷相鄰的房屋。  
請找出可以偷竊的最大金額。

---

#### 解題思路

1. **關鍵觀察**:
   - 本題是 `House Robber`（Leetcode 198）的變形，唯一的差別是**房屋是環狀的**。
   - **兩種選擇**:
     - **包含第一間房**：那麼不能偷最後一間房。
     - **包含最後一間房**：那麼不能偷第一間房。

2. **解法**:
   - 計算 **不包含最後一間房的最大偷竊金額** `rob(nums[:-1])`。
   - 計算 **不包含第一間房的最大偷竊金額** `rob(nums[1:])`。
   - 取兩者的最大值作為答案。

3. **子問題 `rob(nums)`（動態規劃）**:
   - `dp[i]` 表示**偷竊到第 `i` 間房屋時的最大金額**。
   - 狀態轉移方程：
     $$
     dp[i] = \max(dp[i-1], dp[i-2] + nums[i])
     $$
   - 由於 `dp[i]` 只依賴 `dp[i-1]` 和 `dp[i-2]`，可以用 **滾動變數** 優化空間。

---

#### Python 範例程式碼

```python
class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]

        def simple_rob(arr):
            prev, curr = 0, 0
            for num in arr:
                prev, curr = curr, max(curr, prev + num)
            return curr

        return max(simple_rob(nums[:-1]), simple_rob(nums[1:]))
```

---

#### 複雜度分析

- **時間複雜度**: $O(n)$，遍歷兩次 `nums` 計算最大值。
- **空間複雜度**: $O(1)$，只使用常數變數 `prev` 和 `curr`。

</details> 

---

### [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

經典的一維動態規劃題目，試著把一維空間優化為常量吧。

<details>
<summary>題解</summary>

#### 問題描述

給定一個整數數組 `nums`，找出具有最大總和的**連續子陣列**（至少包含一個數字），並返回其最大總和。

---

#### 解題思路

1. **關鍵觀察**:
   - 需要找到一個連續的子陣列，使得其總和最大。
   - 若某一段的和為負數，則對後續子陣列沒有貢獻，應該捨棄。

2. **解法**:
   - **Kadane's Algorithm（貪心 + 動態規劃）**
     - 使用 `current_sum` 來存當前子陣列的最大和，若 `current_sum < 0`，則重新開始計算。
     - 用 `max_sum` 記錄全局最大值。
     - 狀態轉移方程：
       $$
       current\_sum = \max(num, current\_sum + num)
       $$
       $$
       max\_sum = \max(max\_sum, current\_sum)
       $$
   - 只需一次遍歷，並使用兩個變數存儲結果，因此效率極高。

---

#### Python 範例程式碼

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_sum = nums[0]
        current_sum = 0
        for num in nums:
            current_sum = max(num, current_sum + num)
            max_sum = max(max_sum, current_sum)
        return max_sum
```

---

#### 複雜度分析

- **時間複雜度**: $O(n)$，僅需一次遍歷。
- **空間複雜度**: $O(1)$，只使用常數額外變數。

</details>

---

### [343. Integer Break](https://leetcode.com/problems/integer-break/)

分割類型題，先嘗試用動態規劃求解，再思考是否有更簡單的解法。

<details>
<summary>題解</summary>

#### 問題描述

給定一個正整數 `n`，將其拆分為至少兩個正整數的總和，並使這些數字的乘積最大化。返回可以獲得的最大乘積。

---

#### 解題思路

1. **關鍵觀察**:
   - 我們需要將 `n` 拆分成數個整數，使其乘積最大。
   - 數字 `2` 和 `3` 是最有利於產生最大乘積的因子，拆分 `n` 時應盡可能使用它們。

2. **數學推導**:
   - 若 `n <= 3`，最佳拆分方案是 `n-1`。
   - 對於 `n >= 4`，我們應盡可能將 `n` 拆分成 `3` 的倍數：
     - 如果 `n % 3 == 0`，則全部拆成 `3`，乘積為 $3^{n/3}$。
     - 如果 `n % 3 == 1`，則應將最後一個 `3` 變為 `2 * 2`（因為 `1` 不能單獨拆分），乘積為 $3^{(n/3)-1} \times 2^2$。
     - 如果 `n % 3 == 2`，則直接乘積為 $3^{n/3} \times 2$。

3. **解法選擇**:
   - **數學解法（貪心）**: 根據 `n % 3` 的結果計算最優拆分，時間複雜度 $O(1)$。
   - **動態規劃（DP）**: 使用 `dp[i]` 表示 `i` 拆分後的最大乘積，時間複雜度 $O(n^2)$，但對大數 `n` 不夠高效。

---

#### Python 範例程式碼（數學解法） 

```python
class Solution:
    def integerBreak(self, n: int) -> int:
        if n <= 3:
            return n - 1
        if n % 3 == 0:
            return 3 ** (n // 3)
        if n % 3 == 1:
            return 3 ** (n // 3 - 1) * 4
        return 3 ** (n // 3) * 2
```

---

#### Python 範例程式碼（動態規劃解法）  

```python
class Solution:
    def integerBreak(self, n: int) -> int:
        dp = [0] * (n + 1)
        dp[2] = 1
        for i in range(3, n + 1):
            for j in range(1, i):
                dp[i] = max(dp[i], j * (i - j), j * dp[i - j])
        return dp[n]
```

---

#### 複雜度分析

- **數學解法**
  - **時間複雜度**: $O(1)$，僅做幾次數學計算。
  - **空間複雜度**: $O(1)$，不需要額外的記憶體儲存。

- **動態規劃解法**
  - **時間複雜度**: $O(n^2)$，雙層迴圈計算 `dp[i]`。
  - **空間複雜度**: $O(n)$，需要儲存 `dp` 陣列。

</details>

---

### [583. Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/)

最長公共子序列的變種題。

<details>
<summary>題解</summary>

#### **問題描述**
給定兩個字串 `word1` 和 `word2`，找出將兩個字串變為相同所需的最少刪除次數。

---

#### **解題思路**

1. **關鍵觀察**
   - 這道題可以轉化為 **Longest Common Subsequence (LCS, 最長公共子序列)** 問題：
     - 設 `lcs_len = LCS(word1, word2)`，則：
       - 需要刪除 `word1` 中 `len(word1) - lcs_len` 個字母。
       - 需要刪除 `word2` 中 `len(word2) - lcs_len` 個字母。
     - 所以答案為：
       $$
       \text{min deletions} = (m - lcs\_len) + (n - lcs\_len) = m + n - 2 \times lcs\_len
       $$

2. **動態規劃設計**
   - `dp[i][j]`：表示 `word1[:i]` 和 `word2[:j]` 的 **LCS 長度**。
   - 狀態轉移：
     - 若 `word1[i-1] == word2[j-1]`，則 `dp[i][j] = dp[i-1][j-1] + 1`
     - 否則，`dp[i][j] = max(dp[i-1][j], dp[i][j-1])`
   - 最後計算最少刪除步驟 `m + n - 2 * dp[m][n]`。

---

#### **Python 解法（標準 DP）**
```python
class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        m, n = len(word1), len(word2)
        dp = [[0] * (n + 1) for _ in range(m + 1)]

        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if word1[i - 1] == word2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + 1
                else:
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

        return m + n - 2 * dp[m][n]
```

---

#### **優化：使用滾動數組壓縮空間**
由於 `dp[i][j]` 只依賴 `dp[i-1][j]` 和 `dp[i][j-1]`，可以用 **滾動數組** 降低空間複雜度至 $O(n)$。

```python
class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        m, n = len(word1), len(word2)
        prev = [0] * (n + 1)

        for i in range(1, m + 1):
            curr = [0] * (n + 1)
            for j in range(1, n + 1):
                if word1[i - 1] == word2[j - 1]:
                    curr[j] = prev[j - 1] + 1
                else:
                    curr[j] = max(prev[j], curr[j - 1])
            prev = curr  # 滾動陣列更新
        
        return m + n - 2 * prev[n]
```

---

#### **複雜度分析**
|  解法  | 時間複雜度 | 空間複雜度 |
|--------|------------|------------|
| **標準 DP** | $O(m \times n)$ | $O(m \times n)$ |
| **空間優化 DP** | $O(m \times n)$ | $O(n)$ |

</details>
---

## 進階難度

### [646. Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain/)

最長遞增子序列的變種題，同樣的，嘗試用二分進行加速。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個由 `(left, right)` 組成的數對數組 `pairs`，請找到可以形成的**最長數對鏈**的長度。  
**規則**：如果 `pairA = (a, b)`，`pairB = (c, d)`，且 `b < c`，則 `pairA` 可以連接到 `pairB`。

---

#### **解題思路**
這個問題可以轉化為**類似「非重疊區間」的問題**，目標是選擇最多的**不重疊數對**來形成最長鏈。

1. **排序**：
   - 為了確保鏈接的可行性，先按照 **右端點 (`right`) 升序排序** `pairs`。
   - 這樣確保我們每次選擇的 `pair` **盡可能小的右端點**，為後續鏈接留下最多的空間（貪心策略）。

2. **貪心演算法**：
   - **從最小的 `right` 開始選擇數對**，並記錄當前鏈接的數對數量。
   - 每當找到一個 `left > 當前鏈的 right` 的 `pair`，則將它加入鏈中，並更新 `right`。

---

#### **Python 範例程式碼（貪心 + 排序）**
```python
class Solution:
    def findLongestChain(self, pairs: List[List[int]]) -> int:
        pairs.sort(key=lambda x: x[1])  # 按照右端點升序排序
        curr_end, count = float('-inf'), 0
        for left, right in pairs:
            if left > curr_end:  # 能夠形成鏈接
                curr_end = right
                count += 1
        return count
```

---

#### **複雜度分析**
- **時間複雜度**：$O(n \log n)$（排序所需時間） + $O(n)$（遍歷 `pairs`），因此總計 $O(n \log n)$。
- **空間複雜度**：$O(1)$，只使用變數儲存當前鏈接長度與 `right` 端點。

</details>

---

### [10. Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)

正則表達式匹配，非常考驗耐心。需要根據正則表達式的不同情況，即字符、星號，點號等，分情況討論。

<details>
<summary>題解</summary>

#### **問題描述**
給定兩個字串：
- `s`：輸入字串
- `p`：模式（可能包含 `.` 和 `*`）

判斷 `s` 是否可以被 `p` 匹配，規則如下：
- `.` 匹配任何單個字母。
- `*` 匹配 `*` 前面的元素 **0 次或多次**。

---

#### **解題思路**
這是典型的 **動態規劃（DP）** 問題，核心在於處理 `*` 和 `.` 的匹配邏輯。

1. **定義 `dp[i][j]`**：
   - `dp[i][j]` 表示 `s[:i]` 和 `p[:j]` 是否匹配。

2. **狀態轉移**
   - **普通匹配**（字母相同或 `p[j-1] == '.'`）：
     - $$ dp[i][j] = dp[i-1][j-1] $$
   - **處理 `*` 的情況**：
     - `*` 可以匹配 **0 次**（忽略 `p[j-2]`）：
       - $$ dp[i][j] = dp[i][j-2] $$
     - `*` 可以匹配 **1 次或更多次**（前一個字符與 `s[i-1]` 匹配）：
       - $$ dp[i][j] = dp[i-1][j] $$（繼續匹配 `*`）

3. **初始化**
   - `dp[0][0] = True`（兩個空字串匹配）。
   - `dp[0][j]` 需要考慮 `*` 的影響：
     - 只有當 `p[j-1] == '*'` 時，`dp[0][j] = dp[0][j-2]`。

---

#### **Python 範例程式碼（動態規劃）**
```python
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        m, n = len(s), len(p)
        dp = [[False] * (n + 1) for _ in range(m + 1)]
        dp[0][0] = True

        # 處理空字串與 `p`
        for j in range(2, n + 1):
            if p[j-1] == '*':
                dp[0][j] = dp[0][j-2]

        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if p[j-1] == s[i-1] or p[j-1] == '.':  # 普通匹配
                    dp[i][j] = dp[i-1][j-1]
                elif p[j-1] == '*':  # `*` 處理
                    dp[i][j] = dp[i][j-2]  # `*` 匹配 0 次
                    if p[j-2] == s[i-1] or p[j-2] == '.':  # `*` 匹配 1 次或更多
                        dp[i][j] |= dp[i-1][j]

        return dp[m][n]
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(m \times n)$，遍歷 `s` 和 `p` 填充 `dp` 表。
- **空間複雜度**：$O(m \times n)$，使用 `dp` 陣列。

</details>



---

### [376. Wiggle Subsequence](https://leetcode.com/problems/wiggle-subsequence/)

最長擺動子序列，通項公式比較特殊，需要仔細思考。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個整數數組 `nums`，找出其中**最長的擺動子序列（Wiggle Subsequence）**，並返回其長度。  
擺動序列定義如下：
- **擺動子序列** 是指相鄰元素之間的**差值在正負之間交替**的序列。
- 形式化定義：
  - `nums[i] > nums[i-1]`，則 `nums[i+1] < nums[i]`。
  - `nums[i] < nums[i-1]`，則 `nums[i+1] > nums[i]`。

---

#### **解題思路**
這是一個**貪心 + 動態規劃**的問題，主要有兩種解法：

1. **貪心解法 (O(n))**：
   - 只記錄當前上升 (`up`) 和下降 (`down`) 的擺動長度。
   - 當 `nums[i] > nums[i-1]`，則更新 `up = down + 1`。
   - 當 `nums[i] < nums[i-1]`，則更新 `down = up + 1`。
   - **核心觀察**：
     - 只在「擺動點」更新 `up` 或 `down`，而不關心具體的數值大小。
     - 只需要遍歷一次 `nums` 即可完成計算。

2. **動態規劃（O(n) + O(n) 空間）**：
   - `dp_up[i]`：代表到 `nums[i]` 為止，以**上升**結尾的擺動子序列長度。
   - `dp_down[i]`：代表到 `nums[i]` 為止，以**下降**結尾的擺動子序列長度。
   - 狀態轉移：
     - 若 `nums[i] > nums[i-1]`，則 `dp_up[i] = dp_down[i-1] + 1`，`dp_down[i]` 保持不變。
     - 若 `nums[i] < nums[i-1]`，則 `dp_down[i] = dp_up[i-1] + 1`，`dp_up[i]` 保持不變。
     - 若 `nums[i] == nums[i-1]`，則 `dp_up[i] = dp_up[i-1]`，`dp_down[i] = dp_down[i-1]`。

---

#### **Python 範例程式碼（貪心解法 O(n)）**
```python
class Solution:
    def wiggleMaxLength(self, nums: List[int]) -> int:
        if len(nums) < 2:
            return len(nums)
        
        up, down = 1, 1
        for i in range(1, len(nums)):
            if nums[i] > nums[i - 1]:
                up = down + 1
            elif nums[i] < nums[i - 1]:
                down = up + 1
        
        return max(up, down)
```

---

#### **Python 範例程式碼（動態規劃 O(n)）**
```python
class Solution:
    def wiggleMaxLength(self, nums: List[int]) -> int:
        if len(nums) < 2:
            return len(nums)

        n = len(nums)
        dp_up, dp_down = [1] * n, [1] * n

        for i in range(1, n):
            if nums[i] > nums[i-1]:
                dp_up[i] = dp_down[i-1] + 1
                dp_down[i] = dp_down[i-1]
            elif nums[i] < nums[i-1]:
                dp_down[i] = dp_up[i-1] + 1
                dp_up[i] = dp_up[i-1]
            else:
                dp_up[i] = dp_up[i-1]
                dp_down[i] = dp_down[i-1]

        return max(dp_up[-1], dp_down[-1])
```

---

#### **時間與空間複雜度**
|  解法  | 時間複雜度 | 空間複雜度 |
|--------|------------|------------|
| **貪心** | $O(n)$ | $O(1)$ |
| **動態規劃** | $O(n)$ | $O(n)$ |

</details>

---

### [494. Target Sum](https://leetcode.com/problems/target-sum/)

如果告訴你這道題是 0-1 背包，你是否會有一些思路？


<details>
<summary>題解</summary>

#### **問題描述**
給定一個整數數組 `nums` 和一個目標值 `target`，你需要在數組中每個數字前面加 `+` 或 `-` 來計算可能的總和，並求出能夠使總和等於 `target` 的**方法數量**。

---

#### **解題思路**
這道題可以轉化為 **01 背包問題（Subset Sum）**，透過 **動態規劃（DP）** 來解決。

1. **數學轉化**：
   - 假設有兩個子集：
     - `P`：選擇 `+` 的數字總和
     - `N`：選擇 `-` 的數字總和
   - 根據條件：
     - $ P + N = \text{sum(nums)} $
     - $ P - N = \text{target} $
   - 兩式相加：
     - $ P = \frac{\text{sum(nums)} + \text{target}}{2} $
   - 目標變成：**找出子集總和等於 `P` 的組合數**。

2. **轉化為背包問題**：
   - 設 `sum_subset = (sum(nums) + target) / 2`。
   - 這是一個 **01 背包問題**，求有多少種方法選擇數字，使總和等於 `sum_subset`。
   - 使用 **DP** 來計算 **組合數量**。

---

#### **動態規劃解法**
**定義 `dp[i]`**：
- `dp[i]` 表示 **能夠使總和為 `i` 的方法數量**。

**狀態轉移方程**：
- 初始化：`dp[0] = 1`（空集合總和為 `0`）。
- 遍歷 `nums`，對 `dp` 進行 **倒序更新**：
  $$
  dp[j] += dp[j - num]
  $$
  - 表示 `num` 可以用來組成 `j`，方法數量來自 `dp[j - num]`。

---

#### **Python 範例程式碼**
```python
class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        total = sum(nums)
        if (total + target) % 2 == 1 or total < abs(target):
            return 0  # 不能拆分成整數子集
        
        sum_subset = (total + target) // 2
        dp = [0] * (sum_subset + 1)
        dp[0] = 1  # 只有一種方法讓總和為 0（選擇空集合）

        for num in nums:
            for j in range(sum_subset, num - 1, -1):  # 倒序確保每個數字只選擇一次
                dp[j] += dp[j - num]

        return dp[sum_subset]
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(n × sum\_subset)$，其中 `n` 是 `nums` 的長度。
- **空間複雜度**：$O(sum\_subset)$，使用一維 `dp` 陣列來儲存狀態。

</details>

---

### [714. Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)

建立狀態機，股票交易類問題就會迎刃而解。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個整數數組 `prices`，其中 `prices[i]` 代表第 `i` 天的股票價格，還有一個**交易手續費 `fee`**。  
你可以**無限次買賣**股票，但每次賣出時都需要支付 `fee`，求**最大利潤**。

---

#### **解題思路**
這是一道典型的 **動態規劃（DP）** 問題，核心在於**何時買入和賣出股票以最大化利潤**。

1. **定義狀態**
   - `hold`：第 `i` 天持有股票的最大利潤（當前仍未賣出）。
   - `cash`：第 `i` 天不持有股票的最大利潤（當前已經賣出）。
  
2. **狀態轉移方程**
   - **買入（更新 `hold`）**：
     - 當天選擇買入（只能用 `cash` 狀態來買）：
       $$
       hold[i] = \max(hold[i-1], cash[i-1] - prices[i])
       $$
   - **賣出（更新 `cash`）**：
     - 當天選擇賣出（只能用 `hold` 狀態來賣，並扣除 `fee`）：
       $$
       cash[i] = \max(cash[i-1], hold[i-1] + prices[i] - \text{fee})
       $$

3. **初始化**
   - 第 `0` 天若持有股票：`hold = -prices[0]`
   - 第 `0` 天若不持有股票：`cash = 0`

4. **最終答案**
   - `cash[n-1]`（最後一天不持有股票的最大利潤）。

---

#### **Python 範例程式碼**
```python
class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        hold, cash = -prices[0], 0  # 初始狀態
        for price in prices[1:]:
            hold = max(hold, cash - price)  # 選擇持有
            cash = max(cash, hold + price - fee)  # 選擇賣出
        return cash
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(n)$，遍歷 `prices` 一次。
- **空間複雜度**：$O(1)$，只使用兩個變數 `hold` 和 `cash`。

</details>