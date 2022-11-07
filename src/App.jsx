import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  

  return (
    <div className="App">
      <div className="card" >
        <header>
        <button>Products</button>
        <button>Gallery</button>
        <button>Contact</button>
        <img src="src\img\logo_trans.png" width="100%"/>
        </header>

        <button>Privacy & Security</button>
      <button>Legal & Trademarks</button>
      <button>Terms of Service</button>
      </div>
      <p className="read-the-docs">© 2022 Hyperion 3D Inc All Rights Reserved</p>
     
    </div>
  );
}

export default App;
