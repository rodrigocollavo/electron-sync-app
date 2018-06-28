import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Main from "./components/Main";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
