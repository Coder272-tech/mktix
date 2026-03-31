export default function Footer() {
  return (
    <footer style={{
      padding: 40,
      textAlign: "center",
      borderTop: "1px solid #1f2937",
      marginTop: 80,
      color: "#777"
    }}>
      <p>© {new Date().getFullYear()} The Market Index</p>
    </footer>
  );
}