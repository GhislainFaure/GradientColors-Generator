import "./style.scss";

export default function RandomButtons() {
  return (
    <div className="buttons group">
      <button type="button" className="button" id="randFirst">
        Random First
      </button>
      <button type="button" className="button" id="randAll">
        Random All
      </button>
      <button type="button" className="button" id="randLast">
        Random Last
      </button>
    </div>
  );
}
