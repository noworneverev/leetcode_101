"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[1753],{3361:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"greedy-algorithms/1-3-interval-problems","title":"1.3 \u533a\u95f4\u95ee\u9898","description":"435. Non-overlapping Intervals","source":"@site/docs/1-greedy-algorithms/1-3-interval-problems.mdx","sourceDirName":"1-greedy-algorithms","slug":"/greedy-algorithms/1-3-interval-problems","permalink":"/leetcode_101/greedy-algorithms/1-3-interval-problems","draft":false,"unlisted":false,"editUrl":"https://github.com/noworneverev/leetcode_101/tree/master/leetcode_101/docs/1-greedy-algorithms/1-3-interval-problems.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"1.2 \u5206\u914d\u95ee\u9898","permalink":"/leetcode_101/greedy-algorithms/1-2-assignment-problems"},"next":{"title":"1.4 \u7ec3\u4e60","permalink":"/leetcode_101/greedy-algorithms/1-4-exercises"}}');var t=r(4848),l=r(8453);const s={sidebar_position:3},a="1.3 \u533a\u95f4\u95ee\u9898",o={},d=[{value:"435. Non-overlapping Intervals",id:"435-non-overlapping-intervals",level:2},{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:3},{value:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components},{TabItem:r,Tabs:i}=n;return r||v("TabItem",!0),i||v("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"13-\u533a\u95f4\u95ee\u9898",children:"1.3 \u533a\u95f4\u95ee\u9898"})}),"\n",(0,t.jsx)(n.h2,{id:"435-non-overlapping-intervals",children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/non-overlapping-intervals/",children:"435. Non-overlapping Intervals"})}),"\n",(0,t.jsx)(n.h3,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,t.jsx)(n.p,{children:"\u7ed9\u5b9a\u591a\u4e2a\u533a\u95f4\uff0c\u8ba1\u7b97\u8ba9\u8fd9\u4e9b\u533a\u95f4\u4e92\u4e0d\u91cd\u53e0\u6240\u9700\u8981\u79fb\u9664\u533a\u95f4\u7684\u6700\u5c11\u4e2a\u6570\u3002\u8d77\u6b62\u76f8\u8fde\u4e0d\u7b97\u91cd\u53e0\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",children:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u8f93\u5165\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u5305\u542b\u591a\u4e2a\u957f\u5ea6\u56fa\u5b9a\u4e3a 2 \u7684\u5b50\u6570\u7ec4\uff0c\u8868\u793a\u6bcf\u4e2a\u533a\u95f4\u7684\u5f00\u59cb\u548c\u7ed3\u5c3e\u3002\u8f93\u51fa\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u9700\u8981\u79fb\u9664\u7684\u533a\u95f4\u6570\u91cf\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: [[1,2], [2,4], [1,3]]\nOutput: 1\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u8fd9\u4e2a\u6837\u4f8b\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u79fb\u9664\u533a\u95f4 [1,3]\uff0c\u4f7f\u5f97\u5269\u4f59\u7684\u533a\u95f4 [[1,2], [2,4]] \u4e92\u4e0d\u91cd\u53e0\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,t.jsx)(n.p,{children:"\u6c42\u6700\u5c11\u7684\u79fb\u9664\u533a\u95f4\u4e2a\u6570\uff0c\u7b49\u4ef7\u4e8e\u5c3d\u91cf\u591a\u4fdd\u7559\u4e0d\u91cd\u53e0\u7684\u533a\u95f4\u3002\u5728\u9009\u62e9\u8981\u4fdd\u7559\u533a\u95f4\u65f6\uff0c\u533a\u95f4\u7684\u7ed3\u5c3e\u5341\u5206\u91cd\u8981\uff1a\u9009\u62e9\u7684\u533a\u95f4\u7ed3\u5c3e\u8d8a\u5c0f\uff0c\u4f59\u7559\u7ed9\u5176\u5b83\u533a\u95f4\u7684\u7a7a\u95f4\u5c31\u8d8a\u5927\uff0c\u5c31\u8d8a\u80fd\u4fdd\u7559\u66f4\u591a\u7684\u533a\u95f4\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u91c7\u53d6\u7684\u8d2a\u5fc3\u7b56\u7565\u4e3a\uff0c\u4f18\u5148\u4fdd\u7559\u7ed3\u5c3e\u5c0f\u4e14\u4e0d\u76f8\u4ea4\u7684\u533a\u95f4\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5177\u4f53\u5b9e\u73b0\u65b9\u6cd5\u4e3a\uff0c\u5148\u628a\u533a\u95f4\u6309\u7167\u7ed3\u5c3e\u7684\u5927\u5c0f\u8fdb\u884c\u589e\u5e8f\u6392\u5e8f\uff08\u5229\u7528 lambda \u51fd\u6570\uff09\uff0c\u6bcf\u6b21\u9009\u62e9\u7ed3\u5c3e\u6700\u5c0f\u4e14\u548c\u524d\u4e00\u4e2a\u9009\u62e9\u7684\u533a\u95f4\u4e0d\u91cd\u53e0\u7684\u533a\u95f4\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6837\u4f8b\u4e2d\uff0c\u6392\u5e8f\u540e\u7684\u6570\u7ec4\u4e3a [[1,2], [1,3], [2,4]]\u3002\u6309\u7167\u6211\u4eec\u7684\u8d2a\u5fc3\u7b56\u7565\uff0c\u9996\u5148\u521d\u59cb\u5316\u4e3a\u533a\u95f4[1,2]\uff1b\u7531\u4e8e [1,3] \u4e0e [1,2] \u76f8\u4ea4\uff0c\u6211\u4eec\u8df3\u8fc7\u8be5\u533a\u95f4\uff1b\u7531\u4e8e [2,4] \u4e0e [1,2] \u4e0d\u76f8\u4ea4\uff0c\u6211\u4eec\u5c06\u5176\u4fdd\u7559\u3002\u56e0\u6b64\u6700\u7ec8\u4fdd\u7559\u7684\u533a\u95f4\u4e3a [[1,2], [2,4]]\u3002"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"\u9700\u8981\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u5224\u65ad\u6309\u533a\u95f4\u5f00\u5934\u6392\u5e8f\u8fd8\u662f\u6309\u533a\u95f4\u7ed3\u5c3e\u6392\u5e8f\u3002"})}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)(r,{value:"cpp",label:"C++",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"int eraseOverlapIntervals(vector<vector<int>>& intervals) {\n    sort(intervals.begin(), intervals.end(),\n         [](vector<int>& a, vector<int>& b) { return a[1] < b[1]; });\n    int removed = 0, prev_end = intervals[0][1];\n    for (int i = 1; i < intervals.size(); ++i) {\n        if (intervals[i][0] < prev_end) {\n            ++removed;\n        } else {\n            prev_end = intervals[i][1];\n        }\n    }\n    return removed;\n}\n"})})}),(0,t.jsx)(r,{value:"py",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"def eraseOverlapIntervals(intervals: List[List[int]]) -> int:\n    intervals.sort(key=lambda x: x[1])\n    removed, prev_end = 0, intervals[0][1]\n    for i in range(1, len(intervals)):\n        if prev_end > intervals[i][0]:\n            removed += 1\n        else:\n            prev_end = intervals[i][1]\n    return removed\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function v(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);