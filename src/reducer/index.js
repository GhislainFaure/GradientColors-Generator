import {
  RANDOM_FIRST_COLOR,
  RANDOM_LAST_COLOR,
  CHANGE_DIRECTION,
} from "../actions";

const initialState = {
  firstColor: "#e367a4",
  lastColor: "#48b1f3",
  direction: "90deg",
  nbColors: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_DIRECTION: {
      return {
        ...state,
        direction: action.direction,
      };
    }

    case RANDOM_LAST_COLOR: {
      return {
        ...state,
        nbColors: state.nbColors + 1,
        lastColor: action.lastColor,
      };
    }
    case RANDOM_FIRST_COLOR: {
      return {
        ...state,
        nbColors: state.nbColors + 1,
        firstColor: action.firstColor,
      };
    }

    default:
      return state;
  }
};

export default reducer;
