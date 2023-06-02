import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './header/Header.js';
import Home from './sites/Home.js';
import Inventar from './sites/Inventar';
import Disclaimer from './sites/Disclaimer.js';
import Legal from './sites/Legal.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/inventar" element={<Inventar />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </body>
    </div>
  );
}

export default App;
