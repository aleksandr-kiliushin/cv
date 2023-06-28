import Image from "next/image"
import { FC } from "react"

import classes from "./page.module.css"
import portrait from "./portrait.webp"

const Cv: FC = () => {
  return (
    <div className={classes.cv}>
      <header className={classes.header}>
        <Image alt="portrait" className={classes.profilePhoto} src={portrait} />
        <div className={classes.summary}>
          <h1>Aleksandr Kiliushin</h1>
          <p>Frontend developer (React)</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla veritatis, sapiente optio dicta placeat
            exercitationem sequi iste! Tempore cum, optio error, ab quod quae fugit saepe asperiores, repellat officiis
            quas fuga neque! Aspernatur, voluptatem suscipit. Cum, tempora perferendis dolorem numquam facilis quasi
            adipisci doloribus a saepe debitis minus, dignissimos beatae quo accusamus, quae recusandae velit alias ex
            itaque quod neque possimus dicta obcaecati! Asperiores rem neque temporibus nisi aspernatur quos debitis
            modi facilis pariatur cumque deleniti perspiciatis, eum aperiam officiis maxime numquam est accusamus non
            earum vero itaque fuga. Voluptatum, dolore qui quo repudiandae minus earum dignissimos harum fugit sunt.
          </p>
        </div>
      </header>
      <div>
        <div>
          <div className={classes.contactsSection}>
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
          <div className={classes.workExperienceSection}>Work experience</div>
        </div>
      </div>
    </div>
  )
}

export default Cv
