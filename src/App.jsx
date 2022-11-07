import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
function Home() {
  return (
    <>
      <main>
        <div className="App">
          <div className="card">
            <header>
              <img src="src\img\logo_trans.png" width="100%" />
            </header>
          </div>
        </div>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <p className="read-the-docs">
        © 2022 Hyperion 3D Inc All Rights Reserved
      </p>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          We believe the future is in printing, and we can print your dreams
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
