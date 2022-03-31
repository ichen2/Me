import './App.css';
import Home from './Home'
import Work from './Work'
import Projects from "./Projects"
import About from "./About"
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import ArrowKeysReact from 'arrow-keys-react';


export default function App() {

  return (
    <HashRouter>
      <div id="main" {...ArrowKeysReact.events} tabIndex={1}>
        <div style={{ flex: 1 }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <div style={{ flex: 1 }} />
      </div>
    </HashRouter>
  );
}
