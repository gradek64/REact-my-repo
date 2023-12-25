const initialState = [];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_DATA":
      return action.payload.data;
    default:
      return state;
  }
};

export default dataReducer;

//structure
//dataReducer = []
/*
  data:dataReducer
*/