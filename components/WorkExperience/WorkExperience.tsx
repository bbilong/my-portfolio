import { motion } from 'framer-motion';
import { Experience } from '../../typings';
import ExperienceCard from './ExperienceCard/ExperienceCard';

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex flex-col relative overflow-hidden text-left
      md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Experience
      </h3>

      <div
        className="flex w-full mt-28 space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
      scrollbar scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20"
      >
        {experiences.map(experience => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
