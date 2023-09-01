const initialState = {
  firstColor: "#e367a4",
  lastColor: "#48b1f3",
  direction: "90deg",
  nbColors: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "CHANGE_DIRECTION_TO_RIGHT": {
      return {
        ...state,
        direction: "270deg",
      };
    }
    default:
      return state;
  }
};

export default reducer;
