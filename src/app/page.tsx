import Image from "next/image"
import { FC } from "react"
import {
  BiLogoNodejs as NodeJsIcon,
  BiLogoReact as ReactIcon,
  BiLogoTypescript as TypeScriptIcon,
} from "react-icons/bi"
import { BsGithub as GithubIcon, BsLinkedin as LinkedinIcon, BsTelegram as TelegramIcon } from "react-icons/bs"
import { FaGitAlt as GitIcon, FaUniversity as UniversityIcon } from "react-icons/fa"
import { FaLocationDot as LocationIcon } from "react-icons/fa6"
import { IoIosFlask as FlaskIcon } from "react-icons/io"
import { MdEmail as EmailIcon } from "react-icons/md"
import { RiJavascriptFill as JavaScriptIcon } from "react-icons/ri"
import { SiWebpack as WebpackIcon } from "react-icons/si"

import classes from "./page.module.css"
import portrait from "./profile.jpg"

const Cv: FC = () => {
  return (
    <div className={classes.cv}>
      <Image alt="portrait" className={classes.profilePhoto} src={portrait} />
      <div className={classes.summarySection}>
        <h1>Aleksandr Kiliushin</h1>
        <h2>Frontend developer (React)</h2>
        <p>Set up deploy manually</p>
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
      <div className={classes.sidePanel}>
        <div className={classes.sidePanelSection}>
          <a
            className={classes.sidePanelSectionItem}
            href="mailto:aleksandr.kiliushin@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <EmailIcon size={20} />
            aleksandr.kiliushin@gmail.com
          </a>
          <a
            className={classes.sidePanelSectionItem}
            href="https://www.linkedin.com/in/aleksandr-kiliushin"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedinIcon size={20} />
            in/aleksandr-kiliushin
          </a>
          <a
            className={classes.sidePanelSectionItem}
            href="https://github.com/aleksandr-kiliushin"
            rel="noreferrer"
            target="_blank"
          >
            <GithubIcon size={20} />
            github.com/aleksandr-kiliushin
          </a>
          <a
            className={classes.sidePanelSectionItem}
            href="https://t.me/aleksandr_kiliushin"
            rel="noreferrer"
            target="_blank"
          >
            <TelegramIcon size={20} />
            t.me/aleksandr_kiliushin
          </a>
          <a
            className={classes.sidePanelSectionItem}
            href="https://www.google.com/maps/place/Batumi"
            rel="noreferrer"
            target="_blank"
          >
            <LocationIcon size={20} />
            Batumi, Georgia
          </a>
        </div>
        <section className={classes.sidePanelSection}>
          <h3>SKILLS</h3>
          <p className={classes.sidePanelSectionItem}>
            <JavaScriptIcon size={20} />
            JavaScript
          </p>
          <p className={classes.sidePanelSectionItem}>
            <TypeScriptIcon size={20} />
            TypeScript
          </p>
          <p className={classes.sidePanelSectionItem}>
            <ReactIcon size={20} />
            React.js
          </p>
          <p className={classes.sidePanelSectionItem}>
            <WebpackIcon size={20} />
            Webpack
          </p>
          <p className={classes.sidePanelSectionItem}>
            <NodeJsIcon size={20} />
            Node.js
          </p>
          <p className={classes.sidePanelSectionItem}>
            <FlaskIcon size={20} />
            Jest, Cypress
          </p>
          <p className={classes.sidePanelSectionItem}>
            <GitIcon size={20} />
            Git
          </p>
        </section>
        <section className={classes.sidePanelSection}>
          <h3>EDUCATION</h3>
          <p className={classes.sidePanelSectionItem}>
            <UniversityIcon size={20} />
            <span>
              <b>Master</b>’s Degree in Industrial Heat Power Engineering – Moscow State Power Institute (Russia,
              2018-2020)
            </span>
          </p>
          <p className={classes.sidePanelSectionItem}>
            <UniversityIcon size={20} />
            <span>
              <b>Bachelor</b>’s Degree in Industrial Heat Power Engineering – Ivanovo State Power University (Russia,
              2014-2018)
            </span>
          </p>
        </section>
        <section className={classes.sidePanelSection}>
          <h3>LANGUAGES</h3>
          <p className={classes.sidePanelSectionItem}>
            <span className={classes.twoCharactersBox}>EN</span>
            English – B2
          </p>
          <p className={classes.sidePanelSectionItem}>
            <span className={classes.twoCharactersBox}>RU</span>
            Russian – Native
          </p>
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
