const initialState = {
  count: "tes",
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE": {
      const incrementCount = state.count + action.data;

      return {
        ...state,
        count: incrementCount,
      };
    }
    case "DECREASE": {
      const decrementCount = state.count - 1;

      return {
        ...state,
        count: decrementCount,
      };
    }
    case "RESET": {
      return {
        ...state,
        count: 5,
      };
    }
    default: {
      return state;
    }
  }
};

export default counter;
