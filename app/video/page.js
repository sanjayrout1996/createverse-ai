"use client";

import { useState } from "react";

export default function VideoGenerator() {
  const [prompt, setPrompt] = useState("");

  return (
    <main className="site">
      <section className="hero">
        <div className="badge">🎬 AI VIDEO GENERATOR</div>

        <h1>
          Turn Your <span>Ideas Into Videos</span>
        </h1>

        <p>
          Describe your video idea and create a complete video project with
          CreateVerse AI.
        </p>

        <div
          style={{
            maxWidth: "800px",
            margin: "40px auto",
            padding: "25px",
            borderRadius: "20px",
            background: "#111",
          }}
        >
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Example: Create a 60-second Hindi animated story about a brave little boy..."
            rows={7}
            style={{
              width: "100%",
              padding: "18px",
              borderRadius: "12px",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          <button
            className="primary"
            onClick={() =>
              alert(
                prompt
                  ? "Your video request has been received. AI video generation will be connected next."
                  : "Please enter your video idea first."
              )
            }
            style={{ marginTop: "20px" }}
          >
            🎬 Generate Video
          </button>
        </div>

        <a href="/" style={{ color: "inherit" }}>
          ← Back to CreateVerse AI
        </a>
      </section>
    </main>
  );
              }
