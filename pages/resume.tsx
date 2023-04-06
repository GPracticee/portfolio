import Bar from "@/components/Bar";
import { languages, tools } from "@/data";

const Resume = () => {
  return (
    <div className="px-6 py-2 dark:bg-dark-200 ">
      {/* education & experience */}

      <div className="grid gap-6 md:grid-cols-2 dark:bg-dark-200 ">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">Academy of Technology (2017-2021)</p>
            <p className="my-3">
              {" "}
              I completed my B.Tech in Computer Science Engineering from MDU
              university
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Software Engineer</h5>
            <p className="font-semibold">Mobcoder (2023 - on)</p>
            <p className="my-3">
              I have 2+ years of experience in Web Development and i am a MERN
              stack Developer.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* language & tools */}

      <div className="grid gap-6 md:grid-cols-2 dark:bg-dark-200 ">
        <div>
          <h5 className="my-3 text-2xl font-bold"> Languages & Frameworks</h5>
          <div className="my-2 ">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div className="dark:bg-dark-200 ">
          <h5 className="my-3 text-2xl font-bold"> Tools & Software</h5>
          <div className="my-2 ">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
