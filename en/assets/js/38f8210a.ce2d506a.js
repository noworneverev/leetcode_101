"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[14],{4841:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"linked-lists/12-2-basic-linked-list-operations","title":"12.2 Basic Operations on Linked Lists","description":"206. Reverse Linked List","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/12-linked-lists/12-2-basic-linked-list-operations.mdx","sourceDirName":"12-linked-lists","slug":"/linked-lists/12-2-basic-linked-list-operations","permalink":"/leetcode_101/en/linked-lists/12-2-basic-linked-list-operations","draft":false,"unlisted":false,"editUrl":"https://github.com/noworneverev/leetcode_101/tree/master/leetcode_101/docs/12-linked-lists/12-2-basic-linked-list-operations.mdx","tags":[],"version":"current","sidebarPosition":65,"frontMatter":{"sidebar_position":65},"sidebar":"tutorialSidebar","previous":{"title":"12.1 Introduction to Data Structures","permalink":"/leetcode_101/en/linked-lists/12-1-data-structure-introduction"},"next":{"title":"12.3 Other Linked List Techniques","permalink":"/leetcode_101/en/linked-lists/12-3-other-linked-list-techniques"}}');var l=t(4848),s=t(8453);const d={sidebar_position:65},o="12.2 Basic Operations on Linked Lists",r={},a=[{value:"206. Reverse Linked List",id:"206-reverse-linked-list",level:2},{value:"Problem Description",id:"problem-description",level:3},{value:"Input and Output Example",id:"input-and-output-example",level:3},{value:"Solution Explanation",id:"solution-explanation",level:3},{value:"21. Merge Two Sorted Lists",id:"21-merge-two-sorted-lists",level:2},{value:"Problem Description",id:"problem-description-1",level:3},{value:"Input and Output Example",id:"input-and-output-example-1",level:3},{value:"Solution Explanation",id:"solution-explanation-1",level:3},{value:"24. Swap Nodes in Pairs",id:"24-swap-nodes-in-pairs",level:2},{value:"Problem Description",id:"problem-description-2",level:3},{value:"Input and Output Example",id:"input-and-output-example-2",level:3},{value:"Solution Explanation",id:"solution-explanation-2",level:3}];function p(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components},{TabItem:t,Tabs:i}=n;return t||c("TabItem",!0),i||c("Tabs",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"122-basic-operations-on-linked-lists",children:"12.2 Basic Operations on Linked Lists"})}),"\n",(0,l.jsx)(n.h2,{id:"206-reverse-linked-list",children:(0,l.jsx)(n.a,{href:"https://leetcode.com/problems/reverse-linked-list/",children:"206. Reverse Linked List"})}),"\n",(0,l.jsx)(n.h3,{id:"problem-description",children:"Problem Description"}),"\n",(0,l.jsx)(n.p,{children:"Reverse a linked list."}),"\n",(0,l.jsx)(n.h3,{id:"input-and-output-example",children:"Input and Output Example"}),"\n",(0,l.jsx)(n.p,{children:"Input a linked list, output the reversed linked list."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Input: 1->2->3->4->5->nullptr\nOutput: 5->4->3->2->1->nullptr\n"})}),"\n",(0,l.jsx)(n.h3,{id:"solution-explanation",children:"Solution Explanation"}),"\n",(0,l.jsx)(n.p,{children:"Reversing a linked list is a fundamental skill that must be mastered. We provide two approaches\u2014recursive and iterative. It's recommended to learn both."}),"\n",(0,l.jsx)(n.p,{children:"Recursive Approach:"}),"\n",(0,l.jsxs)(i,{children:[(0,l.jsx)(t,{value:"cpp",label:"C++",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"ListNode* reverseList(ListNode* head, ListNode* head_prev = nullptr) {\n    if (head == nullptr) {\n        return head_prev;\n    }\n    ListNode* head_next = head->next;\n    head->next = head_prev;\n    return reverseList(head_next, head);\n}\n"})})}),(0,l.jsx)(t,{value:"py",label:"Python",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:"def reverseList(\n    head: Optional[ListNode], head_prev: Optional[ListNode] = None\n) -> Optional[ListNode]:\n    if head is None:\n        return head_prev\n    head_next = head.next\n    head.next = head_prev\n    return reverseList(head_next, head)\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"The non-recursive implementation is as follows:"}),"\n",(0,l.jsxs)(i,{children:[(0,l.jsx)(t,{value:"cpp",label:"C++",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"ListNode* reverseList(ListNode* head) {\n    ListNode *head_prev = nullptr, *head_next;\n    while (head) {\n        head_next = head->next;\n        head->next = head_prev;\n        head_prev = head;\n        head = head_next;\n    }\n    return head_prev;\n}\n"})})}),(0,l.jsx)(t,{value:"py",label:"Python",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:"def reverseList(head: Optional[ListNode]) -> Optional[ListNode]:\n    head_prev = None\n    while head is not None:\n        head_next = head.next\n        head.next = head_prev\n        head_prev = head\n        head = head_next\n    return head_prev\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"21-merge-two-sorted-lists",children:(0,l.jsx)(n.a,{href:"https://leetcode.com/problems/merge-two-sorted-lists/",children:"21. Merge Two Sorted Lists"})}),"\n",(0,l.jsx)(n.h3,{id:"problem-description-1",children:"Problem Description"}),"\n",(0,l.jsx)(n.p,{children:"Given two sorted linked lists, merge them into one sorted linked list."}),"\n",(0,l.jsx)(n.h3,{id:"input-and-output-example-1",children:"Input and Output Example"}),"\n",(0,l.jsxs)(n.p,{children:["Input: Two linked lists.",(0,l.jsx)(n.br,{}),"\n","Output: A linked list representing the merged result."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Input: 1->2->4, 1->3->4\nOutput: 1->1->2->3->4->4\n"})}),"\n",(0,l.jsx)(n.h3,{id:"solution-explanation-1",children:"Solution Explanation"}),"\n",(0,l.jsxs)(n.p,{children:["We provide both recursive and non-recursive implementations.",(0,l.jsx)(n.br,{}),"\n","The recursive implementation is as follows:"]}),"\n",(0,l.jsxs)(i,{children:[(0,l.jsx)(t,{value:"cpp",label:"C++",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {\n    if (l2 == nullptr) {\n        return l1;\n    }\n    if (l1 == nullptr) {\n        return l2;\n    }\n    if (l1->val < l2->val) {\n        l1->next = mergeTwoLists(l1->next, l2);\n        return l1;\n    }\n    l2->next = mergeTwoLists(l1, l2->next);\n    return l2;\n}\n"})})}),(0,l.jsx)(t,{value:"py",label:"Python",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:"def mergeTwoLists(\n    l1: Optional[ListNode], l2: Optional[ListNode]\n) -> Optional[ListNode]:\n    if l1 is None or l2 is None:\n        return l1 or l2\n    if l1.val < l2.val:\n        l1.next = mergeTwoLists(l1.next, l2)\n        return l1\n    l2.next = mergeTwoLists(l1, l2.next)\n    return l2\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"The non-recursive implementation is as follows:"}),"\n",(0,l.jsxs)(i,{children:[(0,l.jsx)(t,{value:"cpp",label:"C++",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"ListNode *mergeTwoLists(ListNode *l1, ListNode *l2) {\n    ListNode *dummy = new ListNode(0), *node = dummy;\n    while (l1 && l2) {\n        if (l1->val < l2->val) {\n            node->next = l1;\n            l1 = l1->next;\n        } else {\n            node->next = l2;\n            l2 = l2->next;\n        }\n        node = node->next;\n    }\n    node->next = l1 == nullptr ? l2 : l1;\n    return dummy->next;\n}\n"})})}),(0,l.jsx)(t,{value:"py",label:"Python",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:"def mergeTwoLists(\n    l1: Optional[ListNode], l2: Optional[ListNode]\n) -> Optional[ListNode]:\n    dummy = ListNode()\n    head = dummy\n    \n    while l1 and l2:\n        if l1.val < l2.val:\n            dummy.next = l1\n            l1 = l1.next\n        else:\n            dummy.next = l2\n            l2 = l2.next\n        dummy = dummy.next\n    \n    dummy.next = l1 or l2\n    return head.next\n\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"24-swap-nodes-in-pairs",children:(0,l.jsx)(n.a,{href:"https://leetcode.com/problems/swap-nodes-in-pairs/",children:"24. Swap Nodes in Pairs"})}),"\n",(0,l.jsx)(n.h3,{id:"problem-description-2",children:"Problem Description"}),"\n",(0,l.jsx)(n.p,{children:"Given a linked list, swap every two adjacent nodes."}),"\n",(0,l.jsx)(n.h3,{id:"input-and-output-example-2",children:"Input and Output Example"}),"\n",(0,l.jsx)(n.p,{children:"Input a linked list, output the linked list after swapping nodes in pairs."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Input: 1->2->3->4\nOutput: 2->1->4->3\n"})}),"\n",(0,l.jsx)(n.h3,{id:"solution-explanation-2",children:"Solution Explanation"}),"\n",(0,l.jsx)(n.p,{children:"Use pointers to perform the swap operation. The problem is not very difficult, but requires careful attention."}),"\n",(0,l.jsxs)(i,{children:[(0,l.jsx)(t,{value:"cpp",label:"C++",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"ListNode* swapPairs(ListNode* head) {\n    ListNode *node1 = head, *node2;\n    if (node1 && node1->next) {\n        node2 = node1->next;\n        node1->next = node2->next;\n        node2->next = node1;\n        head = node2;\n        while (node1->next && node1->next->next) {\n            node2 = node1->next->next;\n            node1->next->next = node2->next;\n            node2->next = node1->next;\n            node1->next = node2;\n            node1 = node2->next;\n        }\n    }\n    return head;\n}\n"})})}),(0,l.jsx)(t,{value:"py",label:"Python",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:"def swapPairs(head: Optional[ListNode]) -> Optional[ListNode]:\n    node1 = head\n    if node1 is not None and node1.next is not None:\n        node2 = node1.next\n        node1.next = node2.next\n        node2.next = node1\n        head = node2\n        while node1.next is not None and node1.next.next is not None:\n            node2 = node1.next.next\n            node1.next.next = node2.next\n            node2.next = node1.next\n            node1.next = node2\n            node1 = node2.next\n    return head\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);