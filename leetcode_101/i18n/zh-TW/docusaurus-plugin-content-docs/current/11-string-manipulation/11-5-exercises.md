---
sidebar_position: 63
---

# 11.5 練習

## 基礎難度

### [409. Longest Palindrome](https://leetcode.com/problems/longest-palindrome/)

計算一組字符可以構成的回文字符串的最大長度，可以使用其他資料結構進行輔助統計。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個字串 `s`，請找出可以用其中字母組成的**最長回文長度**。

**注意：**
- 字母大小寫是有區分的（`'A' != 'a'`）
- 可以重新排列字母

---

#### **範例**
```plaintext
輸入: "abccccdd"
輸出: 7
解釋: 一個可能的回文是 "dccaccd"。
```
```plaintext
輸入: "a"
輸出: 1
```

---

#### **解題思路**

##### ✅ 關鍵觀察
- 回文需要**左右對稱**。
- **每種字母最多可以用偶數次**，因為左半邊和右半邊要對應。
- 如果有**奇數次出現的字母**，可以選其中一個放在正中央（只能有一個中央字母）。

##### ✅ 策略
- 統計每個字母出現次數。
- 將每個字母能用的偶數次加起來（`freq // 2 * 2`）。
- 如果有出現過奇數次的字母，額外加 1（放中央）。

---

#### **Python 範例程式碼**
```python
from collections import Counter

class Solution:
    def longestPalindrome(self, s: str) -> int:
        count = Counter(s)
        res = 0
        has_odd = False

        for freq in count.values():
            res += (freq // 2) * 2
            if freq % 2 == 1:
                has_odd = True

        return res + 1 if has_odd else res
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(n)$，遍歷字串並計算統計
- **空間複雜度**：$O(1)$，因為字母總種類數是固定的（最多 52 個大小寫字母）

</details>

---

### [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

計算最長無重複子字符串的長度，同樣可以使用其他資料結構進行輔助統計。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個字串 `s`，請找出**不包含重複字元的最長子字串**的長度。

---

#### **範例**
```plaintext
輸入: "abcabcbb"
輸出: 3
解釋: 最長子字串是 "abc"。

輸入: "bbbbb"
輸出: 1
解釋: 最長子字串是 "b"。

輸入: "pwwkew"
輸出: 3
解釋: 最長子字串是 "wke"。
```

---

#### **解題思路：滑動視窗（Sliding Window）**

##### ✅ 核心想法
- 使用兩個指標 `left` 和 `right`，維持一個「不重複字元的視窗」。
- 當遇到重複字元時，**左指標往右移**，直到視窗內沒有重複字元。
- 隨時記錄視窗的最大長度。

---

#### **Python 範例程式碼**
```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_index = {}
        left = 0
        max_len = 0

        for right, c in enumerate(s):
            if c in char_index and char_index[c] >= left:
                left = char_index[c] + 1
            char_index[c] = right
            max_len = max(max_len, right - left + 1)

        return max_len
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(n)$，每個字元只進出視窗一次
- **空間複雜度**：$O(k)$，$k$ 為字母表大小（一般情況最多 128 或 256）

---

#### **範例解析（abcabcbb）**

| i | 字母 | 左指標 left | 視窗內容 | 最長長度 max_len |
|---|------|-------------|----------|------------------|
| 0 | a    | 0           | a        | 1                |
| 1 | b    | 0           | ab       | 2                |
| 2 | c    | 0           | abc      | 3                |
| 3 | a    | 1           | bca      | 3                |
| 4 | b    | 2           | cab      | 3                |
| 5 | c    | 3           | abc      | 3                |
| 6 | b    | 4           | cb       | 3                |
| 7 | b    | 5           | b        | 3                |

最後答案是 `3`。

</details>

---

## 進階難度

### [772. Basic Calculator III](https://leetcode.com/problems/basic-calculator-iii/)

題目 227 的 follow-up，非常推薦練習。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個只包含數字、加減乘除符號 `+ - * /` 和括號 `(` `)` 的字串 `s`，  
計算它的數學值。假設除法是整數除法（向下取整）。

---

#### **範例**
```plaintext
輸入: s = "2*(5+5*2)/3+(6/2+8)"
輸出: 21

輸入: s = "(2+6* 3+5- (3*14/7+2)*5)+3"
輸出: -12
```

---

#### **解題思路：Stack 模擬計算機 + 遇括號遞迴**

這題就是「計算器」類經典題，但加上了括號、加減乘除，需要同時處理：

- 乘除優先於加減
- 括號內優先算完

##### ✅ 主要策略
- 使用**堆疊 stack**來存中間結果
- 當遇到：
  - 數字：累積成 num
  - `+`、`-`：把 num 根據符號加進 stack
  - `*`、`/`：立即跟 stack 最後一個數字做運算
  - `(`：進入子計算（呼叫遞迴）
  - `)`：回傳當前 stack 加總結果
- 最後，整個 stack 加總起來就是結果。

---

#### **Python 範例程式碼**
```python
class Solution:
    def calculate(self, s: str) -> int:
        def helper(it):
            stack = []
            num = 0
            sign = '+'

            while it < len(s):
                c = s[it]

                if c.isdigit():
                    num = num * 10 + int(c)
                if c == '(':
                    num, it = helper(it + 1)

                if (not c.isdigit() and c != ' ') or it == len(s) - 1:
                    if sign == '+':
                        stack.append(num)
                    elif sign == '-':
                        stack.append(-num)
                    elif sign == '*':
                        stack[-1] = stack[-1] * num
                    elif sign == '/':
                        stack[-1] = int(stack[-1] / num)
                    num = 0
                    sign = c

                if c == ')':
                    return sum(stack), it

                it += 1

            return sum(stack), it

        s = s.replace(' ', '')
        res, _ = helper(0)
        return res
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(n)$，每個字元最多處理一次
- **空間複雜度**：$O(n)$，stack 深度最壞跟字串長度成正比

---

#### **範例解析（小例子）**

輸入：
```plaintext
s = "2*(3+4)"
```
- 讀到 `2`，設 `num = 2`
- 讀到 `*`，記下 `sign = *`
- 讀到 `(`，進入遞迴：
  - 讀到 `3` → `num = 3`
  - 讀到 `+`，將 3 加進子 stack
  - 讀到 `4` → `num = 4`
  - 讀到 `)`，回傳 3+4=7
- 回到外層，處理 `2*7 = 14`

答案是 `14`！


</details>

---

### [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)

類似於我們之前講過的子序列問題，子陣列或子字符串問題常常也可以用動態規劃來解決。先用動態規劃寫出一個 $O(n^2)$ 時間複雜度的解法，然後搜索一下 Manacher’s Algorithm，它可以在 $O(n)$ 時間內解決這個問題。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個字串 `s`，找出它的**最長回文子字串**（回文：正著讀反著讀都一樣）。

---

#### **範例**
```plaintext
輸入: "babad"
輸出: "bab" 或 "aba"

輸入: "cbbd"
輸出: "bb"
```

---

#### **解題思路：中心擴展法（Expand Around Center）**

##### ✅ 核心想法
- 回文的特性是從**中心點**左右對稱展開。
- 每個位置可以作為：
  - 奇數長度回文中心（單個字元中心）
  - 偶數長度回文中心（兩個字元中心）
- 嘗試從每個可能的中心擴展，記錄最長的回文。

---

#### **Python 範例程式碼**
```python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        def expand(l: int, r: int) -> str:
            while l >= 0 and r < len(s) and s[l] == s[r]:
                l -= 1
                r += 1
            return s[l+1:r]

        res = ""
        for i in range(len(s)):
            # 奇數長度
            tmp1 = expand(i, i)
            # 偶數長度
            tmp2 = expand(i, i + 1)
            # 更新答案
            res = max(res, tmp1, tmp2, key=len)
        return res
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(n^2)$，每個中心擴展最多 $O(n)$ 次
- **空間複雜度**：$O(1)$，只用到常數額外空間（不計輸出）

</details>