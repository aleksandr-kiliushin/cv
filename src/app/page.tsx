import Image from "next/image"
import { FC } from "react"

import classes from "./page.module.css"
import portrait from "./portrait.webp"

const Cv: FC = () => {
  return (
    <div className={classes.cv}>
      <Image alt="portrait" className={classes.profilePhoto} src={portrait} />
      <div className={classes.summarySection}>
        <h1>Aleksandr Kiliushin</h1>
        <p>Frontend developer (React)</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla veritatis, sapiente optio dicta placeat
          exercitationem sequi iste! Tempore cum, optio error, ab quod quae fugit saepe asperiores, repellat officiis
          quas fuga neque! Aspernatur, voluptatem suscipit. Cum, tempora perferendis dolorem numquam facilis quasi
          adipisci doloribus a saepe debitis minus, dignissimos beatae quo accusamus, quae recusandae velit alias ex
          itaque quod neque possimus dicta obcaecati! Asperiores rem neque temporibus nisi aspernatur quos debitis modi
          facilis pariatur cumque deleniti perspiciatis, eum aperiam officiis maxime numquam est accusamus non earum
          vero itaque fuga. Voluptatum, dolore qui quo repudiandae minus earum dignissimos harum fugit sunt.
        </p>
      </div>
      <div className={classes.contactsSkillsAndEducationSections}>
        <div className={classes.contactsSection}>
          <a className={classes.contact} href="mailto:aleksandr.kiliushin@gmail.com" rel="noreferrer" target="_blank">
            <span>Icon</span>
            aleksandr.kiliushin@gmail.com
          </a>
          <a
            className={classes.contact}
            href="https://www.linkedin.com/in/aleksandr-kiliushin"
            rel="noreferrer"
            target="_blank"
          >
            <span>Icon</span>
            in/aleksandr-kiliushin
          </a>
          <a className={classes.contact} href="https://github.com/aleksandr-kiliushin" rel="noreferrer" target="_blank">
            <span>Icon</span>
            github.com/aleksandr-kiliushin
          </a>
          <a className={classes.contact} href="https://t.me/aleksandr_kiliushin" rel="noreferrer" target="_blank">
            <span>Icon</span>
            t.me/aleksandr_kiliushin
          </a>
          <a
            className={classes.contact}
            href="https://www.google.com/maps/place/Batumi"
            rel="noreferrer"
            target="_blank"
          >
            <span>Icon</span>
            Batumi, Georgia
          </a>
        </div>
        <section className={classes.skillsSection}>Skills</section>
        <section className={classes.educationSection}>Education</section>
      </div>
      <section className={classes.workExperienceSection}>Work experience</section>
    </div>
  )
}

export default Cv
