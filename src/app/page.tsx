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
import { GrGraphQl as GraphQlIcon } from "react-icons/gr"
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
        <h2>Frontend Developer (React)</h2>
        <ul>
          <li>Software Engineer with 3 years of experience specializing in web and frontend development.</li>
          <li>
            Proficient in JavaScript and TypeScript, with expertise in building interactive web-based applications.
          </li>
          <li>
            Experienced in working on projects such as a big company intranet, a budget web app and online calculators.
          </li>
          <li>
            Knowledgeable in various phases of the Software Development Life Cycle, including feature analysis,
            planning, development, legacy code refactoring, and migrating to new technologies.
          </li>
          <li>
            Able to connect with individuals at different levels within the organization, promoting efficient teamwork.
          </li>
          <li>Collaborative team player with a focus on flexibility and active participation in product evolution.</li>
        </ul>
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
            <GraphQlIcon size={20} />
            GraphQL
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
        <h2>WORK EXPERIENCE</h2>
        <div>
          <h3>Rambler&CO</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores praesentium asperiores, eos,
            consequuntur repudiandae vitae, autem aliquid non ratione doloribus et. Cupiditate vero sint impedit dolorum
            eligendi est deleniti? Fugit asperiores nobis ullam. Illo beatae similique delectus quis, nihil perferendis,
            sint rem qui accusamus dolores porro, ipsum suscipit maiores!
          </p>
        </div>
        <div>
          <h3>Danfoss</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores praesentium asperiores, eos,
            consequuntur repudiandae vitae, autem aliquid non ratione doloribus et. Cupiditate vero sint impedit dolorum
            eligendi est deleniti? Fugit asperiores nobis ullam. Illo beatae similique delectus quis, nihil perferendis,
            sint rem qui accusamus dolores porro, ipsum suscipit maiores!
          </p>
        </div>
      </section>
    </div>
  )
}

export default Cv
