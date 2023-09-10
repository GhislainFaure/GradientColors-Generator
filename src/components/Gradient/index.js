import { useSelector } from "react-redux";
import "./style.scss";
import { useEffect } from "react";
export default function Gradient() {
  const { direction, firstColor, lastColor } = useSelector((state) => ({
    direction: state.direction,
    firstColor: state.firstColor,
    lastColor: state.lastColor,
  }));
  return (
    <div
      id="gradient"
      style={{
        background: `linear-gradient(${direction},${firstColor},${lastColor})`,
      }}
    />
  );
}
