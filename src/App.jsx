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
      <nav className="small-nav">
        <Link to="/about">About </Link>
        <Link to="/contact">Contact us</Link>
      </nav>
      <nav className="xsmall-nav">
        <Link to="/terms_and_conditions">Terms and Conditions </Link>
        <Link to="/terms_of_use">Terms of Use </Link>
        <Link to="/privacy_policy">Privacy Policy </Link>
        <Link to="/data_protection_policy">Data Protection Policy </Link>
      </nav>
      <p className="gray-text-att-bottom">
        © 2022 Hyperion3D by Sebastian Eriksson Inc All Rights Reserved
      </p>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>Asmir Kunalic CEO of Hyperion 3D</p>
        <p>A company where dreams are made reality</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function Contact() {
  return (
    <>
      <main>
        <h2>Contact us</h2>
        <p>send emails to: asmirkunalic@hotmail.com</p>
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
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
