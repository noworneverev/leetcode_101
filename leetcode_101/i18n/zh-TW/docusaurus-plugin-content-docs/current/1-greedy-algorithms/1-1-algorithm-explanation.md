---
sidebar_position: 1
---

# 1.1 算法解釋

顧名思義，`貪心算法或貪心思想`（greedy algorithm）採用貪心的策略，`保證每次操作都是局部最優的`，從而使最後得到的結果是`全局最優的`。

舉一個最簡單的例子：小明和小王喜歡吃蘋果，小明可以吃五個，小王可以吃三個。已知蘋果園裡有吃不完的蘋果，求小明和小王一共最多吃多少個蘋果。在這個例子中，我們可以選用的貪心策略為，每個人吃自己能吃的最多數量的蘋果，這在每個人身上都是局部最優的。又因為全局結果是局部結果的簡單求和，且局部結果互不相干，因此局部最優的策略同樣是全局最優的。

證明一道題能用貪心算法解決，有時遠比用貪心算法解決該題更複雜。一般情況下，在簡單操作後，具有明顯的從局部到整體的遞推關係，或者可以通過數學歸納法推測結果時，我們才會使用貪心算法。