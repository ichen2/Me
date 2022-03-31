import './App.css';
import { Link } from "react-router-dom"

const pages = [
  {
    text: "Work",
    url: "/work"
  },
  {
    text: "Projects",
    url: "/projects"
  },
  {
    text: "About",
    url: "/about"
  },
]

export default function Home() {
  return (
    <div className='page'>
      <div style={{ padding: 0, flex: 1, display: "flex", flexDirection: "column" }}>
        <div className="big-screens-only" style={{ height: 32 }} />
        <div style={{ height: 4, backgroundColor: "black" }} />
        <h1 style={{ padding: 8, textAlign: "center" }}>Ian Chen</h1>
        <h1 style={{ backgroundColor: "black", color: "white", padding: "24px 8px", textAlign: "center", fontSize: "40px" }}>
          Software Engineer
        </h1>
        <div style={{ display: "flex", alignItems: "end", marginBottom: 8, marginTop: 48 }}>
          <div style={{ flex: 1, maxWidth: 64 }} />
          <div style={{ flex: 1, minWidth: 280, display: "flex", flexDirection: "column", margin: "16px 0" }}>
            <h1>Contents</h1>
            <div style={{ height: 16 }} />
            {
              pages.map((page, index) => {
                return (
                  <Link className="index-item" to={page.url} style={{ color: "black", textDecoration: "none" }} key={page.url}>
                    <h3>{page.text}</h3>
                    <div className="index-item-line" />
                    <h3>{index + 1}</h3>
                  </Link>
                )
              })
            }
          </div>
          <div style={{ flex: 1, maxWidth: 64 }} />
        </div>
        <div style={{ flex: 1, minWidth: 32, minHeight: 32 }} />
        <div className="big-screens-only" style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ height: 4, backgroundColor: "black" }} />
          <div style={{ height: 32, display: "flex", alignItems: "center" }}>
            <div style={{ flex: 1 }} />
            <h4 style={{ margin: 0, padding: 0 }}>0</h4>
          </div>
        </div>
      </div>
    </div>
  )
}