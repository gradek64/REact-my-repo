import React, { useContext } from 'react';
// custom;
import { SectionContext } from './index';

const List = () => {
  const { list, dispatchAction } = useContext(SectionContext);

  return (
    <div>
      {list.items.map(({ title }, i) => (
        <div key={`keys${i}`}>
          <span>title</span>
          <button
            type="button"
            onClick={() => dispatchAction({ type: 'REMOVE_ITEM', title })}
          >
            remove
          </button>
        </div>
      ))}
    </div>
  );
};
export default List;
