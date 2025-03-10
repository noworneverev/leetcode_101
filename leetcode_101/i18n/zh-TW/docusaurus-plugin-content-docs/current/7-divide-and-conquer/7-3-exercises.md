---
sidebar_position: 37
---

# 7.3 練習

## 基礎難度

### [932. Beautiful Array](https://leetcode.com/problems/beautiful-array/)

嘗試使用從上到下的分治（遞迴）寫法進行求解，並最好加入 `memoization` 優化；之後再嘗試使用從下到上的動態規劃寫法求解。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個整數 `n`，返回一個長度為 `n` 的排列數組 `arr`，滿足對於所有的 `i < j`，不存在一個 `k` 使得：
$$
arr[k] = \frac{arr[i] + arr[j]}{2}
$$
也就是說，數組中不應該存在任何三個數形成**等差數列**。

---

#### **解題思路**
這是一道**數學 + 分治（Divide & Conquer）**的問題，並非傳統的貪心或動態規劃可直接解決。我們需要**構造**一個「美麗數組」（Beautiful Array）。

##### **關鍵觀察**
- 如果 `arr = [1, 2, 3, 4]`：
  - `(1, 3, 2)` 是合法的，因為沒有 `k` 使 `arr[k] = (1+3)/2 = 2`
  - `(1, 2, 3)` 則不行，因為 `2 = (1+3)/2`
- **最簡單的美麗數組是 `[1]`，它本身沒有任何等差數列**。

##### **分治構造**
- 如果 `arr` 是美麗數組，那麼：
  - `奇數索引的部分`（`1, 3, 5, ...`）仍然是美麗的。
  - `偶數索引的部分`（`2, 4, 6, ...`）仍然是美麗的。
- **利用這個性質，可以遞迴構造較大的美麗數組**：
  - `left = 美麗數組(奇數部分)`
  - `right = 美麗數組(偶數部分)`
  - `合併` 這兩個部分得到最終結果。

##### **生成過程**
1. 從 `[1]` 開始。
2. 用 `left = [1, 3, 5, ...]` 和 `right = [2, 4, 6, ...]` 生成更大的美麗數組。
3. 直到長度達到 `n`。

---

#### **Python 範例程式碼**
```python
class Solution:
    def beautifulArray(self, n: int) -> List[int]:
        memo = {1: [1]}  # 基礎情況
        
        def divide_conquer(n):
            if n not in memo:
                odd_part = divide_conquer((n + 1) // 2)  # 奇數部分
                even_part = divide_conquer(n // 2)  # 偶數部分
                memo[n] = [2 * x - 1 for x in odd_part] + [2 * x for x in even_part]
            return memo[n]
        
        return divide_conquer(n)
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(n)$，每個數只會生成一次。
- **空間複雜度**：$O(n)$，使用遞迴記憶化。

</details>

---

## 進階難度

### [312. Burst Balloons](https://leetcode.com/problems/burst-balloons/)

嘗試使用從上到下的分治（遞迴）寫法進行求解，並最好加入 `memoization` 優化；之後再嘗試使用從下到上的動態規劃寫法求解。


<details>
<summary>題解</summary>

#### **問題描述**
給定一排 `n` 個氣球，每個氣球上都有一個數值 `nums[i]`，當你戳破氣球 `i` 時，你可以獲得的分數為：
$$
nums[i-1] \times nums[i] \times nums[i+1]
$$
其中 `nums[-1] = nums[n] = 1`（視作邊界上的氣球）。

你的目標是**選擇最佳的戳破順序，讓總得分最大**。

---

#### **解題思路**
這是一個 **區間 DP（Interval DP）** 問題，我們需要找到最優的順序來戳破氣球，使得總分最大。

### **核心觀察**
1. 直接決定**氣球戳破的順序是很困難的**，因為一旦戳破某個氣球，會影響後面的計算。
2. **反過來思考**：
   - **與其決定誰先被戳破，我們決定最後一個被戳破的氣球！**
   - **在範圍 `[left, right]` 內選擇一個 `k` 作為最後戳破的氣球**，確保 `nums[left-1]` 和 `nums[right+1]` 還存在，這樣 `nums[k]` 戳破時可以計算得分：
     $$
     dp[left][right] = dp[left][k-1] + nums[left-1] \times nums[k] \times nums[right+1] + dp[k+1][right]
     $$
   - 這樣，我們可以拆解問題並用 **動態規劃（DP）** 來解。

---

#### **動態規劃解法**
1. **定義 `dp[left][right]`**
   - `dp[left][right]` 代表**在範圍 `[left, right]` 內的最大得分**（假設最後戳破的是 `k`）。
   - 遍歷 `k`，嘗試讓 `k` 作為最後一個被戳破的氣球，然後計算總分。

2. **狀態轉移方程**
   - 遍歷區間長度 `length`，從 `left` 到 `right`，嘗試選擇 `k` 作為最後戳破的氣球：
     ```python
     dp[left][right] = max(dp[left][right], dp[left][k-1] + nums[left-1] * nums[k] * nums[right+1] + dp[k+1][right])
     ```
   - 這樣確保 `k` 是最後一個戳破的氣球時，計算出來的最大得分。

3. **初始化**
   - `dp[i][i] = nums[i-1] * nums[i] * nums[i+1]`（如果 `i` 是區間內唯一的氣球）

---

#### **Python 範例程式碼**
```python
class Solution:
    def maxCoins(self, nums: List[int]) -> int:
        nums = [1] + nums + [1]  # 在兩邊添加虛擬氣球
        n = len(nums)
        dp = [[0] * n for _ in range(n)]

        for length in range(1, n - 1):  # 區間長度
            for left in range(1, n - length):  # 左邊界
                right = left + length - 1  # 右邊界
                for k in range(left, right + 1):  # 嘗試選擇最後戳破的氣球
                    dp[left][right] = max(dp[left][right],
                                          dp[left][k-1] + nums[left-1] * nums[k] * nums[right+1] + dp[k+1][right])
        return dp[1][n-2]  # 排除邊界的 1
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(n^3)$，三層迴圈（區間長度、左右邊界、選擇 `k`）。
- **空間複雜度**：$O(n^2)$，使用 `dp` 陣列來存儲每個區間的最佳結果。

</details>