"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[1229],{6204:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>r});const t=JSON.parse('{"id":"data-structures/10-8-hash-table","title":"10.8 Hash Table","description":"A hash table (also known as a hash map) uses $O(n)$ space complexity to store data. By leveraging a hash function, it maps positions to achieve approximate $O(1)$ time complexity for insertion, lookup, and deletion operations. Hash tables can be utilized for tasks such as frequency counting and content recording.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/10-data-structures/10-8-hash-table.mdx","sourceDirName":"10-data-structures","slug":"/data-structures/10-8-hash-table","permalink":"/leetcode_101/en/data-structures/10-8-hash-table","draft":false,"unlisted":false,"editUrl":"https://github.com/noworneverev/leetcode_101/tree/master/leetcode_101/docs/10-data-structures/10-8-hash-table.mdx","tags":[],"version":"current","sidebarPosition":55,"frontMatter":{"sidebar_position":55},"sidebar":"tutorialSidebar","previous":{"title":"10.7 Double-Ended Queue","permalink":"/leetcode_101/en/data-structures/10-7-deque"},"next":{"title":"10.9 Multisets and Mappings","permalink":"/leetcode_101/en/data-structures/10-9-multisets-and-maps"}}');var a=s(4848),i=s(8453);const l={sidebar_position:55},o="10.8 Hash Table",c={},r=[{value:"1. Two Sum",id:"1-two-sum",level:2},{value:"Problem Description",id:"problem-description",level:3},{value:"Input and Output Example",id:"input-and-output-example",level:3},{value:"Solution Explanation",id:"solution-explanation",level:3},{value:"128. Longest Consecutive Sequence",id:"128-longest-consecutive-sequence",level:2},{value:"Problem Description",id:"problem-description-1",level:3},{value:"Input and Output Example",id:"input-and-output-example-1",level:3},{value:"Solution Explanation",id:"solution-explanation-1",level:3},{value:"149. Max Points on a Line",id:"149-max-points-on-a-line",level:2},{value:"Problem Description",id:"problem-description-2",level:3},{value:"Input and Output Example",id:"input-and-output-example-2",level:3},{value:"Solution Explanation",id:"solution-explanation-2",level:3}];function h(e){const n={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,i.R)(),...e.components},{TabItem:s,Tabs:t}=n;return s||m("TabItem",!0),t||m("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"108-hash-table",children:"10.8 Hash Table"})}),"\n",(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.code,{children:"hash table"})," (also known as a hash map) uses ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]})," space complexity to store data. By leveraging a hash function, it maps positions to achieve approximate ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mn,{children:"1"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord",children:"1"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]})," time complexity for insertion, lookup, and deletion operations. Hash tables can be utilized for tasks such as frequency counting and content recording."]}),"\n",(0,a.jsx)(n.p,{children:"If the elements are finite and their range is small, a fixed-size array can be used to store or count elements. For instance, to count the occurrences of all letters in a string, you can use an array of length 26, where the hash function maps each letter to its position in the alphabet. This approach reduces the space complexity to a constant."}),"\n",(0,a.jsx)(n.h2,{id:"1-two-sum",children:(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/two-sum/",children:"1. Two Sum"})}),"\n",(0,a.jsx)(n.h3,{id:"problem-description",children:"Problem Description"}),"\n",(0,a.jsx)(n.p,{children:"Given an (unsorted) array of integers, find the indices of two numbers that add up to a specific target. Assume that there is exactly one solution."}),"\n",(0,a.jsx)(n.h3,{id:"input-and-output-example",children:"Input and Output Example"}),"\n",(0,a.jsx)(n.p,{children:"Input is a one-dimensional integer array and a target value. Output is a one-dimensional array of size 2, representing the indices of the two numbers."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: nums = [2, 7, 15, 11], target = 9\nOutput: [0, 1]\n"})}),"\n",(0,a.jsx)(n.p,{children:"In this example, the value at index 0 (2) and the value at index 1 (7) sum up to 9."}),"\n",(0,a.jsx)(n.h3,{id:"solution-explanation",children:"Solution Explanation"}),"\n",(0,a.jsxs)(n.p,{children:["We can use a hash table to store values we have already seen along with their indices. For each index ",(0,a.jsx)(n.code,{children:"i"}),", we check if ",(0,a.jsx)(n.code,{children:"target - nums[i]"})," exists in the hash table. If it does, it means the two numbers sum up to the target."]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)(s,{value:"cpp",label:"C++",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"vector<int> twoSum(vector<int>& nums, int target) {\n    unordered_map<int, int> cache;  // <value, index>\n    for (int i = 0; i < nums.size(); ++i) {\n        int num1 = nums[i], num2 = target - num1;\n        if (cache.contains(num2)) {\n            return vector<int>{cache[num2], i};\n        }\n        cache[num1] = i;\n    }\n    return {};\n}\n"})})}),(0,a.jsx)(s,{value:"py",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"def twoSum(nums: List[int], target: int) -> List[int]:\n    cache = dict() # <value, index>\n    for i, num1 in enumerate(nums):\n        num2 = target - num1\n        if num2 in cache:\n            return [cache[num2], i]\n        cache[num1] = i\n    return []\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"128-longest-consecutive-sequence",children:(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/longest-consecutive-sequence/",children:"128. Longest Consecutive Sequence"})}),"\n",(0,a.jsx)(n.h3,{id:"problem-description-1",children:"Problem Description"}),"\n",(0,a.jsx)(n.p,{children:"Given an array of integers, find the length of the longest consecutive sequence that can be formed using the numbers in the array."}),"\n",(0,a.jsx)(n.h3,{id:"input-and-output-example-1",children:"Input and Output Example"}),"\n",(0,a.jsx)(n.p,{children:"Input is an array of integers, and output is an integer representing the length of the consecutive sequence."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: [100, 4, 200, 1, 3, 2]\nOutput: 4\n"})}),"\n",(0,a.jsx)(n.p,{children:"In this example, the longest consecutive sequence is [1,2,3,4]."}),"\n",(0,a.jsx)(n.h3,{id:"solution-explanation-1",children:"Solution Explanation"}),"\n",(0,a.jsx)(n.p,{children:"We can put all the numbers into a hash table and repeatedly pick any value from the hash table. For each value, we remove all its consecutive numbers before and after it, and update the length of the longest consecutive sequence. Repeating this process allows us to find all consecutive number sequences."}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)(s,{value:"cpp",label:"C++",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"int longestConsecutive(vector<int>& nums) {\n    unordered_set<int> cache(nums.begin(), nums.end());\n    int max_len = 0;\n    while (!cache.empty()) {\n        int cur = *(cache.begin());\n        cache.erase(cur);\n        int l = cur - 1, r = cur + 1;\n        while (cache.contains(l)) {\n            cache.erase(l--);\n        }\n        while (cache.contains(r)) {\n            cache.erase(r++);\n        }\n        max_len = max(max_len, r - l - 1);\n    }\n    return max_len;\n}\n"})})}),(0,a.jsx)(s,{value:"py",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"def longestConsecutive(nums: List[int]) -> int:\n    cache = set(nums)\n    max_len = 0\n\n    while len(cache) > 0:\n        cur = next(iter(cache))\n        cache.remove(cur)\n\n        l, r = cur - 1, cur + 1\n        while l in cache:\n            cache.remove(l)\n            l -= 1\n        while r in cache:\n            cache.remove(r)\n            r += 1\n\n        max_len = max(max_len, r - l - 1)\n\n    return max_len\n\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"149-max-points-on-a-line",children:(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/max-points-on-a-line/",children:"149. Max Points on a Line"})}),"\n",(0,a.jsx)(n.h3,{id:"problem-description-2",children:"Problem Description"}),"\n",(0,a.jsx)(n.p,{children:"Given some points in a 2D plane, find the maximum number of points that lie on the same straight line."}),"\n",(0,a.jsx)(n.h3,{id:"input-and-output-example-2",children:"Input and Output Example"}),"\n",(0,a.jsx)(n.p,{children:"Input is a 2D integer array representing the x and y coordinates of each point. Output is an integer representing the maximum number of points on the same line."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]\n^\n|\n| o\n| o o\n| o\n| o o\n+-------------------\x3e\n0 1 2 3 4 5 6\nOutput: 4\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In this example, the line ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"y"}),(0,a.jsx)(n.mo,{children:"="}),(0,a.jsx)(n.mn,{children:"5"}),(0,a.jsx)(n.mo,{children:"\u2212"}),(0,a.jsx)(n.mi,{children:"x"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"y = 5 - x"})]})})}),(0,a.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"="}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(n.span,{className:"mord",children:"5"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(n.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"x"})]})]})]})," contains four points."]}),"\n",(0,a.jsx)(n.h3,{id:"solution-explanation-2",children:"Solution Explanation"}),"\n",(0,a.jsx)(n.p,{children:"For each point, we use a hash table to count the number of points with the same slope relative to that point. A line is uniquely determined by one point and its slope. Additionally, we must account for cases where the slope does not exist and for duplicate coordinates."}),"\n",(0,a.jsxs)(n.p,{children:["This problem also uses a small optimization: when iterating through each point at position ",(0,a.jsx)(n.code,{children:"i"}),", we only consider points after ",(0,a.jsx)(n.code,{children:"i"})," since points before ",(0,a.jsx)(n.code,{children:"i"})," have already been considered."]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)(s,{value:"cpp",label:"C++",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"int maxPoints(vector<vector<int>>& points) {\n    int max_count = 0, n = points.size();\n    for (int i = 0; i < n; ++i) {\n        unordered_map<double, int> cache;  // <slope, number of points>\n        int same_xy = 1, same_y = 1;\n        for (int j = i + 1; j < n; ++j) {\n            if (points[i][1] == points[j][1]) {\n                ++same_y;\n                if (points[i][0] == points[j][0]) {\n                    ++same_xy;\n                }\n            } else {\n                double dx = points[i][0] - points[j][0],\n                       dy = points[i][1] - points[j][1];\n                ++cache[dx / dy];\n            }\n        }\n        max_count = max(max_count, same_y);\n        for (auto item : cache) {\n            max_count = max(max_count, same_xy + item.second);\n        }\n    }\n    return max_count;\n}\n"})})}),(0,a.jsx)(s,{value:"py",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"def maxPoints(points: List[List[int]]) -> int:\n    max_count, n = 0, len(points)\n    \n    for i, point1 in enumerate(points):\n        cache = dict()  # <slope, number of points>\n        same_xy, same_y = 1, 1\n        \n        for point2 in points[i + 1:]:\n            if point1[1] == point2[1]:\n                same_y += 1\n            if point1[0] == point2[0]:\n                same_xy += 1\n            else:\n                dx, dy = point1[0] - point2[0], point1[1] - point2[1]\n                cache[dx / dy] = cache.get(dx / dy, 0) + 1\n\n        max_count = max(max_count, same_y)\n        for count in cache.values():\n            max_count = max(max_count, same_xy + count)\n    \n    return max_count\n\n"})})})]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);