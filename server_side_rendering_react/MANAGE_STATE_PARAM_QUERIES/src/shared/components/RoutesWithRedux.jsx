import React from "react";
import { Route, Link, useRouteMatch, useParams } from "react-router-dom";
//sample data and components
import nestedRoutesData from "../data/nestedRoutesData";

export default function Home() {
  // this hook returns up to now url for nested routes
  // in this case the parent route is /nested-routes
  const { url: upToNowUrl } = useRouteMatch();

  const languages = [
    {
      name: "All",
      param: "all",
    },
    {
      name: "JavaScript",
      param: "javascript",
    },
    {
      name: "Ruby",
      param: "ruby",
    },
    {
      name: "Python",
      param: "python",
    },
    {
      name: "Java",
      param: "java",
    },
  ];

  const TopLanguagesNavBar = () =>
    languages.map(({ name, param }) => (
      <li key={param}>
        <a href={`/popular/${param}`}>{name}</a>
      </li>
    ));

  return (
    <div>
      <hr />
      <h3>Languages</h3>
      <TopLanguagesNavBar />
      <h3> Client NaV link with redux example</h3>
      <Link to={`/popular/javascript`}>Nav Link javascript with Redux</Link>
    </div>
  );
}
