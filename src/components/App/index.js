// == Import
import NbColors from "../NbColors";
import RandomButtons from "../RandomButtons";
import Colors from "../Colors";
import Gradient from "../Gradient";
import DirectionButtons from "../DirectionButtons";

import "./style.scss";

// == Composant
export default function App() {
  return (
    <div className="app">
      <NbColors />
      <RandomButtons />
      <Colors />
      <Gradient />
      <DirectionButtons />
    </div>
  );
}
