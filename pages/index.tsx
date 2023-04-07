import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data";
import { motion } from "framer-motion";
import { fadeInUp,routeAnimation,stagger } from "@/animation";
import { GetServerSidePropsContext } from "next";

const Index = () => {
  // console.log(endpoint);
  
  return (
    <motion.div className="flex flex-col flex-grow px-6 pt-1 dark:bg-dark-200"
     variants={routeAnimation} initial="initial"
    animate="animate">
      <h5 className="my-3 font-medium">
        I have 2+ years of experience in Web Development and i am a MERN stack
        Developer. I completed my B.Tech in Computer Science Engineering from
        MDU university{" "}
      </h5>
      <div
        className="flex-grow p-4 mt-5 dark:bg-dark-200"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h5 className="my-3 text-xl font-bold tracking-wide">what i offer</h5>
        <motion.div 
          className="grid gap-6 lg:grid-cols-2 dark:bg-dark-200"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <>
              <motion.div
                variants={fadeInUp}
                className="bg-gray-200 rounded-lg lg:cl-span-1 dark:bg-dark-200"
                key={service.title}
              >
                <ServiceCard service={service} />
              </motion.div>
            </>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  // const data = await res.json();
  // console.log("server", services);
  return {props :{endpoint : process.env.VERCEL_URL}}

  // return {
  //   props: {
  //     services: data.services,
  //   },
  // };
};

// export const getStaticProps = async (
//   context: GetStaticPropsContext
// ) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();
//   console.log("server", services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
