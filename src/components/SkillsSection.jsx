import { FadeIn } from "./FadeIn";
import { data } from "../data/profile";

export function SkillsSection() {
  return (
    <section id="skills" style={{ padding: "6rem clamp(1.5rem, 5vw, 4rem)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
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
            04. skills
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
            Tools & Technologies
          </h2>
        </FadeIn>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {Object.entries(data.skills).map(([category, items], index) => (
            <FadeIn key={category} delay={index * 0.07}>
              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 8,
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 11,
                    color: "#00dc82",
                    letterSpacing: "0.1em",
                    marginBottom: "1rem",
                    textTransform: "uppercase",
                  }}
                >
                  {category}
                </div>
                <div>
                  {items.map((item) => (
                    <span
                      key={item}
                      style={{
                        display: "inline-block",
                        marginRight: 8,
                        marginBottom: 8,
                        fontSize: 13,
                        color: "rgba(255,255,255,0.65)",
                        padding: "4px 0",
                      }}
                    >
                      <span style={{ color: "#00dc82", marginRight: 6 }}>
                        ›
                      </span>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
