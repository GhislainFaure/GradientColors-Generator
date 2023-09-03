// le store est une entité gardien du state
import { createStore } from "redux";
import reducer from "../reducer";

// le store est le gardient du state , objet qui contient 5 méthodes mais nous n'en utiliserons que 3
// getState dispatch et subscribe
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
