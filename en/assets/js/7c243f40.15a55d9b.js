"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[6436],{9507:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>m,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"binary-search-techniques/3-4-peak-finding","title":"3.4 Find Maximum","description":"162. Find Peak Element","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/3-binary-search-techniques/3-4-peak-finding.mdx","sourceDirName":"3-binary-search-techniques","slug":"/binary-search-techniques/3-4-peak-finding","permalink":"/leetcode_101/en/binary-search-techniques/3-4-peak-finding","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"sidebar_position":14},"sidebar":"tutorialSidebar","previous":{"title":"3.3 Find Range","permalink":"/leetcode_101/en/binary-search-techniques/3-3-interval-search"},"next":{"title":"3.5 Search in Rotated Array","permalink":"/leetcode_101/en/binary-search-techniques/3-5-rotated-array-search"}}');var a=s(4848),t=s(8453);const r={sidebar_position:14},m="3.4 Find Maximum",l={},c=[{value:"162. Find Peak Element",id:"162-find-peak-element",level:2},{value:"Problem Description",id:"problem-description",level:3},{value:"Input and Output Example",id:"input-and-output-example",level:3},{value:"Solution Explanation",id:"solution-explanation",level:3}];function d(n){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,t.R)(),...n.components},{TabItem:s,Tabs:i}=e;return s||o("TabItem",!0),i||o("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"34-find-maximum",children:"3.4 Find Maximum"})}),"\n",(0,a.jsx)(e.h2,{id:"162-find-peak-element",children:(0,a.jsx)(e.a,{href:"https://leetcode.com/problems/find-peak-element/",children:"162. Find Peak Element"})}),"\n",(0,a.jsx)(e.h3,{id:"problem-description",children:"Problem Description"}),"\n",(0,a.jsxs)(e.p,{children:["Given an array, a maximum is defined as a number that is greater than both of its neighbors. Find the position of any maximum. There may be multiple maxima in the array, and you can return any of them. The required time complexity is ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"log"}),(0,a.jsx)(e.mo,{children:"\u2061"}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(\\log n)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsxs)(e.span,{className:"mop",children:["lo",(0,a.jsx)(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n",(0,a.jsx)(e.h3,{id:"input-and-output-example",children:"Input and Output Example"}),"\n",(0,a.jsx)(e.p,{children:"The input is an array, and the output is the position of a maximum."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"Input: nums = [1,2,3,1]\nOutput: 2\n"})}),"\n",(0,a.jsx)(e.p,{children:"The maximum 3 appears at position 2."}),"\n",(0,a.jsx)(e.h3,{id:"solution-explanation",children:"Solution Explanation"}),"\n",(0,a.jsxs)(e.p,{children:["To achieve ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"log"}),(0,a.jsx)(e.mo,{children:"\u2061"}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(\\log n)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsxs)(e.span,{className:"mop",children:["lo",(0,a.jsx)(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})," time complexity, we can use binary search on the array. If the endpoints are not maxima, and the current midpoint is not a maximum, then one of its sides must contain a maximum."]}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)(s,{value:"cpp",label:"C++",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"int findPeakElement(vector<int>& nums) {\n    int n = nums.size();\n    if (n == 1) {\n        return 0;\n    }\n    if (nums[0] > nums[1]) {\n        return 0;\n    }\n    if (nums[n - 1] > nums[n - 2]) {\n        return n - 1;\n    }\n    int l = 1, r = n - 2, mid;\n    while (l <= r) {\n        mid = l + (r - l) / 2;\n        if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {\n            return mid;\n        } else if (nums[mid] > nums[mid - 1]) {\n            l = mid + 1;\n        } else {\n            r = mid - 1;\n        }\n    }\n    return -1;\n}\n"})})}),(0,a.jsx)(s,{value:"py",label:"Python",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-py",children:"def findPeakElement(self, nums: List[int]) -> int:\n    n = len(nums)\n    if n == 1:\n        return 0\n    if nums[0] > nums[1]:\n        return 0\n    if nums[n - 1] > nums[n - 2]:\n        return n - 1\n    l, r = 1, n - 2\n    while l <= r:\n        mid = (l + r) // 2\n        if nums[mid] > nums[mid + 1] and nums[mid] > nums[mid - 1]:\n            return mid\n        elif nums[mid] > nums[mid - 1]:\n            l = mid + 1\n        else:\n            r = mid - 1\n    return -1\n"})})})]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}function o(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);