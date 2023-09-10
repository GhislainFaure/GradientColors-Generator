import { StrictMode } from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";
import store from "./store";
import App from "./components/App";

const rootElement = (
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

render(rootElement, document.getElementById("root"));
