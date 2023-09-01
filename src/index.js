// == Imports

import { randomHexColor, generateSpanColor } from "./utils";
import store from "./store";

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

// == Controls
document.getElementById("randAll").addEventListener("click", () => {
  // objectif de la journée
  // alexa(faitMoiCa);

  // debug
  console.log("Random all colors");
  // data
  state.nbColors += 2;
  state.firstColor = randomHexColor();
  state.lastColor = randomHexColor();
  // ui
  renderNbColors();
  renderGradient();
  renderColors();
});

document.getElementById("randFirst").addEventListener("click", () => {
  state.nbColors += 1;
  state.firstColor = randomHexColor();
  renderNbColors();
  renderGradient();
  renderColors();
});

document.getElementById("randLast").addEventListener("click", () => {
  state.nbColors += 1;
  state.lastColor = randomHexColor();
  renderNbColors();
  renderGradient();
  renderColors();
});

document.getElementById("toLeft").addEventListener("click", () => {
  state.direction = "270deg";
  renderGradient();
  renderColors();
});

document.getElementById("toRight").addEventListener("click", () => {
  //state.direction = '90deg';
  //lorsqu'on veut modifier le state on passe par la méthode dispatch du store
  //cette méthode prend en argument une action , un objet qui doit avoir une propriété "type"
  //   state.direction = "90deg";
  store.dispatch({ type: "CHANGE_DIRECTION_TO_RIGHT" });
  renderGradient();
  renderColors();
});
