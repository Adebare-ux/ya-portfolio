export function Tag({ label, accent }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 10px",
        borderRadius: 99,
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.02em",
        background: accent ? "#0f2027" : "rgba(0,220,130,0.08)",
        color: "#00dc82",
        border: "1px solid rgba(0,220,130,0.18)",
        marginRight: 6,
        marginBottom: 6,
      }}
    >
      {label}
    </span>
  );
}
