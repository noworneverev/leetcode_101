"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[9663],{1830:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"index","title":"LeetCode 101: A Grinding Guide (2nd Edition)","description":"Author: Chang Gao","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/index.md","sourceDirName":".","slug":"/","permalink":"/leetcode_101/en/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"sidebar_position":0},"sidebar":"tutorialSidebar","next":{"title":"1. \u6700\u6613\u61c2\u7684\u8d2a\u5fc3\u7b97\u6cd5","permalink":"/leetcode_101/en/category/1-\u6700\u6613\u61c2\u7684\u8d2a\u5fc3\u7b97\u6cd5"}}');var n=i(4848),s=i(8453);const r={sidebar_position:0},a="LeetCode 101: A Grinding Guide (2nd Edition)",d={},h=[{value:"Preface",id:"preface",level:2},{value:"Important Notice",id:"important-notice",level:2},{value:"Introduction",id:"introduction",level:2}];function c(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"leetcode-101-a-grinding-guide-2nd-edition",children:"LeetCode 101: A Grinding Guide (2nd Edition)"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/changgyhub/leetcode_101/blob/master/misc/cover.jpg?raw=true",alt:""})}),"\n",(0,n.jsx)(t.p,{children:"Author: Chang Gao"}),"\n",(0,n.jsx)(t.p,{children:"Languages: C++ & Python"}),"\n",(0,n.jsxs)(t.p,{children:["Version: Official Version 2.0c, latest version available on GitHub ",(0,n.jsx)(t.a,{href:"https://github.com/changgyhub/leetcode_101",children:"changgyhub/leetcode_101"})]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"A textbook and reference guide for readers with basic programming knowledge but limited problem-solving experience."})}),"\n",(0,n.jsx)(t.h2,{id:"preface",children:"Preface"}),"\n",(0,n.jsx)(t.p,{children:"At the end of 2019, the first edition of this book was officially released on GitHub and received an enthusiastic response. Over the past five years, the author has gained extensive work experience and recognized numerous flaws and shortcomings in the first edition. Thus, at the end of 2024, the author reorganized the content and released this second edition."}),"\n",(0,n.jsx)(t.p,{children:'This book is divided into three main parts: algorithms, mathematics, and data structures, spanning fifteen chapters. It provides a comprehensive explanation of techniques frequently used when solving LeetCode problems. In the first edition, the number of problems was restricted to 101 to align with the term "101" (symbolizing an introduction in English). However, the scope of interview questions has expanded over time. Hence, the second edition includes additional key problems to help readers fill any gaps in their knowledge. The author carefully selected problems based on their likelihood of appearing in interviews, ease of understanding, and general applicability. Each chapter concludes with practice problems that readers are strongly encouraged to attempt after completing the chapter.'}),"\n",(0,n.jsx)(t.p,{children:"Every regular problem in this book comes with solutions in both C++ and Python3. Since the book\u2019s purpose is not to teach C++ or Python, the author avoids delving too deeply into syntax details and uses some modern C++ standards and Pythonic code. As of late 2024, all code in the book runs correctly on LeetCode and, while maintaining readability, is often the fastest or most space-efficient solution."}),"\n",(0,n.jsx)(t.p,{children:"Remember, solving problems is only a small part of improving your interview and work capabilities. There is a vast ocean of computer science to explore, and it is not recommended to spend excessive time on problem-solving. To become a proficient computer scientist, treat problem-solving as an entry point while also strengthening your professional foundation, improving your skills, and staying informed about the latest advancements in the field."}),"\n",(0,n.jsx)(t.p,{children:"This book was completed during the author\u2019s spare time and may contain errors or areas for improvement. Some problem explanations may lack detail or clarity. Readers are welcome to submit issues on GitHub to help refine the book, and the author will acknowledge your contributions in the acknowledgments section. For suggestions or inquiries, visit the author\u2019s personal website or send a message via email or LinkedIn, and the author will respond promptly."}),"\n",(0,n.jsx)(t.p,{children:"Special thanks to GitHub user CyC2018 for their LeetCode problem explanations, which greatly assisted the author in the early stages of this book. Gratitude also goes to ElegantBook for its elegant LATEX template, which made it easy to transform notes into a professional-looking eBook. The cover photo of the second edition was taken by the author in July 2024 at the seaside town of Sausalito, north of the Golden Gate Bridge in San Francisco. Incidentally, the author bought a large three-scoop ice cream cone there, but it was too sweet to finish and had to be discarded."}),"\n",(0,n.jsx)(t.p,{children:"If you find this book helpful, consider supporting the author!"}),"\n",(0,n.jsx)("img",{src:"https://github.com/changgyhub/leetcode_101/blob/master/misc/wechatpay.jpg?raw=true",width:"200"}),"\n",(0,n.jsx)(t.h2,{id:"important-notice",children:"Important Notice"}),"\n",(0,n.jsxs)(t.p,{children:["GitHub repository for this book: ",(0,n.jsx)(t.a,{href:"https://github.com/changgyhub/leetcode_101",children:"github.com/changgyhub/leetcode_101"})]}),"\n",(0,n.jsx)(t.p,{children:"This book is free of charge and prohibits any commercial use, as its purpose is solely for sharing and teaching. Academic sharing and circulation are welcome. All problem copyrights belong to LeetCode, and this book does not display content or code for LeetCode premium problems."}),"\n",(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"When visiting the LeetCode website, problems can often be categorized by type. The most common categories include arrays, dynamic programming, mathematics, strings, trees, hash maps, depth-first search, binary search, greedy algorithms, breadth-first search, and two pointers. This book covers the above categories and most other popular problem types, while categorizing them by type and difficulty level in a step-by-step manner."}),"\n",(0,n.jsx)(t.p,{children:"The first major category is algorithms. This book starts with the simplest greedy algorithms and gradually progresses to two pointers, binary search, sorting algorithms, search algorithms, and finally, more challenging topics such as dynamic programming and divide-and-conquer."}),"\n",(0,n.jsx)(t.p,{children:"The second category is mathematics, encompassing problems related to pure mathematics and computer-related topics like bit manipulation. These problems often test intellectual sharpness but are less commonly used in real-world work. The author recommends prioritizing other categories."}),"\n",(0,n.jsx)(t.p,{children:"The third category is data structures, including C++ STL, Python3 built-in data structures, string manipulation, linked lists, trees, and graphs. Linked lists are a subset of trees and graphs. The book concludes with an introduction to more advanced data structures like the classic Union-Find and LRU."})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);