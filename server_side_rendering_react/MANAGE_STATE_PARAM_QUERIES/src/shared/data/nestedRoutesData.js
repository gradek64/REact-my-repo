const nestedRoutesData = [
  {
    description: "how the <Link> tag works ?",
    topicRoute: "linkTag",
    resources: {
      name: "<Link> tag",
      description:
        "Link tag it will always work on client and does not reload the page",
    },
  },
  {
    description: "how the the <a> tags work ?",
    topicRoute: "aTag",
    resources: {
      name: "<a> tag",
      description: "a tag will always reload the page causing server to re-run",
    },
  },
  {
    description: "const {url} =useRouteMatch() hook",
    topicRoute: "read-url-parameters",
    resources: {
      name: "const {url} = useRouteMatch()",
      description:
        "{url} used for nested links, cause ti will return something as: topics/react-router",
    },
  },
  {
    description: "const {path} =useRouteMatch() hook",
    topicRoute: "read-path-parameters",
    resources: {
      name: "const {path} = useRouteMatch()",
      description:
        "{path} used for nested routes, cause it will retain param as  path/:topicId",
    },
  },
  {
    description: "const {topicId} = useParams() hook",
    topicRoute: "read-params",
    resources: {
      name: "const {topicId} = useParams()",
      description: "used for getting /:topicId param ",
    },
  },
];

export default nestedRoutesData;
