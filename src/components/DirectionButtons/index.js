import Button from "../Button";
import "./style.scss";

export default function DirectionButtons() {
  return (
    <div className="buttons group">
      <Button>to Left</Button>
      <Button>to 45</Button>
      <Button>to 135</Button>
      <Button>to 225</Button>
      <Button>to 315</Button>
      <Button>to Right</Button>
    </div>
  );
}
