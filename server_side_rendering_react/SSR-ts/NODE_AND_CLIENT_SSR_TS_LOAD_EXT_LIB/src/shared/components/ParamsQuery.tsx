import React, { useState, useEffect, useMemo } from "react";
// useHistory allows to set query params by history.push {search:string}
// useLocation allows to get query params get search object and do something with them
import { useLocation, useHistory } from 'react-router-dom'
import { updateQueryProperty, readQueryProperty, createQueryString, queryStringToObject } from '../../shared/helperMethods'
export default function Home() {
  const history = useHistory();

  function setQueryParams(queryString: string) {
    history.push({
      search: queryString
    });
  };

  // get the search (query string) from the location
  const { search } = useLocation()

  // 1 if search object exists then convert search string to object
  const queryParamsObj = useMemo(() => queryStringToObject(search), [search]);

  // 2.1 update local state from url params if params exists 
  const [language, setLanguage] = useState(readQueryProperty('language', queryParamsObj) || "")
  const [age, setAge] = useState(readQueryProperty('age', queryParamsObj) || "")

  // 2.2 update local state based on user radio button click 
  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    //update url query param
    if (name === 'fav_language') {
      //update state
      setLanguage(value)
      const updateQueryObject = updateQueryProperty('language', value, queryParamsObj)
      //update url with new string query pushed to history 
      setQueryParams(createQueryString(updateQueryObject))
    }
    if (name === 'fav_age') {
      //update state
      setAge(value)
      const updateQueryObject = updateQueryProperty('age', value, queryParamsObj)
      //update url with new string query pushed to history 
      setQueryParams(createQueryString(updateQueryObject))
    }
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <input checked={language === "HTML"} onChange={(e) => onValueChange(e)} type="radio" id="html" name="fav_language" value="HTML" />
        <label htmlFor="html">HTML</label>
      </div>
      <div>
        <input checked={language === "CSS"} onChange={(e) => onValueChange(e)} type="radio" id="css" name="fav_language" value="CSS" />
        <label htmlFor="css">CSS</label>
      </div>
      <div>
        <input checked={language === "JavaScript"} onChange={(e) => onValueChange(e)} type="radio" id="javascript" name="fav_language" value="JavaScript" />
        <label htmlFor="javaScript">JavaScript</label>
      </div>
      <p>tell us your age bracket if you don`t mind</p>
      <div>
        <input checked={age === "below18"} onChange={(e) => onValueChange(e)} type="radio" name="fav_age" value="below18" />
        <label htmlFor="html">below 18</label>
      </div>
      <div>
        <input checked={age === "above18"} onChange={(e) => onValueChange(e)} type="radio" name="fav_age" value="above18" />
        <label htmlFor="css">above 18</label>
      </div>
    </form >
  );
}
