"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[8150],{8620:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"searching-algorithms/5-4-breadth-first-search","title":"5.4 \u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","description":"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\uff08breadth-\ufb01rst search\uff0cBFS\uff09\u4e0d\u540c\u4e0e\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\uff0c\u5b83\u662f\u4e00\u5c42\u5c42\u8fdb\u884c\u904d\u5386\u7684\uff0c\u56e0\u6b64\u9700\u8981\u7528\u5148\u5165\u5148\u51fa\u7684\u961f\u5217 (queue) \u800c\u975e\u5148\u5165\u540e\u51fa\u7684\u6808 (stack) \u8fdb\u884c\u904d\u5386\u3002\u7531\u4e8e\u662f\u6309\u5c42\u6b21\u8fdb\u884c\u904d\u5386\uff0c\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u65f6\u6309\u7167\u201c\u5e7f\u201d\u7684\u65b9\u5411\u8fdb\u884c\u904d\u5386\u7684\uff0c\u4e5f\u5e38\u5e38\u7528\u6765\u5904\u7406\u6700\u77ed\u8def\u5f84\u7b49\u95ee\u9898\u3002\u5728 Python \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u7528 collections.deque \u6765\u5b9e\u73b0 C++ \u4e2d\u7684 queue\u3002","source":"@site/docs/5-searching-algorithms/5-4-breadth-first-search.mdx","sourceDirName":"5-searching-algorithms","slug":"/searching-algorithms/5-4-breadth-first-search","permalink":"/leetcode_101/en/searching-algorithms/5-4-breadth-first-search","draft":false,"unlisted":false,"editUrl":"https://github.com/noworneverev/leetcode_101/tree/master/leetcode_101/docs/5-searching-algorithms/5-4-breadth-first-search.mdx","tags":[],"version":"current","sidebarPosition":24,"frontMatter":{"sidebar_position":24},"sidebar":"tutorialSidebar","previous":{"title":"5.3 \u56de\u6eaf\u6cd5","permalink":"/leetcode_101/en/searching-algorithms/5-3-backtracking"},"next":{"title":"5.5 \u7ec3\u4e60","permalink":"/leetcode_101/en/searching-algorithms/5-5-exercises"}}');var i=s(4848),t=s(8453);const a={sidebar_position:24},d="5.4 \u5e7f\u5ea6\u4f18\u5148\u641c\u7d22",l={},c=[{value:"1091. Shortest Path in Binary Matrix",id:"1091-shortest-path-in-binary-matrix",level:2},{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:3},{value:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:3},{value:"934. Shortest Bridge",id:"934-shortest-bridge",level:2},{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0-1",level:3},{value:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b-1",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3-1",level:3},{value:"126. Word Ladder II",id:"126-word-ladder-ii",level:2},{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0-2",level:3},{value:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b-2",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3-2",level:3}];function o(n){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",math:"math",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,t.R)(),...n.components},{TabItem:s,Tabs:r}=e;return s||p("TabItem",!0),r||p("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"54-\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22",children:"5.4 \u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"}),"\uff08breadth-\ufb01rst search\uff0cBFS\uff09\u4e0d\u540c\u4e0e\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\uff0c\u5b83\u662f\u4e00\u5c42\u5c42\u8fdb\u884c\u904d\u5386\u7684\uff0c\u56e0\u6b64",(0,i.jsx)(e.code,{children:"\u9700\u8981\u7528\u5148\u5165\u5148\u51fa\u7684\u961f\u5217 (queue)"})," \u800c\u975e\u5148\u5165\u540e\u51fa\u7684\u6808 (stack) \u8fdb\u884c\u904d\u5386\u3002\u7531\u4e8e\u662f\u6309\u5c42\u6b21\u8fdb\u884c\u904d\u5386\uff0c\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u65f6\u6309\u7167\u201c\u5e7f\u201d\u7684\u65b9\u5411\u8fdb\u884c\u904d\u5386\u7684\uff0c\u4e5f\u5e38\u5e38\u7528\u6765\u5904\u7406\u6700\u77ed\u8def\u5f84\u7b49\u95ee\u9898\u3002\u5728 Python \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u7528 collections.deque \u6765\u5b9e\u73b0 C++ \u4e2d\u7684 queue\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"   1\n  / \\\n  2 3\n /\n4\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u8fd9\u91cc\u8981\u6ce8\u610f\uff0c\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u548c\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u90fd\u53ef\u4ee5\u5904\u7406",(0,i.jsx)(e.code,{children:"\u53ef\u8fbe\u6027"}),"\u95ee\u9898\uff0c\u5373\u4ece\u4e00\u4e2a\u8282\u70b9\u5f00\u59cb\u662f\u5426\u80fd\u8fbe\u5230\u53e6\u4e00\u4e2a\u8282\u70b9\u3002\u56e0\u4e3a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u53ef\u4ee5\u5229\u7528\u9012\u5f52\u5feb\u901f\u5b9e\u73b0\uff0c\u5f88\u591a\u4eba\u4f1a\u4e60\u60ef\u4f7f\u7528\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u5237\u6b64\u7c7b\u9898\u76ee\u3002\u5b9e\u9645\u8f6f\u4ef6\u5de5\u7a0b\u4e2d\uff0c\u7b14\u8005\u5f88\u5c11\u89c1\u5230\u9012\u5f52\u7684\u5199\u6cd5\uff0c\u56e0\u4e3a\u4e00\u65b9\u9762\u96be\u4ee5\u7406\u89e3\uff0c\u53e6\u4e00\u65b9\u9762\u53ef\u80fd\u4ea7\u751f\u6808\u6ea2\u51fa\u7684\u60c5\u51b5\uff1b\u800c\u7528\u6808\u5b9e\u73b0\u7684\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u548c\u7528\u961f\u5217\u5b9e\u73b0\u7684\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u5728\u5199\u6cd5\u4e0a\u5e76\u6ca1\u6709\u592a\u5927\u5dee\u5f02\uff0c\u56e0\u6b64\u4f7f\u7528\u54ea\u4e00\u79cd\u641c\u7d22\u65b9\u5f0f\u9700\u8981\u6839\u636e\u5b9e\u9645\u7684\u529f\u80fd\u9700\u6c42\u6765\u5224\u65ad\u3002\u53e6\u5916\uff0c\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u641c\u7d22\u4f18\u5148\u7ea7\uff0c\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u4f18\u5148\u961f\u5217\uff0c\u8fd9\u4e2a\u6211\u4eec\u4f1a\u5728\u6570\u636e\u7ed3\u6784\u7684\u7ae0\u8282\u8bb2\u5230\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"1091-shortest-path-in-binary-matrix",children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/shortest-path-in-binary-matrix/",children:"1091. Shortest Path in Binary Matrix"})}),"\n",(0,i.jsx)(e.h3,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,i.jsx)(e.p,{children:"\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u7ef4 0-1 \u77e9\u9635\uff0c\u5176\u4e2d 1 \u8868\u793a\u969c\u788d\uff0c0 \u8868\u793a\u9053\u8def\uff0c\u6bcf\u4e2a\u4f4d\u7f6e\u4e0e\u5468\u56f4\u516b\u4e2a\u683c\u5b50\u76f8\u8fde\u3002\u6c42\u4ece\u5de6\u4e0a\u89d2\u5230\u53f3\u4e0b\u89d2\u7684\u6700\u77ed\u5230\u8fbe\u8ddd\u79bb\u3002\u5982\u679c\u6ca1\u6709\u53ef\u4ee5\u5230\u8fbe\u7684\u65b9\u6cd5\uff0c\u8fd4\u56de-1\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",children:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b"}),"\n",(0,i.jsx)(e.p,{children:"\u8f93\u5165\u662f\u4e00\u4e2a\u4e8c\u7ef4\u6574\u6570\u6570\u7ec4\uff0c\u8f93\u51fa\u662f\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u6700\u77ed\u8ddd\u79bb\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input:\n[[0,0,1],\n [1,1,0],\n [1,1,0]]\nOutput: 4\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6700\u77ed\u5230\u8fbe\u65b9\u6cd5\u4e3a\u5148\u5411\u53f3\uff0c\u62d0\u5f2f\u4e4b\u540e\u518d\u5411\u4e0b\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,i.jsx)(e.p,{children:"\u5229\u7528\u961f\u5217\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u76f4\u89c2\u5730\u5229\u7528\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\uff0c\u641c\u7d22\u6700\u5c11\u6269\u5c55\u5c42\u6570\uff0c\u5373\u6700\u77ed\u5230\u8fbe\u76ee\u7684\u5730\u7684\u8ddd\u79bb\u3002\u6ce8\u610f\u4e0d\u8981\u91cd\u590d\u641c\u7d22\u76f8\u540c\u4f4d\u7f6e\u3002"}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)(s,{value:"cpp",label:"C++",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"int shortestPathBinaryMatrix(vector<vector<int>>& grid) {\n    if (grid[0][0] == 1) {\n        return -1;\n    }\n    int m = grid.size(), n = grid[0].size();\n    int dist = 0, count;\n    queue<pair<int, int>> q;\n    q.push({0, 0});\n    grid[0][0] = -1;  // -1\u8868\u793avisited\n    count = q.size();\n    while (count > 0) {\n        ++dist;\n        while (count--) {\n            auto [r, c] = q.front();\n            q.pop();\n            if (r == m - 1 && c == n - 1) {\n                return dist;\n            }\n            for (int dx = -1; dx <= 1; ++dx) {\n                for (int dy = -1; dy <= 1; ++dy) {\n                    if (dx == 0 && dy == 0) {\n                        continue;\n                    }\n                    int x = r + dx, y = c + dy;\n                    if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] != 0) {\n                        continue;\n                    }\n                    grid[x][y] = -1;\n                    q.push({x, y});\n                }\n            }\n        }\n        count = q.size();\n    }\n    return -1;\n}\n"})})}),(0,i.jsx)(s,{value:"py",label:"Python",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-py",children:"def shortestPathBinaryMatrix(grid: List[List[int]]) -> int:\n    if grid[0][0] == 1:\n        return -1\n    m, n = len(grid), len(grid[0])\n    dist = 0\n    q = collections.deque()\n    q.append((0, 0))\n    grid[0][0] = -1 # -1\u8868\u793avisited\n    count = len(q)\n    while count > 0:\n        dist += 1\n        while count > 0:\n            count -= 1\n            r, c = q.popleft()\n            if r == m - 1 and c == n - 1:\n                return dist\n            for dx in range(-1, 2):\n                for dy in range(-1, 2):\n                    if dx == 0 and dy == 0:\n                        continue\n                x, y = r + dx, c + dy\n                if x < 0 or y < 0 or x >= m or y >= n or grid[x][y] != 0:\n                    continue\n                grid[x][y] = -1\n                q.append((x, y))\n        count = len(q)\n    return -1\n"})})})]}),"\n",(0,i.jsx)(e.h2,{id:"934-shortest-bridge",children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/shortest-bridge/",children:"934. Shortest Bridge"})}),"\n",(0,i.jsx)(e.h3,{id:"\u9898\u76ee\u63cf\u8ff0-1",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,i.jsx)(e.p,{children:"\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u7ef4 0-1 \u77e9\u9635\uff0c\u5176\u4e2d 1 \u8868\u793a\u9646\u5730\uff0c0 \u8868\u793a\u6d77\u6d0b\uff0c\u6bcf\u4e2a\u4f4d\u7f6e\u4e0e\u4e0a\u4e0b\u5de6\u53f3\u76f8\u8fde\u3002\u5df2\u77e5\u77e9\u9635\u4e2d\u6709\u4e14\u53ea\u6709\u4e24\u4e2a\u5c9b\u5c7f\uff0c\u6c42\u6700\u5c11\u8981\u586b\u6d77\u9020\u9646\u591a\u5c11\u4e2a\u4f4d\u7f6e\u624d\u53ef\u4ee5\u5c06\u4e24\u4e2a\u5c9b\u5c7f\u76f8\u8fde\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b-1",children:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b"}),"\n",(0,i.jsx)(e.p,{children:"\u8f93\u5165\u662f\u4e00\u4e2a\u4e8c\u7ef4\u6574\u6570\u6570\u7ec4\uff0c\u8f93\u51fa\u662f\u4e00\u4e2a\u975e\u8d1f\u6574\u6570\uff0c\u8868\u793a\u9700\u8981\u586b\u6d77\u9020\u9646\u7684\u4f4d\u7f6e\u6570\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input:\n[[1,1,1,1,1],\n [1,0,0,0,1],\n [1,0,1,0,1],\n [1,0,0,0,1],\n [1,1,1,1,1]]\nOutput: 1\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u9898\u89e3-1",children:"\u9898\u89e3"}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u9898\u5b9e\u9645\u4e0a\u662f\u6c42\u4e24\u4e2a\u5c9b\u5c7f\u95f4\u7684\u6700\u77ed\u8ddd\u79bb\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u5148\u901a\u8fc7\u4efb\u610f\u641c\u7d22\u65b9\u6cd5\u627e\u5230\u5176\u4e2d\u4e00\u4e2a\u5c9b\u5c7f\uff0c\u7136\u540e\u5229\u7528\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\uff0c\u67e5\u627e\u5176\u4e0e\u53e6\u4e00\u4e2a\u5c9b\u5c7f\u7684\u6700\u77ed\u8ddd\u79bb\u3002\u8fd9\u91cc\u6211\u4eec\u5c55\u793a\u5229\u7528\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u67e5\u627e\u7b2c\u4e00\u4e2a\u5c9b\u5c7f\u3002"}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)(s,{value:"cpp",label:"C++",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"vector<int> direction{-1, 0, 1, 0, -1};\n// \u8f85\u51fd\u6570\u3002\n\nvoid dfs(queue<pair<int, int>>& points, vector<vector<int>>& grid, int i,\n         int j) {\n    int m = grid.size(), n = grid[0].size();\n    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == 2) {\n        return;\n    }\n    if (grid[i][j] == 0) {\n        points.push({i, j});\n        return;\n    }\n    grid[i][j] = 2;\n    for (int k = 0; k < 4; ++k) {\n        dfs(points, grid, i + direction[k], j + direction[k + 1]);\n    }\n}\n\n// \u4e3b\u51fd\u6570\u3002\nint shortestBridge(vector<vector<int>>& grid) {\n    int m = grid.size(), n = grid[0].size();\n    queue<pair<int, int>> points;\n    // DFS\u5bfb\u627e\u7b2c\u4e00\u4e2a\u5c9b\u5c7f\uff0c\u5e76\u628a1\u5168\u90e8\u8d4b\u503c\u4e3a2\u3002\n    bool flipped = false;\n    for (int i = 0; i < m && !flipped; ++i) {\n        for (int j = 0; j < n && !flipped; ++j) {\n            if (grid[i][j] == 1) {\n                dfs(points, grid, i, j);\n                flipped = true;\n            }\n        }\n    }\n    // BFS\u5bfb\u627e\u7b2c\u4e8c\u4e2a\u5c9b\u5c7f\uff0c\u5e76\u628a\u8fc7\u7a0b\u4e2d\u7ecf\u8fc7\u76840\u8d4b\u503c\u4e3a2\u3002\n    int level = 0;\n    while (!points.empty()) {\n        ++level;\n        int n_points = points.size();\n        while (n_points--) {\n            auto [r, c] = points.front();\n            points.pop();\n            grid[r][c] = 2;\n            for (int k = 0; k < 4; ++k) {\n                int x = r + direction[k], y = c + direction[k + 1];\n                if (x >= 0 && x < m && y >= 0 && y < n) {\n                    if (grid[x][y] == 2) {\n                        continue;\n                    }\n                    if (grid[x][y] == 1) {\n                        return level;\n                    }\n                    grid[x][y] = 2;\n                    points.push({x, y});\n                }\n            }\n        }\n    }\n    return 0;\n}\n"})})}),(0,i.jsx)(s,{value:"py",label:"Python",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-py",children:"direction = [-1, 0, 1, 0, -1]\n\n# \u8f85\u51fd\u6570\u3002\ndef dfs(points: Deque[Tuple[int, int]], grid: List[List[int]], i: int, j: int):\n    m, n = len(grid), len(grid[0])\n    if i < 0 or i >= m or j < 0 or j >= n or grid[i][j] == 2:\n        return\n    if grid[i][j] == 0:\n        points.append((i, j))\n        return\n    grid[i][j] = 2\n    for k in range(4):\n        dfs(points, grid, i + direction[k], j + direction[k + 1])\n\ndef shortestBridge(grid: List[List[int]]) -> int:\n    m, n = len(grid), len(grid[0])\n    points = collections.deque()\n    # DFS\u5bfb\u627e\u7b2c\u4e00\u4e2a\u5c9b\u5c7f\uff0c\u5e76\u628a1\u5168\u90e8\u8d4b\u503c\u4e3a2\u3002\n    flipped = False\n    for i in range(m):\n        if flipped:\n            break\n        for j in range(n):\n            if grid[i][j] == 1:\n                dfs(points, grid, i, j)\n                flipped = True\n                break\n    # BFS\u5bfb\u627e\u7b2c\u4e8c\u4e2a\u5c9b\u5c7f\uff0c\u5e76\u628a\u8fc7\u7a0b\u4e2d\u7ecf\u8fc7\u76840\u8d4b\u503c\u4e3a2\u3002\n    level = 0\n    while len(points) > 0:\n        level += 1\n        points_at_current_level = len(points)\n        for _ in range(points_at_current_level):\n            r, c = points.popleft()\n            grid[r][c] = 2\n            for k in range(4):\n                x, y = r + direction[k], c + direction[k + 1]\n                if x >= 0 and x < m and y >= 0 and y < n:\n                    if grid[x][y] == 2:\n                        continue\n                    if grid[x][y] == 1:\n                        return level\n                    grid[x][y] = 2\n                    points.append((x, y))\n    return level\n"})})})]}),"\n",(0,i.jsx)(e.h2,{id:"126-word-ladder-ii",children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/word-ladder-ii/",children:"126. Word Ladder II"})}),"\n",(0,i.jsx)(e.h3,{id:"\u9898\u76ee\u63cf\u8ff0-2",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,i.jsx)(e.p,{children:"\u7ed9\u5b9a\u4e00\u4e2a\u8d77\u59cb\u5b57\u7b26\u4e32\u548c\u4e00\u4e2a\u7ec8\u6b62\u5b57\u7b26\u4e32\uff0c\u4ee5\u53ca\u4e00\u4e2a\u5355\u8bcd\u8868\uff0c\u6c42\u662f\u5426\u53ef\u4ee5\u5c06\u8d77\u59cb\u5b57\u7b26\u4e32\u6bcf\u6b21\u6539\u4e00\u4e2a\u5b57\u7b26\uff0c\u76f4\u5230\u6539\u6210\u7ec8\u6b62\u5b57\u7b26\u4e32\uff0c\u4e14\u6240\u6709\u4e2d\u95f4\u7684\u4fee\u6539\u8fc7\u7a0b\u8868\u793a\u7684\u5b57\u7b26\u4e32\u90fd\u53ef\u4ee5\u5728\u5355\u8bcd\u8868\u91cc\u627e\u5230\u3002\u82e5\u5b58\u5728\uff0c\u8f93\u51fa\u9700\u8981\u4fee\u6539\u6b21\u6570\u6700\u5c11\u7684\u6240\u6709\u66f4\u6539\u65b9\u5f0f\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b-2",children:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b"}),"\n",(0,i.jsx)(e.p,{children:"\u8f93\u5165\u662f\u4e24\u4e2a\u5b57\u7b26\u4e32\uff0c\u8f93\u51fa\u662f\u4e00\u4e2a\u4e8c\u7ef4\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u8868\u793a\u6bcf\u79cd\u5b57\u7b26\u4e32\u4fee\u6539\u65b9\u5f0f\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'Input: beginWord = "hit", endWord = "cog",\nwordList = ["hot","dot","dog","lot","log","cog"]\nOutput:\n[["hit","hot","dot","dog","cog"],\n ["hit","hot","lot","log","cog"]]\n'})}),"\n",(0,i.jsx)(e.h3,{id:"\u9898\u89e3-2",children:"\u9898\u89e3"}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u4eec\u53ef\u4ee5\u628a\u8d77\u59cb\u5b57\u7b26\u4e32\u3001\u7ec8\u6b62\u5b57\u7b26\u4e32\u3001\u4ee5\u53ca\u5355\u8bcd\u8868\u91cc\u6240\u6709\u7684\u5b57\u7b26\u4e32\u60f3\u8c61\u6210\u8282\u70b9\u3002\u82e5\u4e24\u4e2a\u5b57\u7b26\u4e32\u53ea\u6709\u4e00\u4e2a\u5b57\u7b26\u4e0d\u540c\uff0c\u90a3\u4e48\u5b83\u4eec\u76f8\u8fde\u3002\u56e0\u4e3a\u9898\u76ee\u9700\u8981\u8f93\u51fa\u4fee\u6539\u6b21\u6570\u6700\u5c11\u7684\u6240\u6709\u4fee\u6539\u65b9\u5f0f\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\uff0c\u6c42\u5f97\u8d77\u59cb\u8282\u70b9\u5230\u7ec8\u6b62\u8282\u70b9\u7684\u6700\u77ed\u8ddd\u79bb\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u6211\u4eec\u540c\u65f6\u8fd8\u4f7f\u7528\u4e86\u4e00\u4e2a\u5c0f\u6280\u5de7\uff1a\u6211\u4eec\u5e76\u4e0d\u662f\u76f4\u63a5\u4ece\u8d77\u59cb\u8282\u70b9\u8fdb\u884c\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\uff0c\u76f4\u5230\u627e\u5230\u7ec8\u6b62\u8282\u70b9\u4e3a\u6b62\uff1b\u800c\u662f\u4ece\u8d77\u59cb\u8282\u70b9\u548c\u7ec8\u6b62\u8282\u70b9\u5206\u522b\u8fdb\u884c\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\uff0c\u6bcf\u6b21\u53ea\u5ef6\u5c55\u5f53\u524d\u5c42\u8282\u70b9\u6570\u6700\u5c11\u7684\u90a3\u4e00\u7aef\uff0c\u8fd9\u6837\u6211\u4eec\u53ef\u4ee5\u51cf\u5c11\u641c\u7d22\u7684\u603b\u7ed3\u70b9\u6570\u3002\u4e3e\u4f8b\u6765\u8bf4\uff0c\u5047\u8bbe\u6700\u77ed\u8ddd\u79bb\u4e3a 4\uff0c\u5982\u679c\u6211\u4eec\u53ea\u4ece\u4e00\u7aef\u641c\u7d22 4 \u5c42\uff0c\u603b\u904d\u5386\u8282\u70b9\u6570\u6700\u591a\u662f ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mn,{children:"2"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mn,{children:"4"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mn,{children:"8"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mn,{children:"16"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mn,{children:"31"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 + 2 + 4 + 8 + 16 = 31"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(e.span,{className:"mord",children:"2"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(e.span,{className:"mord",children:"4"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(e.span,{className:"mord",children:"8"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"16"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"31"})]})]})]}),"\uff1b\u800c\u5982\u679c\u6211\u4eec\u4ece\u4e24\u7aef\u5404\u641c\u7d22\u4e24\u5c42\uff0c\u603b\u904d\u5386\u8282\u70b9\u6570\u6700\u591a\u53ea\u6709 ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mn,{children:"2"}),(0,i.jsx)(e.mo,{children:"\xd7"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mn,{children:"2"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mn,{children:"4"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mn,{children:"14"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"2 \xd7 (1 + 2 + 4) =14"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(e.span,{className:"mord",children:"2"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(e.span,{className:"mord",children:"2"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord",children:"4"}),(0,i.jsx)(e.span,{className:"mclose",children:")"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"14"})]})]})]}),"\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u641c\u7d22\u7ed3\u675f\u540e\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u901a\u8fc7\u56de\u6eaf\u6cd5\u6765\u91cd\u5efa\u6240\u6709\u53ef\u80fd\u7684\u8def\u5f84\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u9053\u9898\u7565\u5fae\u590d\u6742\uff0c\u9700\u8981\u8bfb\u8005\u8010\u5fc3\u601d\u8003\u548c\u5b9e\u73b0\u4ee3\u7801\u3002LeetCode \u5bf9\u4e8e\u672c\u9898\u7684\u65f6\u95f4\u8981\u6c42\u975e\u5e38\u4e25\u683c\uff0c\u5373\u4f7f\u662f\u5b98\u65b9\u9898\u89e3\u4e5f\u7ecf\u5e38\u5bb9\u6613\u8d85\u65f6\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u591a\u6b21\u63d0\u4ea4\u3002"}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)(s,{value:"cpp",label:"C++",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"// \u8f85\u51fd\u6570\u3002\nvoid backtracking(const string &src, const string &dst,\n                  unordered_map<string, vector<string>> &next_words,\n                  vector<string> &path, vector<vector<string>> &ladder) {\n    if (src == dst) {\n        ladder.push_back(path);\n        return;\n    }\n    if (!next_words.contains(src)) {\n        return;\n    }\n    for (const auto &w : next_words[src]) {\n        path.push_back(w);  // \u4fee\u6539\u5f53\u524d\u8282\u70b9\u72b6\u6001\n        backtracking(w, dst, next_words, path, ladder);  // \u9012\u5f52\u5b50\u8282\u70b9\n        path.pop_back();  // \u56de\u6539\u5f53\u524d\u8282\u70b9\u72b6\u6001\n    }\n}\n\n// \u4e3b\u51fd\u6570\u3002\nvector<vector<string>> findLadders(string beginWord, string endWord,\n                                   vector<string> &wordList) {\n    vector<vector<string>> ladder;\n    // \u7528\u54c8\u5e0c\u96c6\u5408\u5b58\u50a8\u5b57\u5178\uff0c\u65b9\u4fbf\u67e5\u627e\u3002\n    unordered_set<string> word_dict;\n    for (const auto &w : wordList) {\n        word_dict.insert(w);\n    }\n    if (!word_dict.contains(endWord)) {\n        return ladder;\n    }\n    word_dict.erase(beginWord);\n    word_dict.erase(endWord);\n    // \u5efa\u7acb\u4e24\u4e2aqueue\uff0c\u4ecebeginWord\u548cendWord\u540c\u65f6\u5ef6\u5c55\uff0c\u6bcf\u6b21\u5ef6\u5c55\u6700\u5c0f\u7684\u3002\n    // \u56e0\u4e3a\u4e4b\u540e\u7684\u53bb\u91cd\u64cd\u4f5c\u9700\u8981\u904d\u5386queue\uff0c\u6211\u4eec\u8fd9\u91cc\u7528\u54c8\u5e0c\u8868\u5b9e\u73b0\u5b83\uff0c\n    // \u53ea\u8981\u4fdd\u8bc1\u662f\u5206\u5c42\u6b21\u904d\u5386\u5373\u53ef\u3002\n    unordered_set<string> q_small{beginWord}, q_large{endWord};\n    unordered_map<string, vector<string>> next_words;\n    bool reversed_path = false, found_path = false;\n    while (!q_small.empty()) {\n        unordered_set<string> q;\n        for (const auto &w : q_small) {\n            string s = w;\n            for (int i = 0; i < s.size(); ++i) {\n                for (int j = 0; j < 26; ++j) {\n                    s[i] = j + \u2019a\u2019;\n                    if (q_large.contains(s)) {\n                        reversed_path ? next_words[s].push_back(w)\n                                      : next_words[w].push_back(s);\n                        found_path = true;\n                    }\n                    if (word_dict.contains(s)) {\n                        reversed_path ? next_words[s].push_back(w)\n                                      : next_words[w].push_back(s);\n                        q.insert(s);\n                    }\n                }\n                s[i] = w[i];\n            }\n        }\n        if (found_path) {\n            break;\n        }\n        // \u73af\u8def\u4e00\u5b9a\u4e0d\u662f\u6700\u77ed\u89e3\uff0c\u6240\u4ee5\u8fd9\u91cc\u9700\u8981\u53bb\u91cd\u548c\u907f\u514d\u65e0\u9650\u5faa\u73af\u3002\n        for (const auto &w : q) {\n            word_dict.erase(w);\n        }\n        // \u66f4\u65b0\u4e24\u4e2aqueue\uff0c\u5e76\u7ef4\u6301\u5927\u5c0f\u5173\u7cfb\u3002\n        if (q.size() <= q_large.size()) {\n            q_small = q;\n        } else {\n            reversed_path = !reversed_path;\n            q_small = q_large;\n            q_large = q;\n        }\n    }\n    if (found_path) {\n        vector<string> path{beginWord};\n        backtracking(beginWord, endWord, next_words, path, ladder);\n    }\n    return ladder;\n}\n"})})}),(0,i.jsx)(s,{value:"py",label:"Python",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-py",children:'# \u8f85\u51fd\u6570\u3002\ndef backtracking(src: str, dst: str, next_words: Dict[str, List[str]],\n                 path: List[str], ladder: List[List[str]]):\n    if src == dst:\n        ladder.append(path[:])\n        return\n    if src not in next_words:\n        return\n    for w in next_words[src]:\n        path.append(w)  # \u4fee\u6539\u5f53\u524d\u8282\u70b9\u72b6\u6001\n        backtracking(w, dst, next_words, path, ladder)  # \u9012\u5f52\u5b50\u8282\u70b9\n        path.pop()  # \u56de\u6539\u5f53\u524d\u8282\u70b9\u72b6\u6001\n\n# \u4e3b\u51fd\u6570\u3002\ndef findLadders(beginWord: str, endWord: str,\n              wordList: List[str]) -> List[List[str]]:\n    ladder = []\n    # \u7528\u54c8\u5e0c\u96c6\u5408\u5b58\u50a8\u5b57\u5178\uff0c\u65b9\u4fbf\u67e5\u627e\u3002\n    word_dict = set(wordList)\n    if endWord not in word_dict:\n        return ladder\n    word_dict = word_dict.difference(set([beginWord, endWord]))\n    # \u5efa\u7acb\u4e24\u4e2aqueue\uff0c\u4ecebeginWord\u548cendWord\u540c\u65f6\u5ef6\u5c55\uff0c\u6bcf\u6b21\u5ef6\u5c55\u6700\u5c0f\u7684\u3002\n    # \u56e0\u4e3a\u4e4b\u540e\u7684\u53bb\u91cd\u64cd\u4f5c\u9700\u8981\u904d\u5386queue\uff0c\u6211\u4eec\u8fd9\u91cc\u7528\u54c8\u5e0c\u8868\u5b9e\u73b0\u5b83\uff0c\n    # \u53ea\u8981\u4fdd\u8bc1\u662f\u5206\u5c42\u6b21\u904d\u5386\u5373\u53ef\u3002\n    q_small, q_large = set([beginWord]), set([endWord])\n    next_words = dict()\n    reversed_path, found_path = False, False\n    while len(q_small) > 0:\n        q = set()\n        for w in q_small:\n            for i in range(len(w)):\n                for j in range(26):\n                    s = w[:i] + chr(ord("a") + j) + w[i + 1:]\n                    if s in q_large:\n                        if reversed_path:\n                            next_words[s] = next_words.get(s, []) + [w]\n                        else:\n                            next_words[w] = next_words.get(w, []) + [s]\n                        found_path = True\n                    if s in word_dict:\n                        if reversed_path:\n                            next_words[s] = next_words.get(s, []) + [w]\n                        else:\n                            next_words[w] = next_words.get(w, []) + [s]\n                        q.add(s)\n        if found_path:\n            break\n        # \u73af\u8def\u4e00\u5b9a\u4e0d\u662f\u6700\u77ed\u89e3\uff0c\u6240\u4ee5\u8fd9\u91cc\u9700\u8981\u53bb\u91cd\u548c\u907f\u514d\u65e0\u9650\u5faa\u73af\u3002\n        word_dict = word_dict.difference(q)\n        # \u66f4\u65b0\u4e24\u4e2aqueue\uff0c\u5e76\u7ef4\u6301\u5927\u5c0f\u5173\u7cfb\u3002\n        if len(q) <= len(q_large):\n            q_small = q\n        else:\n            reversed_path = not reversed_path\n            q_small = q_large\n            q_large = q\n\n    if found_path:\n        path = [beginWord]\n        backtracking(beginWord, endWord, next_words, path, ladder)\n    return ladder\n\n'})})})]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}function p(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);