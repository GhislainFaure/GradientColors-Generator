import { useSelector } from "react-redux";
import "./style.scss";

export default function NbColors() {
  const nbColors = useSelector((state) => {
    return state.nbColors;
  });
  return <div className="nbColors">{nbColors} couleur(s) générée(s)</div>;
}
