export default function HowItWorks() {
  return (
    <section style={{ padding: "80px 20px", textAlign: "center" }}>
      <h2>How It Works</h2>

      <div style={{ marginTop: 40 }}>
        <Step
          number="1"
          title="Connect Data"
          desc="Use built-in sources or your own API."
        />
        <Step
          number="2"
          title="Run Models"
          desc="Apply statistical models to your data."
        />
        <Step
          number="3"
          title="Get Signals"
          desc="Receive alerts, reports, and insights."
        />
      </div>
    </section>
  );
}

function Step({ number, title, desc }: any) {
  return (
    <div style={{ marginBottom: 30 }}>
      <h3>{number}. {title}</h3>
      <p style={{ color: "#aaa" }}>{desc}</p>
    </div>
  );
}