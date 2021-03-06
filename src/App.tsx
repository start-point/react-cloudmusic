import React from "react";
import { BrowserRouter } from "react-router-dom";

import { storeContext } from "./hooks/use";
import Main from "./Main";
import store from "./store";

const App = () => {
  return (
    <storeContext.Provider value={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </storeContext.Provider>
  );
};

export default App;
