import Image from "next/image"
import { FC } from "react"
import {
  BiLogoDjango as DjangoIcon,
  BiLogoNodejs as NodeJsIcon,
  BiLogoPython as PythonIcon,
  BiLogoReact as ReactIcon,
  BiLogoRedux as ReduxIcon,
  BiLogoTypescript as TypeScriptIcon,
} from "react-icons/bi"
import {
  BsGithub as GithubIcon,
  BsLinkedin as LinkedinIcon,
  BsPerson as PersonIcon,
  BsTelegram as TelegramIcon,
} from "react-icons/bs"
import { FaGitAlt as GitIcon, FaUniversity as UniversityIcon } from "react-icons/fa"
import { FaLocationDot as LocationIcon } from "react-icons/fa6"
import { GoOrganization as OrganizationIcon } from "react-icons/go"
import { GrGraphQl as GraphQlIcon } from "react-icons/gr"
import { IoIosFlask as FlaskIcon } from "react-icons/io"
import { LiaEthereum as EthereumIcon } from "react-icons/lia"
import { MdEmail as EmailIcon } from "react-icons/md"
import { RiJavascriptFill as JavaScriptIcon } from "react-icons/ri"
import { RxCalendar as CalendarIcon } from "react-icons/rx"
import {
  SiAntdesign as AntDesignIcon,
  SiJest as JestIcon,
  SiMui as MaterialUiIcon,
  SiPostgresql as PostgresIcon,
  SiStyledcomponents as StyledComponentsIcon,
  SiWebpack as WebpackIcon,
} from "react-icons/si"
import { TbBrandCypress as CypressIcon } from "react-icons/tb"

import classes from "./page.module.css"
import portrait from "./profile.jpg"

const STARTING_WORKING_DATE_IN_RAMBLER = new Date(2021, 3)
const currentDate = new Date()
const monthsAtCurrentJob = Math.ceil(
  (Number(currentDate) - Number(STARTING_WORKING_DATE_IN_RAMBLER)) / (1000 * 60 * 60 * 24 * 30)
)
const yearsAtCurrentJob = Math.floor(monthsAtCurrentJob / 12)
let lastWorkExperienceDuration = ""
if (yearsAtCurrentJob !== 0) {
  lastWorkExperienceDuration += `${yearsAtCurrentJob}y `
}
const _monthsAtCurrentJob = monthsAtCurrentJob % 12
if (_monthsAtCurrentJob !== 0) {
  lastWorkExperienceDuration += `${_monthsAtCurrentJob}m`
}

const Cv: FC = () => {
  return (
    <div className={classes.cv}>
      <Image alt="portrait" className={classes.profilePhoto} src={portrait} />
      <div className={classes.summarySection}>
        <h1>Aleksandr Kiliushin</h1>
        <h2>Frontend Developer (React)</h2>
        <ul>
          <li>Software Engineer with 4+ years of experience specializing in web and frontend development.</li>
          <li>
            Proficient in JavaScript and TypeScript, with expertise in building interactive web-based applications.
          </li>
          <li>
            Experienced in working on projects such as a big company intranet, a budget web app and online calculators.
          </li>
          <li>
            Knowledgeable in various phases of the Software Development Life Cycle, including feature analysis,
            planning, development, refactoring, legacy code eliminating, and migrating to new technologies.
          </li>
          <li>
            Able to connect with individuals at different levels within the organization, promoting efficient teamwork.
          </li>
          <li>Collaborative team player with a focus on flexibility and active participation in product evolution.</li>
          <li>
            Constantly looking for new knowledge and challenges to become more efficient developer and stronger team
            player.
          </li>
        </ul>
      </div>
      <div className={classes.sidePanel}>
        <div className={classes.sidePanelSection}>
          <a
            className={classes.iconWithText}
            href="mailto:aleksandr.kiliushin@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <EmailIcon />
            aleksandr.kiliushin@gmail.com
          </a>
          <a
            className={classes.iconWithText}
            href="https://www.linkedin.com/in/aleksandr-kiliushin"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedinIcon />
            in/aleksandr-kiliushin
          </a>
          <a
            className={classes.iconWithText}
            href="https://github.com/aleksandr-kiliushin"
            rel="noreferrer"
            target="_blank"
          >
            <GithubIcon />
            github.com/aleksandr-kiliushin
          </a>
          <a className={classes.iconWithText} href="https://t.me/aleksandr_kiliushin" rel="noreferrer" target="_blank">
            <TelegramIcon />
            t.me/aleksandr_kiliushin
          </a>
          <a
            className={classes.iconWithText}
            href="https://www.google.com/maps/place/Batumi"
            rel="noreferrer"
            target="_blank"
          >
            <LocationIcon />
            Batumi, Georgia
          </a>
        </div>
        <section className={classes.sidePanelSection}>
          <h3>EDUCATION</h3>
          <p className={classes.iconWithText}>
            <UniversityIcon />
            <span>
              <b>Master</b>’s Degree in Industrial Heat Power Engineering – Moscow State Power Institute (Russia,
              2018-2020)
            </span>
          </p>
          <p className={classes.iconWithText}>
            <UniversityIcon />
            <span>
              <b>Bachelor</b>’s Degree in Industrial Heat Power Engineering – Ivanovo State Power University (Russia,
              2014-2018)
            </span>
          </p>
        </section>
        <section className={classes.sidePanelSection}>
          <h3>LANGUAGES</h3>
          <p className={classes.iconWithText}>
            <span className={classes.twoCharactersBox}>EN</span>
            English – B2
          </p>
          <p className={classes.iconWithText}>
            <span className={classes.twoCharactersBox}>RU</span>
            Russian – Native
          </p>
        </section>
      </div>
      <section className={classes.workExperienceSection}>
        <h2>WORK EXPERIENCE</h2>
        <div className={classes.workExperience}>
          <span className={classes.iconWithText}>
            <OrganizationIcon />
            <h3>Rambler&CO</h3>
          </span>
          <div className={classes.workExperiencePositionRow}>
            <span className={classes.iconWithText}>
              <PersonIcon />
              <h4>Frontend developer</h4>
            </span>
            <span className={classes.iconWithText}>
              <CalendarIcon />
              Apr 2021 – Now ({lastWorkExperienceDuration})
            </span>
          </div>
          <p>I develop interfaces for the company employees:</p>
          <ul>
            <li>New features development for a large project that has existed since 2015.</li>
            <li>Interaction with the backend team and other related development teams.</li>
            <li>Refactoring of existing modules, code base optimisation.</li>
            <li>Migration from jQuery and Backbone.js to TypeScript and React.</li>
            <li>Creating plugins for a Rich Text Editor.</li>
            <li>Web analytics configuration.</li>
          </ul>
          <div className={classes.workExperienceSkills}>
            <p className={classes.iconWithText__small}>
              <TypeScriptIcon />
              TypeScript
            </p>
            <p className={classes.iconWithText__small}>
              <WebpackIcon />
              Webpack
            </p>
            <p className={classes.iconWithText__small}>
              <ReactIcon />
              React
            </p>
            <p className={classes.iconWithText__small}>
              <ReduxIcon />
              Redux
            </p>
            <p className={classes.iconWithText__small}>
              <AntDesignIcon />
              AntDesign
            </p>
            <p className={classes.iconWithText__small}>
              <JestIcon />
              Jest
            </p>
            <p className={classes.iconWithText__small}>
              <CypressIcon />
              Cypress
            </p>
          </div>
        </div>
        <div className={classes.workExperience}>
          <span className={classes.iconWithText}>
            <OrganizationIcon />
            <h3>Neuron</h3>
          </span>
          <div className={classes.workExperiencePositionRow}>
            <span className={classes.iconWithText}>
              <PersonIcon />
              <h4>Frontend developer</h4>
            </span>
            <span className={classes.iconWithText}>
              <CalendarIcon />
              Oct 2020 – Apr 2021 (6m)
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores praesentium asperiores, eos,
            consequuntur repudiandae vitae, autem aliquid non ratione doloribus et. Cupiditate vero sint impedit dolorum
            eligendi est deleniti? Fugit asperiores nobis ullam. Illo beatae similique delectus quis, nihil perferendis,
            sint rem qui accusamus dolores porro, ipsum suscipit maiores!
          </p>
          <div className={classes.workExperienceSkills}>
            <p className={classes.iconWithText__small}>
              <TypeScriptIcon />
              TypeScript
            </p>
            <p className={classes.iconWithText__small}>
              <ReactIcon />
              React
            </p>
            <p className={classes.iconWithText__small}>
              <StyledComponentsIcon />
              Styled components
            </p>
            <p className={classes.iconWithText__small}>
              <MaterialUiIcon />
              MaterialUI
            </p>
            <p className={classes.iconWithText__small}>
              <EthereumIcon />
              Web3
            </p>
          </div>
        </div>
        <div className={classes.workExperience}>
          <span className={classes.iconWithText}>
            <OrganizationIcon />
            <h3>Danfoss</h3>
          </span>
          <div className={classes.workExperiencePositionRow}>
            <span className={classes.iconWithText}>
              <PersonIcon />
              <h4>Engineer</h4>
            </span>
            <span className={classes.iconWithText}>
              <CalendarIcon />
              Aug 2019 – Oct 2020 (1y 3m)
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores praesentium asperiores, eos,
            consequuntur repudiandae vitae, autem aliquid non ratione doloribus et. Cupiditate vero sint impedit dolorum
            eligendi est deleniti? Fugit asperiores nobis ullam. Illo beatae similique delectus quis, nihil perferendis,
            sint rem qui accusamus dolores porro, ipsum suscipit maiores!
          </p>
          <div className={classes.workExperienceSkills}>
            <p className={classes.iconWithText__small}>
              <TypeScriptIcon />
              TypeScript
            </p>
            <p className={classes.iconWithText__small}>
              <PythonIcon />
              Python
            </p>
            <p className={classes.iconWithText__small}>
              <ReactIcon />
              React
            </p>
            <p className={classes.iconWithText__small}>
              <DjangoIcon />
              Django
            </p>
            <p className={classes.iconWithText__small}>
              <ReduxIcon />
              Redux
            </p>
            <p className={classes.iconWithText__small}>
              <PostgresIcon />
              PostgreSQL
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cv

/*
<section className={classes.sidePanelSection}>
  <h3>SKILLS</h3>
  <p className={classes.iconWithText}>
    <JavaScriptIcon  />
    JavaScript
  </p>
  <p className={classes.iconWithText}>
    <TypeScriptIcon  />
    TypeScript
  </p>
  <p className={classes.iconWithText}>
    <ReactIcon  />
    React
  </p>
  <p className={classes.iconWithText}>
    <WebpackIcon  />
    Webpack
  </p>
  <p className={classes.iconWithText}>
    <GraphQlIcon  />
    GraphQL
  </p>
  <p className={classes.iconWithText}>
    <NodeJsIcon  />
    Node.js
  </p>
  <p className={classes.iconWithText}>
    <FlaskIcon  />
    Jest, Cypress
  </p>
  <p className={classes.iconWithText}>
    <GitIcon  />
    Git
  </p>
</section>
*/
