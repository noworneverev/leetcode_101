"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[10],{502:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"string-manipulation/11-4-string-matching","title":"11.4 \u5b57\u4e32\u5339\u914d","description":"28. Implement strStr()","source":"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/11-string-manipulation/11-4-string-matching.mdx","sourceDirName":"11-string-manipulation","slug":"/string-manipulation/11-4-string-matching","permalink":"/leetcode_101/zh-TW/string-manipulation/11-4-string-matching","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":62,"frontMatter":{"sidebar_position":62},"sidebar":"tutorialSidebar","previous":{"title":"11.3 \u5b57\u4e32\u89e3\u6790","permalink":"/leetcode_101/zh-TW/string-manipulation/11-3-string-interpretation"},"next":{"title":"11.5 \u7df4\u7fd2","permalink":"/leetcode_101/zh-TW/string-manipulation/11-5-exercises"}}');var i=s(4848),a=s(8453);const r={sidebar_position:62},l="11.4 \u5b57\u4e32\u5339\u914d",c={},d=[{value:"28. Implement strStr()",id:"28-implement-strstr",level:2},{value:"\u984c\u76ee\u63cf\u8ff0",id:"\u984c\u76ee\u63cf\u8ff0",level:3},{value:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b",id:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b",level:3},{value:"\u984c\u89e3",id:"\u984c\u89e3",level:3}];function h(e){const n={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,a.R)(),...e.components},{TabItem:s,Tabs:t}=n;return s||m("TabItem",!0),t||m("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"114-\u5b57\u4e32\u5339\u914d",children:"11.4 \u5b57\u4e32\u5339\u914d"})}),"\n",(0,i.jsx)(n.h2,{id:"28-implement-strstr",children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",children:"28. Implement strStr()"})}),"\n",(0,i.jsx)(n.h3,{id:"\u984c\u76ee\u63cf\u8ff0",children:"\u984c\u76ee\u63cf\u8ff0"}),"\n",(0,i.jsx)(n.p,{children:"\u5224\u65b7\u4e00\u500b\u5b57\u4e32\u662f\u5426\u70ba\u53e6\u4e00\u500b\u5b57\u4e32\u7684\u5b50\u5b57\u4e32\uff0c\u4e26\u8fd4\u56de\u5176\u4f4d\u7f6e\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b",children:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b"}),"\n",(0,i.jsx)(n.p,{children:"\u8f38\u5165\u4e00\u500b\u6bcd\u5b57\u4e32\u548c\u4e00\u500b\u5b50\u5b57\u4e32\uff0c\u8f38\u51fa\u4e00\u500b\u6574\u6578\uff0c\u8868\u793a\u5b50\u5b57\u4e32\u5728\u6bcd\u5b57\u4e32\u4e2d\u7684\u4f4d\u7f6e\uff0c\u82e5\u4e0d\u5b58\u5728\u5247\u8fd4\u56de -1\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Input: haystack = "hello", needle = "ll"\nOutput: 2\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u984c\u89e3",children:"\u984c\u89e3"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528\u8457\u540d\u7684 Knuth-Morris-Pratt\uff08KMP\uff09\u6f14\u7b97\u6cd5\uff0c\u53ef\u4ee5\u5728 ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsxs)(n.mrow,{children:[(0,i.jsx)(n.mi,{children:"O"}),(0,i.jsx)(n.mo,{stretchy:"false",children:"("}),(0,i.jsx)(n.mi,{children:"m"}),(0,i.jsx)(n.mo,{children:"+"}),(0,i.jsx)(n.mi,{children:"n"}),(0,i.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(m + n)"})]})})}),(0,i.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(n.span,{className:"mopen",children:"("}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(n.span,{className:"mbin",children:"+"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(n.span,{className:"mclose",children:")"})]})]})]})," \u6642\u9593\u5167\u5229\u7528\u52d5\u614b\u898f\u5283\u5b8c\u6210\u5339\u914d\u3002\u9019\u88e1\u6211\u5011\u5b9a\u7fa9 ",(0,i.jsx)(n.code,{children:"dp"})," \u9663\u5217\u70ba\uff0c",(0,i.jsx)(n.code,{children:"dp[i]"})," \u8868\u793a ",(0,i.jsx)(n.code,{children:"needle"})," \u4e2d\u4ee5\u4f4d\u7f6e ",(0,i.jsx)(n.code,{children:"i"})," \u7d50\u5c3e\u7684\u7247\u6bb5\uff08\u5373\u5f8c\u7db4\uff09\uff0c\u6700\u9577\u53ef\u4ee5\u5339\u914d\u5230 ",(0,i.jsx)(n.code,{children:"needle"})," \u7684\u8d77\u59cb\u4f4d\u7f6e\uff08\u5373\u524d\u7db4\uff09\u3002\u4f8b\u5982\uff0c\u5c0d\u65bc ",(0,i.jsx)(n.code,{children:'needle = "ababaca"'}),"\uff0c",(0,i.jsx)(n.code,{children:"dp"})," \u9663\u5217\u70ba ",(0,i.jsx)(n.code,{children:"[-1, -1, 0, 1, 2, -1, 0]"}),"\uff0c\u8868\u793a\u6bcf\u500b\u4f4d\u7f6e\u7684\u6700\u5927\u5339\u914d [\u7121, \u7121, a, ab, aba, \u7121, a]\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u9019\u9053\u984c\u6bd4\u8f03\u8907\u96dc\uff0c\u521d\u5b78\u8005\u53ef\u4ee5\u66ab\u6642\u8df3\u904e\u3002"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)(s,{value:"cpp",label:"C++",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"// \u8f14\u52a9\u51fd\u5f0f\u3002\nvector<int> computeDp(const string &needle) {\n    int n = needle.length();\n    vector<int> dp(n, -1);\n    for (int j = 1, k = -1; j < n; ++j) {\n        while (k > -1 && needle[k + 1] != needle[j]) {\n            k = dp[k];  // \u5982\u679c\u4e0b\u4e00\u4f4d\u4e0d\u540c\uff0c\u56de\u6eaf\u5230\u524d\u4e00\u500b\u524d\u7db4\u7247\u6bb5\n        }\n        if (needle[k + 1] == needle[j]) {\n            ++k;  // \u524d\u7db4\u548c\u5f8c\u7db4\u7247\u6bb5\u76f8\u540c\uff0c\u5339\u914d\u9577\u5ea6\u52a0 1\n        }\n        dp[j] = k;  // \u66f4\u65b0\u524d\u7db4\u5339\u914d\u4f4d\u7f6e\n    }\n    return dp;\n}\n// \u4e3b\u51fd\u5f0f\u3002\nint strStr(const string &haystack, const string &needle) {\n    int m = haystack.length(), n = needle.length();\n    vector<int> dp = computeDp(needle);\n    for (int i = 0, k = -1; i < m; ++i) {\n        while (k > -1 && needle[k + 1] != haystack[i]) {\n            k = dp[k];  // \u5982\u679c\u4e0b\u4e00\u4f4d\u4e0d\u540c\uff0c\u56de\u6eaf\u5230\u524d\u4e00\u500b\u76f8\u540c\u7247\u6bb5\n        }\n        if (needle[k + 1] == haystack[i]) {\n            ++k;  // \u7247\u6bb5\u76f8\u540c\uff0c\u5339\u914d\u9577\u5ea6\u52a0 1\n        }\n        if (k == n - 1) {\n            return i - n + 1;  // \u5339\u914d\u5b8c\u6210\n        }\n    }\n    return -1;\n}\n"})})}),(0,i.jsx)(s,{value:"py",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"from typing import List\n\n# \u8f14\u52a9\u51fd\u5f0f\u3002\ndef computeDp(needle: str) -> List[int]:\n    n = len(needle)\n    dp = [-1] * n\n    k = -1\n    for j in range(1, n):\n        while k > -1 and needle[k + 1] != needle[j]:\n            k = dp[k]  # \u5982\u679c\u4e0b\u4e00\u4f4d\u4e0d\u540c\uff0c\u56de\u6eaf\u5230\u524d\u4e00\u500b\u524d\u7db4\u7247\u6bb5\n        if needle[k + 1] == needle[j]:\n            k += 1  # \u524d\u7db4\u548c\u5f8c\u7db4\u7247\u6bb5\u76f8\u540c\uff0c\u5339\u914d\u9577\u5ea6\u52a0 1\n        dp[j] = k  # \u66f4\u65b0\u524d\u7db4\u5339\u914d\u4f4d\u7f6e\n    return dp\n\n# \u4e3b\u51fd\u5f0f\u3002\ndef strStr(haystack: str, needle: str) -> int:\n    m, n = len(haystack), len(needle)\n    if n == 0:\n        return 0  # Edge case for an empty needle\n    \n    dp = computeDp(needle)\n    k = -1\n    for i in range(m):\n        while k > -1 and needle[k + 1] != haystack[i]:\n            k = dp[k]  # \u5982\u679c\u4e0b\u4e00\u4f4d\u4e0d\u540c\uff0c\u56de\u6eaf\u5230\u524d\u4e00\u500b\u76f8\u540c\u7247\u6bb5\n        if needle[k + 1] == haystack[i]:\n            k += 1  # \u7247\u6bb5\u76f8\u540c\uff0c\u5339\u914d\u9577\u5ea6\u52a0 1\n        if k == n - 1:\n            return i - n + 1  # \u5339\u914d\u5b8c\u6210\n    return -1\n\n"})})})]})]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);