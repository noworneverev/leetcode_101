---
sidebar_position: 35
---

# 7.1 算法解释

顧名思義，`分治問題`由“分”（divide）和“治”（conquer）兩部分組成，通過把原問題分為子問題，再將子問題進行處理合併，從而實現對原問題的求解。我們在排序章節展示的合併排序就是典型的分治問題，其中“分”即為把大陣列平均分成兩個小陣列，通過遞迴實現，最終我們會得到多個長度為 1 的子陣列；“治”即為把已經排好序的兩個小陣列合併為一個排好序的大陣列，從長度為 1 的子陣列開始，最終合成一個大陣列。

我們也使用數學表達式來表示這個過程。定義 $T(n)$ 表示處理一個長度為 $n$ 的陣列的時間複雜度，則合併排序的時間複雜度遞推公式為 $T(n) = 2T(n/2) + O(n)$。其中 $2T(n/2)$ 表示我們分成了兩個長度減半的子問題，$O(n)$ 則為合併兩個長度為 $n/2$ 陣列的時間複雜度。

:::info 定理 7.1. 主定理

考慮 $T(n) = aT(n/b) + f(n)$，定義 $k = \log_{b} a$  
1. 如果 $f(n) = O(n^p)$ 且 $p < k$，那麼 $T(n) = O(n^k)$  
2. 如果存在 $c \geq 0$ 滿足 $f(n) = O(n^k \log^c n)$，那麼 $T(n) = O(n^k \log^{c+1} n)$  
3. 如果 $f(n) = O(n^p)$ 且 $p > k$，那麼 $T(n) = O(f(n))$  

:::

通過主定理我們可以知道，合併排序屬於第二種情況，且時間複雜度為 $O(n \log n)$。其他的分治問題也可以通過主定理求得時間複雜度。

另外，自上而下的分治可以和 memoization 結合，避免重複遍歷相同的子問題。如果方便推導，也可以換用自下而上的動態規劃方法求解。