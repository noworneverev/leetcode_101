---
sidebar_position: 74
---

# 13.7 練習

## 基礎難度

### [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)

巧用遞迴，你可以在五行內完成這道題。

<details>
<summary>題解</summary>

#### **問題描述**
給定一棵二元樹，請「**鏡像反轉**」這棵樹，也就是將左子樹與右子樹整體交換。

---

#### **範例**
```plaintext
輸入：
     4
    / \
   2   7
  / \ / \
 1  3 6  9

輸出：
     4
    / \
   7   2
  / \ / \
 9  6 3  1
````

---

#### **解題思路：遞迴 or BFS**

##### ✅ 遞迴解法（最直覺）

* 對當前節點：

  * 交換左子樹與右子樹
  * 然後遞迴處理左右子樹

---

#### **Python 程式碼：遞迴解法**

```python
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return None
        # 交換左右子樹
        root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)
        return root
```

---

#### **其他作法：BFS（層序遍歷）**

也可以使用 queue 進行 BFS，對每個節點進行左右交換：

```python
from collections import deque

class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return None
        queue = deque([root])
        while queue:
            node = queue.popleft()
            node.left, node.right = node.right, node.left
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        return root
```

---

#### **時間與空間複雜度**

| 方法  | 時間複雜度    | 空間複雜度                      |
| --- | -------- | -------------------------- |
| 遞迴  | $O(n)$ | $O(h)$（呼叫堆疊，$h$ 為樹高）   |
| BFS | $O(n)$ | $O(n)$（最壞情況下 queue 裝滿一層） |


</details>


---

### [617. Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/)

同樣的，利用遞迴可以輕鬆搞定。

<details>
<summary>題解</summary>

#### **問題描述**
給定兩棵二元樹 `root1` 和 `root2`，請你將它們合併成一棵新樹：

- 若兩棵樹在相同位置都存在節點，則新節點的值為這兩個節點值的總和。
- 否則，新節點直接使用存在的那個節點。

---

#### **範例**
```plaintext
輸入:
    Tree 1      Tree 2
      1           2
     / \         / \
    3   2       1   3
   /             \   \
  5               4   7

輸出:
    合併後的樹:
        3
       / \
      4   5
     / \   \
    5   4   7
````

---

#### **解題思路：遞迴合併**

##### ✅ 核心想法：

* 對應位置的節點都存在 → 相加後建立新節點
* 只有其中一棵樹存在節點 → 直接使用那個節點
* 遞迴合併左右子樹

---

#### **Python 程式碼：遞迴寫法**

```python
class Solution:
    def mergeTrees(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root1:
            return root2
        if not root2:
            return root1
        
        # 兩個節點都存在，合併
        root1.val += root2.val
        root1.left = self.mergeTrees(root1.left, root2.left)
        root1.right = self.mergeTrees(root1.right, root2.right)
        return root1
```

---

#### **時間與空間複雜度**

* **時間複雜度**：$O(n)$，其中 $n$ 為兩棵樹的節點總數（每個節點只處理一次）  
* **空間複雜度**：$O(h)$，最壞為樹的高度（遞迴呼叫堆疊深）



</details>


---

### [572. Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)

子樹是對稱樹的姊妹題，寫法也十分類似。



<details>
<summary>題解</summary>

#### **問題描述**
給定兩棵二元樹 `root` 和 `subRoot`，請判斷 `subRoot` 是否是 `root` 的子樹（subtree）。

一棵樹 `subRoot` 是另一棵樹 `root` 的子樹的定義是：
> `root` 中存在某個節點，其子樹**與 `subRoot` 完全相同**（結構與節點值都相同）

---

#### **範例**
```plaintext
輸入:
root = [3,4,5,1,2]
subRoot = [4,1,2]
輸出: True

輸入:
root = [3,4,5,1,2,null,null,null,null,0]
subRoot = [4,1,2]
輸出: False
````

---

#### **解題思路：DFS + 判斷兩棵樹是否相等**

##### ✅ 我們要做兩件事：

1. **遍歷 `root` 樹中每個節點**（DFS 遞迴）
2. **對每個節點判斷其子樹是否與 `subRoot` 相同**

---

#### 🧩 判斷兩棵樹是否相同（輔助函式）

```python
def isSameTree(p, q):
    if not p and not q:
        return True
    if not p or not q or p.val != q.val:
        return False
    return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)
```

---

#### **完整 Python 程式碼**

```python
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        if not root:
            return False
        if self.isSameTree(root, subRoot):
            return True
        return self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)

    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if not p and not q:
            return True
        if not p or not q or p.val != q.val:
            return False
        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
```

---

#### **時間與空間複雜度**

* **時間複雜度**：$O(m \times n)$，其中 $m$ 是 `root` 節點數，$n$ 是 `subRoot` 節點數  
  - 對 `root` 每個節點都可能呼叫一次 `isSameTree`
* **空間複雜度**：$O(h)$，$h$ 為 `root` 或 `subRoot` 的最大深度（遞迴堆疊）


---

#### **總結**

✅ 利用 DFS 遍歷 root，每個節點都當作可能的起點來對比
✅ 判斷兩棵樹是否相同 → 是常見樹類遞迴模板
✅ 面試中常與 `100. Same Tree` 一起出現，建議一起練習！

</details>


---

### [404. Sum of Left Leaves](https://leetcode.com/problems/sum-of-left-leaves/)

怎麼判斷一個節點是不是左節點呢？一種可行的方法是，在輔函式裡多傳一個參數，表示當前節點是不是父節點的左節點。

<details>
<summary>題解</summary>

#### **問題描述**
給定一棵二元樹，請回傳所有「**左葉子節點**」的總和。

- 左葉子節點：指的是一個節點，它是其父節點的左子節點，且本身沒有左右子節點。

---

#### **範例**
```plaintext
輸入: 
    3
   / \
  9  20
     / \
    15  7
輸出: 24

說明：左葉子節點為 9 和 15，總和為 24。
````

---

#### **解題思路：DFS 遞迴**

使用 DFS 遞迴遍歷整棵樹，對每個節點檢查它的「左子節點是否為葉子」，如果是就加總起來。

---

#### **Python 程式碼**

```python
class Solution:
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        
        total = 0
        if root.left and not root.left.left and not root.left.right:
            total += root.left.val
        
        return total + self.sumOfLeftLeaves(root.left) + self.sumOfLeftLeaves(root.right)
```

---

#### **時間與空間複雜度**

* **時間複雜度**：$O(n)$，其中 $n$ 為樹中節點數，每個節點訪問一次
* **空間複雜度**：$O(h)$，$h$ 為樹的高度，遞迴堆疊使用的空間

</details>


---

### [513. Find Bottom Left Tree Value](https://leetcode.com/problems/find-bottom-left-tree-value/)

最左下角的節點滿足什麼條件？針對這種條件，我們該如何找到它？

<details>
<summary>題解</summary>

#### **問題描述**
給定一棵二元樹，請你找出**最後一層最左邊的節點的值**（也就是最底層的最左邊葉節點）。

---

#### **範例**
```plaintext
輸入：
    2
   / \
  1   3
輸出：1

輸入：
       1
      / \
     2   3
    /   / \
   4   5   6
      /
     7
輸出：7
````

---

#### **解題思路：BFS 層序遍歷（推薦）**

我們可以使用 **廣度優先搜尋（BFS）**，一層一層掃描整棵樹，並記錄每層的最左邊節點。

因為我們需要找「**最後一層**的**最左節點**」，所以只要每層最左邊節點更新一次，最後留下來的就是答案。

---

#### **Python 程式碼（BFS）**

```python
from collections import deque

class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        queue = deque([root])
        while queue:
            node = queue.popleft()
            # 注意先右後左，這樣最後一層最左邊會是最後被處理的節點
            if node.right:
                queue.append(node.right)
            if node.left:
                queue.append(node.left)
        return node.val
```

---

#### **解釋為什麼先放右邊再放左邊**

通常 BFS 會「先左再右」，但這題我們反過來，因為我們想：

> 「最後被 pop 出來的節點，就是最底層最左邊的節點」

---

#### **時間與空間複雜度**

* **時間複雜度**：$O(n)$，其中 $n$ 為節點總數，需遍歷整棵樹
* **空間複雜度**：$O(w)$，$w$ 為樹中最寬的一層節點數（queue 最多裝這麼多節點）


</details>


---

### [538. Convert BST to Greater Tree](https://leetcode.com/problems/convert-bst-to-greater-tree/)

嘗試利用某種遍歷方式來解決此題，每個節點只需遍歷一次。

<details>
<summary>題解</summary>

#### **問題描述**
給定一棵**二元搜尋樹（BST）**，將其轉換為「**Greater Tree**」，使每個節點的值變為**原本值加上所有比它大的節點值之和**。

---

#### **範例**
```plaintext
輸入：
      5
     / \
    2   13

輸出：
     18
     / \
   20  13
````

---

#### **解題思路：反向中序遍歷（Right → Root → Left）**

因為是 **BST（左小右大）**，我們可以利用 **反向中序遍歷**（從大到小）：

1. 先走右子樹 → 取得比自己大的節點
2. 更新自己：`root.val += 累加和`
3. 再走左子樹 → 傳遞更新後的累加和

---

#### **Python 程式碼**

```python
class Solution:
    def convertBST(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        self.total = 0

        def reverse_inorder(node):
            if not node:
                return
            reverse_inorder(node.right)
            self.total += node.val
            node.val = self.total
            reverse_inorder(node.left)

        reverse_inorder(root)
        return root
```

---

#### **範例走法說明**

以樹 `5 → 2, 13` 為例：

* 先走 `13`：`total = 13`
* 回到 `5`：`total = 13 + 5 = 18` → 更新為 `18`
* 再走 `2`：`total = 18 + 2 = 20` → 更新為 `20`

---

#### **時間與空間複雜度**

* **時間複雜度**：$O(n)$，$n$ 為節點數，遍歷一次整棵樹
* **空間複雜度**：$O(h)$，$h$ 為樹的高度（遞迴堆疊空間）

</details>


---

### [235. Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

利用 BST 的獨特性質，這道題可以很輕鬆完成。


<details>
<summary>題解</summary>

#### **問題描述**
給定一棵**二元搜尋樹（BST）**和兩個節點 `p`、`q`，找出它們的**最近共同祖先（Lowest Common Ancestor, LCA）**。

---

#### **範例**
```plaintext
輸入：
    root = [6,2,8,0,4,7,9], p = 2, q = 8
輸出：6

輸入：
    root = [6,2,8,0,4,7,9], p = 2, q = 4
輸出：2
````

---

#### **解題思路：利用 BST 性質，找分岔點**

在二元搜尋樹中，每個節點的左子樹值都小於自己，右子樹值都大於自己，因此：

* 若 `p` 和 `q` 都小於 `root`，答案一定在左子樹
* 若 `p` 和 `q` 都大於 `root`，答案一定在右子樹
* 若 `p` 和 `q` 分別在左右兩側（或其中一個等於 root），那 `root` 就是 LCA

---

#### **Python 程式碼：遞迴寫法**

```python
class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        if p.val < root.val and q.val < root.val:
            return self.lowestCommonAncestor(root.left, p, q)
        elif p.val > root.val and q.val > root.val:
            return self.lowestCommonAncestor(root.right, p, q)
        else:
            return root
```

---

#### **Python 程式碼：迴圈寫法（不佔用遞迴空間）**

```python
class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        while root:
            if p.val < root.val and q.val < root.val:
                root = root.left
            elif p.val > root.val and q.val > root.val:
                root = root.right
            else:
                return root
```

---

#### **時間與空間複雜度**

* **時間複雜度**：$O(h)$，$h$ 為樹的高度，最壞為 $O(n)$（退化成鏈）
* **空間複雜度**：

  * 遞迴寫法：$O(h)$（遞迴堆疊）
  * 迴圈寫法：$O(1)$（原地操作）

</details>


---

### [530. Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/)

還記得我們所說的，對於 BST 應該利用哪種遍歷嗎？

<details>
<summary>題解</summary>

#### **問題描述**
給定一棵**二元搜尋樹（BST）**，找出任意兩個節點之間**絕對差的最小值**。

---

#### **範例**
```plaintext
輸入：
    4
   / \
  2   6
 / \
1   3

輸出：1
說明：任意兩個節點的最小絕對差為 1（例如 2 和 1、2 和 3、4 和 3）
````

---

#### **解題思路：中序遍歷 + 前一個節點記錄**

在 BST 中，中序遍歷會得到**嚴格遞增的節點序列**。
因此，相鄰兩個節點的差值，一定是所有可能中差值最小的。

##### ✅ 策略：

1. 使用中序遍歷得到有序節點序列
2. 每次與「上一個節點」比較差值
3. 更新最小差值

---

#### **Python 程式碼**

```python
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        self.prev = None
        self.min_diff = float('inf')

        def inorder(node):
            if not node:
                return
            inorder(node.left)
            if self.prev is not None:
                self.min_diff = min(self.min_diff, node.val - self.prev)
            self.prev = node.val
            inorder(node.right)

        inorder(root)
        return self.min_diff
```

---

#### **時間與空間複雜度**

* **時間複雜度**：$O(n)$，$n$ 為節點數，遍歷整棵樹
* **空間複雜度**：$O(h)$，$h$ 為樹的高度（遞迴堆疊空間）


</details>


---

## 進階難度

### [1530. Number of Good Leaf Nodes Pairs](https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/)

題目 543 的變種題，注意在輔函式中，每次更新的全域變數是左右兩邊距離之和滿足條件的數量，而返回的是左右兩邊所有（長度不溢出的）子節點的高度 +1。

<details>
<summary>題解</summary>

#### **問題描述**
給定一棵二元樹，以及一個整數 `distance`，請你統計「**好葉子節點對（good leaf node pairs）**」的數量。

- 一對葉子節點稱為「好對子」，當且僅當：
  - 它們都在樹中
  - 距離（經過的邊數）小於等於 `distance`

---

#### **範例**
```plaintext
輸入：
      1
     / \
    2   3
輸出：1
說明：2 和 3 是葉子，且距離為 2，小於等於 distance = 3
````

---

#### **解題思路：自底向上遞迴 + 統計葉子距離**

這題的核心是：**對每個節點，統計其左子樹和右子樹中，所有葉子到當前節點的距離**，並檢查這些葉子之間是否可以組成好對子。

##### ✅ 步驟如下：

1. 遞迴到每個節點
2. 左右子樹回傳距離陣列：表示子樹中所有葉子節點到當前節點的距離
3. 對左右距離進行雙層迴圈配對，若 `l + r <= distance` 就計數
4. 傳回每個葉子距離+1，表示往上一層傳遞

---

#### **Python 程式碼**

```python
class Solution:
    def countPairs(self, root: Optional[TreeNode], distance: int) -> int:
        self.count = 0

        def dfs(node):
            if not node:
                return []
            if not node.left and not node.right:
                return [1]  # 葉子到自己的距離是 1（因為往上會 +1）

            left = dfs(node.left)
            right = dfs(node.right)

            # 檢查左右子樹葉子距離配對
            for l in left:
                for r in right:
                    if l + r <= distance:
                        self.count += 1

            # 回傳所有葉子距離 +1（傳給父節點）
            return [d + 1 for d in left + right if d + 1 <= distance]

        dfs(root)
        return self.count
```

---

#### **時間與空間複雜度**

* **時間複雜度**：$O(n \cdot d^2)$，$n$ 是節點數，$d$ 是 distance（每對左右葉子最多 $d \times d$ 組合）
* **空間複雜度**：$O(h + d)$，$h$ 是遞迴深度，$d$ 是葉子距離列表長度

</details>


---

### [889. Construct Binary Tree from Preorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/)

給定任意兩種遍歷結果，我們都可以重建樹的結構。

<details>
<summary>題解</summary>

#### **問題描述**
給定一棵**二元樹的前序（preorder）與後序（postorder）遍歷結果**，請你還原出這棵樹。

**注意**：這棵樹中**節點值唯一**，且可能有**多種合法構造方式**，你只需回傳其中一種合法構造即可。

---

#### **範例**
```plaintext
輸入：
preorder = [1,2,4,5,3,6,7]
postorder = [4,5,2,6,7,3,1]

輸出：
[1,2,3,4,5,6,7]（或其他合法二元樹皆可）
````

---

#### **解題思路：遞迴切分子樹**

前序與後序都提供了關於節點順序的資訊，搭配使用可推斷子樹結構。

##### ✅ 前序的特性：

* 第一個是 root
* 第二個是左子樹的 root（如果存在）

##### ✅ 後序的特性：

* 最後一個是 root
* 左子樹的結尾可以由 preorder\[1] 在 postorder 中的位置推斷

---

#### **步驟說明**

1. 根據 `preorder[0]` 取出 root
2. 若 `preorder` 長度 > 1：

   * 取 `preorder[1]` 為左子樹根
   * 在 `postorder` 中找出這個左子樹根的位置 `L`
   * 左子樹長度 = `L + 1`
   * 對左右子樹進行遞迴構造

---

#### **Python 程式碼**

```python
class Solution:
    def constructFromPrePost(self, preorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        if not preorder:
            return None

        root = TreeNode(preorder[0])
        if len(preorder) == 1:
            return root

        # 左子樹根節點在 preorder 的第二個位置
        left_root_val = preorder[1]
        # 在 postorder 中找出左子樹的結尾位置
        L = postorder.index(left_root_val) + 1

        root.left = self.constructFromPrePost(preorder[1:1+L], postorder[:L])
        root.right = self.constructFromPrePost(preorder[1+L:], postorder[L:-1])
        return root
```

---

#### **時間與空間複雜度**

* **時間複雜度**：$O(n^2)$，因為 `postorder.index()` 每次都花 $O(n)$
* **空間複雜度**：$O(h)$，$h$ 為樹的高度（遞迴堆疊空間）

> 若要優化，可事先將 postorder 的值對應索引記錄為哈希表，將時間複雜度降至 $O(n)$

</details>


---

### [106. Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

給定任意兩種遍歷結果，我們都可以重建樹的結構。

<details>
<summary>題解</summary>

#### **問題描述**
給定一棵二元樹的**中序遍歷（inorder）**與**後序遍歷（postorder）**結果，請還原出這棵二元樹。

---

#### **範例**
```plaintext
輸入：
inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]

輸出：
    3
   / \
  9  20
     / \
    15  7
````

---

#### **解題思路：遞迴切分左右子樹**

##### ✅ 關鍵觀察：

1. **後序遍歷的最後一個元素**是根節點（root）
2. 在中序遍歷中，**根節點左邊是左子樹，右邊是右子樹**
3. 根據中序切出左、右子樹的長度後，也可以切出對應的後序區段

---

#### **步驟**

1. 從 postorder 取出最後一個元素作為 root
2. 找出該 root 在 inorder 中的位置
3. 計算左子樹長度
4. 根據左子樹長度切出 inorder 與 postorder 的左右子區間
5. 對左右子樹遞迴重建

---

#### **Python 程式碼**

```python
class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        if not inorder or not postorder:
            return None

        root_val = postorder[-1]
        root = TreeNode(root_val)

        idx = inorder.index(root_val)  # root 在 inorder 的位置

        root.left = self.buildTree(inorder[:idx], postorder[:idx])
        root.right = self.buildTree(inorder[idx+1:], postorder[idx:-1])
        return root
```

---

#### **範例解釋（以 inorder = \[9,3,15,20,7] 為例）**

* `postorder[-1] = 3` → root
* 在 `inorder` 中 `3` 的 index = 1
* 左子樹 inorder = \[9]，postorder = \[9]
* 右子樹 inorder = \[15,20,7]，postorder = \[15,7,20]

---

#### **時間與空間複雜度**

* **時間複雜度**：$O(n^2)$，因為 `inorder.index()` 每次都要 $O(n)$
  （若使用哈希表可降至 $O(n)$）
* **空間複雜度**：$O(h)$，$h$ 為樹的高度（遞迴堆疊空間）

</details>


---

### [94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)

因為前中序後遍歷是用遞迴實現的，而遞迴的底層實現是堆疊操作，因此我們總能用堆疊實現。

<details>
<summary>題解</summary>

#### **問題描述**
給定一棵二元樹，請回傳它的「**中序遍歷**（inorder traversal）」結果。

---

#### **中序遍歷定義**
對於任一節點順序為：
1. 遍歷左子樹
2. 訪問根節點
3. 遍歷右子樹

---

#### **範例**
```plaintext
輸入：
    1
     \
      2
     /
    3

輸出：[1, 3, 2]
````

---

#### **解題思路：遞迴實作中序遍歷（DFS）**

最簡單的方式是使用遞迴函式，按照中序順序遞迴加入結果清單。

---

#### **Python 程式碼：遞迴版本**

```python
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []

        def dfs(node):
            if not node:
                return
            dfs(node.left)
            res.append(node.val)
            dfs(node.right)
        
        dfs(root)
        return res
```

---

#### **Python 程式碼：迴圈版本（使用堆疊模擬遞迴）**

```python
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res, stack = [], []
        curr = root
        while curr or stack:
            while curr:
                stack.append(curr)
                curr = curr.left
            curr = stack.pop()
            res.append(curr.val)
            curr = curr.right
        return res
```

---

#### **時間與空間複雜度**

* **時間複雜度**：$O(n)$，$n$ 為節點數，每個節點恰好訪問一次
* **空間複雜度**：

  * 遞迴版本：$O(h)$，$h$ 為樹的高度（遞迴堆疊）
  * 迴圈版本：$O(h)$，手動堆疊模擬遞迴

</details>


---

### [145. Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)

因為前中序後遍歷是用遞迴實現的，而遞迴的底層實現是堆疊操作，因此我們總能用堆疊實現。

<details>
<summary>題解</summary>

#### **問題描述**
給定一棵二元樹，請回傳它的「**後序遍歷（postorder traversal）**」結果。

---

#### **後序遍歷定義**
遍歷順序為：
1. 左子樹
2. 右子樹
3. 根節點

---

#### **範例**
```plaintext
輸入：
    1
     \
      2
     /
    3

輸出：[3, 2, 1]
````

---

#### **解題思路：遞迴 vs 迴圈**

---

#### ✅ 方法一：遞迴解法（直觀好理解）

```python
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        def dfs(node):
            if not node:
                return
            dfs(node.left)
            dfs(node.right)
            res.append(node.val)
        dfs(root)
        return res
```

---

#### ✅ 方法二：迴圈解法（使用堆疊模擬遞迴）

後序順序為左→右→中，我們可以先用「中→右→左」順序加入 stack，再 reverse。

```python
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []
        stack, res = [root], []
        while stack:
            node = stack.pop()
            res.append(node.val)
            if node.left:
                stack.append(node.left)
            if node.right:
                stack.append(node.right)
        return res[::-1]  # 反轉得到左→右→中
```

---

#### **時間與空間複雜度**

* **時間複雜度**：$O(n)$，$n$ 為節點總數，每個節點訪問一次
* **空間複雜度**：

  * 遞迴寫法：$O(h)$，$h$ 為樹的高度（遞迴堆疊）
  * 迴圈寫法：$O(n)$，stack 和 res 最多裝下所有節點


</details>


---

### [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

現在不是 BST，而是普通的二元樹了，該怎麼辦？

<details>
<summary>題解</summary>

#### **問題描述**
給定一棵**一般的二元樹（非 BST）**，以及兩個節點 `p` 和 `q`，請找出它們的**最近共同祖先（Lowest Common Ancestor, LCA）**。

- 一個節點也可以是它自己的祖先。

---

#### **範例**
```plaintext
輸入：
    root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
輸出：3

輸入：
    root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
輸出：5
````

---

#### **解題思路：自底向上遞迴**

這是一個**經典的樹遞迴問題**，我們的策略如下：

1. 對當前節點：

   * 如果是 `None`，就回傳 `None`
   * 如果是 `p` 或 `q`，就回傳這個節點（找到目標）
2. 向左子樹與右子樹遞迴尋找 `p` 與 `q`
3. 根據左右回傳結果決定：

   * 如果左右都非空，表示 `p` 和 `q` 分別在兩邊，當前節點就是最近公共祖先
   * 如果只有一邊非空，代表 `p` 和 `q` 都在那一側，回傳那一側結果
   * 如果兩邊都是空，就回傳 `None`

---

#### **Python 程式碼**

```python
class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        if not root or root == p or root == q:
            return root

        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)

        if left and right:
            return root
        return left if left else right
```

---

#### **為什麼這樣可行？**

* 如果 `p` 和 `q` 分別在左右 → 這個節點就是最近祖先
* 如果只有一邊找到 → 那就是目標節點的祖先往上傳
* 如果都沒找到 → 回傳 `None`

---

#### **時間與空間複雜度**

* **時間複雜度**：$O(n)$，其中 $n$ 是節點數，每個節點最多訪問一次
* **空間複雜度**：$O(h)$，$h$ 為樹的高度（遞迴堆疊）

</details>


---

### [109. Convert Sorted List to Binary Search Tree](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/)

把排好序的鏈結串列變成 BST。為了使得 BST 盡量平衡，我們需要尋找鏈結串列的中點。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個**升序排列的鏈結串列**，請將它轉換為**高度平衡的二元搜尋樹（BST）**。

- 高度平衡的意思是：對每個節點，其左右子樹高度差不超過 1

---

#### **範例**
```plaintext
輸入：head = [-10, -3, 0, 5, 9]
輸出：
       0
      / \
    -10  5
      \    \
      -3    9
````

---

#### **解題思路：快慢指針 + 分治遞迴建樹**

這題的目標是把「有序鏈結串列」轉成「平衡 BST」，那我們的策略類似於：

1. 取**中間節點**作為根節點（BST 中序遍歷的特性）
2. 左半邊 → 遞迴建左子樹
3. 右半邊 → 遞迴建右子樹

---

#### **找中間節點的方法：快慢指針**

我們可以用兩個指標：

* `slow`：每次走一步
* `fast`：每次走兩步
  當 `fast` 到尾時，`slow` 剛好在中間

---

#### **Python 程式碼**

```python
class Solution:
    def sortedListToBST(self, head: Optional[ListNode]) -> Optional[TreeNode]:
        if not head:
            return None
        if not head.next:
            return TreeNode(head.val)

        # 使用快慢指針找中點（slow 指向中間節點前一個）
        prev = None
        slow = fast = head
        while fast and fast.next:
            prev = slow
            slow = slow.next
            fast = fast.next.next

        # 中斷左半部鏈結串列
        if prev:
            prev.next = None

        root = TreeNode(slow.val)
        root.left = self.sortedListToBST(head if slow != head else None)
        root.right = self.sortedListToBST(slow.next)
        return root
```

---

#### **細節說明**

* 當只剩一個節點時 → 直接轉成葉節點
* 為了讓 left 和 right 能分割開來，我們用 `prev.next = None` 把鏈結串列斷開
* 避免無窮遞迴時，加上 `if slow != head else None`

---

#### **時間與空間複雜度**

* **時間複雜度**：$O(n \log n)$，每層需遍歷 $O(n)$ 找中點，遞迴深度為 $\log n$
* **空間複雜度**：$O(\log n)$，為遞迴堆疊深度

---

#### **總結**

- 快慢指針找中點 → 遞迴分治建樹
- 屬於「鏈結串列 + 樹構造」的綜合題
- 與 108 題（從陣列建 BST）概念類似，但更難因為無法隨機存取

</details>


---

### [897. Increasing Order Search Tree](https://leetcode.com/problems/increasing-order-search-tree/)

把 BST 壓成一個鏈結串列，務必考慮清楚指標操作的順序，否則可能會出現環路。

<details>
<summary>題解</summary>

#### **問題描述**
給定一棵二元搜尋樹（BST），請你**重新排列樹的結構**，使得它只包含：

- 所有節點的**左子樹為空**
- 所有節點的**右子樹**是遞增順序

即變成一條「**右傾的遞增鏈**」。

---

#### **範例**
```plaintext
輸入：
    5
   / \
  3   6
 / \    \
2   4    8
/        / \
1        7  9

輸出：
1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
           \
            7
             \
              8
               \
                9
````

---

#### **解題思路：中序遍歷 + 重建右子樹**

因為原本是 BST，中序遍歷的結果一定是**遞增排序**，
所以我們只要：

1. 對原樹做 **中序遍歷**，收集節點順序
2. 建立一個 dummy node
3. 依序將中序的節點串接為「只向右」的鏈結串列即可

---

#### **Python 程式碼：中序遍歷 + 指針構造**

```python
class Solution:
    def increasingBST(self, root: TreeNode) -> TreeNode:
        dummy = TreeNode(-1)
        self.curr = dummy

        def inorder(node):
            if not node:
                return
            inorder(node.left)
            # 清掉左子節點，接到右子樹上
            node.left = None
            self.curr.right = node
            self.curr = node
            inorder(node.right)

        inorder(root)
        return dummy.right
```

---

#### **重點解釋**

* `dummy` 是一個虛擬起點，最後回傳 `dummy.right`
* 每遇到一個節點，就把它接到當前指標 `curr` 的右邊
* 同時設 `node.left = None`，符合題目要求

---

#### **時間與空間複雜度**

* **時間複雜度**：$O(n)$，其中 $n$ 是節點數，走訪一次樹
* **空間複雜度**：$O(h)$，$h$ 為樹的高度（遞迴堆疊空間）

---

#### **總結**

- 典型「BST + 中序 + 重建結構」的應用題
- 可作為中序遍歷與鏈結結構串接練習
- 建議與 94, 230 題一起練習中序相關技巧

</details>


---

### [653. Two Sum IV - Input is a BST](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/)

啊哈，這道題可能會把你騙到。

<details>
<summary>題解</summary>

#### **問題描述**
給定一棵 **二元搜尋樹（BST）** 和一個目標值 `k`，請判斷是否存在樹中的兩個節點，其值相加等於 `k`。

---

#### **範例**
```plaintext
輸入：root = [5,3,6,2,4,null,7], k = 9
輸出：True （因為 2 + 7 = 9）

輸入：root = [5,3,6,2,4,null,7], k = 28
輸出：False
````

---

#### **解題思路 1：中序 + 雜湊集合（最直觀）**

利用 BST 的特性做 **中序遍歷** 可以得到一個**遞增序列**，
接著在遍歷過程中，使用一個集合來紀錄「我們已經看過的數字」。

對每個節點值 `x`，只要檢查 `k - x` 是否存在於集合中即可，這跟 Two Sum 題目一模一樣。

---

#### **Python 程式碼**

```python
class Solution:
    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
        seen = set()

        def dfs(node):
            if not node:
                return False
            if k - node.val in seen:
                return True
            seen.add(node.val)
            return dfs(node.left) or dfs(node.right)

        return dfs(root)
```

---

#### **其他解法簡述**

1. **中序遍歷後轉陣列 + 雙指標**：用 inorder 得到排序陣列，再用雙指標解 Two Sum。
2. **BST + Set 優化搜尋**：對每個節點 `x`，去 BST 中找 `k - x`（避免重複）。

---

#### **時間與空間複雜度**

* **時間複雜度**：$O(n)$，$n$ 為節點數，遍歷每個節點一次
* **空間複雜度**：$O(n)$，set 最多存所有節點的值（最壞情況）

</details>


---

### [450. Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/)

當尋找到待刪節點時，你可以分情況考慮——當前節點是葉節點、只有一個子節點和有兩個子節點。建議同時回收記憶體。

<details>
<summary>題解</summary>

#### **問題描述**
給定一棵二元搜尋樹（BST）和一個要刪除的節點值 `key`，請刪除該節點，並保證仍是一棵有效的 BST，回傳新的樹根。

---

#### **範例**
```plaintext
輸入：
    root = [5,3,6,2,4,null,7], key = 3

輸出：
    [5,4,6,2,null,null,7]
````

---

#### **解題思路：分三種情況討論刪除邏輯**

在 BST 中刪除節點時，根據「被刪除節點的子節點數量」可分為以下三種情況：

---

### ✅ 刪除節點分三種狀況：

1. **葉節點**（無子節點）：直接刪除
2. **只有一個子節點**：直接用子節點替代它
3. **有兩個子節點**：需尋找

   * **右子樹中最小節點（inorder successor）**，或
   * **左子樹中最大節點（inorder predecessor）**
     → 把該值覆蓋掉後，再遞迴刪除該 successor/predecessor

---

#### **Python 範例程式碼**

```python
class Solution:
    def deleteNode(self, root: Optional[TreeNode], key: int) -> Optional[TreeNode]:
        if not root:
            return None

        if key < root.val:
            root.left = self.deleteNode(root.left, key)
        elif key > root.val:
            root.right = self.deleteNode(root.right, key)
        else:
            # 找到要刪除的節點
            if not root.left:
                return root.right
            elif not root.right:
                return root.left
            else:
                # 兩個子節點：找右子樹中最小的節點（inorder successor）
                min_larger_node = self.findMin(root.right)
                root.val = min_larger_node.val
                root.right = self.deleteNode(root.right, root.val)
        return root

    def findMin(self, node: TreeNode) -> TreeNode:
        while node.left:
            node = node.left
        return node
```

---

#### **時間與空間複雜度**

* **時間複雜度**：$O(h)$，$h$ 是樹的高度（最差為 $O(n)$，平均為 $O(\log n)$）
* **空間複雜度**：$O(h)$，遞迴深度為樹的高度

---

#### **總結**

- 是 BST 題中較難的一題，需要正確處理三種刪除情況
- 熟悉「中序後繼（右子樹最小）」與「中序前驅（左子樹最大）」的概念
- 建議搭配 701（Insert into BST）與 98（Validate BST）一起練習

</details>
