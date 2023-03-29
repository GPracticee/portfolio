import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data";
// import { GetServerSidePropsContext, GetStaticPropsContext } from "next";

const Index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        I have 2+ years of experience in Web Development and i am a MERN stack
        Developer. I completed my B.Tech in Computer Science Engineering from
        MDU university{" "}
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400" style={{marginLeft:"-1.5rem",marginRight:"-1.5rem"}}>
        <h5 className="my-3 text-xl font-bold tracking-wide">what i offer</h5>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div className="bg-gray-200 rounded-lg lg:cl-span-1">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
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
