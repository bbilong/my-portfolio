import uuid from 'react-uuid';
import { motion } from 'framer-motion';
import { urlFor } from '@lib/sanity.client';
import { Experience } from '../../../typings';

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  const {
    points,
    company,
    jobTitle,
    endDate,
    startDate,
    technologies,
    companyImage,
    isCurrentlyWorkingHere,
  } = experience;

  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-4 md:space-y-7 flex-shrink-0
    w-[300px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100
    cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-12 h-12 ml-24 md:w-40 md:h-40 rounded-full object-cover object-center"
        src={urlFor(companyImage).url()}
        alt="companyImage"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-lg md:text-4xl font-light">{jobTitle}</h4>
        <p className="font-bold text-xs md:text-2xl mt-1">{company}</p>
        <div className="grid grid-cols-8 md:flex md:space-x-2 my-2">
          {technologies.map(technology => (
            <img
              key={technology._id}
              className="h-5 w-5 md:h-10 md:w-10 rounded-full"
              src={urlFor(technology?.image).url()}
              alt={technology?.title}
            />
          ))}
        </div>
        <p className="uppercase text-xs md:text-lg py-5 text-gray-300">
          {new Date(startDate).toLocaleDateString()} -{' '}
          {isCurrentlyWorkingHere
            ? 'Present'
            : new Date(endDate).toLocaleDateString()}
        </p>

        <ul
          className="list-disc sm:my-5 space-y-4 text-xs md:text-lg max-h-96 p-5 overflow-y-scroll
        scrollbar scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-black"
        >
          {points.map(point => (
            <li key={uuid()}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
