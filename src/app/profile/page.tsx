"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const [playerName, setPlayerName] = useState("Hunter");
  const [level, setLevel] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [workoutDay, setWorkoutDay] = useState(1);
  const [totalWorkouts, setTotalWorkouts] = useState(0);

  useEffect(() => {
    const name = localStorage.getItem("playerName") || "Hunter";
    const lvl = parseInt(localStorage.getItem("level") || "0");
    const strk = parseInt(localStorage.getItem("strikes") || "0");
    const day = parseInt(localStorage.getItem("currentWorkoutDay") || "1");
    const total = parseInt(localStorage.getItem("totalWorkouts") || "0");

    setPlayerName(name);
    setLevel(lvl);
    setStrikes(strk);
    setWorkoutDay(day);
    setTotalWorkouts(total);
  }, []);

  return (
    <div className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="card" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "#00aaff" }}>
          {playerName}&apos;s Profile
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <Stat title="Level" value={`${level} / 100`} />
          <Stat title="Workout Day" value={`Day ${workoutDay}`} />
          <Stat title="Strikes" value={`${strikes} / 3`} color={strikes >= 3 ? "#ff5555" : "#ffffff"} />
          <Stat title="Total Workouts Completed" value={totalWorkouts.toString()} />
        </div>

        <div style={{ marginTop: "2rem" }}>
          <Link href="/dashboard">
            <button style={{ width: "100%" }}>← Return to Dashboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Stat({ title, value, color = "#ffffff" }: { title: string; value: string; color?: string }) {
  return (
    <div style={{ background: "#1e1e1e", padding: "1.5rem", borderRadius: "10px" }}>
      <h2 style={{ fontSize: "1.2rem", color: "#999", marginBottom: "0.5rem" }}>{title}</h2>
      <p style={{ fontSize: "1.6rem", fontWeight: "bold", color }}>{value}</p>
    </div>
  );
}