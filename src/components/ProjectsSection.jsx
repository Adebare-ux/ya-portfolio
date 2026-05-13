import { FadeIn } from "./FadeIn";
import { Tag } from "./Tag";
import { data } from "../data/profile";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: "6rem clamp(1.5rem, 5vw, 4rem)",
        background: "rgba(0,220,130,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
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
            03. projects
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
            Things I've Built
          </h2>
        </FadeIn>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {data.projects.map((project, index) => (
            <FadeIn key={project.name} delay={index * 0.1}>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 8,
                    padding: "1.75rem",
                    transition:
                      "border-color 0.2s, transform 0.2s, background 0.2s",
                    cursor: "pointer",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,220,130,0.35)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.background = "rgba(0,220,130,0.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.07)";
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "1rem",
                    }}
                  >
                    <span style={{ color: "#00dc82", fontSize: 22 }}>⌥</span>
                    <span
                      style={{ color: "rgba(255,255,255,0.3)", fontSize: 18 }}
                    >
                      ↗
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "#fff",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: 13,
                      lineHeight: 1.75,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {project.desc}
                  </p>
                  <div>
                    {project.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
