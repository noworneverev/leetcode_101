"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[4665],{8633:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"greedy-algorithms/1-3-interval-problems","title":"1.3 Interval Problem","description":"435. Non-overlapping Intervals","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/1-greedy-algorithms/1-3-interval-problems.mdx","sourceDirName":"1-greedy-algorithms","slug":"/greedy-algorithms/1-3-interval-problems","permalink":"/leetcode_101/en/greedy-algorithms/1-3-interval-problems","draft":false,"unlisted":false,"editUrl":"https://github.com/noworneverev/leetcode_101/tree/master/leetcode_101/docs/1-greedy-algorithms/1-3-interval-problems.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"1.2 Distribution Problem","permalink":"/leetcode_101/en/greedy-algorithms/1-2-assignment-problems"},"next":{"title":"1.4 Exercises","permalink":"/leetcode_101/en/greedy-algorithms/1-4-exercises"}}');var i=t(4848),a=t(8453);const l={sidebar_position:3},o="1.3 Interval Problem",s={},d=[{value:"435. Non-overlapping Intervals",id:"435-non-overlapping-intervals",level:2},{value:"Problem Description",id:"problem-description",level:3},{value:"Input and Output Example",id:"input-and-output-example",level:3},{value:"Solution Explanation",id:"solution-explanation",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components},{TabItem:t,Tabs:r}=n;return t||c("TabItem",!0),r||c("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"13-interval-problem",children:"1.3 Interval Problem"})}),"\n",(0,i.jsx)(n.h2,{id:"435-non-overlapping-intervals",children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/non-overlapping-intervals/",children:"435. Non-overlapping Intervals"})}),"\n",(0,i.jsx)(n.h3,{id:"problem-description",children:"Problem Description"}),"\n",(0,i.jsx)(n.p,{children:"Given multiple intervals, calculate the minimum number of intervals that need to be removed to make the remaining intervals non-overlapping. Adjacent intervals that meet at endpoints are not considered overlapping."}),"\n",(0,i.jsx)(n.h3,{id:"input-and-output-example",children:"Input and Output Example"}),"\n",(0,i.jsx)(n.p,{children:"The input is an array containing multiple subarrays, each with a fixed length of 2, representing the start and end of each interval. The output is an integer indicating the number of intervals that need to be removed."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: [[1,2], [2,4], [1,3]]\nOutput: 1\n"})}),"\n",(0,i.jsx)(n.p,{children:"In this example, we can remove the interval [1,3] so that the remaining intervals [[1,2], [2,4]] are non-overlapping."}),"\n",(0,i.jsx)(n.h3,{id:"solution-explanation",children:"Solution Explanation"}),"\n",(0,i.jsx)(n.p,{children:"Finding the minimum number of intervals to remove is equivalent to maximizing the number of non-overlapping intervals we can retain. When selecting intervals to keep, the end point of each interval is critical: the smaller the chosen interval\u2019s end, the more space is left for other intervals, allowing more intervals to be retained. Thus, the greedy strategy we use is to prioritize retaining intervals with smaller end points that do not overlap."}),"\n",(0,i.jsx)(n.p,{children:"The specific implementation involves first sorting the intervals in ascending order by their end points (using a lambda function) and then selecting the interval with the smallest end point that does not overlap with the previously chosen interval."}),"\n",(0,i.jsx)(n.p,{children:"In the example, the sorted array is [[1,2], [1,3], [2,4]]. According to our greedy strategy, we initialize with the interval [1,2]; since [1,3] overlaps with [1,2], we skip this interval; since [2,4] does not overlap with [1,2], we keep it. Therefore, the final retained intervals are [[1,2], [2,4]]."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"It is necessary to determine whether to sort by the start or end of the intervals based on the specific requirements."})}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)(t,{value:"cpp",label:"C++",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"int eraseOverlapIntervals(vector<vector<int>>& intervals) {\n    sort(intervals.begin(), intervals.end(),\n         [](vector<int>& a, vector<int>& b) { return a[1] < b[1]; });\n    int removed = 0, prev_end = intervals[0][1];\n    for (int i = 1; i < intervals.size(); ++i) {\n        if (intervals[i][0] < prev_end) {\n            ++removed;\n        } else {\n            prev_end = intervals[i][1];\n        }\n    }\n    return removed;\n}\n"})})}),(0,i.jsx)(t,{value:"py",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"def eraseOverlapIntervals(intervals: List[List[int]]) -> int:\n    intervals.sort(key=lambda x: x[1])\n    removed, prev_end = 0, intervals[0][1]\n    for i in range(1, len(intervals)):\n        if prev_end > intervals[i][0]:\n            removed += 1\n        else:\n            prev_end = intervals[i][1]\n    return removed\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);