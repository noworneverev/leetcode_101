"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[9135],{3773:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"binary-search-techniques/3-5-rotated-array-search","title":"3.5 Search in Rotated Array","description":"81. Search in Rotated Sorted Array II","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/3-binary-search-techniques/3-5-rotated-array-search.mdx","sourceDirName":"3-binary-search-techniques","slug":"/binary-search-techniques/3-5-rotated-array-search","permalink":"/leetcode_101/en/binary-search-techniques/3-5-rotated-array-search","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"sidebar_position":15},"sidebar":"tutorialSidebar","previous":{"title":"3.4 Find Maximum","permalink":"/leetcode_101/en/binary-search-techniques/3-4-peak-finding"},"next":{"title":"3.6 Exercises","permalink":"/leetcode_101/en/binary-search-techniques/3-6-exercises"}}');var i=t(4848),a=t(8453);const s={sidebar_position:15},o="3.5 Search in Rotated Array",l={},d=[{value:"81. Search in Rotated Sorted Array II",id:"81-search-in-rotated-sorted-array-ii",level:2},{value:"Problem Description",id:"problem-description",level:3},{value:"Input and Output Example",id:"input-and-output-example",level:3},{value:"Solution Explanation",id:"solution-explanation",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components},{TabItem:t,Tabs:r}=n;return t||u("TabItem",!0),r||u("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"35-search-in-rotated-array",children:"3.5 Search in Rotated Array"})}),"\n",(0,i.jsx)(n.h2,{id:"81-search-in-rotated-sorted-array-ii",children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",children:"81. Search in Rotated Sorted Array II"})}),"\n",(0,i.jsx)(n.h3,{id:"problem-description",children:"Problem Description"}),"\n",(0,i.jsx)(n.p,{children:"An originally sorted array is connected end-to-end and then broken at some position (e.g., [1,2,2,3,4,5] \u2192 [2,3,4,5,1,2], broken between the first and second positions). We call this a rotated array. Given a target value, determine whether this value exists in the rotated array."}),"\n",(0,i.jsx)(n.h3,{id:"input-and-output-example",children:"Input and Output Example"}),"\n",(0,i.jsx)(n.p,{children:"The input is an array and a value, and the output is a boolean indicating whether the target exists in the array."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: nums = [2,5,6,0,0,1,2], target = 0\nOutput: true\n"})}),"\n",(0,i.jsx)(n.p,{children:"Even though the array is rotated, we can still use its sorted property to perform binary search. At the current midpoint, if its value is less than or equal to the right endpoint, the right interval is sorted. Otherwise, the left interval is sorted. If the target value is in the sorted interval, continue the binary search in that interval. Otherwise, proceed with the other interval. Here, we adopt a left-closed, right-closed interval approach."}),"\n",(0,i.jsx)(n.h3,{id:"solution-explanation",children:"Solution Explanation"}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)(t,{value:"cpp",label:"C++",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"bool search(vector<int>& nums, int target) {\n    int l = 0, r = nums.size() - 1;\n    while (l <= r) {\n        int mid = l + (r - l) / 2;\n        if (nums[mid] == target) {\n            return true;\n        }\n        if (nums[mid] == nums[l]) {\n            // Cannot determine which interval is sorted, but l cannot be target.\n            ++l;\n        } else if (nums[mid] == nums[r]) {\n            // Cannot determine which interval is sorted, but r cannot be target.\n            --r;\n        } else if (nums[mid] < nums[r]) {\n            // Right interval is sorted.\n            if (target > nums[mid] && target <= nums[r]) {\n                l = mid + 1;\n            } else {\n                r = mid - 1;\n            }\n        } else {\n            // Left interval is sorted.\n            if (target >= nums[l] && target < nums[mid]) {\n                r = mid - 1;\n            } else {\n                l = mid + 1;\n            }\n        }\n    }\n    return false;\n}\n"})})}),(0,i.jsx)(t,{value:"py",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"def search(nums: List[int], target: int) -> bool:\n    l, r = 0, len(nums) - 1\n    while l <= r:\n        mid = (l + r) // 2\n        if nums[mid] == target:\n            return True\n        if nums[mid] == nums[l]:\n            # Cannot determine which interval is sorted, but l cannot be target.\n            l += 1\n        elif nums[mid] == nums[r]:\n            # Cannot determine which interval is sorted, but r cannot be target.\n            r -= 1\n        elif nums[mid] < nums[r]:\n            # Right interval is sorted.\n            if nums[mid] < target <= nums[r]:\n                l = mid + 1\n            else:\n                r = mid - 1\n        else:\n            # Left interval is sorted.\n            if nums[l] <= target < nums[mid]:\n                r = mid - 1\n            else:\n                l = mid + 1\n    return False\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);