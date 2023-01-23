import { motion } from 'framer-motion';
import { urlFor } from '@lib/sanity.client';
import { Skill as SkillType } from '../../../typings';

type Props = {
  skill: SkillType;
  directionLeft: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
  const { image, progress, title } = skill;

  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        src={urlFor(image).url()}
        alt={title}
        className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-32 md:h-32
        filter group-hover:grayscale ease-in-out"
      />

      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 z-0
      ease-in-out group-hover:bg-white h-16 w-16 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-lg md:text-3xl font-bold text-black opacity-100">
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
