import { useState } from 'react'
import { AutoWidthInput } from "./AutoWidthInput.jsx"
import '../styles/PersonalInfo.css'

export function PersonalInfo() {
  const [fullName, setFullName] = useState("John Doe");
  const [jobTitle, setJobTitle] = useState("Software Engineer");
  const [email, setEmail] = useState("johndoe@example.com");
  const [tel, setTel] = useState("+1234567890");

  return (
    <div id='personalInfoContainer'>
      <div className='cv-title'>
        <AutoWidthInput value={fullName} placeholder="Your name" onChange={(e) => setFullName(e.target.value)} />
        <AutoWidthInput value={jobTitle} placeholder="Your job" onChange={(e) => setJobTitle(e.target.value)} />
      </div>
      <AutoWidthInput value={email} placeholder="Your email" onChange={(e) => setEmail(e.target.value)} />
      <AutoWidthInput value={tel} placeholder="Your tel" onChange={(e) => setTel(e.target.value)} />
    </div>
  )
}
