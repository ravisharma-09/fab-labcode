import { useState } from "react"
import Navbar from "./components/Navbar"
import AISandbox from "./pages/AISandbox"
import GCodeGenerator from "./pages/GCodeGenerator"

function App() {
  const [mode, setMode] = useState("ai")

  return (
    <>
      <Navbar setMode={setMode} />

      {mode === "ai" ? <AISandbox /> : <GCodeGenerator />}
    </>
  )
}

export default App