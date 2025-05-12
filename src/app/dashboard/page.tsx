"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const [quests, setQuests] = useState([
    { id: 1, text: "Drink 2L of water", done: false },
    { id: 2, text: "Sleep 8 hours", done: false },
    { id: 3, text: "Stretch 10 minutes", done: false },
    { id: 4, text: "Eat 100g protein", done: false },
  ]);

  const [strikes, setStrikes] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [level, setLevel] = useState(0);
  const [playerName, setPlayerName] = useState("Hunter");

  const toggle = (id: number) => {
    setQuests((prev) =>
      prev.map((q) => (q.id === id ? { ...q, done: !q.done } : q))
    );
  };

  useEffect(() => {
    const name = localStorage.getItem("playerName") || "Hunter";
    const lastDate = localStorage.getItem("lastActiveDate");
    const storedStrikes = parseInt(localStorage.getItem("strikes") || "0");
    const storedLevel = parseInt(localStorage.getItem("level") || "0");

    const today = new Date().toDateString();

    if (lastDate && lastDate !== today) {
      const newStrikes = Math.min(3, storedStrikes + 1);
      setStrikes(newStrikes);
      setShowWarning(newStrikes >= 3);
      localStorage.setItem("strikes", newStrikes.toString());
    } else {
      setStrikes(storedStrikes);
    }

    setLevel(storedLevel);
    setPlayerName(name);
    localStorage.setItem("lastActiveDate", today);
  }, []);

  useEffect(() => {
    const completed = quests.filter((q) => q.done).length;
    const xp = Math.floor((completed / quests.length) * 100);
    setLevel(xp);
    localStorage.setItem("level", xp.toString());
  }, [quests]);

  return (
    <div className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="card" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Welcome back, <span style={{ color: "#00aaff" }}>{playerName}</span>
        </h1>
        <p style={{ marginBottom: "2rem" }}>Complete quests daily to level up your character.</p>

        {showWarning && (
          <div
            style={{
              backgroundColor: "#ff4444",
              color: "white",
              padding: "1rem",
              borderRadius: "8px",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            ⚠️ You missed too many days! STRIKE 3. Time for punishment...
          </div>
        )}

        <p style={{ marginBottom: "0.5rem" }}>
          Completed: {quests.filter((q) => q.done).length} / {quests.length} quests
        </p>
        <p style={{ marginBottom: "1rem" }}>Strikes: {strikes} / 3</p>

        {/* XP Progress Bar */}
        <div
          style={{
            background: "#333",
            borderRadius: "8px",
            height: "20px",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              width: `${level}%`,
              background: "#0070f3",
              height: "100%",
              borderRadius: "8px",
              transition: "0.3s ease",
            }}
          />
        </div>
        <p style={{ marginBottom: "2rem" }}>Progress: {level}%</p>

        {/* Quest List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
          {quests.map((q) => (
            <div
              key={q.id}
              style={{
                background: "#1e1e1e",
                padding: "1rem",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{q.text}</span>
              <input
                type="checkbox"
                checked={q.done}
                onChange={() => toggle(q.id)}
                style={{ transform: "scale(1.2)" }}
              />
            </div>
          ))}
        </div>

        <Link href="/workout">
          <button style={{ width: "100%" }}>Start Workout</button>
        </Link>

        <Link href="/profile">
          <p style={{ marginTop: "1rem", color: "#00aaff", cursor: "pointer" }}>
            View Profile →
          </p>
        </Link>
      </div>
    </div>
  );
}