import { motion } from 'framer-motion';
import { Skill as SkillType } from '../../typings';
import Skill from './Skill/Skill';

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="min-h-screen flex flex-col relative text-center max-w-[2000px]
      md:text-left xl:flex-row xl:px-10 xl:space-y-0 items-center justify-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-xs md:text-sm mb-10">
        Hover over a skill for currency proficiency
      </h3>

      <div className="grid grid-cols-4 md:grid-cols-5 gap-1 md:gap-5">
        {skills?.slice(0, skills.length / 2).map(skill => (
          <Skill key={skill._id} skill={skill} directionLeft={false} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map(skill => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
