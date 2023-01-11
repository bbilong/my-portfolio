import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { urlFor } from '@lib/sanity.client';
import BackgroundCircles from '../BackgroundCircles/BackgroundCircles';
import { PageInfo } from '../../typings';

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const { heroImage, name, role } = pageInfo;

  const [text] = useTypewriter({
    words: [
      `Hi, I'm ${name}`,
      'Guy-who-loves-Learn.tsx',
      '<ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src={urlFor(heroImage).url()}
        alt="heroImage"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
          {role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button type="button" className="heroButton">
              About
            </button>
          </Link>
          <Link href="#experience">
            <button type="button" className="heroButton">
              Experience
            </button>
          </Link>
          <Link href="#skills">
            <button type="button" className="heroButton">
              Skills
            </button>
          </Link>
          <Link href="#projects">
            <button type="button" className="heroButton">
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
