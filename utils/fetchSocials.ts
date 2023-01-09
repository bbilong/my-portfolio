import { Social } from "../typings";

export const fetchSocials = async (): Promise<Social[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

  const data = await res.json();
  const socials: Social[] = data?.socials;

  console.log(`fetching => ${JSON.stringify(socials)}`);

  return socials;
};
