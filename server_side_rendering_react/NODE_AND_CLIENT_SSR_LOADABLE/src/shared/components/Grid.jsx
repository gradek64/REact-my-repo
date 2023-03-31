import React, { useState, useEffect } from "react";

const Grid = (props) => { 

  const [loading, isLoading]  = useState(true)
  const [repos, laodRepos]  = useState(null)
 /* 
    //__isBrowser__ id defined in webpack.config as global
    if (__isBrowser__) {
      repos = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      repos = this.props.staticContext.data;
    } */
  

   useEffect(()=>{
        isLoading(true)

        props.fetchInitialData(props.match.params.id).then((repos) =>{
          console.log(props.match.params.id)
          laodRepos(repos);
          isLoading(false);
        })

    },[props.match.params.id]) 

    return (
      <>
      {loading && <p>LOADING</p>}
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {!loading && repos.map(({ name, owner, stargazers_count, html_url }) => (
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
      </>
    );

}


Grid.getInitialActions = ({ req, match }) => {
  const { id } = match.params
  const cookie = req.get('cookie') || ''

  return GET_COLLECTION_SNAPSHOT({ id, cookie })
}

export default Grid;
