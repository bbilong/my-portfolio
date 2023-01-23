import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { urlFor } from '@lib/sanity.client';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';
import ContactMe from '../components/ContactMe/ContactMe';
import WorkExperience from '../components/WorkExperience/WorkExperience';
import { Experience, PageInfo, Project, Skill, Social } from '../typings';
import {
  fetchExperiences,
  fetchPageInfo,
  fetchProjects,
  fetchSkills,
  fetchSocials,
} from '../utils';

type Props = {
  skills: Skill[];
  socials: Social[];
  pageInfo: PageInfo;
  projects: Project[];
  experiences: Experience[];
};

const Home = ({ skills, socials, pageInfo, projects, experiences }: Props) => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll
    overflow-x-hidden z-0 scrollbar scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20"
    >
      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
      </Head>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="hidden md:block sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-6 w-6 md:h-10 md:w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src={urlFor(pageInfo?.heroImage).url()}
              alt={pageInfo?.name}
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();
  const pageInfo: PageInfo = await fetchPageInfo();
  const projects: Project[] = await fetchProjects();
  const experiences: Experience[] = await fetchExperiences();

  return {
    props: {
      skills,
      socials,
      pageInfo,
      projects,
      experiences,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
};
