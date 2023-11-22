import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

//thunk redux action
// import { fetchData } from "../Redux/actions/actions";

const Grid = (props) => {
  //this state has been generated in server site (ssr.js)
  const repos = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const { repo_name } = useParams();

  useEffect(() => {
    //check if data has been already fetched on server
    //in this case since state.data is shared between routes
    //u need check if global webpack const is __isBrowser__ set
    if (__isBrowser__) {
      // dispatch(fetchData(repo_name));
    }
  }, [repo_name, dispatch]); //check based on param change

  return (
    <>
      {repos && (
        <ul style={{ display: "flex", flexWrap: "wrap" }}>
          {repos.map(({ name, owner, stargazers_count, html_url }) => (
            <li key={name} style={{ margin: 30 }}>
              <ul>
                <li>
                  <a href={html_url}>{name}</a>
                </li>
                <li>@{owner.login}</li>
                <li>{stargazers_count} stars</li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

Grid.getInitialActions = ({ req, match }) => {
  const { headers = {} } = req;
  //this does not work for me popular/:id = req.param.id
  const textAfterLastSlash = req.url.match(/[^\/]+$/);
  // const { cookie = null } = headers;

  //pass cookie to first thunk method
  return fetchData(textAfterLastSlash);
};
export default Grid;
