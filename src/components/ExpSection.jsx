import { useState } from 'react'
import { AutoWidthInput } from "./AutoWidthInput.jsx"
import "../styles/ExpComponent.css"

export function ExpSection({ type }) {
  const [sectionTitle, setSectionTitle] = useState(type == "edu" ? "Title of study" : "Position");
  const [placeName, setPlaceName] = useState(type == "edu" ? "School Name" : "Company Name");
  const [startDate, setStartDate] = useState("2020");
  const [endDate, setEndDate] = useState("2024");

  return (
    <div id='expSectionContainer'>
      <AutoWidthInput value={sectionTitle} onChange={(e) => setSectionTitle(e.target.value)} />
      <div className='exp-section-info'>
        <AutoWidthInput value={placeName} onChange={(e) => setPlaceName(e.target.value)} />
        •
        <AutoWidthInput value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        -
        <AutoWidthInput value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>
    </div>
  )
}
