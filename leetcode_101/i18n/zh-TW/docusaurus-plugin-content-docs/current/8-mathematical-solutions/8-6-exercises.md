---
sidebar_position: 43
---

# 8.6 練習

## 基礎難度

### [168. Excel Sheet Column Title](https://leetcode.com/problems/excel-sheet-column-title/)

7 進制轉換的變種題，需要注意的一點是從 1 開始而不是 0。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個正整數 `columnNumber`，將其轉換為 **Excel 標題字母格式**，如：
```plaintext
1 → "A"
2 → "B"
...
26 → "Z"
27 → "AA"
28 → "AB"
...
52 → "AZ"
53 → "BA"
...
701 → "ZY"
702 → "ZZ"
703 → "AAA"
```
這類似於 **26 進位**（但 `A` 代表 1，而不是 0）。

---

#### **解題思路**
這個問題本質上是 **進制轉換**，但 **不像正常的 26 進制**，因為：
- `A` 代表 `1`，`Z` 代表 `26`，而不是 `0~25`。
- `columnNumber` **從 1 開始**（而不是從 0）。
- 這意味著每次計算時，我們需要調整索引，讓 `Z` 對應 `26` 而不是 `0`。

##### **核心公式**
每次迭代：
```plaintext
index = (columnNumber - 1) % 26
columnNumber = (columnNumber - 1) // 26
```
- `columnNumber - 1` **確保 `A=0`，`Z=25`，符合數學運算的 0-indexed 編碼**。
- `index` 用來找對應的字母 `a[index]`（`a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'`）。
- `columnNumber = (columnNumber - 1) // 26` 用來更新下一輪的數字。

---

#### **Python 範例程式碼**
```python
class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        res = ''
        while columnNumber > 0:
            columnNumber -= 1                  # 調整後再處理
            res = a[columnNumber % 26] + res   # 取得對應字母，插入字串前方
            columnNumber //= 26                # 繼續處理更高位數
        return res
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(\log_{26} n)$，因為每次 `columnNumber` 除以 `26`，類似於進制轉換。
- **空間複雜度**：$O(\log_{26} n)$，儲存結果的字母數量。

</details>

---

### [67. Add Binary](https://leetcode.com/problems/add-binary/)

字符串加法的變種題。

<details>
<summary>題解</summary>

#### **問題描述**
給定兩個**二進位字串** `a` 和 `b`，計算它們的和，並以**二進位字串**的形式返回：
```plaintext
輸入: a = "11", b = "1"
輸出: "100"

輸入: a = "1010", b = "1011"
輸出: "10101"
```
**要求：**
- `a` 和 `b` **不含前導 `0`**（除非 `0` 本身）。
- 不能使用內建二進位運算（如 `int(a, 2) + int(b, 2)`）。

---

#### **解題思路**
這題類似「手算二進位加法」，我們可以從**最低位（右側）開始相加**，然後記錄進位（carry）。

##### **核心觀察**
1. **二進位加法規則**：
   ```
   0 + 0 = 0
   0 + 1 = 1
   1 + 0 = 1
   1 + 1 = 10  （0，進位 1）
   1 + 1 + 1 = 11  （1，進位 1）
   ```
2. **從右到左遍歷 `a` 和 `b`**
   - 使用 **雙指針** 遍歷 `a` 和 `b`，並維護 `carry`（進位）。
   - 若 `a[i] + b[j] + carry = 2`，則當前位為 `0`，進位 `1`。
   - 若 `a[i] + b[j] + carry = 3`，則當前位為 `1`，進位 `1`。

3. **邊界處理**
   - `a` 和 `b` 可能長度不同，需分別處理較短的數字補 `0`。
   - 若最後還有 `carry = 1`，則補 `1`。

---

#### **Python 範例程式碼**
```python
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        i, j = len(a) - 1, len(b) - 1  # 從最後一位開始
        carry = 0
        res = []
        
        while i >= 0 or j >= 0 or carry:
            bit_a = int(a[i]) if i >= 0 else 0  # 若 i < 0 則當作 0
            bit_b = int(b[j]) if j >= 0 else 0  # 若 j < 0 則當作 0
            
            total = bit_a + bit_b + carry
            res.append(str(total % 2))  # 記錄當前位
            carry = total // 2  # 更新進位
            
            i -= 1
            j -= 1
        
        return ''.join(res[::-1])  # 反轉結果得到正確順序
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(\max(m, n))$，`m` 和 `n` 為 `a` 和 `b` 的長度，每位數字加法最多遍歷一次。
- **空間複雜度**：$O(\max(m, n))$，儲存結果的陣列。

</details>


---

### [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)

你可以不使用除法做這道題嗎？我們很早之前講過的題目 135 或許能給你一些思路。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個整數陣列 `nums`，返回一個新的陣列 `answer`，其中 `answer[i]` 等於 **`nums` 陣列中所有數字的乘積，除了 `nums[i]` 本身**。

**要求：**
- **不能使用除法**。
- **時間複雜度為 `O(n)`**。

---

#### **解題思路**
這是一道 **前綴積（Prefix Product）+ 後綴積（Suffix Product）** 的問題，可以用 **兩次遍歷（不額外使用除法）** 來解決。

##### **核心觀察**
- **直接暴力解法**：計算每個 `i` 位置時，遍歷整個陣列 `nums` 來計算乘積，這樣會導致 $O(n^2)$ 時間複雜度，**不符合要求**。
- **使用 `prefix` 和 `suffix`**：
  - **`prefix[i]`**：表示 `nums[0]` 到 `nums[i-1]` 的乘積（不包含 `nums[i]`）。
  - **`suffix[i]`**：表示 `nums[i+1]` 到 `nums[n-1]` 的乘積（不包含 `nums[i]`）。
  - 最終結果 `answer[i] = prefix[i] * suffix[i]`。

---

#### **步驟**
1. **先計算前綴積**（從左到右遍歷）：
   - `prefix[i] = prefix[i-1] * nums[i-1]`
2. **再計算後綴積並同時更新答案**（從右到左遍歷）：
   - `suffix` 變數記錄從右側開始的乘積，並與 `prefix` 相乘得出 `answer[i]`。

---

#### **Python 範例程式碼**
```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        answer = [1] * n  # 初始化結果陣列
        
        # 計算 prefix（前綴積）
        prefix = 1
        for i in range(n):
            answer[i] = prefix  # 存前綴乘積
            prefix *= nums[i]   # 更新前綴積
        
        # 計算 suffix（後綴積）並直接更新 answer
        suffix = 1
        for i in range(n - 1, -1, -1):
            answer[i] *= suffix  # 用 suffix 更新 answer
            suffix *= nums[i]     # 更新後綴積
        
        return answer
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(n)$，兩次遍歷（前綴 + 後綴）。
- **空間複雜度**：$O(1)$（只使用 `answer` 來存結果，額外變數 `prefix` 和 `suffix` 只佔 $O(1)$ 空間）。


</details>


---

## 進階難度

### [462. Minimum Moves to Equal Array Elements II](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/)

這道題是筆者最喜歡的 LeetCode 題目之一，需要先推理出怎麼樣移動是最優的，再考慮如何進行移動。你或許需要一些前些章節講過的算法。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個整數陣列 `nums`，你可以對任意元素**加 1 或減 1**，問**至少需要多少步，使所有數字相等**。

**範例**
```plaintext
輸入: nums = [1,2,3]
輸出: 2
解釋: 讓所有數變成 2
(1 → 2, 3 → 2)，共需要 2 步。
```
```plaintext
輸入: nums = [1,10,2,9]
輸出: 16
```

---

#### **解題思路**
這是一個 **數學 + 貪心** 的問題，本質上是要 **讓所有數字趨近於某個最佳值，使得總變動步數最少**。

##### **核心觀察**
1. **最佳值是中位數**
   - 假設 `nums` 有 `n` 個數字，最優方案是**讓所有數變成中位數 `median`**，這樣變動的總步數最少。
   - 這是因為「中位數」能**最小化距離總和**，這也是「L1 距離（曼哈頓距離）」的特性。

2. **為什麼不是平均數？**
   - **平均數適合平方誤差最小化（L2 距離）**，但這題要求的是「步數最少」，應該最小化「絕對誤差總和」。
   - **最小化「絕對誤差總和」的最佳點就是中位數**。

3. **求解步驟**
   - 先對 `nums` 排序。
   - 找出 **中位數 `median`**（若 `n` 為奇數，取中間數；若 `n` 為偶數，取靠左的中間數）。
   - 計算 **所有數變成 `median` 的總步數**。

---

#### **Python 範例程式碼**
```python
class Solution:
    def minMoves2(self, nums: List[int]) -> int:
        nums.sort()  # 先排序
        median = nums[len(nums) // 2]  # 找中位數
        return sum(abs(num - median) for num in nums)  # 計算總步數
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(n \log n)$（排序 `nums`）。
- **空間複雜度**：$O(1)$（只使用了變數 `median` 和 `sum` 計算）。

</details>


---

### [169. Majority Element](https://leetcode.com/problems/majority-element/)

如果想不出簡單的解決方法，搜尋一下 Boyer-Moore Majority Vote 算法吧。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個長度為 `n` 的陣列 `nums`，找出出現超過 `⌊ n/2 ⌋` 次的**眾數**（Majority Element）。  
保證**一定存在**這樣的數字。

---

#### **解題思路**
這是一道經典的 **眾數問題（Majority Element Problem）**，最佳解法是 **Boyer-Moore 投票算法**。

##### **方法 1：Boyer-Moore 投票算法**
- **核心概念**：
  - 既然眾數出現的次數**超過一半**，我們可以使用「候選人 + 投票機制」來篩選它。
  - 遍歷 `nums` 時，維護一個 `count` 計數變數：
    - **當 `count = 0` 時，設當前數 `num` 為候選眾數**。
    - **遇到相同數時 `count +1`，遇到不同數時 `count -1`**。
  - 最終候選數就是眾數，因為**眾數一定超過 50%，所以它不會被完全抵消**。

- **時間複雜度**：$O(n)$（只遍歷一次）。
- **空間複雜度**：$O(1)$（只用變數 `candidate` 和 `count`）。

---

#### **Python 範例程式碼**
```python
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        candidate, count = None, 0
        for num in nums:
            if count == 0:
                candidate = num
            count += 1 if num == candidate else -1
        return candidate
```

</details>


---

### [470. Implement Rand10() Using Rand7()](https://leetcode.com/problems/implement-rand10-using-rand7/)

如何用一個隨機數生成器生成另一個隨機數生成器？你可能需要利用原來的生成器多次。

<details>
<summary>題解</summary>

#### **問題描述**
已知函數 `rand7()` 可均勻隨機返回 **1 ~ 7** 之間的整數，請實現 `rand10()`，使其均勻隨機返回 **1 ~ 10** 之間的整數。

**不允許直接使用系統內建的隨機函數**。

---

#### **解題思路**
這是一道 **隨機數生成與拒絕採樣（Rejection Sampling）** 的經典問題，關鍵是：
- **如何從 `rand7()` 得到 `rand10()`**？
- **如何確保數字是均勻分佈的**？

##### **關鍵步驟**
1. **將 `rand7()` 轉換為更大的均勻分佈範圍**
   - `rand7()` 只能產生 **1 ~ 7** 的隨機數。
   - 我們可以呼叫兩次 `rand7()`，構造一個 **1 ~ 49** 均勻分佈的數：
     ```plaintext
     index = (rand7() - 1) * 7 + rand7()  # 生成範圍 [1, 49]
     ```
2. **利用 `49` 的數據範圍轉換成 `1 ~ 10`**
   - `49` 是 `7 × 7`，我們可以只取前 **40** 個數（剛好是 `10 × 4`），然後 `mod 10 + 1`。
   - **如果 `index > 40`，則丟棄並重新生成**（拒絕採樣），這樣可以保證均勻性：
     ```plaintext
     如果 index ≤ 40，則 return index % 10 + 1
     否則，重新取樣
     ```
3. **為什麼丟棄 `41 ~ 49`？**
   - `1 ~ 40` 剛好可以平均分成 `10` 組，每組 `4` 個數。
   - `41 ~ 49` 無法均勻分組，所以要丟棄，否則 `rand10()` 會偏向某些數。

---

#### **Python 範例程式碼**
```python
import random

def rand7():
    return random.randint(1, 7)

class Solution:
    def rand10(self) -> int:
        while True:
            index = (rand7() - 1) * 7 + rand7()  # 生成範圍 [1, 49]
            if index <= 40:  # 只取前 40 個，確保均勻分佈
                return index % 10 + 1
```

---

#### **時間與空間複雜度**
- **時間複雜度**：期望 $O(1)$
  - `rand7()` 生成 `1 ~ 49` 的機率均等，超過 `40` 的數字被拒絕，期望迴圈次數為 `49/40 ≈ 1.225`，即 **期望常數次數內可完成**。
- **空間複雜度**：$O(1)$（只使用了變數 `index`）。


</details>

---

### [202. Happy Number](https://leetcode.com/problems/happy-number/)

你可以簡單的用一個 `while` 循環解決這道題，但是有沒有更好的解決辦法？如果我們把每個數字想像成一個節點，是否可以轉化為環路檢測？


<details>
<summary>題解</summary>

#### **問題描述**
給定一個正整數 `n`，如果按照以下規則**最終會變成 `1`，則稱為「快樂數（Happy Number）」**：
1. 取 `n` 每個數字的平方和，得到新的 `n`。
2. 重複這個過程，直到：
   - `n` 變成 `1`（快樂數）。
   - 或者進入循環（不是快樂數）。

**範例**
```plaintext
輸入: n = 19
計算過程：
19 → 1² + 9² = 82
82 → 8² + 2² = 68
68 → 6² + 8² = 100
100 → 1² + 0² + 0² = 1 ✅
輸出: True
```
```plaintext
輸入: n = 2
計算過程：
2 → 2² = 4
4 → 4² = 16
16 → 1² + 6² = 37
37 → 3² + 7² = 58
58 → 5² + 8² = 89
89 → 8² + 9² = 145
145 → 1² + 4² + 5² = 42
42 → 4² + 2² = 20
20 → 2² + 0² = 4（重複循環 ❌）
輸出: False
```

---

#### **解題思路**
這是一道典型的 **循環檢測 + 數位拆解運算** 的問題，可以用 **快慢指針法（Floyd Cycle Detection）** 來高效解決。

##### **方法 1：快慢指針（Floyd Cycle Detection）**
**核心思想**：
- 如果 `n` 是「快樂數」，它最終會變成 `1`。
- 如果 `n` 不是快樂數，則會進入循環（類似 **Linked List 環檢測**）。
- 用 **快慢指針（slow & fast）** 來檢測循環：
  - **slow** 每次執行 `square_sum(n)` 一次。
  - **fast** 每次執行 `square_sum(n)` 兩次。
  - 若 `slow == fast`（但不是 `1`），代表進入循環，回傳 `False`。
  - 若 `fast == 1`，則 `n` 是快樂數，回傳 `True`。

---

#### **Python 範例程式碼**
```python
class Solution:
    def isHappy(self, n: int) -> bool:
        def square_sum(num):
            return sum(int(digit) ** 2 for digit in str(num))
        
        slow, fast = n, square_sum(n)
        while fast != 1 and slow != fast:
            slow = square_sum(slow)
            fast = square_sum(square_sum(fast))
        return fast == 1
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(\log n)$
  - 每次計算 `square_sum(n)` 會讓數字縮小（最終 ≤ 81），執行次數有限。
- **空間複雜度**：$O(1)$
  - 只使用了 `slow` 和 `fast` 指針，沒有額外的記錄。

---

#### **其他解法**
##### **方法 2：HashSet 記錄已訪問數**
- 若 `n` 重複出現，代表進入循環，則 `False`。
- 若 `n` 變成 `1`，則 `True`。

```python
class Solution:
    def isHappy(self, n: int) -> bool:
        seen = set()
        def square_sum(num):
            return sum(int(digit) ** 2 for digit in str(num))

        while n != 1 and n not in seen:
            seen.add(n)
            n = square_sum(n)
        return n == 1
```
**時間複雜度**：$O(\log n)$，**空間複雜度**：$O(\log n)$（儲存 `seen` 集合）。

</details>