"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[9930],{6386:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"dynamic-programming/6-6-knapsack-problem","title":"6.6 \u80cc\u5305\u95ee\u9898","description":"\u80cc\u5305\u95ee\u9898\uff08knapsack problem\uff09\u662f\u4e00\u79cd\u7ec4\u5408\u4f18\u5316\u7684 NP \u5b8c\u5168\u95ee\u9898\uff1a\u6709 n \u4e2a\u7269\u54c1\u548c\u8f7d\u91cd\u4e3a w \u7684\u80cc\u5305\uff0c\u6bcf\u4e2a\u7269\u54c1\u90fd\u6709\u81ea\u5df1\u7684\u91cd\u91cf weight \u548c\u4ef7\u503c value\uff0c\u6c42\u62ff\u54ea\u4e9b\u7269\u54c1\u53ef\u4ee5\u4f7f\u5f97\u80cc\u5305\u6240\u88c5\u4e0b\u7269\u54c1\u7684\u603b\u4ef7\u503c\u6700\u5927\u3002\u5982\u679c\u9650\u5b9a\u6bcf\u79cd\u7269\u54c1\u53ea\u80fd\u9009\u62e9 0 \u4e2a\u6216 1 \u4e2a\uff0c\u5219\u95ee\u9898\u79f0\u4e3a 0-1 \u80cc\u5305\u95ee\u9898\uff080-1 knapsack\uff09\uff1b\u5982\u679c\u4e0d\u9650\u5b9a\u6bcf\u79cd\u7269\u54c1\u7684\u6570\u91cf\uff0c\u5219\u95ee\u9898\u79f0\u4e3a\u65e0\u754c\u80cc\u5305\u95ee\u9898\u6216\u5b8c\u5168\u80cc\u5305\u95ee\u9898\uff08unbounded knapsack\uff09\u3002","source":"@site/docs/6-dynamic-programming/6-6-knapsack-problem.mdx","sourceDirName":"6-dynamic-programming","slug":"/dynamic-programming/6-6-knapsack-problem","permalink":"/leetcode_101/zh-TW/dynamic-programming/6-6-knapsack-problem","draft":false,"unlisted":false,"editUrl":"https://github.com/noworneverev/leetcode_101/tree/master/leetcode_101/docs/6-dynamic-programming/6-6-knapsack-problem.mdx","tags":[],"version":"current","sidebarPosition":31,"frontMatter":{"sidebar_position":31},"sidebar":"tutorialSidebar","previous":{"title":"6.5 \u5b50\u5e8f\u5217\u95ee\u9898","permalink":"/leetcode_101/zh-TW/dynamic-programming/6-5-subsequence-problems"},"next":{"title":"6.7 \u5b57\u7b26\u4e32\u7f16\u8f91","permalink":"/leetcode_101/zh-TW/dynamic-programming/6-7-string-editing"}}');var a=s(4848),t=s(8453);const r={sidebar_position:31},l="6.6 \u80cc\u5305\u95ee\u9898",d={},c=[{value:"416. Partition Equal Subset Sum",id:"416-partition-equal-subset-sum",level:2},{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:3},{value:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:3},{value:"474. Ones and Zeroes",id:"474-ones-and-zeroes",level:2},{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0-1",level:3},{value:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b-1",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3-1",level:3},{value:"322. Coin Change",id:"322-coin-change",level:2},{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0-2",level:3},{value:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b-2",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3-2",level:3}];function h(n){const e={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,t.R)(),...n.components},{TabItem:i,Tabs:r}=e;return i||p("TabItem",!0),r||p("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"66-\u80cc\u5305\u95ee\u9898",children:"6.6 \u80cc\u5305\u95ee\u9898"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"\u80cc\u5305\u95ee\u9898\uff08knapsack problem\uff09"}),"\u662f\u4e00\u79cd\u7ec4\u5408\u4f18\u5316\u7684 NP \u5b8c\u5168\u95ee\u9898\uff1a\u6709 n \u4e2a\u7269\u54c1\u548c\u8f7d\u91cd\u4e3a w \u7684\u80cc\u5305\uff0c\u6bcf\u4e2a\u7269\u54c1\u90fd\u6709\u81ea\u5df1\u7684\u91cd\u91cf weight \u548c\u4ef7\u503c value\uff0c\u6c42\u62ff\u54ea\u4e9b\u7269\u54c1\u53ef\u4ee5\u4f7f\u5f97\u80cc\u5305\u6240\u88c5\u4e0b\u7269\u54c1\u7684\u603b\u4ef7\u503c\u6700\u5927\u3002\u5982\u679c\u9650\u5b9a\u6bcf\u79cd\u7269\u54c1\u53ea\u80fd\u9009\u62e9 0 \u4e2a\u6216 1 \u4e2a\uff0c\u5219\u95ee\u9898\u79f0\u4e3a ",(0,a.jsx)(e.code,{children:"0-1 \u80cc\u5305\u95ee\u9898\uff080-1 knapsack\uff09"}),"\uff1b\u5982\u679c\u4e0d\u9650\u5b9a\u6bcf\u79cd\u7269\u54c1\u7684\u6570\u91cf\uff0c\u5219\u95ee\u9898\u79f0\u4e3a",(0,a.jsx)(e.code,{children:"\u65e0\u754c\u80cc\u5305\u95ee\u9898\u6216\u5b8c\u5168\u80cc\u5305\u95ee\u9898\uff08unbounded knapsack\uff09"}),"\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u6211\u4eec\u53ef\u4ee5\u7528\u52a8\u6001\u89c4\u5212\u6765\u89e3\u51b3\u80cc\u5305\u95ee\u9898\u3002\u4ee5 0-1 \u80cc\u5305\u95ee\u9898\u4e3a\u4f8b\u3002\u6211\u4eec\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u4e8c\u7ef4\u6570\u7ec4 dp\u5b58\u50a8\u6700\u5927\u4ef7\u503c\uff0c\u5176\u4e2d dp[i][j] \u8868\u793a\u524d i \u4ef6\u7269\u54c1\u91cd\u91cf\u4e0d\u8d85\u8fc7 j \u7684\u60c5\u51b5\u4e0b\u80fd\u8fbe\u5230\u7684\u6700\u5927\u4ef7\u503c\u3002\u5728\u6211\u4eec\u904d\u5386\u5230\u7b2c i \u4ef6\u7269\u54c1\u65f6\uff0c\u5728\u5f53\u524d\u80cc\u5305\u603b\u8f7d\u91cd\u4e3a j \u7684\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u6211\u4eec\u4e0d\u5c06\u7269\u54c1 i \u653e\u5165\u80cc\u5305\uff0c\u90a3\u4e48 dp[i][j] = dp[i-1][j]\uff0c\u5373\u524d i \u4e2a\u7269\u54c1\u7684\u6700\u5927\u4ef7\u503c\u7b49\u4e8e\u53ea\u53d6\u524d i-1 \u4e2a\u7269\u54c1\u65f6\u7684\u6700\u5927\u4ef7\u503c\uff1b\u5982\u679c\u6211\u4eec\u5c06\u7269\u54c1 i \u653e\u5165\u80cc\u5305\uff0c\u5047\u8bbe\u7b2c i \u4ef6\u7269\u54c1\u91cd\u91cf\u4e3a weight\uff0c\u4ef7\u503c\u4e3a value\uff0c\u90a3\u4e48\u6211\u4eec\u5f97\u5230 dp[i][j] = dp[i-1][j-weight] + value\u3002\u6211\u4eec\u53ea\u9700\u5728\u904d\u5386\u8fc7\u7a0b\u4e2d\u5bf9\u8fd9\u4e24\u79cd\u60c5\u51b5\u53d6\u6700\u5927\u503c\u5373\u53ef\uff0c\u603b\u65f6\u95f4\u590d\u6742\u5ea6\u548c\u7a7a\u95f4\u590d\u6742\u5ea6\u90fd\u4e3a ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mi,{children:"w"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(nw)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]}),"\u3002"]}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)(i,{value:"cpp",label:"C++",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"int knapsack(vector<int> weights, vector<int> values, int n, int w) {\n    vector<vector<int>> dp(n + 1, vector<int>(w + 1, 0));\n    for (int i = 1; i <= n; ++i) {\n        int weight = weights[i - 1], value = values[i - 1];\n        for (int j = 1; j <= w; ++j) {\n            if (j >= weight) {\n                dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight] + value);\n            } else {\n                dp[i][j] = dp[i - 1][j];\n            }\n        }\n    }\n    return dp[n][w];\n}\n"})})}),(0,a.jsx)(i,{value:"py",label:"Python",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-py",children:"def knapsack(weights: List[int], values: List[int], n: int, w: int) -> int:\n    dp = [[0 for _ in range(w + 1)] for _ in range(n + 1)]\n    for i in range(1, n + 1):\n        weight, value = weights[i - 1], values[i - 1]\n        for j in range(1, w + 1):\n            if j >= weight:\n                dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight] + value)\n            else:\n                dp[i][j] = dp[i - 1][j]\n    return dp[n][w]\n"})})})]}),"\n",(0,a.jsxs)("figure",{children:[(0,a.jsx)("span",{style:{display:"block",width:"75%",margin:"0 auto"},children:(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:s(1275).A+"",width:"674",height:"285"})})}),(0,a.jsx)("figcaption",{style:{textAlign:"center"},children:"\u56fe 6.3: 0-1 \u80cc\u5305\u95ee\u9898 - \u72b6\u6001\u8f6c\u79fb\u77e9\u9635\u6837\u4f8b"})]}),"\n",(0,a.jsxs)(e.p,{children:["\u6211\u4eec\u53ef\u4ee5\u8fdb\u4e00\u6b65\u5bf9 0-1 \u80cc\u5305\u8fdb\u884c\u7a7a\u95f4\u4f18\u5316\uff0c\u5c06\u7a7a\u95f4\u590d\u6742\u5ea6\u964d\u4f4e\u4e3a O(w)\u3002\u5982\u56fe\u6240\u793a\uff0c\u5047\u8bbe\u6211\u4eec\u76ee\u524d\u8003\u8651\u7269\u54c1 i = 2\uff0c\u4e14\u5176\u91cd\u91cf\u4e3a weight = 2\uff0c\u4ef7\u503c\u4e3a value = 3\uff1b\u5bf9\u4e8e\u80cc\u5305\u8f7d\u91cd j\uff0c\u6211\u4eec\u53ef\u4ee5\u5f97\u5230 dp[2][j] = max(dp[1][j], dp[1][j-2] + 3)\u3002\u8fd9\u91cc\u53ef\u4ee5\u53d1\u73b0\u6211\u4eec\u6c38\u8fdc\u53ea\u4f9d\u8d56\u4e8e\u4e0a\u4e00\u6392 i = 1 \u7684\u4fe1\u606f\uff0c\u4e4b\u524d\u7b97\u8fc7\u7684\u5176\u4ed6\u7269\u54c1\u90fd\u4e0d\u9700\u8981\u518d\u4f7f\u7528\u3002\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u53bb\u6389 dp \u77e9\u9635\u7684\u7b2c\u4e00\u4e2a\u7ef4\u5ea6\uff0c\u5728\u8003\u8651\u7269\u54c1 i \u65f6\u53d8\u6210 dp[j] = max(dp[j], dp[j-weight] + value)\u3002\u8fd9\u91cc\u8981\u6ce8\u610f\u6211\u4eec\u5728\u904d\u5386\u6bcf\u4e00\u884c\u7684\u65f6\u5019\u5fc5\u987b",(0,a.jsx)(e.code,{children:"\u9006\u5411\u904d\u5386"}),"\uff0c\u8fd9\u6837\u624d\u80fd\u591f\u8c03\u7528\u4e0a\u4e00\u884c\u7269\u54c1 i-1 \u65f6 dp[j-weight] \u7684\u503c\uff1b\u82e5\u6309\u7167\u4ece\u5de6\u5f80\u53f3\u7684\u987a\u5e8f\u8fdb\u884c\u6b63\u5411\u904d\u5386\uff0c\u5219dp[j-weight] \u7684\u503c\u5728\u904d\u5386\u5230 j \u4e4b\u524d\u5c31\u5df2\u7ecf\u88ab\u66f4\u65b0\u6210\u7269\u54c1 i \u7684\u503c\u4e86\u3002"]}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)(i,{value:"cpp",label:"C++",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"int knapsack(vector<int> weights, vector<int> values, int n, int w) {\n    vector<int> dp(w + 1, 0);\n    for (int i = 1; i <= n; ++i) {\n        int weight = weights[i - 1], value = values[i - 1];\n        for (int j = w; j >= weight; --j) {\n            dp[j] = max(dp[j], dp[j - weight] + value);\n        }\n    }\n    return dp[w];\n}\n"})})}),(0,a.jsx)(i,{value:"py",label:"Python",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-py",children:"def knapsack(weights: List[int], values: List[int], n: int, w: int) -> int:\n    dp = [0] * (w + 1)\n    for i in range(1, n + 1):\n        weight, value = weights[i - 1], values[i - 1]\n        for j in range(w, weight - 1, -1):\n            dp[j] = max(dp[j], [j - weight] + value)\n    return dp[w]\n"})})})]}),"\n",(0,a.jsxs)(e.p,{children:["\u5728\u5b8c\u5168\u80cc\u5305\u95ee\u9898\u4e2d\uff0c\u4e00\u4e2a\u7269\u54c1\u53ef\u4ee5\u62ff\u591a\u6b21\u3002\u5982\u56fe\u4e0a\u534a\u90e8\u5206\u6240\u793a\uff0c\u5047\u8bbe\u6211\u4eec\u904d\u5386\u5230\u7269\u54c1 i = 2\uff0c\u4e14\u5176\u91cd\u91cf\u4e3a weight = 2\uff0c\u4ef7\u503c\u4e3a value = 3\uff1b\u5bf9\u4e8e\u80cc\u5305\u8f7d\u91cd j = 5\uff0c\u6700\u591a\u53ea\u80fd\u88c5\u4e0b 2 \u4e2a\u8be5\u7269\u54c1\u3002\u90a3\u4e48\u6211\u4eec\u7684\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u5c31\u53d8\u6210\u4e86 dp[2][5] = max(dp[1][5], dp[1][3] + 3, dp[1][1] + 6)\u3002\u5982\u679c\u91c7\u7528\u8fd9\u79cd\u65b9\u6cd5\uff0c\u5047\u8bbe\u80cc\u5305\u8f7d\u91cd\u65e0\u7a77\u5927\u800c\u7269\u4f53\u7684\u91cd\u91cf\u65e0\u7a77\u5c0f\uff0c\u6211\u4eec\u8fd9\u91cc\u7684\u6bd4\u8f83\u6b21\u6570\u4e5f\u4f1a\u8d8b\u8fd1\u4e8e\u65e0\u7a77\u5927\uff0c\u8fdc\u8d85",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mi,{children:"w"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(nw)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})," \u7684\u65f6\u95f4\u590d\u6742\u5ea6\u3002"]}),"\n",(0,a.jsxs)("figure",{children:[(0,a.jsx)("span",{style:{display:"block",width:"75%",margin:"0 auto"},children:(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:s(5364).A+"",width:"676",height:"565"})})}),(0,a.jsx)("figcaption",{style:{textAlign:"center"},children:"\u56fe 6.4: \u5b8c\u5168\u80cc\u5305\u95ee\u9898 - \u72b6\u6001\u8f6c\u79fb\u77e9\u9635\u6837\u4f8b"})]}),"\n",(0,a.jsx)(e.p,{children:"\u600e\u4e48\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u5462\uff1f\u6211\u4eec\u53d1\u73b0\u5728 dp[2][3] \u7684\u65f6\u5019\u6211\u4eec\u5176\u5b9e\u5df2\u7ecf\u8003\u8651\u4e86 dp[1][3] \u548c dp[2][1] \u7684\u60c5\u51b5\uff0c\u800c\u5728\u65f6 dp[2][1] \u4e5f\u5df2\u7ecf\u8003\u8651\u4e86 dp[1][1] \u7684\u60c5\u51b5\u3002\u56e0\u6b64\uff0c\u5982\u56fe\u4e0b\u534a\u90e8\u5206\u6240\u793a\uff0c\u5bf9\u4e8e\u62ff\u591a\u4e2a\u7269\u54c1\u7684\u60c5\u51b5\uff0c\u6211\u4eec\u53ea\u9700\u8003\u8651 dp[2][3] \u5373\u53ef\uff0c\u5373 dp[2][5] = max(dp[1][5], dp[2][3] + 3)\u3002\u8fd9\u6837\uff0c\u6211\u4eec\u5c31\u5f97\u5230\u4e86\u5b8c\u5168\u80cc\u5305\u95ee\u9898\u7684\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\uff1adp[i][j] = max(dp[i-1][j], dp[i][j-w] + v)\uff0c\u5176\u4e0e 0-1 \u80cc\u5305\u95ee\u9898\u7684\u5dee\u522b\u4ec5\u4ec5\u662f\u628a\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e2d\u7684\u7b2c\u4e8c\u4e2a i-1 \u53d8\u6210\u4e86 i\u3002"}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)(i,{value:"cpp",label:"C++",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"int knapsack(vector<int> weights, vector<int> values, int n, int w) {\n    vector<vector<int>> dp(n + 1, vector<int>(w + 1, 0));\n    for (int i = 1; i <= n; ++i) {\n        int weight = weights[i - 1], value = values[i - 1];\n        for (int j = 1; j <= w; ++j) {\n            if (j >= weight) {\n                dp[i][j] = max(dp[i - 1][j], dp[i][j - weight] + value);\n            } else {\n                dp[i][j] = dp[i - 1][j];\n            }\n        }\n    }\n    return dp[n][w];\n}\n"})})}),(0,a.jsx)(i,{value:"py",label:"Python",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-py",children:"def knapsack(weights: List[int], values: List[int], n: int, w: int) -> int:\n    dp = [[0 for _ in range(w + 1)] for _ in range(n + 1)]\n    for i in range(1, n + 1):\n        weight, value = weights[i - 1], values[i - 1]\n        for j in range(1, w + 1):\n            if j >= weight:\n                dp[i][j] = max(dp[i - 1][j], dp[i][j - weight] + value)\n            else:\n                dp[i][j] = dp[i - 1][j]\n    return dp[n][w]\n"})})})]}),"\n",(0,a.jsxs)(e.p,{children:["\u540c\u6837\u7684\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u5229\u7528\u7a7a\u95f4\u538b\u7f29\u5c06\u65f6\u95f4\u590d\u6742\u5ea6\u964d\u4f4e\u4e3a ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"w"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(w)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]}),"\u3002\u8fd9\u91cc\u8981\u6ce8\u610f\u6211\u4eec\u5728\u904d\u5386\u6bcf\u4e00\u884c\u7684\u65f6\u5019\u5fc5\u987b",(0,a.jsx)(e.code,{children:"\u6b63\u5411\u904d\u5386"}),"\uff0c\u56e0\u4e3a\u6211\u4eec\u9700\u8981\u5229\u7528\u5f53\u524d\u7269\u54c1\u5728\u7b2c j-weight \u5217\u7684\u4fe1\u606f\u3002"]}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)(i,{value:"cpp",label:"C++",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"int knapsack(vector<int> weights, vector<int> values, int n, int w) {\n    vector<int> dp(w + 1, 0);\n    for (int i = 1; i <= n; ++i) {\n        int weight = weights[i - 1], value = values[i - 1];\n        for (int j = weight; j <= w; ++j) {\n            dp[j] = max(dp[j], dp[j - weight] + value);\n        }\n    }\n    return dp[w];\n}\n"})})}),(0,a.jsx)(i,{value:"py",label:"Python",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-py",children:"def knapsack(weights: List[int], values: List[int], n: int, w: int) -> int:\n    dp = [0] * (w + 1)\n    for i in range(1, n + 1):\n        weight, value = weights[i - 1], values[i - 1]\n        for j in range(weight, w + 1):\n            dp[j] = max(dp[j], [j - weight] + value)\n    return dp[w]\n"})})})]}),"\n",(0,a.jsx)(e.admonition,{type:"warning",children:(0,a.jsx)(e.p,{children:"\u538b\u7f29\u7a7a\u95f4\u65f6\u5230\u5e95\u9700\u8981\u6b63\u5411\u8fd8\u662f\u9006\u5411\u904d\u5386\u5462\uff1f\u7269\u54c1\u548c\u91cd\u91cf\u54ea\u4e2a\u653e\u5728\u5916\u5c42\uff0c\u54ea\u4e2a\u653e\u5728\u5185\u5c42\u5462\uff1f\u8fd9\u53d6\u51b3\u4e8e\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u7684\u4f9d\u8d56\u5173\u7cfb\u3002\u5728\u601d\u8003\u7a7a\u95f4\u538b\u7f29\u524d\uff0c\u4e0d\u59a8\u5c06\u72b6\u6001\u8f6c\u79fb\u77e9\u9635\u753b\u51fa\u6765\uff0c\u65b9\u4fbf\u601d\u8003\u5982\u4f55\u8fdb\u884c\u7a7a\u95f4\u538b\u7f29\uff0c\u4ee5\u53ca\u538b\u7f29\u54ea\u4e2a\u7ef4\u5ea6\u66f4\u7701\u7a7a\u95f4\u3002"})}),"\n",(0,a.jsx)(e.h2,{id:"416-partition-equal-subset-sum",children:(0,a.jsx)(e.a,{href:"https://leetcode.com/problems/partition-equal-subset-sum/",children:"416. Partition Equal Subset Sum"})}),"\n",(0,a.jsx)(e.h3,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,a.jsx)(e.p,{children:"\u7ed9\u5b9a\u4e00\u4e2a\u6b63\u6574\u6570\u6570\u7ec4\uff0c\u6c42\u662f\u5426\u53ef\u4ee5\u628a\u8fd9\u4e2a\u6570\u7ec4\u5206\u6210\u548c\u76f8\u7b49\u7684\u4e24\u90e8\u5206\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",children:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b"}),"\n",(0,a.jsx)(e.p,{children:"\u8f93\u5165\u662f\u4e00\u4e2a\u4e00\u7ef4\u6b63\u6574\u6570\u6570\u7ec4\uff0c\u8f93\u51fa\u65f6\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u662f\u5426\u53ef\u4ee5\u6ee1\u8db3\u9898\u76ee\u8981\u6c42\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"Input: [1,5,11,5]\nOutput: true\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u5728\u8fd9\u4e2a\u6837\u4f8b\u4e2d\uff0c\u6ee1\u8db3\u6761\u4ef6\u7684\u5206\u5272\u65b9\u6cd5\u662f [1,5,5] \u548c [11]\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,a.jsx)(e.p,{children:"\u672c\u9898\u7b49\u4ef7\u4e8e 0-1 \u80cc\u5305\u95ee\u9898\uff0c\u8bbe\u6240\u6709\u6570\u5b57\u548c\u4e3a sum\uff0c\u6211\u4eec\u7684\u76ee\u6807\u662f\u9009\u53d6\u4e00\u90e8\u5206\u7269\u54c1\uff0c\u4f7f\u5f97\u5b83\u4eec\u7684\u603b\u548c\u4e3a sum/2\u3002\u8fd9\u9053\u9898\u4e0d\u9700\u8981\u8003\u8651\u4ef7\u503c\uff0c\u56e0\u6b64\u6211\u4eec\u53ea\u9700\u8981\u901a\u8fc7\u4e00\u4e2a\u5e03\u5c14\u503c\u77e9\u9635\u6765\u8868\u793a\u72b6\u6001\u8f6c\u79fb\u77e9\u9635\u3002\u6ce8\u610f\u8fb9\u754c\u6761\u4ef6\u7684\u5904\u7406\u3002"}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)(i,{value:"cpp",label:"C++",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"bool canPartition(vector<int> &nums) {\n    int nums_sum = accumulate(nums.begin(), nums.end(), 0);\n    if (nums_sum % 2 != 0) {\n        return false;\n    }\n    int target = nums_sum / 2, n = nums.size();\n    vector<vector<bool>> dp(n + 1, vector<bool>(target + 1, false));\n    dp[0][0] = true;\n    for (int i = 1; i <= n; ++i) {\n        for (int j = 0; j <= target; ++j) {\n            if (j < nums[i - 1]) {\n                dp[i][j] = dp[i - 1][j];\n            } else {\n                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];\n            }\n        }\n    }\n    return dp[n][target];\n}\n"})})}),(0,a.jsx)(i,{value:"py",label:"Python",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-py",children:"def canPartition(nums: List[int]) -> bool:\n    nums_sum = sum(nums)\n    if nums_sum % 2 != 0:\n        return False\n    target, n = nums_sum // 2, len(nums)\n    dp = [[False for _ in range(target + 1)] for _ in range(n + 1)]\n    dp[0][0] = True\n    for i in range(1, n + 1):\n        for j in range(target + 1):\n            if j < nums[i - 1]:\n                dp[i][j] = dp[i - 1][j]\n            else:\n                dp[i][j] = dp[i - 1][j] or dp[i - 1][j - nums[i - 1]]\n    return dp[n][target]\n"})})})]}),"\n",(0,a.jsx)(e.p,{children:"\u540c\u6837\u7684\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u5bf9\u672c\u9898\u8fdb\u884c\u7a7a\u95f4\u538b\u7f29\u3002\u6ce8\u610f\u5bf9\u6570\u5b57\u548c\u7684\u904d\u5386\u9700\u8981\u9006\u5411\u3002"}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)(i,{value:"cpp",label:"C++",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"bool canPartition(vector<int> &nums) {\n    int nums_sum = accumulate(nums.begin(), nums.end(), 0);\n    if (nums_sum % 2 != 0) {\n        return false;\n    }\n    int target = nums_sum / 2, n = nums.size();\n    vector<bool> dp(target + 1, false);\n    dp[0] = true;\n    for (int i = 1; i <= n; ++i) {\n        for (int j = target; j >= nums[i - 1]; --j) {\n            dp[j] = dp[j] || dp[j - nums[i - 1]];\n        }\n    }\n    return dp[target];\n}\n"})})}),(0,a.jsx)(i,{value:"py",label:"Python",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-py",children:"def canPartition(nums: List[int]) -> bool:\n    nums_sum = sum(nums)\n    if nums_sum % 2 != 0:\n        return False\n    target, n = nums_sum // 2, len(nums)\n    dp = [True] + [False] * target\n    for i in range(1, n + 1):\n        for j in range(target, nums[i - 1] - 1, -1):\n            dp[j] = dp[j] or dp[j - nums[i - 1]]\n    return dp[target]\n"})})})]}),"\n",(0,a.jsx)(e.h2,{id:"474-ones-and-zeroes",children:(0,a.jsx)(e.a,{href:"https://leetcode.com/problems/ones-and-zeroes/",children:"474. Ones and Zeroes"})}),"\n",(0,a.jsx)(e.h3,{id:"\u9898\u76ee\u63cf\u8ff0-1",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,a.jsxs)(e.p,{children:["\u7ed9\u5b9a ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"m"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"m"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"m"})]})})]})," \u4e2a\u6570\u5b57 0 \u548c ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"n"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," \u4e2a\u6570\u5b57 1\uff0c\u4ee5\u53ca\u4e00\u4e9b\u7531 0-1 \u6784\u6210\u7684\u5b57\u7b26\u4e32\uff0c\u6c42\u5229\u7528\u8fd9\u4e9b\u6570\u5b57\u6700\u591a\u53ef\u4ee5\u6784\u6210\u591a\u5c11\u4e2a\u7ed9\u5b9a\u7684\u5b57\u7b26\u4e32\uff0c\u5b57\u7b26\u4e32\u53ea\u53ef\u4ee5\u6784\u6210\u4e00\u6b21\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b-1",children:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b"}),"\n",(0,a.jsxs)(e.p,{children:["\u8f93\u5165\u4e24\u4e2a\u6574\u6570 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"m"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"m"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"m"})]})})]})," \u548c ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"n"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]}),"\uff0c\u8868\u793a 0 \u548c 1 \u7684\u6570\u91cf\uff0c\u4ee5\u53ca\u4e00\u4e2a\u4e00\u7ef4\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u8868\u793a\u5f85\u6784\u6210\u7684\u5b57\u7b26\u4e32\uff1b\n\u8f93\u51fa\u662f\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u6700\u591a\u53ef\u4ee5\u751f\u6210\u7684\u5b57\u7b26\u4e32\u4e2a\u6570\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'Input: Array = {"10", "0001", "111001", "1", "0"}, m = 5, n = 3\nOutput: 4\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u5728\u8fd9\u4e2a\u6837\u4f8b\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u7528 5 \u4e2a 0 \u548c 3 \u4e2a 1 \u6784\u6210 [\u201c10\u201d, \u201c0001\u201d, \u201c1\u201d, \u201c0\u201d]\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u9898\u89e3-1",children:"\u9898\u89e3"}),"\n",(0,a.jsx)(e.p,{children:"\u8fd9\u662f\u4e00\u4e2a\u591a\u7ef4\u8d39\u7528\u7684 0-1 \u80cc\u5305\u95ee\u9898\uff0c\u6709\u4e24\u4e2a\u80cc\u5305\u5927\u5c0f\uff0c0 \u7684\u6570\u91cf\u548c 1 \u7684\u6570\u91cf\u3002\u6211\u4eec\u5728\u8fd9\u91cc\u76f4\u63a5\u5c55\u793a\u4e09\u7ef4\u7a7a\u95f4\u538b\u7f29\u5230\u4e8c\u7ef4\u540e\u7684\u5199\u6cd5\u3002"}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)(i,{value:"cpp",label:"C++",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"int findMaxForm(vector<string>& strs, int m, int n) {\n    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));\n    for (const string& s : strs) {\n        int zeros = 0, ones = 0;\n        for (char c : s) {\n            if (c == \u20190\u2019) {\n                ++zeros;\n            } else {\n                ++ones;\n            }\n        }\n        for (int i = m; i >= zeros; --i) {\n            for (int j = n; j >= ones; --j) {\n                dp[i][j] = max(dp[i][j], dp[i - zeros][j - ones] + 1);\n            }\n        }\n    }\n    return dp[m][n];\n}\n"})})}),(0,a.jsx)(i,{value:"py",label:"Python",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-py",children:'def findMaxForm(strs: List[str], m: int, n: int) -> int:\n    dp = [[0 for _ in range(n + 1)] for _ in range(m + 1)]\n    for s in strs:\n        zeros = len(list(filter(lambda c: c == "0", s)))\n        ones = len(s) - zeros\n        for i in range(m, zeros - 1, -1):\n            for j in range(n, ones - 1, -1):\n                dp[i][j] = max(dp[i][j], dp[i - zeros][j - ones] + 1)\n    return dp[m][n]\n'})})})]}),"\n",(0,a.jsx)(e.h2,{id:"322-coin-change",children:(0,a.jsx)(e.a,{href:"https://leetcode.com/problems/coin-change/",children:"322. Coin Change"})}),"\n",(0,a.jsx)(e.h3,{id:"\u9898\u76ee\u63cf\u8ff0-2",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,a.jsx)(e.p,{children:"\u7ed9\u5b9a\u4e00\u4e9b\u786c\u5e01\u7684\u9762\u989d\uff0c\u6c42\u6700\u5c11\u53ef\u4ee5\u7528\u591a\u5c11\u9897\u786c\u5e01\u7ec4\u6210\u7ed9\u5b9a\u7684\u91d1\u989d\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b-2",children:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b"}),"\n",(0,a.jsx)(e.p,{children:"\u8f93\u5165\u4e00\u4e2a\u4e00\u7ef4\u6574\u6570\u6570\u7ec4\uff0c\u8868\u793a\u786c\u5e01\u7684\u9762\u989d\uff1b\u4ee5\u53ca\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u7ed9\u5b9a\u7684\u91d1\u989d\u3002\u8f93\u51fa\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u6ee1\u8db3\u6761\u4ef6\u7684\u6700\u5c11\u7684\u786c\u5e01\u6570\u91cf\u3002\u82e5\u4e0d\u5b58\u5728\u89e3\uff0c\u5219\u8fd4\u56de-1\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"Input: coins = [1, 2, 5], amount = 11\nOutput: 3\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u5728\u8fd9\u4e2a\u6837\u4f8b\u4e2d\uff0c\u6700\u5c11\u7684\u7ec4\u5408\u65b9\u6cd5\u662f 11 = 5 + 5 + 1\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u9898\u89e3-2",children:"\u9898\u89e3"}),"\n",(0,a.jsx)(e.p,{children:"\u56e0\u4e3a\u6bcf\u4e2a\u786c\u5e01\u53ef\u4ee5\u7528\u65e0\u9650\u591a\u6b21\uff0c\u8fd9\u9053\u9898\u672c\u8d28\u4e0a\u662f\u5b8c\u5168\u80cc\u5305\u3002\u6211\u4eec\u76f4\u63a5\u5c55\u793a\u4e8c\u7ef4\u7a7a\u95f4\u538b\u7f29\u4e3a\u4e00\u7ef4\u7684\u5199\u6cd5\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u8fd9\u91cc\u6ce8\u610f\uff0c\u6211\u4eec\u628a dp \u6570\u7ec4\u521d\u59cb\u5316\u4e3a amount + 1 \u800c\u4e0d\u662f-1 \u7684\u539f\u56e0\u662f\uff0c\u5728\u52a8\u6001\u89c4\u5212\u8fc7\u7a0b\u4e2d\u6709\u6c42\u6700\u5c0f\u503c\u7684\u64cd\u4f5c\uff0c\u5982\u679c\u521d\u59cb\u5316\u6210-1 \u5219\u4f1a\u5bfc\u81f4\u7ed3\u679c\u59cb\u7ec8\u4e3a-1\u3002\u81f3\u4e8e\u4e3a\u4ec0\u4e48\u53d6\u8fd9\u4e2a\u503c\uff0c\u662f\u56e0\u4e3a i \u6700\u5927\u53ef\u4ee5\u53d6 amount\uff0c\u800c\u6700\u591a\u7684\u7ec4\u6210\u65b9\u5f0f\u662f\u53ea\u7528 1 \u5143\u786c\u5e01\uff0c\u56e0\u6b64 amount + 1 \u4e00\u5b9a\u5927\u4e8e\u6240\u6709\u53ef\u80fd\u7684\u7ec4\u5408\u65b9\u5f0f\uff0c\u53d6\u6700\u5c0f\u503c\u65f6\u4e00\u5b9a\u4e0d\u4f1a\u662f\u5b83\u3002\u5728\u52a8\u6001\u89c4\u5212\u5b8c\u6210\u540e\uff0c\u82e5\u7ed3\u679c\u4ecd\u7136\u662f\u6b64\u503c\uff0c\u5219\u8bf4\u660e\u4e0d\u5b58\u5728\u6ee1\u8db3\u6761\u4ef6\u7684\u7ec4\u5408\u65b9\u6cd5\uff0c\u8fd4\u56de-1\u3002"}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)(i,{value:"cpp",label:"C++",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"int coinChange(vector<int>& coins, int amount) {\n    vector<int> dp(amount + 1, amount + 1);\n    dp[0] = 0;\n    for (int i = 1; i <= amount; ++i) {\n        for (int coin : coins) {\n            if (i >= coin) {\n                dp[i] = min(dp[i], dp[i - coin] + 1);\n            }\n        }\n    }\n    return dp[amount] != amount + 1 ? dp[amount] : -1;\n}\n"})})}),(0,a.jsx)(i,{value:"py",label:"Python",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-py",children:"def coinChange(coins: List[int], amount: int) -> int:\n    dp = [0] + [amount + 1] * amount\n    for i in range(1, amount + 1):\n        for coin in coins:\n            if i >= coin:\n                dp[i] = min(dp[i], dp[i - coin] + 1)\n    return dp[amount] if dp[amount] != amount + 1 else -1\n"})})})]})]})}function m(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(h,{...n})}):h(n)}function p(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},1275:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/6.3-c71586b9976f87e73a4366dab403bfe6.png"},5364:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/6.4-0db4e8ce37dca2dd4fae73b98a7ff67a.png"}}]);