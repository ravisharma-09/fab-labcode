function Navbar({ setMode }) {
  return (
    <div className="nav">
      <h1>FAB-LabCode</h1>

      <div className="hebtn">
        <button onClick={() => setMode("ai")} className="btnn">
          AI Sandbox
        </button>

        <button onClick={() => setMode("gcode")} className="btnn">
          G-code Mode
        </button>
      </div>
    </div>
  )
}

export default Navbar