import {RiComputerLine} from 'react-icons/ri'
import { IService } from './type';
import {FaServer} from 'react-icons/fa'
import {AiOutlineApi,AiOutlineAntDesign} from "react-icons/ai"


export const services:IService[] = [
    {
        title:"Frontend Development",
        about:"I can build a beautiful and scalable SPA using <b> HTML </b>,<b> CSS </b> and <b> React.js </b>,  ",
        Icon:RiComputerLine
    },
    {
        title:"Backend Developer",
        about:"handle database ,server , api using <b> Express </b> & other popular frameworks",
        Icon:FaServer
    },
    {
        title:"API Developer",
        about:"I can develop Rest Api using <b> Express </b> & <b>Node </b> ",
        Icon:AiOutlineApi
    },
    {
        title:"UI/UX designer",
        about:"stunning user interface designer using <b>Figma</b> & <b>Framer</b>",
        Icon:AiOutlineAntDesign
    },
    {
        title:"Whatever",
        about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        Icon:RiComputerLine
    },
];
