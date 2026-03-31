const features = [
  {
    title: "Mean Reversion Models",
    desc: "Analyze markets using Ornstein–Uhlenbeck processes.",
  },
  {
    title: "Regime Detection",
    desc: "Identify volatility and trend regimes with Hidden Markov Models.",
  },
  {
    title: "Distribution Analysis",
    desc: "Fit statistical distributions and detect anomalies.",
  },
  {
    title: "Bring Your Own Data",
    desc: "Connect your own providers or APIs.",
  },
];

export default function Features() {
  return (
    <section style={{ padding: "80px 20px", textAlign: "center" }}>
      <h2>Powerful Quant Tools</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: 20,
        marginTop: 40,
      }}>
        {features.map((f, i) => (
          <div key={i} style={card}>
            <h3>{f.title}</h3>
            <p style={{ color: "#aaa" }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const card = {
  padding: 20,
  background: "#111827",
  borderRadius: 10,
  border: "1px solid #1f2937",
};