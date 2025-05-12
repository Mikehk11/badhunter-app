"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Exercise = {
  name: string;
  sets: number;
  reps: number;
  tempo: string;
};

export default function WorkoutPage() {
  const router = useRouter();

  const workoutPlans: Exercise[][] = [
    [
      { name: "Diamond Push-ups", sets: 3, reps: 12, tempo: "2-1-2" },
      { name: "Bench Dips", sets: 3, reps: 15, tempo: "2-1-2" },
      { name: "Wide Push-ups", sets: 3, reps: 10, tempo: "3-1-3" },
    ],
    [
      { name: "Inverted Rows", sets: 3, reps: 10, tempo: "2-1-2" },
      { name: "Superman Hold", sets: 3, reps: 30, tempo: "isometric" },
      { name: "Reverse Snow Angels", sets: 3, reps: 12, tempo: "2-2-2" },
    ],
    [
      { name: "Bodyweight Squats", sets: 4, reps: 20, tempo: "3-1-3" },
      { name: "Lunges", sets: 3, reps: 15, tempo: "2-1-2" },
      { name: "Wall Sit", sets: 3, reps: 45, tempo: "isometric" },
    ],
  ];

  const [day, setDay] = useState(1);
  const [completedSets, setCompletedSets] = useState<Record<string, number>>({});

  useEffect(() => {
    const storedDay = parseInt(localStorage.getItem("currentWorkoutDay") || "1");
    setDay(storedDay > 30 ? 1 : storedDay);
  }, []);

  const handleSetChange = (exercise: string, value: number) => {
    setCompletedSets((prev) => ({
      ...prev,
      [exercise]: value,
    }));
  };

  const plan = workoutPlans[(day - 1) % workoutPlans.length];
  const allDone = plan.every((ex) => completedSets[ex.name] === ex.sets);

  const completeWorkout = () => {
    const nextDay = day + 1 > 30 ? 1 : day + 1;
    localStorage.setItem("currentWorkoutDay", nextDay.toString());

    const count = parseInt(localStorage.getItem("totalWorkouts") || "0") + 1;
    localStorage.setItem("totalWorkouts", count.toString());

    alert("Workout Complete!");
    router.push("/profile");
  };

  return (
    <div className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="card">
        <h1 style={{ fontSize: "2rem", marginBottom: "2rem", textAlign: "center" }}>
          Day {day} – {day % 3 === 1 ? "Push" : day % 3 === 2 ? "Pull" : "Legs"} Workout
        </h1>

        <section>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {plan.map((ex) => (
              <div key={ex.name} style={{ background: "#1e1e1e", padding: "1rem", borderRadius: "10px" }}>
                <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{ex.name}</p>
                <p style={{ fontSize: "0.9rem" }}>
                  Sets: {ex.sets} | Reps: {ex.reps} | Tempo: {ex.tempo}
                </p>

                <div style={{ marginTop: "0.75rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <label>Completed sets:</label>
                  <input
                    type="number"
                    min={0}
                    max={ex.sets}
                    value={completedSets[ex.name] || 0}
                    onChange={(e) => handleSetChange(ex.name, parseInt(e.target.value) || 0)}
                    style={{
                      padding: "0.5rem",
                      borderRadius: "6px",
                      width: "60px",
                      border: "1px solid #555",
                      backgroundColor: "#222",
                      color: "#fff",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          {allDone ? (
            <button onClick={completeWorkout}>✅ Complete Workout</button>
          ) : (
            <p style={{ color: "#ffa500" }}>Complete all sets to finish the workout.</p>
          )}
        </div>
      </div>
    </div>
  );
}