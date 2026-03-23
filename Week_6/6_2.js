function Card({ title, body, color = "lightblue" }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "8px", background: color }}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Card title="Hello" body="Prop-based card" color="#e8f0fe" />
      <Card title="Another" body="Default color card" />
    </div>
  );
}