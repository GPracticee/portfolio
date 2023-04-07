import { RiComputerLine } from "react-icons/ri";
import { IProject, IService, ISkill } from "./type";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi, AiOutlineAntDesign } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML </b>,<b> CSS </b> and <b> React.js </b>,  ",
    Icon: RiComputerLine,
  },
  {
    title: "Backend Developer",
    about:
      "handle database ,server , api using <b> Express </b> & other popular frameworks",
    Icon: FaServer,
  },
  {
    title: "API Developer",
    about: "I can develop Rest Api using <b> Express </b> & <b>Node </b> ",
    Icon: AiOutlineApi,
  },
  {
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b> & <b>Framer</b>",
    Icon: AiOutlineAntDesign,
  },
  {
    title: "Whatever",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    Icon: RiComputerLine,
  },
];

export const languages: ISkill[] = [
  {
    name: "Java Script",
    level: "75%",
    Icon: BsCircleFill,
  },
  {
    name: "React js",
    level: "75%",
    Icon: BsCircleFill,
  },
  {
    name: "Bootstrap",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Nodejs",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "TypeScript",
    level: "45%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  // {
  //     name:"Figma",
  //     level:"50%",
  //     Icon:BsCircleFill
  // },
  {
    name: "Git",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "Docker",
    level: "40%",
    Icon: BsCircleFill,
  },
  {
    name: "AWS",
    level: "40%",
    Icon: BsCircleFill,
  },
  {
    name: "Mongo Db",
    level: "65%",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    id:1,
    name: "Movie Clone",
    description: "this is a movie app",
    image_path: "/images/hero.jpg",
    deployed_url: "https://movie-clone-app-phi.vercel.app/",
    github_url: "https://github.com/GPracticee/movie_clone",
    category: ["next", "mongo", "node"],
    key_techs: ["React", "Next", "Tailwind css", "Type Script"],
  },
  {
    id:2,
    name: "Notes",
    description: "this is a notes taking app",
    image_path: "/images/notes.png",
    deployed_url: "https://todo-gules-delta.vercel.app/",
    github_url: "https://github.com/GPracticee/todo",
    category: ["react"],
    key_techs: ["React", "Type Script"],
  },
  {
    id:3,
    name: "Portfolio",
    description: "this is a portfolio app",
    image_path: "/images/portfolio.png",
    deployed_url: "https://todo-gules-delta.vercel.app/",
    github_url: "https://github.com/GPracticee/portfolio",
    category: ["next"],
    key_techs: ["Next", "Type Script"],
  },
];
