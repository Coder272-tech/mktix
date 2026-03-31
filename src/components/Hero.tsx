export default function Hero() {
  return (
    <section style={{ padding: "100px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: 700 }}>
        Statistical Intelligence for Markets
      </h1>

      <p style={{ marginTop: 20, fontSize: "1.2rem", color: "#aaa" }}>
        Run mean-reversion, regime detection, and probabilistic models on your own data.
      </p>

      <div style={{ marginTop: 30 }}>
        <button style={buttonPrimary}>Start Free</button>
        <button style={buttonSecondary}>View Demo</button>
      </div>

      <div style={{ marginTop: 60 }}>
        {/* Placeholder for chart */}
        <div style={{
          height: 300,
          background: "#111827",
          borderRadius: 12,
          border: "1px solid #1f2937"
        }}>
          <p style={{ paddingTop: 130, color: "#666" }}>
            [ OU / HMM Visualization Here ]
          </p>
        </div>
      </div>
    </section>
  );
}

const buttonPrimary = {
  padding: "12px 24px",
  marginRight: 10,
  background: "#2563eb",
  border: "none",
  borderRadius: 6,
  color: "white",
  cursor: "pointer",
};

const buttonSecondary = {
  padding: "12px 24px",
  background: "transparent",
  border: "1px solid #444",
  borderRadius: 6,
  color: "#ccc",
  cursor: "pointer",
};