"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[320],{1782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"two-pointer-techniques/2-5-fast-slow-pointers","title":"2.5 \u5feb\u6162\u6307\u9488","description":"142. Linked List Cycle II","source":"@site/docs/2-two-pointer-techniques/2-5-fast-slow-pointers.mdx","sourceDirName":"2-two-pointer-techniques","slug":"/two-pointer-techniques/2-5-fast-slow-pointers","permalink":"/leetcode_101/en/two-pointer-techniques/2-5-fast-slow-pointers","draft":false,"unlisted":false,"editUrl":"https://github.com/noworneverev/leetcode_101/tree/master/leetcode_101/docs/2-two-pointer-techniques/2-5-fast-slow-pointers.mdx","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"tutorialSidebar","previous":{"title":"2.4 \u6ed1\u52a8\u7a97\u53e3","permalink":"/leetcode_101/en/two-pointer-techniques/2-4-sliding-window"},"next":{"title":"2.6 \u7ec3\u4e60","permalink":"/leetcode_101/en/two-pointer-techniques/2-6-exercises"}}');var i=n(4848),l=n(8453);const o={sidebar_position:9},r="2.5 \u5feb\u6162\u6307\u9488",a={},c=[{value:"142. Linked List Cycle II",id:"142-linked-list-cycle-ii",level:2},{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:3},{value:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:3}];function d(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,l.R)(),...e.components},{TabItem:n,Tabs:s}=t;return n||p("TabItem",!0),s||p("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"25-\u5feb\u6162\u6307\u9488",children:"2.5 \u5feb\u6162\u6307\u9488"})}),"\n",(0,i.jsx)(t.h2,{id:"142-linked-list-cycle-ii",children:(0,i.jsx)(t.a,{href:"https://leetcode.com/problems/linked-list-cycle-ii/",children:"142. Linked List Cycle II"})}),"\n",(0,i.jsx)(t.h3,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,i.jsx)(t.p,{children:"\u7ed9\u5b9a\u4e00\u4e2a\u94fe\u8868\uff0c\u5982\u679c\u6709\u73af\u8def\uff0c\u627e\u51fa\u73af\u8def\u7684\u5f00\u59cb\u70b9\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",children:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b"}),"\n",(0,i.jsxs)(t.p,{children:["\u8f93\u5165\u662f\u4e00\u4e2a\u94fe\u8868\uff0c\u8f93\u51fa\u662f\u94fe\u8868\u7684\u4e00\u4e2a\u8282\u70b9\u3002\u5982\u679c\u6ca1\u6709\u73af\u8def\uff0c\u8fd4\u56de\u4e00\u4e2a\u7a7a\u6307\u9488\u3002",(0,i.jsx)(t.br,{}),"\n","\u5728\u8fd9\u4e2a\u6837\u4f8b\u4e2d\uff0c\u503c\u4e3a 2 \u7684\u8282\u70b9\u5373\u4e3a\u73af\u8def\u7684\u5f00\u59cb\u70b9\u3002",(0,i.jsx)(t.br,{}),"\n","\u5982\u679c\u6ca1\u6709\u7279\u6b8a\u8bf4\u660e\uff0cLeetCode \u91c7\u7528\u5982\u4e0b\u7684\u6570\u636e\u7ed3\u6784\u8868\u793a\u94fe\u8868\u3002"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png",alt:"alt"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:"struct ListNode {\n    int val;\n    ListNode *next;\n    ListNode(int x) : val(x), next(nullptr) {}\n};\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-py",children:"class ListNode:\n    def __init__(self, x):\n        self.val = x\n        self.next = None # or a ListNode\n"})}),"\n",(0,i.jsx)(t.h3,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,i.jsx)(t.p,{children:"\u5bf9\u4e8e\u94fe\u8868\u627e\u73af\u8def\u7684\u95ee\u9898\uff0c\u6709\u4e00\u4e2a\u901a\u7528\u7684\u89e3\u6cd5\u2014\u2014\u5feb\u6162\u6307\u9488\uff08Floyd \u5224\u5708\u6cd5\uff09\u3002\u7ed9\u5b9a\u4e24\u4e2a\u6307\u9488\uff0c\u5206\u522b\u547d\u540d\u4e3a slow \u548c fast\uff0c\u8d77\u59cb\u4f4d\u7f6e\u5728\u94fe\u8868\u7684\u5f00\u5934\u3002\u6bcf\u6b21 fast \u524d\u8fdb\u4e24\u6b65\uff0cslow \u524d\u8fdb\u4e00\u6b65\u3002\u5982\u679c fast\n\u53ef\u4ee5\u8d70\u5230\u5c3d\u5934\uff0c\u90a3\u4e48\u8bf4\u660e\u6ca1\u6709\u73af\u8def\uff1b\u5982\u679c fast \u53ef\u4ee5\u65e0\u9650\u8d70\u4e0b\u53bb\uff0c\u90a3\u4e48\u8bf4\u660e\u4e00\u5b9a\u6709\u73af\u8def\uff0c\u4e14\u4e00\u5b9a\u5b58\u5728\u4e00\u4e2a\u65f6\u523b slow \u548c fast \u76f8\u9047\u3002\u5f53 slow \u548c fast \u7b2c\u4e00\u6b21\u76f8\u9047\u65f6\uff0c\u6211\u4eec\u5c06 fast \u91cd\u65b0\u79fb\u52a8\u5230\u94fe\u8868\u5f00\u5934\uff0c\u5e76\n\u8ba9 slow \u548c fast \u6bcf\u6b21\u90fd\u524d\u8fdb\u4e00\u6b65\u3002\u5f53 slow \u548c fast \u7b2c\u4e8c\u6b21\u76f8\u9047\u65f6\uff0c\u76f8\u9047\u7684\u8282\u70b9\u5373\u4e3a\u73af\u8def\u7684\u5f00\u59cb\u70b9\u3002"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"\u5bf9\u4e8e\u67d0\u4e9b\u53ea\u9700\u8981\u5224\u65ad\u662f\u5426\u5b58\u5728\u73af\u8def\u7684\u9898\u76ee\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5efa\u9020\u54c8\u5e0c\u8868\u6765\u67e5\u91cd\u3002"})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)(n,{value:"cpp",label:"C++",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:"ListNode *detectCycle(ListNode *head) {\n    ListNode *slow = head, *fast = head;\n    bool is_first_cycle = true;\n    // \u68c0\u67e5\u73af\u8def\u3002\n    while (fast != slow || is_first_cycle) {\n        if (fast == nullptr || fast->next == nullptr) {\n            return nullptr;\n        }\n        fast = fast->next->next;\n        slow = slow->next;\n        is_first_cycle = false;\n    }\n    // \u5bfb\u627e\u8282\u70b9\u3002\n    fast = head;\n    while (fast != slow) {\n        slow = slow->next;\n        fast = fast->next;\n    }\n    return fast;\n}\n"})})}),(0,i.jsx)(n,{value:"py",label:"Python",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-py",children:"def detectCycle(head: Optional[ListNode]) -> Optional[ListNode]:\n    slow = head\n    fast = head\n    is_first_cycle = True\n    # \u68c0\u67e5\u73af\u8def\u3002\n    while fast != slow or is_first_cycle:\n        if fast is None or fast.next is None:\n            return None\n        fast = fast.next.next\n        slow = slow.next\n        is_first_cycle = False\n    # \u5bfb\u627e\u8282\u70b9\u3002\n    fast = head\n    while fast != slow:\n        fast = fast.next\n        slow = slow.next\n    return fast\n"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);