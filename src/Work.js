import './App.css';
import { Link } from "react-router-dom"

const experiences = [
  {
    company: "Robinhood",
    position: "Android Engineer",
    description: "I work @ Robinhood"
  },
  {
    company: "Crimer",
    position: "Software Architect",
    description: "I worked @ Crimer"
  },
  {
    company: "Twitter",
    position: "Software Engineering Intern",
    description: "I worked @ Twitter"
  },
]

export default function Work() {
  return (
    <div className='page'>
      <div style={{ padding: 0, flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ height: 32 }} />
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
                  {(index > 0) && (<div style={{ flex: 1, maxWidth: 16 }} />)}
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
        <div style={{ height: 4, backgroundColor: "black" }} />
        <div style={{ height: 32, display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }} />
          <h4 style={{ margin: 0, padding: 0 }}>1</h4>
        </div>
      </div>
    </div>
  )
}