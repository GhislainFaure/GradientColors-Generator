// == Imports

import { generateSpanColor } from "./utils";
import store from "./store";
import {
  randomizeFirstColor,
  randomizeLastColor,
  changeDirection,
} from "./actions";

// == Rendu dans le DOM
function renderNbColors() {
  const { nbColors } = store.getState();

  document.getElementById("nbColors").innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

  document.getElementById("gradient").style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const { firstColor, lastColor } = store.getState();

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.getElementById("colors").innerHTML = result;
}

// == Initialisation
renderNbColors();
renderGradient();
renderColors();
// je m'abonne aux changements de state
store.subscribe(renderNbColors);
store.subscribe(renderGradient);
store.subscribe(renderColors);
// == Controls
document.getElementById("randAll").addEventListener("click", () => {
  // objectif de la journée
  // alexa(faitMoiCa);
  store.dispatch(randomizeFirstColor());
  store.dispatch(randomizeLastColor());
  // debug
  console.log("Random all colors");
  // data
  // ui
});

document.getElementById("randFirst").addEventListener("click", () => {
  store.dispatch(randomizeFirstColor());
});

document.getElementById("randLast").addEventListener("click", () => {
  store.dispatch(randomizeLastColor());
});

document.getElementById("toLeft").addEventListener("click", () => {
  store.dispatch(changeDirection("270deg"));
});

document.getElementById("toRight").addEventListener("click", () => {
  store.dispatch(changeDirection("90deg"));
});
document.getElementById("to45").addEventListener("click", () => {
  store.dispatch(changeDirection("45deg"));
});
document.getElementById("to135").addEventListener("click", () => {
  store.dispatch(changeDirection("135deg"));
});
document.getElementById("to225").addEventListener("click", () => {
  store.dispatch(changeDirection("225deg"));
});
document.getElementById("to315").addEventListener("click", () => {
  store.dispatch(changeDirection("315deg"));
});
