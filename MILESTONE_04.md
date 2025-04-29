Milestone 04 - Final Project Documentation
===

NetID
---
hw2586

Name
---
Tim (Han Yu) Wang

Repository Link
---
https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Twang021021

URL for deployed site 
---
Use GitHub Codespaces to run  
(use `npm install` and then `npm run dev` inside Codespaces)
http://localhost:5173/  

URL for form 1 (from previous milestone) 
---
http://localhost:5173/  
(Create Reminder form on homepage)

Special Instructions for Form 1
---

URL for form 2 (for current milestone)
---
http://localhost:5173/all  
(Search, filter, and view reminders)

Special Instructions for Form 2
---

URL for form 3 (from previous milestone) 
---
http://localhost:5173/edit/[reminderID]  
http://localhost:5173/edit/9HlM0NMKWYQgMKpO1srH


Special Instructions for Form 3
---
http://localhost:5173/edit/[reminderID]  
(Edit Reminder form:  replace `[reminderID]` with a real ID)
edit form is loaded using a dynmaic URL
eg: http://localhost:5173/edit/9HlM0NMKWYQgMKpO1srH

First link to github line number(s) for constructor, HOF, etc.
---
https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Twang021021/blob/master/src/AllReminders.jsx#L65-L77

Second link to github line number(s) for constructor, HOF, etc.
---
https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Twang021021/blob/master/src/AllReminders.jsx#L91-L97


Short description for links above
---
Line 65-77: Used `.filter()` and `.map()` to dynamically show reminders based on search and date.

Line 91-97: Used `.map()` to update snoozed reminder’s due date in the local array after Firestore update.

Link to github line number(s) for schemas (db.js or models folder)
---
N/A 
Firebase Firestore used instead of MongoDB or Mongoose schemas.
https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Twang021021/blob/master/src/App.jsx#L19-L31

Description of research topics above with points
---
(TODO: add description of research topics here, including point values for each, one per line... for example: 2 points - applied and modified "Clean Blog" Bootstrap theme)

6 points: React.js as a front-end framework to build all views and routes. Includes component-based routing (React Router), state management via hooks, and modular layout. Used across all pages and required routing logic.

3 points: Used Vite as the build tool to manage the project, including support for hot reload, ESLint plugin integration, and bundling.

2 points: Integrated ESLint using Vite’s plugin system for real-time code linting during development. `.eslintrc.cjs` configuration file is included in the root directory and automatically watches changes during development.

2 points: Added Delete and Snooze (+1 day) custom features using Firebase `deleteDoc` and `updateDoc`, combined with local state syncing. Server-side  and Client side JavaScript library or module that we did not cover in class

Links to github line number(s) for research topics described above (one link per line)
---
https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Twang021021/blob/master/src/main.jsx#L10-L21  
(React Router setup)

https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Twang021021/blob/master/vite.config.js  
(Vite build tool + plugin usage)

https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Twang021021/blob/master/vite.config.js#L5-L9  
(ESLint plugin integration via Vite)

https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Twang021021/blob/master/eslint.config.js  
(Flat ESLint v9+ config with JSX and React support)

https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Twang021021/blob/master/src/AllReminders.jsx#L49-L57  
(Delete reminder logic)

https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Twang021021/blob/master/src/AllReminders.jsx#L59-L76  
(Snooze +1 day logic)




Optional project notes 
--- 
(TODO: optionall add add any other information required for using/testing the final project)

Attributions
---
(TODO:  list sources that you have based your code off of, 1 per line, with file name, a very short description, and an accompanying url... for example: routes/index.js - Authentication code based off of http://foo.bar/baz ... alternatively, if you have already placed annotations in your project, answer "See source code comments")