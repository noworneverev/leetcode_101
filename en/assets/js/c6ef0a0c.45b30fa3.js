"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[463],{6235:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"graphs/14-4-exercises","title":"14.4 Exercises","description":"Basic Difficulty","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/14-graphs/14-4-exercises.md","sourceDirName":"14-graphs","slug":"/graphs/14-4-exercises","permalink":"/leetcode_101/en/graphs/14-4-exercises","draft":false,"unlisted":false,"editUrl":"https://github.com/noworneverev/leetcode_101/tree/master/leetcode_101/docs/14-graphs/14-4-exercises.md","tags":[],"version":"current","sidebarPosition":78,"frontMatter":{"sidebar_position":78},"sidebar":"tutorialSidebar","previous":{"title":"14.3 \u62d3\u6251\u6392\u5e8f","permalink":"/leetcode_101/en/graphs/14-3-topological-sorting"},"next":{"title":"15. \u66f4\u52a0\u590d\u6742\u7684\u6570\u636e\u7ed3\u6784","permalink":"/leetcode_101/en/category/15-\u66f4\u52a0\u590d\u6742\u7684\u6570\u636e\u7ed3\u6784"}}');var n=s(4848),r=s(8453);const c={sidebar_position:78},a="14.4 Exercises",d={},l=[{value:"Basic Difficulty",id:"basic-difficulty",level:2},{value:"1059. All Paths from Source Lead to Destination",id:"1059-all-paths-from-source-lead-to-destination",level:3},{value:"Advanced Difficulty",id:"advanced-difficulty",level:2},{value:"1135. Connecting Cities With Minimum Cost",id:"1135-connecting-cities-with-minimum-cost",level:3},{value:"882. Reachable Nodes In Subdivided Graph",id:"882-reachable-nodes-in-subdivided-graph",level:3}];function o(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"144-exercises",children:"14.4 Exercises"})}),"\n",(0,n.jsx)(i.h2,{id:"basic-difficulty",children:"Basic Difficulty"}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"1059-all-paths-from-source-lead-to-destination",children:(0,n.jsx)(i.a,{href:"https://leetcode.com/problems/all-paths-from-source-lead-to-destination/",children:"1059. All Paths from Source Lead to Destination"})}),"\n",(0,n.jsx)(i.p,{children:"\u867d\u7136\u4f7f\u7528\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u53ef\u4ee5\u89e3\u51b3\u5927\u90e8\u5206\u7684\u56fe\u904d\u5386\u95ee\u9898\uff0c\u4f46\u662f\u6ce8\u610f\u5224\u65ad\u662f\u5426\u9677\u5165\u4e86\u73af\u8def\u3002"}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h2,{id:"advanced-difficulty",children:"Advanced Difficulty"}),"\n",(0,n.jsx)(i.h3,{id:"1135-connecting-cities-with-minimum-cost",children:(0,n.jsx)(i.a,{href:"https://leetcode.com/problems/connecting-cities-with-minimum-cost/",children:"1135. Connecting Cities With Minimum Cost"})}),"\n",(0,n.jsx)(i.p,{children:"\u7b14\u8005\u5176\u5b9e\u5df2\u7ecf\u628a\u8fd9\u9053\u9898\u7684\u9898\u89e3\u5199\u597d\u4e86\uff0c\u624d\u53d1\u73b0\u8fd9\u9053\u9898\u662f\u9700\u8981\u89e3\u9501\u624d\u53ef\u4ee5\u770b\u7684\u9898\u76ee\u3002\u4e3a\u4e86\u907f\u514d\u7248\u6743\u7ea0\u7eb7\uff0c\u6545\u5c06\u5176\u79fb\u81f3\u7ec3\u4e60\u9898\u5185\u3002\u672c\u9898\u8003\u5bdf\u6700\u5c0f\u751f\u6210\u6811\uff08minimum spanning tree, MST\uff09\u7684\u6c42\u6cd5\uff0c\u901a\u5e38\u53ef\u4ee5\u7528\u4e24\u79cd\u65b9\u5f0f\u6c42\u5f97\uff1aPrim\u2019s Algorithm\uff0c\u5229\u7528\u4f18\u5148\u961f\u5217\u9009\u62e9\u6700\u5c0f\u7684\u6d88\u8017\uff1b\u4ee5\u53ca Kruskal\u2019s Algorithm\uff0c\u6392\u5e8f\u540e\u4f7f\u7528\u5e76\u67e5\u96c6\u3002"}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"882-reachable-nodes-in-subdivided-graph",children:(0,n.jsx)(i.a,{href:"https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/",children:"882. Reachable Nodes In Subdivided Graph"})}),"\n",(0,n.jsx)(i.p,{children:"\u8fd9\u9053\u9898\u7b14\u8005\u8003\u8651\u4e86\u5f88\u4e45\uff0c\u6700\u7ec8\u51b3\u5b9a\u628a\u5b83\u653e\u5728\u7ec3\u4e60\u9898\u800c\u975e\u8be6\u7ec6\u8bb2\u89e3\u3002\u672c\u9898\u662f\u7ecf\u5178\u7684\u8282\u70b9\u6700\u77ed\u8ddd\u79bb\u95ee\u9898\uff0c\u5e38\u7528\u7684\u7b97\u6cd5\u6709 Bellman-Ford \u5355\u6e90\u6700\u77ed\u8def\u7b97\u6cd5\uff0c\u4ee5\u53ca Dijkstra \u65e0\u8d1f\u8fb9\u5355\u6e90\u6700\u77ed\u8def\u7b97\u6cd5\u3002\u867d\u7136\u7ecf\u5178\uff0c\u4f46\u662f LeetCode \u5f88\u5c11\u6709\u76f8\u5173\u7684\u9898\u578b\uff0c\u56e0\u6b64\u8fd9\u91cc\u4ec5\u4f9b\u8bfb\u8005\u81ea\u884c\u6df1\u5165\u5b66\u4e60\u3002"})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}}}]);