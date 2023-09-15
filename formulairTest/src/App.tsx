import { useMultistepForm } from "./useMultistepForm"



function App() {

  const { steps, currentStepIndex ,step} = useMultistepForm([
    <div>one</div>,
    <div>two</div>])

  return <div style={{
    position: "relative",
    background: "white",
    border: "1px solid blue",
    padding: "2rem",
    margin: "1rem",
    borderRadius: ".5rem",
    fontFamily: "Arial",
  }}>

    <form>
      <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
        {currentStepIndex + 1}/{steps.length}
      </div>
      {step}
      <div style={{
        marginTop :"1rem",
        display:"flex",
        gap:".5rem",
        justifyContent:"flex-end",
      }}>
          <button>back</button>
          <button>next</button>
      </div>
    </form>

  </div>
}
export default App
