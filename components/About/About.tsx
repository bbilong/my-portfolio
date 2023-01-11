import { motion } from 'framer-motion';
import { urlFor } from "@lib/sanity.client";
import { PageInfo } from "../../typings";

type Props = {
  pageInfo: PageInfo,
};

const About = ({ pageInfo }: Props) => {
  const { backgroundInformation, profilePic } = pageInfo;

  return (
    <div className="flex flex-col relative h-screen text-center
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={urlFor(profilePic).url()}
        alt="profilePic"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">{backgroundInformation}</p>
      </div>
    </div>
  );
}

export default About;
