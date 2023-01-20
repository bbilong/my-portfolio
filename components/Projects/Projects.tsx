import { Project as ProjectType } from '../../typings';
import Project from './Project/Project';

type Props = {
  projects: ProjectType[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div
      className="h-screen flex flex-col relative overflow-hidden text-left
      md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
      scrollbar scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20"
      >
        {projects.map((project, index) => (
          <Project
            key={project._id}
            index={index}
            project={project}
            projectLength={projects.length}
          />
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Projects;
