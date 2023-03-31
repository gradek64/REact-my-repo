import { fetchPopularRepos } from "../../api";

// 2 functions need to be supplied (classic thunk function)
export const fetchData = (afterLastSlash) => async (dispatch) => {
  //needs to return promise for final Promise.all([promises]) in ssr.js
  const res = await fetchPopularRepos(afterLastSlash[0]);
  dispatch({ type: "STORE_DATA", payload: { data: res } });
};
