"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[5852],{391:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"graphs/14-3-topological-sorting","title":"14.3 \u62d3\u64b2\u6392\u5e8f","description":"\u62d3\u64b2\u6392\u5e8f\uff08topological sort\uff09\u662f\u4e00\u7a2e\u5e38\u898b\u7684\u7b97\u6cd5\uff0c\u7528\u65bc\u5c0d\u6709\u5411\u7121\u74b0\u5716\uff08DAG\uff09\u9032\u884c\u6392\u5e8f\u3002\u7d66\u5b9a DAG \u4e2d\u7684 $N$ \u500b\u7bc0\u9ede\uff0c\u6211\u5011\u9700\u8981\u5c07\u5b83\u5011\u6392\u5e8f\u6210\u4e00\u500b\u7dda\u6027\u5e8f\u5217\uff1b\u5982\u679c\u7bc0\u9ede $i$ \u6307\u5411\u7bc0\u9ede $j$\uff0c\u5247\u6392\u5e8f\u7d50\u679c\u4e2d $i$ \u5fc5\u9808\u5728 $j$ \u4e4b\u524d\u3002\u62d3\u64b2\u6392\u5e8f\u7684\u7d50\u679c\u4e26\u4e0d\u552f\u4e00\uff0c\u53ea\u8981\u6eff\u8db3\u4ee5\u4e0a\u689d\u4ef6\u5373\u53ef\u3002","source":"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/14-graphs/14-3-topological-sorting.mdx","sourceDirName":"14-graphs","slug":"/graphs/14-3-topological-sorting","permalink":"/leetcode_101/zh-TW/graphs/14-3-topological-sorting","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":77,"frontMatter":{"sidebar_position":77},"sidebar":"tutorialSidebar","previous":{"title":"14.2 \u4e8c\u5206\u5716","permalink":"/leetcode_101/zh-TW/graphs/14-2-bipartite-graph"},"next":{"title":"14.4 \u7df4\u7fd2","permalink":"/leetcode_101/zh-TW/graphs/14-4-exercises"}}');var i=n(4848),l=n(8453);const t={sidebar_position:77},r="14.3 \u62d3\u64b2\u6392\u5e8f",c={},h=[{value:"210. Course Schedule II",id:"210-course-schedule-ii",level:2},{value:"\u984c\u76ee\u63cf\u8ff0",id:"\u984c\u76ee\u63cf\u8ff0",level:3},{value:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b",id:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b",level:3},{value:"\u984c\u89e3",id:"\u984c\u89e3",level:3}];function d(e){const s={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,l.R)(),...e.components},{TabItem:n,Tabs:a}=s;return n||x("TabItem",!0),a||x("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"143-\u62d3\u64b2\u6392\u5e8f",children:"14.3 \u62d3\u64b2\u6392\u5e8f"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"\u62d3\u64b2\u6392\u5e8f"}),"\uff08topological sort\uff09\u662f\u4e00\u7a2e\u5e38\u898b\u7684\u7b97\u6cd5\uff0c\u7528\u65bc\u5c0d\u6709\u5411\u7121\u74b0\u5716\uff08DAG\uff09\u9032\u884c\u6392\u5e8f\u3002\u7d66\u5b9a DAG \u4e2d\u7684 ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"N"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"N"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"})]})})]})," \u500b\u7bc0\u9ede\uff0c\u6211\u5011\u9700\u8981\u5c07\u5b83\u5011\u6392\u5e8f\u6210\u4e00\u500b\u7dda\u6027\u5e8f\u5217\uff1b\u5982\u679c\u7bc0\u9ede ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"i"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6595em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"})]})})]})," \u6307\u5411\u7bc0\u9ede ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"j"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]}),"\uff0c\u5247\u6392\u5e8f\u7d50\u679c\u4e2d ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"i"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6595em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"})]})})]})," \u5fc5\u9808\u5728 ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"j"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]})," \u4e4b\u524d\u3002\u62d3\u64b2\u6392\u5e8f\u7684\u7d50\u679c\u4e26\u4e0d\u552f\u4e00\uff0c\u53ea\u8981\u6eff\u8db3\u4ee5\u4e0a\u689d\u4ef6\u5373\u53ef\u3002"]}),"\n",(0,i.jsx)(s.h2,{id:"210-course-schedule-ii",children:(0,i.jsx)(s.a,{href:"https://leetcode.com/problems/course-schedule-ii/",children:"210. Course Schedule II"})}),"\n",(0,i.jsx)(s.h3,{id:"\u984c\u76ee\u63cf\u8ff0",children:"\u984c\u76ee\u63cf\u8ff0"}),"\n",(0,i.jsxs)(s.p,{children:["\u7d66\u5b9a ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"N"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"N"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"})]})})]})," \u9580\u8ab2\u7a0b\u4ee5\u53ca\u5b83\u5011\u7684\u524d\u7f6e\u5fc5\u4fee\u8ab2\uff0c\u627e\u51fa\u53ef\u4ee5\u4e00\u6b21\u6027\u5b8c\u6210\u6240\u6709\u8ab2\u7a0b\u7684\u4fee\u8ab2\u9806\u5e8f\u3002"]}),"\n",(0,i.jsx)(s.h3,{id:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b",children:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b"}),"\n",(0,i.jsxs)(s.p,{children:["\u8f38\u5165\u662f\u4e00\u500b\u6b63\u6574\u6578\uff0c\u8868\u793a\u8ab2\u7a0b\u6578\u91cf\uff0c\u4ee5\u53ca\u4e00\u500b\u4e8c\u7dad\u9663\u5217\uff0c\u8868\u793a\u6240\u6709\u7684\u6709\u5411\u908a\uff08\u4f8b\u5982 ",(0,i.jsx)(s.code,{children:"[1,0]"})," \u8868\u793a\u8ab2\u7a0b 1 \u5fc5\u9808\u5728\u8ab2\u7a0b 0 \u4e4b\u5f8c\u4fee\u5b8c\uff09\u3002\u8f38\u51fa\u662f\u4e00\u500b\u4e00\u7dad\u9663\u5217\uff0c\u8868\u793a\u62d3\u64b2\u6392\u5e8f\u7684\u7d50\u679c\u3002"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]\nOutput: [0,1,2,3]\n"})}),"\n",(0,i.jsxs)(s.p,{children:["\u5728\u9019\u500b\u4f8b\u5b50\u4e2d\uff0c\u53e6\u4e00\u7a2e\u53ef\u884c\u7684\u9806\u5e8f\u662f ",(0,i.jsx)(s.code,{children:"[0,2,1,3]"}),"\u3002"]}),"\n",(0,i.jsx)(s.h3,{id:"\u984c\u89e3",children:"\u984c\u89e3"}),"\n",(0,i.jsxs)(s.p,{children:["\u6211\u5011\u53ef\u4ee5\u5148\u5efa\u7acb\u4e00\u500b\u9130\u63a5\u77e9\u9663\u4f86\u8868\u793a\u5716\uff0c\u65b9\u4fbf\u9032\u884c\u76f4\u63a5\u67e5\u627e\u3002\u9019\u88e1\u6ce8\u610f\uff0c\u6211\u5011\u5c07\u6240\u6709\u7684\u908a\u9032\u884c\u53cd\u5411\u8655\u7406\uff0c\u4f7f\u5f97\u5982\u679c\u8ab2\u7a0b ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"i"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6595em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"})]})})]})," \u6307\u5411\u8ab2\u7a0b ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"j"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]}),"\uff0c\u8868\u793a\u8ab2\u7a0b ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"i"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6595em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"})]})})]})," \u5fc5\u9808\u5728\u8ab2\u7a0b ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"j"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]})," \u4e4b\u524d\u5b8c\u6210\u3002\u9019\u6a23\u8655\u7406\u66f4\u7b26\u5408\u6211\u5011\u5c0d\u524d\u7f6e\u8ab2\u7a0b\u7684\u76f4\u89c0\u7406\u89e3\u3002"]}),"\n",(0,i.jsx)(s.p,{children:"\u62d3\u64b2\u6392\u5e8f\u53ef\u4ee5\u770b\u4f5c\u662f\u5ee3\u5ea6\u512a\u5148\u641c\u7d22\uff08BFS\uff09\u7684\u4e00\u7a2e\u7279\u6b8a\u60c5\u6cc1\uff1a"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\u904d\u6b77\u6240\u6709\u7bc0\u9ede\uff0c\u5c07\u5165\u5ea6\u70ba ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mn,{children:"0"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(s.span,{className:"mord",children:"0"})]})})]})," \u7684\u7bc0\u9ede\uff08\u5373\u7121\u524d\u7f6e\u8ab2\u7a0b\u8981\u6c42\u7684\u7bc0\u9ede\uff09\u52a0\u5165\u968a\u5217\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:["\u8655\u7406\u968a\u5217\u4e2d\u7684\u7bc0\u9ede\uff1a","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u5c07\u7576\u524d\u7bc0\u9ede\u52a0\u5165\u6392\u5e8f\u7d50\u679c\u4e2d\u3002"}),"\n",(0,i.jsxs)(s.li,{children:["\u5c07\u7576\u524d\u7bc0\u9ede\u6307\u5411\u7684\u6240\u6709\u7bc0\u9ede\u7684\u5165\u5ea6\u6e1b\u5c11 ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mn,{children:"1"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(s.span,{className:"mord",children:"1"})]})})]}),"\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:["\u5982\u679c\u67d0\u500b\u7bc0\u9ede\u7684\u5165\u5ea6\u8b8a\u70ba ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mn,{children:"0"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(s.span,{className:"mord",children:"0"})]})})]}),"\uff0c\u5c07\u8a72\u7bc0\u9ede\u52a0\u5165\u968a\u5217\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"\u7576\u968a\u5217\u8655\u7406\u5b8c\u7562\u5f8c\uff0c\u82e5\u6240\u6709\u7bc0\u9ede\u5747\u5df2\u6392\u5e8f\uff0c\u5247\u5b8c\u6210\u62d3\u64b2\u6392\u5e8f\uff1b\u5426\u5247\uff0c\u82e5\u5716\u4e2d\u5b58\u5728\u74b0\uff0c\u5247\u7121\u6cd5\u5b8c\u6210\u6240\u6709\u8ab2\u7a0b\u3002"}),"\n"]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)(n,{value:"cpp",label:"C++",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {\n    vector<vector<int>> graph(numCourses, vector<int>());\n    vector<int> indegree(numCourses, 0), schedule;\n    for (const auto& pr : prerequisites) {\n        graph[pr[1]].push_back(pr[0]);\n        ++indegree[pr[0]];\n    }\n    queue<int> q;\n    for (int i = 0; i < indegree.size(); ++i) {\n        if (indegree[i] == 0) {\n            q.push(i);\n        }\n    }\n    while (!q.empty()) {\n        int u = q.front();\n        q.pop();\n        schedule.push_back(u);\n        for (int v : graph[u]) {\n            --indegree[v];\n            if (indegree[v] == 0) {\n                q.push(v);\n            }\n        }\n    }\n    for (int i = 0; i < indegree.size(); ++i) {\n        if (indegree[i] != 0) {\n            return vector<int>();\n        }\n    }\n    return schedule;\n}\n"})})}),(0,i.jsx)(n,{value:"py",label:"Python",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-py",children:"def findOrder(numCourses: int, prerequisites: List[List[int]]) -> List[int]:\n    graph = [[] for _ in range(numCourses)]\n    indegree = [0] * numCourses\n    schedule = []\n\n    for pr_from, pr_to in prerequisites:\n        graph[pr_to].append(pr_from)\n        indegree[pr_from] += 1\n\n    q = collections.deque([i for i, deg in enumerate(indegree) if deg == 0])\n\n    while len(q) > 0:\n        u = q.popleft()\n        schedule.append(u)\n        for v in graph[u]:\n            indegree[v] -= 1\n            if indegree[v] == 0:\n                q.append(v)\n\n    return schedule if all(deg == 0 for deg in indegree) else []\n"})})})]})]})}function m(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function x(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);