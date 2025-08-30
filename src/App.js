// import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom"
import './App.css';

import FAQ from "./components/FAQ";
import About from "./components/About";
import NotFound from "./components/NotFound";

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
        &nbsp;|&nbsp;
        <Link to="/faq">FAQ</Link>
      </nav>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to React ROuter!</h1>
      {/* 註冊路由表 */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="faq" element={<FAQ />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
