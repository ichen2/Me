import './App.css';
import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className='page'>
      <div style={{ padding: 0, flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ height: 32 }} />
        <div style={{ height: 4, backgroundColor: "black" }} />
        <div style={{ position: "relative", zIndex: 0, display: "flex", flexDirection: "column" }}>
          <div className="title-header" style={{ display: "flex", alignItems: "flex-end" }}>
            <h1>
              About
            </h1>
            <div style={{ flex: 1 }} />
            <h5>
              <Link to="/work" style={{ color: "white" }}>Work</Link>
              &nbsp;&nbsp;
              <Link to="/projects" style={{ color: "white" }}>Projects</Link>
            </h5>
          </div>
          <div style={{ padding: 20, textAlign: "center" }}>
            <h2>Ian Chen</h2>
            <div style={{ height: "1em" }} />
            Ian is an experienced software engineer, having worked at big tech companies and small startups alike. His primary focus is Android development, but he's also familiar with frontend web development and a little backend.
            <div style={{ height: "1em" }} />
            Ian is currently based in Houston, TX, working at Robinhood as an Android Engineer. In his free time he likes to play Super Smash Brothers Melee and chess, listen to music, and play the piano.
            <div style={{ height: "1em" }} />
            Github: <a href="https://github.com/ichen2" target="_blank">ichen2</a>
            <div style={{ height: "1em" }} />
            LinkedIn: <a href="https://www.linkedin.com/in/ichen2/" target="_blank">ichen2</a>
            <div style={{ height: "1em" }} />
            Email: <a href="mailto:ichen4302@gmail.com" target="_blank">ichen4302@gmail.com</a>
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 32, minHeight: 32 }} />
        <div style={{ height: 4, backgroundColor: "black" }} />
        <div style={{ height: 32, display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }} />
          <h4 style={{ margin: 0, padding: 0 }}>3</h4>
        </div>
      </div>
    </div>
  )
}