import React from "react";
import { useParams } from "react-router-dom";
import nestedRoutesData from "../../../data/nestedRoutesData";

const Topic = () => {
  const { topicId } = useParams();

  const topic = nestedRoutesData.find(
    ({ topicRoute }) => topicRoute === topicId
  );
  const { resources } = topic;

  return (
    <div>
      <h3>{resources.name}</h3>
      <p>{resources.description}</p>
    </div>
  );
};

export default Topic;
