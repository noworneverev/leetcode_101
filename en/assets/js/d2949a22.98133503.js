"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[8008],{3143:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"mathematical-solutions/8-3-prime-numbers","title":"8.3 Prime Numbers","description":"Prime numbers are integers greater than 1 that have no divisors other than 1 and themselves. It is important to note that every number can be expressed as a product of prime numbers.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/8-mathematical-solutions/8-3-prime-numbers.mdx","sourceDirName":"8-mathematical-solutions","slug":"/mathematical-solutions/8-3-prime-numbers","permalink":"/leetcode_101/en/mathematical-solutions/8-3-prime-numbers","draft":false,"unlisted":false,"editUrl":"https://github.com/noworneverev/leetcode_101/tree/master/leetcode_101/docs/8-mathematical-solutions/8-3-prime-numbers.mdx","tags":[],"version":"current","sidebarPosition":40,"frontMatter":{"sidebar_position":40},"sidebar":"tutorialSidebar","previous":{"title":"8.2 Least Common Multiple and Greatest Common Divisor","permalink":"/leetcode_101/en/mathematical-solutions/8-2-lcm-gcd"},"next":{"title":"8.4 Numerical Processing","permalink":"/leetcode_101/en/mathematical-solutions/8-4-number-processing"}}');var a=s(4848),i=s(8453);const r={sidebar_position:40},l="8.3 Prime Numbers",m={},o=[{value:"204. Count Primes",id:"204-count-primes",level:2},{value:"Problem Description",id:"problem-description",level:3},{value:"Input and Output Example",id:"input-and-output-example",level:3},{value:"Solution Explanation",id:"solution-explanation",level:3}];function c(e){const n={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",math:"math",mi:"mi",mn:"mn",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,i.R)(),...e.components},{TabItem:s,Tabs:t}=n;return s||d("TabItem",!0),t||d("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"83-prime-numbers",children:"8.3 Prime Numbers"})}),"\n",(0,a.jsx)(n.p,{children:"Prime numbers are integers greater than 1 that have no divisors other than 1 and themselves. It is important to note that every number can be expressed as a product of prime numbers."}),"\n",(0,a.jsx)(n.h2,{id:"204-count-primes",children:(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/count-primes/",children:"204. Count Primes"})}),"\n",(0,a.jsx)(n.h3,{id:"problem-description",children:"Problem Description"}),"\n",(0,a.jsx)(n.p,{children:"Given a number ( n ), find the count of prime numbers less than ( n )."}),"\n",(0,a.jsx)(n.h3,{id:"input-and-output-example",children:"Input and Output Example"}),"\n",(0,a.jsx)(n.p,{children:"Input an integer and output another integer representing the count of prime numbers less than the input number."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: 10\nOutput: 4\n"})}),"\n",(0,a.jsx)(n.p,{children:"In this example, the prime numbers less than 10 are [2, 3, 5, 7]."}),"\n",(0,a.jsx)(n.h3,{id:"solution-explanation",children:"Solution Explanation"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Sieve of Eratosthenes"})," is a widely used algorithm for determining whether an integer is a prime number. It is particularly efficient for determining all prime numbers less than a given integer ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"n"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})})]}),". The principle is simple: iterate through numbers from ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mn,{children:"1"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(n.span,{className:"mord",children:"1"})]})})]})," to ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"n"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})})]}),", and for the current number ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"m"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"m"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"m"})]})})]}),", mark all multiples of ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"m"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"m"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"m"})]})})]})," (less than ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"n"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})})]}),") as composite numbers. After processing, the numbers not marked as composite are prime."]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)(s,{value:"cpp",label:"C++",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"int countPrimes(int n) {\n    if (n <= 2) {\n        return 0;\n    }\n    vector<bool> primes(n, true);\n    int count = n - 2;  // Remove the non-prime number 1\n    for (int i = 2; i < n; ++i) {\n        if (primes[i]) {\n            for (int j = 2 * i; j < n; j += i) {\n                if (primes[j]) {\n                    primes[j] = false;\n                    --count;\n                }\n            }\n        }\n    }\n    return count;\n}\n"})})}),(0,a.jsx)(s,{value:"py",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"def countPrimes(n: int) -> int:\n    if n <= 2:\n        return 0\n    primes = [True for _ in range(n)]\n    count = n - 2 # Remove the non-prime number 1\n    for i in range(2, n):\n        if primes[i]:\n            for j in range(2 * i, n, i):\n                if primes[j]:\n                    primes[j] = False\n                    count -= 1\n    return count\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"By leveraging certain properties of prime numbers, we can further optimize this algorithm."}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)(s,{value:"cpp",label:"C++",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"int countPrimes(int n) {\n    if (n <= 2) {\n        return 0;\n    }\n    vector<bool> primes(n, true);\n    int sqrtn = sqrt(n);\n    int count = n / 2;  // Even numbers are not prime\n    int i = 3;\n    // The smallest prime factor is always less than or equal to the square root.\n    while (i <= sqrtn) {\n        // Find multiples to the right, avoiding even numbers and redundant checks.\n        for (int j = i * i; j < n; j += 2 * i) {\n            if (primes[j]) {\n                --count;\n                primes[j] = false;\n            }\n        }\n        i += 2;\n        // Move to the next position to the right, avoiding even numbers and redundant checks.\n        while (i <= sqrtn && !primes[i]) {\n            i += 2;\n        }\n    }\n    return count;\n}\n"})})}),(0,a.jsx)(s,{value:"py",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"def countPrimes(n: int) -> int:\n    if n <= 2:\n        return 0\n    primes = [True for _ in range(n)]\n    sqrtn = sqrt(n)\n    count = n // 2  # Even numbers are not prime\n    i = 3\n    # The smallest prime factor is always less than or equal to the square root.\n    while i <= sqrtn:\n        # Find multiples to the right, avoiding even numbers and redundant checks.\n        for j in range(i * i, n, 2 * i):\n            if primes[j]:\n                count -= 1\n                primes[j] = False\n        i += 2\n        # Move to the next position to the right, avoiding even numbers and redundant checks.\n        while i <= sqrtn and not primes[i]:\n            i += 2\n    return count\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);