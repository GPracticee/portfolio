import ProjectCard from "@/components/ProjectCard";
import ProjectNavbar from "@/components/ProjectNavbar";
import { projects } from "@/data";
import { Category } from "@/type";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "@/animation";

const Projects = () => {
  const [allProjects, setAllProjects] = useState(projects);
  const [active, setActive] = useState("all");
  const [showDetail, setShowDetail] = useState<number | null | undefined>();

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setAllProjects(projects);
      setActive(category);
      return;
    }
    const newArray = projects.filter((project) =>
      project.category.includes(category)
    );
    setAllProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div
      className="px-4 py-2 overflow-y-scroll"
      style={{ height: "65vh" }}
      variants={routeAnimation}
      initial="initial"
      animate="animate"
    >
      <ProjectNavbar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {allProjects.map((project) => (
          <>
            <motion.div
              variants={fadeInUp}
              className="col-span-12 p-2 bg-gray-200 rounded sm:col-span-6 lg:col-span-4 dark:bg-dark-200 "
              key={project.name}
            >
              <ProjectCard
                project={project}
                showDetail={showDetail}
                setShowDetail={setShowDetail}
              />
            </motion.div>
          </>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
