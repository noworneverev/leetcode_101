"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[7821],{9305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"linked-lists/12-1-data-structure-introduction","title":"12.1 \u6570\u636e\u7ed3\u6784\u4ecb\u7ecd","description":"\uff08\u5355\u5411\uff09\u94fe\u8868\u662f\u7531\u8282\u70b9\u548c\u6307\u9488\u6784\u6210\u7684\u6570\u636e\u7ed3\u6784\uff0c\u6bcf\u4e2a\u8282\u70b9\u5b58\u6709\u4e00\u4e2a\u503c\uff0c\u548c\u4e00\u4e2a\u6307\u5411\u4e0b\u4e00\u4e2a\u8282\u70b9\u7684\u6307\u9488\uff0c\u56e0\u6b64\u5f88\u591a\u94fe\u8868\u95ee\u9898\u53ef\u4ee5\u7528\u9012\u5f52\u6765\u5904\u7406\u3002\u4e0d\u540c\u4e8e\u6570\u7ec4\uff0c\u94fe\u8868\u5e76\u4e0d\u80fd\u76f4\u63a5\u83b7\u53d6\u4efb\u610f\u8282\u70b9\u7684\u503c\uff0c\u5fc5\u987b\u8981\u901a\u8fc7\u6307\u9488\u627e\u5230\u8be5\u8282\u70b9\u540e\u624d\u80fd\u83b7\u53d6\u5176\u503c\u3002\u540c\u7406\uff0c\u5728\u672a\u904d\u5386\u5230\u94fe\u8868\u7ed3\u5c3e\u65f6\uff0c\u6211\u4eec\u4e5f\u65e0\u6cd5\u77e5\u9053\u94fe\u8868\u7684\u957f\u5ea6\uff0c\u9664\u975e\u4f9d\u8d56\u5176\u4ed6\u6570\u636e\u7ed3\u6784\u50a8\u5b58\u957f\u5ea6\u3002LeetCode \u9ed8\u8ba4\u7684\u94fe\u8868\u8868\u793a\u65b9\u6cd5\u5982\u4e0b\u3002","source":"@site/docs/12-linked-lists/12-1-data-structure-introduction.md","sourceDirName":"12-linked-lists","slug":"/linked-lists/12-1-data-structure-introduction","permalink":"/leetcode_101/linked-lists/12-1-data-structure-introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/noworneverev/leetcode_101/tree/master/leetcode_101/docs/12-linked-lists/12-1-data-structure-introduction.md","tags":[],"version":"current","sidebarPosition":64,"frontMatter":{"sidebar_position":64},"sidebar":"tutorialSidebar","previous":{"title":"12. \u6307\u9488\u4e09\u5251\u5ba2\u4e4b\u4e00\uff1a\u94fe\u8868","permalink":"/leetcode_101/category/12-\u6307\u9488\u4e09\u5251\u5ba2\u4e4b\u4e00\u94fe\u8868"},"next":{"title":"12.2 \u94fe\u8868\u7684\u57fa\u672c\u64cd\u4f5c","permalink":"/leetcode_101/linked-lists/12-2-basic-linked-list-operations"}}');var s=n(4848),r=n(8453);const o={sidebar_position:64},d="12.1 \u6570\u636e\u7ed3\u6784\u4ecb\u7ecd",l={},a=[];function c(e){const t={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components},{TabItem:n,Tabs:i}=t;return n||p("TabItem",!0),i||p("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"121-\u6570\u636e\u7ed3\u6784\u4ecb\u7ecd",children:"12.1 \u6570\u636e\u7ed3\u6784\u4ecb\u7ecd"})}),"\n",(0,s.jsxs)(t.p,{children:["\uff08\u5355\u5411\uff09",(0,s.jsx)(t.code,{children:"\u94fe\u8868"}),"\u662f\u7531\u8282\u70b9\u548c\u6307\u9488\u6784\u6210\u7684\u6570\u636e\u7ed3\u6784\uff0c\u6bcf\u4e2a\u8282\u70b9\u5b58\u6709\u4e00\u4e2a\u503c\uff0c\u548c\u4e00\u4e2a\u6307\u5411\u4e0b\u4e00\u4e2a\u8282\u70b9\u7684\u6307\u9488\uff0c\u56e0\u6b64\u5f88\u591a\u94fe\u8868\u95ee\u9898\u53ef\u4ee5\u7528\u9012\u5f52\u6765\u5904\u7406\u3002\u4e0d\u540c\u4e8e\u6570\u7ec4\uff0c\u94fe\u8868\u5e76\u4e0d\u80fd\u76f4\u63a5\u83b7\u53d6\u4efb\u610f\u8282\u70b9\u7684\u503c\uff0c\u5fc5\u987b\u8981\u901a\u8fc7\u6307\u9488\u627e\u5230\u8be5\u8282\u70b9\u540e\u624d\u80fd\u83b7\u53d6\u5176\u503c\u3002\u540c\u7406\uff0c\u5728\u672a\u904d\u5386\u5230\u94fe\u8868\u7ed3\u5c3e\u65f6\uff0c\u6211\u4eec\u4e5f\u65e0\u6cd5\u77e5\u9053\u94fe\u8868\u7684\u957f\u5ea6\uff0c\u9664\u975e\u4f9d\u8d56\u5176\u4ed6\u6570\u636e\u7ed3\u6784\u50a8\u5b58\u957f\u5ea6\u3002LeetCode \u9ed8\u8ba4\u7684\u94fe\u8868\u8868\u793a\u65b9\u6cd5\u5982\u4e0b\u3002"]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)(n,{value:"cpp",label:"C++",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"struct ListNode {\n    int val;\n    ListNode *next;\n    ListNode(int x) : val(x), next(nullptr) {}\n};\n"})})}),(0,s.jsx)(n,{value:"py",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-py",children:"class ListNode:\n    def __init__(self, x):\n        self.val = x\n        self.next = None # or a ListNode\n"})})})]}),"\n",(0,s.jsx)(t.p,{children:"\u7531\u4e8e\u5728\u8fdb\u884c\u94fe\u8868\u64cd\u4f5c\u65f6\uff0c\u5c24\u5176\u662f\u5220\u9664\u8282\u70b9\u65f6\uff0c\u7ecf\u5e38\u4f1a\u56e0\u4e3a\u5bf9\u5f53\u524d\u8282\u70b9\u8fdb\u884c\u64cd\u4f5c\u800c\u5bfc\u81f4\u5185\u5b58\u6216\u6307\u9488\u51fa\u73b0\u95ee\u9898\u3002\u6709\u4e24\u4e2a\u5c0f\u6280\u5de7\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff1a\u4e00\u662f\u5c3d\u91cf\u5904\u7406\u5f53\u524d\u8282\u70b9\u7684\u4e0b\u4e00\u4e2a\u8282\u70b9\u800c\u975e\u5f53\u524d\u8282\u70b9\u672c\u8eab\uff0c\u4e8c\u662f\u5efa\u7acb\u4e00\u4e2a\u865a\u62df\u8282\u70b9 (dummy node)\uff0c\u4f7f\u5176\u6307\u5411\u5f53\u524d\u94fe\u8868\u7684\u5934\u8282\u70b9\uff0c\u8fd9\u6837\u5373\u4f7f\u539f\u94fe\u8868\u6240\u6709\u8282\u70b9\u5168\u88ab\u5220\u9664\uff0c\u4e5f\u4f1a\u6709\u4e00\u4e2a dummy \u5b58\u5728\uff0c\u8fd4\u56de dummy->next \u5373\u53ef\u3002"}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"\u4e00\u822c\u6765\u8bf4\uff0c\u7b97\u6cd5\u9898\u4e0d\u9700\u8981\u5220\u9664\u5185\u5b58\u3002\u5728\u5237 LeetCode \u7684\u65f6\u5019\uff0c\u5982\u679c\u60f3\u8981\u5220\u9664\u4e00\u4e2a\u8282\u70b9\uff0c\u53ef\u4ee5\u76f4\u63a5\u8fdb\u884c\u6307\u9488\u64cd\u4f5c\u800c\u65e0\u9700\u56de\u6536\u5185\u5b58\u3002\u5b9e\u9645\u505a\u8f6f\u4ef6\u5de5\u7a0b\u65f6\uff0c\u5bf9\u4e8e\u65e0\u7528\u7684\u5185\u5b58\uff0c\u7b14\u8005\u5efa\u8bae\u5c3d\u91cf\u663e\u5f0f\u56de\u6536\uff0c\u6216\u5229\u7528\u667a\u80fd\u6307\u9488\u3002"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);