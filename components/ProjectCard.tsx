import { IProject } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/animation";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: number | null | undefined;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    name,
    image_path,
    deployed_url,
    description,
    category,
    github_url,
    key_techs,
    id
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <>
      <div>
        <Image
          width="300"
          height="150"
          src={image_path}
          alt={name}
          className="cursor-pointer"
          onClick={() => setShowDetail(id)}
        />
        <p className="my-2 text-center">{name}</p>

        {showDetail === id && (
          <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-10 bg-gray-100 rounded-lg md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
            <motion.div variants={stagger} initial="initial" animate="animate">
              <motion.div variants={fadeInUp} className="border-2 border-gray-100">
                <Image width={400} height={400} src={image_path} alt={name} />
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex justify-center m-4 space-x-3"
              >
                <Link
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                  href={github_url}
                >
                  <AiFillGithub />
                  Github
                </Link>
                <Link
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                  href={deployed_url}
                >
                  <AiFillProject />
                  Project
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={stagger} initial="initial" animate="animate">
              <motion.h2
                variants={fadeInUp}
                className="mb-3 text-xl font-medium md:text-2xl"
              >
                {name}
              </motion.h2>
              <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
                {description}
              </motion.h3>
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
              >
                <motion.div variants={fadeInUp}>
                  {key_techs.map((tech) => (
                    <>
                      <span
                        className="px-2 py-1 my-1 bg-gray-200 rounded dark:bg-dark-200"
                        key={tech}
                      >
                        {tech}
                      </span>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            <button
              onClick={() => setShowDetail(null)}
              className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
            >
              <MdClose size={30} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectCard;
