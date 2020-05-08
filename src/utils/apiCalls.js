import { getCleanTitleFromPath } from "./stringUtils";

export const LoadArticlesData = () => {
  const url = new URL("https://api.chartbeat.com/live/toppages/v3/");
  const endpointConfig = {
    apikey: "489ca5d5c6e07f057ec7d9a6a69be9d8",
    host: "eluniverso.com",
    limit: 1000,
  };
  url.search = new URLSearchParams(endpointConfig).toString();
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      /**
       * Considerations for the endpoint result:
       * - Also articles with no section are ommitted
       * - When the article has an empty title, get the title from the path
       * - There is no "unique id" for each one of the articles,
       *   generate a provisional id when rendering the list
       */
      const { pages } = json;
      return Promise.resolve(
        pages
          .filter(
            (el) => el.stats.article > 0 || !el.sections.includes("no section")
          )
          .sort((a, b) => b.stats.visits - a.stats.visits)
          .map((el) => ({
            visits: el.stats.visits,
            article: el.stats.article,
            sections: el.sections,
            title: el.title === "" ? getCleanTitleFromPath(el.path) : el.title, // override if title is empty
            path: el.path,
          }))
      );
    });
};
