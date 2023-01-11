import { motion } from 'framer-motion';
import { urlFor } from "@lib/sanity.client";
import { Project } from "../../typings";

type Props = {
  projects: Project[],
};

const Projects = ({ projects }: Props) => {
  return (
    <div
      className="h-screen flex flex-col relative overflow-hidden text-left
      md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
      scrollbar scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20">
        {projects.map((project, i) => (
          <motion.div
            key={project._id}
            className="h-screen w-screen flex flex-col flex-shrink-0 snap-center space-y-5 items-center
            justify-center p-20 md:p-44"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt={project?.title}
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i+1} of {projects.length} :
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map(technology => (
                  <img
                    key={technology?._id}
                    className="h-10 w-10 rounded-full"
                    src={urlFor(technology?.image).url()}
                    alt={technology?.title}
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left">{project?.summary}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}

export default Projects;
