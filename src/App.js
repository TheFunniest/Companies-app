import "./App.css";
import React from "react";
import { Provider } from "./context";
import { Header } from "./components/Header";
import { Info } from "./components/Info/info";
import { ListItems } from "./components/list-items/listItems";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Provider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <ListItems />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
