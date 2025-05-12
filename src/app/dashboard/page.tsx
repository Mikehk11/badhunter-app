"use client";

import { useState } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const [quests, setQuests] = useState([
    { id: 1, text: "Drink 2L of water", done: false },
    { id: 2, text: "Get 8 hours of sleep", done: false },
    { id: 3, text: "Avoid junk food", done: false },
    { id: 4, text: "Walk 5,000+ steps", done: false },
    { id: 5, text: "Stretch for 10 minutes", done: false },
  ]);

  const completedCount = quests.filter((q) => q.done).length;
  const level = Math.floor((completedCount / quests.length) * 100);

  const toggleQuest = (id: number) => {
    setQuests((prev) =>
      prev.map((q) => (q.id === id ? { ...q, done: !q.done } : q))
    );
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-blue-400 drop-shadow-glow">
        Dashboard
      </h1>

      {/* Level Display */}
      <div className="w-full bg-gray-700 h-4 rounded">
        <div
          className="bg-blue-500 h-4 rounded transition-all duration-300"
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <p>Level progress: {level}%</p>

      {/* Quest List */}
      <div className="space-y-4">
        {quests.map((q) => (
          <div key={q.id} className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={q.done}
              onChange={() => toggleQuest(q.id)}
              className="w-5 h-5"
            />
            <label>{q.text}</label>
          </div>
        ))}
      </div>

      {/* Start Workout Link */}
      <Link
        href="/workout"
        className="mt-8 inline-block px-6 py-3 bg-blue-600 rounded hover:bg-blue-700 transition"
      >
        Start Workout
      </Link>
    </main>
  );
}