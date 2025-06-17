// 
import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries, MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type Skill = {
    logo: MicroCMSImage;
    logoname: string;
    skilldescription: string;
} & MicroCMSListContent;

// Use NEXT_PUBLIC_ prefixed variables
const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || '',
});

export const getSkillsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Skill>({
    endpoint: "skills",
    queries,
  });
  return listData;
};