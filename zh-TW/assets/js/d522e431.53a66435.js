"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[4661],{9622:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"dynamic-programming/6-9-exercises","title":"6.9 \u7ec3\u4e60","description":"\u57fa\u7840\u96be\u5ea6","source":"@site/docs/6-dynamic-programming/6-9-exercises.md","sourceDirName":"6-dynamic-programming","slug":"/dynamic-programming/6-9-exercises","permalink":"/leetcode_101/zh-TW/dynamic-programming/6-9-exercises","draft":false,"unlisted":false,"editUrl":"https://github.com/noworneverev/leetcode_101/tree/master/leetcode_101/docs/6-dynamic-programming/6-9-exercises.md","tags":[],"version":"current","sidebarPosition":34,"frontMatter":{"sidebar_position":34},"sidebar":"tutorialSidebar","previous":{"title":"6.8 \u80a1\u7968\u4ea4\u6613","permalink":"/leetcode_101/zh-TW/dynamic-programming/6-8-stock-trading"},"next":{"title":"7. \u5316\u7e41\u4e3a\u7b80\u7684\u5206\u6cbb\u6cd5","permalink":"/leetcode_101/zh-TW/category/7-\u5316\u7e41\u4e3a\u7b80\u7684\u5206\u6cbb\u6cd5"}}');var n=i(4848),s=i(8453);const a={sidebar_position:34},l="6.9 \u7ec3\u4e60",o={},c=[{value:"\u57fa\u7840\u96be\u5ea6",id:"\u57fa\u7840\u96be\u5ea6",level:2},{value:"213. House Robber II",id:"213-house-robber-ii",level:3},{value:"53. Maximum Subarray",id:"53-maximum-subarray",level:3},{value:"343. Integer Break",id:"343-integer-break",level:3},{value:"583. Delete Operation for Two Strings",id:"583-delete-operation-for-two-strings",level:3},{value:"\u8fdb\u9636\u96be\u5ea6",id:"\u8fdb\u9636\u96be\u5ea6",level:2},{value:"646. Maximum Length of Pair Chain",id:"646-maximum-length-of-pair-chain",level:3},{value:"10. Regular Expression Matching",id:"10-regular-expression-matching",level:3},{value:"376. Wiggle Subsequence",id:"376-wiggle-subsequence",level:3},{value:"494. Target Sum",id:"494-target-sum",level:3},{value:"714. Best Time to Buy and Sell Stock with Transaction Fee",id:"714-best-time-to-buy-and-sell-stock-with-transaction-fee",level:3}];function d(e){const r={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"69-\u7ec3\u4e60",children:"6.9 \u7ec3\u4e60"})}),"\n",(0,n.jsx)(r.h2,{id:"\u57fa\u7840\u96be\u5ea6",children:"\u57fa\u7840\u96be\u5ea6"}),"\n",(0,n.jsx)(r.h3,{id:"213-house-robber-ii",children:(0,n.jsx)(r.a,{href:"https://leetcode.com/problems/house-robber-ii/",children:"213. House Robber II"})}),"\n",(0,n.jsx)(r.p,{children:"\u5f3a\u76d7\u62a2\u52ab\u9898\u76ee\u7684 follow-up\uff0c\u5982\u4f55\u5904\u7406\u73af\u5f62\u6570\u7ec4\u5462\uff1f"}),"\n",(0,n.jsx)(r.h3,{id:"53-maximum-subarray",children:(0,n.jsx)(r.a,{href:"https://leetcode.com/problems/maximum-subarray/",children:"53. Maximum Subarray"})}),"\n",(0,n.jsx)(r.p,{children:"\u7ecf\u5178\u7684\u4e00\u7ef4\u52a8\u6001\u89c4\u5212\u9898\u76ee\uff0c\u8bd5\u7740\u628a\u4e00\u7ef4\u7a7a\u95f4\u4f18\u5316\u4e3a\u5e38\u91cf\u5427\u3002"}),"\n",(0,n.jsx)(r.h3,{id:"343-integer-break",children:(0,n.jsx)(r.a,{href:"https://leetcode.com/problems/integer-break/",children:"343. Integer Break"})}),"\n",(0,n.jsx)(r.p,{children:"\u5206\u5272\u7c7b\u578b\u9898\uff0c\u5148\u5c1d\u8bd5\u7528\u52a8\u6001\u89c4\u5212\u6c42\u89e3\uff0c\u518d\u601d\u8003\u662f\u5426\u6709\u66f4\u7b80\u5355\u7684\u89e3\u6cd5\u3002"}),"\n",(0,n.jsx)(r.h3,{id:"583-delete-operation-for-two-strings",children:(0,n.jsx)(r.a,{href:"https://leetcode.com/problems/delete-operation-for-two-strings/",children:"583. Delete Operation for Two Strings"})}),"\n",(0,n.jsx)(r.p,{children:"\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\u7684\u53d8\u79cd\u9898\u3002"}),"\n",(0,n.jsx)(r.h2,{id:"\u8fdb\u9636\u96be\u5ea6",children:"\u8fdb\u9636\u96be\u5ea6"}),"\n",(0,n.jsx)(r.h3,{id:"646-maximum-length-of-pair-chain",children:(0,n.jsx)(r.a,{href:"https://leetcode.com/problems/maximum-length-of-pair-chain/",children:"646. Maximum Length of Pair Chain"})}),"\n",(0,n.jsx)(r.p,{children:"\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u53d8\u79cd\u9898\uff0c\u540c\u6837\u7684\uff0c\u5c1d\u8bd5\u7528\u4e8c\u5206\u8fdb\u884c\u52a0\u901f\u3002"}),"\n",(0,n.jsx)(r.h3,{id:"10-regular-expression-matching",children:(0,n.jsx)(r.a,{href:"https://leetcode.com/problems/regular-expression-matching/",children:"10. Regular Expression Matching"})}),"\n",(0,n.jsx)(r.p,{children:"\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\uff0c\u975e\u5e38\u8003\u9a8c\u8010\u5fc3\u3002\u9700\u8981\u6839\u636e\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u4e0d\u540c\u60c5\u51b5\uff0c\u5373\u5b57\u7b26\u3001\u661f\u53f7\uff0c\u70b9\u53f7\u7b49\uff0c\u5206\u60c5\u51b5\u8ba8\u8bba\u3002"}),"\n",(0,n.jsx)(r.h3,{id:"376-wiggle-subsequence",children:(0,n.jsx)(r.a,{href:"https://leetcode.com/problems/wiggle-subsequence/",children:"376. Wiggle Subsequence"})}),"\n",(0,n.jsx)(r.p,{children:"\u6700\u957f\u6446\u52a8\u5b50\u5e8f\u5217\uff0c\u901a\u9879\u516c\u5f0f\u6bd4\u8f83\u7279\u6b8a\uff0c\u9700\u8981\u4ed4\u7ec6\u601d\u8003\u3002"}),"\n",(0,n.jsx)(r.h3,{id:"494-target-sum",children:(0,n.jsx)(r.a,{href:"https://leetcode.com/problems/target-sum/",children:"494. Target Sum"})}),"\n",(0,n.jsx)(r.p,{children:"\u5982\u679c\u544a\u8bc9\u4f60\u8fd9\u9053\u9898\u662f 0-1 \u80cc\u5305\uff0c\u4f60\u662f\u5426\u4f1a\u6709\u4e00\u4e9b\u601d\u8def\uff1f"}),"\n",(0,n.jsx)(r.h3,{id:"714-best-time-to-buy-and-sell-stock-with-transaction-fee",children:(0,n.jsx)(r.a,{href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",children:"714. Best Time to Buy and Sell Stock with Transaction Fee"})}),"\n",(0,n.jsx)(r.p,{children:"\u5efa\u7acb\u72b6\u6001\u673a\uff0c\u80a1\u7968\u4ea4\u6613\u7c7b\u95ee\u9898\u5c31\u4f1a\u8fce\u5203\u800c\u89e3\u3002"})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);