import { motion } from 'framer-motion';
import { urlFor } from '@lib/sanity.client';
import { Skill } from '../../../typings';

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
  const { image, progress, title } = skill;

  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        src={urlFor(image).url()}
        alt={title}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32
        filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 z-0
      ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
