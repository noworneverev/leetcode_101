"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[698],{4226:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"data-structures/10-10-prefix-sum-integral-image","title":"10.10 \u524d\u7db4\u548c\u8207\u7a4d\u5206\u5716","description":"\u4e00\u7dad\u7684\u524d\u7db4\u548c\uff08cumulative sum, cumsum\uff09\uff0c\u4e8c\u7dad\u7684\u7a4d\u5206\u5716\uff08summed-area table, image integral\uff09\u662f\u901a\u904e\u5c07\u6bcf\u500b\u4f4d\u7f6e\u4e4b\u524d\u7684\u4e00\u7dad\u7dda\u6bb5\u6216\u4e8c\u7dad\u77e9\u5f62\u7684\u6578\u503c\u9810\u5148\u8a08\u7b97\u4e26\u5132\u5b58\uff0c\u5f9e\u800c\u52a0\u901f\u5f8c\u7e8c\u7684\u67e5\u8a62\u8207\u8a08\u7b97\u3002\u5982\u679c\u9700\u8981\u5c0d\u524d\u7db4\u548c\u6216\u7a4d\u5206\u5716\u7684\u503c\u9032\u884c\u67e5\u627e\uff0c\u53ef\u4ee5\u5c07\u5176\u5b58\u5165\u96dc\u6e4a\u8868\uff1b\u5982\u679c\u9700\u8981\u5c0d\u6bcf\u500b\u4f4d\u7f6e\u8a18\u9304\u524d\u7db4\u548c\u6216\u7a4d\u5206\u5716\u7684\u503c\uff0c\u5247\u53ef\u4ee5\u5c07\u5176\u5132\u5b58\u5230\u4e00\u7dad\u6216\u4e8c\u7dad\u6578\u7d44\u4e2d\uff0c\u901a\u5e38\u9084\u4f34\u96a8\u8457\u52d5\u614b\u898f\u5283\u3002","source":"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/10-data-structures/10-10-prefix-sum-integral-image.mdx","sourceDirName":"10-data-structures","slug":"/data-structures/10-10-prefix-sum-integral-image","permalink":"/leetcode_101/zh-TW/data-structures/10-10-prefix-sum-integral-image","draft":false,"unlisted":false,"editUrl":"https://github.com/noworneverev/leetcode_101/tree/master/leetcode_101/docs/10-data-structures/10-10-prefix-sum-integral-image.mdx","tags":[],"version":"current","sidebarPosition":57,"frontMatter":{"sidebar_position":57},"sidebar":"tutorialSidebar","previous":{"title":"10.9 \u591a\u91cd\u96c6\u5408\u548c\u6620\u5c04","permalink":"/leetcode_101/zh-TW/data-structures/10-9-multisets-and-maps"},"next":{"title":"10.11 \u7df4\u7fd2","permalink":"/leetcode_101/zh-TW/data-structures/10-11-exercises"}}');var i=n(4848),r=n(8453);const t={sidebar_position:57},l="10.10 \u524d\u7db4\u548c\u8207\u7a4d\u5206\u5716",c={},m=[{value:"303. Range Sum Query - Immutable",id:"303-range-sum-query---immutable",level:2},{value:"\u984c\u76ee\u63cf\u8ff0",id:"\u984c\u76ee\u63cf\u8ff0",level:3},{value:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b",id:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b",level:3},{value:"\u984c\u89e3",id:"\u984c\u89e3",level:3},{value:"304. Range Sum Query 2D - Immutable",id:"304-range-sum-query-2d---immutable",level:2},{value:"\u984c\u76ee\u63cf\u8ff0",id:"\u984c\u76ee\u63cf\u8ff0-1",level:3},{value:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b",id:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b-1",level:3},{value:"\u984c\u89e3",id:"\u984c\u89e3-1",level:3},{value:"560. Subarray Sum Equals K",id:"560-subarray-sum-equals-k",level:2},{value:"\u984c\u76ee\u63cf\u8ff0",id:"\u984c\u76ee\u63cf\u8ff0-2",level:3},{value:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b",id:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b-2",level:3},{value:"\u984c\u89e3",id:"\u984c\u89e3-2",level:3}];function d(e){const s={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,r.R)(),...e.components},{TabItem:a,Tabs:t}=s;return a||h("TabItem",!0),t||h("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"1010-\u524d\u7db4\u548c\u8207\u7a4d\u5206\u5716",children:"10.10 \u524d\u7db4\u548c\u8207\u7a4d\u5206\u5716"})}),"\n",(0,i.jsx)(s.p,{children:"\u4e00\u7dad\u7684\u524d\u7db4\u548c\uff08cumulative sum, cumsum\uff09\uff0c\u4e8c\u7dad\u7684\u7a4d\u5206\u5716\uff08summed-area table, image integral\uff09\u662f\u901a\u904e\u5c07\u6bcf\u500b\u4f4d\u7f6e\u4e4b\u524d\u7684\u4e00\u7dad\u7dda\u6bb5\u6216\u4e8c\u7dad\u77e9\u5f62\u7684\u6578\u503c\u9810\u5148\u8a08\u7b97\u4e26\u5132\u5b58\uff0c\u5f9e\u800c\u52a0\u901f\u5f8c\u7e8c\u7684\u67e5\u8a62\u8207\u8a08\u7b97\u3002\u5982\u679c\u9700\u8981\u5c0d\u524d\u7db4\u548c\u6216\u7a4d\u5206\u5716\u7684\u503c\u9032\u884c\u67e5\u627e\uff0c\u53ef\u4ee5\u5c07\u5176\u5b58\u5165\u96dc\u6e4a\u8868\uff1b\u5982\u679c\u9700\u8981\u5c0d\u6bcf\u500b\u4f4d\u7f6e\u8a18\u9304\u524d\u7db4\u548c\u6216\u7a4d\u5206\u5716\u7684\u503c\uff0c\u5247\u53ef\u4ee5\u5c07\u5176\u5132\u5b58\u5230\u4e00\u7dad\u6216\u4e8c\u7dad\u6578\u7d44\u4e2d\uff0c\u901a\u5e38\u9084\u4f34\u96a8\u8457\u52d5\u614b\u898f\u5283\u3002"}),"\n",(0,i.jsx)(s.h2,{id:"303-range-sum-query---immutable",children:(0,i.jsx)(s.a,{href:"https://leetcode.com/problems/range-sum-query-immutable/",children:"303. Range Sum Query - Immutable"})}),"\n",(0,i.jsx)(s.h3,{id:"\u984c\u76ee\u63cf\u8ff0",children:"\u984c\u76ee\u63cf\u8ff0"}),"\n",(0,i.jsx)(s.p,{children:"\u8a2d\u8a08\u4e00\u500b\u8cc7\u6599\u7d50\u69cb\uff0c\u4f7f\u5f97\u5176\u80fd\u5920\u5feb\u901f\u67e5\u8a62\u7d66\u5b9a\u9663\u5217\u4e2d\u4efb\u610f\u5169\u500b\u4f4d\u7f6e\u9593\u6240\u6709\u6578\u5b57\u7684\u7e3d\u548c\u3002"}),"\n",(0,i.jsx)(s.h3,{id:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b",children:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b"}),"\n",(0,i.jsx)(s.p,{children:"\u4ee5\u4e0b\u662f\u8cc7\u6599\u7d50\u69cb\u7684\u8abf\u7528\u7bc4\u4f8b\u3002"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"vector<int> nums{-2,0,3,-5,2,-1};\nNumArray num_array = new NumArray(nums);\nnum_array.sumRange(0,2); // Result = -2+0+3 = 1.\nnum_array.sunRange(1,5); // Result = 0+3-5+2-1 = -1.\n"})}),"\n",(0,i.jsx)(s.h3,{id:"\u984c\u89e3",children:"\u984c\u89e3"}),"\n",(0,i.jsxs)(s.p,{children:["\u5c0d\u65bc\u4e00\u7dad\u7684\u9663\u5217\uff0c\u6211\u5011\u53ef\u4ee5\u4f7f\u7528\u524d\u7db4\u548c\u4f86\u89e3\u6c7a\u6b64\u985e\u554f\u984c\u3002\u5148\u5efa\u7acb\u4e00\u500b\u8207\u9663\u5217 ",(0,i.jsx)(s.code,{children:"nums"})," \u9577\u5ea6\u76f8\u540c\u7684\u65b0\u9663\u5217 ",(0,i.jsx)(s.code,{children:"cumsum"}),"\uff0c\u8868\u793a ",(0,i.jsx)(s.code,{children:"nums"})," \u6bcf\u500b\u4f4d\u7f6e\u4e4b\u524d\u6240\u6709\u6578\u5b57\u7684\u7e3d\u548c\u3002",(0,i.jsx)(s.code,{children:"cumsum"})," \u9663\u5217\u53ef\u4ee5\u901a\u904e C++ \u81ea\u5e36\u7684 ",(0,i.jsx)(s.code,{children:"partial_sum"})," \u51fd\u6578\u5efa\u7acb\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u904d\u6b77\u4e00\u904d ",(0,i.jsx)(s.code,{children:"nums"})," \u9663\u5217\uff0c\u4e26\u5229\u7528\u72c0\u614b\u8f49\u79fb\u65b9\u7a0b ",(0,i.jsx)(s.code,{children:"cumsum[i] = cumsum[i-1] + nums[i]"})," \u5b8c\u6210\u7d71\u8a08\u3002\u5982\u679c\u6211\u5011\u9700\u8981\u7372\u5f97\u4f4d\u7f6e ",(0,i.jsx)(s.code,{children:"i"})," \u548c ",(0,i.jsx)(s.code,{children:"j"})," \u4e4b\u9593\u7684\u6578\u5b57\u548c\uff0c\u53ea\u9700\u8a08\u7b97 ",(0,i.jsx)(s.code,{children:"cumsum[j+1] - cumsum[i]"})," \u5373\u53ef\u3002"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)(a,{value:"cpp",label:"C++",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"class NumArray {\n   public:\n    NumArray(vector<int> nums) : cumsum_(nums.size() + 1, 0) {\n        partial_sum(nums.begin(), nums.end(), cumsum_.begin() + 1);\n    }\n\n    int sumRange(int left, int right) {\n        return cumsum_[right + 1] - cumsum_[left];\n    }\n\n   private:\n    vector<int> cumsum_;\n};\n"})})}),(0,i.jsx)(a,{value:"py",label:"Python",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-py",children:"class NumArray:\n    def __init__(self, nums: List[int]):\n        self.cumsum = [0] + nums[:]\n        for i in range(2, len(self.cumsum)):\n            self.cumsum[i] += self.cumsum[i - 1]\n\n    def sumRange(self, left: int, right: int) -> int:\n        return self.cumsum[right + 1] - self.cumsum[left]\n"})})})]}),"\n",(0,i.jsx)(s.h2,{id:"304-range-sum-query-2d---immutable",children:(0,i.jsx)(s.a,{href:"https://leetcode.com/problems/range-sum-query-2d-immutable/",children:"304. Range Sum Query 2D - Immutable"})}),"\n",(0,i.jsx)(s.h3,{id:"\u984c\u76ee\u63cf\u8ff0-1",children:"\u984c\u76ee\u63cf\u8ff0"}),"\n",(0,i.jsx)(s.p,{children:"\u8a2d\u8a08\u4e00\u500b\u8cc7\u6599\u7d50\u69cb\uff0c\u4f7f\u5f97\u5176\u80fd\u5920\u5feb\u901f\u67e5\u8a62\u7d66\u5b9a\u77e9\u9663\u4e2d\uff0c\u4efb\u610f\u5169\u500b\u4f4d\u7f6e\u5305\u570d\u7684\u9577\u65b9\u5f62\u4e2d\u6240\u6709\u6578\u5b57\u7684\u7e3d\u548c\u3002"}),"\n",(0,i.jsx)(s.h3,{id:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b-1",children:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b"}),"\n",(0,i.jsxs)(s.p,{children:["\u4ee5\u4e0b\u662f\u8cc7\u6599\u7d50\u69cb\u7684\u8abf\u7528\u7bc4\u4f8b\u3002\u5176\u4e2d ",(0,i.jsx)(s.code,{children:"sumRegion"})," \u51fd\u6578\u7684\u56db\u500b\u8f38\u5165\u5206\u5225\u662f\u7b2c\u4e00\u500b\u9ede\u7684\u6a6b\u3001\u7e31\u5750\u6a19\uff0c\u548c\u7b2c\u4e8c\u500b\u9ede\u7684\u6a6b\u3001\u7e31\u5750\u6a19\u3002"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"vector<int> matrix{{3,0,1,4,2},\n {5,6,3,2,1},\n {1,2,0,1,5},\n {4,1,0,1,7},\n {1,0,3,0,5}\n};\nNumMatrix num_matrix = new NumMatrix(matrix);\nnum_matrix.sumRegion(2,1,4,3); // Result = 8.\nnum_matrix.sumRegion(1,1,2,2); // Result = 11.\n"})}),"\n",(0,i.jsx)(s.h3,{id:"\u984c\u89e3-1",children:"\u984c\u89e3"}),"\n",(0,i.jsxs)(s.p,{children:["\u985e\u4f3c\u65bc\u524d\u7db4\u548c\uff0c\u6211\u5011\u53ef\u4ee5\u628a\u9019\u7a2e\u601d\u60f3\u62d3\u5c55\u5230\u4e8c\u7dad\uff0c\u5373\u7a4d\u5206\u5716\uff08summed-area table, image integral\uff09\u3002\u6211\u5011\u53ef\u4ee5\u5148\u5efa\u7acb\u4e00\u500b ",(0,i.jsx)(s.code,{children:"sat"})," \u77e9\u9663\uff0c",(0,i.jsx)(s.code,{children:"sat[i][j]"})," \u8868\u793a\u4ee5\u4f4d\u7f6e ",(0,i.jsx)(s.code,{children:"(0, 0)"})," \u70ba\u5de6\u4e0a\u89d2\u3001\u4f4d\u7f6e ",(0,i.jsx)(s.code,{children:"(i-1, j-1)"})," \u70ba\u53f3\u4e0b\u89d2\u7684\u9577\u65b9\u5f62\u4e2d\u6240\u6709\u6578\u5b57\u7684\u7e3d\u548c\u3002"]}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)("span",{style:{display:"block",width:"60%",margin:"0 auto"},children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(873).A+"",width:"823",height:"423"})})}),(0,i.jsx)("figcaption",{style:{textAlign:"center"},children:"\u5716 10.4: \u984c\u76ee 304 - \u5716 1 - \u5de6\u908a\u70ba\u7d66\u5b9a\u77e9\u9663\uff0c\u53f3\u908a\u70ba\u7a4d\u5206\u5716\u7d50\u679c\uff0c\u53f3\u4e0b\u89d2\u4f4d\u7f6e\u7684\u7a4d\u5206\u5716\u503c\u70ba 5+48+45\u221240 = 58"})]}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)("span",{style:{display:"block",width:"60%",margin:"0 auto"},children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(4624).A+"",width:"834",height:"424"})})}),(0,i.jsx)("figcaption",{style:{textAlign:"center"},children:"\u5716 10.5: \u984c\u76ee 304 - \u5716 2 - \u5de6\u908a\u70ba\u7d66\u5b9a\u77e9\u9663\uff0c\u53f3\u908a\u70ba\u7a4d\u5206\u5716\u7d50\u679c\uff0c\u9577\u65b9\u5f62 E \u7684\u6578\u5b57\u7e3d\u548c\u7b49\u65bc 58 \u2212 11 \u2212 13 + 3 = 37"})]}),"\n",(0,i.jsxs)(s.p,{children:["\u5982\u5716 1 \u6240\u793a\uff0c\u6211\u5011\u53ef\u4ee5\u7528\u52d5\u614b\u898f\u5283\u4f86\u8a08\u7b97 ",(0,i.jsx)(s.code,{children:"sat"})," \u77e9\u9663\uff1a",(0,i.jsx)(s.code,{children:"sat[i][j] = matrix[i-1][j-1] + sat[i-1][j] + sat[i][j-1] - sat[i-1][j-1]"}),"\uff0c\u5373\u7576\u524d\u5ea7\u6a19\u7684\u6578\u5b57 + \u4e0a\u9762\u9577\u65b9\u5f62\u7684\u6578\u5b57\u7e3d\u548c + \u5de6\u908a\u9577\u65b9\u5f62\u7684\u6578\u5b57\u7e3d\u548c - \u4e0a\u9762\u9577\u65b9\u5f62\u548c\u5de6\u908a\u9577\u65b9\u5f62\u91cd\u758a\u5340\u57df\uff08\u5373\u5de6\u4e0a\u4e00\u683c\u7684\u9577\u65b9\u5f62\uff09\u4e2d\u7684\u6578\u5b57\u7e3d\u548c\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["\u5982\u5716 2 \u6240\u793a\uff0c\u5047\u8a2d\u6211\u5011\u8981\u67e5\u8a62\u9577\u65b9\u5f62 E \u7684\u6578\u5b57\u7e3d\u548c\uff0c\u56e0\u70ba ",(0,i.jsx)(s.code,{children:"E = D \u2212 B \u2212 C + A"}),"\uff0c\u6211\u5011\u767c\u73fe E \u5176\u5be6\u53ef\u4ee5\u7531\u56db\u500b\u4f4d\u7f6e\u7684\u7a4d\u5206\u5716\u7d50\u679c\u9032\u884c\u52a0\u6e1b\u904b\u7b97\u5f97\u5230\u3002\u56e0\u6b64\u9019\u500b\u6f14\u7b97\u6cd5\u5728\u9810\u8655\u7406\u6642\u7684\u6642\u9593\u8907\u96dc\u5ea6\u70ba ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"O"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsx)(s.mi,{children:"m"}),(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(mn)"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"mn"}),(0,i.jsx)(s.span,{className:"mclose",children:")"})]})})]}),"\uff0c\u800c\u5728\u67e5\u8a62\u6642\u7684\u6642\u9593\u8907\u96dc\u5ea6\u50c5\u70ba ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"O"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsx)(s.mn,{children:"1"}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsx)(s.span,{className:"mord",children:"1"}),(0,i.jsx)(s.span,{className:"mclose",children:")"})]})})]}),"\u3002"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)(a,{value:"cpp",label:"C++",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"class NumMatrix {\n   public:\n    NumMatrix(vector<vector<int>> matrix) {\n        int m = matrix.size(), n = matrix[0].size();\n        sat_ = vector<vector<int>>(m + 1, vector<int>(n + 1, 0));\n        for (int i = 1; i <= m; ++i) {\n            for (int j = 1; j <= n; ++j) {\n                sat_[i][j] = matrix[i - 1][j - 1] + sat_[i - 1][j] +\n                             sat_[i][j - 1] - sat_[i - 1][j - 1];\n            }\n        }\n    }\n\n    int sumRegion(int row1, int col1, int row2, int col2) {\n        return sat_[row2 + 1][col2 + 1] - sat_[row2 + 1][col1] -\n               sat_[row1][col2 + 1] + sat_[row1][col1];\n    }\n\n   private:\n    vector<vector<int>> sat_;\n};\n"})})}),(0,i.jsx)(a,{value:"py",label:"Python",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-py",children:"class NumMatrix:\n    def __init__(self, matrix: List[List[int]]):\n        m, n = len(matrix), len(matrix[0])\n        self.sat = [[0 for _ in range(n + 1)] for _ in range(m + 1)]\n        \n        for i in range(1, m + 1):\n            for j in range(1, n + 1):\n                self.sat[i][j] = (\n                    matrix[i - 1][j - 1]\n                    + self.sat[i - 1][j]\n                    + self.sat[i][j - 1]\n                    - self.sat[i - 1][j - 1]\n                )\n\n    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:\n        return (\n            self.sat[row2 + 1][col2 + 1]\n            - self.sat[row2 + 1][col1]\n            - self.sat[row1][col2 + 1]\n            + self.sat[row1][col1]\n        )\n\n"})})})]}),"\n",(0,i.jsx)(s.h2,{id:"560-subarray-sum-equals-k",children:(0,i.jsx)(s.a,{href:"https://leetcode.com/problems/subarray-sum-equals-k/",children:"560. Subarray Sum Equals K"})}),"\n",(0,i.jsx)(s.h3,{id:"\u984c\u76ee\u63cf\u8ff0-2",children:"\u984c\u76ee\u63cf\u8ff0"}),"\n",(0,i.jsxs)(s.p,{children:["\u7d66\u5b9a\u4e00\u500b\u9663\u5217\uff0c\u5c0b\u627e\u548c\u70ba ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"k"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]})," \u7684\u9023\u7e8c\u5b50\u9663\u5217\u500b\u6578\u3002"]}),"\n",(0,i.jsx)(s.h3,{id:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b-2",children:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b"}),"\n",(0,i.jsxs)(s.p,{children:["\u8f38\u5165\u662f\u4e00\u7dad\u6574\u6578\u9663\u5217\u548c\u4e00\u500b\u6574\u6578\u503c ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"k"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]}),"\uff1b\u8f38\u51fa\u662f\u4e00\u500b\u6574\u6578\uff0c\u8868\u793a\u6eff\u8db3\u689d\u4ef6\u7684\u9023\u7e8c\u5b50\u9663\u5217\u500b\u6578\u3002"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Input: nums = [1,1,1], k = 2\nOutput: 2\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u5728\u9019\u500b\u7bc4\u4f8b\u4e2d\uff0c\u6211\u5011\u53ef\u4ee5\u627e\u5230\u5169\u500b [1,1] \u9023\u7e8c\u5b50\u9663\u5217\u6eff\u8db3\u689d\u4ef6\u3002"}),"\n",(0,i.jsx)(s.h3,{id:"\u984c\u89e3-2",children:"\u984c\u89e3"}),"\n",(0,i.jsxs)(s.p,{children:["\u672c\u984c\u540c\u6a23\u662f\u5229\u7528\u524d\u7db4\u548c\uff0c\u4e0d\u540c\u7684\u662f\u9019\u88e1\u6211\u5011\u4f7f\u7528\u4e00\u500b\u96dc\u6e4a\u8868 ",(0,i.jsx)(s.code,{children:"cache"}),"\uff0c\u5176\u9375\u662f\u524d\u7db4\u548c\uff0c\u800c\u503c\u662f\u8a72\u524d\u7db4\u548c\u51fa\u73fe\u7684\u6b21\u6578\u3002\u5728\u6211\u5011\u904d\u6b77\u5230\u4f4d\u7f6e ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"i"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6595em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"})]})})]})," \u6642\uff0c\u5047\u8a2d\u7576\u524d\u7684\u524d\u7db4\u548c\u662f ",(0,i.jsx)(s.code,{children:"cumsum"}),"\uff0c\u90a3\u9ebc ",(0,i.jsx)(s.code,{children:"cache[cumsum-k]"})," \u5373\u70ba\u4ee5\u7576\u524d\u4f4d\u7f6e\u7d50\u5c3e\u3001\u6eff\u8db3\u689d\u4ef6\u7684\u5b50\u9663\u5217\u500b\u6578\u3002"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)(a,{value:"cpp",label:"C++",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"int subarraySum(vector<int>& nums, int k) {\n    int count = 0, cumsum = 0;\n    unordered_map<int, int> cache;  // <cumsum, frequency>\n    cache[0] = 1;\n    for (int num : nums) {\n        cumsum += num;\n        count += cache[cumsum - k];\n        ++cache[cumsum];\n    }\n    return count;\n}\n"})})}),(0,i.jsx)(a,{value:"py",label:"Python",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-py",children:"def subarraySum(nums: List[int], k: int) -> int:\n    count, cur_sum = 0, 0\n    cache = {0: 1} # <cumsum, frequency>\n    for num in nums:\n        cur_sum += num\n        count += cache.get(cur_sum - k, 0)\n        cache[cur_sum] = cache.get(cur_sum, 0) + 1\n    return count\n"})})})]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function h(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},873:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/10.4-859c47a25a3275dfd5bdd76b3fc6eff1.png"},4624:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/10.5-bbec878fb3af2fc04d0d9ccb78a57761.png"}}]);