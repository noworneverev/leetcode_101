---
sidebar_position: 47
---

# 9.4 練習

## 基礎難度

### [268. Missing Number](https://leetcode.com/problems/missing-number/)

Single Number 的變種題。除了利用二進位，也可以使用高斯求和公式解決。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個包含從 `0` 到 `n` 的 `n` 個不同整數的陣列 `nums`，找出**缺失的那個數字**。

**範例**
```plaintext
輸入: nums = [3,0,1]
輸出: 2
```
```plaintext
輸入: nums = [0,1]
輸出: 2
```

---

#### **解題思路**

##### ✅ 方法 1：數學公式（高效又簡潔）
整數 `0` 到 `n` 的總和為：
$$
\text{sum} = \frac{n(n+1)}{2}
$$

- 將 `nums` 所有元素加總後，用上面公式減去即可得出缺失的數字。

---

#### **Python 範例程式碼：數學公式**
```python
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        expected = n * (n + 1) // 2
        return expected - sum(nums)
```

- **時間複雜度**：$O(n)$（遍歷一次計算總和）
- **空間複雜度**：$O(1)$

---

##### ✅ 方法 2：XOR 位元運算（無需加法，避免溢位）
特性：`a ^ a = 0`, `a ^ 0 = a`  
將 `0 ~ n` 與 `nums` 中所有數字進行 XOR 運算，**相同的數會抵消，最後剩下的就是缺失的數字**。

---

#### **Python 範例程式碼：XOR 解法**
```python
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        xor_all = 0
        for i in range(n + 1):
            xor_all ^= i
        for num in nums:
            xor_all ^= num
        return xor_all
```

- **時間複雜度**：$O(n)$
- **空間複雜度**：$O(1)$

</details>


---

### [693. Binary Number with Alternating Bits](https://leetcode.com/problems/binary-number-with-alternating-bits/)

利用位運算判斷一個數的二進位表示是否會出現連續的 `0` 和 `1`。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個正整數 `n`，判斷其**二進位表示是否為交錯的 0 和 1（Alternating Bits）**。

---

#### **解題思路：只使用位元運算（不使用字串）**

##### ✅ 核心邏輯
若 `n` 是交錯位元，例如：

- `n = 5` → `101`  
- `n = 10` → `1010`  
- 這些數字的特性是：**每兩個相鄰位不同**。

可以利用以下方法判斷：

1. **先將 `n` 與 `n >> 1` 做 XOR**
   - 因為相鄰位元若不同，`n ^ (n >> 1)` 會變成全為 `1` 的二進位數。
   - 例如：
     - `n = 5 (101)` → `n >> 1 = 010` → `101 ^ 010 = 111`
     - `n = 10 (1010)` → `n >> 1 = 0101` → `1010 ^ 0101 = 1111`

2. **檢查 XOR 結果是否為一串連續的 `1`**
   - 一串連續的 `1` 特性是：`x & (x + 1) == 0`
   - 因為例如：`7 = 111`, `7 + 1 = 1000`, `111 & 1000 = 0`

---

#### **Python 範例程式碼**
```python
class Solution:
    def hasAlternatingBits(self, n: int) -> bool:
        x = n ^ (n >> 1)
        return (x & (x + 1)) == 0
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(1)$（固定位元操作）
- **空間複雜度**：$O(1)$

</details>

---

### [476. Number Complement](https://leetcode.com/problems/number-complement/)

二進位翻轉的變種題。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個正整數 `num`，回傳其 **補數（Complement）**。  
補數的定義是：將 `num` 的二進位表示中的 **每一位 `0` 變成 `1`，`1` 變成 `0`**。

**範例**
```plaintext
輸入: num = 5
二進位: 101 → 補數: 010 → 輸出: 2

輸入: num = 1
二進位: 1 → 補數: 0 → 輸出: 0
```

---

#### **解題思路**

##### ✅ 方法：使用位元運算製作 mask
我們希望將 `num` 中所有有效位元（從最高位的 `1` 開始）做翻轉。

1. **建立與 `num` 相同長度的全部為 `1` 的遮罩 `mask`**
   - 例如：`num = 5 (101)` → mask = `111`
2. **執行 XOR 運算：`num ^ mask`**
   - XOR 特性：`1 ^ 1 = 0`, `0 ^ 1 = 1` → 剛好是位元反轉。

##### **建立 mask 的技巧**
- 初始化 `mask = 1`
- 不斷將 `mask` 左移並加 1，直到它大於等於 `num`

---

#### **Python 範例程式碼**
```python
class Solution:
    def findComplement(self, num: int) -> int:
        mask = 1
        while mask < num:
            mask = (mask << 1) | 1  # 建立與 num 相同位數的 all-1 掩碼
        return num ^ mask
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(\log n)$（建構 mask 時根據 num 的位元長度迴圈）
- **空間複雜度**：$O(1)$（只用常數變數）

</details>


---

## 進階難度

### [260. Single Number III](https://leetcode.com/problems/single-number-iii/)

Single Number 的進階版本。需要仔細思考如何利用位運算求解。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個整數陣列 `nums`，其中恰好有 **兩個只出現一次的元素**，其他所有元素都出現兩次，請找出這兩個只出現一次的元素，並以任意順序回傳。

**範例**
```plaintext
輸入: nums = [1,2,1,3,2,5]
輸出: [3,5]
```

---

#### **解題思路**

這是一道進階版的 XOR 位元運算題（延伸自 LeetCode 136 - Single Number），利用 XOR 的特性：

> ✅ 任何數字和自己 XOR 結果為 0  
> ✅ 任何數字和 0 XOR 結果為本身

##### **步驟說明**

1. **將所有元素 XOR 起來，得到兩個只出現一次的數的 XOR 結果：**
   ```python
   diff = a ^ b  # a 和 b 是那兩個只出現一次的數
   ```
   - 因為其他數都出現兩次，會被抵銷成 0，剩下 a^b。

2. **找到 `diff` 中為 `1` 的某一個位元（代表 a 與 b 在這一位不同）：**
   ```python
   mask = diff & -diff
   ```
   - 這個 `mask` 表示 `diff` 中最低的為 1 的位元（用來區分 a 和 b）。

3. **根據 `mask` 將陣列分為兩組，對每組做 XOR：**
   - 因為 a 和 b 在該位不同，會被分到不同組。
   - 每組其實都是兩個重複元素 + 其中一個獨特數，透過 XOR 就能取得答案。

---

#### **Python 範例程式碼**
```python
class Solution:
    def singleNumber(self, nums: List[int]) -> List[int]:
        xor = 0
        for num in nums:
            xor ^= num  # 所有數 XOR，最後結果為 a^b
        
        mask = xor & -xor  # 取得最低位為 1 的位元
        
        a = 0
        for num in nums:
            if num & mask:
                a ^= num  # 分組後對應到 a 的那組 XOR
        b = xor ^ a  # 總 XOR 去掉 a 就是 b
        
        return [a, b]
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(n)$，遍歷兩次 `nums`
- **空間複雜度**：$O(1)$，只用常數變數

</details>
