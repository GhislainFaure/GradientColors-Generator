import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./components/App";

const rootElement = (
  <StrictMode>
    <App />
  </StrictMode>
);

render(rootElement, document.getElementById("root"));
