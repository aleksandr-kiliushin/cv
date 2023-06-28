import { FC } from "react"

import classes from "./page.module.css"

const Cv: FC = () => {
  return (
    <main>
      <div>
        <div className={classes.contactsSection}>
          <h1>Aleksandr Kiliushin</h1>
          <p>Frontend developer (React)</p>
          <ul>
            <li>
              Icon <a href="mailto:aleksandr.kiliushin@gmail.com">aleksandr.kiliushin@gmail.com</a>
            </li>
            <li>
              Icon <a href="https://www.linkedin.com/in/aleksandr-kiliushin">in/aleksandr-kiliushin</a>
            </li>
            <li>
              Icon <a href="https://github.com/aleksandr-kiliushin">github.com/aleksandr-kiliushin</a>
            </li>
            <li>
              Icon <a href="https://t.me/aleksandr_kiliushin">t.me/aleksandr_kiliushin</a>
            </li>
            <li>
              Icon <a href="https://www.google.com/maps/place/Batumi/">Batumi, Georgia</a>
            </li>
          </ul>
        </div>
        <div className={classes.skillsSection}>Skills</div>
        <div className={classes.educationSection}>Education</div>
      </div>
      <div>
        <div className={classes.careerObjectiveSection}>Summary</div>
        <div className={classes.careerObjectiveSection}>Career objective</div>
        <div className={classes.workExperienceSection}>Work experience</div>
      </div>
    </main>
  )
}

export default Cv
