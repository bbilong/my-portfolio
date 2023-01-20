import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '@lib/sanity.client';
import { Project as ProjectType } from '../../../typings';

type Props = {
  index: number;
  project: ProjectType;
  projectLength: number;
};
const Project = ({ index, project, projectLength }: Props) => {
  const { title, image, summary, technologies } = project;

  return (
    <motion.div
      className="h-screen w-screen flex flex-col flex-shrink-0 snap-center space-y-5 items-center
            justify-center p-20 md:p-44"
    >
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={urlFor(image).url()}
        alt={title}
      />

      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-xl md:text-4xl font-semibold text-center">
          <span className="underline decoration-[#F7AB0A]/50">
            Case Study {index + 1} of {projectLength} :
          </span>{' '}
          {project?.title}
        </h4>

        <div className="flex items-center space-x-2 justify-center">
          {technologies.map(technology => (
            <img
              key={technology?._id}
              className="h-5 w-5 md:h-10 md:w-10 rounded-full"
              src={urlFor(technology?.image).url()}
              alt={technology?.title}
            />
          ))}
        </div>

        <p className="text-sm md:text-lg text-center md:text-left">{summary}</p>
      </div>
    </motion.div>
  );
};

export default Project;
