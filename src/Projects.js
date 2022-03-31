import './App.css';
import { Link } from "react-router-dom"

const experiences = [
  {
    name: "Pocket Bracket",
    stack: "Kotlin, Jetpack Compose, Apollo GraphQL",
    link: "https://github.com/ichen2/pocket-bracket",
    description: "An Android client for the smash.gg API. Lets users search/register for esports tournaments, view tournaments they've competed in, and view/edit their smash.gg profile."
  },
  {
    name: "StorageSplit",
    stack: "TypeScript, React, NodeJS, Firebase",
    link: "https://storagesplit.co/",
    description: "A full stack web app. Lets users easily split their storage unit rental fee between multiple people. Automatically charges users monthly via Stripe."
  },
  {
    name: "Eagle Cleaners Delivery",
    stack: "Kotlin, XML, Retrofit, Firebase",
    link: "https://github.com/ichen2/eagle-cleaners-delivery",
    description: "A full stack Android app. Lets Eagle Cleaners' customers request delivery of their laundry. Utilizes the Google Maps API as well as several Firebase services."
  },
]

export default function Projects() {
  return (
    <div className='page'>
      <div style={{ padding: 0, flex: 1, display: "flex", flexDirection: "column" }}>
        <div className="big-screens-only" style={{ height: 32 }} />
        <div style={{ height: 4, backgroundColor: "black" }} />
        <div style={{ position: "relative", zIndex: 0, display: "flex", flexDirection: "column" }}>
          <div className="title-header" style={{ display: "flex", alignItems: "flex-end" }}>
            <h1>
              Projects
            </h1>
            <div style={{ flex: 1 }} />
            <h5>
              <Link to="/work" style={{ color: "white" }}>Work</Link>
              &nbsp;&nbsp;
              <Link to="/about" style={{ color: "white" }}>About</Link>
            </h5>
          </div>
          <div className="work-panel-container">
            <div className="project-panel-item" id="project-panel-item-1">
              <h2>{experiences[0].name}</h2>
              <p><strong>Stack:</strong> {experiences[0].stack}</p>
              <a href={experiences[0].link}>LINK</a>
              <div style={{ height: 8, width: 16 }} />
              <p>{experiences[0].description}</p>
            </div>
            <div className="project-panel-item" id="project-panel-item-2">
              <h2>{experiences[1].name}</h2>
              <p><strong>Stack:</strong> {experiences[1].stack}</p>
              <a href={experiences[1].link}>LINK</a>
              <div style={{ height: 8, width: 16 }} />
              <p>{experiences[1].description}</p>
            </div>
            <div className="project-panel-item" id="project-panel-item-3">
              <h2>{experiences[2].name}</h2>
              <p><strong>Stack:</strong> {experiences[2].stack}</p>
              <a href={experiences[2].link}>LINK</a>
              <div style={{ height: 8, width: 16 }} />
              <p>{experiences[2].description}</p>
            </div>
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 32, minHeight: 32 }} />
        <div className="big-screens-only" style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ height: 4, backgroundColor: "black" }} />
          <div style={{ height: 32, display: "flex", alignItems: "center" }}>
            <div style={{ flex: 1 }} />
            <h4 style={{ margin: 0, padding: 0 }}>2</h4>
          </div>
        </div>
      </div>
    </div>
  )
}