import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../data/profile";

export function Nav({ active }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(5,8,12,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s ease",
        padding: "0 clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 15,
            color: "#00dc82",
            letterSpacing: "0.05em",
          }}
        >
          ya<span style={{ color: "#fff" }}>_</span>dev
        </span>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "flex-end",
          }}
        >
          {NAV_ITEMS.map((n) => (
            <button
              key={n}
              onClick={() => scrollTo(n)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                fontFamily: "'Space Mono', monospace",
                color:
                  active === n.toLowerCase()
                    ? "#00dc82"
                    : "rgba(255,255,255,0.55)",
                letterSpacing: "0.05em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#00dc82";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  active === n.toLowerCase()
                    ? "#00dc82"
                    : "rgba(255,255,255,0.55)";
              }}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
