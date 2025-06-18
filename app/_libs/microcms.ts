import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries, MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type Skill = {
    logo: MicroCMSImage;
    logoname: string;
    skilldescription: string;
} & MicroCMSListContent;

export type News = {
  image: MicroCMSImage;
  title: string;
  content: string;
} & MicroCMSListContent;

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || " ", // will error if not set
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || " ",
});

export const getSkillsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Skill>({
    endpoint: "skills",
    queries,
  });
  return listData;
};

export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<News>({
    endpoint: "news",
    queries,
  });
  return listData;
} 