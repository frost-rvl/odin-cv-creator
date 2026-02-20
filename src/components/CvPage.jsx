import { PersonalInfo } from './PersonalInfo.jsx';
import { ExpComponent } from './ExpComponent.jsx';
import '../styles/CvPage.css'

export function CvPage() {

  return (
    <div id='cvContainer'>
      <PersonalInfo />
      <ExpComponent title={"EDUCATIONAL"} type={"edu"} />
      <ExpComponent title={"WORK"} type={"work"} />
    </div>
  )
}
