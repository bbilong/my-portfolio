import {PageInfo} from "../typings";

export const fetchPageInfo = async (): Promise<PageInfo> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);

  const data = await res.json();

  return data?.pageInfo;
};
