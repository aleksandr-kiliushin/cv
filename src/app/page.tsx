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
          <li>Software Engineer with 4+ years of experience specializing in web and frontend development.</li>
          <li>
            Proficient in JavaScript and TypeScript, with expertise in building interactive web-based applications.
          </li>
          <li>
            Deep knowledge and versatile experience in building interactive web applications, using React and its
            ecosystem.
          </li>
          <li>
            Knowledgeable in various phases of the Software Development Life Cycle, including feature analysis,
            planning, development, refactoring, legacy code eliminating, and migrating to new technologies.
          </li>
          <li>
            Efficient and collaborative team player with strong problem solving skills, high attention to details,
            ability to connect with people on different levels within the organisation.
          </li>
          <li>
            Constantly looking for new knowledge and challenges to become more efficient developer and stronger team
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
              <span>|</span>
              <h4>Frontend developer</h4>
              <span>|</span>
              Apr 2021 – Now ({lastWorkExperienceDuration})
            </div>
            <p>
              Intranet is a large-scale project with over 10 years in production. For more than 2 years I implemented
              and enhanced a lot of features while dealing with a significant amount of legacy code. My contributions
              include optimizing build speed, establishing development standards, upgrading Node.js and over 60 NPM
              packages to latest and keeping up-to-date, conducting interviews and code reviews, facilitating
              onboarding, systematizing codebase migrations, and implementing complex elements like organization
              structure and form constructor. I diligently track codebase metrics and statistics to ensure the project's
              success.
            </p>
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
              <span>|</span>
              <h4>Frontend developer</h4>
              <span>|</span>
              Oct 2020 – Apr 2021 (7m)
            </div>
            <p>
              I played a crucial role in developing a tool that maximizes returns by leveraging assets from pooled
              funds. My contributions included collaborating with the UI/UX designer to create a seamless interface,
              refactoring the codebase for improved efficiency, adding new features, building numerous components and
              pages.
            </p>
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
              <span>|</span>
              <h4>Engineer</h4>
              <span>|</span>
              Aug 2019 – Oct 2020 (1y 3m)
            </div>
            <p>
              I implemented apps to automate engineering calculations, resulting in improved accuracy and saving ~20
              hours of the team's working time. The projects included an app for heat energy equipment, an app for
              generating calculation reports, and various automation scripts. The apps offered functionalities like
              graphical diagram display, equipment selection, e-mailing, and report downloads as .doc and .xls.
            </p>
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
          <h2>OTHER EXPERIENCE & OPENSOURCE</h2>
          <div className={classes.experience}>
            <div className={classes.experienceHeader}>
              <h3>Family Budget</h3>
              <span>|</span>
              <h4>Owner & Fullstack dev</h4>
              <span>|</span>
              Jul 2021 – Now ({lastWorkExperienceDuration})
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
              <span>|</span>
              <h4>Owner & Developer</h4>
              <span>|</span>
              2022
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
    </div>
  )
}

export default Cv
