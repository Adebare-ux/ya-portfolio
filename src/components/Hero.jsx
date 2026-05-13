import { useEffect, useState } from "react";
import { data } from "../data/profile";

export function Hero() {
  const [typed, setTyped] = useState("");
  const full = "Senior Software Engineer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTyped(full.slice(0, index + 1));
      index += 1;
      if (index >= full.length) {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 clamp(1.5rem, 5vw, 4rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(0,220,130,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "8%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          border: "1px solid rgba(0,220,130,0.06)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "5%",
          width: 280,
          height: 280,
          borderRadius: "50%",
          border: "1px solid rgba(0,220,130,0.1)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          paddingTop: 80,
        }}
      >
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            color: "#00dc82",
            fontSize: 13,
            letterSpacing: "0.12em",
            marginBottom: "1.5rem",
            opacity: 0.85,
          }}
        >
          Hello, I'm
        </div>
        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            lineHeight: 1.0,
            margin: "0 0 0.4rem",
            letterSpacing: "-0.03em",
            color: "#fff",
          }}
        >
          Yusuf
          <br />
          <span style={{ color: "#00dc82" }}>Adeniyi</span>
        </h1>
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(0.9rem, 2.5vw, 1.3rem)",
            color: "rgba(255,255,255,0.45)",
            marginBottom: "2rem",
            minHeight: "2em",
          }}
        >
          {typed}
          <span
            style={{
              animation: "blink 1s step-end infinite",
              color: "#00dc82",
            }}
          >
            |
          </span>
        </div>
        <p
          style={{
            maxWidth: 580,
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.6)",
            fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
            marginBottom: "2.5rem",
          }}
        >
          {data.tagline} Expert in Go-based microservices, proven success
          scaling enterprise APIs, and architecting fault-tolerant payment
          gateways.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              padding: "12px 28px",
              borderRadius: 4,
              cursor: "pointer",
              background: "#00dc82",
              color: "#05080c",
              border: "none",
              fontFamily: "'Space Mono', monospace",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.06em",
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(0,220,130,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Get in touch →
          </button>
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "11px 24px",
              borderRadius: 4,
              cursor: "pointer",
              background: "transparent",
              color: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.15)",
              fontFamily: "'Space Mono', monospace",
              fontSize: 13,
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#00dc82";
              e.currentTarget.style.color = "#00dc82";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.color = "rgba(255,255,255,0.7)";
            }}
          >
            GitHub ↗
          </a>
        </div>
        <div
          style={{
            marginTop: "4rem",
            display: "flex",
            gap: "3rem",
            flexWrap: "wrap",
          }}
        >
          {[
            ["6+", "Years Experience"],
            ["10k+", "Users Impacted"],
            ["SOC 2", "Compliant Systems"],
            ["99.9%", "Uptime Delivered"],
          ].map(([n, l]) => (
            <div key={l}>
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  fontFamily: "'Syne', sans-serif",
                  color: "#00dc82",
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "'Space Mono', monospace",
                  letterSpacing: "0.06em",
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
