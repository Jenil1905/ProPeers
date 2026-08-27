# ProPeers - Personal DSA Roadmap & Problem Tracker

ProPeers is a Data Structures & Algorithms (DSA) Roadmap & Tracker built for personal progress tracking.

## Features

- **Topic Navigation**: Top horizontal bar for all major DSA categories:
  - **Array** (Default)
  - **Strings**
  - **Binary Search**
  - **Recursion & Backtracking**
  - **Linked List**
  - **Stacks & Queues**
  - **Trees & BST**
  - **Heap / Priority Queue**
  - **Graphs**
  - **Dynamic Programming**
  - **Greedy**
  - **Bit Manipulation**
  - **Tries**

- **Subtopic Accordions & Progress Meters**:
  - Displays total questions done / total count (e.g. `Two Pointers 6/9`) alongside styled progress gauges.
  - Confetti celebration animation upon completing a subtopic!

- **Sorted Problem List**:
  - Every subtopic's questions are sorted strictly by difficulty: **Easy → Medium → Hard**.
  - **Direct LeetCode Redirection Link**: Opens the exact LeetCode problem in a new tab (`target="_blank"`).
  - **Interactive Checkbox**: Mark as Done / Undone.
  - **Notes Section**: Add and view custom solution intuition, complexity notes, and code snippets.
  - **Bookmark System**: Star questions for revision before interviews.

- **Data Persistence**:
  - Node.js & Express REST API server syncing progress to `backend/data/user_data.json` with fallback to `localStorage`.

## How to Run Locally

### 1. Start Express Backend API (Port 5000)
```bash
cd backend
npm start
```

### 2. Start React Frontend Dev Server (Port 3000)
```bash
cd frontend
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser!
