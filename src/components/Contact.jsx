import { FadeIn } from "./FadeIn";
import { data } from "../data/profile";

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "6rem clamp(1.5rem, 5vw, 4rem)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div style={{ maxWidth: 660, margin: "0 auto", textAlign: "center" }}>
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
            05. contact
          </div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "1.25rem",
            }}
          >
            Let's Work Together
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            Open to senior engineering roles, consulting engagements, and
            interesting projects in fintech, SaaS, or infrastructure. Let's
            connect.
          </p>
          <a
            href={`mailto:${data.email}`}
            style={{
              display: "inline-block",
              padding: "14px 36px",
              border: "1px solid #00dc82",
              color: "#00dc82",
              borderRadius: 4,
              fontFamily: "'Space Mono', monospace",
              fontSize: 13,
              letterSpacing: "0.06em",
              textDecoration: "none",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#00dc82";
              e.currentTarget.style.color = "#05080c";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#00dc82";
            }}
          >
            Say Hello →
          </a>
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            {[
              ["GitHub", data.github],
              ["LinkedIn", data.linkedin],
              [data.email, `mailto:${data.email}`],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.35)",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#00dc82";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.35)";
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
