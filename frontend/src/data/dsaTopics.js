export const dsaTopics = [
  {
    id: "arrays",
    name: "Array",
    icon: "Grid",
    description: "Fundamental array manipulation, two pointers, sliding window, prefix sums, matrix operations, and sorting.",
    subtopics: [
      {
        id: "arr_two_pointers",
        name: "Two Pointers",
        description: "Efficiently process linear data structures using two indices.",
        questions: [
          { id: "arr_tp_1", title: "Two Sum II - Input Array Is Sorted", difficulty: "Easy", leetCodeId: 167, url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
          { id: "arr_tp_2", title: "Remove Duplicates from Sorted Array", difficulty: "Easy", leetCodeId: 26, url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
          { id: "arr_tp_3", title: "Move Zeroes", difficulty: "Easy", leetCodeId: 283, url: "https://leetcode.com/problems/move-zeroes/" },
          { id: "arr_tp_4", title: "3Sum", difficulty: "Medium", leetCodeId: 15, url: "https://leetcode.com/problems/3sum/" },
          { id: "arr_tp_5", title: "Container With Most Water", difficulty: "Medium", leetCodeId: 11, url: "https://leetcode.com/problems/container-with-most-water/" },
          { id: "arr_tp_6", title: "3Sum Closest", difficulty: "Medium", leetCodeId: 16, url: "https://leetcode.com/problems/3sum-closest/" },
          { id: "arr_tp_7", title: "4Sum", difficulty: "Medium", leetCodeId: 18, url: "https://leetcode.com/problems/4sum/" },
          { id: "arr_tp_8", title: "Trapping Rain Water", difficulty: "Hard", leetCodeId: 42, url: "https://leetcode.com/problems/trapping-rain-water/" }
        ]
      },
      {
        id: "arr_sorting",
        name: "Sorting & Searching",
        description: "Classic sorting algorithms, custom comparator sorting, and element search.",
        questions: [
          { id: "arr_sort_0", title: "Majority Element", difficulty: "Easy", leetCodeId: 169, url: "https://leetcode.com/problems/majority-element/" },
          { id: "arr_sort_01", title: "Merge Sorted Array", difficulty: "Easy", leetCodeId: 88, url: "https://leetcode.com/problems/merge-sorted-array/" },
          { id: "arr_sort_1", title: "Sort Colors (Dutch National Flag)", difficulty: "Medium", leetCodeId: 75, url: "https://leetcode.com/problems/sort-colors/" },
          { id: "arr_sort_2", title: "Top K Frequent Elements", difficulty: "Medium", leetCodeId: 347, url: "https://leetcode.com/problems/top-k-frequent-elements/" },
          { id: "arr_sort_3", title: "Kth Largest Element in an Array", difficulty: "Medium", leetCodeId: 215, url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
          { id: "arr_sort_4", title: "First Missing Positive", difficulty: "Hard", leetCodeId: 41, url: "https://leetcode.com/problems/first-missing-positive/" }
        ]
      },
      {
        id: "arr_merge_intervals",
        name: "Merge Intervals",
        description: "Overlapping intervals, merging ranges, and scheduling.",
        questions: [
          { id: "arr_interval_1", title: "Summary Ranges", difficulty: "Easy", leetCodeId: 228, url: "https://leetcode.com/problems/summary-ranges/" },
          { id: "arr_interval_2", title: "Merge Intervals", difficulty: "Medium", leetCodeId: 56, url: "https://leetcode.com/problems/merge-intervals/" },
          { id: "arr_interval_3", title: "Insert Interval", difficulty: "Medium", leetCodeId: 57, url: "https://leetcode.com/problems/insert-interval/" },
          { id: "arr_interval_4", title: "Non-overlapping Intervals", difficulty: "Medium", leetCodeId: 435, url: "https://leetcode.com/problems/non-overlapping-intervals/" },
          { id: "arr_interval_5", title: "Minimum Number of Arrows to Burst Balloons", difficulty: "Medium", leetCodeId: 452, url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/" }
        ]
      },
      {
        id: "arr_sliding_window",
        name: "Sliding Window",
        description: "Fixed and dynamic sliding window techniques for array problems.",
        questions: [
          { id: "arr_sw_1", title: "Maximum Average Subarray I", difficulty: "Easy", leetCodeId: 643, url: "https://leetcode.com/problems/maximum-average-subarray-i/" },
          { id: "arr_sw_2", title: "Max Consecutive Ones III", difficulty: "Medium", leetCodeId: 1004, url: "https://leetcode.com/problems/max-consecutive-ones-iii/" },
          { id: "arr_sw_2b", title: "Minimum Size Subarray Sum", difficulty: "Medium", leetCodeId: 209, url: "https://leetcode.com/problems/minimum-size-subarray-sum/" },
          { id: "arr_sw_3", title: "Subarray Product Less Than K", difficulty: "Medium", leetCodeId: 713, url: "https://leetcode.com/problems/subarray-product-less-than-k/" },
          { id: "arr_sw_4", title: "Sliding Window Maximum", difficulty: "Hard", leetCodeId: 239, url: "https://leetcode.com/problems/sliding-window-maximum/" }
        ]
      },
      {
        id: "arr_prefix_sum",
        name: "Prefix Sum",
        description: "Pre-computing cumulative sums for O(1) range queries.",
        questions: [
          { id: "arr_ps_1", title: "Find Pivot Index", difficulty: "Easy", leetCodeId: 724, url: "https://leetcode.com/problems/find-pivot-index/" },
          { id: "arr_ps_2", title: "Range Sum Query - Immutable", difficulty: "Easy", leetCodeId: 303, url: "https://leetcode.com/problems/range-sum-query-immutable/" },
          { id: "arr_ps_3", title: "Subarray Sum Equals K", difficulty: "Medium", leetCodeId: 560, url: "https://leetcode.com/problems/subarray-sum-equals-k/" },
          { id: "arr_ps_4", title: "Continuous Subarray Sum", difficulty: "Medium", leetCodeId: 523, url: "https://leetcode.com/problems/continuous-subarray-sum/" },
          { id: "arr_ps_5", title: "Product of Array Except Self", difficulty: "Medium", leetCodeId: 238, url: "https://leetcode.com/problems/product-of-array-except-self/" },
          { id: "arr_ps_6", title: "Subarray Sums Divisible by K", difficulty: "Medium", leetCodeId: 974, url: "https://leetcode.com/problems/subarray-sums-divisible-by-k/" }
        ]
      },
      {
        id: "arr_matrix",
        name: "Matrix / 2D Grid",
        description: "Row & column manipulations, matrix rotation, and grid traversals.",
        questions: [
          { id: "arr_mat_1", title: "Reshape the Matrix", difficulty: "Easy", leetCodeId: 566, url: "https://leetcode.com/problems/reshape-the-matrix/" },
          { id: "arr_mat_2", title: "Rotate Image (90 Degrees)", difficulty: "Medium", leetCodeId: 48, url: "https://leetcode.com/problems/rotate-image/" },
          { id: "arr_mat_3", title: "Spiral Matrix", difficulty: "Medium", leetCodeId: 54, url: "https://leetcode.com/problems/spiral-matrix/" },
          { id: "arr_mat_4", title: "Set Matrix Zeroes", difficulty: "Medium", leetCodeId: 73, url: "https://leetcode.com/problems/set-matrix-zeroes/" },
          { id: "arr_mat_5", title: "Game of Life", difficulty: "Medium", leetCodeId: 289, url: "https://leetcode.com/problems/game-of-life/" }
        ]
      }
    ]
  },
  {
    id: "strings",
    name: "Strings",
    icon: "Type",
    description: "String manipulation, pattern matching, frequency hash maps, and sliding window on characters.",
    subtopics: [
      {
        id: "str_two_pointers",
        name: "Two Pointers on Strings",
        description: "Checking palindromes, reversing strings, and inward/outward expansion.",
        questions: [
          { id: "str_tp_1", title: "Valid Palindrome", difficulty: "Easy", leetCodeId: 125, url: "https://leetcode.com/problems/valid-palindrome/" },
          { id: "str_tp_2", title: "Reverse String", difficulty: "Easy", leetCodeId: 344, url: "https://leetcode.com/problems/reverse-string/" },
          { id: "str_tp_2b", title: "Valid Palindrome II", difficulty: "Easy", leetCodeId: 680, url: "https://leetcode.com/problems/valid-palindrome-ii/" },
          { id: "str_tp_3", title: "Longest Palindromic Substring", difficulty: "Medium", leetCodeId: 5, url: "https://leetcode.com/problems/longest-palindromic-substring/" },
          { id: "str_tp_4", title: "Palindromic Substrings", difficulty: "Medium", leetCodeId: 647, url: "https://leetcode.com/problems/palindromic-substrings/" }
        ]
      },
      {
        id: "str_sliding_window",
        name: "Sliding Window",
        description: "Substring problems involving character frequency counts and condition windows.",
        questions: [
          { id: "str_sw_1", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", leetCodeId: 3, url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
          { id: "str_sw_2", title: "Longest Repeating Character Replacement", difficulty: "Medium", leetCodeId: 424, url: "https://leetcode.com/problems/longest-repeating-character-replacement/" },
          { id: "str_sw_3", title: "Find All Anagrams in a String", difficulty: "Medium", leetCodeId: 438, url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/" },
          { id: "str_sw_3b", title: "Permutation in String", difficulty: "Medium", leetCodeId: 567, url: "https://leetcode.com/problems/permutation-in-string/" },
          { id: "str_sw_4", title: "Minimum Window Substring", difficulty: "Hard", leetCodeId: 76, url: "https://leetcode.com/problems/minimum-window-substring/" }
        ]
      },
      {
        id: "str_hashmap",
        name: "Hash Map & Frequency",
        description: "Anagrams, character counts, and string isomorphism.",
        questions: [
          { id: "str_hm_1", title: "Valid Anagram", difficulty: "Easy", leetCodeId: 242, url: "https://leetcode.com/problems/valid-anagram/" },
          { id: "str_hm_2", title: "Isomorphic Strings", difficulty: "Easy", leetCodeId: 205, url: "https://leetcode.com/problems/isomorphic-strings/" },
          { id: "str_hm_3", title: "First Unique Character in a String", difficulty: "Easy", leetCodeId: 387, url: "https://leetcode.com/problems/first-unique-character-in-a-string/" },
          { id: "str_hm_4", title: "Group Anagrams", difficulty: "Medium", leetCodeId: 49, url: "https://leetcode.com/problems/group-anagrams/" },
          { id: "str_hm_5", title: "Custom Sort String", difficulty: "Medium", leetCodeId: 791, url: "https://leetcode.com/problems/custom-sort-string/" }
        ]
      },
      {
        id: "str_manipulation",
        name: "String Manipulation",
        description: "Parsing, formatting, Roman numeral conversion, and string arithmetic.",
        questions: [
          { id: "str_man_1", title: "Roman to Integer", difficulty: "Easy", leetCodeId: 13, url: "https://leetcode.com/problems/roman-to-integer/" },
          { id: "str_man_2", title: "Longest Common Prefix", difficulty: "Easy", leetCodeId: 14, url: "https://leetcode.com/problems/longest-common-prefix/" },
          { id: "str_man_3", title: "String to Integer (atoi)", difficulty: "Medium", leetCodeId: 8, url: "https://leetcode.com/problems/string-to-integer-atoi/" },
          { id: "str_man_4", title: "Reverse Words in a String", difficulty: "Medium", leetCodeId: 151, url: "https://leetcode.com/problems/reverse-words-in-a-string/" },
          { id: "str_man_4b", title: "Multiply Strings", difficulty: "Medium", leetCodeId: 43, url: "https://leetcode.com/problems/multiply-strings/" },
          { id: "str_man_5", title: "Text Justification", difficulty: "Hard", leetCodeId: 68, url: "https://leetcode.com/problems/text-justification/" }
        ]
      }
    ]
  },
  {
    id: "binary_search",
    name: "Binary Search",
    icon: "Search",
    description: "Dividing search space in half for O(log N) lookups and searching answers.",
    subtopics: [
      {
        id: "bs_1d",
        name: "1D Array Binary Search",
        description: "Standard binary search, bounds finding, and searching in rotated array.",
        questions: [
          { id: "bs_1d_1", title: "Binary Search", difficulty: "Easy", leetCodeId: 704, url: "https://leetcode.com/problems/binary-search/" },
          { id: "bs_1d_2", title: "Search Insert Position", difficulty: "Easy", leetCodeId: 35, url: "https://leetcode.com/problems/search-insert-position/" },
          { id: "bs_1d_2b", title: "First Bad Version", difficulty: "Easy", leetCodeId: 278, url: "https://leetcode.com/problems/first-bad-version/" },
          { id: "bs_1d_3", title: "Find First and Last Position of Element in Sorted Array", difficulty: "Medium", leetCodeId: 34, url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
          { id: "bs_1d_4", title: "Search in Rotated Sorted Array", difficulty: "Medium", leetCodeId: 33, url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
          { id: "bs_1d_4b", title: "Search in Rotated Sorted Array II", difficulty: "Medium", leetCodeId: 81, url: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/" },
          { id: "bs_1d_5", title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", leetCodeId: 153, url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
          { id: "bs_1d_6", title: "Find Peak Element", difficulty: "Medium", leetCodeId: 162, url: "https://leetcode.com/problems/find-peak-element/" }
        ]
      },
      {
        id: "bs_answer",
        name: "Binary Search on Answer",
        description: "Finding minimum/maximum possible value satisfying a predicate function.",
        questions: [
          { id: "bs_ans_1", title: "Sqrt(x)", difficulty: "Easy", leetCodeId: 69, url: "https://leetcode.com/problems/sqrtx/" },
          { id: "bs_ans_2", title: "Koko Eating Bananas", difficulty: "Medium", leetCodeId: 875, url: "https://leetcode.com/problems/koko-eating-bananas/" },
          { id: "bs_ans_3", title: "Capacity To Ship Packages Within D Days", difficulty: "Medium", leetCodeId: 1011, url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" },
          { id: "bs_ans_4", title: "Split Array Largest Sum", difficulty: "Hard", leetCodeId: 410, url: "https://leetcode.com/problems/split-array-largest-sum/" },
          { id: "bs_ans_5", title: "Median of Two Sorted Arrays", difficulty: "Hard", leetCodeId: 4, url: "https://leetcode.com/problems/median-of-two-sorted-arrays/" }
        ]
      },
      {
        id: "bs_2d",
        name: "2D Matrix Search",
        description: "Binary search on 2D matrices with row/column sorted properties.",
        questions: [
          { id: "bs_2d_1", title: "Search a 2D Matrix", difficulty: "Medium", leetCodeId: 74, url: "https://leetcode.com/problems/search-a-2d-matrix/" },
          { id: "bs_2d_2", title: "Search a 2D Matrix II", difficulty: "Medium", leetCodeId: 240, url: "https://leetcode.com/problems/search-a-2d-matrix-ii/" }
        ]
      }
    ]
  },
  {
    id: "recursion_backtracking",
    name: "Recursion & Backtracking",
    icon: "GitFork",
    description: "Explaining state spaces, subset generation, permutations, and puzzle solving.",
    subtopics: [
      {
        id: "rec_basic",
        name: "Basic Recursion",
        description: "Base cases, call stack understanding, and divide-and-conquer fundamentals.",
        questions: [
          { id: "rec_1", title: "Fibonacci Number", difficulty: "Easy", leetCodeId: 509, url: "https://leetcode.com/problems/fibonacci-number/" },
          { id: "rec_2", title: "Pow(x, n)", difficulty: "Medium", leetCodeId: 50, url: "https://leetcode.com/problems/powx-n/" }
        ]
      },
      {
        id: "bt_subsets",
        name: "Subsets & Combinations",
        description: "Generating all subsets, combinations, and combination sums.",
        questions: [
          { id: "bt_sub_1", title: "Subsets", difficulty: "Medium", leetCodeId: 78, url: "https://leetcode.com/problems/subsets/" },
          { id: "bt_sub_2", title: "Subsets II (Contains Duplicates)", difficulty: "Medium", leetCodeId: 90, url: "https://leetcode.com/problems/subsets-ii/" },
          { id: "bt_sub_3", title: "Combination Sum", difficulty: "Medium", leetCodeId: 39, url: "https://leetcode.com/problems/combination-sum/" },
          { id: "bt_sub_4", title: "Combination Sum II", difficulty: "Medium", leetCodeId: 40, url: "https://leetcode.com/problems/combination-sum-ii/" },
          { id: "bt_sub_4b", title: "Combination Sum III", difficulty: "Medium", leetCodeId: 216, url: "https://leetcode.com/problems/combination-sum-iii/" },
          { id: "bt_sub_5", title: "Letter Combinations of a Phone Number", difficulty: "Medium", leetCodeId: 17, url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" }
        ]
      },
      {
        id: "bt_permutations",
        name: "Permutations & Grid Search",
        description: "Generating distinct orderings and searching grids recursively.",
        questions: [
          { id: "bt_perm_1", title: "Permutations", difficulty: "Medium", leetCodeId: 46, url: "https://leetcode.com/problems/permutations/" },
          { id: "bt_perm_2", title: "Permutations II", difficulty: "Medium", leetCodeId: 47, url: "https://leetcode.com/problems/permutations-ii/" },
          { id: "bt_perm_3", title: "Word Search", difficulty: "Medium", leetCodeId: 79, url: "https://leetcode.com/problems/word-search/" },
          { id: "bt_perm_4", title: "Palindrome Partitioning", difficulty: "Medium", leetCodeId: 131, url: "https://leetcode.com/problems/palindrome-partitioning/" },
          { id: "bt_perm_5", title: "N-Queens", difficulty: "Hard", leetCodeId: 51, url: "https://leetcode.com/problems/n-queens/" },
          { id: "bt_perm_6", title: "Sudoku Solver", difficulty: "Hard", leetCodeId: 37, url: "https://leetcode.com/problems/sudoku-solver/" }
        ]
      }
    ]
  },
  {
    id: "linked_list",
    name: "Linked List",
    icon: "Link",
    description: "Singly and doubly linked lists, pointer manipulation, Floyd's cycle detection, and merging.",
    subtopics: [
      {
        id: "ll_basics",
        name: "Linked List Basics",
        description: "Traversing, deleting nodes, and fundamental pointer adjustments.",
        questions: [
          { id: "ll_b_1", title: "Reverse Linked List", difficulty: "Easy", leetCodeId: 206, url: "https://leetcode.com/problems/reverse-linked-list/" },
          { id: "ll_b_2", title: "Delete Node in a Linked List", difficulty: "Easy", leetCodeId: 237, url: "https://leetcode.com/problems/delete-node-in-a-linked-list/" },
          { id: "ll_b_3", title: "Middle of the Linked List", difficulty: "Easy", leetCodeId: 876, url: "https://leetcode.com/problems/middle-of-the-linked-list/" },
          { id: "ll_b_4", title: "Remove Nth Node From End of List", difficulty: "Medium", leetCodeId: 19, url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
          { id: "ll_b_5", title: "Swapping Nodes in a Linked List", difficulty: "Medium", leetCodeId: 1721, url: "https://leetcode.com/problems/swapping-nodes-in-a-linked-list/" }
        ]
      },
      {
        id: "ll_fast_slow",
        name: "Fast & Slow Pointers",
        description: "Cycle detection, finding midpoints, and intersection of two lists.",
        questions: [
          { id: "ll_fs_1", title: "Linked List Cycle", difficulty: "Easy", leetCodeId: 141, url: "https://leetcode.com/problems/linked-list-cycle/" },
          { id: "ll_fs_2", title: "Intersection of Two Linked Lists", difficulty: "Easy", leetCodeId: 160, url: "https://leetcode.com/problems/intersection-of-two-linked-lists/" },
          { id: "ll_fs_3", title: "Palindrome Linked List", difficulty: "Easy", leetCodeId: 234, url: "https://leetcode.com/problems/palindrome-linked-list/" },
          { id: "ll_fs_4", title: "Linked List Cycle II", difficulty: "Medium", leetCodeId: 142, url: "https://leetcode.com/problems/linked-list-cycle-ii/" }
        ]
      },
      {
        id: "ll_reversal_merge",
        name: "Reversal & Merging",
        description: "Reversing sublists, merging sorted lists, and reordering.",
        questions: [
          { id: "ll_rm_1", title: "Merge Two Sorted Lists", difficulty: "Easy", leetCodeId: 21, url: "https://leetcode.com/problems/merge-two-sorted-lists/" },
          { id: "ll_rm_2", title: "Reverse Linked List II", difficulty: "Medium", leetCodeId: 92, url: "https://leetcode.com/problems/reverse-linked-list-ii/" },
          { id: "ll_rm_3", title: "Reorder List", difficulty: "Medium", leetCodeId: 143, url: "https://leetcode.com/problems/reorder-list/" },
          { id: "ll_rm_4", title: "Add Two Numbers", difficulty: "Medium", leetCodeId: 2, url: "https://leetcode.com/problems/add-two-numbers/" },
          { id: "ll_rm_5", title: "Copy List with Random Pointer", difficulty: "Medium", leetCodeId: 138, url: "https://leetcode.com/problems/copy-list-with-random-pointer/" },
          { id: "ll_rm_6", title: "Reverse Nodes in k-Group", difficulty: "Hard", leetCodeId: 25, url: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
          { id: "ll_rm_7", title: "Merge k Sorted Lists", difficulty: "Hard", leetCodeId: 23, url: "https://leetcode.com/problems/merge-k-sorted-lists/" }
        ]
      }
    ]
  },
  {
    id: "stacks_queues",
    name: "Stacks & Queues",
    icon: "Layers",
    description: "LIFO and FIFO data structures, monotonic stacks, expression parsing, and sliding window maximum.",
    subtopics: [
      {
        id: "sq_basics",
        name: "Stack Basics & Matching",
        description: "Parentheses validation, min stack design, and stack implementation.",
        questions: [
          { id: "sq_b_1", title: "Valid Parentheses", difficulty: "Easy", leetCodeId: 20, url: "https://leetcode.com/problems/valid-parentheses/" },
          { id: "sq_b_2", title: "Implement Queue using Stacks", difficulty: "Easy", leetCodeId: 232, url: "https://leetcode.com/problems/implement-queue-using-stacks/" },
          { id: "sq_b_3", title: "Min Stack", difficulty: "Medium", leetCodeId: 155, url: "https://leetcode.com/problems/min-stack/" },
          { id: "sq_b_4", title: "Evaluate Reverse Polish Notation", difficulty: "Medium", leetCodeId: 150, url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/" },
          { id: "sq_b_5", title: "Simplify Path", difficulty: "Medium", leetCodeId: 71, url: "https://leetcode.com/problems/simplify-path/" }
        ]
      },
      {
        id: "sq_monotonic",
        name: "Monotonic Stack",
        description: "Next Greater Element pattern, histogram areas, and daily temperatures.",
        questions: [
          { id: "sq_ms_1", title: "Next Greater Element I", difficulty: "Easy", leetCodeId: 496, url: "https://leetcode.com/problems/next-greater-element-i/" },
          { id: "sq_ms_2", title: "Daily Temperatures", difficulty: "Medium", leetCodeId: 739, url: "https://leetcode.com/problems/daily-temperatures/" },
          { id: "sq_ms_3", title: "Next Greater Element II", difficulty: "Medium", leetCodeId: 503, url: "https://leetcode.com/problems/next-greater-element-ii/" },
          { id: "sq_ms_3b", title: "Online Stock Span", difficulty: "Medium", leetCodeId: 901, url: "https://leetcode.com/problems/online-stock-span/" },
          { id: "sq_ms_4", title: "Largest Rectangle in Histogram", difficulty: "Hard", leetCodeId: 84, url: "https://leetcode.com/problems/largest-rectangle-in-histogram/" }
        ]
      },
      {
        id: "sq_design",
        name: "Design & Queues",
        description: "LRU Cache, LFU Cache, and Deque sliding window.",
        questions: [
          { id: "sq_d_1", title: "Design Circular Queue", difficulty: "Medium", leetCodeId: 622, url: "https://leetcode.com/problems/design-circular-queue/" },
          { id: "sq_d_2", title: "LRU Cache", difficulty: "Medium", leetCodeId: 146, url: "https://leetcode.com/problems/lru-cache/" },
          { id: "sq_d_3", title: "LFU Cache", difficulty: "Hard", leetCodeId: 460, url: "https://leetcode.com/problems/lfu-cache/" }
        ]
      }
    ]
  },
  {
    id: "trees_bst",
    name: "Trees & BST",
    icon: "Network",
    description: "Binary Tree traversals (DFS/BFS), Binary Search Tree validation, LCA, and Tree construction.",
    subtopics: [
      {
        id: "tree_traversals",
        name: "Tree Traversals & Properties",
        description: "Preorder, Inorder, Postorder, Level order, Maximum depth, and Symmetrical check.",
        questions: [
          { id: "tr_tr_1", title: "Binary Tree Inorder Traversal", difficulty: "Easy", leetCodeId: 94, url: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
          { id: "tr_tr_2", title: "Maximum Depth of Binary Tree", difficulty: "Easy", leetCodeId: 104, url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
          { id: "tr_tr_3", title: "Symmetric Tree", difficulty: "Easy", leetCodeId: 101, url: "https://leetcode.com/problems/symmetric-tree/" },
          { id: "tr_tr_4", title: "Invert Binary Tree", difficulty: "Easy", leetCodeId: 226, url: "https://leetcode.com/problems/invert-binary-tree/" },
          { id: "tr_tr_4b", title: "Same Tree", difficulty: "Easy", leetCodeId: 100, url: "https://leetcode.com/problems/same-tree/" },
          { id: "tr_tr_5", title: "Binary Tree Level Order Traversal", difficulty: "Medium", leetCodeId: 102, url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
          { id: "tr_tr_6", title: "Binary Tree Zigzag Level Order Traversal", difficulty: "Medium", leetCodeId: 103, url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" }
        ]
      },
      {
        id: "tree_path_sum",
        name: "Path Sum & Ancestors",
        description: "Path sum problems, tree diameter, and Lowest Common Ancestor (LCA).",
        questions: [
          { id: "tr_ps_1", title: "Path Sum", difficulty: "Easy", leetCodeId: 112, url: "https://leetcode.com/problems/path-sum/" },
          { id: "tr_ps_2", title: "Diameter of Binary Tree", difficulty: "Easy", leetCodeId: 543, url: "https://leetcode.com/problems/diameter-of-binary-tree/" },
          { id: "tr_ps_3", title: "Path Sum II", difficulty: "Medium", leetCodeId: 113, url: "https://leetcode.com/problems/path-sum-ii/" },
          { id: "tr_ps_4", title: "Lowest Common Ancestor of a Binary Tree", difficulty: "Medium", leetCodeId: 236, url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
          { id: "tr_ps_5", title: "Binary Tree Maximum Path Sum", difficulty: "Hard", leetCodeId: 124, url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" }
        ]
      },
      {
        id: "tree_bst",
        name: "Binary Search Trees (BST)",
        description: "Validating BSTs, searching, inserting, and finding Kth smallest element.",
        questions: [
          { id: "tr_bst_1", title: "Search in a Binary Search Tree", difficulty: "Easy", leetCodeId: 700, url: "https://leetcode.com/problems/search-in-a-binary-search-tree/" },
          { id: "tr_bst_1b", title: "Convert Sorted Array to Binary Search Tree", difficulty: "Easy", leetCodeId: 108, url: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/" },
          { id: "tr_bst_2", title: "Lowest Common Ancestor of a BST", difficulty: "Medium", leetCodeId: 235, url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
          { id: "tr_bst_3", title: "Validate Binary Search Tree", difficulty: "Medium", leetCodeId: 98, url: "https://leetcode.com/problems/validate-binary-search-tree/" },
          { id: "tr_bst_4", title: "Kth Smallest Element in a BST", difficulty: "Medium", leetCodeId: 230, url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
          { id: "tr_bst_5", title: "Delete Node in a BST", difficulty: "Medium", leetCodeId: 450, url: "https://leetcode.com/problems/delete-node-in-a-bst/" }
        ]
      },
      {
        id: "tree_construction",
        name: "Tree Construction & Serialization",
        description: "Constructing trees from traversals and serializing to strings.",
        questions: [
          { id: "tr_c_1", title: "Construct Binary Tree from Preorder and Inorder Traversal", difficulty: "Medium", leetCodeId: 105, url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
          { id: "tr_c_2", title: "Serialize and Deserialize Binary Tree", difficulty: "Hard", leetCodeId: 297, url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" }
        ]
      }
    ]
  },
  {
    id: "heap_priority_queue",
    name: "Heap / Priority Queue",
    icon: "Sliders",
    description: "Min-heap and Max-heap structures, top K frequent patterns, and priority streams.",
    subtopics: [
      {
        id: "hp_top_k",
        name: "Top K Elements",
        description: "Finding kth largest/smallest elements using heaps.",
        questions: [
          { id: "hp_tk_1", title: "Kth Largest Element in a Stream", difficulty: "Easy", leetCodeId: 703, url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/" },
          { id: "hp_tk_2", title: "K Closest Points to Origin", difficulty: "Medium", leetCodeId: 973, url: "https://leetcode.com/problems/k-closest-points-to-origin/" },
          { id: "hp_tk_3", title: "Task Scheduler", difficulty: "Medium", leetCodeId: 621, url: "https://leetcode.com/problems/task-scheduler/" },
          { id: "hp_tk_4", title: "Reorganize String", difficulty: "Medium", leetCodeId: 767, url: "https://leetcode.com/problems/reorganize-string/" }
        ]
      },
      {
        id: "hp_median_stream",
        name: "Two Heaps / Stream Processing",
        description: "Maintaining running median using Max-Heap and Min-Heap.",
        questions: [
          { id: "hp_ms_1", title: "Find Median from Data Stream", difficulty: "Hard", leetCodeId: 295, url: "https://leetcode.com/problems/find-median-from-data-stream/" },
          { id: "hp_ms_2", title: "IPO (Maximize Capital)", difficulty: "Hard", leetCodeId: 502, url: "https://leetcode.com/problems/ipo/" }
        ]
      }
    ]
  },
  {
    id: "graphs",
    name: "Graphs",
    icon: "Share2",
    description: "Adjacency representations, BFS & DFS traversals, cycle detection, DSU, and shortest path algorithms.",
    subtopics: [
      {
        id: "gr_grid_bfs_dfs",
        name: "Grid Traversal (BFS / DFS)",
        description: "Connected components on 2D grids, flood fill, and island counting.",
        questions: [
          { id: "gr_g_1", title: "Flood Fill", difficulty: "Easy", leetCodeId: 733, url: "https://leetcode.com/problems/flood-fill/" },
          { id: "gr_g_2", title: "Island Perimeter", difficulty: "Easy", leetCodeId: 463, url: "https://leetcode.com/problems/island-perimeter/" },
          { id: "gr_g_3", title: "Number of Islands", difficulty: "Medium", leetCodeId: 200, url: "https://leetcode.com/problems/number-of-islands/" },
          { id: "gr_g_4", title: "Max Area of Island", difficulty: "Medium", leetCodeId: 695, url: "https://leetcode.com/problems/max-area-of-island/" },
          { id: "gr_g_5", title: "Rotting Oranges", difficulty: "Medium", leetCodeId: 994, url: "https://leetcode.com/problems/rotting-oranges/" },
          { id: "gr_g_6", title: "Surrounded Regions", difficulty: "Medium", leetCodeId: 130, url: "https://leetcode.com/problems/surrounded-regions/" },
          { id: "gr_g_7", title: "Pacific Atlantic Water Flow", difficulty: "Medium", leetCodeId: 417, url: "https://leetcode.com/problems/pacific-atlantic-water-flow/" }
        ]
      },
      {
        id: "gr_topo_cycle",
        name: "Topological Sort & Cycle Detection",
        description: "Kahn's algorithm (BFS), DFS cycle check, and course scheduling.",
        questions: [
          { id: "gr_tc_1", title: "Course Schedule", difficulty: "Medium", leetCodeId: 207, url: "https://leetcode.com/problems/course-schedule/" },
          { id: "gr_tc_2", title: "Course Schedule II", difficulty: "Medium", leetCodeId: 210, url: "https://leetcode.com/problems/course-schedule-ii/" },
          { id: "gr_tc_3", title: "Alien Dictionary", difficulty: "Hard", leetCodeId: 269, url: "https://leetcode.com/problems/alien-dictionary/" }
        ]
      },
      {
        id: "gr_dsu",
        name: "Disjoint Set Union (DSU / Union-Find)",
        description: "Union by rank, path compression, and connected components.",
        questions: [
          { id: "gr_dsu_1", title: "Redundant Connection", difficulty: "Medium", leetCodeId: 684, url: "https://leetcode.com/problems/redundant-connection/" },
          { id: "gr_dsu_2", title: "Number of Provinces", difficulty: "Medium", leetCodeId: 547, url: "https://leetcode.com/problems/number-of-provinces/" },
          { id: "gr_dsu_3", title: "Accounts Merge", difficulty: "Medium", leetCodeId: 721, url: "https://leetcode.com/problems/accounts-merge/" }
        ]
      },
      {
        id: "gr_shortest_path",
        name: "Shortest Paths (Dijkstra, Bellman-Ford)",
        description: "Weighted graph shortest paths, Min-cost paths, and Word Ladder BFS.",
        questions: [
          { id: "gr_sp_1", title: "Network Delay Time (Dijkstra)", difficulty: "Medium", leetCodeId: 743, url: "https://leetcode.com/problems/network-delay-time/" },
          { id: "gr_sp_2", title: "Cheapest Flights Within K Stops", difficulty: "Medium", leetCodeId: 787, url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
          { id: "gr_sp_3", title: "Word Ladder", difficulty: "Hard", leetCodeId: 127, url: "https://leetcode.com/problems/word-ladder/" }
        ]
      }
    ]
  },
  {
    id: "dynamic_programming",
    name: "Dynamic Programming",
    icon: "Cpu",
    description: "Memoization (Top-down) and Tabulation (Bottom-up) for optimal substructure and overlapping subproblems.",
    subtopics: [
      {
        id: "dp_1d",
        name: "1D Dynamic Programming",
        description: "Climbing stairs, house robber, and linear state transitions.",
        questions: [
          { id: "dp_1d_1", title: "Climbing Stairs", difficulty: "Easy", leetCodeId: 70, url: "https://leetcode.com/problems/climbing-stairs/" },
          { id: "dp_1d_2", title: "Min Cost Climbing Stairs", difficulty: "Easy", leetCodeId: 746, url: "https://leetcode.com/problems/min-cost-climbing-stairs/" },
          { id: "dp_1d_3", title: "House Robber", difficulty: "Medium", leetCodeId: 198, url: "https://leetcode.com/problems/house-robber/" },
          { id: "dp_1d_4", title: "House Robber II (Circular)", difficulty: "Medium", leetCodeId: 213, url: "https://leetcode.com/problems/house-robber-ii/" },
          { id: "dp_1d_5", title: "Decode Ways", difficulty: "Medium", leetCodeId: 91, url: "https://leetcode.com/problems/decode-ways/" },
          { id: "dp_1d_6", title: "Coin Change", difficulty: "Medium", leetCodeId: 322, url: "https://leetcode.com/problems/coin-change/" },
          { id: "dp_1d_7", title: "Coin Change II", difficulty: "Medium", leetCodeId: 518, url: "https://leetcode.com/problems/coin-change-ii/" },
          { id: "dp_1d_8", title: "Word Break", difficulty: "Medium", leetCodeId: 139, url: "https://leetcode.com/problems/word-break/" }
        ]
      },
      {
        id: "dp_2d_grid",
        name: "2D & Grid DP",
        description: "Unique paths, minimum path sum, and 2D grid dynamic programming.",
        questions: [
          { id: "dp_2d_1", title: "Unique Paths", difficulty: "Medium", leetCodeId: 62, url: "https://leetcode.com/problems/unique-paths/" },
          { id: "dp_2d_2", title: "Unique Paths II (With Obstacles)", difficulty: "Medium", leetCodeId: 63, url: "https://leetcode.com/problems/unique-paths-ii/" },
          { id: "dp_2d_3", title: "Minimum Path Sum", difficulty: "Medium", leetCodeId: 64, url: "https://leetcode.com/problems/minimum-path-sum/" },
          { id: "dp_2d_4", title: "Dungeon Game", difficulty: "Hard", leetCodeId: 174, url: "https://leetcode.com/problems/dungeon-game/" }
        ]
      },
      {
        id: "dp_strings",
        name: "DP on Strings",
        description: "Longest Common Subsequence (LCS), Edit Distance, and Palindromic DP.",
        questions: [
          { id: "dp_s_1", title: "Longest Common Subsequence", difficulty: "Medium", leetCodeId: 1143, url: "https://leetcode.com/problems/longest-common-subsequence/" },
          { id: "dp_s_3", title: "Edit Distance", difficulty: "Medium", leetCodeId: 72, url: "https://leetcode.com/problems/edit-distance/" },
          { id: "dp_s_4", title: "Distinct Subsequences", difficulty: "Hard", leetCodeId: 115, url: "https://leetcode.com/problems/distinct-subsequences/" },
          { id: "dp_s_5", title: "Regular Expression Matching", difficulty: "Hard", leetCodeId: 10, url: "https://leetcode.com/problems/regular-expression-matching/" },
          { id: "dp_s_6", title: "Wildcard Matching", difficulty: "Hard", leetCodeId: 44, url: "https://leetcode.com/problems/wildcard-matching/" }
        ]
      },
      {
        id: "dp_lis_knapsack",
        name: "LIS & Knapsack Variants",
        description: "Longest Increasing Subsequence, 0/1 Knapsack, and Target Sum.",
        questions: [
          { id: "dp_lk_1", title: "Partition Equal Subset Sum", difficulty: "Medium", leetCodeId: 416, url: "https://leetcode.com/problems/partition-equal-subset-sum/" },
          { id: "dp_lk_2", title: "Target Sum", difficulty: "Medium", leetCodeId: 494, url: "https://leetcode.com/problems/target-sum/" },
          { id: "dp_lk_3", title: "Longest Increasing Subsequence", difficulty: "Medium", leetCodeId: 300, url: "https://leetcode.com/problems/longest-increasing-subsequence/" },
          { id: "dp_lk_4", title: "Russian Doll Envelopes", difficulty: "Hard", leetCodeId: 354, url: "https://leetcode.com/problems/russian-doll-envelopes/" }
        ]
      }
    ]
  },
  {
    id: "greedy",
    name: "Greedy",
    icon: "Zap",
    description: "Making locally optimal choices to achieve a globally optimal solution.",
    subtopics: [
      {
        id: "grd_intervals",
        name: "Intervals & Activity Selection",
        description: "Scheduling tasks and picking non-overlapping intervals.",
        questions: [
          { id: "grd_i_1", title: "Assign Cookies", difficulty: "Easy", leetCodeId: 455, url: "https://leetcode.com/problems/assign-cookies/" },
          { id: "grd_i_2", title: "Lemonade Change", difficulty: "Easy", leetCodeId: 860, url: "https://leetcode.com/problems/lemonade-change/" },
          { id: "grd_i_3", title: "Jump Game", difficulty: "Medium", leetCodeId: 55, url: "https://leetcode.com/problems/jump-game/" },
          { id: "grd_i_4", title: "Jump Game II", difficulty: "Medium", leetCodeId: 45, url: "https://leetcode.com/problems/jump-game-ii/" },
          { id: "grd_i_5", title: "Gas Station", difficulty: "Medium", leetCodeId: 134, url: "https://leetcode.com/problems/gas-station/" },
          { id: "grd_i_5b", title: "Hand of Straights", difficulty: "Medium", leetCodeId: 846, url: "https://leetcode.com/problems/hand-of-straights/" },
          { id: "grd_i_6", title: "Candy", difficulty: "Hard", leetCodeId: 135, url: "https://leetcode.com/problems/candy/" }
        ]
      }
    ]
  },
  {
    id: "bit_manipulation",
    name: "Bit Manipulation",
    icon: "Binary",
    description: "Low-level bitwise operations (AND, OR, XOR, shifts) for O(1) space tricks.",
    subtopics: [
      {
        id: "bit_basics",
        name: "Bitwise Operators & Tricks",
        description: "Counting set bits, power of two checks, and single number identification.",
        questions: [
          { id: "bit_b_1", title: "Single Number", difficulty: "Easy", leetCodeId: 136, url: "https://leetcode.com/problems/single-number/" },
          { id: "bit_b_2", title: "Number of 1 Bits (Hamming Weight)", difficulty: "Easy", leetCodeId: 191, url: "https://leetcode.com/problems/number-of-1-bits/" },
          { id: "bit_b_3", title: "Counting Bits", difficulty: "Easy", leetCodeId: 338, url: "https://leetcode.com/problems/counting-bits/" },
          { id: "bit_b_4", title: "Reverse Bits", difficulty: "Easy", leetCodeId: 190, url: "https://leetcode.com/problems/reverse-bits/" },
          { id: "bit_b_5", title: "Single Number II (Thrice elements)", difficulty: "Medium", leetCodeId: 137, url: "https://leetcode.com/problems/single-number-ii/" },
          { id: "bit_b_6", title: "Sum of Two Integers (Without + or -)", difficulty: "Medium", leetCodeId: 371, url: "https://leetcode.com/problems/sum-of-two-integers/" },
          { id: "bit_b_7", title: "Minimum Flips to Make a OR b Equal to c", difficulty: "Medium", leetCodeId: 1318, url: "https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/" }
        ]
      }
    ]
  },
  {
    id: "tries",
    name: "Tries",
    icon: "GitPullRequest",
    description: "Prefix tree data structure for dictionary lookups, autocomplete, and XOR calculations.",
    subtopics: [
      {
        id: "trie_basics",
        name: "Trie Implementation & Search",
        description: "Building prefix trees, searching words, and prefix matching.",
        questions: [
          { id: "trie_b_1", title: "Implement Trie (Prefix Tree)", difficulty: "Medium", leetCodeId: 208, url: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
          { id: "trie_b_2", title: "Design Add and Search Words Data Structure", difficulty: "Medium", leetCodeId: 211, url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/" },
          { id: "trie_b_3", title: "Maximum XOR of Two Numbers in an Array", difficulty: "Medium", leetCodeId: 421, url: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/" },
          { id: "trie_b_4", title: "Word Search II", difficulty: "Hard", leetCodeId: 212, url: "https://leetcode.com/problems/word-search-ii/" }
        ]
      }
    ]
  }
];
