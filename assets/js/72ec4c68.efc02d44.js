"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[5657],{3982:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"linked-lists/12-3-other-linked-list-techniques","title":"12.3 \u5176\u5b83\u94fe\u8868\u6280\u5de7","description":"160. Intersection of Two Linked Lists","source":"@site/docs/12-linked-lists/12-3-other-linked-list-techniques.mdx","sourceDirName":"12-linked-lists","slug":"/linked-lists/12-3-other-linked-list-techniques","permalink":"/leetcode_101/linked-lists/12-3-other-linked-list-techniques","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":66,"frontMatter":{"sidebar_position":66},"sidebar":"tutorialSidebar","previous":{"title":"12.2 \u94fe\u8868\u7684\u57fa\u672c\u64cd\u4f5c","permalink":"/leetcode_101/linked-lists/12-2-basic-linked-list-operations"},"next":{"title":"12.4 \u7ec3\u4e60","permalink":"/leetcode_101/linked-lists/12-4-exercises"}}');var t=s(4848),i=s(8453);const a={sidebar_position:66},d="12.3 \u5176\u5b83\u94fe\u8868\u6280\u5de7",r={},o=[{value:"160. Intersection of Two Linked Lists",id:"160-intersection-of-two-linked-lists",level:2},{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:3},{value:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:3},{value:"234. Palindrome Linked List",id:"234-palindrome-linked-list",level:2},{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0-1",level:3},{value:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b-1",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3-1",level:3}];function c(e){const n={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,i.R)(),...e.components},{TabItem:s,Tabs:l}=n;return s||x("TabItem",!0),l||x("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"123-\u5176\u5b83\u94fe\u8868\u6280\u5de7",children:"12.3 \u5176\u5b83\u94fe\u8868\u6280\u5de7"})}),"\n",(0,t.jsx)(n.h2,{id:"160-intersection-of-two-linked-lists",children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/intersection-of-two-linked-lists/",children:"160. Intersection of Two Linked Lists"})}),"\n",(0,t.jsx)(n.h3,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,t.jsx)(n.p,{children:"\u7ed9\u5b9a\u4e24\u4e2a\u94fe\u8868\uff0c\u5224\u65ad\u5b83\u4eec\u662f\u5426\u76f8\u4ea4\u4e8e\u4e00\u70b9\uff0c\u5e76\u6c42\u8fd9\u4e2a\u76f8\u4ea4\u8282\u70b9\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",children:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u8f93\u5165\u662f\u4e24\u6761\u94fe\u8868\uff0c\u8f93\u51fa\u662f\u4e00\u4e2a\u8282\u70b9\u3002\u5982\u65e0\u76f8\u4ea4\u8282\u70b9\uff0c\u5219\u8fd4\u56de\u4e00\u4e2a\u7a7a\u8282\u70b9\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input:\nA: a1 -> a2\n         |\n         v\n         c1 -> c2 -> c3\n         ^\n         |\nB: b1 -> b2 -> b3\nOutput: c1\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,t.jsx)(n.p,{children:"\u5047\u8bbe\u94fe\u8868 A \u7684\u5934\u8282\u70b9\u5230\u76f8\u4ea4\u70b9\u7684\u8ddd\u79bb\u662f a\uff0c\u94fe\u8868 B \u7684\u5934\u8282\u70b9\u5230\u76f8\u4ea4\u70b9\u7684\u8ddd\u79bb\u662f b\uff0c\u76f8\u4ea4\u70b9\u5230\u94fe\u8868\u7ec8\u70b9\u7684\u8ddd\u79bb\u4e3a c\u3002\u6211\u4eec\u4f7f\u7528\u4e24\u4e2a\u6307\u9488\uff0c\u5206\u522b\u6307\u5411\u4e24\u4e2a\u94fe\u8868\u7684\u5934\u8282\u70b9\uff0c\u5e76\u4ee5\u76f8\u540c\u7684\u901f\u5ea6\u524d\u8fdb\uff0c\u82e5\u5230\u8fbe\u94fe\u8868\u7ed3\u5c3e\uff0c\u5219\u79fb\u52a8\u5230\u53e6\u4e00\u6761\u94fe\u8868\u7684\u5934\u8282\u70b9\u7ee7\u7eed\u524d\u8fdb\u3002\u6309\u7167\u8fd9\u79cd\u524d\u8fdb\u65b9\u6cd5\uff0c\u4e24\u4e2a\u6307\u9488\u4f1a\u5728 a + b + c \u6b21\u524d\u8fdb\u540e\u540c\u65f6\u5230\u8fbe\u76f8\u4ea4\u8282\u70b9\u3002"}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsx)(s,{value:"cpp",label:"C++",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {\n    ListNode *l1 = headA, *l2 = headB;\n    while (l1 != l2) {\n        l1 = l1 != nullptr ? l1->next : headB;\n        l2 = l2 != nullptr ? l2->next : headA;\n    }\n    return l1;\n}\n"})})}),(0,t.jsx)(s,{value:"py",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"def getIntersectionNode(\n    headA: ListNode, headB: ListNode\n) -> Optional[ListNode]:\n    l1 = headA\n    l2 = headB    \n    while l1 != l2:\n        l1 = l1.next if l1 is not None else headB\n        l2 = l2.next if l2 is not None else headA    \n    return l1\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"234-palindrome-linked-list",children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/palindrome-linked-list/",children:"234. Palindrome Linked List"})}),"\n",(0,t.jsx)(n.h3,{id:"\u9898\u76ee\u63cf\u8ff0-1",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5 ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mn,{children:"1"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord",children:"1"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})," \u7684\u7a7a\u95f4\u590d\u6742\u5ea6\uff0c\u5224\u65ad\u94fe\u8868\u662f\u5426\u56de\u6587\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b-1",children:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u8f93\u5165\u662f\u4e00\u4e2a\u94fe\u8868\uff0c\u8f93\u51fa\u662f\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u94fe\u8868\u662f\u5426\u56de\u6587\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: 1->2->3->2->1\nOutput: true\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u9898\u89e3-1",children:"\u9898\u89e3"}),"\n",(0,t.jsx)(n.p,{children:"\u5148\u4f7f\u7528\u5feb\u6162\u6307\u9488\u627e\u5230\u94fe\u8868\u4e2d\u70b9\uff0c\u518d\u628a\u94fe\u8868\u5207\u6210\u4e24\u534a\uff1b\u7136\u540e\u628a\u540e\u534a\u6bb5\u7ffb\u8f6c\uff1b\u6700\u540e\u6bd4\u8f83\u4e24\u534a\u662f\u5426\u76f8\u7b49\u3002"}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsx)(s,{value:"cpp",label:"C++",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"bool isPalindrome(ListNode* head) {\n    if (head == nullptr || head->next == nullptr) {\n        return true;\n    }\n    ListNode *slow = head, *fast = head;\n    while (fast->next && fast->next->next) {\n        slow = slow->next;\n        fast = fast->next->next;\n    }\n    slow->next = reverseList(slow->next);  // \u89c1\u9898\u76ee206\n    slow = slow->next;\n    while (slow != nullptr) {\n        if (head->val != slow->val) {\n            return false;\n        }\n        head = head->next;\n        slow = slow->next;\n    }\n    return true;\n}\n"})})}),(0,t.jsx)(s,{value:"py",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"def isPalindrome(head: Optional[ListNode]) -> bool:\n    if head is None or head.next is None:\n        return True\n\n    slow, fast = head, head\n\n    while fast.next is not None and fast.next.next is not None:\n        slow = slow.next\n        fast = fast.next.next\n\n    slow.next = reverseList(slow.next)  # \u89c1\u9898\u76ee206\n    slow = slow.next\n\n    while slow is not None:\n        if head.val != slow.val:\n            return False\n        head = head.next\n        slow = slow.next\n\n    return True\n\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);