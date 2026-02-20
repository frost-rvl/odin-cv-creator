import { AutoWidthInput } from "./AutoWidthInput.jsx"
import { ExpSection } from "./ExpSection.jsx";
import '../styles/ExpComponent.css'
import { useState } from "react"

export function ExpComponent({ title, type }) {
  const [ExpNumber, setExpNumber] = useState(1);
  const expSections = [];
  for (let i = 0; i < ExpNumber; i++) {
    expSections.push(
      <ExpSection key={i} type={type} />
    );
  }
  return (
    <div id='expContainer'>
      <div className="exp-head">
        <h2>{title + " EXPERIENCE"}</h2>
        <button onClick={() => setExpNumber(ExpNumber + 1)}>Add</button>
      </div>
      <div>{expSections}</div>
    </div>
  )
}
