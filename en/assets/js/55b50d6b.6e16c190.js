"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[4878],{12:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"trees/13-5-binary-search-tree","title":"13.5 Binary Search Tree","description":"A Binary Search Tree (BST) is a special type of binary tree starting from the root, move to the left if the current node\'s value is greater than the target value, or move to the right if it\'s smaller. Additionally, since a BST is ordered, an in-order traversal of the tree results in a sorted array.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/13-trees/13-5-binary-search-tree.mdx","sourceDirName":"13-trees","slug":"/trees/13-5-binary-search-tree","permalink":"/leetcode_101/en/trees/13-5-binary-search-tree","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":72,"frontMatter":{"sidebar_position":72},"sidebar":"tutorialSidebar","previous":{"title":"13.4  Preorder, Inorder, and Postorder Traversals","permalink":"/leetcode_101/en/trees/13-4-preorder-inorder-postorder-traversal"},"next":{"title":"13.6 Trie","permalink":"/leetcode_101/en/trees/13-6-trie"}}');var i=n(4848),a=n(8453);const o={sidebar_position:72},s="13.5 Binary Search Tree",l={},h=[{value:"99. Recover Binary Search Tree",id:"99-recover-binary-search-tree",level:2},{value:"Problem Description",id:"problem-description",level:3},{value:"Input and Output Example",id:"input-and-output-example",level:3},{value:"Solution Explanation",id:"solution-explanation",level:3},{value:"669. Trim a Binary Search Tree",id:"669-trim-a-binary-search-tree",level:2},{value:"Problem Description",id:"problem-description-1",level:3},{value:"Input and Output Example",id:"input-and-output-example-1",level:3},{value:"Solution Explanation",id:"solution-explanation-1",level:3}];function d(e){const r={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,a.R)(),...e.components},{TabItem:n,Tabs:t}=r;return n||p("TabItem",!0),t||p("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"135-binary-search-tree",children:"13.5 Binary Search Tree"})}),"\n",(0,i.jsxs)(r.p,{children:["A ",(0,i.jsx)(r.code,{children:"Binary Search Tree"})," (BST) is a special type of binary tree: for every parent node, all nodes in its left subtree have values less than or equal to the parent's value, and all nodes in its right subtree have values greater than or equal to the parent's value. Therefore, for a BST, we can determine whether a value exists in ",(0,i.jsxs)(r.span,{className:"katex",children:[(0,i.jsx)(r.span,{className:"katex-mathml",children:(0,i.jsx)(r.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(r.semantics,{children:[(0,i.jsxs)(r.mrow,{children:[(0,i.jsx)(r.mi,{children:"O"}),(0,i.jsx)(r.mo,{stretchy:"false",children:"("}),(0,i.jsx)(r.mi,{children:"log"}),(0,i.jsx)(r.mo,{children:"\u2061"}),(0,i.jsx)(r.mi,{children:"n"}),(0,i.jsx)(r.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(r.annotation,{encoding:"application/x-tex",children:"O(\\log n)"})]})})}),(0,i.jsx)(r.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(r.span,{className:"base",children:[(0,i.jsx)(r.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(r.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(r.span,{className:"mopen",children:"("}),(0,i.jsxs)(r.span,{className:"mop",children:["lo",(0,i.jsx)(r.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,i.jsx)(r.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsx)(r.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(r.span,{className:"mclose",children:")"})]})})]})," time: starting from the root, move to the left if the current node's value is greater than the target value, or move to the right if it's smaller. Additionally, since a BST is ordered, an in-order traversal of the tree results in a sorted array."]}),"\n",(0,i.jsx)(r.p,{children:"For example, the tree below is a BST, and its in-order traversal yields [1, 2, 3, 4, 5, 6]."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    4\n   / \\\n  2   5\n / \\   \\\n1   3   6\n"})}),"\n",(0,i.jsx)(r.h2,{id:"99-recover-binary-search-tree",children:(0,i.jsx)(r.a,{href:"https://leetcode.com/problems/recover-binary-search-tree/",children:"99. Recover Binary Search Tree"})}),"\n",(0,i.jsx)(r.h3,{id:"problem-description",children:"Problem Description"}),"\n",(0,i.jsx)(r.p,{children:"Given a binary search tree, where two nodes have been swapped by mistake, restore the tree to its correct structure."}),"\n",(0,i.jsx)(r.h3,{id:"input-and-output-example",children:"Input and Output Example"}),"\n",(0,i.jsx)(r.p,{children:"The input is a binary search tree where two nodes have been swapped, and the output is the corrected tree."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"Input:\n  3\n / \\\n1   4\n   /\n  2\nOutput:\n  2\n / \\\n1   4\n   /\n  3\n"})}),"\n",(0,i.jsx)(r.p,{children:"In this example, 2 and 3 were swapped by mistake."}),"\n",(0,i.jsx)(r.h3,{id:"solution-explanation",children:"Solution Explanation"}),"\n",(0,i.jsxs)(r.p,{children:["We can perform an in-order traversal of the BST and use a ",(0,i.jsx)(r.code,{children:"prev"})," pointer to keep track of the previous node during traversal. If the current node's value is less than the ",(0,i.jsx)(r.code,{children:"prev"})," node's value, it indicates an order mismatch that needs correction."]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"If there's only one mismatch in the entire traversal, it means the two swapped nodes are adjacent."}),"\n",(0,i.jsx)(r.li,{children:"If there are two mismatches, the two non-adjacent nodes are swapped and need correction."}),"\n"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)(n,{value:"cpp",label:"C++",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-cpp",children:"// Auxiliary function\nvoid inorder(TreeNode* root, TreeNode*& mistake1, TreeNode*& mistake2,\n             TreeNode*& prev) {\n    if (root == nullptr) {\n        return;\n    }\n    inorder(root->left, mistake1, mistake2, prev);\n    if (prev != nullptr && root->val < prev->val) {\n        if (mistake1 == nullptr) {\n            mistake1 = prev;\n        }\n        mistake2 = root;\n    }\n    prev = root;\n    inorder(root->right, mistake1, mistake2, prev);\n}\n// Main function\nvoid recoverTree(TreeNode* root) {\n    TreeNode *mistake1 = nullptr, *mistake2 = nullptr, *prev = nullptr;\n    inorder(root, mistake1, mistake2, prev);\n    if (mistake1 != nullptr && mistake2 != nullptr) {\n        swap(mistake1->val, mistake2->val);\n    }\n}\n"})})}),(0,i.jsx)(n,{value:"py",label:"Python",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-py",children:"# Auxiliary function\n# In Python, it is not straightforward to pass pointers directly in auxiliary functions. Therefore, we use a list of length 1 to simulate passing by reference.\ndef inorder(\n    root: Optional[TreeNode],\n    mistake1=List[Optional[TreeNode]],\n    mistake2=List[Optional[TreeNode]],\n    prev=List[Optional[TreeNode]],\n):\n    if root is None:\n        return\n    inorder(root.left, mistake1, mistake2, prev)\n    if prev[0] is not None and root.val < prev[0].val:\n        if mistake1[0] is None:\n            mistake1[0] = prev[0]\n        mistake2[0] = root\n    prev[0] = root\n    inorder(root.right, mistake1, mistake2, prev)\n\n# Main function\ndef recoverTree(root: Optional[TreeNode]) -> None:\n    mistake1, mistake2, prev = [None], [None], [None]\n    inorder(root, mistake1, mistake2, prev)\n    if mistake1[0] is not None and mistake2[0] is not None:\n        mistake1[0].val, mistake2[0].val = mistake2[0].val, mistake1[0].val\n"})})})]}),"\n",(0,i.jsx)(r.h2,{id:"669-trim-a-binary-search-tree",children:(0,i.jsx)(r.a,{href:"https://leetcode.com/problems/trim-a-binary-search-tree/",children:"669. Trim a Binary Search Tree"})}),"\n",(0,i.jsx)(r.h3,{id:"problem-description-1",children:"Problem Description"}),"\n",(0,i.jsx)(r.p,{children:"Given a binary search tree and two integers L and R, where L < R, trim the tree so that all nodes in the tree have values within the range [L, R]."}),"\n",(0,i.jsx)(r.h3,{id:"input-and-output-example-1",children:"Input and Output Example"}),"\n",(0,i.jsx)(r.p,{children:"Input is a binary search tree and two integers L and R. Output is the trimmed binary search tree."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"Input: L = 1, R = 3, tree =\n      3\n     / \\\n    0   4\n     \\\n      2\n     /\n    1\nOutput:\n    3\n   /\n  2\n /\n1\n"})}),"\n",(0,i.jsx)(r.h3,{id:"solution-explanation-1",children:"Solution Explanation"}),"\n",(0,i.jsx)(r.p,{children:"By leveraging the properties of a binary search tree, we can efficiently solve this problem using recursion."}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)(n,{value:"cpp",label:"C++",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-cpp",children:"TreeNode* trimBST(TreeNode* root, int low, int high) {\n    if (root == nullptr) {\n        return root;\n    }\n    if (root->val > high) {\n        return trimBST(root->left, low, high);\n    }\n    if (root->val < low) {\n        return trimBST(root->right, low, high);\n    }\n    root->left = trimBST(root->left, low, high);\n    root->right = trimBST(root->right, low, high);\n    return root;\n}\n"})})}),(0,i.jsx)(n,{value:"py",label:"Python",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-py",children:"def trimBST(\n    root: Optional[TreeNode], low: int, high: int\n) -> Optional[TreeNode]:\n    if root is None:\n        return None\n    if root.val > high:\n        return trimBST(root.left, low, high)\n    if root.val < low:\n        return trimBST(root.right, low, high)\n    root.left = trimBST(root.left, low, high)\n    root.right = trimBST(root.right, low, high)\n    return root\n"})})})]})]})}function c(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function p(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);