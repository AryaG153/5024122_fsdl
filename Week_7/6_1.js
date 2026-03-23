// Function component (preferred)
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Class component (legacy)
class Welcome extends React.Component {
  render() {
    return <h2>Welcome, {this.props.name}</h2>;
  }
}

// Usage
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}