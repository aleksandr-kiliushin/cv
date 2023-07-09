"use client"

import Image from "next/image"
import { FC } from "react"
import {
  BiLogoDjango as DjangoIcon,
  BiLogoDocker as DockerIcon,
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
  BsPrinter as PrinterIcon,
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
  SiNestjs as NestJsIcon,
  SiPostgresql as PostgresIcon,
  SiPwa as PwaIcon,
  SiStyledcomponents as StyledComponentsIcon,
  SiWebpack as WebpackIcon,
} from "react-icons/si"
import { TbBrandCypress as CypressIcon, TbBrandNextjs as NextJsIcon } from "react-icons/tb"

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
      <section className={classes.nameAndPostSection}>
        <h1>Aleksandr Kiliushin</h1>
        <h2>Frontend Developer (React)</h2>
      </section>
      <section className={classes.summarySection}>
        <ul>
          <li>Software Engineer with 4+ years of experience in frontend development.</li>
          <li>Proficient in JavaScript, with expertise in building interactive web applications.</li>
          <li>
            Deep knowledge and versatile experience in building interactive web applications, using React and its
            ecosystem.
          </li>
          <li>
            Knowledgeable in various phases of the Software Development Life Cycle, including feature analysis,
            planning, development, refactoring, legacy code eliminating, and migrating to new technologies.
          </li>
          <li>Product-oriented engineer collaborative with business and seeking for results.</li>
          <li>
            Constantly looking for new knowledge and challenges to become a more efficient developer and a stronger team
            player.
          </li>
        </ul>
      </section>
      <div className={classes.sidePanel}>
        <section className={classes.sidePanelSection}>
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
        </section>
        <section className={classes.sidePanelSection}>
          <h3>SKILLS</h3>
          <ul>
            <li>UI development</li>
            <li>CI / CD</li>
            <li>Automated testing</li>
            <li>Codebase optimisation</li>
            <li>Development from scratch</li>
            <li>Breathing life into legacy code</li>
            <li>Code review</li>
            <li>Onboarding & mentoring</li>
          </ul>
        </section>
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
      <section className={classes.experienceSection}>
        <div className={classes.experienceSubsection}>
          <h2>WORK EXPERIENCE</h2>
          <div className={classes.experience}>
            <div className={classes.experienceHeader}>
              <h3>Rambler&CO</h3>
              <h4>Frontend developer</h4>
              <span>Apr 2021 – Now ({lastWorkExperienceDuration})</span>
            </div>
            <p>I've been working at a large-scale intranet project with 10+ years in production.</p>
            <ul>
              <li>I implemented many new features and eliminated loads of legacy code.</li>
              <li>
                Optimised build speed, established development standards, upgraded Node.js and the whole lot of NPM
                packages and keep them up-to-date.
              </li>
              <li>
                Systematised codebase migrations and implemented complex elements, e.g. an organizational structure tree
                and a form constructor.
              </li>
              <li>Conducted technical interviews and facilitated onboarding process.</li>
              <li>I've been constistently tracking codebase metrics and statistics to ensure the project's health.</li>
            </ul>
            <div className={classes.experienceSkills}>
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
          <div className={classes.experience}>
            <div className={classes.experienceHeader}>
              <h3>Neuron</h3>
              <h4>Frontend developer</h4>
              <span>Oct 2020 – Apr 2021 (7m)</span>
            </div>
            <p>Neuron is a financial startup for crypto funds leveraging.</p>
            <ul>
              <li>
                I played a crucial role in development of a tool that maximized returns by leveraging assets from pooled
                funds.
              </li>
              <li>
                Provided major refactoring of this startup project, ensured code base sustainability and speeded up
                development process by that.
              </li>
              <li>Productevely collaborated with the product designer to create a seamless UI.</li>
            </ul>
            <div className={classes.experienceSkills}>
              <p className={classes.iconWithText__small}>
                <TypeScriptIcon />
                TypeScript
              </p>
              <p className={classes.iconWithText__small}>
                <ReactIcon />
                React
              </p>
              <p className={classes.iconWithText__small}>
                <NextJsIcon />
                Next.js
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
          <div className={classes.experience}>
            <div className={classes.experienceHeader}>
              <h3>Danfoss</h3>
              <h4>Engineer</h4>
              <span>Aug 2019 – Oct 2020 (1y 3m)</span>
            </div>
            <p>Danfoss is an international corporation producing industrial equipment.</p>
            <ul>
              <li>I implemented an app for heat energy equipment selection.</li>
              <li>Developend an app for generating calculation reports.</li>
              <li>Provided various automation scripts for the engineering team.</li>
              <li>
                The apps included graphical diagram displaying, equipment selection, e-mailing, and reports downloading.
              </li>
              <li>All these resulted in improved accuracy and saved ~20 man-hours weekly.</li>
            </ul>
            <div className={classes.experienceSkills}>
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
        </div>
        <div className={classes.experienceSubsection}>
          <h2>OTHER EXPERIENCE</h2>
          <div className={classes.experience}>
            <div className={classes.experienceHeader}>
              <h3>Family Budget</h3>
              <h4>Owner & Fullstack dev</h4>
              <span>Jul 2021 – Now ({lastWorkExperienceDuration})</span>
            </div>
            <p>
              Family Budget is an open-source budget tracking application that allows users to manage their incomes and
              expenses, track their budget, and analyze their financial statistics.{" "}
              <u>
                <a href="https://your-personal.netlify.app">The application</a>
              </u>
              {" | "}
              <u>
                <a href="https://github.com/aleksandr-kiliushin/personal-app-server">Backend source code</a>
              </u>
              {" | "}
              <u>
                <a href="https://github.com/aleksandr-kiliushin/personal-app-frontend">Frontend source code</a>
              </u>
              .
            </p>
            <div className={classes.experienceSkills}>
              <p className={classes.iconWithText__small}>
                <GraphQlIcon />
                GraphQL
              </p>
              <p className={classes.iconWithText__small}>
                <NodeJsIcon />
                Node.js
              </p>
              <p className={classes.iconWithText__small}>
                <NestJsIcon />
                Nest.js
              </p>
              <p className={classes.iconWithText__small}>
                <DockerIcon />
                Docker
              </p>
              <p className={classes.iconWithText__small}>
                <ReactIcon />
                React
              </p>
              <p className={classes.iconWithText__small}>
                <PwaIcon />
                PWA
              </p>
              <p className={classes.iconWithText__small}>
                <CypressIcon />
                Cypress
              </p>
            </div>
          </div>
          <div className={classes.experience}>
            <div className={classes.experienceHeader}>
              <h3>Database Visualizer</h3>
              <h4>Owner & Developer</h4>
              <span>2022</span>
            </div>
            <p>
              A tool that helps visualize particular DB records and their relations.{" "}
              <u>
                <a href="https://github.com/aleksandr-kiliushin/db-visualizer">Source code</a>
              </u>
              .
            </p>
            <div className={classes.experienceSkills}>
              <p className={classes.iconWithText__small}>
                <NodeJsIcon />
                Node.js
              </p>
              <p className={classes.iconWithText__small}>
                <PostgresIcon />
                PostgreSQL
              </p>
              <p className={classes.iconWithText__small}>
                <TypeScriptIcon />
                TypeScript
              </p>
              <p className={classes.iconWithText__small}>
                <JestIcon />
                Jest
              </p>
            </div>
          </div>
          <div className={classes.experience}>
            <div className={classes.experienceHeader}>
              <h3>Other</h3>
            </div>
            <p>
              I do my best to contribute to community-important projects like Webpack, Redux, Meta repos, web.dev, and
              different docs websites.
            </p>
          </div>
        </div>
      </section>
      <button
        className={classes.printButton}
        onClick={() => {
          globalThis.print()
        }}
      >
        <PrinterIcon size={20} />
      </button>
    </div>
  )
}

export default Cv
