import { useDispatch } from "react-redux";
import Button from "../Button";
import { changeDirection } from "../../actions";

import "./style.scss";

export default function DirectionButtons() {
  const dispatch = useDispatch();
  const handleClick = (direction) => () => {
    const action = changeDirection(direction);
    dispatch(action);
  };

  return (
    <div className="buttons group">
      <Button onClick={handleClick("270deg")}>to Left</Button>
      <Button onClick={handleClick("45deg")}>to 45</Button>
      <Button onClick={handleClick("135deg")}>to 135</Button>
      <Button onClick={handleClick("225deg")}>to 225</Button>
      <Button onClick={handleClick("315deg")}>to 315</Button>
      <Button onClick={handleClick("90deg")}>to Right</Button>
    </div>
  );
}
