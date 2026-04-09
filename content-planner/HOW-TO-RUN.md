# Content Planner — Setup Guide

## First time setup (do this once)

### Step 1 — Install Node.js
Go to https://nodejs.org and download the **LTS** version. Install it like any normal app.

### Step 2 — Open Terminal
On Mac: press **Cmd + Space**, type "Terminal", press Enter.

### Step 3 — Navigate to this folder
Type this in Terminal and press Enter:
```
cd path/to/content-planner
```
(Drag the `content-planner` folder into the Terminal window — it will fill in the path automatically!)

### Step 4 — Install dependencies (one time only)
```
npm install
```

---

## Every time you want to run the app

In Terminal, inside the `content-planner` folder:
```
npm start
```

Then open your browser and go to: **http://localhost:3000**

The Terminal window will also show your **network address** (e.g. `http://192.168.1.5:3000`) — share that with your teammates so they can open it too (while you're running it).

## To stop the app
Press **Ctrl + C** in the Terminal window.

---

## Notes
- Your images and posts are saved in the `uploads/` and `data/` folders inside `content-planner`.
- Don't delete those folders or you'll lose your posts.
- The app only works while someone has `npm start` running.
