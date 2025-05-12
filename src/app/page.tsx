"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [playerName, setPlayerName] = useState("");
  const [difficulty, setDifficulty] = useState("beginner");
  const router = useRouter();

  const handleSubmit = () => {
    if (!playerName.trim()) return alert("Enter your name!");
    // Store the player name and difficulty if needed (e.g., localStorage or context)
    router.push("/dashboard");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-black text-white p-4">
      <h1 className="text-4xl font-bold text-blue-400 drop-shadow-glow">
        Welcome to BADHUNTER
      </h1>

      {/* Difficulty Selector */}
      <div className="flex gap-4">
        <button
          className={`px-4 py-2 rounded border ${
            difficulty === "beginner" ? "bg-blue-500" : "bg-gray-800"
          }`}
          onClick={() => setDifficulty("beginner")}
        >
          Beginner
        </button>
        <button
          className={`px-4 py-2 rounded border ${
            difficulty === "legendary" ? "bg-blue-500" : "bg-gray-800"
          }`}
          onClick={() => setDifficulty("legendary")}
        >
          Legendary
        </button>
      </div>

      {/* Name Input */}
      <input
        type="text"
        placeholder="Enter your player name"
        className="px-4 py-2 rounded text-black"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />

      {/* Accept Button */}
      <button
        className="px-6 py-3 bg-blue-600 rounded shadow-md hover:bg-blue-700 transition"
        onClick={handleSubmit}
      >
        Accept Quest
      </button>
    </main>
  );
}