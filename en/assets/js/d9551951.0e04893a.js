"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[956],{4200:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"sorting-algorithms/4-2-quick-select","title":"4.2 Quick Select","description":"215. Kth Largest Element in an Array","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/4-sorting-algorithms/4-2-quick-select.mdx","sourceDirName":"4-sorting-algorithms","slug":"/sorting-algorithms/4-2-quick-select","permalink":"/leetcode_101/en/sorting-algorithms/4-2-quick-select","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"sidebar_position":18},"sidebar":"tutorialSidebar","previous":{"title":"4.1 Common Sorting Algorithms","permalink":"/leetcode_101/en/sorting-algorithms/4-1-common-sorting-algorithms"},"next":{"title":"4.3 Bucket Sort","permalink":"/leetcode_101/en/sorting-algorithms/4-3-bucket-sort"}}');var t=n(4848),l=n(8453);const i={sidebar_position:18},r="4.2 Quick Select",c={},m=[{value:"215. Kth Largest Element in an Array",id:"215-kth-largest-element-in-an-array",level:2},{value:"Problem Description",id:"problem-description",level:3},{value:"Input and Output Example",id:"input-and-output-example",level:3},{value:"Solution Explanation",id:"solution-explanation",level:3}];function h(e){const s={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,l.R)(),...e.components},{TabItem:n,Tabs:a}=s;return n||d("TabItem",!0),a||d("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"42-quick-select",children:"4.2 Quick Select"})}),"\n",(0,t.jsx)(s.h2,{id:"215-kth-largest-element-in-an-array",children:(0,t.jsx)(s.a,{href:"https://leetcode.com/problems/kth-largest-element-in-an-array/",children:"215. Kth Largest Element in an Array"})}),"\n",(0,t.jsx)(s.h3,{id:"problem-description",children:"Problem Description"}),"\n",(0,t.jsxs)(s.p,{children:["In an unsorted array, find the ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"k"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]}),"-th largest element."]}),"\n",(0,t.jsx)(s.h3,{id:"input-and-output-example",children:"Input and Output Example"}),"\n",(0,t.jsxs)(s.p,{children:["Input an array and a target value ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"k"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]}),", output the ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"k"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]}),"-th largest element. The problem guarantees there is always a solution."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"Input: [3,2,1,5,6,4] and k = 2\nOutput: 5\n"})}),"\n",(0,t.jsx)(s.h3,{id:"solution-explanation",children:"Solution Explanation"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Quick Select"})," is commonly used to solve k-th element problems, achieving an average time complexity of ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})," and space complexity of ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mn,{children:"1"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord",children:"1"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]}),". Its implementation is similar to Quick Sort, but it only focuses on finding the ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"k"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]}),"-th largest pivot without sorting the rest of the elements. Like Quick Sort, Quick Select generally requires shuffling the array first to avoid a worst-case time complexity of ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsxs)(s.msup,{children:[(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mn,{children:"2"})]}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n^2)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsx)(s.span,{className:"vlist-t",children:(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,t.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n",(0,t.jsx)(s.p,{children:"If we directly use the Quick Sort code above, it may approach the time limit on LeetCode. Instead, we can trade space for time by directly storing elements greater than, less than, and equal to the pivot to minimize swaps."}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)(n,{value:"cpp",label:"C++",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"int findKthLargest(vector<int> nums, int k) {\n    int pivot = rand() % nums.size();\n    int pivot_val = nums[pivot];\n    vector<int> larger, equal, smaller;\n    for (int num : nums) {\n        if (num > pivot_val) {\n            larger.push_back(num);\n        } else if (num < pivot_val) {\n            smaller.push_back(num);\n        } else {\n            equal.push_back(num);\n        }\n    }\n    if (k <= larger.size()) {\n        return findKthLargest(larger, k);\n    }\n    if (k > larger.size() + equal.size()) {\n        return findKthLargest(smaller, k - larger.size() - equal.size());\n    }\n    return pivot_val;\n}\n"})})}),(0,t.jsx)(n,{value:"py",label:"Python",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:"def findKthLargest(nums: List[int], k: int) -> int:\n    pivot_val = random.choice(nums)\n    larger, equal, smaller = [], [], []\n    for num in nums:\n        if num > pivot_val:\n            larger.append(num)\n        elif num < pivot_val:\n            smaller.append(num)\n        else:\n            equal.append(num)\n    if k <= len(larger):\n        return findKthLargest(larger, k)\n    if k > len(larger) + len(equal):\n        return findKthLargest(smaller, k - len(larger) - len(equal))\n    return pivot_val\n"})})})]})]})}function o(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}function d(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);