import fetch from "isomorphic-fetch";
import logger from "node-color-log";

export function fetchPopularRepos(language = "all") {
  const encodedURI = encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );
  logger.color("yellow").bold().log("GET:", encodedURI);

  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos.items)
    .catch((error) => {
      console.warn(error);
      return null;
    });
}
