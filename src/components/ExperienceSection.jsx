import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { Tag } from "./Tag";
import { data } from "../data/profile";

export function ExperienceSection() {
  const [active, setActive] = useState(0);
  const exp = data.experience;

  return (
    <section
      id="experience"
      style={{
        padding: "6rem clamp(1.5rem, 5vw, 4rem)",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <FadeIn>
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            color: "#00dc82",
            fontSize: 12,
            letterSpacing: "0.12em",
            marginBottom: "0.75rem",
          }}
        >
          02. experience
        </div>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "3rem",
          }}
        >
          Where I've Worked
        </h2>
      </FadeIn>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem 3rem",
        }}
      >
        <div style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
          {exp.map((entry, index) => (
            <FadeIn key={entry.company} delay={index * 0.05}>
              <button
                onClick={() => setActive(index)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "14px 20px",
                  background: "none",
                  border: "none",
                  borderLeft:
                    active === index
                      ? "2px solid #00dc82"
                      : "2px solid transparent",
                  marginLeft: -1,
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 12,
                    color:
                      active === index ? "#00dc82" : "rgba(255,255,255,0.4)",
                    transition: "color 0.2s",
                    fontWeight: active === index ? 700 : 400,
                  }}
                >
                  {entry.company}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.25)",
                    marginTop: 2,
                  }}
                >
                  {entry.period}
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
        <FadeIn key={active}>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "1rem",
                marginBottom: "0.25rem",
                flexWrap: "wrap",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "#fff",
                  margin: 0,
                }}
              >
                {exp[active].role}
              </h3>
              <span
                style={{
                  color: "#00dc82",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 13,
                }}
              >
                @ {exp[active].company}
              </span>
            </div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                color: "rgba(255,255,255,0.35)",
                marginBottom: "0.5rem",
              }}
            >
              {exp[active].period} · {exp[active].location}
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: 14,
                marginBottom: "1.25rem",
                fontStyle: "italic",
              }}
            >
              {exp[active].description}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem" }}>
              {exp[active].bullets.map((bullet, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                    color: "rgba(255,255,255,0.65)",
                    fontSize: 14,
                    lineHeight: 1.7,
                  }}
                >
                  <span
                    style={{ color: "#00dc82", marginTop: 2, flexShrink: 0 }}
                  >
                    ▹
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
            <div>
              {exp[active].tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
