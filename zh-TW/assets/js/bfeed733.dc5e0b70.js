"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[7916],{2508:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"string-manipulation/11-2-string-comparison","title":"11.2 \u5b57\u4e32\u6bd4\u8f03","description":"242. Valid Anagram","source":"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/11-string-manipulation/11-2-string-comparison.mdx","sourceDirName":"11-string-manipulation","slug":"/string-manipulation/11-2-string-comparison","permalink":"/leetcode_101/zh-TW/string-manipulation/11-2-string-comparison","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":60,"frontMatter":{"sidebar_position":60},"sidebar":"tutorialSidebar","previous":{"title":"11.1 \u5f15\u8a00","permalink":"/leetcode_101/zh-TW/string-manipulation/11-1-introduction"},"next":{"title":"11.3 \u5b57\u4e32\u89e3\u6790","permalink":"/leetcode_101/zh-TW/string-manipulation/11-3-string-interpretation"}}');var s=i(4848),l=i(8453);const t={sidebar_position:60},c="11.2 \u5b57\u4e32\u6bd4\u8f03",d={},a=[{value:"242. Valid Anagram",id:"242-valid-anagram",level:2},{value:"\u984c\u76ee\u63cf\u8ff0",id:"\u984c\u76ee\u63cf\u8ff0",level:3},{value:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b",id:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b",level:3},{value:"\u984c\u89e3",id:"\u984c\u89e3",level:3},{value:"205. Isomorphic Strings",id:"205-isomorphic-strings",level:2},{value:"\u984c\u76ee\u63cf\u8ff0",id:"\u984c\u76ee\u63cf\u8ff0-1",level:3},{value:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b",id:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b-1",level:3},{value:"\u984c\u89e3",id:"\u984c\u89e3-1",level:3},{value:"647. Palindromic Substrings",id:"647-palindromic-substrings",level:2},{value:"\u984c\u76ee\u63cf\u8ff0",id:"\u984c\u76ee\u63cf\u8ff0-2",level:3},{value:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b",id:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b-2",level:3},{value:"\u984c\u89e3",id:"\u984c\u89e3-2",level:3},{value:"696. Count Binary Substrings",id:"696-count-binary-substrings",level:2},{value:"\u984c\u76ee\u63cf\u8ff0",id:"\u984c\u76ee\u63cf\u8ff0-3",level:3},{value:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b",id:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b-3",level:3},{value:"\u984c\u89e3",id:"\u984c\u89e3-3",level:3},{value:"1249. Minimum Remove to Make Valid Parentheses",id:"1249-minimum-remove-to-make-valid-parentheses",level:2},{value:"\u984c\u76ee\u63cf\u8ff0",id:"\u984c\u76ee\u63cf\u8ff0-4",level:3},{value:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b",id:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b-4",level:3},{value:"\u984c\u89e3",id:"\u984c\u89e3-4",level:3}];function o(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components},{TabItem:i,Tabs:r}=e;return i||h("TabItem",!0),r||h("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"112-\u5b57\u4e32\u6bd4\u8f03",children:"11.2 \u5b57\u4e32\u6bd4\u8f03"})}),"\n",(0,s.jsx)(e.h2,{id:"242-valid-anagram",children:(0,s.jsx)(e.a,{href:"https://leetcode.com/problems/valid-anagram/",children:"242. Valid Anagram"})}),"\n",(0,s.jsx)(e.h3,{id:"\u984c\u76ee\u63cf\u8ff0",children:"\u984c\u76ee\u63cf\u8ff0"}),"\n",(0,s.jsx)(e.p,{children:"\u5224\u65b7\u5169\u500b\u5b57\u4e32\u5305\u542b\u7684\u5b57\u5143\u662f\u5426\u5b8c\u5168\u76f8\u540c\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b",children:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b"}),"\n",(0,s.jsx)(e.p,{children:"\u8f38\u5165\u5169\u500b\u5b57\u4e32\uff0c\u8f38\u51fa\u4e00\u500b\u5e03\u6797\u503c\uff0c\u8868\u793a\u5169\u500b\u5b57\u4e32\u662f\u5426\u6eff\u8db3\u689d\u4ef6\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'Input: s = "anagram", t = "nagaram"\nOutput: true\n'})}),"\n",(0,s.jsx)(e.h3,{id:"\u984c\u89e3",children:"\u984c\u89e3"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u5011\u53ef\u4ee5\u5229\u7528\u96dc\u6e4a\u8868\u6216\u9663\u5217\u4f86\u7d71\u8a08\u5169\u500b\u5b57\u4e32\u4e2d\u6bcf\u500b\u5b57\u5143\u51fa\u73fe\u7684\u983b\u7387\u3002\u5982\u679c\u983b\u7387\u76f8\u540c\uff0c\u5247\u8aaa\u660e\u5b83\u5011\u5305\u542b\u7684\u5b57\u5143\u5b8c\u5168\u76f8\u540c\u3002"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)(i,{value:"cpp",label:"C++",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"bool isAnagram(string s, string t) {\n    if (s.length() != t.length()) {\n        return false;\n    }\n    vector<int> counts(26, 0);\n    for (int i = 0; i < s.length(); ++i) {\n        ++counts[s[i] - \u2019a\u2019];\n        --counts[t[i] - \u2019a\u2019];\n    }\n    return all_of(counts.begin(), counts.end(), [](int c) { return c == 0; });\n}\n"})})}),(0,s.jsx)(i,{value:"py",label:"Python",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-py",children:"def isAnagram(s: str, t: str) -> bool:\n    if len(s) != len(t):\n        return False\n    counter = Counter(s)\n    counter.subtract(t)\n    return all(v == 0 for v in counter.values())\n"})})})]}),"\n",(0,s.jsx)(e.h2,{id:"205-isomorphic-strings",children:(0,s.jsx)(e.a,{href:"https://leetcode.com/problems/isomorphic-strings/",children:"205. Isomorphic Strings"})}),"\n",(0,s.jsx)(e.h3,{id:"\u984c\u76ee\u63cf\u8ff0-1",children:"\u984c\u76ee\u63cf\u8ff0"}),"\n",(0,s.jsx)(e.p,{children:"\u5224\u65b7\u5169\u500b\u5b57\u4e32\u662f\u5426\u540c\u69cb\u3002\u5169\u500b\u5b57\u4e32\u540c\u69cb\u7684\u5b9a\u7fa9\u70ba\uff0c\u900f\u904e\u5c07\u4e00\u500b\u5b57\u4e32\u4e2d\u7684\u67d0\u4e9b\u76f8\u540c\u5b57\u5143\u8f49\u63db\u70ba\u53e6\u4e00\u7d44\u76f8\u540c\u5b57\u5143\uff0c\u80fd\u4f7f\u5f97\u5169\u500b\u5b57\u4e32\u76f8\u540c\uff0c\u4e14\u4e0d\u540c\u7684\u5b57\u5143\u4e0d\u80fd\u88ab\u8f49\u63db\u70ba\u76f8\u540c\u7684\u5b57\u5143\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b-1",children:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b"}),"\n",(0,s.jsx)(e.p,{children:"\u8f38\u5165\u5169\u500b\u5b57\u4e32\uff0c\u8f38\u51fa\u4e00\u500b\u5e03\u6797\u503c\uff0c\u8868\u793a\u5169\u500b\u5b57\u4e32\u662f\u5426\u6eff\u8db3\u689d\u4ef6\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'Input: s = "paper", t = "title"\nOutput: true\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u9019\u500b\u4f8b\u5b50\u4e2d\uff0c\u5c07 ",(0,s.jsx)(e.code,{children:"s"})," \u4e2d\u7684 ",(0,s.jsx)(e.code,{children:"p"}),"\u3001",(0,s.jsx)(e.code,{children:"a"}),"\u3001",(0,s.jsx)(e.code,{children:"e"}),"\u3001",(0,s.jsx)(e.code,{children:"r"})," \u8f49\u63db\u70ba ",(0,s.jsx)(e.code,{children:"t"}),"\u3001",(0,s.jsx)(e.code,{children:"i"}),"\u3001",(0,s.jsx)(e.code,{children:"l"}),"\u3001",(0,s.jsx)(e.code,{children:"e"}),"\uff0c\u5169\u500b\u5b57\u4e32\u5c31\u53ef\u4ee5\u8b8a\u5f97\u76f8\u540c\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u984c\u89e3-1",children:"\u984c\u89e3"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u5011\u53ef\u4ee5\u5c07\u554f\u984c\u91cd\u65b0\u8868\u8ff0\uff1a\u8a18\u9304\u5169\u500b\u5b57\u4e32\u4e2d\u6bcf\u500b\u4f4d\u7f6e\u7684\u5b57\u5143\u9996\u6b21\u51fa\u73fe\u7684\u4f4d\u7f6e\u3002\u5982\u679c\u5169\u500b\u5b57\u4e32\u4e2d\u76f8\u540c\u4f4d\u7f6e\u7684\u5b57\u5143\u8207\u5b83\u5011\u7684\u9996\u6b21\u51fa\u73fe\u4f4d\u7f6e\u76f8\u540c\uff0c\u5247\u9019\u5169\u500b\u5b57\u4e32\u540c\u69cb\u3002"}),"\n",(0,s.jsxs)(e.p,{children:['\u8209\u4f8b\u4f86\u8aaa\uff0c\u5c0d\u65bc "paper" \u548c "title"\uff0c\u5047\u8a2d\u6211\u5011\u73fe\u5728\u8655\u7406\u7b2c\u4e09\u500b\u5b57\u5143 ',(0,s.jsx)(e.code,{children:"p"})," \u548c ",(0,s.jsx)(e.code,{children:"t"}),"\uff0c\u767c\u73fe\u5b83\u5011\u9996\u6b21\u51fa\u73fe\u7684\u4f4d\u7f6e\u90fd\u5728\u7b2c\u4e00\u500b\u5b57\u5143\uff0c\u9019\u8868\u793a\u76ee\u524d\u4f4d\u7f6e\u6eff\u8db3\u540c\u69cb\u689d\u4ef6\u3002\u6211\u5011\u53ef\u4ee5\u4f7f\u7528\u96dc\u6e4a\u8868\u9032\u884c\u5132\u5b58\uff0c\u6216\u8005\u7528\u4e00\u500b\u9577\u5ea6\u70ba 128 \u7684\u9663\u5217\uff08ASCII \u5b9a\u7fa9\u4e0b\u7684\u5b57\u5143\u7e3d\u6578\uff09\u3002"]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)(i,{value:"cpp",label:"C++",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"bool isIsomorphic(string s, string t) {\n    vector<int> s_init(128, 0), t_init(128, 0);\n    for (int i = 0; i < s.length(); ++i) {\n        if (s_init[s[i]] != t_init[t[i]]) {\n            return false;\n        }\n        s_init[s[i]] = t_init[t[i]] = i + 1;\n    }\n    return true;\n}\n"})})}),(0,s.jsx)(i,{value:"py",label:"Python",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-py",children:"def isIsomorphic(s: str, t: str) -> bool:\n    s_init, t_init = [0] * 128, [0] * 128\n    \n    for i in range(len(s)):\n        if s_init[ord(s[i])] != t_init[ord(t[i])]:\n            return False\n        s_init[ord(s[i])] = t_init[ord(t[i])] = i + 1\n    \n    return True\n\n"})})})]}),"\n",(0,s.jsx)(e.h2,{id:"647-palindromic-substrings",children:(0,s.jsx)(e.a,{href:"https://leetcode.com/problems/palindromic-substrings/",children:"647. Palindromic Substrings"})}),"\n",(0,s.jsx)(e.h3,{id:"\u984c\u76ee\u63cf\u8ff0-2",children:"\u984c\u76ee\u63cf\u8ff0"}),"\n",(0,s.jsx)(e.p,{children:"\u7d66\u5b9a\u4e00\u500b\u5b57\u4e32\uff0c\u6c42\u5176\u6709\u591a\u5c11\u500b\u56de\u6587\u5b50\u5b57\u4e32\u3002\u56de\u6587\u7684\u5b9a\u7fa9\u662f\u5de6\u53f3\u5c0d\u7a31\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b-2",children:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b"}),"\n",(0,s.jsx)(e.p,{children:"\u8f38\u5165\u662f\u4e00\u500b\u5b57\u4e32\uff0c\u8f38\u51fa\u662f\u4e00\u500b\u6574\u6578\uff0c\u8868\u793a\u56de\u6587\u5b50\u5b57\u4e32\u7684\u6578\u91cf\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'Input: "aaa"\nOutput: 6\n'})}),"\n",(0,s.jsx)(e.p,{children:'\u516d\u500b\u56de\u6587\u5b50\u5b57\u4e32\u5206\u5225\u662f ["a", "a", "a", "aa", "aa", "aaa"]\u3002'}),"\n",(0,s.jsx)(e.h3,{id:"\u984c\u89e3-2",children:"\u984c\u89e3"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u5011\u53ef\u4ee5\u5f9e\u5b57\u4e32\u7684\u6bcf\u500b\u4f4d\u7f6e\u958b\u59cb\uff0c\u5411\u5de6\u5411\u53f3\u5ef6\u9577\uff0c\u5224\u65b7\u5b58\u5728\u591a\u5c11\u4ee5\u7576\u524d\u4f4d\u7f6e\u70ba\u4e2d\u5fc3\u7684\u56de\u6587\u5b50\u5b57\u4e32\u3002"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)(i,{value:"cpp",label:"C++",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"// \u8f14\u52a9\u51fd\u5f0f\u3002\nint extendSubstrings(string s, int l, int r) {\n    int count = 0, n = s.length();\n    while (l >= 0 && r < n && s[l] == s[r]) {\n        --l;\n        ++r;\n        ++count;\n    }\n    return count;\n}\n// \u4e3b\u51fd\u5f0f\u3002\nint countSubstrings(string s) {\n    int count = 0;\n    for (int i = 0; i < s.length(); ++i) {\n        count += extendSubstrings(s, i, i);      // \u5947\u6578\u9577\u5ea6\n        count += extendSubstrings(s, i, i + 1);  // \u5076\u6578\u9577\u5ea6\n    }\n    return count;\n}\n"})})}),(0,s.jsx)(i,{value:"py",label:"Python",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-py",children:"# \u8f14\u52a9\u51fd\u5f0f\u3002\ndef extendSubstrings(s: str, l: int, r: int) -> int:\n    count, n = 0, len(s)\n    while l >= 0 and r < n and s[l] == s[r]:\n        count += 1\n        l -= 1\n        r += 1\n    return count\n\n# \u4e3b\u51fd\u5f0f\u3002\ndef countSubstrings(s: str) -> int:\n    return sum(\n        # \u5947\u6578\u9577\u5ea6 + \u5076\u6578\u9577\u5ea6\n        extendSubstrings(s, i, i) + extendSubstrings(s, i, i + 1)\n        for i in range(len(s))\n    )\n\n"})})})]}),"\n",(0,s.jsx)(e.h2,{id:"696-count-binary-substrings",children:(0,s.jsx)(e.a,{href:"https://leetcode.com/problems/count-binary-substrings/",children:"696. Count Binary Substrings"})}),"\n",(0,s.jsx)(e.h3,{id:"\u984c\u76ee\u63cf\u8ff0-3",children:"\u984c\u76ee\u63cf\u8ff0"}),"\n",(0,s.jsx)(e.p,{children:"\u7d66\u5b9a\u4e00\u500b 0 \u548c 1 \u7d44\u6210\u7684\u5b57\u4e32\uff0c\u6c42\u6709\u591a\u5c11\u975e\u7a7a\u5b50\u5b57\u4e32\uff0c\u5176 '0' \u548c '1' \u7684\u6578\u91cf\u76f8\u540c\uff0c\u4e14 '0' \u548c '1' \u5fc5\u9808\u9023\u7e8c\u51fa\u73fe\uff08\u4f8b\u5982 \"0011\", \"1100\"\uff1b\u4f46 \"0101\" \u4e0d\u7b97\u6709\u6548\uff09\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b-3",children:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b"}),"\n",(0,s.jsx)(e.p,{children:"\u8f38\u5165\u662f\u4e00\u500b\u5b57\u4e32\uff0c\u8f38\u51fa\u662f\u4e00\u500b\u6574\u6578\uff0c\u8868\u793a\u7b26\u5408\u689d\u4ef6\u7684\u5b50\u5b57\u4e32\u7684\u6578\u91cf\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'Input: "00110011"\nOutput: 6\n'})}),"\n",(0,s.jsx)(e.p,{children:'\u5728\u9019\u500b\u7bc4\u4f8b\u4e2d\uff0c\u516d\u500b \'0\' \u548c \'1\' \u6578\u91cf\u76f8\u540c\u7684\u5b50\u5b57\u4e32\u70ba ["0011", "01", "1100", "10", "0011", "01"]\u3002'}),"\n",(0,s.jsx)(e.h3,{id:"\u984c\u89e3-3",children:"\u984c\u89e3"}),"\n",(0,s.jsx)(e.p,{children:"\u5f9e\u5de6\u5f80\u53f3\u904d\u6b77\u5b57\u4e32\uff0c\u8a18\u9304\u7576\u524d\u5b57\u5143\u9023\u7e8c\u51fa\u73fe\u7684\u9577\u5ea6\uff0c\u4ee5\u53ca\u5176\u524d\u4e00\u6bb5\u4e0d\u540c\u5b57\u5143\u7684\u9023\u7e8c\u9577\u5ea6\u3002\u4f8b\u5982\u5c0d\u65bc\u5b57\u4e32 \"00110\" \u7684\u6700\u5f8c\u4e00\u4f4d '0'\uff0c\u6211\u5011\u8a18\u9304\u7684\u503c\u70ba\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u76f8\u540c\u5b57\u5143\u9577\u5ea6\u70ba 1\uff0c\u56e0\u70ba\u6700\u5f8c\u53ea\u6709\u4e00\u500b\u9023\u7e8c\u7684 '0'\uff1b"}),"\n",(0,s.jsx)(e.li,{children:"\u4e0d\u540c\u5b57\u5143\u9577\u5ea6\u70ba 2\uff0c\u56e0\u70ba\u5728\u6700\u5f8c\u7684 '0' \u4e4b\u524d\uff0c\u6709\u5169\u500b\u9023\u7e8c\u7684 '1'\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u82e5\u4e0d\u540c\u5b57\u5143\u7684\u9023\u7e8c\u9577\u5ea6\u5927\u65bc\u7b49\u65bc\u7576\u524d\u5b57\u5143\u7684\u9023\u7e8c\u9577\u5ea6\uff0c\u5247\u8aaa\u660e\u5b58\u5728\u4e00\u500b\u4e14\u50c5\u4e00\u500b\u4ee5\u7576\u524d\u5b57\u5143\u7d50\u5c3e\u3001\u7b26\u5408\u689d\u4ef6\u7684\u5b50\u5b57\u4e32\u3002"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)(i,{value:"cpp",label:"C++",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"int countBinarySubstrings(string s) {\n    int prev = 0, cur = 1, count = 0;\n    for (int i = 1; i < s.length(); ++i) {\n        if (s[i] == s[i - 1]) {\n            ++cur;\n        } else {\n            prev = cur;\n            cur = 1;\n        }\n        if (prev >= cur) {\n            ++count;\n        }\n    }\n    return count;\n}\n"})})}),(0,s.jsx)(i,{value:"py",label:"Python",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-py",children:"def countBinarySubstrings(s: str) -> int:\n    prev, cur, count = 0, 1, 0\n    \n    for i in range(1, len(s)):\n        if s[i] == s[i - 1]:\n            cur += 1\n        else:\n            prev = cur\n            cur = 1\n        if prev >= cur:\n            count += 1\n    \n    return count\n\n"})})})]}),"\n",(0,s.jsx)(e.h2,{id:"1249-minimum-remove-to-make-valid-parentheses",children:(0,s.jsx)(e.a,{href:"https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/",children:"1249. Minimum Remove to Make Valid Parentheses"})}),"\n",(0,s.jsx)(e.h3,{id:"\u984c\u76ee\u63cf\u8ff0-4",children:"\u984c\u76ee\u63cf\u8ff0"}),"\n",(0,s.jsx)(e.p,{children:"\u7d66\u5b9a\u4e00\u500b\u5305\u542b\u5b57\u6bcd\u8207\u62ec\u865f\u7684\u5b57\u4e32\uff0c\u6c42\u6700\u5c11\u79fb\u9664\u591a\u5c11\u62ec\u865f\u624d\u80fd\u4f7f\u5176\u5408\u6cd5\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b-4",children:"\u8f38\u5165\u8f38\u51fa\u7bc4\u4f8b"}),"\n",(0,s.jsx)(e.p,{children:"\u8f38\u5165\u662f\u4e00\u500b\u5b57\u4e32\uff0c\u8f38\u51fa\u662f\u4e00\u500b\u5408\u6cd5\u4e14\u9577\u5ea6\u6700\u9577\u7684\u7d50\u679c\u5b57\u4e32\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'Input: s = "lee(t(c)o)de)"\nOutput: "lee(t(c)o)de"\n'})}),"\n",(0,s.jsx)(e.p,{children:'\u8fd4\u56de "lee(t(co)de)" \u6216 "lee(t(c)ode)" \u4e5f\u7b97\u6b63\u78ba\u3002'}),"\n",(0,s.jsx)(e.h3,{id:"\u984c\u89e3-4",children:"\u984c\u89e3"}),"\n",(0,s.jsx)(e.p,{children:"\u56e0\u70ba\u53ea\u6709\u4e00\u7a2e\u62ec\u865f\u985e\u578b\uff0c\u56e0\u6b64\u6211\u5011\u4e0d\u4e00\u5b9a\u9700\u8981\u7528\u5806\u758a\u4f86\u7d71\u8a08\u62ec\u865f\u5c0d\u61c9\u60c5\u6cc1\u3002\u76f8\u53cd\uff0c\u6211\u5011\u53ef\u4ee5\u4f7f\u7528\u4e00\u500b\u81e8\u6642\u8b8a\u6578\u4f86\u8a18\u9304\u7576\u524d\u4f4d\u7f6e\u6642\u5de6\u62ec\u865f\u6bd4\u53f3\u62ec\u865f\u591a\u51fa\u591a\u5c11\u500b\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5982\u679c\u5728\u904d\u6b77\u904e\u7a0b\u4e2d\uff0c\u9019\u500b\u6578\u503c\u8b8a\u70ba\u8ca0\u6578\uff0c\u8aaa\u660e\u6709\u591a\u9918\u7684\u53f3\u62ec\u865f\u9700\u8981\u79fb\u9664\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u82e5\u904d\u6b77\u7d50\u675f\u6642\u9019\u500b\u503c\u70ba\u6b63\u6578\uff0c\u5247\u8aaa\u660e\u6709\u591a\u9918\u7684\u5de6\u62ec\u865f\u9700\u8981\u79fb\u9664\uff0c\u9019\u53ef\u4ee5\u900f\u904e\u5f9e\u53f3\u5230\u5de6\u7684\u904d\u6b77\u5b8c\u6210\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u500b\u5c0f\u6280\u5de7\u662f\u5148\u6a19\u8a18\u5f85\u522a\u9664\u7684\u4f4d\u7f6e\uff0c\u6700\u5f8c\u4e00\u6b21\u6027\u79fb\u9664\u9019\u4e9b\u4f4d\u7f6e\u7684\u62ec\u865f\u3002"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)(i,{value:"cpp",label:"C++",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"string minRemoveToMakeValid(string s) {\n    int count = 0, n = s.length();\n    char to_delete = '#';\n    for (char& c : s) {\n        if (c == '(') { \n            ++count; \n        } else if (c == ')') {\n            if (count > 0) {\n                --count;\n            } else {\n                c = to_delete;\n            }\n        }\n    }\n    for (int i = n - 1; i >= 0; --i) {\n        if (count == 0) break;\n        if (s[i] == '(') {\n            s[i] = to_delete;\n            --count;\n        }\n    }\n    s.erase(remove_if(s.begin(), s.end(),\n                      [to_delete](char c) { return c == to_delete; }),\n            s.end());\n    return s;\n}\n\n"})})}),(0,s.jsx)(i,{value:"py",label:"Python",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-py",children:'def minRemoveToMakeValid(s: str) -> str:\n    count, n = 0, len(s)\n    to_delete = set()\n    \n    for i in range(n):\n        if s[i] == "(":\n            count += 1\n        elif s[i] == ")":\n            if count > 0:\n                count -= 1\n            else:\n                to_delete.add(i)\n    \n    for i in range(n - 1, -1, -1):\n        if count == 0:\n            break\n        if s[i] == "(":\n            to_delete.add(i)\n            count -= 1\n    \n    return "".join(s[i] for i in range(n) if i not in to_delete)\n\n'})})})]})]})}function u(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}function h(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);