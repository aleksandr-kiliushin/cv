import Image from "next/image"
import { FC } from "react"
import { BsGithub as GithubIcon, BsLinkedin as LinkedinIcon, BsTelegram as TelegramIcon } from "react-icons/bs"
import { FaLocationDot as LocationIcon } from "react-icons/fa6"
import { MdEmail as EmailIcon } from "react-icons/md"

import classes from "./page.module.css"
import portrait from "./profile.jpg"

const Cv: FC = () => {
  return (
    <div className={classes.cv}>
      <Image alt="portrait" className={classes.profilePhoto} src={portrait} />
      <div className={classes.summarySection}>
        <h1>Aleksandr Kiliushin</h1>
        <h2>Frontend developer (React)</h2>
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
            <EmailIcon size={20} />
            aleksandr.kiliushin@gmail.com
          </a>
          <a
            className={classes.contact}
            href="https://www.linkedin.com/in/aleksandr-kiliushin"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedinIcon size={20} />
            in/aleksandr-kiliushin
          </a>
          <a className={classes.contact} href="https://github.com/aleksandr-kiliushin" rel="noreferrer" target="_blank">
            <GithubIcon size={20} />
            github.com/aleksandr-kiliushin
          </a>
          <a className={classes.contact} href="https://t.me/aleksandr_kiliushin" rel="noreferrer" target="_blank">
            <TelegramIcon size={20} />
            t.me/aleksandr_kiliushin
          </a>
          <a
            className={classes.contact}
            href="https://www.google.com/maps/place/Batumi"
            rel="noreferrer"
            target="_blank"
          >
            <LocationIcon size={20} />
            Batumi, Georgia
          </a>
        </div>
        <section className={classes.skillsSection}>
          <h3>Skills</h3>
        </section>
        <section className={classes.educationSection}>
          <h3>Education</h3>
        </section>
      </div>
      <section className={classes.workExperienceSection}>
        <h2>Work experience</h2>
        <h3>Rambler&CO</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores praesentium asperiores, eos,
          consequuntur repudiandae vitae, autem aliquid non ratione doloribus et. Cupiditate vero sint impedit dolorum
          eligendi est deleniti? Fugit asperiores nobis ullam. Illo beatae similique delectus quis, nihil perferendis,
          sint rem qui accusamus dolores porro, ipsum suscipit maiores!
        </p>
        <h3>Danfoss</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores praesentium asperiores, eos,
          consequuntur repudiandae vitae, autem aliquid non ratione doloribus et. Cupiditate vero sint impedit dolorum
          eligendi est deleniti? Fugit asperiores nobis ullam. Illo beatae similique delectus quis, nihil perferendis,
          sint rem qui accusamus dolores porro, ipsum suscipit maiores!
        </p>
        <h3>Neuron</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores praesentium asperiores, eos,
          consequuntur repudiandae vitae, autem aliquid non ratione doloribus et. Cupiditate vero sint impedit dolorum
          eligendi est deleniti? Fugit asperiores nobis ullam. Illo beatae similique delectus quis, nihil perferendis,
          sint rem qui accusamus dolores porro, ipsum suscipit maiores!
        </p>
      </section>
    </div>
  )
}

export default Cv
