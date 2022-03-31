import './App.css';
import { Link } from "react-router-dom"

const experiences = [
  {
    company: "Robinhood",
    position: "Android Engineer",
    description: "Currently I'm working on the Android team at Robinhood."
  },
  {
    company: "Crimer",
    position: "Software Architect",
    description: "Crimer is a startup that does freelance software development and I was their software architect. I would meet with clients and design software to meet their needs. I also did some coding in React, but most of my time was spent creating high-level design documents and helping other developers implement them."
  },
  {
    company: "Twitter",
    position: "Software Engineering Intern",
    description: "I interned at Twitter and worked on the Android app, specifically on the Home Timelines team. My team and I implemented a new timeline module (unofficially called Tinder for Tweets) that let users swipe through tweets and like/dislike them."
  },
]

export default function Work() {
  return (
    <div className='page'>
      <div style={{ padding: 0, flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ height: 32 }} className="big-screens-only" />
        <div style={{ height: 4, backgroundColor: "black" }} />
        <div style={{ position: "relative", zIndex: 0, display: "flex", flexDirection: "column" }}>
          <div className="title-header" style={{ display: "flex", alignItems: "flex-end" }}>
            <h1>
              Work
            </h1>
            <div style={{ flex: 1 }} />
            <h5>
              <Link to="/projects" style={{ color: "white" }}>Projects</Link>
              &nbsp;&nbsp;
              <Link to="/about" style={{ color: "white" }}>About</Link>
            </h5>
          </div>
          <div className="work-panel-container">
            {experiences.map((experience, index) => {
              return (
                <div style={{ display: "flex", flex: 1 }} key={experience.company}>
                  {(index > 0) && (<div className="big-screens-only" style={{ flex: 1, maxWidth: 16 }} />)}
                  <div className='work-panel'>
                    <div className="work-panel-item" style={{ flex: 1 }}>
                      <h2>{experience.company}</h2>
                      <div style={{ height: 16, width: 16 }} />
                      <p>{experience.position}</p>
                      <div style={{ height: 16, width: 16 }} />
                      <p>{experience.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 32, minHeight: 32 }} />
        <div className="big-screens-only" style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ height: 4, backgroundColor: "black" }} />
          <div style={{ height: 32, display: "flex", alignItems: "center" }}>
            <div style={{ flex: 1 }} />
            <h4 style={{ margin: 0, padding: 0 }}>1</h4>
          </div>
        </div>
      </div>
    </div>
  )
}