"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[7592],{7647:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"mathematical-solutions/8-2-lcm-gcd","title":"8.2 \u516c\u500d\u6570\u4e0e\u516c\u56e0\u6570","description":"\u5229\u7528\u8f97\u8f6c\u76f8\u9664\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u6c42\u5f97\u4e24\u4e2a\u6570\u7684\u6700\u5927\u516c\u56e0\u6570\uff08greatest common divisor\uff0cGCD\uff09\uff1b\u5c06\u4e24\u4e2a\u6570\u76f8\u4e58\u518d\u9664\u4ee5\u6700\u5927\u516c\u56e0\u6570\u5373\u53ef\u5f97\u5230\u6700\u5c0f\u516c\u500d\u6570\uff08least common multiple, LCM\uff09\u3002","source":"@site/docs/8-mathematical-solutions/8-2-lcm-gcd.mdx","sourceDirName":"8-mathematical-solutions","slug":"/mathematical-solutions/8-2-lcm-gcd","permalink":"/leetcode_101/zh-TW/mathematical-solutions/8-2-lcm-gcd","draft":false,"unlisted":false,"editUrl":"https://github.com/noworneverev/leetcode_101/tree/master/leetcode_101/docs/8-mathematical-solutions/8-2-lcm-gcd.mdx","tags":[],"version":"current","sidebarPosition":39,"frontMatter":{"sidebar_position":39},"sidebar":"tutorialSidebar","previous":{"title":"8.1 \u5f15\u8a00","permalink":"/leetcode_101/zh-TW/mathematical-solutions/8-1-introduction"},"next":{"title":"8.3 \u8d28\u6570","permalink":"/leetcode_101/zh-TW/mathematical-solutions/8-3-prime-numbers"}}');var r=t(4848),a=t(8453);const c={sidebar_position:39},s="8.2 \u516c\u500d\u6570\u4e0e\u516c\u56e0\u6570",l={},o=[];function d(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components},{TabItem:t,Tabs:i}=n;return t||h("TabItem",!0),i||h("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"82-\u516c\u500d\u6570\u4e0e\u516c\u56e0\u6570",children:"8.2 \u516c\u500d\u6570\u4e0e\u516c\u56e0\u6570"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5229\u7528",(0,r.jsx)(n.code,{children:"\u8f97\u8f6c\u76f8\u9664\u6cd5"}),"\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u6c42\u5f97\u4e24\u4e2a\u6570\u7684\u6700\u5927\u516c\u56e0\u6570\uff08greatest common divisor\uff0cGCD\uff09\uff1b\u5c06\u4e24\u4e2a\u6570\u76f8\u4e58\u518d\u9664\u4ee5\u6700\u5927\u516c\u56e0\u6570\u5373\u53ef\u5f97\u5230\u6700\u5c0f\u516c\u500d\u6570\uff08least common multiple, LCM\uff09\u3002"]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)(t,{value:"cpp",label:"C++",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"int gcd(int a, int b) { \n    return b == 0 ? a : gcd(b, a % b); \n}\n\nint lcm(int a, int b) { \n    return a * b / gcd(a, b); \n}\n"})})}),(0,r.jsx)(t,{value:"py",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"def gcd(a: int, b: int) -> int:\n    return a if b == 0 else gcd(b, a % b)\n\ndef lcm(a: int, b: int) -> int:\n    return (a * b) // gcd(a, b)\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"\u8fdb\u4e00\u6b65\u5730\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u6269\u5c55\u6b27\u51e0\u91cc\u5f97\u7b97\u6cd5\uff08extended gcd\uff09\u5728\u6c42\u5f97 a \u548c b \u6700\u5927\u516c\u56e0\u6570\u7684\u540c\u65f6\uff0c\u4e5f\u5f97\u5230\u5b83\u4eec\u7684\u7cfb\u6570 x \u548c y\uff0c\u4ece\u800c\u4f7f ax + by = gcd(a, b)\u3002\u56e0\u4e3a Python \u4e2d int \u53ea\u80fd\u6309\u503c\u4f20\u9012\uff0c\u6211\u4eec\u53ef\u4ee5\u7528\u4e00\u4e2a\u957f\u5ea6\u56fa\u5b9a\u4e3a 1 \u7684 list() \u6765\u8fdb\u884c\u4f20\u9012\u5f15\u7528\u7684\u64cd\u4f5c\u3002"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)(t,{value:"cpp",label:"C++",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"int xGCD(int a, int b, int &x, int &y) {\n    if (b == 0) {\n        x = 1, y = 0;\n        return a;\n    }\n    int x_inner, y_inner;\n    int gcd = xGCD(b, a % b, x_inner, y_inner);\n    x = y_inner, y = x_inner - (a / b) * y_inner;\n    return gcd;\n}\n"})})}),(0,r.jsx)(t,{value:"py",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"def xGCD(a: int, b: int, x: List[int], y: List[int]) -> int:\n    if b == 0:\n        x[0], y[0] = 1, 0\n        return a\n    x_inner, y_inner = [0], [0]\n    gcd = xGCD(b, a % b, x_inner, y_inner)\n    x[0], y[0] = y_inner, x_inner - (a / b) * y_inner\n    return gcd\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);