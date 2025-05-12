"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [playerName, setPlayerName] = useState("");
  const [difficulty, setDifficulty] = useState("beginner");
  const router = useRouter();

  const handleSubmit = () => {
    if (!playerName.trim()) return alert("Enter your name!");
    localStorage.setItem("playerName", playerName);
    router.push("/dashboard");
  };

  return (
    <div
      className="container"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="card"
        style={{
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
          Welcome to <span style={{ color: "#00aaff" }}>BADHUNTER</span>
        </h1>

        {/* Difficulty Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <button
            style={{
              background: difficulty === "beginner" ? "#0070f3" : "#333",
              color: "#fff",
              padding: "0.6rem 1.2rem",
              borderRadius: "8px",
              border: "1px solid #444",
              cursor: "pointer",
              flex: 1,
            }}
            onClick={() => setDifficulty("beginner")}
          >
            Beginner
          </button>
          <button
            style={{
              background: difficulty === "legendary" ? "#0070f3" : "#333",
              color: "#fff",
              padding: "0.6rem 1.2rem",
              borderRadius: "8px",
              border: "1px solid #444",
              cursor: "pointer",
              flex: 1,
            }}
            onClick={() => setDifficulty("legendary")}
          >
            Legendary
          </button>
        </div>

        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter your player name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            marginBottom: "2rem",
            borderRadius: "8px",
            border: "1px solid #555",
            fontSize: "1rem",
            backgroundColor: "#222",
            color: "#fff",
          }}
        />

        {/* Accept Quest Button */}
        <button onClick={handleSubmit} style={{ width: "100%" }}>
          Accept Quest
        </button>
      </div>
    </div>
  );
}