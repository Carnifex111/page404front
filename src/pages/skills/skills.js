import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import {
  EffectCreative,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import "./skills.scss";
import UnityIcon from "../../resources/icon/unity.svg";
import ReactIcon from "../../resources/icon/react.svg";
import NestIcon from "../../resources/icon/nestjs.svg";
import NoCodeIcon from "../../resources/icon/nocode.svg";
import DesktopApp from "../../resources/icon/desktop-application-app-icon.svg";
import Slide from "../../components/slide/slide";

const SkillsPage = () => {
  return (
    <div className="skills">
      <div className="skills-title">What do we use in development?</div>
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide img={ReactIcon} title="Frontend Development">
            <li>
              <strong>React:</strong> A JavaScript library for building user
              interfaces efficiently.
            </li>
            <li>
              <strong>Next.js:</strong> A React framework for server-rendered
              applications and static site generation.
            </li>
            <li>
              <strong>TypeScript/JavaScript: </strong> Our primary languages for
              front-end development.
            </li>
            <li>
              <strong>Effector:</strong> A state manager for building complex
              and reactive user interfaces.
            </li>
            <li>
              <strong>Redux:</strong> A predictable state container for
              JavaScript apps.
            </li>

            <li>
              <strong>SCSS:</strong> A pre-processor that extends CSS, allowing
              for variables, nested rules, and more.
            </li>
            <li>
              <strong>GIT:</strong> Version control and team collaboration.
            </li>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide img={NestIcon} title="Backend Development">
            <li>
              <strong>NestJS:</strong> A progressive Node.js framework for
              building scalable server-side applications.
            </li>
            <li>
              <strong>TypeScript:</strong> The primary language for our back-end
              development, used in conjunction with NestJS.
            </li>
            <li>
              <strong>Prisma:</strong> A next-generation ORM for Node.js and
              TypeScript.
            </li>
            <li>
              <strong>Sequelize: </strong> A multi-dialect ORM for Node.js;
              supports PostgreSQL, MySQL, SQLite, and MSSQL.
            </li>
            <li>
              <strong>PostgreSQL:</strong> An open-source relational database
              with a focus on extensibility and SQL compliance.
            </li>
            <li>
              <strong>MySQL: </strong> A reliable, open-source relational
              database system.
            </li>
            <li>
              <strong>MongoDB: </strong> A NoSQL database for modern apps
              requiring scalability and flexibility.
            </li>
            <li>
              <strong>GIT:</strong>Version control and team collaboration.
            </li>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide img={UnityIcon} title="Game Development">
            <li>
              <strong>Unity Engine:</strong> Core platform for 2D, 3D, AR & VR
              game development.
            </li>
            <li>
              <strong>C#:</strong> Main programming language for Unity-based
              projects.
            </li>
            <li>
              <strong>Shader Graph:</strong> For advanced graphical effects and
              custom shaders.
            </li>
            <li>
              <strong>Photon Engine:</strong> For multiplayer functionality and
              real-time networking.
            </li>
            <li>
              <strong>Firebase: </strong> For analytics, user authentication and
              database management.
            </li>
            <li>
              <strong>Blender / Maya: </strong> For 3D modeling and animation.
            </li>
            <li>
              <strong>Adobe Suite: </strong> For 2D art, textures, and UI/UX
              design.
            </li>
            <li>
              <strong>GIT: </strong> Version control and team collaboration.
            </li>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide img={NoCodeIcon} title="No-Code Development">
            <li>
              <strong>Wix:</strong> Cloud-based platform for quick website and
              mobile site creation.
            </li>
            <li>
              <strong>Tilda:</strong> Design-centric tool for building visually
              striking, code-free websites.
            </li>
            <li>
              <strong>Airtable:</strong> Spreadsheet-database hybrid for easy
              data management.
            </li>
            <li>
              <strong>Integromat (Make):</strong> Automation platform connecting
              apps and services without code.
            </li>
            <li>
              <strong>Zapier:</strong> Tool for automating tasks across various
              apps without coding.
            </li>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide img={DesktopApp} title="Desktop App Development">
            <li>
              <strong>C#:</strong> Our primary programming language for building
              robust and scalable desktop applications.
            </li>
            <li>
              <strong>WPF: </strong> Windows Presentation Foundation for
              creating rich UI experiences.
            </li>
            <li>
              <strong>Windows Forms:</strong> Utilized for simpler UI needs and
              rapid application development.
            </li>
            <li>
              <strong>MySQL:</strong> Our go-to database for storing and
              managing application data.
            </li>
            <li>
              <strong>phpMyAdmin:</strong> Web-based tool used for convenient
              MySQL database management.
            </li>
          </Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SkillsPage;
