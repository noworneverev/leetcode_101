"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[6952],{2881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"data-structures/10-9-multisets-and-maps","title":"10.9 \u591a\u91cd\u96c6\u5408\u548c\u6620\u5c04","description":"332. Reconstruct Itinerary","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/10-data-structures/10-9-multisets-and-maps.mdx","sourceDirName":"10-data-structures","slug":"/data-structures/10-9-multisets-and-maps","permalink":"/leetcode_101/en/data-structures/10-9-multisets-and-maps","draft":false,"unlisted":false,"editUrl":"https://github.com/noworneverev/leetcode_101/tree/master/leetcode_101/docs/10-data-structures/10-9-multisets-and-maps.mdx","tags":[],"version":"current","sidebarPosition":56,"frontMatter":{"sidebar_position":56},"sidebar":"tutorialSidebar","previous":{"title":"10.8 \u54c8\u5e0c\u8868","permalink":"/leetcode_101/en/data-structures/10-8-hash-table"},"next":{"title":"10.10 \u524d\u7f00\u548c\u4e0e\u79ef\u5206\u56fe","permalink":"/leetcode_101/en/data-structures/10-10-prefix-sum-integral-image"}}');var i=n(4848),s=n(8453);const c={sidebar_position:56},a="10.9 \u591a\u91cd\u96c6\u5408\u548c\u6620\u5c04",o={},l=[{value:"332. Reconstruct Itinerary",id:"332-reconstruct-itinerary",level:2},{value:"Problem Description",id:"problem-description",level:3},{value:"Input and Output Example",id:"input-and-output-example",level:3},{value:"Solution Explanation",id:"solution-explanation",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components},{TabItem:n,Tabs:r}=t;return n||u("TabItem",!0),r||u("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"109-\u591a\u91cd\u96c6\u5408\u548c\u6620\u5c04",children:"10.9 \u591a\u91cd\u96c6\u5408\u548c\u6620\u5c04"})}),"\n",(0,i.jsx)(t.h2,{id:"332-reconstruct-itinerary",children:(0,i.jsx)(t.a,{href:"https://leetcode.com/problems/reconstruct-itinerary/",children:"332. Reconstruct Itinerary"})}),"\n",(0,i.jsx)(t.h3,{id:"problem-description",children:"Problem Description"}),"\n",(0,i.jsx)(t.p,{children:"\u7ed9\u5b9a\u4e00\u4e2a\u4eba\u5750\u8fc7\u7684\u4e00\u4e9b\u98de\u673a\u7684\u8d77\u6b62\u673a\u573a\uff0c\u5df2\u77e5\u8fd9\u4e2a\u4eba\u4ece JFK \u8d77\u98de\uff0c\u90a3\u4e48\u8fd9\u4e2a\u4eba\u662f\u6309\u4ec0\u4e48\u987a\u5e8f\u98de\u7684\uff1b\u5982\u679c\u5b58\u5728\u591a\u79cd\u53ef\u80fd\u6027\uff0c\u8fd4\u56de\u5b57\u6bcd\u5e8f\u6700\u5c0f\u7684\u90a3\u79cd\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"input-and-output-example",children:"Input and Output Example"}),"\n",(0,i.jsx)(t.p,{children:"\u8f93\u5165\u662f\u4e00\u4e2a\u4e8c\u7ef4\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u8868\u793a\u591a\u4e2a\u8d77\u6b62\u673a\u573a\u5bf9\u5b50\uff1b\u8f93\u51fa\u662f\u4e00\u4e2a\u4e00\u7ef4\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u8868\u793a\u98de\u884c\u987a\u5e8f\u3002"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]\nOutput: ["JFK", "MUC", "LHR", "SFO", "SJC"]\n'})}),"\n",(0,i.jsx)(t.h3,{id:"solution-explanation",children:"Solution Explanation"}),"\n",(0,i.jsx)(t.p,{children:"\u672c\u9898\u53ef\u4ee5\u5148\u7528\u54c8\u5e0c\u8868\u8bb0\u5f55\u8d77\u6b62\u673a\u573a\uff0c\u5176\u4e2d\u952e\u662f\u8d77\u59cb\u673a\u573a\uff0c\u503c\u662f\u4e00\u4e2a\u591a\u91cd\uff08\u6709\u5e8f\uff09\u96c6\u5408\uff0c\u8868\u793a\u5bf9\u5e94\u7684\u7ec8\u6b62\u673a\u573a\u3002\u56e0\u4e3a\u4e00\u4e2a\u4eba\u53ef\u80fd\u5750\u8fc7\u91cd\u590d\u7684\u7ebf\u8def\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u4f7f\u7528\u591a\u91cd\u96c6\u5408\u50a8\u5b58\u91cd\u590d\u503c\u3002\u50a8\u5b58\u5b8c\u6210\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u6808/DFS \u6765\u6062\u590d\u4ece\u7ec8\u70b9\u5230\u8d77\u70b9\u98de\u884c\u7684\u987a\u5e8f\uff0c\u518d\u5c06\u7ed3\u679c\u9006\u5e8f\u5f97\u5230\u4ece\u8d77\u70b9\u5230\u7ec8\u70b9\u7684\u987a\u5e8f\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u56e0\u4e3a Python \u6ca1\u6709\u9ed8\u8ba4\u7684\u591a\u91cd\uff08\u6709\u5e8f\uff09\u96c6\u5408\u5b9e\u73b0\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5b58\u50a8\u4e00\u4e2a\u6570\u7ec4\uff0c\u7136\u540e\u8fdb\u884c\u6392\u5e8f\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528 Counter \u7ed3\u6784\uff0c\u6bcf\u6b21\u67e5\u627e\u4e0b\u4e00\u4e2a\u673a\u573a\u65f6\uff0c\u8fd4\u56de key \u503c\u6700\u5c0f\u7684\u90a3\u4e2a\u3002"}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)(n,{value:"cpp",label:"C++",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:'vector<string> findItinerary(vector<vector<string>>& tickets) {\n    vector<string> itinerary;\n    unordered_map<string, multiset<string>> cache;\n    for (const auto& ticket : tickets) {\n        cache[ticket[0]].insert(ticket[1]);\n    }\n    stack<string> s;\n    s.push("JFK");\n    while (!s.empty()) {\n        string t = s.top();\n        if (cache[t].empty()) {\n            itinerary.push_back(t);\n            s.pop();\n        } else {\n            s.push(*cache[t].begin());\n            cache[t].erase(cache[t].begin());\n        }\n    }\n    reverse(itinerary.begin(), itinerary.end());\n    return itinerary;\n}\n'})})}),(0,i.jsx)(n,{value:"py",label:"Python",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-py",children:'def findItinerary(tickets: List[List[str]]) -> List[str]:\n    itinerary = []\n    cache = dict()\n    \n    for ticket in tickets:\n        if ticket[0] not in cache:\n            cache[ticket[0]] = []\n        cache[ticket[0]].append(ticket[1])\n    \n    for ticket in cache.keys():\n        cache[ticket].sort(reverse=True)\n    \n    s = ["JFK"]\n    while len(s) > 0:\n        t = s[-1]\n        if t not in cache or len(cache[t]) == 0:\n            itinerary.append(t)\n            s.pop()\n        else:\n            t_next = cache[t].pop()\n            s.append(t_next)\n    \n    return list(reversed(itinerary))\n\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);