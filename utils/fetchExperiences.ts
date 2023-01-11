import { Experience } from '../typings';

export const fetchExperiences = async (): Promise<Experience[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`,
  );

  const data = await res.json();

  return data?.experiences;
};
