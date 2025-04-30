---
sidebar_position: 67
---

# 12.4 練習

## 基礎難度

### [83. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

雖然 LeetCode 並未強制要求，但我們仍然建議回收記憶體，特別是在題目要求刪除節點時。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個已排序的鏈結串列（Linked List），請刪除所有重複的節點，使每個元素只出現一次，並回傳處理後的鏈結串列。

---

#### **範例**
```plaintext
輸入: 1 → 1 → 2  
輸出: 1 → 2

輸入: 1 → 1 → 2 → 3 → 3  
輸出: 1 → 2 → 3
```

---

#### **解題思路：單向遍歷即可**

- 因為鏈結串列已經是**排序好的**，所以只要**逐一比較相鄰節點**即可。
- 若發現 `cur.val == cur.next.val`，表示重複 → 就讓 `cur.next = cur.next.next` 跳過重複節點。
- 否則就往下繼續走。

---

#### **Python 範例程式碼**
```python
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        cur = head
        while cur and cur.next:
            if cur.val == cur.next.val:
                cur.next = cur.next.next  # 跳過重複
            else:
                cur = cur.next
        return head
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(n)$，遍歷一次鏈結串列
- **空間複雜度**：$O(1)$，原地操作，未使用額外空間

</details>


---

### [328. Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/)

這道題其實很簡單，千萬不要把題目複雜化。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個單向鏈結串列，請將所有**奇數位置**的節點排在**偶數位置**節點之前，並維持原本相對順序。  
位置是從 `1` 開始計算（不是數值奇偶）。

---

#### **範例**
```plaintext
輸入: 1 → 2 → 3 → 4 → 5  
輸出: 1 → 3 → 5 → 2 → 4

輸入: 2 → 1 → 3 → 5 → 6 → 4 → 7  
輸出: 2 → 3 → 6 → 7 → 1 → 5 → 4
```

---

#### **解題思路：雙指標分流連接**

##### ✅ 關鍵觀察
- 題目不是要你按照值的奇偶，而是按照**節點位置**的奇偶性。
- 我們可以分成兩個鏈：
  - 一個鏈接**奇數位置**的節點
  - 一個鏈接**偶數位置**的節點
- 最後把奇數鏈接到偶數鏈的前面。

---

#### **步驟**
1. 建立 `odd` 指標指向第一個節點，`even` 指標指向第二個節點
2. 記錄 `even_head`（最後要接到奇數串列尾巴）
3. 交替串接奇數與偶數節點直到走完
4. 最後把 `odd.next = even_head`

---

#### **Python 程式碼**
```python
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head

        odd = head
        even = head.next
        even_head = even  # 記住偶數鏈開頭

        while even and even.next:
            odd.next = even.next
            odd = odd.next
            even.next = odd.next
            even = even.next

        odd.next = even_head
        return head
```

---

#### **圖解（以 1→2→3→4→5 為例）**

初始：
```
odd: 1   even: 2
```

第一輪：
```
odd.next = 3 → odd = 3
even.next = 4 → even = 4
```

第二輪：
```
odd.next = 5 → odd = 5
even.next = None → done
```

最後：
```
odd.next = even_head（即 2）
→ 結果：1 → 3 → 5 → 2 → 4
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(n)$，遍歷一次所有節點
- **空間複雜度**：$O(1)$，原地操作，不需要額外空間

---

#### **總結**
✅ 原地拆解兩條鏈再合併  
✅ 雙指標遍歷技巧，是常見的鏈結串列分組類題目  
✅ 注意奇偶是「位置」不是「值」！

</details>

---

### [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

既然可以使用快慢指針找到鏈結串列的中點，也可以利用類似的方法找到倒數第 N 個節點，無需再次遍歷。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個單向鏈結串列，請移除**倒數第 `n` 個節點**，並回傳處理後的頭節點。

---

#### **範例**
```plaintext
輸入: head = [1,2,3,4,5], n = 2  
輸出: [1,2,3,5]

說明: 移除的是「倒數第 2 個」節點，也就是值為 4 的節點
```

---

#### **解題思路：雙指標（Two Pointers）+ 虛擬節點 dummy**

##### ✅ 技巧關鍵：
- 使用一個 `dummy` 虛擬節點指向 head，可簡化刪除頭節點的情況
- 定義 `first` 和 `second` 兩個指標，先讓 `first` 先走 `n` 步
- 然後 `first` 和 `second` 同步往後走，直到 `first` 到尾端
- 此時 `second` 正好在要刪除的節點**前一個位置**
- 執行 `second.next = second.next.next` 來刪除節點

---

#### **Python 程式碼**
```python
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        first = second = dummy

        # 先讓 first 前進 n+1 步（包含 dummy）
        for _ in range(n + 1):
            first = first.next

        # 同步走，直到 first 到尾
        while first:
            first = first.next
            second = second.next

        # 刪除節點
        second.next = second.next.next
        return dummy.next
```

---

#### **圖解流程（head = [1,2,3,4,5], n = 2）**

```
dummy → 1 → 2 → 3 → 4 → 5
        ↑         ↑
     second     first  ← first 比 second 多走 n 步

一起走直到 first 到尾：
        ↑              ↑
     second          first = None

刪除 second.next（即 4）
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(n)$，一次遍歷
- **空間複雜度**：$O(1)$，只用了常數額外空間

---

#### **總結**
✅ 雙指標法是處理倒數第 k 題型的標準技巧  
✅ 虛擬節點 `dummy` 有效避免刪除頭節點時的特例處理  
✅ 鏈結串列題目經典考法，建議熟練掌握

</details>

---

## 進階難度

### [148. Sort List](https://leetcode.com/problems/sort-list/)

利用快慢指針找到鏈結串列的中點後，可以對鏈結串列進行合併排序。

<details>
<summary>題解</summary>

#### **問題描述**
給定一個**單向鏈結串列** `head`，請使用 **$O(n \log n)$ 時間複雜度**與 **常數空間** 將其排序。

---

#### **範例**
```plaintext
輸入: head = [4, 2, 1, 3]
輸出: [1, 2, 3, 4]

輸入: head = [-1,5,3,4,0]
輸出: [-1,0,3,4,5]
```

---

#### **解題思路：自頂向下的 Merge Sort（合併排序）**

##### ✅ 為什麼用 Merge Sort？
- 快速排序在鏈結串列上效能差（因為隨機存取不快）
- Merge Sort 適合處理鏈結串列：可以自然地分割與合併
- 達成 $O(n \log n)$ 的時間複雜度

---

#### **步驟說明**
1. **使用快慢指針**找到中間點，把鏈結串列一分為二
2. 遞迴對左右子串進行排序
3. 使用 **合併兩條已排序串列** 的技巧合併兩邊

---

#### **Python 程式碼**
```python
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # 基底：空或單節點不需排序
        if not head or not head.next:
            return head

        # 快慢指針找中點，斷開鏈結
        slow, fast = head, head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        mid = slow.next
        slow.next = None

        # 分別排序左右兩半
        left = self.sortList(head)
        right = self.sortList(mid)

        # 合併兩條已排序鏈結串列
        return self.merge(left, right)

    def merge(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummy = tail = ListNode()
        while l1 and l2:
            if l1.val < l2.val:
                tail.next = l1
                l1 = l1.next
            else:
                tail.next = l2
                l2 = l2.next
            tail = tail.next
        tail.next = l1 or l2
        return dummy.next
```

---

#### **時間與空間複雜度**
- **時間複雜度**：$O(n \log n)$，每次切半 + 合併
- **空間複雜度**：$O(\log n)$（遞迴棧空間，不使用額外陣列）

---

#### **總結**
✅ 適合鏈結串列排序的最佳解法  
✅ 快慢指針斷鏈 + 遞迴合併排序  
✅ 是考鏈結串列操作與排序技巧的綜合題，建議熟練！

</details>