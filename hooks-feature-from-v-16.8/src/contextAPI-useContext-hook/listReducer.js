

const listReducer = (state, action) => {
  switch (action.type) {
  /* eslint-disable no-case-declarations */
  case 'REMOVE_ITEM':
    const order = state.items.findIndex(({ title }) => title === action.title);
    state.items.splice(order, 1);
    return { items: [...state.items] };
  default:
    return state;
  }
};

export { listReducer };
