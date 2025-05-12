"use client";

import { useState } from "react";

export default function WorkoutPage() {
  const warmups = [
    { name: "Arm Circles", reps: "30 sec", tempo: "-" },
    { name: "Jumping Jacks", reps: "30 sec", tempo: "-" },
  ];

  const exercises = [
    { name: "Diamond Push-ups", sets: 3, reps: 12, tempo: "2-1-2" },
    { name: "Bench Dips", sets: 3, reps: 15, tempo: "2-1-2" },
    { name: "Wide Push-ups", sets: 3, reps: 10, tempo: "3-1-3" },
  ];

  const [completedSets, setCompletedSets] = useState<Record<string, number>>({});

  const handleSetChange = (exercise: string, value: number) => {
    setCompletedSets((prev) => ({
      ...prev,
      [exercise]: Math.min(value, exercises.find(e => e.name === exercise)?.sets || 0),
    }));
  };

  const allDone = exercises.every(
    (ex) => completedSets[ex.name] === ex.sets
  );

  return (
    <main className="min-h-screen bg-black text-white p-6 space-y-8">
      <h1 className="text-3xl font-bold text-blue-400 drop-shadow-glow">
        Day 1 — Push Workout
      </h1>

      {/* Warmup Section */}
      <section>
        <h2 className="text-xl font-semibold mb-2 text-blue-300">Warm-up</h2>
        <ul className="space-y-2">
          {warmups.map((w) => (
            <li
              key={w.name}
              className="p-4 bg-gray-800 rounded shadow-md hover:bg-gray-700 transition"
            >
              <p className="font-semibold">{w.name}</p>
              <p className="text-sm">Reps: {w.reps}</p>
              <p className="text-sm">Tempo: {w.tempo}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Workout Section */}
      <section>
        <h2 className="text-xl font-semibold mb-2 text-blue-300">Workout</h2>
        <ul className="space-y-4">
          {exercises.map((ex) => (
            <li
              key={ex.name}
              className="p-4 bg-gray-900 rounded shadow-lg hover:shadow-blue-500/40 transition"
            >
              <p className="text-lg font-semibold">{ex.name}</p>
              <p className="text-sm">Sets: {ex.sets} | Reps: {ex.reps} | Tempo: {ex.tempo}</p>

              <div className="mt-2 flex items-center gap-2">
                <label htmlFor={`sets-${ex.name}`} className="text-sm">Completed sets:</label>
                <input
                  id={`sets-${ex.name}`}
                  type="number"
                  min={0}
                  max={ex.sets}
                  value={completedSets[ex.name] || 0}
                  onChange={(e) =>
                    handleSetChange(ex.name, parseInt(e.target.value) || 0)
                  }
                  className="w-16 px-2 py-1 rounded text-black"
                />
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Complete Workout Button */}
      <div>
        {allDone ? (
          <button className="px-6 py-3 bg-green-600 rounded hover:bg-green-700 transition">
            ✅ Complete Workout
          </button>
        ) : (
          <p className="text-yellow-400">Complete all sets to finish the workout.</p>
        )}
      </div>
    </main>
  );
}