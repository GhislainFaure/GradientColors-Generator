import { useSelector } from "react-redux";
import "./style.scss";
export default function Colors() {
  const firstColor = useSelector((state) => {
    return state.firstColor;
  });
  const lastColor = useSelector((state) => {
    return state.lastColor;
  });
  return (
    <div id="colors">
      <span style={{ color: firstColor }}>{firstColor}</span>-
      <span style={{ color: lastColor }}>{lastColor}</span>
    </div>
  );
}
