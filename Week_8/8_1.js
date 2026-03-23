import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

function Home() { return <h2>Home</h2>; }
function About() { return <h2>About</h2>; }
function User() {
  let { id } = useParams();
  return <h2>User {id}</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/user/42">User 42</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}