import React, { useEffect } from 'react';

const TitleChild = (props) => {
  const { title } = props;
  return (
    <>
      <h6>{`this is title is for hook ${title}`}</h6>
    </>
  );
};

//this only should be used for component that dont get external state only props
export default React.memo(TitleChild);
