# 🏋️‍♂️ BADHUNTER — Gamified Fitness Tracker

**BADHUNTER** is a dark-themed, solo-leveling-inspired fitness web app that turns your daily workouts and habits into quests. Track your level, manage your progress, and build your ultimate physique — one quest at a time.

> Built with Next.js, TypeScript, and localStorage — no backend needed. Designed for fast performance, clean UX, and game-like motivation.

### 🔗 Live Demo
👉 https://badhunter-app.vercel.app/

---

## 🚀 Features

- 🎮 Solo Leveling-style daily quest system
- 📈 Level progress bar (XP from completed quests)
- 🛑 Strike & punishment logic for missed days
- 🧠 Persistent data via `localStorage`
- 🏆 Profile screen: tracks XP, workout days, strikes, and completions
- ✅ Dynamic 30-day rotating workout plans
- 🌒 Clean, dark UI with Orbitron font & card layout
- 📱 Fully responsive layout (mobile-ready)

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Custom CSS + Google Fonts (Orbitron)
- **State & Storage**: React Hooks + localStorage
- **Deployment**: [Vercel](https://vercel.com)

---

## 📂 Project Structure

src/
└── app/
├── page.tsx          // Landing (name + difficulty)
├── dashboard/        // Daily quests, XP, strikes
├── workout/          // Dynamic workouts by day
└── profile/          // User profile overview
public/
└── favicon.ico
globals.css                // Global styles + font
tailwind.config.js         // [Not used — switched to custom CSS]

---

## ⚙️ How to Run Locally

```bash
git clone https://github.com/your-username/badhunter-app
cd badhunter-app
npm install
npm run dev

📌 Notes
	•	This version is front-end only — progress is stored in browser localStorage
	•	You can enhance this by adding authentication (e.g., Supabase or Firebase)
	•	Designed to be fast, stylish, and easy to use from any device
