"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[1078],{2614:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"searching-algorithms/5-5-exercises","title":"5.5 \u7ec3\u4e60","description":"\u57fa\u7840\u96be\u5ea6","source":"@site/docs/5-searching-algorithms/5-5-exercises.md","sourceDirName":"5-searching-algorithms","slug":"/searching-algorithms/5-5-exercises","permalink":"/leetcode_101/searching-algorithms/5-5-exercises","draft":false,"unlisted":false,"editUrl":"https://github.com/noworneverev/leetcode_101/tree/master/leetcode_101/docs/5-searching-algorithms/5-5-exercises.md","tags":[],"version":"current","sidebarPosition":25,"frontMatter":{"sidebar_position":25},"sidebar":"tutorialSidebar","previous":{"title":"5.4 \u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","permalink":"/leetcode_101/searching-algorithms/5-4-breadth-first-search"},"next":{"title":"6. \u6df1\u5165\u6d45\u51fa\u52a8\u6001\u89c4\u5212","permalink":"/leetcode_101/category/6-\u6df1\u5165\u6d45\u51fa\u52a8\u6001\u89c4\u5212"}}');var t=r(4848),n=r(8453);const o={sidebar_position:25},l="5.5 \u7ec3\u4e60",d={},h=[{value:"\u57fa\u7840\u96be\u5ea6",id:"\u57fa\u7840\u96be\u5ea6",level:2},{value:"130. Surrounded Regions",id:"130-surrounded-regions",level:3},{value:"257. Binary Tree Paths",id:"257-binary-tree-paths",level:3},{value:"\u8fdb\u9636\u96be\u5ea6",id:"\u8fdb\u9636\u96be\u5ea6",level:2},{value:"47. Permutations II",id:"47-permutations-ii",level:3},{value:"40. Combination Sum II",id:"40-combination-sum-ii",level:3},{value:"37. Sudoku Solver",id:"37-sudoku-solver",level:3},{value:"310. Minimum Height Trees",id:"310-minimum-height-trees",level:3}];function a(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"55-\u7ec3\u4e60",children:"5.5 \u7ec3\u4e60"})}),"\n",(0,t.jsx)(i.h2,{id:"\u57fa\u7840\u96be\u5ea6",children:"\u57fa\u7840\u96be\u5ea6"}),"\n",(0,t.jsx)(i.h3,{id:"130-surrounded-regions",children:(0,t.jsx)(i.a,{href:"https://leetcode.com/problems/surrounded-regions/",children:"130. Surrounded Regions"})}),"\n",(0,t.jsx)(i.p,{children:"\u5148\u4ece\u6700\u5916\u4fa7\u586b\u5145\uff0c\u7136\u540e\u518d\u8003\u8651\u91cc\u4fa7\u3002"}),"\n",(0,t.jsx)(i.h3,{id:"257-binary-tree-paths",children:(0,t.jsx)(i.a,{href:"https://leetcode.com/problems/binary-tree-paths/",children:"257. Binary Tree Paths"})}),"\n",(0,t.jsx)(i.p,{children:"\u8f93\u51fa\u4e8c\u53c9\u6811\u4e2d\u6240\u6709\u4ece\u6839\u5230\u53f6\u5b50\u7684\u8def\u5f84\uff0c\u56de\u6eaf\u6cd5\u4f7f\u7528\u4e0e\u5426\u6709\u4ec0\u4e48\u533a\u522b\uff1f"}),"\n",(0,t.jsx)(i.h2,{id:"\u8fdb\u9636\u96be\u5ea6",children:"\u8fdb\u9636\u96be\u5ea6"}),"\n",(0,t.jsx)(i.h3,{id:"47-permutations-ii",children:(0,t.jsx)(i.a,{href:"https://leetcode.com/problems/permutations-ii/",children:"47. Permutations II"})}),"\n",(0,t.jsx)(i.p,{children:"\u6392\u5217\u9898\u7684 follow-up\uff0c\u5982\u4f55\u5904\u7406\u91cd\u590d\u5143\u7d20\uff1f"}),"\n",(0,t.jsx)(i.h3,{id:"40-combination-sum-ii",children:(0,t.jsx)(i.a,{href:"https://leetcode.com/problems/combination-sum-ii/",children:"40. Combination Sum II"})}),"\n",(0,t.jsx)(i.p,{children:"\u7ec4\u5408\u9898\u7684 follow-up\uff0c\u5982\u4f55\u5904\u7406\u91cd\u590d\u5143\u7d20\uff1f"}),"\n",(0,t.jsx)(i.h3,{id:"37-sudoku-solver",children:(0,t.jsx)(i.a,{href:"https://leetcode.com/problems/sudoku-solver/",children:"37. Sudoku Solver"})}),"\n",(0,t.jsx)(i.p,{children:"\u5341\u5206\u7ecf\u5178\u7684\u6570\u72ec\u9898\uff0c\u53ef\u4ee5\u5229\u7528\u56de\u6eaf\u6cd5\u6c42\u89e3\u3002\u4e8b\u5b9e\u4e0a\u5bf9\u4e8e\u6570\u72ec\u7c7b\u578b\u7684\u9898\uff0c\u6709\u5f88\u591a\u8fdb\u9636\u7684\u641c\u7d22\u65b9\u6cd5\u548c\u526a\u679d\u7b56\u7565\u53ef\u4ee5\u63d0\u9ad8\u901f\u5ea6\uff0c\u5982\u542f\u53d1\u5f0f\u641c\u7d22\u3002"}),"\n",(0,t.jsx)(i.h3,{id:"310-minimum-height-trees",children:(0,t.jsx)(i.a,{href:"https://leetcode.com/problems/minimum-height-trees/",children:"310. Minimum Height Trees"})}),"\n",(0,t.jsx)(i.p,{children:"\u5982\u4f55\u5c06\u8fd9\u9053\u9898\u8f6c\u4e3a\u641c\u7d22\u7c7b\u578b\u9898\uff1f\u662f\u4f7f\u7528\u6df1\u5ea6\u4f18\u5148\u8fd8\u662f\u5e7f\u5ea6\u4f18\u5148\u5462\uff1f"})]})}function c(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}}}]);