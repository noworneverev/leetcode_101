"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[3956],{2991:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>s});const r=JSON.parse('{"id":"trees/13-2-tree-recursion","title":"13.2 \u6811\u7684\u9012\u5f52","description":"\u5bf9\u4e8e\u4e00\u4e9b\u7b80\u5355\u7684\u9012\u5f52\u9898\uff0c\u67d0\u4e9b LeetCode \u8fbe\u4eba\u559c\u6b22\u5199 one-line code\uff0c\u5373\u7528\u4e00\u884c\u4ee3\u7801\u89e3\u51b3\u95ee\u9898\u3002\u6211\u4eec\u4e5f\u4f1a\u5c55\u793a\u4e00\u4e9b\u8fd9\u6837\u7684\u4ee3\u7801\uff0c\u4f46\u662f\u5bf9\u4e8e\u65b0\u624b\uff0c\u7b14\u8005\u4ecd\u7136\u5efa\u8bae\u60a8\u4f7f\u7528\u591a\u884c\u7684 if-else \u5224\u65ad\u8bed\u53e5\u3002","source":"@site/docs/13-trees/13-2-tree-recursion.mdx","sourceDirName":"13-trees","slug":"/trees/13-2-tree-recursion","permalink":"/leetcode_101/trees/13-2-tree-recursion","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":69,"frontMatter":{"sidebar_position":69},"sidebar":"tutorialSidebar","previous":{"title":"13.1 \u6570\u636e\u7ed3\u6784\u4ecb\u7ecd","permalink":"/leetcode_101/trees/13-1-data-structure-introduction"},"next":{"title":"13.3 \u5c42\u6b21\u904d\u5386","permalink":"/leetcode_101/trees/13-3-level-order-traversal"}}');var o=t(4848),i=t(8453);const l={sidebar_position:69},d="13.2 \u6811\u7684\u9012\u5f52",a={},s=[{value:"104. Maximum Depth of Binary Tree",id:"104-maximum-depth-of-binary-tree",level:2},{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:3},{value:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:3},{value:"110. Balanced Binary Tree",id:"110-balanced-binary-tree",level:2},{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0-1",level:3},{value:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b-1",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3-1",level:3},{value:"543. Diameter of Binary Tree",id:"543-diameter-of-binary-tree",level:2},{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0-2",level:3},{value:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b-2",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3-2",level:3},{value:"437. Path Sum III",id:"437-path-sum-iii",level:2},{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0-3",level:3},{value:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b-3",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3-3",level:3},{value:"101. Symmetric Tree",id:"101-symmetric-tree",level:2},{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0-4",level:3},{value:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b-4",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3-4",level:3},{value:"1110. Delete Nodes And Return Forest",id:"1110-delete-nodes-and-return-forest",level:2},{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0-5",level:3},{value:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b-5",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3-5",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components},{TabItem:t,Tabs:r}=n;return t||u("TabItem",!0),r||u("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"132-\u6811\u7684\u9012\u5f52",children:"13.2 \u6811\u7684\u9012\u5f52"})}),"\n",(0,o.jsx)(n.p,{children:"\u5bf9\u4e8e\u4e00\u4e9b\u7b80\u5355\u7684\u9012\u5f52\u9898\uff0c\u67d0\u4e9b LeetCode \u8fbe\u4eba\u559c\u6b22\u5199 one-line code\uff0c\u5373\u7528\u4e00\u884c\u4ee3\u7801\u89e3\u51b3\u95ee\u9898\u3002\u6211\u4eec\u4e5f\u4f1a\u5c55\u793a\u4e00\u4e9b\u8fd9\u6837\u7684\u4ee3\u7801\uff0c\u4f46\u662f\u5bf9\u4e8e\u65b0\u624b\uff0c\u7b14\u8005\u4ecd\u7136\u5efa\u8bae\u60a8\u4f7f\u7528\u591a\u884c\u7684 if-else \u5224\u65ad\u8bed\u53e5\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u5f88\u591a\u65f6\u5019\uff0c\u6811\u9012\u5f52\u7684\u5199\u6cd5\u4e0e\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u7684\u9012\u5f52\u5199\u6cd5\u76f8\u540c\uff0c\u56e0\u6b64\u672c\u4e66\u4e0d\u4f1a\u533a\u5206\u4e8c\u8005\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"104-maximum-depth-of-binary-tree",children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/maximum-depth-of-binary-tree/",children:"104. Maximum Depth of Binary Tree"})}),"\n",(0,o.jsx)(n.h3,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,o.jsx)(n.p,{children:"\u6c42\u4e00\u4e2a\u4e8c\u53c9\u6811\u7684\u6700\u5927\u6df1\u5ea6\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b",children:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b"}),"\n",(0,o.jsx)(n.p,{children:"\u8f93\u5165\u662f\u4e00\u4e2a\u4e8c\u53c9\u6811\uff0c\u8f93\u51fa\u662f\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u8be5\u6811\u7684\u6700\u5927\u6df1\u5ea6\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input:\n    3\n   / \\\n  9  20\n     / \\\n    15  7\nOutput: 3\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,o.jsx)(n.p,{children:"\u5229\u7528\u9012\u5f52\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u6c42\u5f97\u6700\u5927\u6df1\u5ea6\u3002"}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)(t,{value:"cpp",label:"C++",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"int maxDepth(TreeNode* root) {\n    if (root == nullptr) {\n        return 0;\n    }\n    return max(maxDepth(root->left), maxDepth(root->right)) + 1;\n}\n"})})}),(0,o.jsx)(t,{value:"py",label:"Python",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"def maxDepth(root: Optional[TreeNode]) -> int:\n    if root is None:\n        return 0\n    return max(maxDepth(root.left), maxDepth(root.right)) + 1\n"})})})]}),"\n",(0,o.jsx)(n.h2,{id:"110-balanced-binary-tree",children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/balanced-binary-tree/",children:"110. Balanced Binary Tree"})}),"\n",(0,o.jsx)(n.h3,{id:"\u9898\u76ee\u63cf\u8ff0-1",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,o.jsx)(n.p,{children:"\u5224\u65ad\u4e00\u4e2a\u4e8c\u53c9\u6811\u662f\u5426\u5e73\u8861\u3002\u6811\u5e73\u8861\u7684\u5b9a\u4e49\u662f\uff0c\u5bf9\u4e8e\u6811\u4e0a\u7684\u4efb\u610f\u8282\u70b9\uff0c\u5176\u4e24\u4fa7\u8282\u70b9\u7684\u6700\u5927\u6df1\u5ea6\u7684\u5dee\u503c\u4e0d\u5f97\u5927\u4e8e 1\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b-1",children:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b"}),"\n",(0,o.jsx)(n.p,{children:"\u8f93\u5165\u662f\u4e00\u4e2a\u4e8c\u53c9\u6811\uff0c\u8f93\u51fa\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u6811\u662f\u5426\u5e73\u8861\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input:\n      1\n     / \\\n    2   2\n   / \\\n  3   3\n / \\\n4   4 \nOutput: false\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\u9898\u89e3-1",children:"\u9898\u89e3"}),"\n",(0,o.jsx)(n.p,{children:"\u89e3\u6cd5\u7c7b\u4f3c\u4e8e\u6c42\u6811\u7684\u6700\u5927\u6df1\u5ea6\uff0c\u4f46\u6709\u4e24\u4e2a\u4e0d\u540c\u7684\u5730\u65b9\uff1a\u4e00\u662f\u6211\u4eec\u9700\u8981\u5148\u5904\u7406\u5b50\u6811\u7684\u6df1\u5ea6\u518d\u8fdb\u884c\u6bd4\u8f83\uff0c\u4e8c\u662f\u5982\u679c\u6211\u4eec\u5728\u5904\u7406\u5b50\u6811\u65f6\u53d1\u73b0\u5176\u5df2\u7ecf\u4e0d\u5e73\u8861\u4e86\uff0c\u5219\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a-1\uff0c\u4f7f\u5f97\u6240\u6709\u5176\u957f\u8f88\u8282\u70b9\u53ef\u4ee5\u907f\u514d\u591a\u4f59\u7684\u5224\u65ad\uff08\u672c\u9898\u7684\u5224\u65ad\u6bd4\u8f83\u7b80\u5355\uff0c\u505a\u5dee\u540e\u53d6\u7edd\u5bf9\u503c\u5373\u53ef\uff1b\u4f46\u5982\u679c\u6b64\u5904\u662f\u4e00\u4e2a\u5f00\u9500\u8f83\u5927\u7684\u6bd4\u8f83\u8fc7\u7a0b\uff0c\u5219\u907f\u514d\u91cd\u590d\u5224\u65ad\u53ef\u4ee5\u8282\u7701\u5927\u91cf\u7684\u8ba1\u7b97\u65f6\u95f4\uff09\u3002"}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)(t,{value:"cpp",label:"C++",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"// \u8f85\u51fd\u6570\u3002\nint balancedDepth(TreeNode* root) {\n    if (root == nullptr) {\n        return 0;\n    }\n    int left = balancedDepth(root->left);\n    int right = balancedDepth(root->right);\n    if (left == -1 || right == -1 || abs(left - right) > 1) {\n        return -1;\n    }\n    return max(left, right) + 1;\n}\n// \u4e3b\u51fd\u6570\u3002\nbool isBalanced(TreeNode* root) { return balancedDepth(root) != -1; }\n"})})}),(0,o.jsx)(t,{value:"py",label:"Python",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"# \u8f85\u51fd\u6570\u3002\ndef balancedDepth(root: Optional[TreeNode]) -> int:\n    if root is None:\n        return 0\n    left = balancedDepth(root.left)\n    right = balancedDepth(root.right)\n    if left == -1 or right == -1 or abs(left - right) > 1:\n        return -1\n    return max(left, right) + 1\n\n# \u4e3b\u51fd\u6570\u3002\ndef isBalanced(root: Optional[TreeNode]) -> bool:\n    return balancedDepth(root) != -1\n\n"})})})]}),"\n",(0,o.jsx)(n.h2,{id:"543-diameter-of-binary-tree",children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/diameter-of-binary-tree/",children:"543. Diameter of Binary Tree"})}),"\n",(0,o.jsx)(n.h3,{id:"\u9898\u76ee\u63cf\u8ff0-2",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,o.jsx)(n.p,{children:"\u6c42\u4e00\u4e2a\u4e8c\u53c9\u6811\u7684\u6700\u957f\u76f4\u5f84\u3002\u76f4\u5f84\u7684\u5b9a\u4e49\u662f\u4e8c\u53c9\u6811\u4e0a\u4efb\u610f\u4e24\u8282\u70b9\u4e4b\u95f4\u7684\u65e0\u5411\u8ddd\u79bb\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b-2",children:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b"}),"\n",(0,o.jsx)(n.p,{children:"\u8f93\u5165\u662f\u4e00\u4e2a\u4e8c\u53c9\u6811\uff0c\u8f93\u51fa\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u6700\u957f\u76f4\u5f84\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input:\n      1\n     / \\\n    2   3\n   / \\\n  4   5\nOutput: 3\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u8fd9\u4e2a\u6837\u4f8b\u4e2d\uff0c\u6700\u957f\u76f4\u5f84\u662f [4,2,1,3] \u548c [5,2,1,3]\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"\u9898\u89e3-2",children:"\u9898\u89e3"}),"\n",(0,o.jsx)(n.p,{children:"\u540c\u6837\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u9012\u5f52\u6765\u5904\u7406\u6811\u3002\u89e3\u9898\u65f6\u8981\u6ce8\u610f\uff0c\u5728\u6211\u4eec\u5904\u7406\u67d0\u4e2a\u5b50\u6811\u65f6\uff0c\u6211\u4eec\u66f4\u65b0\u7684\u6700\u957f\u76f4\u5f84\u503c\u548c\u9012\u5f52\u8fd4\u56de\u7684\u503c\u662f\u4e0d\u540c\u7684\u3002\u8fd9\u662f\u56e0\u4e3a\u5f85\u66f4\u65b0\u7684\u6700\u957f\u76f4\u5f84\u503c\u662f\u7ecf\u8fc7\u8be5\u5b50\u6811\u6839\u8282\u70b9\u7684\u6700\u957f\u76f4\u5f84\uff08\u5373\u4e24\u4fa7\u957f\u5ea6\uff09\uff1b\u800c\u51fd\u6570\u8fd4\u56de\u503c\u662f\u4ee5\u8be5\u5b50\u6811\u6839\u8282\u70b9\u4e3a\u7aef\u70b9\u7684\u6700\u957f\u76f4\u5f84\u503c\uff08\u5373\u4e00\u4fa7\u957f\u5ea6\uff09\uff0c\u4f7f\u7528\u8fd9\u6837\u7684\u8fd4\u56de\u503c\u624d\u53ef\u4ee5\u901a\u8fc7\u9012\u5f52\u66f4\u65b0\u7236\u8282\u70b9\u7684\u6700\u957f\u76f4\u5f84\u503c\uff09\u3002"}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)(t,{value:"cpp",label:"C++",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"// \u8f85\u51fd\u6570\u3002\nint updateDiameter(TreeNode* node, int& diameter) {\n    if (node == nullptr) {\n        return 0;\n    }\n    int left = updateDiameter(node->left, diameter);\n    int right = updateDiameter(node->right, diameter);\n    diameter = max(diameter, left + right);\n    return max(left, right) + 1;\n}\n// \u4e3b\u51fd\u6570\u3002\nint diameterOfBinaryTree(TreeNode* root) {\n    int diameter = 0;\n    updateDiameter(root, diameter);\n    return diameter;\n}\n"})})}),(0,o.jsx)(t,{value:"py",label:"Python",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"# \u8f85\u51fd\u6570\u3002\ndef updateDiameter(node: Optional[TreeNode], diameter: List[int]) -> int:\n    if node is None:\n        return 0\n    left = updateDiameter(node.left, diameter)\n    right = updateDiameter(node.right, diameter)\n    diameter[0] = max(diameter[0], left + right)\n    return max(left, right) + 1\n\n# \u4e3b\u51fd\u6570\u3002\ndef diameterOfBinaryTree(root: Optional[TreeNode]) -> int:\n    diameter = [0]\n    updateDiameter(root, diameter)\n    return diameter[0]\n\n"})})})]}),"\n",(0,o.jsx)(n.h2,{id:"437-path-sum-iii",children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/path-sum-iii/",children:"437. Path Sum III"})}),"\n",(0,o.jsx)(n.h3,{id:"\u9898\u76ee\u63cf\u8ff0-3",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,o.jsx)(n.p,{children:"\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\u4e8c\u53c9\u6811\uff0c\u6c42\u6709\u591a\u5c11\u6761\u8def\u5f84\u8282\u70b9\u503c\u7684\u548c\u7b49\u4e8e\u7ed9\u5b9a\u503c\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b-3",children:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b"}),"\n",(0,o.jsx)(n.p,{children:"\u8f93\u5165\u4e00\u4e2a\u4e8c\u53c9\u6811\u548c\u4e00\u4e2a\u7ed9\u5b9a\u6574\u6570\uff0c\u8f93\u51fa\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u6709\u591a\u5c11\u6761\u6ee1\u8db3\u6761\u4ef6\u7684\u8def\u5f84\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: sum = 8, tree =\n        10\n       / \\\n      5  -3\n     / \\   \\\n    3   2   11\n   / \\   \\\n  3 -2    1\nOutput: 3\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u8fd9\u4e2a\u6837\u4f8b\u4e2d\uff0c\u548c\u4e3a 8 \u7684\u8def\u5f84\u4e00\u5171\u6709\u4e09\u4e2a\uff1a[[5,3],[5,2,1],[-3,11]]\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"\u9898\u89e3-3",children:"\u9898\u89e3"}),"\n",(0,o.jsx)(n.p,{children:"\u9012\u5f52\u6bcf\u4e2a\u8282\u70b9\u65f6\uff0c\u9700\u8981\u5206\u60c5\u51b5\u8003\u8651\uff1a\uff081\uff09\u5982\u679c\u9009\u53d6\u8be5\u8282\u70b9\u52a0\u5165\u8def\u5f84\uff0c\u5219\u4e4b\u540e\u5fc5\u987b\u7ee7\u7eed\u52a0\u5165\u8fde\u7eed\u8282\u70b9\uff0c\u6216\u505c\u6b62\u52a0\u5165\u8282\u70b9\uff082\uff09\u5982\u679c\u4e0d\u9009\u53d6\u8be5\u8282\u70b9\u52a0\u5165\u8def\u5f84\uff0c\u5219\u5bf9\u5176\u5de6\u53f3\u8282\u70b9\u8fdb\u884c\u91cd\u65b0\u8fdb\u884c\u8003\u8651\u3002\u56e0\u6b64\u4e00\u4e2a\u65b9\u4fbf\u7684\u65b9\u6cd5\u662f\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u8f85\u51fd\u6570\uff0c\u4e13\u95e8\u7528\u6765\u8ba1\u7b97\u8fde\u7eed\u52a0\u5165\u8282\u70b9\u7684\u8def\u5f84\u3002"}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)(t,{value:"cpp",label:"C++",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"// \u8f85\u51fd\u6570\u3002\n// long long\u9632\u6b62test case\u4e2d\u5927\u6570\u6ea2\u51fa\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u7528int\u5373\u53ef\u3002\nlong long pathSumStartWithRoot(TreeNode* root, long long targetSum) {\n    if (root == nullptr) {\n        return 0;\n    }\n    return (root->val == targetSum) +\n           pathSumStartWithRoot(root->left, targetSum - root->val) +\n           pathSumStartWithRoot(root->right, targetSum - root->val);\n}\n// \u4e3b\u51fd\u6570\u3002\nint pathSum(TreeNode* root, int targetSum) {\n    if (root == nullptr) {\n        return 0;\n    }\n    return pathSumStartWithRoot(root, targetSum) +\n           pathSum(root->left, targetSum) + pathSum(root->right, targetSum);\n}\n"})})}),(0,o.jsx)(t,{value:"py",label:"Python",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"# \u8f85\u51fd\u6570\u3002\ndef pathSumStartWithRoot(root: Optional[TreeNode], targetSum: int) -> int:\n    if root is None:\n        return 0\n    return (\n        int(root.val == targetSum)\n        + pathSumStartWithRoot(root.left, targetSum - root.val)\n        + pathSumStartWithRoot(root.right, targetSum - root.val)\n    )\n\n# \u4e3b\u51fd\u6570\u3002\ndef pathSum(root: Optional[TreeNode], targetSum: int) -> int:\n    if root is None:\n        return 0\n    return (\n        pathSumStartWithRoot(root, targetSum)\n        + pathSum(root.left, targetSum)\n        + pathSum(root.right, targetSum)\n    )\n\n"})})})]}),"\n",(0,o.jsx)(n.h2,{id:"101-symmetric-tree",children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/symmetric-tree/",children:"101. Symmetric Tree"})}),"\n",(0,o.jsx)(n.h3,{id:"\u9898\u76ee\u63cf\u8ff0-4",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,o.jsx)(n.p,{children:"\u5224\u65ad\u4e00\u4e2a\u4e8c\u53c9\u6811\u662f\u5426\u5bf9\u79f0\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b-4",children:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b"}),"\n",(0,o.jsx)(n.p,{children:"\u8f93\u5165\u4e00\u4e2a\u4e8c\u53c9\u6811\uff0c\u8f93\u51fa\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u8be5\u6811\u662f\u5426\u5bf9\u79f0\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input:\n    1\n   / \\\n  2   2\n / \\ / \\\n3  4 4 3\nOutput: true\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\u9898\u89e3-4",children:"\u9898\u89e3"}),"\n",(0,o.jsx)(n.p,{children:"\u5224\u65ad\u4e00\u4e2a\u6811\u662f\u5426\u5bf9\u79f0\u7b49\u4ef7\u4e8e\u5224\u65ad\u5de6\u53f3\u5b50\u6811\u662f\u5426\u5bf9\u79f0\u3002\u7b14\u8005\u4e00\u822c\u4e60\u60ef\u5c06\u5224\u65ad\u4e24\u4e2a\u5b50\u6811\u662f\u5426\u76f8\u7b49\u6216\u5bf9\u79f0\u7c7b\u578b\u7684\u9898\u7684\u89e3\u6cd5\u53eb\u505a\u201c\u56db\u6b65\u6cd5\u201d\uff1a\uff081\uff09\u5982\u679c\u4e24\u4e2a\u5b50\u6811\u90fd\u4e3a\u7a7a\u6307\u9488\uff0c\u5219\u5b83\u4eec\u76f8\u7b49\u6216\u5bf9\u79f0\uff082\uff09\u5982\u679c\u4e24\u4e2a\u5b50\u6811\u53ea\u6709\u4e00\u4e2a\u4e3a\u7a7a\u6307\u9488\uff0c\u5219\u5b83\u4eec\u4e0d\u76f8\u7b49\u6216\u4e0d\u5bf9\u79f0\uff083\uff09\u5982\u679c\u4e24\u4e2a\u5b50\u6811\u6839\u8282\u70b9\u7684\u503c\u4e0d\u76f8\u7b49\uff0c\u5219\u5b83\u4eec\u4e0d\u76f8\u7b49\u6216\u4e0d\u5bf9\u79f0\uff084\uff09\u6839\u636e\u76f8\u7b49\u6216\u5bf9\u79f0\u8981\u6c42\uff0c\u8fdb\u884c\u9012\u5f52\u5904\u7406\u3002"}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)(t,{value:"cpp",label:"C++",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"// \u8f85\u51fd\u6570\u3002\nbool isLeftRightSymmetric(TreeNode* left, TreeNode* right) {\n    if (left == nullptr && right == nullptr) {\n        return true;\n    }\n    if (left == nullptr or right == nullptr) {\n        return false;\n    }\n    if (left->val != right->val) {\n        return false;\n    }\n    return isLeftRightSymmetric(left->left, right->right) &&\n           isLeftRightSymmetric(left->right, right->left);\n}\n// \u4e3b\u51fd\u6570\u3002\nbool isSymmetric(TreeNode* root) {\n    if (root == nullptr) {\n        return true;\n    }\n    return isLeftRightSymmetric(root->left, root->right);\n}\n"})})}),(0,o.jsx)(t,{value:"py",label:"Python",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"# \u8f85\u51fd\u6570\u3002\ndef isLeftRightSymmetric(\n    left: Optional[TreeNode], right: Optional[TreeNode]\n) -> bool:\n    if left is None and right is None:\n        return True\n    if left is None or right is None:\n        return False\n    if left.val != right.val:\n        return False\n    return (\n        isLeftRightSymmetric(left.left, right.right) and\n        isLeftRightSymmetric(left.right, right.left)\n    )\n\n# \u4e3b\u51fd\u6570\u3002\ndef isSymmetric(root: Optional[TreeNode]) -> bool:\n    if root is None:\n        return True\n    return isLeftRightSymmetric(root.left, root.right)\n\n"})})})]}),"\n",(0,o.jsx)(n.h2,{id:"1110-delete-nodes-and-return-forest",children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/delete-nodes-and-return-forest/",children:"1110. Delete Nodes And Return Forest"})}),"\n",(0,o.jsx)(n.h3,{id:"\u9898\u76ee\u63cf\u8ff0-5",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,o.jsx)(n.p,{children:"\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\u4e8c\u53c9\u6811\u548c\u4e00\u4e9b\u6574\u6570\uff0c\u6c42\u5220\u6389\u8fd9\u4e9b\u6574\u6570\u5bf9\u5e94\u7684\u8282\u70b9\u540e\uff0c\u5269\u4f59\u7684\u5b50\u6811\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b-5",children:"\u8f93\u5165\u8f93\u51fa\u6837\u4f8b"}),"\n",(0,o.jsx)(n.p,{children:"\u8f93\u5165\u662f\u4e00\u4e2a\u6574\u6570\u4e8c\u53c9\u6811\u548c\u4e00\u4e2a\u4e00\u7ef4\u6574\u6570\u6570\u7ec4\uff0c\u8f93\u51fa\u4e00\u4e2a\u6570\u7ec4\uff0c\u6bcf\u4e2a\u4f4d\u7f6e\u5b58\u50a8\u4e00\u4e2a\u5b50\u6811\uff08\u7684\u6839\u8282\u70b9\uff09\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: to_delete = [3,5], tree =\n    1\n   / \\\n  2   3\n / \\ / \\\n 4 5 6 7\nOutput: [\n    1\n   /\n  2\n /\n4  ,6 ,7]\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\u9898\u89e3-5",children:"\u9898\u89e3"}),"\n",(0,o.jsx)(n.p,{children:"\u8fd9\u9053\u9898\u6700\u4e3b\u8981\u9700\u8981\u6ce8\u610f\u7684\u7ec6\u8282\u662f\u5982\u679c\u901a\u8fc7\u9012\u5f52\u5904\u7406\u539f\u6811\uff0c\u4ee5\u53ca\u9700\u8981\u5728\u4ec0\u4e48\u65f6\u5019\u65ad\u5f00\u6307\u9488\u3002\u540c\u65f6\uff0c\u4e3a\u4e86\u4fbf\u4e8e\u5bfb\u627e\u5f85\u5220\u9664\u8282\u70b9\uff0c\u53ef\u4ee5\u5efa\u7acb\u4e00\u4e2a\u54c8\u5e0c\u8868\u65b9\u4fbf\u67e5\u627e\u3002\u7b14\u8005\u5f3a\u70c8\u5efa\u8bae\u8bfb\u8005\u5728\u770b\u5b8c\u9898\u89e3\u540e\uff0c\u81ea\u5df1\u5199\u4e00\u904d\u672c\u9898\uff0c\u52a0\u6df1\u5bf9\u4e8e\u9012\u5f52\u7684\u7406\u89e3\u548c\u8fd0\u7528\u80fd\u529b\u3002"}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)(t,{value:"cpp",label:"C++",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"// \u8f85\u51fd\u6570\u3002\nTreeNode* moveNodesToForest(TreeNode* root, unordered_set<int>& undeleted,\n                            vector<TreeNode*>& forest) {\n    if (root == nullptr) {\n        return nullptr;\n    }\n    root->left = moveNodesToForest(root->left, undeleted, forest);\n    root->right = moveNodesToForest(root->right, undeleted, forest);\n    if (undeleted.contains(root->val)) {\n        if (root->left != nullptr) {\n            forest.push_back(root->left);\n        }\n        if (root->right != nullptr) {\n            forest.push_back(root->right);\n        }\n        root = nullptr;\n    }\n    return root;\n}\n// \u4e3b\u51fd\u6570\u3002\nvector<TreeNode*> delNodes(TreeNode* root, vector<int>& to_delete) {\n    vector<TreeNode*> forest;\n    unordered_set<int> undeleted(to_delete.begin(), to_delete.end());\n    root = moveNodesToForest(root, undeleted, forest);\n    if (root != nullptr) {\n        forest.push_back(root);\n    }\n    return forest;\n}\n"})})}),(0,o.jsx)(t,{value:"py",label:"Python",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"# \u8f85\u51fd\u6570\u3002\ndef moveNodesToForest(\n    root: Optional[TreeNode], undeleted: Set[int], forest: List[TreeNode]\n) -> Optional[TreeNode]:\n    if root is None:\n        return None\n    \n    root.left = moveNodesToForest(root.left, undeleted, forest)\n    root.right = moveNodesToForest(root.right, undeleted, forest)\n    \n    if root.val in undeleted:\n        if root.left is not None:\n            forest.append(root.left)\n        if root.right is not None:\n            forest.append(root.right)\n        root = None\n    \n    return root\n\n# \u4e3b\u51fd\u6570\u3002\ndef delNodes(root: Optional[TreeNode], to_delete: List[int]) -> List[TreeNode]:\n    forest = []\n    undeleted = set(to_delete)\n    root = moveNodesToForest(root, undeleted, forest)\n    if root is not None:\n        forest.append(root)\n    return forest\n\n"})})})]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);