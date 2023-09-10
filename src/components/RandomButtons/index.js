import { useDispatch } from "react-redux";
import "./style.scss";
import { randomizeFirstColor, randomizeLastColor } from "../../actions";

export default function RandomButtons() {
  // useDispatch nous fournit la méthode dispatch du store
  const dispatch = useDispatch();
  const handleClickFirst = () => {
    dispatch(randomizeFirstColor());
  };
  const handleClickLast = () => {
    dispatch(randomizeLastColor());
  };
  const handleClickAll = () => {
    dispatch(randomizeFirstColor());
    dispatch(randomizeLastColor());
  };

  return (
    <div className="buttons group">
      <button
        onClick={handleClickFirst}
        type="button"
        className="button"
        id="randFirst"
      >
        Random First
      </button>
      <button
        onClick={handleClickAll}
        type="button"
        className="button"
        id="randAll"
      >
        Random All
      </button>
      <button
        onClick={handleClickLast}
        type="button"
        className="button"
        id="randLast"
      >
        Random Last
      </button>
    </div>
  );
}
