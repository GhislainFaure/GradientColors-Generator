import { randomHexColor } from "../utils";

export const RANDOM_FIRST_COLOR = "RANDOM_FIRST_COLOR";
export const RANDOM_LAST_COLOR = "RANDOM_LAST_COLOR";
export const CHANGE_DIRECTION = "CHANGE_DIRECTION";

export const randomizeFirstColor = () => ({
  type: RANDOM_FIRST_COLOR,
  firstColor: randomHexColor(),
});

export const randomizeLastColor = () => ({
  type: RANDOM_LAST_COLOR,
  lastColor: randomHexColor(),
});
export const changeDirection = (direction) => ({
  type: CHANGE_DIRECTION,
  direction,
});
