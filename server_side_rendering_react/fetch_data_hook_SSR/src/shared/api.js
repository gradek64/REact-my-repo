import fetch from 'isomorphic-fetch';

//this particular fetch 'isomorphic-fetch' allows you to fetch data either on server or client

export function fetchPopularRepos(language = 'all') {
  const encodedURI = encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );

  return fetch(encodedURI)
    .then(data => data.json())
    .then(repos => repos.items)
    .catch(error => {
      console.warn(error);
      return null;
    });
}
