"use strict";(self.webpackChunkleetcode_101=self.webpackChunkleetcode_101||[]).push([[7212],{3844:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"searching-algorithms/5-3-backtracking","title":"5.3 Backtracking","description":"Backtracking is a special case of priority search, also known as the trial-and-error method. It is commonly used in depth-first search when the state of nodes needs to be recorded. Typically, problems involving permutations, combinations, or selections are more conveniently solved using backtracking.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/5-searching-algorithms/5-3-backtracking.mdx","sourceDirName":"5-searching-algorithms","slug":"/searching-algorithms/5-3-backtracking","permalink":"/leetcode_101/en/searching-algorithms/5-3-backtracking","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":23,"frontMatter":{"sidebar_position":23},"sidebar":"tutorialSidebar","previous":{"title":"5.2 Depth First Search","permalink":"/leetcode_101/en/searching-algorithms/5-2-depth-first-search"},"next":{"title":"5.4 Breadth-First Search","permalink":"/leetcode_101/en/searching-algorithms/5-4-breadth-first-search"}}');var r=i(4848),o=i(8453);const a={sidebar_position:23},s="5.3 Backtracking",c={},l=[{value:"46. Permutations",id:"46-permutations",level:2},{value:"Problem Description",id:"problem-description",level:3},{value:"Input and Output Example",id:"input-and-output-example",level:3},{value:"Solution Explanation",id:"solution-explanation",level:3},{value:"77. Combinations",id:"77-combinations",level:2},{value:"Problem Description",id:"problem-description-1",level:3},{value:"Input and Output Example",id:"input-and-output-example-1",level:3},{value:"Solution Explanation",id:"solution-explanation-1",level:3},{value:"79. Word Search",id:"79-word-search",level:2},{value:"Problem Description",id:"problem-description-2",level:3},{value:"Input and Output Example",id:"input-and-output-example-2",level:3},{value:"Solution Explanation",id:"solution-explanation-2",level:3},{value:"51. N-Queens",id:"51-n-queens",level:2},{value:"Problem Description",id:"problem-description-3",level:3},{value:"Input and Output Example",id:"input-and-output-example-3",level:3},{value:"Solution Explanation",id:"solution-explanation-3",level:3}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,o.R)(),...n.components},{TabItem:t,Tabs:a}=e;return t||p("TabItem",!0),a||p("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"53-backtracking",children:"5.3 Backtracking"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Backtracking"})," is a special case of priority search, also known as the trial-and-error method. It is commonly used in depth-first search when the state of nodes needs to be recorded. Typically, problems involving permutations, combinations, or selections are more conveniently solved using backtracking."]}),"\n",(0,r.jsxs)(e.p,{children:["As the name suggests, the core of backtracking is to backtrack. When reaching a certain node, if we find that the current node (and its child nodes) do not meet the target requirements, we backtrack to the previous node and continue the search, while ",(0,r.jsx)(e.code,{children:"restoring the state modified at the current node"}),". The benefit is that we can modify only the global state of the graph without creating a new graph to store states during each traversal. In terms of implementation, backtracking is similar to regular depth-first search, involving steps like [modifying the current node state]\u2192[recursing into child nodes], but it adds an extra backtracking step, turning it into [modifying the current node state]\u2192[recursing into child nodes]\u2192[restoring the current node state]."]}),"\n",(0,r.jsxs)(e.p,{children:["For readers unfamiliar with backtracking, this explanation might be unclear, which is entirely normal. The following problems are intended to help you understand backtracking. If it\u2019s still confusing, remember two simple principles: ",(0,r.jsx)(e.code,{children:"1. Pass states by reference, and 2. Restore all state changes after recursion"}),"."]}),"\n",(0,r.jsx)(e.p,{children:"There are generally two cases for backtracking modifications: one involves modifying the last output, such as in permutations and combinations, and the other involves modifying visit markers, such as searching for strings in a matrix."}),"\n",(0,r.jsx)(e.h2,{id:"46-permutations",children:(0,r.jsx)(e.a,{href:"https://leetcode.com/problems/permutations/",children:"46. Permutations"})}),"\n",(0,r.jsx)(e.h3,{id:"problem-description",children:"Problem Description"}),"\n",(0,r.jsx)(e.p,{children:"Given an array of distinct integers, return all possible permutations."}),"\n",(0,r.jsx)(e.h3,{id:"input-and-output-example",children:"Input and Output Example"}),"\n",(0,r.jsx)(e.p,{children:"The input is a one-dimensional integer array, and the output is a two-dimensional array representing all permutations of the input array."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Input: [1,2,3]\nOutput: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,2,1], [3,1,2]]\n"})}),"\n",(0,r.jsx)(e.p,{children:"The order of output does not matter as long as all permutations are included."}),"\n",(0,r.jsx)(e.h3,{id:"solution-explanation",children:"Solution Explanation"}),"\n",(0,r.jsx)(e.p,{children:"To generate all permutations, for each position (i), we can swap it with any subsequent position, then process position (i+1), and so on until the last position is processed. Instead of creating a new array to store the partially swapped numbers at each step, we use backtracking to modify the original array directly. Once recursion is complete, we restore the original state."}),"\n",(0,r.jsxs)(e.p,{children:["For example, using the input ",(0,r.jsx)(e.code,{children:"[1,2,3]"}),", this method outputs permutations in the order: ",(0,r.jsx)(e.code,{children:"[[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,2,1], [3,1,2]]"}),", ensuring all possible permutations are covered."]}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)(t,{value:"cpp",label:"C++",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"// Helper function.\nvoid backtracking(vector<int> &nums, int level,\n                  vector<vector<int>> &permutations) {\n    if (level == nums.size() - 1) {\n        permutations.push_back(nums);  // Save the current permutation.\n        return;\n    }\n    for (int i = level; i < nums.size(); ++i) {\n        swap(nums[i], nums[level]);  // Modify current state.\n        backtracking(nums, level + 1, permutations);  // Recur to next level.\n        swap(nums[i], nums[level]);  // Revert current state.\n    }\n}\n\n// Main function.\nvector<vector<int>> permute(vector<int> &nums) {\n    vector<vector<int>> permutations;\n    backtracking(nums, 0, permutations);\n    return permutations;\n}\n"})})}),(0,r.jsx)(t,{value:"py",label:"Python",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-py",children:"# Helper function.\ndef backtracking(nums: List[int], level: int, permutations: List[List[int]]):\n    if level == len(nums) - 1:\n        permutations.append(nums[:])  # Save current permutation via shallow copy.\n        return\n    for i in range(level, len(nums)):\n        nums[i], nums[level] = nums[level], nums[i]  # Modify current state.\n        backtracking(nums, level + 1, permutations)  # Recur to next level.\n        nums[i], nums[level] = nums[level], nums[i]  # Revert current state.\n\n# Main function.\ndef permute(nums: List[int]) -> List[List[int]]:\n    permutations = []\n    backtracking(nums, 0, permutations)\n    return permutations\n"})})})]}),"\n",(0,r.jsx)(e.h2,{id:"77-combinations",children:(0,r.jsx)(e.a,{href:"https://leetcode.com/problems/combinations/",children:"77. Combinations"})}),"\n",(0,r.jsx)(e.h3,{id:"problem-description-1",children:"Problem Description"}),"\n",(0,r.jsxs)(e.p,{children:["Given an integer ",(0,r.jsx)(e.code,{children:"n"})," and an integer ",(0,r.jsx)(e.code,{children:"k"}),", find all combinations of ",(0,r.jsx)(e.code,{children:"k"})," numbers chosen from the range ",(0,r.jsx)(e.code,{children:"1"})," to ",(0,r.jsx)(e.code,{children:"n"}),"."]}),"\n",(0,r.jsx)(e.h3,{id:"input-and-output-example-1",children:"Input and Output Example"}),"\n",(0,r.jsxs)(e.p,{children:["The input consists of two positive integers ",(0,r.jsx)(e.code,{children:"n"})," and ",(0,r.jsx)(e.code,{children:"k"}),". The output is a two-dimensional array representing all possible combinations."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Input: n = 4, k = 2\nOutput: [[2,4], [3,4], [2,3], [1,2], [1,3], [1,4]]\n"})}),"\n",(0,r.jsx)(e.p,{children:"The order of the dimensions in the two-dimensional array can be arbitrary."}),"\n",(0,r.jsx)(e.h3,{id:"solution-explanation-1",children:"Solution Explanation"}),"\n",(0,r.jsx)(e.p,{children:"Similar to permutation problems, we can use backtracking. In permutations, backtracking swaps positions, while in combinations, it determines whether to include the current number in the result."}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)(t,{value:"cpp",label:"C++",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"// Auxiliary function\nvoid backtracking(vector<vector<int>>& combinations, vector<int>& pick, int pos,\n                  int n, int k) {\n    if (pick.size() == k) {\n        combinations.push_back(pick);\n        return;\n    }\n    for (int i = pos; i <= n; ++i) {\n        pick.push_back(i);  // Modify the current node state\n        backtracking(combinations, pick, i + 1, n, k);  // Recurse to child nodes\n        pick.pop_back();  // Restore the current node state\n    }\n}\n\n// Main function\nvector<vector<int>> combine(int n, int k) {\n    vector<vector<int>> combinations;\n    vector<int> pick;\n    backtracking(combinations, pick, 1, n, k);\n    return combinations;\n}\n"})})}),(0,r.jsx)(t,{value:"py",label:"Python",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-py",children:"# Auxiliary function\ndef backtracking(\n    combinations: List[List[int]], pick: List[int], pos: int, n: int, k: int\n):\n    if len(pick) == k:\n        combinations.append(pick[:]) # int is a basic type, shallow copy is sufficient\n        return\n    for i in range(pos, n + 1):\n        pick.append(i) # Modify the current node state\n        backtracking(combinations, pick, i + 1, n, k) # Recurse to child nodes\n        pick.pop() # Restore the current node state\n\n# Main function\ndef combine(n: int, k: int) -> List[List[int]]:\n    combinations = []\n    pick = []\n    backtracking(combinations, pick, 1, n, k)\n    return combinations\n"})})})]}),"\n",(0,r.jsx)(e.h2,{id:"79-word-search",children:(0,r.jsx)(e.a,{href:"https://leetcode.com/problems/word-search/",children:"79. Word Search"})}),"\n",(0,r.jsx)(e.h3,{id:"problem-description-2",children:"Problem Description"}),"\n",(0,r.jsx)(e.p,{children:"Given a grid of letters, where all letters are connected to adjacent letters in four directions (up, down, left, right), determine whether a given word can be found in the grid."}),"\n",(0,r.jsx)(e.h3,{id:"input-and-output-example-2",children:"Input and Output Example"}),"\n",(0,r.jsx)(e.p,{children:"The input consists of a 2D character array and a string. The output is a boolean indicating whether the word can be found."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'Input: word = "ABCCED", board =\n[[\u2019A\u2019,\u2019B\u2019,\u2019C\u2019,\u2019E\u2019],\n [\u2019S\u2019,\u2019F\u2019,\u2019C\u2019,\u2019S\u2019],\n [\u2019A\u2019,\u2019D\u2019,\u2019E\u2019,\u2019E\u2019]]\nOutput: true\n'})}),"\n",(0,r.jsx)(e.p,{children:"Starting from the top-left corner 'A', we can move right, then down, and finally left to find the continuous sequence \"ABCCED\"."}),"\n",(0,r.jsx)(e.h3,{id:"solution-explanation-2",children:"Solution Explanation"}),"\n",(0,r.jsx)(e.p,{children:"Unlike permutation and combination problems, this problem modifies the visited state. During a depth-first search from any position, we mark the current position as visited to prevent revisiting (e.g., avoid moving right and then back left). After all possibilities are explored, we revert the current position to unvisited to avoid interfering with other searches. Using backtracking, we only need to modify a 2D visited matrix without passing the state as a new object to the recursive function."}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)(t,{value:"cpp",label:"C++",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"// Auxiliary function\nbool backtracking(vector<vector<char>>& board, string& word,\n                  vector<vector<bool>>& visited, int i, int j, int word_pos) {\n    if (i < 0 || i >= board.size() || j < 0 || j >= board[0].size() ||\n        visited[i][j] || board[i][j] != word[word_pos]) {\n        return false;\n    }\n    if (word_pos == word.size() - 1) {\n        return true;\n    }\n    visited[i][j] = true;  // Modify the current node state\n    if (backtracking(board, word, visited, i + 1, j, word_pos + 1) ||\n        backtracking(board, word, visited, i - 1, j, word_pos + 1) ||\n        backtracking(board, word, visited, i, j + 1, word_pos + 1) ||\n        backtracking(board, word, visited, i, j - 1, word_pos + 1)) {\n        return true;  // Recurse to child nodes\n    }\n    visited[i][j] = false;  // Restore the current node state\n    return false;\n}\n\n// Main function\nbool exist(vector<vector<char>>& board, string word) {\n    int m = board.size(), n = board[0].size();\n    vector<vector<bool>> visited(m, vector<bool>(n, false));\n    for (int i = 0; i < m; ++i) {\n        for (int j = 0; j < n; ++j) {\n            if (backtracking(board, word, visited, i, j, 0)) {\n                return true;\n            }\n        }\n    }\n    return false;\n}\n"})})}),(0,r.jsx)(t,{value:"py",label:"Python",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-py",children:"# Auxiliary function\ndef backtracking(board: List[List[str]], word: str,\n                visited: List[List[bool]], i: int, j: int, word_pos: int):\n    if (i < 0 or i >= len(board) or j < 0 or j >= len(board[0])\n        or visited[i][j] or board[i][j] != word[word_pos]):\n        return False\n    if word_pos == len(word) - 1:\n        return True\n    visited[i][j] = True # Modify the current node state\n    if (backtracking(board, word, visited, i + 1, j, word_pos + 1) or\n        backtracking(board, word, visited, i - 1, j, word_pos + 1) or\n        backtracking(board, word, visited, i, j + 1, word_pos + 1) or\n        backtracking(board, word, visited, i, j - 1, word_pos + 1)):\n        return True # Recurse to child nodes\n    visited[i][j] = False # Restore the current node state\n    return False\n\n# Main function\ndef exist(board: List[List[str]], word: str) -> bool:\n    m, n = len(board), len(board[0])\n    visited = [[False for _ in range(n)] for _ in range(m)]\n    return any([\n        backtracking(board, word, visited, i, j, 0)\n        for i in range(m) for j in range(n)\n     ])\n"})})})]}),"\n",(0,r.jsx)(e.h2,{id:"51-n-queens",children:(0,r.jsx)(e.a,{href:"https://leetcode.com/problems/n-queens/",children:"51. N-Queens"})}),"\n",(0,r.jsx)(e.h3,{id:"problem-description-3",children:"Problem Description"}),"\n",(0,r.jsx)(e.p,{children:"Given an n x n chessboard, determine all possible ways to place n queens so that no two queens attack each other. A queen can attack another queen on the same row, column, or diagonals."}),"\n",(0,r.jsx)("figure",{children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.img,{src:i(4661).A+"",width:"258",height:"257"}),"\n",(0,r.jsx)("figcaption",{children:"Problem 51 - An example solution to the 8-Queens problem"})]})}),"\n",(0,r.jsx)(e.h3,{id:"input-and-output-example-3",children:"Input and Output Example"}),"\n",(0,r.jsx)(e.p,{children:"Input is an integer n, output is a 2D list of strings representing all valid chessboard configurations."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'Input: 4\nOutput: [\n [".Q..", // Solution 1\n  "...Q",\n  "Q...",\n  "..Q."],\n ["..Q.", // Solution 2\n  "Q...",\n  "...Q",\n  ".Q.."]\n]\n'})}),"\n",(0,r.jsx)(e.p,{children:"In this example, dots represent empty squares, and 'Q' represents queens."}),"\n",(0,r.jsx)(e.h3,{id:"solution-explanation-3",children:"Solution Explanation"}),"\n",(0,r.jsx)(e.p,{children:"Similar to finding words in a matrix, this problem involves modifying the state matrix during backtracking. The difference here is that we need to track visited columns, left diagonals, and right diagonals. If we traverse by rows to place queens, we don't need to maintain a separate visited array for rows."}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)(t,{value:"cpp",label:"C++",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"// Auxiliary function\nvoid backtracking(vector<vector<string>> &solutions, vector<string> &board,\n                  vector<bool> &column, vector<bool> &ldiag,\n                  vector<bool> &rdiag, int row) {\n    int n = board.size();\n    if (row == n) {\n        solutions.push_back(board);\n        return;\n    }\n    for (int i = 0; i < n; ++i) {\n        if (column[i] || ldiag[n - row + i - 1] || rdiag[row + i]) {\n            continue;\n        }\n        // Modify the current node state\n        board[row][i] = 'Q';\n        column[i] = ldiag[n - row + i - 1] = rdiag[row + i] = true;\n        // Recurse to child nodes\n        backtracking(solutions, board, column, ldiag, rdiag, row + 1);\n        // Restore the current node state\n        board[row][i] = '.';\n        column[i] = ldiag[n - row + i - 1] = rdiag[row + i] = false;\n    }\n}\n\n// Main function\nvector<vector<string>> solveNQueens(int n) {\n    vector<vector<string>> solutions;\n    vector<string> board(n, string(n, \u2019.\u2019));\n    vector<bool> column(n, false);\n    vector<bool> ldiag(2 * n - 1, false);\n    vector<bool> rdiag(2 * n - 1, false);\n    backtracking(solutions, board, column, ldiag, rdiag, 0);\n    return solutions;\n}\n"})})}),(0,r.jsx)(t,{value:"py",label:"Python",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-py",children:'# Auxiliary function\ndef backtracking(solutions: List[List[str]], board: List[List[str]],\n    column: List[bool], ldiag: List[bool], rdiag: List[bool], row: int):\n    n = len(board)\n    if row == n:\n        solutions.append(["".join(row) for row in board])\n        return\n    for i in range(n):\n        if column[i] or ldiag[n - row + i - 1] or rdiag[row + i]:\n            continue\n        # Modify the current node state\n        board[row][i] = "Q"\n        column[i] = ldiag[n - row + i - 1] = rdiag[row + i] = True\n        # Recurse to child nodes\n        backtracking(solutions, board, column, ldiag, rdiag, row + 1)\n        # Restore the current node state\n        board[row][i] = "."\n        column[i] = ldiag[n - row + i - 1] = rdiag[row + i] = False\n\n# Main function\ndef solveNQueens(n: int) -> List[List[str]]:\n    solutions = []\n    board = [["." for _ in range(n)] for _ in range(n)]\n    column = [False] * n\n    ldiag = [False] * (2 * n - 1)\n    rdiag = [False] * (2 * n - 1)\n    backtracking(solutions, board, column, ldiag, rdiag, 0)\n    return solutions\n'})})})]})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}function p(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},4661:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/n-queens-5b6b0dfc0fd28c9e2e34e6c625607a57.png"}}]);