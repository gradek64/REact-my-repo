import React, { useReducer } from 'react';
import Info from './Info';

const initialList = {
  items: [
    { title: 'title1' },
    { title: 'title2' },
    { title: 'title3' },
    { title: 'title4' },
  ],
};

export { initialList };

const listReducer = (state, action) => {
  switch (action.type) {
    /* eslint-disable no-case-declarations */
    case 'REMOVE_ITEM':
      const order = state.items.findIndex(
        ({ title }) => title === action.title
      );
      state.items.splice(order, 1);
      return { items: [...state.items] };
    default:
      return state;
  }
};

const AppLocalRedux = () => {
  //useReducer is just the same state mananagement as useState()
  //but allows you to deal with more complicated state as object state
  const [list, dispatchAction] = useReducer(listReducer, initialList);

  return (
    <div style={{ border: '1px dashed green' }}>
      <Info items={list.items.length} />
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
    </div>
  );
};

export default AppLocalRedux;
