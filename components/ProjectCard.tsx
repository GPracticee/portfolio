import { IProject } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import {MdClose} from "react-icons/md"

const ProjectCard: FunctionComponent<{ project: IProject }> = ({
  project: {
    name,
    image_path,
    deployed_url,
    description,
    category,
    github_url,
    key_techs,
  },
}) => {

  const [showDetail,setShowDetail] = useState(false)

  return (
    <>
      <div>
        <Image
          width={400}
          height={400}
          src={image_path}
          alt={name}
          className="cursor-pointer"
          onClick={()=>setShowDetail(true)}
        />
        <p className="my-2 text-center">{name}</p>

        {
          showDetail && (

        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <div >
            <Image width={400} height={400} src={image_path} alt={name} />
            <div className="flex justify-center m-4 space-x-3">
              <Link className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200" href={github_url}>
                <AiFillGithub />
                Github
              </Link>
              <Link className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200" href={deployed_url}>
                <AiFillProject />
                Project
              </Link>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <>
                  <span className="px-2 py-1 my-1 bg-gray-200 rounded dark:bg-dark-200" key={tech}>{tech}</span>
                </>
              ))}
            </div>
          </div>

          <button onClick={()=>setShowDetail(false)} className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200">
            <MdClose size={30} />
          </button>
        </div>
         )
        }
      </div>
    </>
  );
};

export default ProjectCard;