import { THeroQuery } from "@/types";
import { contentGqlFetcher } from "./fetch";

export const getContentForHero = async () => {
  const query = `#graphql
    query HeroQuery {
        heroCollection {
            items {
            title,
            subtitle
            preTitle
            callToActionsCollection {
                items {
                link
                label
                }
            }
            }
        }
    }`;

  const data = await contentGqlFetcher<THeroQuery>({ query });

  if (!data) {
    throw Error("ooops");
  }

  return data;
};
