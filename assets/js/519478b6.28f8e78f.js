"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[3151],{5685:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"mathematical-solutions/8-3-prime-numbers","title":"8.3 \u8d28\u6570","description":"\u8d28\u6570\u53c8\u79f0\u7d20\u6570\uff0c\u6307\u7684\u662f\u6307\u5728\u5927\u4e8e 1 \u7684\u81ea\u7136\u6570\u4e2d\uff0c\u9664\u4e86 1 \u548c\u5b83\u672c\u8eab\u4ee5\u5916\u4e0d\u518d\u6709\u5176\u4ed6\u56e0\u6570\u7684\u81ea\u7136\u6570\u3002\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u6bcf\u4e00\u4e2a\u6570\u90fd\u53ef\u4ee5\u5206\u89e3\u6210\u8d28\u6570\u7684\u4e58\u79ef\u3002","source":"@site/docs/8-mathematical-solutions/8-3-prime-numbers.mdx","sourceDirName":"8-mathematical-solutions","slug":"/mathematical-solutions/8-3-prime-numbers","permalink":"/leetcode_101/mathematical-solutions/8-3-prime-numbers","draft":false,"unlisted":false,"editUrl":"https://github.com/noworneverev/leetcode_101/tree/master/leetcode_101/docs/8-mathematical-solutions/8-3-prime-numbers.mdx","tags":[],"version":"current","sidebarPosition":40,"frontMatter":{"sidebar_position":40},"sidebar":"tutorialSidebar","previous":{"title":"8.2 \u516c\u500d\u6570\u4e0e\u516c\u56e0\u6570","permalink":"/leetcode_101/mathematical-solutions/8-2-lcm-gcd"},"next":{"title":"8.4 \u6570\u5b57\u5904\u7406","permalink":"/leetcode_101/mathematical-solutions/8-4-number-processing"}}');var t=i(4848),s=i(8453);const o={sidebar_position:40},l="8.3 \u8d28\u6570",c={},a=[{value:"204. Count Primes",id:"204-count-primes",level:2},{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:3},{value:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:3}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...n.components},{TabItem:i,Tabs:r}=e;return i||m("TabItem",!0),r||m("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"83-\u8d28\u6570",children:"8.3 \u8d28\u6570"})}),"\n",(0,t.jsx)(e.p,{children:"\u8d28\u6570\u53c8\u79f0\u7d20\u6570\uff0c\u6307\u7684\u662f\u6307\u5728\u5927\u4e8e 1 \u7684\u81ea\u7136\u6570\u4e2d\uff0c\u9664\u4e86 1 \u548c\u5b83\u672c\u8eab\u4ee5\u5916\u4e0d\u518d\u6709\u5176\u4ed6\u56e0\u6570\u7684\u81ea\u7136\u6570\u3002\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u6bcf\u4e00\u4e2a\u6570\u90fd\u53ef\u4ee5\u5206\u89e3\u6210\u8d28\u6570\u7684\u4e58\u79ef\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"204-count-primes",children:(0,t.jsx)(e.a,{href:"https://leetcode.com/problems/count-primes/",children:"204. Count Primes"})}),"\n",(0,t.jsx)(e.h3,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,t.jsx)(e.p,{children:"\u7ed9\u5b9a\u4e00\u4e2a\u6570\u5b57 n\uff0c\u6c42\u5c0f\u4e8e n \u7684\u8d28\u6570\u7684\u4e2a\u6570\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",children:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b"}),"\n",(0,t.jsx)(e.p,{children:"\u8f93\u5165\u4e00\u4e2a\u6574\u6570\uff0c\u8f93\u51fa\u4e5f\u662f\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u5c0f\u4e8e\u8f93\u5165\u6570\u7684\u8d28\u6570\u7684\u4e2a\u6570\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Input: 10\nOutput: 4\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u8fd9\u4e2a\u6837\u4f8b\u4e2d\uff0c\u5c0f\u4e8e 10 \u7684\u8d28\u6570\u53ea\u6709 [2,3,5,7]\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"\u57c3\u62c9\u6258\u65af\u7279\u5c3c\u7b5b\u6cd5"}),"\uff08Sieve of Eratosthenes\uff0c\u7b80\u79f0\u57c3\u6c0f\u7b5b\u6cd5\uff09\u662f\u975e\u5e38\u5e38\u7528\u7684\uff0c\u5224\u65ad\u4e00\u4e2a\u6574\u6570\u662f\u5426\u662f\u8d28\u6570\u7684\u65b9\u6cd5\u3002\u5e76\u4e14\u5b83\u53ef\u4ee5\u5728\u5224\u65ad\u4e00\u4e2a\u6574\u6570 n \u65f6\uff0c\u540c\u65f6\u5224\u65ad\u6240\u5c0f\u4e8e n \u7684\u6574\u6570\uff0c\u56e0\u6b64\u975e\u5e38\u9002\u5408\u8fd9\u9053\u9898\u3002\u5176\u539f\u7406\u4e5f\u5341\u5206\u6613\u61c2\uff1a\u4ece 1 \u5230 n \u904d\u5386\uff0c\u5047\u8bbe\u5f53\u524d\u904d\u5386\u5230 m\uff0c\u5219\u628a\u6240\u6709\u5c0f\u4e8e n \u7684\u3001\u4e14\u662f m \u7684\u500d\u6570\u7684\u6574\u6570\u6807\u4e3a\u548c\u6570\uff1b\u904d\u5386\u5b8c\u6210\u540e\uff0c\u6ca1\u6709\u88ab\u6807\u4e3a\u548c\u6570\u7684\u6570\u5b57\u5373\u4e3a\u8d28\u6570\u3002"]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)(i,{value:"cpp",label:"C++",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"int countPrimes(int n) {\n    if (n <= 2) {\n        return 0;\n    }\n    vector<bool> primes(n, true);\n    int count = n - 2;  // \u53bb\u6389\u4e0d\u662f\u8d28\u6570\u76841\n    for (int i = 2; i < n; ++i) {\n        if (primes[i]) {\n            for (int j = 2 * i; j < n; j += i) {\n                if (primes[j]) {\n                    primes[j] = false;\n                    --count;\n                }\n            }\n        }\n    }\n    return count;\n}\n"})})}),(0,t.jsx)(i,{value:"py",label:"Python",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-py",children:"def countPrimes(n: int) -> int:\n    if n <= 2:\n        return 0\n    primes = [True for _ in range(n)]\n    count = n - 2 # \u53bb\u6389\u4e0d\u662f\u8d28\u6570\u76841\n    for i in range(2, n):\n        if primes[i]:\n            for j in range(2 * i, n, i):\n                if primes[j]:\n                    primes[j] = False\n                    count -= 1\n    return count\n"})})})]}),"\n",(0,t.jsx)(e.p,{children:"\u5229\u7528\u8d28\u6570\u7684\u4e00\u4e9b\u6027\u8d28\uff0c\u6211\u4eec\u53ef\u4ee5\u8fdb\u4e00\u6b65\u4f18\u5316\u8be5\u7b97\u6cd5\u3002"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)(i,{value:"cpp",label:"C++",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"int countPrimes(int n) {\n    if (n <= 2) {\n        return 0;\n    }\n    vector<bool> primes(n, true);\n    int sqrtn = sqrt(n);\n    int count = n / 2;  // \u5076\u6570\u4e00\u5b9a\u4e0d\u662f\u8d28\u6570\n    int i = 3;\n    // \u6700\u5c0f\u8d28\u56e0\u5b50\u4e00\u5b9a\u5c0f\u4e8e\u7b49\u4e8e\u5f00\u65b9\u6570\u3002\n    while (i <= sqrtn) {\n        // \u5411\u53f3\u627e\u500d\u6570\uff0c\u6ce8\u610f\u907f\u514d\u5076\u6570\u548c\u91cd\u590d\u904d\u5386\u3002\n        for (int j = i * i; j < n; j += 2 * i) {\n            if (primes[j]) {\n                --count;\n                primes[j] = false;\n            }\n        }\n        i += 2;\n        // \u5411\u53f3\u524d\u8fdb\u67e5\u627e\u4f4d\u7f6e\uff0c\u6ce8\u610f\u907f\u514d\u5076\u6570\u548c\u91cd\u590d\u904d\u5386\u3002\n        while (i <= sqrtn && !primes[i]) {\n            i += 2;\n        }\n    }\n    return count;\n}\n"})})}),(0,t.jsx)(i,{value:"py",label:"Python",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-py",children:"def countPrimes(n: int) -> int:\n    if n <= 2:\n        return 0\n    primes = [True for _ in range(n)]\n    sqrtn = sqrt(n)\n    count = n // 2 # \u5076\u6570\u4e00\u5b9a\u4e0d\u662f\u8d28\u6570\n    i = 3\n    # \u6700\u5c0f\u8d28\u56e0\u5b50\u4e00\u5b9a\u5c0f\u4e8e\u7b49\u4e8e\u5f00\u65b9\u6570\u3002\n    while i <= sqrtn:\n        # \u5411\u53f3\u627e\u500d\u6570\uff0c\u6ce8\u610f\u907f\u514d\u5076\u6570\u548c\u91cd\u590d\u904d\u5386\u3002\n        for j in range(i * i, n, 2 * i):\n            if primes[j]:\n                count -= 1\n                primes[j] = False\n        i += 2\n        # \u5411\u53f3\u524d\u8fdb\u67e5\u627e\u4f4d\u7f6e\uff0c\u6ce8\u610f\u907f\u514d\u5076\u6570\u548c\u91cd\u590d\u904d\u5386\u3002\n        while i <= sqrtn and not primes[i]:\n            i += 2\n    return count\n"})})})]})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}function m(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);